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
values(1, 'Joãozinho', '40028922');


insert into clientes (codigo, nome, telefone)
values(2, 'Pedro', '3311-9090');

/*
insert into clientes (codigo, nome, telefone)
values(3, 'Henrique', '3311-9018')
returning codigo, nome, telefone;
*/
insert into tipos (codigo, nome)
values(1, 'cachorro');

/*
insert into tipos (codigo, nome)
values(2, 'gato')
returning codigo, nome;

insert into tipos (codigo, nome)
values(3, 'macaco')
returning codigo, nome;
*/
insert into animais (codigo, nome, idade, codigo_cliente, tipo)
values(1, 'pikachu', 2, 1, 1);
/*

insert into animais (codigo, nome, idade, codigo_cliente, tipo)
values(2, 'thor', 3, 1, 1)
returning codigo, nome, idade, codigo_cliente, tipo;
*/

create table usuarios (
	email varchar(50) not null primary key, 
	senha varchar(20) not null, 
	tipo char(1)  not null, 
	check (tipo = 'T' or tipo = 'A' or tipo = 'U'),
	telefone varchar(14)  not null, 
	nome varchar(50) not null
);

-- inserindo alguns registros na tabela usuários
insert into usuarios (email, senha, tipo, telefone, nome) 
values ('lucasdias.pf148@academico.ifsul.edu.br', '123456', 'T','(54)99203-1130','Lucas Dias'),
	('jorgebavaresco@ifsul.edu.br', '123456', 'A','(54)99984-4348','Jorge Bavaresco'), 
	('joao@ifsul.edu.br', '123456', 'U','(54)44484-4348','Joao');