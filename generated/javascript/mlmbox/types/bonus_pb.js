// source: mlmbox/types/bonus.proto
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

goog.exportSymbol('proto.mlmbox.types.Bonus', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.Kind', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.Kind.Id', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.LevelPercent', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.Summary', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.Summary.Asset', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.Value', null, global);
goog.exportSymbol('proto.mlmbox.types.Bonus.Value.Asset', null, global);
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
proto.mlmbox.types.Bonus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Bonus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.displayName = 'proto.mlmbox.types.Bonus';
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
proto.mlmbox.types.Bonus.Kind = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Bonus.Kind, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.Kind.displayName = 'proto.mlmbox.types.Bonus.Kind';
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
proto.mlmbox.types.Bonus.LevelPercent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Bonus.LevelPercent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.LevelPercent.displayName = 'proto.mlmbox.types.Bonus.LevelPercent';
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
proto.mlmbox.types.Bonus.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Bonus.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.Value.displayName = 'proto.mlmbox.types.Bonus.Value';
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
proto.mlmbox.types.Bonus.Value.Asset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Bonus.Value.Asset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.Value.Asset.displayName = 'proto.mlmbox.types.Bonus.Value.Asset';
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
proto.mlmbox.types.Bonus.Summary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.mlmbox.types.Bonus.Summary.repeatedFields_, null);
};
goog.inherits(proto.mlmbox.types.Bonus.Summary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.Summary.displayName = 'proto.mlmbox.types.Bonus.Summary';
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
proto.mlmbox.types.Bonus.Summary.Asset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.types.Bonus.Summary.Asset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.types.Bonus.Summary.Asset.displayName = 'proto.mlmbox.types.Bonus.Summary.Asset';
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
proto.mlmbox.types.Bonus.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.mlmbox.types.Bonus}
 */
proto.mlmbox.types.Bonus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus;
  return proto.mlmbox.types.Bonus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus}
 */
proto.mlmbox.types.Bonus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.mlmbox.types.Bonus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.serializeBinaryToWriter = function(message, writer) {
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
proto.mlmbox.types.Bonus.Kind.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.Kind.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus.Kind} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Kind.toObject = function(includeInstance, msg) {
  var f, obj = {
    kindId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.mlmbox.types.Bonus.Kind}
 */
proto.mlmbox.types.Bonus.Kind.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus.Kind;
  return proto.mlmbox.types.Bonus.Kind.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus.Kind} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus.Kind}
 */
proto.mlmbox.types.Bonus.Kind.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mlmbox.types.Bonus.Kind.Id} */ (reader.readEnum());
      msg.setKindId(value);
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
proto.mlmbox.types.Bonus.Kind.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.Kind.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus.Kind} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Kind.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKindId();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.mlmbox.types.Bonus.Kind.Id = {
  UNKNOWN: 0,
  GIFT: 1,
  BONUS_DIRECT: 2,
  BONUS_MATRIX: 3,
  BONUS_CARD_PARTNER_DAO: 4,
  BONUS_CARD_BONUS_HUNTER: 5,
  BONUS_BINARY: 6,
  BONUS_BINARY_MATCHING: 7,
  BONUS_GAME_TOKEN_WEB3_PURCHASE_PERSONAL: 8,
  BONUS_GAME_TOKEN_WEB3_PURCHASE_PARTNERS: 9,
  BONUS_GAME_TOKEN_EXCHANGE_PERSONAL: 10,
  BONUS_GAME_TOKEN_EXCHANGE_PARTNERS: 11,
  BONUS_GAME_TOKEN_PROMOTION_TOP_MATRIX: 12,
  BONUS_GAME_TOKEN_PROMOTION_BINARY: 13,
  BONUS_GAME_TOKEN_PROMOTION_MATRIX: 14
};

/**
 * optional Id kind_id = 1;
 * @return {!proto.mlmbox.types.Bonus.Kind.Id}
 */
