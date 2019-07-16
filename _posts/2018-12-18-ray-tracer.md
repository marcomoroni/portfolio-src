---
abstract: "An investigation on parallelization of a ray tracer."
abstract: "A parallel ray tracer."
permalink: /raytracer/
tags: [graphics, "parallel programming", C++]
assets_folder: "/assets/raytracer"
preview_img: "/assets/raytracer/ray01.jpg"
---

![]({{ site.baseurl }}{{ page.assets_folder }}/ray02.jpg)

Future shines bright for ray tracers, and although the theory behind them is fairly simple, they are magnificently *slow*.

<!--<div style="background-color: red; height: 40px; width: calc(100vw - 40px); position: relative; left: 50%; margin-left: calc(-50vw + 20px); margin-bottom: 2.8em; margin-top: 2.8em;">
</div>-->

I investigated different parallelization ways to speed up a path tracer. I used *[smallpt](http://www.kevinbeason.com/smallpt/)* as a base, but to keep it as simple as possible I removed unnecessary features such as pixel subdivision and tent filter.

The two methods that I implemented are [OpenMP](https://www.openmp.org/) for CPU parallelization and [CUDA](https://developer.nvidia.com/cuda-zone) for GPU parallelization. They both target the loop that iterates through all the pixels.

You can already find an OpenMP in *samllpt*, and it consists in one single line. CUDA implementation took a bit more effort, especially because when you put too much data into the GPU there's no easy way to tell whether it's going to crash. It just happens.

By the end, an image with a resolution of 1024 &#215; 768 pixels with 100 samples per pixel took:

* 94 seconds with sequential code
* 15 seconds with OpenMP
* 2 seconds with CUDA

The repo is below and it also contains a detailed report of the work:

{:.buttons_in_blog_text}
[Source code](https://github.com/marcomoroni/set10108)
