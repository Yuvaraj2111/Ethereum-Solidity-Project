const abi = [
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_password",
                "type": "string"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_id",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_rollno",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_course",
                "type": "string"
            }
        ],
        "name": "enrollStudent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "student",
        "outputs": [
            {
                "internalType": "address",
                "name": "id",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "rollno",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "course",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "mark",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "num",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "teacher",
        "outputs": [
            {
                "internalType": "address",
                "name": "id",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "password",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_password",
                "type": "string"
            }
        ],
        "name": "teacherLogin",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
]
