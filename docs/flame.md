---
id: flame
title: Flame propagation modeling 
description: Basics of flame propagation modelling.
---

## Flame propagation model setup

FRESCO's flame propagation modeling features three different 
With the current legacy input format, model inputs are somewhat scattered across input files.
Model selection is generally done via switches, either of the boolean type (`1=ON; 0=OFF`), or of the enumerator type (`0=OFF; 1=model1; 2=model2,...`).

In the Matlab input structure, we have: 

```{octave}


input.spray.injection.pulse;         % Rate of injection model
input.spray.injection.injdist;       % Injection Size Distribution model
input.spray.collision.active;        % Collision model switch (on/off)
input.spray.dynamics.turb;           % Turbulent drop dispersion model switch (on/off)
input.spray.breakup.active;          % Breakup model switch (on/off)
input.spray.evaporation.active;      % Vaporization model switch (on/off)


```

The corresponding flame model's ASCII input file structure is named `itapeFlame`: 

``` title="itapeFlame"

flameModel          none                ! flame model. "none", "G-Equation"
kernelModel         none                ! kernel model. "none", "DPIK", "CEMA" 
explicitFlux        no                  ! fluxing. "yes" explicit source; "no" subcycled momflx
explicitCompression yes                 ! compressibility. "yes" explicit, via Tb/Tu; "no" use ALE Phase B
reinitSDF           yes                 ! reinitialization. "yes" use accurate SDF, "no" use approximate PDE
unburntComposition  optimalMix          ! unburnt composition for chemistry. "ahead"=fully unburnt; "samecell"; "optimalMix"
diffuse             ENTHALPY            ! diffusion coefficient: "ENTHALPY" use Prt; "MASS" use Sct; "0.1234" use custom value
cm4                 1.50000E+001        ! flame brush thickness timescale constant (cm4_uw, def=15.0)
b1                  2.00000E+000        ! turbulent flame thickness parameter (b1, def=2.00)
b2                  1.78000E+000        ! turbulent flame thickness parameter (b2, def=1.78)
b3                  1.00000E+000        ! turbulent flame thickness parameter (b3, def=1.00)
lFmult              1.00000E+000        ! laminar flame thickness diffusivity multiplier (def=1.0)
EGR                 -1.00000E+000       ! charge dilution method: <0=composition-esimated; [0:1] user-defined fixed mass fraction (def=-1.0)
quenchModel         NONE                ! wall quenching model: 0=NONE; 1=Suckart-Linse; 2=Ranasinghe-Malalasekera
quenchPeclet        Westbrook           ! quenching distance model: [1.234] provide constant Peclet number; "Westbrook": PeQ=f(p,phi)
channelPts          1                   ! number of spark-channel particles
r0                  5.00000E-002        ! kernel: initial radius [cm]
eta_eff             3.00000E-001        ! kernel: thermal discharge coefficient [-]
toFlame             TURBLENGTH    5.00  ! kernel->flame switch. "TURBLENGTH" (follow CM1), "NCELLS" (follow #) 
Qspark              2.00000E+001        ! spark plug electrical power [W]           

``` 

## Rate of injection 

The rate of injection model (`ROI`) applies to all `type(injection)` pulses being setup for fuel injection. This is a non-mandatory keyword, so, it does not matter whenever no injection pulses are present. 


The following settings are possible: 

- `pulse = 0`: No ROI model used. No injection velocity table(s) should be specified.
- `pulse = 1`: Constant (flat) rate of injection. With this injection model, no injection velocity table(s) should be specified, as FRESCO will assume a constant velocity for each pulse.
- `pulse = 3`: ROI table. Injection mass flow rate is specified via a table, which should follow, in `itape5`, all injector specifications. With a fixed number of points (`numvel`, same for all pulses). In the Matlab toolbox, that appears as the array
	```
	input.spray.injection.injections(i).velocity_table
	```
	
