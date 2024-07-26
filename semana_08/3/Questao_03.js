let nomeAluno = "João da Silva";
let primeiraNota = 7;
let segundaNota = 8.5;


function imprimeNotas(aluno, primeiraNota, segundaNota) {
    let primeiroConceito = primeiraNota * 0.6;
let segundoConceito = segundaNota * 0.4;
let somaMultiplicacoes = primeiroConceito + segundoConceito
    alert(`Aluno: ${aluno} Primeira nota: ${primeiraNota} Segunda nota: ${segundaNota}`)
    alert("Nota total: " + somaMultiplicacoes.toFixed(2))
}
imprimeNotas(nomeAluno, primeiraNota, segundaNota);

nomeAluno = "Fernanda Lopes";
primeiraNota = 10;
segundaNota = 8;

imprimeNotas(nomeAluno, primeiraNota, segundaNota);

nomeAluno = "Matheus Braga";
primeiraNota = 9;
segundaNota == 6;

imprimeNotas(nomeAluno, primeiraNota, segundaNota);

