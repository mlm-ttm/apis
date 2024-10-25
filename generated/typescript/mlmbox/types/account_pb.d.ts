import * as jspb from 'google-protobuf'

import * as mlmbox_types_asset_pb from '../../mlmbox/types/asset_pb'; // proto import: "mlmbox/types/asset.proto"
import * as mlmbox_types_relationship_pb from '../../mlmbox/types/relationship_pb'; // proto import: "mlmbox/types/relationship.proto"
import * as mlmbox_types_google_authenticator_pb from '../../mlmbox/types/google_authenticator_pb'; // proto import: "mlmbox/types/google_authenticator.proto"


export class Account extends jspb.Message {
  getInfo(): Account.Info | undefined;
  setInfo(value?: Account.Info): Account;
  hasInfo(): boolean;
  clearInfo(): Account;

  getGoogleAuthenticator(): mlmbox_types_google_authenticator_pb.GoogleAuthenticator | undefined;
  setGoogleAuthenticator(value?: mlmbox_types_google_authenticator_pb.GoogleAuthenticator): Account;
  hasGoogleAuthenticator(): boolean;
  clearGoogleAuthenticator(): Account;

  getMatrixTreeAccountsList(): Array<TreeAccount>;
  setMatrixTreeAccountsList(value: Array<TreeAccount>): Account;
  clearMatrixTreeAccountsList(): Account;
  addMatrixTreeAccounts(value?: TreeAccount, index?: number): TreeAccount;

  getLocale(): string;
  setLocale(value: string): Account;

