/**
 * lovely.io 'core' module v1.4.0
 *
 * Copyright (C) 2012 Nikolay Nemshilov
 */
(function(e){var t=this,n,r,i,s,o,u,a,f,l,c,Class,Events,h,p,Hash,d,List,v,Lovely,m,Options,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D={}.hasOwnProperty;Lovely=function(){var e,t,r,i,s,o,u,a,f,l,c,h,p,d,v,m;e=n(arguments),i=A(e[0])?e.shift():null,l=L(e[0])?e.shift():{},a=N(e[0])?e.shift():[],t=C(e[0])?e.shift():function(){},"hostUrl"in l||(l.hostUrl=Lovely.hostUrl||x()),"baseUrl"in l||(l.baseUrl=Lovely.baseUrl||l.hostUrl),"waitSeconds"in l||(l.waitSeconds=Lovely.waitSeconds),l.hostUrl[l.hostUrl.length-1]==="/"||(l.hostUrl+="/"),l.baseUrl[l.baseUrl.length-1]==="/"||(l.baseUrl+="/");for(o=p=0,v=a.length;p<v;o=++p)f=a[o],f in Lovely.bundle&&(a[o]=""+f+"-"+Lovely.bundle[f]);r=O(a,t,i);if(!r()){M.push(r),s=document.getElementsByTagName("head")[0];for(o=d=0,m=a.length;d<m;o=++d)u=a[o],h=(u[0]==="."?l.baseUrl:l.hostUrl)+u+".js",u=a[o]=a[o].replace(/^[\.\/]+/,""),!T(u)&&!T(u,Lovely.loading)&&u.indexOf("~")===-1&&(c=document.createElement("script"),c.src=h.replace(/([^:])\/\//g,"$1/"),c.async=!0,c.type="text/javascript",c.onload=b,s.appendChild(c),Lovely.loading[u]=c)}},M=[],b=function(){return t.setTimeout(function(){var e,t,n,r,i;e=[];for(t=r=0,i=M.length;r<i;t=++r)n=M[t],n()||e.push(n);e.length!==M.length&&(M=e,b())},0)},O=function(e,n,r){return function(){var i,s,o,u,a;s=[];for(u=0,a=e.length;u<a;u++){i=e[u];if(!(i=T(i)))return!1;s.push(i)}return(o=n.apply(t,s))&&r&&(Lovely.modules[r]=o,delete Lovely.loading[r],b()),!0}},T=function(e,t){var n,r,i,s,o;t=t||Lovely.modules,e=e.replace(/~/g,""),s=(e.match(/\-\d+\.\d+\.\d+.*$/)||[""])[0],i=e.substr(0,e.length-s.length),s=s.substr(1);if(!(e=t[e])){o=[];for(n in t)(r=n.match(/^(.+?)-(\d+\.\d+\.\d+.*?)$/))&&r[1]===i&&o.push(n);e=t[o.sort()[o.length-1]]}return e},x=function(){var e,n,r,i,s,o;if(t.document){i=document.getElementsByTagName("script"),n=/^(.*?\/?)core(-.+)?\.js/;for(s=0,o=i.length;s<o;s++){r=i[s];if(e=(r.getAttribute("src")||"").match(n))return e[1]}}return Lovely.hostUrl},m=Object.prototype.toString,f=Array.prototype.slice,h=Function.prototype.bind||function(){var e,t,r;return e=n(arguments),t=e.shift(),r=this,function(){return r.apply(t,e.concat(n(arguments)))}},g=String.prototype.trim||function(){var e,t,n;n=this.replace(/^\s\s*/,""),e=n.length,t=/\s/;while(t.test(n.charAt(--e)));return n.slice(0,e+1)},n=function(e){return f.call(e,0)},d=function(e){return new List(e)},p=function(e){return new Hash(e)},S=function(e,t){t==null&&(t={});var n;for(n in t){if(!D.call(t,n))continue;e[n]=t[n]}return e},y=function(){var e;return e=n(arguments),h.apply(e.shift(),e)},_=function(e){return g.call(e)},A=function(e){return typeof e==="string"},k=function(e){return typeof e==="number"&&!isNaN(e)},C=function(e){return typeof e==="function"&&m.call(e)!=="[object RegExp]"},N=function(e){return m.call(e)==="[object Array]"||e instanceof List},L=function(e){return m.call(e)==="[object Object]"},w=function(e){return N(e)?e:[e]},Class=function(t,n){var r,i,s,o;C(t)||(n=t,t=Class),n||(n={}),D.call(n,"constructor")?r=n.constructor:r=function(){return this.$super===e?this:this.$super.apply(this,arguments)},i=function(){},i.prototype=t.prototype,r.prototype=new i;if(t!==Class){for(s in t){if(!D.call(t,s))continue;o=t[s],r[s]=o}r.prototype.$super=function(){return this.$super=t.prototype.$super,t.apply(this,arguments)},C(t.prototype.whenInherited)&&t.prototype.whenInherited.call(t,r)}return r.__super__=t,r.prototype.constructor=r,(r.include=Class.include).apply(r,w(n.include||[])),(r.extend=Class.extend).apply(r,w(n.extend||[])),r.inherit=Class.inherit,delete n.extend,delete n.include,delete n.constructor,r.include(n)},S(Class,{include:function(){var e,t,n,r,i,s,o;for(s=0,o=arguments.length;s<o;s++){n=arguments[s],n||(n={});for(e in n){if(!(i=this.prototype[e]||!1)){r=this.__super__;while(r){if(e in r.prototype){C(r.prototype[e])&&(i=r.prototype[e]);break}r=r.__super__}}t=n[e],this.prototype[e]=function(e,t){return t?function(){return this.$super=t,e.apply(this,arguments)}:e}(t,i)}}return this},extend:function(){var e,t,n;for(t=0,n=arguments.length;t<n;t++)e=arguments[t],S(this,e);return this},inherit:function(e){return new Class(this,e)}}),List=new Class(Array,{constructor:function List(t){return t!==e&&c.apply(this,[0,0].concat(t)),this},slice:function(){return new this.constructor(f.apply(this,arguments))},concat:function(e){return new this.constructor(n(this).concat(n(e)))},forEach:function(){return v(s,this,arguments),this},map:function(){return new List(v(o,this,arguments))},filter:function(){return new this.constructor(v(i,this,arguments))},reject:function(){return new this.constructor(v(a,this,arguments))},some:function(){return v(l,this,arguments)},every:function(){return v(r,this,arguments)},toArray:function(){return n(this)},toString:function(){return"#<List ["+n(this)+"]>"}}),u=Array.prototype,f=u.slice,c=u.splice,s=u.forEach,o=u.map,i=u.filter,a=function(e,t){return i.call(this,function(){return!e.apply(t,arguments)})},l=u.some,r=u.every,v=function(e,t,r){var i,s;return typeof r[0]=="string"&&(s=n(r),i=s.shift(),t.length!==0&&typeof t[0][i]=="function"?r=[function(e){return e[i].apply(e,s)}]:r=[function(e){return e[i]}]),e.apply(t,r)},Hash=new Class({_:null,constructor:function Hash(e){return this._=e||{},this}}),Hash.include=function(e){var t,r;Class.include.apply(Hash,arguments),r=[];for(t in e)r.push(function(e){return Hash[e]=function(){var t,r;return t=n(arguments),r=new Hash(t.shift()),t=r[e].apply(r,t),t instanceof Hash&&(t=t._),t}}(t));return r},Hash.include({keys:function(){var e,t,n;t=this._,n=[];for(e in t){if(!D.call(t,e))continue;n.push(e)}return n},values:function(){var e,t,n,r;n=this._,r=[];for(e in n){if(!D.call(n,e))continue;t=n[e],r.push(t)}return r},empty:function(){var e,t;t=this._;for(e in t){if(!D.call(t,e))continue;return!1}return!0},clone:function(){return this.merge()},forEach:function(e,t){var n,r,i;r=this._;for(n in r){if(!D.call(r,n))continue;i=r[n],e.call(t,n,i,r)}return this},map:function(e,t){var n,r,i,s;r=this._,i=[];for(n in r){if(!D.call(r,n))continue;s=r[n],i.push(e.call(t,n,s,r))}return i},filter:function(e,t){var n,r,i,s;i=this._,n={};for(r in i){if(!D.call(i,r))continue;s=i[r],e.call(t,r,s,i)&&(n[r]=i[r])}return new Hash(n)},reject:function(e,t){var n,r,i,s;i=this._,n={};for(r in i){if(!D.call(i,r))continue;s=i[r],e.call(t,r,s,i)||(n[r]=i[r])}return new Hash(n)},merge:function(){var e,t,r,i,s;e=n(arguments),t={},e.unshift(this._);while(e.length>0){i=e.shift(),i instanceof Hash&&(i=i._);for(r in i){if(!D.call(i,r))continue;s=i[r],t[r]=!L(s)||s instanceof Class?i[r]:Hash.merge(r in t?t[r]:{},s)}}return new Hash(t)},toObject:function(){return this._}}),Events={_listeners:null,on:function(){var e,t,n,r,i,s,o,u,a;e=f.call(arguments,2),i=arguments[0],n=arguments[1],t=!1,typeof n==="string"&&(n=this[n],t=!0),s=this._listeners===null?this._listeners=[]:this._listeners;if(typeof i==="string"){a=i.split(",");for(o=0,u=a.length;o<u;o++)r=a[o],s.push({e:r,c:n,a:e,n:t})}else if(typeof i==="object")for(r in i)this.on(r,i[r]);return this},no:function(){var t,n,r,i,s,o,u,a,l;t=f.call(arguments,2),i=arguments[0],n=arguments[1],typeof n==="string"&&(n=this[n]),o=this._listeners===null?this._listeners=[]:this._listeners;switch(typeof i){case"string":l=i.split(",");for(u=0,a=l.length;u<a;u++){r=l[u],s=0;while(s<o.length)o[s].e===r&&(o[s].c===n||n===e)&&o.splice(s--,1),s++}break;case"function":s=0;while(s<o.length)o[s].c===i&&o.splice(s--,1),s++;break;case"object":for(r in i)this.no(r,i[r])}return this},ones:function(){var t,n,r,i,s,o,u,a,l,c,h,p,d,v;u=0,t=f.call(arguments,2),s=arguments[0],n=arguments[1],typeof n==="string"&&(n=this[n]),o=this._listeners===null?this._listeners=[]:this._listeners;switch(typeof s){case"string":v=s.split(",");for(a=0,h=v.length;a<h;a++){i=v[a];for(l=0,p=o.length;l<p;l++)r=o[l],u|=r.e===i&&(r.c===n||n===e)}break;case"function":for(c=0,d=o.length;c<d;c++)r=o[c],u|=r.c===s;break;case"object":for(i in s)u|=this.ones(i,s[i])}return u===1},emit:function(){var e,t,r,i,s,o;e=n(arguments),r=e.shift(),o=this._listeners||[];for(i=0,s=o.length;i<s;i++)t=o[i],t.e===r&&t.c.apply(this,t.a.concat(e));return this}},Options={options:{},setOptions:function(e){var t,n;n=this.constructor,t={};while(n){if("Options"in n){t=n.Options;break}n=n.__super__}return this.options=Hash.merge(t,e),this}},E=S(Lovely,{version:"1.4.0",modules:{},loading:{},baseUrl:"",hostUrl:"",module:T,bundle:{},A:n,L:d,H:p,ext:S,bind:y,trim:_,isString:A,isNumber:k,isFunction:C,isArray:N,isObject:L,Class:Class,List:List,Hash:Hash,Events:Events,Options:Options}),Lovely.modules["core-"+Lovely.version]=Lovely,t.Lovely=Lovely}).apply(this)
/**
 * lovely.io 'dom' module v1.4.2
 *
 * Copyright (C) 2013 Nikolay Nemshilov
 */
Lovely("dom-1.4.2", [], function() {
  var undefined = [][0];
  var global = this;
  var exports = {};
  
  var $, A, Browser, Class, Document, Element, Element_clean_style, Element_computed_styles, Element_create_fragment, Element_events, Element_fragment, Element_insert, Element_make_listeners, Element_parse_style, Element_read_styles, Element_recursively_collect, Element_tmp_cont, Element_wraps, Event, Events_delegation, Form, HTML, Input, L, NodeList, Ready_documents, Style, UID_KEY, UID_NUM, Window, Wrapper, Wrapper_Cache, bind, camelize, core, current_Document, dasherize, delegation_listeners, dimensions_hash, document, elements_cache, ensure_array, exports, ext, extract_scripts, focusio_boobler, global_eval, isArray, isElement, isObject, isString, mouseio_activate, mouseio_emit, mouseio_handler, mouseio_inactive, mouseio_index, mouseio_reset, trim, uid, window, wrap;
  
  core = Lovely.module('core');
  
  A = core.A;
  
  L = core.L;
  
  ext = core.ext;
  
  trim = core.trim;
  
  bind = core.bind;
  
  Class = core.Class;
  
  isArray = core.isArray;
  
  isObject = core.isObject;
  
  isString = core.isString;
  
  window = global;
  
  document = window.document;
  
  HTML = document.documentElement;
  
  isElement = function(value) {
    return value != null && value.nodeType === 1;
  };
  
  camelize = function(string) {
    if (string.indexOf('-') === -1) {
      return string;
    } else {
      return string.replace(/\-([a-z])/g, function(match, letter) {
        return letter.toUpperCase();
      });
    }
  };
  
  dasherize = function(string) {
    return string.replace(/([a-z\d])([A-Z]+)/g, '$1-$2').toLowerCase();
  };
  
  dimensions_hash = function(args) {
    var hash;
    hash = {};
    if (args.length === 1 && isObject(args[0])) {
      hash = args[0];
    } else {
      if (args[0] !== null) {
        hash.x = args[0];
      }
      if (!(args[1] === null || args[1] === undefined)) {
        hash.y = args[1];
      }
    }
    return hash;
  };
  
  extract_scripts = function(content) {
    var scripts;
    scripts = "";
    content = content.replace(/<script[^>]*>([\s\S]*?)<\/script>/img, function(match, source) {
      scripts += source + "\n";
      return '';
    });
    return [content, scripts];
  };
  
  global_eval = function(script) {
    if (script) {
      new Element('script', {
        text: script
      }).insertTo(HTML);
    }
  };
  
  if ('execScript' in window) {
    global_eval = function(script) {
      if (script) {
        window.execScript(script);
      }
    };
  }
  
  ensure_array = function(value) {
    if (isArray(value)) {
      return value;
    } else {
      return [value];
    }
  };
  
  UID_KEY = "__lovely_dom_uid_" + (new Date().getTime());
  
  UID_NUM = 1;
  
  uid = function(node) {
    return node[UID_KEY] || (node[UID_KEY] = UID_NUM++);
  };
  
  wrap = function(value) {
    var key;
    if (!(value == null || value instanceof Wrapper)) {
      key = value[UID_KEY];
      if (key && key in Wrapper_Cache) {
        value = Wrapper_Cache[key];
      } else if (value.nodeType === 1) {
        value = new Element(value);
      } else if (value.nodeType === 9) {
        value = new Document(value);
      } else if (value.target != null) {
        value = new Event(value);
      } else if (value.window != null && value.window === value.window.window) {
        value = new Window(value);
      }
    }
    return value;
  };
  
  Browser = navigator.userAgent;
  
  if ('attachEvent' in document && !/Opera/.test(Browser)) {
    Browser = 'IE';
  } else if (/Opera/.test(Browser)) {
    Browser = 'Opera';
  } else if (/Gecko/.test(Browser) && !/KHTML/.test(Browser)) {
    Browser = 'Gecko';
  } else if (/Apple.*Mobile.*Safari/.test(Browser)) {
    Browser = 'MobileSafari';
  } else if (/Konqueror/.test(Browser)) {
    Browser = 'Konqueror';
  } else if (/AppleWebKit/.test(Browser)) {
    Browser = 'WebKit';
  } else {
    Browser = 'Unknown';
  }
  
  NodeList = new Class(core.List, {
    constructor: function NodeList(raw_list, raw_only) {
      if (raw_only === true) {
        for (var i=0, l=this.length=raw_list.length, key; i < l; i++) {
          this[i] = Wrapper_Cache[raw_list[i][UID_KEY]] || new Element(raw_list[i]);
        };
  
      } else {
        if (raw_list === undefined) {
          raw_list = [];
        }
        for (var i=0, l=this.length=raw_list.length, key; i < l; i++) {
          this[i] = raw_list[i] instanceof Element ? raw_list[i] : (Wrapper_Cache[raw_list[i][UID_KEY]] || new Element(raw_list[i]));
        };
  
      }
      return this;
    },
    exists: function() {
      return this.length !== 0;
    }
  });
  
  Wrapper = new Class({
    extend: {
      Cache: [],
      Tags: {},
      set: function(tag, wrapper) {
        Wrapper.Tags[tag.toUpperCase()] = wrapper;
        return Wrapper;
      },
      get: function(tag) {
        return Wrapper.Tags[tag.toUpperCase()];
      },
      remove: function(tag) {
        delete Wrapper.Tags[tag.toUpperCase()];
        return Wrapper;
      },
      Cast: function(element) {
        return Wrapper.Tags[element.tagName];
      }
    },
    _: null,
    constructor: function Wrapper(dom_unit) {
      this._ = dom_unit;
      return Wrapper_Cache[uid(dom_unit)] = this;
    },
    cast: function(Klass) {
      if (this instanceof Klass) {
        return this;
      } else {
        return new Klass(this._);
      }
    }
  });
  
  NodeList.prototype.cast = function(Klass) {
    return this[0].cast(Klass);
  };
  
  Wrapper_Cache = Wrapper.Cache;
  
  Wrapper_Cache[undefined] = false;
  
  Element = new Class(Wrapper, {
    constructor: function Element(element, options) {
      var cast, key;
      if (typeof element === 'string') {
        element = elements_cache[element] || (elements_cache[element] = document.createElement(element));
        element = element.cloneNode(false);
      }
      if (this.constructor === Element) {
        cast = Wrapper.Cast(element);
      }
      if (cast !== undefined) {
        return new cast(element, options);
      }
      Wrapper.call(this, element);
      if (options != null) {
        for (key in options) {
          switch (key) {
            case 'id':
              this._.id = options[key];
              break;
            case 'html':
              this._.innerHTML = options[key];
              break;
            case 'class':
              this._.className = options[key];
              break;
            case 'style':
              this.style(options[key]);
              break;
            case 'on':
              this.on(options[key]);
              break;
            default:
              this.attr(key, options[key]);
          }
        }
      }
      return this;
    }
  });
  
  Element.include = function(hash) {
    var method, name, _results;
    Class.include.apply(this, arguments);
    _results = [];
    for (name in hash) {
      method = hash[name];
      _results.push((function(name) {
        if (!(name in core.List.prototype)) {
          return NodeList.prototype[name] = function() {
            var element, i, result, _i, _len;
            for (i = _i = 0, _len = this.length; _i < _len; i = ++_i) {
              element = this[i];
              result = element[name].apply(element, arguments);
              if (i === 0 && result !== element) {
                return result;
              }
            }
            if (this.length === 0) {
              return null;
            } else {
              return this;
            }
          };
        }
      })(name));
    }
    return _results;
  };
  
  Element.resolve = function(element) {
    if (element instanceof Element) {
      return element;
    } else if (typeof element === 'string') {
      element = $(element)[0];
    } else if (element instanceof NodeList) {
      element = element[0];
    } else if (element != null && element.nodeType === 1) {
      return wrap(element);
    }
    return element || null;
  };
  
  elements_cache = {};
  
  Element.include(Element_events = {
    _listeners: null,
    on: function() {
      this._listeners === null && Element_make_listeners(this);
      return Lovely.Events.on.apply(this, arguments);
    },
    no: function() {
      this._listeners === null && Element_make_listeners(this);
      return Lovely.Events.no.apply(this, arguments);
    },
    ones: Lovely.Events.ones,
    emit: function(event, options) {
      var args, hash, parent, _i, _len, _ref;
      parent = wrap(this._.parentNode);
      if (!(event instanceof Event)) {
        event = new Event(event, ext({
          target: this._
        }, options));
      }
      event.currentTarget = this;
      _ref = this._listeners || [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        hash = _ref[_i];
        if (hash.e === event.type) {
          args = (hash.n ? [] : [event]).concat(hash.a);
          if (hash.c.apply(this, args) === false) {
            event.stop();
          }
        }
      }
      if (!event.stopped && parent) {
        parent.emit(event);
      }
      return this;
    },
    stopEvent: function() {
      return false;
    }
  });
  
  Element_make_listeners = function(instance) {
    var list;
    list = [];
    list.push = function(hash) {
      var e;
      e = hash.e;
      if (e === 'mouseenter' || e === 'mouseleave') {
        mouseio_activate();
        hash.r = hash.e;
        hash.w = function() {};
      } else {
        hash.r = hash.e;
        if (e === 'contextmenu' && Browser === 'Konqueror') {
          hash.r = 'rightclick';
        }
        if (e === 'mousewheel' && Browser === 'Gecko') {
          hash.r = 'DOMMouseScroll';
        }
        hash.w = function(event) {
          var args;
          event = new Event(event);
          args = (hash.n ? [] : [event]).concat(hash.a);
          if (hash.c.apply(instance, args) === false) {
            event.stop();
          }
        };
        instance._.addEventListener(hash.r, hash.w, false);
      }
      return this[this.length] = hash;
    };
    list.splice = function(position) {
      var hash;
      hash = this[position];
      instance._.removeEventListener(hash.r, hash.w, false);
      return Array.prototype.splice.call(this, position, 1);
    };
    return instance._listeners = list;
  };
  
  Element.include({
    getClass: function() {
      return this._.className;
    },
    setClass: function(name) {
      this._.className = name;
      return this;
    },
    hasClass: function(name) {
      return (" " + this._.className + " ").indexOf(" " + name + " ") !== -1;
    },
    addClass: function(name) {
      var testee, _i, _len, _ref;
      if (name.indexOf(' ') === -1) {
        testee = " " + this._.className + " ";
        if (testee.indexOf(" " + name + " ") === -1) {
          this._.className += (testee === '  ' ? '' : ' ') + name;
        }
      } else {
        _ref = name.split(' ');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          this.addClass(name);
        }
      }
      return this;
    },
    removeClass: function(name) {
      var _i, _len, _ref;
      if (name.indexOf(' ') === -1) {
        this._.className = trim((" " + this._.className + " ").replace(" " + name + " ", ' '));
      } else {
        _ref = name.split(' ');
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          name = _ref[_i];
          this.removeClass(name);
        }
      }
      return this;
    },
    toggleClass: function(name) {
      if (this.hasClass(name)) {
        return this.removeClass(name);
      } else {
        return this.addClass(name);
      }
    },
    radioClass: function(name) {
      this.siblings().forEach('removeClass', name);
      return this.addClass(name);
    },
    style: function(name, value) {
      if (typeof name === 'string') {
        if (name.indexOf(':') !== -1) {
          return this.style(Element_parse_style(name));
        } else if (name.indexOf(',') !== -1) {
          return Element_read_styles(this, name);
        } else if (value === undefined) {
          return Element_clean_style(this._.style, name) || Element_clean_style(Element_computed_styles(this._), name);
        } else {
          if (name === 'float') {
            name = 'cssFloat';
          }
          this._.style[camelize(name)] = value;
        }
      } else {
        for (value in name) {
          this.style(value, name[value]);
        }
      }
      return this;
    }
  });
  
  Element_read_styles = function(element, names) {
    var hash, name, _i, _len, _ref;
    hash = {};
    _ref = names.split(',');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      name = _ref[_i];
      name = camelize(name);
      hash[name] = element.style(name);
    }
    return hash;
  };
  
  Element_parse_style = function(style) {
    var chunk, hash, name, value, _i, _len, _ref, _ref1;
    hash = {};
    _ref = style.split(';');
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      chunk = _ref[_i];
      if (!/^\s+$/.test(chunk)) {
        _ref1 = chunk.split(':'), name = _ref1[0], value = _ref1[1];
        hash[trim(name)] = trim(value);
      }
    }
    return hash;
  };
  
  Element_clean_style = function(style, name) {
    var value;
    name = camelize(name);
    if (name === 'opacity') {
      return style[name].replace(',', '.');
    } else if (name === 'float') {
      name = 'cssFloat';
    }
    value = style[name];
    if (/color/i.test(name) && value) {
      value = value.replace(/"/g, '');
    }
    return value;
  };
  
  Element_computed_styles = function(element) {
    return element.ownerDocument.defaultView.getComputedStyle(element, null);
  };
  
  Element.include({
    attr: function(name, value) {
      var element;
      if (typeof name === 'string') {
        if (value === undefined) {
          value = this._[name] || this._.getAttribute(name);
          if (value === '') {
            return null;
          } else {
            return value;
          }
        } else if (value === null) {
          this._.removeAttribute(name);
          delete this._[name];
        } else if (name === 'style') {
          this.style(value);
        } else {
          element = this._;
          if (!(name in element)) {
            element.setAttribute(name, value);
          }
          element[name] = value;
        }
      } else {
        for (value in name) {
          this.attr(value, name[value]);
        }
      }
      return this;
    },
    data: function(key, value) {
      var attr, match, name, result, _i, _len, _ref;
      if (isObject(key)) {
        for (name in key) {
          value = this.data(name, key[name]);
        }
      } else if (value === undefined) {
        key = dasherize('data-' + key);
        result = {};
        match = false;
        _ref = this._.attributes;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          attr = _ref[_i];
          value = attr.value;
          try {
            value = JSON.parse(value);
          } catch (e) {
  
          }
          if (attr.name === key) {
            result = value;
            match = true;
            break;
          } else if (attr.name.indexOf(key) === 0) {
            result[camelize(attr.name.substring(key.length + 1))] = value;
            match = true;
          }
        }
        value = match ? result : null;
      } else {
        key = dasherize('data-' + key);
        if (!isObject(value)) {
          value = {
            '': value
          };
        }
        for (name in value) {
          attr = name == false ? key : dasherize(key + '-' + name);
          if (value[name] === null) {
            this._.removeAttribute(attr);
          } else {
            this._.setAttribute(attr, isString(value[name]) ? value[name] : JSON.stringify(value[name]));
          }
        }
        value = this;
      }
      return value;
    },
    hidden: function() {
      return this.style('display') === 'none';
    },
    visible: function() {
      return !this.hidden();
    },
    hide: function() {
      if (this.visible()) {
        this._old_display = this.style('display');
        this._.style.display = 'none';
      }
      return this;
    },
    show: function() {
      var dummy, element, value;
      if (this.hidden()) {
        element = this._;
        value = this._old_display;
        if (!value || value === 'none') {
          dummy = new Element(element.tagName).insertTo(HTML);
          value = dummy.style('display') || 'none';
          dummy.remove();
        }
        element.style.display = value === 'none' ? 'block' : value;
      }
      return this;
    },
    toggle: function() {
      if (this.hidden()) {
        return this.show();
      } else {
        return this.hide();
      }
    },
    radio: function() {
      this.siblings().forEach('hide');
      return this.show();
    },
    document: function() {
      return wrap(this._.ownerDocument);
    },
    window: function() {
      return this.document().window();
    }
  });
  
  Element.include({
    size: function(size) {
      var style;
      if (size === undefined) {
        return {
          x: this._.offsetWidth,
          y: this._.offsetHeight
        };
      } else {
        size = dimensions_hash(arguments);
        style = this._.style;
        if ('x' in size) {
          style.width = size.x + 'px';
          style.width = 2 * size.x - this._.offsetWidth + 'px';
        }
        if ('y' in size) {
          style.height = size.y + 'px';
          style.height = 2 * size.y - this._.offsetHeight + 'px';
        }
        return this;
      }
    },
    scrolls: function(scrolls) {
      if (scrolls === undefined) {
        return {
          x: this._.scrollLeft,
          y: this._.scrollTop
        };
      } else {
        scrolls = dimensions_hash(arguments);
        if ('x' in scrolls) {
          this._.scrollLeft = scrolls.x;
        }
        if ('y' in scrolls) {
          this._.scrollTop = scrolls.y;
        }
        return this;
      }
    },
    position: function(position) {
      var html, offset, rect, scrolls;
      if (position === undefined) {
        rect = this._.getBoundingClientRect();
        html = this.document()._.documentElement;
        scrolls = this.window().scrolls();
        return {
          x: rect.left + scrolls.x - html.clientLeft,
          y: rect.top + scrolls.y - html.clientTop
        };
      } else {
        position = dimensions_hash(arguments);
        offset = this.offsetParent().position();
        if ('x' in position) {
          this._.style.left = position.x - offset.x + 'px';
        }
        if ('y' in position) {
          this._.style.top = position.y - offset.y + 'px';
        }
      }
      return this;
    },
    offset: function(position) {
      var offset;
      if (position === undefined) {
        position = this.position();
        offset = this.offsetParent().position();
        return {
          x: position.x - offset.x,
          y: position.y - offset.y
        };
      } else {
        position = dimensions_hash(arguments);
        if ('x' in position) {
          this._.style.left = position.x + 'px';
        }
        if ('y' in position) {
          this._.style.top = position.y + 'px';
        }
        return this;
      }
    },
    offsetParent: function() {
      var parent, _i, _len, _ref, _ref1;
      _ref = this.parents();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        parent = _ref[_i];
        if ((_ref1 = parent.style('position')) === 'relative' || _ref1 === 'absolute' || _ref1 === 'fixed') {
          return parent;
        }
      }
      return wrap(this.document()._.documentElement);
    },
    overlaps: function(target) {
      var pos, size;
      pos = this.position();
      size = this.size();
      target = dimensions_hash(arguments);
      return target.x >= pos.x && target.x <= (pos.x + size.x) && target.y >= pos.y && target.y <= (pos.y + size.y);
    },
    index: function() {
      var index, node;
      node = this._.previousSibling;
      index = 0;
      while (node) {
        if (node.nodeType === 1) {
          index++;
        }
        node = node.previousSibling;
      }
      return index;
    }
  });
  
  Element.include({
    find: function(css_rule, needs_raw) {
      var result;
      result = this._.querySelectorAll(css_rule || '*');
      if (needs_raw === true) {
        return result;
      } else {
        return new NodeList(result, true);
      }
    },
    first: function(css_rule) {
      var element;
      if (css_rule === undefined && this._.firstElementChild !== undefined) {
        element = this._.firstElementChild;
      } else {
        element = this._.querySelector(css_rule || '*');
      }
      return wrap(element);
    },
    match: function(css_rule) {
      var element, _i, _len, _ref;
      _ref = this.document().find(css_rule, true);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        if (element === this._) {
          return true;
        }
      }
      return false;
    },
    parent: function(css_rule) {
      if (css_rule) {
        return this.parents(css_rule)[0];
      } else {
        return wrap(this._.parentNode);
      }
    },
    parents: function(css_rule) {
      return Element_recursively_collect(this, 'parentNode', css_rule);
    },
    children: function(css_rule) {
      return this.find(css_rule).filter(function(element) {
        return element._.parentNode === this._;
      }, this);
    },
    siblings: function(css_rule) {
      return this.previousSiblings(css_rule).reverse().concat(this.nextSiblings(css_rule).toArray());
    },
    nextSiblings: function(css_rule) {
      return Element_recursively_collect(this, 'nextSibling', css_rule);
    },
    previousSiblings: function(css_rule) {
      return Element_recursively_collect(this, 'previousSibling', css_rule);
    },
    nextSibling: function(css_rule) {
      if (css_rule === undefined && this._.nextElementSibling !== undefined) {
        return wrap(this._.nextElementSibling);
      } else {
        return this.nextSiblings(css_rule)[0];
      }
    },
    previousSibling: function(css_rule) {
      if (css_rule === undefined && this._.previousElementSibling !== undefined) {
        return wrap(this._.previousElementSibling);
      } else {
        return this.previousSiblings(css_rule)[0];
      }
    }
  });
  
  Element_recursively_collect = function(element, attr, css_rule) {
    var match, no_rule, node, result;
    result = [];
    node = element._;
    no_rule = css_rule === undefined;
    if (!no_rule) {
      css_rule = element.document().find(css_rule, true);
    }
    match = function(node) {
      var _i, _len;
      for (_i = 0, _len = css_rule.length; _i < _len; _i++) {
        element = css_rule[_i];
        if (element === node) {
          return true;
        }
      }
      return false;
    };
    while ((node = node[attr]) !== null) {
      if (node.nodeType === 1 && (no_rule || match(node))) {
        result.push(node);
      }
    }
    return new NodeList(result);
  };
  
  Element.include({
    clone: function() {
      return new Element(this._.cloneNode(true));
    },
    clear: function() {
      while (this._.firstChild) {
        this._.removeChild(this._.firstChild);
      }
      return this;
    },
    empty: function() {
      return /^\s*$/.test(this.html());
    },
    html: function(content) {
      if (content === undefined) {
        return this._.innerHTML;
      } else {
        return this.update(content);
      }
    },
    text: function(text) {
      if (text === undefined) {
        return this._.textContent;
      } else {
        return this.update(document.createTextNode(text));
      }
    },
    remove: function() {
      this._.parentNode && this._.parentNode.removeChild(this._);
      return this;
    },
    replace: function(content) {
      return this.insert(content, 'instead');
    },
    update: function(content) {
      var scripts, _ref;
      if (typeof content !== 'object') {
        _ref = extract_scripts('' + content), content = _ref[0], scripts = _ref[1];
        try {
          this._.innerHTML = content;
        } catch (e) {
          return this.clear().insert(content);
        }
        global_eval(scripts);
      } else {
        this.clear().insert(content);
      }
      return this;
    },
    insert: function(content, position) {
      var element, scripts, _ref;
      element = this._;
      if (position === undefined) {
        position = 'bottom';
      }
      if (typeof content !== 'object') {
        _ref = extract_scripts('' + content), content = _ref[0], scripts = _ref[1];
      }
      if (content._ != null) {
        content = content._;
      }
      if (content.nodeType === undefined) {
        content = Element_create_fragment((position === 'bottom' || position === 'top' ? element : element.parentNode), content);
      }
      Element_insert[position](element, content);
      if (scripts !== null) {
        global_eval(scripts);
      }
      return this;
    },
    insertTo: function(element, position) {
      Element.resolve(element).insert(this, position);
      return this;
    },
    append: function(first) {
      return this.insert(typeof first === "string" ? A(arguments).join('') : arguments);
    }
  });
  
  Element_insert = {
    bottom: function(target, content) {
      return target.appendChild(content);
    },
    top: function(target, content) {
      if (target.firstChild === null) {
        return target.appendChild(content);
      } else {
        return target.insertBefore(content, target.firstChild);
      }
    },
    after: function(target, content) {
      if (target.nextSibling === null) {
        return target.parentNode.appendChild(content);
      } else {
        return target.parentNode.insertBefore(content, target.nextSibling);
      }
    },
    before: function(target, content) {
      return target.parentNode.insertBefore(content, target);
    },
    instead: function(target, content) {
      return target.parentNode.replaceChild(content, target);
    }
  };
  
  Element_create_fragment = function(context, content) {
    var block, depth, tag, tmp;
    if (typeof content === 'string') {
      tag = context.tagName;
      tmp = Element_tmp_cont;
      block = tag in Element_wraps ? Element_wraps[tag] : ['', '', 1];
      depth = block[2];
      tmp.innerHTML = block[0] + '<' + tag + '>' + content + '</' + tag + '>' + block[1];
      while (depth-- !== 0) {
        tmp = tmp.firstChild;
      }
      content = tmp.childNodes;
      while (content.length !== 0) {
        Element_fragment.appendChild(content[0]);
      }
    } else {
      for (var i=0, length = content.length, node; i < length; i++) {
        node = content[content.length === length ? i : 0];
        Element_fragment.appendChild(node._ || node);
      };
  
    }
    return Element_fragment;
  };
  
  Element_fragment = document.createDocumentFragment();
  
  Element_tmp_cont = document.createElement('div');
  
  Element_wraps = {
    TBODY: ['<TABLE>', '</TABLE>', 2],
    TR: ['<TABLE><TBODY>', '</TBODY></TABLE>', 3],
    TD: ['<TABLE><TBODY><TR>', '</TR></TBODY></TABLE>', 4],
    COL: ['<TABLE><COLGROUP>', '</COLGROUP><TBODY></TBODY></TABLE>', 2],
    LEGEND: ['<FIELDSET>', '</FIELDSET>', 2],
    AREA: ['<map>', '</map>', 2],
    OPTION: ['<SELECT>', '</SELECT>', 2]
  };
  
  Element_wraps.OPTGROUP = Element_wraps.OPTION;
  
  Element_wraps.THEAD = Element_wraps.TBODY;
  
  Element_wraps.TFOOT = Element_wraps.TBODY;
  
  Element_wraps.TH = Element_wraps.TD;
  
  Document = new Class(Wrapper, {
    include: [Element_events],
    constructor: function Document(document) {
      return Wrapper.call(this, document);
    },
    window: function() {
      return wrap(this._.defaultView || this._.parentWindow);
    },
    find: Element.prototype.find,
    first: Element.prototype.first
  });
  
  current_Document = new Document(document);
  
  Window = new Class(Wrapper, {
    include: Element_events,
    constructor: function Window(window) {
      return Wrapper.call(this, window);
    },
    window: function() {
      return this;
    },
    size: function(size) {
      var html, win;
      if (size === undefined) {
        win = this._;
        html = win.document.documentElement;
        if (win.innerWidth) {
          return {
            x: win.innerWidth,
            y: win.innerHeight
          };
        } else {
          return {
            x: html.clientWidth,
            y: html.clientHeight
          };
        }
      } else {
        size = dimensions_hash(arguments);
        if (!('x' in size)) {
          size.x = this.size().x;
        }
        if (!('y' in size)) {
          size.y = this.size().y;
        }
        this._.resizeTo(size.x, size.y);
        this._.resizeTo(2 * size.x - this.size().x, 2 * size.y - this.size().y);
        return this;
      }
    },
    scrolls: function(position) {
      var body, doc, html, win;
      if (position === undefined) {
        win = this._;
        doc = win.document;
        body = doc.body;
        html = doc.documentElement;
        if (win.pageXOffset || win.pageYOffset) {
          return {
            x: win.pageXOffset,
            y: win.pageYOffset
          };
        } else if (body && (body.scrollLeft || body.scrollTop)) {
          return {
            x: body.scrollLeft,
            y: body.scrollTop
          };
        } else {
          return {
            x: html.scrollLeft,
            y: html.scrollTop
          };
        }
      } else {
        position = dimensions_hash(arguments);
        if (!('x' in position)) {
          position.x = this.scrolls().x;
        }
        if (!('y' in position)) {
          position.y = this.scrolls().y;
        }
        this._.scrollTo(position.x, position.y);
        return this;
      }
    }
  });
  
  Style = new Class(Element, {
    constructor: function Style(options) {
      this.$super('style', {
        type: 'text/css'
      });
      options || (options = {});
      if (typeof options.html === 'string') {
        this._.appendChild(document.createTextNode(options.html));
      }
      return this;
    }
  });
  
  Style.include = Element.include;
  
  Form = new Class(Element, {
    constructor: function Form(element, options) {
      var remote;
      if (!element || (!isElement(element) && isObject(element))) {
        options = element || {};
        element = 'form';
        remote = 'remote' in options;
        delete options.remote;
      }
      this.$super(element, options);
      if (remote && this.remotize) {
        this.remotize();
      }
      return this;
    }
  });
  
  Form.include = Element.include;
  
  Form.include({
    elements: function() {
      return this.find('input,button,select,textarea');
    },
    inputs: function() {
      return this.elements().filter(function(input) {
        var _ref;
        return !((_ref = input._.type) === 'submit' || _ref === 'button' || _ref === 'reset' || _ref === 'image' || _ref === null);
      });
    },
    input: function(name) {
      var inputs;
      inputs = this.find("*[name=\"" + name + "\"]");
      if (inputs.length !== 0 && inputs[0]._.type === 'radio') {
        return inputs;
      } else {
        return inputs[0];
      }
    },
    focus: function() {
      var element, _i, _len, _ref;
      _ref = this.inputs();
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        element.focus();
        break;
      }
      return this;
    },
    blur: function() {
      this.elements().forEach('blur');
      return this;
    },
    disable: function() {
      this.elements().forEach('disable');
      return this;
    },
    enable: function() {
      this.elements().forEach('enable');
      return this;
    },
    values: function() {
      var values;
      values = {};
      this.inputs().forEach(function(element) {
        var hash, input, key, keys, name, _ref;
        input = element._;
        name = input.name;
        hash = values;
        keys = name.match(/[^\[]+/g);
        if (!input.disabled && name && (!((_ref = input.type) === 'checkbox' || _ref === 'radio') || input.checked)) {
          while (keys.length > 1) {
            key = keys.shift();
            if (key[key.length - 1] === ']') {
              key = key.substr(0, key.length - 1);
            }
            hash = (hash[key] || (hash[key] = (keys[0] === ']' ? [] : {})));
          }
          key = keys.shift();
          if (key[key.length - 1] === ']') {
            key = key.substr(0, key.length - 1);
          }
          if (key === '') {
            hash.push(element.value());
          } else {
            hash[key] = element.value();
          }
        }
      });
      return values;
    },
    submit: function() {
      this._.submit();
      return this;
    },
    reset: function() {
      this._.reset();
      return this;
    }
  });
  
  Input = new Class(Element, {
    constructor: function Input(element, options) {
      if (!element || (!isElement(element) && isObject(element))) {
        options = element || {};
        if (/textarea|select/.test(options.type || '')) {
          element = options.type;
          delete options.type;
        } else {
          element = 'input';
        }
      }
      return this.$super(element, options);
    }
  });
  
  Input.include = Element.include;
  
  Input.include({
    form: function() {
      return wrap(this._.form);
    },
    insert: function(content, position) {
      this.$super(content, position);
      this.find('option').forEach(function(option) {
        return option._.selected = !!option.attr('selected');
      });
      return this;
    },
    update: function(content) {
      return this.clear().insert(content);
    },
    value: function(value) {
      if (value === undefined) {
        value = this._.value;
        if (this._.type === 'select-multiple') {
          value = [];
          this.find('option').forEach(function(option) {
            if (option._.selected) {
              value.push(option._.value);
            }
          });
        }
        return value;
      } else {
        if (this._.type === 'select-multiple') {
          value = L(isArray(value) ? value : [value]);
          this.find('option').forEach(function(option) {
            return option._.selected = value.indexOf(option._.value) !== -1;
          });
        } else {
          this._.value = value;
        }
      }
      return this;
    },
    focus: function() {
      this._.focus();
      this.focused = true;
      return this;
    },
    blur: function() {
      this._.blur();
      this.focused = false;
      return this;
    },
    select: function() {
      this._.select();
      this.focused = true;
      return this;
    },
    disable: function() {
      this._.disabled = true;
      return this.emit('disable');
    },
    enable: function() {
      this._.disabled = false;
      return this.emit('enable');
    },
    disabled: function(value) {
      if (value === undefined) {
        return this._.disabled;
      } else {
        return this[value ? 'disable' : 'enable']();
      }
    },
    checked: function(value) {
      if (value === undefined) {
        return this._.checked;
      } else {
        this._.checked = value;
        return this;
      }
    }
  });
  
  Event = new Class(Wrapper, {
    type: null,
    which: null,
    keyCode: null,
    target: null,
    currentTarget: null,
    relatedTarget: null,
    pageX: null,
    pageY: null,
    altKey: false,
    ctrlKey: false,
    metaKey: false,
    shiftKey: false,
    stopped: false,
    constructor: function Event(event, options) {
      if (typeof event === 'string') {
        event = ext({
          type: event
        }, options);
        this.stopped = event.bubbles === false;
        if (options !== null) {
          ext(this, options);
        }
      }
      this._ = event;
      this.type = event.type;
      this.which = event.which;
      this.keyCode = event.keyCode;
      this.altKey = event.altKey;
      this.ctrlKey = event.ctrlKey;
      this.metaKey = event.metaKey;
      this.shiftKey = event.shiftKey;
      this.pageX = event.pageX;
      this.pageY = event.pageY;
      this.target = wrap(event.target);
      if (event.target && event.target.nodeType === 3) {
        this.target = wrap(event.target.parentNode);
      }
      this.currentTarget = wrap(event.currentTarget);
      this.relatedTarget = wrap(event.relatedTarget);
    },
    stopPropagation: function() {
      if (this._.stopPropagation) {
        this._.stopPropagation();
      }
      this.stopped = true;
      return this;
    },
    preventDefault: function() {
      if (this._.preventDefault) {
        this._.preventDefault();
      }
      return this;
    },
    stop: function() {
      return this.stopPropagation().preventDefault();
    },
    position: function() {
      return {
        x: this.pageX,
        y: this.pageY
      };
    },
    offset: function() {
      var element_position;
      if (this.target instanceof Element) {
        element_position = this.target.position();
        return {
          x: this.pageX - element_position.x,
          y: this.pageY - element_position.y
        };
      }
      return null;
    },
    find: function(css_rule) {
      var element, search, target, _i, _len;
      if (this.target instanceof Wrapper && this.currentTarget instanceof Wrapper) {
        target = this.target._;
        search = this.currentTarget.find(css_rule, true);
        while (target !== null) {
          for (_i = 0, _len = search.length; _i < _len; _i++) {
            element = search[_i];
            if (element === target) {
              return wrap(target);
            }
          }
          target = target.parentNode;
        }
      }
      return null;
    }
  });
  
  Events_delegation = {
    delegate: function(css_rule, event) {
      var args, callback;
      if (typeof event === 'string') {
        args = A(arguments).slice(2);
        callback = args.shift();
        this.on(event, function(event) {
          var target;
          target = event.find(css_rule);
          if (target != null) {
            if (typeof callback === 'string') {
              target[callback].apply(target, args);
            } else {
              callback.apply(target, [event].concat(args));
            }
          }
        });
        ext(this._listeners[this._listeners.length - 1], {
          dr: css_rule,
          dc: callback
        });
      } else {
        for (args in event) {
          callback = event[args];
          this.delegate.apply(this, [css_rule, args].concat(ensure_array(callback)));
        }
      }
      return this;
    },
    undelegate: function(event) {
      var hash, _i, _len, _ref;
      _ref = delegation_listeners(arguments, this);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        hash = _ref[_i];
        this.no(hash.e, hash.c);
      }
      return this;
    },
    delegates: function() {
      return delegation_listeners(arguments, this).length === 0;
    }
  };
  
  delegation_listeners = function(args, object) {
    var callback, css_rule, event, hash, result, _i, _len, _ref;
    args = A(args);
    css_rule = args.shift();
    event = args.shift();
    callback = args.shift();
    result = [];
    if (typeof event === 'string') {
      _ref = object._listeners;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        hash = _ref[_i];
        if (hash.dr === css_rule && (!event || hash.e === event)) {
          if (!callback || hash.dc === callback) {
            result.push(hash);
          }
        }
      }
    } else {
      for (args in event) {
        callback = event[args];
        result = result.concat(delegation_listeners([css_rule, args].concat(ensure_array(callback)), object));
      }
    }
    return result;
  };
  
  Element.include(Events_delegation);
  
  Document.include(Events_delegation);
  
  mouseio_index = [];
  
  mouseio_inactive = true;
  
  mouseio_emit = function(raw, element, enter) {
    var event;
    event = new Event(raw);
    event.type = enter === true ? 'mouseenter' : 'mouseleave';
    event.bubbles = false;
    event.stopped = true;
    event.target = wrap(element);
    event.find = function(css_rule) {
      var _i, _len, _ref;
      _ref = current_Document.find(css_rule, true);
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        element = _ref[_i];
        if (element === this.target._) {
          return this.target;
        }
      }
      return null;
    };
    event.target.emit(event);
    return current_Document.emit(event);
  };
  
  mouseio_handler = function(e) {
    var element, event, from, id, parents, passed, target;
    target = e.target;
    from = e.relatedTarget;
    element = target;
    passed = false;
    parents = [];
    id = null;
    event = null;
    while (element.nodeType === 1) {
      id = uid(element);
      if (mouseio_index[id] === undefined) {
        mouseio_emit(e, element, mouseio_index[id] = true);
      }
      if (element === from) {
        passed = true;
      }
      parents.push(element);
      element = element.parentNode;
    }
    if (from && !passed) {
      while (from !== null && from.nodeType === 1 && parents.indexOf(from) === -1) {
        id = uid(from);
        if (mouseio_index[id] !== undefined) {
          mouseio_emit(e, from, mouseio_index[id] = undefined);
        }
        from = from.parentNode;
      }
    }
  };
  
  mouseio_reset = function(e) {
    var element, id, _i, _len;
    for (id = _i = 0, _len = mouseio_index.length; _i < _len; id = ++_i) {
      element = mouseio_index[id];
      if (element && id in Wrapper_Cache) {
        mouseio_emit(e, Wrapper_Cache[id]._, false);
      }
    }
  };
  
  mouseio_activate = function() {
    if (mouseio_inactive) {
      mouseio_inactive = false;
      document.addEventListener('mouseover', mouseio_handler, false);
      window.addEventListener('blur', mouseio_reset, false);
    }
  };
  
  focusio_boobler = function(raw_event) {
    var event;
    event = new Event(raw_event);
    if (event.target instanceof Element) {
      event.target.parent().emit(event);
    }
  };
  
  document.addEventListener('focus', focusio_boobler, true);
  
  document.addEventListener('blur', focusio_boobler, true);
  
  Document.include({
    on: function(name, callback) {
      var doc, id, _ref;
      this.$super.apply(this, arguments);
      if (name === 'ready') {
        doc = this._;
        id = uid(doc);
        if ((_ref = doc.readyState) === 'interactive' || _ref === 'loaded' || _ref === 'complete') {
          callback.apply(this);
        } else if (!(id in Ready_documents)) {
          Ready_documents[id] = this;
          doc.addEventListener('DOMContentLoaded', function() {
            return Ready_documents[id].emit('ready');
          }, false);
        }
      }
      return this;
    }
  });
  
  Ready_documents = [];
  
  $ = function(value, context) {
    switch (typeof value) {
      case 'string':
        if (/^#[^ \.\[:]+$/.test(value)) {
          value = document.getElementById(value.substr(1));
          value = value === null ? [] : [value];
        } else if (value[0] === '<') {
          return new Element('div').html(value).children();
        } else {
          if (context == null) {
            context = current_Document;
          } else if (!(context instanceof Wrapper)) {
            context = wrap(context);
          }
          return context.find(value);
        }
        value = new NodeList(value, true);
        break;
      case 'function':
        value = current_Document.on('ready', value);
        break;
      case 'object':
        value = wrap(value);
    }
    return value;
  };
  
  Wrapper.set("form", Form).set("input", Input).set("button", Input).set("select", Input).set("textarea", Input).set("optgroup", Input).set("style", Style);
  
  exports = ext($, {
    version: '1.4.2',
    Browser: Browser,
    Wrapper: Wrapper,
    Document: Document,
    Element: Element,
    Window: Window,
    Event: Event,
    Form: Form,
    Input: Input,
    Style: Style,
    NodeList: NodeList,
    "eval": global_eval,
    uid: uid
  });
  

  return exports;
});
