import { Obra } from "./Obra";

export function Obras(props){

    return (
        <div >
            <Obra />
            <Obra />
            <Obra />
            <div onClick={props.volver}>Volver</div>
        </div>
    )


}