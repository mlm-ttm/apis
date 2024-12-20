/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.gift_shop
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/gift_shop/gift_shop.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var mlmbox_types_gift_shop_pb = require('../../../mlmbox/types/gift_shop_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.gift_shop = require('./gift_shop_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.gift_shop.GiftShopClient =
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
proto.mlmbox.client.gift_shop.GiftShopPromiseClient =
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
 *   !proto.mlmbox.types.GiftShop.State>}
 */
const methodDescriptor_GiftShop_Info = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/Info',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_gift_shop_pb.GiftShop.State,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.State.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.State)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.State>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Info',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Info,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.State>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Info',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.GiftShop.Card.Id,
 *   !proto.mlmbox.types.GiftShop.Info>}
 */
const methodDescriptor_GiftShop_Get = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/Get',
  grpc.web.MethodType.UNARY,
  mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
  mlmbox_types_gift_shop_pb.GiftShop.Info,
  /**
   * @param {!proto.mlmbox.types.GiftShop.Card.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.GiftShop.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.get =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Get',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Get,
      callback);
};


/**
 * @param {!proto.mlmbox.types.GiftShop.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.get =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Get',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Get);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.GiftShop.Card.Id,
 *   !proto.mlmbox.client.gift_shop.UrlResponse>}
 */
const methodDescriptor_GiftShop_GetUploaderUrl = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/GetUploaderUrl',
  grpc.web.MethodType.UNARY,
  mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
  proto.mlmbox.client.gift_shop.UrlResponse,
  /**
   * @param {!proto.mlmbox.types.GiftShop.Card.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.gift_shop.UrlResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.GiftShop.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.gift_shop.UrlResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.gift_shop.UrlResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.getUploaderUrl =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/GetUploaderUrl',
      request,
      metadata || {},
      methodDescriptor_GiftShop_GetUploaderUrl,
      callback);
};


/**
 * @param {!proto.mlmbox.types.GiftShop.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.gift_shop.UrlResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.getUploaderUrl =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/GetUploaderUrl',
      request,
      metadata || {},
      methodDescriptor_GiftShop_GetUploaderUrl);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.gift_shop.CreateRequest,
 *   !proto.mlmbox.types.GiftShop.Info>}
 */
const methodDescriptor_GiftShop_Create = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/Create',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.gift_shop.CreateRequest,
  mlmbox_types_gift_shop_pb.GiftShop.Info,
  /**
   * @param {!proto.mlmbox.client.gift_shop.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.gift_shop.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Create',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Create,
      callback);
};


/**
 * @param {!proto.mlmbox.client.gift_shop.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Create',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.gift_shop.CardUpdateInfoRequest,
 *   !proto.mlmbox.types.GiftShop.Info>}
 */
const methodDescriptor_GiftShop_CardUpdateInfo = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/CardUpdateInfo',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.gift_shop.CardUpdateInfoRequest,
  mlmbox_types_gift_shop_pb.GiftShop.Info,
  /**
   * @param {!proto.mlmbox.client.gift_shop.CardUpdateInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.gift_shop.CardUpdateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.cardUpdateInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/CardUpdateInfo',
      request,
      metadata || {},
      methodDescriptor_GiftShop_CardUpdateInfo,
      callback);
};


/**
 * @param {!proto.mlmbox.client.gift_shop.CardUpdateInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.cardUpdateInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/CardUpdateInfo',
      request,
      metadata || {},
      methodDescriptor_GiftShop_CardUpdateInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.GiftShop.Card.Id,
 *   !proto.mlmbox.types.GiftShop.Info>}
 */
const methodDescriptor_GiftShop_CardBuy = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/CardBuy',
  grpc.web.MethodType.UNARY,
  mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
  mlmbox_types_gift_shop_pb.GiftShop.Info,
  /**
   * @param {!proto.mlmbox.types.GiftShop.Card.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.GiftShop.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.cardBuy =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/CardBuy',
      request,
      metadata || {},
      methodDescriptor_GiftShop_CardBuy,
      callback);
};


/**
 * @param {!proto.mlmbox.types.GiftShop.Card.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.cardBuy =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/CardBuy',
      request,
      metadata || {},
      methodDescriptor_GiftShop_CardBuy);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.gift_shop.WithdrawalRequest,
 *   !proto.mlmbox.types.GiftShop.Info>}
 */
const methodDescriptor_GiftShop_Withdrawal = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/Withdrawal',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.gift_shop.WithdrawalRequest,
  mlmbox_types_gift_shop_pb.GiftShop.Info,
  /**
   * @param {!proto.mlmbox.client.gift_shop.WithdrawalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.gift_shop.WithdrawalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.withdrawal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Withdrawal',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Withdrawal,
      callback);
};


/**
 * @param {!proto.mlmbox.client.gift_shop.WithdrawalRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.withdrawal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Withdrawal',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Withdrawal);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.gift_shop.ReviewRequest,
 *   !proto.mlmbox.types.GiftShop.Info>}
 */
const methodDescriptor_GiftShop_Review = new grpc.web.MethodDescriptor(
  '/mlmbox.client.gift_shop.GiftShop/Review',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.gift_shop.ReviewRequest,
  mlmbox_types_gift_shop_pb.GiftShop.Info,
  /**
   * @param {!proto.mlmbox.client.gift_shop.ReviewRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.gift_shop.ReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.GiftShop.Info)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.GiftShop.Info>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.gift_shop.GiftShopClient.prototype.review =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Review',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Review,
      callback);
};


/**
 * @param {!proto.mlmbox.client.gift_shop.ReviewRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.GiftShop.Info>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.gift_shop.GiftShopPromiseClient.prototype.review =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Review',
      request,
      metadata || {},
      methodDescriptor_GiftShop_Review);
};


module.exports = proto.mlmbox.client.gift_shop;

