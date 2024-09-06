/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.finance
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

var mlmbox_types_asset_pb = require('../../../mlmbox/types/asset_pb.js')

var mlmbox_types_sort_pb = require('../../../mlmbox/types/sort_pb.js')

var mlmbox_types_wallet_pb = require('../../../mlmbox/types/wallet_pb.js')
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.finance = require('./wallet_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.finance.WalletClient =
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
proto.mlmbox.client.finance.WalletPromiseClient =
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
 *   !proto.mlmbox.types.Wallet>}
 */
const methodDescriptor_Wallet_Info = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/Info',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_wallet_pb.Wallet,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.info =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/Info',
      request,
      metadata || {},
      methodDescriptor_Wallet_Info,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.info =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/Info',
      request,
      metadata || {},
      methodDescriptor_Wallet_Info);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.finance.WalletAssetGetRequest,
 *   !proto.mlmbox.types.Wallet.Asset>}
 */
const methodDescriptor_Wallet_AssetGet = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/AssetGet',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.finance.WalletAssetGetRequest,
  mlmbox_types_wallet_pb.Wallet.Asset,
  /**
   * @param {!proto.mlmbox.client.finance.WalletAssetGetRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.finance.WalletAssetGetRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.assetGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetGet,
      callback);
};


/**
 * @param {!proto.mlmbox.client.finance.WalletAssetGetRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.assetGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetGet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Wallet.Asset.List>}
 */
const methodDescriptor_Wallet_AssetsAll = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/AssetsAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_wallet_pb.Wallet.Asset.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.assetsAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetsAll',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetsAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.assetsAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetsAll',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetsAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Wallet.Asset.Transaction.Id,
 *   !proto.mlmbox.types.Wallet.Asset.Transaction>}
 */
const methodDescriptor_Wallet_AssetTransactionGet = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/AssetTransactionGet',
  grpc.web.MethodType.UNARY,
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id,
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
  /**
   * @param {!proto.mlmbox.types.Wallet.Asset.Transaction.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Wallet.Asset.Transaction.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.assetTransactionGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetTransactionGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetTransactionGet,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Wallet.Asset.Transaction.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset.Transaction>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.assetTransactionGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetTransactionGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetTransactionGet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.finance.WalletAssetTransactionListRequest,
 *   !proto.mlmbox.types.Wallet.Asset.Transaction.List>}
 */
const methodDescriptor_Wallet_AssetTransactionList = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/AssetTransactionList',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.finance.WalletAssetTransactionListRequest,
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List,
  /**
   * @param {!proto.mlmbox.client.finance.WalletAssetTransactionListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.finance.WalletAssetTransactionListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset.Transaction.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset.Transaction.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.assetTransactionList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetTransactionList',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetTransactionList,
      callback);
};


/**
 * @param {!proto.mlmbox.client.finance.WalletAssetTransactionListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset.Transaction.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.assetTransactionList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetTransactionList',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetTransactionList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Asset.Id,
 *   !proto.mlmbox.types.Wallet.Asset.WithdrawalCapacity>}
 */
const methodDescriptor_Wallet_AssetWithdrawalCapacityGet = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
  grpc.web.MethodType.UNARY,
  mlmbox_types_asset_pb.Asset.Id,
  mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity,
  /**
   * @param {!proto.mlmbox.types.Asset.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Asset.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset.WithdrawalCapacity)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset.WithdrawalCapacity>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.assetWithdrawalCapacityGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetWithdrawalCapacityGet,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Asset.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset.WithdrawalCapacity>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.assetWithdrawalCapacityGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_AssetWithdrawalCapacityGet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Wallet.Processing.Id,
 *   !proto.mlmbox.types.Wallet.Processing>}
 */
const methodDescriptor_Wallet_ProcessingsGet = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/ProcessingsGet',
  grpc.web.MethodType.UNARY,
  mlmbox_types_wallet_pb.Wallet.Processing.Id,
  mlmbox_types_wallet_pb.Wallet.Processing,
  /**
   * @param {!proto.mlmbox.types.Wallet.Processing.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Processing.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Wallet.Processing.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Processing)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Processing>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.processingsGet =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/ProcessingsGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_ProcessingsGet,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Wallet.Processing.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Processing>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.processingsGet =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/ProcessingsGet',
      request,
      metadata || {},
      methodDescriptor_Wallet_ProcessingsGet);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.mlmbox.types.Wallet.Processing.List>}
 */
