---
id: spray-nozzles
title: Nozzle setup
description: How to set up nozzle geometry.
---

## Nozzle representation

![Docusaurus](/img/spray_nozzle_coordinates.svg)

The `type(nozzle)` representation is an input structure that contains information about each injector nozzle location and properties. 
In the Matlab toolbox, it can be initialized with

```{octave}
nozzle = fresco_nozzle_init();
```


and will return a structure containing:

```
               drnoz: 0
               dznoz: 0
              dthnoz: 0
              tiltxy: 0
              tiltxz: 0
                cone: 0
               dcone: 0
                anoz: 0
                 smr: 0
                amp0: 0
    diameterinjector: 0
```

## Nozzle hole location

Nozzle hole location is defined by three keywords: `drnoz`, `dznoz`, `dthnoz`. As shown, these quantities describe the _location of the nozzle hole_ in cylindrical coordinates.
Internally, the nozzle hole is stored as a `type(vector) :: xinj` variable. 

- `drnoz = sqrt(xinj^2+yinj^2)`: radius of the nozzle hole [cm]
- `dznoz = zinj`: z coordinate of the nozzle hole [cm]
- `dthnoz = atan2d(yinj,xinj)`; angle in the azimuthal plane [degrees]. Note this quantity is specified in degrees.

The relationship between nozzle hole location (in Cartesian coordinates) and these inputs is: 

```
xinj = vector(drnoz*cosd(dthnoz),drnoz*sind(dthnoz),dznoz)
```

The Matlab toolbox provides a few routines to make these operations a bit simpler. For example, to check `xinj` one may run: 

```
xinj = fresco_nozzle_xyz(nozzle);
```

When the nozzle structure is already part of a FRESCO input structure, one can view the nozzle location, its cone angle and orientation axis, using: 

```
[figure_handle] = fresco_plot_nozzle_locations(fresco_input);
```

For example, for a diesel sector simulation, the nozzle view may look like: 

![Docusaurus](/img/spray_nozzle_viewcone.svg)

:::info

On input, FRESCO will check that the injector nozzle location is sufficiently inside of the finite-volume domain not to cause any issues with the simulation. The simulation will stop otherwise.

:::

## Injection axis direction

The injection axis direction is not necessarily aligned with the ray that connects the injector center apex `xA` and the nozzle hole `xinj`. 
It is defined using two angles from a local spherical coordinate system centered at the nozzle hole: 

- `tiltxz = ` the injector's included angle [degrees]. If `tiltxz=0`, then, the injection axis is vertically aligned downward along the _z_ axis; if `tiltxz=90`, then, the injection axis is horizontal, normal to the _z_ axis.
- `tiltxy = ` the injection axis orientation on the azimuthal plane. A few examples: 
	- `tiltxy=0`: injection directed along positive `x`;
	- `tiltxy=90`: injection directed along positive `y`.
		
	For a 2d-sector case, this parameter is not read in, as axisymmetry is enforced.

The injection axis variables are also used to define three principal directions of the injection axis: _axial_, _normal_, _other_. Both _normal_ and _other_ are normal to the axial direction.
They're defined as: 

```
ea = vector(sind(tiltxz)*cosd(tiltxy),sind(tiltxz)*sind(tiltxy),-cosd(tiltxz))
en = vector(sind(tiltxz+90.0)*cosd(tiltxy),sind(tiltxz+90.0)*sind(tiltxy),-cosd(tiltxz+90.0))
eo = cross(ea,en)
```

They can be viewed in Matlab by running 

```
[ea,en,eo] = fresco_nozzle_axes(nozzle);
```

## Drop size and discharge coefficient

It is important to specify a correct size at each nozzle hole, because that determines the injection velocity. 
Each FRESCO injection pulse specifies an instantaneous mass flow rate, and the instantaneous injection velocity is computed based on the nozzle hole specifications.

Nozzle geometry is specified as in the following image:

![Docusaurus](/img/nozzle_cone_geometry.svg)

- `anoz [cm2]` specifies the _geometric_ nozzle area, and it is defined as `anoz=pi*dnoz^2/4`. This is necessary to compute the nozzle's discharge coefficient `cD`, which affects some spray models.
- `smr [cm]` instead specifies the size of the _fluid_ drops at the nozzle's outflow. This is a very important parameter because it determines the instantaneous injection velocity.

Whenever `anoz` and `smr` are being specified, a _fixed_ nozzle discharge coefficient is internally computed as the ratio between the effective and geometric outflow areas: 

```
cD = pi*smr^2/anoz
```

Optionally, one can employ the ERC nozzle model of [Sarre, Kong, Reitz](#1), which computes an instantaneous discharge coefficient based on local flow conditions. 
To enable this, additional information on the nozzle geometry is needed: namely, the internal nozzle length `lnoz` and inflow curvature radius, `rnoz`.
These parameters can be specified as _optional_ variables, trailing the standard nozzle input, for example:

```
     smr 0.006260 
    amp0 0.000000 
diameterinjector 0.000000 
ld_ratio 5.22
rd_ratio 0.15
```

## Spray cone angle

Two parameters, `cone` and `dcone`, are used to specify the spray cone angle model. There are three models currently available: 

- `CONE_DENSE` is a standard dense cone, with a fixed cone angle. It is obtained when `cone==dcone`, and both have the value of the spray cone angle, in degrees. For example: 
  ```
    cone 18.000000 
   dcone 18.000000 
  ```
  will lead to a fixed, dense spray cone with 18 degrees extension.
  
- `CONE_DENSE_DYNAMIC` is again a dense cone, but this time, the dynamic spray angle model by [Reitz and Bracco](#2)  will be enabled. With this model, the instantaneous spray angle is specified based on the inner nozzle structure, and the local thermodynamic conditions of the chamber.
  To enable this model, the user should set again `cone==dcone`, but now with a negative value, representing the nozzle's l/d ratio:

  ```
    cone -11.000000 
   dcone -11.000000 
  ```  
  Such a setting will enable the dynamic spray cone angle model, with `ld_ratio=11`.
  
- `CONE_HOLLOW` is a hollow spray cone (empty in the center). It is obtained when `dcone < cone`. In this case, only the region of space between `cone/2` and `dcone/2` will be filled with particles. This model does not support a dynamic angle setting. 
  ```
    cone 25.000000 
   dcone  5.000000 
  ```  

## Other parameters

- `amp0`: this parameter is needed by the spray's non-sphericity model (also used by the TAB breakup model). It defines the initial amplitude of the drop's oscillations at the nozzle.
- `diameterinjector`: dummy variable: not currently being used.

  
## References
<a id="1" href="https://www.sae.org/publications/technical-papers/content/1999-01-0912/">[1] </a> 
C. von Kuensberg Sarre, S.-C. Kong, R.D. Reitz. 
Modeling the Effects of Injector Nozzle Geometry on Diesel Sprays.
SAE Technical Paper 1999-01-0912, 1999. doi:10.1177/1999-01-0912 .  

<a id="2" href="https://www.sae.org/publications/technical-papers/content/790494/">[2] </a> 
R.D.Reitz, F.V. Bracco.
On the Dependence of Spray Angle and Other Spray Parameters on Nozzle Design and Operating Conditions.
SAE Technical Paper 790494, 1979. doi:10.1177/790494 .     



