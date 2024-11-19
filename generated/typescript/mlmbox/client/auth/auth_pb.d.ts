import * as jspb from 'google-protobuf'

import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_status_pb from '../../../mlmbox/types/status_pb'; // proto import: "mlmbox/types/status.proto"
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"


export class TelegramBotSignRequest extends jspb.Message {
  getChannelId(): number;
  setChannelId(value: number): TelegramBotSignRequest;

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
    channelId: number,
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

export class TokenGenerateResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): TokenGenerateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenGenerateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TokenGenerateResponse): TokenGenerateResponse.AsObject;
  static serializeBinaryToWriter(message: TokenGenerateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenGenerateResponse;
  static deserializeBinaryFromReader(message: TokenGenerateResponse, reader: jspb.BinaryReader): TokenGenerateResponse;
}

export namespace TokenGenerateResponse {
  export type AsObject = {
    accessToken: string,
  }
}

export class RemoteSignInEvent extends jspb.Message {
  getGuestAccessToken(): string;
  setGuestAccessToken(value: string): RemoteSignInEvent;

  getSecretCode(): RemoteSignInEvent.SecretCode | undefined;
  setSecretCode(value?: RemoteSignInEvent.SecretCode): RemoteSignInEvent;
  hasSecretCode(): boolean;
  clearSecretCode(): RemoteSignInEvent;

  getWaiting(): RemoteSignInEvent.Waiting | undefined;
  setWaiting(value?: RemoteSignInEvent.Waiting): RemoteSignInEvent;
  hasWaiting(): boolean;
  clearWaiting(): RemoteSignInEvent;

  getAccountAccessToken(): string;
  setAccountAccessToken(value: string): RemoteSignInEvent;

  getCanceled(): mlmbox_types_account_pb.Account.Info | undefined;
  setCanceled(value?: mlmbox_types_account_pb.Account.Info): RemoteSignInEvent;
  hasCanceled(): boolean;
  clearCanceled(): RemoteSignInEvent;

  getWaitingExpired(): mlmbox_types_account_pb.Account.Info | undefined;
  setWaitingExpired(value?: mlmbox_types_account_pb.Account.Info): RemoteSignInEvent;
  hasWaitingExpired(): boolean;
  clearWaitingExpired(): RemoteSignInEvent;

  getExpiredAt(): number;
  setExpiredAt(value: number): RemoteSignInEvent;

  getEventCase(): RemoteSignInEvent.EventCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteSignInEvent.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteSignInEvent): RemoteSignInEvent.AsObject;
  static serializeBinaryToWriter(message: RemoteSignInEvent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteSignInEvent;
  static deserializeBinaryFromReader(message: RemoteSignInEvent, reader: jspb.BinaryReader): RemoteSignInEvent;
}

export namespace RemoteSignInEvent {
  export type AsObject = {
    guestAccessToken: string,
    secretCode?: RemoteSignInEvent.SecretCode.AsObject,
    waiting?: RemoteSignInEvent.Waiting.AsObject,
    accountAccessToken: string,
    canceled?: mlmbox_types_account_pb.Account.Info.AsObject,
    waitingExpired?: mlmbox_types_account_pb.Account.Info.AsObject,
    expiredAt: number,
  }

  export class SecretCode extends jspb.Message {
    getValue(): string;
    setValue(value: string): SecretCode;

    getExpiredAt(): number;
    setExpiredAt(value: number): SecretCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecretCode.AsObject;
    static toObject(includeInstance: boolean, msg: SecretCode): SecretCode.AsObject;
    static serializeBinaryToWriter(message: SecretCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecretCode;
    static deserializeBinaryFromReader(message: SecretCode, reader: jspb.BinaryReader): SecretCode;
  }

  export namespace SecretCode {
    export type AsObject = {
      value: string,
      expiredAt: number,
    }
  }


  export class Waiting extends jspb.Message {
    getAccount(): mlmbox_types_account_pb.Account.Info | undefined;
    setAccount(value?: mlmbox_types_account_pb.Account.Info): Waiting;
    hasAccount(): boolean;
    clearAccount(): Waiting;

    getExpiredAt(): number;
    setExpiredAt(value: number): Waiting;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Waiting.AsObject;
    static toObject(includeInstance: boolean, msg: Waiting): Waiting.AsObject;
    static serializeBinaryToWriter(message: Waiting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Waiting;
    static deserializeBinaryFromReader(message: Waiting, reader: jspb.BinaryReader): Waiting;
  }

  export namespace Waiting {
    export type AsObject = {
      account?: mlmbox_types_account_pb.Account.Info.AsObject,
      expiredAt: number,
    }
  }


  export enum EventCase { 
    EVENT_NOT_SET = 0,
    GUEST_ACCESS_TOKEN = 1,
    SECRET_CODE = 2,
    WAITING = 3,
    ACCOUNT_ACCESS_TOKEN = 4,
    CANCELED = 5,
    WAITING_EXPIRED = 6,
    EXPIRED_AT = 7,
  }
}

