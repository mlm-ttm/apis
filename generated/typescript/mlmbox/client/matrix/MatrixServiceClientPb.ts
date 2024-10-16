/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.matrix
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/matrix/matrix.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"


export class MatrixClient {
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
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorInfo = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.matrix.Matrix/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_account_pb.Matrix.TreeAccount.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Matrix.TreeAccount.List.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.TreeAccount.List>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.TreeAccount.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.TreeAccount.List>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.TreeAccount.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.matrix.Matrix/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.matrix.Matrix/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorView = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.matrix.Matrix/View',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Matrix.View.Request,
    mlmbox_types_account_pb.Matrix.View,
    (request: mlmbox_types_account_pb.Matrix.View.Request) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Matrix.View.deserializeBinary
  );

  view(
    request: mlmbox_types_account_pb.Matrix.View.Request,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.View>;

  view(
    request: mlmbox_types_account_pb.Matrix.View.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.View) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.View>;

  view(
    request: mlmbox_types_account_pb.Matrix.View.Request,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.View) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.matrix.Matrix/View',
        request,
        metadata || {},
        this.methodDescriptorView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.matrix.Matrix/View',
    request,
    metadata || {},
    this.methodDescriptorView);
  }

  methodDescriptorPreviewPurchase = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.matrix.Matrix/PreviewPurchase',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Matrix.Invoice.Request,
    mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse,
    (request: mlmbox_types_account_pb.Matrix.Invoice.Request) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse.deserializeBinary
  );

  previewPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse>;

  previewPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse>;

  previewPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.matrix.Matrix/PreviewPurchase',
        request,
        metadata || {},
        this.methodDescriptorPreviewPurchase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.matrix.Matrix/PreviewPurchase',
    request,
    metadata || {},
    this.methodDescriptorPreviewPurchase);
  }

  methodDescriptorVerifiedPurchase = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Matrix.Invoice.Request,
    mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse,
    (request: mlmbox_types_account_pb.Matrix.Invoice.Request) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse.deserializeBinary
  );

  verifiedPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse>;

  verifiedPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse>;

  verifiedPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
        request,
        metadata || {},
        this.methodDescriptorVerifiedPurchase,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.matrix.Matrix/VerifiedPurchase',
    request,
    metadata || {},
    this.methodDescriptorVerifiedPurchase);
  }

  methodDescriptorSetReinvestConfig = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_account_pb.Matrix.Config.Reinvest,
    mlmbox_types_account_pb.Matrix.Config.Reinvest,
    (request: mlmbox_types_account_pb.Matrix.Config.Reinvest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Matrix.Config.Reinvest.deserializeBinary
  );

  setReinvestConfig(
    request: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.Config.Reinvest>;

  setReinvestConfig(
    request: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Config.Reinvest) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.Config.Reinvest>;

  setReinvestConfig(
    request: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Config.Reinvest) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
        request,
        metadata || {},
        this.methodDescriptorSetReinvestConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.matrix.Matrix/SetReinvestConfig',
    request,
    metadata || {},
    this.methodDescriptorSetReinvestConfig);
  }

}

