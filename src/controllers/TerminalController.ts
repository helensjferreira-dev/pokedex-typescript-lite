import { buscarPokemon } from "../services/PokeApiService";
import { CatalogoPokemon } from "../models/CatalogoPokemon";
import { formatarPokemon } from "../utils/formatters";

export class TerminalController {
    private catalogo = new CatalogoPokemon();

    async executar(): Promise<void> {
        console.log("===== TESTE 1: BUSCA VÁLIDA =====")

        console.log("[INFO] Buscando Pokémon...")
        const pokemon = await buscarPokemon("pikachu");
        if (!pokemon) {
            console.log("[ERRO] Falha na busca.")
            return;
        }
        console.log("[OK] Pokémon encontrado.");
        console.log(formatarPokemon(pokemon));

        console.log("\n===== TESTE 2: ADIÇÃO E DUPLICIDADE =====");

        this.catalogo.adicionar(pokemon); // 1ª vez
        this.catalogo.adicionar(pokemon); // testar duplicado

        console.log("\n===== TESTE 3: LISTAGEM =====")
        this.catalogo.listar();

        console.log("\n===== TESTE 4: REMOÇÃO =====")


        this.catalogo.remover(pokemon.id);

        console.log("\n===== TESTE 5: LISTAGEM APÓS REMOÇÃO =====")

        this.catalogo.listar();

        // Teste de caso inválido
        console.log("\n===== TESTE 6: BUSCA INVÁLIDA =====")

        console.log('[INFO] Buscando Pokémon inexistente...');
        const inexistente = await buscarPokemon("xyz123");
        if (!inexistente) {
            console.log("[OK] Teste de erro funcionando corretamente.");
        }

    }
}