/*
If the url is to Parse added the Parse Headers.
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
	if(options.url.match(/api.parse.com/)){
		options.headers = options.headers || {};
		console.log("im going to Parse");
		options.headers['X-Parse-Application-Id']='96BofDPoRvRnif7o4kc5aiACqVeT2ulUUpYhyuaF';
		options.headers['X-Parse-REST-API-Key']='z48rrUok2Pg1WXd2Kg2RWEqpQ4kdCjQyVNnNgyqk';
	}
	console.log(options.url);
});

