import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "./MotoProps.js";

export class Moto extends Veiculo<MotoProps> {

    constructor(props: MotoProps) {
        super(props);
    }

    public getCilindradas(): number {
        return this.props.cilindradas;
    }

    public setCilindradas(novaCil: number): void {
        this.props.cilindradas = novaCil;
    }

    public exibirDados(): void {
        console.log("===== DADOS DA MOTO =====");
        console.log("Placa:", this.getPlaca());
        console.log("Modelo:", this.getModelo());
        console.log("Marca:", this.getMarca());
        console.log("Ano:", this.getAno());
        console.log("Cilindradas:", this.getCilindradas());
    }
}