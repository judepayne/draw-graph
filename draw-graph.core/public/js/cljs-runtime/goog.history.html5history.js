goog.provide("goog.history.Html5History");
goog.provide("goog.history.Html5History.TokenTransformer");
goog.require("goog.asserts");
goog.require("goog.events");
goog.require("goog.events.EventTarget");
goog.require("goog.events.EventType");
goog.require("goog.history.Event");
/**
 @final
 @constructor
 @extends {goog.events.EventTarget}
 @param {Window=} opt_win
 @param {goog.history.Html5History.TokenTransformer=} opt_transformer
 */
goog.history.Html5History = function(opt_win, opt_transformer) {
  goog.events.EventTarget.call(this);
  goog.asserts.assert(goog.history.Html5History.isSupported(opt_win), "HTML5 history is not supported.");
  /** @private @type {Window} */ this.window_ = opt_win || window;
  /** @private @type {goog.history.Html5History.TokenTransformer} */ this.transformer_ = opt_transformer || null;
  /** @private @type {?string} */ this.lastFragment_ = null;
  goog.events.listen(this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false, this);
  goog.events.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);
};
goog.inherits(goog.history.Html5History, goog.events.EventTarget);
/**
 @param {Window=} opt_win
 @return {boolean}
 */
goog.history.Html5History.isSupported = function(opt_win) {
  var win = opt_win || window;
  return !!(win.history && win.history.pushState);
};
/** @private @type {boolean} */ goog.history.Html5History.prototype.enabled_ = false;
/** @private @type {boolean} */ goog.history.Html5History.prototype.useFragment_ = true;
/** @private @type {string} */ goog.history.Html5History.prototype.pathPrefix_ = "/";
/**
 @param {boolean} enable
 */
goog.history.Html5History.prototype.setEnabled = function(enable) {
  if (enable == this.enabled_) {
    return;
  }
  this.enabled_ = enable;
  if (enable) {
    this.dispatchEvent(new goog.history.Event(this.getToken(), false));
  }
};
/**
 @return {string}
 */
goog.history.Html5History.prototype.getToken = function() {
  if (this.useFragment_) {
    return goog.asserts.assertString(this.getFragment_());
  } else {
    return this.transformer_ ? this.transformer_.retrieveToken(this.pathPrefix_, this.window_.location) : this.window_.location.pathname.substr(this.pathPrefix_.length);
  }
};
/**
 @param {string} token
 @param {string=} opt_title
 */
goog.history.Html5History.prototype.setToken = function(token, opt_title) {
  if (token == this.getToken()) {
    return;
  }
  this.window_.history.pushState(null, opt_title || this.window_.document.title || "", this.getUrl_(token));
  this.dispatchEvent(new goog.history.Event(token, false));
};
/**
 @param {string} token
 @param {string=} opt_title
 */
goog.history.Html5History.prototype.replaceToken = function(token, opt_title) {
  this.window_.history.replaceState(null, opt_title || this.window_.document.title || "", this.getUrl_(token));
  this.dispatchEvent(new goog.history.Event(token, false));
};
/** @override */ goog.history.Html5History.prototype.disposeInternal = function() {
  goog.events.unlisten(this.window_, goog.events.EventType.POPSTATE, this.onHistoryEvent_, false, this);
  if (this.useFragment_) {
    goog.events.unlisten(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);
  }
};
/**
 @param {boolean} useFragment
 */
goog.history.Html5History.prototype.setUseFragment = function(useFragment) {
  if (this.useFragment_ != useFragment) {
    if (useFragment) {
      goog.events.listen(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);
    } else {
      goog.events.unlisten(this.window_, goog.events.EventType.HASHCHANGE, this.onHistoryEvent_, false, this);
    }
    this.useFragment_ = useFragment;
  }
};
/**
 @param {string} pathPrefix
 */
goog.history.Html5History.prototype.setPathPrefix = function(pathPrefix) {
  this.pathPrefix_ = pathPrefix;
};
/**
 @return {string}
 */
goog.history.Html5History.prototype.getPathPrefix = function() {
  return this.pathPrefix_;
};
/**
 @private
 @return {?string}
 */
goog.history.Html5History.prototype.getFragment_ = function() {
  if (this.useFragment_) {
    var loc = this.window_.location.href;
    var index = loc.indexOf("#");
    return index < 0 ? "" : loc.substring(index + 1);
  } else {
    return null;
  }
};
/**
 @private
 @param {string} token
 @return {string}
 */
goog.history.Html5History.prototype.getUrl_ = function(token) {
  if (this.useFragment_) {
    return "#" + token;
  } else {
    return this.transformer_ ? this.transformer_.createUrl(token, this.pathPrefix_, this.window_.location) : this.pathPrefix_ + token + this.window_.location.search;
  }
};
/**
 @private
 @param {goog.events.BrowserEvent} e
 */
goog.history.Html5History.prototype.onHistoryEvent_ = function(e) {
  if (this.enabled_) {
    var fragment = this.getFragment_();
    if (e.type == goog.events.EventType.POPSTATE || fragment != this.lastFragment_) {
      this.lastFragment_ = fragment;
      this.dispatchEvent(new goog.history.Event(this.getToken(), true));
    }
  }
};
/** @interface */ goog.history.Html5History.TokenTransformer = function() {
};
/**
 @param {string} pathPrefix
 @param {Location} location
 @return {string}
 */
goog.history.Html5History.TokenTransformer.prototype.retrieveToken = function(pathPrefix, location) {
};
/**
 @param {string} token
 @param {string} pathPrefix
 @param {Location} location
 @return {string}
 */
goog.history.Html5History.TokenTransformer.prototype.createUrl = function(token, pathPrefix, location) {
};

//# sourceMappingURL=goog.history.html5history.js.map
