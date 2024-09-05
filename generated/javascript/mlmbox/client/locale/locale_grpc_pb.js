// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mlmbox_types_locale_pb = require('../../../mlmbox/types/locale_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Locale(arg) {
  if (!(arg instanceof mlmbox_types_locale_pb.Locale)) {
    throw new Error('Expected argument of type mlmbox.types.Locale');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Locale(buffer_arg) {
  return mlmbox_types_locale_pb.Locale.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Locale_Id(arg) {
  if (!(arg instanceof mlmbox_types_locale_pb.Locale.Id)) {
    throw new Error('Expected argument of type mlmbox.types.Locale.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Locale_Id(buffer_arg) {
  return mlmbox_types_locale_pb.Locale.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Locale_List(arg) {
  if (!(arg instanceof mlmbox_types_locale_pb.Locale.List)) {
    throw new Error('Expected argument of type mlmbox.types.Locale.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Locale_List(buffer_arg) {
  return mlmbox_types_locale_pb.Locale.List.deserializeBinary(new Uint8Array(buffer_arg));
}


var LocaleService = exports.LocaleService = {
  get: {
    path: '/mlmbox.client.locale.Locale/Get',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_locale_pb.Locale.Id,
    responseType: mlmbox_types_locale_pb.Locale,
    requestSerialize: serialize_mlmbox_types_Locale_Id,
    requestDeserialize: deserialize_mlmbox_types_Locale_Id,
    responseSerialize: serialize_mlmbox_types_Locale,
    responseDeserialize: deserialize_mlmbox_types_Locale,
  },
  list: {
    path: '/mlmbox.client.locale.Locale/List',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_locale_pb.Locale.List,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Locale_List,
    responseDeserialize: deserialize_mlmbox_types_Locale_List,
  },
};

exports.LocaleClient = grpc.makeGenericClientConstructor(LocaleService);