- `pulse = 4`: use the Common-Rail Injector model of [[1]](#1); no injection velocity table(s) should be specified.

:::caution

Warning! In FRESCO, an ROI table *always* represents a _scaled_ flow rate of injection, with _any_ scale factor. 
Total injected mass and duration are defined by the pulse's `tspmas` and duration keywords (`t1inj/tdinj` or `ca1inj/cadinj`).
Instantaneous injection velocity is computed by FRESCO internally, based on the assumed or computed nozzle discharge coefficient.
:::

On startup, FRESCO writes a textfile with the details for each injection pulse from each injector, incrementally named `dat.injector_0_injectionPulse_1`, containing: 
- Instantaneous velocity table (`[cm/s]`);
- Instantaneous mass flow rate (`[g/s]`);
- Integral injected mass (`[g]`);
- Integral number of injected computational parcels (per cylinder).

For example: 

```
! 0.3.19
!             time           velinj             mdot      totInjected totNPinjected 
!                s             cm/s              g/s                g    #/cylinder 
   0.00000000E+000  0.00000000E+000  0.00000000E+000  0.00000000E+000             0 
   1.70967742E-005  1.28505660E+004  2.45261578E-001  4.19318182E-006            20 
   3.41935484E-005  2.57011319E+004  7.35784734E-001  1.67727273E-005            79 
   5.12903226E-005  3.85516979E+004  1.22630789E+000  3.77386364E-005           178 
   [...]
```

### Common-Rail Injector Model (`pulse = 4`)

The Common-Rail injector model of [[1]](#1) contains a default calibration for a high-pressure diesel common rail injection system. 
It can be used to test the effects of different nozzle geometries, and injected amounts without worrying about having to define appropriate rates of injection. 

This model responds to changes in nozzle geometry, and fuel physical properties; however, currently, rail pressure cannot be changed as an user input parameter, as it is assumed to be the default value `prail = 1200 bar`.

![Docusaurus](/img/spray_ROI_sensitivity.svg)

The Common-Rail ROI model uses the following inputs: 
- *rail pressure*, assumed fixed `prail = 1200 bar`;
- *fuel liquid density*, computed by the multicomponent fuel model at the injector's fuel composition (see species input in `itape5`, or keyword `input.species.nspl` and `input.species.Yfuel` to determine fuel composition);
- *injected fuel temperature*, from `itape5/tpi` or `input.spray.injection.tpi`;
- *nozzle hole diameter (geometric)*, from the geometric area `input.spray.injection.nozzle(i).anoz`;
- *nozzle discharge coefficient*, from the nozzle setting.
- *number of injected parcels*, from the injection pulse's `tnparc`.

All other parameters will be automatically determined by the model, i.e., any user inputs overridden:
- pulse duration, `tdinj/cadinj';
- ROI table, `velinj`.

## Injected size distribution 

This simple submodel sets the injected parcel's initial size distribution. 

- `injdist = 0`: blob model (recommended for diesel injection with KHRT breakup). All drops are injected at the nozzle's hole size, determined by the `nozzle.smr` keyword.
- `injdist = 1`: Inject a Rosin-Rammler distribution of drops, centered in `nozzle.smr`.

## Collisions

Collision model settings describe drop behavior after drop-to-drop collisions. This is an important model that affects predicted liquid size distribution, and can significantly affect simulation time. 
Model settings are defined in the `input.spray.collision` structure. References for FRESCO collision modeling approaches are [[2]](#2), [[3]](#3).

- `collision.model` is a flag to define the **collision detection method**. FRESCO defines three possible methods for collision detection: 
	- `COLIDE_ELIGIBLE_KDTREE  = 1` (recommended) is [Perini et al.'s](#3) kd-tree accelerated, parallelized ROI collision eligibility method.	
	- `COLIDE_ELIGIBLE_PARABOLA=-1` is [Perini et al.'s](#2) velocity-based ROI collision eligibility method. 
	- `COLIDE_ELIGIBLE_SAMECELL= 0` is O'Rourke same-cell collision detection algorithm: only drops which physically lie within the same computational cell are deemed eligible for collisions. This is a relatively computationally-efficient method, but it introduces severe mesh dependency. 
	
	The parabola ROI eligibility method is the most accurate one; the kd-tree accelerated method was reported to achieve up to one order of magnitude speed-up with respect to the parabola method, in parallel, with virtually no change in predicted spray structure.
	
	Same-cell versus ROI-based collision elegibility detection looks like:
	![Docusaurus](/img/spray_ROI_vs_sameCell.png)
	
- `collision.ROI` defines the region of influence method for the collision detection mode. 



In the ASCII textfile structure, the same collision settings are set in `itapeSpray`, as follows: 

```
1                   ! [Use ROI collision model]                               <=> spray.collision.model 
 0.000e+00          !   (fixed ROI radius value [cm] / dynamic if zero)       <=> spray.collision.ROI 
1                   ! [Use deterministic impact parameter]                    <=> spray.collision.impact_parameter 
1                   ! [Use extended collision outcomes]                       <=> spray.collision.extended_outcomes
```




## Breakup

## Vaporization





## References
<a id="1" href="https://journals.sagepub.com/doi/full/10.1177/0954407019898062">[1]</a> 
F. Perini, S. Busch, R.D.Reitz.
A phenomenological rate of injection model for predicting fuel injection with application to mixture formation in light-duty engines.
Proc ImechE Part D: J Automobile Engineering 234(7), 1826-1839, 2020. 
doi:10.1177/0954407019898062.

