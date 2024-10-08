import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

const cliente1 = new Cliente('Ricardo', 123456789)

const conta1 = new ContaCorrente(cliente1, 1001); //passando como parametros direto na Conta Corrente

const cliente2 = new Cliente('Alice', 987654321)
const conta2 = new ContaCorrente(cliente2, 1002);

const cliente3= new Cliente('Victor', 1324567896)
const conta3 = new ContaCorrente(cliente3, 1003)

console.log(conta1)
console.log(conta2)
console.log(conta3)
console.log(ContaCorrente.numeroContas)