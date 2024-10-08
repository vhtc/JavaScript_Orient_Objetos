import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

// const cliente1 = new Cliente()
// cliente1.nome = 'Ricardo'
// cliente1.cpf = 123456789

const cliente1 = new Cliente('Ricardo', 123456789)

// const cliente2 = new Cliente()
// cliente2.nome = 'Alice'
// cliente2.cpf = 987654321

const conta1 = new ContaCorrente(cliente1, 1001); //passando como parametros direto na Conta Corrente
// conta1.cliente = cliente1
// conta1.cliente.nome = 'Ricardo'
// conta1.cliente.cpf = 123456789
// conta1.agencia = 1001

conta1.depositar(500)
const valorSacado = conta1.sacar(50)

const conta2 = new ContaCorrente();
conta2.cliente = new Cliente('Alice', 987654321);
// conta2.cliente.nome = 'Alice'
// conta2.cliente.cpf = 987654321
conta2.agencia = 1002

const conta3 = new ContaCorrente()
conta3.cliente = new Cliente('Victor', 1324567896)


let valor = 50
conta1.transferir(valor, conta2)

console.log(conta1)
console.log(conta2)
console.log(conta3);