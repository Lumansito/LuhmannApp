import { useState } from 'react';
import { Obras } from './Obras';
import { Empleados } from './Empleados';

// Rest of the code...

export function App() {
    const [renderComponent, setRenderComponent] = useState("no");

    function handlePagClick (pag){
        setRenderComponent(pag);
    };

    function volver(){
        setRenderComponent("no");
    };

    return (
        <div className="botones">
            {renderComponent === "no" ? (
                <>
                    <button onClick={() => handlePagClick(<Obras volver={volver}/>)}>Obras</button>
                    <button onClick={() => handlePagClick(<Empleados volver={volver}/>)}>Empleados</button>
                    <button onClick={() => handlePagClick(<Arquitectos volver={volver}/>)} >Arquitectos</button>
                    <button onClick={() => handlePagClick(<Duenios volver={volver}/>)} >Dueños</button>
                </>
            ) : 
                renderComponent
            }
        </div>
    );
};

