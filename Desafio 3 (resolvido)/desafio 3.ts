let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let saldoTotal = 0
limparSaldo()


function somarAoSaldo(soma:any) {
    if(campoSaldo){
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}

function limparSaldo() {
    if(campoSaldo){
        saldoTotal = 0
        campoSaldo.innerHTML = '';
    }
}

if(botaoAtualizar){
    botaoAtualizar.addEventListener('click', () => {
        somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar){
    botaoLimpar.addEventListener('click', () => {
        limparSaldo();
    });
}
