---
id: solver
title: Solver settings
description: Information on solver settings.
---

## The Arbitrary Lagrangian-Eulerian solver.

FRESCO solves transport equations in the finite-volume mesh using the Arbitrary Lagrangian-Eulerian (ALE) solution method. 
Each transport equation can be split into several operators: 

![Docusaurus](/img/ale_transport_equation.png)

These terms have different properties, which makes different solution methods more suitable to them. The ALE method performs time integration following three major separate stages, or _phases_:
  - **Phase A** A constant-volume step, where explicit source terms at the right-hand-side of the transport equations are solved. These include, for example, spray, multiphase and combustion source terms. During this stage, the computational mesh is steady, so all source terms can be treated like happening in a constant-volume environment.
  - **Phase B** A Lagrangian step, where all Lagrangian derivatives pressure-momentum coupling is solved. During this stage, mesh motion follows the Lagrangian node motion following the momentum equation, so, there are no mass/momentum fluxes through the faces. This makes the Lagrangian stage suitable to solve computationally expensive diffusion terms for all quantities. All these are solved in a fully time-implicit fashion, using robust, preconditioned linear system solvers.
  - **Phase C** A Eulerian step, where mesh nodes move back from the Lagrangian locations to the Eulerian locations at the new step (n+1). This _rezoning_ step solves for the advective fluxes of all quantities. It is performed using an explicit, subcycled integration whose timestep is determined as a fraction of the Courant constraint.

In this way, with the ALE method we achieve: 
  - Each term is solved with its most tailored solution method;
  - The solver is inherently compressible, and works at all speeds (including `Ma>=1`);
  - Because the Lagrangian solvers are fully implicit, there are no upper limits on the integration timesteps. However, for accuracy reasons, a timestepping strategy is used to limit timestep size based on some error estimators.
  
## Momentum solver

## Diffusion solvers

## Advection solver





## References
<a id="1" href="https://www.sciencedirect.com/science/article/pii/S002199910600338X">[1]</a> 
D. J. Torres, M. F. Trujillo. 
KIVA-4: An unstructured ALE code for compressible gas flow with sprays.
Journal of Computational Physics 219, 943-975, 2006. 
doi:10.1016/j.jcp.2006.07.006
