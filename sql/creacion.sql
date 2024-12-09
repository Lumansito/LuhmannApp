CREATE TABLE persona(
    dni int ,
    nombre varchar(50),
    apellido varchar(50),
    email varchar(50),
    telefono varchar(50),
    PRIMARY KEY(dni)
);

CREATE TABLE obra(
    idObra int AUTO_INCREMENT,
    nombreObra varchar(50),
    fechaInicio date,
    fechaFin date,
    ubicacion varchar(200),
    dniDueño int,
    dniArquitecto int,

    PRIMARY KEY(idObra),
    FOREIGN KEY(dniDueño) REFERENCES persona(dni),
    FOREIGN KEY(dniArquitecto) REFERENCES persona(dni)
);


CREATE TABLE visita(

    idVisita int AUTO_INCREMENT,
    nroVisita int,
    idObra int,
    titulo varchar(50),
    descripcion varchar(200),
    fecha date,
    horaInicio time,
    horaFin time,
    
    PRIMARY KEY(idVisita),
    FOREIGN KEY(idObra) REFERENCES obra(idObra)
);


CREATE TABLE presente_visita(

    idPresenteVisita int AUTO_INCREMENT,
    idVisita int,
    nombre varchar(50),
    apellido varchar(50),
    telefono varchar(50),
    rol varchar(50),

    PRIMARY KEY(idPresenteVisita),
    FOREIGN KEY(idVisita) REFERENCES visita(idVisita)
);

CRETE TABLE empleado_visita(

    idEmpleadoVisita int AUTO_INCREMENT,
    idVisita int,
    dniEmpleado int,
    
    observaciones TEXT,

    PRIMARY KEY(idEmpleadoVisita),                                                        
    FOREIGN KEY(idVisita) REFERENCES visita(idVisita),
    FOREIGN KEY(dniEmpleado) REFERENCES persona(dni)
);