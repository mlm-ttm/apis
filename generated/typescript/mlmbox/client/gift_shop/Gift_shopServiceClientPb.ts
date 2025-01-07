/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.gift_shop
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v5.28.2
// source: mlmbox/client/gift_shop/gift_shop.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_client_gift_shop_gift_shop_pb from '../../../mlmbox/client/gift_shop/gift_shop_pb'; // proto import: "mlmbox/client/gift_shop/gift_shop.proto"
import * as mlmbox_types_gift_shop_pb from '../../../mlmbox/types/gift_shop_pb'; // proto import: "mlmbox/types/gift_shop.proto"


export class GiftShopClient {
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
    '/mlmbox.client.gift_shop.GiftShop/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_gift_shop_pb.GiftShop.State,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.State.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.State>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.State) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.State>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.State) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/Get',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    mlmbox_types_gift_shop_pb.GiftShop.Info,
    (request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
  );

  get(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  get(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  get(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/Get',
        request,
        metadata || {},
        this.methodDescriptorGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Get',
    request,
    metadata || {},
    this.methodDescriptorGet);
  }

  methodDescriptorRemove = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/Remove',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    google_protobuf_empty_pb.Empty,
    (request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  remove(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  remove(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  remove(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/Remove',
        request,
        metadata || {},
        this.methodDescriptorRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Remove',
    request,
    metadata || {},
    this.methodDescriptorRemove);
  }

  methodDescriptorGetUploaderUrl = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/GetUploaderUrl',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    mlmbox_client_gift_shop_gift_shop_pb.UrlResponse,
    (request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id) => {
      return request.serializeBinary();
    },
    mlmbox_client_gift_shop_gift_shop_pb.UrlResponse.deserializeBinary
  );

  getUploaderUrl(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_client_gift_shop_gift_shop_pb.UrlResponse>;

  getUploaderUrl(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_client_gift_shop_gift_shop_pb.UrlResponse) => void): grpcWeb.ClientReadableStream<mlmbox_client_gift_shop_gift_shop_pb.UrlResponse>;

  getUploaderUrl(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_client_gift_shop_gift_shop_pb.UrlResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/GetUploaderUrl',
        request,
        metadata || {},
        this.methodDescriptorGetUploaderUrl,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/GetUploaderUrl',
    request,
    metadata || {},
    this.methodDescriptorGetUploaderUrl);
  }

  methodDescriptorCreate = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/Create',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_gift_shop_gift_shop_pb.CreateRequest,
    mlmbox_types_gift_shop_pb.GiftShop.Info,
    (request: mlmbox_client_gift_shop_gift_shop_pb.CreateRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
  );

  create(
    request: mlmbox_client_gift_shop_gift_shop_pb.CreateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  create(
    request: mlmbox_client_gift_shop_gift_shop_pb.CreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  create(
    request: mlmbox_client_gift_shop_gift_shop_pb.CreateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/Create',
        request,
        metadata || {},
        this.methodDescriptorCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Create',
    request,
    metadata || {},
    this.methodDescriptorCreate);
  }

  methodDescriptorCardUpdateInfo = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/CardUpdateInfo',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_gift_shop_gift_shop_pb.CardUpdateInfoRequest,
    mlmbox_types_gift_shop_pb.GiftShop.Info,
    (request: mlmbox_client_gift_shop_gift_shop_pb.CardUpdateInfoRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
  );

  cardUpdateInfo(
    request: mlmbox_client_gift_shop_gift_shop_pb.CardUpdateInfoRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  cardUpdateInfo(
    request: mlmbox_client_gift_shop_gift_shop_pb.CardUpdateInfoRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  cardUpdateInfo(
    request: mlmbox_client_gift_shop_gift_shop_pb.CardUpdateInfoRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/CardUpdateInfo',
        request,
        metadata || {},
        this.methodDescriptorCardUpdateInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/CardUpdateInfo',
    request,
    metadata || {},
    this.methodDescriptorCardUpdateInfo);
  }

  methodDescriptorCardBuy = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/CardBuy',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    mlmbox_types_gift_shop_pb.GiftShop.Info,
    (request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
  );

  cardBuy(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  cardBuy(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  cardBuy(
    request: mlmbox_types_gift_shop_pb.GiftShop.Card.Id,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/CardBuy',
        request,
        metadata || {},
        this.methodDescriptorCardBuy,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/CardBuy',
    request,
    metadata || {},
    this.methodDescriptorCardBuy);
  }

  methodDescriptorWithdrawal = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/Withdrawal',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_gift_shop_gift_shop_pb.WithdrawalRequest,
    mlmbox_types_gift_shop_pb.GiftShop.Info,
    (request: mlmbox_client_gift_shop_gift_shop_pb.WithdrawalRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
  );

  withdrawal(
    request: mlmbox_client_gift_shop_gift_shop_pb.WithdrawalRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  withdrawal(
    request: mlmbox_client_gift_shop_gift_shop_pb.WithdrawalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  withdrawal(
    request: mlmbox_client_gift_shop_gift_shop_pb.WithdrawalRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/Withdrawal',
        request,
        metadata || {},
        this.methodDescriptorWithdrawal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Withdrawal',
    request,
    metadata || {},
    this.methodDescriptorWithdrawal);
  }

  methodDescriptorReview = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.gift_shop.GiftShop/Review',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_gift_shop_gift_shop_pb.ReviewRequest,
    mlmbox_types_gift_shop_pb.GiftShop.Info,
    (request: mlmbox_client_gift_shop_gift_shop_pb.ReviewRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_gift_shop_pb.GiftShop.Info.deserializeBinary
  );

  review(
    request: mlmbox_client_gift_shop_gift_shop_pb.ReviewRequest,
    metadata?: grpcWeb.Metadata | null): Promise<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  review(
    request: mlmbox_client_gift_shop_gift_shop_pb.ReviewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void): grpcWeb.ClientReadableStream<mlmbox_types_gift_shop_pb.GiftShop.Info>;

  review(
    request: mlmbox_client_gift_shop_gift_shop_pb.ReviewRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_gift_shop_pb.GiftShop.Info) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.gift_shop.GiftShop/Review',
        request,
        metadata || {},
        this.methodDescriptorReview,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.gift_shop.GiftShop/Review',
    request,
    metadata || {},
    this.methodDescriptorReview);
  }

}

