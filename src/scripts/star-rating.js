'use strict';

var star1 = document.getElementsByClassName('star-1');
var star2 = document.getElementsByClassName('star-2');
var star3 = document.getElementsByClassName('star-3');
var star4 = document.getElementsByClassName('star-4');
var star5 = document.getElementsByClassName('star-5');

// Function that marks first star //

const firstStar = function() {
  for(let i = 0; star1.length > i; i++){
    star1[i].addEventListener('click', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-fill');
      if(star2[i].classList.contains('rating-star-fill') || star3[i].classList.contains('rating-star-fill') || star4[i].classList.contains('rating-star-fill') || star5[i].classList.contains('rating-star-fill')) {
        star2[i].classList.remove('rating-star-fill');
        star3[i].classList.remove('rating-star-fill');
        star4[i].classList.remove('rating-star-fill');
        star5[i].classList.remove('rating-star-fill');
      }
    });
  }
};

// Function that marks two stars //

const twoStars = function() {
  for(let i=0; star2.length > i; i++) {
    star2[i].addEventListener('click', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-fill');
      star2[i].classList.add('rating-star-fill');
      if(star3[i].classList.contains('rating-star-fill') || star4[i].classList.contains('rating-star-fill') || star5[i].classList.contains('rating-star-fill')) {
        star3[i].classList.remove('rating-star-fill');
        star4[i].classList.remove('rating-star-fill');
        star5[i].classList.remove('rating-star-fill');
      }
    });
  }
};

// Function that marks three stars //

const threeStars = function() {
  for(let i=0; star3.length > i; i++) {
    star3[i].addEventListener('click', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-fill');
      star2[i].classList.add('rating-star-fill');
      star3[i].classList.add('rating-star-fill');
      if(star4[i].classList.contains('rating-star-fill') || star5[i].classList.contains('rating-star-fill')) {
        star4[i].classList.remove('rating-star-fill');
        star5[i].classList.remove('rating-star-fill');
      }
    });
  }
};

// Function that marks four stars //

const fourStars = function() {
  for(let i=0; star4.length > i; i++){
    star4[i].addEventListener('click', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-fill');
      star2[i].classList.add('rating-star-fill');
      star3[i].classList.add('rating-star-fill');
      star4[i].classList.add('rating-star-fill');
      if(star5[i].classList.contains('rating-star-fill')) {
        star5[i].classList.remove('rating-star-fill');
      }
    });
  }
};

// Function that marks five stars //

const fiveStar = function() {
  for(let i=0; star5.length > i; i++){
    star5[i].addEventListener('click', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-fill');
      star2[i].classList.add('rating-star-fill');
      star3[i].classList.add('rating-star-fill');
      star4[i].classList.add('rating-star-fill');
      star5[i].classList.add('rating-star-fill');
    });
  }
};

// Function that makes hover effect on stars when mouse is on and off the stars //

const hoverStars = function() {
  for(let i=0; star1.length > i; i++) {
    star1[i].addEventListener('mouseenter', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-hover-fill');
    });

    star2[i].addEventListener('mouseenter', function() {
      star1[i].classList.remove('full');
      star1[i].classList.remove('full');
      star1[i].classList.add('rating-star-hover-fill');
      star2[i].classList.add('rating-star-hover-fill');
    });

    star3[i].addEventListener('mouseenter', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-hover-fill');
      star2[i].classList.add('rating-star-hover-fill');
      star3[i].classList.add('rating-star-hover-fill');
    });

    star4[i].addEventListener('mouseenter', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-hover-fill');
      star2[i].classList.add('rating-star-hover-fill');
      star3[i].classList.add('rating-star-hover-fill');
      star4[i].classList.add('rating-star-hover-fill');
    });

    star5[i].addEventListener('mouseenter', function() {
      star1[i].classList.remove('full');
      star2[i].classList.remove('full');
      star1[i].classList.add('rating-star-hover-fill');
      star2[i].classList.add('rating-star-hover-fill');
      star3[i].classList.add('rating-star-hover-fill');
      star4[i].classList.add('rating-star-hover-fill');
      star5[i].classList.add('rating-star-hover-fill');
    });

    star1[i].addEventListener('mouseleave', function() {
      star1[i].classList.add('full');
      if(!star1[i].classList.contains('rating-star-fill')){
        star2[i].classList.add('full');
      }
      star1[i].classList.remove('rating-star-hover-fill');
      star2[i].classList.remove('rating-star-hover-fill');
      star3[i].classList.remove('rating-star-hover-fill');
      star4[i].classList.remove('rating-star-hover-fill');
      star5[i].classList.remove('rating-star-hover-fill');
    });

    star2[i].addEventListener('mouseleave', function() {
      star1[i].classList.add('full');
      if(!star1[i].classList.contains('rating-star-fill')){
        star2[i].classList.add('full');
      }
      star1[i].classList.remove('rating-star-hover-fill');
      star2[i].classList.remove('rating-star-hover-fill');
      star3[i].classList.remove('rating-star-hover-fill');
      star4[i].classList.remove('rating-star-hover-fill');
      star5[i].classList.remove('rating-star-hover-fill');
    });

    star3[i].addEventListener('mouseleave', function() {
      star1[i].classList.add('full');
      if(!star1[i].classList.contains('rating-star-fill')){
        star2[i].classList.add('full');
      }
      star1[i].classList.remove('rating-star-hover-fill');
      star2[i].classList.remove('rating-star-hover-fill');
      star3[i].classList.remove('rating-star-hover-fill');
      star4[i].classList.remove('rating-star-hover-fill');
      star5[i].classList.remove('rating-star-hover-fill');
    });

    star4[i].addEventListener('mouseleave', function() {
      star1[i].classList.add('full');
      if(!star1[i].classList.contains('rating-star-fill')){
        star2[i].classList.add('full');
      }
      star1[i].classList.remove('rating-star-hover-fill');
      star2[i].classList.remove('rating-star-hover-fill');
      star3[i].classList.remove('rating-star-hover-fill');
      star4[i].classList.remove('rating-star-hover-fill');
      star5[i].classList.remove('rating-star-hover-fill');
    });

    star5[i].addEventListener('mouseleave', function() {
      star1[i].classList.add('full');
      if(!star1[i].classList.contains('rating-star-fill')){
        star2[i].classList.add('full');
      }
      star1[i].classList.remove('rating-star-hover-fill');
      star2[i].classList.remove('rating-star-hover-fill');
      star3[i].classList.remove('rating-star-hover-fill');
      star4[i].classList.remove('rating-star-hover-fill');
      star5[i].classList.remove('rating-star-hover-fill');
    });
  }
};
