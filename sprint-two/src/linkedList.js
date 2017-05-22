var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list._length = 0;

  list.addToTail = function(value) {  //<----------Doubly Linked
    var newNode = new Node(value);

    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
      list._length ++;
    } else {
      var currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
        currentNode.next = newNode;
        newNode.prev = currentNode;
        list.tail = newNode;
        list._length ++;
    }
  };

  // list.addToTail = function(value) {  // <--------- Singly-Linked

  //   var newNode = new Node(value);
  //   if (!list.head) {
  //     list.head = newNode;
  //     list.tail = newNode;
  //   } else {
  //     var currentNode = list.head;
  //     while (currentNode.next) {
  //       currentNode = currentNode.next;
  //     }
  //     currentNode.next = newNode;
  //     list.tail = newNode;

  //   }
  //  //  //take a value and add it to the tail;

  //  // var newNode = new Node(value);
  //  // if(list.head === null){
  //  //  list.head = newNode;
  //  //  list.tail = newNode;

  //  // }else{

  //  //  list.head.next = newNode;
  //  //  list.tail =newNode;
    
  //  //  }
  // };

// list.removeHead = function() { //<------Singly Linked

//     var valueOfHead = list.head.value;
//     list.head = list.head.next;
//     return valueOfHead;

// };
  
  list.removeHead = function() { //edge case: after removing head; theres maybe no node left;
    var value = list.head.value;
    list.head = list.head.next;
    list._length --;
    
    // there's a node or more after removing previous head;
    if (list.head) {  //<--- if list.head isn't null, means after removing original head, theres is one or more nodes left;
      list.head.prev = null;
    } else {
      list.tail = null;
    }
    return value;
  };

  list.addToHead = function(value) {
    
    var newNode = new Node(value);
    if (!list.head) {

      list.head = newNode;
      list.tail = newNode;
      list._length ++; 

    } else {

      newNode.next = list.head;
      list.head.prev = newNode;
      list.head = newNode;
      list._length ++;

    }
  };

  list.removeTail = function() {

    if (list.tail === list.head) {
      list.tail.prev = null;
      list.head = null;
      list.tail = null;
      list._length --;
    } else {
      var lastNode = list.tail.prev;
      list.tail.prev.next = null;
      list.tail.prev = null;
      list.tail = lastNode;
      list._length --;
    }
  }  






  // {list.head.next : {  : {  : {    }}}}

// list.contains = function(target) { //<------ singly-linked
   
//    var search = function(node) {

//     if (node.value === target) {
//       return true;
//     }
//     if (node.next === null) {
//       return false;
//     }
//     return search(node.next);
//    };

//    return search(list.head);

//     //check if the value = target   ----> if yes, return true;
//     //check if the next node is null -----> if yes, return false;

//     // else; continue the operation;
//   }

  list.contains = function (target) {
  
    var currentNode = list.head;
    var search = function(node) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      return search(node.next);
    }
    return search(list.head);

  };

  return list;
};







var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var theList = LinkedList();
theList.addToTail(9);
theList.addToTail(10);
theList.addToTail(11);
theList.addToHead(8);
theList.removeTail();
// theList.removeHead();


//Doubly-Linked List
//Properties : addToTail//removeHead//contains//addToHead//removeTail
// var DLinkedList = function(){
//   this.head = null;
//   this.tail = null;
//   this._length = 0;
// }

// DLinkedList.prototype.addToTail = function(value) {

//   var newNode = new Node(value);
//   if (!this.head) {
//     this.head = newNode;
//     this.tail = newNode;
//     this._length++;
//   } else {
//     var currentNode = this.head;
//     while (currentNode.next) {
//       currentNode = currentNode.next;
//     }
//       currentNode.next = newNode;
//       newNode.prev = currentNode;
//       this.tail = newNode;
//       this._length++;
//   }
// }

// DLinkedList.prototype.removeHead = function() {
//   var currentNode = this.head.next;
//   this.head = currentNode;
//   currentNode.prev = null;
//   this._length--;
// }

// DLinkedList.prototype.contains = function(target) {
//   var currentNode = this.head;
//   if (currentNode.value === target) {
//     return true;
//   }
//   while (currentNode.next) {
//     currentNode = currentNode.next;
//     if (currentNode.value === target) {
//       return true;
//     }
//   }
//   return false;
// }



// var Node = function(value){
//   var node = {};
//   node.value = value;
//   node.prev = null;
//   node.next = null;
// }

// var newDLinkedList = new DLinkedList();
// newDLinkedList.addToTail(9);
// newDLinkedList.addToTail(10);
// newDLinkedList.addToTail(11);


















