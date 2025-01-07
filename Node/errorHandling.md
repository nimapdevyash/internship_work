
# ways to deal with errors in nodeJs

## try-catch
- wrap the code in try blocks and handle the errors in catch block.

## catch
- used to handle the errors in promise chaining.

## libraries / frameworks
- boom
- youch

## Error Middleware
- create an error to handle all the errors in a specific module or for an entire application .

## Domain module ( deprecated sinse node v.14 )
- creates an domain context and executes code in it.

## Process ( should only be used for gracefull shutdown )
- process.on('uncaughtExeepction')
- process.on('unhandledRejection')

