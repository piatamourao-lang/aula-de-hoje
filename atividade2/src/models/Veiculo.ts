import { VeiculoProps } from "../interface/VeiculoProps.js";

export abstract class Veiculo<T extends VeiculoProps> {

    protected props: T;

    constructor(props: T) {
        this.props = props;
    }

    public getPlaca(): string {
        return this.props.placa;
    }

    public getModelo(): string {
        return this.props.modelo;
    }

    public getMarca(): string {
        return this.props.marca;
    }

    public getAno(): number {
        return this.props.ano;
    }

    public setPlaca(novaPlaca: string): void {
        this.props.placa = novaPlaca;
    }

    public setModelo(novoModelo: string): void {
        this.props.modelo = novoModelo;
    }

    public setMarca(novaMarca: string): void {
        this.props.marca = novaMarca;
    }

    public setAno(novoAno: number): void {
        this.props.ano = novoAno;
    }

    public abstract exibirDados(): void;
}