let input = document.querySelector("#display");
function limpar(){
    input.value="";
    document.querySelector("#history").innerHTML = "";
    history.textContent="";
}
function add_numero(numero) {
    let operacao=input.value;
    input.value=operacao+=numero;
}
function add_operador(opr){
        let operacao=input.value;
        input.value=operacao+=opr;
}

document.addEventListener('keydown', function (event){
    if (!isNaN(event.key)|| event.key== "/"|| event.key=="*"||event.key =="+"|| event.key=="-"){
        input.value = input.value + event.key;
    }
    else if(event.key=="%"){
        input.value = input.value + "/100";
    }
    else if(event.key=="^"){
        input.value = input.value + "**";
    }
    if ( event.key== "="|| event.key=="Enter"){
        total();
    }
    if(event.key == "Backspace"|| event.key == "delete" || event.key == "Escape"){
        limpar();
    }
});
function total() {
    document.querySelector("#history").innerHTML=input.value;
    let resultado=input.value;
    input.value=eval(resultado);
    
}
function raiz_quadrada(){
    document.querySelector("#history").innerHTML=input.value;
    let resultado=input.value;
    input.value=Math.sqrt(resultado);
}
