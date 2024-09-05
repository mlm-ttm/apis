// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mlmbox_types_asset_pair_pb = require('../../../mlmbox/types/asset_pair_pb.js');
var mlmbox_types_exchanger_pb = require('../../../mlmbox/types/exchanger_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_AssetPair_Id(arg) {
  if (!(arg instanceof mlmbox_types_asset_pair_pb.AssetPair.Id)) {
    throw new Error('Expected argument of type mlmbox.types.AssetPair.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_AssetPair_Id(buffer_arg) {
  return mlmbox_types_asset_pair_pb.AssetPair.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Exchanger_Rate(arg) {
  if (!(arg instanceof mlmbox_types_exchanger_pb.Exchanger.Rate)) {
    throw new Error('Expected argument of type mlmbox.types.Exchanger.Rate');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Exchanger_Rate(buffer_arg) {
  return mlmbox_types_exchanger_pb.Exchanger.Rate.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Exchanger_Rate_List(arg) {
  if (!(arg instanceof mlmbox_types_exchanger_pb.Exchanger.Rate.List)) {
    throw new Error('Expected argument of type mlmbox.types.Exchanger.Rate.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Exchanger_Rate_List(buffer_arg) {
  return mlmbox_types_exchanger_pb.Exchanger.Rate.List.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssetPairService = exports.AssetPairService = {
  get: {
    path: '/mlmbox.client.asset_pair.AssetPair/Get',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_asset_pair_pb.AssetPair.Id,
    responseType: mlmbox_types_exchanger_pb.Exchanger.Rate,
    requestSerialize: serialize_mlmbox_types_AssetPair_Id,
    requestDeserialize: deserialize_mlmbox_types_AssetPair_Id,
    responseSerialize: serialize_mlmbox_types_Exchanger_Rate,
    responseDeserialize: deserialize_mlmbox_types_Exchanger_Rate,
  },
  all: {
    path: '/mlmbox.client.asset_pair.AssetPair/All',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_exchanger_pb.Exchanger.Rate.List,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Exchanger_Rate_List,
    responseDeserialize: deserialize_mlmbox_types_Exchanger_Rate_List,
  },
};

exports.AssetPairClient = grpc.makeGenericClientConstructor(AssetPairService);
