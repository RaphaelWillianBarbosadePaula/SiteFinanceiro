<?php
include('header.html');
include('menu.html');
include('footer.html');
?>

<body>
    <div class="box">
			
				<div class="main-form">
					<label>Valor do Produto:</label>
					<input name="VP" id="VP" type="text" />
					<label>Porcentagem de lucro desejada:</label>
					<input name="MDL1" id="MDL1" type="text" />
                    <button onClick="calcular()" type="button" class="btn btn-primary btn-md" >Calcular</button>
					<ul>
					<li>PIS:</li> <input name="PIS"id="PIS" class="input"  />
					<li>COFINS:</li> <input name="COFINS"id="COFINS" class="input"  />
					<li>Valor dos impostos:</li> <input name="VI" id="VI" class="input" />
					<li>Valor com imposto:</li> <input name="VCI"id="VCI" class="input" />
					<li>Valor Líquido:</li> <input name="VL"id="VL" class="input" />
					</ul>
				</div>

				
				
			
		</div>
</body>

<script src="../assets/js/lucro.js"></script>