function inserir(valor) {
    //recebe os valores dos campos
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;
    //insere os numeros do teclado nos campos 
    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }
}

function corrige() {
    //zera os campos
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
}


function votar() {
    //recebe os valores convertendo para inteiro
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;
    var candidato = valor1 + valor2;
    //verifica se exixstir o voto ele soma + 1
    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
    } else {
        sessionStorage.setItem(candidato, 1);
        
    }
    //validação de campo vazio
    if(valor1 && valor2 !== ""){
        alert("Confirmado voto no candidato "+candidato)
        document.getElementById("campo1").value = "";
        document.getElementById("campo2").value = "";
    }else{
    alert('Insira o Numero do candidato');
}
}

function resultado() {
    //varre a session storage e exibe no HTML
    document.getElementById("resultado").innerHTML=""
    var i = 0;
    while(i<100){
        if (sessionStorage.getItem(i) !== null) {
            
            document.getElementById("resultado").innerHTML += "Candidato     "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>";
   
        } 
        i++;
        
    }
    document.getElementById("resultado").innerHTML += "Voto em Branco  "+sessionStorage.getItem('Voto em Branco', i)+" votos<br/>";
    
}

function branco(){
    
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    var candidato2 = 'Voto em Branco';
    //armazena o voto em branco na sessionStorage
    if (sessionStorage.getItem(candidato2) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato2)) + 1;
        sessionStorage.setItem(candidato2, votos);
    } else {
        sessionStorage.setItem(candidato2, 1);
        
    }
   
        alert("Confirmado voto em Branco")
        document.getElementById("campo1").value = "";
        document.getElementById("campo2").value = "";
  
}


