

-- create a tables with porstgres and sequelize such that they have associations withing them.
-- like one to one , one to many and many to many you should be able to write both sql and sequelie.

----------------------------------------------------------------------------------------------------------------------------------- 
--------------------------------------- mysql implementations of relationships ----------------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------- 

-- one to one relationship 
-- 	-> unique in profile table makes this one to one relationship , no other profile could reference to the same user.
create table user (
	id int auto_increment primary key,
	name varchar(256) not null
);

create table profile (
	id int auto_increment primary key,
	user_id int not null unique,
	foreign key(user_id) references user(id)
);

-- one to many relationship
-- 	-> note here we don't have unique on the foreign key , essentially this allows us to store multiple files that have the same user_id , hence establishing the one to many relationship
create table user (
	id int auto_increment primary key ,
	name varchar(256) not null
);

create table file (
	id int auto_increment primary key ,
	user_id int not null,
	foreign key(user_id) reference user(id)
);

-- many to many relationship
-- 	-> here we need another table for establishing the many to many relationship. as it's not possible to implemnt it without it.
--	-> the table is known as through table , mediator table etc...
create table product (
	id int auto_increment primary key ,
	name varchar(256) not null 
);

create table order (
	id int auto_increment primary key,
	user_id int not null,
	foreign key(user_id) reference user(id)
);

create table order_details (
	id int auto_increment primary key,
	product_id int not null ,
	product_quantity int default(0) check(product_quantity > 0),
	order_id int not null,
	foreign key(product_id) references product(id),
	foreign key(order_id) references order(id)
);


----------------------------------------------------------------------------------------------------------------------------------- 
------------------------------------------ sequelize implementation of relationships ----------------------------------------------
----------------------------------------------------------------------------------------------------------------------------------- 

-- say we have two models foo and bar then the relationships among them will be like this

-- one to one
foo.hasOne(bar) ;
bar.belongsTo(foo);

-- one to many
foo.hasMany(bar) ;
bar.belongsTo(foo) ;

-- many to many
foo.belongsToMany(bar , {through: "mediator"}) ;
bar.belongsToMany(foo , {through: "mediator"});

