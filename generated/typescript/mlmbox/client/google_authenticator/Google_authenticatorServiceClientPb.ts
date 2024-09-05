/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.google_authenticator
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_types_google_authenticator_pb from '../../../mlmbox/types/google_authenticator_pb';


export class GoogleAuthenticatorClient {
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

  methodDescriptorInfo = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_google_authenticator_pb.GoogleAuthenticator>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator) => void): grpcWeb.ClientReadableStream<mlmbox_types_google_authenticator_pb.GoogleAuthenticator>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorGenerate = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode.deserializeBinary
  );

  generate(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode>;

  generate(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode) => void): grpcWeb.ClientReadableStream<mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode>;

  generate(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.SecretCode) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
        request,
        metadata || {},
        this.methodDescriptorGenerate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Generate',
    request,
    metadata || {},
    this.methodDescriptorGenerate);
  }

  methodDescriptorActivate = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response,
    (request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request) => {
      return request.serializeBinary();
    },
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response.deserializeBinary
  );

  activate(
    request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response>;

  activate(
    request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response) => void): grpcWeb.ClientReadableStream<mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response>;

  activate(
    request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
        request,
        metadata || {},
        this.methodDescriptorActivate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Activate',
    request,
    metadata || {},
    this.methodDescriptorActivate);
  }

  methodDescriptorDeactivate = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response,
    (request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request) => {
      return request.serializeBinary();
    },
    mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response.deserializeBinary
  );

  deactivate(
    request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response>;

  deactivate(
    request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response) => void): grpcWeb.ClientReadableStream<mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response>;

  deactivate(
    request: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.VerifiedCode.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
        request,
        metadata || {},
        this.methodDescriptorDeactivate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.google_authenticator.GoogleAuthenticator/Deactivate',
    request,
    metadata || {},
    this.methodDescriptorDeactivate);
  }

}

