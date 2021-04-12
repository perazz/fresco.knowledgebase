---
id: spray
title: Spray modeling 
description: Basics of spray model settings.
---

## Spray behavior: sub-model switches

Sub-model input is necessary to define the behavior of the `sprayCloud` object. 
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

In the ASCII input file structure, spray model behavior is set via these same switches as part of the `itape5` file: 

``` title="itape5"

   pulse 3.000000         ! Rate of injection model                 
 injdist 0                ! Injected Size Distribution model                
  kolide 1                ! Collision Model switch
    turb 1.000000         ! Turbulence dispersion model switch                
 breakup 1.000000         ! Breakup model switch
   evapp 0.000000         ! Vaporization model switch                

``` 

Before each simulation, it is good practice to check that all these model flags are properly set. For example, in the example above here, the vaporization model is turned *off* by the `evapp = 0.0` setting.

Additional flags for each model then specifically define its behavior.


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

import ROImodelSensitivity from '@site/static/img/spray_ROI_sensitivity.svg';
<ROImodelSensitivity title="ROI model sensitivity" className="logo" />;

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

## Collision 


## Breakup

## Vaporization





## References
<a id="1" href="https://journals.sagepub.com/doi/full/10.1177/0954407019898062">[1]</a> 
F. Perini, S. Busch, R.D.Reitz.
A phenomenological rate of injection model for predicting fuel injection with application to mixture formation in light-duty engines.
Proc ImechE Part D: J Automobile Engineering 234(7), 1826-1839, 2020. 
doi:10.1177/0954407019898062