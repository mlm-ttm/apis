import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_account_pb from '../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_bonus_pb from '../../mlmbox/types/bonus_pb'; // proto import: "mlmbox/types/bonus.proto"
import * as mlmbox_types_status_pb from '../../mlmbox/types/status_pb'; // proto import: "mlmbox/types/status.proto"


export class Wallet extends jspb.Message {
  getAssetsList(): Array<Wallet.Asset>;
  setAssetsList(value: Array<Wallet.Asset>): Wallet;
  clearAssetsList(): Wallet;
  addAssets(value?: Wallet.Asset, index?: number): Wallet.Asset;

  getProcessingsList(): Array<Wallet.Processing>;
  setProcessingsList(value: Array<Wallet.Processing>): Wallet;
  clearProcessingsList(): Wallet;
  addProcessings(value?: Wallet.Processing, index?: number): Wallet.Processing;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wallet.AsObject;
  static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
  static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wallet;
  static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
  export type AsObject = {
    assetsList: Array<Wallet.Asset.AsObject>,
    processingsList: Array<Wallet.Processing.AsObject>,
  }

  export class Asset extends jspb.Message {
    getAssetId(): number;
    setAssetId(value: number): Asset;

    getAssetBalance(): string;
    setAssetBalance(value: string): Asset;

    getTransactionsList(): Array<Wallet.Asset.Transaction>;
    setTransactionsList(value: Array<Wallet.Asset.Transaction>): Asset;
    clearTransactionsList(): Asset;
    addTransactions(value?: Wallet.Asset.Transaction, index?: number): Wallet.Asset.Transaction;

    getIncomeBonusesStatistics(): mlmbox_types_bonus_pb.Bonus.Summary | undefined;
    setIncomeBonusesStatistics(value?: mlmbox_types_bonus_pb.Bonus.Summary): Asset;
    hasIncomeBonusesStatistics(): boolean;
    clearIncomeBonusesStatistics(): Asset;

    getWithdrawalCapacity(): Wallet.Asset.WithdrawalCapacity | undefined;
    setWithdrawalCapacity(value?: Wallet.Asset.WithdrawalCapacity): Asset;
    hasWithdrawalCapacity(): boolean;
    clearWithdrawalCapacity(): Asset;

    getSettingsTransferEnabled(): boolean;
    setSettingsTransferEnabled(value: boolean): Asset;

    getSettingsTransferLimitMin(): string;
    setSettingsTransferLimitMin(value: string): Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Asset.AsObject;
    static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
    static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Asset;
    static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
  }

  export namespace Asset {
    export type AsObject = {
      assetId: number,
      assetBalance: string,
      transactionsList: Array<Wallet.Asset.Transaction.AsObject>,
      incomeBonusesStatistics?: mlmbox_types_bonus_pb.Bonus.Summary.AsObject,
      withdrawalCapacity?: Wallet.Asset.WithdrawalCapacity.AsObject,
      settingsTransferEnabled: boolean,
      settingsTransferLimitMin: string,
    }

    export class Transaction extends jspb.Message {
      getTransactionId(): number;
      setTransactionId(value: number): Transaction;

      getKindId(): Wallet.Asset.Transaction.Kind.Id;
      setKindId(value: Wallet.Asset.Transaction.Kind.Id): Transaction;

      getStatusId(): mlmbox_types_status_pb.Status.Transaction;
      setStatusId(value: mlmbox_types_status_pb.Status.Transaction): Transaction;

      getAmount(): string;
      setAmount(value: string): Transaction;

      getFee(): string;
      setFee(value: string): Transaction;

      getBalance(): string;
      setBalance(value: string): Transaction;

      getCreatedAt(): number;
      setCreatedAt(value: number): Transaction;

      getMetadata(): Wallet.Asset.Transaction.Metadata | undefined;
      setMetadata(value?: Wallet.Asset.Transaction.Metadata): Transaction;
      hasMetadata(): boolean;
      clearMetadata(): Transaction;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Transaction.AsObject;
      static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
      static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Transaction;
      static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
    }

