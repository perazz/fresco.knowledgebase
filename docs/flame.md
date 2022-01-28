---
id: flame
title: Flame propagation modeling 
description: Basics of flame propagation modelling.
---

## Flame propagation model setup

FRESCO's flame propagation modeling approach is described by an _ignition_ model and by a _flame_ model. The ignition model covers spark plug behavior and all aspects related to the early, laminar, kernel development stage; the flame model models the fully-developed flame front.
Settings for both are found in the `input.combustion.flame` section of the Matlab input structure: 

```{octave}

     flameModel: 0              % Flame propagation model switch 
    kernelModel: 0              % Ignition model switch 
         solver: [1×1 struct]   % FV Solver settings
           GEqn: [1×1 struct]   % G-Equation specific settings
      sparkPlug: [1×1 struct]   % Ignition model-specific settings 
          speed: [1×1 struct]   % Laminar flame speed
         quench: [1×1 struct]   % Wall BC model 

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

## Flame model selection

Flame propagation can either be unactive, or follow the G-Equation model. This is simply set by switching: 

```{octave}
    input.combustion.flame.flameModel = 0;  % no flame model
	input.combustion.flame.flameModel = 1;  % G-Equation flame model
```

Instead of an integer switch, `itapeFlame` contains a name string: 

```
flameModel none	
```
means no flame model active; 

```
flameModel G-equation
```
means G-Equation flame propagation model.

## Kernel model selection

Similarly, a kernel model can be of three types: unactive, spherical (`DPIK`), or ignition-based (`CEMA`). This is simply set by switching: 

```{octave}
    input.combustion.flame.kernelModel = 0;  % no kernel model
	input.combustion.flame.kernelModel = 1;  % DPIK kernel model 
	input.combustion.flame.kernelModel = 2;  % CEMA kernel model 
```

Instead of an integer switch, `itapeFlame` contains a name string: 

```
flameModel none	
```
means no flame model active; 

```
flameModel G-equation
```
means G-Equation flame propagation model

### Laminar flame speed




## References
<a id="1" href="https://journals.sagepub.com/doi/full/10.1177/0954407019898062">[1]</a> 
F. Perini, S. Busch, R.D.Reitz.
A phenomenological rate of injection model for predicting fuel injection with application to mixture formation in light-duty engines.
Proc ImechE Part D: J Automobile Engineering 234(7), 1826-1839, 2020. 
doi:10.1177/0954407019898062.