  getIsAdmin(): boolean;
  setIsAdmin(value: boolean): Account;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    info?: Account.Info.AsObject,
    googleAuthenticator?: mlmbox_types_google_authenticator_pb.GoogleAuthenticator.AsObject,
    matrixTreeAccountsList: Array<TreeAccount.AsObject>,
    locale: string,
    isAdmin: boolean,
  }

  export class Id extends jspb.Message {
    getAccountId(): number;
    setAccountId(value: number): Id;

    getAccountLogin(): string;
    setAccountLogin(value: string): Id;

    getRefLinkId(): string;
    setRefLinkId(value: string): Id;

    getUniqueFieldCase(): Id.UniqueFieldCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      accountId: number,
      accountLogin: string,
      refLinkId: string,
    }

    export enum UniqueFieldCase { 
      UNIQUE_FIELD_NOT_SET = 0,
      ACCOUNT_ID = 1,
      ACCOUNT_LOGIN = 2,
      REF_LINK_ID = 3,
    }
  }


  export class RefLink extends jspb.Message {
    getAccountId(): number;
    setAccountId(value: number): RefLink;

    getSourceId(): number;
    setSourceId(value: number): RefLink;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RefLink.AsObject;
    static toObject(includeInstance: boolean, msg: RefLink): RefLink.AsObject;
    static serializeBinaryToWriter(message: RefLink, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RefLink;
    static deserializeBinaryFromReader(message: RefLink, reader: jspb.BinaryReader): RefLink;
  }

  export namespace RefLink {
    export type AsObject = {
      accountId: number,
      sourceId: number,
    }
  }


  export class Username extends jspb.Message {
    getId(): number;
    setId(value: number): Username;

    getLogin(): string;
    setLogin(value: string): Username;

    getRefLinkId(): string;
    setRefLinkId(value: string): Username;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Username.AsObject;
    static toObject(includeInstance: boolean, msg: Username): Username.AsObject;
    static serializeBinaryToWriter(message: Username, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Username;
    static deserializeBinaryFromReader(message: Username, reader: jspb.BinaryReader): Username;
  }

  export namespace Username {
    export type AsObject = {
      id: number,
      login: string,
      refLinkId: string,
    }
  }


  export class Profile extends jspb.Message {
    getFirstName(): string;
    setFirstName(value: string): Profile;

    getLastName(): string;
    setLastName(value: string): Profile;

    getTelegram(): Account.Profile.Telegram | undefined;
    setTelegram(value?: Account.Profile.Telegram): Profile;
    hasTelegram(): boolean;
    clearTelegram(): Profile;

    getAva(): Account.Profile.Ava | undefined;
    setAva(value?: Account.Profile.Ava): Profile;
    hasAva(): boolean;
    clearAva(): Profile;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Profile.AsObject;
    static toObject(includeInstance: boolean, msg: Profile): Profile.AsObject;
    static serializeBinaryToWriter(message: Profile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Profile;
    static deserializeBinaryFromReader(message: Profile, reader: jspb.BinaryReader): Profile;
  }

  export namespace Profile {
    export type AsObject = {
      firstName: string,
      lastName: string,
      telegram?: Account.Profile.Telegram.AsObject,
      ava?: Account.Profile.Ava.AsObject,
    }

    export class Ava extends jspb.Message {
      getCollectionId(): number;
      setCollectionId(value: number): Ava;

      getEntityId(): number;
      setEntityId(value: number): Ava;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Ava.AsObject;
      static toObject(includeInstance: boolean, msg: Ava): Ava.AsObject;
      static serializeBinaryToWriter(message: Ava, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Ava;
      static deserializeBinaryFromReader(message: Ava, reader: jspb.BinaryReader): Ava;
    }

    export namespace Ava {
      export type AsObject = {
        collectionId: number,
        entityId: number,
      }

      export class List extends jspb.Message {
        getItemsList(): Array<Account.Profile.Ava>;
        setItemsList(value: Array<Account.Profile.Ava>): List;
        clearItemsList(): List;
        addItems(value?: Account.Profile.Ava, index?: number): Account.Profile.Ava;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): List.AsObject;
        static toObject(includeInstance: boolean, msg: List): List.AsObject;
        static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): List;
        static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
      }

      export namespace List {
        export type AsObject = {
          itemsList: Array<Account.Profile.Ava.AsObject>,
        }
      }


      export class File extends jspb.Message {
        getCollectionId(): number;
        setCollectionId(value: number): File;

        getEntityId(): number;
        setEntityId(value: number): File;

        getValue(): string;
        setValue(value: string): File;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): File.AsObject;
        static toObject(includeInstance: boolean, msg: File): File.AsObject;
        static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): File;
        static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
      }

      export namespace File {
        export type AsObject = {
          collectionId: number,
          entityId: number,
          value: string,
        }

        export class List extends jspb.Message {
          getItemsList(): Array<Account.Profile.Ava.File>;
          setItemsList(value: Array<Account.Profile.Ava.File>): List;
          clearItemsList(): List;
          addItems(value?: Account.Profile.Ava.File, index?: number): Account.Profile.Ava.File;

          serializeBinary(): Uint8Array;
          toObject(includeInstance?: boolean): List.AsObject;
          static toObject(includeInstance: boolean, msg: List): List.AsObject;
          static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
          static deserializeBinary(bytes: Uint8Array): List;
          static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
        }

        export namespace List {
          export type AsObject = {
            itemsList: Array<Account.Profile.Ava.File.AsObject>,
          }
        }

      }

    }


    export class Telegram extends jspb.Message {
      getId(): number;
      setId(value: number): Telegram;

      getUsername(): string;
      setUsername(value: string): Telegram;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Telegram.AsObject;
      static toObject(includeInstance: boolean, msg: Telegram): Telegram.AsObject;
      static serializeBinaryToWriter(message: Telegram, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Telegram;
      static deserializeBinaryFromReader(message: Telegram, reader: jspb.BinaryReader): Telegram;
    }

    export namespace Telegram {
      export type AsObject = {
        id: number,
        username: string,
      }
    }

  }


  export class Statistics extends jspb.Message {
    getPartnersQuantity(): number;
    setPartnersQuantity(value: number): Statistics;

    getTeamQuantity(): number;
    setTeamQuantity(value: number): Statistics;

    getMatrixPartnersQuantity(): number;
    setMatrixPartnersQuantity(value: number): Statistics;

    getMatrixTeamQuantity(): number;
    setMatrixTeamQuantity(value: number): Statistics;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Statistics.AsObject;
    static toObject(includeInstance: boolean, msg: Statistics): Statistics.AsObject;
    static serializeBinaryToWriter(message: Statistics, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Statistics;
    static deserializeBinaryFromReader(message: Statistics, reader: jspb.BinaryReader): Statistics;
  }

  export namespace Statistics {
    export type AsObject = {
      partnersQuantity: number,
      teamQuantity: number,
      matrixPartnersQuantity: number,
      matrixTeamQuantity: number,
    }
  }


  export class Info extends jspb.Message {
    getProfile(): Account.Profile | undefined;
    setProfile(value?: Account.Profile): Info;
    hasProfile(): boolean;
    clearProfile(): Info;

    getAccount(): Account.Username | undefined;
    setAccount(value?: Account.Username): Info;
    hasAccount(): boolean;
    clearAccount(): Info;

    getReferral(): Account.Username | undefined;
    setReferral(value?: Account.Username): Info;
    hasReferral(): boolean;
    clearReferral(): Info;

    getRelationship(): mlmbox_types_relationship_pb.Relationship | undefined;
    setRelationship(value?: mlmbox_types_relationship_pb.Relationship): Info;
    hasRelationship(): boolean;
    clearRelationship(): Info;

    getRegistrationAt(): number;
    setRegistrationAt(value: number): Info;

    getMatrixStartedAt(): number;
    setMatrixStartedAt(value: number): Info;

    getMatrixTreeIdsBitMask(): number;
    setMatrixTreeIdsBitMask(value: number): Info;

    getReferralBranch(): number;
    setReferralBranch(value: number): Info;

    getStatistics(): Account.Statistics | undefined;
    setStatistics(value?: Account.Statistics): Info;
    hasStatistics(): boolean;
    clearStatistics(): Info;

    getChannelsList(): Array<number>;
    setChannelsList(value: Array<number>): Info;
    clearChannelsList(): Info;
    addChannels(value: number, index?: number): Info;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      profile?: Account.Profile.AsObject,
      account?: Account.Username.AsObject,
      referral?: Account.Username.AsObject,
      relationship?: mlmbox_types_relationship_pb.Relationship.AsObject,
      registrationAt: number,
      matrixStartedAt: number,
      matrixTreeIdsBitMask: number,
      referralBranch: number,
      statistics?: Account.Statistics.AsObject,
      channelsList: Array<number>,
    }

    export class List extends jspb.Message {
      getItemsList(): Array<Account.Info>;
      setItemsList(value: Array<Account.Info>): List;
      clearItemsList(): List;
      addItems(value?: Account.Info, index?: number): Account.Info;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): List.AsObject;
      static toObject(includeInstance: boolean, msg: List): List.AsObject;
      static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): List;
      static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
    }

    export namespace List {
      export type AsObject = {
        itemsList: Array<Account.Info.AsObject>,
      }
    }

  }

}

