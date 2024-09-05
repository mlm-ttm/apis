// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var mlmbox_client_finance_wallet_pb = require('../../../mlmbox/client/finance/wallet_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js');
var mlmbox_types_asset_pb = require('../../../mlmbox/types/asset_pb.js');
var mlmbox_types_sort_pb = require('../../../mlmbox/types/sort_pb.js');
var mlmbox_types_wallet_pb = require('../../../mlmbox/types/wallet_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_TransferRequest(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.TransferRequest)) {
    throw new Error('Expected argument of type mlmbox.client.finance.TransferRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_TransferRequest(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.TransferRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_WalletAssetGetRequest(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.WalletAssetGetRequest)) {
    throw new Error('Expected argument of type mlmbox.client.finance.WalletAssetGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_WalletAssetGetRequest(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.WalletAssetGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_WalletAssetTransactionListRequest(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest)) {
    throw new Error('Expected argument of type mlmbox.client.finance.WalletAssetTransactionListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_WalletAssetTransactionListRequest(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_WalletDepositAddressResponse(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse)) {
    throw new Error('Expected argument of type mlmbox.client.finance.WalletDepositAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_WalletDepositAddressResponse(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_WalletValidateAddressRequest(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest)) {
    throw new Error('Expected argument of type mlmbox.client.finance.WalletValidateAddressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_WalletValidateAddressRequest(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_WalletValidateAddressResponse(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse)) {
    throw new Error('Expected argument of type mlmbox.client.finance.WalletValidateAddressResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_WalletValidateAddressResponse(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_finance_WalletWithdrawalRequest(arg) {
  if (!(arg instanceof mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest)) {
    throw new Error('Expected argument of type mlmbox.client.finance.WalletWithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_finance_WalletWithdrawalRequest(buffer_arg) {
  return mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Asset_Id(arg) {
  if (!(arg instanceof mlmbox_types_asset_pb.Asset.Id)) {
    throw new Error('Expected argument of type mlmbox.types.Asset.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Asset_Id(buffer_arg) {
  return mlmbox_types_asset_pb.Asset.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Asset(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Asset)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Asset');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Asset(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Asset.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Asset_List(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Asset.List)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Asset.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Asset_List(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Asset.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Asset_Transaction(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Asset.Transaction)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Asset.Transaction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Asset_Transaction(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Asset.Transaction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Asset_Transaction_Id(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Asset.Transaction.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Asset_Transaction_Id(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Asset_Transaction_List(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Asset.Transaction.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Asset_Transaction_List(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Asset_WithdrawalCapacity(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Asset.WithdrawalCapacity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Asset_WithdrawalCapacity(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Processing(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Processing)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Processing');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Processing(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Processing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Processing_Id(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Processing.Id)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Processing.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Processing_Id(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Processing.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Wallet_Processing_List(arg) {
  if (!(arg instanceof mlmbox_types_wallet_pb.Wallet.Processing.List)) {
    throw new Error('Expected argument of type mlmbox.types.Wallet.Processing.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Wallet_Processing_List(buffer_arg) {
  return mlmbox_types_wallet_pb.Wallet.Processing.List.deserializeBinary(new Uint8Array(buffer_arg));
}


var WalletService = exports.WalletService = {
  info: {
    path: '/mlmbox.client.finance.Wallet/Info',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_wallet_pb.Wallet,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Wallet,
    responseDeserialize: deserialize_mlmbox_types_Wallet,
  },
  assetGet: {
    path: '/mlmbox.client.finance.Wallet/AssetGet',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_finance_wallet_pb.WalletAssetGetRequest,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset,
    requestSerialize: serialize_mlmbox_client_finance_WalletAssetGetRequest,
    requestDeserialize: deserialize_mlmbox_client_finance_WalletAssetGetRequest,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset,
  },
  assetsAll: {
    path: '/mlmbox.client.finance.Wallet/AssetsAll',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset.List,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset_List,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset_List,
  },
  assetTransactionGet: {
    path: '/mlmbox.client.finance.Wallet/AssetTransactionGet',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.Id,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
    requestSerialize: serialize_mlmbox_types_Wallet_Asset_Transaction_Id,
    requestDeserialize: deserialize_mlmbox_types_Wallet_Asset_Transaction_Id,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset_Transaction,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset_Transaction,
  },
  assetTransactionList: {
    path: '/mlmbox.client.finance.Wallet/AssetTransactionList',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_finance_wallet_pb.WalletAssetTransactionListRequest,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.List,
    requestSerialize: serialize_mlmbox_client_finance_WalletAssetTransactionListRequest,
    requestDeserialize: deserialize_mlmbox_client_finance_WalletAssetTransactionListRequest,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset_Transaction_List,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset_Transaction_List,
  },
  assetWithdrawalCapacityGet: {
    path: '/mlmbox.client.finance.Wallet/AssetWithdrawalCapacityGet',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_asset_pb.Asset.Id,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset.WithdrawalCapacity,
    requestSerialize: serialize_mlmbox_types_Asset_Id,
    requestDeserialize: deserialize_mlmbox_types_Asset_Id,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset_WithdrawalCapacity,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset_WithdrawalCapacity,
  },
  processingsGet: {
    path: '/mlmbox.client.finance.Wallet/ProcessingsGet',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    responseType: mlmbox_types_wallet_pb.Wallet.Processing,
    requestSerialize: serialize_mlmbox_types_Wallet_Processing_Id,
    requestDeserialize: deserialize_mlmbox_types_Wallet_Processing_Id,
    responseSerialize: serialize_mlmbox_types_Wallet_Processing,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Processing,
  },
  processingsAll: {
    path: '/mlmbox.client.finance.Wallet/ProcessingsAll',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: mlmbox_types_wallet_pb.Wallet.Processing.List,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_mlmbox_types_Wallet_Processing_List,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Processing_List,
  },
  transfer: {
    path: '/mlmbox.client.finance.Wallet/Transfer',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_finance_wallet_pb.TransferRequest,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
    requestSerialize: serialize_mlmbox_client_finance_TransferRequest,
    requestDeserialize: deserialize_mlmbox_client_finance_TransferRequest,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset_Transaction,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset_Transaction,
  },
  depositAddress: {
    path: '/mlmbox.client.finance.Wallet/DepositAddress',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_wallet_pb.Wallet.Processing.Id,
    responseType: mlmbox_client_finance_wallet_pb.WalletDepositAddressResponse,
    requestSerialize: serialize_mlmbox_types_Wallet_Processing_Id,
    requestDeserialize: deserialize_mlmbox_types_Wallet_Processing_Id,
    responseSerialize: serialize_mlmbox_client_finance_WalletDepositAddressResponse,
    responseDeserialize: deserialize_mlmbox_client_finance_WalletDepositAddressResponse,
  },
  validateAddress: {
    path: '/mlmbox.client.finance.Wallet/ValidateAddress',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_finance_wallet_pb.WalletValidateAddressRequest,
    responseType: mlmbox_client_finance_wallet_pb.WalletValidateAddressResponse,
    requestSerialize: serialize_mlmbox_client_finance_WalletValidateAddressRequest,
    requestDeserialize: deserialize_mlmbox_client_finance_WalletValidateAddressRequest,
    responseSerialize: serialize_mlmbox_client_finance_WalletValidateAddressResponse,
    responseDeserialize: deserialize_mlmbox_client_finance_WalletValidateAddressResponse,
  },
  withdrawal: {
    path: '/mlmbox.client.finance.Wallet/Withdrawal',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_finance_wallet_pb.WalletWithdrawalRequest,
    responseType: mlmbox_types_wallet_pb.Wallet.Asset.Transaction,
    requestSerialize: serialize_mlmbox_client_finance_WalletWithdrawalRequest,
    requestDeserialize: deserialize_mlmbox_client_finance_WalletWithdrawalRequest,
    responseSerialize: serialize_mlmbox_types_Wallet_Asset_Transaction,
    responseDeserialize: deserialize_mlmbox_types_Wallet_Asset_Transaction,
  },
};

exports.WalletClient = grpc.makeGenericClientConstructor(WalletService);
