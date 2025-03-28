import { Tecnologia } from "@core";
import TecnologiasTrabalhadas from "./TecnologiasTrabalhadas";

export interface CurriculoProps {
    tecnologias: Tecnologia[]

}

export default function Curriculo(props: CurriculoProps){
    return (
        <div>
            <TecnologiasTrabalhadas tecnologias={props.tecnologias[0].id} />
        </div>
     ) 
}


   
    