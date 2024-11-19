import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_locale_pb from '../../../mlmbox/types/locale_pb'; // proto import: "mlmbox/types/locale.proto"


export class SetLoginRequest extends jspb.Message {
  getLogin(): string;
  setLogin(value: string): SetLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetLoginRequest): SetLoginRequest.AsObject;
  static serializeBinaryToWriter(message: SetLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetLoginRequest;
  static deserializeBinaryFromReader(message: SetLoginRequest, reader: jspb.BinaryReader): SetLoginRequest;
}

export namespace SetLoginRequest {
  export type AsObject = {
    login: string,
  }
}

export class SetProfileRequest extends jspb.Message {
  getFirstName(): string;
  setFirstName(value: string): SetProfileRequest;

  getLastName(): string;
  setLastName(value: string): SetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetProfileRequest): SetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: SetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetProfileRequest;
  static deserializeBinaryFromReader(message: SetProfileRequest, reader: jspb.BinaryReader): SetProfileRequest;
}

export namespace SetProfileRequest {
  export type AsObject = {
    firstName: string,
    lastName: string,
  }
}

export class RemoteViewRequest extends jspb.Message {
  getSecretCode(): string;
  setSecretCode(value: string): RemoteViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteViewRequest): RemoteViewRequest.AsObject;
  static serializeBinaryToWriter(message: RemoteViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteViewRequest;
  static deserializeBinaryFromReader(message: RemoteViewRequest, reader: jspb.BinaryReader): RemoteViewRequest;
}

export namespace RemoteViewRequest {
  export type AsObject = {
    secretCode: string,
  }
}

export class RemoteVerifyRequest extends jspb.Message {
  getSecretCode(): string;
  setSecretCode(value: string): RemoteVerifyRequest;

  getVerified(): boolean;
  setVerified(value: boolean): RemoteVerifyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteVerifyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteVerifyRequest): RemoteVerifyRequest.AsObject;
  static serializeBinaryToWriter(message: RemoteVerifyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteVerifyRequest;
  static deserializeBinaryFromReader(message: RemoteVerifyRequest, reader: jspb.BinaryReader): RemoteVerifyRequest;
}

export namespace RemoteVerifyRequest {
  export type AsObject = {
    secretCode: string,
    verified: boolean,
  }
}

export class RemoteViewResponse extends jspb.Message {
  getUserAgent(): string;
  setUserAgent(value: string): RemoteViewResponse;

  getIpAddress(): string;
  setIpAddress(value: string): RemoteViewResponse;

  getExpiredAt(): number;
  setExpiredAt(value: number): RemoteViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteViewResponse): RemoteViewResponse.AsObject;
  static serializeBinaryToWriter(message: RemoteViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteViewResponse;
  static deserializeBinaryFromReader(message: RemoteViewResponse, reader: jspb.BinaryReader): RemoteViewResponse;
}

export namespace RemoteViewResponse {
  export type AsObject = {
    userAgent: string,
    ipAddress: string,
    expiredAt: number,
  }
}

export class RemoteVerifyResponse extends jspb.Message {
  getUserAgent(): string;
  setUserAgent(value: string): RemoteVerifyResponse;

  getIpAddress(): string;
  setIpAddress(value: string): RemoteVerifyResponse;

  getVerified(): boolean;
  setVerified(value: boolean): RemoteVerifyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteVerifyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteVerifyResponse): RemoteVerifyResponse.AsObject;
  static serializeBinaryToWriter(message: RemoteVerifyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteVerifyResponse;
  static deserializeBinaryFromReader(message: RemoteVerifyResponse, reader: jspb.BinaryReader): RemoteVerifyResponse;
}

export namespace RemoteVerifyResponse {
  export type AsObject = {
    userAgent: string,
    ipAddress: string,
    verified: boolean,
  }
}

