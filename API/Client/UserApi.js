/**
 * @fileoverview AUTOMATICALLY GENERATED service for API.Client.UserApi.
 * Do not edit this file by hand or your changes will be lost next time it is
 * generated.
 *
 * Tweak API to integrate with all the Tweak services.  You can find out more about Tweak      at &lt;a href&#x3D;&#39;https://www.tweak.com&#39;&gt;https://www.tweak.com&lt;/a&gt;, #tweak.
 * Version: 1.0.0
 * Generated by: class io.swagger.codegen.languages.JavascriptClosureAngularClientCodegen
 */
goog.provide('API.Client.UserApi');

goog.require('API.Client.AccessToken');
goog.require('API.Client.User');
goog.require('API.Client.inline_response_200');
goog.require('API.Client.inline_response_200_1');
goog.require('API.Client.inline_response_200_2');

/**
 * @constructor
 * @param {!angular.$http} $http
 * @param {!Object} $httpParamSerializer
 * @param {!angular.$injector} $injector
 * @struct
 */
API.Client.UserApi = function($http, $httpParamSerializer, $injector) {
  /** @private {!string} */
  this.basePath_ = $injector.has('UserApiBasePath') ?
                   /** @type {!string} */ ($injector.get('UserApiBasePath')) :
                   'https://apidevcdn.tweak.com/api';

  /** @private {!Object<string, string>} */
  this.defaultHeaders_ = $injector.has('UserApiDefaultHeaders') ?
                   /** @type {!Object<string, string>} */ (
                       $injector.get('UserApiDefaultHeaders')) :
                   {};

  /** @private {!angular.$http} */
  this.http_ = $http;

  /** @package {!Object} */
  this.httpParamSerializer = $injector.get('$httpParamSerializer');
}
API.Client.UserApi.$inject = ['$http', '$httpParamSerializer', '$injector'];

/**
 * Confirm a user registration with email verification token.
 * 
 * @param {!string} uid 
 * @param {!string} token 
 * @param {!string=} opt_redirect 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.userConfirm = function(uid, token, opt_redirect, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/confirm';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'uid' is set
  if (!uid) {
    throw new Error('Missing required parameter uid when calling userConfirm');
  }
  // verify required parameter 'token' is set
  if (!token) {
    throw new Error('Missing required parameter token when calling userConfirm');
  }
  if (uid !== undefined) {
    queryParameters['uid'] = uid;
  }

  if (token !== undefined) {
    queryParameters['token'] = token;
  }

  if (opt_redirect !== undefined) {
    queryParameters['redirect'] = opt_redirect;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Count instances of the model matched by where from the data source.
 * 
 * @param {!string=} opt_where Criteria to match model instances
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.inline_response_200>}
 */
API.Client.UserApi.prototype.userCount = function(opt_where, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/count';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_where !== undefined) {
    queryParameters['where'] = opt_where;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Create a new instance of the model and persist it into the data source.
 * 
 * @param {!User=} opt_data Model instance data
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userCreate = function(opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Create a change stream.
 * 
 * @param {!string=} opt_options 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Object>}
 */
API.Client.UserApi.prototype.userCreateChangeStreamGetUsersChangeStream = function(opt_options, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/change-stream';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_options !== undefined) {
    queryParameters['options'] = opt_options;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Create a change stream.
 * 
 * @param {!string=} opt_options 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Object>}
 */
API.Client.UserApi.prototype.userCreateChangeStreamPostUsersChangeStream = function(opt_options, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/change-stream';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var formParams = {};

  headerParams['Content-Type'] = 'application/x-www-form-urlencoded';

  formParams['options'] = opt_options;

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: false,
        data: this.httpParamSerializer(formParams),
    params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Delete a model instance by {{id}} from the data source.
 * 
 * @param {!string} id Model id
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.userDeleteById = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userDeleteById');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Check whether a model instance exists in the data source.
 * 
 * @param {!string} id Model id
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.inline_response_200_2>}
 */
API.Client.UserApi.prototype.userExistsGetUsersidExists = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/exists'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userExistsGetUsersidExists');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Check whether a model instance exists in the data source.
 * 
 * @param {!string} id Model id
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.inline_response_200_2>}
 */
