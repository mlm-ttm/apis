/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.google_authenticator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_google_authenticator_pb = require('../../../mlmbox/types/google_authenticator_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.google_authenticator = require('./google_authenticator_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorClient =
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
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorPromiseClient =
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
 *   !proto.mlmbox.types.GoogleAuthenticator>}
 */
const methodDescriptor_GoogleAuthenticator_Info = new grpc.web.MethodDescriptor(
  '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GoogleAuthenticator)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GoogleAuthenticator>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Info,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GoogleAuthenticator>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.GoogleAuthenticator.SecretCode>}
 */
const methodDescriptor_GoogleAuthenticator_Generate = new grpc.web.MethodDescriptor(
  '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GoogleAuthenticator.SecretCode)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GoogleAuthenticator.SecretCode>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorClient.prototype.generate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Generate,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GoogleAuthenticator.SecretCode>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorPromiseClient.prototype.generate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Generate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request,
 *   !proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response>}
 */
const methodDescriptor_GoogleAuthenticator_Activate = new grpc.web.MethodDescriptor(
  '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
  grpc.web.MethodType.UNARY,
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response,
  /**
   * @param {!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorClient.prototype.activate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Activate,
      callback);
};


/**
 * @param {!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorPromiseClient.prototype.activate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Activate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request,
 *   !proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response>}
 */
const methodDescriptor_GoogleAuthenticator_Deactivate = new grpc.web.MethodDescriptor(
  '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
  grpc.web.MethodType.UNARY,
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response,
  /**
   * @param {!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorClient.prototype.deactivate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Deactivate,
      callback);
};


/**
 * @param {!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GoogleAuthenticator.VerifiedCode.Response>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.google_authenticator.GoogleAuthenticatorPromiseClient.prototype.deactivate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
      request,
      metadata || {},
      methodDescriptor_GoogleAuthenticator_Deactivate);
};


module.exports = proto.mlmbox.client.google_authenticator;
