goog.provide('API.Client.Customer');

/**
 * @record
 */
API.Client.Customer = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.firstName;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.lastName;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.realm;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.username;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Customer.prototype.credentials;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Customer.prototype.challenges;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.email;

/**
 * @type {!boolean}
 * @export
 */
API.Client.Customer.prototype.emailVerified;

/**
 * @type {!string}
 * @export
 */
API.Client.Customer.prototype.status;

/**
 * @type {!Date}
 * @export
 */
API.Client.Customer.prototype.created;

/**
 * @type {!Date}
 * @export
 */
API.Client.Customer.prototype.lastUpdated;

/**
 * @type {!number}
 * @export
 */
API.Client.Customer.prototype.id;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.Customer.prototype.designs;

