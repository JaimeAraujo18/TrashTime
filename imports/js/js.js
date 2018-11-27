$(function(){
	$.ajax({ 
		method: "GET",
		url: 'http://localhost:8080/export'
	})
	.done(function(result) {
		console.log("success");
	     json =  JSON.parse(result);
	     console.log(json);
	})
	.fail(function() {
		console.log("error");
	})
	
	$("#welcome").removeClass("hidden");
	$(".erroa").addClass("hidden");
	$("#areae").addClass("hidden");
});