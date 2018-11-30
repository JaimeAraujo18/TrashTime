import { template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Avisos } from '../api/avisos.js';
import { Bairros } from '../api/bairros.js';
import { Cidades } from '../api/cidades.js';
import './config2.html';

Template.config2.helpers({
	bairros(){
		return Bairros.find({}).fetch();
	},
	b(){
		return Session.get("bairroID");
	}
});