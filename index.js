const randomNumber = Math.round(Math.random() * 10);

let atemps = 1;

function clickon(event) {
  event.preventDefault();
  const inputNumber = document.querySelector("#inputNumber");
  atemps++;
  if (randomNumber == inputNumber.value) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");
    document.querySelector(
      ".screen2 h2"
    ).innerText = `Parabéns eu tinha pensado no número ${randomNumber} e tu acertou em ${atemps} tentativas!`;
  } else if (inputNumber.value > 10) {
    alert("Opa, parece que você digitou um número maior que 10");
  } else {
    alert(" você errou tente novamente");
  }
}
