function Enviar()
{
var Marta= document. getElementById("nomeid")

if(Marta.value != "") {
   alert('Obrigado Sr(a)' + Marta.valeu + 'Seu formulário foi enviado e descartado')
}
}

function limpa_formulario_cep(){
// essa função limpa o formulario e deixa ele sem nada
//escrito substituindo por vazio("")

document.getElementById('rua').value=("");
document.getElementById('bairro').value=("");
document.getElementById('cidade').value=("");
document.getElementById('uf').value=("")
}

function meu_callback(conteudo){
if ( "erro" in conteudo){
//caso não dê nenhum erro, os campos serão preenchidos com informações
//referentes ao cep informado
 document.getElementById("rua").value = (conteudo.logradouro);
 document.getElementById("bairro").value = (conteudo.bairro);
 document.getElementById("cidade").value = (conteudo.cidade);
 document.getElementById("uf").value = (conteudo.uf);
}
else{
    limpa_formulario_cep();
alert("Cep não encontrado")
}

function pesquisacep(valor){
//Nova variavel "cep" somente com digitos.
var cep=valor.replace (/\D/g, '');
//Verifica se campo cep possui valor informado.

if(cep!=""){
  var validacep= /^[0-9] {8}&/;

if(validacep.text(cep)){
    document.getElementById('rua').value='...';
    document.getElementById('bairro').value='...';
    document.getElementById('cidade').value='...';
    document.getElementById('uf').value='...';
//cria um elementoJavascript, ele vai ser usado para acessar
//o servidor dos correios(VIaCEP)
var script = document.createElement('script')
script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

}







}
}
}









function newFunction() {
    limpa_formulario_cep();
}

