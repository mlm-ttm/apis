import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb'; // proto import: "google/protobuf/empty.proto"
import * as mlmbox_types_distribution_pb from '../../../mlmbox/types/distribution_pb'; // proto import: "mlmbox/types/distribution.proto"


export class SignatureMessageResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SignatureMessageResponse;

  getExpiredAt(): number;
  setExpiredAt(value: number): SignatureMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignatureMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignatureMessageResponse): SignatureMessageResponse.AsObject;
  static serializeBinaryToWriter(message: SignatureMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignatureMessageResponse;
  static deserializeBinaryFromReader(message: SignatureMessageResponse, reader: jspb.BinaryReader): SignatureMessageResponse;
}

export namespace SignatureMessageResponse {
  export type AsObject = {
    message: string,
    expiredAt: number,
  }
}

export class AttachSignedMessageRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): AttachSignedMessageRequest;

  getSignature(): string;
  setSignature(value: string): AttachSignedMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AttachSignedMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AttachSignedMessageRequest): AttachSignedMessageRequest.AsObject;
  static serializeBinaryToWriter(message: AttachSignedMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AttachSignedMessageRequest;
  static deserializeBinaryFromReader(message: AttachSignedMessageRequest, reader: jspb.BinaryReader): AttachSignedMessageRequest;
}

export namespace AttachSignedMessageRequest {
  export type AsObject = {
    message: string,
    signature: string,
  }
}

