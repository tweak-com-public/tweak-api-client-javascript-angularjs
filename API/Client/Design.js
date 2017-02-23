goog.provide('API.Client.Design');

/**
 * @record
 */
API.Client.Design = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Design.prototype.name = '';

/**
 * @type {!string}
 * @export
 */
API.Client.Design.prototype.image = '';

/**
 * @type {!string}
 * @export
 */
API.Client.Design.prototype.thumbnail = '';

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Design.prototype.object = {};

/**
 * @type {!number}
 * @export
 */
API.Client.Design.prototype.id = 0;

/**
 * @type {!number}
 * @export
 */
API.Client.Design.prototype.customerId = 0;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.Design.prototype.tags = [];

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.Design.prototype.categories = [];

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Design.prototype.customer = {};

