/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.locale
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.19.1
// source: mlmbox/client/locale/locale.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_locale_pb = require('../../../mlmbox/types/locale_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.locale = require('./locale_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.locale.LocaleClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.locale.LocalePromiseClient =
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
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Locale.Id,
 *   !proto.mlmbox.types.Locale>}
 */
const methodDescriptor_Locale_Get = new grpc.web.MethodDescriptor(
  '/mlmbox.client.locale.Locale/Get',
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
proto.mlmbox.client.locale.LocaleClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.locale.Locale/Get',
      request,
      metadata || {},
      methodDescriptor_Locale_Get,
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
proto.mlmbox.client.locale.LocalePromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.locale.Locale/Get',
      request,
      metadata || {},
      methodDescriptor_Locale_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Locale.List>}
 */
const methodDescriptor_Locale_List = new grpc.web.MethodDescriptor(
  '/mlmbox.client.locale.Locale/List',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_locale_pb.Locale.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_locale_pb.Locale.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Locale.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Locale.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.locale.LocaleClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.locale.Locale/List',
      request,
      metadata || {},
      methodDescriptor_Locale_List,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Locale.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.locale.LocalePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.locale.Locale/List',
      request,
      metadata || {},
      methodDescriptor_Locale_List);
};


module.exports = proto.mlmbox.client.locale;