    export namespace Transaction {
      export type AsObject = {
        transactionId: number,
        kindId: Wallet.Asset.Transaction.Kind.Id,
        statusId: mlmbox_types_status_pb.Status.Transaction,
        amount: string,
        fee: string,
        balance: string,
        createdAt: number,
        metadata?: Wallet.Asset.Transaction.Metadata.AsObject,
      }

      export class Id extends jspb.Message {
        getAssetId(): number;
        setAssetId(value: number): Id;

        getTransactionId(): number;
        setTransactionId(value: number): Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Id.AsObject;
        static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
        static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Id;
        static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
      }

      export namespace Id {
        export type AsObject = {
          assetId: number,
          transactionId: number,
        }
      }


      export class Kind extends jspb.Message {
        getKindId(): Wallet.Asset.Transaction.Kind.Id;
        setKindId(value: Wallet.Asset.Transaction.Kind.Id): Kind;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Kind.AsObject;
        static toObject(includeInstance: boolean, msg: Kind): Kind.AsObject;
        static serializeBinaryToWriter(message: Kind, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Kind;
        static deserializeBinaryFromReader(message: Kind, reader: jspb.BinaryReader): Kind;
      }

      export namespace Kind {
        export type AsObject = {
          kindId: Wallet.Asset.Transaction.Kind.Id,
        }

        export enum Id { 
          UNKNOWN = 0,
          CANCELED = 1,
          EARNED = 2,
          SPENT = 3,
          DEPOSIT = 4,
          WITHDRAWAL = 5,
          DEPOSIT_WALLET_TRANSFER = 6,
          WITHDRAWAL_WALLET_TRANSFER = 7,
          EXCHANGE = 8,
          WITHDRAWAL_FEE = 9,
          BURNED = 10,
          HOLD = 11,
          UNHOLD = 12,
        }
      }


      export class List extends jspb.Message {
        getItemsList(): Array<Wallet.Asset.Transaction>;
        setItemsList(value: Array<Wallet.Asset.Transaction>): List;
        clearItemsList(): List;
        addItems(value?: Wallet.Asset.Transaction, index?: number): Wallet.Asset.Transaction;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
      }

      export namespace List {
        export type AsObject = {
          itemsList: Array<Wallet.Asset.Transaction.AsObject>,
        }
      }


      export class Metadata extends jspb.Message {
        getDescription(): string;
        setDescription(value: string): Metadata;

        getWithdrawal(): Wallet.Asset.Transaction.Metadata.Withdrawal | undefined;
        setWithdrawal(value?: Wallet.Asset.Transaction.Metadata.Withdrawal): Metadata;
        hasWithdrawal(): boolean;
        clearWithdrawal(): Metadata;

        getKeeperInitialTreeId(): number;
        setKeeperInitialTreeId(value: number): Metadata;

        getKeeperReinvest(): Wallet.Asset.Transaction.Metadata.PositionHeader | undefined;
        setKeeperReinvest(value?: Wallet.Asset.Transaction.Metadata.PositionHeader): Metadata;
        hasKeeperReinvest(): boolean;
        clearKeeperReinvest(): Metadata;

        getBonus(): Wallet.Asset.Transaction.Metadata.Bonus | undefined;
        setBonus(value?: Wallet.Asset.Transaction.Metadata.Bonus): Metadata;
        hasBonus(): boolean;
        clearBonus(): Metadata;

        getAccountId(): number;
        setAccountId(value: number): Metadata;

        getPositionCreated(): Wallet.Asset.Transaction.Metadata.PositionHeader | undefined;
        setPositionCreated(value?: Wallet.Asset.Transaction.Metadata.PositionHeader): Metadata;
        hasPositionCreated(): boolean;
        clearPositionCreated(): Metadata;

        getAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
        setAmount(value?: mlmbox_types_asset_pb.Asset.Amount): Metadata;
        hasAmount(): boolean;
        clearAmount(): Metadata;

        getKeeperBookingTreeId(): number;
        setKeeperBookingTreeId(value: number): Metadata;

        getDeposit(): Wallet.Asset.Transaction.Metadata.Deposit | undefined;
        setDeposit(value?: Wallet.Asset.Transaction.Metadata.Deposit): Metadata;
        hasDeposit(): boolean;
        clearDeposit(): Metadata;

