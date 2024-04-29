-- Active: 1714278607439@@localhost@5432@postgres

create table tbl_animal 
(
    id serial PRIMARY KEY,
    nombre varchar(250), 
    sonido varchar(20)
);

CREATE TABLE tb_personas(
    id SERIAL NOT NULL,
    nombre varchar(300),
    apellido varchar(300),
    fecha date,
    PRIMARY KEY(id)
);

CREATE TABLE tb_telefono(
    id SERIAL NOT NULL,
    numero_telefono numeric,
    id_personas numeric,
    PRIMARY KEY(id)
);

select * from tbl_animal;
select * from tb_telefono;
select * from tb_personas;