API.Client.UserApi.prototype.userExistsHeadUsersid = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userExistsHeadUsersid');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'HEAD',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Find all instances of the model matched by filter from the data source.
 * 
 * @param {!string=} opt_filter Filter defining fields, where, include, order, offset, and limit
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.User>>}
 */
API.Client.UserApi.prototype.userFind = function(opt_filter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_filter !== undefined) {
    queryParameters['filter'] = opt_filter;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Find a model instance by {{id}} from the data source.
 * 
 * @param {!string} id Model id
 * @param {!string=} opt_filter Filter defining fields and include
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userFindById = function(id, opt_filter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userFindById');
  }
  if (opt_filter !== undefined) {
    queryParameters['filter'] = opt_filter;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Find first instance of the model matched by filter from the data source.
 * 
 * @param {!string=} opt_filter Filter defining fields, where, include, order, offset, and limit
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userFindOne = function(opt_filter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/findOne';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_filter !== undefined) {
    queryParameters['filter'] = opt_filter;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Login a user with username/email and password.
 * 
 * @param {!API.Client.Object} credentials 
 * @param {!string=} opt_include Related objects to include in the response. See the description of return value for more details.
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.Object>}
 */
API.Client.UserApi.prototype.userLogin = function(credentials, opt_include, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/login';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'credentials' is set
  if (!credentials) {
    throw new Error('Missing required parameter credentials when calling userLogin');
  }
  if (opt_include !== undefined) {
    queryParameters['include'] = opt_include;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: credentials,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Logout a user with access token.
 * 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.userLogout = function(opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/logout';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Counts accessTokens of User.
 * 
 * @param {!string} id User id
 * @param {!string=} opt_where Criteria to match model instances
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.inline_response_200>}
 */
API.Client.UserApi.prototype.userPrototypeCountAccessTokens = function(id, opt_where, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens/count'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeCountAccessTokens');
  }
  if (opt_where !== undefined) {
    queryParameters['where'] = opt_where;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Creates a new instance in accessTokens of this model.
 * 
 * @param {!string} id User id
 * @param {!AccessToken=} opt_data 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.AccessToken>}
 */
API.Client.UserApi.prototype.userPrototypeCreateAccessTokens = function(id, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeCreateAccessTokens');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Deletes all accessTokens of this model.
 * 
 * @param {!string} id User id
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.userPrototypeDeleteAccessTokens = function(id, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeDeleteAccessTokens');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Delete a related item by id for accessTokens.
 * 
 * @param {!string} id User id
 * @param {!string} fk Foreign key for accessTokens
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.userPrototypeDestroyByIdAccessTokens = function(id, fk, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens/{fk}'
      .replace('{' + 'id' + '}', String(id))
      .replace('{' + 'fk' + '}', String(fk));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeDestroyByIdAccessTokens');
  }
  // verify required parameter 'fk' is set
  if (!fk) {
    throw new Error('Missing required parameter fk when calling userPrototypeDestroyByIdAccessTokens');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'DELETE',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Find a related item by id for accessTokens.
 * 
 * @param {!string} id User id
 * @param {!string} fk Foreign key for accessTokens
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.AccessToken>}
 */
API.Client.UserApi.prototype.userPrototypeFindByIdAccessTokens = function(id, fk, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens/{fk}'
      .replace('{' + 'id' + '}', String(id))
      .replace('{' + 'fk' + '}', String(fk));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeFindByIdAccessTokens');
  }
  // verify required parameter 'fk' is set
  if (!fk) {
    throw new Error('Missing required parameter fk when calling userPrototypeFindByIdAccessTokens');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Queries accessTokens of User.
 * 
 * @param {!string} id User id
 * @param {!string=} opt_filter 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!Array<!API.Client.AccessToken>>}
 */
API.Client.UserApi.prototype.userPrototypeGetAccessTokens = function(id, opt_filter, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeGetAccessTokens');
  }
  if (opt_filter !== undefined) {
    queryParameters['filter'] = opt_filter;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'GET',
    url: path,
    json: true,
            params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Patch attributes for a model instance and persist it into the data source.
 * 
 * @param {!string} id User id
 * @param {!User=} opt_data An object of model property name/value pairs
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userPrototypeUpdateAttributesPatchUsersid = function(id, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeUpdateAttributesPatchUsersid');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Patch attributes for a model instance and persist it into the data source.
 * 
 * @param {!string} id User id
 * @param {!User=} opt_data An object of model property name/value pairs
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userPrototypeUpdateAttributesPutUsersid = function(id, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeUpdateAttributesPutUsersid');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Update a related item by id for accessTokens.
 * 
 * @param {!string} id User id
 * @param {!string} fk Foreign key for accessTokens
 * @param {!AccessToken=} opt_data 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.AccessToken>}
 */
API.Client.UserApi.prototype.userPrototypeUpdateByIdAccessTokens = function(id, fk, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/accessTokens/{fk}'
      .replace('{' + 'id' + '}', String(id))
      .replace('{' + 'fk' + '}', String(fk));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userPrototypeUpdateByIdAccessTokens');
  }
  // verify required parameter 'fk' is set
  if (!fk) {
    throw new Error('Missing required parameter fk when calling userPrototypeUpdateByIdAccessTokens');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Replace attributes for a model instance and persist it into the data source.
 * 
 * @param {!string} id Model id
 * @param {!User=} opt_data Model instance data
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userReplaceById = function(id, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/{id}/replace'
      .replace('{' + 'id' + '}', String(id));

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'id' is set
  if (!id) {
    throw new Error('Missing required parameter id when calling userReplaceById');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Replace an existing model instance or insert a new one into the data source.
 * 
 * @param {!User=} opt_data Model instance data
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userReplaceOrCreate = function(opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/replaceOrCreate';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Reset password for a user with email.
 * 
 * @param {!API.Client.Object} options 
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise}
 */
API.Client.UserApi.prototype.userResetPassword = function(options, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/reset';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  // verify required parameter 'options' is set
  if (!options) {
    throw new Error('Missing required parameter options when calling userResetPassword');
  }
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: options,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Update instances of the model matched by {{where}} from the data source.
 * 
 * @param {!string=} opt_where Criteria to match model instances
 * @param {!User=} opt_data An object of model property name/value pairs
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.inline_response_200_1>}
 */
API.Client.UserApi.prototype.userUpdateAll = function(opt_where, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/update';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_where !== undefined) {
    queryParameters['where'] = opt_where;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Patch an existing model instance or insert a new one into the data source.
 * 
 * @param {!User=} opt_data Model instance data
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userUpsertPatchUsers = function(opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PATCH',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Patch an existing model instance or insert a new one into the data source.
 * 
 * @param {!User=} opt_data Model instance data
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userUpsertPutUsers = function(opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  /** @type {!Object} */
  var httpRequestParams = {
    method: 'PUT',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}

/**
 * Update an existing model instance or insert a new one into the data source based on the where criteria.
 * 
 * @param {!string=} opt_where Criteria to match model instances
 * @param {!User=} opt_data An object of model property name/value pairs
 * @param {!angular.$http.Config=} opt_extraHttpRequestParams Extra HTTP parameters to send.
 * @return {!angular.$q.Promise<!API.Client.User>}
 */
API.Client.UserApi.prototype.userUpsertWithWhere = function(opt_where, opt_data, opt_extraHttpRequestParams) {
  /** @const {string} */
  var path = this.basePath_ + '/Users/upsertWithWhere';

  /** @type {!Object} */
  var queryParameters = {};

  /** @type {!Object} */
  var headerParams = angular.extend({}, this.defaultHeaders_);
  if (opt_where !== undefined) {
    queryParameters['where'] = opt_where;
  }

  /** @type {!Object} */
  var httpRequestParams = {
    method: 'POST',
    url: path,
    json: true,
    data: opt_data,
        params: queryParameters,
    headers: headerParams
  };

  if (opt_extraHttpRequestParams) {
    httpRequestParams = angular.extend(httpRequestParams, opt_extraHttpRequestParams);
  }

  return (/** @type {?} */ (this.http_))(httpRequestParams);
}
