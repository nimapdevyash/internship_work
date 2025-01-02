-- select

select * from practiceSchema.renamedTable ;

select * from practiceSchema.renamedTable 
where id > 5 ;

select name , age from practiceSchema.renamedTable
group by age
having count(*) > 2 ;

-- subqueries

select * from practiceSchema.renamedTable
where id not in 
(select id from practiceSchema.renamedTable where name not ilike 'jadu') ;
