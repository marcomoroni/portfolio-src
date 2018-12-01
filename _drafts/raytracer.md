---
abstract: "An investigation on parallelisation of a raytracer."
permalink: /raytracer/
tags: [graphics, "parallel programming"]
assets_folder: "/assets/raytracer"
preview_img: "/assets/raytracer/ray01.jpg"
---

![]({{ site.baseurl }}{{ page.assets_folder }}/ray01.jpg)

Future shines bright for raytracers, and although the theory to build one is fairly simple, they are magnificently *slow*.

<!--<div style="background-color: red; height: 40px; width: calc(100vw - 40px); position: relative; left: 50%; margin-left: calc(-50vw + 20px); margin-bottom: 2.8em; margin-top: 2.8em;">
</div>-->

I investigated different parallelisation ways to speed up a path tracer. I used [smallpt](http://www.kevinbeason.com/smallpt/) as a base, but to keep it as simple as possible I removed the fancy pixel subdivision and tent filter—just know that they make the code faster but are not necessary.

I covered two methods:
* [OpenMP](https://www.openmp.org/) to parallelise it on the CPU and
* [CUDA](https://developer.nvidia.com/cuda-zone) to make the GPU do the job instead.

The results...
