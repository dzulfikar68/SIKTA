<?php
defined('BASEPATH') OR exit('What Are You Looking For ?');
?>
<div class="block"> 
	<div class="header"> 
		<h2>Sidang Tugas Akir 2</h2> 
	</div> 
	<div class="content controls"> 
		<ul id="wizard-titles" class="stepy-titles">
			<li id="wizard-title-0" class="" style="cursor: default;"><div>Langkah 1</div><span>Upload</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 2</div><span>Informasi</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 3</div><span>Upload</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 4</div><span>Informasi</span></li>
			<li id="wizard-title-1" class="current-step" style="cursor: default;"><div>Langkah 5</div><span>Upload</span></li>
			<li id="wizard-title-1" class="" style="cursor: default;"><div>Langkah 6</div><span>Informasi</span></li>
		</ul>
		<div action="" method="POST" id="wizard"> 
			<fieldset title="Step 1" class="step" id="wizard-step-0" style="display: block;"> 
				<legend>Fields</legend> 
				<div class=form-row>
					<div class="col-md-3">File pendukung </div>
					<div class="col-md-9">
					<div tittle='download fuj 22' onclick="showFujPDFTAD('22');" style="cursor : pointer; width : 100px; height : 45px; text-align : center; float : left; color : white; background-color : black; border-radius : 45px;">
						<i class="icon-file-alt" style="font-size : 16pt; line-height : 45px;"></i> FUJ22
					</div>
					<div tittle='download fuj 23' onclick="showFujPDFTAD('23');" style="cursor : pointer; width : 100px; height : 45px; text-align : center; float : left; color : white; background-color : black; border-radius : 45px;">
						<i class="icon-file-alt" style="font-size : 16pt; line-height : 45px;"></i> FUJ23
					</div>
					</div>
				</div> 
				<div class=form-row>
					<div class="col-md-3">FUJ 22 </div>
					<div class="col-md-3">
						<button  id="exec-s-k-bimbingan"  class="btn btn-primary btn-block"><span class="icon-upload-alt"></span> Unggah(.pdf)</button>
					</div>
					<div class="col-md-4">
						<a style="color : #666;" id="info-s-k-bimbingan"> : Data kosong</a>
					</div>
					<div class="col-md-2" style="font-size : 13px;">
						<div class="col-md-6">
							<span class="icon-ok pointer" id="true-s-k-bimbingan" title="data di terima" style="color : red"></span>
						</div>
						<div class="col-md-6">
							<span class="icon-remove pointer" id="false-s-k-bimbingan" title="data di tolak" style="color : green"></span>
						</div>
					</div>
				</div> 
				<div class=form-row>
					<div class="col-md-3">FUJ 23 </div>
					<div class="col-md-3">
						<button  id="exec-s-k-peserta"  class="btn btn-primary btn-block"><span class="icon-upload-alt"></span> Unggah(.pdf)</button>
					</div>
					<div class="col-md-4">
						<a style="color : #666;" id="info-s-k-peserta"> : Data kosong</a>
					</div>
					<div class="col-md-2" style="font-size : 13px;">
						<div class="col-md-6">
							<span class="icon-ok pointer" id="true-s-k-peserta" title="data di terima" style="color : red"></span>
						</div>
						<div class="col-md-6">
							<span class="icon-remove pointer" id="false-s-k-peserta" title="data di tolak" style="color : green"></span>
						</div>
					</div>
				</div> 
				<div class="form-row" style="text-align : center; display : inline-block;">
					<div style="max-width : 320px; margin-left : auto; margin-right : auto;">
						<div style="width: 150px; float: left; margin-right : 10px;">
							<button class="btn btn-primary btn-block" id="input-data-seminarta1">Masukan</button>
						</div>
						
						<div style="width: 150px; float : left; margin-left : 10px;">
							<button class="btn btn-primary btn-block" id="resetForm">Bersihkan</button>
						</div>
					</div>			
				</div>
				<div class="form-row">
					<form class="hidden" id=seminar1form method=POST target="frame-layout" enctype="multipart/form-data" action="Classseminartad/setSeminarTA2next2.aspx">
						<input class="hidden" type="file" id="s-k-bimbingan" name="s-k-bimbingan" accept=".pdf">
						<input class="hidden" type="file" id="s-k-peserta" name="s-k-peserta" accept=".pdf">
					</form>
					<iframe id="frame-layout" name="frame-layout" class="hidden"></iframe>
				</div>
			</fieldset>
		</div> 
	</div> 
</div>