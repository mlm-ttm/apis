/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.matrix
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
const proto = {};
proto.mlmbox = {};
proto.mlmbox.client = {};
proto.mlmbox.client.matrix = require('./matrix_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.mlmbox.client.matrix.MatrixClient =
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
proto.mlmbox.client.matrix.MatrixPromiseClient =
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
 *   !proto.mlmbox.types.Matrix>}
 */
const methodDescriptor_Matrix_Config = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/Config',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  mlmbox_types_account_pb.Matrix,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.config =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/Config',
      request,
      metadata || {},
      methodDescriptor_Matrix_Config,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.config =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/Config',
      request,
      metadata || {},
      methodDescriptor_Matrix_Config);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Matrix.View.Request,
 *   !proto.mlmbox.types.Matrix.View>}
 */
const methodDescriptor_Matrix_View = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/View',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.Matrix.View.Request,
  mlmbox_types_account_pb.Matrix.View,
  /**
   * @param {!proto.mlmbox.types.Matrix.View.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.View.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Matrix.View.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix.View)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix.View>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.view =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/View',
      request,
      metadata || {},
      methodDescriptor_Matrix_View,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Matrix.View.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix.View>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.view =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/View',
      request,
      metadata || {},
      methodDescriptor_Matrix_View);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Matrix.Invoice.Request,
 *   !proto.mlmbox.types.Matrix.Invoice.PreviewResponse>}
 */
const methodDescriptor_Matrix_PreviewPurchase = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/PreviewPurchase',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.Matrix.Invoice.Request,
  mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse,
  /**
   * @param {!proto.mlmbox.types.Matrix.Invoice.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Matrix.Invoice.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix.Invoice.PreviewResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix.Invoice.PreviewResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.previewPurchase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/PreviewPurchase',
      request,
      metadata || {},
      methodDescriptor_Matrix_PreviewPurchase,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Matrix.Invoice.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix.Invoice.PreviewResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.previewPurchase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/PreviewPurchase',
      request,
      metadata || {},
      methodDescriptor_Matrix_PreviewPurchase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Matrix.Invoice.Request,
 *   !proto.mlmbox.types.Matrix.Invoice.VerifiedResponse>}
 */
const methodDescriptor_Matrix_VerifiedPurchase = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.Matrix.Invoice.Request,
  mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse,
  /**
   * @param {!proto.mlmbox.types.Matrix.Invoice.Request} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Matrix.Invoice.Request} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix.Invoice.VerifiedResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix.Invoice.VerifiedResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.verifiedPurchase =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
      request,
      metadata || {},
      methodDescriptor_Matrix_VerifiedPurchase,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Matrix.Invoice.Request} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix.Invoice.VerifiedResponse>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.verifiedPurchase =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
      request,
      metadata || {},
      methodDescriptor_Matrix_VerifiedPurchase);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.mlmbox.types.Matrix.Config.Reinvest,
 *   !proto.mlmbox.types.Matrix.Config.Reinvest>}
 */
const methodDescriptor_Matrix_SetReinvestConfig = new grpc.web.MethodDescriptor(
  '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
  grpc.web.MethodType.UNARY,
  mlmbox_types_account_pb.Matrix.Config.Reinvest,
  mlmbox_types_account_pb.Matrix.Config.Reinvest,
  /**
   * @param {!proto.mlmbox.types.Matrix.Config.Reinvest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  mlmbox_types_account_pb.Matrix.Config.Reinvest.deserializeBinary
);


/**
 * @param {!proto.mlmbox.types.Matrix.Config.Reinvest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.mlmbox.types.Matrix.Config.Reinvest)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.mlmbox.types.Matrix.Config.Reinvest>|undefined}
 *     The XHR Node Readable Stream
 */
proto.mlmbox.client.matrix.MatrixClient.prototype.setReinvestConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
      request,
      metadata || {},
      methodDescriptor_Matrix_SetReinvestConfig,
      callback);
};


/**
 * @param {!proto.mlmbox.types.Matrix.Config.Reinvest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.mlmbox.types.Matrix.Config.Reinvest>}
 *     Promise that resolves to the response
 */
proto.mlmbox.client.matrix.MatrixPromiseClient.prototype.setReinvestConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
      request,
      metadata || {},
      methodDescriptor_Matrix_SetReinvestConfig);
};


module.exports = proto.mlmbox.client.matrix;

