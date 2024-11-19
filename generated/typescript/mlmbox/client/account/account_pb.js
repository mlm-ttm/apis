// source: mlmbox/client/account/account.proto
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

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
var mlmbox_types_account_pb = require('../../../mlmbox/types/account_pb.js');
goog.object.extend(proto, mlmbox_types_account_pb);
var mlmbox_types_locale_pb = require('../../../mlmbox/types/locale_pb.js');
goog.object.extend(proto, mlmbox_types_locale_pb);
goog.exportSymbol('proto.mlmbox.client.account.RemoteVerifyRequest', null, global);
goog.exportSymbol('proto.mlmbox.client.account.RemoteVerifyResponse', null, global);
goog.exportSymbol('proto.mlmbox.client.account.RemoteViewRequest', null, global);
goog.exportSymbol('proto.mlmbox.client.account.RemoteViewResponse', null, global);
goog.exportSymbol('proto.mlmbox.client.account.SetLoginRequest', null, global);
goog.exportSymbol('proto.mlmbox.client.account.SetProfileRequest', null, global);
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
proto.mlmbox.client.account.SetLoginRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.account.SetLoginRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.account.SetLoginRequest.displayName = 'proto.mlmbox.client.account.SetLoginRequest';
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
proto.mlmbox.client.account.SetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.account.SetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.account.SetProfileRequest.displayName = 'proto.mlmbox.client.account.SetProfileRequest';
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
proto.mlmbox.client.account.RemoteViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.account.RemoteViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.account.RemoteViewRequest.displayName = 'proto.mlmbox.client.account.RemoteViewRequest';
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
proto.mlmbox.client.account.RemoteVerifyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.account.RemoteVerifyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.account.RemoteVerifyRequest.displayName = 'proto.mlmbox.client.account.RemoteVerifyRequest';
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
proto.mlmbox.client.account.RemoteViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.account.RemoteViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.account.RemoteViewResponse.displayName = 'proto.mlmbox.client.account.RemoteViewResponse';
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
proto.mlmbox.client.account.RemoteVerifyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.mlmbox.client.account.RemoteVerifyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.mlmbox.client.account.RemoteVerifyResponse.displayName = 'proto.mlmbox.client.account.RemoteVerifyResponse';
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
proto.mlmbox.client.account.SetLoginRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.account.SetLoginRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.account.SetLoginRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.SetLoginRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    login: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.mlmbox.client.account.SetLoginRequest}
 */
proto.mlmbox.client.account.SetLoginRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.account.SetLoginRequest;
  return proto.mlmbox.client.account.SetLoginRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.account.SetLoginRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.account.SetLoginRequest}
 */
proto.mlmbox.client.account.SetLoginRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLogin(value);
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
proto.mlmbox.client.account.SetLoginRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.account.SetLoginRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.account.SetLoginRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.SetLoginRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogin();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string login = 1;
 * @return {string}
 */
proto.mlmbox.client.account.SetLoginRequest.prototype.getLogin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.SetLoginRequest} returns this
 */
proto.mlmbox.client.account.SetLoginRequest.prototype.setLogin = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.mlmbox.client.account.SetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.account.SetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.account.SetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.SetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.mlmbox.client.account.SetProfileRequest}
 */
proto.mlmbox.client.account.SetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.account.SetProfileRequest;
  return proto.mlmbox.client.account.SetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.account.SetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.account.SetProfileRequest}
 */
proto.mlmbox.client.account.SetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
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
proto.mlmbox.client.account.SetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.account.SetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.account.SetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.SetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string first_name = 1;
 * @return {string}
 */
proto.mlmbox.client.account.SetProfileRequest.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.SetProfileRequest} returns this
 */
proto.mlmbox.client.account.SetProfileRequest.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string last_name = 2;
 * @return {string}
 */
proto.mlmbox.client.account.SetProfileRequest.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.SetProfileRequest} returns this
 */
proto.mlmbox.client.account.SetProfileRequest.prototype.setLastName = function(value) {
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
proto.mlmbox.client.account.RemoteViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.account.RemoteViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.account.RemoteViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secretCode: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.mlmbox.client.account.RemoteViewRequest}
 */
proto.mlmbox.client.account.RemoteViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.account.RemoteViewRequest;
  return proto.mlmbox.client.account.RemoteViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.account.RemoteViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.account.RemoteViewRequest}
 */
