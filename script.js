function clicado(){
    alert("Tem uma mãe solteira a 300 m de vc");
}
clicado = ()=>alert ("Tem uma mãe solteira a 300 m de vc");
mensagem = (msg) => console.log(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros = (c,j) => mult(c,div(j,100));
montante = (c,j) => soma(juros(c,j),c)

mensagem(soma(4,soma(7,soma(11,15))));

mensagem(sub(18,7));

mensagem(soma(2,(div(2,2))));

mensagem(mult(420,div(18,100)));

mensagem(montante(420,18));

