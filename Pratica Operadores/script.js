function comparaNumeros(num1, num2) {
  const primeiraFrase = criaPrimeiraFrase(num1, num2);
  const segundaFrase = criaSegundaFrase(num1, num2);
  return `${primeiraFrase} ${segundaFrase}`;
}
function criaPrimeiraFrase(num1, num2) {
  let saoIguais = "";
  if (num1 !== num2) {
    saoIguais = "não";
  }
  // return num1 === num2 ? "São iguais" : "Não são iguais";
  return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}
function criaSegundaFrase(num1, num2) {
  const soma = num1 + num2;

  let resultado10 = "menor";
  let resultado20 = "menor";

  if (soma > 10) {
    resultado10 = "maior";
  }
  if (soma > 20) {
    resultado20 = "maior";
  }
  return `Sua soma '${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}
console.log(comparaNumeros(10, 10));
