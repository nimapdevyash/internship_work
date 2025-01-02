-- create

create database practiceDB ;
create schema practiceSchema ;
create table practiceSchema.practiceTable(
	id serial primary key,
	name varchar(266) not null ,
	age int check(age > 0)
) ;

create view practiceView as 
select * from practiceSchema.practiceTable ;

create index practiceIndex on practiceSchema.practiceTable(name) ;

-- alter

alter table practiceSchema.practiceTable
rename to practiceSchema.renamedTable ;

alter table practiceSchema.renamedTable
rename column name to nameOfPerson ;

alter table practiceSchema.renamedTable
add someRandomColumn int default 8 ;

alter table practiceSchema.renameTable
drop column someRandomColumn ;

-- truncate

truncate practiceSchema.renamedTable cascade ;

-- drop

drop table if exists practiceSchema.renamedTable cascade ;

drop schema if exists practiceSchema cascade ;

drop database if exists practiceDb ;
