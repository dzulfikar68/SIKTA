var navbarNavigation = {};
var processSomething = true;
var barSettingProfile = false;
$(document).ready(function(){
	if($(".datepickers").length>0)$(".datepickers").datepicker({nextText:"",prevText:""});
	
	/*
	navbarNavigation['form-control']=0;
	navbarNavigation['home'] = 1;
	setNewContentIntern("Classroom/getLayoutHome",function(){
		homeOfMahasiswa();
	},function(){},function(){});	
	*/
	$('#keluar-confirm-exe').on('click',function(){
		modalStaticMultipleButton('Apakah anda yakin ingin keluar',function(){
			$(location).attr('href', base_url+"Classroom/signOut");
		});
	});
	setTimeout(function(){
		noty({text:'Hai '+nama_user+', Selamat datang di Sistem Informasi Kegiatan Tugas Akhir ^_^'});
		setTimeout(function(){
			$.noty.closeAll();
		},5000);
	},3000);
	$('#home-layout').on('click',function(){
		setBreadCrumb({0:'Beranda'});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['home'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['home']=1;
					setBreadCrumb({0:'Beranda'});
					history.pushState({},"",base_url+"Classroom");
					setNewContentIntern("Classroom/getLayoutHome",function(){
						homeOfMahasiswa();
					},function(){},function(){});	
				}
			}
		});
	});
	$('#registrasi-baru-layout').on('click',function(){
		setBreadCrumb({0:'Registrasi TA',1:"baru"});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['baru'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['baru']=1;
					setBreadCrumb({0:'Registrasi TA',1:"baru"});
					history.pushState({},"",base_url+"Classroom/index/RegistrasiBaru");
					setNewContentIntern(
						"Classregistrasibaru",
						function(){
							reLoadFormBaru();},
						function(){
							$("#content-intern").slideUp('slow',function(){
								j("#content-intern").setInHtml();
								j("#setAjax").setAjax({
									methode : 'POST',
									url : "Classregistrasibaru",
									bool : true,
									content : "force=trueJaserv",
									sucOk : function(a){
										j("#content-intern").setInHtml(a.substr(1,a.length-1));
										if(a[0] == '='){
											window.location = base_url+"Gateinout";
										}else if(a[0] == '1'){
											$('#content-intern').slideDown('slow',function(){
												reLoadFormBaru();
											});
										}else{
											$('#content-intern').slideDown('slow');
										}
									}
								});
							});
						},
						function(){
							$('#registrasi-lama-layout').trigger('click');
						}
					);
				}
			}
			
		});
	});
	$('#registrasi-lama-layout').on('click',function(){
		setBreadCrumb({0:'Registrasi TA',1:"lama"});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['lama'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['lama']=1;
					setBreadCrumb({0:'Registrasi TA',1:"lama"});
					history.pushState({},"",base_url+"Classroom/index/RegistrasiLama");
					setNewContentIntern(
						"Classregistrasilama",
						function(){
							reLoadFormLama();},
						function(){
							$("#content-intern").slideUp('slow',function(){
								j("#content-intern").setInHtml();
								j("#setAjax").setAjax({
									methode : 'POST',
									url : "Classregistrasilama",
									bool : true,
									content : "force=trueJaserv",
									sucOk : function(a){
										j("#content-intern").setInHtml(a.substr(1,a.length-1));if(a[0] == '3'){
											window.location = base_url+"Gateinout";
										}else if(a[0] == '='){
											$('#content-intern').slideDown('slow',function(){
												reLoadFormLama();
											});
										}else{
											$('#content-intern').slideDown('slow');
										}
									}
								});
							});
						},
						function(){
							$('#registrasi-baru-layout').trigger('click');
						}
					);
				}
			}
		});
	});
	$('#pengaturan-control').on('click',function(){
		history.pushState({},"",base_url+"Classroom/index/Pengaturan");
		resetControlNavigasi();
		openSettingLayout();
	});
	$('#seminar-ta1-layout').on('click',function(){
		setBreadCrumb({0:'Seminar TA',1:"pertama"});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['t1'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['t1']=1;
					setBreadCrumb({0:'Seminar TA',1:"pertama"});
					history.pushState({},"",base_url+"Classroom/index/DaftarSeminar");
					setNewContentInternSeminar("Classseminartas",function(a){
						SeminarTAS(a);
					});
				}
			}
		});
	});
	$('#seminar-ta2-layout').on('click',function(){
		setBreadCrumb({0:'Seminar TA',1:"kedua"});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['t2'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['t2']=1;
					setBreadCrumb({0:'Seminar TA',1:"kedua"});
					history.pushState({},"",base_url+"Classroom/index/DaftarSidang");
					setNewContentInternSeminar("Classseminartad/",function(a){
						SeminarTAD(a);
					});
				}
			}
		});
	});
	$('#lihat-dosen-layout').on('click',function(){
		setBreadCrumb({0:'Lihat',1:"dosen"});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['dosen'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['dosen']=1;
					setBreadCrumb({0:'Lihat',1:"dosen"});
					history.pushState({},"",base_url+"Classroom/index/LihatDosen");
					setNewContentIntern2("Classdosenpreview/getListDosenAktif",function(){
						mainListDosen();
					});
				}
			}
		});
	});
	$('#lihat-bimbingan-layout').on('click',function(){
		setBreadCrumb({0:'Lihat',1:"bimbingan"});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['bimbingan'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['bimbingan']=1;
					setBreadCrumb({0:'Lihat',1:"bimbingan"});
					history.pushState({},"",base_url+"Classroom/index/DaftarBimbingan");
					setNewContentIntern2("Classbimbingan/getLayoutBimbingan",function(){
						mainBimbingan();
					});
				}
			}
		});
	});
	$('#pinjam-layout').on('click',function(){
		setBreadCrumb({0:'Pinjam'});
		barSettingProfile = false;
		closeSettingLayout(function(){
			if(navbarNavigation['pinjam'] == 0){
				if(navbarNavigation['form-control'] == 1){
					modalStaticSingleWarning('Terdapat form yang aktif, tolong legkapi terlebih dahulu sebelum melanjutkan pindah form yang lain.');
				}else{
					resetControlNavigasi();
					navbarNavigation['pinjam']=1;
					setBreadCrumb({0:'Pinjam'});
					history.pushState({},"",base_url+"Classroom/index/PinjamRuang");
					setNewContentIntern2("Classareaacara/getLayoutAreaAcara",function(){
						acaraAkademikFullArea();
					});
				}
			}
		});
	});
	$('#bantuan-layout').on('click',function(){
		bantuanLayout();
	});
	resetControlNavigasi();
	switch(pageShowCore){
		case 'PinjamRuang':
		$('#pinjam-layout').trigger('click');
		break;
		case 'LihatBimbingan':
		$('#lihat-bimbingan-layout').trigger('click');
		break;
		case 'LihatDosen':
		$('#lihat-dosen-layout').trigger('click');
		break;
		case 'DaftarSeminar':
		$('#seminar-ta1-layout').trigger('click');
		break;
		case 'DaftarSidang':
		$('#seminar-ta2-layout').trigger('click');
		break;
		case 'RegistrasiBaru':
		$('#registrasi-baru-layout').trigger('click');
		break;
		case 'RegistrasiLama':
		$('#registrasi-lama-layout').trigger('click');
		break;
		case 'Pengaturan' :
		$('#pengaturan-control').trigger('click');
		break;
		default:
		$('#home-layout').trigger('click');
		break;
	}
	setTimeout(function(){
		processSomething = false;
	},60000);
});
function openSettingLayout(){
	$("#content-intern").slideUp('slow', function(){
		$("#layout-main-classroom").removeClass('col-md-9');
		$("#layout-main-classroom").addClass('col-md-7');
		$("#setting-left-1").slideDown('slow');
		$("#setting-left-2").slideDown('slow');
		$("#content-setting").slideDown('slow', function(){
			pengaturanMahasiswaDefault();
		});
	});
	/*
	$('#default-left').slideUp('slow',function(){
		setBreadCrumb({0:'Pengaturan'});
		$("#setting-left-1").slideDown('slow');
		$("#setting-left-2").slideDown('slow',function(){
			pengaturanMahasiswaDefault();
		});
	});
	$("#content-intern").slideUp('slow',function(){
		$("#layout-main-classroom").removeClass('col-md-9');
		$("#layout-main-classroom").addClass('col-md-7');
		$("#content-setting").slideDown('slow');
	});
	*/
}
function closeSettingLayout(a){
	$("#setting-left-1").slideUp('slow', function(){
		$("#layout-main-classroom").removeClass('col-md-7');
		$("#layout-main-classroom").addClass('col-md-9');
		$("#content-intern").slideDown('slow',function(){
			a();
		})	
	});
	$("#content-setting").slideUp('slow');
	$("#setting-left-2").slideUp('slow');
	/*
	$("#setting-left-1").slideUp("slow",function(){
		$("#default-left").slideDown("slow");
	});
	$("#setting-left-2").slideUp("slow",function(){
		a();
	});
	$("#layout-main-classroom").removeClass('col-md-7');
	$("#layout-main-classroom").addClass('col-md-9');
	$("#content-setting").slideUp("slow");
	*/
	
}
function resetControlNavigasi(){
	navbarNavigation['home'] = 0;
	navbarNavigation['baru'] = 0;
	navbarNavigation['lama'] = 0;
	navbarNavigation['t1'] = 0;
	navbarNavigation['t2'] = 0;
	navbarNavigation['dosen'] = 0;
	navbarNavigation['bimbingan'] = 0;
	navbarNavigation['bantuan'] = 0;
	navbarNavigation['pinjam'] = 0;
}
function openLoadingBar(a){
	setLoadingBarMessage(a);
	$('#statusbar-loading').fadeIn('slow');
}
function setLoadingBarMessage(a){
	j('#loading-pesan').setInHtml(a);
}
function closeLoadingBar(){
	$('#statusbar-loading').fadeOut('slow');
}

