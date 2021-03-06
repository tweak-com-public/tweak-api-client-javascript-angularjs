goog.provide('API.Client.User');

/**
 * @record
 */
API.Client.User = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.realm = '';

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.username = '';

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.User.prototype.credentials = {};

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.User.prototype.challenges = {};

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.email = '';

/**
 * @type {!boolean}
 * @export
 */
API.Client.User.prototype.emailVerified = false;

/**
 * @type {!string}
 * @export
 */
API.Client.User.prototype.status = '';

/**
 * @type {!Date}
 * @export
 */
API.Client.User.prototype.created = new Date();

/**
 * @type {!Date}
 * @export
 */
API.Client.User.prototype.lastUpdated = new Date();

/**
 * @type {!number}
 * @export
 */
API.Client.User.prototype.id = 0;

