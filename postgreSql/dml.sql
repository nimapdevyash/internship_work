-- insert

insert into practiceSchema.renamedTable(name)
values ('name1'), 
       ('name2') ;
		
-- update

update practiceSchema.renamedTable
set name = 'first'
where id = 1 ;

-- delete
delete from practiceSchema.renamedTable
where id <> 1 ;
