// Luxy Initializing
luxy.init({
  wrapper: "#luxy",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
});

// Loading screen fadeOff
const loadingWrapper = document.querySelector(".loading-wrapper");

$(document).ready(() => {
  function clearLoading() {
    $(".loader").fadeOut(1000);
    $(".loading-wrapper").fadeOut(2000);
    () => clearTimeout(clearLoading);
  }

  setTimeout(() => clearLoading(), 3000);

  // scroll controll

  let prevScroll = window.pageYOffset;

  window.addEventListener("resize", () => {
    headerHeight = hdrTop.offsetHeight;
  });

  window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (prevScroll < currentScroll) {
      console.log("Scrolling Down");
      $(".hdr-btm").removeClass("showhdr");
    } else {
      $(".hdr-btm").addClass("showhdr");
    }
    prevScroll = currentScroll;
  });
});

// Code of Subititle Section
const subtitle = document.querySelector(".subtitle");
const subtitleText = subtitle.textContent;
subtitle.innerText = "";
subtitleText.split("").map((e, index) => {
  const middleIndex = Math.ceil(subtitleText.split("").length / 2);
  if (middleIndex > index) {
    subtitle.innerHTML += `
    <span class="luxy-el" 
    data-horizontal="1" 
    data-speed-x="${index - middleIndex}"
    >${e}
    </span>
    `;
  } else {
    subtitle.innerHTML += `
    <span class="luxy-el" 
    data-horizontal="1" 
    data-speed-x="${index}"
    >${e}
    </span>
    `;
  }
});

// Coutner Code
const counterWinerSec = document.querySelector(".counter-winer-sec");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((elm) => {
      // if its visible in the webpage only then pass through or else return
      if (!elm.isIntersecting) return;

      // Only run if user came from outside viewport
      if (elm.boundingClientRect.top > window.innerHeight) return;

      let dynamicCounter = elm.target.getElementsByClassName("dynamic-counter");
      console.log(dynamicCounter);
      for (let i = 0; i < dynamicCounter.length; i++) {
        let elem = dynamicCounter[i];
        let count = 0;
        let Target = elem.innerText;
        elem.innerText = count;
        let interVal = setInterval(() => {
          count++;
          elem.innerText = count;
          if (count >= Target) {
            clearInterval(interVal);
          }
          observer.unobserve(elm.target);
        }, 20);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

observer.observe(counterWinerSec);

// Partner Section Swiper
const partner_swiper = new Swiper(".partner-swiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: true,
  speed: 8000,
  freeMode: true,
  freeModeMomentum: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    // pauseOnMouseEnter: true ,
  },
  centeredSlides: true,
  allowTouchMove: false,
  simulateTouch: false,
  grabCursor: false,
  // roundLengths: true,
  // observer: true,
  // observeParents: true,

  // breakpoints: {
  //   1700: {
  //     spaceBetween: 80,
  //   },
  //   1250: {
  //     spaceBetween: 40,
  //   },
  // },
});

// Duskwine Products Section
const tabsSwiper = new Swiper(".tabs-swiper", {
  slidesPerView: 2,
  centered: true,
});

const tabsContent = new Swiper(".tabs-content", {
  slidesPerView: 1,
  effect: "fade",
  loop: true,
  thumbs: {
    swiper: tabsSwiper,
  },
});

// Gallery Swiper Section
const Gallery_Swiper = new Swiper(".our-gallery-swiper", {
  loop: true,
  centeredSlides: false,
  slidesPerView: 1,
  autoplay: true,
  speed: 1000,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      centeredSlides: true,
      autoplay: false,
    },
  },
});