export class Tree extends jspb.Message {
  getId(): number;
  setId(value: number): Tree;

  getTitle(): string;
  setTitle(value: string): Tree;

  getGroupId(): number;
  setGroupId(value: number): Tree;

  getPositionsQuantity(): number;
  setPositionsQuantity(value: number): Tree;

  getDefaultPositionWidth(): number;
  setDefaultPositionWidth(value: number): Tree;

  getAmount(): mlmbox_types_asset_pb.Asset.Amount | undefined;
  setAmount(value?: mlmbox_types_asset_pb.Asset.Amount): Tree;
  hasAmount(): boolean;
  clearAmount(): Tree;

  getBookingEnabled(): boolean;
  setBookingEnabled(value: boolean): Tree;

  getTreeModeId(): Tree.Mode;
  setTreeModeId(value: Tree.Mode): Tree;

  getRequireTreeIdsList(): Array<number>;
  setRequireTreeIdsList(value: Array<number>): Tree;
  clearRequireTreeIdsList(): Tree;
  addRequireTreeIds(value: number, index?: number): Tree;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tree.AsObject;
  static toObject(includeInstance: boolean, msg: Tree): Tree.AsObject;
  static serializeBinaryToWriter(message: Tree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tree;
  static deserializeBinaryFromReader(message: Tree, reader: jspb.BinaryReader): Tree;
}

export namespace Tree {
  export type AsObject = {
    id: number,
    title: string,
    groupId: number,
    positionsQuantity: number,
    defaultPositionWidth: number,
    amount?: mlmbox_types_asset_pb.Asset.Amount.AsObject,
    bookingEnabled: boolean,
    treeModeId: Tree.Mode,
    requireTreeIdsList: Array<number>,
  }

