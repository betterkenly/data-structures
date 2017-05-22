var BinarySearchTree = function(value) {
	var someInstance = Object.create(binarySearchTreeMethod);
	someInstance.value = value;
	someInstance.left = null;
	someInstance.right = null;

	return someInstance;
};

//

/*
 * Complexity: What is the time complexity of the above functions?
 */
//insert // contains // depthfirstlog
var binarySearchTreeMethod = {};

binarySearchTreeMethod.insert = function(value) {

	var newNode = BinarySearchTree(value);
	var current = this;
	while (current) {
		if (value < current.value && !current.left) {
			return current.left = newNode;
		}
		if (value > current.value && !current.right) {
			return current.right = newNode;
		}
		if (value < current.value && current.left) {
			current = current.left;
		}
		if (value > current.value && current.right) {
			current = current.right;
		}
	}

//second-attempt
	// var newNode = BinarySearchTree(value);
	// if (value < this.value && !this.left) {
	// 	return this.left = newNode;
	// }
	// if (value > this.value && !this.right) {
	// 	return this.right = newNode;
	// }
	// if (value < this.value && this.left) {
	// 	return this.left.insert(value);
	// }
	// if (value > this.value && this.right) {
	// 	return this.right.insert(value);
	// }

// first-attempt
	// var newNode = BinarySearchTree(value);
	// var search = function(node) {
	// 	var currentNode = node;
	// 	if (value < currentNode.value && currentNode.left === null) {
	// 		return currentNode.left = newNode;
	// 	}
	// 	if (value > currentNode.value && currentNode.right === null) {
	// 		return currentNode.right = newNode;
	// 	}
	// 	if (value < currentNode.value && currentNode.left !== null) {
	// 		 currentNode = currentNode.left;
	// 	}
	// 	if ( value > currentNode.value && currentNode.right !== null) {
	// 		 currentNode = currentNode.right;
	// 	}
	// 	search(currentNode);
	// }
	// search(this);

};

binarySearchTreeMethod.contains = function(value) {
	// if (value === this.value) {
	// 	return true;
	// }
	// if (value < this.value && !this.left) {
	// 	return false;
	// }
	// if (value > this.value && !this.right) {
	// 	return false;
	// }
	// if (value < this.value && this.left) {
	// 	return this.left.contains(value);
	// }
	// if (value > this.value && this.right) {
	// 	return this.right.contains(value);
	// }

// second-attempt;
	var current = this;
	while (current) {
		if (current.value === value) {
			return true;
		}
		if (value < current.value && current.left) {
			current = current.left;
		} 
		if (value > current.value && current.right) {
			current = current.right;
		}
		if (value < current.value && !current.left) {
			return false;
		}
		if (value > current.value && !current.right) {
			return false;
		}
	} 

// first-attempt;
	// var search = function(node) {
	// 	var currentNode = node;
	// 	if (value === currentNode.value) {
	// 		return true;
	// 	}
	// 	if (value < currentNode.value && currentNode.left === null) {
	// 		return false;
	// 	}
	// 	if (value > currentNode.value && currentNode.right === null) {
	// 		return false;
	// 	}
	// 	if (value < currentNode.value && currentNode.left !== null) {
	// 		currentNode = currentNode.left;

	// 	}
	// 	if (value > currentNode.value && currentNode.right !== null) {
	// 		currentNode = currentNode.right;
	// 	}
		
	// 	return search(currentNode);

	// }
	// return search(this);
};

				// 20
		  //   1       35
		  //     6

binarySearchTreeMethod.breadthFirstLog = function(callback) {
 //     tree // insert(8,3,10,0,5,67,22,14,33);  should traverse in order 8,3,10,1,6,14,4,7,13
 //      ----
 //       j         <-- level 0
 //     /   \
 //    f      k     <-- level 1
 //  /   \      \
 // a     h      z  <-- level 2
 //  \
 //   d             <-- level 3
 	var queue = [];
 	queue.push(this);
 	var current;
 	while (queue.length) {
 		current = queue.splice(0,1)[0];   //<--- method splice will return array;
 		if (current.left) {
 			queue.push(current.left);
 		}
 		if (current.right) {
 			queue.push(current.right);
 		}
 	}
};

binarySearchTreeMethod.depthFirstLog = function(callback) {

//       tree
 //      ----
 //       j    <-- root
 //     /   \
 //    f      k
 //  /   \      \
 // a     h      z
 //  \
 //   d
 // in order of j,f,a,d,h,k,z
	if (this.value) {
		callback(this.value);
	}
	if (this.left) {
		this.left.depthFirstLog(callback);
	}
	if (this.right) {
		this.right.depthFirstLog(callback);
	}

//first-attempt: 

	// callback(this.value);
	// var search = function(node) {
	// 	var currentNode = node;

	// 	var searchLeft = function(node) {
	// 		var curr = node;
	// 		if(node.left) {
	// 			callback(node.left.value);
	// 			curr = node.left;
	// 			search(curr);
	// 		}
	// 	}

	// 	var searchRight = function(node) {
	// 		var curr = node;
	// 		if(node.right) {
	// 			callback(node.right.value);
	// 			curr = node.right;
	// 			search(curr);
	// 		}
	// 	}

	// 	searchLeft(currentNode);
	// 	searchRight(currentNode);
	// }
	// search(this);
};


debugger;
var result = [];
var func = function(val) { result.push(val); };
var binarySearchTree = new BinarySearchTree(8);
// console.log(binarySearchTree.insert(1));
// binarySearchTree.insert(35);
// binarySearchTree.contains(35);
// binarySearchTree.insert(6);
// binarySearchTree.depthFirstLog(func);
binarySearchTree.insert(3);
binarySearchTree.insert(10);
binarySearchTree.insert(67);
binarySearchTree.insert(22);
binarySearchTree.insert(14);
binarySearchTree.insert(33);
binarySearchTree.insert(0);
binarySearchTree.insert(5);


binarySearchTree.breadthFirstLog(func);
console.log(result);


