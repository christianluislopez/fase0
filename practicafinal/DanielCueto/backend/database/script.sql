create table Pelicula(
	id serial primary key,
	titulo varchar(50) not null,
	autor varchar(70) not null,
	idioma varchar(20) not null,
	correo varchar(30) not null,
	numero int not null
);