proto.mlmbox.client.account.RemoteViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretCode(value);
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
proto.mlmbox.client.account.RemoteViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.account.RemoteViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.account.RemoteViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecretCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string secret_code = 1;
 * @return {string}
 */
proto.mlmbox.client.account.RemoteViewRequest.prototype.getSecretCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.RemoteViewRequest} returns this
 */
proto.mlmbox.client.account.RemoteViewRequest.prototype.setSecretCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.mlmbox.client.account.RemoteVerifyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.account.RemoteVerifyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.account.RemoteVerifyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteVerifyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    secretCode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.mlmbox.client.account.RemoteVerifyRequest}
 */
proto.mlmbox.client.account.RemoteVerifyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.account.RemoteVerifyRequest;
  return proto.mlmbox.client.account.RemoteVerifyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.account.RemoteVerifyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.account.RemoteVerifyRequest}
 */
proto.mlmbox.client.account.RemoteVerifyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretCode(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
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
proto.mlmbox.client.account.RemoteVerifyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.account.RemoteVerifyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.account.RemoteVerifyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteVerifyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecretCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string secret_code = 1;
 * @return {string}
 */
proto.mlmbox.client.account.RemoteVerifyRequest.prototype.getSecretCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.RemoteVerifyRequest} returns this
 */
proto.mlmbox.client.account.RemoteVerifyRequest.prototype.setSecretCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool verified = 2;
 * @return {boolean}
 */
proto.mlmbox.client.account.RemoteVerifyRequest.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mlmbox.client.account.RemoteVerifyRequest} returns this
 */
proto.mlmbox.client.account.RemoteVerifyRequest.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.mlmbox.client.account.RemoteViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.account.RemoteViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.account.RemoteViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userAgent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    expiredAt: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.mlmbox.client.account.RemoteViewResponse}
 */
proto.mlmbox.client.account.RemoteViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.account.RemoteViewResponse;
  return proto.mlmbox.client.account.RemoteViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.account.RemoteViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.account.RemoteViewResponse}
 */
proto.mlmbox.client.account.RemoteViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserAgent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpAddress(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setExpiredAt(value);
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
proto.mlmbox.client.account.RemoteViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.account.RemoteViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.account.RemoteViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserAgent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getExpiredAt();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string user_agent = 1;
 * @return {string}
 */
proto.mlmbox.client.account.RemoteViewResponse.prototype.getUserAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.RemoteViewResponse} returns this
 */
proto.mlmbox.client.account.RemoteViewResponse.prototype.setUserAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ip_address = 2;
 * @return {string}
 */
proto.mlmbox.client.account.RemoteViewResponse.prototype.getIpAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.RemoteViewResponse} returns this
 */
proto.mlmbox.client.account.RemoteViewResponse.prototype.setIpAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 expired_at = 3;
 * @return {number}
 */
proto.mlmbox.client.account.RemoteViewResponse.prototype.getExpiredAt = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.mlmbox.client.account.RemoteViewResponse} returns this
 */
proto.mlmbox.client.account.RemoteViewResponse.prototype.setExpiredAt = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
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
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.mlmbox.client.account.RemoteVerifyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.mlmbox.client.account.RemoteVerifyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteVerifyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userAgent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.mlmbox.client.account.RemoteVerifyResponse}
 */
proto.mlmbox.client.account.RemoteVerifyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.mlmbox.client.account.RemoteVerifyResponse;
  return proto.mlmbox.client.account.RemoteVerifyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.mlmbox.client.account.RemoteVerifyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.mlmbox.client.account.RemoteVerifyResponse}
 */
proto.mlmbox.client.account.RemoteVerifyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserAgent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpAddress(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
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
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.mlmbox.client.account.RemoteVerifyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.mlmbox.client.account.RemoteVerifyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.mlmbox.client.account.RemoteVerifyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserAgent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string user_agent = 1;
 * @return {string}
 */
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.getUserAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.RemoteVerifyResponse} returns this
 */
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.setUserAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ip_address = 2;
 * @return {string}
 */
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.getIpAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.mlmbox.client.account.RemoteVerifyResponse} returns this
 */
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.setIpAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool verified = 3;
 * @return {boolean}
 */
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.mlmbox.client.account.RemoteVerifyResponse} returns this
 */
proto.mlmbox.client.account.RemoteVerifyResponse.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


goog.object.extend(exports, proto.mlmbox.client.account);
