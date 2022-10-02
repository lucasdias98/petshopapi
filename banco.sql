create table clientes (codigo serial primary key, nome varchar(100) not null, telefone VARCHAR NOT NULL);   

create table tipos (
	codigo serial primary key, 
	nome varchar(40) not NULL);

create table animais (
	codigo serial primary key, 
	nome varchar(40) not null, 
	idade integer not null,
	codigo_cliente integer not null,
	tipo integer not null,
	FOREIGN key (codigo_cliente) references clientes(codigo),
	FOREIGN key (tipo) references tipos(codigo)
);

insert into clientes (codigo, nome, telefone)
values(1, 'Joãozinho', '40028922')
returning codigo, nome, telefone;

insert into clientes (codigo, nome, telefone)
values(2, 'Pedro', '3311-9090')
returning codigo, nome, telefone;


insert into clientes (codigo, nome, telefone)
values(3, 'Henrique', '3311-9018')
returning codigo, nome, telefone;

insert into tipos (codigo, nome)
values(1, 'cachorro')
returning codigo, nome;

insert into tipos (codigo, nome)
values(2, 'gato')
returning codigo, nome;

insert into tipos (codigo, nome)
values(3, 'macaco')
returning codigo, nome;

insert into animais (codigo, nome, idade, codigo_cliente, tipo)
values(1, 'pikachu', 2, 1, 1)
returning codigo, nome, idade, codigo_cliente, tipo;

insert into animais (codigo, nome, idade, codigo_cliente, tipo)
values(2, 'thor', 3, 1, 1)
returning codigo, nome, idade, codigo_cliente, tipo;