        getAccount(): mlmbox_types_account_pb.Account.Info | undefined;
        setAccount(value?: mlmbox_types_account_pb.Account.Info): Metadata;
        hasAccount(): boolean;
        clearAccount(): Metadata;

        getTransactionId(): number;
        setTransactionId(value: number): Metadata;

        getUniqueFieldCase(): Metadata.UniqueFieldCase;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Metadata.AsObject;
        static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
        static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Metadata;
        static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
      }

      export namespace Metadata {
        export type AsObject = {
          description: string,
          withdrawal?: Wallet.Asset.Transaction.Metadata.Withdrawal.AsObject,
          keeperInitialTreeId: number,
          keeperReinvest?: Wallet.Asset.Transaction.Metadata.PositionHeader.AsObject,
          bonus?: Wallet.Asset.Transaction.Metadata.Bonus.AsObject,
          accountId: number,
          positionCreated?: Wallet.Asset.Transaction.Metadata.PositionHeader.AsObject,
          amount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
          keeperBookingTreeId: number,
          deposit?: Wallet.Asset.Transaction.Metadata.Deposit.AsObject,
          account?: mlmbox_types_account_pb.Account.Info.AsObject,
          transactionId: number,
        }

        export class Deposit extends jspb.Message {
          getProcessingId(): number;
          setProcessingId(value: number): Deposit;

          getHash(): string;
          setHash(value: string): Deposit;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Deposit.AsObject;
          static toObject(includeInstance: boolean, msg: Deposit): Deposit.AsObject;
          static serializeBinaryToWriter(message: Deposit, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Deposit;
          static deserializeBinaryFromReader(message: Deposit, reader: jspb.BinaryReader): Deposit;
        }

        export namespace Deposit {
          export type AsObject = {
            processingId: number,
            hash: string,
          }
        }


        export class Withdrawal extends jspb.Message {
          getProcessingId(): number;
          setProcessingId(value: number): Withdrawal;

          getAddress(): string;
          setAddress(value: string): Withdrawal;

          getUsedVerifiedCode(): boolean;
          setUsedVerifiedCode(value: boolean): Withdrawal;

          getHash(): string;
          setHash(value: string): Withdrawal;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Withdrawal.AsObject;
          static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
          static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Withdrawal;
          static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
        }

        export namespace Withdrawal {
          export type AsObject = {
            processingId: number,
            address: string,
            usedVerifiedCode: boolean,
            hash: string,
          }
        }


        export class PositionHeader extends jspb.Message {
          getTreeId(): number;
          setTreeId(value: number): PositionHeader;

          getTreeAccountEntityId(): number;
          setTreeAccountEntityId(value: number): PositionHeader;

          getPositionId(): number;
          setPositionId(value: number): PositionHeader;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): PositionHeader.AsObject;
          static toObject(includeInstance: boolean, msg: PositionHeader): PositionHeader.AsObject;
          static serializeBinaryToWriter(message: PositionHeader, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): PositionHeader;
          static deserializeBinaryFromReader(message: PositionHeader, reader: jspb.BinaryReader): PositionHeader;
        }

        export namespace PositionHeader {
          export type AsObject = {
            treeId: number,
            treeAccountEntityId: number,
            positionId: number,
          }
        }


        export class Bonus extends jspb.Message {
          getBonusId(): mlmbox_types_bonus_pb.Bonus.Kind.Id;
          setBonusId(value: mlmbox_types_bonus_pb.Bonus.Kind.Id): Bonus;

          getMatrix(): Wallet.Asset.Transaction.Metadata.Bonus.SourceMatrix | undefined;
          setMatrix(value?: Wallet.Asset.Transaction.Metadata.Bonus.SourceMatrix): Bonus;
          hasMatrix(): boolean;
          clearMatrix(): Bonus;

          getCardPartnerDao(): Wallet.Asset.Transaction.Metadata.Bonus.CardPool | undefined;
          setCardPartnerDao(value?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool): Bonus;
          hasCardPartnerDao(): boolean;
          clearCardPartnerDao(): Bonus;

