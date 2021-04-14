---
id: spray-gasjet
title: Gas-jet model 
description: How to set up the gas-jet model for an injected spray.
---

## Model description

![Docusaurus](/img/spray_gasjet_model.svg)

The `type(gasjet)` model introduces a sub-grid scale representation of the flow field following a spray injection event, to cope with the under-resolved flow field representation typically surrounding the near-nozzle region in engineering-size engine grids. 
To achieve good field representation near the nozzle, a cell resolution of `O(dnoz/10)` would be needed, which is impractical. 

The [turbulent round-jet model](#1) can predict the instantaneous flow velocity in the surroundings of the injection axis, at any times during and after each injection pulse: 

![Docusaurus](/img/spray_gasjet_model_equations.svg)

The equation represents an exponential response function, where: 
- `x` is the downstream coordinate along the injection axis `[cm]`;
- `r` is the radial coordinate `[cm]` in the plane normal to the injection axis;
- `uinj` is the flow injection velocity at the nozzle `[cm/s]`;
- `uaxis` represents model-predicted velocity along the injection axis `[cm/s]`;
- `usgs` is the model-predicted sgs velocity.
- the Stokes number `St` rules over the response time, i.e., how fast the flow field responds to changes in the injection velocity
- the entrainment constant `Kentr` defines how much the jet will spread out radially depending on turbulent entrainment

:::note

Gas-jet model in FRESCO is automatically applied for each injection pulse, starting from SOI, and until the model is predicting a residual flow velocity that is at least `0.1%` of that pulse's peak injection velocity.

:::


## Model input

Gas-jet model settings can be found in the input structure at: 

```{octave}
input.spray.dynamics.gasjet
```

which contains the following settings: 

```
spray.dynamics.gasjet.model           = 2;
spray.dynamics.gasjet.stokes          = 0.15;
spray.dynamics.gasjet.smooth          = 1;
spray.dynamics.gasjet.smooth_min      = 0.90;
spray.dynamics.gasjet.smooth_max      = 0.95;
spray.dynamics.gasjet.Kentr           = 0.85;
```

### Model selection 

The `gasjet.model` flag has three options: 

- `GASJET_MODEL_NONE = 0` to turn the gas-jet model OFF. any other flags will not be important.
- `GASJET_MODEL_STEADY = 1` to turn on the steady version of the gas-jet model. This will assume that input to the model's response function is a _constant_ injection velocity, equal to the pulse's average velocity;
- `GASJET_MODEL_UNSTEADY = 2` (recommended) to turn on the unsteady-version. This will use the pulse's actual time-varying injection velocity profile, and will compute the time integral using trapezoidal rule. It reduces to the steady version whenever the injection velocity is constant; hence, it is recommended for all cases.

### Stokes number

The Stokes number `gasjet.stokes` represents how fast the liquid particles interact and transfer momentum to the gaseous phase.
In fact, it is assumed to be a ratio between the a normalized turbulent eddy time scale and the particle's response time: 

![Docusaurus](/img/spray_gasjet_stokes_meaning.svg)

[Abani and Reitz](#1) suggest `St = 3` for the steady case. [Perini and Reitz](#2) found that the Stokes number strongly affects the local responsiveness of the model prediction, also affecting peak velocity:

![Docusaurus](/img/spray_gasjet_stokes.svg)

A value of `St = 0.15` is recommended in FRESCO to match ECN Spray A data. Even smaller values were observed to be appropriate, in particular to capture the initial flow field transient after the start of injection.

### Entrainment constant

The entrainment constant `gasjet.Kentr` determines the spread of the gaseous jet. With more entrainment (`Kentr` up), we get lower peak velocity along the injection axis, and more radial spread. Recommended values are: 
- `gasjet.Kentr = 0.70` according to [Abani and Reitz](#1);
- `gasjet.Kentr = 0.85` according to [Perini and Reitz](#2), as the result of a genetic optimization of spray model constants against ECN Spray A data.

![Docusaurus](/img/spray_gasjet_Kentr.svg) 

### Near-nozzle velocity profile smoothing 

It is recommended to always use a numerical smoothing of the model-predicted velocity profile near the injector. 
The following settings determine what happens between the nozzle (x=0) and the start-of-velocity-decay location (x=x0).
Within this range, the model just predicts `u(x<=x0)=uinj`, but that introduces a discontinuity at `x0` that can destabilize the breakup models. 
So, the smoothing function just bends this profile slightly, to make it continuous. It is recommended to use the default values:

- `gasjet.smooth = 1` model switch: `1=ON` (recommended); `0=OFF`;
- `gasjet.smooth_min`: fraction of usgs applied at the nozzle (x=0);
- `gasjet.smooth_max`: fraction of usgs applied at the model's start-of-velocity-decay location(x=x0);
 
![Docusaurus](/img/spray_gasjet_smoothing.svg) 
 
 
## References
<a id="1" href="https://aip.scitation.org/doi/abs/10.1063/1.2821910">[1] </a> 
N. Abani and R.D. Reitz. 
Turbulent Round Jets and vortex Motion
Physics of Fluids 19m 125102, 2007. doi:10.1063/1.2821910 .

<a id="2" href="http://www.sciencedirect.com/science/article/pii/S0301932215002487">[2]</a> 
F. Perini and R.D. Reitz.
Improved atomization, collision and sub-grid scale momentum coupling models for transient vaporizing engine sprays.
International Journal of Multiphase Flows 79(2016), 107-123. doi:10.1016/j.ijmultiphaseflow.2015.10.009.    



