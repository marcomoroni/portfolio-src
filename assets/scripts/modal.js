// Get the modal
var modal = document.getElementsByClassName('modal')[0];
var modalImg = modal.getElementsByClassName('modal-content')[0];

// Get all images that can have modal
// ("Array.prototype.slice.call" is to tranform it into an array, so "filter" can be used)
var imgs = Array.prototype.slice.call(document.getElementsByClassName('container post')[0].querySelectorAll('img'));
// but not images that have "no-modal" class
imgs = imgs.filter(function(img) {
	return !img.parentElement.classList.contains('no-modal');
});

for (var i = 0; i < imgs.length; i++) {

  // Change hover cursor
  imgs[i].style.cursor = "zoom-in";

  // Show modal on click
  imgs[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

modal.onclick = function() {
  modal.style.display = "none";
}
