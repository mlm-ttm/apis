// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var mlmbox_client_auth_auth_pb = require('../../../mlmbox/client/auth/auth_pb.js');
var mlmbox_types_status_pb = require('../../../mlmbox/types/status_pb.js');
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

function serialize_mlmbox_client_auth_AuthSignResponse(arg) {
  if (!(arg instanceof mlmbox_client_auth_auth_pb.AuthSignResponse)) {
    throw new Error('Expected argument of type mlmbox.client.auth.AuthSignResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_auth_AuthSignResponse(buffer_arg) {
  return mlmbox_client_auth_auth_pb.AuthSignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_auth_TelegramBotSignRequest(arg) {
  if (!(arg instanceof mlmbox_client_auth_auth_pb.TelegramBotSignRequest)) {
    throw new Error('Expected argument of type mlmbox.client.auth.TelegramBotSignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_auth_TelegramBotSignRequest(buffer_arg) {
  return mlmbox_client_auth_auth_pb.TelegramBotSignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_auth_TokenValidateResponse(arg) {
  if (!(arg instanceof mlmbox_client_auth_auth_pb.TokenValidateResponse)) {
    throw new Error('Expected argument of type mlmbox.client.auth.TokenValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_auth_TokenValidateResponse(buffer_arg) {
  return mlmbox_client_auth_auth_pb.TokenValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  telegramBotSign: {
    path: '/mlmbox.client.auth.Auth/TelegramBotSign',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_auth_auth_pb.TelegramBotSignRequest,
    responseType: mlmbox_client_auth_auth_pb.AuthSignResponse,
    requestSerialize: serialize_mlmbox_client_auth_TelegramBotSignRequest,
    requestDeserialize: deserialize_mlmbox_client_auth_TelegramBotSignRequest,
    responseSerialize: serialize_mlmbox_client_auth_AuthSignResponse,
    responseDeserialize: deserialize_mlmbox_client_auth_AuthSignResponse,
  },
  tokenValidate: {
    path: '/mlmbox.client.auth.Auth/TokenValidate',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_client_auth_auth_pb.TokenValidateResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_client_auth_TokenValidateResponse,
    responseDeserialize: deserialize_mlmbox_client_auth_TokenValidateResponse,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
