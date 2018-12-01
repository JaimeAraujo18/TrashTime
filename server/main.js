import { Meteor } from 'meteor/meteor';
import '../imports/api/avisos.js';
import '../imports/api/bairros.js';
import '../imports/api/cidades.js';

Meteor.startup(() => {
	Push.Configure({
	  apn: {
	    certData: Assets.getText('apnDevCert.pem'),
	    keyData: Assets.getText('apnDevKey.pem'),
	    passphrase: 'xxxxxxxxx',
	    production: true,
	    //gateway: 'gateway.push.apple.com',
	  },
	  gcm: {
	    apiKey: 'AIzaSyDfthvEojxQXquYkUyMlw3RF85ewA0tDtc',
	  }
	  // production: true,
	  // 'sound' true,
	  // 'badge' true,
	  // 'alert' true,
	  // 'vibrate' true,
	  // 'sendInterval': 15000, Configurable interval between sending
	  // 'sendBatchSize': 1, Configurable number of notifications to send per batch
	  // 'keepNotifications': false,
	//
	});
	
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