proto.mlmbox.types.Bonus.Kind.prototype.getKindId = function() {
  return /** @type {!proto.mlmbox.types.Bonus.Kind.Id} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mlmbox.types.Bonus.Kind.Id} value
 * @return {!proto.mlmbox.types.Bonus.Kind} returns this
 */
proto.mlmbox.types.Bonus.Kind.prototype.setKindId = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
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
proto.mlmbox.types.Bonus.LevelPercent.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.LevelPercent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus.LevelPercent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.LevelPercent.toObject = function(includeInstance, msg) {
  var f, obj = {
    level: jspb.Message.getFieldWithDefault(msg, 1, 0),
    percent: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.mlmbox.types.Bonus.LevelPercent}
 */
proto.mlmbox.types.Bonus.LevelPercent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus.LevelPercent;
  return proto.mlmbox.types.Bonus.LevelPercent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus.LevelPercent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus.LevelPercent}
 */
proto.mlmbox.types.Bonus.LevelPercent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPercent(value);
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
proto.mlmbox.types.Bonus.LevelPercent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.LevelPercent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus.LevelPercent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.LevelPercent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getPercent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional uint32 level = 1;
 * @return {number}
 */
proto.mlmbox.types.Bonus.LevelPercent.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Bonus.LevelPercent} returns this
 */
proto.mlmbox.types.Bonus.LevelPercent.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string percent = 2;
 * @return {string}
 */
proto.mlmbox.types.Bonus.LevelPercent.prototype.getPercent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.types.Bonus.LevelPercent} returns this
 */
proto.mlmbox.types.Bonus.LevelPercent.prototype.setPercent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.mlmbox.types.Bonus.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    bonusId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    earnedValue: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.mlmbox.types.Bonus.Value}
 */
proto.mlmbox.types.Bonus.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus.Value;
  return proto.mlmbox.types.Bonus.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus.Value}
 */
proto.mlmbox.types.Bonus.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.mlmbox.types.Bonus.Kind.Id} */ (reader.readEnum());
      msg.setBonusId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEarnedValue(value);
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
proto.mlmbox.types.Bonus.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBonusId();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getEarnedValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
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
proto.mlmbox.types.Bonus.Value.Asset.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.Value.Asset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus.Value.Asset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Value.Asset.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    value: (f = msg.getValue()) && proto.mlmbox.types.Bonus.Value.toObject(includeInstance, f)
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
 * @return {!proto.mlmbox.types.Bonus.Value.Asset}
 */
proto.mlmbox.types.Bonus.Value.Asset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus.Value.Asset;
  return proto.mlmbox.types.Bonus.Value.Asset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus.Value.Asset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus.Value.Asset}
 */
proto.mlmbox.types.Bonus.Value.Asset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAssetId(value);
      break;
    case 2:
      var value = new proto.mlmbox.types.Bonus.Value;
      reader.readMessage(value,proto.mlmbox.types.Bonus.Value.deserializeBinaryFromReader);
      msg.setValue(value);
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
proto.mlmbox.types.Bonus.Value.Asset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.Value.Asset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus.Value.Asset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Value.Asset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mlmbox.types.Bonus.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 asset_id = 1;
 * @return {number}
 */
proto.mlmbox.types.Bonus.Value.Asset.prototype.getAssetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Bonus.Value.Asset} returns this
 */
proto.mlmbox.types.Bonus.Value.Asset.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Value value = 2;
 * @return {?proto.mlmbox.types.Bonus.Value}
 */
proto.mlmbox.types.Bonus.Value.Asset.prototype.getValue = function() {
  return /** @type{?proto.mlmbox.types.Bonus.Value} */ (
    jspb.Message.getWrapperField(this, proto.mlmbox.types.Bonus.Value, 2));
};


/**
 * @param {?proto.mlmbox.types.Bonus.Value|undefined} value
 * @return {!proto.mlmbox.types.Bonus.Value.Asset} returns this
*/
proto.mlmbox.types.Bonus.Value.Asset.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.types.Bonus.Value.Asset} returns this
 */
proto.mlmbox.types.Bonus.Value.Asset.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Bonus.Value.Asset.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Kind.Id bonus_id = 1;
 * @return {!proto.mlmbox.types.Bonus.Kind.Id}
 */
proto.mlmbox.types.Bonus.Value.prototype.getBonusId = function() {
  return /** @type {!proto.mlmbox.types.Bonus.Kind.Id} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.mlmbox.types.Bonus.Kind.Id} value
 * @return {!proto.mlmbox.types.Bonus.Value} returns this
 */
proto.mlmbox.types.Bonus.Value.prototype.setBonusId = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string earned_value = 2;
 * @return {string}
 */
proto.mlmbox.types.Bonus.Value.prototype.getEarnedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.types.Bonus.Value} returns this
 */
