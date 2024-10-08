/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.matrix
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb';


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
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorConfig = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.matrix.Matrix/Config',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_account_pb.Matrix,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Matrix.deserializeBinary
  );

  config(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix>;

  config(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix>;

  config(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.matrix.Matrix/Config',
        request,
        metadata || {},
        this.methodDescriptorConfig,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.matrix.Matrix/Config',
    request,
    metadata || {},
    this.methodDescriptorConfig);
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
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.View>;

  view(
    request: mlmbox_types_account_pb.Matrix.View.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.View) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.View>;

  view(
    request: mlmbox_types_account_pb.Matrix.View.Request,
    metadata: grpcWeb.Metadata | null,
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
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse>;

  previewPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.Invoice.PreviewResponse>;

  previewPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata: grpcWeb.Metadata | null,
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
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse>;

  verifiedPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.Invoice.VerifiedResponse>;

  verifiedPurchase(
    request: mlmbox_types_account_pb.Matrix.Invoice.Request,
    metadata: grpcWeb.Metadata | null,
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
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Matrix.Config.Reinvest>;

  setReinvestConfig(
    request: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Matrix.Config.Reinvest) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Matrix.Config.Reinvest>;

  setReinvestConfig(
    request: mlmbox_types_account_pb.Matrix.Config.Reinvest,
    metadata: grpcWeb.Metadata | null,
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

