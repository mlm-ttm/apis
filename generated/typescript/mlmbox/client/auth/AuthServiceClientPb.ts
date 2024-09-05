/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.auth
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_client_auth_auth_pb from '../../../mlmbox/client/auth/auth_pb';


export class AuthClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorTelegramBotSign = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.auth.Auth/TelegramBotSign',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_auth_auth_pb.TelegramBotSignRequest,
    mlmbox_client_auth_auth_pb.AuthSignResponse,
    (request: mlmbox_client_auth_auth_pb.TelegramBotSignRequest) => {
      return request.serializeBinary();
    },
    mlmbox_client_auth_auth_pb.AuthSignResponse.deserializeBinary
  );

  telegramBotSign(
    request: mlmbox_client_auth_auth_pb.TelegramBotSignRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_client_auth_auth_pb.AuthSignResponse>;

  telegramBotSign(
    request: mlmbox_client_auth_auth_pb.TelegramBotSignRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_client_auth_auth_pb.AuthSignResponse) => void): grpcWeb.ClientReadableStream<mlmbox_client_auth_auth_pb.AuthSignResponse>;

  telegramBotSign(
    request: mlmbox_client_auth_auth_pb.TelegramBotSignRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_client_auth_auth_pb.AuthSignResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.auth.Auth/TelegramBotSign',
        request,
        metadata || {},
        this.methodDescriptorTelegramBotSign,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.auth.Auth/TelegramBotSign',
    request,
    metadata || {},
    this.methodDescriptorTelegramBotSign);
  }

  methodDescriptorTokenValidate = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.auth.Auth/TokenValidate',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_client_auth_auth_pb.TokenValidateResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_client_auth_auth_pb.TokenValidateResponse.deserializeBinary
  );

  tokenValidate(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_client_auth_auth_pb.TokenValidateResponse>;

  tokenValidate(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_client_auth_auth_pb.TokenValidateResponse) => void): grpcWeb.ClientReadableStream<mlmbox_client_auth_auth_pb.TokenValidateResponse>;

  tokenValidate(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_client_auth_auth_pb.TokenValidateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.auth.Auth/TokenValidate',
        request,
        metadata || {},
        this.methodDescriptorTokenValidate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.auth.Auth/TokenValidate',
    request,
    metadata || {},
    this.methodDescriptorTokenValidate);
  }

}

