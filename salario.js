function calcular() {
  var sb = parseInt(document.getElementById("sb").value);
  console.log(sb);

  var desconto = 0;
  var inss = 0;
  var fgts = 0;
  var irpf = 0;
  var sl = 0;

  // INSS
  if (sb <= 1212.0) {
    inss = sb * 0.075;
  } else if (sb >= 1212.01 && sb <= 2427.35) {
    inss = sb * 0.09;
  } else if (sb >= 2427.36 && sb <= 3641.03) {
    inss = sb * 0.12;
  } else if (sb >= 3641.04) {
    inss = sb * 0.14;
  }

  // FGTS

  if (sb > 0) {
    fgts = sb * 0.08;
  }

  // IRPF
  if (sb <= 1903.98) {
    irpf = sb - 0.0;
  } else if (sb >= 1903.99 && sb <= 2826.65) {
    irpf = sb * 0.075;
  } else if (sb >= 2826.66 && sb <= 3751.05) {
    irpf = sb * 0.015;
  } else if (sb >= 3751.06 && sb <= 4664.68) {
    irpf = sb * 0.225;
  } else if (sb >= 4664.69) {
    irpf = sb * 0.275;
  }

  console.log(inss);
  console.log(irpf);

  // Salário Líquido
  sl = sb - (inss + irpf);
 

  document.getElementById("sl").value = sl;
  document.getElementById("inss").value = inss;
  document.getElementById("irpf").value = irpf;
  document.getElementById("fgts").value = fgts;
}
