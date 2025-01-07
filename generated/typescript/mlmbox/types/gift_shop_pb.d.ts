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

    getPhotoUrl(): string;
    setPhotoUrl(value: string): Card;

    getTitle(): string;
    setTitle(value: string): Card;

    getDescription(): string;
    setDescription(value: string): Card;

    getPriceValue(): string;
    setPriceValue(value: string): Card;

    getPointsNeeded(): string;
    setPointsNeeded(value: string): Card;

    getReleased(): boolean;
    setReleased(value: boolean): Card;

    getCreatedAt(): number;
    setCreatedAt(value: number): Card;

    getTransaction(): mlmbox_types_wallet_pb.Wallet.Asset.Transaction | undefined;
    setTransaction(value?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction): Card;
    hasTransaction(): boolean;
    clearTransaction(): Card;

    getReview(): GiftShop.Card.Review | undefined;
    setReview(value?: GiftShop.Card.Review): Card;
    hasReview(): boolean;
    clearReview(): Card;

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
      photoUrl: string,
      title: string,
      description: string,
      priceValue: string,
      pointsNeeded: string,
      released: boolean,
      createdAt: number,
      transaction?: mlmbox_types_wallet_pb.Wallet.Asset.Transaction.AsObject,
      review?: GiftShop.Card.Review.AsObject,
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


    export class Review extends jspb.Message {
      getVideoUrl(): string;
      setVideoUrl(value: string): Review;

      getCreatedAt(): number;
      setCreatedAt(value: number): Review;

      getApproved(): boolean;
      setApproved(value: boolean): Review;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Review.AsObject;
      static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
      static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Review;
      static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
    }

    export namespace Review {
      export type AsObject = {
        videoUrl: string,
        createdAt: number,
        approved: boolean,
      }
    }

  }


  export class Info extends jspb.Message {
    getPointsBalanceFrozen(): string;
    setPointsBalanceFrozen(value: string): Info;

    getPointsBalanceAvailable(): string;
    setPointsBalanceAvailable(value: string): Info;

    getNeedReviewId(): number;
    setNeedReviewId(value: number): Info;

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
      needReviewId: number,
      card?: GiftShop.Card.AsObject,
    }
  }


  export class State extends jspb.Message {
    getPointsBalanceFrozen(): string;
    setPointsBalanceFrozen(value: string): State;

    getPointsBalanceAvailable(): string;
    setPointsBalanceAvailable(value: string): State;

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
      needReviewCardIdsList: Array<number>,
      cardsList: Array<GiftShop.Card.AsObject>,
    }
  }

}

