import * as jspb from 'google-protobuf'

import * as mlmbox_types_account_pb from '../../mlmbox/types/account_pb'; // proto import: "mlmbox/types/account.proto"
import * as mlmbox_types_bonus_pb from '../../mlmbox/types/bonus_pb'; // proto import: "mlmbox/types/bonus.proto"


export class Distribution extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Distribution.AsObject;
  static toObject(includeInstance: boolean, msg: Distribution): Distribution.AsObject;
  static serializeBinaryToWriter(message: Distribution, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Distribution;
  static deserializeBinaryFromReader(message: Distribution, reader: jspb.BinaryReader): Distribution;
}

export namespace Distribution {
  export type AsObject = {
  }

  export class State extends jspb.Message {
    getWeb3Address(): string;
    setWeb3Address(value: string): State;

    getWeb3AddressAttachedAt(): number;
    setWeb3AddressAttachedAt(value: number): State;

    getHolderBalance(): Distribution.Holder.Balance | undefined;
    setHolderBalance(value?: Distribution.Holder.Balance): State;
    hasHolderBalance(): boolean;
    clearHolderBalance(): State;

    getIncomeBalanceFrozen(): string;
    setIncomeBalanceFrozen(value: string): State;

    getIncomeBonusesStatistics(): mlmbox_types_bonus_pb.Bonus.Summary | undefined;
    setIncomeBonusesStatistics(value?: mlmbox_types_bonus_pb.Bonus.Summary): State;
    hasIncomeBonusesStatistics(): boolean;
    clearIncomeBonusesStatistics(): State;

    getPointsBalanceFrozen(): string;
    setPointsBalanceFrozen(value: string): State;

    getPointsBalanceAvailable(): string;
    setPointsBalanceAvailable(value: string): State;

    getCashbackBalanceFrozen(): string;
    setCashbackBalanceFrozen(value: string): State;

    getCashbackBonusesStatistics(): mlmbox_types_bonus_pb.Bonus.Summary | undefined;
    setCashbackBonusesStatistics(value?: mlmbox_types_bonus_pb.Bonus.Summary): State;
    hasCashbackBonusesStatistics(): boolean;
    clearCashbackBonusesStatistics(): State;

