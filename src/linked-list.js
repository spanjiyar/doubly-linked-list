const Node = require('./node');

class LinkedList {

append(data) {

    var node = {
        data: data,
        next: null,
        prev: null
    };
    if (this._length == 0) {
        this._head = node;
        this._tail = node;
    } else {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
    }        
    this._length++;

},
    }

    head() {
        this.data = data;
        this.head = null;
    }

    tail() {
        var index=this.head;
        while(index!=NULL)
            index=index.next;

        return index.data;
    }

    at(index) {

    }

    insertAt(index, data) {
        if (index > -1 && index < this._length){
            var current = this._head,
             i = 0;
            if (index === 0)
                var node = new Node(value);
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }

        else{
            while(i++ < index){
                current = current.next;
            }
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
 
             this._length++;
    }

    isEmpty() {
        if (this.head ==this.tail==NULL) {
            alert("Double linked list is empty")
        }
        else
        {
            alert("linked list is not empty")
        }
    }

    clear() {}

 deleteAt(index) {
   if (length === 0 || index < 1 || index > length) {
                throw new Error(message.failure);
            }


            if (index === 1) {
                this.head = currentNode.next;

     
                if (!this.head) {
                    this.head.previous = null;
            
                } else {
                    this.tail = null;
                }

            
            } else if (position === this._length) {
                this.tail = this.tail.previous;
                this.tail.next = null;
         
            } else {
                while (count < position) {
                    currentNode = currentNode.next;
                    count++;
                }
}

    reverse() {
        var current = this.tail;
        while (current!=head) {
            current = current.previous;
            console.log(current);
        }
    }

    indexOf(data) {}
}

module.exports = LinkedList;
