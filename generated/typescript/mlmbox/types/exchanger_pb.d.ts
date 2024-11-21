import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_asset_pair_pb from '../../mlmbox/types/asset_pair_pb'; // proto import: "mlmbox/types/asset_pair.proto"


export class Exchanger extends jspb.Message {
  getSourceAssetId(): number;
  setSourceAssetId(value: number): Exchanger;

  getTargetAssetId(): number;
  setTargetAssetId(value: number): Exchanger;

  getFeeAssetId(): number;
  setFeeAssetId(value: number): Exchanger;

  getFeePercent(): string;
  setFeePercent(value: string): Exchanger;

  getRate(): string;
  setRate(value: string): Exchanger;

  getLimitSourceAmountMin(): string;
  setLimitSourceAmountMin(value: string): Exchanger;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Exchanger.AsObject;
  static toObject(includeInstance: boolean, msg: Exchanger): Exchanger.AsObject;
  static serializeBinaryToWriter(message: Exchanger, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Exchanger;
  static deserializeBinaryFromReader(message: Exchanger, reader: jspb.BinaryReader): Exchanger;
}

export namespace Exchanger {
  export type AsObject = {
    sourceAssetId: number,
    targetAssetId: number,
    feeAssetId: number,
    feePercent: string,
    rate: string,
    limitSourceAmountMin: string,
  }

  export class List extends jspb.Message {
    getItemsList(): Array<Exchanger>;
    setItemsList(value: Array<Exchanger>): List;
    clearItemsList(): List;
    addItems(value?: Exchanger, index?: number): Exchanger;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      itemsList: Array<Exchanger.AsObject>,
    }
  }


  export class Rate extends jspb.Message {
    getAssetPair(): mlmbox_types_asset_pair_pb.AssetPair | undefined;
    setAssetPair(value?: mlmbox_types_asset_pair_pb.AssetPair): Rate;
    hasAssetPair(): boolean;
    clearAssetPair(): Rate;

    getRateBuy(): string;
    setRateBuy(value: string): Rate;

    getRateSell(): string;
    setRateSell(value: string): Rate;

    getModifiedAt(): number;
    setModifiedAt(value: number): Rate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rate.AsObject;
    static toObject(includeInstance: boolean, msg: Rate): Rate.AsObject;
    static serializeBinaryToWriter(message: Rate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rate;
    static deserializeBinaryFromReader(message: Rate, reader: jspb.BinaryReader): Rate;
  }

  export namespace Rate {
    export type AsObject = {
      assetPair?: mlmbox_types_asset_pair_pb.AssetPair.AsObject,
      rateBuy: string,
      rateSell: string,
      modifiedAt: number,
    }

    export class List extends jspb.Message {
      getItemsList(): Array<Exchanger.Rate>;
      setItemsList(value: Array<Exchanger.Rate>): List;
      clearItemsList(): List;
      addItems(value?: Exchanger.Rate, index?: number): Exchanger.Rate;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Exchanger.Rate.AsObject>,
      }
    }

  }


  export class Id extends jspb.Message {
    getSourceAssetId(): number;
    setSourceAssetId(value: number): Id;

    getTargetAssetId(): number;
    setTargetAssetId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      sourceAssetId: number,
      targetAssetId: number,
    }
  }


  export class Request extends jspb.Message {
    getSourceAssetId(): number;
    setSourceAssetId(value: number): Request;

    getTargetAssetId(): number;
    setTargetAssetId(value: number): Request;

    getSourceAmount(): string;
    setSourceAmount(value: string): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
  }

  export namespace Request {
    export type AsObject = {
      sourceAssetId: number,
      targetAssetId: number,
      sourceAmount: string,
    }
  }


  export class Response extends jspb.Message {
    getSource(): mlmbox_types_asset_pb.Asset.Amount | undefined;
    setSource(value?: mlmbox_types_asset_pb.Asset.Amount): Response;
    hasSource(): boolean;
    clearSource(): Response;

    getTarget(): mlmbox_types_asset_pb.Asset.Amount | undefined;
    setTarget(value?: mlmbox_types_asset_pb.Asset.Amount): Response;
    hasTarget(): boolean;
    clearTarget(): Response;

    getFee(): mlmbox_types_asset_pb.Asset.Amount | undefined;
    setFee(value?: mlmbox_types_asset_pb.Asset.Amount): Response;
    hasFee(): boolean;
    clearFee(): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
  }

  export namespace Response {
    export type AsObject = {
      source?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
      target?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
      fee?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
    }
  }

}