  export class Group extends jspb.Message {
    getId(): number;
    setId(value: number): Group;

    getTitle(): string;
    setTitle(value: string): Group;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Group.AsObject;
    static toObject(includeInstance: boolean, msg: Group): Group.AsObject;
    static serializeBinaryToWriter(message: Group, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Group;
    static deserializeBinaryFromReader(message: Group, reader: jspb.BinaryReader): Group;
  }

  export namespace Group {
    export type AsObject = {
      id: number,
      title: string,
    }
  }


  export enum Mode { 
    UNKNOWN = 0,
    MATRIX = 1,
    BINARY = 2,
  }
}

export class TreeAccount extends jspb.Message {
  getTreeId(): number;
  setTreeId(value: number): TreeAccount;

  getQuantity(): number;
  setQuantity(value: number): TreeAccount;

  getActivatedQuantity(): number;
  setActivatedQuantity(value: number): TreeAccount;

  getActivatedCapacity(): number;
  setActivatedCapacity(value: number): TreeAccount;

  getPoolValue(): string;
  setPoolValue(value: string): TreeAccount;

  getBookingQuantity(): number;
  setBookingQuantity(value: number): TreeAccount;

  getEntitiesList(): Array<TreeAccount.Entity>;
  setEntitiesList(value: Array<TreeAccount.Entity>): TreeAccount;
  clearEntitiesList(): TreeAccount;
  addEntities(value?: TreeAccount.Entity, index?: number): TreeAccount.Entity;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TreeAccount.AsObject;
  static toObject(includeInstance: boolean, msg: TreeAccount): TreeAccount.AsObject;
  static serializeBinaryToWriter(message: TreeAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TreeAccount;
  static deserializeBinaryFromReader(message: TreeAccount, reader: jspb.BinaryReader): TreeAccount;
}

export namespace TreeAccount {
  export type AsObject = {
    treeId: number,
    quantity: number,
    activatedQuantity: number,
    activatedCapacity: number,
    poolValue: string,
    bookingQuantity: number,
    entitiesList: Array<TreeAccount.Entity.AsObject>,
  }

  export class Id extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): Id;

    getAccountId(): number;
    setAccountId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      treeId: number,
      accountId: number,
    }
  }


