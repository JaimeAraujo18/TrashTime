$(function(){
	import { Avisos } from '../api/avisos.js';
	import { Bairros } from '../api/bairros.js';
	import { Cidades } from '../api/cidades.js';
	import { Session } from 'meteor/session';
	import { Meteor } from 'meteor/meteor';

	Push.Configure({
	  android: {
	    senderID: 776272285457,
	    alert: true,
	    badge: true,
	    sound: true,
	    vibrate: true,
	    clearNotifications: true
	    // icon: '',
	    // iconColor: ''
	  },
	  ios: {
	    alert: true,
	    badge: true,
	    sound: true
	  }
	});

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
			var json = {"avisos":[{"id":2,"titulo":"Coleta indispon\u00edvel","texto":"Coleta de lixo est\u00e1 indispon\u00edvel em seu bairro.","data_inicio":2018-11-27,"data_fim":2018-12-04,"bairro_id":5,"cidade_id":2}],"bairros":[{"id":5,"cidade_id":2,"nome":"Centro","dia_seco1":2,"dia_seco2":5,"dia_org1":3,"dia_org2":6},{"id":6,"cidade_id":2,"nome":"Centenário","dia_seco1":3,"dia_seco2":6,"dia_org1":2,"dia_org2":5}],"cidades":[{"id":2,"nome":"Sapiranga"}]};
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
			var idb = $("#bairro").val();
			var bairros = Bairros.find({}).fetch();
			for(var i=0;i<bairros.length; i++){
				if (bairros[i].id==idb) {
					var bairroArray = [];
					for(var prop in bairros[i]){
					    bairroArray[''+prop]=bairros[i][prop];
					}
					if (bairroArray['dia_seco1']==1) {
						$("#domingoSeco1").removeClass('hidden');
						$("#checkSeco1").val(1);
					}else if (bairroArray['dia_seco1']==2) {
						$("#segundaSeco1").removeClass('hidden');
						$("#checkSeco1").val(2);
					}else if (bairroArray['dia_seco1']==3) {
						$("#tercaSeco1").removeClass('hidden');
						$("#checkSeco1").val(3);
					}else if (bairroArray['dia_seco1']==4) {
						$("#quartaSeco1").removeClass('hidden');
						$("#checkSeco1").val(4);
					}else if (bairroArray['dia_seco1']==5) {
						$("#quintaSeco1").removeClass('hidden');
						$("#checkSeco1").val(5);
					}else if (bairroArray['dia_seco1']==6) {
						$("#sextaSeco1").removeClass('hidden');
						$("#checkSeco1").val(6);
					}else if (bairroArray['dia_seco1']==7) {
						$("#sabadoSeco1").removeClass('hidden');
						$("#checkSeco1").val(7);
					}

					if (bairroArray['dia_seco2']==1) {
						$("#domingoSeco2").removeClass('hidden');
						$("#checkSeco2").val(1);
					}else if (bairroArray['dia_seco2']==2) {
						$("#segundaSeco2").removeClass('hidden');
						$("#checkSeco2").val(2);
					}else if (bairroArray['dia_seco2']==3) {
						$("#tercaSeco2").removeClass('hidden');
						$("#checkSeco2").val(3);
					}else if (bairroArray['dia_seco2']==4) {
						$("#quartaSeco2").removeClass('hidden');
						$("#checkSeco2").val(4);
					}else if (bairroArray['dia_seco2']==5) {
						$("#quintaSeco2").removeClass('hidden');
						$("#checkSeco2").val(5);
					}else if (bairroArray['dia_seco2']==6) {
						$("#sextaSeco2").removeClass('hidden');
						$("#checkSeco2").val(6);
					}else if (bairroArray['dia_seco2']==7) {
						$("#sabadoSeco2").removeClass('hidden');
						$("#checkSeco2").val(7);
					}

					if (bairroArray['dia_org1']==1) {
						$("#domingoOrg1").removeClass('hidden');
						$("#checkOrg1").val(1);
					}else if (bairroArray['dia_org1']==2) {
						$("#segundaOrg1").removeClass('hidden');
						$("#checkOrg1").val(2);
					}else if (bairroArray['dia_org1']==3) {
						$("#tercaOrg1").removeClass('hidden');
						$("#checkOrg1").val(3);
					}else if (bairroArray['dia_org1']==4) {
						$("#quartaOrg1").removeClass('hidden');
						$("#checkOrg1").val(4);
					}else if (bairroArray['dia_org1']==5) {
						$("#quintaOrg1").removeClass('hidden');
						$("#checkOrg1").val(5);
					}else if (bairroArray['dia_org1']==6) {
						$("#sextaOrg1").removeClass('hidden');
						$("#checkOrg1").val(6);
					}else if (bairroArray['dia_org1']==7) {
						$("#sabadoOrg1").removeClass('hidden');
						$("#checkOrg1").val(7);
					}

					if (bairroArray['dia_org2']==1) {
						$("#domingoOrg2").removeClass('hidden');
						$("#checkOrg2").val(1);
					}else if (bairroArray['dia_org2']==2) {
						$("#segundaOrg2").removeClass('hidden');
						$("#checkOrg2").val(2);
					}else if (bairroArray['dia_org2']==3) {
						$("#tercaOrg2").removeClass('hidden');
						$("#checkOrg2").val(3);
					}else if (bairroArray['dia_org2']==4) {
						$("#quartaOrg2").removeClass('hidden');
						$("#checkOrg2").val(4);
					}else if (bairroArray['dia_org2']==5) {
						$("#quintaOrg2").removeClass('hidden');
						$("#checkOrg2").val(5);
					}else if (bairroArray['dia_org2']==6) {
						$("#sextaOrg2").removeClass('hidden');
						$("#checkOrg2").val(6);
					}else if (bairroArray['dia_org2']==7) {
						$("#sabadoOrg2").removeClass('hidden');
						$("#checkOrg2").val(7);
					}
				}
			}
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
});