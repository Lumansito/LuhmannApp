import { useState } from 'react';
import { Obras } from './Obras';

export function App() {
    const [renderComponent, setRenderComponent] = useState("no");

    const handleObrasClick = () => {
        setRenderComponent(<Obras/>);
    };
    
    return (
        <div className="botones">
            {renderComponent === "no" ? (
                <>
                    <button onClick={handleObrasClick}>Obras</button>
                    <button>Empleados</button>
                    <button>Arquitectos</button>
                    <button>Dueños</button>
                </>
            ) : 
            renderComponent // Remove the quotes around the component
            }
        </div>
    );
};