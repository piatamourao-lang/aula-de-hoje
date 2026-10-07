import { ContaBancaria } from "./ContaBancaria.js";
import { ContaPoupancaProps } from "./ContaPoupançaProps.js";

export class ContaPoupanca
    extends ContaBancaria<ContaPoupancaProps> {

    public getTaxaAniversario(): number {
        return this.props.taxaAniversario;
    }

    public renderJuros(): void {

        const juros =
            this.props.saldo *
            (this.props.taxaAniversario / 100);

        this.props.saldo += juros;

        console.log(
            `Juros de R$ ${juros.toFixed(2)} adicionados à conta.`
        );
    }

    public override exibirExtrato(): void {

        console.log("\n========== EXTRATO - CONTA POUPANÇA ==========");

        console.log(`Titular: ${this.props.titular}`);
        console.log(`Número: ${this.props.numero}`);
        console.log(`Agência: ${this.props.agencia}`);
        console.log(`Saldo: R$ ${this.props.saldo.toFixed(2)}`);
        console.log(
            `Taxa de aniversário: ${this.props.taxaAniversario}%`
        );

        console.log("==============================================");
    }
}