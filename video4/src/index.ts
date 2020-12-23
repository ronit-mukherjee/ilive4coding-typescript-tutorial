import sum from "./utils/sum";
const initialize = () => {
  const form: HTMLElement = document.getElementById("sum-form")!;
  const outputWrapperElem: HTMLElement = document.getElementById(
    "output-wrapper"
  )!;
  const outputElem: HTMLElement = document.getElementById("output")!;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const number1: string = (document.getElementById(
      "first-number"
    ) as HTMLInputElement)!.value;
    const number2: string = (document.getElementById(
      "second-number"
    ) as HTMLInputElement)!.value;

    const result = sum(+number1, +number2);

    outputElem.innerHTML = result.toString();
    outputWrapperElem.style.display = "block";
  });
};

window.addEventListener("load", initialize);
