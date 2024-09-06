/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.asset
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var mlmbox_types_asset_pb = require('../../../mlmbox/types/asset_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.asset = require('./asset_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.asset.AssetClient =
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
proto.mlmbox.client.asset.AssetPromiseClient =
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
 *   !proto.mlmbox.types.Asset.Id,
 *   !proto.mlmbox.types.Asset>}
 */
const methodDescriptor_Asset_Get = new grpc.web.MethodDescriptor(
  '/mlmbox.client.asset.Asset/Get',
  grpc.web.MethodType.UNARY,
  mlmbox_types_asset_pb.Asset.Id,
  mlmbox_types_asset_pb.Asset,
  /**
   * @param {!proto.mlmbox.types.Asset.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_asset_pb.Asset.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Asset.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Asset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Asset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.asset.AssetClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.asset.Asset/Get',
      request,
      metadata || {},
      methodDescriptor_Asset_Get,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Asset.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Asset>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.asset.AssetPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.asset.Asset/Get',
      request,
      metadata || {},
      methodDescriptor_Asset_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.AssetList>}
 */
const methodDescriptor_Asset_All = new grpc.web.MethodDescriptor(
  '/mlmbox.client.asset.Asset/All',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_asset_pb.AssetList,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_asset_pb.AssetList.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.AssetList)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.AssetList>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.asset.AssetClient.prototype.all =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.asset.Asset/All',
      request,
      metadata || {},
      methodDescriptor_Asset_All,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.AssetList>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.asset.AssetPromiseClient.prototype.all =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.asset.Asset/All',
      request,
      metadata || {},
      methodDescriptor_Asset_All);
};


module.exports = proto.mlmbox.client.asset;

