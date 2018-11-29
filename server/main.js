import { Meteor } from 'meteor/meteor';
import '../imports/api/avisos.js';
import '../imports/api/bairros.js';
import '../imports/api/cidades.js';

Meteor.startup(() => {
	
	import { Avisos } from '../imports/api/avisos.js';
	import { Bairros } from '../imports/api/bairros.js';
	import { Cidades } from '../imports/api/cidades.js';

	return Meteor.methods({
		removeAvisos: function(){
			return Avisos.remove({});
		},
		removeBairros: function(){
			return Bairros.remove({});
		},
		removeCidades: function(){
			return Cidades.remove({});
		}
	});

});