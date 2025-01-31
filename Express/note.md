# Notes

## next()

- if you want to execute some code after the completion of controller the you can write that code after the next() call
- if you don't want such things to happen then either return the next() or call next() at the end of the middleware
- essentially this happens cause of recursion or say stack like behavior

```javascript
function middlewareFun(req, res, next) {
  console.log("first middleware called");
  return next();
  // if you return below code won't run but if you don't then it'll run when returning from the controller in the LIFO order
  console.log("strill inside first middleware");
}
```
