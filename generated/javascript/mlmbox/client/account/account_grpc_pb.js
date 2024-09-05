// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var mlmbox_client_account_account_pb = require('../../../mlmbox/client/account/account_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js');
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

function serialize_mlmbox_client_account_SetLoginRequest(arg) {
  if (!(arg instanceof mlmbox_client_account_account_pb.SetLoginRequest)) {
    throw new Error('Expected argument of type mlmbox.client.account.SetLoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_account_SetLoginRequest(buffer_arg) {
  return mlmbox_client_account_account_pb.SetLoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_account_SetProfileRequest(arg) {
  if (!(arg instanceof mlmbox_client_account_account_pb.SetProfileRequest)) {
    throw new Error('Expected argument of type mlmbox.client.account.SetProfileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_account_SetProfileRequest(buffer_arg) {
  return mlmbox_client_account_account_pb.SetProfileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account)) {
    throw new Error('Expected argument of type mlmbox.types.Account');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account(buffer_arg) {
  return mlmbox_types_account_pb.Account.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account_Profile(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account.Profile)) {
    throw new Error('Expected argument of type mlmbox.types.Account.Profile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account_Profile(buffer_arg) {
  return mlmbox_types_account_pb.Account.Profile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account_Username(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account.Username)) {
    throw new Error('Expected argument of type mlmbox.types.Account.Username');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account_Username(buffer_arg) {
  return mlmbox_types_account_pb.Account.Username.deserializeBinary(new Uint8Array(buffer_arg));
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


var AccountService = exports.AccountService = {
  info: {
    path: '/mlmbox.client.account.Account/Info',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_account_pb.Account,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Account,
    responseDeserialize: deserialize_mlmbox_types_Account,
  },
  setLogin: {
    path: '/mlmbox.client.account.Account/SetLogin',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_account_account_pb.SetLoginRequest,
    responseType: mlmbox_types_account_pb.Account.Username,
    requestSerialize: serialize_mlmbox_client_account_SetLoginRequest,
    requestDeserialize: deserialize_mlmbox_client_account_SetLoginRequest,
    responseSerialize: serialize_mlmbox_types_Account_Username,
    responseDeserialize: deserialize_mlmbox_types_Account_Username,
  },
  setLocale: {
    path: '/mlmbox.client.account.Account/SetLocale',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_locale_pb.Locale.Id,
    responseType: mlmbox_types_locale_pb.Locale,
    requestSerialize: serialize_mlmbox_types_Locale_Id,
    requestDeserialize: deserialize_mlmbox_types_Locale_Id,
    responseSerialize: serialize_mlmbox_types_Locale,
    responseDeserialize: deserialize_mlmbox_types_Locale,
  },
  setProfile: {
    path: '/mlmbox.client.account.Account/SetProfile',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_account_account_pb.SetProfileRequest,
    responseType: mlmbox_types_account_pb.Account.Profile,
    requestSerialize: serialize_mlmbox_client_account_SetProfileRequest,
    requestDeserialize: deserialize_mlmbox_client_account_SetProfileRequest,
    responseSerialize: serialize_mlmbox_types_Account_Profile,
    responseDeserialize: deserialize_mlmbox_types_Account_Profile,
  },
};

exports.AccountClient = grpc.makeGenericClientConstructor(AccountService);
