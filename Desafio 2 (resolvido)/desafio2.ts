// Como podemos melhorar o esse código usando TS? 

/*
let pessoa1 = {};
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
}
*/

// Resolução

enum tdProfissoes{
    atriz,
    padeiro,
}

class humano{
    nome:string;
    idade:number;
    profissao:tdProfissoes
    constructor(nome:string, idade:number, profissao:tdProfissoes){
        this.nome = nome,
        this.idade = idade,
        this.profissao = profissao
    }
}

let pessoa1 = new humano('maria', 29, tdProfissoes.atriz);
let pessoa2 = new humano('roberto', 19,tdProfissoes.padeiro);
let pessoa3 = new humano('laura', 32, tdProfissoes.atriz);
let pessoa4 = new humano('carlos', 19, tdProfissoes.padeiro)


