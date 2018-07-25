---
abstract: "Some physics-based animations with particles and rigid bodies."
permalink: /pba/
tags: [physics]
assets_folder: "/assets/pba"
preview_img: "/assets/pba/point.gif"
---

This is a set of physics-based animations I made at university using C++. [Here's the code on GitHub](https://github.com/marcomoroni/set09119).

### Flag

These particles are connected by a system of springs and I applied an isotropic wind to the the triangulated cloth (not to each individual particles).

![]({{ site.baseurl }}{{ page.assets_folder }}/flag.gif)

### Point gravity

Here you can see a group of particles that are affected by two points of gravity. The gravity, just as you would expect, is stronger the closer to these points and null after a certain set distance.

![]({{ site.baseurl }}{{ page.assets_folder }}/point.gif)

### Newton's gravity between any two bodies

While the previous simulation does not use any physically correct gravitational formula, this one uses Newton's law of gravity: every two particles with mass are affected by each other. To be able to see such interactions I decided to make them stick together once they get really close and to enclose everything inside a box.

The lighter particle has a higher mass.

![]({{ site.baseurl }}{{ page.assets_folder }}/newton.gif)

### *Super Mario Galaxy*'s gravity

In *Super Mario Galaxy* the player is able to walk in planetoids of any shape and size. This is possible because bodies are affected by the gravity of only one planetoid at once and the gravity direction is the inverse of the normal of (usually) the closest surface.

I've managed to apply this principle to particles in a planetoid with the shape of a box. The gravity direction is the normalised vector from the particle to a point *U*, where *U* is the point on (or in) the planetoid closest to the particle.

![]({{ site.baseurl }}{{ page.assets_folder }}/smg.gif)

### RigidBody (OBB)

This is a rigidbody with the shape of a box (OBB) colliding with a plane. In order to make the rigidbody's collision work I had to implement forces as impulses.

![]({{ site.baseurl }}{{ page.assets_folder }}/cube.gif)

### Collisions between OBBs

This last simulation has two OBBs colliding with each other.

![]({{ site.baseurl }}{{ page.assets_folder }}/domino.gif)
