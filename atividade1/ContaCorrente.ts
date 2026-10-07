import { ContaBancaria } from "./ContaBancaria.js";
import { ContaCorrenteProps } from "./ContaCorrenteProps.js";

export class ContaCorrente
    extends ContaBancaria<ContaCorrenteProps> {

    public getLimite(): number {
        return this.props.limite;
    }

    // Polimorfismo
    public override sacar(valor: number): void {

        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }

        if (valor > this.props.saldo + this.props.limite) {
            console.log("Saque não permitido. Limite insuficiente.");
            return;
        }

        this.props.saldo -= valor;

        console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
    }

    public override exibirExtrato(): void {

        console.log("\n========== EXTRATO - CONTA CORRENTE ==========");

        console.log(`Titular: ${this.props.titular}`);
        console.log(`Número: ${this.props.numero}`);
        console.log(`Agência: ${this.props.agencia}`);
        console.log(`Saldo: R$ ${this.props.saldo.toFixed(2)}`);
        console.log(`Limite: R$ ${this.props.limite.toFixed(2)}`);

        console.log("==============================================");
    }
}