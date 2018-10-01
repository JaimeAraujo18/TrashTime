import { template } from 'meteor/templating';
import './config.html';

import { ColetasBanco } from '../api/coletas.js';

Template.config.helpers({
	/*coletasCidade() {
		return ColetasBanco.distinct("cidade");
	},*/
	coletas() {
		return ColetasBanco.find({});
	},
});