console.log('hello');

var removeAllClass = function(name) {
  star1.classList.remove(name);
  star2.classList.remove(name);
  star3.classList.remove(name);
  star4.classList.remove(name);
  star5.classList.remove(name);
}
var addAllClass = function(name) {
  star1.classList.add(name);
  star2.classList.add(name);
  star3.classList.add(name);
  star4.classList.add(name);
  star5.classList.add(name);
}
var star1 = document.querySelector('#star-1');
var star2 = document.querySelector('#star-2');
var star3 = document.querySelector('#star-3');
var star4 = document.querySelector('#star-4');
var star5 = document.querySelector('#star-5');
var blackStar = document.querySelector('.stars');

star1.addEventListener('click', function() {
  removeAllClass('full');
  star1.classList.add('blue');
  if(star2.classList.contains('blue') || star3.classList.contains('blue') || star4.classList.contains('blue') || star5.classList.contains('blue')) {
    star2.classList.remove('blue');
    star3.classList.remove('blue');
    star4.classList.remove('blue');
    star5.classList.remove('blue');
  }
});

star2.addEventListener('click', function() {
  removeAllClass('full');
  star1.classList.add('blue');
  star2.classList.add('blue');
  if(star3.classList.contains('blue') || star4.classList.contains('blue') || star5.classList.contains('blue')) {
    star3.classList.remove('blue');
    star4.classList.remove('blue');
    star5.classList.remove('blue');
  }
});

star3.addEventListener('click', function() {
  removeAllClass('full');
  star1.classList.add('blue');
  star2.classList.add('blue');
  star3.classList.add('blue');
  if(star4.classList.contains('blue') || star5.classList.contains('blue')) {
    star4.classList.remove('blue');
    star5.classList.remove('blue');
  }
});

star4.addEventListener('click', function() {
  removeAllClass('full');
  star1.classList.add('blue');
  star2.classList.add('blue');
  star3.classList.add('blue');
  star4.classList.add('blue');
  if(star5.classList.contains('blue')) {
    star5.classList.remove('blue');
  }
});

star5.addEventListener('click', function() {
  removeAllClass('full');
  addAllClass('blue');
});

star1.addEventListener('mouseenter', function() {
  star1.classList.add('blue2');
});

star2.addEventListener('mouseenter', function() {
  star1.classList.add('blue2');
  star2.classList.add('blue2');
});

star3.addEventListener('mouseenter', function() {
  star1.classList.add('blue2');
  star2.classList.add('blue2');
  star3.classList.add('blue2');
});

star4.addEventListener('mouseenter', function() {
  star1.classList.add('blue2');
  star2.classList.add('blue2');
  star3.classList.add('blue2');
  star4.classList.add('blue2');
});

star5.addEventListener('mouseenter', function() {
  addAllClass('blue2');
});


star1.addEventListener('mouseleave', function() {
  removeAllClass('blue2');
});

star2.addEventListener('mouseleave', function() {
  removeAllClass('blue2');
});

star3.addEventListener('mouseleave', function() {
  removeAllClass('blue2');
});

star4.addEventListener('mouseleave', function() {
  removeAllClass('blue2');
});

star5.addEventListener('mouseleave', function() {
  removeAllClass('blue2');
});

blackStar.addEventListener('mouseenter', function(){
  removeAllClass('full');
});

blackStar.addEventListener('mouseleave', function(){
  star1.classList.add('full');
  star2.classList.add('full');
});
