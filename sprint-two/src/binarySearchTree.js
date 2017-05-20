var BinarySearchTree = function(value) {
	var someInstance = Object.create(binarySearchTree);
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
var binarySearchTree = {};

binarySearchTree.insert = function(value) {
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

binarySearchTree.contains = function(value) {
	var search = function(node) {
		var currentNode = node;
		if (value === currentNode.value) {
			return true;
		}
		if (value < currentNode.value && currentNode.left !== null) {
			currentNode = currentNode.left;
		}
		if (value < currentNode.value && currentNode.left === null) {
			return false;
		}
		if (value > currentNode.value && currentNode.right !== null) {
			currentNode = currentNode.right;
		}
		if (value > currentNode.value && currentNode.right === null) {
			return false;
		}
		search(currentNode);
	}
	search(this);
};

binarySearchTree.depthFirstLog= function(callback) {
	var apply = function(node){
		var currentNode = node;
		var leftNode;
		var rightNode;
		callback(node.value);
		if (currentNode.right !== null) {
			rightNode = currentNode.right;
		}
		if (currentNode.left !== null) {
			leftNode = currentNode.left;
		}
		callback(leftNode);
		callback(rightNode);
		if (rightNode) {
			apply(rightNode);
		}
		if (leftNode) {
			apply(leftNode);
		}

	}
};

debugger;
var binarySearchTree = new BinarySearchTree(20);
binarySearchTree.insert(2);
binarySearchTree.insert(3);
binarySearchTree.contains(3);
binarySearchTree.insert(6);
binarySearchTree.contains(7);