  export class List extends jspb.Message {
    getItemsList(): Array<TreeAccount>;
    setItemsList(value: Array<TreeAccount>): List;
    clearItemsList(): List;
    addItems(value?: TreeAccount, index?: number): TreeAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): List.AsObject;
    static toObject(includeInstance: boolean, msg: List): List.AsObject;
    static serializeBinaryToWriter(message: List, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): List;
    static deserializeBinaryFromReader(message: List, reader: jspb.BinaryReader): List;
  }

  export namespace List {
    export type AsObject = {
      itemsList: Array<TreeAccount.AsObject>,
    }
  }


  export class Entity extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Entity;

    getTreeChainId(): number;
    setTreeChainId(value: number): Entity;

    getTreeEntityId(): number;
    setTreeEntityId(value: number): Entity;

    getTreeAccountEntityId(): number;
    setTreeAccountEntityId(value: number): Entity;

    getFilled2w2lBitMask(): number;
    setFilled2w2lBitMask(value: number): Entity;

    getFilled(): boolean;
    setFilled(value: boolean): Entity;

    getViewAccess(): boolean;
    setViewAccess(value: boolean): Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Entity.AsObject;
    static toObject(includeInstance: boolean, msg: Entity): Entity.AsObject;
    static serializeBinaryToWriter(message: Entity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Entity;
    static deserializeBinaryFromReader(message: Entity, reader: jspb.BinaryReader): Entity;
  }

  export namespace Entity {
    export type AsObject = {
      positionId: number,
      treeChainId: number,
      treeEntityId: number,
      treeAccountEntityId: number,
      filled2w2lBitMask: number,
      filled: boolean,
      viewAccess: boolean,
    }
  }


  export class Set extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): Set;

    getQuantity(): number;
    setQuantity(value: number): Set;

    getActivatedQuantity(): number;
    setActivatedQuantity(value: number): Set;

    getActivatedCapacity(): number;
    setActivatedCapacity(value: number): Set;

    getPoolValue(): string;
    setPoolValue(value: string): Set;

    getBookingQuantity(): number;
    setBookingQuantity(value: number): Set;

    getEntity(): TreeAccount.Entity | undefined;
    setEntity(value?: TreeAccount.Entity): Set;
    hasEntity(): boolean;
    clearEntity(): Set;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Set.AsObject;
    static toObject(includeInstance: boolean, msg: Set): Set.AsObject;
    static serializeBinaryToWriter(message: Set, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Set;
    static deserializeBinaryFromReader(message: Set, reader: jspb.BinaryReader): Set;
  }

  export namespace Set {
    export type AsObject = {
      treeId: number,
      quantity: number,
      activatedQuantity: number,
      activatedCapacity: number,
      poolValue: string,
      bookingQuantity: number,
      entity?: TreeAccount.Entity.AsObject,
    }
  }

}

export class PositionView extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionView.AsObject;
  static toObject(includeInstance: boolean, msg: PositionView): PositionView.AsObject;
  static serializeBinaryToWriter(message: PositionView, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionView;
  static deserializeBinaryFromReader(message: PositionView, reader: jspb.BinaryReader): PositionView;
}

export namespace PositionView {
  export type AsObject = {
  }

  export class Id extends jspb.Message {
    getViewPositionId(): number;
    setViewPositionId(value: number): Id;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Id.AsObject;
    static toObject(includeInstance: boolean, msg: Id): Id.AsObject;
    static serializeBinaryToWriter(message: Id, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Id;
    static deserializeBinaryFromReader(message: Id, reader: jspb.BinaryReader): Id;
  }

  export namespace Id {
    export type AsObject = {
      viewPositionId: number,
    }
  }


  export class Team extends jspb.Message {
    getViewLevel(): number;
    setViewLevel(value: number): Team;

    getViewPositionId(): number;
    setViewPositionId(value: number): Team;

    getTreeAccountId(): TreeAccount.Id | undefined;
    setTreeAccountId(value?: TreeAccount.Id): Team;
    hasTreeAccountId(): boolean;
    clearTreeAccountId(): Team;

    getQueryCase(): Team.QueryCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Team.AsObject;
    static toObject(includeInstance: boolean, msg: Team): Team.AsObject;
    static serializeBinaryToWriter(message: Team, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Team;
    static deserializeBinaryFromReader(message: Team, reader: jspb.BinaryReader): Team;
  }

  export namespace Team {
    export type AsObject = {
      viewLevel: number,
      viewPositionId: number,
      treeAccountId?: TreeAccount.Id.AsObject,
    }

    export enum QueryCase { 
      QUERY_NOT_SET = 0,
      VIEW_POSITION_ID = 2,
      TREE_ACCOUNT_ID = 3,
    }
  }

}

export class Matrix extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Matrix.AsObject;
  static toObject(includeInstance: boolean, msg: Matrix): Matrix.AsObject;
  static serializeBinaryToWriter(message: Matrix, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Matrix;
  static deserializeBinaryFromReader(message: Matrix, reader: jspb.BinaryReader): Matrix;
}

export namespace Matrix {
  export type AsObject = {
  }

