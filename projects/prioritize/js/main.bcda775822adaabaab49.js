(()=>{var e={548:()=>{},831:(e,t,n)=>{"use strict";e.exports=n.p+"img/cwc-shadesa05dc6e0694f089c83c8.png"},165:(e,t,n)=>{"use strict";e.exports=n.p+"img/oopsfe704e0dccb8e85da8a9.png"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var i=r.length-1;i>-1&&!e;)e=r[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{"use strict";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const e=!1,t=!1,r="${JSCORE_VERSION}",i=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+r+") INTERNAL ASSERT FAILED: "+e)},a=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,c=o?e[t+2]:0,x=i>>2,_=(3&i)<<4|a>>4;let d=(15&a)<<2|c>>6,l=63&c;o||(l=64,s||(d=64)),r.push(n[x],n[_],n[d],n[l])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(a(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw new c;const x=i<<2|s>>4;if(r.push(x),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x=function(e){const t=a(e);return o.encodeByteArray(t,!0)},_=function(e){return x(e).replace(/\./g,"")},d=function(e){try{return o.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){return h(void 0,e)}function h(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=h(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,f=()=>{try{return u()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&d(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},b=e=>{const t=p(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]},g=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},m=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function y(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(y())}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function I(){return!0===e||!0===t}class E extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,C.prototype.create)}}class C{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(k,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new E(r,a,n)}}const k=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(e){return JSON.parse(e)}function N(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=S(d(s[0])||""),n=S(d(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function D(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(M(n)&&M(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function U(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let r,i,s=this.chain_[0],a=this.chain_[1],o=this.chain_[2],c=this.chain_[3],x=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(r=c^a&(o^c),i=1518500249):(r=a^o^c,i=1859775393):e<60?(r=a&o|c&(a|o),i=2400959708):(r=a^o^c,i=3395469782);const t=(s<<5|s>>>27)+r+x+i+n[e]&4294967295;x=c,c=o,o=4294967295&(a<<30|a>>>2),a=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+x&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let s=this.inbuf_;for(;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let r=24;r>=0;r-=8)e[n]=this.chain_[t]>>r&255,++n;return e}}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=H),void 0===r.error&&(r.error=H),void 0===r.complete&&(r.complete=H);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const B=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function z(e){return e&&e._delegate?e._delegate:e}class ${constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new v;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===G?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new K(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const J=[];var Q;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Q||(Q={}));const X={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Z=Q.INFO,ee={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},te=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=ee[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class ne{constructor(e){this.name=e,this._logLevel=Z,this._logHandler=te,this._userLogHandler=null,J.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?X[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const re=(e,t)=>t.some((t=>e instanceof t));let ie,se;const ae=new WeakMap,oe=new WeakMap,ce=new WeakMap,xe=new WeakMap,_e=new WeakMap;let de={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return oe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ce.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function le(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(se||(se=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(fe(this),t),ue(ae.get(this))}:function(...t){return ue(e.apply(fe(this),t))}:function(t,...n){const r=e.call(fe(this),t,...n);return ce.set(r,t.sort?t.sort():[t]),ue(r)}}function he(e){return"function"==typeof e?le(e):(e instanceof IDBTransaction&&function(e){if(oe.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));oe.set(e,t)}(e),re(e,ie||(ie=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,de):e)}function ue(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(ue(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&ae.set(t,e)})).catch((()=>{})),_e.set(t,e),t}(e);if(xe.has(e))return xe.get(e);const t=he(e);return t!==e&&(xe.set(e,t),_e.set(t,e)),t}const fe=e=>_e.get(e);const pe=["get","getKey","getAll","getAllKeys","count"],be=["put","add","delete","clear"],ge=new Map;function me(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(ge.get(t))return ge.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=be.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!pe.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return ge.set(t,s),s}de=(e=>({...e,get:(t,n,r)=>me(t,n)||e.get(t,n,r),has:(t,n)=>!!me(t,n)||e.has(t,n)}))(de);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ye="@firebase/app",we="0.9.13",Te=new ne("@firebase/app"),Ie="[DEFAULT]",Ee={[ye]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ce=new Map,ke=new Map;function Se(e,t){try{e.container.addComponent(t)}catch(n){Te.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ne(e){const t=e.name;if(ke.has(t))return Te.debug(`There were multiple attempts to register component ${t}.`),!1;ke.set(t,e);for(const t of Ce.values())Se(t,e);return!0}function Pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Re=new C("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oe{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Re.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="9.23.0";function Le(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Ie,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw Re.create("bad-app-name",{appName:String(i)});if(n||(n=g()),!n)throw Re.create("no-options");const s=Ce.get(i);if(s){if(D(n,s.options)&&D(r,s.config))return s;throw Re.create("duplicate-app",{appName:i})}const a=new Y(i);for(const e of ke.values())a.addComponent(e);const o=new Oe(n,r,a);return Ce.set(i,o),o}function De(e=Ie){const t=Ce.get(e);if(!t&&e===Ie&&g())return Le();if(!t)throw Re.create("no-app",{appName:e});return t}function Me(e,t,n){var r;let i=null!==(r=Ee[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Te.warn(e.join(" "))}Ne(new $(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fe="firebase-heartbeat-database",je=1,Ue="firebase-heartbeat-store";let qe=null;function We(){return qe||(qe=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=ue(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(ue(a.result),e.oldVersion,e.newVersion,ue(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}(Fe,je,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ue)}}).catch((e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})}))),qe}async function He(e,t){try{const n=(await We()).transaction(Ue,"readwrite"),r=n.objectStore(Ue);await r.put(t,Ve(e)),await n.done}catch(e){if(e instanceof E)Te.warn(e.message);else{const t=Re.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Te.warn(t.message)}}}function Ve(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $e(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ze();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ze(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),Ge(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ge(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=_(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function ze(){return(new Date).toISOString().substring(0,10)}class $e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await We();return await t.transaction(Ue).objectStore(Ue).get(Ve(e))}catch(e){if(e instanceof E)Te.warn(e.message);else{const t=Re.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Te.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return He(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return He(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ge(e){return _(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke;Ke="",Ne(new $("platform-logger",(e=>new ve(e)),"PRIVATE")),Ne(new $("heartbeat",(e=>new Be(e)),"PRIVATE")),Me(ye,we,Ke),Me(ye,we,"esm2017"),Me("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Me("firebase","9.23.0","app");const Ye={apiKey:"AIzaSyBys1IRgmfn46iiD_jARVguGAXlDLIwcKI",authDomain:"prioritize-auth-development.firebaseapp.com",projectId:"prioritize-auth-development",storageBucket:"prioritize-auth-development.appspot.com",messagingSenderId:"703939708911",appId:"1:703939708911:web:92541d9f34366bc743981a",databaseURL:"https://prioritize-auth-development-default-rtdb.firebaseio.com"},Je=Le(Ye),Qe="@firebase/database",Xe="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ze="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class et{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),N(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:S(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return R(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new et(t)}}catch(e){}return new tt},rt=nt("localStorage"),it=nt("sessionStorage"),st=new ne("@firebase/database"),at=function(){let e=1;return function(){return e++}}(),ot=function(e){const t=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);if(s>=55296&&s<=56319){const t=s-55296;r++,i(r<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(r)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new q;n.update(t);const r=n.digest();return o.encodeByteArray(r)},ct=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=ct.apply(null,r):t+="object"==typeof r?N(r):r,t+=" "}return t};let xt=null,_t=!0;const dt=function(e,t){i(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(st.logLevel=Q.VERBOSE,xt=st.log.bind(st),t&&it.set("logging_enabled",!0)):"function"==typeof e?xt=e:(xt=null,it.remove("logging_enabled"))},lt=function(...e){if(!0===_t&&(_t=!1,null===xt&&!0===it.get("logging_enabled")&&dt(!0)),xt){const t=ct.apply(null,e);xt(t)}},ht=function(e){return function(...t){lt(e,...t)}},ut=function(...e){const t="FIREBASE INTERNAL ERROR: "+ct(...e);st.error(t)},ft=function(...e){const t=`FIREBASE FATAL ERROR: ${ct(...e)}`;throw st.error(t),new Error(t)},pt=function(...e){const t="FIREBASE WARNING: "+ct(...e);st.warn(t)},bt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},gt="[MIN_NAME]",mt="[MAX_NAME]",vt=function(e,t){if(e===t)return 0;if(e===gt||t===mt)return-1;if(t===gt||e===mt)return 1;{const n=St(e),r=St(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},yt=function(e,t){return e===t?0:e<t?-1:1},wt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+N(t))},Tt=function(e){if("object"!=typeof e||null===e)return N(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=N(t[r]),n+=":",n+=Tt(e[t[r]]);return n+="}",n},It=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Et(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Ct=function(e){i(!bt(e),"Invalid JSON number");const t=1023;let n,r,s,a,o;0===e?(r=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=a+t,s=Math.round(e*Math.pow(2,52-a)-Math.pow(2,52))):(r=0,s=Math.round(e/Math.pow(2,-1074))));const c=[];for(o=52;o;o-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(n?1:0),c.reverse();const x=c.join("");let _="";for(o=0;o<64;o+=8){let e=parseInt(x.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),_+=e}return _.toLowerCase()};const kt=new RegExp("^-?(0*)\\d{1,10}$"),St=function(e){if(kt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Nt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw pt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Pt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rt{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){pt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(lt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt="5",Dt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mt="ac",Ft="websocket",jt="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ut{constructor(e,t,n,r,i=!1,s="",a=!1,o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rt.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qt(e,t,n){let r;if(i("string"==typeof t,"typeof type must == string"),i("object"==typeof n,"typeof params must == object"),t===Ft)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==jt)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Et(n,((e,t)=>{s.push(e+"="+t)})),r+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.counters_={}}incrementCounter(e,t=1){R(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return l(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht={},Vt={};function Bt(e){const t=e.toString();return Ht[t]||(Ht[t]=new Wt),Ht[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class zt{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Nt((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t="start";class Gt{constructor(e,t,n,r,i,s,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ht(e),this.stats_=Bt(t),this.urlFn=e=>(this.appCheckToken&&(e[Mt]=this.appCheckToken),qt(t,jt,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zt(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(I()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kt(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===$t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[$t]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Lt,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Mt]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Dt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gt.forceAllow_=!0}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){return!I()&&(!!Gt.forceAllow_||!(Gt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=x(t),r=It(n,1840);for(let e=0;e<r.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(I())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=N(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Kt{constructor(e,t,n,r){if(this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,I())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=at(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Kt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(e){lt("frame writing exception"),e.stack&&lt(e.stack),lt(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||lt("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){I()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{lt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yt=null;"undefined"!=typeof MozWebSocket?Yt=MozWebSocket:"undefined"!=typeof WebSocket&&(Yt=WebSocket);class Jt{constructor(e,t,n,r,i,s,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ht(this.connId),this.stats_=Bt(t),this.connURL=Jt.connectionURL_(t,s,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const s={};return s.v=Lt,!I()&&"undefined"!=typeof location&&location.hostname&&Dt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),r&&(s[Mt]=r),i&&(s.p=i),qt(e,Ft,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rt.set("previous_websocket_failure",!0);try{let e;if(I()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Lt}/${Ze}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=process.env,r=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;r&&(e.proxy={origin:r})}this.mySock=new Yt(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Yt&&!Jt.forceDisallow_}static previouslyFailed(){return rt.isInMemoryStorage||!0===rt.get("previous_websocket_failure")}markConnectionHealthy(){rt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=S(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(i(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=It(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2,Jt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gt,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Jt&&Jt.isAvailable();let n=t&&!Jt.previouslyFailed();if(e.webSocketOnly&&(t||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Jt];else{const e=this.transports_=[];for(const t of Qt.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Qt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qt.globalTransportInitialized_=!1;class Xt{constructor(e,t,n,r,i,s,a,o,c,x){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=a,this.onDisconnect_=o,this.onKill_=c,this.lastSessionId=x,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ht("c:"+this.id+":"),this.transportManager_=new Qt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Pt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wt("t",e),n=wt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wt("t",e),n=wt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ut("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ut("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Lt!==n&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Pt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.allowedEvents_=e,this.listeners_={},i(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let e=0;e<r.length;e++)if(r[e].callback===t&&(!n||n===r[e].context))return void r.splice(e,1)}validateEventType_(e){i(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends en{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||w()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new tn}getInitialEvent(e){return i("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=32,rn=768;class sn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function an(){return new sn("")}function on(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function cn(e){return e.pieces_.length-e.pieceNum_}function xn(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new sn(e.pieces_,t)}function _n(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function dn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function ln(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new sn(t,0)}function hn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof sn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new sn(n,0)}function un(e){return e.pieceNum_>=e.pieces_.length}function fn(e,t){const n=on(e),r=on(t);if(null===n)return t;if(n===r)return fn(xn(e),xn(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function pn(e,t){if(cn(e)!==cn(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function bn(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(cn(e)>cn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class gn{constructor(e,t){this.errorPrefix_=t,this.parts_=dn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=B(this.parts_[e]);mn(this)}}function mn(e){if(e.byteLength_>rn)throw new Error(e.errorPrefix_+"has a key path longer than "+rn+" bytes ("+e.byteLength_+").");if(e.parts_.length>nn)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nn+") or object contains a cycle "+vn(e))}function vn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends en{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new yn}getInitialEvent(e){return i("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=1e3;class Tn extends Zt{constructor(e,t,n,r,i,s,a,o){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=a,this.authOverride_=o,this.id=Tn.nextPersistentConnectionId_++,this.log_=ht("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wn,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,o&&!I())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&tn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(N(s)),i(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new v,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),i(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),i(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,a=i.s;Tn.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==a&&this.removeListen_(n,r),e.onComplete&&e.onComplete(a,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&R(e,"w")){const n=O(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=P(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=P(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),i(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+N(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ut("Unrecognized action received from server: "+N(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){i(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=wn),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+Tn.nextConnectionId_++,s=this.lastSessionId;let a=!1,o=null;const c=function(){o?o.close():(a=!0,n())},x=function(e){i(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:c,sendRequest:x};const _=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[i,c]=await Promise.all([this.authTokenProvider_.getToken(_),this.appCheckTokenProvider_.getToken(_)]);a?lt("getToken() completed but was canceled"):(lt("getToken() completed. Creating connection."),this.authToken_=i&&i.accessToken,this.appCheckToken_=c&&c.token,o=new Xt(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{pt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),a||(this.repoInfo_.nodeAdmin&&pt(e),c())}}}interrupt(e){lt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){lt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],A(this.interruptReasons_)&&(this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Tt(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new sn(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){lt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){lt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";I()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ze.replace(/\./g,"-")]=1,w()?e["framework.cordova"]=1:T()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tn.getInstance().currentlyOnline();return A(this.interruptReasons_)&&e}}Tn.nextPersistentConnectionId_=0,Tn.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new In(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new In(gt,e),r=new In(gt,t);return 0!==this.compare(n,r)}minPost(){return In.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn;class kn extends En{static get __EMPTY_NODE(){return Cn}static set __EMPTY_NODE(e){Cn=e}compare(e,t){return vt(e.name,t.name)}isDefinedOn(e){throw s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return In.MIN}maxPost(){return new In(mt,Cn)}makePost(e,t){return i("string"==typeof e,"KeyIndex indexValue must always be a string."),new In(e,Cn)}toString(){return".key"}}const Sn=new kn;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pn{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Pn.RED,this.left=null!=r?r:Rn.EMPTY_NODE,this.right=null!=i?i:Rn.EMPTY_NODE}copy(e,t,n,r,i){return new Pn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Rn.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pn.RED=!0,Pn.BLACK=!1;class Rn{constructor(e,t=Rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pn.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nn(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function On(e,t){return vt(e.name,t.name)}function An(e,t){return vt(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln;Rn.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Pn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Dn=function(e){return"number"==typeof e?"number:"+Ct(e):"string:"+e},Mn=function(e){if(e.isLeafNode()){const t=e.val();i("string"==typeof t||"number"==typeof t||"object"==typeof t&&R(t,".sv"),"Priority must be a string or number.")}else i(e===Ln||e.isEmpty(),"priority of unexpected type.");i(e===Ln||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Fn,jn,Un;class qn{constructor(e,t=qn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,i(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Mn(this.priorityNode_)}static set __childrenNodeConstructor(e){Fn=e}static get __childrenNodeConstructor(){return Fn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:qn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return un(e)?this:".priority"===on(e)?this.priorityNode_:qn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:qn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=on(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(i(".priority"!==n||1===cn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,qn.__childrenNodeConstructor.EMPTY_NODE.updateChild(xn(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Ct(this.value_):this.value_,this.lazyHash_=ot(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qn.__childrenNodeConstructor?-1:(i(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=qn.VALUE_TYPE_ORDER.indexOf(t),s=qn.VALUE_TYPE_ORDER.indexOf(n);return i(r>=0,"Unknown leaf type: "+t),i(s>=0,"Unknown leaf type: "+n),r===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}qn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Wn=new class extends En{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?vt(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return In.MIN}maxPost(){return new In(mt,new qn("[PRIORITY-POST]",Un))}makePost(e,t){const n=jn(e);return new In(t,new qn("[PRIORITY-POST]",n))}toString(){return".priority"}},Hn=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Hn,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bn=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let a,o;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new Pn(o,a.node,Pn.BLACK,null,null);{const c=parseInt(s/2,10)+t,x=i(t,c),_=i(c+1,r);return a=e[c],o=n?n(a):a,new Pn(o,a.node,Pn.BLACK,x,_)}},s=function(t){let r=null,s=null,a=e.length;const o=function(t,r){const s=a-t,o=a;a-=t;const x=i(s+1,o),_=e[s],d=n?n(_):_;c(new Pn(d,_.node,r,null,x))},c=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?o(r,Pn.BLACK):(o(r,Pn.BLACK),o(r,Pn.RED))}return s}(new Vn(e.length));return new Rn(r||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zn;const $n={};class Gn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return i($n&&Wn,"ChildrenNode.ts has not been loaded"),zn=zn||new Gn({".priority":$n},{".priority":Wn}),zn}get(e){const t=O(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rn?t:null}hasIndex(e){return R(this.indexSet_,e.toString())}addIndex(e,t){i(e!==Sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(In.Wrap);let a,o=s.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=s.getNext();a=r?Bn(n,e.getCompare()):$n;const c=e.toString(),x=Object.assign({},this.indexSet_);x[c]=e;const _=Object.assign({},this.indexes_);return _[c]=a,new Gn(_,x)}addToIndexes(e,t){const n=L(this.indexes_,((n,r)=>{const s=O(this.indexSet_,r);if(i(s,"Missing index implementation for "+r),n===$n){if(s.isDefinedOn(e.node)){const n=[],r=t.getIterator(In.Wrap);let i=r.getNext();for(;i;)i.name!==e.name&&n.push(i),i=r.getNext();return n.push(e),Bn(n,s.getCompare())}return $n}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new In(e.name,r))),i.insert(e,e.node)}}));return new Gn(n,this.indexSet_)}removeFromIndexes(e,t){const n=L(this.indexes_,(n=>{if(n===$n)return n;{const r=t.get(e.name);return r?n.remove(new In(e.name,r)):n}}));return new Gn(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kn;class Yn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Mn(this.priorityNode_),this.children_.isEmpty()&&i(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kn||(Kn=new Yn(new Rn(An),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kn}updatePriority(e){return this.children_.isEmpty()?this:new Yn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Kn:t}}getChild(e){const t=on(e);return null===t?this:this.getImmediateChild(t).getChild(xn(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(i(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new In(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Kn:this.priorityNode_;return new Yn(r,s,i)}}updateChild(e,t){const n=on(e);if(null===n)return t;{i(".priority"!==on(e)||1===cn(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(xn(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Wn,((s,a)=>{t[s]=a.val(e),n++,i&&Yn.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dn(this.getPriority().val())+":"),this.forEachChild(Wn,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ot(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new In(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new In(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new In(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,In.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,In.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===Sn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Yn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Wn),n=t.getIterator(Wn);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Sn?null:this.indexMap_.get(e.toString())}}Yn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Jn=new class extends Yn{constructor(){super(new Rn(An),Yn.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Yn.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(In,{MIN:{value:new In(gt,Yn.EMPTY_NODE)},MAX:{value:new In(mt,Jn)}}),kn.__EMPTY_NODE=Yn.EMPTY_NODE,qn.__childrenNodeConstructor=Yn,Ln=Jn,function(e){Un=e}(Jn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qn=!0;function Xn(e,t=null){if(null===e)return Yn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),i(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new qn(e,Xn(t))}if(e instanceof Array||!Qn){let n=Yn.EMPTY_NODE;return Et(e,((t,r)=>{if(R(e,t)&&"."!==t.substring(0,1)){const e=Xn(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Xn(t))}{const n=[];let r=!1;if(Et(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Xn(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new In(e,i)))}})),0===n.length)return Yn.EMPTY_NODE;const i=Bn(n,On,(e=>e.name),An);if(r){const e=Bn(n,Wn.getCompare());return new Yn(i,Xn(t),new Gn({".priority":e},{".priority":Wn}))}return new Yn(i,Xn(t),Gn.Default)}}!function(e){jn=e}(Xn);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zn extends En{constructor(e){super(),this.indexPath_=e,i(!un(e)&&".priority"!==on(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?vt(e.name,t.name):i}makePost(e,t){const n=Xn(e),r=Yn.EMPTY_NODE.updateChild(this.indexPath_,n);return new In(t,r)}maxPost(){const e=Yn.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new In(mt,e)}toString(){return dn(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new class extends En{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?vt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return In.MIN}maxPost(){return In.MAX}makePost(e,t){const n=Xn(e);return new In(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(e){return{type:"value",snapshotNode:e}}function nr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function rr(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ir(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sr{constructor(e){this.index_=e}updateChild(e,t,n,r,s,a){i(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=a&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(rr(t,o)):i(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?a.trackChildChange(nr(t,n)):a.trackChildChange(ir(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Wn,((e,r)=>{t.hasChild(e)||n.trackChildChange(rr(e,r))})),t.isLeafNode()||t.forEachChild(Wn,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(ir(t,r,i))}else n.trackChildChange(nr(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Yn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e){this.indexedFilter_=new sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ar.getStartPost_(e),this.endPost_=ar.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,s){return this.matches(new In(t,n))||(n=Yn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Yn.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Yn.EMPTY_NODE);const i=this;return t.forEachChild(Wn,((e,t)=>{i.matches(new In(e,t))||(r=r.updateImmediateChild(e,Yn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new ar(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new In(t,n))||(n=Yn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Yn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Yn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;r=r.updateImmediateChild(t.name,t.node),n++}}}else{let e;r=t.withIndex(this.index_),r=r.updatePriority(Yn.EMPTY_NODE),e=this.reverse_?r.getReverseIterator(this.index_):r.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:r=r.updateImmediateChild(t.name,Yn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let a;if(this.reverse_){const e=this.index_.getCompare();a=(t,n)=>e(n,t)}else a=this.index_.getCompare();const o=e;i(o.numChildren()===this.limit_,"");const c=new In(t,n),x=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),_=this.rangedFilter_.matches(c);if(o.hasChild(t)){const e=o.getImmediateChild(t);let i=r.getChildAfterChild(this.index_,x,this.reverse_);for(;null!=i&&(i.name===t||o.hasChild(i.name));)i=r.getChildAfterChild(this.index_,i,this.reverse_);const d=null==i?1:a(i,c);if(_&&!n.isEmpty()&&d>=0)return null!=s&&s.trackChildChange(ir(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(rr(t,e));const n=o.updateImmediateChild(t,Yn.EMPTY_NODE);return null!=i&&this.rangedFilter_.matches(i)?(null!=s&&s.trackChildChange(nr(i.name,i.node)),n.updateImmediateChild(i.name,i.node)):n}}return n.isEmpty()?e:_&&a(x,c)>=0?(null!=s&&(s.trackChildChange(rr(x.name,x.node)),s.trackChildChange(nr(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(x.name,Yn.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Wn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return i(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return i(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gt}hasEnd(){return this.endSet_}getIndexEndValue(){return i(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return i(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return i(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Wn}copy(){const e=new cr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function xr(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Wn?n="$priority":e.index_===er?n="$value":e.index_===Sn?n="$key":(i(e.index_ instanceof Zn,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=N(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=N(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+N(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=N(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+N(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function _r(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Wn&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Zt{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=ht("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(i(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=dr.getListenId_(e,n),a={};this.listens_[s]=a;const o=xr(e._queryParams);this.restRequest_(i+".json",o,((e,t)=>{let o=t;if(404===e&&(o=null,e=null),null===e&&this.onDataUpdate_(i,o,!1,n),O(this.listens_,s)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=dr.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xr(e._queryParams),n=e._path.toString(),r=new v;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+F(t);this.log_("Sending REST request for "+s);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+s+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=S(a.responseText)}catch(e){pt("Failed to parse JSON response for "+s+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&pt("Got unsuccessful REST response for "+s+" Status: "+a.status),n(a.status);n=null}},a.open("GET",s,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.rootNode_=Yn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(){return{value:null,children:new Map}}function ur(e,t,n){if(un(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=on(t);e.children.has(r)||e.children.set(r,hr());ur(e.children.get(r),t=xn(t),n)}}function fr(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,r)=>{fr(r,new sn(t.toString()+"/"+e),n)}))}class pr{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Et(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pr(e);const n=1e4+2e4*Math.random();Pt(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Et(e,((e,r)=>{r>0&&R(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Pt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gr;function mr(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(gr||(gr={}));class vr{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=gr.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(un(this.path)){if(null!=this.affectedTree.value)return i(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new sn(e));return new vr(an(),t,this.revert)}}return i(on(this.path)===e,"operationForChild called for unrelated child."),new vr(xn(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e,t){this.source=e,this.path=t,this.type=gr.LISTEN_COMPLETE}operationForChild(e){return un(this.path)?new yr(this.source,an()):new yr(this.source,xn(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=gr.OVERWRITE}operationForChild(e){return un(this.path)?new wr(this.source,an(),this.snap.getImmediateChild(e)):new wr(this.source,xn(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=gr.MERGE}operationForChild(e){if(un(this.path)){const t=this.children.subtree(new sn(e));return t.isEmpty()?null:t.value?new wr(this.source,an(),t.value):new Tr(this.source,an(),t)}return i(on(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Tr(this.source,xn(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(un(e))return this.isFullyInitialized()&&!this.filtered_;const t=on(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Cr(e,t,n,r,i,a){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw s("Should only compare child_ events.");const r=new In(t.childName,t.snapshotNode),i=new In(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function kr(e,t){return{eventCache:e,serverCache:t}}function Sr(e,t,n,r){return kr(new Ir(t,n,r),e.serverCache)}function Nr(e,t,n,r){return kr(e.eventCache,new Ir(t,n,r))}function Pr(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Rr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Or;class Ar{constructor(e,t=(()=>(Or||(Or=new Rn(yt)),Or))()){this.value=e,this.children=t}static fromObject(e){let t=new Ar(null);return Et(e,((e,n)=>{t=t.set(new sn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:an(),value:this.value};if(un(e))return null;{const n=on(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(xn(e),t);if(null!=i){return{path:hn(new sn(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(un(e))return this;{const t=on(e),n=this.children.get(t);return null!==n?n.subtree(xn(e)):new Ar(null)}}set(e,t){if(un(e))return new Ar(t,this.children);{const n=on(e),r=(this.children.get(n)||new Ar(null)).set(xn(e),t),i=this.children.insert(n,r);return new Ar(this.value,i)}}remove(e){if(un(e))return this.children.isEmpty()?new Ar(null):new Ar(null,this.children);{const t=on(e),n=this.children.get(t);if(n){const r=n.remove(xn(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Ar(null):new Ar(this.value,i)}return this}}get(e){if(un(e))return this.value;{const t=on(e),n=this.children.get(t);return n?n.get(xn(e)):null}}setTree(e,t){if(un(e))return t;{const n=on(e),r=(this.children.get(n)||new Ar(null)).setTree(xn(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Ar(this.value,i)}}fold(e){return this.fold_(an(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(hn(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,an(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(un(e))return null;{const r=on(e),i=this.children.get(r);return i?i.findOnPath_(xn(e),hn(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,an(),t)}foreachOnPath_(e,t,n){if(un(e))return this;{this.value&&n(t,this.value);const r=on(e),i=this.children.get(r);return i?i.foreachOnPath_(xn(e),hn(t,r),n):new Ar(null)}}foreach(e){this.foreach_(an(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(hn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e){this.writeTree_=e}static empty(){return new Lr(new Ar(null))}}function Dr(e,t,n){if(un(t))return new Lr(new Ar(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const a=fn(i,t);return s=s.updateChild(a,n),new Lr(e.writeTree_.set(i,s))}{const r=new Ar(n),i=e.writeTree_.setTree(t,r);return new Lr(i)}}}function Mr(e,t,n){let r=e;return Et(n,((e,n)=>{r=Dr(r,hn(t,e),n)})),r}function Fr(e,t){if(un(t))return Lr.empty();{const n=e.writeTree_.setTree(t,new Ar(null));return new Lr(n)}}function jr(e,t){return null!=Ur(e,t)}function Ur(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(fn(n.path,t)):null}function qr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Wn,((e,n)=>{t.push(new In(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new In(e,n.value))})),t}function Wr(e,t){if(un(t))return e;{const n=Ur(e,t);return new Lr(null!=n?new Ar(n):e.writeTree_.subtree(t))}}function Hr(e){return e.writeTree_.isEmpty()}function Vr(e,t){return Br(an(),e.writeTree_,t)}function Br(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(i(null!==s.value,"Priority writes must always be leaf nodes"),r=s.value):n=Br(hn(e,t),s,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(hn(e,".priority"),r)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(e,t){return ii(t,e)}function $r(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));i(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let s=r.visible,a=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Gr(t,r.path)?s=!1:bn(r.path,t.path)&&(a=!0)),o--}if(s){if(a)return function(e){e.visibleWrites=Yr(e.allWrites,Kr,an()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Fr(e.visibleWrites,r.path);else{Et(r.children,(t=>{e.visibleWrites=Fr(e.visibleWrites,hn(r.path,t))}))}return!0}return!1}function Gr(e,t){if(e.snap)return bn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bn(hn(e.path,n),t))return!0;return!1}function Kr(e){return e.visible}function Yr(e,t,n){let r=Lr.empty();for(let i=0;i<e.length;++i){const a=e[i];if(t(a)){const e=a.path;let t;if(a.snap)bn(n,e)?(t=fn(n,e),r=Dr(r,t,a.snap)):bn(e,n)&&(t=fn(e,n),r=Dr(r,an(),a.snap.getChild(t)));else{if(!a.children)throw s("WriteRecord should have .snap or .children");if(bn(n,e))t=fn(n,e),r=Mr(r,t,a.children);else if(bn(e,n))if(t=fn(e,n),un(t))r=Mr(r,an(),a.children);else{const e=O(a.children,on(t));if(e){const n=e.getChild(xn(t));r=Dr(r,an(),n)}}}}}return r}function Jr(e,t,n,r,i){if(r||i){const s=Wr(e.visibleWrites,t);if(!i&&Hr(s))return n;if(i||null!=n||jr(s,an())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(bn(e.path,t)||bn(t,e.path))};return Vr(Yr(e.allWrites,s,t),n||Yn.EMPTY_NODE)}return null}{const r=Ur(e.visibleWrites,t);if(null!=r)return r;{const r=Wr(e.visibleWrites,t);if(Hr(r))return n;if(null!=n||jr(r,an())){return Vr(r,n||Yn.EMPTY_NODE)}return null}}}function Qr(e,t,n,r){return Jr(e.writeTree,e.treePath,t,n,r)}function Xr(e,t){return function(e,t,n){let r=Yn.EMPTY_NODE;const i=Ur(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Wn,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Wr(e.visibleWrites,t);return n.forEachChild(Wn,((e,t)=>{const n=Vr(Wr(i,new sn(e)),t);r=r.updateImmediateChild(e,n)})),qr(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return qr(Wr(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Zr(e,t,n,r){return function(e,t,n,r,s){i(r||s,"Either existingEventSnap or existingServerSnap must exist");const a=hn(t,n);if(jr(e.visibleWrites,a))return null;{const t=Wr(e.visibleWrites,a);return Hr(t)?s.getChild(n):Vr(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function ei(e,t){return function(e,t){return Ur(e.visibleWrites,t)}(e.writeTree,hn(e.treePath,t))}function ti(e,t,n,r,i,s){return function(e,t,n,r,i,s,a){let o;const c=Wr(e.visibleWrites,t),x=Ur(c,an());if(null!=x)o=x;else{if(null==n)return[];o=Vr(c,n)}if(o=o.withIndex(a),o.isEmpty()||o.isLeafNode())return[];{const e=[],t=a.getCompare(),n=s?o.getReverseIteratorFrom(r,a):o.getIteratorFrom(r,a);let c=n.getNext();for(;c&&e.length<i;)0!==t(c,r)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function ni(e,t,n){return function(e,t,n,r){const i=hn(t,n),s=Ur(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Vr(Wr(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ri(e,t){return ii(hn(e.treePath,t),e.writeTree)}function ii(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;i("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),i(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,ir(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,rr(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,nr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw s("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,ir(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class oi{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ir(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ni(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Rr(this.viewCache_),i=ti(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(e,t,n,r,a){const o=new si;let c,x;if(n.type===gr.OVERWRITE){const s=n;s.source.fromUser?c=di(e,t,s.path,s.snap,r,a,o):(i(s.source.fromServer,"Unknown source."),x=s.source.tagged||t.serverCache.isFiltered()&&!un(s.path),c=_i(e,t,s.path,s.snap,r,a,x,o))}else if(n.type===gr.MERGE){const s=n;s.source.fromUser?c=function(e,t,n,r,i,s,a){let o=t;return r.foreach(((r,c)=>{const x=hn(n,r);li(t,on(x))&&(o=di(e,o,x,c,i,s,a))})),r.foreach(((r,c)=>{const x=hn(n,r);li(t,on(x))||(o=di(e,o,x,c,i,s,a))})),o}(e,t,s.path,s.children,r,a,o):(i(s.source.fromServer,"Unknown source."),x=s.source.tagged||t.serverCache.isFiltered(),c=ui(e,t,s.path,s.children,r,a,x,o))}else if(n.type===gr.ACK_USER_WRITE){const s=n;c=s.revert?function(e,t,n,r,s,a){let o;if(null!=ei(r,n))return t;{const c=new oi(r,t,s),x=t.eventCache.getNode();let _;if(un(n)||".priority"===on(n)){let n;if(t.serverCache.isFullyInitialized())n=Qr(r,Rr(t));else{const e=t.serverCache.getNode();i(e instanceof Yn,"serverChildren would be complete if leaf node"),n=Xr(r,e)}_=e.filter.updateFullNode(x,n,a)}else{const i=on(n);let s=ni(r,i,t.serverCache);null==s&&t.serverCache.isCompleteForChild(i)&&(s=x.getImmediateChild(i)),_=null!=s?e.filter.updateChild(x,i,s,xn(n),c,a):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(x,i,Yn.EMPTY_NODE,xn(n),c,a):x,_.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Qr(r,Rr(t)),o.isLeafNode()&&(_=e.filter.updateFullNode(_,o,a)))}return o=t.serverCache.isFullyInitialized()||null!=ei(r,an()),Sr(t,_,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,s.path,r,a,o):function(e,t,n,r,i,s,a){if(null!=ei(i,n))return t;const o=t.serverCache.isFiltered(),c=t.serverCache;if(null!=r.value){if(un(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return _i(e,t,n,c.getNode().getChild(n),i,s,o,a);if(un(n)){let r=new Ar(null);return c.getNode().forEachChild(Sn,((e,t)=>{r=r.set(new sn(e),t)})),ui(e,t,n,r,i,s,o,a)}return t}{let x=new Ar(null);return r.foreach(((e,t)=>{const r=hn(n,e);c.isCompleteForPath(r)&&(x=x.set(e,c.getNode().getChild(r)))})),ui(e,t,n,x,i,s,o,a)}}(e,t,s.path,s.affectedTree,r,a,o)}else{if(n.type!==gr.LISTEN_COMPLETE)throw s("Unknown operation type: "+n.type);c=function(e,t,n,r,i){const s=t.serverCache,a=Nr(t,s.getNode(),s.isFullyInitialized()||un(n),s.isFiltered());return xi(e,a,n,r,ai,i)}(e,t,n.path,r,o)}const _=o.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Pr(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(tr(Pr(t)))}}(t,c,_),{viewCache:c,changes:_}}function xi(e,t,n,r,s,a){const o=t.eventCache;if(null!=ei(r,n))return t;{let c,x;if(un(n))if(i(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Rr(t),i=Xr(r,n instanceof Yn?n:Yn.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),i,a)}else{const n=Qr(r,Rr(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,a)}else{const _=on(n);if(".priority"===_){i(1===cn(n),"Can't have a priority with additional path components");const s=o.getNode();x=t.serverCache.getNode();const a=Zr(r,n,s,x);c=null!=a?e.filter.updatePriority(s,a):o.getNode()}else{const i=xn(n);let d;if(o.isCompleteForChild(_)){x=t.serverCache.getNode();const e=Zr(r,n,o.getNode(),x);d=null!=e?o.getNode().getImmediateChild(_).updateChild(i,e):o.getNode().getImmediateChild(_)}else d=ni(r,_,t.serverCache);c=null!=d?e.filter.updateChild(o.getNode(),_,d,i,s,a):o.getNode()}}return Sr(t,c,o.isFullyInitialized()||un(n),e.filter.filtersNodes())}}function _i(e,t,n,r,i,s,a,o){const c=t.serverCache;let x;const _=a?e.filter:e.filter.getIndexedFilter();if(un(n))x=_.updateFullNode(c.getNode(),r,null);else if(_.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,r);x=_.updateFullNode(c.getNode(),e,null)}else{const e=on(n);if(!c.isCompleteForPath(n)&&cn(n)>1)return t;const i=xn(n),s=c.getNode().getImmediateChild(e).updateChild(i,r);x=".priority"===e?_.updatePriority(c.getNode(),s):_.updateChild(c.getNode(),e,s,i,ai,null)}const d=Nr(t,x,c.isFullyInitialized()||un(n),_.filtersNodes());return xi(e,d,n,i,new oi(i,d,s),o)}function di(e,t,n,r,i,s,a){const o=t.eventCache;let c,x;const _=new oi(i,t,s);if(un(n))x=e.filter.updateFullNode(t.eventCache.getNode(),r,a),c=Sr(t,x,!0,e.filter.filtersNodes());else{const i=on(n);if(".priority"===i)x=e.filter.updatePriority(t.eventCache.getNode(),r),c=Sr(t,x,o.isFullyInitialized(),o.isFiltered());else{const s=xn(n),x=o.getNode().getImmediateChild(i);let d;if(un(s))d=r;else{const e=_.getCompleteChild(i);d=null!=e?".priority"===_n(s)&&e.getChild(ln(s)).isEmpty()?e:e.updateChild(s,r):Yn.EMPTY_NODE}if(x.equals(d))c=t;else{c=Sr(t,e.filter.updateChild(o.getNode(),i,d,s,_,a),o.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function li(e,t){return e.eventCache.isCompleteForChild(t)}function hi(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ui(e,t,n,r,i,s,a,o){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,x=t;c=un(n)?r:new Ar(null).setTree(n,r);const _=t.serverCache.getNode();return c.children.inorderTraversal(((n,r)=>{if(_.hasChild(n)){const c=hi(0,t.serverCache.getNode().getImmediateChild(n),r);x=_i(e,x,new sn(n),c,i,s,a,o)}})),c.children.inorderTraversal(((n,r)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===r.value;if(!_.hasChild(n)&&!c){const c=hi(0,t.serverCache.getNode().getImmediateChild(n),r);x=_i(e,x,new sn(n),c,i,s,a,o)}})),x}class fi{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new sr(n.getIndex()),i=(s=n).loadsAllData()?new sr(s.getIndex()):s.hasLimit()?new or(s):new ar(s);var s;this.processor_=function(e){return{filter:e}}(i);const a=t.serverCache,o=t.eventCache,c=r.updateFullNode(Yn.EMPTY_NODE,a.getNode(),null),x=i.updateFullNode(Yn.EMPTY_NODE,o.getNode(),null),_=new Ir(c,a.isFullyInitialized(),r.filtersNodes()),d=new Ir(x,o.isFullyInitialized(),i.filtersNodes());this.viewCache_=kr(d,_),this.eventGenerator_=new Er(this.query_)}get query(){return this.query_}}function pi(e,t){const n=Rr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!un(t)&&!n.getImmediateChild(on(t)).isEmpty())?n.getChild(t):null}function bi(e){return 0===e.eventRegistrations_.length}function gi(e,t,n){const r=[];if(n){i(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function mi(e,t,n,r){t.type===gr.MERGE&&null!==t.source.queryId&&(i(Rr(e.viewCache_),"We should always have a full cache before handling merges"),i(Pr(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,a=ci(e.processor_,s,t,n,r);var o,c;return o=e.processor_,c=a.viewCache,i(c.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),i(c.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),i(a.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=a.viewCache,vi(e,a.changes,a.viewCache.eventCache.getNode(),null)}function vi(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Cr(e,i,"child_removed",t,r,n),Cr(e,i,"child_added",t,r,n),Cr(e,i,"child_moved",s,r,n),Cr(e,i,"child_changed",t,r,n),Cr(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yi,wi;class Ti{constructor(){this.views=new Map}}function Ii(e,t,n,r){const s=t.source.queryId;if(null!==s){const a=e.views.get(s);return i(null!=a,"SyncTree gave us an op for an invalid query."),mi(a,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(mi(s,t,n,r));return i}}function Ei(e,t,n,r,i){const s=t._queryIdentifier,a=e.views.get(s);if(!a){let e=Qr(n,i?r:null),s=!1;e?s=!0:r instanceof Yn?(e=Xr(n,r),s=!1):(e=Yn.EMPTY_NODE,s=!1);const a=kr(new Ir(e,s,!1),new Ir(r,i,!1));return new fi(t,a)}return a}function Ci(e,t,n,r,i,s){const a=Ei(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,a),function(e,t){e.eventRegistrations_.push(t)}(a,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Wn,((e,t)=>{r.push(nr(e,t))}));return n.isFullyInitialized()&&r.push(tr(n.getNode())),vi(e,r,n.getNode(),t)}(a,n)}function ki(e,t,n,r){const s=t._queryIdentifier,a=[];let o=[];const c=Oi(e);if("default"===s)for(const[t,i]of e.views.entries())o=o.concat(gi(i,n,r)),bi(i)&&(e.views.delete(t),i.query._queryParams.loadsAllData()||a.push(i.query));else{const t=e.views.get(s);t&&(o=o.concat(gi(t,n,r)),bi(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||a.push(t.query)))}return c&&!Oi(e)&&a.push(new(i(yi,"Reference.ts has not been loaded"),yi)(t._repo,t._path)),{removed:a,events:o}}function Si(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Ni(e,t){let n=null;for(const r of e.views.values())n=n||pi(r,t);return n}function Pi(e,t){if(t._queryParams.loadsAllData())return Ai(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ri(e,t){return null!=Pi(e,t)}function Oi(e){return null!=Ai(e)}function Ai(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Li=1;class Di{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ar(null),this.pendingWriteTree_={visibleWrites:Lr.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mi(e,t,n,r,s){return function(e,t,n,r,s){i(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:s}),s&&(e.visibleWrites=Dr(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,s),s?Vi(e,new wr({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Fi(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if($r(e.pendingWriteTree_,t)){let t=new Ar(null);return null!=r.snap?t=t.set(an(),!0):Et(r.children,(e=>{t=t.set(new sn(e),!0)})),Vi(e,new vr(r.path,t,n))}return[]}function ji(e,t,n){return Vi(e,new wr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Ui(e,t,n,r,i=!1){const s=t._path,a=e.syncPointTree_.get(s);let o=[];if(a&&("default"===t._queryIdentifier||Ri(a,t))){const c=ki(a,t,n,r);0===a.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const x=c.removed;if(o=c.events,!i){const n=-1!==x.findIndex((e=>e._queryParams.loadsAllData())),i=e.syncPointTree_.findOnPath(s,((e,t)=>Oi(t)));if(n&&!i){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Oi(t)){return[Ai(t)]}{let e=[];return t&&(e=Si(t)),Et(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=$i(e,r);e.listenProvider_.startListening(Xi(i),Gi(e,i),s.hashFn,s.onComplete)}}}if(!i&&x.length>0&&!r)if(n){const n=null;e.listenProvider_.stopListening(Xi(t),n)}else x.forEach((t=>{const n=e.queryToTagMap.get(Ki(t));e.listenProvider_.stopListening(Xi(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Ki(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,x)}return o}function qi(e,t,n,r){const i=Yi(e,r);if(null!=i){const r=Ji(i),s=r.path,a=r.queryId,o=fn(s,t);return Qi(e,s,new wr(mr(a),o,n))}return[]}function Wi(e,t,n,r=!1){const s=t._path;let a=null,o=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=fn(e,s);a=a||Ni(t,n),o=o||Oi(t)}));let c,x=e.syncPointTree_.get(s);if(x?(o=o||Oi(x),a=a||Ni(x,an())):(x=new Ti,e.syncPointTree_=e.syncPointTree_.set(s,x)),null!=a)c=!0;else{c=!1,a=Yn.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Ni(t,an());n&&(a=a.updateImmediateChild(e,n))}))}const _=Ri(x,t);if(!_&&!t._queryParams.loadsAllData()){const n=Ki(t);i(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Li++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let d=Ci(x,t,n,zr(e.pendingWriteTree_,s),a,c);if(!_&&!o&&!r){const n=Pi(x,t);d=d.concat(function(e,t,n){const r=t._path,s=Gi(e,t),a=$i(e,n),o=e.listenProvider_.startListening(Xi(t),s,a.hashFn,a.onComplete),c=e.syncPointTree_.subtree(r);if(s)i(!Oi(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!un(e)&&t&&Oi(t))return[Ai(t).query];{let e=[];return t&&(e=e.concat(Si(t).map((e=>e.query)))),Et(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(Xi(r),Gi(e,r))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return d}function Hi(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Ni(n,fn(e,t));if(r)return r}));return Jr(r,t,i,n,!0)}function Vi(e,t){return Bi(t,e.syncPointTree_,null,zr(e.pendingWriteTree_,an()))}function Bi(e,t,n,r){if(un(e.path))return zi(e,t,n,r);{const i=t.get(an());null==n&&null!=i&&(n=Ni(i,an()));let s=[];const a=on(e.path),o=e.operationForChild(a),c=t.children.get(a);if(c&&o){const e=n?n.getImmediateChild(a):null,t=ri(r,a);s=s.concat(Bi(o,c,e,t))}return i&&(s=s.concat(Ii(i,e,r,n))),s}}function zi(e,t,n,r){const i=t.get(an());null==n&&null!=i&&(n=Ni(i,an()));let s=[];return t.children.inorderTraversal(((t,i)=>{const a=n?n.getImmediateChild(t):null,o=ri(r,t),c=e.operationForChild(t);c&&(s=s.concat(zi(c,i,a,o)))})),i&&(s=s.concat(Ii(i,e,r,n))),s}function $i(e,t){const n=t.query,r=Gi(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Yn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Yi(e,n);if(r){const n=Ji(r),i=n.path,s=n.queryId,a=fn(i,t);return Qi(e,i,new yr(mr(s),a))}return[]}(e,n._path,r):function(e,t){return Vi(e,new yr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Ui(e,n,null,r)}}}}function Gi(e,t){const n=Ki(t);return e.queryToTagMap.get(n)}function Ki(e){return e._path.toString()+"$"+e._queryIdentifier}function Yi(e,t){return e.tagToQueryMap.get(t)}function Ji(e){const t=e.indexOf("$");return i(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new sn(e.substr(0,t))}}function Qi(e,t,n){const r=e.syncPointTree_.get(t);i(r,"Missing sync point for query tag that we're tracking");return Ii(r,n,zr(e.pendingWriteTree_,t),null)}function Xi(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(i(wi,"Reference.ts has not been loaded"),wi)(e._repo,e._path):e}class Zi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zi(t)}node(){return this.node_}}class es{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=hn(this.path_,e);return new es(this.syncTree_,t)}node(){return Hi(this.syncTree_,this.path_)}}const ts=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},ns=function(e,t,n){return e&&"object"==typeof e?(i(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?rs(e[".sv"],t,n):"object"==typeof e[".sv"]?is(e[".sv"],t):void i(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},rs=function(e,t,n){if("timestamp"===e)return n.timestamp;i(!1,"Unexpected server value: "+e)},is=function(e,t,n){e.hasOwnProperty("increment")||i(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&i(!1,"Unexpected increment value: "+r);const s=t.node();if(i(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const a=s.getValue();return"number"!=typeof a?r:a+r},ss=function(e,t,n,r){return os(t,new es(n,e),r)},as=function(e,t,n){return os(e,new Zi(t),n)};function os(e,t,n){const r=e.getPriority().val(),i=ns(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=ns(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new qn(s,Xn(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new qn(i))),r.forEachChild(Wn,((e,r)=>{const i=os(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function xs(e,t){let n=t instanceof sn?t:new sn(t),r=e,i=on(n);for(;null!==i;){const e=O(r.node.children,i)||{children:{},childCount:0};r=new cs(i,r,e),n=xn(n),i=on(n)}return r}function _s(e){return e.node.value}function ds(e,t){e.node.value=t,ps(e)}function ls(e){return e.node.childCount>0}function hs(e,t){Et(e.node.children,((n,r)=>{t(new cs(n,e,r))}))}function us(e,t,n,r){n&&!r&&t(e),hs(e,(e=>{us(e,t,!0,r)})),n&&r&&t(e)}function fs(e){return new sn(null===e.parent?e.name:fs(e.parent)+"/"+e.name)}function ps(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===_s(e)&&!ls(e)}(n),i=R(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ps(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ps(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const bs=/[\[\].#$\/\u0000-\u001F\u007F]/,gs=/[\[\].#$\u0000-\u001F\u007F]/,ms=10485760,vs=function(e){return"string"==typeof e&&0!==e.length&&!bs.test(e)},ys=function(e){return"string"==typeof e&&0!==e.length&&!gs.test(e)},ws=function(e,t,n,r){r&&void 0===t||Ts(V(e,"value"),t,n)},Ts=function(e,t,n){const r=n instanceof sn?new gn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+vn(r));if("function"==typeof t)throw new Error(e+"contains a function "+vn(r)+" with contents = "+t.toString());if(bt(t))throw new Error(e+"contains "+t.toString()+" "+vn(r));if("string"==typeof t&&t.length>ms/3&&B(t)>ms)throw new Error(e+"contains a string greater than "+ms+" utf8 bytes "+vn(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Et(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!vs(t)))throw new Error(e+" contains an invalid key ("+t+") "+vn(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=B(t),mn(e)}(r,t),Ts(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=B(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+vn(r)+" in addition to actual children.")}},Is=function(e,t,n,r){if(!(r&&void 0===n||ys(n)))throw new Error(V(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Es=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Is(e,t,n,r)},Cs=function(e,t){if(".info"===on(t))throw new Error(e+" failed = Can't modify data under /.info/")},ks=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!vs(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ys(e)}(n))throw new Error(V(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ns(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||pn(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ps(e,t,n){Ns(e,n),Os(e,(e=>pn(e,t)))}function Rs(e,t,n){Ns(e,n),Os(e,(e=>bn(e,t)||bn(t,e)))}function Os(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(As(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function As(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();xt&&lt("event: "+n.toString()),Nt(r)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="repo_interrupt",Ds=25;class Ms{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ss,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=hr(),this.transactionQueueTree_=new cs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Fs(e,t,n){if(e.stats_=Bt(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new dr(e.repoInfo_,((t,n,r,i)=>{qs(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ws(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{N(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Tn(e.repoInfo_,t,((t,n,r,i)=>{qs(e,t,n,r,i)}),(t=>{Ws(e,t)}),(t=>{!function(e,t){Et(t,((t,n)=>{Hs(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Vt[n]||(Vt[n]=t()),Vt[n]}(e.repoInfo_,(()=>new br(e.stats_,e.server_))),e.infoData_=new lr,e.infoSyncTree_=new Di({startListening:(t,n,r,i)=>{let s=[];const a=e.infoData_.getNode(t._path);return a.isEmpty()||(s=ji(e.infoSyncTree_,t._path,a),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Hs(e,"connected",!1),e.serverSyncTree_=new Di({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);Rs(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function js(e){const t=e.infoData_.getNode(new sn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Us(e){return ts({timestamp:js(e)})}function qs(e,t,n,r,i){e.dataUpdateCount++;const s=new sn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(i)if(r){const t=L(n,(e=>Xn(e)));a=function(e,t,n,r){const i=Yi(e,r);if(i){const r=Ji(i),s=r.path,a=r.queryId,o=fn(s,t),c=Ar.fromObject(n);return Qi(e,s,new Tr(mr(a),o,c))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Xn(n);a=qi(e.serverSyncTree_,s,t,i)}else if(r){const t=L(n,(e=>Xn(e)));a=function(e,t,n){const r=Ar.fromObject(n);return Vi(e,new Tr({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Xn(n);a=ji(e.serverSyncTree_,s,t)}let o=s;a.length>0&&(o=Qs(e,s)),Rs(e.eventQueue_,o,a)}function Ws(e,t){Hs(e,"connected",t),!1===t&&function(e){Gs(e,"onDisconnectEvents");const t=Us(e),n=hr();fr(e.onDisconnect_,an(),((r,i)=>{const s=ss(r,i,e.serverSyncTree_,t);ur(n,r,s)}));let r=[];fr(n,an(),((t,n)=>{r=r.concat(ji(e.serverSyncTree_,t,n));const i=na(e,t);Qs(e,i)})),e.onDisconnect_=hr(),Rs(e.eventQueue_,an(),r)}(e)}function Hs(e,t,n){const r=new sn("/.info/"+t),i=Xn(n);e.infoData_.updateSnapshot(r,i);const s=ji(e.infoSyncTree_,r,i);Rs(e.eventQueue_,r,s)}function Vs(e){return e.nextWriteId_++}function Bs(e,t,n,r,i){Gs(e,"set",{path:t.toString(),value:n,priority:r});const s=Us(e),a=Xn(n,r),o=Hi(e.serverSyncTree_,t),c=as(a,o,s),x=Vs(e),_=Mi(e.serverSyncTree_,t,c,x,!0);Ns(e.eventQueue_,_),e.server_.put(t.toString(),a.val(!0),((n,r)=>{const s="ok"===n;s||pt("set at "+t+" failed: "+n);const a=Fi(e.serverSyncTree_,x,!s);Rs(e.eventQueue_,t,a),Ks(e,i,n,r)}));const d=na(e,t);Qs(e,d),Rs(e.eventQueue_,d,[])}function zs(e,t,n){let r;r=".info"===on(t._path)?Ui(e.infoSyncTree_,t,n):Ui(e.serverSyncTree_,t,n),Ps(e.eventQueue_,t._path,r)}function $s(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ls)}function Gs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),lt(n,...t)}function Ks(e,t,n,r){t&&Nt((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Ys(e,t,n){return Hi(e.serverSyncTree_,t,n)||Yn.EMPTY_NODE}function Js(e,t=e.transactionQueueTree_){if(t||ta(e,t),_s(t)){const n=Zs(e,t);i(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),s=Ys(e,t,r);let a=s;const o=s.hash();for(let e=0;e<n.length;e++){const r=n[e];i(0===r.status,"tryToSendTransactionQueue_: items in queue should all be run."),r.status=1,r.retryCount++;const s=fn(t,r.path);a=a.updateChild(s,r.currentOutputSnapshotRaw)}const c=a.val(!0),x=t;e.server_.put(x.toString(),c,(r=>{Gs(e,"transaction put response",{path:x.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Fi(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();ta(e,xs(e.transactionQueueTree_,t)),Js(e,e.transactionQueueTree_),Rs(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Nt(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{pt("transaction at "+x.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Qs(e,t)}}),o)}(e,fs(t),n)}else ls(t)&&hs(t,(t=>{Js(e,t)}))}function Qs(e,t){const n=Xs(e,t),r=fs(n);return function(e,t,n){if(0===t.length)return;const r=[];let s=[];const a=t.filter((e=>0===e.status)),o=a.map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const x=t[a],_=fn(n,x.path);let d,l=!1;if(i(null!==_,"rerunTransactionsUnderNode_: relativePath should not be null."),4===x.status)l=!0,d=x.abortReason,s=s.concat(Fi(e.serverSyncTree_,x.currentWriteId,!0));else if(0===x.status)if(x.retryCount>=Ds)l=!0,d="maxretry",s=s.concat(Fi(e.serverSyncTree_,x.currentWriteId,!0));else{const n=Ys(e,x.path,o);x.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Ts("transaction failed: Data returned ",r,x.path);let t=Xn(r);"object"==typeof r&&null!=r&&R(r,".priority")||(t=t.updatePriority(n.getPriority()));const i=x.currentWriteId,a=Us(e),c=as(t,n,a);x.currentOutputSnapshotRaw=t,x.currentOutputSnapshotResolved=c,x.currentWriteId=Vs(e),o.splice(o.indexOf(i),1),s=s.concat(Mi(e.serverSyncTree_,x.path,c,x.currentWriteId,x.applyLocally)),s=s.concat(Fi(e.serverSyncTree_,i,!0))}else l=!0,d="nodata",s=s.concat(Fi(e.serverSyncTree_,x.currentWriteId,!0))}Rs(e.eventQueue_,n,s),s=[],l&&(t[a].status=2,c=t[a].unwatcher,setTimeout(c,Math.floor(0)),t[a].onComplete&&("nodata"===d?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(d),!1,null)))))}var c;ta(e,e.transactionQueueTree_);for(let e=0;e<r.length;e++)Nt(r[e]);Js(e,e.transactionQueueTree_)}(e,Zs(e,n),r),r}function Xs(e,t){let n,r=e.transactionQueueTree_;for(n=on(t);null!==n&&void 0===_s(r);)r=xs(r,n),n=on(t=xn(t));return r}function Zs(e,t){const n=[];return ea(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ea(e,t,n){const r=_s(t);if(r)for(let e=0;e<r.length;e++)n.push(r[e]);hs(t,(t=>{ea(e,t,n)}))}function ta(e,t){const n=_s(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ds(t,n.length>0?n:void 0)}hs(t,(t=>{ta(e,t)}))}function na(e,t){const n=fs(Xs(e,t)),r=xs(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{ra(e,t)})),ra(e,r),us(r,(t=>{ra(e,t)})),n}function ra(e,t){const n=_s(t);if(n){const r=[];let s=[],a=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(i(a===t-1,"All SENT items should be at beginning of queue."),a=t,n[t].status=3,n[t].abortReason="set"):(i(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Fi(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===a?ds(t,void 0):n.length=a+1,Rs(e.eventQueue_,fs(t),s);for(let e=0;e<r.length;e++)Nt(r[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=function(e,t){const n=sa(e),r=n.namespace;"firebase.com"===n.domain&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ut(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new sn(n.pathString)}},sa=function(e){let t="",n="",r="",i="",s="",a=!0,o="https",c=443;if("string"==typeof e){let x=e.indexOf("//");x>=0&&(o=e.substring(0,x-1),e=e.substring(x+2));let _=e.indexOf("/");-1===_&&(_=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(_,d)),_<d&&(i=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let r=n[e];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch(e){}t+="/"+r}return t}(e.substring(_,d)));const l=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):pt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));x=t.indexOf(":"),x>=0?(a="https"===o||"wss"===o,c=parseInt(t.substring(x+1),10)):x=t.length;const h=t.slice(0,x);if("localhost"===h.toLowerCase())n="localhost";else if(h.split(".").length<=2)n=h;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in l&&(s=l.ns)}return{host:t,port:c,domain:n,subdomain:r,secure:a,scheme:o,pathString:i,namespace:s}},aa="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+N(this.snapshot.exportVal())}}class ca{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return i(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _a{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return un(this._path)?null:_n(this._path)}get ref(){return new da(this._repo,this._path)}get _queryIdentifier(){const e=_r(this._queryParams),t=Tt(e);return"{}"===t?"default":t}get _queryObject(){return _r(this._queryParams)}isEqual(e){if(!((e=z(e))instanceof _a))return!1;const t=this._repo===e._repo,n=pn(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class da extends _a{constructor(e,t){super(e,t,new cr,!1)}get parent(){const e=ln(this._path);return null===e?null:new da(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class la{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new sn(e),n=ua(this.ref,e);return new la(this._node.getChild(t),n,Wn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new la(n,ua(this.ref,t),Wn))))}hasChild(e){const t=new sn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ha(e,t){return(e=z(e))._checkNotDeleted("ref"),void 0!==t?ua(e._root,t):e._root}function ua(e,t){return null===on((e=z(e))._path)?Es("child","path",t,!1):Is("child","path",t,!1),new da(e._repo,hn(e._path,t))}function fa(e,t){e=z(e),Cs("set",e._path),ws("set",t,e._path,!1);const n=new v;return Bs(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class pa{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new oa("value",this,new la(e.snapshotNode,new da(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ca(this,e,t):null}matches(e){return e instanceof pa&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ba{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ca(this,e,t):null}createEvent(e,t){i(null!=e.childName,"Child events should have a childName.");const n=ua(new da(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new oa(e.type,this,new la(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ba&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ga(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{zs(e._repo,e,o),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const a=new xa(n,s||void 0),o="value"===t?new pa(a):new ba(t,a);return function(e,t,n){let r;r=".info"===on(t._path)?Wi(e.infoSyncTree_,t,n):Wi(e.serverSyncTree_,t,n),Ps(e.eventQueue_,t._path,r)}(e._repo,e,o),()=>zs(e._repo,e,o)}function ma(e,t,n,r){return ga(e,"value",t,n,r)}!function(e){i(!yi,"__referenceConstructor has already been defined"),yi=e}(da),function(e){i(!wi,"__referenceConstructor has already been defined"),wi=e}(da);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const va="FIREBASE_DATABASE_EMULATOR_HOST",ya={};let wa=!1;function Ta(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),lt("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let a,o,c=ia(s,i),x=c.repoInfo;"undefined"!=typeof process&&process.env&&(o=process.env[va]),o?(a=!0,s=`http://${o}?ns=${x.namespace}`,c=ia(s,i),x=c.repoInfo):a=!c.repoInfo.secure;const _=i&&a?new At(At.OWNER):new Ot(e.name,e.options,t);ks("Invalid Firebase Database URL",c),un(c.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,r){let i=ya[t.name];i||(i={},ya[t.name]=i);let s=i[e.toURLString()];s&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Ms(e,wa,n,r),i[e.toURLString()]=s,s}(x,e,_,new Rt(e.name,n));return new Ia(d,e)}class Ia{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Fs(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new da(this._repo,an())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ya[t];n&&n[e.key]===e||ft(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$s(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ft("Cannot call "+e+" on a deleted database.")}}function Ea(e=De(),t){const n=Pe(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=b("database");e&&function(e,t,n,r={}){e=z(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ft("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new At(At.OWNER);else if(r.mockUserToken){const t="string"==typeof r.mockUserToken?r.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[_(JSON.stringify({alg:"none",type:"JWT"})),_(JSON.stringify(s)),""].join(".")}(r.mockUserToken,e.app.options.projectId);s=new At(t)}!function(e,t,n,r){e.repoInfo_=new Ut(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}(i,t,n,s)}(n,...e)}return n}Tn.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Tn.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){!function(e){Ze=e}(Ae),Ne(new $("database",((e,{instanceIdentifier:t})=>Ta(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Me(Qe,Xe,e),Me(Qe,Xe,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */();function Ca(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function ka(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sa=ka,Na=new C("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Pa=new ne("@firebase/auth");function Ra(e,...t){Pa.logLevel<=Q.ERROR&&Pa.error(`Auth (${Ae}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e,...t){throw Da(e,...t)}function Aa(e,...t){return Da(e,...t)}function La(e,t,n){const r=Object.assign(Object.assign({},Sa()),{[t]:n});return new C("auth","Firebase",r).create(t,{appName:e.name})}function Da(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Na.create(e,...t)}function Ma(e,t,...n){if(!e)throw Da(t,...n)}function Fa(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ra(t),new Error(t)}function ja(e,t){e||Fa(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ua(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function qa(){return"http:"===Wa()||"https:"===Wa()}function Wa(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(qa()||function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e,t){this.shortDelay=e,this.longDelay=t,ja(t>e,"Short delay should be less than long delay!"),this.isMobile=w()||T()}get(){return Ha()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(e,t){ja(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Fa("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Fa("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Fa("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ga=new Va(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Ya(e,t,n,r,i={}){return Ja(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=F(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),za.fetch()(Xa(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function Ja(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},$a),t);try{const t=new Za(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw eo(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw eo(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw eo(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw eo(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw La(e,o,a);Oa(e,o)}}catch(t){if(t instanceof E)throw t;Oa(e,"network-request-failed",{message:String(t)})}}async function Qa(e,t,n,r,i={}){const s=await Ya(e,t,n,r,i);return"mfaPendingCredential"in s&&Oa(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Xa(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Ba(e.config,i):`${e.config.apiScheme}://${i}`}class Za{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Aa(this.auth,"network-request-failed"))),Ga.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function eo(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Aa(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function to(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(e){return 1e3*Number(e)}function ro(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Ra("JWT malformed, contained fewer than 3 sections"),null;try{const e=d(n);return e?JSON.parse(e):(Ra("Failed to decode base64 JWT payload"),null)}catch(e){return Ra("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function io(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof E&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class so{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oo(e){var t;const n=e.auth,r=await e.getIdToken(),i=await io(e,async function(e,t){return Ya(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ma(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ca(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(c=e.providerData,x=a,[...c.filter((e=>!x.some((t=>t.providerId===e.providerId)))),...x]);var c,x;const _=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),l=!!_&&d,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new ao(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ma(e.idToken,"internal-error"),Ma(void 0!==e.idToken,"internal-error"),Ma(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ro(e);return Ma(t,"internal-error"),Ma(void 0!==t.exp,"internal-error"),Ma(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ma(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){const n=await Ja(e,{},(async()=>{const n=F({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Xa(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",za.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new co;return n&&(Ma("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(Ma("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(Ma("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Fa("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,t){Ma("string"==typeof e||void 0===e,"internal-error",{appName:t})}class _o{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ca(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new so(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ao(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await io(this,this.stsTokenManager.getToken(this.auth,e));return Ma(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=z(e),r=await n.getIdToken(t),i=ro(r);Ma(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:to(no(i.auth_time)),issuedAtTime:to(no(i.iat)),expirationTime:to(no(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=z(e);await oo(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ma(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new _o(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ma(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await oo(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await io(this,async function(e,t){return Ya(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,c,x;const _=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,l=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,h=null!==(s=t.photoURL)&&void 0!==s?s:void 0,u=null!==(a=t.tenantId)&&void 0!==a?a:void 0,f=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,p=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(x=t.lastLoginAt)&&void 0!==x?x:void 0,{uid:g,emailVerified:m,isAnonymous:v,providerData:y,stsTokenManager:w}=t;Ma(g&&w,e,"internal-error");const T=co.fromJSON(this.name,w);Ma("string"==typeof g,e,"internal-error"),xo(_,e.name),xo(d,e.name),Ma("boolean"==typeof m,e,"internal-error"),Ma("boolean"==typeof v,e,"internal-error"),xo(l,e.name),xo(h,e.name),xo(u,e.name),xo(f,e.name),xo(p,e.name),xo(b,e.name);const I=new _o({uid:g,auth:e,email:d,emailVerified:m,displayName:_,isAnonymous:v,photoURL:h,phoneNumber:l,tenantId:u,stsTokenManager:T,createdAt:p,lastLoginAt:b});return y&&Array.isArray(y)&&(I.providerData=y.map((e=>Object.assign({},e)))),f&&(I._redirectEventId=f),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new co;r.updateFromServerResponse(t);const i=new _o({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await oo(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map;function ho(e){ja(e instanceof Function,"Expected a class definition");let t=lo.get(e);return t?(ja(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lo.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uo.type="NONE";const fo=uo;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t,n){return`firebase:${e}:${t}:${n}`}class bo{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=po(this.userKey,r.apiKey,i),this.fullPersistenceKey=po("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_o._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new bo(ho(fo),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||ho(fo);const s=po(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const r=_o._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new bo(i,e,n)):new bo(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wo(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(mo(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Io(t))return"Blackberry";if(Eo(t))return"Webos";if(vo(t))return"Safari";if((t.includes("chrome/")||yo(t))&&!t.includes("edge/"))return"Chrome";if(To(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function mo(e=y()){return/firefox\//i.test(e)}function vo(e=y()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function yo(e=y()){return/crios\//i.test(e)}function wo(e=y()){return/iemobile/i.test(e)}function To(e=y()){return/android/i.test(e)}function Io(e=y()){return/blackberry/i.test(e)}function Eo(e=y()){return/webos/i.test(e)}function Co(e=y()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ko(){return function(){const e=y();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function So(e=y()){return Co(e)||To(e)||Eo(e)||Io(e)||/windows phone/i.test(e)||wo(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function No(e,t=[]){let n;switch(e){case"Browser":n=go(y());break;case"Worker":n=`${go(y())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ae}/${r}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(e,t){return Ya(e,"GET","/v2/recaptchaConfig",Ka(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){return void 0!==e&&void 0!==e.enterprise}class Oo{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Aa("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Lo(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Do{constructor(e){this.type="recaptcha-enterprise",this.auth=Uo(e)}async verify(e="verify",t=!1){function n(t,n,r){const i=window.grecaptcha;Ro(i)?i.enterprise.ready((()=>{i.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,r)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Po(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new Oo(r);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((i=>{if(!t&&Ro(window.grecaptcha))n(i,e,r);else{if("undefined"==typeof window)return void r(new Error("RecaptchaVerifier is only supported in browser"));Ao("https://www.google.com/recaptcha/enterprise.js?render="+i).then((()=>{n(i,e,r)})).catch((e=>{r(e)}))}})).catch((e=>{r(e)}))}))}}async function Mo(e,t,n,r=!1){const i=new Do(e);let s;try{s=await i.verify(n)}catch(e){s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(e){r(e)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qo(this),this.idTokenSubscription=new qo(this),this.beforeStateQueue=new Fo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Na,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ho(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await bo.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(e){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Ma(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await oo(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?z(e):null;return t&&Ma(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ma(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(ho(e))}))}async initializeRecaptchaConfig(){const e=await Po(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Oo(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Do(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new C("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ho(e)||this._popupRedirectResolver;Ma(t,this,"argument-error"),this.redirectPersistenceManager=await bo.create(this,[ho(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ma(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ma(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=No(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Pa.logLevel<=Q.WARN&&Pa.warn(`Auth (${Ae}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function Uo(e){return z(e)}class qo{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new W(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ma(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(e,t,n){const r=Uo(e);Ma(r._canInitEmulator,r,"emulator-config-failed"),Ma(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(null==n?void 0:n.disableWarnings),s=Ho(t),{host:a,port:o}=function(e){const t=Ho(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:Vo(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:Vo(t)}}}(t),c=null===o?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function Ho(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Vo(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Bo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fa("not implemented")}_getIdTokenResponse(e){return Fa("not implemented")}_linkToIdToken(e,t){return Fa("not implemented")}_getReauthenticationResolver(e){return Fa("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(e,t){return Ya(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function $o(e,t){return Qa(e,"POST","/v1/accounts:signInWithPassword",Ka(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Go extends Bo{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Go(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Go(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Mo(e,n,"signInWithPassword");return $o(e,t)}return $o(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Mo(e,n,"signInWithPassword");return $o(e,t)}return Promise.reject(t)}));case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Qa(e,"POST","/v1/accounts:signInWithEmailLink",Ka(e,t))}(e,{email:this._email,oobCode:this._password});default:Oa(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return zo(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Qa(e,"POST","/v1/accounts:signInWithEmailLink",Ka(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Oa(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(e,t){return Qa(e,"POST","/v1/accounts:signInWithIdp",Ka(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo extends Bo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Yo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Oa("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ca(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Yo(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Ko(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ko(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ko(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=F(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qo extends Bo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qo({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qo({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Qa(e,"POST","/v1/accounts:signInWithPhoneNumber",Ka(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Qa(e,"POST","/v1/accounts:signInWithPhoneNumber",Ka(e,t));if(n.temporaryProof)throw eo(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Qa(e,"POST","/v1/accounts:signInWithPhoneNumber",Ka(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Jo)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Qo({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e){var t,n,r,i,s,a;const o=j(U(e)),c=null!==(t=o.apiKey)&&void 0!==t?t:null,x=null!==(n=o.oobCode)&&void 0!==n?n:null,_=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);Ma(c&&x&&_,"argument-error"),this.apiKey=c,this.operation=_,this.code=x,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=j(U(e)).link,n=t?j(U(t)).deep_link_id:null,r=j(U(e)).deep_link_id;return(r?j(U(r)).link:null)||r||n||t||e}(e);try{return new Xo(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zo{constructor(){this.providerId=Zo.PROVIDER_ID}static credential(e,t){return Go._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xo.parseLink(t);return Ma(n,"argument-error"),Go._fromEmailAndCode(e,n.code,n.tenantId)}}Zo.PROVIDER_ID="password",Zo.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Zo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ec{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc extends ec{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nc extends tc{constructor(){super("facebook.com")}static credential(e){return Yo._fromParams({providerId:nc.PROVIDER_ID,signInMethod:nc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nc.credentialFromTaggedObject(e)}static credentialFromError(e){return nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nc.credential(e.oauthAccessToken)}catch(e){return null}}}nc.FACEBOOK_SIGN_IN_METHOD="facebook.com",nc.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rc extends tc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Yo._fromParams({providerId:rc.PROVIDER_ID,signInMethod:rc.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rc.credentialFromTaggedObject(e)}static credentialFromError(e){return rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return rc.credential(t,n)}catch(e){return null}}}rc.GOOGLE_SIGN_IN_METHOD="google.com",rc.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ic extends tc{constructor(){super("github.com")}static credential(e){return Yo._fromParams({providerId:ic.PROVIDER_ID,signInMethod:ic.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ic.credentialFromTaggedObject(e)}static credentialFromError(e){return ic.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ic.credential(e.oauthAccessToken)}catch(e){return null}}}ic.GITHUB_SIGN_IN_METHOD="github.com",ic.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sc extends tc{constructor(){super("twitter.com")}static credential(e,t){return Yo._fromParams({providerId:sc.PROVIDER_ID,signInMethod:sc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sc.credentialFromTaggedObject(e)}static credentialFromError(e){return sc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return sc.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ac(e,t){return Qa(e,"POST","/v1/accounts:signUp",Ka(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sc.TWITTER_SIGN_IN_METHOD="twitter.com",sc.PROVIDER_ID="twitter.com";class oc{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await _o._fromIdTokenResponse(e,n,r),s=cc(n);return new oc({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=cc(n);return new oc({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function cc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc extends E{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,xc.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new xc(e,t,n,r)}}function _c(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw xc._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dc(e,t,n=!1){const r=await io(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return oc._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function lc(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await io(e,_c(r,i,t,e),n);Ma(s.idToken,r,"internal-error");const a=ro(s.idToken);Ma(a,r,"internal-error");const{sub:o}=a;return Ma(e.uid===o,r,"user-mismatch"),oc._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Oa(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hc(e,t,n=!1){const r="signIn",i=await _c(e,r,t),s=await oc._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function uc(e,t){return hc(Uo(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function fc(e,t){return z(e).setPersistence(t)}new WeakMap;const pc="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pc,"1"),this.storage.removeItem(pc),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends bc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=y();return vo(e)||Co(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=So(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ko()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gc.type="LOCAL";const mc=gc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc extends bc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vc.type="SESSION";const yc=vc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tc(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wc.receivers=[];class Ic{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const c=Tc("",20);r.port1.start();const x=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(x),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(x),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Cc(){return void 0!==Ec().WorkerGlobalScope&&"function"==typeof Ec().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const kc="firebaseLocalStorageDb",Sc="firebaseLocalStorage",Nc="fbase_key";class Pc{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Rc(e,t){return e.transaction([Sc],t?"readwrite":"readonly").objectStore(Sc)}function Oc(){const e=indexedDB.open(kc,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Sc,{keyPath:Nc})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Sc)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(kc);return new Pc(e).toPromise()}(),t(await Oc()))}))}))}async function Ac(e,t,n){const r=Rc(e,!0).put({[Nc]:t,value:n});return new Pc(r).toPromise()}function Lc(e,t){const n=Rc(e,!0).delete(t);return new Pc(n).toPromise()}class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Oc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wc._getInstance(Cc()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ic(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await Ac(e,pc,"1"),await Lc(e,pc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ac(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Rc(e,!1).get(t),r=await new Pc(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Lc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rc(e,!1).getAll();return new Pc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Dc.type="LOCAL";const Mc=Dc;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Lo("rcb"),new Va(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Fc="recaptcha";async function jc(e,t,n){var r;const i=await n.verify();try{let s;if(Ma("string"==typeof i,e,"argument-error"),Ma(n.type===Fc,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ma("enroll"===t.type,e,"internal-error");const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await function(e,t){return Ya(e,"POST","/v2/accounts/mfaEnrollment:start",Ka(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Ma("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;Ma(n,e,"missing-multi-factor-info");const a=await function(e,t){return Ya(e,"POST","/v2/accounts/mfaSignIn:start",Ka(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Ya(e,"POST","/v1/accounts:sendVerificationCode",Ka(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Uc{constructor(e){this.providerId=Uc.PROVIDER_ID,this.auth=Uo(e)}verifyPhoneNumber(e,t){return jc(this.auth,e,z(t))}static credential(e,t){return Qo._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Uc.credentialFromTaggedObject(t)}static credentialFromError(e){return Uc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Qo._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qc(e,t){return t?ho(t):(Ma(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Uc.PROVIDER_ID="phone",Uc.PHONE_SIGN_IN_METHOD="phone";class Wc extends Bo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ko(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ko(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ko(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hc(e){return hc(e.auth,new Wc(e),e.bypassAuthState)}function Vc(e){const{auth:t,user:n}=e;return Ma(n,t,"internal-error"),lc(n,new Wc(e),e.bypassAuthState)}async function Bc(e){const{auth:t,user:n}=e;return Ma(n,t,"internal-error"),dc(n,new Wc(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hc;case"linkViaPopup":case"linkViaRedirect":return Bc;case"reauthViaPopup":case"reauthViaRedirect":return Vc;default:Oa(this.auth,"internal-error")}}resolve(e){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ja(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $c=new Va(2e3,1e4);class Gc extends zc{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Gc.currentPopupAction&&Gc.currentPopupAction.cancel(),Gc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ma(e,this.auth,"internal-error"),e}async onExecution(){ja(1===this.filter.length,"Popup operations only handle one event");const e=Tc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Aa(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Aa(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Aa(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,$c.get())};e()}}Gc.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Kc="pendingRedirect",Yc=new Map;class Jc extends zc{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Zc(t),r=Xc(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Qc(e,t){Yc.set(e._key(),t)}function Xc(e){return ho(e._redirectPersistence)}function Zc(e){return po(Kc,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(e,t,n=!1){const r=Uo(e),i=qc(r,t),s=new Jc(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class tx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rx(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!rx(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Aa(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nx(e))}saveEventToCache(e){this.cachedEventUids.add(nx(e)),this.lastProcessedEventTime=Date.now()}}function nx(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function rx({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ix=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sx=/^https?/;async function ax(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ya(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ox(e))return}catch(e){}Oa(e,"unauthorized-domain")}function ox(e){const t=Ua(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!sx.test(n))return!1;if(ix.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=new Va(3e4,6e4);function xx(){const e=Ec().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let _x=null;function dx(e){return _x=_x||function(e){return new Promise(((t,n)=>{var r,i,s;function a(){xx(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xx(),n(Aa(e,"network-request-failed"))},timeout:cx.get()})}if(null===(i=null===(r=Ec().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Ec().gapi)||void 0===s?void 0:s.load)){const t=Lo("iframefcb");return Ec()[t]=()=>{gapi.load?a():n(Aa(e,"network-request-failed"))},Ao(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}a()}})).catch((e=>{throw _x=null,e}))}(e),_x}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=new Va(5e3,15e3),hx="__/auth/iframe",ux="emulator/auth/iframe",fx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},px=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bx(e){const t=e.config;Ma(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Ba(t,ux):`https://${e.config.authDomain}/${hx}`,r={apiKey:t.apiKey,appName:e.name,v:Ae},i=px.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${F(r).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class mx{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function vx(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},gx),{width:r.toString(),height:i.toString(),top:s,left:a}),x=y().toLowerCase();n&&(o=yo(x)?"_blank":n),mo(x)&&(t=t||"http://localhost",c.scrollbars="yes");const _=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=y()){var t;return Co(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(x)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new mx(null);const d=window.open(t||"",o,_);Ma(d,e,"popup-blocked");try{d.focus()}catch(e){}return new mx(d)}const yx="__/auth/handler",wx="emulator/auth/handler",Tx=encodeURIComponent("fac");async function Ix(e,t,n,r,i,s){Ma(e.config.authDomain,e,"auth-domain-config-required"),Ma(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ae,eventId:i};if(t instanceof ec){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",A(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof tc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];const c=await e._getAppCheckToken(),x=c?`#${Tx}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${yx}`;return Ba(e,wx)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${F(o).slice(1)}${x}`}const Ex="webStorageSupport";const Cx=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yc,this._completeRedirectFn=ex,this._overrideRedirectResult=Qc}async _openPopup(e,t,n,r){var i;ja(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return vx(e,await Ix(e,t,n,Ua(),r),Tc())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){Ec().location.href=e}(await Ix(e,t,n,Ua(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ja(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await dx(e),n=Ec().gapi;return Ma(n,e,"internal-error"),t.open({where:document.body,url:bx(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fx,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Aa(e,"network-request-failed"),s=Ec().setTimeout((()=>{r(i)}),lx.get());function a(){Ec().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new tx(e);return t.register("authEvent",(t=>{Ma(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ex,{type:Ex},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Ex];void 0!==i&&t(!!i),Oa(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ax(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return So()||vo()||Co()}};var kx="@firebase/auth",Sx="0.23.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ma(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Px=m("authIdTokenMaxAge")||300;let Rx=null;const Ox=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Px)return;const i=null==n?void 0:n.token;Rx!==i&&(Rx=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ax(e=De()){const t=Pe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Pe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(D(n.getOptions(),null!=t?t:{}))return e;Oa(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Cx,persistence:[Mc,mc,yc]}),r=m("authTokenSyncURL");if(r){const e=Ox(r);!function(e,t,n){z(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,r){z(e).onIdTokenChanged(t,n,r)}(n,(t=>e(t)))}const i=p("auth");return i&&Wo(n,`http://${i}`),n}var Lx;Lx="Browser",Ne(new $("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;Ma(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:Lx,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:No(Lx)},c=new jo(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ho);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ne(new $("auth-internal",(e=>(e=>new Nx(e))(Uo(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Me(kx,Sx,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Lx)),Me(kx,Sx,"esm2017");const Dx=n(165),Mx=n(831),Fx=document.querySelector(".bubble"),jx=document.querySelector("#logo");function Ux(){Fx.style.visibility="hidden",Fx.textContent="",jx.src="",jx.src=Mx}function qx(e,t=3){Ux(),jx.src=Dx,Fx.style.visibility="visible",Fx.innerHTML=e,setTimeout((()=>{Ux()}),1e3*t)}function Wx(e,t=3){Ux(),Fx.style.visibility="visible",Fx.textContent=e,setTimeout((()=>{Ux()}),1e3*t)}const Hx=Le(Ye);function Vx(){let e=Bx();e=e??{},e.updateConfig=null,zx(e)}function Bx(){return JSON.parse(localStorage.getItem("state"))}function zx(e){localStorage.setItem("state",JSON.stringify(e))}function $x(){const e={...Bx()};let t={...e?.todos};t=t??{};const n={2592696:{id:2592696,message:"Pay electric bill",date:"2021-03-30T02:05:02.587Z",category:null,completed:!1},12462012:{id:"12462012",message:" feed dog",date:"2021-03-30T02:04:30.913Z",category:"Chores",completed:!1},41152409:{id:41152409,message:"cheese",date:"2021-03-30T02:03:53.599Z",category:"Grocery",completed:!1},53541349:{id:53541349,message:"milk",date:"2021-03-30T02:03:53.599Z",category:"Grocery",completed:!1},95110512:{id:95110512,message:" dishes",date:"2021-03-30T02:04:20.509Z",category:"Chores",completed:!1},98802921:{id:"98802921",message:"fix Timmy's bicycle",date:"2021-03-30T02:12:28.203Z",category:null,completed:!1}};return 0===Object.keys(t).length?(document.querySelector("#todoList").style.opacity="0.5",n):t}function Gx(e){const t={...Bx()};let n={...t?.todos};if(n=n??{},0===Object.keys(n).length)return;let r=n[e.id];r={...r,...e},Object.assign(n,{[r.id]:r}),t.todos=n,zx(t)}function Kx(){const e=Ax().currentUser;if(e)try{Wx("Saving...");return fa(ha(Ea(Hx),`users/${e.uid}`),{tasks:JSON.stringify(Bx())})}catch(e){console.log(...function(e,...t){try{Yx().consoleLog(e,t)}catch(e){}return t}("2886179417_0",e))}return qx("PSSSST!\nRegister or Sign in to sync your tasks across devices! ",6)}function Yx(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xdae715=_0xad95;(function(_0x59def9,_0x279b6b){var _0x50813b=_0xad95,_0x5b13a0=_0x59def9();while(!![]){try{var _0x6decc6=parseInt(_0x50813b(0x1fb))/0x1+parseInt(_0x50813b(0x2a4))/0x2+parseInt(_0x50813b(0x28a))/0x3+parseInt(_0x50813b(0x26e))/0x4+parseInt(_0x50813b(0x282))/0x5+-parseInt(_0x50813b(0x205))/0x6+-parseInt(_0x50813b(0x235))/0x7;if(_0x6decc6===_0x279b6b)break;else _0x5b13a0['push'](_0x5b13a0['shift']());}catch(_0xf9ee43){_0x5b13a0['push'](_0x5b13a0['shift']());}}}(_0x583f,0xa3862));function _0xad95(_0x4ba0bf,_0x39df2e){var _0x583fa2=_0x583f();return _0xad95=function(_0xad9514,_0x177949){_0xad9514=_0xad9514-0x1c3;var _0x4c8354=_0x583fa2[_0xad9514];return _0x4c8354;},_0xad95(_0x4ba0bf,_0x39df2e);}var j=Object[_0xdae715(0x243)],H=Object[_0xdae715(0x1cd)],G=Object[_0xdae715(0x25d)],ee=Object[_0xdae715(0x27c)],te=Object['getPrototypeOf'],ne=Object[_0xdae715(0x29c)][_0xdae715(0x291)],re=(_0x23916a,_0x5e933c,_0x123486,_0x4b475f)=>{var _0x37993d=_0xdae715;if(_0x5e933c&&typeof _0x5e933c==_0x37993d(0x279)||typeof _0x5e933c==_0x37993d(0x251)){for(let _0x181e88 of ee(_0x5e933c))!ne[_0x37993d(0x217)](_0x23916a,_0x181e88)&&_0x181e88!==_0x123486&&H(_0x23916a,_0x181e88,{'get':()=>_0x5e933c[_0x181e88],'enumerable':!(_0x4b475f=G(_0x5e933c,_0x181e88))||_0x4b475f[_0x37993d(0x1ec)]});}return _0x23916a;},x=(_0x352a91,_0x22be7e,_0x34abd3)=>(_0x34abd3=_0x352a91!=null?j(te(_0x352a91)):{},re(_0x22be7e||!_0x352a91||!_0x352a91[_0xdae715(0x1e0)]?H(_0x34abd3,'default',{'value':_0x352a91,'enumerable':!0x0}):_0x34abd3,_0x352a91)),X=class{constructor(_0x526c52,_0x15f287,_0x4b0e88,_0xfb8c1,_0x20da5d){var _0x49bf58=_0xdae715;this[_0x49bf58(0x1df)]=_0x526c52,this[_0x49bf58(0x250)]=_0x15f287,this[_0x49bf58(0x261)]=_0x4b0e88,this[_0x49bf58(0x25b)]=_0xfb8c1,this[_0x49bf58(0x26b)]=_0x20da5d,this[_0x49bf58(0x2a8)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x49bf58(0x29e)]=!0x1,this['_connecting']=!0x1,this[_0x49bf58(0x1e5)]=_0x526c52[_0x49bf58(0x1da)]?.[_0x49bf58(0x1c5)]?.['NEXT_RUNTIME']===_0x49bf58(0x28b),this['_inBrowser']=!this[_0x49bf58(0x1df)][_0x49bf58(0x1da)]?.[_0x49bf58(0x20d)]?.['node']&&!this['_inNextEdge'],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x49bf58(0x293)]=0x14,this[_0x49bf58(0x254)]=_0x49bf58(0x23d),this[_0x49bf58(0x263)]=(this['_inBrowser']?_0x49bf58(0x281):_0x49bf58(0x25c))+this['_webSocketErrorDocsLink'];}async['getWebSocketClass'](){var _0x326261=_0xdae715;if(this['_WebSocketClass'])return this[_0x326261(0x218)];let _0x4d64f6;if(this['_inBrowser']||this[_0x326261(0x1e5)])_0x4d64f6=this[_0x326261(0x1df)]['WebSocket'];else{if(this[_0x326261(0x1df)][_0x326261(0x1da)]?.[_0x326261(0x284)])_0x4d64f6=this['global'][_0x326261(0x1da)]?.[_0x326261(0x284)];else try{let _0x112f96=await import(_0x326261(0x208));_0x4d64f6=(await import((await import(_0x326261(0x1ee)))[_0x326261(0x212)](_0x112f96[_0x326261(0x29f)](this[_0x326261(0x25b)],'ws/index.js'))['toString']()))[_0x326261(0x20c)];}catch{try{_0x4d64f6=require(require(_0x326261(0x208))[_0x326261(0x29f)](this[_0x326261(0x25b)],'ws'));}catch{throw new Error(_0x326261(0x211));}}}return this[_0x326261(0x218)]=_0x4d64f6,_0x4d64f6;}['_connectToHostNow'](){var _0xce7566=_0xdae715;this[_0xce7566(0x22b)]||this[_0xce7566(0x29e)]||this[_0xce7566(0x29d)]>=this[_0xce7566(0x293)]||(this[_0xce7566(0x296)]=!0x1,this[_0xce7566(0x22b)]=!0x0,this['_connectAttemptCount']++,this[_0xce7566(0x239)]=new Promise((_0x5b4f1a,_0x490e1d)=>{var _0x307a7d=_0xce7566;this[_0x307a7d(0x267)]()[_0x307a7d(0x298)](_0x59ca83=>{var _0x120355=_0x307a7d;let _0x5226b1=new _0x59ca83(_0x120355(0x1ef)+(!this[_0x120355(0x229)]&&this[_0x120355(0x26b)]?'gateway.docker.internal':this[_0x120355(0x250)])+':'+this[_0x120355(0x261)]);_0x5226b1[_0x120355(0x1e8)]=()=>{var _0x51d78c=_0x120355;this[_0x51d78c(0x2a8)]=!0x1,this[_0x51d78c(0x255)](_0x5226b1),this[_0x51d78c(0x1ff)](),_0x490e1d(new Error(_0x51d78c(0x24d)));},_0x5226b1[_0x120355(0x1f0)]=()=>{var _0x4f722c=_0x120355;this[_0x4f722c(0x229)]||_0x5226b1[_0x4f722c(0x1ca)]&&_0x5226b1[_0x4f722c(0x1ca)][_0x4f722c(0x22c)]&&_0x5226b1[_0x4f722c(0x1ca)][_0x4f722c(0x22c)](),_0x5b4f1a(_0x5226b1);},_0x5226b1[_0x120355(0x249)]=()=>{var _0x10b894=_0x120355;this[_0x10b894(0x296)]=!0x0,this[_0x10b894(0x255)](_0x5226b1),this['_attemptToReconnectShortly']();},_0x5226b1[_0x120355(0x1fd)]=_0x5b26c1=>{var _0x46dd2b=_0x120355;try{_0x5b26c1&&_0x5b26c1[_0x46dd2b(0x1dd)]&&this[_0x46dd2b(0x229)]&&JSON[_0x46dd2b(0x283)](_0x5b26c1[_0x46dd2b(0x1dd)])[_0x46dd2b(0x230)]===_0x46dd2b(0x1d6)&&this[_0x46dd2b(0x1df)][_0x46dd2b(0x23a)][_0x46dd2b(0x1d6)]();}catch{}};})[_0x307a7d(0x298)](_0x3f28c8=>(this[_0x307a7d(0x29e)]=!0x0,this[_0x307a7d(0x22b)]=!0x1,this[_0x307a7d(0x296)]=!0x1,this[_0x307a7d(0x2a8)]=!0x0,this['_connectAttemptCount']=0x0,_0x3f28c8))[_0x307a7d(0x1cb)](_0x5e4ef1=>(this[_0x307a7d(0x29e)]=!0x1,this[_0x307a7d(0x22b)]=!0x1,console['warn'](_0x307a7d(0x221)+this[_0x307a7d(0x254)]),_0x490e1d(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x5e4ef1&&_0x5e4ef1['message'])))));}));}['_disposeWebsocket'](_0x5479ff){var _0x33d12d=_0xdae715;this[_0x33d12d(0x29e)]=!0x1,this['_connecting']=!0x1;try{_0x5479ff[_0x33d12d(0x249)]=null,_0x5479ff[_0x33d12d(0x1e8)]=null,_0x5479ff[_0x33d12d(0x1f0)]=null;}catch{}try{_0x5479ff[_0x33d12d(0x22e)]<0x2&&_0x5479ff['close']();}catch{}}[_0xdae715(0x1ff)](){var _0x505109=_0xdae715;clearTimeout(this[_0x505109(0x1f5)]),!(this[_0x505109(0x29d)]>=this[_0x505109(0x293)])&&(this[_0x505109(0x1f5)]=setTimeout(()=>{var _0x27aecd=_0x505109;this[_0x27aecd(0x29e)]||this[_0x27aecd(0x22b)]||(this[_0x27aecd(0x1e4)](),this['_ws']?.[_0x27aecd(0x1cb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x505109(0x1f5)]['unref']&&this['_reconnectTimeout'][_0x505109(0x22c)]());}async[_0xdae715(0x27e)](_0x5e5e0a){var _0x1b1f76=_0xdae715;try{if(!this[_0x1b1f76(0x2a8)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x1b1f76(0x239)])[_0x1b1f76(0x27e)](JSON[_0x1b1f76(0x29a)](_0x5e5e0a));}catch(_0x27c694){console[_0x1b1f76(0x21a)](this[_0x1b1f76(0x263)]+':\\x20'+(_0x27c694&&_0x27c694[_0x1b1f76(0x286)])),this['_allowedToSend']=!0x1,this[_0x1b1f76(0x1ff)]();}}};function b(_0x28cdc2,_0x5d012b,_0x20dfcd,_0x22aacd,_0x809da6,_0x14a22c){var _0x5b5708=_0xdae715;let _0xac162f=_0x20dfcd[_0x5b5708(0x22d)](',')['map'](_0x4cf5af=>{var _0x1f4b03=_0x5b5708;try{_0x28cdc2[_0x1f4b03(0x241)]||((_0x809da6==='next.js'||_0x809da6===_0x1f4b03(0x26c)||_0x809da6==='astro')&&(_0x809da6+=!_0x28cdc2[_0x1f4b03(0x1da)]?.['versions']?.['node']&&_0x28cdc2[_0x1f4b03(0x1da)]?.[_0x1f4b03(0x1c5)]?.[_0x1f4b03(0x220)]!==_0x1f4b03(0x28b)?_0x1f4b03(0x246):_0x1f4b03(0x1ce)),_0x28cdc2[_0x1f4b03(0x241)]={'id':+new Date(),'tool':_0x809da6});let _0x2bc495=new X(_0x28cdc2,_0x5d012b,_0x4cf5af,_0x22aacd,_0x14a22c);return _0x2bc495[_0x1f4b03(0x27e)][_0x1f4b03(0x295)](_0x2bc495);}catch(_0x3f12e7){return console[_0x1f4b03(0x21a)](_0x1f4b03(0x277),_0x3f12e7&&_0x3f12e7['message']),()=>{};}});return _0x3f641a=>_0xac162f[_0x5b5708(0x1d5)](_0xd9564c=>_0xd9564c(_0x3f641a));}function W(_0x4e84c6){var _0x32801f=_0xdae715;let _0x5e4fff=function(_0x389b25,_0x9710ca){return _0x9710ca-_0x389b25;},_0x9e7587;if(_0x4e84c6['performance'])_0x9e7587=function(){var _0x1d6d22=_0xad95;return _0x4e84c6[_0x1d6d22(0x1e6)][_0x1d6d22(0x242)]();};else{if(_0x4e84c6[_0x32801f(0x1da)]&&_0x4e84c6[_0x32801f(0x1da)][_0x32801f(0x1ea)]&&_0x4e84c6[_0x32801f(0x1da)]?.[_0x32801f(0x1c5)]?.[_0x32801f(0x220)]!=='edge')_0x9e7587=function(){var _0x361153=_0x32801f;return _0x4e84c6[_0x361153(0x1da)][_0x361153(0x1ea)]();},_0x5e4fff=function(_0x51885e,_0x341e07){return 0x3e8*(_0x341e07[0x0]-_0x51885e[0x0])+(_0x341e07[0x1]-_0x51885e[0x1])/0xf4240;};else try{let {performance:_0x470674}=require('perf_hooks');_0x9e7587=function(){var _0x859d6e=_0x32801f;return _0x470674[_0x859d6e(0x242)]();};}catch{_0x9e7587=function(){return+new Date();};}}return{'elapsed':_0x5e4fff,'timeStamp':_0x9e7587,'now':()=>Date[_0x32801f(0x242)]()};}function J(_0x13d427,_0x421070,_0x173892){var _0x2a9b9d=_0xdae715;if(_0x13d427[_0x2a9b9d(0x1c7)]!==void 0x0)return _0x13d427['_consoleNinjaAllowedToStart'];let _0x478471=_0x13d427['process']?.[_0x2a9b9d(0x20d)]?.[_0x2a9b9d(0x29b)]||_0x13d427[_0x2a9b9d(0x1da)]?.[_0x2a9b9d(0x1c5)]?.['NEXT_RUNTIME']===_0x2a9b9d(0x28b);return _0x478471&&_0x173892===_0x2a9b9d(0x25a)?_0x13d427['_consoleNinjaAllowedToStart']=!0x1:_0x13d427['_consoleNinjaAllowedToStart']=_0x478471||!_0x421070||_0x13d427[_0x2a9b9d(0x23a)]?.[_0x2a9b9d(0x278)]&&_0x421070[_0x2a9b9d(0x1d4)](_0x13d427[_0x2a9b9d(0x23a)][_0x2a9b9d(0x278)]),_0x13d427['_consoleNinjaAllowedToStart'];}function Y(_0x3206ad,_0x5670b1,_0x59629b,_0x4d370b){var _0x50cb4b=_0xdae715;_0x3206ad=_0x3206ad,_0x5670b1=_0x5670b1,_0x59629b=_0x59629b,_0x4d370b=_0x4d370b;let _0x8ab0e9=W(_0x3206ad),_0x265656=_0x8ab0e9['elapsed'],_0x32e2ac=_0x8ab0e9[_0x50cb4b(0x226)];class _0x13b476{constructor(){var _0x33a376=_0x50cb4b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x33a376(0x1f8)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x3206ad['undefined'],this[_0x33a376(0x22a)]=_0x3206ad[_0x33a376(0x1fc)],this[_0x33a376(0x1d9)]=Object[_0x33a376(0x25d)],this[_0x33a376(0x1e2)]=Object[_0x33a376(0x27c)],this[_0x33a376(0x1de)]=_0x3206ad[_0x33a376(0x1d8)],this['_regExpToString']=RegExp[_0x33a376(0x29c)]['toString'],this[_0x33a376(0x1fa)]=Date[_0x33a376(0x29c)][_0x33a376(0x262)];}[_0x50cb4b(0x1d2)](_0xc772e8,_0x38e33c,_0x2eb1d1,_0x44b7c4){var _0x3dd284=_0x50cb4b,_0x40c8fb=this,_0x1549d4=_0x2eb1d1[_0x3dd284(0x273)];function _0x3f8615(_0x4e0ceb,_0x15d514,_0x1740cc){var _0x44ee4a=_0x3dd284;_0x15d514['type']=_0x44ee4a(0x248),_0x15d514[_0x44ee4a(0x224)]=_0x4e0ceb[_0x44ee4a(0x286)],_0x1408e6=_0x1740cc[_0x44ee4a(0x29b)]['current'],_0x1740cc[_0x44ee4a(0x29b)]['current']=_0x15d514,_0x40c8fb[_0x44ee4a(0x233)](_0x15d514,_0x1740cc);}try{_0x2eb1d1[_0x3dd284(0x2a6)]++,_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1['autoExpandPreviousObjects'][_0x3dd284(0x23f)](_0x38e33c);var _0x539eb6,_0x20c5f4,_0xff5c17,_0x4aa39c,_0x4b4128=[],_0x25a756=[],_0x4abf71,_0x34d40e=this[_0x3dd284(0x234)](_0x38e33c),_0x4136fa=_0x34d40e===_0x3dd284(0x20f),_0x336be6=!0x1,_0x4efdbb=_0x34d40e===_0x3dd284(0x251),_0x423e58=this[_0x3dd284(0x21b)](_0x34d40e),_0x38587c=this['_isPrimitiveWrapperType'](_0x34d40e),_0x4ea1f7=_0x423e58||_0x38587c,_0x1fe20e={},_0x540029=0x0,_0x2b67ee=!0x1,_0x1408e6,_0x6d1ae2=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2eb1d1[_0x3dd284(0x2a1)]){if(_0x4136fa){if(_0x20c5f4=_0x38e33c[_0x3dd284(0x28c)],_0x20c5f4>_0x2eb1d1[_0x3dd284(0x2a9)]){for(_0xff5c17=0x0,_0x4aa39c=_0x2eb1d1[_0x3dd284(0x2a9)],_0x539eb6=_0xff5c17;_0x539eb6<_0x4aa39c;_0x539eb6++)_0x25a756['push'](_0x40c8fb['_addProperty'](_0x4b4128,_0x38e33c,_0x34d40e,_0x539eb6,_0x2eb1d1));_0xc772e8[_0x3dd284(0x24f)]=!0x0;}else{for(_0xff5c17=0x0,_0x4aa39c=_0x20c5f4,_0x539eb6=_0xff5c17;_0x539eb6<_0x4aa39c;_0x539eb6++)_0x25a756[_0x3dd284(0x23f)](_0x40c8fb[_0x3dd284(0x202)](_0x4b4128,_0x38e33c,_0x34d40e,_0x539eb6,_0x2eb1d1));}_0x2eb1d1[_0x3dd284(0x289)]+=_0x25a756[_0x3dd284(0x28c)];}if(!(_0x34d40e===_0x3dd284(0x207)||_0x34d40e===_0x3dd284(0x1c4))&&!_0x423e58&&_0x34d40e!==_0x3dd284(0x21c)&&_0x34d40e!==_0x3dd284(0x247)&&_0x34d40e!==_0x3dd284(0x264)){var _0x4e31fc=_0x44b7c4[_0x3dd284(0x1cf)]||_0x2eb1d1[_0x3dd284(0x1cf)];if(this['_isSet'](_0x38e33c)?(_0x539eb6=0x0,_0x38e33c['forEach'](function(_0xd1ad2a){var _0x4ec5af=_0x3dd284;if(_0x540029++,_0x2eb1d1[_0x4ec5af(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;return;}if(!_0x2eb1d1[_0x4ec5af(0x26d)]&&_0x2eb1d1['autoExpand']&&_0x2eb1d1[_0x4ec5af(0x289)]>_0x2eb1d1[_0x4ec5af(0x21f)]){_0x2b67ee=!0x0;return;}_0x25a756['push'](_0x40c8fb['_addProperty'](_0x4b4128,_0x38e33c,'Set',_0x539eb6++,_0x2eb1d1,function(_0x37fde4){return function(){return _0x37fde4;};}(_0xd1ad2a)));})):this[_0x3dd284(0x27d)](_0x38e33c)&&_0x38e33c['forEach'](function(_0x38cf6d,_0x4f28c5){var _0x302082=_0x3dd284;if(_0x540029++,_0x2eb1d1[_0x302082(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;return;}if(!_0x2eb1d1['isExpressionToEvaluate']&&_0x2eb1d1[_0x302082(0x273)]&&_0x2eb1d1[_0x302082(0x289)]>_0x2eb1d1[_0x302082(0x21f)]){_0x2b67ee=!0x0;return;}var _0x473532=_0x4f28c5[_0x302082(0x262)]();_0x473532[_0x302082(0x28c)]>0x64&&(_0x473532=_0x473532['slice'](0x0,0x64)+_0x302082(0x28d)),_0x25a756[_0x302082(0x23f)](_0x40c8fb[_0x302082(0x202)](_0x4b4128,_0x38e33c,_0x302082(0x214),_0x473532,_0x2eb1d1,function(_0x2a73fc){return function(){return _0x2a73fc;};}(_0x38cf6d)));}),!_0x336be6){try{for(_0x4abf71 in _0x38e33c)if(!(_0x4136fa&&_0x6d1ae2[_0x3dd284(0x200)](_0x4abf71))&&!this[_0x3dd284(0x25e)](_0x38e33c,_0x4abf71,_0x2eb1d1)){if(_0x540029++,_0x2eb1d1['autoExpandPropertyCount']++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;break;}if(!_0x2eb1d1[_0x3dd284(0x26d)]&&_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1['autoExpandPropertyCount']>_0x2eb1d1[_0x3dd284(0x21f)]){_0x2b67ee=!0x0;break;}_0x25a756['push'](_0x40c8fb['_addObjectProperty'](_0x4b4128,_0x1fe20e,_0x38e33c,_0x34d40e,_0x4abf71,_0x2eb1d1));}}catch{}if(_0x1fe20e[_0x3dd284(0x228)]=!0x0,_0x4efdbb&&(_0x1fe20e[_0x3dd284(0x259)]=!0x0),!_0x2b67ee){var _0x17fd77=[]['concat'](this[_0x3dd284(0x1e2)](_0x38e33c))[_0x3dd284(0x20b)](this[_0x3dd284(0x237)](_0x38e33c));for(_0x539eb6=0x0,_0x20c5f4=_0x17fd77[_0x3dd284(0x28c)];_0x539eb6<_0x20c5f4;_0x539eb6++)if(_0x4abf71=_0x17fd77[_0x539eb6],!(_0x4136fa&&_0x6d1ae2['test'](_0x4abf71[_0x3dd284(0x262)]()))&&!this[_0x3dd284(0x25e)](_0x38e33c,_0x4abf71,_0x2eb1d1)&&!_0x1fe20e['_p_'+_0x4abf71[_0x3dd284(0x262)]()]){if(_0x540029++,_0x2eb1d1[_0x3dd284(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;break;}if(!_0x2eb1d1[_0x3dd284(0x26d)]&&_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1[_0x3dd284(0x289)]>_0x2eb1d1['autoExpandLimit']){_0x2b67ee=!0x0;break;}_0x25a756[_0x3dd284(0x23f)](_0x40c8fb[_0x3dd284(0x213)](_0x4b4128,_0x1fe20e,_0x38e33c,_0x34d40e,_0x4abf71,_0x2eb1d1));}}}}}if(_0xc772e8['type']=_0x34d40e,_0x4ea1f7?(_0xc772e8['value']=_0x38e33c[_0x3dd284(0x266)](),this[_0x3dd284(0x27b)](_0x34d40e,_0xc772e8,_0x2eb1d1,_0x44b7c4)):_0x34d40e===_0x3dd284(0x27f)?_0xc772e8[_0x3dd284(0x28f)]=this['_dateToString'][_0x3dd284(0x217)](_0x38e33c):_0x34d40e==='bigint'?_0xc772e8[_0x3dd284(0x28f)]=_0x38e33c[_0x3dd284(0x262)]():_0x34d40e===_0x3dd284(0x219)?_0xc772e8[_0x3dd284(0x28f)]=this[_0x3dd284(0x232)][_0x3dd284(0x217)](_0x38e33c):_0x34d40e===_0x3dd284(0x253)&&this['_Symbol']?_0xc772e8['value']=this[_0x3dd284(0x1de)][_0x3dd284(0x29c)]['toString'][_0x3dd284(0x217)](_0x38e33c):!_0x2eb1d1['depth']&&!(_0x34d40e===_0x3dd284(0x207)||_0x34d40e===_0x3dd284(0x1c4))&&(delete _0xc772e8[_0x3dd284(0x28f)],_0xc772e8[_0x3dd284(0x1cc)]=!0x0),_0x2b67ee&&(_0xc772e8['cappedProps']=!0x0),_0x1408e6=_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)],_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)]=_0xc772e8,this['_treeNodePropertiesBeforeFullValue'](_0xc772e8,_0x2eb1d1),_0x25a756[_0x3dd284(0x28c)]){for(_0x539eb6=0x0,_0x20c5f4=_0x25a756['length'];_0x539eb6<_0x20c5f4;_0x539eb6++)_0x25a756[_0x539eb6](_0x539eb6);}_0x4b4128[_0x3dd284(0x28c)]&&(_0xc772e8[_0x3dd284(0x1cf)]=_0x4b4128);}catch(_0x26df84){_0x3f8615(_0x26df84,_0xc772e8,_0x2eb1d1);}return this[_0x3dd284(0x1c6)](_0x38e33c,_0xc772e8),this[_0x3dd284(0x23c)](_0xc772e8,_0x2eb1d1),_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)]=_0x1408e6,_0x2eb1d1['level']--,_0x2eb1d1[_0x3dd284(0x273)]=_0x1549d4,_0x2eb1d1['autoExpand']&&_0x2eb1d1['autoExpandPreviousObjects']['pop'](),_0xc772e8;}[_0x50cb4b(0x237)](_0x5cd1ca){var _0x15a819=_0x50cb4b;return Object[_0x15a819(0x280)]?Object[_0x15a819(0x280)](_0x5cd1ca):[];}[_0x50cb4b(0x271)](_0x587a78){var _0x599b8a=_0x50cb4b;return!!(_0x587a78&&_0x3206ad['Set']&&this['_objectToString'](_0x587a78)===_0x599b8a(0x1e3)&&_0x587a78['forEach']);}[_0x50cb4b(0x25e)](_0x334c17,_0x5ccd64,_0x2c40ce){var _0x45d689=_0x50cb4b;return _0x2c40ce[_0x45d689(0x256)]?typeof _0x334c17[_0x5ccd64]==_0x45d689(0x251):!0x1;}[_0x50cb4b(0x234)](_0x4250f2){var _0x196489=_0x50cb4b,_0x21efc7='';return _0x21efc7=typeof _0x4250f2,_0x21efc7===_0x196489(0x279)?this[_0x196489(0x252)](_0x4250f2)===_0x196489(0x265)?_0x21efc7=_0x196489(0x20f):this[_0x196489(0x252)](_0x4250f2)===_0x196489(0x223)?_0x21efc7=_0x196489(0x27f):this[_0x196489(0x252)](_0x4250f2)==='[object\\x20BigInt]'?_0x21efc7='bigint':_0x4250f2===null?_0x21efc7=_0x196489(0x207):_0x4250f2[_0x196489(0x268)]&&(_0x21efc7=_0x4250f2[_0x196489(0x268)]['name']||_0x21efc7):_0x21efc7==='undefined'&&this[_0x196489(0x22a)]&&_0x4250f2 instanceof this['_HTMLAllCollection']&&(_0x21efc7=_0x196489(0x1fc)),_0x21efc7;}[_0x50cb4b(0x252)](_0x5c07d9){var _0x2e210b=_0x50cb4b;return Object[_0x2e210b(0x29c)][_0x2e210b(0x262)][_0x2e210b(0x217)](_0x5c07d9);}['_isPrimitiveType'](_0x454557){var _0xfc1884=_0x50cb4b;return _0x454557===_0xfc1884(0x1dc)||_0x454557===_0xfc1884(0x1f1)||_0x454557===_0xfc1884(0x1d0);}[_0x50cb4b(0x206)](_0x3d176c){var _0x208283=_0x50cb4b;return _0x3d176c===_0x208283(0x292)||_0x3d176c===_0x208283(0x21c)||_0x3d176c==='Number';}['_addProperty'](_0x1b391d,_0x38598c,_0x44374f,_0x119992,_0x416dbc,_0x5c1da8){var _0x46ba6b=this;return function(_0x286978){var _0xa016cd=_0xad95,_0x147159=_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x274)],_0xfb8aeb=_0x416dbc['node'][_0xa016cd(0x2a0)],_0x9d94b=_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x238)];_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x238)]=_0x147159,_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x2a0)]=typeof _0x119992==_0xa016cd(0x1d0)?_0x119992:_0x286978,_0x1b391d[_0xa016cd(0x23f)](_0x46ba6b[_0xa016cd(0x297)](_0x38598c,_0x44374f,_0x119992,_0x416dbc,_0x5c1da8)),_0x416dbc['node'][_0xa016cd(0x238)]=_0x9d94b,_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x2a0)]=_0xfb8aeb;};}[_0x50cb4b(0x213)](_0x9eef8b,_0x28c96a,_0x42c910,_0x1ac385,_0x4dbede,_0x176a50,_0x14cfc1){var _0x481506=_0x50cb4b,_0x12ff98=this;return _0x28c96a[_0x481506(0x1db)+_0x4dbede[_0x481506(0x262)]()]=!0x0,function(_0x30a09f){var _0x4dc364=_0x481506,_0x27a83e=_0x176a50['node'][_0x4dc364(0x274)],_0x1e834a=_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x2a0)],_0xfa9a7=_0x176a50['node'][_0x4dc364(0x238)];_0x176a50['node'][_0x4dc364(0x238)]=_0x27a83e,_0x176a50[_0x4dc364(0x29b)]['index']=_0x30a09f,_0x9eef8b['push'](_0x12ff98['_property'](_0x42c910,_0x1ac385,_0x4dbede,_0x176a50,_0x14cfc1)),_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x238)]=_0xfa9a7,_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x2a0)]=_0x1e834a;};}[_0x50cb4b(0x297)](_0x1a8fa0,_0x139eff,_0x5effab,_0x5baf96,_0x147686){var _0x2289d8=_0x50cb4b,_0x1bf713=this;_0x147686||(_0x147686=function(_0x4932d6,_0x17d241){return _0x4932d6[_0x17d241];});var _0x5435d9=_0x5effab[_0x2289d8(0x262)](),_0xc8ce81=_0x5baf96[_0x2289d8(0x21e)]||{},_0x4a8b76=_0x5baf96['depth'],_0x2a3b68=_0x5baf96['isExpressionToEvaluate'];try{var _0x50d91b=this[_0x2289d8(0x27d)](_0x1a8fa0),_0x1bcdc8=_0x5435d9;_0x50d91b&&_0x1bcdc8[0x0]==='\\x27'&&(_0x1bcdc8=_0x1bcdc8[_0x2289d8(0x24e)](0x1,_0x1bcdc8[_0x2289d8(0x28c)]-0x2));var _0x4595b6=_0x5baf96[_0x2289d8(0x21e)]=_0xc8ce81[_0x2289d8(0x1db)+_0x1bcdc8];_0x4595b6&&(_0x5baf96[_0x2289d8(0x2a1)]=_0x5baf96['depth']+0x1),_0x5baf96['isExpressionToEvaluate']=!!_0x4595b6;var _0x4d6e47=typeof _0x5effab==_0x2289d8(0x253),_0x4daa5d={'name':_0x4d6e47||_0x50d91b?_0x5435d9:this[_0x2289d8(0x1c9)](_0x5435d9)};if(_0x4d6e47&&(_0x4daa5d[_0x2289d8(0x253)]=!0x0),!(_0x139eff==='array'||_0x139eff===_0x2289d8(0x216))){var _0x2c4887=this[_0x2289d8(0x1d9)](_0x1a8fa0,_0x5effab);if(_0x2c4887&&(_0x2c4887[_0x2289d8(0x27a)]&&(_0x4daa5d['setter']=!0x0),_0x2c4887['get']&&!_0x4595b6&&!_0x5baf96[_0x2289d8(0x231)]))return _0x4daa5d[_0x2289d8(0x1f7)]=!0x0,this[_0x2289d8(0x1d3)](_0x4daa5d,_0x5baf96),_0x4daa5d;}var _0x47cc6d;try{_0x47cc6d=_0x147686(_0x1a8fa0,_0x5effab);}catch(_0x220113){return _0x4daa5d={'name':_0x5435d9,'type':_0x2289d8(0x248),'error':_0x220113['message']},this['_processTreeNodeResult'](_0x4daa5d,_0x5baf96),_0x4daa5d;}var _0x4e95bc=this[_0x2289d8(0x234)](_0x47cc6d),_0x29030c=this['_isPrimitiveType'](_0x4e95bc);if(_0x4daa5d['type']=_0x4e95bc,_0x29030c)this['_processTreeNodeResult'](_0x4daa5d,_0x5baf96,_0x47cc6d,function(){var _0x58edd4=_0x2289d8;_0x4daa5d[_0x58edd4(0x28f)]=_0x47cc6d[_0x58edd4(0x266)](),!_0x4595b6&&_0x1bf713['_capIfString'](_0x4e95bc,_0x4daa5d,_0x5baf96,{});});else{var _0x1f6bb9=_0x5baf96['autoExpand']&&_0x5baf96['level']<_0x5baf96[_0x2289d8(0x210)]&&_0x5baf96[_0x2289d8(0x245)][_0x2289d8(0x1e9)](_0x47cc6d)<0x0&&_0x4e95bc!=='function'&&_0x5baf96[_0x2289d8(0x289)]<_0x5baf96[_0x2289d8(0x21f)];_0x1f6bb9||_0x5baf96[_0x2289d8(0x2a6)]<_0x4a8b76||_0x4595b6?(this['serialize'](_0x4daa5d,_0x47cc6d,_0x5baf96,_0x4595b6||{}),this['_additionalMetadata'](_0x47cc6d,_0x4daa5d)):this[_0x2289d8(0x1d3)](_0x4daa5d,_0x5baf96,_0x47cc6d,function(){var _0x5bb6b9=_0x2289d8;_0x4e95bc===_0x5bb6b9(0x207)||_0x4e95bc==='undefined'||(delete _0x4daa5d[_0x5bb6b9(0x28f)],_0x4daa5d['capped']=!0x0);});}return _0x4daa5d;}finally{_0x5baf96[_0x2289d8(0x21e)]=_0xc8ce81,_0x5baf96[_0x2289d8(0x2a1)]=_0x4a8b76,_0x5baf96[_0x2289d8(0x26d)]=_0x2a3b68;}}[_0x50cb4b(0x27b)](_0x3e8ee6,_0x2ca202,_0x4a95ac,_0x831dd4){var _0x168de3=_0x50cb4b,_0x17624c=_0x831dd4[_0x168de3(0x290)]||_0x4a95ac[_0x168de3(0x290)];if((_0x3e8ee6===_0x168de3(0x1f1)||_0x3e8ee6==='String')&&_0x2ca202['value']){let _0x320838=_0x2ca202[_0x168de3(0x28f)][_0x168de3(0x28c)];_0x4a95ac['allStrLength']+=_0x320838,_0x4a95ac[_0x168de3(0x1ed)]>_0x4a95ac[_0x168de3(0x272)]?(_0x2ca202[_0x168de3(0x1cc)]='',delete _0x2ca202['value']):_0x320838>_0x17624c&&(_0x2ca202['capped']=_0x2ca202['value']['substr'](0x0,_0x17624c),delete _0x2ca202[_0x168de3(0x28f)]);}}[_0x50cb4b(0x27d)](_0x2790cc){var _0x1ae3ae=_0x50cb4b;return!!(_0x2790cc&&_0x3206ad[_0x1ae3ae(0x214)]&&this[_0x1ae3ae(0x252)](_0x2790cc)===_0x1ae3ae(0x24c)&&_0x2790cc[_0x1ae3ae(0x1d5)]);}[_0x50cb4b(0x1c9)](_0x446cc7){var _0x12b134=_0x50cb4b;if(_0x446cc7[_0x12b134(0x2a5)](/^\\d+$/))return _0x446cc7;var _0x4fe508;try{_0x4fe508=JSON[_0x12b134(0x29a)](''+_0x446cc7);}catch{_0x4fe508='\\x22'+this[_0x12b134(0x252)](_0x446cc7)+'\\x22';}return _0x4fe508[_0x12b134(0x2a5)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4fe508=_0x4fe508[_0x12b134(0x24e)](0x1,_0x4fe508[_0x12b134(0x28c)]-0x2):_0x4fe508=_0x4fe508[_0x12b134(0x2a2)](/'/g,'\\x5c\\x27')[_0x12b134(0x2a2)](/\\\\\"/g,'\\x22')[_0x12b134(0x2a2)](/(^\"|\"$)/g,'\\x27'),_0x4fe508;}[_0x50cb4b(0x1d3)](_0x21db71,_0x21e4f9,_0x37dea5,_0x5cd39b){var _0x34843a=_0x50cb4b;this['_treeNodePropertiesBeforeFullValue'](_0x21db71,_0x21e4f9),_0x5cd39b&&_0x5cd39b(),this[_0x34843a(0x1c6)](_0x37dea5,_0x21db71),this['_treeNodePropertiesAfterFullValue'](_0x21db71,_0x21e4f9);}['_treeNodePropertiesBeforeFullValue'](_0x4ff38e,_0x1b8f82){var _0x357948=_0x50cb4b;this[_0x357948(0x28e)](_0x4ff38e,_0x1b8f82),this['_setNodeQueryPath'](_0x4ff38e,_0x1b8f82),this[_0x357948(0x1e7)](_0x4ff38e,_0x1b8f82),this['_setNodePermissions'](_0x4ff38e,_0x1b8f82);}[_0x50cb4b(0x28e)](_0x369e04,_0x4ba850){}[_0x50cb4b(0x2a3)](_0x1eab06,_0x1d455e){}[_0x50cb4b(0x258)](_0x11e3ab,_0x1cad10){}[_0x50cb4b(0x203)](_0x48e009){var _0x11515d=_0x50cb4b;return _0x48e009===this[_0x11515d(0x288)];}['_treeNodePropertiesAfterFullValue'](_0xa1cb36,_0x4ebf8b){var _0x203901=_0x50cb4b;this[_0x203901(0x258)](_0xa1cb36,_0x4ebf8b),this[_0x203901(0x1f2)](_0xa1cb36),_0x4ebf8b[_0x203901(0x260)]&&this['_sortProps'](_0xa1cb36),this[_0x203901(0x294)](_0xa1cb36,_0x4ebf8b),this['_addLoadNode'](_0xa1cb36,_0x4ebf8b),this[_0x203901(0x240)](_0xa1cb36);}[_0x50cb4b(0x1c6)](_0x5cc2b9,_0x19e8a1){var _0x2db574=_0x50cb4b;let _0x21cec8;try{_0x3206ad['console']&&(_0x21cec8=_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)],_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)]=function(){}),_0x5cc2b9&&typeof _0x5cc2b9[_0x2db574(0x28c)]==_0x2db574(0x1d0)&&(_0x19e8a1['length']=_0x5cc2b9['length']);}catch{}finally{_0x21cec8&&(_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)]=_0x21cec8);}if(_0x19e8a1[_0x2db574(0x222)]===_0x2db574(0x1d0)||_0x19e8a1[_0x2db574(0x222)]==='Number'){if(isNaN(_0x19e8a1[_0x2db574(0x28f)]))_0x19e8a1[_0x2db574(0x225)]=!0x0,delete _0x19e8a1[_0x2db574(0x28f)];else switch(_0x19e8a1[_0x2db574(0x28f)]){case Number[_0x2db574(0x1f4)]:_0x19e8a1['positiveInfinity']=!0x0,delete _0x19e8a1[_0x2db574(0x28f)];break;case Number[_0x2db574(0x215)]:_0x19e8a1['negativeInfinity']=!0x0,delete _0x19e8a1['value'];break;case 0x0:this[_0x2db574(0x1fe)](_0x19e8a1[_0x2db574(0x28f)])&&(_0x19e8a1[_0x2db574(0x1f9)]=!0x0);break;}}else _0x19e8a1['type']==='function'&&typeof _0x5cc2b9[_0x2db574(0x269)]==_0x2db574(0x1f1)&&_0x5cc2b9['name']&&_0x19e8a1[_0x2db574(0x269)]&&_0x5cc2b9[_0x2db574(0x269)]!==_0x19e8a1['name']&&(_0x19e8a1['funcName']=_0x5cc2b9[_0x2db574(0x269)]);}[_0x50cb4b(0x1fe)](_0x115643){var _0x556a96=_0x50cb4b;return 0x1/_0x115643===Number[_0x556a96(0x215)];}[_0x50cb4b(0x276)](_0x4a663a){var _0x46f3e0=_0x50cb4b;!_0x4a663a[_0x46f3e0(0x1cf)]||!_0x4a663a[_0x46f3e0(0x1cf)][_0x46f3e0(0x28c)]||_0x4a663a['type']===_0x46f3e0(0x20f)||_0x4a663a[_0x46f3e0(0x222)]==='Map'||_0x4a663a[_0x46f3e0(0x222)]===_0x46f3e0(0x25f)||_0x4a663a['props']['sort'](function(_0x42647e,_0x4214b4){var _0x5c0060=_0x46f3e0,_0x287459=_0x42647e[_0x5c0060(0x269)]['toLowerCase'](),_0x3b0302=_0x4214b4[_0x5c0060(0x269)]['toLowerCase']();return _0x287459<_0x3b0302?-0x1:_0x287459>_0x3b0302?0x1:0x0;});}['_addFunctionsNode'](_0x172c2b,_0x3ff8c5){var _0x5ee78c=_0x50cb4b;if(!(_0x3ff8c5[_0x5ee78c(0x256)]||!_0x172c2b[_0x5ee78c(0x1cf)]||!_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x28c)])){for(var _0x78da0b=[],_0x43e20b=[],_0x45f7c7=0x0,_0xda74b=_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x28c)];_0x45f7c7<_0xda74b;_0x45f7c7++){var _0x12ec74=_0x172c2b[_0x5ee78c(0x1cf)][_0x45f7c7];_0x12ec74['type']==='function'?_0x78da0b[_0x5ee78c(0x23f)](_0x12ec74):_0x43e20b[_0x5ee78c(0x23f)](_0x12ec74);}if(!(!_0x43e20b[_0x5ee78c(0x28c)]||_0x78da0b[_0x5ee78c(0x28c)]<=0x1)){_0x172c2b[_0x5ee78c(0x1cf)]=_0x43e20b;var _0x501464={'functionsNode':!0x0,'props':_0x78da0b};this['_setNodeId'](_0x501464,_0x3ff8c5),this[_0x5ee78c(0x258)](_0x501464,_0x3ff8c5),this['_setNodeExpandableState'](_0x501464),this[_0x5ee78c(0x287)](_0x501464,_0x3ff8c5),_0x501464['id']+='\\x20f',_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x270)](_0x501464);}}}['_addLoadNode'](_0x87192,_0x331e41){}['_setNodeExpandableState'](_0x3eac36){}[_0x50cb4b(0x1d7)](_0x4e828d){var _0xeb1e99=_0x50cb4b;return Array['isArray'](_0x4e828d)||typeof _0x4e828d=='object'&&this[_0xeb1e99(0x252)](_0x4e828d)==='[object\\x20Array]';}[_0x50cb4b(0x287)](_0x44a747,_0x28c736){}[_0x50cb4b(0x240)](_0x42eca7){var _0x1d4116=_0x50cb4b;delete _0x42eca7[_0x1d4116(0x24a)],delete _0x42eca7[_0x1d4116(0x26a)],delete _0x42eca7[_0x1d4116(0x22f)];}[_0x50cb4b(0x1e7)](_0x408f0a,_0x38cc5a){}}let _0x3cc807=new _0x13b476(),_0x2d054e={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x3abe0e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51ceaf(_0x16ee48,_0x4e1ee0,_0x3d6b75,_0x10bbf7,_0x45bed7,_0x297690){var _0x20a8cf=_0x50cb4b;let _0x59ac25,_0x1cb234;try{_0x1cb234=_0x32e2ac(),_0x59ac25=_0x59629b[_0x4e1ee0],!_0x59ac25||_0x1cb234-_0x59ac25['ts']>0x1f4&&_0x59ac25[_0x20a8cf(0x227)]&&_0x59ac25['time']/_0x59ac25[_0x20a8cf(0x227)]<0x64?(_0x59629b[_0x4e1ee0]=_0x59ac25={'count':0x0,'time':0x0,'ts':_0x1cb234},_0x59629b[_0x20a8cf(0x236)]={}):_0x1cb234-_0x59629b[_0x20a8cf(0x236)]['ts']>0x32&&_0x59629b['hits'][_0x20a8cf(0x227)]&&_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x244)]/_0x59629b[_0x20a8cf(0x236)]['count']<0x64&&(_0x59629b[_0x20a8cf(0x236)]={});let _0x3e589b=[],_0x1a8f86=_0x59ac25['reduceLimits']||_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x1c3)]?_0x3abe0e:_0x2d054e,_0x4c324c=_0x295faf=>{var _0x2f0f38=_0x20a8cf;let _0x143d88={};return _0x143d88['props']=_0x295faf[_0x2f0f38(0x1cf)],_0x143d88[_0x2f0f38(0x2a9)]=_0x295faf['elements'],_0x143d88[_0x2f0f38(0x290)]=_0x295faf[_0x2f0f38(0x290)],_0x143d88[_0x2f0f38(0x272)]=_0x295faf[_0x2f0f38(0x272)],_0x143d88[_0x2f0f38(0x21f)]=_0x295faf['autoExpandLimit'],_0x143d88[_0x2f0f38(0x210)]=_0x295faf[_0x2f0f38(0x210)],_0x143d88['sortProps']=!0x1,_0x143d88['noFunctions']=!_0x5670b1,_0x143d88['depth']=0x1,_0x143d88[_0x2f0f38(0x2a6)]=0x0,_0x143d88[_0x2f0f38(0x299)]='root_exp_id',_0x143d88[_0x2f0f38(0x209)]=_0x2f0f38(0x204),_0x143d88[_0x2f0f38(0x273)]=!0x0,_0x143d88['autoExpandPreviousObjects']=[],_0x143d88['autoExpandPropertyCount']=0x0,_0x143d88[_0x2f0f38(0x231)]=!0x0,_0x143d88[_0x2f0f38(0x1ed)]=0x0,_0x143d88[_0x2f0f38(0x29b)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x143d88;};for(var _0x108d8a=0x0;_0x108d8a<_0x45bed7[_0x20a8cf(0x28c)];_0x108d8a++)_0x3e589b[_0x20a8cf(0x23f)](_0x3cc807[_0x20a8cf(0x1d2)]({'timeNode':_0x16ee48===_0x20a8cf(0x244)||void 0x0},_0x45bed7[_0x108d8a],_0x4c324c(_0x1a8f86),{}));if(_0x16ee48===_0x20a8cf(0x23b)){let _0x5b6f85=Error[_0x20a8cf(0x1f3)];try{Error[_0x20a8cf(0x1f3)]=0x1/0x0,_0x3e589b[_0x20a8cf(0x23f)](_0x3cc807['serialize']({'stackNode':!0x0},new Error()['stack'],_0x4c324c(_0x1a8f86),{'strLength':0x1/0x0}));}finally{Error[_0x20a8cf(0x1f3)]=_0x5b6f85;}}return{'method':_0x20a8cf(0x20a),'version':_0x4d370b,'args':[{'ts':_0x3d6b75,'session':_0x10bbf7,'args':_0x3e589b,'id':_0x4e1ee0,'context':_0x297690}]};}catch(_0x575143){return{'method':_0x20a8cf(0x20a),'version':_0x4d370b,'args':[{'ts':_0x3d6b75,'session':_0x10bbf7,'args':[{'type':_0x20a8cf(0x248),'error':_0x575143&&_0x575143[_0x20a8cf(0x286)]}],'id':_0x4e1ee0,'context':_0x297690}]};}finally{try{if(_0x59ac25&&_0x1cb234){let _0xfd88ac=_0x32e2ac();_0x59ac25['count']++,_0x59ac25['time']+=_0x265656(_0x1cb234,_0xfd88ac),_0x59ac25['ts']=_0xfd88ac,_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x227)]++,_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x244)]+=_0x265656(_0x1cb234,_0xfd88ac),_0x59629b[_0x20a8cf(0x236)]['ts']=_0xfd88ac,(_0x59ac25['count']>0x32||_0x59ac25[_0x20a8cf(0x244)]>0x64)&&(_0x59ac25[_0x20a8cf(0x1c3)]=!0x0),(_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x227)]>0x3e8||_0x59629b['hits'][_0x20a8cf(0x244)]>0x12c)&&(_0x59629b['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x51ceaf;}function _0x583f(){var _0x59375d=['readyState','_hasMapOnItsPath','method','resolveGetters','_regExpToString','_treeNodePropertiesBeforeFullValue','_type','19678288OKWJGT','hits','_getOwnPropertySymbols','parent','_ws','location','trace','_treeNodePropertiesAfterFullValue','https://tinyurl.com/37x8b79t','','push','_cleanNode','_console_ninja_session','now','create','time','autoExpandPreviousObjects','\\x20browser','Buffer','unknown','onclose','_hasSymbolPropertyOnItsPath','webpack','[object\\x20Map]','logger\\x20websocket\\x20error','substr','cappedElements','host','function','_objectToString','symbol','_webSocketErrorDocsLink','_disposeWebsocket','noFunctions','1696560966985','_setNodeLabel','_p_name','nuxt','nodeModules','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertyDescriptor','_blacklistedProperty','Set','sortProps','port','toString','_sendErrorMessage','bigint','[object\\x20Array]','valueOf','getWebSocketClass','constructor','name','_hasSetOnItsPath','dockerizedApp','remix','isExpressionToEvaluate','1809732GlGNIq','console','unshift','_isSet','totalStrLength','autoExpand','current','disabledTrace','_sortProps','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','hostname','object','set','_capIfString','getOwnPropertyNames','_isMap','send','date','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','2848450Fefkun','parse','_WebSocket',\"c:\\\\Users\\\\clickwithclark\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.230\\\\node_modules\",'message','_setNodePermissions','_undefined','autoExpandPropertyCount','3874071BLOvWj','edge','length','...','_setNodeId','value','strLength','hasOwnProperty','Boolean','_maxConnectAttemptCount','_addFunctionsNode','bind','_allowedToConnectOnSend','_property','then','expId','stringify','node','prototype','_connectAttemptCount','_connected','join','index','depth','replace','_setNodeQueryPath','1567684DhEOiw','match','level','1.0.0','_allowedToSend','elements','reduceLimits','undefined','env','_additionalMetadata','_consoleNinjaAllowedToStart','','_propertyName','_socket','catch','capped','defineProperty','\\x20server','props','number','disabledLog','serialize','_processTreeNodeResult','includes','forEach','reload','_isArray','Symbol','_getOwnPropertyDescriptor','process','_p_','boolean','data','_Symbol','global','__es'+'Module','50425','_getOwnPropertyNames','[object\\x20Set]','_connectToHostNow','_inNextEdge','performance','_setNodeExpressionPath','onerror','indexOf','hrtime',':logPointId:','enumerable','allStrLength','url','ws://','onopen','string','_setNodeExpandableState','stackTraceLimit','POSITIVE_INFINITY','_reconnectTimeout','timeEnd','getter','_quotedRegExp','negativeZero','_dateToString','786831xcrSjQ','HTMLAllCollection','onmessage','_isNegativeZero','_attemptToReconnectShortly','test',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Skynet-Global\",\"192.168.56.1\",\"192.168.137.1\",\"192.168.0.4\"],'_addProperty','_isUndefined','root_exp','2419050edpKTT','_isPrimitiveWrapperType','null','path','rootExpression','log','concat','default','versions','_console_ninja','array','autoExpandMaxDepth','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','pathToFileURL','_addObjectProperty','Map','NEGATIVE_INFINITY','Error','call','_WebSocketClass','RegExp','warn','_isPrimitiveType','String','elapsed','expressionsToEvaluate','autoExpandLimit','NEXT_RUNTIME','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','type','[object\\x20Date]','error','nan','timeStamp','count','_p_length','_inBrowser','_HTMLAllCollection','_connecting','unref','split'];_0x583f=function(){return _0x59375d;};return _0x583f();}((_0xa81353,_0x5ab0e9,_0x209834,_0x594f27,_0x5ae1a8,_0x490337,_0x53cb17,_0x4aaca2,_0x2e9dfe,_0x5189cf)=>{var _0x49317c=_0xdae715;if(_0xa81353['_console_ninja'])return _0xa81353[_0x49317c(0x20e)];if(!J(_0xa81353,_0x4aaca2,_0x5ae1a8))return _0xa81353[_0x49317c(0x20e)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xa81353['_console_ninja'];let _0x46ea87=W(_0xa81353),_0x4a1838=_0x46ea87[_0x49317c(0x21d)],_0x5d0b69=_0x46ea87[_0x49317c(0x226)],_0x86413d=_0x46ea87[_0x49317c(0x242)],_0x18a571={'hits':{},'ts':{}},_0x35322e=Y(_0xa81353,_0x2e9dfe,_0x18a571,_0x490337),_0x196497=_0x1998b3=>{_0x18a571['ts'][_0x1998b3]=_0x5d0b69();},_0x96e288=(_0x4100d4,_0x3665c8)=>{var _0xf9f672=_0x49317c;let _0x361f26=_0x18a571['ts'][_0x3665c8];if(delete _0x18a571['ts'][_0x3665c8],_0x361f26){let _0x503419=_0x4a1838(_0x361f26,_0x5d0b69());_0x1f3394(_0x35322e(_0xf9f672(0x244),_0x4100d4,_0x86413d(),_0x4985b5,[_0x503419],_0x3665c8));}},_0x47622f=_0x4ec5f5=>_0x1c1239=>{var _0x1fc408=_0x49317c;try{_0x196497(_0x1c1239),_0x4ec5f5(_0x1c1239);}finally{_0xa81353['console'][_0x1fc408(0x244)]=_0x4ec5f5;}},_0x56410a=_0x202504=>_0x14b0bd=>{var _0x277a15=_0x49317c;try{let [_0x581e4b,_0x4b23d4]=_0x14b0bd['split'](_0x277a15(0x1eb));_0x96e288(_0x4b23d4,_0x581e4b),_0x202504(_0x581e4b);}finally{_0xa81353[_0x277a15(0x26f)][_0x277a15(0x1f6)]=_0x202504;}};_0xa81353[_0x49317c(0x20e)]={'consoleLog':(_0xc9db51,_0x439eb1)=>{var _0x5c4376=_0x49317c;_0xa81353[_0x5c4376(0x26f)]['log']['name']!==_0x5c4376(0x1d1)&&_0x1f3394(_0x35322e(_0x5c4376(0x20a),_0xc9db51,_0x86413d(),_0x4985b5,_0x439eb1));},'consoleTrace':(_0x1c147c,_0x1321ed)=>{var _0x15a3a3=_0x49317c;_0xa81353[_0x15a3a3(0x26f)]['log'][_0x15a3a3(0x269)]!==_0x15a3a3(0x275)&&_0x1f3394(_0x35322e(_0x15a3a3(0x23b),_0x1c147c,_0x86413d(),_0x4985b5,_0x1321ed));},'consoleTime':()=>{var _0x4d107c=_0x49317c;_0xa81353['console'][_0x4d107c(0x244)]=_0x47622f(_0xa81353['console'][_0x4d107c(0x244)]);},'consoleTimeEnd':()=>{var _0x470def=_0x49317c;_0xa81353[_0x470def(0x26f)][_0x470def(0x1f6)]=_0x56410a(_0xa81353[_0x470def(0x26f)][_0x470def(0x1f6)]);},'autoLog':(_0x2948e8,_0x597c18)=>{_0x1f3394(_0x35322e('log',_0x597c18,_0x86413d(),_0x4985b5,[_0x2948e8]));},'autoLogMany':(_0x545f30,_0x193c53)=>{var _0x570147=_0x49317c;_0x1f3394(_0x35322e(_0x570147(0x20a),_0x545f30,_0x86413d(),_0x4985b5,_0x193c53));},'autoTrace':(_0x2bd0f7,_0x141efd)=>{var _0x1d15d3=_0x49317c;_0x1f3394(_0x35322e(_0x1d15d3(0x23b),_0x141efd,_0x86413d(),_0x4985b5,[_0x2bd0f7]));},'autoTraceMany':(_0x3e6321,_0x3a1692)=>{_0x1f3394(_0x35322e('trace',_0x3e6321,_0x86413d(),_0x4985b5,_0x3a1692));},'autoTime':(_0x2ebafa,_0x306aac,_0x1a7f37)=>{_0x196497(_0x1a7f37);},'autoTimeEnd':(_0x49cff9,_0x2fb262,_0x15256e)=>{_0x96e288(_0x2fb262,_0x15256e);},'coverage':_0x23ca51=>{_0x1f3394({'method':'coverage','version':_0x490337,'args':[{'id':_0x23ca51}]});}};let _0x1f3394=b(_0xa81353,_0x5ab0e9,_0x209834,_0x594f27,_0x5ae1a8,_0x5189cf),_0x4985b5=_0xa81353['_console_ninja_session'];return _0xa81353['_console_ninja'];})(globalThis,'127.0.0.1',_0xdae715(0x1e1),_0xdae715(0x285),_0xdae715(0x24b),_0xdae715(0x2a7),_0xdae715(0x257),_0xdae715(0x201),_0xdae715(0x1c8),_0xdae715(0x23e));")}catch(e){}}const Jx=document.querySelector("#todoList");function Qx(e){const t=document.createElement("li");t.draggable="true";const n=document.createElement("span"),r=document.createElement("i"),i=document.createElement("span"),s=document.createElement("i"),a=document.createElement("span"),o=document.createElement("i"),c=document.createElement("span");n.appendChild(r),i.className="grip",a.className="edit",n.className="checkmark",i.appendChild(s),a.appendChild(o),o.className="fas fa-edit",s.className="fas fa-arrows-alt-v",r.className="far fa-check-square",c.className="main-message",t.appendChild(c),t.dataset.id=e.id,c.innerText=e.category?`[${e.category}] ${e.message}`:`${e.message}`,e.completed&&(c.classList.add("completed"),n.classList.add("show-checkmark")),t.insertAdjacentElement("afterbegin",n),t.insertAdjacentElement("beforeend",a),t.insertAdjacentElement("beforeend",i),Jx.append(t)}const Xx=function(){const e=[...document.querySelectorAll("li")],t=[...document.querySelectorAll("[data-draggable-container]")];e.forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{document.querySelector("#todoList").style.cursor="default",e.classList.remove("dragging"),function(){const e=[...document.querySelectorAll("li")],t=[];e.forEach((e=>{t.push(+e.dataset.id)}));const n=Bx();t.length>0&&(n.order=t,zx(n))}()}))})),t.forEach((e=>{e.addEventListener("dragover",(t=>{t.preventDefault();const n=function(e,t){return[...e.querySelectorAll('[draggable="true"]:not(.dragging)')].reduce(((e,n)=>{const r=n.getBoundingClientRect(),i=t-r.top-r.height/2;return i<0&&i>e.offset?{offset:i,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(e,t.clientY),r=document.querySelector(".dragging");r.opacity="0.5",null!=n?e.insertBefore(r,n):e.appendChild(r)}))}))};function Zx(){const e=document.querySelector("#todoList");e.innerHTML="";const t=$x(),n=Bx()?.order??[];try{if(0===n.length)return Object.keys(t).forEach((e=>{Qx(t[e])})),void Xx();n.forEach((e=>{Qx(t[+e])})),e.style.opacity="1",Xx(),Ux(),function(){const e=Bx()?.todos;if(!e)return;const t=document.querySelector("#groups");let n=[];Object.keys(e).forEach((t=>{null!==e[t].category&&n.push(`(${e[t].category})`)})),n=[...new Set(n)],t.replaceChildren();const r=document.createElement("option");r.value="(    )",t.append(r),n.forEach((e=>{const n=document.createElement("option");n.value=e,t.append(n)}))}()}catch(e){console.error(e)}n.length>=4?document.querySelector("#todoList").style.overflowY="scroll":document.querySelector("#todoList").style.overflowY="hidden"}function e_(e){return e[0].toUpperCase()+e.slice(1)}function t_(e){let t=null,n=e;if(-1!==e.indexOf("("))try{t=e.match(/(\(.*?\))/).pop(),n=e.replace(t,"").trim(),t=t.replace("(","").replace(")","").trim(),t=e_(t)}catch(e){e.message=" Invalid format trying to create a category\n\nGood Example: (Category) task, (Category) other task \n            \nor \n            \n(Category): task, other task, . . .  ",qx(e.message,6)}try{if(0===n.length)throw new Error(' Task left blank during multi-entry mode\n      Bad Example: task1<span class="bad">, ,</span>task2\n\n      Good Example: task1<span class="good">,</span>task2\n      ');n=e_(n);return{id:Math.floor(1e8*Math.random()),message:n,date:new Date,category:t,completed:!1}}catch(e){console.error(),qx(e,12)}}function n_(e){const t=t_(e);try{if(t)return function(e){const t={...Bx()};let n={...t?.todos};n=n??{},0===Object.keys(n).length&&(document.querySelector("#todoList").style.opacity="1"),Object.assign(n,{[e.id]:e}),t.order=t?.order??[],t.order=[e.id,...t.order],t.todos=n,zx(t)}(t),Zx()}catch(e){console.error(e),qx(e.message)}}function r_(e){const t=e.split(",");try{if(t.length>30)throw new Error(`Woah ! Woah !. . . that's too many at one time!, I'll only accept <span class="good">30</span> ,\n      you tried to enter <span class="bad">${t.length}</span> Tasks !\n      `);t.forEach((e=>{n_(e)}))}catch(e){console.error(e.message),qx(e.message,10)}}function i_(e){const t=e.split(","),n=e.match(/\((.*)\)/).pop(),r=[];return r.push(t[0].replace(":","")),t.slice(1).forEach((e=>{r.push(`(${n})${e}`)})),r.join(",")}function s_(e){const t={...Bx()},n=[];e.forEach((e=>{n.push(+e[0])})),t.order=n,zx(t)}const a_=function(e){let t=null,n=1;return{sort(){t=t??Object.entries($x());try{if(0===t.length)return;t.sort(((e,t)=>function(e,t){return(t>e?1:-1)*n}(e[1].date,t[1].date))),n*=-1}catch(e){console.error(e)}s_(t),Zx(),Xx()},getEtries(){const e=t;return t=null,e},setSort(e){t=e}}}(),o_=function(e){let t=null,n=1;return{sort(){let e,r;t=Object.entries($x());try{if(0===t.length)return;r=t.filter((e=>null!==e[1].category)),e=t.filter((e=>null===e[1].category)),a_.setSort(e),a_.sort(),r.sort(((e,t)=>function(e,t){return(t>e?1:-1)*n}(e[1].category,t[1].category))),n*=-1}catch(e){console.error(e)}s_([...r,...a_.getEtries()]),Zx(),Xx()}}}(),c_=document.querySelector(".app-container"),x_=document.querySelector("#logo"),__=document.querySelector(".app-name"),d_=document.querySelector(".confirmation-popup"),l_=document.querySelector(".logo-container");function h_(){try{let e={...Bx()?.todos};if(e=e??{},0===Object.keys(e).length)throw new Error("You Dont have any tasks to delete yet , That's just a demonstration");c_.classList.add("blur"),x_.classList.add("negate-blur"),l_.classList.add("negate-blur"),__.classList.add("negate-blur"),d_.classList.add("active"),d_.classList.add("negate-blur"),document.body.style.overflow="hidden",qx("Are you sure you want to delete all your Tasks?!",300)}catch(e){console.error(e),qx(e.message,3)}}function u_(){Ux(),document.body.style.overflow="",d_.classList.remove("negate-blur"),d_.classList.remove("active"),__.classList.remove("negate-blur"),l_.classList.remove("negate-blur"),x_.classList.remove("negate-blur"),c_.classList.remove("blur"),Zx()}function f_(){u_(),qx("Few! . . .that was close!",2)}function p_(){const e=Bx();e.todos=null,e.order=null,zx(e),u_(),Zx(),Wx("Done! . . .")}function b_(e){const t=e.target.closest("li"),{id:n}=t.dataset;t.style.transition="0.3s",t.style.opacity=0,t.style.marginTop="-40px",function(e){const t={...Bx()};let n=[...Bx()?.order],r={...t?.todos};r=r??{},n=n.filter((t=>t!==e)),delete r[e],t.todos=r,t.order=n,zx(t)}(+n),setTimeout((()=>{t.remove(),Zx()}),400)}function g_(){const e={...Bx()},t=e?.todos;try{if(!t)throw new Error("You Dont have any tasks to delete yet , That's just a demonstration");if(0===Object.entries(t).filter((e=>!0===e[1].completed)).length)throw new Error("No tasks are completed yet . . .\nTo mark a task as complete ,\nclick on the task name");const n=Object.entries(t).filter((e=>!1===e[1].completed));e.todos=Object.fromEntries(n),zx(e),s_(n),Zx(),Wx("Done! . . .")}catch(e){console.error(e),qx(e.message,3)}}function m_(e){const t=document.querySelector("#todoInput"),n=e.target.closest("li"),{id:r}=n.dataset,i=n.offsetTop,s=document.querySelector("h1").offsetTop,a=n.querySelector(".main-message"),o=a.innerText;if(a.classList.contains("completed"))return Zx();const c=a.innerText.replace("[","(").replace("]",")");t.value=c,t.classList.add("editing-in-progress"),t.classList.add("pop-out-fade-out"),t.placeholder=`Updating: ${o.slice(0,16)}...📑`,window.scrollTo({top:s,behavior:"smooth"});const x={};x.id=+r;!function(e){const t=Bx();if(t?.todos?.[e.updatedTodo.id])return t.updateConfig=e,zx(t);Vx()}({todoOffset:i,updatedTodo:x})}function v_(e,t,n){document.addEventListener(e,(e=>{if(e.target.closest(t))try{n(e)}catch(e){const t=e.code,n=e.message;console.error("An error occurred in eventlistener: ",n,"Error Code: ",t)}}))}const y_=document.querySelector(".app-container"),w_=document.querySelector("#logo"),T_=document.querySelector(".app-name"),I_=document.querySelector(".confirmation-popup"),E_=document.querySelector(".logo-container");let C_;function k_(){y_.classList.add("blur"),w_.classList.add("negate-blur"),E_.classList.add("negate-blur"),T_.classList.add("negate-blur"),I_.classList.add("active"),I_.classList.add("tutorial"),I_.classList.add("negate-blur"),document.body.style.overflowY="hidden";const e=document.createElement("h1");e.innerText="Instructions",e.style.fontFamily="CabinSketch",C_=[...I_.children],I_.replaceChildren();const t=document.createElement("div"),n=document.createElement("p");t.append(e),t.append(n),n.innerHTML=' \n  \n  <ol>\n  <li><p>To enter a basic task just give it a name and press enter.</p> </li>\n  <hr>\n  <li><p>To enter a task and assign it a  <span class="good">category</span> put the category inside parentheses <span class="good">(&nbsp;&nbsp;&nbsp;&nbsp;)</span>\n  </br>e.g. (Math) calculus or (Math) fractions.</p></li>\n  <hr>\n  <li>\n  <p>  Entering a task one at a time can become tedious, so you can enter multiple tasks at a time by seperating each task by a comma <span class="good"> &nbsp;,</span> </br>\n  e.g. Walk the dog<span class="good"> &nbsp;,</span> pick up milk<span class="good"> &nbsp;,</span> call Jane.</p>\n  </li>\n  <hr>\n  <li><p>  You can also include categories with them!</br> e.g.(Rufus) Walk the dog<span class="good">&nbsp;,</span> (Supermarket)pick up milk<span class="good">&nbsp;,</span> (Visiting this summer)call Jane.  </p></li>\n  <hr>\n  <li>\n  <p>  But what if you wanted to make a list all your task belonging to one category?</br>\nyou don\'t have to write... </br><span class="bad">(Grocerylist) eggs , (Grocerylist) cheese , (Grocerylist) bread</span> . . .</p></li>\n<hr>\n  <li><p> you can use a colon <span class="good">:</span> after the brackets to set\n  all following task to that group.<br/>\n  e.g. <span class="good">(Grocerylist) : eggs , cheese , bread</span>\n</p></li>\n</ol>\n\n\n<button class="tutorial-ok-btn"><i class="fas fa-check"></i></button>\n\n\n',n.classList.add("guide"),t.classList.add("instructions"),I_.appendChild(t),I_.scrollTo({top:0,behavior:"smooth"}),document.addEventListener("pointerdown",(e=>{const t=I_.contains(e.target);e.target.closest(".tutorial-btn")||I_.classList.contains("active")&&(t||S_(e))}))}function S_(e){e.preventDefault(),I_.replaceChildren(...C_),u_(),Zx()}function N_(e,t,n=3e3){let r;clearTimeout(r),e.value||(r=setTimeout(t,n))}function P_(e){e.value="",e.placeholder="Add New Task...📄",e.classList.remove("editing-in-progress")}function R_(e){if("Enter"===e.key){const t=document.querySelector("#todoInput");if(e.target.classList.contains("editing-in-progress")){const e=Bx()?.updateConfig;if(e)try{const n=t.value.trim();if(""===n)throw new Error("Whoops, update cannot be blank! . . . try deleting it instead");const r=t_(n);return r.id=e.updatedTodo.id,function(e){const t={...Bx()};let n={...t?.todos};n=n??{},Object.assign(n,{[e.id]:e}),t.todos=n,zx(t)}(r),P_(t),Vx(),N_(t,Kx),window.scrollTo({top:e.todoOffset,behavior:"smooth"}),Zx()}catch(e){return console.trace(...A_("14787132_0",e)),qx(e.message)}}try{if(""===e.target.value.trim())throw new Error("Whoops, you have to enter something first!");!function(){const e=document.querySelector("#todoInput").value.trim();if(-1===e.indexOf(","))return n_(e);const t=e.match(/^\(.*\):|^\(.*\)\s:/i),n=e.split(/(\(([^)]*)\)[^)]*$)/),r=n[0],i=n[1];if(t)try{if(0===r.length)return r_(i_(i));return r_(`${r}${i_(i)}`)}catch(e){qx(`${e.message}inside`,12)}r_(e)}(),e.target.value="",P_(e.target),Zx(),N_(t,Kx)}catch(e){return console.trace(...A_("14787132_1",e)),qx(e.message)}}}function O_(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xdae715=_0xad95;(function(_0x59def9,_0x279b6b){var _0x50813b=_0xad95,_0x5b13a0=_0x59def9();while(!![]){try{var _0x6decc6=parseInt(_0x50813b(0x1fb))/0x1+parseInt(_0x50813b(0x2a4))/0x2+parseInt(_0x50813b(0x28a))/0x3+parseInt(_0x50813b(0x26e))/0x4+parseInt(_0x50813b(0x282))/0x5+-parseInt(_0x50813b(0x205))/0x6+-parseInt(_0x50813b(0x235))/0x7;if(_0x6decc6===_0x279b6b)break;else _0x5b13a0['push'](_0x5b13a0['shift']());}catch(_0xf9ee43){_0x5b13a0['push'](_0x5b13a0['shift']());}}}(_0x583f,0xa3862));function _0xad95(_0x4ba0bf,_0x39df2e){var _0x583fa2=_0x583f();return _0xad95=function(_0xad9514,_0x177949){_0xad9514=_0xad9514-0x1c3;var _0x4c8354=_0x583fa2[_0xad9514];return _0x4c8354;},_0xad95(_0x4ba0bf,_0x39df2e);}var j=Object[_0xdae715(0x243)],H=Object[_0xdae715(0x1cd)],G=Object[_0xdae715(0x25d)],ee=Object[_0xdae715(0x27c)],te=Object['getPrototypeOf'],ne=Object[_0xdae715(0x29c)][_0xdae715(0x291)],re=(_0x23916a,_0x5e933c,_0x123486,_0x4b475f)=>{var _0x37993d=_0xdae715;if(_0x5e933c&&typeof _0x5e933c==_0x37993d(0x279)||typeof _0x5e933c==_0x37993d(0x251)){for(let _0x181e88 of ee(_0x5e933c))!ne[_0x37993d(0x217)](_0x23916a,_0x181e88)&&_0x181e88!==_0x123486&&H(_0x23916a,_0x181e88,{'get':()=>_0x5e933c[_0x181e88],'enumerable':!(_0x4b475f=G(_0x5e933c,_0x181e88))||_0x4b475f[_0x37993d(0x1ec)]});}return _0x23916a;},x=(_0x352a91,_0x22be7e,_0x34abd3)=>(_0x34abd3=_0x352a91!=null?j(te(_0x352a91)):{},re(_0x22be7e||!_0x352a91||!_0x352a91[_0xdae715(0x1e0)]?H(_0x34abd3,'default',{'value':_0x352a91,'enumerable':!0x0}):_0x34abd3,_0x352a91)),X=class{constructor(_0x526c52,_0x15f287,_0x4b0e88,_0xfb8c1,_0x20da5d){var _0x49bf58=_0xdae715;this[_0x49bf58(0x1df)]=_0x526c52,this[_0x49bf58(0x250)]=_0x15f287,this[_0x49bf58(0x261)]=_0x4b0e88,this[_0x49bf58(0x25b)]=_0xfb8c1,this[_0x49bf58(0x26b)]=_0x20da5d,this[_0x49bf58(0x2a8)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x49bf58(0x29e)]=!0x1,this['_connecting']=!0x1,this[_0x49bf58(0x1e5)]=_0x526c52[_0x49bf58(0x1da)]?.[_0x49bf58(0x1c5)]?.['NEXT_RUNTIME']===_0x49bf58(0x28b),this['_inBrowser']=!this[_0x49bf58(0x1df)][_0x49bf58(0x1da)]?.[_0x49bf58(0x20d)]?.['node']&&!this['_inNextEdge'],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x49bf58(0x293)]=0x14,this[_0x49bf58(0x254)]=_0x49bf58(0x23d),this[_0x49bf58(0x263)]=(this['_inBrowser']?_0x49bf58(0x281):_0x49bf58(0x25c))+this['_webSocketErrorDocsLink'];}async['getWebSocketClass'](){var _0x326261=_0xdae715;if(this['_WebSocketClass'])return this[_0x326261(0x218)];let _0x4d64f6;if(this['_inBrowser']||this[_0x326261(0x1e5)])_0x4d64f6=this[_0x326261(0x1df)]['WebSocket'];else{if(this[_0x326261(0x1df)][_0x326261(0x1da)]?.[_0x326261(0x284)])_0x4d64f6=this['global'][_0x326261(0x1da)]?.[_0x326261(0x284)];else try{let _0x112f96=await import(_0x326261(0x208));_0x4d64f6=(await import((await import(_0x326261(0x1ee)))[_0x326261(0x212)](_0x112f96[_0x326261(0x29f)](this[_0x326261(0x25b)],'ws/index.js'))['toString']()))[_0x326261(0x20c)];}catch{try{_0x4d64f6=require(require(_0x326261(0x208))[_0x326261(0x29f)](this[_0x326261(0x25b)],'ws'));}catch{throw new Error(_0x326261(0x211));}}}return this[_0x326261(0x218)]=_0x4d64f6,_0x4d64f6;}['_connectToHostNow'](){var _0xce7566=_0xdae715;this[_0xce7566(0x22b)]||this[_0xce7566(0x29e)]||this[_0xce7566(0x29d)]>=this[_0xce7566(0x293)]||(this[_0xce7566(0x296)]=!0x1,this[_0xce7566(0x22b)]=!0x0,this['_connectAttemptCount']++,this[_0xce7566(0x239)]=new Promise((_0x5b4f1a,_0x490e1d)=>{var _0x307a7d=_0xce7566;this[_0x307a7d(0x267)]()[_0x307a7d(0x298)](_0x59ca83=>{var _0x120355=_0x307a7d;let _0x5226b1=new _0x59ca83(_0x120355(0x1ef)+(!this[_0x120355(0x229)]&&this[_0x120355(0x26b)]?'gateway.docker.internal':this[_0x120355(0x250)])+':'+this[_0x120355(0x261)]);_0x5226b1[_0x120355(0x1e8)]=()=>{var _0x51d78c=_0x120355;this[_0x51d78c(0x2a8)]=!0x1,this[_0x51d78c(0x255)](_0x5226b1),this[_0x51d78c(0x1ff)](),_0x490e1d(new Error(_0x51d78c(0x24d)));},_0x5226b1[_0x120355(0x1f0)]=()=>{var _0x4f722c=_0x120355;this[_0x4f722c(0x229)]||_0x5226b1[_0x4f722c(0x1ca)]&&_0x5226b1[_0x4f722c(0x1ca)][_0x4f722c(0x22c)]&&_0x5226b1[_0x4f722c(0x1ca)][_0x4f722c(0x22c)](),_0x5b4f1a(_0x5226b1);},_0x5226b1[_0x120355(0x249)]=()=>{var _0x10b894=_0x120355;this[_0x10b894(0x296)]=!0x0,this[_0x10b894(0x255)](_0x5226b1),this['_attemptToReconnectShortly']();},_0x5226b1[_0x120355(0x1fd)]=_0x5b26c1=>{var _0x46dd2b=_0x120355;try{_0x5b26c1&&_0x5b26c1[_0x46dd2b(0x1dd)]&&this[_0x46dd2b(0x229)]&&JSON[_0x46dd2b(0x283)](_0x5b26c1[_0x46dd2b(0x1dd)])[_0x46dd2b(0x230)]===_0x46dd2b(0x1d6)&&this[_0x46dd2b(0x1df)][_0x46dd2b(0x23a)][_0x46dd2b(0x1d6)]();}catch{}};})[_0x307a7d(0x298)](_0x3f28c8=>(this[_0x307a7d(0x29e)]=!0x0,this[_0x307a7d(0x22b)]=!0x1,this[_0x307a7d(0x296)]=!0x1,this[_0x307a7d(0x2a8)]=!0x0,this['_connectAttemptCount']=0x0,_0x3f28c8))[_0x307a7d(0x1cb)](_0x5e4ef1=>(this[_0x307a7d(0x29e)]=!0x1,this[_0x307a7d(0x22b)]=!0x1,console['warn'](_0x307a7d(0x221)+this[_0x307a7d(0x254)]),_0x490e1d(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x5e4ef1&&_0x5e4ef1['message'])))));}));}['_disposeWebsocket'](_0x5479ff){var _0x33d12d=_0xdae715;this[_0x33d12d(0x29e)]=!0x1,this['_connecting']=!0x1;try{_0x5479ff[_0x33d12d(0x249)]=null,_0x5479ff[_0x33d12d(0x1e8)]=null,_0x5479ff[_0x33d12d(0x1f0)]=null;}catch{}try{_0x5479ff[_0x33d12d(0x22e)]<0x2&&_0x5479ff['close']();}catch{}}[_0xdae715(0x1ff)](){var _0x505109=_0xdae715;clearTimeout(this[_0x505109(0x1f5)]),!(this[_0x505109(0x29d)]>=this[_0x505109(0x293)])&&(this[_0x505109(0x1f5)]=setTimeout(()=>{var _0x27aecd=_0x505109;this[_0x27aecd(0x29e)]||this[_0x27aecd(0x22b)]||(this[_0x27aecd(0x1e4)](),this['_ws']?.[_0x27aecd(0x1cb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x505109(0x1f5)]['unref']&&this['_reconnectTimeout'][_0x505109(0x22c)]());}async[_0xdae715(0x27e)](_0x5e5e0a){var _0x1b1f76=_0xdae715;try{if(!this[_0x1b1f76(0x2a8)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x1b1f76(0x239)])[_0x1b1f76(0x27e)](JSON[_0x1b1f76(0x29a)](_0x5e5e0a));}catch(_0x27c694){console[_0x1b1f76(0x21a)](this[_0x1b1f76(0x263)]+':\\x20'+(_0x27c694&&_0x27c694[_0x1b1f76(0x286)])),this['_allowedToSend']=!0x1,this[_0x1b1f76(0x1ff)]();}}};function b(_0x28cdc2,_0x5d012b,_0x20dfcd,_0x22aacd,_0x809da6,_0x14a22c){var _0x5b5708=_0xdae715;let _0xac162f=_0x20dfcd[_0x5b5708(0x22d)](',')['map'](_0x4cf5af=>{var _0x1f4b03=_0x5b5708;try{_0x28cdc2[_0x1f4b03(0x241)]||((_0x809da6==='next.js'||_0x809da6===_0x1f4b03(0x26c)||_0x809da6==='astro')&&(_0x809da6+=!_0x28cdc2[_0x1f4b03(0x1da)]?.['versions']?.['node']&&_0x28cdc2[_0x1f4b03(0x1da)]?.[_0x1f4b03(0x1c5)]?.[_0x1f4b03(0x220)]!==_0x1f4b03(0x28b)?_0x1f4b03(0x246):_0x1f4b03(0x1ce)),_0x28cdc2[_0x1f4b03(0x241)]={'id':+new Date(),'tool':_0x809da6});let _0x2bc495=new X(_0x28cdc2,_0x5d012b,_0x4cf5af,_0x22aacd,_0x14a22c);return _0x2bc495[_0x1f4b03(0x27e)][_0x1f4b03(0x295)](_0x2bc495);}catch(_0x3f12e7){return console[_0x1f4b03(0x21a)](_0x1f4b03(0x277),_0x3f12e7&&_0x3f12e7['message']),()=>{};}});return _0x3f641a=>_0xac162f[_0x5b5708(0x1d5)](_0xd9564c=>_0xd9564c(_0x3f641a));}function W(_0x4e84c6){var _0x32801f=_0xdae715;let _0x5e4fff=function(_0x389b25,_0x9710ca){return _0x9710ca-_0x389b25;},_0x9e7587;if(_0x4e84c6['performance'])_0x9e7587=function(){var _0x1d6d22=_0xad95;return _0x4e84c6[_0x1d6d22(0x1e6)][_0x1d6d22(0x242)]();};else{if(_0x4e84c6[_0x32801f(0x1da)]&&_0x4e84c6[_0x32801f(0x1da)][_0x32801f(0x1ea)]&&_0x4e84c6[_0x32801f(0x1da)]?.[_0x32801f(0x1c5)]?.[_0x32801f(0x220)]!=='edge')_0x9e7587=function(){var _0x361153=_0x32801f;return _0x4e84c6[_0x361153(0x1da)][_0x361153(0x1ea)]();},_0x5e4fff=function(_0x51885e,_0x341e07){return 0x3e8*(_0x341e07[0x0]-_0x51885e[0x0])+(_0x341e07[0x1]-_0x51885e[0x1])/0xf4240;};else try{let {performance:_0x470674}=require('perf_hooks');_0x9e7587=function(){var _0x859d6e=_0x32801f;return _0x470674[_0x859d6e(0x242)]();};}catch{_0x9e7587=function(){return+new Date();};}}return{'elapsed':_0x5e4fff,'timeStamp':_0x9e7587,'now':()=>Date[_0x32801f(0x242)]()};}function J(_0x13d427,_0x421070,_0x173892){var _0x2a9b9d=_0xdae715;if(_0x13d427[_0x2a9b9d(0x1c7)]!==void 0x0)return _0x13d427['_consoleNinjaAllowedToStart'];let _0x478471=_0x13d427['process']?.[_0x2a9b9d(0x20d)]?.[_0x2a9b9d(0x29b)]||_0x13d427[_0x2a9b9d(0x1da)]?.[_0x2a9b9d(0x1c5)]?.['NEXT_RUNTIME']===_0x2a9b9d(0x28b);return _0x478471&&_0x173892===_0x2a9b9d(0x25a)?_0x13d427['_consoleNinjaAllowedToStart']=!0x1:_0x13d427['_consoleNinjaAllowedToStart']=_0x478471||!_0x421070||_0x13d427[_0x2a9b9d(0x23a)]?.[_0x2a9b9d(0x278)]&&_0x421070[_0x2a9b9d(0x1d4)](_0x13d427[_0x2a9b9d(0x23a)][_0x2a9b9d(0x278)]),_0x13d427['_consoleNinjaAllowedToStart'];}function Y(_0x3206ad,_0x5670b1,_0x59629b,_0x4d370b){var _0x50cb4b=_0xdae715;_0x3206ad=_0x3206ad,_0x5670b1=_0x5670b1,_0x59629b=_0x59629b,_0x4d370b=_0x4d370b;let _0x8ab0e9=W(_0x3206ad),_0x265656=_0x8ab0e9['elapsed'],_0x32e2ac=_0x8ab0e9[_0x50cb4b(0x226)];class _0x13b476{constructor(){var _0x33a376=_0x50cb4b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x33a376(0x1f8)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x3206ad['undefined'],this[_0x33a376(0x22a)]=_0x3206ad[_0x33a376(0x1fc)],this[_0x33a376(0x1d9)]=Object[_0x33a376(0x25d)],this[_0x33a376(0x1e2)]=Object[_0x33a376(0x27c)],this[_0x33a376(0x1de)]=_0x3206ad[_0x33a376(0x1d8)],this['_regExpToString']=RegExp[_0x33a376(0x29c)]['toString'],this[_0x33a376(0x1fa)]=Date[_0x33a376(0x29c)][_0x33a376(0x262)];}[_0x50cb4b(0x1d2)](_0xc772e8,_0x38e33c,_0x2eb1d1,_0x44b7c4){var _0x3dd284=_0x50cb4b,_0x40c8fb=this,_0x1549d4=_0x2eb1d1[_0x3dd284(0x273)];function _0x3f8615(_0x4e0ceb,_0x15d514,_0x1740cc){var _0x44ee4a=_0x3dd284;_0x15d514['type']=_0x44ee4a(0x248),_0x15d514[_0x44ee4a(0x224)]=_0x4e0ceb[_0x44ee4a(0x286)],_0x1408e6=_0x1740cc[_0x44ee4a(0x29b)]['current'],_0x1740cc[_0x44ee4a(0x29b)]['current']=_0x15d514,_0x40c8fb[_0x44ee4a(0x233)](_0x15d514,_0x1740cc);}try{_0x2eb1d1[_0x3dd284(0x2a6)]++,_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1['autoExpandPreviousObjects'][_0x3dd284(0x23f)](_0x38e33c);var _0x539eb6,_0x20c5f4,_0xff5c17,_0x4aa39c,_0x4b4128=[],_0x25a756=[],_0x4abf71,_0x34d40e=this[_0x3dd284(0x234)](_0x38e33c),_0x4136fa=_0x34d40e===_0x3dd284(0x20f),_0x336be6=!0x1,_0x4efdbb=_0x34d40e===_0x3dd284(0x251),_0x423e58=this[_0x3dd284(0x21b)](_0x34d40e),_0x38587c=this['_isPrimitiveWrapperType'](_0x34d40e),_0x4ea1f7=_0x423e58||_0x38587c,_0x1fe20e={},_0x540029=0x0,_0x2b67ee=!0x1,_0x1408e6,_0x6d1ae2=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2eb1d1[_0x3dd284(0x2a1)]){if(_0x4136fa){if(_0x20c5f4=_0x38e33c[_0x3dd284(0x28c)],_0x20c5f4>_0x2eb1d1[_0x3dd284(0x2a9)]){for(_0xff5c17=0x0,_0x4aa39c=_0x2eb1d1[_0x3dd284(0x2a9)],_0x539eb6=_0xff5c17;_0x539eb6<_0x4aa39c;_0x539eb6++)_0x25a756['push'](_0x40c8fb['_addProperty'](_0x4b4128,_0x38e33c,_0x34d40e,_0x539eb6,_0x2eb1d1));_0xc772e8[_0x3dd284(0x24f)]=!0x0;}else{for(_0xff5c17=0x0,_0x4aa39c=_0x20c5f4,_0x539eb6=_0xff5c17;_0x539eb6<_0x4aa39c;_0x539eb6++)_0x25a756[_0x3dd284(0x23f)](_0x40c8fb[_0x3dd284(0x202)](_0x4b4128,_0x38e33c,_0x34d40e,_0x539eb6,_0x2eb1d1));}_0x2eb1d1[_0x3dd284(0x289)]+=_0x25a756[_0x3dd284(0x28c)];}if(!(_0x34d40e===_0x3dd284(0x207)||_0x34d40e===_0x3dd284(0x1c4))&&!_0x423e58&&_0x34d40e!==_0x3dd284(0x21c)&&_0x34d40e!==_0x3dd284(0x247)&&_0x34d40e!==_0x3dd284(0x264)){var _0x4e31fc=_0x44b7c4[_0x3dd284(0x1cf)]||_0x2eb1d1[_0x3dd284(0x1cf)];if(this['_isSet'](_0x38e33c)?(_0x539eb6=0x0,_0x38e33c['forEach'](function(_0xd1ad2a){var _0x4ec5af=_0x3dd284;if(_0x540029++,_0x2eb1d1[_0x4ec5af(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;return;}if(!_0x2eb1d1[_0x4ec5af(0x26d)]&&_0x2eb1d1['autoExpand']&&_0x2eb1d1[_0x4ec5af(0x289)]>_0x2eb1d1[_0x4ec5af(0x21f)]){_0x2b67ee=!0x0;return;}_0x25a756['push'](_0x40c8fb['_addProperty'](_0x4b4128,_0x38e33c,'Set',_0x539eb6++,_0x2eb1d1,function(_0x37fde4){return function(){return _0x37fde4;};}(_0xd1ad2a)));})):this[_0x3dd284(0x27d)](_0x38e33c)&&_0x38e33c['forEach'](function(_0x38cf6d,_0x4f28c5){var _0x302082=_0x3dd284;if(_0x540029++,_0x2eb1d1[_0x302082(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;return;}if(!_0x2eb1d1['isExpressionToEvaluate']&&_0x2eb1d1[_0x302082(0x273)]&&_0x2eb1d1[_0x302082(0x289)]>_0x2eb1d1[_0x302082(0x21f)]){_0x2b67ee=!0x0;return;}var _0x473532=_0x4f28c5[_0x302082(0x262)]();_0x473532[_0x302082(0x28c)]>0x64&&(_0x473532=_0x473532['slice'](0x0,0x64)+_0x302082(0x28d)),_0x25a756[_0x302082(0x23f)](_0x40c8fb[_0x302082(0x202)](_0x4b4128,_0x38e33c,_0x302082(0x214),_0x473532,_0x2eb1d1,function(_0x2a73fc){return function(){return _0x2a73fc;};}(_0x38cf6d)));}),!_0x336be6){try{for(_0x4abf71 in _0x38e33c)if(!(_0x4136fa&&_0x6d1ae2[_0x3dd284(0x200)](_0x4abf71))&&!this[_0x3dd284(0x25e)](_0x38e33c,_0x4abf71,_0x2eb1d1)){if(_0x540029++,_0x2eb1d1['autoExpandPropertyCount']++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;break;}if(!_0x2eb1d1[_0x3dd284(0x26d)]&&_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1['autoExpandPropertyCount']>_0x2eb1d1[_0x3dd284(0x21f)]){_0x2b67ee=!0x0;break;}_0x25a756['push'](_0x40c8fb['_addObjectProperty'](_0x4b4128,_0x1fe20e,_0x38e33c,_0x34d40e,_0x4abf71,_0x2eb1d1));}}catch{}if(_0x1fe20e[_0x3dd284(0x228)]=!0x0,_0x4efdbb&&(_0x1fe20e[_0x3dd284(0x259)]=!0x0),!_0x2b67ee){var _0x17fd77=[]['concat'](this[_0x3dd284(0x1e2)](_0x38e33c))[_0x3dd284(0x20b)](this[_0x3dd284(0x237)](_0x38e33c));for(_0x539eb6=0x0,_0x20c5f4=_0x17fd77[_0x3dd284(0x28c)];_0x539eb6<_0x20c5f4;_0x539eb6++)if(_0x4abf71=_0x17fd77[_0x539eb6],!(_0x4136fa&&_0x6d1ae2['test'](_0x4abf71[_0x3dd284(0x262)]()))&&!this[_0x3dd284(0x25e)](_0x38e33c,_0x4abf71,_0x2eb1d1)&&!_0x1fe20e['_p_'+_0x4abf71[_0x3dd284(0x262)]()]){if(_0x540029++,_0x2eb1d1[_0x3dd284(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;break;}if(!_0x2eb1d1[_0x3dd284(0x26d)]&&_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1[_0x3dd284(0x289)]>_0x2eb1d1['autoExpandLimit']){_0x2b67ee=!0x0;break;}_0x25a756[_0x3dd284(0x23f)](_0x40c8fb[_0x3dd284(0x213)](_0x4b4128,_0x1fe20e,_0x38e33c,_0x34d40e,_0x4abf71,_0x2eb1d1));}}}}}if(_0xc772e8['type']=_0x34d40e,_0x4ea1f7?(_0xc772e8['value']=_0x38e33c[_0x3dd284(0x266)](),this[_0x3dd284(0x27b)](_0x34d40e,_0xc772e8,_0x2eb1d1,_0x44b7c4)):_0x34d40e===_0x3dd284(0x27f)?_0xc772e8[_0x3dd284(0x28f)]=this['_dateToString'][_0x3dd284(0x217)](_0x38e33c):_0x34d40e==='bigint'?_0xc772e8[_0x3dd284(0x28f)]=_0x38e33c[_0x3dd284(0x262)]():_0x34d40e===_0x3dd284(0x219)?_0xc772e8[_0x3dd284(0x28f)]=this[_0x3dd284(0x232)][_0x3dd284(0x217)](_0x38e33c):_0x34d40e===_0x3dd284(0x253)&&this['_Symbol']?_0xc772e8['value']=this[_0x3dd284(0x1de)][_0x3dd284(0x29c)]['toString'][_0x3dd284(0x217)](_0x38e33c):!_0x2eb1d1['depth']&&!(_0x34d40e===_0x3dd284(0x207)||_0x34d40e===_0x3dd284(0x1c4))&&(delete _0xc772e8[_0x3dd284(0x28f)],_0xc772e8[_0x3dd284(0x1cc)]=!0x0),_0x2b67ee&&(_0xc772e8['cappedProps']=!0x0),_0x1408e6=_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)],_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)]=_0xc772e8,this['_treeNodePropertiesBeforeFullValue'](_0xc772e8,_0x2eb1d1),_0x25a756[_0x3dd284(0x28c)]){for(_0x539eb6=0x0,_0x20c5f4=_0x25a756['length'];_0x539eb6<_0x20c5f4;_0x539eb6++)_0x25a756[_0x539eb6](_0x539eb6);}_0x4b4128[_0x3dd284(0x28c)]&&(_0xc772e8[_0x3dd284(0x1cf)]=_0x4b4128);}catch(_0x26df84){_0x3f8615(_0x26df84,_0xc772e8,_0x2eb1d1);}return this[_0x3dd284(0x1c6)](_0x38e33c,_0xc772e8),this[_0x3dd284(0x23c)](_0xc772e8,_0x2eb1d1),_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)]=_0x1408e6,_0x2eb1d1['level']--,_0x2eb1d1[_0x3dd284(0x273)]=_0x1549d4,_0x2eb1d1['autoExpand']&&_0x2eb1d1['autoExpandPreviousObjects']['pop'](),_0xc772e8;}[_0x50cb4b(0x237)](_0x5cd1ca){var _0x15a819=_0x50cb4b;return Object[_0x15a819(0x280)]?Object[_0x15a819(0x280)](_0x5cd1ca):[];}[_0x50cb4b(0x271)](_0x587a78){var _0x599b8a=_0x50cb4b;return!!(_0x587a78&&_0x3206ad['Set']&&this['_objectToString'](_0x587a78)===_0x599b8a(0x1e3)&&_0x587a78['forEach']);}[_0x50cb4b(0x25e)](_0x334c17,_0x5ccd64,_0x2c40ce){var _0x45d689=_0x50cb4b;return _0x2c40ce[_0x45d689(0x256)]?typeof _0x334c17[_0x5ccd64]==_0x45d689(0x251):!0x1;}[_0x50cb4b(0x234)](_0x4250f2){var _0x196489=_0x50cb4b,_0x21efc7='';return _0x21efc7=typeof _0x4250f2,_0x21efc7===_0x196489(0x279)?this[_0x196489(0x252)](_0x4250f2)===_0x196489(0x265)?_0x21efc7=_0x196489(0x20f):this[_0x196489(0x252)](_0x4250f2)===_0x196489(0x223)?_0x21efc7=_0x196489(0x27f):this[_0x196489(0x252)](_0x4250f2)==='[object\\x20BigInt]'?_0x21efc7='bigint':_0x4250f2===null?_0x21efc7=_0x196489(0x207):_0x4250f2[_0x196489(0x268)]&&(_0x21efc7=_0x4250f2[_0x196489(0x268)]['name']||_0x21efc7):_0x21efc7==='undefined'&&this[_0x196489(0x22a)]&&_0x4250f2 instanceof this['_HTMLAllCollection']&&(_0x21efc7=_0x196489(0x1fc)),_0x21efc7;}[_0x50cb4b(0x252)](_0x5c07d9){var _0x2e210b=_0x50cb4b;return Object[_0x2e210b(0x29c)][_0x2e210b(0x262)][_0x2e210b(0x217)](_0x5c07d9);}['_isPrimitiveType'](_0x454557){var _0xfc1884=_0x50cb4b;return _0x454557===_0xfc1884(0x1dc)||_0x454557===_0xfc1884(0x1f1)||_0x454557===_0xfc1884(0x1d0);}[_0x50cb4b(0x206)](_0x3d176c){var _0x208283=_0x50cb4b;return _0x3d176c===_0x208283(0x292)||_0x3d176c===_0x208283(0x21c)||_0x3d176c==='Number';}['_addProperty'](_0x1b391d,_0x38598c,_0x44374f,_0x119992,_0x416dbc,_0x5c1da8){var _0x46ba6b=this;return function(_0x286978){var _0xa016cd=_0xad95,_0x147159=_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x274)],_0xfb8aeb=_0x416dbc['node'][_0xa016cd(0x2a0)],_0x9d94b=_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x238)];_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x238)]=_0x147159,_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x2a0)]=typeof _0x119992==_0xa016cd(0x1d0)?_0x119992:_0x286978,_0x1b391d[_0xa016cd(0x23f)](_0x46ba6b[_0xa016cd(0x297)](_0x38598c,_0x44374f,_0x119992,_0x416dbc,_0x5c1da8)),_0x416dbc['node'][_0xa016cd(0x238)]=_0x9d94b,_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x2a0)]=_0xfb8aeb;};}[_0x50cb4b(0x213)](_0x9eef8b,_0x28c96a,_0x42c910,_0x1ac385,_0x4dbede,_0x176a50,_0x14cfc1){var _0x481506=_0x50cb4b,_0x12ff98=this;return _0x28c96a[_0x481506(0x1db)+_0x4dbede[_0x481506(0x262)]()]=!0x0,function(_0x30a09f){var _0x4dc364=_0x481506,_0x27a83e=_0x176a50['node'][_0x4dc364(0x274)],_0x1e834a=_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x2a0)],_0xfa9a7=_0x176a50['node'][_0x4dc364(0x238)];_0x176a50['node'][_0x4dc364(0x238)]=_0x27a83e,_0x176a50[_0x4dc364(0x29b)]['index']=_0x30a09f,_0x9eef8b['push'](_0x12ff98['_property'](_0x42c910,_0x1ac385,_0x4dbede,_0x176a50,_0x14cfc1)),_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x238)]=_0xfa9a7,_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x2a0)]=_0x1e834a;};}[_0x50cb4b(0x297)](_0x1a8fa0,_0x139eff,_0x5effab,_0x5baf96,_0x147686){var _0x2289d8=_0x50cb4b,_0x1bf713=this;_0x147686||(_0x147686=function(_0x4932d6,_0x17d241){return _0x4932d6[_0x17d241];});var _0x5435d9=_0x5effab[_0x2289d8(0x262)](),_0xc8ce81=_0x5baf96[_0x2289d8(0x21e)]||{},_0x4a8b76=_0x5baf96['depth'],_0x2a3b68=_0x5baf96['isExpressionToEvaluate'];try{var _0x50d91b=this[_0x2289d8(0x27d)](_0x1a8fa0),_0x1bcdc8=_0x5435d9;_0x50d91b&&_0x1bcdc8[0x0]==='\\x27'&&(_0x1bcdc8=_0x1bcdc8[_0x2289d8(0x24e)](0x1,_0x1bcdc8[_0x2289d8(0x28c)]-0x2));var _0x4595b6=_0x5baf96[_0x2289d8(0x21e)]=_0xc8ce81[_0x2289d8(0x1db)+_0x1bcdc8];_0x4595b6&&(_0x5baf96[_0x2289d8(0x2a1)]=_0x5baf96['depth']+0x1),_0x5baf96['isExpressionToEvaluate']=!!_0x4595b6;var _0x4d6e47=typeof _0x5effab==_0x2289d8(0x253),_0x4daa5d={'name':_0x4d6e47||_0x50d91b?_0x5435d9:this[_0x2289d8(0x1c9)](_0x5435d9)};if(_0x4d6e47&&(_0x4daa5d[_0x2289d8(0x253)]=!0x0),!(_0x139eff==='array'||_0x139eff===_0x2289d8(0x216))){var _0x2c4887=this[_0x2289d8(0x1d9)](_0x1a8fa0,_0x5effab);if(_0x2c4887&&(_0x2c4887[_0x2289d8(0x27a)]&&(_0x4daa5d['setter']=!0x0),_0x2c4887['get']&&!_0x4595b6&&!_0x5baf96[_0x2289d8(0x231)]))return _0x4daa5d[_0x2289d8(0x1f7)]=!0x0,this[_0x2289d8(0x1d3)](_0x4daa5d,_0x5baf96),_0x4daa5d;}var _0x47cc6d;try{_0x47cc6d=_0x147686(_0x1a8fa0,_0x5effab);}catch(_0x220113){return _0x4daa5d={'name':_0x5435d9,'type':_0x2289d8(0x248),'error':_0x220113['message']},this['_processTreeNodeResult'](_0x4daa5d,_0x5baf96),_0x4daa5d;}var _0x4e95bc=this[_0x2289d8(0x234)](_0x47cc6d),_0x29030c=this['_isPrimitiveType'](_0x4e95bc);if(_0x4daa5d['type']=_0x4e95bc,_0x29030c)this['_processTreeNodeResult'](_0x4daa5d,_0x5baf96,_0x47cc6d,function(){var _0x58edd4=_0x2289d8;_0x4daa5d[_0x58edd4(0x28f)]=_0x47cc6d[_0x58edd4(0x266)](),!_0x4595b6&&_0x1bf713['_capIfString'](_0x4e95bc,_0x4daa5d,_0x5baf96,{});});else{var _0x1f6bb9=_0x5baf96['autoExpand']&&_0x5baf96['level']<_0x5baf96[_0x2289d8(0x210)]&&_0x5baf96[_0x2289d8(0x245)][_0x2289d8(0x1e9)](_0x47cc6d)<0x0&&_0x4e95bc!=='function'&&_0x5baf96[_0x2289d8(0x289)]<_0x5baf96[_0x2289d8(0x21f)];_0x1f6bb9||_0x5baf96[_0x2289d8(0x2a6)]<_0x4a8b76||_0x4595b6?(this['serialize'](_0x4daa5d,_0x47cc6d,_0x5baf96,_0x4595b6||{}),this['_additionalMetadata'](_0x47cc6d,_0x4daa5d)):this[_0x2289d8(0x1d3)](_0x4daa5d,_0x5baf96,_0x47cc6d,function(){var _0x5bb6b9=_0x2289d8;_0x4e95bc===_0x5bb6b9(0x207)||_0x4e95bc==='undefined'||(delete _0x4daa5d[_0x5bb6b9(0x28f)],_0x4daa5d['capped']=!0x0);});}return _0x4daa5d;}finally{_0x5baf96[_0x2289d8(0x21e)]=_0xc8ce81,_0x5baf96[_0x2289d8(0x2a1)]=_0x4a8b76,_0x5baf96[_0x2289d8(0x26d)]=_0x2a3b68;}}[_0x50cb4b(0x27b)](_0x3e8ee6,_0x2ca202,_0x4a95ac,_0x831dd4){var _0x168de3=_0x50cb4b,_0x17624c=_0x831dd4[_0x168de3(0x290)]||_0x4a95ac[_0x168de3(0x290)];if((_0x3e8ee6===_0x168de3(0x1f1)||_0x3e8ee6==='String')&&_0x2ca202['value']){let _0x320838=_0x2ca202[_0x168de3(0x28f)][_0x168de3(0x28c)];_0x4a95ac['allStrLength']+=_0x320838,_0x4a95ac[_0x168de3(0x1ed)]>_0x4a95ac[_0x168de3(0x272)]?(_0x2ca202[_0x168de3(0x1cc)]='',delete _0x2ca202['value']):_0x320838>_0x17624c&&(_0x2ca202['capped']=_0x2ca202['value']['substr'](0x0,_0x17624c),delete _0x2ca202[_0x168de3(0x28f)]);}}[_0x50cb4b(0x27d)](_0x2790cc){var _0x1ae3ae=_0x50cb4b;return!!(_0x2790cc&&_0x3206ad[_0x1ae3ae(0x214)]&&this[_0x1ae3ae(0x252)](_0x2790cc)===_0x1ae3ae(0x24c)&&_0x2790cc[_0x1ae3ae(0x1d5)]);}[_0x50cb4b(0x1c9)](_0x446cc7){var _0x12b134=_0x50cb4b;if(_0x446cc7[_0x12b134(0x2a5)](/^\\d+$/))return _0x446cc7;var _0x4fe508;try{_0x4fe508=JSON[_0x12b134(0x29a)](''+_0x446cc7);}catch{_0x4fe508='\\x22'+this[_0x12b134(0x252)](_0x446cc7)+'\\x22';}return _0x4fe508[_0x12b134(0x2a5)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4fe508=_0x4fe508[_0x12b134(0x24e)](0x1,_0x4fe508[_0x12b134(0x28c)]-0x2):_0x4fe508=_0x4fe508[_0x12b134(0x2a2)](/'/g,'\\x5c\\x27')[_0x12b134(0x2a2)](/\\\\\"/g,'\\x22')[_0x12b134(0x2a2)](/(^\"|\"$)/g,'\\x27'),_0x4fe508;}[_0x50cb4b(0x1d3)](_0x21db71,_0x21e4f9,_0x37dea5,_0x5cd39b){var _0x34843a=_0x50cb4b;this['_treeNodePropertiesBeforeFullValue'](_0x21db71,_0x21e4f9),_0x5cd39b&&_0x5cd39b(),this[_0x34843a(0x1c6)](_0x37dea5,_0x21db71),this['_treeNodePropertiesAfterFullValue'](_0x21db71,_0x21e4f9);}['_treeNodePropertiesBeforeFullValue'](_0x4ff38e,_0x1b8f82){var _0x357948=_0x50cb4b;this[_0x357948(0x28e)](_0x4ff38e,_0x1b8f82),this['_setNodeQueryPath'](_0x4ff38e,_0x1b8f82),this[_0x357948(0x1e7)](_0x4ff38e,_0x1b8f82),this['_setNodePermissions'](_0x4ff38e,_0x1b8f82);}[_0x50cb4b(0x28e)](_0x369e04,_0x4ba850){}[_0x50cb4b(0x2a3)](_0x1eab06,_0x1d455e){}[_0x50cb4b(0x258)](_0x11e3ab,_0x1cad10){}[_0x50cb4b(0x203)](_0x48e009){var _0x11515d=_0x50cb4b;return _0x48e009===this[_0x11515d(0x288)];}['_treeNodePropertiesAfterFullValue'](_0xa1cb36,_0x4ebf8b){var _0x203901=_0x50cb4b;this[_0x203901(0x258)](_0xa1cb36,_0x4ebf8b),this[_0x203901(0x1f2)](_0xa1cb36),_0x4ebf8b[_0x203901(0x260)]&&this['_sortProps'](_0xa1cb36),this[_0x203901(0x294)](_0xa1cb36,_0x4ebf8b),this['_addLoadNode'](_0xa1cb36,_0x4ebf8b),this[_0x203901(0x240)](_0xa1cb36);}[_0x50cb4b(0x1c6)](_0x5cc2b9,_0x19e8a1){var _0x2db574=_0x50cb4b;let _0x21cec8;try{_0x3206ad['console']&&(_0x21cec8=_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)],_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)]=function(){}),_0x5cc2b9&&typeof _0x5cc2b9[_0x2db574(0x28c)]==_0x2db574(0x1d0)&&(_0x19e8a1['length']=_0x5cc2b9['length']);}catch{}finally{_0x21cec8&&(_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)]=_0x21cec8);}if(_0x19e8a1[_0x2db574(0x222)]===_0x2db574(0x1d0)||_0x19e8a1[_0x2db574(0x222)]==='Number'){if(isNaN(_0x19e8a1[_0x2db574(0x28f)]))_0x19e8a1[_0x2db574(0x225)]=!0x0,delete _0x19e8a1[_0x2db574(0x28f)];else switch(_0x19e8a1[_0x2db574(0x28f)]){case Number[_0x2db574(0x1f4)]:_0x19e8a1['positiveInfinity']=!0x0,delete _0x19e8a1[_0x2db574(0x28f)];break;case Number[_0x2db574(0x215)]:_0x19e8a1['negativeInfinity']=!0x0,delete _0x19e8a1['value'];break;case 0x0:this[_0x2db574(0x1fe)](_0x19e8a1[_0x2db574(0x28f)])&&(_0x19e8a1[_0x2db574(0x1f9)]=!0x0);break;}}else _0x19e8a1['type']==='function'&&typeof _0x5cc2b9[_0x2db574(0x269)]==_0x2db574(0x1f1)&&_0x5cc2b9['name']&&_0x19e8a1[_0x2db574(0x269)]&&_0x5cc2b9[_0x2db574(0x269)]!==_0x19e8a1['name']&&(_0x19e8a1['funcName']=_0x5cc2b9[_0x2db574(0x269)]);}[_0x50cb4b(0x1fe)](_0x115643){var _0x556a96=_0x50cb4b;return 0x1/_0x115643===Number[_0x556a96(0x215)];}[_0x50cb4b(0x276)](_0x4a663a){var _0x46f3e0=_0x50cb4b;!_0x4a663a[_0x46f3e0(0x1cf)]||!_0x4a663a[_0x46f3e0(0x1cf)][_0x46f3e0(0x28c)]||_0x4a663a['type']===_0x46f3e0(0x20f)||_0x4a663a[_0x46f3e0(0x222)]==='Map'||_0x4a663a[_0x46f3e0(0x222)]===_0x46f3e0(0x25f)||_0x4a663a['props']['sort'](function(_0x42647e,_0x4214b4){var _0x5c0060=_0x46f3e0,_0x287459=_0x42647e[_0x5c0060(0x269)]['toLowerCase'](),_0x3b0302=_0x4214b4[_0x5c0060(0x269)]['toLowerCase']();return _0x287459<_0x3b0302?-0x1:_0x287459>_0x3b0302?0x1:0x0;});}['_addFunctionsNode'](_0x172c2b,_0x3ff8c5){var _0x5ee78c=_0x50cb4b;if(!(_0x3ff8c5[_0x5ee78c(0x256)]||!_0x172c2b[_0x5ee78c(0x1cf)]||!_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x28c)])){for(var _0x78da0b=[],_0x43e20b=[],_0x45f7c7=0x0,_0xda74b=_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x28c)];_0x45f7c7<_0xda74b;_0x45f7c7++){var _0x12ec74=_0x172c2b[_0x5ee78c(0x1cf)][_0x45f7c7];_0x12ec74['type']==='function'?_0x78da0b[_0x5ee78c(0x23f)](_0x12ec74):_0x43e20b[_0x5ee78c(0x23f)](_0x12ec74);}if(!(!_0x43e20b[_0x5ee78c(0x28c)]||_0x78da0b[_0x5ee78c(0x28c)]<=0x1)){_0x172c2b[_0x5ee78c(0x1cf)]=_0x43e20b;var _0x501464={'functionsNode':!0x0,'props':_0x78da0b};this['_setNodeId'](_0x501464,_0x3ff8c5),this[_0x5ee78c(0x258)](_0x501464,_0x3ff8c5),this['_setNodeExpandableState'](_0x501464),this[_0x5ee78c(0x287)](_0x501464,_0x3ff8c5),_0x501464['id']+='\\x20f',_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x270)](_0x501464);}}}['_addLoadNode'](_0x87192,_0x331e41){}['_setNodeExpandableState'](_0x3eac36){}[_0x50cb4b(0x1d7)](_0x4e828d){var _0xeb1e99=_0x50cb4b;return Array['isArray'](_0x4e828d)||typeof _0x4e828d=='object'&&this[_0xeb1e99(0x252)](_0x4e828d)==='[object\\x20Array]';}[_0x50cb4b(0x287)](_0x44a747,_0x28c736){}[_0x50cb4b(0x240)](_0x42eca7){var _0x1d4116=_0x50cb4b;delete _0x42eca7[_0x1d4116(0x24a)],delete _0x42eca7[_0x1d4116(0x26a)],delete _0x42eca7[_0x1d4116(0x22f)];}[_0x50cb4b(0x1e7)](_0x408f0a,_0x38cc5a){}}let _0x3cc807=new _0x13b476(),_0x2d054e={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x3abe0e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51ceaf(_0x16ee48,_0x4e1ee0,_0x3d6b75,_0x10bbf7,_0x45bed7,_0x297690){var _0x20a8cf=_0x50cb4b;let _0x59ac25,_0x1cb234;try{_0x1cb234=_0x32e2ac(),_0x59ac25=_0x59629b[_0x4e1ee0],!_0x59ac25||_0x1cb234-_0x59ac25['ts']>0x1f4&&_0x59ac25[_0x20a8cf(0x227)]&&_0x59ac25['time']/_0x59ac25[_0x20a8cf(0x227)]<0x64?(_0x59629b[_0x4e1ee0]=_0x59ac25={'count':0x0,'time':0x0,'ts':_0x1cb234},_0x59629b[_0x20a8cf(0x236)]={}):_0x1cb234-_0x59629b[_0x20a8cf(0x236)]['ts']>0x32&&_0x59629b['hits'][_0x20a8cf(0x227)]&&_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x244)]/_0x59629b[_0x20a8cf(0x236)]['count']<0x64&&(_0x59629b[_0x20a8cf(0x236)]={});let _0x3e589b=[],_0x1a8f86=_0x59ac25['reduceLimits']||_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x1c3)]?_0x3abe0e:_0x2d054e,_0x4c324c=_0x295faf=>{var _0x2f0f38=_0x20a8cf;let _0x143d88={};return _0x143d88['props']=_0x295faf[_0x2f0f38(0x1cf)],_0x143d88[_0x2f0f38(0x2a9)]=_0x295faf['elements'],_0x143d88[_0x2f0f38(0x290)]=_0x295faf[_0x2f0f38(0x290)],_0x143d88[_0x2f0f38(0x272)]=_0x295faf[_0x2f0f38(0x272)],_0x143d88[_0x2f0f38(0x21f)]=_0x295faf['autoExpandLimit'],_0x143d88[_0x2f0f38(0x210)]=_0x295faf[_0x2f0f38(0x210)],_0x143d88['sortProps']=!0x1,_0x143d88['noFunctions']=!_0x5670b1,_0x143d88['depth']=0x1,_0x143d88[_0x2f0f38(0x2a6)]=0x0,_0x143d88[_0x2f0f38(0x299)]='root_exp_id',_0x143d88[_0x2f0f38(0x209)]=_0x2f0f38(0x204),_0x143d88[_0x2f0f38(0x273)]=!0x0,_0x143d88['autoExpandPreviousObjects']=[],_0x143d88['autoExpandPropertyCount']=0x0,_0x143d88[_0x2f0f38(0x231)]=!0x0,_0x143d88[_0x2f0f38(0x1ed)]=0x0,_0x143d88[_0x2f0f38(0x29b)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x143d88;};for(var _0x108d8a=0x0;_0x108d8a<_0x45bed7[_0x20a8cf(0x28c)];_0x108d8a++)_0x3e589b[_0x20a8cf(0x23f)](_0x3cc807[_0x20a8cf(0x1d2)]({'timeNode':_0x16ee48===_0x20a8cf(0x244)||void 0x0},_0x45bed7[_0x108d8a],_0x4c324c(_0x1a8f86),{}));if(_0x16ee48===_0x20a8cf(0x23b)){let _0x5b6f85=Error[_0x20a8cf(0x1f3)];try{Error[_0x20a8cf(0x1f3)]=0x1/0x0,_0x3e589b[_0x20a8cf(0x23f)](_0x3cc807['serialize']({'stackNode':!0x0},new Error()['stack'],_0x4c324c(_0x1a8f86),{'strLength':0x1/0x0}));}finally{Error[_0x20a8cf(0x1f3)]=_0x5b6f85;}}return{'method':_0x20a8cf(0x20a),'version':_0x4d370b,'args':[{'ts':_0x3d6b75,'session':_0x10bbf7,'args':_0x3e589b,'id':_0x4e1ee0,'context':_0x297690}]};}catch(_0x575143){return{'method':_0x20a8cf(0x20a),'version':_0x4d370b,'args':[{'ts':_0x3d6b75,'session':_0x10bbf7,'args':[{'type':_0x20a8cf(0x248),'error':_0x575143&&_0x575143[_0x20a8cf(0x286)]}],'id':_0x4e1ee0,'context':_0x297690}]};}finally{try{if(_0x59ac25&&_0x1cb234){let _0xfd88ac=_0x32e2ac();_0x59ac25['count']++,_0x59ac25['time']+=_0x265656(_0x1cb234,_0xfd88ac),_0x59ac25['ts']=_0xfd88ac,_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x227)]++,_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x244)]+=_0x265656(_0x1cb234,_0xfd88ac),_0x59629b[_0x20a8cf(0x236)]['ts']=_0xfd88ac,(_0x59ac25['count']>0x32||_0x59ac25[_0x20a8cf(0x244)]>0x64)&&(_0x59ac25[_0x20a8cf(0x1c3)]=!0x0),(_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x227)]>0x3e8||_0x59629b['hits'][_0x20a8cf(0x244)]>0x12c)&&(_0x59629b['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x51ceaf;}function _0x583f(){var _0x59375d=['readyState','_hasMapOnItsPath','method','resolveGetters','_regExpToString','_treeNodePropertiesBeforeFullValue','_type','19678288OKWJGT','hits','_getOwnPropertySymbols','parent','_ws','location','trace','_treeNodePropertiesAfterFullValue','https://tinyurl.com/37x8b79t','','push','_cleanNode','_console_ninja_session','now','create','time','autoExpandPreviousObjects','\\x20browser','Buffer','unknown','onclose','_hasSymbolPropertyOnItsPath','webpack','[object\\x20Map]','logger\\x20websocket\\x20error','substr','cappedElements','host','function','_objectToString','symbol','_webSocketErrorDocsLink','_disposeWebsocket','noFunctions','1696560966985','_setNodeLabel','_p_name','nuxt','nodeModules','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertyDescriptor','_blacklistedProperty','Set','sortProps','port','toString','_sendErrorMessage','bigint','[object\\x20Array]','valueOf','getWebSocketClass','constructor','name','_hasSetOnItsPath','dockerizedApp','remix','isExpressionToEvaluate','1809732GlGNIq','console','unshift','_isSet','totalStrLength','autoExpand','current','disabledTrace','_sortProps','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','hostname','object','set','_capIfString','getOwnPropertyNames','_isMap','send','date','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','2848450Fefkun','parse','_WebSocket',\"c:\\\\Users\\\\clickwithclark\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.230\\\\node_modules\",'message','_setNodePermissions','_undefined','autoExpandPropertyCount','3874071BLOvWj','edge','length','...','_setNodeId','value','strLength','hasOwnProperty','Boolean','_maxConnectAttemptCount','_addFunctionsNode','bind','_allowedToConnectOnSend','_property','then','expId','stringify','node','prototype','_connectAttemptCount','_connected','join','index','depth','replace','_setNodeQueryPath','1567684DhEOiw','match','level','1.0.0','_allowedToSend','elements','reduceLimits','undefined','env','_additionalMetadata','_consoleNinjaAllowedToStart','','_propertyName','_socket','catch','capped','defineProperty','\\x20server','props','number','disabledLog','serialize','_processTreeNodeResult','includes','forEach','reload','_isArray','Symbol','_getOwnPropertyDescriptor','process','_p_','boolean','data','_Symbol','global','__es'+'Module','50425','_getOwnPropertyNames','[object\\x20Set]','_connectToHostNow','_inNextEdge','performance','_setNodeExpressionPath','onerror','indexOf','hrtime',':logPointId:','enumerable','allStrLength','url','ws://','onopen','string','_setNodeExpandableState','stackTraceLimit','POSITIVE_INFINITY','_reconnectTimeout','timeEnd','getter','_quotedRegExp','negativeZero','_dateToString','786831xcrSjQ','HTMLAllCollection','onmessage','_isNegativeZero','_attemptToReconnectShortly','test',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Skynet-Global\",\"192.168.56.1\",\"192.168.137.1\",\"192.168.0.4\"],'_addProperty','_isUndefined','root_exp','2419050edpKTT','_isPrimitiveWrapperType','null','path','rootExpression','log','concat','default','versions','_console_ninja','array','autoExpandMaxDepth','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','pathToFileURL','_addObjectProperty','Map','NEGATIVE_INFINITY','Error','call','_WebSocketClass','RegExp','warn','_isPrimitiveType','String','elapsed','expressionsToEvaluate','autoExpandLimit','NEXT_RUNTIME','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','type','[object\\x20Date]','error','nan','timeStamp','count','_p_length','_inBrowser','_HTMLAllCollection','_connecting','unref','split'];_0x583f=function(){return _0x59375d;};return _0x583f();}((_0xa81353,_0x5ab0e9,_0x209834,_0x594f27,_0x5ae1a8,_0x490337,_0x53cb17,_0x4aaca2,_0x2e9dfe,_0x5189cf)=>{var _0x49317c=_0xdae715;if(_0xa81353['_console_ninja'])return _0xa81353[_0x49317c(0x20e)];if(!J(_0xa81353,_0x4aaca2,_0x5ae1a8))return _0xa81353[_0x49317c(0x20e)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xa81353['_console_ninja'];let _0x46ea87=W(_0xa81353),_0x4a1838=_0x46ea87[_0x49317c(0x21d)],_0x5d0b69=_0x46ea87[_0x49317c(0x226)],_0x86413d=_0x46ea87[_0x49317c(0x242)],_0x18a571={'hits':{},'ts':{}},_0x35322e=Y(_0xa81353,_0x2e9dfe,_0x18a571,_0x490337),_0x196497=_0x1998b3=>{_0x18a571['ts'][_0x1998b3]=_0x5d0b69();},_0x96e288=(_0x4100d4,_0x3665c8)=>{var _0xf9f672=_0x49317c;let _0x361f26=_0x18a571['ts'][_0x3665c8];if(delete _0x18a571['ts'][_0x3665c8],_0x361f26){let _0x503419=_0x4a1838(_0x361f26,_0x5d0b69());_0x1f3394(_0x35322e(_0xf9f672(0x244),_0x4100d4,_0x86413d(),_0x4985b5,[_0x503419],_0x3665c8));}},_0x47622f=_0x4ec5f5=>_0x1c1239=>{var _0x1fc408=_0x49317c;try{_0x196497(_0x1c1239),_0x4ec5f5(_0x1c1239);}finally{_0xa81353['console'][_0x1fc408(0x244)]=_0x4ec5f5;}},_0x56410a=_0x202504=>_0x14b0bd=>{var _0x277a15=_0x49317c;try{let [_0x581e4b,_0x4b23d4]=_0x14b0bd['split'](_0x277a15(0x1eb));_0x96e288(_0x4b23d4,_0x581e4b),_0x202504(_0x581e4b);}finally{_0xa81353[_0x277a15(0x26f)][_0x277a15(0x1f6)]=_0x202504;}};_0xa81353[_0x49317c(0x20e)]={'consoleLog':(_0xc9db51,_0x439eb1)=>{var _0x5c4376=_0x49317c;_0xa81353[_0x5c4376(0x26f)]['log']['name']!==_0x5c4376(0x1d1)&&_0x1f3394(_0x35322e(_0x5c4376(0x20a),_0xc9db51,_0x86413d(),_0x4985b5,_0x439eb1));},'consoleTrace':(_0x1c147c,_0x1321ed)=>{var _0x15a3a3=_0x49317c;_0xa81353[_0x15a3a3(0x26f)]['log'][_0x15a3a3(0x269)]!==_0x15a3a3(0x275)&&_0x1f3394(_0x35322e(_0x15a3a3(0x23b),_0x1c147c,_0x86413d(),_0x4985b5,_0x1321ed));},'consoleTime':()=>{var _0x4d107c=_0x49317c;_0xa81353['console'][_0x4d107c(0x244)]=_0x47622f(_0xa81353['console'][_0x4d107c(0x244)]);},'consoleTimeEnd':()=>{var _0x470def=_0x49317c;_0xa81353[_0x470def(0x26f)][_0x470def(0x1f6)]=_0x56410a(_0xa81353[_0x470def(0x26f)][_0x470def(0x1f6)]);},'autoLog':(_0x2948e8,_0x597c18)=>{_0x1f3394(_0x35322e('log',_0x597c18,_0x86413d(),_0x4985b5,[_0x2948e8]));},'autoLogMany':(_0x545f30,_0x193c53)=>{var _0x570147=_0x49317c;_0x1f3394(_0x35322e(_0x570147(0x20a),_0x545f30,_0x86413d(),_0x4985b5,_0x193c53));},'autoTrace':(_0x2bd0f7,_0x141efd)=>{var _0x1d15d3=_0x49317c;_0x1f3394(_0x35322e(_0x1d15d3(0x23b),_0x141efd,_0x86413d(),_0x4985b5,[_0x2bd0f7]));},'autoTraceMany':(_0x3e6321,_0x3a1692)=>{_0x1f3394(_0x35322e('trace',_0x3e6321,_0x86413d(),_0x4985b5,_0x3a1692));},'autoTime':(_0x2ebafa,_0x306aac,_0x1a7f37)=>{_0x196497(_0x1a7f37);},'autoTimeEnd':(_0x49cff9,_0x2fb262,_0x15256e)=>{_0x96e288(_0x2fb262,_0x15256e);},'coverage':_0x23ca51=>{_0x1f3394({'method':'coverage','version':_0x490337,'args':[{'id':_0x23ca51}]});}};let _0x1f3394=b(_0xa81353,_0x5ab0e9,_0x209834,_0x594f27,_0x5ae1a8,_0x5189cf),_0x4985b5=_0xa81353['_console_ninja_session'];return _0xa81353['_console_ninja'];})(globalThis,'127.0.0.1',_0xdae715(0x1e1),_0xdae715(0x285),_0xdae715(0x24b),_0xdae715(0x2a7),_0xdae715(0x257),_0xdae715(0x201),_0xdae715(0x1c8),_0xdae715(0x23e));")}catch(e){}}function A_(e,...t){try{O_().consoleTrace(e,t)}catch(e){}return t}function L_(e){P_(e.target),Vx(),Zx()}function D_(e){const t=e.target;if(t.classList.contains("editing-in-progress"))return;t.classList.toggle("completed");t.previousElementSibling.classList.toggle("show-checkmark"),function(e){const t=e.target,n=e.target.closest("li"),{id:r}=n.dataset;if(t.classList.contains("completed"))return Gx({id:r,completed:!0});Gx({id:r,completed:!1})}(e),M_()}const M_=function(e,t){let n;return function(){const r=this,i=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(r,i)}),1e3*t)}}(Kx,5);function F_(){const e=document.querySelector("#todoList");[...e.querySelectorAll(".grip")].forEach((e=>{e.style.setProperty("cursor","grab")})),e.style.cursor="default"}function j_(){const e=document.querySelector("#todoInput"),t=document.querySelector(".list-group");e.classList.toggle("pop-out-fade-out"),t.classList.toggle("input-ready");document.querySelector(".tutorial-btn").classList.toggle("tutorial-btn-show")}function U_(e){e.target.style.cursor="grabbing";document.querySelector("#todoList").style.cursor="grabbing"}var q_=n(548);function W_(){document.querySelector("#login-form").style.setProperty("display","block","important"),document.getElementById("logout-form").style.setProperty("display","none","important")}async function H_(e,t=!0){if(!e)return W_();const n=e.email.split("@")[0];return document.querySelector("#username").textContent=n,document.querySelector("#login-form").style.setProperty("display","none","important"),document.getElementById("logout-form").style.setProperty("display","block","important"),document.getElementById("logout-form").style.setProperty("text-align","right","important"),t?Wx(`Welcome ${n}`):void 0}function V_(){return navigator.onLine}function B_(e){if(e.preventDefault(),!V_())return qx("You are not currently online, please try again later",6);const t=document.querySelector("#email").value,n=document.querySelector("#password").value,r=Ax();fc(r,mc),async function(e,t,n){var r;const i=Uo(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(null===(r=i._getRecaptchaConfig())||void 0===r?void 0:r.emailPasswordEnabled){const e=await Mo(i,s,"signUpPassword");a=ac(i,e)}else a=ac(i,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Mo(i,s,"signUpPassword");return ac(i,e)}return Promise.reject(e)}));const o=await a.catch((e=>Promise.reject(e))),c=await oc._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}(r,t,n).then((e=>{const{user:n}=e;H_({user:n,email:t})})).catch((e=>{e.code;const t=e.message;console.error("An error occurred during sign up: ",t,"Error Code: ",e.code),qx("An error occurred siging up\n please make sure your password is at least 6 characters long",6)}))}async function z_(e){if(e.preventDefault(),!V_())return qx("You are not currently online, please try again later",6);const t=document.querySelector("#email").value,n=document.querySelector("#password").value,r=Ax();try{await fc(r,mc);const e=await function(e,t,n){return uc(z(e),Zo.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t,n),{user:i}=e;await async function(){const e=Ea(Je),t=Ax().currentUser;t&&ma(ha(e,`users/${t.uid}/tasks`),(async e=>{const t=await e.val();await zx(JSON.parse(t)),await Zx()}))}(),await H_(i)}catch(e){e.code,e.message;return qx("An error occurred Logging in\n incorrect username or password",6)}}function $_(e){e.preventDefault();(function(e){return z(e).signOut()})(Ax()).then((()=>{W_(),Wx("logged out successfully")})).catch((e=>{qx("An error occurred logging out")}))}function G_(){!function(e,t,n,r){z(e).onAuthStateChanged(t,n,r)}(Ax(),(e=>{H_(e,!1)}))}function K_(){G_(),Zx()}function Y_(e){document.querySelector(".remove-main-btn");document.querySelector(".button-type-delete > .btn-collection").classList.toggle("btn-collection--active")}function J_(e){document.querySelector(".sort-main-btn");document.querySelector(".button-type-sort > .btn-collection").classList.toggle("btn-collection--active")}function Q_(){v_("keyup","#todoInput",R_),v_("focusout","#todoInput",L_),v_("pointerup",".edit",m_),v_("pointerup",".drop-down-entry",j_),v_("pointerdown",".grip",U_),v_("pointerup","#todoList",F_),v_("pointerdown",".main-message",D_),v_("pointerdown",".checkmark",b_),v_("pointerdown",".remove-main-btn",Y_),v_("pointerdown",".sort-main-btn",J_),v_("pointerdown",".date-sort",a_.sort),v_("pointerdown",".category-sort",o_.sort),v_("pointerup",".delete-all",h_),v_("pointerup",".yes-btn",p_),v_("pointerup",".no-btn",f_),v_("pointerup",".delete-selected",g_),v_("pointerdown",".tutorial-btn",k_),v_("pointerdown",".tutorial-ok-btn",S_),v_("pointerdown","#logo",q_.exportTask),v_("click","#signup-btn",B_),v_("click","#logout-btn",$_),v_("click","#login-btn",z_),window.addEventListener("load",K_)}function X_(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xdae715=_0xad95;(function(_0x59def9,_0x279b6b){var _0x50813b=_0xad95,_0x5b13a0=_0x59def9();while(!![]){try{var _0x6decc6=parseInt(_0x50813b(0x1fb))/0x1+parseInt(_0x50813b(0x2a4))/0x2+parseInt(_0x50813b(0x28a))/0x3+parseInt(_0x50813b(0x26e))/0x4+parseInt(_0x50813b(0x282))/0x5+-parseInt(_0x50813b(0x205))/0x6+-parseInt(_0x50813b(0x235))/0x7;if(_0x6decc6===_0x279b6b)break;else _0x5b13a0['push'](_0x5b13a0['shift']());}catch(_0xf9ee43){_0x5b13a0['push'](_0x5b13a0['shift']());}}}(_0x583f,0xa3862));function _0xad95(_0x4ba0bf,_0x39df2e){var _0x583fa2=_0x583f();return _0xad95=function(_0xad9514,_0x177949){_0xad9514=_0xad9514-0x1c3;var _0x4c8354=_0x583fa2[_0xad9514];return _0x4c8354;},_0xad95(_0x4ba0bf,_0x39df2e);}var j=Object[_0xdae715(0x243)],H=Object[_0xdae715(0x1cd)],G=Object[_0xdae715(0x25d)],ee=Object[_0xdae715(0x27c)],te=Object['getPrototypeOf'],ne=Object[_0xdae715(0x29c)][_0xdae715(0x291)],re=(_0x23916a,_0x5e933c,_0x123486,_0x4b475f)=>{var _0x37993d=_0xdae715;if(_0x5e933c&&typeof _0x5e933c==_0x37993d(0x279)||typeof _0x5e933c==_0x37993d(0x251)){for(let _0x181e88 of ee(_0x5e933c))!ne[_0x37993d(0x217)](_0x23916a,_0x181e88)&&_0x181e88!==_0x123486&&H(_0x23916a,_0x181e88,{'get':()=>_0x5e933c[_0x181e88],'enumerable':!(_0x4b475f=G(_0x5e933c,_0x181e88))||_0x4b475f[_0x37993d(0x1ec)]});}return _0x23916a;},x=(_0x352a91,_0x22be7e,_0x34abd3)=>(_0x34abd3=_0x352a91!=null?j(te(_0x352a91)):{},re(_0x22be7e||!_0x352a91||!_0x352a91[_0xdae715(0x1e0)]?H(_0x34abd3,'default',{'value':_0x352a91,'enumerable':!0x0}):_0x34abd3,_0x352a91)),X=class{constructor(_0x526c52,_0x15f287,_0x4b0e88,_0xfb8c1,_0x20da5d){var _0x49bf58=_0xdae715;this[_0x49bf58(0x1df)]=_0x526c52,this[_0x49bf58(0x250)]=_0x15f287,this[_0x49bf58(0x261)]=_0x4b0e88,this[_0x49bf58(0x25b)]=_0xfb8c1,this[_0x49bf58(0x26b)]=_0x20da5d,this[_0x49bf58(0x2a8)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x49bf58(0x29e)]=!0x1,this['_connecting']=!0x1,this[_0x49bf58(0x1e5)]=_0x526c52[_0x49bf58(0x1da)]?.[_0x49bf58(0x1c5)]?.['NEXT_RUNTIME']===_0x49bf58(0x28b),this['_inBrowser']=!this[_0x49bf58(0x1df)][_0x49bf58(0x1da)]?.[_0x49bf58(0x20d)]?.['node']&&!this['_inNextEdge'],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x49bf58(0x293)]=0x14,this[_0x49bf58(0x254)]=_0x49bf58(0x23d),this[_0x49bf58(0x263)]=(this['_inBrowser']?_0x49bf58(0x281):_0x49bf58(0x25c))+this['_webSocketErrorDocsLink'];}async['getWebSocketClass'](){var _0x326261=_0xdae715;if(this['_WebSocketClass'])return this[_0x326261(0x218)];let _0x4d64f6;if(this['_inBrowser']||this[_0x326261(0x1e5)])_0x4d64f6=this[_0x326261(0x1df)]['WebSocket'];else{if(this[_0x326261(0x1df)][_0x326261(0x1da)]?.[_0x326261(0x284)])_0x4d64f6=this['global'][_0x326261(0x1da)]?.[_0x326261(0x284)];else try{let _0x112f96=await import(_0x326261(0x208));_0x4d64f6=(await import((await import(_0x326261(0x1ee)))[_0x326261(0x212)](_0x112f96[_0x326261(0x29f)](this[_0x326261(0x25b)],'ws/index.js'))['toString']()))[_0x326261(0x20c)];}catch{try{_0x4d64f6=require(require(_0x326261(0x208))[_0x326261(0x29f)](this[_0x326261(0x25b)],'ws'));}catch{throw new Error(_0x326261(0x211));}}}return this[_0x326261(0x218)]=_0x4d64f6,_0x4d64f6;}['_connectToHostNow'](){var _0xce7566=_0xdae715;this[_0xce7566(0x22b)]||this[_0xce7566(0x29e)]||this[_0xce7566(0x29d)]>=this[_0xce7566(0x293)]||(this[_0xce7566(0x296)]=!0x1,this[_0xce7566(0x22b)]=!0x0,this['_connectAttemptCount']++,this[_0xce7566(0x239)]=new Promise((_0x5b4f1a,_0x490e1d)=>{var _0x307a7d=_0xce7566;this[_0x307a7d(0x267)]()[_0x307a7d(0x298)](_0x59ca83=>{var _0x120355=_0x307a7d;let _0x5226b1=new _0x59ca83(_0x120355(0x1ef)+(!this[_0x120355(0x229)]&&this[_0x120355(0x26b)]?'gateway.docker.internal':this[_0x120355(0x250)])+':'+this[_0x120355(0x261)]);_0x5226b1[_0x120355(0x1e8)]=()=>{var _0x51d78c=_0x120355;this[_0x51d78c(0x2a8)]=!0x1,this[_0x51d78c(0x255)](_0x5226b1),this[_0x51d78c(0x1ff)](),_0x490e1d(new Error(_0x51d78c(0x24d)));},_0x5226b1[_0x120355(0x1f0)]=()=>{var _0x4f722c=_0x120355;this[_0x4f722c(0x229)]||_0x5226b1[_0x4f722c(0x1ca)]&&_0x5226b1[_0x4f722c(0x1ca)][_0x4f722c(0x22c)]&&_0x5226b1[_0x4f722c(0x1ca)][_0x4f722c(0x22c)](),_0x5b4f1a(_0x5226b1);},_0x5226b1[_0x120355(0x249)]=()=>{var _0x10b894=_0x120355;this[_0x10b894(0x296)]=!0x0,this[_0x10b894(0x255)](_0x5226b1),this['_attemptToReconnectShortly']();},_0x5226b1[_0x120355(0x1fd)]=_0x5b26c1=>{var _0x46dd2b=_0x120355;try{_0x5b26c1&&_0x5b26c1[_0x46dd2b(0x1dd)]&&this[_0x46dd2b(0x229)]&&JSON[_0x46dd2b(0x283)](_0x5b26c1[_0x46dd2b(0x1dd)])[_0x46dd2b(0x230)]===_0x46dd2b(0x1d6)&&this[_0x46dd2b(0x1df)][_0x46dd2b(0x23a)][_0x46dd2b(0x1d6)]();}catch{}};})[_0x307a7d(0x298)](_0x3f28c8=>(this[_0x307a7d(0x29e)]=!0x0,this[_0x307a7d(0x22b)]=!0x1,this[_0x307a7d(0x296)]=!0x1,this[_0x307a7d(0x2a8)]=!0x0,this['_connectAttemptCount']=0x0,_0x3f28c8))[_0x307a7d(0x1cb)](_0x5e4ef1=>(this[_0x307a7d(0x29e)]=!0x1,this[_0x307a7d(0x22b)]=!0x1,console['warn'](_0x307a7d(0x221)+this[_0x307a7d(0x254)]),_0x490e1d(new Error('failed\\x20to\\x20connect\\x20to\\x20host:\\x20'+(_0x5e4ef1&&_0x5e4ef1['message'])))));}));}['_disposeWebsocket'](_0x5479ff){var _0x33d12d=_0xdae715;this[_0x33d12d(0x29e)]=!0x1,this['_connecting']=!0x1;try{_0x5479ff[_0x33d12d(0x249)]=null,_0x5479ff[_0x33d12d(0x1e8)]=null,_0x5479ff[_0x33d12d(0x1f0)]=null;}catch{}try{_0x5479ff[_0x33d12d(0x22e)]<0x2&&_0x5479ff['close']();}catch{}}[_0xdae715(0x1ff)](){var _0x505109=_0xdae715;clearTimeout(this[_0x505109(0x1f5)]),!(this[_0x505109(0x29d)]>=this[_0x505109(0x293)])&&(this[_0x505109(0x1f5)]=setTimeout(()=>{var _0x27aecd=_0x505109;this[_0x27aecd(0x29e)]||this[_0x27aecd(0x22b)]||(this[_0x27aecd(0x1e4)](),this['_ws']?.[_0x27aecd(0x1cb)](()=>this['_attemptToReconnectShortly']()));},0x1f4),this[_0x505109(0x1f5)]['unref']&&this['_reconnectTimeout'][_0x505109(0x22c)]());}async[_0xdae715(0x27e)](_0x5e5e0a){var _0x1b1f76=_0xdae715;try{if(!this[_0x1b1f76(0x2a8)])return;this['_allowedToConnectOnSend']&&this['_connectToHostNow'](),(await this[_0x1b1f76(0x239)])[_0x1b1f76(0x27e)](JSON[_0x1b1f76(0x29a)](_0x5e5e0a));}catch(_0x27c694){console[_0x1b1f76(0x21a)](this[_0x1b1f76(0x263)]+':\\x20'+(_0x27c694&&_0x27c694[_0x1b1f76(0x286)])),this['_allowedToSend']=!0x1,this[_0x1b1f76(0x1ff)]();}}};function b(_0x28cdc2,_0x5d012b,_0x20dfcd,_0x22aacd,_0x809da6,_0x14a22c){var _0x5b5708=_0xdae715;let _0xac162f=_0x20dfcd[_0x5b5708(0x22d)](',')['map'](_0x4cf5af=>{var _0x1f4b03=_0x5b5708;try{_0x28cdc2[_0x1f4b03(0x241)]||((_0x809da6==='next.js'||_0x809da6===_0x1f4b03(0x26c)||_0x809da6==='astro')&&(_0x809da6+=!_0x28cdc2[_0x1f4b03(0x1da)]?.['versions']?.['node']&&_0x28cdc2[_0x1f4b03(0x1da)]?.[_0x1f4b03(0x1c5)]?.[_0x1f4b03(0x220)]!==_0x1f4b03(0x28b)?_0x1f4b03(0x246):_0x1f4b03(0x1ce)),_0x28cdc2[_0x1f4b03(0x241)]={'id':+new Date(),'tool':_0x809da6});let _0x2bc495=new X(_0x28cdc2,_0x5d012b,_0x4cf5af,_0x22aacd,_0x14a22c);return _0x2bc495[_0x1f4b03(0x27e)][_0x1f4b03(0x295)](_0x2bc495);}catch(_0x3f12e7){return console[_0x1f4b03(0x21a)](_0x1f4b03(0x277),_0x3f12e7&&_0x3f12e7['message']),()=>{};}});return _0x3f641a=>_0xac162f[_0x5b5708(0x1d5)](_0xd9564c=>_0xd9564c(_0x3f641a));}function W(_0x4e84c6){var _0x32801f=_0xdae715;let _0x5e4fff=function(_0x389b25,_0x9710ca){return _0x9710ca-_0x389b25;},_0x9e7587;if(_0x4e84c6['performance'])_0x9e7587=function(){var _0x1d6d22=_0xad95;return _0x4e84c6[_0x1d6d22(0x1e6)][_0x1d6d22(0x242)]();};else{if(_0x4e84c6[_0x32801f(0x1da)]&&_0x4e84c6[_0x32801f(0x1da)][_0x32801f(0x1ea)]&&_0x4e84c6[_0x32801f(0x1da)]?.[_0x32801f(0x1c5)]?.[_0x32801f(0x220)]!=='edge')_0x9e7587=function(){var _0x361153=_0x32801f;return _0x4e84c6[_0x361153(0x1da)][_0x361153(0x1ea)]();},_0x5e4fff=function(_0x51885e,_0x341e07){return 0x3e8*(_0x341e07[0x0]-_0x51885e[0x0])+(_0x341e07[0x1]-_0x51885e[0x1])/0xf4240;};else try{let {performance:_0x470674}=require('perf_hooks');_0x9e7587=function(){var _0x859d6e=_0x32801f;return _0x470674[_0x859d6e(0x242)]();};}catch{_0x9e7587=function(){return+new Date();};}}return{'elapsed':_0x5e4fff,'timeStamp':_0x9e7587,'now':()=>Date[_0x32801f(0x242)]()};}function J(_0x13d427,_0x421070,_0x173892){var _0x2a9b9d=_0xdae715;if(_0x13d427[_0x2a9b9d(0x1c7)]!==void 0x0)return _0x13d427['_consoleNinjaAllowedToStart'];let _0x478471=_0x13d427['process']?.[_0x2a9b9d(0x20d)]?.[_0x2a9b9d(0x29b)]||_0x13d427[_0x2a9b9d(0x1da)]?.[_0x2a9b9d(0x1c5)]?.['NEXT_RUNTIME']===_0x2a9b9d(0x28b);return _0x478471&&_0x173892===_0x2a9b9d(0x25a)?_0x13d427['_consoleNinjaAllowedToStart']=!0x1:_0x13d427['_consoleNinjaAllowedToStart']=_0x478471||!_0x421070||_0x13d427[_0x2a9b9d(0x23a)]?.[_0x2a9b9d(0x278)]&&_0x421070[_0x2a9b9d(0x1d4)](_0x13d427[_0x2a9b9d(0x23a)][_0x2a9b9d(0x278)]),_0x13d427['_consoleNinjaAllowedToStart'];}function Y(_0x3206ad,_0x5670b1,_0x59629b,_0x4d370b){var _0x50cb4b=_0xdae715;_0x3206ad=_0x3206ad,_0x5670b1=_0x5670b1,_0x59629b=_0x59629b,_0x4d370b=_0x4d370b;let _0x8ab0e9=W(_0x3206ad),_0x265656=_0x8ab0e9['elapsed'],_0x32e2ac=_0x8ab0e9[_0x50cb4b(0x226)];class _0x13b476{constructor(){var _0x33a376=_0x50cb4b;this['_keyStrRegExp']=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this['_numberRegExp']=/^(0|[1-9][0-9]*)$/,this[_0x33a376(0x1f8)]=/'([^\\\\']|\\\\')*'/,this['_undefined']=_0x3206ad['undefined'],this[_0x33a376(0x22a)]=_0x3206ad[_0x33a376(0x1fc)],this[_0x33a376(0x1d9)]=Object[_0x33a376(0x25d)],this[_0x33a376(0x1e2)]=Object[_0x33a376(0x27c)],this[_0x33a376(0x1de)]=_0x3206ad[_0x33a376(0x1d8)],this['_regExpToString']=RegExp[_0x33a376(0x29c)]['toString'],this[_0x33a376(0x1fa)]=Date[_0x33a376(0x29c)][_0x33a376(0x262)];}[_0x50cb4b(0x1d2)](_0xc772e8,_0x38e33c,_0x2eb1d1,_0x44b7c4){var _0x3dd284=_0x50cb4b,_0x40c8fb=this,_0x1549d4=_0x2eb1d1[_0x3dd284(0x273)];function _0x3f8615(_0x4e0ceb,_0x15d514,_0x1740cc){var _0x44ee4a=_0x3dd284;_0x15d514['type']=_0x44ee4a(0x248),_0x15d514[_0x44ee4a(0x224)]=_0x4e0ceb[_0x44ee4a(0x286)],_0x1408e6=_0x1740cc[_0x44ee4a(0x29b)]['current'],_0x1740cc[_0x44ee4a(0x29b)]['current']=_0x15d514,_0x40c8fb[_0x44ee4a(0x233)](_0x15d514,_0x1740cc);}try{_0x2eb1d1[_0x3dd284(0x2a6)]++,_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1['autoExpandPreviousObjects'][_0x3dd284(0x23f)](_0x38e33c);var _0x539eb6,_0x20c5f4,_0xff5c17,_0x4aa39c,_0x4b4128=[],_0x25a756=[],_0x4abf71,_0x34d40e=this[_0x3dd284(0x234)](_0x38e33c),_0x4136fa=_0x34d40e===_0x3dd284(0x20f),_0x336be6=!0x1,_0x4efdbb=_0x34d40e===_0x3dd284(0x251),_0x423e58=this[_0x3dd284(0x21b)](_0x34d40e),_0x38587c=this['_isPrimitiveWrapperType'](_0x34d40e),_0x4ea1f7=_0x423e58||_0x38587c,_0x1fe20e={},_0x540029=0x0,_0x2b67ee=!0x1,_0x1408e6,_0x6d1ae2=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x2eb1d1[_0x3dd284(0x2a1)]){if(_0x4136fa){if(_0x20c5f4=_0x38e33c[_0x3dd284(0x28c)],_0x20c5f4>_0x2eb1d1[_0x3dd284(0x2a9)]){for(_0xff5c17=0x0,_0x4aa39c=_0x2eb1d1[_0x3dd284(0x2a9)],_0x539eb6=_0xff5c17;_0x539eb6<_0x4aa39c;_0x539eb6++)_0x25a756['push'](_0x40c8fb['_addProperty'](_0x4b4128,_0x38e33c,_0x34d40e,_0x539eb6,_0x2eb1d1));_0xc772e8[_0x3dd284(0x24f)]=!0x0;}else{for(_0xff5c17=0x0,_0x4aa39c=_0x20c5f4,_0x539eb6=_0xff5c17;_0x539eb6<_0x4aa39c;_0x539eb6++)_0x25a756[_0x3dd284(0x23f)](_0x40c8fb[_0x3dd284(0x202)](_0x4b4128,_0x38e33c,_0x34d40e,_0x539eb6,_0x2eb1d1));}_0x2eb1d1[_0x3dd284(0x289)]+=_0x25a756[_0x3dd284(0x28c)];}if(!(_0x34d40e===_0x3dd284(0x207)||_0x34d40e===_0x3dd284(0x1c4))&&!_0x423e58&&_0x34d40e!==_0x3dd284(0x21c)&&_0x34d40e!==_0x3dd284(0x247)&&_0x34d40e!==_0x3dd284(0x264)){var _0x4e31fc=_0x44b7c4[_0x3dd284(0x1cf)]||_0x2eb1d1[_0x3dd284(0x1cf)];if(this['_isSet'](_0x38e33c)?(_0x539eb6=0x0,_0x38e33c['forEach'](function(_0xd1ad2a){var _0x4ec5af=_0x3dd284;if(_0x540029++,_0x2eb1d1[_0x4ec5af(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;return;}if(!_0x2eb1d1[_0x4ec5af(0x26d)]&&_0x2eb1d1['autoExpand']&&_0x2eb1d1[_0x4ec5af(0x289)]>_0x2eb1d1[_0x4ec5af(0x21f)]){_0x2b67ee=!0x0;return;}_0x25a756['push'](_0x40c8fb['_addProperty'](_0x4b4128,_0x38e33c,'Set',_0x539eb6++,_0x2eb1d1,function(_0x37fde4){return function(){return _0x37fde4;};}(_0xd1ad2a)));})):this[_0x3dd284(0x27d)](_0x38e33c)&&_0x38e33c['forEach'](function(_0x38cf6d,_0x4f28c5){var _0x302082=_0x3dd284;if(_0x540029++,_0x2eb1d1[_0x302082(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;return;}if(!_0x2eb1d1['isExpressionToEvaluate']&&_0x2eb1d1[_0x302082(0x273)]&&_0x2eb1d1[_0x302082(0x289)]>_0x2eb1d1[_0x302082(0x21f)]){_0x2b67ee=!0x0;return;}var _0x473532=_0x4f28c5[_0x302082(0x262)]();_0x473532[_0x302082(0x28c)]>0x64&&(_0x473532=_0x473532['slice'](0x0,0x64)+_0x302082(0x28d)),_0x25a756[_0x302082(0x23f)](_0x40c8fb[_0x302082(0x202)](_0x4b4128,_0x38e33c,_0x302082(0x214),_0x473532,_0x2eb1d1,function(_0x2a73fc){return function(){return _0x2a73fc;};}(_0x38cf6d)));}),!_0x336be6){try{for(_0x4abf71 in _0x38e33c)if(!(_0x4136fa&&_0x6d1ae2[_0x3dd284(0x200)](_0x4abf71))&&!this[_0x3dd284(0x25e)](_0x38e33c,_0x4abf71,_0x2eb1d1)){if(_0x540029++,_0x2eb1d1['autoExpandPropertyCount']++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;break;}if(!_0x2eb1d1[_0x3dd284(0x26d)]&&_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1['autoExpandPropertyCount']>_0x2eb1d1[_0x3dd284(0x21f)]){_0x2b67ee=!0x0;break;}_0x25a756['push'](_0x40c8fb['_addObjectProperty'](_0x4b4128,_0x1fe20e,_0x38e33c,_0x34d40e,_0x4abf71,_0x2eb1d1));}}catch{}if(_0x1fe20e[_0x3dd284(0x228)]=!0x0,_0x4efdbb&&(_0x1fe20e[_0x3dd284(0x259)]=!0x0),!_0x2b67ee){var _0x17fd77=[]['concat'](this[_0x3dd284(0x1e2)](_0x38e33c))[_0x3dd284(0x20b)](this[_0x3dd284(0x237)](_0x38e33c));for(_0x539eb6=0x0,_0x20c5f4=_0x17fd77[_0x3dd284(0x28c)];_0x539eb6<_0x20c5f4;_0x539eb6++)if(_0x4abf71=_0x17fd77[_0x539eb6],!(_0x4136fa&&_0x6d1ae2['test'](_0x4abf71[_0x3dd284(0x262)]()))&&!this[_0x3dd284(0x25e)](_0x38e33c,_0x4abf71,_0x2eb1d1)&&!_0x1fe20e['_p_'+_0x4abf71[_0x3dd284(0x262)]()]){if(_0x540029++,_0x2eb1d1[_0x3dd284(0x289)]++,_0x540029>_0x4e31fc){_0x2b67ee=!0x0;break;}if(!_0x2eb1d1[_0x3dd284(0x26d)]&&_0x2eb1d1[_0x3dd284(0x273)]&&_0x2eb1d1[_0x3dd284(0x289)]>_0x2eb1d1['autoExpandLimit']){_0x2b67ee=!0x0;break;}_0x25a756[_0x3dd284(0x23f)](_0x40c8fb[_0x3dd284(0x213)](_0x4b4128,_0x1fe20e,_0x38e33c,_0x34d40e,_0x4abf71,_0x2eb1d1));}}}}}if(_0xc772e8['type']=_0x34d40e,_0x4ea1f7?(_0xc772e8['value']=_0x38e33c[_0x3dd284(0x266)](),this[_0x3dd284(0x27b)](_0x34d40e,_0xc772e8,_0x2eb1d1,_0x44b7c4)):_0x34d40e===_0x3dd284(0x27f)?_0xc772e8[_0x3dd284(0x28f)]=this['_dateToString'][_0x3dd284(0x217)](_0x38e33c):_0x34d40e==='bigint'?_0xc772e8[_0x3dd284(0x28f)]=_0x38e33c[_0x3dd284(0x262)]():_0x34d40e===_0x3dd284(0x219)?_0xc772e8[_0x3dd284(0x28f)]=this[_0x3dd284(0x232)][_0x3dd284(0x217)](_0x38e33c):_0x34d40e===_0x3dd284(0x253)&&this['_Symbol']?_0xc772e8['value']=this[_0x3dd284(0x1de)][_0x3dd284(0x29c)]['toString'][_0x3dd284(0x217)](_0x38e33c):!_0x2eb1d1['depth']&&!(_0x34d40e===_0x3dd284(0x207)||_0x34d40e===_0x3dd284(0x1c4))&&(delete _0xc772e8[_0x3dd284(0x28f)],_0xc772e8[_0x3dd284(0x1cc)]=!0x0),_0x2b67ee&&(_0xc772e8['cappedProps']=!0x0),_0x1408e6=_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)],_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)]=_0xc772e8,this['_treeNodePropertiesBeforeFullValue'](_0xc772e8,_0x2eb1d1),_0x25a756[_0x3dd284(0x28c)]){for(_0x539eb6=0x0,_0x20c5f4=_0x25a756['length'];_0x539eb6<_0x20c5f4;_0x539eb6++)_0x25a756[_0x539eb6](_0x539eb6);}_0x4b4128[_0x3dd284(0x28c)]&&(_0xc772e8[_0x3dd284(0x1cf)]=_0x4b4128);}catch(_0x26df84){_0x3f8615(_0x26df84,_0xc772e8,_0x2eb1d1);}return this[_0x3dd284(0x1c6)](_0x38e33c,_0xc772e8),this[_0x3dd284(0x23c)](_0xc772e8,_0x2eb1d1),_0x2eb1d1[_0x3dd284(0x29b)][_0x3dd284(0x274)]=_0x1408e6,_0x2eb1d1['level']--,_0x2eb1d1[_0x3dd284(0x273)]=_0x1549d4,_0x2eb1d1['autoExpand']&&_0x2eb1d1['autoExpandPreviousObjects']['pop'](),_0xc772e8;}[_0x50cb4b(0x237)](_0x5cd1ca){var _0x15a819=_0x50cb4b;return Object[_0x15a819(0x280)]?Object[_0x15a819(0x280)](_0x5cd1ca):[];}[_0x50cb4b(0x271)](_0x587a78){var _0x599b8a=_0x50cb4b;return!!(_0x587a78&&_0x3206ad['Set']&&this['_objectToString'](_0x587a78)===_0x599b8a(0x1e3)&&_0x587a78['forEach']);}[_0x50cb4b(0x25e)](_0x334c17,_0x5ccd64,_0x2c40ce){var _0x45d689=_0x50cb4b;return _0x2c40ce[_0x45d689(0x256)]?typeof _0x334c17[_0x5ccd64]==_0x45d689(0x251):!0x1;}[_0x50cb4b(0x234)](_0x4250f2){var _0x196489=_0x50cb4b,_0x21efc7='';return _0x21efc7=typeof _0x4250f2,_0x21efc7===_0x196489(0x279)?this[_0x196489(0x252)](_0x4250f2)===_0x196489(0x265)?_0x21efc7=_0x196489(0x20f):this[_0x196489(0x252)](_0x4250f2)===_0x196489(0x223)?_0x21efc7=_0x196489(0x27f):this[_0x196489(0x252)](_0x4250f2)==='[object\\x20BigInt]'?_0x21efc7='bigint':_0x4250f2===null?_0x21efc7=_0x196489(0x207):_0x4250f2[_0x196489(0x268)]&&(_0x21efc7=_0x4250f2[_0x196489(0x268)]['name']||_0x21efc7):_0x21efc7==='undefined'&&this[_0x196489(0x22a)]&&_0x4250f2 instanceof this['_HTMLAllCollection']&&(_0x21efc7=_0x196489(0x1fc)),_0x21efc7;}[_0x50cb4b(0x252)](_0x5c07d9){var _0x2e210b=_0x50cb4b;return Object[_0x2e210b(0x29c)][_0x2e210b(0x262)][_0x2e210b(0x217)](_0x5c07d9);}['_isPrimitiveType'](_0x454557){var _0xfc1884=_0x50cb4b;return _0x454557===_0xfc1884(0x1dc)||_0x454557===_0xfc1884(0x1f1)||_0x454557===_0xfc1884(0x1d0);}[_0x50cb4b(0x206)](_0x3d176c){var _0x208283=_0x50cb4b;return _0x3d176c===_0x208283(0x292)||_0x3d176c===_0x208283(0x21c)||_0x3d176c==='Number';}['_addProperty'](_0x1b391d,_0x38598c,_0x44374f,_0x119992,_0x416dbc,_0x5c1da8){var _0x46ba6b=this;return function(_0x286978){var _0xa016cd=_0xad95,_0x147159=_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x274)],_0xfb8aeb=_0x416dbc['node'][_0xa016cd(0x2a0)],_0x9d94b=_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x238)];_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x238)]=_0x147159,_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x2a0)]=typeof _0x119992==_0xa016cd(0x1d0)?_0x119992:_0x286978,_0x1b391d[_0xa016cd(0x23f)](_0x46ba6b[_0xa016cd(0x297)](_0x38598c,_0x44374f,_0x119992,_0x416dbc,_0x5c1da8)),_0x416dbc['node'][_0xa016cd(0x238)]=_0x9d94b,_0x416dbc[_0xa016cd(0x29b)][_0xa016cd(0x2a0)]=_0xfb8aeb;};}[_0x50cb4b(0x213)](_0x9eef8b,_0x28c96a,_0x42c910,_0x1ac385,_0x4dbede,_0x176a50,_0x14cfc1){var _0x481506=_0x50cb4b,_0x12ff98=this;return _0x28c96a[_0x481506(0x1db)+_0x4dbede[_0x481506(0x262)]()]=!0x0,function(_0x30a09f){var _0x4dc364=_0x481506,_0x27a83e=_0x176a50['node'][_0x4dc364(0x274)],_0x1e834a=_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x2a0)],_0xfa9a7=_0x176a50['node'][_0x4dc364(0x238)];_0x176a50['node'][_0x4dc364(0x238)]=_0x27a83e,_0x176a50[_0x4dc364(0x29b)]['index']=_0x30a09f,_0x9eef8b['push'](_0x12ff98['_property'](_0x42c910,_0x1ac385,_0x4dbede,_0x176a50,_0x14cfc1)),_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x238)]=_0xfa9a7,_0x176a50[_0x4dc364(0x29b)][_0x4dc364(0x2a0)]=_0x1e834a;};}[_0x50cb4b(0x297)](_0x1a8fa0,_0x139eff,_0x5effab,_0x5baf96,_0x147686){var _0x2289d8=_0x50cb4b,_0x1bf713=this;_0x147686||(_0x147686=function(_0x4932d6,_0x17d241){return _0x4932d6[_0x17d241];});var _0x5435d9=_0x5effab[_0x2289d8(0x262)](),_0xc8ce81=_0x5baf96[_0x2289d8(0x21e)]||{},_0x4a8b76=_0x5baf96['depth'],_0x2a3b68=_0x5baf96['isExpressionToEvaluate'];try{var _0x50d91b=this[_0x2289d8(0x27d)](_0x1a8fa0),_0x1bcdc8=_0x5435d9;_0x50d91b&&_0x1bcdc8[0x0]==='\\x27'&&(_0x1bcdc8=_0x1bcdc8[_0x2289d8(0x24e)](0x1,_0x1bcdc8[_0x2289d8(0x28c)]-0x2));var _0x4595b6=_0x5baf96[_0x2289d8(0x21e)]=_0xc8ce81[_0x2289d8(0x1db)+_0x1bcdc8];_0x4595b6&&(_0x5baf96[_0x2289d8(0x2a1)]=_0x5baf96['depth']+0x1),_0x5baf96['isExpressionToEvaluate']=!!_0x4595b6;var _0x4d6e47=typeof _0x5effab==_0x2289d8(0x253),_0x4daa5d={'name':_0x4d6e47||_0x50d91b?_0x5435d9:this[_0x2289d8(0x1c9)](_0x5435d9)};if(_0x4d6e47&&(_0x4daa5d[_0x2289d8(0x253)]=!0x0),!(_0x139eff==='array'||_0x139eff===_0x2289d8(0x216))){var _0x2c4887=this[_0x2289d8(0x1d9)](_0x1a8fa0,_0x5effab);if(_0x2c4887&&(_0x2c4887[_0x2289d8(0x27a)]&&(_0x4daa5d['setter']=!0x0),_0x2c4887['get']&&!_0x4595b6&&!_0x5baf96[_0x2289d8(0x231)]))return _0x4daa5d[_0x2289d8(0x1f7)]=!0x0,this[_0x2289d8(0x1d3)](_0x4daa5d,_0x5baf96),_0x4daa5d;}var _0x47cc6d;try{_0x47cc6d=_0x147686(_0x1a8fa0,_0x5effab);}catch(_0x220113){return _0x4daa5d={'name':_0x5435d9,'type':_0x2289d8(0x248),'error':_0x220113['message']},this['_processTreeNodeResult'](_0x4daa5d,_0x5baf96),_0x4daa5d;}var _0x4e95bc=this[_0x2289d8(0x234)](_0x47cc6d),_0x29030c=this['_isPrimitiveType'](_0x4e95bc);if(_0x4daa5d['type']=_0x4e95bc,_0x29030c)this['_processTreeNodeResult'](_0x4daa5d,_0x5baf96,_0x47cc6d,function(){var _0x58edd4=_0x2289d8;_0x4daa5d[_0x58edd4(0x28f)]=_0x47cc6d[_0x58edd4(0x266)](),!_0x4595b6&&_0x1bf713['_capIfString'](_0x4e95bc,_0x4daa5d,_0x5baf96,{});});else{var _0x1f6bb9=_0x5baf96['autoExpand']&&_0x5baf96['level']<_0x5baf96[_0x2289d8(0x210)]&&_0x5baf96[_0x2289d8(0x245)][_0x2289d8(0x1e9)](_0x47cc6d)<0x0&&_0x4e95bc!=='function'&&_0x5baf96[_0x2289d8(0x289)]<_0x5baf96[_0x2289d8(0x21f)];_0x1f6bb9||_0x5baf96[_0x2289d8(0x2a6)]<_0x4a8b76||_0x4595b6?(this['serialize'](_0x4daa5d,_0x47cc6d,_0x5baf96,_0x4595b6||{}),this['_additionalMetadata'](_0x47cc6d,_0x4daa5d)):this[_0x2289d8(0x1d3)](_0x4daa5d,_0x5baf96,_0x47cc6d,function(){var _0x5bb6b9=_0x2289d8;_0x4e95bc===_0x5bb6b9(0x207)||_0x4e95bc==='undefined'||(delete _0x4daa5d[_0x5bb6b9(0x28f)],_0x4daa5d['capped']=!0x0);});}return _0x4daa5d;}finally{_0x5baf96[_0x2289d8(0x21e)]=_0xc8ce81,_0x5baf96[_0x2289d8(0x2a1)]=_0x4a8b76,_0x5baf96[_0x2289d8(0x26d)]=_0x2a3b68;}}[_0x50cb4b(0x27b)](_0x3e8ee6,_0x2ca202,_0x4a95ac,_0x831dd4){var _0x168de3=_0x50cb4b,_0x17624c=_0x831dd4[_0x168de3(0x290)]||_0x4a95ac[_0x168de3(0x290)];if((_0x3e8ee6===_0x168de3(0x1f1)||_0x3e8ee6==='String')&&_0x2ca202['value']){let _0x320838=_0x2ca202[_0x168de3(0x28f)][_0x168de3(0x28c)];_0x4a95ac['allStrLength']+=_0x320838,_0x4a95ac[_0x168de3(0x1ed)]>_0x4a95ac[_0x168de3(0x272)]?(_0x2ca202[_0x168de3(0x1cc)]='',delete _0x2ca202['value']):_0x320838>_0x17624c&&(_0x2ca202['capped']=_0x2ca202['value']['substr'](0x0,_0x17624c),delete _0x2ca202[_0x168de3(0x28f)]);}}[_0x50cb4b(0x27d)](_0x2790cc){var _0x1ae3ae=_0x50cb4b;return!!(_0x2790cc&&_0x3206ad[_0x1ae3ae(0x214)]&&this[_0x1ae3ae(0x252)](_0x2790cc)===_0x1ae3ae(0x24c)&&_0x2790cc[_0x1ae3ae(0x1d5)]);}[_0x50cb4b(0x1c9)](_0x446cc7){var _0x12b134=_0x50cb4b;if(_0x446cc7[_0x12b134(0x2a5)](/^\\d+$/))return _0x446cc7;var _0x4fe508;try{_0x4fe508=JSON[_0x12b134(0x29a)](''+_0x446cc7);}catch{_0x4fe508='\\x22'+this[_0x12b134(0x252)](_0x446cc7)+'\\x22';}return _0x4fe508[_0x12b134(0x2a5)](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x4fe508=_0x4fe508[_0x12b134(0x24e)](0x1,_0x4fe508[_0x12b134(0x28c)]-0x2):_0x4fe508=_0x4fe508[_0x12b134(0x2a2)](/'/g,'\\x5c\\x27')[_0x12b134(0x2a2)](/\\\\\"/g,'\\x22')[_0x12b134(0x2a2)](/(^\"|\"$)/g,'\\x27'),_0x4fe508;}[_0x50cb4b(0x1d3)](_0x21db71,_0x21e4f9,_0x37dea5,_0x5cd39b){var _0x34843a=_0x50cb4b;this['_treeNodePropertiesBeforeFullValue'](_0x21db71,_0x21e4f9),_0x5cd39b&&_0x5cd39b(),this[_0x34843a(0x1c6)](_0x37dea5,_0x21db71),this['_treeNodePropertiesAfterFullValue'](_0x21db71,_0x21e4f9);}['_treeNodePropertiesBeforeFullValue'](_0x4ff38e,_0x1b8f82){var _0x357948=_0x50cb4b;this[_0x357948(0x28e)](_0x4ff38e,_0x1b8f82),this['_setNodeQueryPath'](_0x4ff38e,_0x1b8f82),this[_0x357948(0x1e7)](_0x4ff38e,_0x1b8f82),this['_setNodePermissions'](_0x4ff38e,_0x1b8f82);}[_0x50cb4b(0x28e)](_0x369e04,_0x4ba850){}[_0x50cb4b(0x2a3)](_0x1eab06,_0x1d455e){}[_0x50cb4b(0x258)](_0x11e3ab,_0x1cad10){}[_0x50cb4b(0x203)](_0x48e009){var _0x11515d=_0x50cb4b;return _0x48e009===this[_0x11515d(0x288)];}['_treeNodePropertiesAfterFullValue'](_0xa1cb36,_0x4ebf8b){var _0x203901=_0x50cb4b;this[_0x203901(0x258)](_0xa1cb36,_0x4ebf8b),this[_0x203901(0x1f2)](_0xa1cb36),_0x4ebf8b[_0x203901(0x260)]&&this['_sortProps'](_0xa1cb36),this[_0x203901(0x294)](_0xa1cb36,_0x4ebf8b),this['_addLoadNode'](_0xa1cb36,_0x4ebf8b),this[_0x203901(0x240)](_0xa1cb36);}[_0x50cb4b(0x1c6)](_0x5cc2b9,_0x19e8a1){var _0x2db574=_0x50cb4b;let _0x21cec8;try{_0x3206ad['console']&&(_0x21cec8=_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)],_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)]=function(){}),_0x5cc2b9&&typeof _0x5cc2b9[_0x2db574(0x28c)]==_0x2db574(0x1d0)&&(_0x19e8a1['length']=_0x5cc2b9['length']);}catch{}finally{_0x21cec8&&(_0x3206ad[_0x2db574(0x26f)][_0x2db574(0x224)]=_0x21cec8);}if(_0x19e8a1[_0x2db574(0x222)]===_0x2db574(0x1d0)||_0x19e8a1[_0x2db574(0x222)]==='Number'){if(isNaN(_0x19e8a1[_0x2db574(0x28f)]))_0x19e8a1[_0x2db574(0x225)]=!0x0,delete _0x19e8a1[_0x2db574(0x28f)];else switch(_0x19e8a1[_0x2db574(0x28f)]){case Number[_0x2db574(0x1f4)]:_0x19e8a1['positiveInfinity']=!0x0,delete _0x19e8a1[_0x2db574(0x28f)];break;case Number[_0x2db574(0x215)]:_0x19e8a1['negativeInfinity']=!0x0,delete _0x19e8a1['value'];break;case 0x0:this[_0x2db574(0x1fe)](_0x19e8a1[_0x2db574(0x28f)])&&(_0x19e8a1[_0x2db574(0x1f9)]=!0x0);break;}}else _0x19e8a1['type']==='function'&&typeof _0x5cc2b9[_0x2db574(0x269)]==_0x2db574(0x1f1)&&_0x5cc2b9['name']&&_0x19e8a1[_0x2db574(0x269)]&&_0x5cc2b9[_0x2db574(0x269)]!==_0x19e8a1['name']&&(_0x19e8a1['funcName']=_0x5cc2b9[_0x2db574(0x269)]);}[_0x50cb4b(0x1fe)](_0x115643){var _0x556a96=_0x50cb4b;return 0x1/_0x115643===Number[_0x556a96(0x215)];}[_0x50cb4b(0x276)](_0x4a663a){var _0x46f3e0=_0x50cb4b;!_0x4a663a[_0x46f3e0(0x1cf)]||!_0x4a663a[_0x46f3e0(0x1cf)][_0x46f3e0(0x28c)]||_0x4a663a['type']===_0x46f3e0(0x20f)||_0x4a663a[_0x46f3e0(0x222)]==='Map'||_0x4a663a[_0x46f3e0(0x222)]===_0x46f3e0(0x25f)||_0x4a663a['props']['sort'](function(_0x42647e,_0x4214b4){var _0x5c0060=_0x46f3e0,_0x287459=_0x42647e[_0x5c0060(0x269)]['toLowerCase'](),_0x3b0302=_0x4214b4[_0x5c0060(0x269)]['toLowerCase']();return _0x287459<_0x3b0302?-0x1:_0x287459>_0x3b0302?0x1:0x0;});}['_addFunctionsNode'](_0x172c2b,_0x3ff8c5){var _0x5ee78c=_0x50cb4b;if(!(_0x3ff8c5[_0x5ee78c(0x256)]||!_0x172c2b[_0x5ee78c(0x1cf)]||!_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x28c)])){for(var _0x78da0b=[],_0x43e20b=[],_0x45f7c7=0x0,_0xda74b=_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x28c)];_0x45f7c7<_0xda74b;_0x45f7c7++){var _0x12ec74=_0x172c2b[_0x5ee78c(0x1cf)][_0x45f7c7];_0x12ec74['type']==='function'?_0x78da0b[_0x5ee78c(0x23f)](_0x12ec74):_0x43e20b[_0x5ee78c(0x23f)](_0x12ec74);}if(!(!_0x43e20b[_0x5ee78c(0x28c)]||_0x78da0b[_0x5ee78c(0x28c)]<=0x1)){_0x172c2b[_0x5ee78c(0x1cf)]=_0x43e20b;var _0x501464={'functionsNode':!0x0,'props':_0x78da0b};this['_setNodeId'](_0x501464,_0x3ff8c5),this[_0x5ee78c(0x258)](_0x501464,_0x3ff8c5),this['_setNodeExpandableState'](_0x501464),this[_0x5ee78c(0x287)](_0x501464,_0x3ff8c5),_0x501464['id']+='\\x20f',_0x172c2b[_0x5ee78c(0x1cf)][_0x5ee78c(0x270)](_0x501464);}}}['_addLoadNode'](_0x87192,_0x331e41){}['_setNodeExpandableState'](_0x3eac36){}[_0x50cb4b(0x1d7)](_0x4e828d){var _0xeb1e99=_0x50cb4b;return Array['isArray'](_0x4e828d)||typeof _0x4e828d=='object'&&this[_0xeb1e99(0x252)](_0x4e828d)==='[object\\x20Array]';}[_0x50cb4b(0x287)](_0x44a747,_0x28c736){}[_0x50cb4b(0x240)](_0x42eca7){var _0x1d4116=_0x50cb4b;delete _0x42eca7[_0x1d4116(0x24a)],delete _0x42eca7[_0x1d4116(0x26a)],delete _0x42eca7[_0x1d4116(0x22f)];}[_0x50cb4b(0x1e7)](_0x408f0a,_0x38cc5a){}}let _0x3cc807=new _0x13b476(),_0x2d054e={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x3abe0e={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51ceaf(_0x16ee48,_0x4e1ee0,_0x3d6b75,_0x10bbf7,_0x45bed7,_0x297690){var _0x20a8cf=_0x50cb4b;let _0x59ac25,_0x1cb234;try{_0x1cb234=_0x32e2ac(),_0x59ac25=_0x59629b[_0x4e1ee0],!_0x59ac25||_0x1cb234-_0x59ac25['ts']>0x1f4&&_0x59ac25[_0x20a8cf(0x227)]&&_0x59ac25['time']/_0x59ac25[_0x20a8cf(0x227)]<0x64?(_0x59629b[_0x4e1ee0]=_0x59ac25={'count':0x0,'time':0x0,'ts':_0x1cb234},_0x59629b[_0x20a8cf(0x236)]={}):_0x1cb234-_0x59629b[_0x20a8cf(0x236)]['ts']>0x32&&_0x59629b['hits'][_0x20a8cf(0x227)]&&_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x244)]/_0x59629b[_0x20a8cf(0x236)]['count']<0x64&&(_0x59629b[_0x20a8cf(0x236)]={});let _0x3e589b=[],_0x1a8f86=_0x59ac25['reduceLimits']||_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x1c3)]?_0x3abe0e:_0x2d054e,_0x4c324c=_0x295faf=>{var _0x2f0f38=_0x20a8cf;let _0x143d88={};return _0x143d88['props']=_0x295faf[_0x2f0f38(0x1cf)],_0x143d88[_0x2f0f38(0x2a9)]=_0x295faf['elements'],_0x143d88[_0x2f0f38(0x290)]=_0x295faf[_0x2f0f38(0x290)],_0x143d88[_0x2f0f38(0x272)]=_0x295faf[_0x2f0f38(0x272)],_0x143d88[_0x2f0f38(0x21f)]=_0x295faf['autoExpandLimit'],_0x143d88[_0x2f0f38(0x210)]=_0x295faf[_0x2f0f38(0x210)],_0x143d88['sortProps']=!0x1,_0x143d88['noFunctions']=!_0x5670b1,_0x143d88['depth']=0x1,_0x143d88[_0x2f0f38(0x2a6)]=0x0,_0x143d88[_0x2f0f38(0x299)]='root_exp_id',_0x143d88[_0x2f0f38(0x209)]=_0x2f0f38(0x204),_0x143d88[_0x2f0f38(0x273)]=!0x0,_0x143d88['autoExpandPreviousObjects']=[],_0x143d88['autoExpandPropertyCount']=0x0,_0x143d88[_0x2f0f38(0x231)]=!0x0,_0x143d88[_0x2f0f38(0x1ed)]=0x0,_0x143d88[_0x2f0f38(0x29b)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x143d88;};for(var _0x108d8a=0x0;_0x108d8a<_0x45bed7[_0x20a8cf(0x28c)];_0x108d8a++)_0x3e589b[_0x20a8cf(0x23f)](_0x3cc807[_0x20a8cf(0x1d2)]({'timeNode':_0x16ee48===_0x20a8cf(0x244)||void 0x0},_0x45bed7[_0x108d8a],_0x4c324c(_0x1a8f86),{}));if(_0x16ee48===_0x20a8cf(0x23b)){let _0x5b6f85=Error[_0x20a8cf(0x1f3)];try{Error[_0x20a8cf(0x1f3)]=0x1/0x0,_0x3e589b[_0x20a8cf(0x23f)](_0x3cc807['serialize']({'stackNode':!0x0},new Error()['stack'],_0x4c324c(_0x1a8f86),{'strLength':0x1/0x0}));}finally{Error[_0x20a8cf(0x1f3)]=_0x5b6f85;}}return{'method':_0x20a8cf(0x20a),'version':_0x4d370b,'args':[{'ts':_0x3d6b75,'session':_0x10bbf7,'args':_0x3e589b,'id':_0x4e1ee0,'context':_0x297690}]};}catch(_0x575143){return{'method':_0x20a8cf(0x20a),'version':_0x4d370b,'args':[{'ts':_0x3d6b75,'session':_0x10bbf7,'args':[{'type':_0x20a8cf(0x248),'error':_0x575143&&_0x575143[_0x20a8cf(0x286)]}],'id':_0x4e1ee0,'context':_0x297690}]};}finally{try{if(_0x59ac25&&_0x1cb234){let _0xfd88ac=_0x32e2ac();_0x59ac25['count']++,_0x59ac25['time']+=_0x265656(_0x1cb234,_0xfd88ac),_0x59ac25['ts']=_0xfd88ac,_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x227)]++,_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x244)]+=_0x265656(_0x1cb234,_0xfd88ac),_0x59629b[_0x20a8cf(0x236)]['ts']=_0xfd88ac,(_0x59ac25['count']>0x32||_0x59ac25[_0x20a8cf(0x244)]>0x64)&&(_0x59ac25[_0x20a8cf(0x1c3)]=!0x0),(_0x59629b[_0x20a8cf(0x236)][_0x20a8cf(0x227)]>0x3e8||_0x59629b['hits'][_0x20a8cf(0x244)]>0x12c)&&(_0x59629b['hits']['reduceLimits']=!0x0);}}catch{}}}return _0x51ceaf;}function _0x583f(){var _0x59375d=['readyState','_hasMapOnItsPath','method','resolveGetters','_regExpToString','_treeNodePropertiesBeforeFullValue','_type','19678288OKWJGT','hits','_getOwnPropertySymbols','parent','_ws','location','trace','_treeNodePropertiesAfterFullValue','https://tinyurl.com/37x8b79t','','push','_cleanNode','_console_ninja_session','now','create','time','autoExpandPreviousObjects','\\x20browser','Buffer','unknown','onclose','_hasSymbolPropertyOnItsPath','webpack','[object\\x20Map]','logger\\x20websocket\\x20error','substr','cappedElements','host','function','_objectToString','symbol','_webSocketErrorDocsLink','_disposeWebsocket','noFunctions','1696560966985','_setNodeLabel','_p_name','nuxt','nodeModules','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','getOwnPropertyDescriptor','_blacklistedProperty','Set','sortProps','port','toString','_sendErrorMessage','bigint','[object\\x20Array]','valueOf','getWebSocketClass','constructor','name','_hasSetOnItsPath','dockerizedApp','remix','isExpressionToEvaluate','1809732GlGNIq','console','unshift','_isSet','totalStrLength','autoExpand','current','disabledTrace','_sortProps','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','hostname','object','set','_capIfString','getOwnPropertyNames','_isMap','send','date','getOwnPropertySymbols','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20','2848450Fefkun','parse','_WebSocket',\"c:\\\\Users\\\\clickwithclark\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.230\\\\node_modules\",'message','_setNodePermissions','_undefined','autoExpandPropertyCount','3874071BLOvWj','edge','length','...','_setNodeId','value','strLength','hasOwnProperty','Boolean','_maxConnectAttemptCount','_addFunctionsNode','bind','_allowedToConnectOnSend','_property','then','expId','stringify','node','prototype','_connectAttemptCount','_connected','join','index','depth','replace','_setNodeQueryPath','1567684DhEOiw','match','level','1.0.0','_allowedToSend','elements','reduceLimits','undefined','env','_additionalMetadata','_consoleNinjaAllowedToStart','','_propertyName','_socket','catch','capped','defineProperty','\\x20server','props','number','disabledLog','serialize','_processTreeNodeResult','includes','forEach','reload','_isArray','Symbol','_getOwnPropertyDescriptor','process','_p_','boolean','data','_Symbol','global','__es'+'Module','50425','_getOwnPropertyNames','[object\\x20Set]','_connectToHostNow','_inNextEdge','performance','_setNodeExpressionPath','onerror','indexOf','hrtime',':logPointId:','enumerable','allStrLength','url','ws://','onopen','string','_setNodeExpandableState','stackTraceLimit','POSITIVE_INFINITY','_reconnectTimeout','timeEnd','getter','_quotedRegExp','negativeZero','_dateToString','786831xcrSjQ','HTMLAllCollection','onmessage','_isNegativeZero','_attemptToReconnectShortly','test',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Skynet-Global\",\"192.168.56.1\",\"192.168.137.1\",\"192.168.0.4\"],'_addProperty','_isUndefined','root_exp','2419050edpKTT','_isPrimitiveWrapperType','null','path','rootExpression','log','concat','default','versions','_console_ninja','array','autoExpandMaxDepth','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','pathToFileURL','_addObjectProperty','Map','NEGATIVE_INFINITY','Error','call','_WebSocketClass','RegExp','warn','_isPrimitiveType','String','elapsed','expressionsToEvaluate','autoExpandLimit','NEXT_RUNTIME','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','type','[object\\x20Date]','error','nan','timeStamp','count','_p_length','_inBrowser','_HTMLAllCollection','_connecting','unref','split'];_0x583f=function(){return _0x59375d;};return _0x583f();}((_0xa81353,_0x5ab0e9,_0x209834,_0x594f27,_0x5ae1a8,_0x490337,_0x53cb17,_0x4aaca2,_0x2e9dfe,_0x5189cf)=>{var _0x49317c=_0xdae715;if(_0xa81353['_console_ninja'])return _0xa81353[_0x49317c(0x20e)];if(!J(_0xa81353,_0x4aaca2,_0x5ae1a8))return _0xa81353[_0x49317c(0x20e)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0xa81353['_console_ninja'];let _0x46ea87=W(_0xa81353),_0x4a1838=_0x46ea87[_0x49317c(0x21d)],_0x5d0b69=_0x46ea87[_0x49317c(0x226)],_0x86413d=_0x46ea87[_0x49317c(0x242)],_0x18a571={'hits':{},'ts':{}},_0x35322e=Y(_0xa81353,_0x2e9dfe,_0x18a571,_0x490337),_0x196497=_0x1998b3=>{_0x18a571['ts'][_0x1998b3]=_0x5d0b69();},_0x96e288=(_0x4100d4,_0x3665c8)=>{var _0xf9f672=_0x49317c;let _0x361f26=_0x18a571['ts'][_0x3665c8];if(delete _0x18a571['ts'][_0x3665c8],_0x361f26){let _0x503419=_0x4a1838(_0x361f26,_0x5d0b69());_0x1f3394(_0x35322e(_0xf9f672(0x244),_0x4100d4,_0x86413d(),_0x4985b5,[_0x503419],_0x3665c8));}},_0x47622f=_0x4ec5f5=>_0x1c1239=>{var _0x1fc408=_0x49317c;try{_0x196497(_0x1c1239),_0x4ec5f5(_0x1c1239);}finally{_0xa81353['console'][_0x1fc408(0x244)]=_0x4ec5f5;}},_0x56410a=_0x202504=>_0x14b0bd=>{var _0x277a15=_0x49317c;try{let [_0x581e4b,_0x4b23d4]=_0x14b0bd['split'](_0x277a15(0x1eb));_0x96e288(_0x4b23d4,_0x581e4b),_0x202504(_0x581e4b);}finally{_0xa81353[_0x277a15(0x26f)][_0x277a15(0x1f6)]=_0x202504;}};_0xa81353[_0x49317c(0x20e)]={'consoleLog':(_0xc9db51,_0x439eb1)=>{var _0x5c4376=_0x49317c;_0xa81353[_0x5c4376(0x26f)]['log']['name']!==_0x5c4376(0x1d1)&&_0x1f3394(_0x35322e(_0x5c4376(0x20a),_0xc9db51,_0x86413d(),_0x4985b5,_0x439eb1));},'consoleTrace':(_0x1c147c,_0x1321ed)=>{var _0x15a3a3=_0x49317c;_0xa81353[_0x15a3a3(0x26f)]['log'][_0x15a3a3(0x269)]!==_0x15a3a3(0x275)&&_0x1f3394(_0x35322e(_0x15a3a3(0x23b),_0x1c147c,_0x86413d(),_0x4985b5,_0x1321ed));},'consoleTime':()=>{var _0x4d107c=_0x49317c;_0xa81353['console'][_0x4d107c(0x244)]=_0x47622f(_0xa81353['console'][_0x4d107c(0x244)]);},'consoleTimeEnd':()=>{var _0x470def=_0x49317c;_0xa81353[_0x470def(0x26f)][_0x470def(0x1f6)]=_0x56410a(_0xa81353[_0x470def(0x26f)][_0x470def(0x1f6)]);},'autoLog':(_0x2948e8,_0x597c18)=>{_0x1f3394(_0x35322e('log',_0x597c18,_0x86413d(),_0x4985b5,[_0x2948e8]));},'autoLogMany':(_0x545f30,_0x193c53)=>{var _0x570147=_0x49317c;_0x1f3394(_0x35322e(_0x570147(0x20a),_0x545f30,_0x86413d(),_0x4985b5,_0x193c53));},'autoTrace':(_0x2bd0f7,_0x141efd)=>{var _0x1d15d3=_0x49317c;_0x1f3394(_0x35322e(_0x1d15d3(0x23b),_0x141efd,_0x86413d(),_0x4985b5,[_0x2bd0f7]));},'autoTraceMany':(_0x3e6321,_0x3a1692)=>{_0x1f3394(_0x35322e('trace',_0x3e6321,_0x86413d(),_0x4985b5,_0x3a1692));},'autoTime':(_0x2ebafa,_0x306aac,_0x1a7f37)=>{_0x196497(_0x1a7f37);},'autoTimeEnd':(_0x49cff9,_0x2fb262,_0x15256e)=>{_0x96e288(_0x2fb262,_0x15256e);},'coverage':_0x23ca51=>{_0x1f3394({'method':'coverage','version':_0x490337,'args':[{'id':_0x23ca51}]});}};let _0x1f3394=b(_0xa81353,_0x5ab0e9,_0x209834,_0x594f27,_0x5ae1a8,_0x5189cf),_0x4985b5=_0xa81353['_console_ninja_session'];return _0xa81353['_console_ninja'];})(globalThis,'127.0.0.1',_0xdae715(0x1e1),_0xdae715(0x285),_0xdae715(0x24b),_0xdae715(0x2a7),_0xdae715(0x257),_0xdae715(0x201),_0xdae715(0x1c8),_0xdae715(0x23e));")}catch(e){}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",Q_):Q_(),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./service-worker.js").then((e=>console.log(...function(e,...t){try{X_().consoleLog(e,t)}catch(e){}return t}("4016500604_0",`Service Worker Registered!😁 \n ${e.scope}`)))).catch((e=>console.error(`service worker error:😭${e}`)))}))})()})();