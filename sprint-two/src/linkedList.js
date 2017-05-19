var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  //////list:d //////    a(n:b)    b(n:c)     c(n:d)  d()

  //{}
// debugger;
  list.addToTail = function(value) {
    //take a value and add it to the tail;
   // debugger;
   var newNode = new Node(value);
   if(list.head === null){
    list.head = newNode;
    list.tail = newNode;

   }else{

    // list.head.next = newNode;
    // list.tail = newNode;
    // list.tail.next = null;
    var currentNode = list.tail;
    currentNode.next = newNode;
    list.tail = newNode;
    list.tail.next = null;




   }

  };
  // debugger;
  // debugger;
    list.removeHead = function() {
    // LinkedList.addToTail(4);
    //     LinkedList.addToTail(5);

    // var headNode = list.head;
    var headValue = list.head.value;
    list.head = list.head.next;
    return headValue;
  };
  // {list.head.next : {  : {  : {    }}}}
  debugger;
  list.contains = function(target) {
    // set a var current node , will be updated later
    var currentNode = list.head;
    var search = function(node){
      if( node.value === target ){
        return true;
      }
      if( node.next === null ){
        return false;
      }
      return search(node.next);
    }
   return search(currentNode);

    //check if the value = target   ----> if yes, return true;
    //check if the next node is null -----> if yes, return false;

    // else; continue the operation;
  }
  return list;
};

//this.insertAfter = function(t, d) { 
//  var current = this.start; 
//  while (current !== null) { 
//   if (current.data === t) { 
//    var temp = List.makeNode(); 
//    temp.data = d; 
//    temp.next = current.next; 
//    if (current == this.end) this.end = temp; 
//    current.next = temp; 
//    return; 
//   }
//   current = current.next;
//  }
// };




var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
