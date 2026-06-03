export interface PokemonApiResponse {
    readonly id: number;
    name: string;
    height: number;
    weight: number;
    types: {
        type: {
            name: string;
        }
    } [];
}

export interface PokemonResumo {
    readonly id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}