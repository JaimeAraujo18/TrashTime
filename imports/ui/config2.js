import { template } from 'meteor/templating';
import './config2.html';

Template.config2.helpers({
	bairro(){
		return ColetasBanco.findOne({bairro: ""})
	}
});