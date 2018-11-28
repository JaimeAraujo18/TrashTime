$(function(){
	$.ajax({ 
		method: "GET",
		url: 'http://http://trashtimewebservice-com.umbler.net/export',
	})
	.done(function(result) {
		console.log("success");
	     json =  JSON.parse(result);
	     console.log(json);
	})
	.fail(function() {
		console.log("error");
	})
	
	$("#cidade").change(function(e) {
		if ($("#cidade").val()=="SELECIONE") {
			$("#cidadeErro").removeClass('hidden');
		}else{
			if (!$("#cidadeErro").hasClass('hidden')) {
				$("#cidadeErro").addClass('hidden');
			}
			$("#bairro").removeClass('hidden');
		}
	});
	$("#bairro").change(function(e) {
		if ($("#bairro").val()=="SELECIONE") {
			$("#bairroErro").removeClass('hidden');
		}else{
			if ($("#bairroErro").hasClass('hidden')) {
				$("#bairroErro").addClass('hidden');
			}
			$("#configBtn").removeClass('hidden');
		}
	});
	$("#welcome").removeClass("hidden");
});