proto.mlmbox.types.Bonus.Value.prototype.setEarnedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.mlmbox.types.Bonus.Summary.repeatedFields_ = [2];



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
proto.mlmbox.types.Bonus.Summary.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.Summary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus.Summary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Summary.toObject = function(includeInstance, msg) {
  var f, obj = {
    earnedValue: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesList: jspb.Message.toObjectList(msg.getValuesList(),
    proto.mlmbox.types.Bonus.Value.toObject, includeInstance)
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
 * @return {!proto.mlmbox.types.Bonus.Summary}
 */
proto.mlmbox.types.Bonus.Summary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus.Summary;
  return proto.mlmbox.types.Bonus.Summary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus.Summary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus.Summary}
 */
proto.mlmbox.types.Bonus.Summary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEarnedValue(value);
      break;
    case 2:
      var value = new proto.mlmbox.types.Bonus.Value;
      reader.readMessage(value,proto.mlmbox.types.Bonus.Value.deserializeBinaryFromReader);
      msg.addValues(value);
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
proto.mlmbox.types.Bonus.Summary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.Summary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus.Summary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Summary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEarnedValue();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.mlmbox.types.Bonus.Value.serializeBinaryToWriter
    );
  }
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
proto.mlmbox.types.Bonus.Summary.Asset.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.types.Bonus.Summary.Asset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.types.Bonus.Summary.Asset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Summary.Asset.toObject = function(includeInstance, msg) {
  var f, obj = {
    assetId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    summary: (f = msg.getSummary()) && proto.mlmbox.types.Bonus.Summary.toObject(includeInstance, f)
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
 * @return {!proto.mlmbox.types.Bonus.Summary.Asset}
 */
proto.mlmbox.types.Bonus.Summary.Asset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.types.Bonus.Summary.Asset;
  return proto.mlmbox.types.Bonus.Summary.Asset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.types.Bonus.Summary.Asset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.types.Bonus.Summary.Asset}
 */
proto.mlmbox.types.Bonus.Summary.Asset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAssetId(value);
      break;
    case 2:
      var value = new proto.mlmbox.types.Bonus.Summary;
      reader.readMessage(value,proto.mlmbox.types.Bonus.Summary.deserializeBinaryFromReader);
      msg.setSummary(value);
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
proto.mlmbox.types.Bonus.Summary.Asset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.types.Bonus.Summary.Asset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.types.Bonus.Summary.Asset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.types.Bonus.Summary.Asset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAssetId();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getSummary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.mlmbox.types.Bonus.Summary.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint32 asset_id = 1;
 * @return {number}
 */
proto.mlmbox.types.Bonus.Summary.Asset.prototype.getAssetId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.types.Bonus.Summary.Asset} returns this
 */
proto.mlmbox.types.Bonus.Summary.Asset.prototype.setAssetId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Summary summary = 2;
 * @return {?proto.mlmbox.types.Bonus.Summary}
 */
proto.mlmbox.types.Bonus.Summary.Asset.prototype.getSummary = function() {
  return /** @type{?proto.mlmbox.types.Bonus.Summary} */ (
    jspb.Message.getWrapperField(this, proto.mlmbox.types.Bonus.Summary, 2));
};


/**
 * @param {?proto.mlmbox.types.Bonus.Summary|undefined} value
 * @return {!proto.mlmbox.types.Bonus.Summary.Asset} returns this
*/
proto.mlmbox.types.Bonus.Summary.Asset.prototype.setSummary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.mlmbox.types.Bonus.Summary.Asset} returns this
 */
proto.mlmbox.types.Bonus.Summary.Asset.prototype.clearSummary = function() {
  return this.setSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.mlmbox.types.Bonus.Summary.Asset.prototype.hasSummary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string earned_value = 1;
 * @return {string}
 */
proto.mlmbox.types.Bonus.Summary.prototype.getEarnedValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.types.Bonus.Summary} returns this
 */
proto.mlmbox.types.Bonus.Summary.prototype.setEarnedValue = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Value values = 2;
 * @return {!Array<!proto.mlmbox.types.Bonus.Value>}
 */
proto.mlmbox.types.Bonus.Summary.prototype.getValuesList = function() {
  return /** @type{!Array<!proto.mlmbox.types.Bonus.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.mlmbox.types.Bonus.Value, 2));
};


/**
 * @param {!Array<!proto.mlmbox.types.Bonus.Value>} value
 * @return {!proto.mlmbox.types.Bonus.Summary} returns this
*/
proto.mlmbox.types.Bonus.Summary.prototype.setValuesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.mlmbox.types.Bonus.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.mlmbox.types.Bonus.Value}
 */
proto.mlmbox.types.Bonus.Summary.prototype.addValues = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.mlmbox.types.Bonus.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.mlmbox.types.Bonus.Summary} returns this
 */
proto.mlmbox.types.Bonus.Summary.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};


goog.object.extend(exports, proto.mlmbox.types);
