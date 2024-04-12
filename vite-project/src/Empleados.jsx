import {Empleado} from "./Empleado";

export function Empleados(props) {

    return (
        <div >
            <Empleado/>
            <Empleado/>
            <div onClick={props.volver}>Volver</div>
        </div>
    )
}