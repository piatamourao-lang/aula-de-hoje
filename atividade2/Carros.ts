import { Veiculo } from "./Veiculo.js";
import { CarroProps } from "./CarrosProps.js";

export class Carro extends Veiculo<CarroProps> {

    constructor(props: CarroProps) {
        super(props);
    }

    public getQtdPortas(): number {
        return this.props.qtdPortas;
    }

    public setQtdPortas(novaQtd: number): void {
        this.props.qtdPortas = novaQtd;
    }

    public exibirDados(): void {
        console.log("===== DADOS DO CARRO =====");
        console.log("Placa:", this.getPlaca());
        console.log("Modelo:", this.getModelo());
        console.log("Marca:", this.getMarca());
        console.log("Ano:", this.getAno());
        console.log("Quantidade de portas:", this.getQtdPortas());
    }
}