/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.asset_pair
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_types_asset_pair_pb from '../../../mlmbox/types/asset_pair_pb';
import * as mlmbox_types_exchanger_pb from '../../../mlmbox/types/exchanger_pb';


export class AssetPairClient {
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
    '/mlmbox.client.asset_pair.AssetPair/Get',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_asset_pair_pb.AssetPair.Id,
    mlmbox_types_exchanger_pb.Exchanger.Rate,
    (request: mlmbox_types_asset_pair_pb.AssetPair.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_exchanger_pb.Exchanger.Rate.deserializeBinary
  );

  get(
    request: mlmbox_types_asset_pair_pb.AssetPair.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_exchanger_pb.Exchanger.Rate>;

  get(
    request: mlmbox_types_asset_pair_pb.AssetPair.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_exchanger_pb.Exchanger.Rate) => void): grpcWeb.ClientReadableStream<mlmbox_types_exchanger_pb.Exchanger.Rate>;

  get(
    request: mlmbox_types_asset_pair_pb.AssetPair.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_exchanger_pb.Exchanger.Rate) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.asset_pair.AssetPair/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.asset_pair.AssetPair/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorAll = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.asset_pair.AssetPair/All',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_exchanger_pb.Exchanger.Rate.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_exchanger_pb.Exchanger.Rate.List.deserializeBinary
  );

  all(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_exchanger_pb.Exchanger.Rate.List>;

  all(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_exchanger_pb.Exchanger.Rate.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_exchanger_pb.Exchanger.Rate.List>;

  all(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_exchanger_pb.Exchanger.Rate.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.asset_pair.AssetPair/All',
        request,
        metadata || {},
        this.methodDescriptorAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.asset_pair.AssetPair/All',
    request,
    metadata || {},
    this.methodDescriptorAll);
  }

}
