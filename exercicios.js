// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)

}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = Number(prompt("Digite a altura"))
  largura = Number(prompt("Digite a largura"))

    console.log(altura * largura);

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, AnoNascimento) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Digite seu idade?"))
  AnoNascimento = Number(prompt("Digite seu ano de nascimento"))

    console.log(anoAtual - AnoNascimento);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let imc = peso / (altura * altura )

    return imc
  
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome =prompt(("Qual seu nome?"))
  idade =prompt(("Qual sua idade?"))
  email =prompt(("Qual seu email"))

    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
} 


// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt(("Qual sua primeira cor favorita"))
  cor2 = prompt(("Qual sua segunda cor favorita"))
  cor3 = prompt(("Qual sua terceira cor favorita"))

    const cores = [cor1, cor2, cor3]
    
      console.log(cores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(frase) {
  // implemente sua lógica aqui
  
  
  
  return frase.toUpperCase()

}

let texto = "oi"
let textoMaiusculo = trasformarMaiusculo(texto)
console.log(textoMaiusculo);

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  let saida = custo / valorIngresso

  return saida

}

console.log(calculaIngressosEspetaculo(5000,50));

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 
return string1.length === string2.length

}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

  return array[0]

}



// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1] 
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let texto1 = array[0]
  let texto2 = array[array.length - 1]
  array[0] = texto2 
  array[array.length - 1] = texto1

  return array  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  
  
  return string1.toUpperCase() === string2.toUpperCase()
  
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  let anoAtual = Number(prompt("Qual o ano atual ?"))
  let anoDeNascimento = Number(prompt("Qual seu ano de nascimento?"))
  let dataRg = Number(prompt("Quando seu Rg foi emitido?"))
  let idade = anoAtual - anoDeNascimento
  let renovacaoRg = anoAtual - dataRg 
  
  
  if(idade <= 20 && renovacaoRg >= 5) {

    console.log(true);
    // console.log("Seu RG precisa ser renovado de 5 em 5 anos.");
    
  } else if (idade <= 50 && renovacaoRg >= 10) {

    console.log(true);
    // console.log("Seu RG precisa ser renovado de 10 em 10 anos.");
  } else if (idade > 50 && renovacaoRg >= 15){
    
    console.log(true);
    // console.log("Para pessoa acima dos 50 anos, deve ser renovada de 15 em 15 anos.");
  
  } else{
    console.log(false);
  }

  
}


// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

//  let ano = prompt("Insira um ano: ")

 let year2 = ano % 400 === 0
 let year3 = ano % 4 === 0
 let year4 = ano % 100 !== 0


 if(year2 || (year3 && year4)){
  
  return true
 }else{

  return false
 }
  
}



// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

  const idade = prompt("Você tem mais de 18 anos ?")
  
  const ensino = prompt("Você possui ensino médio completo ?")
  
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso ?")


 if(idade == `sim` && ensino == `sim` && disponibilidade == `sim`){

  console.log(true);
 }else{

  console.log(false);
 } 
}






