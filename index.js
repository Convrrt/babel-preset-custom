var modify = require('modify-babel-preset');

module.exports = modify('es2015-minimal', {
	'transform-es2015-block-scoped-functions': false,
	'transform-es2015-for-of': false,
	'check-es2015-constants': false
});
