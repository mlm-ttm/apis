// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var mlmbox_types_asset_pb = require('../../../mlmbox/types/asset_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Asset(arg) {
  if (!(arg instanceof mlmbox_types_asset_pb.Asset)) {
    throw new Error('Expected argument of type mlmbox.types.Asset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Asset(buffer_arg) {
  return mlmbox_types_asset_pb.Asset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Asset_Id(arg) {
  if (!(arg instanceof mlmbox_types_asset_pb.Asset.Id)) {
    throw new Error('Expected argument of type mlmbox.types.Asset.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Asset_Id(buffer_arg) {
  return mlmbox_types_asset_pb.Asset.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_AssetList(arg) {
  if (!(arg instanceof mlmbox_types_asset_pb.AssetList)) {
    throw new Error('Expected argument of type mlmbox.types.AssetList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_AssetList(buffer_arg) {
  return mlmbox_types_asset_pb.AssetList.deserializeBinary(new Uint8Array(buffer_arg));
}


var AssetService = exports.AssetService = {
  get: {
    path: '/mlmbox.client.asset.Asset/Get',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_asset_pb.Asset.Id,
    responseType: mlmbox_types_asset_pb.Asset,
    requestSerialize: serialize_mlmbox_types_Asset_Id,
    requestDeserialize: deserialize_mlmbox_types_Asset_Id,
    responseSerialize: serialize_mlmbox_types_Asset,
    responseDeserialize: deserialize_mlmbox_types_Asset,
  },
  all: {
    path: '/mlmbox.client.asset.Asset/All',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_asset_pb.AssetList,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_AssetList,
    responseDeserialize: deserialize_mlmbox_types_AssetList,
  },
};

exports.AssetClient = grpc.makeGenericClientConstructor(AssetService);