          getCardBonusHunter(): Wallet.Asset.Transaction.Metadata.Bonus.CardPool | undefined;
          setCardBonusHunter(value?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool): Bonus;
          hasCardBonusHunter(): boolean;
          clearCardBonusHunter(): Bonus;

          getDescription(): string;
          setDescription(value: string): Bonus;

          getBinary(): Wallet.Asset.Transaction.Metadata.Bonus.SourceBinary | undefined;
          setBinary(value?: Wallet.Asset.Transaction.Metadata.Bonus.SourceBinary): Bonus;
          hasBinary(): boolean;
          clearBinary(): Bonus;

          getBinaryMatching(): Wallet.Asset.Transaction.Metadata.Bonus.SourceBinaryMatching | undefined;
          setBinaryMatching(value?: Wallet.Asset.Transaction.Metadata.Bonus.SourceBinaryMatching): Bonus;
          hasBinaryMatching(): boolean;
          clearBinaryMatching(): Bonus;

          getSourceCase(): Bonus.SourceCase;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Bonus.AsObject;
          static toObject(includeInstance: boolean, msg: Bonus): Bonus.AsObject;
          static serializeBinaryToWriter(message: Bonus, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Bonus;
          static deserializeBinaryFromReader(message: Bonus, reader: jspb.BinaryReader): Bonus;
        }

        export namespace Bonus {
          export type AsObject = {
            bonusId: mlmbox_types_bonus_pb.Bonus.Kind.Id,
            matrix?: Wallet.Asset.Transaction.Metadata.Bonus.SourceMatrix.AsObject,
            cardPartnerDao?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool.AsObject,
            cardBonusHunter?: Wallet.Asset.Transaction.Metadata.Bonus.CardPool.AsObject,
            description: string,
            binary?: Wallet.Asset.Transaction.Metadata.Bonus.SourceBinary.AsObject,
            binaryMatching?: Wallet.Asset.Transaction.Metadata.Bonus.SourceBinaryMatching.AsObject,
          }

          export class SourceMatrix extends jspb.Message {
            getTarget(): Wallet.Asset.Transaction.Metadata.PositionHeader | undefined;
            setTarget(value?: Wallet.Asset.Transaction.Metadata.PositionHeader): SourceMatrix;
            hasTarget(): boolean;
            clearTarget(): SourceMatrix;

            getSource(): Wallet.Asset.Transaction.Metadata.PositionHeader | undefined;
            setSource(value?: Wallet.Asset.Transaction.Metadata.PositionHeader): SourceMatrix;
            hasSource(): boolean;
            clearSource(): SourceMatrix;

            getLevel(): number;
            setLevel(value: number): SourceMatrix;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SourceMatrix.AsObject;
            static toObject(includeInstance: boolean, msg: SourceMatrix): SourceMatrix.AsObject;
            static serializeBinaryToWriter(message: SourceMatrix, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SourceMatrix;
            static deserializeBinaryFromReader(message: SourceMatrix, reader: jspb.BinaryReader): SourceMatrix;
          }

          export namespace SourceMatrix {
            export type AsObject = {
              target?: Wallet.Asset.Transaction.Metadata.PositionHeader.AsObject,
              source?: Wallet.Asset.Transaction.Metadata.PositionHeader.AsObject,
              level: number,
            }
          }


          export class SourceBinary extends jspb.Message {
            getTreeId(): number;
            setTreeId(value: number): SourceBinary;

            getPositionId(): number;
            setPositionId(value: number): SourceBinary;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SourceBinary.AsObject;
            static toObject(includeInstance: boolean, msg: SourceBinary): SourceBinary.AsObject;
            static serializeBinaryToWriter(message: SourceBinary, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SourceBinary;
            static deserializeBinaryFromReader(message: SourceBinary, reader: jspb.BinaryReader): SourceBinary;
          }

          export namespace SourceBinary {
            export type AsObject = {
              treeId: number,
              positionId: number,
            }
          }


          export class SourceBinaryMatching extends jspb.Message {
            getTreeId(): number;
            setTreeId(value: number): SourceBinaryMatching;

            getSourceAccountId(): number;
            setSourceAccountId(value: number): SourceBinaryMatching;

