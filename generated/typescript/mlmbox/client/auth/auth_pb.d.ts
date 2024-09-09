import * as jspb from 'google-protobuf'

import * as mlmbox_types_status_pb from '../../../mlmbox/types/status_pb'; // proto import: "mlmbox/types/status.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class TelegramBotSignRequest extends jspb.Message {
  getAuthChanelId(): number;
  setAuthChanelId(value: number): TelegramBotSignRequest;

  getInitData(): string;
  setInitData(value: string): TelegramBotSignRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TelegramBotSignRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TelegramBotSignRequest): TelegramBotSignRequest.AsObject;
  static serializeBinaryToWriter(message: TelegramBotSignRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TelegramBotSignRequest;
  static deserializeBinaryFromReader(message: TelegramBotSignRequest, reader: jspb.BinaryReader): TelegramBotSignRequest;
}

export namespace TelegramBotSignRequest {
  export type AsObject = {
    authChanelId: number,
    initData: string,
  }
}

export class AuthSignResponse extends jspb.Message {
  getAuthStatus(): mlmbox_types_status_pb.Status.Auth;
  setAuthStatus(value: mlmbox_types_status_pb.Status.Auth): AuthSignResponse;

  getReferralStatus(): mlmbox_types_status_pb.Status.Referral;
  setReferralStatus(value: mlmbox_types_status_pb.Status.Referral): AuthSignResponse;

  getAccessToken(): string;
  setAccessToken(value: string): AuthSignResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthSignResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthSignResponse): AuthSignResponse.AsObject;
  static serializeBinaryToWriter(message: AuthSignResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthSignResponse;
  static deserializeBinaryFromReader(message: AuthSignResponse, reader: jspb.BinaryReader): AuthSignResponse;
}

export namespace AuthSignResponse {
  export type AsObject = {
    authStatus: mlmbox_types_status_pb.Status.Auth,
    referralStatus: mlmbox_types_status_pb.Status.Referral,
    accessToken: string,
  }
}

export class TokenValidateResponse extends jspb.Message {
  getStatus(): mlmbox_types_status_pb.Status.TokenValidate;
  setStatus(value: mlmbox_types_status_pb.Status.TokenValidate): TokenValidateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenValidateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenValidateResponse): TokenValidateResponse.AsObject;
  static serializeBinaryToWriter(message: TokenValidateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenValidateResponse;
  static deserializeBinaryFromReader(message: TokenValidateResponse, reader: jspb.BinaryReader): TokenValidateResponse;
}

export namespace TokenValidateResponse {
  export type AsObject = {
    status: mlmbox_types_status_pb.Status.TokenValidate,
  }
}

