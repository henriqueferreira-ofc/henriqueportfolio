import { Tecnologia } from "@core"
import Image from "next/image"

export interface TecnologiasProps {
    lista: Tecnologia[]
}

export default function Tecnologias(props: TecnologiasProps) {
    return  props.lista ? (
        <div className="flex justify-center gap-4">
            {props.lista.map((tecnologia) => (
                <div key={tecnologia.id} className="flex flex-col items-center gap-1">
                   <span className="relative h-11 w-11 sm:w-16 rounded-xl overflow-hidden">
                    <Image 
                    src={tecnologia.imagem} 
                    alt={tecnologia.nome} 
                    fill 
                    className="object-contain" />
                   </span>
                   <span className="text-[10px] text-zinc-400">{tecnologia.nome}</span>
                </div>
            ))}    
        </div>
    ) : null
}