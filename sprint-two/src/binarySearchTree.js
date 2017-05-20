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
	var search = function(node) {
		var currentNode = node;
		if (value < currentNode.value && currentNode.left === null) {
			return currentNode.left = newNode;
		}
		if (value > currentNode.value && currentNode.right === null) {
			return currentNode.right = newNode;
		}
		if (value < currentNode.value && currentNode.left !== null) {
			 currentNode = currentNode.left;
		}
		if ( value > currentNode.value && currentNode.right !== null) {
			 currentNode = currentNode.right;
		}
		search(currentNode);
	}
	search(this);
};

binarySearchTreeMethod.contains = function(value) {
	var search = function(node) {
		var currentNode = node;
		if (value === currentNode.value) {
			return true;
		}
		if (value < currentNode.value && currentNode.left === null) {
			return false;
		}
		if (value > currentNode.value && currentNode.right === null) {
			return false;
		}
		if (value < currentNode.value && currentNode.left !== null) {
			currentNode = currentNode.left;

		}
		if (value > currentNode.value && currentNode.right !== null) {
			currentNode = currentNode.right;
		}
		
		var temp = search(currentNode);
		return temp;

	}
	return search(this);
	// return result;
};

				// 20
		  //   1       35
		  //     6


debugger;
binarySearchTreeMethod.depthFirstLog= function(callback) {
	callback(this.value);
	var search = function(node) {
		var currentNode = node;
		var searchLeft = function(node){
			var curr = node;
			if(node.left) {
				callback(node.left.value);
				curr = node.left;
				search(curr);
			}
		}
		var searchRight = function(node) {
			var curr = node;
			if(node.right) {
				callback(node.right.value);
				curr = node.right;
				search(curr);
			}
		}
		searchLeft(currentNode);
		searchRight(currentNode);
	}
	search(this);
};



var result = [];
var func = function(val) { result.push(val); };
var binarySearchTree = new BinarySearchTree(20);
binarySearchTree.insert(1);
binarySearchTree.insert(35);
binarySearchTree.contains(35);
binarySearchTree.insert(6);
binarySearchTree.depthFirstLog(func);

