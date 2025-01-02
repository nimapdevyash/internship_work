-- inner join

select * from practiceSchema.leftTable as l
inner join practiceSchema.rightTable as r
on l.rId = r.Id ;

-- left join

select * from practiceSchema.leftTable as l
left join practiceSchema.rightTable as r
on l.rId = r.Id ;

-- right join

select * from practiceSchema.leftTable as l
right join practiceSchema.rightTable as r
on l.rId = r.Id ;

-- full outer join

select * from practiceSchema.leftTable as l
full outer join practiceSchema.rightTable as r
on l.rId = r.Id ;

-- cross join

select * from practiceSchema.leftTable
cross join practiceSchema.rightTable ;