            getSourcePositionId(): number;
            setSourcePositionId(value: number): SourceBinaryMatching;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): SourceBinaryMatching.AsObject;
            static toObject(includeInstance: boolean, msg: SourceBinaryMatching): SourceBinaryMatching.AsObject;
            static serializeBinaryToWriter(message: SourceBinaryMatching, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): SourceBinaryMatching;
            static deserializeBinaryFromReader(message: SourceBinaryMatching, reader: jspb.BinaryReader): SourceBinaryMatching;
          }

          export namespace SourceBinaryMatching {
            export type AsObject = {
              treeId: number,
              sourceAccountId: number,
              sourcePositionId: number,
            }
          }


          export class CardPool extends jspb.Message {
            getCardId(): number;
            setCardId(value: number): CardPool;

            getPoolPartId(): number;
            setPoolPartId(value: number): CardPool;

            serializeBinary(): Uint8Array;
            toObject(includeInstance?: boolean): CardPool.AsObject;
            static toObject(includeInstance: boolean, msg: CardPool): CardPool.AsObject;
            static serializeBinaryToWriter(message: CardPool, writer: jspb.BinaryWriter): void;
            static deserializeBinary(bytes: Uint8Array): CardPool;
            static deserializeBinaryFromReader(message: CardPool, reader: jspb.BinaryReader): CardPool;
          }

          export namespace CardPool {
            export type AsObject = {
              cardId: number,
              poolPartId: number,
            }
          }


          export enum SourceCase { 
            SOURCE_NOT_SET = 0,
            MATRIX = 2,
            CARD_PARTNER_DAO = 3,
            CARD_BONUS_HUNTER = 4,
            DESCRIPTION = 5,
            BINARY = 6,
            BINARY_MATCHING = 7,
          }
        }


        export enum UniqueFieldCase { 
          UNIQUE_FIELD_NOT_SET = 0,
          DESCRIPTION = 1,
          WITHDRAWAL = 2,
          KEEPER_INITIAL_TREE_ID = 3,
          KEEPER_REINVEST = 4,
          BONUS = 5,
          ACCOUNT_ID = 6,
          POSITION_CREATED = 7,
          AMOUNT = 8,
          KEEPER_BOOKING_TREE_ID = 9,
          DEPOSIT = 10,
          ACCOUNT = 11,
          TRANSACTION_ID = 12,
        }
      }

    }


    export class WithdrawalCapacity extends jspb.Message {
      getUsed(): string;
      setUsed(value: string): WithdrawalCapacity;

      getCapacity(): string;
      setCapacity(value: string): WithdrawalCapacity;

      getAvailable(): string;
      setAvailable(value: string): WithdrawalCapacity;

      getEnabled(): boolean;
      setEnabled(value: boolean): WithdrawalCapacity;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): WithdrawalCapacity.AsObject;
      static toObject(includeInstance: boolean, msg: WithdrawalCapacity): WithdrawalCapacity.AsObject;
      static serializeBinaryToWriter(message: WithdrawalCapacity, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): WithdrawalCapacity;
      static deserializeBinaryFromReader(message: WithdrawalCapacity, reader: jspb.BinaryReader): WithdrawalCapacity;
    }

    export namespace WithdrawalCapacity {
      export type AsObject = {
        used: string,
        capacity: string,
        available: string,
        enabled: boolean,
      }
    }


    export class List extends jspb.Message {
      getItemsList(): Array<Wallet.Asset>;
      setItemsList(value: Array<Wallet.Asset>): List;
      clearItemsList(): List;
      addItems(value?: Wallet.Asset, index?: number): Wallet.Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Wallet.Asset.AsObject>,
      }
    }

  }


  export class Processing extends jspb.Message {
    getProcessingId(): number;
    setProcessingId(value: number): Processing;

    getProcessingName(): string;
    setProcessingName(value: string): Processing;

    getAssetsList(): Array<Wallet.Processing.Asset>;
    setAssetsList(value: Array<Wallet.Processing.Asset>): Processing;
    clearAssetsList(): Processing;
    addAssets(value?: Wallet.Processing.Asset, index?: number): Wallet.Processing.Asset;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Processing.AsObject;
    static toObject(includeInstance: boolean, msg: Processing): Processing.AsObject;
    static serializeBinaryToWriter(message: Processing, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Processing;
    static deserializeBinaryFromReader(message: Processing, reader: jspb.BinaryReader): Processing;
  }