  export class Reinvest extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reinvest.AsObject;
    static toObject(includeInstance: boolean, msg: Reinvest): Reinvest.AsObject;
    static serializeBinaryToWriter(message: Reinvest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reinvest;
    static deserializeBinaryFromReader(message: Reinvest, reader: jspb.BinaryReader): Reinvest;
  }

  export namespace Reinvest {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
      getPositionId(): number;
      setPositionId(value: number): Request;

      getReinvestEnabled(): boolean;
      setReinvestEnabled(value: boolean): Request;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        positionId: number,
        reinvestEnabled: boolean,
      }
    }

  }


  export class Position extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Position;

    getPositionRefId(): number;
    setPositionRefId(value: number): Position;

    getPositionRefLine(): number;
    setPositionRefLine(value: number): Position;

    getPositionWidth(): number;
    setPositionWidth(value: number): Position;

    getAccountId(): number;
    setAccountId(value: number): Position;

    getTreeAccountId(): number;
    setTreeAccountId(value: number): Position;

    getReinvestEnabled(): boolean;
    setReinvestEnabled(value: boolean): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      positionId: number,
      positionRefId: number,
      positionRefLine: number,
      positionWidth: number,
      accountId: number,
      treeAccountId: number,
      reinvestEnabled: boolean,
    }
  }


  export class View extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): View;

    getSelfPositionId(): number;
    setSelfPositionId(value: number): View;

    getSelfTreeIdsBitMask(): number;
    setSelfTreeIdsBitMask(value: number): View;

    getViewPositionId(): number;
    setViewPositionId(value: number): View;

    getViewTreeIdsBitMask(): number;
    setViewTreeIdsBitMask(value: number): View;

    getPositionsList(): Array<Matrix.Position>;
    setPositionsList(value: Array<Matrix.Position>): View;
    clearPositionsList(): View;
    addPositions(value?: Matrix.Position, index?: number): Matrix.Position;

    getAccountsList(): Array<Account.Info>;
    setAccountsList(value: Array<Account.Info>): View;
    clearAccountsList(): View;
    addAccounts(value?: Account.Info, index?: number): Account.Info;

    getViewTreeAccountEntitiesList(): Array<TreeAccount.Entity>;
    setViewTreeAccountEntitiesList(value: Array<TreeAccount.Entity>): View;
    clearViewTreeAccountEntitiesList(): View;
    addViewTreeAccountEntities(value?: TreeAccount.Entity, index?: number): TreeAccount.Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): View.AsObject;
    static toObject(includeInstance: boolean, msg: View): View.AsObject;
    static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): View;
    static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
  }

  export namespace View {
    export type AsObject = {
      treeId: number,
      selfPositionId: number,
      selfTreeIdsBitMask: number,
      viewPositionId: number,
      viewTreeIdsBitMask: number,
      positionsList: Array<Matrix.Position.AsObject>,
      accountsList: Array<Account.Info.AsObject>,
      viewTreeAccountEntitiesList: Array<TreeAccount.Entity.AsObject>,
    }
  }


  export class Info extends jspb.Message {
    getItemsList(): Array<TreeAccount>;
    setItemsList(value: Array<TreeAccount>): Info;
    clearItemsList(): Info;
    addItems(value?: TreeAccount, index?: number): TreeAccount;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      itemsList: Array<TreeAccount.AsObject>,
    }
  }

}

export class Binary extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binary.AsObject;
  static toObject(includeInstance: boolean, msg: Binary): Binary.AsObject;
  static serializeBinaryToWriter(message: Binary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binary;
  static deserializeBinaryFromReader(message: Binary, reader: jspb.BinaryReader): Binary;
}

export namespace Binary {
  export type AsObject = {
  }

