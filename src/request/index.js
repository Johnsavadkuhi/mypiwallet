export const GET_BLOCK_NUMBER = {
    query: `
    query {
        getBlockNumber
    }
    `
}

export const GET_PENDING_TRANSACTIONS = {
    query: `
    query{
   getPendingTransactions
   {
    hash
    nonce
    blockHash
    transactionIndex
    from
    to
    value
    gasPrice
    gas
    input
        }
    }`
};

export const GET_BLOCK = function (input) {
    return {
        query: `
    query {
        getBlock(numberBlock:"${input}"){
number
hash
parentHash
nonce
sha3Uncles
logsBloom
transactionsRoot
stateRoot
receiptsRoot
miner
difficulty
totalDifficulty
extraData
size
gasLimit
gasUsed
timestamp
            
        }
    }           
    `
    }
};

export const GET_TRANSACTIONS = function (input) {
   
    query: `
    query { 
    getTransaction(transactionHash: "${input}"){
    hash
    nonce
    blockHash
    transactionIndex
    from
    to
    value
    gasPrice
    gas
    input

        }
    }
    
    
    `
}



