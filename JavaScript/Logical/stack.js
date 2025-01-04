
// this is an implementation of stack which is a LIFO (last in first out ) type of data structure 

class Stack {
    #arr = [] ;
    #size = 0 ;
    #currentSize = 0 ;
    
    constructor(size) {
        this.#size = size ;
        this.#currentSize = 0 ;
    }
    
    push(val) {
        if(this.#currentSize < this.#size) {
            this.#arr.push(val) ;
            this.#currentSize++ ;
            return true ;
        }
        return false ;
    }
    
    pop() {
        if(this.#currentSize > 0) {
            this.#currentSize-- ;
            return this.#arr.pop() ;
        }
        return -1 ;
    }
    
    getSize() {
        return this.#currentSize ;
    }
    
    isEmpty() {
        return !(this.#currentSize > 0) ;
    }
}

(function main() {
    let st = new Stack(5) ;
    st.push(1) ;
    st.push(2) ;
    
    console.log(st.pop()) ;
    console.log(st.getSize()) ;
    console.log(st.isEmpty()) ;
})() ;
