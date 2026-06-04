import { buscarPokemon } from "../services/PokeApiService";
import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { formatarPokemon } from "../utils/formatters";

export class TerminalController {
    private catalogo = new CatalogoPokemon();

    async executar(): Promise<void> {
        console.log("[INFO] Buscando Pokémon...")
        const pokemon = await buscarPokemon("pikachu");
        if (!pokemon) {
            console.log("[ERRO] Falha na busca.")
            return;
        }
        console.log("[OK] Pokémon encontrado.")
        console.log(formatarPokemon(pokemon));
        this.catalogo.adicionar(pokemon); // 1ª vez
        this.catalogo.adicionar(pokemon); // testar duplicado

        this.catalogo.listar();
        this.catalogo.remover(pokemon.id);
        this.catalogo.listar();

        // Teste de caso inválido
        console.log('[INFO] Buscando Pokémon inexistente...');
        const inexistente = await buscarPokemon("xyz123");
        if (!inexistente) {
            console.log("[OK] Teste de erro funcionando corretamente.");
        }

    }
}