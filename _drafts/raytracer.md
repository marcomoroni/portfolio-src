---
abstract: "A parallelised raytracer."
permalink: /raytracer/
tags: [graphics, "parallel programming"]
assets_folder: "/assets/raytracer"
---

Future shines bright for raytracers, and although the theory to build one is fairly simple, they are magnificently *slow*.

I investigated different parallelisation ways to speed up a path tracer. I used *[smallpt](http://www.kevinbeason.com/smallpt/)* as a base, but to keep it as simple as possible I removed the fancy pixel subdivision and tent filter—just know that they make the code faster but are not necessary.

I covered two methods:
* *[OpenMP](https://www.openmp.org/)* to parallelise the loop the goes through all the pixels and
* *[CUDA](https://developer.nvidia.com/cuda-zone)* to make the GPU do the job.

The results...