    getConfig(): Distribution.State.Config | undefined;
    setConfig(value?: Distribution.State.Config): State;
    hasConfig(): boolean;
    clearConfig(): State;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): State.AsObject;
    static toObject(includeInstance: boolean, msg: State): State.AsObject;
    static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): State;
    static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
  }

  export namespace State {
    export type AsObject = {
      web3Address: string,
      web3AddressAttachedAt: number,
      holderBalance?: Distribution.Holder.Balance.AsObject,
      incomeBalanceFrozen: string,
      incomeBonusesStatistics?: mlmbox_types_bonus_pb.Bonus.Summary.AsObject,
      pointsBalanceFrozen: string,
      pointsBalanceAvailable: string,
      cashbackBalanceFrozen: string,
      cashbackBonusesStatistics?: mlmbox_types_bonus_pb.Bonus.Summary.AsObject,
      config?: Distribution.State.Config.AsObject,
    }

    export class Config extends jspb.Message {
      getPersonalPurchaseGameTokenBonusPercent(): string;
      setPersonalPurchaseGameTokenBonusPercent(value: string): Config;

      getPartnersPurchaseGameTokenBonusPercent(): string;
      setPartnersPurchaseGameTokenBonusPercent(value: string): Config;

      getPartnersPurchasePointsBonusPercent(): string;
      setPartnersPurchasePointsBonusPercent(value: string): Config;

      getPartnersPurchasePointsBonusUsdtRate(): string;
      setPartnersPurchasePointsBonusUsdtRate(value: string): Config;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Config.AsObject;
      static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
      static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Config;
      static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
    }

    export namespace Config {
      export type AsObject = {
        personalPurchaseGameTokenBonusPercent: string,
        partnersPurchaseGameTokenBonusPercent: string,
        partnersPurchasePointsBonusPercent: string,
        partnersPurchasePointsBonusUsdtRate: string,
      }
    }

  }


  export class Holder extends jspb.Message {
    getState(): Distribution.Holder.State | undefined;
    setState(value?: Distribution.Holder.State): Holder;
    hasState(): boolean;
    clearState(): Holder;

    getPartnersQuantity(): number;
    setPartnersQuantity(value: number): Holder;

    getPartnersHoldBalance(): Distribution.Holder.Balance | undefined;
    setPartnersHoldBalance(value?: Distribution.Holder.Balance): Holder;
    hasPartnersHoldBalance(): boolean;
    clearPartnersHoldBalance(): Holder;

    getTopPartnersList(): Array<Distribution.Holder.Partner>;
    setTopPartnersList(value: Array<Distribution.Holder.Partner>): Holder;
    clearTopPartnersList(): Holder;
    addTopPartners(value?: Distribution.Holder.Partner, index?: number): Distribution.Holder.Partner;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Holder.AsObject;
    static toObject(includeInstance: boolean, msg: Holder): Holder.AsObject;
    static serializeBinaryToWriter(message: Holder, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Holder;
    static deserializeBinaryFromReader(message: Holder, reader: jspb.BinaryReader): Holder;
  }

  export namespace Holder {
    export type AsObject = {
      state?: Distribution.Holder.State.AsObject,
      partnersQuantity: number,
      partnersHoldBalance?: Distribution.Holder.Balance.AsObject,
      topPartnersList: Array<Distribution.Holder.Partner.AsObject>,
    }

    export class Balance extends jspb.Message {
      getWeb3(): string;
      setWeb3(value: string): Balance;

      getWallet(): string;
      setWallet(value: string): Balance;

      getExchange(): string;
      setExchange(value: string): Balance;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Balance.AsObject;
      static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
      static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Balance;
      static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
    }

    export namespace Balance {
      export type AsObject = {
        web3: string,
        wallet: string,
        exchange: string,
      }
    }


    export class State extends jspb.Message {
      getWeb3Address(): string;
      setWeb3Address(value: string): State;

      getWeb3AddressAttachedAt(): number;
      setWeb3AddressAttachedAt(value: number): State;

      getBalance(): Distribution.Holder.Balance | undefined;
      setBalance(value?: Distribution.Holder.Balance): State;
      hasBalance(): boolean;
      clearBalance(): State;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): State.AsObject;
      static toObject(includeInstance: boolean, msg: State): State.AsObject;
      static serializeBinaryToWriter(message: State, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): State;
      static deserializeBinaryFromReader(message: State, reader: jspb.BinaryReader): State;
    }

    export namespace State {
      export type AsObject = {
        web3Address: string,
        web3AddressAttachedAt: number,
        balance?: Distribution.Holder.Balance.AsObject,
      }
    }


    export class Partner extends jspb.Message {
      getAccount(): mlmbox_types_account_pb.Account.Info | undefined;
      setAccount(value?: mlmbox_types_account_pb.Account.Info): Partner;
      hasAccount(): boolean;
      clearAccount(): Partner;

      getState(): Distribution.Holder.State | undefined;
      setState(value?: Distribution.Holder.State): Partner;
      hasState(): boolean;
      clearState(): Partner;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Partner.AsObject;
      static toObject(includeInstance: boolean, msg: Partner): Partner.AsObject;
      static serializeBinaryToWriter(message: Partner, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Partner;
      static deserializeBinaryFromReader(message: Partner, reader: jspb.BinaryReader): Partner;
    }

    export namespace Partner {
      export type AsObject = {
        account?: mlmbox_types_account_pb.Account.Info.AsObject,
        state?: Distribution.Holder.State.AsObject,
      }
    }

  }

}

