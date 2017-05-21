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



binarySearchTreeMethod.depthFirstLog = function(callback) {

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



var result = [];
var func = function(val) { result.push(val); };
var binarySearchTree = new BinarySearchTree(20);
console.log(binarySearchTree.insert(1));
binarySearchTree.insert(35);
binarySearchTree.contains(35);
binarySearchTree.insert(6);
binarySearchTree.depthFirstLog(func);

