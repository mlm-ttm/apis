/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.asset
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/asset/coin_market_cap.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_asset_pb from '../../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"


export class CoinMarketCapClient {
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

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.asset.CoinMarketCap/Get',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_asset_pb.Asset.Id,
    mlmbox_types_asset_pb.Asset.MarketCap,
    (request: mlmbox_types_asset_pb.Asset.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_asset_pb.Asset.MarketCap.deserializeBinary
  );

  get(
    request: mlmbox_types_asset_pb.Asset.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_asset_pb.Asset.MarketCap>;

  get(
    request: mlmbox_types_asset_pb.Asset.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_asset_pb.Asset.MarketCap) => void): grpcWeb.ClientReadableStream<mlmbox_types_asset_pb.Asset.MarketCap>;

  get(
    request: mlmbox_types_asset_pb.Asset.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_asset_pb.Asset.MarketCap) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.asset.CoinMarketCap/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.asset.CoinMarketCap/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorAll = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.asset.CoinMarketCap/All',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_asset_pb.Asset.MarketCap.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_asset_pb.Asset.MarketCap.List.deserializeBinary
  );

  all(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_asset_pb.Asset.MarketCap.List>;

  all(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_asset_pb.Asset.MarketCap.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_asset_pb.Asset.MarketCap.List>;

  all(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_asset_pb.Asset.MarketCap.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.asset.CoinMarketCap/All',
        request,
        metadata || {},
        this.methodDescriptorAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.asset.CoinMarketCap/All',
    request,
    metadata || {},
    this.methodDescriptorAll);
  }

}

