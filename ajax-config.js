/*
If the url is to Parse added the Parse Headers.
*/
$.ajaxPrefilter(function(options, originalOptions, jqXHR){
	if(options.url.match(/api.parse.com/)){
		options.headers = options.headers || {};
		console.log("im going to Parse");
		options.headers['X-Parse-Application-Id']='sX0BKIIwsGE9zGn0pjh4sJw2tCjE3a55M1wu3B5n';
		options.headers['X-Parse-REST-API-Key']='H7o9iRuyCOPy2SChzrWDXI0ikgj8d2pMIMrPAeol';
	}
	console.log(options.url);
});

