const colorCode = document.querySelector(".button-container .info");
const copyBtn = document.querySelector(".copy");
const inputs = document.querySelectorAll("input");
const colorPreview = document.querySelector(".result-color");
const [red, green, blue] = inputs;

red.addEventListener("input", () => {
  colorCode.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
  colorPreview.style.background = colorCode.textContent;
});
green.addEventListener("input", () => {
  colorCode.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
  colorPreview.style.background = colorCode.textContent;
});
blue.addEventListener("input", () => {
  colorCode.innerHTML = `rgb(${red.value},${green.value},${blue.value})`;
  colorPreview.style.background = colorCode.textContent;
});

const copyToClipboard = (text) => {
  const tempInput = document.createElement("input");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
};

copyBtn.addEventListener("click", () => {
  copyToClipboard(colorCode.textContent);
  copyBtn.innerHTML = "COPIED TO CLIPBOARD";
  copyBtn.addEventListener("mouseleave", () => {
    copyBtn.innerHTML = "COPY";
  });
});
