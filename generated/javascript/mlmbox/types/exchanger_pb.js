// source: mlmbox/types/exchanger.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var mlmbox_types_asset_pair_pb = require('../../mlmbox/types/asset_pair_pb.js');
goog.object.extend(proto, mlmbox_types_asset_pair_pb);
goog.exportSymbol('proto.mlmbox.types.Exchanger', null, global);
goog.exportSymbol('proto.mlmbox.types.Exchanger.Rate', null, global);
goog.exportSymbol('proto.mlmbox.types.Exchanger.Rate.List', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mlmbox.types.Exchanger = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Exchanger, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Exchanger.displayName = 'proto.mlmbox.types.Exchanger';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mlmbox.types.Exchanger.Rate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Exchanger.Rate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Exchanger.Rate.displayName = 'proto.mlmbox.types.Exchanger.Rate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.mlmbox.types.Exchanger.Rate.List = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mlmbox.types.Exchanger.Rate.List.repeatedFields_, null);
};
goog.inherits(proto.mlmbox.types.Exchanger.Rate.List, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Exchanger.Rate.List.displayName = 'proto.mlmbox.types.Exchanger.Rate.List';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mlmbox.types.Exchanger.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Exchanger.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Exchanger} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Exchanger.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mlmbox.types.Exchanger}
 */
proto.mlmbox.types.Exchanger.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Exchanger;
  return proto.mlmbox.types.Exchanger.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Exchanger} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Exchanger}
 */
proto.mlmbox.types.Exchanger.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mlmbox.types.Exchanger.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Exchanger.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Exchanger} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Exchanger.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Exchanger.Rate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Exchanger.Rate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Exchanger.Rate.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetPair: (f = msg.getAssetPair()) && mlmbox_types_asset_pair_pb.AssetPair.toObject(includeInstance, f),
    rateBuy: jspb.Message.getFieldWithDefault(msg, 2, ""),
    rateSell: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modifiedAt: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mlmbox.types.Exchanger.Rate}
 */
proto.mlmbox.types.Exchanger.Rate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Exchanger.Rate;
  return proto.mlmbox.types.Exchanger.Rate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Exchanger.Rate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Exchanger.Rate}
 */
proto.mlmbox.types.Exchanger.Rate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new mlmbox_types_asset_pair_pb.AssetPair;
      reader.readMessage(value,mlmbox_types_asset_pair_pb.AssetPair.deserializeBinaryFromReader);
      msg.setAssetPair(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRateBuy(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRateSell(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setModifiedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Exchanger.Rate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Exchanger.Rate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Exchanger.Rate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetPair();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      mlmbox_types_asset_pair_pb.AssetPair.serializeBinaryToWriter
    );
  }
  f = message.getRateBuy();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRateSell();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModifiedAt();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mlmbox.types.Exchanger.Rate.List.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.mlmbox.types.Exchanger.Rate.List.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Exchanger.Rate.List.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Exchanger.Rate.List} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Exchanger.Rate.List.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.mlmbox.types.Exchanger.Rate.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.mlmbox.types.Exchanger.Rate.List}
 */
proto.mlmbox.types.Exchanger.Rate.List.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Exchanger.Rate.List;
  return proto.mlmbox.types.Exchanger.Rate.List.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Exchanger.Rate.List} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Exchanger.Rate.List}
 */
proto.mlmbox.types.Exchanger.Rate.List.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.mlmbox.types.Exchanger.Rate;
      reader.readMessage(value,proto.mlmbox.types.Exchanger.Rate.deserializeBinaryFromReader);
      msg.addItems(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.mlmbox.types.Exchanger.Rate.List.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Exchanger.Rate.List.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Exchanger.Rate.List} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Exchanger.Rate.List.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.mlmbox.types.Exchanger.Rate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Rate items = 1;
 * @return {!Array<!proto.mlmbox.types.Exchanger.Rate>}
 */
proto.mlmbox.types.Exchanger.Rate.List.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Exchanger.Rate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mlmbox.types.Exchanger.Rate, 1));
};


/**
 * @param {!Array<!proto.mlmbox.types.Exchanger.Rate>} value
 * @return {!proto.mlmbox.types.Exchanger.Rate.List} returns this
*/
proto.mlmbox.types.Exchanger.Rate.List.prototype.setItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.mlmbox.types.Exchanger.Rate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Exchanger.Rate}
 */
proto.mlmbox.types.Exchanger.Rate.List.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.mlmbox.types.Exchanger.Rate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Exchanger.Rate.List} returns this
 */
proto.mlmbox.types.Exchanger.Rate.List.prototype.clearItemsList = function() {
  return this.setItemsList([]);
};


/**
 * optional AssetPair asset_pair = 1;
 * @return {?proto.mlmbox.types.AssetPair}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.getAssetPair = function() {
  return /** @type{?proto.mlmbox.types.AssetPair} */ (
    jspb.Message.getWrapperField(this, mlmbox_types_asset_pair_pb.AssetPair, 1));
};


/**
 * @param {?proto.mlmbox.types.AssetPair|undefined} value
 * @return {!proto.mlmbox.types.Exchanger.Rate} returns this
*/
proto.mlmbox.types.Exchanger.Rate.prototype.setAssetPair = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.types.Exchanger.Rate} returns this
 */
proto.mlmbox.types.Exchanger.Rate.prototype.clearAssetPair = function() {
  return this.setAssetPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.hasAssetPair = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string rate_buy = 2;
 * @return {string}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.getRateBuy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.types.Exchanger.Rate} returns this
 */
proto.mlmbox.types.Exchanger.Rate.prototype.setRateBuy = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string rate_sell = 3;
 * @return {string}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.getRateSell = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.types.Exchanger.Rate} returns this
 */
proto.mlmbox.types.Exchanger.Rate.prototype.setRateSell = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint32 modified_at = 4;
 * @return {number}
 */
proto.mlmbox.types.Exchanger.Rate.prototype.getModifiedAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Exchanger.Rate} returns this
 */
proto.mlmbox.types.Exchanger.Rate.prototype.setModifiedAt = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


goog.object.extend(exports, proto.mlmbox.types);
