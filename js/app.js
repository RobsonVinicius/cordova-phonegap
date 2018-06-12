$('.collection').on('click', '.collection-item', function(){
    var $badge = $('.badge', this);
    if ($badge.length == 0) {
    		$badge = $('<span class="badge orange white-text">0</span>').appendTo(this);
    }

    $badge.text(parseInt($badge.text()) + 1);
});

$('#confirmar').on('click', function(){	

	var texto = "";

	$('.badge').parent().each(function(){
		texto += this.firstChild.textContent + ': ';
		texto += this.lastChild.textContent + ', ';  
		//Materialize.toast(texto + ' adicionado', 1000);
	});

		$('#resumo').empty().text(texto);
			
});

$('.modal-trigger').leanModal();//Observação: se você baixar as versões mais recentes do Materialize direto no site deles ao invés de seguir com os arquivos do curso, é importante observar que essa função foi renomeada para apenas .modal()

$('.collection').on('click', '.badge', function(){
	$(this).remove();
	return false;
});

$('.acao-limpar').on('click', function() {
	$('#numero-mesa').val('');
	$('.badge').remove();
});

$('.scan-qrcode').on('click', function () {
	cordova.plugins.barcodeScanner.scan(
		function (resultado) {
			if(resultado.text) {
				Materialize.toast('Mesa ' + resultado.text, 2000);
				$('#numero-mesa').val(resultado.text);
			}
		},
		function (error) {
			Materialize.toast('Erro: ' + error, 3000, 'red-text');
		}
	);
});

