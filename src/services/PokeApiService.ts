import { PokemonResumo, PokemonApiResponse } from "./models/Pokemon";

export async function buscarPokemon (nomeOuId : string): Promise <PokemonResumo | null> {

    try  {
        const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeOuId}`);
        if (!resposta.ok) {
            console.log("[ERRO] Pokémon não encontrado.")
            return null;
        }
        const dados: PokemonApiResponse = await resposta.json();
        // Maping


    } catch (erro) {
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }
}