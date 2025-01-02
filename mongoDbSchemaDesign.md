

<!--MongoDb Schema Design Rules-->
<!--- Favor embedding unless there is a compelling reason not to-->
<!--- Needing to access an object on its own is a compelling reson not embed it-->
<!--- avoid joins and lookups if they can be avoided-->
<!--- arrays should not grow wihtou bounds-->
<!--- How you model your data depends entirely on your particular applications data access patterns-->


# best practices for mongoDB Schema Design

## few things to consider 
    - how to store the data
    - query performance
    - reasonable amount of hardware


## Embeding vs Referencing
### Embeding 
    #### advantages
        - retrive all data with a single query
        - avoids expensive joins or lookups
        - update all data with a single atomic operation
    #### dis-advantages
        - large docs === more overhead
        - mongoDB has a 16 MB document size limit

### Referencing
    #### advantages
        - smaller documents
        - less likely to reach 16 MB data limit
        - no duplication of data
        - infrequently accessed data not accessed on every query
    #### dis-advantages
        - two queries or lookup required to retrieve all data


## Types of Relationships
### one to one
    - just add key value pair

### one to few
    - embeding in an array or an object
### one to many
    - use referencing 
### one to squlions
    - use reverse referencing ( many objects will have the id of one object )
### many to many
    - use arrays on both sides to store the reference of each other 


## advance patterns
- approximation
- attribute
- computed
- document versioning
- extended reference
- outlier pattern (has_extra : true)
- preallocated
- polymorphic
- schema versioning ( imp )
- subset
- tree and graph
