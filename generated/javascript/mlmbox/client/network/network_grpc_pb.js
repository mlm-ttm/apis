// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var mlmbox_client_network_network_pb = require('../../../mlmbox/client/network/network_pb.js');
var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js');
var mlmbox_types_sort_pb = require('../../../mlmbox/types/sort_pb.js');

function serialize_mlmbox_client_network_AccountsSearchRequest(arg) {
  if (!(arg instanceof mlmbox_client_network_network_pb.AccountsSearchRequest)) {
    throw new Error('Expected argument of type mlmbox.client.network.AccountsSearchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_network_AccountsSearchRequest(buffer_arg) {
  return mlmbox_client_network_network_pb.AccountsSearchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_network_TeamPartnerListRequest(arg) {
  if (!(arg instanceof mlmbox_client_network_network_pb.TeamPartnerListRequest)) {
    throw new Error('Expected argument of type mlmbox.client.network.TeamPartnerListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_network_TeamPartnerListRequest(buffer_arg) {
  return mlmbox_client_network_network_pb.TeamPartnerListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_network_TeamRequest(arg) {
  if (!(arg instanceof mlmbox_client_network_network_pb.TeamRequest)) {
    throw new Error('Expected argument of type mlmbox.client.network.TeamRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_network_TeamRequest(buffer_arg) {
  return mlmbox_client_network_network_pb.TeamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_client_network_TeamResponse(arg) {
  if (!(arg instanceof mlmbox_client_network_network_pb.TeamResponse)) {
    throw new Error('Expected argument of type mlmbox.client.network.TeamResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_client_network_TeamResponse(buffer_arg) {
  return mlmbox_client_network_network_pb.TeamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account_FullInfo_List(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account.FullInfo.List)) {
    throw new Error('Expected argument of type mlmbox.types.Account.FullInfo.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account_FullInfo_List(buffer_arg) {
  return mlmbox_types_account_pb.Account.FullInfo.List.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account_Id(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account.Id)) {
    throw new Error('Expected argument of type mlmbox.types.Account.Id');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account_Id(buffer_arg) {
  return mlmbox_types_account_pb.Account.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account_ShortInfo(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account.ShortInfo)) {
    throw new Error('Expected argument of type mlmbox.types.Account.ShortInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account_ShortInfo(buffer_arg) {
  return mlmbox_types_account_pb.Account.ShortInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mlmbox_types_Account_ShortInfo_List(arg) {
  if (!(arg instanceof mlmbox_types_account_pb.Account.ShortInfo.List)) {
    throw new Error('Expected argument of type mlmbox.types.Account.ShortInfo.List');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_mlmbox_types_Account_ShortInfo_List(buffer_arg) {
  return mlmbox_types_account_pb.Account.ShortInfo.List.deserializeBinary(new Uint8Array(buffer_arg));
}


var NetworkService = exports.NetworkService = {
  memberGet: {
    path: '/mlmbox.client.network.Network/MemberGet',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_types_account_pb.Account.Id,
    responseType: mlmbox_types_account_pb.Account.ShortInfo,
    requestSerialize: serialize_mlmbox_types_Account_Id,
    requestDeserialize: deserialize_mlmbox_types_Account_Id,
    responseSerialize: serialize_mlmbox_types_Account_ShortInfo,
    responseDeserialize: deserialize_mlmbox_types_Account_ShortInfo,
  },
  memberSearch: {
    path: '/mlmbox.client.network.Network/MemberSearch',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_network_network_pb.AccountsSearchRequest,
    responseType: mlmbox_types_account_pb.Account.ShortInfo.List,
    requestSerialize: serialize_mlmbox_client_network_AccountsSearchRequest,
    requestDeserialize: deserialize_mlmbox_client_network_AccountsSearchRequest,
    responseSerialize: serialize_mlmbox_types_Account_ShortInfo_List,
    responseDeserialize: deserialize_mlmbox_types_Account_ShortInfo_List,
  },
  teamInfo: {
    path: '/mlmbox.client.network.Network/TeamInfo',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_network_network_pb.TeamRequest,
    responseType: mlmbox_client_network_network_pb.TeamResponse,
    requestSerialize: serialize_mlmbox_client_network_TeamRequest,
    requestDeserialize: deserialize_mlmbox_client_network_TeamRequest,
    responseSerialize: serialize_mlmbox_client_network_TeamResponse,
    responseDeserialize: deserialize_mlmbox_client_network_TeamResponse,
  },
  teamSearch: {
    path: '/mlmbox.client.network.Network/TeamSearch',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_network_network_pb.AccountsSearchRequest,
    responseType: mlmbox_types_account_pb.Account.ShortInfo.List,
    requestSerialize: serialize_mlmbox_client_network_AccountsSearchRequest,
    requestDeserialize: deserialize_mlmbox_client_network_AccountsSearchRequest,
    responseSerialize: serialize_mlmbox_types_Account_ShortInfo_List,
    responseDeserialize: deserialize_mlmbox_types_Account_ShortInfo_List,
  },
  teamPartnerList: {
    path: '/mlmbox.client.network.Network/TeamPartnerList',
    requestStream: false,
    responseStream: false,
    requestType: mlmbox_client_network_network_pb.TeamPartnerListRequest,
    responseType: mlmbox_types_account_pb.Account.FullInfo.List,
    requestSerialize: serialize_mlmbox_client_network_TeamPartnerListRequest,
    requestDeserialize: deserialize_mlmbox_client_network_TeamPartnerListRequest,
    responseSerialize: serialize_mlmbox_types_Account_FullInfo_List,
    responseDeserialize: deserialize_mlmbox_types_Account_FullInfo_List,
  },
};

exports.NetworkClient = grpc.makeGenericClientConstructor(NetworkService);
