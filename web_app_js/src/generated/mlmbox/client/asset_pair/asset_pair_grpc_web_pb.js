/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.asset_pair
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_asset_pair_pb = require('../../../mlmbox/types/asset_pair_pb.js')

var mlmbox_types_exchanger_pb = require('../../../mlmbox/types/exchanger_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.asset_pair = require('./asset_pair_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.asset_pair.AssetPairClient =
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
proto.mlmbox.client.asset_pair.AssetPairPromiseClient =
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
 *   !proto.mlmbox.types.AssetPair.Id,
 *   !proto.mlmbox.types.Exchanger.Rate>}
 */
const methodDescriptor_AssetPair_Get = new grpc.web.MethodDescriptor(
  '/mlmbox.client.asset_pair.AssetPair/Get',
  grpc.web.MethodType.UNARY,
  mlmbox_types_asset_pair_pb.AssetPair.Id,
  mlmbox_types_exchanger_pb.Exchanger.Rate,
  /**
   * @param {!proto.mlmbox.types.AssetPair.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_exchanger_pb.Exchanger.Rate.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.AssetPair.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Exchanger.Rate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Exchanger.Rate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.asset_pair.AssetPairClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.asset_pair.AssetPair/Get',
      request,
      metadata || {},
      methodDescriptor_AssetPair_Get,
      callback);
};


/**
 * @param {!proto.mlmbox.types.AssetPair.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Exchanger.Rate>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.asset_pair.AssetPairPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.asset_pair.AssetPair/Get',
      request,
      metadata || {},
      methodDescriptor_AssetPair_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Exchanger.Rate.List>}
 */
const methodDescriptor_AssetPair_All = new grpc.web.MethodDescriptor(
  '/mlmbox.client.asset_pair.AssetPair/All',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_exchanger_pb.Exchanger.Rate.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_exchanger_pb.Exchanger.Rate.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Exchanger.Rate.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Exchanger.Rate.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.asset_pair.AssetPairClient.prototype.all =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.asset_pair.AssetPair/All',
      request,
      metadata || {},
      methodDescriptor_AssetPair_All,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Exchanger.Rate.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.asset_pair.AssetPairPromiseClient.prototype.all =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.asset_pair.AssetPair/All',
      request,
      metadata || {},
      methodDescriptor_AssetPair_All);
};


module.exports = proto.mlmbox.client.asset_pair;

