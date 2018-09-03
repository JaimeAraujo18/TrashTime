import { template } from 'meteor/templating';
import './config.html';

import { ColetasBanco } from '../api/coletas.js';

Template.config.helpers({
	coletas() {
		return ColetasBanco.find({});
	},
});