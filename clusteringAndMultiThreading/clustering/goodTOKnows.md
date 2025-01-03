# some good to knows about clustering

- primary process is responsible for taking the request and then delegating it to the workers.

## how primary process handles the allocation of processes to workers
- except for windows for other operating systems the default algorithm for scheduling the processes to the workers is ROUND ROBIN after all the workers are given the processes.
- the second method is to use sockets to form a contineous connection to the workers , in theroy it should be the fastest but in practicle it doesn't perform as much cause workloads tend to be very unbalanced. 
