let num1 = "";
let num2 = "";
let valor = "";
let temPonto = false;
let executa = "";

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

mostrar_display = (msg)=>{
    document.getElementById("resultado").value = msg;
}
function digitando(tecla) {
    if(tecla == ","){
    if(!temPonto){
        valor += tecla;
        mostrar_display(valor);
        temPonto = true;
    }
    return;
    }
    valor += tecla;
    mostrar_display(valor);
}

    function operacao(op){
        executa = op;
        num1 = valor;
        valor ="";
}
    function calcula(){
        if (executa != "") {
            num2 = valor;
            if (executa == "soma") mostrar_display(soma(number(num1), number(num2)));
            if (executa == "sub") mostrar_display(sub(number(num1), number(num2)));
            if (executa == "mult") mostrar_display(multi(number(num1), number(num2)));
            if (executa == "div") mostrar_display(div(number(num1), number(num2)));
            num1 = "";
            num2 = "";
            valor = "";
            temPonto = false;
            executa = "";
        }
    }

mensagem(soma(4,soma(7,soma(11,15))));

mensagem(sub(18,7));

mensagem(soma(2,(div(2,2))));

mensagem(mult(420,div(18,100)));

mensagem(montante(420,18));
