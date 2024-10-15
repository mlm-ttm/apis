/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.finance
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/finance/pool_hunter.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_pool_pb = require('../../../mlmbox/types/pool_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.finance = require('./pool_hunter_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.finance.PoolHunterClient =
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
proto.mlmbox.client.finance.PoolHunterPromiseClient =
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
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Pool.Hunter>}
 */
const methodDescriptor_PoolHunter_Info = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.PoolHunter/Info',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_pool_pb.Pool.Hunter,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_pool_pb.Pool.Hunter.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Pool.Hunter)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Pool.Hunter>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.PoolHunterClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/Info',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_Info,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Pool.Hunter>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.PoolHunterPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/Info',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Pool.Hunter.History.List>}
 */
const methodDescriptor_PoolHunter_History = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.PoolHunter/History',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_pool_pb.Pool.Hunter.History.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_pool_pb.Pool.Hunter.History.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Pool.Hunter.History.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Pool.Hunter.History.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.PoolHunterClient.prototype.history =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/History',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_History,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Pool.Hunter.History.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.PoolHunterPromiseClient.prototype.history =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/History',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_History);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Pool.Hunter.Card.Id,
 *   !proto.mlmbox.types.Pool.Hunter.Card>}
 */
const methodDescriptor_PoolHunter_CardGet = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.PoolHunter/CardGet',
  grpc.web.MethodType.UNARY,
  mlmbox_types_pool_pb.Pool.Hunter.Card.Id,
  mlmbox_types_pool_pb.Pool.Hunter.Card,
  /**
   * @param {!proto.mlmbox.types.Pool.Hunter.Card.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_pool_pb.Pool.Hunter.Card.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Pool.Hunter.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Pool.Hunter.Card)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Pool.Hunter.Card>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.PoolHunterClient.prototype.cardGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/CardGet',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_CardGet,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Pool.Hunter.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Pool.Hunter.Card>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.PoolHunterPromiseClient.prototype.cardGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/CardGet',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_CardGet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Pool.Hunter.Card.Info.List>}
 */
const methodDescriptor_PoolHunter_CardsAll = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.PoolHunter/CardsAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_pool_pb.Pool.Hunter.Card.Info.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_pool_pb.Pool.Hunter.Card.Info.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Pool.Hunter.Card.Info.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Pool.Hunter.Card.Info.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.PoolHunterClient.prototype.cardsAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/CardsAll',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_CardsAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Pool.Hunter.Card.Info.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.PoolHunterPromiseClient.prototype.cardsAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/CardsAll',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_CardsAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Pool.Hunter.Card.Id,
 *   !proto.mlmbox.types.Pool.Hunter.Card.Transaction.List>}
 */
const methodDescriptor_PoolHunter_CardTransactionsAll = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.PoolHunter/CardTransactionsAll',
  grpc.web.MethodType.UNARY,
  mlmbox_types_pool_pb.Pool.Hunter.Card.Id,
  mlmbox_types_pool_pb.Pool.Hunter.Card.Transaction.List,
  /**
   * @param {!proto.mlmbox.types.Pool.Hunter.Card.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_pool_pb.Pool.Hunter.Card.Transaction.List.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Pool.Hunter.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Pool.Hunter.Card.Transaction.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Pool.Hunter.Card.Transaction.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.PoolHunterClient.prototype.cardTransactionsAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/CardTransactionsAll',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_CardTransactionsAll,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Pool.Hunter.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Pool.Hunter.Card.Transaction.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.PoolHunterPromiseClient.prototype.cardTransactionsAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.PoolHunter/CardTransactionsAll',
      request,
      metadata || {},
      methodDescriptor_PoolHunter_CardTransactionsAll);
};


module.exports = proto.mlmbox.client.finance;

