/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.account
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js')

var mlmbox_types_locale_pb = require('../../../mlmbox/types/locale_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.account = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.account.AccountClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.account.AccountPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Account>}
 */
const methodDescriptor_Account_Info = new grpc.web.MethodDescriptor(
  '/mlmbox.client.account.Account/Info',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_account_pb.Account,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.account.AccountClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.account.Account/Info',
      request,
      metadata || {},
      methodDescriptor_Account_Info,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.account.AccountPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.account.Account/Info',
      request,
      metadata || {},
      methodDescriptor_Account_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.account.SetLoginRequest,
 *   !proto.mlmbox.types.Account.Username>}
 */
const methodDescriptor_Account_SetLogin = new grpc.web.MethodDescriptor(
  '/mlmbox.client.account.Account/SetLogin',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.account.SetLoginRequest,
  mlmbox_types_account_pb.Account.Username,
  /**
   * @param {!proto.mlmbox.client.account.SetLoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.Username.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.account.SetLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account.Username)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account.Username>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.account.AccountClient.prototype.setLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.account.Account/SetLogin',
      request,
      metadata || {},
      methodDescriptor_Account_SetLogin,
      callback);
};


/**
 * @param {!proto.mlmbox.client.account.SetLoginRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account.Username>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.account.AccountPromiseClient.prototype.setLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.account.Account/SetLogin',
      request,
      metadata || {},
      methodDescriptor_Account_SetLogin);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Locale.Id,
 *   !proto.mlmbox.types.Locale>}
 */
const methodDescriptor_Account_SetLocale = new grpc.web.MethodDescriptor(
  '/mlmbox.client.account.Account/SetLocale',
  grpc.web.MethodType.UNARY,
  mlmbox_types_locale_pb.Locale.Id,
  mlmbox_types_locale_pb.Locale,
  /**
   * @param {!proto.mlmbox.types.Locale.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_locale_pb.Locale.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Locale.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Locale)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Locale>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.account.AccountClient.prototype.setLocale =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.account.Account/SetLocale',
      request,
      metadata || {},
      methodDescriptor_Account_SetLocale,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Locale.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Locale>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.account.AccountPromiseClient.prototype.setLocale =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.account.Account/SetLocale',
      request,
      metadata || {},
      methodDescriptor_Account_SetLocale);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.account.SetProfileRequest,
 *   !proto.mlmbox.types.Account.Profile>}
 */
const methodDescriptor_Account_SetProfile = new grpc.web.MethodDescriptor(
  '/mlmbox.client.account.Account/SetProfile',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.account.SetProfileRequest,
  mlmbox_types_account_pb.Account.Profile,
  /**
   * @param {!proto.mlmbox.client.account.SetProfileRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Account.Profile.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.account.SetProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Account.Profile)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Account.Profile>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.account.AccountClient.prototype.setProfile =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.account.Account/SetProfile',
      request,
      metadata || {},
      methodDescriptor_Account_SetProfile,
      callback);
};


/**
 * @param {!proto.mlmbox.client.account.SetProfileRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Account.Profile>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.account.AccountPromiseClient.prototype.setProfile =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.account.Account/SetProfile',
      request,
      metadata || {},
      methodDescriptor_Account_SetProfile);
};


module.exports = proto.mlmbox.client.account;
