export abstract class ContaBancaria<
    T extends {
        numero: string;
        agencia: string;
        titular: string;
        saldo: number;
    }
> {
    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    public getNumero(): string {
        return this.props.numero;
    }

    public getAgencia(): string {
        return this.props.agencia;
    }

    public getSaldo(): number {
        return this.props.saldo;
    }

    public sacar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do saque deve ser maior que zero.");
            return;
        }

        if (valor > this.props.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }

        this.props.saldo -= valor;

        console.log(`Saque de R$ ${valor.toFixed(2)} realizado.`);
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser maior que zero.");
            return;
        }

        this.props.saldo += valor;

        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado.`);
    }

    public abstract exibirExtrato(): void;
}