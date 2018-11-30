$(function(){
	import { Avisos } from '../api/avisos.js';
	import { Bairros } from '../api/bairros.js';
	import { Cidades } from '../api/cidades.js';
	import { Session } from 'meteor/session';
	import { Meteor } from 'meteor/meteor';

	Meteor.call('removeAvisos');
	Meteor.call('removeBairros');
	Meteor.call('removeCidades');

	function getJSON(){
		$.ajax({ 
			method: "GET",
			url: 'http://http://trashtimewebservice-com.umbler.net/export',
			crossDomain: 'true',
			crossOrigin: 'true',
		})
		.done(function(result) {
			console.log("successo na conexão com o webservice!");
		    json =  JSON.parse(result);
		    for (var i = 0; i < json.avisos.length; i++) {
				Avisos.insert(json.avisos[i]);
			}
			for (var i = 0; i < json.bairros.length; i++) {
				Bairros.insert(json.bairros[i]);
			}
			for (var i = 0; i < json.cidades.length; i++) {
				Cidades.insert(json.cidades[i]);
			}
		})
		.fail(function() {
			console.log("erro na conexão com o webservice, carregando JSON de testes: ");
			var json = {
			"avisos":
			[{"id":"2","titulo":"Coleta indispon\u00edvel","texto":"Coleta de lixo est\u00e1 indispon\u00edvel em seu bairro.","data_inicio":"2018-11-27","data_fim":"2018-12-04","bairro_id":"5","cidade_id":"2"}],
			"bairros":
			[{"id":"5","cidade_id":"2","nome":"Centro","dia_seco1":"2","dia_seco2":"5","dia_org1":"3","dia_org2":"6"},
			{"id":"6","cidade_id":"2","nome":"Centenário","dia_seco1":"3","dia_seco2":"6","dia_org1":"2","dia_org2":"5"}],
			"cidades":
			[{"id":"2","nome":"Sapiranga"}]}
			console.log(json);
			for (var i = 0; i < json.avisos.length; i++) {
				Avisos.insert(json.avisos[i]);
			}
			for (var i = 0; i < json.bairros.length; i++) {
				Bairros.insert(json.bairros[i]);
			}
			for (var i = 0; i < json.cidades.length; i++) {
				Cidades.insert(json.cidades[i]);
			}
		})
	};
	function getBairro() {
		bairros = Bairros.find({}).fetch();
		for(var i=0; i<bairros.length; i++ ){
			if (bairros[i].id == Session.get("bairroID")) {
				return bairros[i];
			}
		}
	};

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

	$("#cidade").change(function(e) {
		if ($("#cidade").val()=="SELECIONE") {
			$("#cidadeErro").removeClass('hidden');
		}else{
			if (!$("#cidadeErro").hasClass('hidden')) {
				$("#cidadeErro").addClass('hidden');
			}
			$("#divBairro").removeClass('hidden');
			var bairros = Bairros.find({}).fetch();
			for(var i=0; i<bairros.length; i++ ){
				if (bairros[i].cidade_id == $("#cidade").val()) {
					var id = bairros[i].id;
					var nome = bairros[i].nome;
					$("#nullOption").after("<option value='"+id+"'>"+nome+"</option>");
				}
			}
		}
	});
	getJSON();
	//Meteor.setInterval(getJSON,30000); // 5184000000 == 24 horas em ms
	$("#welcome").removeClass("hidden");
});