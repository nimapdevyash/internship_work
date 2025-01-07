# Event Loop

## Priority of execution
 - process.nextTIck() > promises > macro tasks like setTimout , setImmediate and etc..

## KEY NOTES
- process.nextTick() and promises are executed in current phase just after the current operation completes.
- microtasks queue executes the tasks as soon as they are enqued into it (after the completion of current operation offcourse..)
- since chrome browser v8 engine uses libevent eventloop library and node uses libuv eventloop library there are two distinct eventloops,
though now they share quite the same behavior but before node version 11 there were differences like execution of promises and process.nextTick() .

## phases of eventloop
- |-> timers phase (setTimeout and setInterval are executed here)
- |   pending callbacks (this are the defferd / postponed callbacks that will be executed in next ticks or itirations of the eventloop)
- |   idle,prepare (node prepares itself for poll phase)
- |   poll (fetch and execute i/0 operations)  <<<------ incoming : data , connections and etc...
- |   check (setImmediate executes here)
- |<- close callbacks (close connection callbacks are executed here)

## whad does one tick mean ?
- one tick literaly means the one itiration of the eventloop , which means that the eventloop has gone through all the six phases .
- though process.nextTick() has nextTick in it's name it does not follow the tick pattern , be cautious there !!

## setImmediate vs setTimeout

- why if we call both setImmediate and setTimeout in man module the sequence of execution can't be predicted ?
  - read the blog ()
  -  SetTimeout when set to 0 is internally converted to 1.
  - Call to uv__hrtime is platform dependent and is cpu-time-consuming work as it makes system call to clock_gettime. It's impacted by other application running on the machine.
  - If the preparation before the first loop took more than 1ms then the Timer Phase calls the callback associated with it. If it's is less than 1ms Event-loop continues to next phase and runs the setImmediate callback in check phase of the loop and setTimeout in the next tick of the loop.

- when setImmediate and setTimeout called in i/o block has the fixed order of execution ?
  - since js is not awair of the code inside of the i/o block , the i/o block will be executed in the POLL phase .
  - since the check phase is after the POLL phase the setImmediate is executed first .
  - and the timers phase is executed in next tick or itiration of event loop.