function calcular() {
    var VP = parseInt(document.getElementById("VP").value);
    var MDL1 = parseInt(document.getElementById("MDL1").value);
    console.log(VP);
  
    var MDL = 0;
    var PIS = 0;
    var COFINS = 0;
    var VI = 0;
    var VCI = 0;
    var VL = 0;
    var MDL2 = 0;
  
  // PIS
    
      PIS = VP * 0.0065;
    

  // COFINS    
    
            COFINS = VP * 0.03;
      

  // MDL
      
        MDL = MDL1/100;
        MDL2 = MDL*VP;
      

     VI = PIS + COFINS;

     VCI = VP + VI;

     VL = VCI + MDL2;
      

     console.log(VP);
    console.log(PIS);
    console.log(COFINS);
    console.log(MDL2);
    console.log(VI);
    console.log(VCI);
    console.log(VL);
  
    document.getElementById("PIS").value = PIS;
    document.getElementById("COFINS").value = COFINS;
    document.getElementById("VI").value = VI;
    document.getElementById("VCI").value = VCI;
    document.getElementById("VL").value = VL;
  }
  