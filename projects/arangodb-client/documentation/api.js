YUI.add("yuidoc-meta", function(Y) {
   Y.YUIDoc = { meta: {
    "classes": [
        "action",
        "admin",
        "aqlfunction",
        "batch",
        "collection",
        "cursor",
        "database",
        "document",
        "edge",
        "endpoint",
        "graph",
        "import",
        "index",
        "jobs",
        "query",
        "simple",
        "transaction",
        "traversal",
        "users"
    ],
    "modules": [
        "action",
        "admin",
        "aqlfunction",
        "arango",
        "batch",
        "collection",
        "cursor",
        "database",
        "document",
        "edge",
        "endpoint",
        "graph",
        "import",
        "index",
        "jobs",
        "query",
        "simple",
        "transaction",
        "traversal",
        "users"
    ],
    "allModules": [
        {
            "displayName": "action",
            "name": "action",
            "description": "The api module \"action\" to define user actions in ArangoDB."
        },
        {
            "displayName": "admin",
            "name": "admin",
            "description": "The api module to do administrative requests on Arango"
        },
        {
            "displayName": "aqlfunction",
            "name": "aqlfunction",
            "description": "The api module \"aqlfunction\" to define user functions in ArangoDB."
        },
        {
            "displayName": "arango",
            "name": "arango"
        },
        {
            "displayName": "batch",
            "name": "batch",
            "description": "The api module \"batch\" to perform batch requests. Calling \"start\" sets the connection into batch mode and collects\nevery request. Calling \"Exec\" switches back to normal mode and executes the batch."
        },
        {
            "displayName": "collection",
            "name": "collection",
            "description": "The api module to do perform operations on collections."
        },
        {
            "displayName": "cursor",
            "name": "cursor",
            "description": "The api module to validate, test, execute arangodb queries and fetch the data.."
        },
        {
            "displayName": "database",
            "name": "database",
            "description": "The api module to perform database related operations on ArangoDB."
        },
        {
            "displayName": "document",
            "name": "document",
            "description": "The api module to perform document related operations on ArangoDB."
        },
        {
            "displayName": "edge",
            "name": "edge",
            "description": "The api module to perform edge related operations on ArangoDB."
        },
        {
            "displayName": "endpoint",
            "name": "endpoint",
            "description": "The api module to maintain endpoints in ArangoDB."
        },
        {
            "displayName": "graph",
            "name": "graph",
            "description": "The api module to perform graph related operations on ArangoDB.\n\nThe underlying collections of the graph are still accessible using the standard methods for collections. \nHowever the graph module adds an additional layer on top of these collections giving you the following guarantees:\n\n- All modifications are executed transactional\n- If you delete a vertex all edges will be deleted, you will never have loose ends\n- If you insert an edge it is checked if the edge matches the definition, your edge collections will only contain valid edges\nThese guarantees are lost if you access the collections in any other way than the graph module or AQL."
        },
        {
            "displayName": "import",
            "name": "import",
            "description": "The api module to import data into ArangoDB."
        },
        {
            "displayName": "index",
            "name": "index",
            "description": "The api module to create indices for collections in ArangoDB."
        },
        {
            "displayName": "jobs",
            "name": "jobs",
            "description": "The api module to request information about async running jobs in ArangoDB."
        },
        {
            "displayName": "query",
            "name": "query",
            "description": "The api module to create and execute queries running in ArangoDB.\nThis module wraps the cursor module."
        },
        {
            "displayName": "simple",
            "name": "simple",
            "description": "The api module to do perform simple queries in ArangoDB."
        },
        {
            "displayName": "transaction",
            "name": "transaction",
            "description": "The api module to execute transactions in ArangoDB."
        },
        {
            "displayName": "traversal",
            "name": "traversal",
            "description": "The api module to perform a traversal on the edges of a start vertex."
        },
        {
            "displayName": "users",
            "name": "users",
            "description": "The api module to maintain users in ArangoDB."
        }
    ]
} };
});