/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.asset
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.19.1
// source: mlmbox/client/asset/coin_market_cap.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var mlmbox_types_asset_pb = require('../../../mlmbox/types/asset_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.asset = require('./coin_market_cap_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.asset.CoinMarketCapClient =
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
proto.mlmbox.client.asset.CoinMarketCapPromiseClient =
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
 *   !proto.mlmbox.types.Asset.Id,
 *   !proto.mlmbox.types.Asset.MarketCap>}
 */
const methodDescriptor_CoinMarketCap_Get = new grpc.web.MethodDescriptor(
  '/mlmbox.client.asset.CoinMarketCap/Get',
  grpc.web.MethodType.UNARY,
  mlmbox_types_asset_pb.Asset.Id,
  mlmbox_types_asset_pb.Asset.MarketCap,
  /**
   * @param {!proto.mlmbox.types.Asset.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_asset_pb.Asset.MarketCap.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Asset.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Asset.MarketCap)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Asset.MarketCap>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.asset.CoinMarketCapClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.asset.CoinMarketCap/Get',
      request,
      metadata || {},
      methodDescriptor_CoinMarketCap_Get,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Asset.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Asset.MarketCap>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.asset.CoinMarketCapPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.asset.CoinMarketCap/Get',
      request,
      metadata || {},
      methodDescriptor_CoinMarketCap_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Asset.MarketCap.List>}
 */
const methodDescriptor_CoinMarketCap_All = new grpc.web.MethodDescriptor(
  '/mlmbox.client.asset.CoinMarketCap/All',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_asset_pb.Asset.MarketCap.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_asset_pb.Asset.MarketCap.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Asset.MarketCap.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Asset.MarketCap.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.asset.CoinMarketCapClient.prototype.all =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.asset.CoinMarketCap/All',
      request,
      metadata || {},
      methodDescriptor_CoinMarketCap_All,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Asset.MarketCap.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.asset.CoinMarketCapPromiseClient.prototype.all =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.asset.CoinMarketCap/All',
      request,
      metadata || {},
      methodDescriptor_CoinMarketCap_All);
};


module.exports = proto.mlmbox.client.asset;

