import * as jspb from 'google-protobuf'

import * as mlmbox_types_status_pb from '../../mlmbox/types/status_pb';


export class GoogleAuthenticator extends jspb.Message {
  getStatus(): mlmbox_types_status_pb.Status.GoogleAuthenticator;
  setStatus(value: mlmbox_types_status_pb.Status.GoogleAuthenticator): GoogleAuthenticator;

  getModifiedAt(): number;
  setModifiedAt(value: number): GoogleAuthenticator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GoogleAuthenticator.AsObject;
  static toObject(includeInstance: boolean, msg: GoogleAuthenticator): GoogleAuthenticator.AsObject;
  static serializeBinaryToWriter(message: GoogleAuthenticator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GoogleAuthenticator;
  static deserializeBinaryFromReader(message: GoogleAuthenticator, reader: jspb.BinaryReader): GoogleAuthenticator;
}

export namespace GoogleAuthenticator {
  export type AsObject = {
    status: mlmbox_types_status_pb.Status.GoogleAuthenticator,
    modifiedAt: number,
  }

  export class Status extends jspb.Message {
    getStatus(): mlmbox_types_status_pb.Status.GoogleAuthenticator;
    setStatus(value: mlmbox_types_status_pb.Status.GoogleAuthenticator): Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
  }

  export namespace Status {
    export type AsObject = {
      status: mlmbox_types_status_pb.Status.GoogleAuthenticator,
    }
  }


  export class SecretCode extends jspb.Message {
    getSecretCode(): string;
    setSecretCode(value: string): SecretCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecretCode.AsObject;
    static toObject(includeInstance: boolean, msg: SecretCode): SecretCode.AsObject;
    static serializeBinaryToWriter(message: SecretCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecretCode;
    static deserializeBinaryFromReader(message: SecretCode, reader: jspb.BinaryReader): SecretCode;
  }

  export namespace SecretCode {
    export type AsObject = {
      secretCode: string,
    }
  }


  export class VerifiedCode extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifiedCode.AsObject;
    static toObject(includeInstance: boolean, msg: VerifiedCode): VerifiedCode.AsObject;
    static serializeBinaryToWriter(message: VerifiedCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifiedCode;
    static deserializeBinaryFromReader(message: VerifiedCode, reader: jspb.BinaryReader): VerifiedCode;
  }

  export namespace VerifiedCode {
    export type AsObject = {
    }

    export class Request extends jspb.Message {
      getVerifiedCode(): string;
      setVerifiedCode(value: string): Request;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Request.AsObject;
      static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
      static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Request;
      static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
    }

    export namespace Request {
      export type AsObject = {
        verifiedCode: string,
      }
    }


    export class Response extends jspb.Message {
      getStatus(): mlmbox_types_status_pb.Status.GoogleAuthenticatorVerifiedCode;
      setStatus(value: mlmbox_types_status_pb.Status.GoogleAuthenticatorVerifiedCode): Response;

      getResult(): GoogleAuthenticator | undefined;
      setResult(value?: GoogleAuthenticator): Response;
      hasResult(): boolean;
      clearResult(): Response;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Response.AsObject;
      static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
      static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Response;
      static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
    }

    export namespace Response {
      export type AsObject = {
        status: mlmbox_types_status_pb.Status.GoogleAuthenticatorVerifiedCode,
        result?: GoogleAuthenticator.AsObject,
      }
    }

  }

}

