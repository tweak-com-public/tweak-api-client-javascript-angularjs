goog.provide('API.Client.AccessToken');

/**
 * @record
 */
API.Client.AccessToken = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.AccessToken.prototype.id = '';

/**
 * time to live in seconds (2 weeks by default)
 * @type {!number}
 * @export
 */
API.Client.AccessToken.prototype.ttl = 0;

/**
 * @type {!Date}
 * @export
 */
API.Client.AccessToken.prototype.created = new Date();

/**
 * @type {!number}
 * @export
 */
API.Client.AccessToken.prototype.userId = 0;

