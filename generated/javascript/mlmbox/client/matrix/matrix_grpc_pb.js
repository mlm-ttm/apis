// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix_Config_Reinvest(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix.Config.Reinvest)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix.Config.Reinvest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix_Config_Reinvest(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.Config.Reinvest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix_Invoice_PreviewResponse(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix.Invoice.PreviewResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix_Invoice_PreviewResponse(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix_Invoice_Request(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix.Invoice.Request)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix.Invoice.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix_Invoice_Request(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.Invoice.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix_Invoice_VerifiedResponse(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix.Invoice.VerifiedResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix_Invoice_VerifiedResponse(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix_View(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix.View)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix.View');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix_View(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.View.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Matrix_View_Request(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Matrix.View.Request)) {
    throw new Error('Expected argument of type mlmbox.types.Matrix.View.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Matrix_View_Request(buffer_arg) {
  return mlmbox_types_account_pb.Matrix.View.Request.deserializeBinary(new Uint8Array(buffer_arg));
}


var MatrixService = exports.MatrixService = {
  config: {
    path: '/mlmbox.client.matrix.Matrix/Config',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_account_pb.Matrix,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Matrix,
    responseDeserialize: deserialize_mlmbox_types_Matrix,
  },
  view: {
    path: '/mlmbox.client.matrix.Matrix/View',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_account_pb.Matrix.View.Request,
    responseType: mlmbox_types_account_pb.Matrix.View,
    requestSerialize: serialize_mlmbox_types_Matrix_View_Request,
    requestDeserialize: deserialize_mlmbox_types_Matrix_View_Request,
    responseSerialize: serialize_mlmbox_types_Matrix_View,
    responseDeserialize: deserialize_mlmbox_types_Matrix_View,
  },
  previewPurchase: {
    path: '/mlmbox.client.matrix.Matrix/PreviewPurchase',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_account_pb.Matrix.Invoice.Request,
    responseType: mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse,
    requestSerialize: serialize_mlmbox_types_Matrix_Invoice_Request,
    requestDeserialize: deserialize_mlmbox_types_Matrix_Invoice_Request,
    responseSerialize: serialize_mlmbox_types_Matrix_Invoice_PreviewResponse,
    responseDeserialize: deserialize_mlmbox_types_Matrix_Invoice_PreviewResponse,
  },
  verifiedPurchase: {
    path: '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_account_pb.Matrix.Invoice.Request,
    responseType: mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse,
    requestSerialize: serialize_mlmbox_types_Matrix_Invoice_Request,
    requestDeserialize: deserialize_mlmbox_types_Matrix_Invoice_Request,
    responseSerialize: serialize_mlmbox_types_Matrix_Invoice_VerifiedResponse,
    responseDeserialize: deserialize_mlmbox_types_Matrix_Invoice_VerifiedResponse,
  },
  setReinvestConfig: {
    path: '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    responseType: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    requestSerialize: serialize_mlmbox_types_Matrix_Config_Reinvest,
    requestDeserialize: deserialize_mlmbox_types_Matrix_Config_Reinvest,
    responseSerialize: serialize_mlmbox_types_Matrix_Config_Reinvest,
    responseDeserialize: deserialize_mlmbox_types_Matrix_Config_Reinvest,
  },
};

exports.MatrixClient = grpc.makeGenericClientConstructor(MatrixService);