  export namespace Processing {
    export type AsObject = {
      processingId: number,
      processingName: string,
      assetsList: Array<Wallet.Processing.Asset.AsObject>,
    }

    export class Id extends jspb.Message {
      getProcessingId(): number;
      setProcessingId(value: number): Id;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Id.AsObject;
      static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
      static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Id;
      static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
    }

    export namespace Id {
      export type AsObject = {
        processingId: number,
      }
    }


    export class Asset extends jspb.Message {
      getAssetId(): number;
      setAssetId(value: number): Asset;

      getSettingsDepositEnabled(): boolean;
      setSettingsDepositEnabled(value: boolean): Asset;

      getSettingsWithdrawalEnabled(): boolean;
      setSettingsWithdrawalEnabled(value: boolean): Asset;

      getSettingsWithdrawalFeeBase(): string;
      setSettingsWithdrawalFeeBase(value: string): Asset;

      getSettingsWithdrawalFeePercent(): string;
      setSettingsWithdrawalFeePercent(value: string): Asset;

      getSettingsWithdrawalOperationValueMin(): string;
      setSettingsWithdrawalOperationValueMin(value: string): Asset;

      getSettingsWithdrawalOperationValueMax(): string;
      setSettingsWithdrawalOperationValueMax(value: string): Asset;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Asset.AsObject;
      static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
      static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Asset;
      static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
    }

    export namespace Asset {
      export type AsObject = {
        assetId: number,
        settingsDepositEnabled: boolean,
        settingsWithdrawalEnabled: boolean,
        settingsWithdrawalFeeBase: string,
        settingsWithdrawalFeePercent: string,
        settingsWithdrawalOperationValueMin: string,
        settingsWithdrawalOperationValueMax: string,
      }

      export class Id extends jspb.Message {
        getProcessingId(): number;
        setProcessingId(value: number): Id;

        getAssetId(): number;
        setAssetId(value: number): Id;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Id.AsObject;
        static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
        static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Id;
        static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
      }

      export namespace Id {
        export type AsObject = {
          processingId: number,
          assetId: number,
        }
      }


      export class WithdrawalAddressHistory extends jspb.Message {
        getItemsList(): Array<Wallet.Processing.Asset.WithdrawalAddressHistory.Value>;
        setItemsList(value: Array<Wallet.Processing.Asset.WithdrawalAddressHistory.Value>): WithdrawalAddressHistory;
        clearItemsList(): WithdrawalAddressHistory;
        addItems(value?: Wallet.Processing.Asset.WithdrawalAddressHistory.Value, index?: number): Wallet.Processing.Asset.WithdrawalAddressHistory.Value;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): WithdrawalAddressHistory.AsObject;
        static toObject(includeInstance: boolean, msg: WithdrawalAddressHistory): WithdrawalAddressHistory.AsObject;
        static serializeBinaryToWriter(message: WithdrawalAddressHistory, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): WithdrawalAddressHistory;
        static deserializeBinaryFromReader(message: WithdrawalAddressHistory, reader: jspb.BinaryReader): WithdrawalAddressHistory;
      }

      export namespace WithdrawalAddressHistory {
        export type AsObject = {
          itemsList: Array<Wallet.Processing.Asset.WithdrawalAddressHistory.Value.AsObject>,
        }

        export class Value extends jspb.Message {
          getAddress(): string;
          setAddress(value: string): Value;

          getLastUsedAt(): number;
          setLastUsedAt(value: number): Value;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): Value.AsObject;
          static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
          static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): Value;
          static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
        }

        export namespace Value {
          export type AsObject = {
            address: string,
            lastUsedAt: number,
          }
        }

      }

    }


    export class List extends jspb.Message {
      getItemsList(): Array<Wallet.Processing>;
      setItemsList(value: Array<Wallet.Processing>): List;
      clearItemsList(): List;
      addItems(value?: Wallet.Processing, index?: number): Wallet.Processing;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Wallet.Processing.AsObject>,
      }
    }

  }

}

