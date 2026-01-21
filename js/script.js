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
