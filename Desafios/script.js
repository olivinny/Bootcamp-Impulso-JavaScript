jogador1 = "Pedra";
jogador2 = "Ataque";

//TODO: Complete os espaços em branco com uma possível solução para o desafio

if (jogador1.toUpperCase() === "ATAQUE" && jogador2.toUpperCase() === "ATAQUE")
  console.log("Aniquilacao mutua");
else if (
  jogador1.toUpperCase() === "PAPEL" &&
  jogador2.toUpperCase() === "PAPEL"
)
  console.log("Ambos venceram");
else if (
  jogador1.toUpperCase() === "PEDRA" &&
  jogador2.toUpperCase() === "PAPEL"
)
  console.log("Jogador 1 venceu");
else if (
  jogador1.toUpperCase() === "PAPEL" &&
  jogador2.toUpperCase() === "PEDRA"
)
  console.log("Jogador 2 venceu");
else if (
  jogador1.toUpperCase() === "ATAQUE" &&
  jogador2.toUpperCase() === "PAPEL"
)
  console.log("Jogador 1 venceu");
else if (
  jogador1.toUpperCase() === "PAPEL" &&
  jogador2.toUpperCase() === "ATAQUE"
)
  console.log("Jogador 2 venceu");
else if (
  jogador1.toUpperCase() === "ATAQUE" &&
  jogador2.toUpperCase() === "PEDRA"
)
  console.log("Jogador 1 venceu");
else if (
  jogador1.toUpperCase() === "PEDRA" &&
  jogador2.toUpperCase() === "ATAQUE"
)
  console.log("Jogador 2 venceu");
else if (
  jogador1.toUpperCase() === "PEDRA" &&
  jogador2.toUpperCase() === "PEDRA"
)
  console.log("Sem ganhador");
