$(function(){
	$("#welcome").show();
	function next(pn) {
		switch(pn){
			case 0: 
				$("#welcome").hide();
				$("#config").show();
				break;
			case 1: 
				$("#config").hide();
				$("#home").show();
				break;
		};
	};
};