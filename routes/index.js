var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
  	response.render('index', projects);
};



exports.view = function(req, res) {
	data['viewAlt'] = false;
	 res.render('index', data);
}
exports.viewAlt = function(req, res) {
	data['viewAlt'] = true;
	 res.render('index', data);
}