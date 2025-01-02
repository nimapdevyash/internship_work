# This are some good to knows about postgresql

## CTID
- postgresql by default adds an column into each table known as CTID which stores the physical address of each tuple or row into the memory . 
- it is considered a bad practice to use that into the queries as it changes frequently .

## tokens
- tokens are nothing but keywords and special characters in queries .
- eg. select * from table_name . here 'select' , '*' , 'from' , 'table_name' all are the tokens,'select' and 'from' are keywords and 'table_name' is an identifer .

## schema
- in postgresql schema is nothing like schema in mongodb or in mysql .
- here it behaves more like a div in HTML , just like a container used to seperate or contain views , indexes or tables .