  export class BranchSelectStrategy extends jspb.Message {
    getBranchSelectStrategyId(): Binary.BranchSelectStrategy.Id;
    setBranchSelectStrategyId(value: Binary.BranchSelectStrategy.Id): BranchSelectStrategy;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BranchSelectStrategy.AsObject;
    static toObject(includeInstance: boolean, msg: BranchSelectStrategy): BranchSelectStrategy.AsObject;
    static serializeBinaryToWriter(message: BranchSelectStrategy, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BranchSelectStrategy;
    static deserializeBinaryFromReader(message: BranchSelectStrategy, reader: jspb.BinaryReader): BranchSelectStrategy;
  }

  export namespace BranchSelectStrategy {
    export type AsObject = {
      branchSelectStrategyId: Binary.BranchSelectStrategy.Id,
    }

    export class Request extends jspb.Message {
      getPositionId(): number;
      setPositionId(value: number): Request;

      getBranchSelectStrategyId(): Binary.BranchSelectStrategy.Id;
      setBranchSelectStrategyId(value: Binary.BranchSelectStrategy.Id): Request;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        positionId: number,
        branchSelectStrategyId: Binary.BranchSelectStrategy.Id,
      }
    }


    export enum Id { 
      UNKNOWN = 0,
      LEFT = 1,
      RIGHT = 2,
      EVENLY = 3,
    }
  }


  export class Config extends jspb.Message {
    getBonusBinaryPercent(): string;
    setBonusBinaryPercent(value: string): Config;

    getBonusMatchingPercent(): string;
    setBonusMatchingPercent(value: string): Config;

    getTreeEntitiesQuantity(): number;
    setTreeEntitiesQuantity(value: number): Config;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Config.AsObject;
    static toObject(includeInstance: boolean, msg: Config): Config.AsObject;
    static serializeBinaryToWriter(message: Config, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Config;
    static deserializeBinaryFromReader(message: Config, reader: jspb.BinaryReader): Config;
  }

  export namespace Config {
    export type AsObject = {
      bonusBinaryPercent: string,
      bonusMatchingPercent: string,
      treeEntitiesQuantity: number,
    }
  }


  export class Position extends jspb.Message {
    getPositionId(): number;
    setPositionId(value: number): Position;

    getPositionRefId(): number;
    setPositionRefId(value: number): Position;

    getPositionRefBranch(): number;
    setPositionRefBranch(value: number): Position;

    getPositionWidth(): number;
    setPositionWidth(value: number): Position;

    getAccountId(): number;
    setAccountId(value: number): Position;

    getTreeChainId(): number;
    setTreeChainId(value: number): Position;

    getTreeEntityId(): number;
    setTreeEntityId(value: number): Position;

    getTreeAccountEntityId(): number;
    setTreeAccountEntityId(value: number): Position;

    getPartnersQuantity(): number;
    setPartnersQuantity(value: number): Position;

    getTeamQuantity(): number;
    setTeamQuantity(value: number): Position;

    getEarnedValue(): string;
    setEarnedValue(value: string): Position;

    getBranchSelectStrategy(): number;
    setBranchSelectStrategy(value: number): Position;

    getBranchLeft(): Binary.Position.Branch | undefined;
    setBranchLeft(value?: Binary.Position.Branch): Position;
    hasBranchLeft(): boolean;
    clearBranchLeft(): Position;

    getBranchRight(): Binary.Position.Branch | undefined;
    setBranchRight(value?: Binary.Position.Branch): Position;
    hasBranchRight(): boolean;
    clearBranchRight(): Position;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      positionId: number,
      positionRefId: number,
      positionRefBranch: number,
      positionWidth: number,
      accountId: number,
      treeChainId: number,
      treeEntityId: number,
      treeAccountEntityId: number,
      partnersQuantity: number,
      teamQuantity: number,
      earnedValue: string,
      branchSelectStrategy: number,
      branchLeft?: Binary.Position.Branch.AsObject,
      branchRight?: Binary.Position.Branch.AsObject,
    }

    export class Branch extends jspb.Message {
      getTeamQuantity(): number;
      setTeamQuantity(value: number): Branch;

