const circle = document.querySelector(".circle");
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

window.addEventListener("load", () => {
  const text = document.querySelector(".text");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        `<span style="transform:rotate(${i * 10.3}deg)">${char}</span>`,
    )
    .join("");
});

luxy.init({
  wrapper: "#luxy",
  targets: ".luxy-el",
  wrapperSpeed: 0.08,
});

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
