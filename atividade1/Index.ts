import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupança.js";

console.log("======================================");
console.log("          SISTEMA BANCÁRIO");
console.log("======================================");

// CONTA CORRENTE

const contaCorrente = new ContaCorrente({

    numero: "001",

    agencia: "1234",

    titular: "João",

    saldo: 1000,

    limite: 500
});


// CONTA POUPANÇA

const contaPoupanca = new ContaPoupanca({

    numero: "002",

    agencia: "1234",

    titular: "Maria",

    saldo: 2000,

    taxaAniversario: 0.5
});


// OPERAÇÕES CONTA CORRENTE

console.log("\n--- CONTA CORRENTE ---");

contaCorrente.depositar(500);

contaCorrente.sacar(1200);

contaCorrente.exibirExtrato();


// OPERAÇÕES CONTA POUPANÇA

console.log("\n--- CONTA POUPANÇA ---");

contaPoupanca.depositar(300);

contaPoupanca.renderJuros();

contaPoupanca.sacar(500);

contaPoupanca.exibirExtrato();