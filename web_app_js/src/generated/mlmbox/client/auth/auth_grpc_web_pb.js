/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var mlmbox_types_status_pb = require('../../../mlmbox/types/status_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.auth = require('./auth_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.auth.AuthClient =
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
proto.mlmbox.client.auth.AuthPromiseClient =
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
 *   !proto.mlmbox.client.auth.TelegramBotSignRequest,
 *   !proto.mlmbox.client.auth.AuthSignResponse>}
 */
const methodDescriptor_Auth_TelegramBotSign = new grpc.web.MethodDescriptor(
  '/mlmbox.client.auth.Auth/TelegramBotSign',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.auth.TelegramBotSignRequest,
  proto.mlmbox.client.auth.AuthSignResponse,
  /**
   * @param {!proto.mlmbox.client.auth.TelegramBotSignRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.auth.AuthSignResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.auth.TelegramBotSignRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.auth.AuthSignResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.auth.AuthSignResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.auth.AuthClient.prototype.telegramBotSign =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.auth.Auth/TelegramBotSign',
      request,
      metadata || {},
      methodDescriptor_Auth_TelegramBotSign,
      callback);
};


/**
 * @param {!proto.mlmbox.client.auth.TelegramBotSignRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.auth.AuthSignResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.auth.AuthPromiseClient.prototype.telegramBotSign =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.auth.Auth/TelegramBotSign',
      request,
      metadata || {},
      methodDescriptor_Auth_TelegramBotSign);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.client.auth.TokenValidateResponse>}
 */
const methodDescriptor_Auth_TokenValidate = new grpc.web.MethodDescriptor(
  '/mlmbox.client.auth.Auth/TokenValidate',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.mlmbox.client.auth.TokenValidateResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.auth.TokenValidateResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.auth.TokenValidateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.auth.TokenValidateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.auth.AuthClient.prototype.tokenValidate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.auth.Auth/TokenValidate',
      request,
      metadata || {},
      methodDescriptor_Auth_TokenValidate,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.auth.TokenValidateResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.auth.AuthPromiseClient.prototype.tokenValidate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.auth.Auth/TokenValidate',
      request,
      metadata || {},
      methodDescriptor_Auth_TokenValidate);
};


module.exports = proto.mlmbox.client.auth;

