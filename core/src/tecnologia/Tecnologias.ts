// Importações corrigidas (caminhos absolutos usando baseUrl)
import { Tecnologia } from "@core/tecnologia/Tecnologias";
import { httpGet } from "./api";

// Interface para tipagem do retorno
interface TecnologiaResponse {
    id: string;
    nome: string;
    destaque: boolean;
    // Adicione outros campos conforme necessário
}

export async function obterTecnologias() {
    try {
        const tecnologias: Tecnologia[] = await httpGet<TecnologiaResponse[]>("/tecnologias");
        
        return {
            todas: tecnologias,
            get destaques() {
                return tecnologias.filter(tec => tec.destaque);
            },
            // Método adicional útil
            porId(id: string) {
                return tecnologias.find(tec => tec.id === id);
            }
        };
    } catch (error) {
        console.error("Erro ao obter tecnologias:", error);
        return {
            todas: [] as Tecnologia[],
            get destaques() {
                return [] as Tecnologia[];
            }
        };
    }
}

// Implementação alternativa se preferir classe
export class TecnologiaService {
    private static cache: Tecnologia[] | null = null;

    static async getTecnologias(refresh = false): Promise<{
        todas: Tecnologia[];
        destaques: Tecnologia[];
    }> {
        if (!this.cache || refresh) {
            this.cache = await httpGet<Tecnologia[]>("/tecnologias");
        }

        return {
            todas: this.cache,
            destaques: this.cache.filter(tec => tec.destaque)
        };
    }
}