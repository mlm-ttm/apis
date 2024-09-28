import * as jspb from 'google-protobuf'



export class Pool extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Pool.AsObject;
  static toObject(includeInstance: boolean, msg: Pool): Pool.AsObject;
  static serializeBinaryToWriter(message: Pool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Pool;
  static deserializeBinaryFromReader(message: Pool, reader: jspb.BinaryReader): Pool;
}

export namespace Pool {
  export type AsObject = {
  }

  export class Hunter extends jspb.Message {
    getInfo(): Pool.Hunter.Info | undefined;
    setInfo(value?: Pool.Hunter.Info): Hunter;
    hasInfo(): boolean;
    clearInfo(): Hunter;

    getCardsList(): Array<Pool.Hunter.Card.Info>;
    setCardsList(value: Array<Pool.Hunter.Card.Info>): Hunter;
    clearCardsList(): Hunter;
    addCards(value?: Pool.Hunter.Card.Info, index?: number): Pool.Hunter.Card.Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Hunter.AsObject;
    static toObject(includeInstance: boolean, msg: Hunter): Hunter.AsObject;
    static serializeBinaryToWriter(message: Hunter, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Hunter;
    static deserializeBinaryFromReader(message: Hunter, reader: jspb.BinaryReader): Hunter;
  }

  export namespace Hunter {
    export type AsObject = {
      info?: Pool.Hunter.Info.AsObject,
      cardsList: Array<Pool.Hunter.Card.Info.AsObject>,
    }

    export class Info extends jspb.Message {
      getAssetId(): number;
      setAssetId(value: number): Info;

      getAccumulatedValue(): string;
      setAccumulatedValue(value: string): Info;

      getNextDistributionAt(): number;
      setNextDistributionAt(value: number): Info;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Info.AsObject;
      static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
      static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Info;
      static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
    }

    export namespace Info {
      export type AsObject = {
        assetId: number,
        accumulatedValue: string,
        nextDistributionAt: number,
      }
    }


    export class History extends jspb.Message {
      getDistributionId(): number;
      setDistributionId(value: number): History;

      getDistributionValue(): string;
      setDistributionValue(value: string): History;

      getQuantityCards(): number;
      setQuantityCards(value: number): History;

      getQuantityAccounts(): number;
      setQuantityAccounts(value: number): History;

      getCreatedAt(): number;
      setCreatedAt(value: number): History;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): History.AsObject;
      static toObject(includeInstance: boolean, msg: History): History.AsObject;
      static serializeBinaryToWriter(message: History, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): History;
      static deserializeBinaryFromReader(message: History, reader: jspb.BinaryReader): History;
    }

    export namespace History {
      export type AsObject = {
        distributionId: number,
        distributionValue: string,
        quantityCards: number,
        quantityAccounts: number,
        createdAt: number,
      }

      export class List extends jspb.Message {
        getItemsList(): Array<Pool.Hunter.History>;
        setItemsList(value: Array<Pool.Hunter.History>): List;
        clearItemsList(): List;
        addItems(value?: Pool.Hunter.History, index?: number): Pool.Hunter.History;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
      }

      export namespace List {
        export type AsObject = {
          itemsList: Array<Pool.Hunter.History.AsObject>,
        }
      }

    }


    export class Card extends jspb.Message {
      getInfo(): Pool.Hunter.Card.Info | undefined;
      setInfo(value?: Pool.Hunter.Card.Info): Card;
      hasInfo(): boolean;
      clearInfo(): Card;

      getTransactionsList(): Array<Pool.Hunter.Card.Transaction>;
      setTransactionsList(value: Array<Pool.Hunter.Card.Transaction>): Card;
      clearTransactionsList(): Card;
      addTransactions(value?: Pool.Hunter.Card.Transaction, index?: number): Pool.Hunter.Card.Transaction;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Card.AsObject;
      static toObject(includeInstance: boolean, msg: Card): Card.AsObject;
      static serializeBinaryToWriter(message: Card, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Card;
      static deserializeBinaryFromReader(message: Card, reader: jspb.BinaryReader): Card;
    }

    export namespace Card {
      export type AsObject = {
        info?: Pool.Hunter.Card.Info.AsObject,
        transactionsList: Array<Pool.Hunter.Card.Transaction.AsObject>,
      }

      export class Id extends jspb.Message {
        getCardId(): number;
        setCardId(value: number): Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Id.AsObject;
        static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
        static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Id;
        static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
      }

      export namespace Id {
        export type AsObject = {
          cardId: number,
        }
      }


      export class Info extends jspb.Message {
        getCardId(): number;
        setCardId(value: number): Info;

        getCreatedAt(): number;
        setCreatedAt(value: number): Info;

        getEnergyInit(): number;
        setEnergyInit(value: number): Info;

        getEnergyTotal(): number;
        setEnergyTotal(value: number): Info;

        getEnergyValue(): number;
        setEnergyValue(value: number): Info;

        getEarnedTotalValue(): string;
        setEarnedTotalValue(value: string): Info;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Info.AsObject;
        static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
        static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Info;
        static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
      }

      export namespace Info {
        export type AsObject = {
          cardId: number,
          createdAt: number,
          energyInit: number,
          energyTotal: number,
          energyValue: number,
          earnedTotalValue: string,
        }

        export class List extends jspb.Message {
          getItemsList(): Array<Pool.Hunter.Card.Info>;
          setItemsList(value: Array<Pool.Hunter.Card.Info>): List;
          clearItemsList(): List;
          addItems(value?: Pool.Hunter.Card.Info, index?: number): Pool.Hunter.Card.Info;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): List.AsObject;
          static toObject(includeInstance: boolean, msg: List): List.AsObject;
          static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): List;
          static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
        }

        export namespace List {
          export type AsObject = {
            itemsList: Array<Pool.Hunter.Card.Info.AsObject>,
          }
        }

      }


      export class Transaction extends jspb.Message {
        getDistributionId(): number;
        setDistributionId(value: number): Transaction;

        getDistributionValue(): string;
        setDistributionValue(value: string): Transaction;

        getEarnedValue(): string;
        setEarnedValue(value: string): Transaction;

        getCreatedAt(): number;
        setCreatedAt(value: number): Transaction;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Transaction.AsObject;
        static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
        static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Transaction;
        static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
      }

      export namespace Transaction {
        export type AsObject = {
          distributionId: number,
          distributionValue: string,
          earnedValue: string,
          createdAt: number,
        }

        export class List extends jspb.Message {
          getTransactionsList(): Array<Pool.Hunter.Card.Transaction>;
          setTransactionsList(value: Array<Pool.Hunter.Card.Transaction>): List;
          clearTransactionsList(): List;
          addTransactions(value?: Pool.Hunter.Card.Transaction, index?: number): Pool.Hunter.Card.Transaction;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): List.AsObject;
          static toObject(includeInstance: boolean, msg: List): List.AsObject;
          static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): List;
          static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
        }

        export namespace List {
          export type AsObject = {
            transactionsList: Array<Pool.Hunter.Card.Transaction.AsObject>,
          }
        }

      }

    }

  }

}

