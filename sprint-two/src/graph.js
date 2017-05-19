

// Instantiate a new graph
var Graph = function(node) {
	this.node = [];
	this.edge = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.node.push(node);
	this.edge[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.node.indexOf(node) >= 0;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var i = this.node.indexOf(node);

	this.node.splice(i,1);
	this.edge.splice(node,1);
	_.each(this.edge, function(each){
		if (each.indexOf(node) >= 0){
			each.splice(each.indexOf(node),1);
		}
	});
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if (this.node.indexOf(fromNode) === -1) {
		return false;
	} else {
		return this.edge[fromNode].indexOf(toNode) >= 0 ? true: false; 
	}
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.edge[fromNode].push(toNode);
	this.edge[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var i = this.edge[fromNode].indexOf(toNode);
	this.edge[fromNode].splice(i,1);
	var j = this.edge[toNode].indexOf(fromNode);
	this.edge[toNode].splice(j,1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	// };
	_.each(this.node, function(each){
		cb(each);
	});
/*
 * Complexity: What is the time complexity of the above functions?
 */
};