      getBalanceValue(): string;
      setBalanceValue(value: string): Branch;

      getTurnoverValue(): string;
      setTurnoverValue(value: string): Branch;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Branch.AsObject;
      static toObject(includeInstance: boolean, msg: Branch): Branch.AsObject;
      static serializeBinaryToWriter(message: Branch, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Branch;
      static deserializeBinaryFromReader(message: Branch, reader: jspb.BinaryReader): Branch;
    }

    export namespace Branch {
      export type AsObject = {
        teamQuantity: number,
        balanceValue: string,
        turnoverValue: string,
      }
    }

  }


  export class View extends jspb.Message {
    getTreeId(): number;
    setTreeId(value: number): View;

    getConfig(): Binary.Config | undefined;
    setConfig(value?: Binary.Config): View;
    hasConfig(): boolean;
    clearConfig(): View;

    getSelfPositionId(): number;
    setSelfPositionId(value: number): View;

    getSelfTreeIdsBitMask(): number;
    setSelfTreeIdsBitMask(value: number): View;

    getViewPositionId(): number;
    setViewPositionId(value: number): View;

    getViewTreeIdsBitMask(): number;
    setViewTreeIdsBitMask(value: number): View;

    getPositionsList(): Array<Binary.Position>;
    setPositionsList(value: Array<Binary.Position>): View;
    clearPositionsList(): View;
    addPositions(value?: Binary.Position, index?: number): Binary.Position;

    getAccountsList(): Array<Account.Info>;
    setAccountsList(value: Array<Account.Info>): View;
    clearAccountsList(): View;
    addAccounts(value?: Account.Info, index?: number): Account.Info;

    getViewTreeAccountEntitiesList(): Array<TreeAccount.Entity>;
    setViewTreeAccountEntitiesList(value: Array<TreeAccount.Entity>): View;
    clearViewTreeAccountEntitiesList(): View;
    addViewTreeAccountEntities(value?: TreeAccount.Entity, index?: number): TreeAccount.Entity;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): View.AsObject;
    static toObject(includeInstance: boolean, msg: View): View.AsObject;
    static serializeBinaryToWriter(message: View, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): View;
    static deserializeBinaryFromReader(message: View, reader: jspb.BinaryReader): View;
  }

  export namespace View {
    export type AsObject = {
      treeId: number,
      config?: Binary.Config.AsObject,
      selfPositionId: number,
      selfTreeIdsBitMask: number,
      viewPositionId: number,
      viewTreeIdsBitMask: number,
      positionsList: Array<Binary.Position.AsObject>,
      accountsList: Array<Account.Info.AsObject>,
      viewTreeAccountEntitiesList: Array<TreeAccount.Entity.AsObject>,
    }
  }


  export class Info extends jspb.Message {
    getItemsList(): Array<Binary.Info.Item>;
    setItemsList(value: Array<Binary.Info.Item>): Info;
    clearItemsList(): Info;
    addItems(value?: Binary.Info.Item, index?: number): Binary.Info.Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Info.AsObject;
    static toObject(includeInstance: boolean, msg: Info): Info.AsObject;
    static serializeBinaryToWriter(message: Info, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Info;
    static deserializeBinaryFromReader(message: Info, reader: jspb.BinaryReader): Info;
  }

  export namespace Info {
    export type AsObject = {
      itemsList: Array<Binary.Info.Item.AsObject>,
    }

    export class Item extends jspb.Message {
      getTreeAccount(): TreeAccount | undefined;
      setTreeAccount(value?: TreeAccount): Item;
      hasTreeAccount(): boolean;
      clearTreeAccount(): Item;

      getConfig(): Binary.Config | undefined;
      setConfig(value?: Binary.Config): Item;
      hasConfig(): boolean;
      clearConfig(): Item;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Item.AsObject;
      static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
      static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Item;
      static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
    }

    export namespace Item {
      export type AsObject = {
        treeAccount?: TreeAccount.AsObject,
        config?: Binary.Config.AsObject,
      }
    }

  }

}

