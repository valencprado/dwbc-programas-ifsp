class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }
    nomeCompleto() {
        return this.primeiroNome + ' ' + this.segundoNome;
    }
    media() {
        const media = (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
        return media.toFixed(2);
    }
    situacao() {
        const media = this.media();

        if (media > 6) {
            alert("Aluno aprovado");
        } else {
            alert("Aluno reprovado");
        }
    }
}

let aluno1 = new Aluno("Valentina", "Prado", 6, 9);
let aluno2 = new Aluno("Fabio", "Teixeira", 5, 10);
let aluno3 = new Aluno("Felipe", "Basile", 8, 8);
let aluno4 = new Aluno("José", "Silva", 6, 2);
let aluno5 = new Aluno("Michael", "Jackson", 7, 5);
const alunos = []
alunos.push(aluno1, aluno2, aluno3, aluno4, aluno5)

function exibirDados() {
    alunos.forEach(aluno => {
        alert("Nome completo: " + aluno.nomeCompleto());
        alert("Média de " +  aluno.primeiroNome + ": " + aluno.media());
        aluno.situacao();
    })
}

exibirDados();

