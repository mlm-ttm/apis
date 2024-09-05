/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.locale
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_types_locale_pb from '../../../mlmbox/types/locale_pb';


export class LocaleClient {
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

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.locale.Locale/Get',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_locale_pb.Locale.Id,
    mlmbox_types_locale_pb.Locale,
    (request: mlmbox_types_locale_pb.Locale.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_locale_pb.Locale.deserializeBinary
  );

  get(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_locale_pb.Locale>;

  get(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale) => void): grpcWeb.ClientReadableStream<mlmbox_types_locale_pb.Locale>;

  get(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.locale.Locale/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.locale.Locale/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorList = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.locale.Locale/List',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_locale_pb.Locale.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_locale_pb.Locale.List.deserializeBinary
  );

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_locale_pb.Locale.List>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_locale_pb.Locale.List>;

  list(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.locale.Locale/List',
        request,
        metadata || {},
        this.methodDescriptorList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.locale.Locale/List',
    request,
    metadata || {},
    this.methodDescriptorList);
  }

}

