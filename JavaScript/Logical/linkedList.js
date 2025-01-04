// this is an implementation linked list

class LinkedListNode {
    value ;
    nextNode ;

    constructor(value) {
        this.value = value;
        this.nextNode = null ;
    }
}

(function main() {
    let head = new LinkedListNode(10) ;
    head.nextNode = new LinkedListNode(20) ;
    head.nextNode.nextNode = new LinkedListNode(30) ;

    let it = head ;
    let str = "" ;
    while(it !== null){
        str += it.value + " -> " ;
        it =  it.nextNode ;
    }
    console.log(str + "null");
})() ;