// Typewriter

var i = 0;
var mySpan = document.getElementById("marco");
var txt = ", I'm Marco :)";
var speed = 170;
var delete_speed = 70;

var time_before_comma = 1600;
var time_after_comma = 170;
var time_after_smile = 1700;

function typewriteMarco()
{
  if (i < txt.length)
  {
    mySpan.innerHTML += txt.charAt(i);
    i++;
    if (i - 1 == 0) {
      setTimeout(typewriteMarco, time_after_comma);
    }
    else if (i - 1 == 13) {
      setTimeout(deleteSmile, time_after_smile);
    }
    else {
      setTimeout(typewriteMarco, speed);
    }
  }
}

function deleteSmile()
{
  if (i == 14)
  {
    mySpan.innerHTML = ", I'm Marco :";
    setTimeout(deleteSmile, delete_speed);
  }
  if (i == 15)
  {
    mySpan.innerHTML = ", I'm Marco ";
    setTimeout(deleteSmile, delete_speed);
  }
  if (i == 16)
  {
    mySpan.innerHTML = ", I'm Marco";
    setTimeout(deleteSmile, 600);
  }
  if (i == 17)
  {
    mySpan.innerHTML = ", I'm Marco.";
  }
  i++;
}

setTimeout(typewriteMarco, time_before_comma);