function setNewContentInternSeminar(data,aa){
	openLoadingBar("mengganti layout ...");
	$("#content-intern").slideUp('slow',function(){
		j("#content-intern").setInHtml();
		j("#setAjax").setAjax({
			methode : 'POST',
			url : base_url+data+".jsp",
			bool : true,
			content : "",
			sucOk : function(a){
				j("#content-intern").setInHtml(a.substr(2,a.length-2));
				if(a[0] == '='){
					window.location = base_url+"Gateinout";
				}else{
					$('#content-intern').slideDown('slow',function(){
						aa(a[0]+""+a[1]);
					});
				}
				closeLoadingBar()
			}
		});
	});
}
function setNewContentIntern(data,aa,yes,not){
	openLoadingBar("mengganti layout ...");
	$("#content-intern").slideUp('slow',function(){
		j("#content-intern").setInHtml();
		j("#setAjax").setAjax({
			methode : 'POST',
			url : base_url+data+".jsp",
			bool : true,
			content : "",
			sucOk : function(a){
				j("#content-intern").setInHtml(a.substr(1,a.length-1));
				if(a[0] == '='){
					window.location = base_url+"Gateinout";
				}else if(a[0] == '1'){
					$('#content-intern').slideDown('slow',function(){
						aa();
					});
				}else if(a[0] == '3'){
					$('#force').on('click',function(){
						yes();
					});
					$('#next').on('click',function(){
						not();
					});
					$('#content-intern').slideDown('slow');
				}else if(a[0] == '4'){
					$('#next').on('click',function(){
						not();
					});
					$('#content-intern').slideDown('slow');
				}else{
					$('#content-intern').slideDown('slow');
				}
				closeLoadingBar()
			}
		});
	});
}
function setNewContentIntern2(data,aa){
	openLoadingBar("mengganti layout ...");
	$("#content-intern").slideUp('slow',function(){
		j("#content-intern").setInHtml();
		j("#setAjax").setAjax({
			methode : 'POST',
			url : base_url+data+".jsp",
			bool : true,
			content : "",
			sucOk : function(a){
				j("#content-intern").setInHtml(a.substr(1,a.length-1));
				if(a[0] == '='){
					window.location = base_url+"Gateinout";
				}else 
				if(a[0] == '1'){
					$('#content-intern').slideDown('slow',function(){
						aa();
					});
				}else{
					$('#content-intern').slideDown('slow');
				}
				closeLoadingBar()
			}
		});
	});
}