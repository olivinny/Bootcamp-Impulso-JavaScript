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

let forcaDoAtaqueJogador1 = 0;
let forcaDoAtaqueJogador2 = 0;

if (jogador1.toUpperCase() === "ATAQUE") forcaDoAtaqueJogador1 = 3;
else if (jogador1.toUpperCase() === "PEDRA") forcaDoAtaqueJogador1 = 2;
else if (jogador1.toUpperCase() === "PAPEL") forcaDoAtaqueJogador1 = 1;

if (jogador2.toUpperCase() === "ATAQUE") forcaDoAtaqueJogador2 = 3;
else if (jogador2.toUpperCase() === "PEDRA") forcaDoAtaqueJogador2 = 2;
else if (jogador2.toUpperCase() === "PAPEL") forcaDoAtaqueJogador2 = 1;

if (jogador1 && jogador2) {
  if (jogador1 >= 0 || jogador1 < 0 || jogador2 >= 0 || jogador2 < 0)
    console.log("Faça uma entrada válida");
  else if (
    jogador1.toUpperCase() === "ATAQUE" &&
    jogador2.toUpperCase() === "ATAQUE"
  )
    console.log("Aniquilacao mutua");
  else if (
    jogador1.toUpperCase() === "PAPEL" &&
    jogador2.toUpperCase() === "PAPEL"
  )
    console.log("Ambos venceram");
  else if (
    jogador1.toUpperCase() === "PEDRA" &&
    jogador2.toUpperCase() === "PEDRA"
  )
    console.log("Sem ganhador");
  else if (forcaDoAtaqueJogador1 > forcaDoAtaqueJogador2)
    console.log("Jogador 1 venceu");
  else if (forcaDoAtaqueJogador1 < forcaDoAtaqueJogador2)
    console.log("Jogador 2 venceu");
} else console.log("Faça uma entrada válida");
