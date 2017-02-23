goog.provide('API.Client.Category');

/**
 * @record
 */
API.Client.Category = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Category.prototype.name = '';

/**
 * @type {!string}
 * @export
 */
API.Client.Category.prototype.description = '';

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.id = 0;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.categoryId = 0;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.parentId = 0;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.designId = 0;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.Category.prototype.children = [];

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Category.prototype.parent = {};

