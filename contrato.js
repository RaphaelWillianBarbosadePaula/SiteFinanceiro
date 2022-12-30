
function calcular (){
    var sl = parseInt(document.getElementById("sl").value);
    var tt = parseInt(document.getElementById("tt").value);
    var fv = parseInt(document.getElementById("fv").value);
    console.log(sl);
    
var vr1 = 0;
var ferias = 0;

var vr = 0;

//Para cada mês de trabalho deverá ser adicionado 8% de FGTS
if (tt>0) {
  (vr1 = (tt * sl) * 0.08);
}

//Se possui férias vencidas deverá ser feito o cálculo de férias (⅓ do salário), a cada 12 meses trabalhados
if (fv == true){
  ferias = Math.floor (tt/12) * (sl * (1/3));
}

console.log(vr1);
console.log(ferias);

//Somar o salário do mês atual
  vr = vr1 + ferias + sl

//Exibir o valor final da rescisão
    document.getElementById("vr").value = vr.toFixed(2);
  }