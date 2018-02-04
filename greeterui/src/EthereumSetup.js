import Web3 from 'web3';
const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":"function"}]
var greeterAddress = '0x9550f40f7660fc54cf7ac3b1be6da5968336b07d';
const greeterContract = ETHEREUM_CLIENT.eth.contract(greeterABI).at(greeterAddress);
export {greeterContract};
