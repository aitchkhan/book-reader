/*End Point Manages here*/

module.exports = function(app) {
	app.use('/api/v1/user', require('./app/clients/api/v1/user/'));
	app.use('/api/v1/files', require('./app/clients/api/v1/files/'));
}
