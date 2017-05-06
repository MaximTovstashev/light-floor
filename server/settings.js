const {app} = require('electron');
const path = require('path');

const s = {
  application: 'Light Floor',
  environment: process.env.ENV || 'packed',
  apiPath: path.join(__dirname, 'api'),
  static: {
    public: "./packed"
  },
};

if (s.environment === 'packed') {
  s.basePath = path.dirname(app.getPath('exe'));
  s.static.public = "../../packed";
}

module.exports = s;