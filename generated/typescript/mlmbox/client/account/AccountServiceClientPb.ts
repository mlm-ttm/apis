/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.account
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_client_account_account_pb from '../../../mlmbox/client/account/account_pb';
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb';
import * as mlmbox_types_locale_pb from '../../../mlmbox/types/locale_pb';


export class AccountClient {
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
    '/mlmbox.client.account.Account/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_account_pb.Account,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorSetLogin = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetLogin',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_account_account_pb.SetLoginRequest,
    mlmbox_types_account_pb.Account.Username,
    (request: mlmbox_client_account_account_pb.SetLoginRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Username.deserializeBinary
  );

  setLogin(
    request: mlmbox_client_account_account_pb.SetLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Username>;

  setLogin(
    request: mlmbox_client_account_account_pb.SetLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Username>;

  setLogin(
    request: mlmbox_client_account_account_pb.SetLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Username) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetLogin',
        request,
        metadata || {},
        this.methodDescriptorSetLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetLogin',
    request,
    metadata || {},
    this.methodDescriptorSetLogin);
  }

  methodDescriptorSetLocale = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetLocale',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_locale_pb.Locale.Id,
    mlmbox_types_locale_pb.Locale,
    (request: mlmbox_types_locale_pb.Locale.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_locale_pb.Locale.deserializeBinary
  );

  setLocale(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_locale_pb.Locale>;

  setLocale(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale) => void): grpcWeb.ClientReadableStream<mlmbox_types_locale_pb.Locale>;

  setLocale(
    request: mlmbox_types_locale_pb.Locale.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_locale_pb.Locale) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetLocale',
        request,
        metadata || {},
        this.methodDescriptorSetLocale,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetLocale',
    request,
    metadata || {},
    this.methodDescriptorSetLocale);
  }

  methodDescriptorSetProfile = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.account.Account/SetProfile',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_account_account_pb.SetProfileRequest,
    mlmbox_types_account_pb.Account.Profile,
    (request: mlmbox_client_account_account_pb.SetProfileRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_account_pb.Account.Profile.deserializeBinary
  );

  setProfile(
    request: mlmbox_client_account_account_pb.SetProfileRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_account_pb.Account.Profile>;

  setProfile(
    request: mlmbox_client_account_account_pb.SetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile) => void): grpcWeb.ClientReadableStream<mlmbox_types_account_pb.Account.Profile>;

  setProfile(
    request: mlmbox_client_account_account_pb.SetProfileRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_account_pb.Account.Profile) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.account.Account/SetProfile',
        request,
        metadata || {},
        this.methodDescriptorSetProfile,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.account.Account/SetProfile',
    request,
    metadata || {},
    this.methodDescriptorSetProfile);
  }

}
