import { template } from 'meteor/templating';
import './config.html';

import { Coletas } from '../api/coletas.js';

Template.config.helpers({
	coletas() {
		return Coleta.find({});
	},
});
console.log(Template.config.helpers.coletas);