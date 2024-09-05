/**
 * @fileoverview gRPC-Web generated client stub for mlmbox.client.finance
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_client_finance_wallet_pb from '../../../mlmbox/client/finance/wallet_pb';
import * as mlmbox_types_asset_pb from '../../../mlmbox/types/asset_pb';
import * as mlmbox_types_wallet_pb from '../../../mlmbox/types/wallet_pb';


export class WalletClient {
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
    '/mlmbox.client.finance.Wallet/Info',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_wallet_pb.Wallet,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.deserializeBinary
  );

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet>;

  info(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/Info',
        request,
        metadata || {},
        this.methodDescriptorInfo,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/Info',
    request,
    metadata || {},
    this.methodDescriptorInfo);
  }

  methodDescriptorAssetGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/AssetGet',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_finance_wallet_pb.WalletAssetGetRequest,
    mlmbox_types_wallet_pb.Wallet.Asset,
    (request: mlmbox_client_finance_wallet_pb.WalletAssetGetRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.deserializeBinary
  );

  assetGet(
    request: mlmbox_client_finance_wallet_pb.WalletAssetGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset>;

  assetGet(
    request: mlmbox_client_finance_wallet_pb.WalletAssetGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset>;

  assetGet(
    request: mlmbox_client_finance_wallet_pb.WalletAssetGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/AssetGet',
        request,
        metadata || {},
        this.methodDescriptorAssetGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetGet',
    request,
    metadata || {},
    this.methodDescriptorAssetGet);
  }

  methodDescriptorAssetsAll = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/AssetsAll',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_wallet_pb.Wallet.Asset.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.List.deserializeBinary
  );

  assetsAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset.List>;

  assetsAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset.List>;

  assetsAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/AssetsAll',
        request,
        metadata || {},
        this.methodDescriptorAssetsAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetsAll',
    request,
    metadata || {},
    this.methodDescriptorAssetsAll);
  }

  methodDescriptorAssetTransactionGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/AssetTransactionGet',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id,
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
    (request: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary
  );

  assetTransactionGet(
    request: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset.Transaction>;

  assetTransactionGet(
    request: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset.Transaction>;

  assetTransactionGet(
    request: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/AssetTransactionGet',
        request,
        metadata || {},
        this.methodDescriptorAssetTransactionGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetTransactionGet',
    request,
    metadata || {},
    this.methodDescriptorAssetTransactionGet);
  }

  methodDescriptorAssetTransactionList = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/AssetTransactionList',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest,
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List,
    (request: mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List.deserializeBinary
  );

  assetTransactionList(
    request: mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List>;

  assetTransactionList(
    request: mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List>;

  assetTransactionList(
    request: mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/AssetTransactionList',
        request,
        metadata || {},
        this.methodDescriptorAssetTransactionList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetTransactionList',
    request,
    metadata || {},
    this.methodDescriptorAssetTransactionList);
  }

  methodDescriptorAssetWithdrawalCapacityGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_asset_pb.Asset.Id,
    mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity,
    (request: mlmbox_types_asset_pb.Asset.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity.deserializeBinary
  );

  assetWithdrawalCapacityGet(
    request: mlmbox_types_asset_pb.Asset.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity>;

  assetWithdrawalCapacityGet(
    request: mlmbox_types_asset_pb.Asset.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity>;

  assetWithdrawalCapacityGet(
    request: mlmbox_types_asset_pb.Asset.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
        request,
        metadata || {},
        this.methodDescriptorAssetWithdrawalCapacityGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
    request,
    metadata || {},
    this.methodDescriptorAssetWithdrawalCapacityGet);
  }

  methodDescriptorProcessingsGet = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/ProcessingsGet',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_wallet_pb.Wallet.Processing.Id,
    mlmbox_types_wallet_pb.Wallet.Processing,
    (request: mlmbox_types_wallet_pb.Wallet.Processing.Id) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Processing.deserializeBinary
  );

  processingsGet(
    request: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Processing>;

  processingsGet(
    request: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Processing) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Processing>;

  processingsGet(
    request: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Processing) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/ProcessingsGet',
        request,
        metadata || {},
        this.methodDescriptorProcessingsGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/ProcessingsGet',
    request,
    metadata || {},
    this.methodDescriptorProcessingsGet);
  }

  methodDescriptorProcessingsAll = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/ProcessingsAll',
    grpcWeb.MethodType.UNARY,
    google_protobuf_empty_pb.Empty,
    mlmbox_types_wallet_pb.Wallet.Processing.List,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Processing.List.deserializeBinary
  );

  processingsAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Processing.List>;

  processingsAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Processing.List) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Processing.List>;

  processingsAll(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Processing.List) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/ProcessingsAll',
        request,
        metadata || {},
        this.methodDescriptorProcessingsAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/ProcessingsAll',
    request,
    metadata || {},
    this.methodDescriptorProcessingsAll);
  }

  methodDescriptorTransfer = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/Transfer',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_finance_wallet_pb.TransferRequest,
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
    (request: mlmbox_client_finance_wallet_pb.TransferRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary
  );

  transfer(
    request: mlmbox_client_finance_wallet_pb.TransferRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset.Transaction>;

  transfer(
    request: mlmbox_client_finance_wallet_pb.TransferRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset.Transaction>;

  transfer(
    request: mlmbox_client_finance_wallet_pb.TransferRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/Transfer',
        request,
        metadata || {},
        this.methodDescriptorTransfer,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/Transfer',
    request,
    metadata || {},
    this.methodDescriptorTransfer);
  }

  methodDescriptorDepositAddress = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/DepositAddress',
    grpcWeb.MethodType.UNARY,
    mlmbox_types_wallet_pb.Wallet.Processing.Id,
    mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse,
    (request: mlmbox_types_wallet_pb.Wallet.Processing.Id) => {
      return request.serializeBinary();
    },
    mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse.deserializeBinary
  );

  depositAddress(
    request: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse>;

  depositAddress(
    request: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse) => void): grpcWeb.ClientReadableStream<mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse>;

  depositAddress(
    request: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/DepositAddress',
        request,
        metadata || {},
        this.methodDescriptorDepositAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/DepositAddress',
    request,
    metadata || {},
    this.methodDescriptorDepositAddress);
  }

  methodDescriptorValidateAddress = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/ValidateAddress',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest,
    mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse,
    (request: mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest) => {
      return request.serializeBinary();
    },
    mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse.deserializeBinary
  );

  validateAddress(
    request: mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse>;

  validateAddress(
    request: mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse) => void): grpcWeb.ClientReadableStream<mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse>;

  validateAddress(
    request: mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/ValidateAddress',
        request,
        metadata || {},
        this.methodDescriptorValidateAddress,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/ValidateAddress',
    request,
    metadata || {},
    this.methodDescriptorValidateAddress);
  }

  methodDescriptorWithdrawal = new grpcWeb.MethodDescriptor(
    '/mlmbox.client.finance.Wallet/Withdrawal',
    grpcWeb.MethodType.UNARY,
    mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest,
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
    (request: mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest) => {
      return request.serializeBinary();
    },
    mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary
  );

  withdrawal(
    request: mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest,
    metadata: grpcWeb.Metadata | null): Promise<mlmbox_types_wallet_pb.Wallet.Asset.Transaction>;

  withdrawal(
    request: mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction) => void): grpcWeb.ClientReadableStream<mlmbox_types_wallet_pb.Wallet.Asset.Transaction>;

  withdrawal(
    request: mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: mlmbox_types_wallet_pb.Wallet.Asset.Transaction) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/mlmbox.client.finance.Wallet/Withdrawal',
        request,
        metadata || {},
        this.methodDescriptorWithdrawal,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/mlmbox.client.finance.Wallet/Withdrawal',
    request,
    metadata || {},
    this.methodDescriptorWithdrawal);
  }

}

