goog.provide('API.Client.Category');

/**
 * @record
 */
API.Client.Category = function() {}

/**
 * @type {!string}
 * @export
 */
API.Client.Category.prototype.name;

/**
 * @type {!string}
 * @export
 */
API.Client.Category.prototype.description;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.id;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.categoryId;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.parentId;

/**
 * @type {!number}
 * @export
 */
API.Client.Category.prototype.designId;

/**
 * @type {!Array<!API.Client.Object>}
 * @export
 */
API.Client.Category.prototype.children;

/**
 * @type {!API.Client.Object}
 * @export
 */
API.Client.Category.prototype.parent;

