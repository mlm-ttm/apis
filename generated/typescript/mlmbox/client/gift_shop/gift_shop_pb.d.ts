import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_gift_shop_pb from '../../../mlmbox/types/gift_shop_pb'; // proto import: "mlmbox/types/gift_shop.proto"


export class CreateRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateRequest;

  getDescription(): string;
  setDescription(value: string): CreateRequest;

  getPriceValue(): string;
  setPriceValue(value: string): CreateRequest;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): CreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    title: string,
    description: string,
    priceValue: string,
    image: Uint8Array | string,
  }
}

export class CardUpdateInfoRequest extends jspb.Message {
  getCardId(): number;
  setCardId(value: number): CardUpdateInfoRequest;

  getTitle(): string;
  setTitle(value: string): CardUpdateInfoRequest;

  getDescription(): string;
  setDescription(value: string): CardUpdateInfoRequest;

  getPriceValue(): string;
  setPriceValue(value: string): CardUpdateInfoRequest;

  getImage(): Uint8Array | string;
  getImage_asU8(): Uint8Array;
  getImage_asB64(): string;
  setImage(value: Uint8Array | string): CardUpdateInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CardUpdateInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CardUpdateInfoRequest): CardUpdateInfoRequest.AsObject;
  static serializeBinaryToWriter(message: CardUpdateInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CardUpdateInfoRequest;
  static deserializeBinaryFromReader(message: CardUpdateInfoRequest, reader: jspb.BinaryReader): CardUpdateInfoRequest;
}

export namespace CardUpdateInfoRequest {
  export type AsObject = {
    cardId: number,
    title: string,
    description: string,
    priceValue: string,
    image: Uint8Array | string,
  }
}

export class WithdrawalRequest extends jspb.Message {
  getCardId(): number;
  setCardId(value: number): WithdrawalRequest;

  getAddress(): string;
  setAddress(value: string): WithdrawalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawalRequest): WithdrawalRequest.AsObject;
  static serializeBinaryToWriter(message: WithdrawalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawalRequest;
  static deserializeBinaryFromReader(message: WithdrawalRequest, reader: jspb.BinaryReader): WithdrawalRequest;
}

export namespace WithdrawalRequest {
  export type AsObject = {
    cardId: number,
    address: string,
  }
}

export class ReviewRequest extends jspb.Message {
  getCardId(): number;
  setCardId(value: number): ReviewRequest;

  getVideoUrl(): string;
  setVideoUrl(value: string): ReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReviewRequest): ReviewRequest.AsObject;
  static serializeBinaryToWriter(message: ReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReviewRequest;
  static deserializeBinaryFromReader(message: ReviewRequest, reader: jspb.BinaryReader): ReviewRequest;
}

export namespace ReviewRequest {
  export type AsObject = {
    cardId: number,
    videoUrl: string,
  }
}

