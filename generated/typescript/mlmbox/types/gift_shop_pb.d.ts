import * as jspb from 'google-protobuf'

import * as mlmbox_types_wallet_pb from '../../mlmbox/types/wallet_pb'; // proto import: "mlmbox/types/wallet.proto"


export class GiftShop extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GiftShop.AsObject;
  static toObject(includeInstance: boolean, msg: GiftShop): GiftShop.AsObject;
  static serializeBinaryToWriter(message: GiftShop, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GiftShop;
  static deserializeBinaryFromReader(message: GiftShop, reader: jspb.BinaryReader): GiftShop;
}

export namespace GiftShop {
  export type AsObject = {
  }

  export class Card extends jspb.Message {
    getId(): number;
    setId(value: number): Card;

    getTitle(): string;
    setTitle(value: string): Card;

    getDescription(): string;
    setDescription(value: string): Card;

    getImageSrc(): string;
    setImageSrc(value: string): Card;

    getUsdtPrice(): string;
    setUsdtPrice(value: string): Card;

    getUsdtFee(): string;
    setUsdtFee(value: string): Card;

    getPointsNeeded(): string;
    setPointsNeeded(value: string): Card;

    getReleased(): boolean;
    setReleased(value: boolean): Card;

    getCreatedAt(): number;
    setCreatedAt(value: number): Card;

    getReleasedAt(): number;
    setReleasedAt(value: number): Card;

    getTransaction(): mlmbox_types_wallet_pb.Wallet.Asset.Transaction | undefined;
    setTransaction(value?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction): Card;
    hasTransaction(): boolean;
    clearTransaction(): Card;

    getReviewVideoUrl(): string;
    setReviewVideoUrl(value: string): Card;

    getReviewCreatedAt(): number;
    setReviewCreatedAt(value: number): Card;

    getReviewApproved(): boolean;
    setReviewApproved(value: boolean): Card;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Card.AsObject;
    static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
    static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Card;
    static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
  }

  export namespace Card {
    export type AsObject = {
      id: number,
      title: string,
      description: string,
      imageSrc: string,
      usdtPrice: string,
      usdtFee: string,
      pointsNeeded: string,
      released: boolean,
      createdAt: number,
      releasedAt: number,
      transaction?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.AsObject,
      reviewVideoUrl: string,
      reviewCreatedAt: number,
      reviewApproved: boolean,
    }

    export class Id extends jspb.Message {
      getId(): number;
      setId(value: number): Id;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Id.AsObject;
      static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
      static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Id;
      static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
    }

    export namespace Id {
      export type AsObject = {
        id: number,
      }
    }

  }


  export class Info extends jspb.Message {
    getPointsBalanceFrozen(): string;
    setPointsBalanceFrozen(value: string): Info;

    getPointsBalanceAvailable(): string;
    setPointsBalanceAvailable(value: string): Info;

    getNeedReviewCardIdsList(): Array<number>;
    setNeedReviewCardIdsList(value: Array<number>): Info;
    clearNeedReviewCardIdsList(): Info;
    addNeedReviewCardIds(value: number, index?: number): Info;

    getCard(): GiftShop.Card | undefined;
    setCard(value?: GiftShop.Card): Info;
    hasCard(): boolean;
    clearCard(): Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      pointsBalanceFrozen: string,
      pointsBalanceAvailable: string,
      needReviewCardIdsList: Array<number>,
      card?: GiftShop.Card.AsObject,
    }
  }


  export class State extends jspb.Message {
    getPointsBalanceFrozen(): string;
    setPointsBalanceFrozen(value: string): State;

    getPointsBalanceAvailable(): string;
    setPointsBalanceAvailable(value: string): State;

    getSettingsCardUsdtPriceMin(): string;
    setSettingsCardUsdtPriceMin(value: string): State;

    getNeedReviewCardIdsList(): Array<number>;
    setNeedReviewCardIdsList(value: Array<number>): State;
    clearNeedReviewCardIdsList(): State;
    addNeedReviewCardIds(value: number, index?: number): State;

    getCardsList(): Array<GiftShop.Card>;
    setCardsList(value: Array<GiftShop.Card>): State;
    clearCardsList(): State;
    addCards(value?: GiftShop.Card, index?: number): GiftShop.Card;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
  }

  export namespace State {
    export type AsObject = {
      pointsBalanceFrozen: string,
      pointsBalanceAvailable: string,
      settingsCardUsdtPriceMin: string,
      needReviewCardIdsList: Array<number>,
      cardsList: Array<GiftShop.Card.AsObject>,
    }
  }

}