const methodDescriptor_Wallet_ProcessingsAll = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/ProcessingsAll',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_wallet_pb.Wallet.Processing.List,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Processing.List.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Processing.List)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Processing.List>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.processingsAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/ProcessingsAll',
      request,
      metadata || {},
      methodDescriptor_Wallet_ProcessingsAll,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Processing.List>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.processingsAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/ProcessingsAll',
      request,
      metadata || {},
      methodDescriptor_Wallet_ProcessingsAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.finance.TransferRequest,
 *   !proto.mlmbox.types.Wallet.Asset.Transaction>}
 */
const methodDescriptor_Wallet_Transfer = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/Transfer',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.finance.TransferRequest,
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
  /**
   * @param {!proto.mlmbox.client.finance.TransferRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.finance.TransferRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.transfer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/Transfer',
      request,
      metadata || {},
      methodDescriptor_Wallet_Transfer,
      callback);
};


/**
 * @param {!proto.mlmbox.client.finance.TransferRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset.Transaction>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.transfer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/Transfer',
      request,
      metadata || {},
      methodDescriptor_Wallet_Transfer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Wallet.Processing.Id,
 *   !proto.mlmbox.client.finance.WalletDepositAddressResponse>}
 */
const methodDescriptor_Wallet_DepositAddress = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/DepositAddress',
  grpc.web.MethodType.UNARY,
  mlmbox_types_wallet_pb.Wallet.Processing.Id,
  proto.mlmbox.client.finance.WalletDepositAddressResponse,
  /**
   * @param {!proto.mlmbox.types.Wallet.Processing.Id} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.finance.WalletDepositAddressResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Wallet.Processing.Id} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.finance.WalletDepositAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.finance.WalletDepositAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.depositAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/DepositAddress',
      request,
      metadata || {},
      methodDescriptor_Wallet_DepositAddress,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Wallet.Processing.Id} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.finance.WalletDepositAddressResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.depositAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/DepositAddress',
      request,
      metadata || {},
      methodDescriptor_Wallet_DepositAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.finance.WalletValidateAddressRequest,
 *   !proto.mlmbox.client.finance.WalletValidateAddressResponse>}
 */
const methodDescriptor_Wallet_ValidateAddress = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/ValidateAddress',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.finance.WalletValidateAddressRequest,
  proto.mlmbox.client.finance.WalletValidateAddressResponse,
  /**
   * @param {!proto.mlmbox.client.finance.WalletValidateAddressRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.mlmbox.client.finance.WalletValidateAddressResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.finance.WalletValidateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.client.finance.WalletValidateAddressResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.client.finance.WalletValidateAddressResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.validateAddress =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/ValidateAddress',
      request,
      metadata || {},
      methodDescriptor_Wallet_ValidateAddress,
      callback);
};


/**
 * @param {!proto.mlmbox.client.finance.WalletValidateAddressRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.client.finance.WalletValidateAddressResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.validateAddress =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/ValidateAddress',
      request,
      metadata || {},
      methodDescriptor_Wallet_ValidateAddress);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.client.finance.WalletWithdrawalRequest,
 *   !proto.mlmbox.types.Wallet.Asset.Transaction>}
 */
const methodDescriptor_Wallet_Withdrawal = new grpc.web.MethodDescriptor(
  '/mlmbox.client.finance.Wallet/Withdrawal',
  grpc.web.MethodType.UNARY,
  proto.mlmbox.client.finance.WalletWithdrawalRequest,
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
  /**
   * @param {!proto.mlmbox.client.finance.WalletWithdrawalRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary
);


/**
 * @param {!proto.mlmbox.client.finance.WalletWithdrawalRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Wallet.Asset.Transaction)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Wallet.Asset.Transaction>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.finance.WalletClient.prototype.withdrawal =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/Withdrawal',
      request,
      metadata || {},
      methodDescriptor_Wallet_Withdrawal,
      callback);
};


/**
 * @param {!proto.mlmbox.client.finance.WalletWithdrawalRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Wallet.Asset.Transaction>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.finance.WalletPromiseClient.prototype.withdrawal =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.finance.Wallet/Withdrawal',
      request,
      metadata || {},
      methodDescriptor_Wallet_Withdrawal);
};


module.exports = proto.mlmbox.client.finance;

