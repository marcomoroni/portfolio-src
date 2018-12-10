---
abstract: "An investigation on parallelization of a ray tracer."
permalink: /raytracer/
tags: [graphics, "parallel programming"]
assets_folder: "/assets/raytracer"
preview_img: "/assets/raytracer/ray01.jpg"
---

![]({{ site.baseurl }}{{ page.assets_folder }}/ray01.jpg)

Future shines bright for ray tracers, and although the theory to build one is fairly simple, they are magnificently *slow*.

<!--<div style="background-color: red; height: 40px; width: calc(100vw - 40px); position: relative; left: 50%; margin-left: calc(-50vw + 20px); margin-bottom: 2.8em; margin-top: 2.8em;">
</div>-->

I investigated different parallelization ways to speed up a path tracer. I used [smallpt](http://www.kevinbeason.com/smallpt/) as a base, but to keep it as simple as possible I removed unnecessary features such pixel subdivision and tent filter.

The two methods I covered:
* [OpenMP](https://www.openmp.org/) to parallelize it on the CPU and
* [CUDA](https://developer.nvidia.com/cuda-zone) to make the GPU do the job instead.

OpenMP was already implemented in the original code: it's just one `#pragma omp` line that parallelize the loop that iterates though all the pixels.

CUDA implementation took a bit more effort, especially because when you put too much data into the GPU there's no easy way to tell whether it's going to crash. It just happens.

The image took
* ... seconds with sequential code
* ... seconds with OpenMP
* ... seconds with CUDA
