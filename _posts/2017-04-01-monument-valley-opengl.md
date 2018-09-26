---
abstract: "A scene with impossible geometries made using OpenGL that replicates the art style of the game Monument Valley."
permalink: /mv/
tags: ["computer graphics"]
assets_folder: "/assets/mv"
preview_img: "/assets/mv/animated.gif"
---

![]({{ site.baseurl }}{{ page.assets_folder }}/animated.gif)

This is a coursework I've made for a Computer Graphics module. I used [OpenGL](https://www.opengl.org/) to recreate a scene that looked like a level from the game *[Monument Valley](https://www.monumentvalleygame.com/)*:

![A level from the game]({{ site.baseurl }}{{ page.assets_folder }}/mv_screen.jpg)

You've probably noticed the impossible geometries: I made them by using a camera with an orthographical projection, therfore you can't perceive depth.

I used three directional lights facing the three visible surfaces. In this way I have a higher control of the colours I want my scene to have.

The Phong shader had to be used without the reflection component because reflection is affected by the distance from the camera. Using it would break the illusion of impossible geometries.

To create the water waves that you can see on the left cube I multiplied two identical normal maps moving in different directions.

Finally I worked with frames to allow multiple ones to work at the same time: I can have multiple post-processing effects, such as vignette and inverse colours.

You can take a look at it on my [GitHub](https://github.com/MarcoMoroni/CG_cw2) and you can also read the [report](href="https://github.com/MarcoMoroni/CG_cw2/blob/master/Report/report.pdf) I worte.

You should play that game btw, it's gorgeous.

![]({{ site.baseurl }}{{ page.assets_folder }}/screen04.png)

![]({{ site.baseurl }}{{ page.assets_folder }}/screen06.png)

![]({{ site.baseurl }}{{ page.assets_folder }}/screen05.png)

![]({{ site.baseurl }}{{ page.assets_folder }}/screen02.png)

![]({{ site.baseurl }}{{ page.assets_folder }}/screen07.png)
