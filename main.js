//javascript for navigation bar effect on scroll
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

//javascript for responsive navigation sidebar menu
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});

/*Zoom Map*/
function imageZoom(imgID, resultID) {
  var img, lens, result, cx, cy;
  img = document.getElementById(imgID);
  result = document.getElementById(resultID);
  /*create lens:*/
  lens = document.createElement('DIV');
  lens.setAttribute('class', 'img-zoom-lens');
  /*insert lens:*/
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = img.width * cx + 'px ' + img.height * cy + 'px';
  /*execute a function when someone moves the cursor over the image, or the lens:*/
  lens.addEventListener('mousemove', moveLens);
  img.addEventListener('mousemove', moveLens);
  /*and also for touch screens:*/
  lens.addEventListener('touchmove', moveLens);
  img.addEventListener('touchmove', moveLens);
  function moveLens(e) {
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image:*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorPos(e);
    /*calculate the position of the lens:*/
    x = pos.x - lens.offsetWidth / 2;
    y = pos.y - lens.offsetHeight / 2;
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {
      x = img.width - lens.offsetWidth;
    }
    if (x < 0) {
      x = 0;
    }
    if (y > img.height - lens.offsetHeight) {
      y = img.height - lens.offsetHeight;
    }
    if (y < 0) {
      y = 0;
    }
    /*set the position of the lens:*/
    lens.style.left = x + 'px';
    lens.style.top = y + 'px';
    /*display what the lens "sees":*/
    result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
  }
  function getCursorPos(e) {
    var a,
      x = 0,
      y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }
}
//End Zoom Map
//===========================================================================================
/*Slideshow-history*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlideshistory(n) {
  showSlides((slideIndex += n));
}

function currentSlidehistory(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('mySlides-history');
  var dots = document.getElementsByClassName('dot-history');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}
//EndSlideshow-History
//===========================================================================================
//Slideshow-Galery
var slideIndexGalery = 1;
showSlidesGalery(slideIndexGalery);

function plusSlidesGalery(n) {
  showSlidesGalery((slideIndexGalery += n));
}

function currentSlideGalery(n) {
  showSlidesGalery((slideIndexGalery = n));
}

function showSlidesGalery(n) {
  var i;
  var slides = document.getElementsByClassName('mySlidesGalery');
  var dots = document.getElementsByClassName('icongalery');
  if (n > slides.length) {
    slideIndexGalery = 1;
  }
  if (n < 1) {
    slideIndexGalery = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndexGalery - 1].style.display = 'block';
  dots[slideIndexGalery - 1].className += ' active';
}
