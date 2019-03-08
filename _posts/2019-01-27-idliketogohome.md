---
abstract: "I'd like to go home."
permalink: /idliketogohome/
tags: ["game jam", "games dev", unity]
assets_folder: "/assets/idliketogohome"
preview_img: "/assets/idliketogohome/h1.png"
---

![]({{ site.baseurl }}{{ page.assets_folder }}/h1.png)
![]({{ site.baseurl }}{{ page.assets_folder }}/h2.png)
![]({{ site.baseurl }}{{ page.assets_folder }}/h3.png)

I made *I'd like to go home* during the 48h of the [Global Game Jam](https://globalgamejam.org/) 2019. [Play it on itch.io!](https://marcomoroni.itch.io/id-like-to-go-home)

This year I decided to go all solo: I drew the assets and I used [Unity](https://unity3d.com/) to build it. It's made with 2D sprites in a 3D side-scrolling scene.

It's a short story about a rabbit that lost his way home. My attention was all on the *immersion* of the player and the art-style was inspired by [Jon Klassen](http://jonklassen.tumblr.com/)---for the characters and the story---and [Gal Shir](https://galshir.com/)---for the colours and the vegetation.

Some technical insights:
* The background seems to be of one solid dark purple: the 3D plane on the ground has a shader that outputs a solid colour that is not affected by anything (just like a sprite) and the camera outputs the same colour when there are no elements on the screen. In this way you cannot see where the plane ends, and it gives the impression of a consistent colour.
* The camera is controlled by Unity's Cinemachine and it has a noise and vignette post-processing effect.
* The sprites are generally made in two steps: first, draw the basic shape with a solid colour; second, use a sand/spray brush to add a secondary colour.
* There is what seems to be a 3D model of a home: at the time of writing I don't know how to 3D model, so I simply assembled it with some sprites (*hehe*).

All the code is in [here](https://github.com/marcomoroni/ggj-2019), and you can [play it online on itch.io](https://marcomoroni.itch.io/id-like-to-go-home).
