import { Tecnologia } from "@core"
import { httpGet } from "./api"

export async function obterTecnologias() {
    const tecnologias: Tecnologia[] = await httpGet("/tecnologias")// Certifique-se de que é um array

    return {
        todas: tecnologias,
        get destaque() {
            return tecnologias.filter((tecnologia) => tecnologia.destaque) // Filtra apenas se for um array
        },
    }
}