// DOM selectors
// const stars = document.getElementById('stars');
// const starsCtx = stars.getContext('2d');
// const slider = document.querySelector(".slider_landing input");
// const output = document.querySelector("#speed");
//
// // global variables
// let screen, starsElements, starsParams = { speed: 2, number: 300, extinction: 4 };
//
// // run stars
// setupStars();
// updateStars();
//
// // handle slider
// output.innerHTML = slider.value;
// slider.oninput = function() {
//     output.innerHTML = this.value;
//     starsParams.speed = this.value;
// };
//
// // update stars on resize to keep them centered
// window.onresize = function() {
//     setupStars();
// };
//
// // star constructor
// function Star() {
//     this.x = Math.random() * stars.width;
//     this.y = Math.random() * stars.height;
//     this.z = Math.random() * stars.width;
//
//     this.move = function() {
//         this.z -= starsParams.speed;
//         if (this.z <= 0) {
//             this.z = stars.width;
//         }
//     };
//
//     this.show = function() {
//         let x, y, rad, opacity;
//         x = (this.x - screen.c[0]) * (stars.width / this.z);
//         x = x + screen.c[0];
//         y = (this.y - screen.c[1]) * (stars.width / this.z);
//         y = y + screen.c[1];
//         rad = stars.width / this.z;
//         opacity = (rad > starsParams.extinction) ? 1.5 * (2 - rad / starsParams.extinction) : 1;
//
//         starsCtx.beginPath();
//         starsCtx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
//         starsCtx.arc(x, y, rad, 0, Math.PI * 2);
//         starsCtx.fill();
//     }
// }
//
// // setup <canvas>, create all the starts
// function setupStars() {
//     screen = {
//         w: window.innerWidth,
//         h: window.innerHeight,
//         c: [ window.innerWidth * 0.5, window.innerHeight * 0.5 ]
//     };
//     window.cancelAnimationFrame(updateStars);
//     stars.width = screen.w;
//     stars.height = screen.h;
//     starsElements = [];
//     for (let i = 0; i < starsParams.number; i++) {
//         starsElements[i] = new Star();
//     }
// }
//
// // redraw the frame
// function updateStars() {
//     starsCtx.fillStyle = "black";
//     starsCtx.fillRect(0, 0, stars.width, stars.height);
//     starsElements.forEach(function (s) {
//         s.show();
//         s.move();
//     });
//     window.requestAnimationFrame(updateStars);
// }

// UP TO TOP BUTTON

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// TEXT ANIMATION

//header



//slogan

consoleText(['Dreams Sell ', 'Merchants Excel'], 'text', ['tomato', 'rebeccapurple', 'lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}


// BLOGS

var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 20,
  effect: 'fade',
  loop: true,
  speed: 300,
  mousewheel: {
    invert: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// text flows in
