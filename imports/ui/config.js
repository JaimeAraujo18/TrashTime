import { template } from 'meteor/templating';
import { Session } from 'meteor/session';
import { Cidades } from '../api/cidades.js';
import { Bairros } from '../api/bairros.js';
import './config.html';

Template.config.helpers({
	cidades() {
		return Cidades.find({});
	},
	bairros() {
		return Bairros.find({});
	}
});
