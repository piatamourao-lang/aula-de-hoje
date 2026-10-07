import { Veiculo } from "./Veiculo.js";
import { MotoProps } from "../interface/MotoProps.js";

export class Moto extends Veiculo<MotoProps> {

    public getCilindradas(): number {
        return this.props.cilindradas;
    }

    public setCilindradas(novaCil: number): void {
        this.props.cilindradas = novaCil;
    }

    public exibirDados(): void {
        console.log("=== MOTO ===");
        console.log("Placa:", this.getPlaca());
        console.log("Modelo:", this.getModelo());
        console.log("Marca:", this.getMarca());
        console.log("Ano:", this.getAno());
        console.log("Cilindradas:", this.getCilindradas());
    }
}