<?php
defined('BASEPATH') OR exit('What Are You Looking For ?');
?>
<div class="block"> 
	<div class="header"> 
		<h2>Sidang Tugas Akhir (<span><a onclick='refreshPageSeminarTad()' style='cursor:pointer;'><i class='icon-refresh' title='refresh table'></i></a></span>)</h2> 
	</div> 
	<div class="content controls"> 
		<ul id="wizard-titles" class="stepy-titles">
			<li id="wizard-title-0" class="" style="cursor: default;"><div>Langkah 1</div><span>Upload</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 2</div><span>Informasi</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 3</div><span>Upload</span></li>
			<li id="wizard-title-1" class="current-step" style="cursor: default;"><div>Langkah 4</div><span>Informasi</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 5</div><span>Get File Support</span></li>
		</ul>
		<div action="" method="POST" id="wizard"> 
			<fieldset title="Step 1" class="step" id="wizard-step-0" style="display: block;"> 
				<legend>Fields</legend> 
				<div class=form-row style='margin-top : 10px;'>
					<div class="col-md-3" style='color : white;'>File pendukung </div>
					<div class="col-md-9">
						<div style='text-align : left;'>
							<button onclick="showFujPDFTAD('22');" class="btn btn-base btn clean"><span class='icon-download-alt'> unduh fuj 22</span></button>
							&nbsp;&nbsp;
							<button onclick="showFujPDFTAD('23');" class="btn btn-base btn clean"><span class='icon-download-alt'> unduh fuj 23</span></button>
						</div>
					</div>
				</div> 
				<div class="panel panel-info"> 
					<div class="panel-heading"> 
						<h3 class="panel-title">Informasi TA</h3> 
					</div> 
					<div class="panel-body"> Sedang proses menyetujui oleh Koordinator TA, mohon tunggu untuk langkah selanjutnya
					
					</div> 
					<div class="panel-footer">Terima kasih
					</div> 
				</div>
			</fieldset>
		</div> 
	</div> 
</div>