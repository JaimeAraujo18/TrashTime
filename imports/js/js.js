$(function(){
	$("#welcome").css("display","block");
	function next(pn) {
		switch(pn){
			case 0: 
				$("#welcome").css("display", "none");
				$("#config").css("display", "block");
				break;
			case 1: 
				$("#config").css("display","none");
				$("#home").css("display", "block");
				break;
		}
	}
});
	