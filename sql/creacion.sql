CREATE TABLE persona(
    dni int ,
    nombre varchar(50),
    apellido varchar(50),
    email varchar(50),
    telefono varchar(50),
    rol varchar(50),

    PRIMARY KEY(dni,rol)
);

CREATE TABLE obra(
    nroObra int AUTO_INCREMENT,
    nombreObra varchar(50),
    fechaInicio date,
    fechaFin date,
    ubicacion varchar(200),

    PRIMARY KEY(nroObra)
);

CREATE TABLE dueño_obra(

    nroObra int,
    dniDueño int,
    rolDueño varchar(50),

    PRIMARY KEY(nroObra,dniDueño,rolDueño),
    FOREIGN KEY(nroObra) REFERENCES obra(nroObra),
    FOREIGN KEY(dniDueño,rolDueño) REFERENCES persona(dni,rol)

);
CREATE TABLE arquitecto_obra(

    nroObra int AUTO_INCREMENT,
    dniArquitecto int,
    rolArquitecto varchar(50),
    funcionArquitecto varchar(50),

    PRIMARY KEY(nroObra,dniArquitecto,rolArquitecto),
    FOREIGN KEY(nroObra) REFERENCES obra(nroObra),
    FOREIGN KEY(dniArquitecto,rolArquitecto) REFERENCES persona(dni,rol)

);

CREATE TABLE visita(

    idVisita int AUTO_INCREMENT,
    nroVisita int,
    nroObra int,
    titulo varchar(50),
    descripcion varchar(200),
    fecha date,
    horaInicio time,
    horaFin time,
    
    PRIMARY KEY(idVisita),
    FOREIGN KEY(nroObra) REFERENCES obra(nroObra)
);


CREATE TABLE presente_visita(

    idVisita int,
    nombrePresente varchar(50),
    apellidoPresente varchar(50),
    telefono varchar(50),
    rolPresente varchar(50),

    PRIMARY KEY(idVisita,nombrePresente,apellidoPresente),
    FOREIGN KEY(idVisita) REFERENCES visita(idVisita)
);

CRETE TABLE empleado_visita(

    idVisita int,
    dniEmpleado int,
    rolEmpleado varchar(50),
    observaciones TEXT,

    PRIMARY KEY(idVisita,dniEmpleado,rolEmpleado),                                                        
    FOREIGN KEY(idVisita) REFERENCES visita(idVisita),
    FOREIGN KEY(dniEmpleado,rolEmpleado) REFERENCES persona(dni,rol)
);