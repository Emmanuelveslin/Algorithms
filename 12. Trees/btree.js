var BST = function () {
        /*
        * Class: Node
        *
        * A BST node constructor
        *
        */
    var Node = function (leftChild, key, value, rightChild) {
            return {
                leftChild: (typeof leftChild === "undefined") ? null : leftChild,
                key: (typeof key === "undefined") ? null : key,
                value: (typeof value === "undefined") ? null : value,
                rightChild: (typeof rightChild === "undefined") ? null : rightChild
            };
        },
        
        /*
         * Variable: root
         *
         * The root nade of the BST.
         */
        root = new Node(),
        
        /*
         * Method: searchNode
         *
         * Search through a binary tree.
         *
         * Parameters:
         *     node - the node to search on.
         *     key - the key to search for (as an integer).
         *
         * Returns:
         *     the value of the found node,
         *     or null if no node was found.
         *
         */
        searchNode = function (node, key) {
            if (node.key === null) {
                return null; // key not found
            }
            
            var nodeKey = parseInt(node.key, 10);

            if (key < nodeKey) {
                return searchNode(node.leftChild, key);
            } else if (key > nodeKey) {
                return searchNode(node.rightChild, key);
            } else { // key is equal to node key
                return node.value;
            }
        },
        
        /*
         * Method: insertNode
         *
         * Insert into a binary tree.
         *
         * Parameters:
         *     node - the node to search on.
         *     key - the key to insert (as an integer).
         *     value - the value to associate with the key (any type of object).
         *
         * Returns:
         *     true.
         *
         */
        insertNode = function (node, key, value) {
            if (node.key === null) {
                node.leftChild = new Node();
                node.key = key;
                node.value = value;
                node.rightChild = new Node();
                return true;
            }
            
            var nodeKey = parseInt(node.key, 10);

            if (key < nodeKey) {
                insertNode(node.leftChild, key, value);
            } else if (key > nodeKey) {
                insertNode(node.rightChild, key, value);
            } else { // key is equal to node key, update the value
                node.value = value;
                return true;
            }
        };
    
    return {
        /*
         * Method: search
         *
         * Search through a binary tree.
         *
         * Parameters:
         *     key - the key to search for.
         *
         * Returns:
         *     the value of the found node,
         *     or null if no node was found,
         *     or undefined if no key was specified.
         *
         */
        search: function (key) {
            var keyInt = parseInt(key, 10);

            if (isNaN(keyInt)) {
                return undefined; // key must be a number
            } else {
                return searchNode(root, keyInt);
            }
        },

        /*
         * Method: insert
         *
         * Insert into a binary tree.
         *
         * Parameters:
         *     key - the key to search for.
         *     value - the value to associate with the key (any type of object).
         *
         * Returns:
         *     true.
         *
         */
        insert: function (key, value) {
            var keyInt = parseInt(key, 10);
            
            if (isNaN(keyInt)) {
                return undefined; // key must be a number
            } else {
                return insertNode(root, parseInt(key, 10), value);
            }
        }
    };
};

var ipTree = new BST();
ipTree.insert(4, "test4");
ipTree.insert(1, "test1");
ipTree.insert(10, "test10");
ipTree.insert(2, "test2");
ipTree.insert(3, "test3");
ipTree.insert(9, "tes9");
ipTree.insert(8, "test8");
ipTree.insert(5, "test5");
ipTree.insert(7, "test7");
ipTree.insert(6, "test6");

print(ipTree.search(3));