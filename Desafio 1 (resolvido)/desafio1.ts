

// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/*
let employee = {};
employee.code = 10;
employee.name = "John";
*/



// Resolução 

interface employee{
    code: number,
    name: string,
}

let IEployee: employee = {
    code: 10,
    name: 'jhow'
}

