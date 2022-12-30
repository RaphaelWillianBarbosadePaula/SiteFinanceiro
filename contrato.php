<?php
include('header.html');
include('menu.html');
include('footer.html');
?>

<body>
    <div class="box">
			
				<div class="main-form">
					<label>Informe o salário líquido: </label>
					<input name="sl" id="sl" type="text" />

					<label>Digite o tempo de trabalho (meses): </label>
					<input name="tt" id="tt" type="text" />

					<label>Digite a quantidade de férias vencidas: </label>
					<input name="fv" id="fv" type="text" />

                    <button onClick="calcular()" type="button" class="btn btn-primary btn-md" >Calcular</button>
					<ul>
					<li>Valor da rescisão:</li> <input name="vr"id="vr" class="input"  />
					</ul>
				</div>

				
				
			
		</div>
</body>

<script src="../assets/js/contrato.js"></script>