const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

class Middleware {
	constructor() {
		
	}
	
	external(app, config) {
		app.use(morgan('dev'));
		app.use(cors({ exposedHeaders: config.corsHeaders }));
		app.use(bodyParser.json({ limit: config.bodyLimit }));
	}

	custom(app, config) { }
}

module.exports = Middleware;