import { Carro } from "./Carros.js";
import { Moto } from "./Moto.js";

const carro = new Carro({
    placa: "ABC-1234",
    modelo: "Civic",
    marca: "Honda",
    ano: 2024,
    qtdPortas: 4
});

const moto = new Moto({
    placa: "XYZ-5678",
    modelo: "CG 160",
    marca: "Honda",
    ano: 2023,
    cilindradas: 160
});

carro.exibirDados();

console.log("");

moto.exibirDados();