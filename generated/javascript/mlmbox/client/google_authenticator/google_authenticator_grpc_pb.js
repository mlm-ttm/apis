// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mlmbox_types_google_authenticator_pb = require('../../../mlmbox/types/google_authenticator_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_GoogleAuthenticator(arg) {
  if (!(arg instanceof mlmbox_types_google_authenticator_pb.GoogleAuthenticator)) {
    throw new Error('Expected argument of type mlmbox.types.GoogleAuthenticator');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_GoogleAuthenticator(buffer_arg) {
  return mlmbox_types_google_authenticator_pb.GoogleAuthenticator.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_GoogleAuthenticator_SecretCode(arg) {
  if (!(arg instanceof mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode)) {
    throw new Error('Expected argument of type mlmbox.types.GoogleAuthenticator.SecretCode');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_GoogleAuthenticator_SecretCode(buffer_arg) {
  return mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Request(arg) {
  if (!(arg instanceof mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request)) {
    throw new Error('Expected argument of type mlmbox.types.GoogleAuthenticator.VerifiedCode.Request');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Request(buffer_arg) {
  return mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Response(arg) {
  if (!(arg instanceof mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response)) {
    throw new Error('Expected argument of type mlmbox.types.GoogleAuthenticator.VerifiedCode.Response');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Response(buffer_arg) {
  return mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response.deserializeBinary(new Uint8Array(buffer_arg));
}


var GoogleAuthenticatorService = exports.GoogleAuthenticatorService = {
  info: {
    path: '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_google_authenticator_pb.GoogleAuthenticator,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_GoogleAuthenticator,
    responseDeserialize: deserialize_mlmbox_types_GoogleAuthenticator,
  },
  generate: {
    path: '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_GoogleAuthenticator_SecretCode,
    responseDeserialize: deserialize_mlmbox_types_GoogleAuthenticator_SecretCode,
  },
  activate: {
    path: '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    responseType: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response,
    requestSerialize: serialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Request,
    requestDeserialize: deserialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Request,
    responseSerialize: serialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Response,
    responseDeserialize: deserialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Response,
  },
  deactivate: {
    path: '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    responseType: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response,
    requestSerialize: serialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Request,
    requestDeserialize: deserialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Request,
    responseSerialize: serialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Response,
    responseDeserialize: deserialize_mlmbox_types_GoogleAuthenticator_VerifiedCode_Response,
  },
};

exports.GoogleAuthenticatorClient = grpc.makeGenericClientConstructor(GoogleAuthenticatorService);
