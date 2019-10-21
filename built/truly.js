"use strict";exports.__esModule=!0,exports.default=void 0;function _defineProperty(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}class TrulyBase{constructor(){_defineProperty(this,"context",void 0)}static extend(a){Object.keys(a).forEach(b=>{const c=a[b];if(c.name)throw Error("Truly extend does not support name in extension body");c.name=b,TrulyBase.register(c)})}static register(a){if(!a.name)throw Error("Truly register requires a name");const b=Truly.prototype,c=b[a.name],d=function(b,c){if("isSupported"in a&&!a.isSupported(b)){const d=a=>JSON.stringify(a,null,"2");throw Error(`Truly extension "${a.name}" failed to support: 
                          subject: ${d(b)})
                          context: ${d(c)}
                          `)}return a.transform(b,c)};Truly.prototype=Object.assign({},Truly.prototype,{[a.name]:function(a){return c?(c.bind(this)(a),d.bind(this)(a)):this.context=d.call(this,a,this.context),this}})}then(a){return"undefined"!=typeof a&&(this.context=this.context?a:null),this.context}}function Truly(a){this.context=a}Truly.extend=TrulyBase.extend,Truly.register=TrulyBase.register,Truly.prototype.then=function(a){return TrulyBase.prototype.then.call(this,a)};var _default=Truly;exports.default=_default;