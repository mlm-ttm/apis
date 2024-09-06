import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as mlmbox_types_account_pb from '../../../mlmbox/types/account_pb';
import * as mlmbox_types_locale_pb from '../../../mlmbox/types/locale_pb';


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

  getAva(): mlmbox_types_account_pb.Account.Profile.Ava | undefined;
  setAva(value?: mlmbox_types_account_pb.Account.Profile.Ava): SetProfileRequest;
  hasAva(): boolean;
  clearAva(): SetProfileRequest;

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
    ava?: mlmbox_types_account_pb.Account.Profile.Ava.AsObject,
  }
}

