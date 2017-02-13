/*End Point Manages here*/

module.exports = function(app) {
	app.use('/api/v1/books', require('./app/clients/api/v1/books/'));
}
