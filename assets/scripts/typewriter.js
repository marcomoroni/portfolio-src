////////////////
// Typewriter //
////////////////

// Only works for one element

var t = document.getElementsByClassName("typewriter")[0];

var originalText = t.textContent;

t.innerHTML = "";

var i = 0;
function typeWriter()
{
  if (i < originalText.length)
  {
    t.innerHTML += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}

setTimeout(typeWriter, 600)
