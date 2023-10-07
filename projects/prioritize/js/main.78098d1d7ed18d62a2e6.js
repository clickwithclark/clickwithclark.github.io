(()=>{"use strict";var e={831:(e,t,n)=>{e.exports=n.p+"img/cwc-shadesa05dc6e0694f089c83c8.png"},165:(e,t,n)=>{e.exports=n.p+"img/oopsfe704e0dccb8e85da8a9.png"}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var s=t[i]={exports:{}};return e[i](s,s.exports,n),s.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var r=i.length-1;r>-1&&!e;)e=i[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"})(),(()=>{
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
const e=!1,t=!1,i="${JSCORE_VERSION}",r=function(e,t){if(!e)throw s(t)},s=function(e){return new Error("Firebase Database ("+i+") INTERNAL ASSERT FAILED: "+e)},o=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},a={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,o=s?e[t+1]:0,a=t+2<e.length,c=a?e[t+2]:0,_=r>>2,l=(3&r)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;a||(h=64,s||(d=64)),i.push(n[_],n[l],n[d],n[h])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(o(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==o||null==a)throw new c;const _=r<<2|s>>4;if(i.push(_),64!==o){const e=s<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
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
 */class c extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _=function(e){const t=o(e);return a.encodeByteArray(t,!0)},l=function(e){return _(e).replace(/\./g,"")},d=function(e){try{return a.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function h(e){return x(void 0,e)}function x(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=x(e[n],t[n]));return e}
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
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,f=()=>{try{return u()||(()=>{if("undefined"==typeof process||void 0===process.env)return;const e=process.env.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&d(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},p=e=>{var t,n;return null===(n=null===(t=f())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},b=e=>{const t=p(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},m=()=>{var e;return null===(e=f())||void 0===e?void 0:e.config},g=e=>{var t;return null===(t=f())||void 0===t?void 0:t[`_${e}`]};
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
class y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function v(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(v())}function I(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function T(){return!0===e||!0===t}class C extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(k,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`;return new C(i,o,n)}}const k=/\{\$([^}]+)}/g;
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
 */const P=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=S(d(s[0])||""),n=S(d(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:r}};
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
function R(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function O(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function A(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function L(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function D(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(M(n)&&M(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function M(e){return null!==e&&"object"==typeof e}
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
function F(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function U(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class q{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],_=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):e<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const t=(s<<5|s>>>27)+i+_+r+n[e]&4294967295;_=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=t}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+_&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;for(;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}class W{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=H),void 0===i.error&&(i.error=H),void 0===i.complete&&(i.complete=H);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(){}
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
const B=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
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
 */class K{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new y;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:G})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=G){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=G){return this.instances.has(e)}getOptions(e=G){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===G?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=G){return this.component?this.component.multipleInstances?e:G:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Y{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new K(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
const J=[];var Q;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(Q||(Q={}));const X={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},Z=Q.INFO,ee={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},te=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ee[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class ne{constructor(e){this.name=e,this._logLevel=Z,this._logHandler=te,this._userLogHandler=null,J.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?X[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const ie=(e,t)=>t.some((t=>e instanceof t));let re,se;const oe=new WeakMap,ae=new WeakMap,ce=new WeakMap,_e=new WeakMap,le=new WeakMap;let de={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return ae.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ce.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function he(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(se||(se=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(fe(this),t),ue(oe.get(this))}:function(...t){return ue(e.apply(fe(this),t))}:function(t,...n){const i=e.call(fe(this),t,...n);return ce.set(i,t.sort?t.sort():[t]),ue(i)}}function xe(e){return"function"==typeof e?he(e):(e instanceof IDBTransaction&&function(e){if(ae.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ae.set(e,t)}(e),ie(e,re||(re=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,de):e)}function ue(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ue(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&oe.set(t,e)})).catch((()=>{})),le.set(t,e),t}(e);if(_e.has(e))return _e.get(e);const t=xe(e);return t!==e&&(_e.set(e,t),le.set(t,e)),t}const fe=e=>le.get(e);const pe=["get","getKey","getAll","getAllKeys","count"],be=["put","add","delete","clear"],me=new Map;function ge(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(me.get(t))return me.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=be.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!pe.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return me.set(t,s),s}de=(e=>({...e,get:(t,n,i)=>ge(t,n)||e.get(t,n,i),has:(t,n)=>!!ge(t,n)||e.has(t,n)}))(de);
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
class ye{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const ve="@firebase/app",we="0.9.13",Ie=new ne("@firebase/app"),Te="[DEFAULT]",Ce={[ve]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ee=new Map,ke=new Map;function Se(e,t){try{e.container.addComponent(t)}catch(n){Ie.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ne(e){const t=e.name;if(ke.has(t))return Ie.debug(`There were multiple attempts to register component ${t}.`),!1;ke.set(t,e);for(const t of Ee.values())Se(t,e);return!0}function Pe(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
const Re=new E("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
 */const Ae="9.23.0";function Le(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const i=Object.assign({name:Te,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!=typeof r||!r)throw Re.create("bad-app-name",{appName:String(r)});if(n||(n=m()),!n)throw Re.create("no-options");const s=Ee.get(r);if(s){if(D(n,s.options)&&D(i,s.config))return s;throw Re.create("duplicate-app",{appName:r})}const o=new Y(r);for(const e of ke.values())o.addComponent(e);const a=new Oe(n,i,o);return Ee.set(r,a),a}function De(e=Te){const t=Ee.get(e);if(!t&&e===Te&&m())return Le();if(!t)throw Re.create("no-app",{appName:e});return t}function Me(e,t,n){var i;let r=null!==(i=Ce[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ie.warn(e.join(" "))}Ne(new $(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
const Fe="firebase-heartbeat-database",Ue=1,je="firebase-heartbeat-store";let qe=null;function We(){return qe||(qe=function(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=ue(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(ue(o.result),e.oldVersion,e.newVersion,ue(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}(Fe,Ue,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(je)}}).catch((e=>{throw Re.create("idb-open",{originalErrorMessage:e.message})}))),qe}async function He(e,t){try{const n=(await We()).transaction(je,"readwrite"),i=n.objectStore(je);await i.put(t,Ve(e)),await n.done}catch(e){if(e instanceof C)Ie.warn(e.message);else{const t=Re.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});Ie.warn(t.message)}}}function Ve(e){return`${e.name}!${e.options.appId}`}
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
 */class Be{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new $e(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ze();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ze(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Ge(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Ge(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=l(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ze(){return(new Date).toISOString().substring(0,10)}class $e{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=await We();return await t.transaction(je).objectStore(je).get(Ve(e))}catch(e){if(e instanceof C)Ie.warn(e.message);else{const t=Re.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});Ie.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return He(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return He(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Ge(e){return l(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var Ke;Ke="",Ne(new $("platform-logger",(e=>new ye(e)),"PRIVATE")),Ne(new $("heartbeat",(e=>new Be(e)),"PRIVATE")),Me(ve,we,Ke),Me(ve,we,"esm2017"),Me("fire-js","");
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
 */const nt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new et(t)}}catch(e){}return new tt},it=nt("localStorage"),rt=nt("sessionStorage"),st=new ne("@firebase/database"),ot=function(){let e=1;return function(){return e++}}(),at=function(e){const t=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,r(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new q;n.update(t);const i=n.digest();return a.encodeByteArray(i)},ct=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=ct.apply(null,i):t+="object"==typeof i?N(i):i,t+=" "}return t};let _t=null,lt=!0;const dt=function(e,t){r(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(st.logLevel=Q.VERBOSE,_t=st.log.bind(st),t&&rt.set("logging_enabled",!0)):"function"==typeof e?_t=e:(_t=null,rt.remove("logging_enabled"))},ht=function(...e){if(!0===lt&&(lt=!1,null===_t&&!0===rt.get("logging_enabled")&&dt(!0)),_t){const t=ct.apply(null,e);_t(t)}},xt=function(e){return function(...t){ht(e,...t)}},ut=function(...e){const t="FIREBASE INTERNAL ERROR: "+ct(...e);st.error(t)},ft=function(...e){const t=`FIREBASE FATAL ERROR: ${ct(...e)}`;throw st.error(t),new Error(t)},pt=function(...e){const t="FIREBASE WARNING: "+ct(...e);st.warn(t)},bt=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},mt="[MIN_NAME]",gt="[MAX_NAME]",yt=function(e,t){if(e===t)return 0;if(e===mt||t===gt)return-1;if(t===mt||e===gt)return 1;{const n=St(e),i=St(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},vt=function(e,t){return e===t?0:e<t?-1:1},wt=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+N(t))},It=function(e){if("object"!=typeof e||null===e)return N(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=N(t[i]),n+=":",n+=It(e[t[i]]);return n+="}",n},Tt=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Ct(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Et=function(e){r(!bt(e),"Invalid JSON number");const t=1023;let n,i,s,o,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(o=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=o+t,s=Math.round(e*Math.pow(2,52-o)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const c=[];for(a=52;a;a-=1)c.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(n?1:0),c.reverse();const _=c.join("");let l="";for(a=0;a<64;a+=8){let e=parseInt(_.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),l+=e}return l.toLowerCase()};const kt=new RegExp("^-?(0*)\\d{1,10}$"),St=function(e){if(kt.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Nt=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw pt("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Pt=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
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
 */class Ot{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(ht("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',pt(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";
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
const Lt="5",Dt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Mt="ac",Ft="websocket",Ut="long_polling";
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
class jt{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=it.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&it.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function qt(e,t,n){let i;if(r("string"==typeof t,"typeof type must == string"),r("object"==typeof n,"typeof params must == object"),t===Ft)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Ut)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Ct(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
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
 */class Wt{constructor(){this.counters_={}}incrementCounter(e,t=1){R(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return h(this.counters_)}}
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
 */const $t="start";class Gt{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=xt(e),this.stats_=Bt(t),this.urlFn=e=>(this.appCheckToken&&(e[Mt]=this.appCheckToken),qt(t,Ut,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new zt(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(T()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kt(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===$t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[$t]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=Lt,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[Mt]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Dt.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gt.forceAllow_=!0}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){return!T()&&(!!Gt.forceAllow_||!(Gt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=_(t),i=Tt(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(T())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=N(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Kt{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,T())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=ot(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Kt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){ht("frame writing exception"),e.stack&&ht(e.stack),ht(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||ht("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){T()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{ht("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
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
 */let Yt=null;"undefined"!=typeof MozWebSocket?Yt=MozWebSocket:"undefined"!=typeof WebSocket&&(Yt=WebSocket);class Jt{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=xt(this.connId),this.stats_=Bt(t),this.connURL=Jt.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s.v=Lt,!T()&&"undefined"!=typeof location&&location.hostname&&Dt.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s[Mt]=i),r&&(s.p=r),qt(e,Ft,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,it.set("previous_websocket_failure",!0);try{let e;if(T()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${Lt}/${Ze}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n=process.env,i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new Yt(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Jt.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Yt&&!Jt.forceDisallow_}static previouslyFailed(){return it.isInMemoryStorage||!0===it.get("previous_websocket_failure")}markConnectionHealthy(){it.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=S(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(r(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=N(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Tt(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Jt.responsesRequiredToBeHealthy=2,Jt.healthyTimeout=3e4;
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
class Qt{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gt,Jt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Jt&&Jt.isAvailable();let n=t&&!Jt.previouslyFailed();if(e.webSocketOnly&&(t||pt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Jt];else{const e=this.transports_=[];for(const t of Qt.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);Qt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qt.globalTransportInitialized_=!1;class Xt{constructor(e,t,n,i,r,s,o,a,c,_){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=_,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=xt("c:"+this.id+":"),this.transportManager_=new Qt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pt((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=wt("t",e),n=wt("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=wt("t",e),n=wt("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=wt("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ut("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ut("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Lt!==n&&pt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Pt((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pt((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(it.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class Zt{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class en{constructor(e){this.allowedEvents_=e,this.listeners_={},r(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){r(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class tn extends en{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||w()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new tn}getInitialEvent(e){return r("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */const nn=32,rn=768;class sn{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function on(){return new sn("")}function an(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function cn(e){return e.pieces_.length-e.pieceNum_}function _n(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new sn(e.pieces_,t)}function ln(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function dn(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function hn(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new sn(t,0)}function xn(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof sn)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new sn(n,0)}function un(e){return e.pieceNum_>=e.pieces_.length}function fn(e,t){const n=an(e),i=an(t);if(null===n)return t;if(n===i)return fn(_n(e),_n(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function pn(e,t){if(cn(e)!==cn(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function bn(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(cn(e)>cn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class mn{constructor(e,t){this.errorPrefix_=t,this.parts_=dn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=B(this.parts_[e]);gn(this)}}function gn(e){if(e.byteLength_>rn)throw new Error(e.errorPrefix_+"has a key path longer than "+rn+" bytes ("+e.byteLength_+").");if(e.parts_.length>nn)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+nn+") or object contains a cycle "+yn(e))}function yn(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class vn extends en{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new vn}getInitialEvent(e){return r("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */const wn=1e3;class In extends Zt{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=In.nextPersistentConnectionId_++,this.log_=xt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=wn,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!T())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");vn.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&tn.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(N(s)),r(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new y,n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),r(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;In.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&R(e,"w")){const n=O(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();pt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||function(e){const t=P(e).claims;return"object"==typeof t&&!0===t.admin}(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){const t=P(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),r(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+N(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ut("Unrecognized action received from server: "+N(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){r(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=wn),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+In.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},_=function(e){r(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:c,sendRequest:_};const l=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[r,c]=await Promise.all([this.authTokenProvider_.getToken(l),this.appCheckTokenProvider_.getToken(l)]);o?ht("getToken() completed but was canceled"):(ht("getToken() completed. Creating connection."),this.authToken_=r&&r.accessToken,this.appCheckToken_=c&&c.token,a=new Xt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{pt(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&pt(e),c())}}}interrupt(e){ht("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ht("Resuming connection for reason: "+e),delete this.interruptReasons_[e],A(this.interruptReasons_)&&(this.reconnectDelay_=wn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>It(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new sn(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){ht("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ht("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";T()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Ze.replace(/\./g,"-")]=1,w()?e["framework.cordova"]=1:I()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=tn.getInstance().currentlyOnline();return A(this.interruptReasons_)&&e}}In.nextPersistentConnectionId_=0,In.nextConnectionId_=0;
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
class Tn{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Tn(e,t)}}
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
 */class Cn{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Tn(mt,e),i=new Tn(mt,t);return 0!==this.compare(n,i)}minPost(){return Tn.MIN}}
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
 */let En;class kn extends Cn{static get __EMPTY_NODE(){return En}static set __EMPTY_NODE(e){En=e}compare(e,t){return yt(e.name,t.name)}isDefinedOn(e){throw s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Tn.MIN}maxPost(){return new Tn(gt,En)}makePost(e,t){return r("string"==typeof e,"KeyIndex indexValue must always be a string."),new Tn(e,En)}toString(){return".key"}}const Sn=new kn;
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
 */class Nn{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Pn{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Pn.RED,this.left=null!=i?i:Rn.EMPTY_NODE,this.right=null!=r?r:Rn.EMPTY_NODE}copy(e,t,n,i,r){return new Pn(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Rn.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Rn.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Pn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Pn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Pn.RED=!0,Pn.BLACK=!1;class Rn{constructor(e,t=Rn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Rn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Pn.BLACK,null,null))}remove(e){return new Rn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Pn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Nn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Nn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Nn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Nn(this.root_,null,this.comparator_,!0,e)}}
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
function On(e,t){return yt(e.name,t.name)}function An(e,t){return yt(e,t)}
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
 */let Ln;Rn.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Pn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Dn=function(e){return"number"==typeof e?"number:"+Et(e):"string:"+e},Mn=function(e){if(e.isLeafNode()){const t=e.val();r("string"==typeof t||"number"==typeof t||"object"==typeof t&&R(t,".sv"),"Priority must be a string or number.")}else r(e===Ln||e.isEmpty(),"priority of unexpected type.");r(e===Ln||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Fn,Un,jn;class qn{constructor(e,t=qn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,r(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Mn(this.priorityNode_)}static set __childrenNodeConstructor(e){Fn=e}static get __childrenNodeConstructor(){return Fn}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qn(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:qn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return un(e)?this:".priority"===an(e)?this.priorityNode_:qn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:qn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=an(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(r(".priority"!==n||1===cn(e),".priority must be the last token in a path"),this.updateImmediateChild(n,qn.__childrenNodeConstructor.EMPTY_NODE.updateChild(_n(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dn(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Et(this.value_):this.value_,this.lazyHash_=at(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qn.__childrenNodeConstructor?-1:(r(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=qn.VALUE_TYPE_ORDER.indexOf(t),s=qn.VALUE_TYPE_ORDER.indexOf(n);return r(i>=0,"Unknown leaf type: "+t),r(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}qn.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Wn=new class extends Cn{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?yt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Tn.MIN}maxPost(){return new Tn(gt,new qn("[PRIORITY-POST]",jn))}makePost(e,t){const n=Un(e);return new Tn(t,new qn("[PRIORITY-POST]",n))}toString(){return".priority"}},Hn=Math.log(2);
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
 */class Vn{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Hn,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Bn=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Pn(a,o.node,Pn.BLACK,null,null);{const c=parseInt(s/2,10)+t,_=r(t,c),l=r(c+1,i);return o=e[c],a=n?n(o):o,new Pn(a,o.node,Pn.BLACK,_,l)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const _=r(s+1,a),l=e[s],d=n?n(l):l;c(new Pn(d,l.node,i,null,_))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Pn.BLACK):(a(i,Pn.BLACK),a(i,Pn.RED))}return s}(new Vn(e.length));return new Rn(i||t,s)};
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
 */let zn;const $n={};class Gn{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return r($n&&Wn,"ChildrenNode.ts has not been loaded"),zn=zn||new Gn({".priority":$n},{".priority":Wn}),zn}get(e){const t=O(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Rn?t:null}hasIndex(e){return R(this.indexSet_,e.toString())}addIndex(e,t){r(e!==Sn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Tn.Wrap);let o,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();o=i?Bn(n,e.getCompare()):$n;const c=e.toString(),_=Object.assign({},this.indexSet_);_[c]=e;const l=Object.assign({},this.indexes_);return l[c]=o,new Gn(l,_)}addToIndexes(e,t){const n=L(this.indexes_,((n,i)=>{const s=O(this.indexSet_,i);if(r(s,"Missing index implementation for "+i),n===$n){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Tn.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),Bn(n,s.getCompare())}return $n}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Tn(e.name,i))),r.insert(e,e.node)}}));return new Gn(n,this.indexSet_)}removeFromIndexes(e,t){const n=L(this.indexes_,(n=>{if(n===$n)return n;{const i=t.get(e.name);return i?n.remove(new Tn(e.name,i)):n}}));return new Gn(n,this.indexSet_)}}
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
 */let Kn;class Yn{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Mn(this.priorityNode_),this.children_.isEmpty()&&r(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Kn||(Kn=new Yn(new Rn(An),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Kn}updatePriority(e){return this.children_.isEmpty()?this:new Yn(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Kn:t}}getChild(e){const t=an(e);return null===t?this:this.getImmediateChild(t).getChild(_n(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(r(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Tn(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?Kn:this.priorityNode_;return new Yn(i,s,r)}}updateChild(e,t){const n=an(e);if(null===n)return t;{r(".priority"!==an(e)||1===cn(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_n(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(Wn,((s,o)=>{t[s]=o.val(e),n++,r&&Yn.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dn(this.getPriority().val())+":"),this.forEachChild(Wn,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":at(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Tn(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Tn(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Tn(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Tn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Tn.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Jn?-1:0}withIndex(e){if(e===Sn||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Yn(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Wn),n=t.getIterator(Wn);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Sn?null:this.indexMap_.get(e.toString())}}Yn.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Jn=new class extends Yn{constructor(){super(new Rn(An),Yn.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Yn.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Tn,{MIN:{value:new Tn(mt,Yn.EMPTY_NODE)},MAX:{value:new Tn(gt,Jn)}}),kn.__EMPTY_NODE=Yn.EMPTY_NODE,qn.__childrenNodeConstructor=Yn,Ln=Jn,function(e){jn=e}(Jn);
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
const Qn=!0;function Xn(e,t=null){if(null===e)return Yn.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),r(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new qn(e,Xn(t))}if(e instanceof Array||!Qn){let n=Yn.EMPTY_NODE;return Ct(e,((t,i)=>{if(R(e,t)&&"."!==t.substring(0,1)){const e=Xn(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Xn(t))}{const n=[];let i=!1;if(Ct(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Xn(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Tn(e,r)))}})),0===n.length)return Yn.EMPTY_NODE;const r=Bn(n,On,(e=>e.name),An);if(i){const e=Bn(n,Wn.getCompare());return new Yn(r,Xn(t),new Gn({".priority":e},{".priority":Wn}))}return new Yn(r,Xn(t),Gn.Default)}}!function(e){Un=e}(Xn);
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
class Zn extends Cn{constructor(e){super(),this.indexPath_=e,r(!un(e)&&".priority"!==an(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?yt(e.name,t.name):r}makePost(e,t){const n=Xn(e),i=Yn.EMPTY_NODE.updateChild(this.indexPath_,n);return new Tn(t,i)}maxPost(){const e=Yn.EMPTY_NODE.updateChild(this.indexPath_,Jn);return new Tn(gt,e)}toString(){return dn(this.indexPath_,0).join("/")}}
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
 */const ei=new class extends Cn{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?yt(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Tn.MIN}maxPost(){return Tn.MAX}makePost(e,t){const n=Xn(e);return new Tn(t,n)}toString(){return".value"}};
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
 */function ti(e){return{type:"value",snapshotNode:e}}function ni(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ii(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ri(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class si{constructor(e){this.index_=e}updateChild(e,t,n,i,s,o){r(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=o&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(ii(t,a)):r(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ni(t,n)):o.trackChildChange(ri(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Wn,((e,i)=>{t.hasChild(e)||n.trackChildChange(ii(e,i))})),t.isLeafNode()||t.forEachChild(Wn,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(ri(t,i,r))}else n.trackChildChange(ni(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Yn.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class oi{constructor(e){this.indexedFilter_=new si(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oi.getStartPost_(e),this.endPost_=oi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new Tn(t,n))||(n=Yn.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Yn.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Yn.EMPTY_NODE);const r=this;return t.forEachChild(Wn,((e,t)=>{r.matches(new Tn(e,t))||(i=i.updateImmediateChild(e,Yn.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class ai{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new oi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Tn(t,n))||(n=Yn.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=Yn.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=Yn.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(Yn.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,Yn.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let o;if(this.reverse_){const e=this.index_.getCompare();o=(t,n)=>e(n,t)}else o=this.index_.getCompare();const a=e;r(a.numChildren()===this.limit_,"");const c=new Tn(t,n),_=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),l=this.rangedFilter_.matches(c);if(a.hasChild(t)){const e=a.getImmediateChild(t);let r=i.getChildAfterChild(this.index_,_,this.reverse_);for(;null!=r&&(r.name===t||a.hasChild(r.name));)r=i.getChildAfterChild(this.index_,r,this.reverse_);const d=null==r?1:o(r,c);if(l&&!n.isEmpty()&&d>=0)return null!=s&&s.trackChildChange(ri(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(ii(t,e));const n=a.updateImmediateChild(t,Yn.EMPTY_NODE);return null!=r&&this.rangedFilter_.matches(r)?(null!=s&&s.trackChildChange(ni(r.name,r.node)),n.updateImmediateChild(r.name,r.node)):n}}return n.isEmpty()?e:l&&o(_,c)>=0?(null!=s&&(s.trackChildChange(ii(_.name,_.node)),s.trackChildChange(ni(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(_.name,Yn.EMPTY_NODE)):e}}
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
 */class ci{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Wn}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return r(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return r(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:mt}hasEnd(){return this.endSet_}getIndexEndValue(){return r(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return r(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:gt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return r(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Wn}copy(){const e=new ci;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function _i(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Wn?n="$priority":e.index_===ei?n="$value":e.index_===Sn?n="$key":(r(e.index_ instanceof Zn,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=N(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=N(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+N(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=N(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+N(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function li(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Wn&&(t.i=e.index_.toString()),t}
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
 */class di extends Zt{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=xt("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(r(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=di.getListenId_(e,n),o={};this.listens_[s]=o;const a=_i(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),O(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=di.getListenId_(e,t);delete this.listens_[n]}get(e){const t=_i(e._queryParams),n=e._path.toString(),i=new y;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+F(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=S(o.responseText)}catch(e){pt("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&pt("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class hi{constructor(){this.rootNode_=Yn.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function xi(){return{value:null,children:new Map}}function ui(e,t,n){if(un(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=an(t);e.children.has(i)||e.children.set(i,xi());ui(e.children.get(i),t=_n(t),n)}}function fi(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,i)=>{fi(i,new sn(t.toString()+"/"+e),n)}))}class pi{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Ct(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class bi{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new pi(e);const n=1e4+2e4*Math.random();Pt(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Ct(e,((e,i)=>{i>0&&R(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Pt(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var mi;function gi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(mi||(mi={}));class yi{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=mi.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(un(this.path)){if(null!=this.affectedTree.value)return r(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new sn(e));return new yi(on(),t,this.revert)}}return r(an(this.path)===e,"operationForChild called for unrelated child."),new yi(_n(this.path),this.affectedTree,this.revert)}}
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
 */class vi{constructor(e,t){this.source=e,this.path=t,this.type=mi.LISTEN_COMPLETE}operationForChild(e){return un(this.path)?new vi(this.source,on()):new vi(this.source,_n(this.path))}}
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
 */class wi{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=mi.OVERWRITE}operationForChild(e){return un(this.path)?new wi(this.source,on(),this.snap.getImmediateChild(e)):new wi(this.source,_n(this.path),this.snap)}}
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
 */class Ii{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=mi.MERGE}operationForChild(e){if(un(this.path)){const t=this.children.subtree(new sn(e));return t.isEmpty()?null:t.value?new wi(this.source,on(),t.value):new Ii(this.source,on(),t)}return r(an(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ii(this.source,_n(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Ti{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(un(e))return this.isFullyInitialized()&&!this.filtered_;const t=an(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class Ci{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ei(e,t,n,i,r,o){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw s("Should only compare child_ events.");const i=new Tn(t.childName,t.snapshotNode),r=new Tn(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
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
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,o);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function ki(e,t){return{eventCache:e,serverCache:t}}function Si(e,t,n,i){return ki(new Ti(t,n,i),e.serverCache)}function Ni(e,t,n,i){return ki(e.eventCache,new Ti(t,n,i))}function Pi(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Ri(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Oi;class Ai{constructor(e,t=(()=>(Oi||(Oi=new Rn(vt)),Oi))()){this.value=e,this.children=t}static fromObject(e){let t=new Ai(null);return Ct(e,((e,n)=>{t=t.set(new sn(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:on(),value:this.value};if(un(e))return null;{const n=an(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(_n(e),t);if(null!=r){return{path:xn(new sn(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(un(e))return this;{const t=an(e),n=this.children.get(t);return null!==n?n.subtree(_n(e)):new Ai(null)}}set(e,t){if(un(e))return new Ai(t,this.children);{const n=an(e),i=(this.children.get(n)||new Ai(null)).set(_n(e),t),r=this.children.insert(n,i);return new Ai(this.value,r)}}remove(e){if(un(e))return this.children.isEmpty()?new Ai(null):new Ai(null,this.children);{const t=an(e),n=this.children.get(t);if(n){const i=n.remove(_n(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new Ai(null):new Ai(this.value,r)}return this}}get(e){if(un(e))return this.value;{const t=an(e),n=this.children.get(t);return n?n.get(_n(e)):null}}setTree(e,t){if(un(e))return t;{const n=an(e),i=(this.children.get(n)||new Ai(null)).setTree(_n(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Ai(this.value,r)}}fold(e){return this.fold_(on(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(xn(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,on(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(un(e))return null;{const i=an(e),r=this.children.get(i);return r?r.findOnPath_(_n(e),xn(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,on(),t)}foreachOnPath_(e,t,n){if(un(e))return this;{this.value&&n(t,this.value);const i=an(e),r=this.children.get(i);return r?r.foreachOnPath_(_n(e),xn(t,i),n):new Ai(null)}}foreach(e){this.foreach_(on(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(xn(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Li{constructor(e){this.writeTree_=e}static empty(){return new Li(new Ai(null))}}function Di(e,t,n){if(un(t))return new Li(new Ai(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=fn(r,t);return s=s.updateChild(o,n),new Li(e.writeTree_.set(r,s))}{const i=new Ai(n),r=e.writeTree_.setTree(t,i);return new Li(r)}}}function Mi(e,t,n){let i=e;return Ct(n,((e,n)=>{i=Di(i,xn(t,e),n)})),i}function Fi(e,t){if(un(t))return Li.empty();{const n=e.writeTree_.setTree(t,new Ai(null));return new Li(n)}}function Ui(e,t){return null!=ji(e,t)}function ji(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(fn(n.path,t)):null}function qi(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Wn,((e,n)=>{t.push(new Tn(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Tn(e,n.value))})),t}function Wi(e,t){if(un(t))return e;{const n=ji(e,t);return new Li(null!=n?new Ai(n):e.writeTree_.subtree(t))}}function Hi(e){return e.writeTree_.isEmpty()}function Vi(e,t){return Bi(on(),e.writeTree_,t)}function Bi(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(r(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Bi(xn(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(xn(e,".priority"),i)),n}}
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
 */function zi(e,t){return rr(t,e)}function $i(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));r(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,o=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&Gi(t,i.path)?s=!1:bn(i.path,t.path)&&(o=!0)),a--}if(s){if(o)return function(e){e.visibleWrites=Yi(e.allWrites,Ki,on()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Fi(e.visibleWrites,i.path);else{Ct(i.children,(t=>{e.visibleWrites=Fi(e.visibleWrites,xn(i.path,t))}))}return!0}return!1}function Gi(e,t){if(e.snap)return bn(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&bn(xn(e.path,n),t))return!0;return!1}function Ki(e){return e.visible}function Yi(e,t,n){let i=Li.empty();for(let r=0;r<e.length;++r){const o=e[r];if(t(o)){const e=o.path;let t;if(o.snap)bn(n,e)?(t=fn(n,e),i=Di(i,t,o.snap)):bn(e,n)&&(t=fn(e,n),i=Di(i,on(),o.snap.getChild(t)));else{if(!o.children)throw s("WriteRecord should have .snap or .children");if(bn(n,e))t=fn(n,e),i=Mi(i,t,o.children);else if(bn(e,n))if(t=fn(e,n),un(t))i=Mi(i,on(),o.children);else{const e=O(o.children,an(t));if(e){const n=e.getChild(_n(t));i=Di(i,on(),n)}}}}}return i}function Ji(e,t,n,i,r){if(i||r){const s=Wi(e.visibleWrites,t);if(!r&&Hi(s))return n;if(r||null!=n||Ui(s,on())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(bn(e.path,t)||bn(t,e.path))};return Vi(Yi(e.allWrites,s,t),n||Yn.EMPTY_NODE)}return null}{const i=ji(e.visibleWrites,t);if(null!=i)return i;{const i=Wi(e.visibleWrites,t);if(Hi(i))return n;if(null!=n||Ui(i,on())){return Vi(i,n||Yn.EMPTY_NODE)}return null}}}function Qi(e,t,n,i){return Ji(e.writeTree,e.treePath,t,n,i)}function Xi(e,t){return function(e,t,n){let i=Yn.EMPTY_NODE;const r=ji(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(Wn,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=Wi(e.visibleWrites,t);return n.forEachChild(Wn,((e,t)=>{const n=Vi(Wi(r,new sn(e)),t);i=i.updateImmediateChild(e,n)})),qi(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return qi(Wi(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function Zi(e,t,n,i){return function(e,t,n,i,s){r(i||s,"Either existingEventSnap or existingServerSnap must exist");const o=xn(t,n);if(Ui(e.visibleWrites,o))return null;{const t=Wi(e.visibleWrites,o);return Hi(t)?s.getChild(n):Vi(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function er(e,t){return function(e,t){return ji(e.visibleWrites,t)}(e.writeTree,xn(e.treePath,t))}function tr(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const c=Wi(e.visibleWrites,t),_=ji(c,on());if(null!=_)a=_;else{if(null==n)return[];a=Vi(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();for(;c&&e.length<r;)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function nr(e,t,n){return function(e,t,n,i){const r=xn(t,n),s=ji(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return Vi(Wi(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ir(e,t){return rr(xn(e.treePath,t),e.writeTree)}function rr(e,t){return{treePath:e,writeTree:t}}
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
 */class sr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;r("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),r(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,ri(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,ii(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,ni(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw s("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,ri(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const or=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class ar{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ti(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ri(this.viewCache_),r=tr(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
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
 */function cr(e,t,n,i,o){const a=new sr;let c,_;if(n.type===mi.OVERWRITE){const s=n;s.source.fromUser?c=dr(e,t,s.path,s.snap,i,o,a):(r(s.source.fromServer,"Unknown source."),_=s.source.tagged||t.serverCache.isFiltered()&&!un(s.path),c=lr(e,t,s.path,s.snap,i,o,_,a))}else if(n.type===mi.MERGE){const s=n;s.source.fromUser?c=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const _=xn(n,i);hr(t,an(_))&&(a=dr(e,a,_,c,r,s,o))})),i.foreach(((i,c)=>{const _=xn(n,i);hr(t,an(_))||(a=dr(e,a,_,c,r,s,o))})),a}(e,t,s.path,s.children,i,o,a):(r(s.source.fromServer,"Unknown source."),_=s.source.tagged||t.serverCache.isFiltered(),c=ur(e,t,s.path,s.children,i,o,_,a))}else if(n.type===mi.ACK_USER_WRITE){const s=n;c=s.revert?function(e,t,n,i,s,o){let a;if(null!=er(i,n))return t;{const c=new ar(i,t,s),_=t.eventCache.getNode();let l;if(un(n)||".priority"===an(n)){let n;if(t.serverCache.isFullyInitialized())n=Qi(i,Ri(t));else{const e=t.serverCache.getNode();r(e instanceof Yn,"serverChildren would be complete if leaf node"),n=Xi(i,e)}l=e.filter.updateFullNode(_,n,o)}else{const r=an(n);let s=nr(i,r,t.serverCache);null==s&&t.serverCache.isCompleteForChild(r)&&(s=_.getImmediateChild(r)),l=null!=s?e.filter.updateChild(_,r,s,_n(n),c,o):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(_,r,Yn.EMPTY_NODE,_n(n),c,o):_,l.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=Qi(i,Ri(t)),a.isLeafNode()&&(l=e.filter.updateFullNode(l,a,o)))}return a=t.serverCache.isFullyInitialized()||null!=er(i,on()),Si(t,l,a,e.filter.filtersNodes())}}
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
 */(e,t,s.path,i,o,a):function(e,t,n,i,r,s,o){if(null!=er(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(un(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return lr(e,t,n,c.getNode().getChild(n),r,s,a,o);if(un(n)){let i=new Ai(null);return c.getNode().forEachChild(Sn,((e,t)=>{i=i.set(new sn(e),t)})),ur(e,t,n,i,r,s,a,o)}return t}{let _=new Ai(null);return i.foreach(((e,t)=>{const i=xn(n,e);c.isCompleteForPath(i)&&(_=_.set(e,c.getNode().getChild(i)))})),ur(e,t,n,_,r,s,a,o)}}(e,t,s.path,s.affectedTree,i,o,a)}else{if(n.type!==mi.LISTEN_COMPLETE)throw s("Unknown operation type: "+n.type);c=function(e,t,n,i,r){const s=t.serverCache,o=Ni(t,s.getNode(),s.isFullyInitialized()||un(n),s.isFiltered());return _r(e,o,n,i,or,r)}(e,t,n.path,i,a)}const l=a.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Pi(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(ti(Pi(t)))}}(t,c,l),{viewCache:c,changes:l}}function _r(e,t,n,i,s,o){const a=t.eventCache;if(null!=er(i,n))return t;{let c,_;if(un(n))if(r(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Ri(t),r=Xi(i,n instanceof Yn?n:Yn.EMPTY_NODE);c=e.filter.updateFullNode(t.eventCache.getNode(),r,o)}else{const n=Qi(i,Ri(t));c=e.filter.updateFullNode(t.eventCache.getNode(),n,o)}else{const l=an(n);if(".priority"===l){r(1===cn(n),"Can't have a priority with additional path components");const s=a.getNode();_=t.serverCache.getNode();const o=Zi(i,n,s,_);c=null!=o?e.filter.updatePriority(s,o):a.getNode()}else{const r=_n(n);let d;if(a.isCompleteForChild(l)){_=t.serverCache.getNode();const e=Zi(i,n,a.getNode(),_);d=null!=e?a.getNode().getImmediateChild(l).updateChild(r,e):a.getNode().getImmediateChild(l)}else d=nr(i,l,t.serverCache);c=null!=d?e.filter.updateChild(a.getNode(),l,d,r,s,o):a.getNode()}}return Si(t,c,a.isFullyInitialized()||un(n),e.filter.filtersNodes())}}function lr(e,t,n,i,r,s,o,a){const c=t.serverCache;let _;const l=o?e.filter:e.filter.getIndexedFilter();if(un(n))_=l.updateFullNode(c.getNode(),i,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);_=l.updateFullNode(c.getNode(),e,null)}else{const e=an(n);if(!c.isCompleteForPath(n)&&cn(n)>1)return t;const r=_n(n),s=c.getNode().getImmediateChild(e).updateChild(r,i);_=".priority"===e?l.updatePriority(c.getNode(),s):l.updateChild(c.getNode(),e,s,r,or,null)}const d=Ni(t,_,c.isFullyInitialized()||un(n),l.filtersNodes());return _r(e,d,n,r,new ar(r,d,s),a)}function dr(e,t,n,i,r,s,o){const a=t.eventCache;let c,_;const l=new ar(r,t,s);if(un(n))_=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=Si(t,_,!0,e.filter.filtersNodes());else{const r=an(n);if(".priority"===r)_=e.filter.updatePriority(t.eventCache.getNode(),i),c=Si(t,_,a.isFullyInitialized(),a.isFiltered());else{const s=_n(n),_=a.getNode().getImmediateChild(r);let d;if(un(s))d=i;else{const e=l.getCompleteChild(r);d=null!=e?".priority"===ln(s)&&e.getChild(hn(s)).isEmpty()?e:e.updateChild(s,i):Yn.EMPTY_NODE}if(_.equals(d))c=t;else{c=Si(t,e.filter.updateChild(a.getNode(),r,d,s,l,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function hr(e,t){return e.eventCache.isCompleteForChild(t)}function xr(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ur(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,_=t;c=un(n)?i:new Ai(null).setTree(n,i);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const c=xr(0,t.serverCache.getNode().getImmediateChild(n),i);_=lr(e,_,new sn(n),c,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!c){const c=xr(0,t.serverCache.getNode().getImmediateChild(n),i);_=lr(e,_,new sn(n),c,r,s,o,a)}})),_}class fr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new si(n.getIndex()),r=(s=n).loadsAllData()?new si(s.getIndex()):s.hasLimit()?new ai(s):new oi(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,c=i.updateFullNode(Yn.EMPTY_NODE,o.getNode(),null),_=r.updateFullNode(Yn.EMPTY_NODE,a.getNode(),null),l=new Ti(c,o.isFullyInitialized(),i.filtersNodes()),d=new Ti(_,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ki(d,l),this.eventGenerator_=new Ci(this.query_)}get query(){return this.query_}}function pr(e,t){const n=Ri(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!un(t)&&!n.getImmediateChild(an(t)).isEmpty())?n.getChild(t):null}function br(e){return 0===e.eventRegistrations_.length}function mr(e,t,n){const i=[];if(n){r(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function gr(e,t,n,i){t.type===mi.MERGE&&null!==t.source.queryId&&(r(Ri(e.viewCache_),"We should always have a full cache before handling merges"),r(Pi(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,o=cr(e.processor_,s,t,n,i);var a,c;return a=e.processor_,c=o.viewCache,r(c.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),r(c.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),r(o.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=o.viewCache,yr(e,o.changes,o.viewCache.eventCache.getNode(),null)}function yr(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ei(e,r,"child_removed",t,i,n),Ei(e,r,"child_added",t,i,n),Ei(e,r,"child_moved",s,i,n),Ei(e,r,"child_changed",t,i,n),Ei(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
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
 */let vr,wr;class Ir{constructor(){this.views=new Map}}function Tr(e,t,n,i){const s=t.source.queryId;if(null!==s){const o=e.views.get(s);return r(null!=o,"SyncTree gave us an op for an invalid query."),gr(o,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(gr(s,t,n,i));return r}}function Cr(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Qi(n,r?i:null),s=!1;e?s=!0:i instanceof Yn?(e=Xi(n,i),s=!1):(e=Yn.EMPTY_NODE,s=!1);const o=ki(new Ti(e,s,!1),new Ti(i,r,!1));return new fr(t,o)}return o}function Er(e,t,n,i,r,s){const o=Cr(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Wn,((e,t)=>{i.push(ni(e,t))}));return n.isFullyInitialized()&&i.push(ti(n.getNode())),yr(e,i,n.getNode(),t)}(o,n)}function kr(e,t,n,i){const s=t._queryIdentifier,o=[];let a=[];const c=Or(e);if("default"===s)for(const[t,r]of e.views.entries())a=a.concat(mr(r,n,i)),br(r)&&(e.views.delete(t),r.query._queryParams.loadsAllData()||o.push(r.query));else{const t=e.views.get(s);t&&(a=a.concat(mr(t,n,i)),br(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||o.push(t.query)))}return c&&!Or(e)&&o.push(new(r(vr,"Reference.ts has not been loaded"),vr)(t._repo,t._path)),{removed:o,events:a}}function Sr(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Nr(e,t){let n=null;for(const i of e.views.values())n=n||pr(i,t);return n}function Pr(e,t){if(t._queryParams.loadsAllData())return Ar(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Rr(e,t){return null!=Pr(e,t)}function Or(e){return null!=Ar(e)}function Ar(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Lr=1;class Dr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ai(null),this.pendingWriteTree_={visibleWrites:Li.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Mr(e,t,n,i,s){return function(e,t,n,i,s){r(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Di(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?Vr(e,new wi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Fr(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if($i(e.pendingWriteTree_,t)){let t=new Ai(null);return null!=i.snap?t=t.set(on(),!0):Ct(i.children,(e=>{t=t.set(new sn(e),!0)})),Vr(e,new yi(i.path,t,n))}return[]}function Ur(e,t,n){return Vr(e,new wi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function jr(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Rr(o,t))){const c=kr(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(s));const _=c.removed;if(a=c.events,!r){const n=-1!==_.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Or(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Or(t)){return[Ar(t)]}{let e=[];return t&&(e=Sr(t)),Ct(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=$r(e,i);e.listenProvider_.startListening(Xr(r),Gr(e,r),s.hashFn,s.onComplete)}}}if(!r&&_.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(Xr(t),n)}else _.forEach((t=>{const n=e.queryToTagMap.get(Kr(t));e.listenProvider_.stopListening(Xr(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=Kr(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,_)}return a}function qr(e,t,n,i){const r=Yr(e,i);if(null!=r){const i=Jr(r),s=i.path,o=i.queryId,a=fn(s,t);return Qr(e,s,new wi(gi(o),a,n))}return[]}function Wr(e,t,n,i=!1){const s=t._path;let o=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=fn(e,s);o=o||Nr(t,n),a=a||Or(t)}));let c,_=e.syncPointTree_.get(s);if(_?(a=a||Or(_),o=o||Nr(_,on())):(_=new Ir,e.syncPointTree_=e.syncPointTree_.set(s,_)),null!=o)c=!0;else{c=!1,o=Yn.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Nr(t,on());n&&(o=o.updateImmediateChild(e,n))}))}const l=Rr(_,t);if(!l&&!t._queryParams.loadsAllData()){const n=Kr(t);r(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Lr++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let d=Er(_,t,n,zi(e.pendingWriteTree_,s),o,c);if(!l&&!a&&!i){const n=Pr(_,t);d=d.concat(function(e,t,n){const i=t._path,s=Gr(e,t),o=$r(e,n),a=e.listenProvider_.startListening(Xr(t),s,o.hashFn,o.onComplete),c=e.syncPointTree_.subtree(i);if(s)r(!Or(c.value),"If we're adding a query, it shouldn't be shadowed");else{const t=c.fold(((e,t,n)=>{if(!un(e)&&t&&Or(t))return[Ar(t).query];{let e=[];return t&&(e=e.concat(Sr(t).map((e=>e.query)))),Ct(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(Xr(i),Gr(e,i))}}return a}
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
 */(e,t,n))}return d}function Hr(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Nr(n,fn(e,t));if(i)return i}));return Ji(i,t,r,n,!0)}function Vr(e,t){return Br(t,e.syncPointTree_,null,zi(e.pendingWriteTree_,on()))}function Br(e,t,n,i){if(un(e.path))return zr(e,t,n,i);{const r=t.get(on());null==n&&null!=r&&(n=Nr(r,on()));let s=[];const o=an(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=ir(i,o);s=s.concat(Br(a,c,e,t))}return r&&(s=s.concat(Tr(r,e,i,n))),s}}function zr(e,t,n,i){const r=t.get(on());null==n&&null!=r&&(n=Nr(r,on()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=ir(i,t),c=e.operationForChild(t);c&&(s=s.concat(zr(c,r,o,a)))})),r&&(s=s.concat(Tr(r,e,i,n))),s}function $r(e,t){const n=t.query,i=Gr(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||Yn.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=Yr(e,n);if(i){const n=Jr(i),r=n.path,s=n.queryId,o=fn(r,t);return Qr(e,r,new vi(gi(s),o))}return[]}(e,n._path,i):function(e,t){return Vr(e,new vi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return jr(e,n,null,i)}}}}function Gr(e,t){const n=Kr(t);return e.queryToTagMap.get(n)}function Kr(e){return e._path.toString()+"$"+e._queryIdentifier}function Yr(e,t){return e.tagToQueryMap.get(t)}function Jr(e){const t=e.indexOf("$");return r(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new sn(e.substr(0,t))}}function Qr(e,t,n){const i=e.syncPointTree_.get(t);r(i,"Missing sync point for query tag that we're tracking");return Tr(i,n,zi(e.pendingWriteTree_,t),null)}function Xr(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(r(wr,"Reference.ts has not been loaded"),wr)(e._repo,e._path):e}class Zr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zr(t)}node(){return this.node_}}class es{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=xn(this.path_,e);return new es(this.syncTree_,t)}node(){return Hr(this.syncTree_,this.path_)}}const ts=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},ns=function(e,t,n){return e&&"object"==typeof e?(r(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?is(e[".sv"],t,n):"object"==typeof e[".sv"]?rs(e[".sv"],t):void r(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},is=function(e,t,n){if("timestamp"===e)return n.timestamp;r(!1,"Unexpected server value: "+e)},rs=function(e,t,n){e.hasOwnProperty("increment")||r(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&r(!1,"Unexpected increment value: "+i);const s=t.node();if(r(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return"number"!=typeof o?i:o+i},ss=function(e,t,n,i){return as(t,new es(n,e),i)},os=function(e,t,n){return as(e,new Zr(t),n)};function as(e,t,n){const i=e.getPriority().val(),r=ns(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=ns(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new qn(s,Xn(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new qn(r))),i.forEachChild(Wn,((e,i)=>{const r=as(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
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
 */class cs{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function _s(e,t){let n=t instanceof sn?t:new sn(t),i=e,r=an(n);for(;null!==r;){const e=O(i.node.children,r)||{children:{},childCount:0};i=new cs(r,i,e),n=_n(n),r=an(n)}return i}function ls(e){return e.node.value}function ds(e,t){e.node.value=t,ps(e)}function hs(e){return e.node.childCount>0}function xs(e,t){Ct(e.node.children,((n,i)=>{t(new cs(n,e,i))}))}function us(e,t,n,i){n&&!i&&t(e),xs(e,(e=>{us(e,t,!0,i)})),n&&i&&t(e)}function fs(e){return new sn(null===e.parent?e.name:fs(e.parent)+"/"+e.name)}function ps(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===ls(e)&&!hs(e)}(n),r=R(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,ps(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,ps(e))}
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
 */(e.parent,e.name,e)}const bs=/[\[\].#$\/\u0000-\u001F\u007F]/,ms=/[\[\].#$\u0000-\u001F\u007F]/,gs=10485760,ys=function(e){return"string"==typeof e&&0!==e.length&&!bs.test(e)},vs=function(e){return"string"==typeof e&&0!==e.length&&!ms.test(e)},ws=function(e,t,n,i){i&&void 0===t||Is(V(e,"value"),t,n)},Is=function(e,t,n){const i=n instanceof sn?new mn(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+yn(i));if("function"==typeof t)throw new Error(e+"contains a function "+yn(i)+" with contents = "+t.toString());if(bt(t))throw new Error(e+"contains "+t.toString()+" "+yn(i));if("string"==typeof t&&t.length>gs/3&&B(t)>gs)throw new Error(e+"contains a string greater than "+gs+" utf8 bytes "+yn(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(Ct(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!ys(t)))throw new Error(e+" contains an invalid key ("+t+") "+yn(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=B(t),gn(e)}(i,t),Is(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=B(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+yn(i)+" in addition to actual children.")}},Ts=function(e,t,n,i){if(!(i&&void 0===n||vs(n)))throw new Error(V(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Cs=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Ts(e,t,n,i)},Es=function(e,t){if(".info"===an(t))throw new Error(e+" failed = Can't modify data under /.info/")},ks=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ys(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),vs(e)}(n))throw new Error(V(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Ss{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ns(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||pn(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Ps(e,t,n){Ns(e,n),Os(e,(e=>pn(e,t)))}function Rs(e,t,n){Ns(e,n),Os(e,(e=>bn(e,t)||bn(t,e)))}function Os(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(As(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function As(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();_t&&ht("event: "+n.toString()),Nt(i)}}}
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
 */const Ls="repo_interrupt",Ds=25;class Ms{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Ss,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xi(),this.transactionQueueTree_=new cs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Fs(e,t,n){if(e.stats_=Bt(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new di(e.repoInfo_,((t,n,i,r)=>{qs(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Ws(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{N(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new In(e.repoInfo_,t,((t,n,i,r)=>{qs(e,t,n,i,r)}),(t=>{Ws(e,t)}),(t=>{!function(e,t){Ct(t,((t,n)=>{Hs(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Vt[n]||(Vt[n]=t()),Vt[n]}(e.repoInfo_,(()=>new bi(e.stats_,e.server_))),e.infoData_=new hi,e.infoSyncTree_=new Dr({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ur(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),Hs(e,"connected",!1),e.serverSyncTree_=new Dr({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Rs(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Us(e){const t=e.infoData_.getNode(new sn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function js(e){return ts({timestamp:Us(e)})}function qs(e,t,n,i,r){e.dataUpdateCount++;const s=new sn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=L(n,(e=>Xn(e)));o=function(e,t,n,i){const r=Yr(e,i);if(r){const i=Jr(r),s=i.path,o=i.queryId,a=fn(s,t),c=Ai.fromObject(n);return Qr(e,s,new Ii(gi(o),a,c))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Xn(n);o=qr(e.serverSyncTree_,s,t,r)}else if(i){const t=L(n,(e=>Xn(e)));o=function(e,t,n){const i=Ai.fromObject(n);return Vr(e,new Ii({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Xn(n);o=Ur(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Qs(e,s)),Rs(e.eventQueue_,a,o)}function Ws(e,t){Hs(e,"connected",t),!1===t&&function(e){Gs(e,"onDisconnectEvents");const t=js(e),n=xi();fi(e.onDisconnect_,on(),((i,r)=>{const s=ss(i,r,e.serverSyncTree_,t);ui(n,i,s)}));let i=[];fi(n,on(),((t,n)=>{i=i.concat(Ur(e.serverSyncTree_,t,n));const r=no(e,t);Qs(e,r)})),e.onDisconnect_=xi(),Rs(e.eventQueue_,on(),i)}(e)}function Hs(e,t,n){const i=new sn("/.info/"+t),r=Xn(n);e.infoData_.updateSnapshot(i,r);const s=Ur(e.infoSyncTree_,i,r);Rs(e.eventQueue_,i,s)}function Vs(e){return e.nextWriteId_++}function Bs(e,t,n,i,r){Gs(e,"set",{path:t.toString(),value:n,priority:i});const s=js(e),o=Xn(n,i),a=Hr(e.serverSyncTree_,t),c=os(o,a,s),_=Vs(e),l=Mr(e.serverSyncTree_,t,c,_,!0);Ns(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||pt("set at "+t+" failed: "+n);const o=Fr(e.serverSyncTree_,_,!s);Rs(e.eventQueue_,t,o),Ks(e,r,n,i)}));const d=no(e,t);Qs(e,d),Rs(e.eventQueue_,d,[])}function zs(e,t,n){let i;i=".info"===an(t._path)?jr(e.infoSyncTree_,t,n):jr(e.serverSyncTree_,t,n),Ps(e.eventQueue_,t._path,i)}function $s(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Ls)}function Gs(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),ht(n,...t)}function Ks(e,t,n,i){t&&Nt((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function Ys(e,t,n){return Hr(e.serverSyncTree_,t,n)||Yn.EMPTY_NODE}function Js(e,t=e.transactionQueueTree_){if(t||to(e,t),ls(t)){const n=Zs(e,t);r(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Ys(e,t,i);let o=s;const a=s.hash();for(let e=0;e<n.length;e++){const i=n[e];r(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=fn(t,i.path);o=o.updateChild(s,i.currentOutputSnapshotRaw)}const c=o.val(!0),_=t;e.server_.put(_.toString(),c,(i=>{Gs(e,"transaction put response",{path:_.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Fr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();to(e,_s(e.transactionQueueTree_,t)),Js(e,e.transactionQueueTree_),Rs(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Nt(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{pt("transaction at "+_.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Qs(e,t)}}),a)}(e,fs(t),n)}else hs(t)&&xs(t,(t=>{Js(e,t)}))}function Qs(e,t){const n=Xs(e,t),i=fs(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const o=t.filter((e=>0===e.status)),a=o.map((e=>e.currentWriteId));for(let o=0;o<t.length;o++){const _=t[o],l=fn(n,_.path);let d,h=!1;if(r(null!==l,"rerunTransactionsUnderNode_: relativePath should not be null."),4===_.status)h=!0,d=_.abortReason,s=s.concat(Fr(e.serverSyncTree_,_.currentWriteId,!0));else if(0===_.status)if(_.retryCount>=Ds)h=!0,d="maxretry",s=s.concat(Fr(e.serverSyncTree_,_.currentWriteId,!0));else{const n=Ys(e,_.path,a);_.currentInputSnapshot=n;const i=t[o].update(n.val());if(void 0!==i){Is("transaction failed: Data returned ",i,_.path);let t=Xn(i);"object"==typeof i&&null!=i&&R(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=_.currentWriteId,o=js(e),c=os(t,n,o);_.currentOutputSnapshotRaw=t,_.currentOutputSnapshotResolved=c,_.currentWriteId=Vs(e),a.splice(a.indexOf(r),1),s=s.concat(Mr(e.serverSyncTree_,_.path,c,_.currentWriteId,_.applyLocally)),s=s.concat(Fr(e.serverSyncTree_,r,!0))}else h=!0,d="nodata",s=s.concat(Fr(e.serverSyncTree_,_.currentWriteId,!0))}Rs(e.eventQueue_,n,s),s=[],h&&(t[o].status=2,c=t[o].unwatcher,setTimeout(c,Math.floor(0)),t[o].onComplete&&("nodata"===d?i.push((()=>t[o].onComplete(null,!1,t[o].currentInputSnapshot))):i.push((()=>t[o].onComplete(new Error(d),!1,null)))))}var c;to(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Nt(i[e]);Js(e,e.transactionQueueTree_)}(e,Zs(e,n),i),i}function Xs(e,t){let n,i=e.transactionQueueTree_;for(n=an(t);null!==n&&void 0===ls(i);)i=_s(i,n),n=an(t=_n(t));return i}function Zs(e,t){const n=[];return eo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function eo(e,t,n){const i=ls(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);xs(t,(t=>{eo(e,t,n)}))}function to(e,t){const n=ls(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ds(t,n.length>0?n:void 0)}xs(t,(t=>{to(e,t)}))}function no(e,t){const n=fs(Xs(e,t)),i=_s(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{io(e,t)})),io(e,i),us(i,(t=>{io(e,t)})),n}function io(e,t){const n=ls(t);if(n){const i=[];let s=[],o=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(r(o===t-1,"All SENT items should be at beginning of queue."),o=t,n[t].status=3,n[t].abortReason="set"):(r(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Fr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===o?ds(t,void 0):n.length=o+1,Rs(e.eventQueue_,fs(t),s);for(let e=0;e<i.length;e++)Nt(i[e])}}
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
 */const ro=function(e,t){const n=so(e),i=n.namespace;"firebase.com"===n.domain&&ft(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||ft("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&pt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new jt(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new sn(n.pathString)}},so=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"==typeof e){let _=e.indexOf("//");_>=0&&(a=e.substring(0,_-1),e=e.substring(_+2));let l=e.indexOf("/");-1===l&&(l=e.length);let d=e.indexOf("?");-1===d&&(d=e.length),t=e.substring(0,Math.min(l,d)),l<d&&(r=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,d)));const h=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):pt(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,d)));_=t.indexOf(":"),_>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(_+1),10)):_=t.length;const x=t.slice(0,_);if("localhost"===x.toLowerCase())n="localhost";else if(x.split(".").length<=2)n=x;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in h&&(s=h.ns)}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},oo="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";!function(){let e=0;const t=[]}();
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
class ao{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+N(this.snapshot.exportVal())}}class co{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class _o{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return r(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
class lo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return un(this._path)?null:ln(this._path)}get ref(){return new ho(this._repo,this._path)}get _queryIdentifier(){const e=li(this._queryParams),t=It(e);return"{}"===t?"default":t}get _queryObject(){return li(this._queryParams)}isEqual(e){if(!((e=z(e))instanceof lo))return!1;const t=this._repo===e._repo,n=pn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class ho extends lo{constructor(e,t){super(e,t,new ci,!1)}get parent(){const e=hn(this._path);return null===e?null:new ho(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class xo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new sn(e),n=fo(this.ref,e);return new xo(this._node.getChild(t),n,Wn)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new xo(n,fo(this.ref,t),Wn))))}hasChild(e){const t=new sn(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function uo(e,t){return(e=z(e))._checkNotDeleted("ref"),void 0!==t?fo(e._root,t):e._root}function fo(e,t){return null===an((e=z(e))._path)?Cs("child","path",t,!1):Ts("child","path",t,!1),new ho(e._repo,xn(e._path,t))}function po(e,t){e=z(e),Es("set",e._path),ws("set",t,e._path,!1);const n=new y;return Bs(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class bo{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ao("value",this,new xo(e.snapshotNode,new ho(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new co(this,e,t):null}matches(e){return e instanceof bo&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class mo{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new co(this,e,t):null}createEvent(e,t){r(null!=e.childName,"Child events should have a childName.");const n=fo(new ho(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new ao(e.type,this,new xo(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof mo&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function go(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{zs(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new _o(n,s||void 0),a="value"===t?new bo(o):new mo(t,o);return function(e,t,n){let i;i=".info"===an(t._path)?Wr(e.infoSyncTree_,t,n):Wr(e.serverSyncTree_,t,n),Ps(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>zs(e._repo,e,a)}function yo(e,t,n,i){return go(e,"value",t,n,i)}!function(e){r(!vr,"__referenceConstructor has already been defined"),vr=e}(ho),function(e){r(!wr,"__referenceConstructor has already been defined"),wr=e}(ho);
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
const vo="FIREBASE_DATABASE_EMULATOR_HOST",wo={};let Io=!1;function To(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||ft("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ht("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=ro(s,r),_=c.repoInfo;"undefined"!=typeof process&&process.env&&(a=process.env[vo]),a?(o=!0,s=`http://${a}?ns=${_.namespace}`,c=ro(s,r),_=c.repoInfo):o=!c.repoInfo.secure;const l=r&&o?new At(At.OWNER):new Ot(e.name,e.options,t);ks("Invalid Firebase Database URL",c),un(c.path)||ft("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let r=wo[t.name];r||(r={},wo[t.name]=r);let s=r[e.toURLString()];s&&ft("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Ms(e,Io,n,i),r[e.toURLString()]=s,s}(_,e,l,new Rt(e.name,n));return new Co(d,e)}class Co{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Fs(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ho(this._repo,on())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=wo[t];n&&n[e.key]===e||ft(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$s(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ft("Cannot call "+e+" on a deleted database.")}}function Eo(e=De(),t){const n=Pe(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=b("database");e&&function(e,t,n,i={}){e=z(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ft("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&ft('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new At(At.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,r=e.sub||e.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},e);return[l(JSON.stringify({alg:"none",type:"JWT"})),l(JSON.stringify(s)),""].join(".")}(i.mockUserToken,e.app.options.projectId);s=new At(t)}!function(e,t,n,i){e.repoInfo_=new jt(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(r,t,n,s)}(n,...e)}return n}In.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},In.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
function(e){!function(e){Ze=e}(Ae),Ne(new $("database",((e,{instanceIdentifier:t})=>To(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Me(Qe,Xe,e),Me(Qe,Xe,"esm2017")}
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
 */();function ko(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;"function"==typeof SuppressedError&&SuppressedError;function So(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const No=So,Po=new E("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ro=new ne("@firebase/auth");function Oo(e,...t){Ro.logLevel<=Q.ERROR&&Ro.error(`Auth (${Ae}): ${e}`,...t)}
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
 */function Ao(e,...t){throw Mo(e,...t)}function Lo(e,...t){return Mo(e,...t)}function Do(e,t,n){const i=Object.assign(Object.assign({},No()),{[t]:n});return new E("auth","Firebase",i).create(t,{appName:e.name})}function Mo(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Po.create(e,...t)}function Fo(e,t,...n){if(!e)throw Mo(t,...n)}function Uo(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Oo(t),new Error(t)}function jo(e,t){e||Uo(t)}
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
 */function qo(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Wo(){return"http:"===Ho()||"https:"===Ho()}function Ho(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Vo(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Wo()||function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()||"connection"in navigator))||navigator.onLine}
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
class Bo{constructor(e,t){this.shortDelay=e,this.longDelay=t,jo(t>e,"Short delay should be less than long delay!"),this.isMobile=w()||I()}get(){return Vo()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function zo(e,t){jo(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class $o{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Uo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Uo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Uo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Go={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},Ko=new Bo(3e4,6e4);
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
 */function Yo(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Jo(e,t,n,i,r={}){return Qo(e,r,(async()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const o=F(Object.assign({key:e.config.apiKey},s)).slice(1),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/json",e.languageCode&&(a["X-Firebase-Locale"]=e.languageCode),$o.fetch()(Zo(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},r))}))}async function Qo(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Go),t);try{const t=new ea(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw ta(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ta(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw ta(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw ta(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Do(e,a,o);Ao(e,a)}}catch(t){if(t instanceof C)throw t;Ao(e,"network-request-failed",{message:String(t)})}}async function Xo(e,t,n,i,r={}){const s=await Jo(e,t,n,i,r);return"mfaPendingCredential"in s&&Ao(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Zo(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?zo(e.config,r):`${e.config.apiScheme}://${r}`}class ea{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Lo(this.auth,"network-request-failed"))),Ko.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ta(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Lo(e,t,i);return r.customData._tokenResponse=n,r}
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
function na(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function ia(e){return 1e3*Number(e)}function ra(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Oo("JWT malformed, contained fewer than 3 sections"),null;try{const e=d(n);return e?JSON.parse(e):(Oo("Failed to decode base64 JWT payload"),null)}catch(e){return Oo("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function sa(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof C&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class oa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
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
 */class aa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=na(this.lastLoginAt),this.creationTime=na(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ca(e){var t;const n=e.auth,i=await e.getIdToken(),r=await sa(e,async function(e,t){return Jo(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Fo(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=ko(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(c=e.providerData,_=o,[...c.filter((e=>!_.some((t=>t.providerId===e.providerId)))),..._]);var c,_;const l=e.isAnonymous,d=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),h=!!l&&d,x={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new aa(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(e,x)}
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
class _a{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fo(e.idToken,"internal-error"),Fo(void 0!==e.idToken,"internal-error"),Fo(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=ra(e);return Fo(t,"internal-error"),Fo(void 0!==t.exp,"internal-error"),Fo(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Fo(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=
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
 */await async function(e,t){const n=await Qo(e,{},(async()=>{const n=F({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Zo(e,i,"/v1/token",`key=${r}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",$o.fetch()(s,{method:"POST",headers:o,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new _a;return n&&(Fo("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Fo("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Fo("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _a,this.toJSON())}_performRefresh(){return Uo("not implemented")}}
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
 */function la(e,t){Fo("string"==typeof e||void 0===e,"internal-error",{appName:t})}class da{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new oa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new aa(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await sa(this,this.stsTokenManager.getToken(this.auth,e));return Fo(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=z(e),i=await n.getIdToken(t),r=ra(i);Fo(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:na(ia(r.auth_time)),issuedAtTime:na(ia(r.iat)),expirationTime:na(ia(r.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=z(e);await ca(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Fo(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new da(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Fo(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sa(this,async function(e,t){return Jo(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,_;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(i=t.email)&&void 0!==i?i:void 0,h=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,x=null!==(s=t.photoURL)&&void 0!==s?s:void 0,u=null!==(o=t.tenantId)&&void 0!==o?o:void 0,f=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,p=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(_=t.lastLoginAt)&&void 0!==_?_:void 0,{uid:m,emailVerified:g,isAnonymous:y,providerData:v,stsTokenManager:w}=t;Fo(m&&w,e,"internal-error");const I=_a.fromJSON(this.name,w);Fo("string"==typeof m,e,"internal-error"),la(l,e.name),la(d,e.name),Fo("boolean"==typeof g,e,"internal-error"),Fo("boolean"==typeof y,e,"internal-error"),la(h,e.name),la(x,e.name),la(u,e.name),la(f,e.name),la(p,e.name),la(b,e.name);const T=new da({uid:m,auth:e,email:d,emailVerified:g,displayName:l,isAnonymous:y,photoURL:x,phoneNumber:h,tenantId:u,stsTokenManager:I,createdAt:p,lastLoginAt:b});return v&&Array.isArray(v)&&(T.providerData=v.map((e=>Object.assign({},e)))),f&&(T._redirectEventId=f),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new _a;i.updateFromServerResponse(t);const r=new da({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await ca(r),r}}
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
 */const ha=new Map;function xa(e){jo(e instanceof Function,"Expected a class definition");let t=ha.get(e);return t?(jo(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ha.set(e,t),t)}
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
 */class ua{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ua.type="NONE";const fa=ua;
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
 */function pa(e,t,n){return`firebase:${e}:${t}:${n}`}class ba{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=pa(this.userKey,i.apiKey,r),this.fullPersistenceKey=pa("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?da._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ba(xa(fa),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||xa(fa);const s=pa(n,e.config.apiKey,e.name);let o=null;for(const n of t)try{const t=await n._get(s);if(t){const i=da._fromJSON(e,t);n!==r&&(o=i),r=n;break}}catch(e){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new ba(r,e,n)):new ba(r,e,n)}}
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
 */function ma(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wa(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ga(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ta(t))return"Blackberry";if(Ca(t))return"Webos";if(ya(t))return"Safari";if((t.includes("chrome/")||va(t))&&!t.includes("edge/"))return"Chrome";if(Ia(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ga(e=v()){return/firefox\//i.test(e)}function ya(e=v()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function va(e=v()){return/crios\//i.test(e)}function wa(e=v()){return/iemobile/i.test(e)}function Ia(e=v()){return/android/i.test(e)}function Ta(e=v()){return/blackberry/i.test(e)}function Ca(e=v()){return/webos/i.test(e)}function Ea(e=v()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function ka(){return function(){const e=v();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Sa(e=v()){return Ea(e)||Ia(e)||Ca(e)||Ta(e)||/windows phone/i.test(e)||wa(e)}
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
function Na(e,t=[]){let n;switch(e){case"Browser":n=ma(v());break;case"Worker":n=`${ma(v())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ae}/${i}`}
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
 */async function Pa(e,t){return Jo(e,"GET","/v2/recaptchaConfig",Yo(e,t))}
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
 */function Ra(e){return void 0!==e&&void 0!==e.enterprise}class Oa{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===e.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some((e=>"EMAIL_PASSWORD_PROVIDER"===e.provider&&"OFF"!==e.enforcementState))}}
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
 */function Aa(e){return new Promise(((t,n)=>{const i=document.createElement("script");var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Lo("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function La(e){return`__${e}${Math.floor(1e6*Math.random())}`}class Da{constructor(e){this.type="recaptcha-enterprise",this.auth=ja(e)}async verify(e="verify",t=!1){function n(t,n,i){const r=window.grecaptcha;Ra(r)?r.enterprise.ready((()=>{r.enterprise.execute(t,{action:e}).then((e=>{n(e)})).catch((()=>{n("NO_RECAPTCHA")}))})):i(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((e,i)=>{(async function(e){if(!t){if(null==e.tenantId&&null!=e._agentRecaptchaConfig)return e._agentRecaptchaConfig.siteKey;if(null!=e.tenantId&&void 0!==e._tenantRecaptchaConfigs[e.tenantId])return e._tenantRecaptchaConfigs[e.tenantId].siteKey}return new Promise((async(t,n)=>{Pa(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((i=>{if(void 0!==i.recaptchaKey){const n=new Oa(i);return null==e.tenantId?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,t(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((e=>{n(e)}))}))})(this.auth).then((r=>{if(!t&&Ra(window.grecaptcha))n(r,e,i);else{if("undefined"==typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));Aa("https://www.google.com/recaptcha/enterprise.js?render="+r).then((()=>{n(r,e,i)})).catch((e=>{i(e)}))}})).catch((e=>{i(e)}))}))}}async function Ma(e,t,n,i=!1){const r=new Da(e);let s;try{s=await r.verify(n)}catch(e){s=await r.verify(n,!0)}const o=Object.assign({},t);return i?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
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
 */class Fa{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{n(e(t))}catch(e){i(e)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}}
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
 */class Ua{constructor(e,t,n,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qa(this),this.idTokenSubscription=new qa(this),this.beforeStateQueue=new Fa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Po,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=xa(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await ba.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null==o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(e){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Fo(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?z(e):null;return t&&Fo(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Fo(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(xa(e))}))}async initializeRecaptchaConfig(){const e=await Pa(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Oa(e);if(null==this.tenantId?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled){new Da(this).verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new E("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&xa(e)||this._popupRedirectResolver;Fo(t,this,"argument-error"),this.redirectPersistenceManager=await ba.create(this,[xa(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Fo(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fo(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Na(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){Ro.logLevel<=Q.WARN&&Ro.warn(`Auth (${Ae}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function ja(e){return z(e)}class qa{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new W(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Fo(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */function Wa(e,t,n){const i=ja(e);Fo(i._canInitEmulator,i,"emulator-config-failed"),Fo(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null==n?void 0:n.disableWarnings),s=Ha(t),{host:o,port:a}=function(e){const t=Ha(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Va(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Va(t)}}}(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Ha(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Va(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ba{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Uo("not implemented")}_getIdTokenResponse(e){return Uo("not implemented")}_linkToIdToken(e,t){return Uo("not implemented")}_getReauthenticationResolver(e){return Uo("not implemented")}}
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
 */async function za(e,t){return Jo(e,"POST","/v1/accounts:update",t)}
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
async function $a(e,t){return Xo(e,"POST","/v1/accounts:signInWithPassword",Yo(e,t))}
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
class Ga extends Ba{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Ga(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ga(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(t=e._getRecaptchaConfig())||void 0===t?void 0:t.emailPasswordEnabled){const t=await Ma(e,n,"signInWithPassword");return $a(e,t)}return $a(e,n).catch((async t=>{if("auth/missing-recaptcha-token"===t.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const t=await Ma(e,n,"signInWithPassword");return $a(e,t)}return Promise.reject(t)}));case"emailLink":
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
return async function(e,t){return Xo(e,"POST","/v1/accounts:signInWithEmailLink",Yo(e,t))}(e,{email:this._email,oobCode:this._password});default:Ao(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return za(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Xo(e,"POST","/v1/accounts:signInWithEmailLink",Yo(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ao(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ka(e,t){return Xo(e,"POST","/v1/accounts:signInWithIdp",Yo(e,t))}
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
 */class Ya extends Ba{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ya(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ao("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=ko(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Ya(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Ka(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ka(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ka(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=F(t)}return e}}
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
 */const Ja={USER_NOT_FOUND:"user-not-found"};
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
class Qa extends Ba{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Qa({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Qa({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Xo(e,"POST","/v1/accounts:signInWithPhoneNumber",Yo(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Xo(e,"POST","/v1/accounts:signInWithPhoneNumber",Yo(e,t));if(n.temporaryProof)throw ta(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Xo(e,"POST","/v1/accounts:signInWithPhoneNumber",Yo(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ja)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Qa({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
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
 */class Xa{constructor(e){var t,n,i,r,s,o;const a=U(j(e)),c=null!==(t=a.apiKey)&&void 0!==t?t:null,_=null!==(n=a.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=a.mode)&&void 0!==i?i:null);Fo(c&&_&&l,"argument-error"),this.apiKey=c,this.operation=l,this.code=_,this.continueUrl=null!==(r=a.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=U(j(e)).link,n=t?U(j(t)).deep_link_id:null,i=U(j(e)).deep_link_id;return(i?U(j(i)).link:null)||i||n||t||e}(e);try{return new Xa(t)}catch(e){return null}}}
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
class Za{constructor(){this.providerId=Za.PROVIDER_ID}static credential(e,t){return Ga._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xa.parseLink(t);return Fo(n,"argument-error"),Ga._fromEmailAndCode(e,n.code,n.tenantId)}}Za.PROVIDER_ID="password",Za.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Za.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class nc extends tc{constructor(){super("facebook.com")}static credential(e){return Ya._fromParams({providerId:nc.PROVIDER_ID,signInMethod:nc.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nc.credentialFromTaggedObject(e)}static credentialFromError(e){return nc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return nc.credential(e.oauthAccessToken)}catch(e){return null}}}nc.FACEBOOK_SIGN_IN_METHOD="facebook.com",nc.PROVIDER_ID="facebook.com";
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
class ic extends tc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ya._fromParams({providerId:ic.PROVIDER_ID,signInMethod:ic.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ic.credentialFromTaggedObject(e)}static credentialFromError(e){return ic.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ic.credential(t,n)}catch(e){return null}}}ic.GOOGLE_SIGN_IN_METHOD="google.com",ic.PROVIDER_ID="google.com";
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
class rc extends tc{constructor(){super("github.com")}static credential(e){return Ya._fromParams({providerId:rc.PROVIDER_ID,signInMethod:rc.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rc.credentialFromTaggedObject(e)}static credentialFromError(e){return rc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return rc.credential(e.oauthAccessToken)}catch(e){return null}}}rc.GITHUB_SIGN_IN_METHOD="github.com",rc.PROVIDER_ID="github.com";
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
class sc extends tc{constructor(){super("twitter.com")}static credential(e,t){return Ya._fromParams({providerId:sc.PROVIDER_ID,signInMethod:sc.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return sc.credentialFromTaggedObject(e)}static credentialFromError(e){return sc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return sc.credential(t,n)}catch(e){return null}}}
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
async function oc(e,t){return Xo(e,"POST","/v1/accounts:signUp",Yo(e,t))}
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
 */sc.TWITTER_SIGN_IN_METHOD="twitter.com",sc.PROVIDER_ID="twitter.com";class ac{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await da._fromIdTokenResponse(e,n,i),s=cc(n);return new ac({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=cc(n);return new ac({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function cc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class _c extends C{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,_c.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new _c(e,t,n,i)}}function lc(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw _c._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function dc(e,t,n=!1){const i=await sa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ac._forOperation(e,"link",i)}
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
async function hc(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await sa(e,lc(i,r,t,e),n);Fo(s.idToken,i,"internal-error");const o=ra(s.idToken);Fo(o,i,"internal-error");const{sub:a}=o;return Fo(e.uid===a,i,"user-mismatch"),ac._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ao(i,"user-mismatch"),e}}
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
 */async function xc(e,t,n=!1){const i="signIn",r=await lc(e,i,t),s=await ac._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function uc(e,t){return xc(ja(e),t)}
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
 */class mc extends bc{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=v();return ya(e)||Ea(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Sa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);ka()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mc.type="LOCAL";const gc=mc;
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
 */class yc extends bc{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yc.type="SESSION";const vc=yc;
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
class wc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Ic(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */wc.receivers=[];class Tc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Ic("",20);i.port1.start();const _=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(_),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(_),clearTimeout(r),a(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Cc(){return window}
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
function Ec(){return void 0!==Cc().WorkerGlobalScope&&"function"==typeof Cc().importScripts}
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
const kc="firebaseLocalStorageDb",Sc="firebaseLocalStorage",Nc="fbase_key";class Pc{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Rc(e,t){return e.transaction([Sc],t?"readwrite":"readonly").objectStore(Sc)}function Oc(){const e=indexedDB.open(kc,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Sc,{keyPath:Nc})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Sc)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(kc);return new Pc(e).toPromise()}(),t(await Oc()))}))}))}async function Ac(e,t,n){const i=Rc(e,!0).put({[Nc]:t,value:n});return new Pc(i).toPromise()}function Lc(e,t){const n=Rc(e,!0).delete(t);return new Pc(n).toPromise()}class Dc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Oc()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ec()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wc._getInstance(Ec()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Tc(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oc();return await Ac(e,pc,"1"),await Lc(e,pc),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ac(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Rc(e,!1).get(t),i=await new Pc(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Lc(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Rc(e,!1).getAll();return new Pc(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Dc.type="LOCAL";const Mc=Dc;
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
La("rcb"),new Bo(3e4,6e4);
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
const Fc="recaptcha";async function Uc(e,t,n){var i;const r=await n.verify();try{let s;if(Fo("string"==typeof r,e,"argument-error"),Fo(n.type===Fc,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Fo("enroll"===t.type,e,"internal-error");const n=
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
 */await function(e,t){return Jo(e,"POST","/v2/accounts/mfaEnrollment:start",Yo(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Fo("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Fo(n,e,"missing-multi-factor-info");const o=await function(e,t){return Jo(e,"POST","/v2/accounts/mfaSignIn:start",Yo(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Jo(e,"POST","/v1/accounts:sendVerificationCode",Yo(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class jc{constructor(e){this.providerId=jc.PROVIDER_ID,this.auth=ja(e)}verifyPhoneNumber(e,t){return Uc(this.auth,e,z(t))}static credential(e,t){return Qa._fromVerification(e,t)}static credentialFromResult(e){const t=e;return jc.credentialFromTaggedObject(t)}static credentialFromError(e){return jc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Qa._fromTokenResponse(t,n):null}}
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
function qc(e,t){return t?xa(t):(Fo(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */jc.PROVIDER_ID="phone",jc.PHONE_SIGN_IN_METHOD="phone";class Wc extends Ba{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ka(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ka(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ka(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hc(e){return xc(e.auth,new Wc(e),e.bypassAuthState)}function Vc(e){const{auth:t,user:n}=e;return Fo(n,t,"internal-error"),hc(n,new Wc(e),e.bypassAuthState)}async function Bc(e){const{auth:t,user:n}=e;return Fo(n,t,"internal-error"),dc(n,new Wc(e),e.bypassAuthState)}
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
 */class zc{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hc;case"linkViaPopup":case"linkViaRedirect":return Bc;case"reauthViaPopup":case"reauthViaRedirect":return Vc;default:Ao(this.auth,"internal-error")}}resolve(e){jo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jo(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const $c=new Bo(2e3,1e4);class Gc extends zc{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Gc.currentPopupAction&&Gc.currentPopupAction.cancel(),Gc.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Fo(e,this.auth,"internal-error"),e}async onExecution(){jo(1===this.filter.length,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Lo(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Lo(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gc.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Lo(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,$c.get())};e()}}Gc.currentPopupAction=null;
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
const Kc="pendingRedirect",Yc=new Map;class Jc extends zc{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Yc.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Zc(t),i=Xc(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Yc.set(this.auth._key(),e)}return this.bypassAuthState||Yc.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Qc(e,t){Yc.set(e._key(),t)}function Xc(e){return xa(e._redirectPersistence)}function Zc(e){return pa(Kc,e.config.apiKey,e.name)}
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
 */async function e_(e,t,n=!1){const i=ja(e),r=qc(i,t),s=new Jc(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}class t_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return i_(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!i_(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Lo(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(n_(e))}saveEventToCache(e){this.cachedEventUids.add(n_(e)),this.lastProcessedEventTime=Date.now()}}function n_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function i_({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const r_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,s_=/^https?/;async function o_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Jo(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(a_(e))return}catch(e){}Ao(e,"unauthorized-domain")}function a_(e){const t=qo(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!s_.test(n))return!1;if(r_.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const c_=new Bo(3e4,6e4);function __(){const e=Cc().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let l_=null;function d_(e){return l_=l_||function(e){return new Promise(((t,n)=>{var i,r,s;function o(){__(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{__(),n(Lo(e,"network-request-failed"))},timeout:c_.get()})}if(null===(r=null===(i=Cc().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Cc().gapi)||void 0===s?void 0:s.load)){const t=La("iframefcb");return Cc()[t]=()=>{gapi.load?o():n(Lo(e,"network-request-failed"))},Aa(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw l_=null,e}))}(e),l_}
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
 */const h_=new Bo(5e3,15e3),x_="__/auth/iframe",u_="emulator/auth/iframe",f_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},p_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b_(e){const t=e.config;Fo(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zo(t,u_):`https://${e.config.authDomain}/${x_}`,i={apiKey:t.apiKey,appName:e.name,v:Ae},r=p_.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${F(i).slice(1)}`}
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
const m_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class g_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function y_(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},m_),{width:i.toString(),height:r.toString(),top:s,left:o}),_=v().toLowerCase();n&&(a=va(_)?"_blank":n),ga(_)&&(t=t||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=v()){var t;return Ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(_)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",a),new g_(null);const d=window.open(t||"",a,l);Fo(d,e,"popup-blocked");try{d.focus()}catch(e){}return new g_(d)}const v_="__/auth/handler",w_="emulator/auth/handler",I_=encodeURIComponent("fac");async function T_(e,t,n,i,r,s){Fo(e.config.authDomain,e,"auth-domain-config-required"),Fo(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Ae,eventId:r};if(t instanceof ec){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",A(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof tc){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const e of Object.keys(a))void 0===a[e]&&delete a[e];const c=await e._getAppCheckToken(),_=c?`#${I_}=${encodeURIComponent(c)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${v_}`;return zo(e,w_)}
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
 */(e)}?${F(a).slice(1)}${_}`}const C_="webStorageSupport";const E_=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vc,this._completeRedirectFn=e_,this._overrideRedirectResult=Qc}async _openPopup(e,t,n,i){var r;jo(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return y_(e,await T_(e,t,n,qo(),i),Ic())}async _openRedirect(e,t,n,i){await this._originValidation(e);return function(e){Cc().location.href=e}(await T_(e,t,n,qo(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(jo(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await async function(e){const t=await d_(e),n=Cc().gapi;return Fo(n,e,"internal-error"),t.open({where:document.body,url:b_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:f_,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Lo(e,"network-request-failed"),s=Cc().setTimeout((()=>{i(r)}),h_.get());function o(){Cc().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}(e),n=new t_(e);return t.register("authEvent",(t=>{Fo(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(C_,{type:C_},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i[C_];void 0!==r&&t(!!r),Ao(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=o_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Sa()||ya()||Ea()}};var k_="@firebase/auth",S_="0.23.2";
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
class N_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Fo(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
const P_=g("authIdTokenMaxAge")||300;let R_=null;const O_=e=>async t=>{const n=t&&await t.getIdTokenResult(),i=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>P_)return;const r=null==n?void 0:n.token;R_!==r&&(R_=r,await fetch(e,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function A_(e=De()){const t=Pe(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(e,t){const n=Pe(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(D(n.getOptions(),null!=t?t:{}))return e;Ao(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:E_,persistence:[Mc,gc,vc]}),i=g("authTokenSyncURL");if(i){const e=O_(i);!function(e,t,n){z(e).beforeAuthStateChanged(t,n)}(n,e,(()=>e(n.currentUser))),function(e,t,n,i){z(e).onIdTokenChanged(t,n,i)}(n,(t=>e(t)))}const r=p("auth");return r&&Wa(n,`http://${r}`),n}var L_;L_="Browser",Ne(new $("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:s,authDomain:o}=n.options;Fo(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const a={apiKey:s,authDomain:o,clientPlatform:L_,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Na(L_)},c=new Ua(n,i,r,a);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(xa);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(c,t),c}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ne(new $("auth-internal",(e=>(e=>new N_(e))(ja(e.getProvider("auth").getImmediate()))),"PRIVATE").setInstantiationMode("EXPLICIT")),Me(k_,S_,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(L_)),Me(k_,S_,"esm2017");const D_=n(165),M_=n(831),F_=document.querySelector(".bubble"),U_=document.querySelector("#logo");function j_(){F_.style.visibility="hidden",F_.textContent="",U_.src="",U_.src=M_}function q_(e,t=3){j_(),U_.src=D_,F_.style.visibility="visible",F_.innerHTML=e,setTimeout((()=>{j_()}),1e3*t)}function W_(e,t=3){j_(),F_.style.visibility="visible",F_.textContent=e,setTimeout((()=>{j_()}),1e3*t)}const H_=Le(Ye);function V_(){let e=B_();e=e??{},e.updateConfig=null,z_(e)}function B_(){return JSON.parse(localStorage.getItem("state"))}function z_(e){localStorage.setItem("state",JSON.stringify(e))}function $_(){const e={...B_()};let t={...e?.todos};t=t??{};const n={2592696:{id:2592696,message:"Pay electric bill",date:"2021-03-30T02:05:02.587Z",category:null,completed:!1},12462012:{id:"12462012",message:" feed dog",date:"2021-03-30T02:04:30.913Z",category:"Chores",completed:!1},41152409:{id:41152409,message:"cheese",date:"2021-03-30T02:03:53.599Z",category:"Grocery",completed:!1},53541349:{id:53541349,message:"milk",date:"2021-03-30T02:03:53.599Z",category:"Grocery",completed:!1},95110512:{id:95110512,message:" dishes",date:"2021-03-30T02:04:20.509Z",category:"Chores",completed:!1},98802921:{id:"98802921",message:"fix Timmy's bicycle",date:"2021-03-30T02:12:28.203Z",category:null,completed:!1}};return 0===Object.keys(t).length?(document.querySelector("#todoList").style.opacity="0.5",n):t}function G_(e){const t={...B_()};let n={...t?.todos};if(n=n??{},0===Object.keys(n).length)return;let i=n[e.id];i={...i,...e},Object.assign(n,{[i.id]:i}),t.todos=n,z_(t)}function K_(){const e=A_().currentUser;if(e)try{W_("Saving...");return po(uo(Eo(H_),`users/${e.uid}`),{tasks:JSON.stringify(B_())})}catch(e){console.log(...function(e,...t){try{Y_().consoleLog(e,t)}catch(e){}return t}("2886179417_0",e))}return q_("PSSSST!\nRegister or Sign in to sync your tasks across devices! ",6)}function Y_(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcad5d2=_0x1c6c;function _0x12b9(){var _0x19e831=[':logPointId:','join','unshift','getOwnPropertyDescriptor','totalStrLength','negativeZero','send','coverage','_connectToHostNow','Map','_hasSetOnItsPath','_console_ninja','get','disabledLog','1696653033421','getOwnPropertyNames','pop','POSITIVE_INFINITY','message','onopen','1FtswoI','type','isArray','warn','NEGATIVE_INFINITY','bigint','_p_','_ws','split','_type','push','getOwnPropertySymbols','strLength','6894264XFUiaf','log','_processTreeNodeResult','_maxConnectAttemptCount','WebSocket','_setNodeLabel','_Symbol','path','timeStamp','[object\\x20Array]','console','_connecting','ws://','index','_keyStrRegExp','_connectAttemptCount','66563mjGyJi','onmessage','_isSet','bind','set','url','symbol','onclose','current','level','hrtime','create','length','isExpressionToEvaluate','enumerable','_treeNodePropertiesAfterFullValue','autoExpandPropertyCount','versions','disabledTrace','Symbol','_setNodeId','allStrLength','String','_getOwnPropertyDescriptor','stackTraceLimit','global','time','_isMap','_setNodeExpressionPath','_HTMLAllCollection','then','sort','edge','defineProperty','_addObjectProperty','getWebSocketClass','name','catch','toString','_cleanNode','_connected','_WebSocketClass','serialize','nan','https://tinyurl.com/37x8b79t','concat','_allowedToConnectOnSend','toLowerCase','cappedElements','_inNextEdge','_regExpToString','_addProperty','_webSocketErrorDocsLink','env','unknown','performance','_undefined','getPrototypeOf','nuxt','_p_length','_WebSocket','_numberRegExp','nodeModules','number','_setNodeExpandableState','168ogoyEi','autoExpandMaxDepth','props','setter','_setNodePermissions','ws/index.js','','_allowedToSend','_dateToString','_setNodeQueryPath','_isNegativeZero','[object\\x20BigInt]','_propertyName','_console_ninja_session','count','error','node','_addLoadNode','[object\\x20Date]','constructor','parent','gateway.docker.internal','location','','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Set','NEXT_RUNTIME','_isPrimitiveWrapperType','stack','test','[object\\x20Set]','[object\\x20Map]','value','_blacklistedProperty','port','cappedProps','next.js','includes','elapsed','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','process','function','trace','1069780bPjMJE','slice','capped','_addFunctionsNode','_property','unref','HTMLAllCollection','\\x20server','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','null','1500042kSwZYa','data','now','\\x20browser','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','_additionalMetadata','resolveGetters','close','method','_attemptToReconnectShortly','array','date','prototype','undefined','elements','indexOf',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Skynet-Global\",\"192.168.56.1\",\"192.168.137.1\",\"192.168.0.4\"],'sortProps','autoExpand','host','_inBrowser','valueOf','_isPrimitiveType','1654820ofrHlo','depth','Error','funcName','object','boolean','default','rootExpression','36eVrAMY','_isUndefined','stringify','reduceLimits','_sortProps','forEach','_reconnectTimeout','replace','3659840UAwsGX','webpack','2872143HYLacE','reload','substr','noFunctions','_hasSymbolPropertyOnItsPath','hits','root_exp_id','parse',\"c:\\\\Users\\\\clickwithclark\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.231\\\\node_modules\",'hostname','string','hasOwnProperty','_objectToString','timeEnd','expId','__es'+'Module','_getOwnPropertyNames','_isArray','_disposeWebsocket','_getOwnPropertySymbols','expressionsToEvaluate','autoExpandLimit','perf_hooks','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_hasMapOnItsPath','_capIfString','_socket','Number','dockerizedApp','_quotedRegExp','call'];_0x12b9=function(){return _0x19e831;};return _0x12b9();}(function(_0x1dceec,_0x472a96){var _0x46d447=_0x1c6c,_0x7f3037=_0x1dceec();while(!![]){try{var _0x1ff89a=-parseInt(_0x46d447(0x196))/0x1*(parseInt(_0x46d447(0x139))/0x2)+-parseInt(_0x46d447(0x163))/0x3+parseInt(_0x46d447(0x161))/0x4+-parseInt(_0x46d447(0x12f))/0x5+-parseInt(_0x46d447(0x1f4))/0x6*(-parseInt(_0x46d447(0x1b3))/0x7)+parseInt(_0x46d447(0x1a3))/0x8+-parseInt(_0x46d447(0x159))/0x9*(-parseInt(_0x46d447(0x151))/0xa);if(_0x1ff89a===_0x472a96)break;else _0x7f3037['push'](_0x7f3037['shift']());}catch(_0x1115bc){_0x7f3037['push'](_0x7f3037['shift']());}}}(_0x12b9,0xbf4cd));var j=Object[_0xcad5d2(0x1be)],H=Object[_0xcad5d2(0x1d4)],G=Object[_0xcad5d2(0x185)],ee=Object[_0xcad5d2(0x191)],te=Object[_0xcad5d2(0x1ec)],ne=Object['prototype'][_0xcad5d2(0x16e)],re=(_0x52e5c2,_0x2f7179,_0x379308,_0x398506)=>{var _0x36978b=_0xcad5d2;if(_0x2f7179&&typeof _0x2f7179==_0x36978b(0x155)||typeof _0x2f7179=='function'){for(let _0x1333b7 of ee(_0x2f7179))!ne[_0x36978b(0x181)](_0x52e5c2,_0x1333b7)&&_0x1333b7!==_0x379308&&H(_0x52e5c2,_0x1333b7,{'get':()=>_0x2f7179[_0x1333b7],'enumerable':!(_0x398506=G(_0x2f7179,_0x1333b7))||_0x398506[_0x36978b(0x1c1)]});}return _0x52e5c2;},x=(_0xd0d481,_0x5a9545,_0x58472d)=>(_0x58472d=_0xd0d481!=null?j(te(_0xd0d481)):{},re(_0x5a9545||!_0xd0d481||!_0xd0d481[_0xcad5d2(0x172)]?H(_0x58472d,_0xcad5d2(0x157),{'value':_0xd0d481,'enumerable':!0x0}):_0x58472d,_0xd0d481)),X=class{constructor(_0xf67ac2,_0x39905a,_0xdeb3c1,_0xbbe41c,_0x18b065){var _0x4753f9=_0xcad5d2;this[_0x4753f9(0x1cc)]=_0xf67ac2,this[_0x4753f9(0x14d)]=_0x39905a,this['port']=_0xdeb3c1,this[_0x4753f9(0x1f1)]=_0xbbe41c,this[_0x4753f9(0x17f)]=_0x18b065,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4753f9(0x1db)]=!0x1,this[_0x4753f9(0x1ae)]=!0x1,this[_0x4753f9(0x1e4)]=_0xf67ac2[_0x4753f9(0x12c)]?.['env']?.['NEXT_RUNTIME']===_0x4753f9(0x1d3),this[_0x4753f9(0x14e)]=!this[_0x4753f9(0x1cc)]['process']?.[_0x4753f9(0x1c4)]?.[_0x4753f9(0x204)]&&!this[_0x4753f9(0x1e4)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4753f9(0x1a6)]=0x14,this[_0x4753f9(0x1e7)]=_0x4753f9(0x1df),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x4753f9(0x17a))+this[_0x4753f9(0x1e7)];}async['getWebSocketClass'](){var _0x1351c1=_0xcad5d2;if(this[_0x1351c1(0x1dc)])return this['_WebSocketClass'];let _0x364031;if(this[_0x1351c1(0x14e)]||this[_0x1351c1(0x1e4)])_0x364031=this[_0x1351c1(0x1cc)][_0x1351c1(0x1a7)];else{if(this[_0x1351c1(0x1cc)][_0x1351c1(0x12c)]?.[_0x1351c1(0x1ef)])_0x364031=this[_0x1351c1(0x1cc)]['process']?.[_0x1351c1(0x1ef)];else try{let _0x124ebe=await import('path');_0x364031=(await import((await import(_0x1351c1(0x1b8)))['pathToFileURL'](_0x124ebe[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],_0x1351c1(0x1f9)))[_0x1351c1(0x1d9)]()))['default'];}catch{try{_0x364031=require(require(_0x1351c1(0x1aa))[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],'ws'));}catch{throw new Error(_0x1351c1(0x137));}}}return this[_0x1351c1(0x1dc)]=_0x364031,_0x364031;}['_connectToHostNow'](){var _0xe4b17f=_0xcad5d2;this['_connecting']||this[_0xe4b17f(0x1db)]||this[_0xe4b17f(0x1b2)]>=this[_0xe4b17f(0x1a6)]||(this[_0xe4b17f(0x1e1)]=!0x1,this[_0xe4b17f(0x1ae)]=!0x0,this[_0xe4b17f(0x1b2)]++,this['_ws']=new Promise((_0x22849b,_0x38a9cd)=>{var _0x415d02=_0xe4b17f;this[_0x415d02(0x1d6)]()['then'](_0x469e18=>{var _0x4d8716=_0x415d02;let _0x5fa263=new _0x469e18(_0x4d8716(0x1af)+(!this['_inBrowser']&&this[_0x4d8716(0x17f)]?_0x4d8716(0x209):this[_0x4d8716(0x14d)])+':'+this[_0x4d8716(0x125)]);_0x5fa263['onerror']=()=>{var _0x25600d=_0x4d8716;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5fa263),this[_0x25600d(0x143)](),_0x38a9cd(new Error(_0x25600d(0x13d)));},_0x5fa263[_0x4d8716(0x195)]=()=>{var _0x5576fe=_0x4d8716;this[_0x5576fe(0x14e)]||_0x5fa263['_socket']&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)]&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)](),_0x22849b(_0x5fa263);},_0x5fa263[_0x4d8716(0x1ba)]=()=>{var _0x1c4726=_0x4d8716;this[_0x1c4726(0x1e1)]=!0x0,this[_0x1c4726(0x175)](_0x5fa263),this[_0x1c4726(0x143)]();},_0x5fa263[_0x4d8716(0x1b4)]=_0x21adb4=>{var _0x55b71e=_0x4d8716;try{_0x21adb4&&_0x21adb4[_0x55b71e(0x13a)]&&this[_0x55b71e(0x14e)]&&JSON[_0x55b71e(0x16a)](_0x21adb4[_0x55b71e(0x13a)])[_0x55b71e(0x142)]===_0x55b71e(0x164)&&this[_0x55b71e(0x1cc)][_0x55b71e(0x20a)][_0x55b71e(0x164)]();}catch{}};})[_0x415d02(0x1d1)](_0x381826=>(this[_0x415d02(0x1db)]=!0x0,this['_connecting']=!0x1,this[_0x415d02(0x1e1)]=!0x1,this[_0x415d02(0x1fb)]=!0x0,this['_connectAttemptCount']=0x0,_0x381826))[_0x415d02(0x1d8)](_0x370b61=>(this[_0x415d02(0x1db)]=!0x1,this['_connecting']=!0x1,console[_0x415d02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x415d02(0x1e7)]),_0x38a9cd(new Error(_0x415d02(0x20c)+(_0x370b61&&_0x370b61[_0x415d02(0x194)])))));}));}['_disposeWebsocket'](_0x1ada9b){var _0x1e726d=_0xcad5d2;this[_0x1e726d(0x1db)]=!0x1,this[_0x1e726d(0x1ae)]=!0x1;try{_0x1ada9b['onclose']=null,_0x1ada9b['onerror']=null,_0x1ada9b[_0x1e726d(0x195)]=null;}catch{}try{_0x1ada9b['readyState']<0x2&&_0x1ada9b[_0x1e726d(0x141)]();}catch{}}['_attemptToReconnectShortly'](){var _0x3e4cc6=_0xcad5d2;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x3e4cc6(0x1a6)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0xea924d=_0x3e4cc6;this[_0xea924d(0x1db)]||this['_connecting']||(this[_0xea924d(0x18a)](),this[_0xea924d(0x19d)]?.['catch'](()=>this[_0xea924d(0x143)]()));},0x1f4),this[_0x3e4cc6(0x15f)][_0x3e4cc6(0x134)]&&this[_0x3e4cc6(0x15f)]['unref']());}async['send'](_0xce1d6){var _0xc52a3=_0xcad5d2;try{if(!this[_0xc52a3(0x1fb)])return;this[_0xc52a3(0x1e1)]&&this[_0xc52a3(0x18a)](),(await this[_0xc52a3(0x19d)])[_0xc52a3(0x188)](JSON[_0xc52a3(0x15b)](_0xce1d6));}catch(_0x51fc5b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x51fc5b&&_0x51fc5b[_0xc52a3(0x194)])),this[_0xc52a3(0x1fb)]=!0x1,this[_0xc52a3(0x143)]();}}};function _0x1c6c(_0x4e5f1a,_0xe7b3b5){var _0x12b9d6=_0x12b9();return _0x1c6c=function(_0x1c6ce7,_0x2c87be){_0x1c6ce7=_0x1c6ce7-0x11f;var _0x39be75=_0x12b9d6[_0x1c6ce7];return _0x39be75;},_0x1c6c(_0x4e5f1a,_0xe7b3b5);}function b(_0x2f099e,_0x303c3d,_0x1baa03,_0x2c0edb,_0x51ccfe,_0x4bfbe1){var _0x480dd3=_0xcad5d2;let _0x43d30f=_0x1baa03[_0x480dd3(0x19e)](',')['map'](_0xff04cc=>{var _0x102f02=_0x480dd3;try{_0x2f099e[_0x102f02(0x201)]||((_0x51ccfe===_0x102f02(0x127)||_0x51ccfe==='remix'||_0x51ccfe==='astro')&&(_0x51ccfe+=!_0x2f099e[_0x102f02(0x12c)]?.[_0x102f02(0x1c4)]?.[_0x102f02(0x204)]&&_0x2f099e['process']?.['env']?.[_0x102f02(0x20e)]!==_0x102f02(0x1d3)?_0x102f02(0x13c):_0x102f02(0x136)),_0x2f099e[_0x102f02(0x201)]={'id':+new Date(),'tool':_0x51ccfe});let _0x1b1659=new X(_0x2f099e,_0x303c3d,_0xff04cc,_0x2c0edb,_0x4bfbe1);return _0x1b1659[_0x102f02(0x188)][_0x102f02(0x1b6)](_0x1b1659);}catch(_0xcd874a){return console[_0x102f02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xcd874a&&_0xcd874a[_0x102f02(0x194)]),()=>{};}});return _0x2807c9=>_0x43d30f[_0x480dd3(0x15e)](_0x4f0788=>_0x4f0788(_0x2807c9));}function W(_0x102cde){var _0x2e7d06=_0xcad5d2;let _0x208e9d=function(_0x5a8746,_0x10e3ca){return _0x10e3ca-_0x5a8746;},_0x44de2f;if(_0x102cde['performance'])_0x44de2f=function(){var _0x298d92=_0x1c6c;return _0x102cde[_0x298d92(0x1ea)][_0x298d92(0x13b)]();};else{if(_0x102cde['process']&&_0x102cde['process'][_0x2e7d06(0x1bd)]&&_0x102cde[_0x2e7d06(0x12c)]?.[_0x2e7d06(0x1e8)]?.[_0x2e7d06(0x20e)]!==_0x2e7d06(0x1d3))_0x44de2f=function(){return _0x102cde['process']['hrtime']();},_0x208e9d=function(_0x117359,_0x58a9f2){return 0x3e8*(_0x58a9f2[0x0]-_0x117359[0x0])+(_0x58a9f2[0x1]-_0x117359[0x1])/0xf4240;};else try{let {performance:_0xfd60cc}=require(_0x2e7d06(0x179));_0x44de2f=function(){var _0x3343ed=_0x2e7d06;return _0xfd60cc[_0x3343ed(0x13b)]();};}catch{_0x44de2f=function(){return+new Date();};}}return{'elapsed':_0x208e9d,'timeStamp':_0x44de2f,'now':()=>Date[_0x2e7d06(0x13b)]()};}function J(_0x2b6bc0,_0x46ad11,_0xa84d0e){var _0x3d6cef=_0xcad5d2;if(_0x2b6bc0[_0x3d6cef(0x13e)]!==void 0x0)return _0x2b6bc0[_0x3d6cef(0x13e)];let _0x237ec4=_0x2b6bc0['process']?.[_0x3d6cef(0x1c4)]?.[_0x3d6cef(0x204)]||_0x2b6bc0[_0x3d6cef(0x12c)]?.[_0x3d6cef(0x1e8)]?.['NEXT_RUNTIME']===_0x3d6cef(0x1d3);return _0x237ec4&&_0xa84d0e===_0x3d6cef(0x1ed)?_0x2b6bc0[_0x3d6cef(0x13e)]=!0x1:_0x2b6bc0[_0x3d6cef(0x13e)]=_0x237ec4||!_0x46ad11||_0x2b6bc0[_0x3d6cef(0x20a)]?.['hostname']&&_0x46ad11[_0x3d6cef(0x128)](_0x2b6bc0[_0x3d6cef(0x20a)][_0x3d6cef(0x16c)]),_0x2b6bc0[_0x3d6cef(0x13e)];}function Y(_0x46482b,_0x57e6b2,_0x4c887a,_0x17fda6){var _0x293447=_0xcad5d2;_0x46482b=_0x46482b,_0x57e6b2=_0x57e6b2,_0x4c887a=_0x4c887a,_0x17fda6=_0x17fda6;let _0x1e581f=W(_0x46482b),_0x3407be=_0x1e581f[_0x293447(0x129)],_0x147949=_0x1e581f[_0x293447(0x1ab)];class _0x17520b{constructor(){var _0x1a8064=_0x293447;this[_0x1a8064(0x1b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1a8064(0x1f0)]=/^(0|[1-9][0-9]*)$/,this[_0x1a8064(0x180)]=/'([^\\\\']|\\\\')*'/,this[_0x1a8064(0x1eb)]=_0x46482b[_0x1a8064(0x147)],this['_HTMLAllCollection']=_0x46482b[_0x1a8064(0x135)],this[_0x1a8064(0x1ca)]=Object[_0x1a8064(0x185)],this['_getOwnPropertyNames']=Object[_0x1a8064(0x191)],this[_0x1a8064(0x1a9)]=_0x46482b[_0x1a8064(0x1c6)],this[_0x1a8064(0x1e5)]=RegExp['prototype'][_0x1a8064(0x1d9)],this['_dateToString']=Date[_0x1a8064(0x146)][_0x1a8064(0x1d9)];}[_0x293447(0x1dd)](_0x33f3af,_0x541f55,_0x535e8a,_0x5abbd7){var _0x89a98b=_0x293447,_0x4dc61f=this,_0x131512=_0x535e8a['autoExpand'];function _0xe5fc89(_0x31c971,_0x1051f9,_0x106ea8){var _0xa14823=_0x1c6c;_0x1051f9['type']=_0xa14823(0x1e9),_0x1051f9[_0xa14823(0x203)]=_0x31c971[_0xa14823(0x194)],_0x21fe89=_0x106ea8[_0xa14823(0x204)][_0xa14823(0x1bb)],_0x106ea8[_0xa14823(0x204)]['current']=_0x1051f9,_0x4dc61f['_treeNodePropertiesBeforeFullValue'](_0x1051f9,_0x106ea8);}try{_0x535e8a['level']++,_0x535e8a['autoExpand']&&_0x535e8a['autoExpandPreviousObjects'][_0x89a98b(0x1a0)](_0x541f55);var _0x40b035,_0x37207d,_0x4b1d9f,_0x1d0dc7,_0x237f23=[],_0x19fd43=[],_0x385bc2,_0x47a5fb=this[_0x89a98b(0x19f)](_0x541f55),_0x4746da=_0x47a5fb===_0x89a98b(0x144),_0x23ece8=!0x1,_0x9c79d5=_0x47a5fb===_0x89a98b(0x12d),_0x3eb391=this['_isPrimitiveType'](_0x47a5fb),_0x2de0c3=this[_0x89a98b(0x20f)](_0x47a5fb),_0x856d9b=_0x3eb391||_0x2de0c3,_0x5def3c={},_0x4112fb=0x0,_0x392aa4=!0x1,_0x21fe89,_0x47e1b9=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x535e8a[_0x89a98b(0x152)]){if(_0x4746da){if(_0x37207d=_0x541f55['length'],_0x37207d>_0x535e8a[_0x89a98b(0x148)]){for(_0x4b1d9f=0x0,_0x1d0dc7=_0x535e8a[_0x89a98b(0x148)],_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1e6)](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));_0x33f3af[_0x89a98b(0x1e3)]=!0x0;}else{for(_0x4b1d9f=0x0,_0x1d0dc7=_0x37207d,_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f['_addProperty'](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));}_0x535e8a['autoExpandPropertyCount']+=_0x19fd43[_0x89a98b(0x1bf)];}if(!(_0x47a5fb==='null'||_0x47a5fb==='undefined')&&!_0x3eb391&&_0x47a5fb!==_0x89a98b(0x1c9)&&_0x47a5fb!=='Buffer'&&_0x47a5fb!==_0x89a98b(0x19b)){var _0x2652cb=_0x5abbd7[_0x89a98b(0x1f6)]||_0x535e8a[_0x89a98b(0x1f6)];if(this[_0x89a98b(0x1b5)](_0x541f55)?(_0x40b035=0x0,_0x541f55[_0x89a98b(0x15e)](function(_0x2bfb85){var _0x56d7fe=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x56d7fe(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a[_0x56d7fe(0x1c0)]&&_0x535e8a[_0x56d7fe(0x14c)]&&_0x535e8a[_0x56d7fe(0x1c3)]>_0x535e8a['autoExpandLimit']){_0x392aa4=!0x0;return;}_0x19fd43[_0x56d7fe(0x1a0)](_0x4dc61f[_0x56d7fe(0x1e6)](_0x237f23,_0x541f55,_0x56d7fe(0x20d),_0x40b035++,_0x535e8a,function(_0x3d7054){return function(){return _0x3d7054;};}(_0x2bfb85)));})):this[_0x89a98b(0x1ce)](_0x541f55)&&_0x541f55[_0x89a98b(0x15e)](function(_0x2039af,_0x18c51b){var _0x2c5d76=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x2c5d76(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a['isExpressionToEvaluate']&&_0x535e8a[_0x2c5d76(0x14c)]&&_0x535e8a['autoExpandPropertyCount']>_0x535e8a[_0x2c5d76(0x178)]){_0x392aa4=!0x0;return;}var _0x36b8a8=_0x18c51b[_0x2c5d76(0x1d9)]();_0x36b8a8[_0x2c5d76(0x1bf)]>0x64&&(_0x36b8a8=_0x36b8a8[_0x2c5d76(0x130)](0x0,0x64)+'...'),_0x19fd43[_0x2c5d76(0x1a0)](_0x4dc61f[_0x2c5d76(0x1e6)](_0x237f23,_0x541f55,'Map',_0x36b8a8,_0x535e8a,function(_0x33390e){return function(){return _0x33390e;};}(_0x2039af)));}),!_0x23ece8){try{for(_0x385bc2 in _0x541f55)if(!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2))&&!this[_0x89a98b(0x124)](_0x541f55,_0x385bc2,_0x535e8a)){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}catch{}if(_0x5def3c[_0x89a98b(0x1ee)]=!0x0,_0x9c79d5&&(_0x5def3c['_p_name']=!0x0),!_0x392aa4){var _0x33c504=[][_0x89a98b(0x1e0)](this[_0x89a98b(0x173)](_0x541f55))[_0x89a98b(0x1e0)](this[_0x89a98b(0x176)](_0x541f55));for(_0x40b035=0x0,_0x37207d=_0x33c504[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)if(_0x385bc2=_0x33c504[_0x40b035],!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2[_0x89a98b(0x1d9)]()))&&!this['_blacklistedProperty'](_0x541f55,_0x385bc2,_0x535e8a)&&!_0x5def3c[_0x89a98b(0x19c)+_0x385bc2[_0x89a98b(0x1d9)]()]){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}}}}if(_0x33f3af[_0x89a98b(0x197)]=_0x47a5fb,_0x856d9b?(_0x33f3af[_0x89a98b(0x123)]=_0x541f55[_0x89a98b(0x14f)](),this[_0x89a98b(0x17c)](_0x47a5fb,_0x33f3af,_0x535e8a,_0x5abbd7)):_0x47a5fb===_0x89a98b(0x145)?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1fc)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x19b)?_0x33f3af['value']=_0x541f55['toString']():_0x47a5fb==='RegExp'?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1e5)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x1b9)&&this[_0x89a98b(0x1a9)]?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1a9)][_0x89a98b(0x146)][_0x89a98b(0x1d9)]['call'](_0x541f55):!_0x535e8a[_0x89a98b(0x152)]&&!(_0x47a5fb===_0x89a98b(0x138)||_0x47a5fb===_0x89a98b(0x147))&&(delete _0x33f3af['value'],_0x33f3af['capped']=!0x0),_0x392aa4&&(_0x33f3af[_0x89a98b(0x126)]=!0x0),_0x21fe89=_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)],_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)]=_0x33f3af,this[_0x89a98b(0x12a)](_0x33f3af,_0x535e8a),_0x19fd43[_0x89a98b(0x1bf)]){for(_0x40b035=0x0,_0x37207d=_0x19fd43[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)_0x19fd43[_0x40b035](_0x40b035);}_0x237f23[_0x89a98b(0x1bf)]&&(_0x33f3af[_0x89a98b(0x1f6)]=_0x237f23);}catch(_0x332a80){_0xe5fc89(_0x332a80,_0x33f3af,_0x535e8a);}return this[_0x89a98b(0x13f)](_0x541f55,_0x33f3af),this['_treeNodePropertiesAfterFullValue'](_0x33f3af,_0x535e8a),_0x535e8a[_0x89a98b(0x204)]['current']=_0x21fe89,_0x535e8a[_0x89a98b(0x1bc)]--,_0x535e8a[_0x89a98b(0x14c)]=_0x131512,_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x12b)][_0x89a98b(0x192)](),_0x33f3af;}[_0x293447(0x176)](_0xc2da79){var _0x30bba4=_0x293447;return Object[_0x30bba4(0x1a1)]?Object[_0x30bba4(0x1a1)](_0xc2da79):[];}[_0x293447(0x1b5)](_0x1d60a9){var _0x48facd=_0x293447;return!!(_0x1d60a9&&_0x46482b[_0x48facd(0x20d)]&&this['_objectToString'](_0x1d60a9)===_0x48facd(0x121)&&_0x1d60a9['forEach']);}[_0x293447(0x124)](_0x34f203,_0x464c54,_0x34f808){var _0x336088=_0x293447;return _0x34f808[_0x336088(0x166)]?typeof _0x34f203[_0x464c54]==_0x336088(0x12d):!0x1;}['_type'](_0x485e7d){var _0x5ba655=_0x293447,_0x28ac8c='';return _0x28ac8c=typeof _0x485e7d,_0x28ac8c===_0x5ba655(0x155)?this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ac)?_0x28ac8c=_0x5ba655(0x144):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x206)?_0x28ac8c=_0x5ba655(0x145):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ff)?_0x28ac8c=_0x5ba655(0x19b):_0x485e7d===null?_0x28ac8c='null':_0x485e7d['constructor']&&(_0x28ac8c=_0x485e7d[_0x5ba655(0x207)][_0x5ba655(0x1d7)]||_0x28ac8c):_0x28ac8c===_0x5ba655(0x147)&&this[_0x5ba655(0x1d0)]&&_0x485e7d instanceof this[_0x5ba655(0x1d0)]&&(_0x28ac8c=_0x5ba655(0x135)),_0x28ac8c;}['_objectToString'](_0x470728){var _0x3feed7=_0x293447;return Object[_0x3feed7(0x146)][_0x3feed7(0x1d9)][_0x3feed7(0x181)](_0x470728);}[_0x293447(0x150)](_0x16bd2f){var _0x42f834=_0x293447;return _0x16bd2f===_0x42f834(0x156)||_0x16bd2f===_0x42f834(0x16d)||_0x16bd2f===_0x42f834(0x1f2);}[_0x293447(0x20f)](_0x1ee66b){var _0x17537c=_0x293447;return _0x1ee66b==='Boolean'||_0x1ee66b===_0x17537c(0x1c9)||_0x1ee66b==='Number';}[_0x293447(0x1e6)](_0x557084,_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9){var _0x51915e=this;return function(_0x150684){var _0xcc84a=_0x1c6c,_0x35daea=_0x1f5832['node']['current'],_0x4c332f=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)],_0x2a27c1=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)];_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x35daea,_0x1f5832[_0xcc84a(0x204)]['index']=typeof _0x2114e0==_0xcc84a(0x1f2)?_0x2114e0:_0x150684,_0x557084[_0xcc84a(0x1a0)](_0x51915e[_0xcc84a(0x133)](_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9)),_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x2a27c1,_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)]=_0x4c332f;};}[_0x293447(0x1d5)](_0x192f6e,_0x355a0b,_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5){var _0x547e59=_0x293447,_0x1c109d=this;return _0x355a0b[_0x547e59(0x19c)+_0x5bdced[_0x547e59(0x1d9)]()]=!0x0,function(_0x52a5b4){var _0x5657c0=_0x547e59,_0x45bbe1=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1bb)],_0x45577f=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1b0)],_0x3d53c2=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)];_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x45bbe1,_0x2947fa['node'][_0x5657c0(0x1b0)]=_0x52a5b4,_0x192f6e[_0x5657c0(0x1a0)](_0x1c109d[_0x5657c0(0x133)](_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5)),_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x3d53c2,_0x2947fa[_0x5657c0(0x204)]['index']=_0x45577f;};}['_property'](_0x3dde9b,_0x45c585,_0xf7c324,_0x28ae42,_0x91c8db){var _0x448894=_0x293447,_0x3b8c7d=this;_0x91c8db||(_0x91c8db=function(_0x1d56b8,_0x552056){return _0x1d56b8[_0x552056];});var _0x542036=_0xf7c324[_0x448894(0x1d9)](),_0x499dbf=_0x28ae42['expressionsToEvaluate']||{},_0x99faac=_0x28ae42[_0x448894(0x152)],_0x220b83=_0x28ae42[_0x448894(0x1c0)];try{var _0x33c50a=this[_0x448894(0x1ce)](_0x3dde9b),_0x5cf05a=_0x542036;_0x33c50a&&_0x5cf05a[0x0]==='\\x27'&&(_0x5cf05a=_0x5cf05a[_0x448894(0x165)](0x1,_0x5cf05a[_0x448894(0x1bf)]-0x2));var _0x3e746c=_0x28ae42['expressionsToEvaluate']=_0x499dbf['_p_'+_0x5cf05a];_0x3e746c&&(_0x28ae42[_0x448894(0x152)]=_0x28ae42[_0x448894(0x152)]+0x1),_0x28ae42[_0x448894(0x1c0)]=!!_0x3e746c;var _0x39cd35=typeof _0xf7c324==_0x448894(0x1b9),_0x18fe60={'name':_0x39cd35||_0x33c50a?_0x542036:this['_propertyName'](_0x542036)};if(_0x39cd35&&(_0x18fe60[_0x448894(0x1b9)]=!0x0),!(_0x45c585===_0x448894(0x144)||_0x45c585===_0x448894(0x153))){var _0x3c4558=this[_0x448894(0x1ca)](_0x3dde9b,_0xf7c324);if(_0x3c4558&&(_0x3c4558[_0x448894(0x1b7)]&&(_0x18fe60[_0x448894(0x1f7)]=!0x0),_0x3c4558[_0x448894(0x18e)]&&!_0x3e746c&&!_0x28ae42[_0x448894(0x140)]))return _0x18fe60['getter']=!0x0,this['_processTreeNodeResult'](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x43c9ad;try{_0x43c9ad=_0x91c8db(_0x3dde9b,_0xf7c324);}catch(_0x563553){return _0x18fe60={'name':_0x542036,'type':'unknown','error':_0x563553[_0x448894(0x194)]},this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x42622f=this['_type'](_0x43c9ad),_0x301a1d=this['_isPrimitiveType'](_0x42622f);if(_0x18fe60[_0x448894(0x197)]=_0x42622f,_0x301a1d)this['_processTreeNodeResult'](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x176368=_0x448894;_0x18fe60[_0x176368(0x123)]=_0x43c9ad[_0x176368(0x14f)](),!_0x3e746c&&_0x3b8c7d[_0x176368(0x17c)](_0x42622f,_0x18fe60,_0x28ae42,{});});else{var _0x39a0ba=_0x28ae42[_0x448894(0x14c)]&&_0x28ae42[_0x448894(0x1bc)]<_0x28ae42[_0x448894(0x1f5)]&&_0x28ae42[_0x448894(0x12b)][_0x448894(0x149)](_0x43c9ad)<0x0&&_0x42622f!==_0x448894(0x12d)&&_0x28ae42[_0x448894(0x1c3)]<_0x28ae42[_0x448894(0x178)];_0x39a0ba||_0x28ae42[_0x448894(0x1bc)]<_0x99faac||_0x3e746c?(this[_0x448894(0x1dd)](_0x18fe60,_0x43c9ad,_0x28ae42,_0x3e746c||{}),this['_additionalMetadata'](_0x43c9ad,_0x18fe60)):this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x15a072=_0x448894;_0x42622f===_0x15a072(0x138)||_0x42622f===_0x15a072(0x147)||(delete _0x18fe60[_0x15a072(0x123)],_0x18fe60['capped']=!0x0);});}return _0x18fe60;}finally{_0x28ae42[_0x448894(0x177)]=_0x499dbf,_0x28ae42['depth']=_0x99faac,_0x28ae42['isExpressionToEvaluate']=_0x220b83;}}[_0x293447(0x17c)](_0x292d65,_0x2e866c,_0x3e54e2,_0x54b8ae){var _0x433b68=_0x293447,_0xe467f8=_0x54b8ae[_0x433b68(0x1a2)]||_0x3e54e2[_0x433b68(0x1a2)];if((_0x292d65===_0x433b68(0x16d)||_0x292d65===_0x433b68(0x1c9))&&_0x2e866c['value']){let _0x4b6f9d=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x1bf)];_0x3e54e2[_0x433b68(0x1c8)]+=_0x4b6f9d,_0x3e54e2[_0x433b68(0x1c8)]>_0x3e54e2[_0x433b68(0x186)]?(_0x2e866c[_0x433b68(0x131)]='',delete _0x2e866c['value']):_0x4b6f9d>_0xe467f8&&(_0x2e866c[_0x433b68(0x131)]=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x165)](0x0,_0xe467f8),delete _0x2e866c[_0x433b68(0x123)]);}}[_0x293447(0x1ce)](_0x41133b){var _0x4e4a01=_0x293447;return!!(_0x41133b&&_0x46482b['Map']&&this['_objectToString'](_0x41133b)===_0x4e4a01(0x122)&&_0x41133b[_0x4e4a01(0x15e)]);}[_0x293447(0x200)](_0x11d20f){var _0x23db08=_0x293447;if(_0x11d20f['match'](/^\\d+$/))return _0x11d20f;var _0x5adfc1;try{_0x5adfc1=JSON['stringify'](''+_0x11d20f);}catch{_0x5adfc1='\\x22'+this[_0x23db08(0x16f)](_0x11d20f)+'\\x22';}return _0x5adfc1['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5adfc1=_0x5adfc1['substr'](0x1,_0x5adfc1[_0x23db08(0x1bf)]-0x2):_0x5adfc1=_0x5adfc1[_0x23db08(0x160)](/'/g,'\\x5c\\x27')[_0x23db08(0x160)](/\\\\\"/g,'\\x22')[_0x23db08(0x160)](/(^\"|\"$)/g,'\\x27'),_0x5adfc1;}[_0x293447(0x1a5)](_0x1d7671,_0x498e8f,_0x5d4ebb,_0x2a25f5){var _0x17280d=_0x293447;this[_0x17280d(0x12a)](_0x1d7671,_0x498e8f),_0x2a25f5&&_0x2a25f5(),this['_additionalMetadata'](_0x5d4ebb,_0x1d7671),this[_0x17280d(0x1c2)](_0x1d7671,_0x498e8f);}[_0x293447(0x12a)](_0x31a115,_0x24b39a){var _0x31f20d=_0x293447;this[_0x31f20d(0x1c7)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1fd)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1cf)](_0x31a115,_0x24b39a),this['_setNodePermissions'](_0x31a115,_0x24b39a);}[_0x293447(0x1c7)](_0x47f680,_0x21bac2){}['_setNodeQueryPath'](_0x987612,_0x3a623b){}[_0x293447(0x1a8)](_0x3b02a4,_0x17ac04){}[_0x293447(0x15a)](_0x1a1ba3){var _0x13d424=_0x293447;return _0x1a1ba3===this[_0x13d424(0x1eb)];}[_0x293447(0x1c2)](_0x4b2b5b,_0x210fca){var _0x2a5047=_0x293447;this[_0x2a5047(0x1a8)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1f3)](_0x4b2b5b),_0x210fca['sortProps']&&this[_0x2a5047(0x15d)](_0x4b2b5b),this[_0x2a5047(0x132)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x205)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1da)](_0x4b2b5b);}[_0x293447(0x13f)](_0x20792e,_0x1d1cce){var _0x581b38=_0x293447;let _0x4b47bf;try{_0x46482b[_0x581b38(0x1ad)]&&(_0x4b47bf=_0x46482b['console']['error'],_0x46482b[_0x581b38(0x1ad)][_0x581b38(0x203)]=function(){}),_0x20792e&&typeof _0x20792e[_0x581b38(0x1bf)]==_0x581b38(0x1f2)&&(_0x1d1cce[_0x581b38(0x1bf)]=_0x20792e[_0x581b38(0x1bf)]);}catch{}finally{_0x4b47bf&&(_0x46482b['console'][_0x581b38(0x203)]=_0x4b47bf);}if(_0x1d1cce[_0x581b38(0x197)]===_0x581b38(0x1f2)||_0x1d1cce['type']===_0x581b38(0x17e)){if(isNaN(_0x1d1cce['value']))_0x1d1cce[_0x581b38(0x1de)]=!0x0,delete _0x1d1cce[_0x581b38(0x123)];else switch(_0x1d1cce[_0x581b38(0x123)]){case Number[_0x581b38(0x193)]:_0x1d1cce['positiveInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case Number[_0x581b38(0x19a)]:_0x1d1cce['negativeInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case 0x0:this[_0x581b38(0x1fe)](_0x1d1cce[_0x581b38(0x123)])&&(_0x1d1cce[_0x581b38(0x187)]=!0x0);break;}}else _0x1d1cce[_0x581b38(0x197)]==='function'&&typeof _0x20792e[_0x581b38(0x1d7)]==_0x581b38(0x16d)&&_0x20792e[_0x581b38(0x1d7)]&&_0x1d1cce[_0x581b38(0x1d7)]&&_0x20792e['name']!==_0x1d1cce['name']&&(_0x1d1cce[_0x581b38(0x154)]=_0x20792e[_0x581b38(0x1d7)]);}['_isNegativeZero'](_0x138f02){var _0x295204=_0x293447;return 0x1/_0x138f02===Number[_0x295204(0x19a)];}[_0x293447(0x15d)](_0x3c496e){var _0x3d54d6=_0x293447;!_0x3c496e[_0x3d54d6(0x1f6)]||!_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1bf)]||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x144)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x18b)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x20d)||_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1d2)](function(_0xd835fa,_0x3acc3e){var _0x1cb500=_0x3d54d6,_0x5c1e0b=_0xd835fa['name'][_0x1cb500(0x1e2)](),_0x3a5c54=_0x3acc3e[_0x1cb500(0x1d7)][_0x1cb500(0x1e2)]();return _0x5c1e0b<_0x3a5c54?-0x1:_0x5c1e0b>_0x3a5c54?0x1:0x0;});}['_addFunctionsNode'](_0x446f2b,_0x1b11ba){var _0x366039=_0x293447;if(!(_0x1b11ba[_0x366039(0x166)]||!_0x446f2b[_0x366039(0x1f6)]||!_0x446f2b[_0x366039(0x1f6)]['length'])){for(var _0x10e1ba=[],_0x13339e=[],_0x124074=0x0,_0x2b5050=_0x446f2b[_0x366039(0x1f6)]['length'];_0x124074<_0x2b5050;_0x124074++){var _0x3cf9a2=_0x446f2b[_0x366039(0x1f6)][_0x124074];_0x3cf9a2['type']===_0x366039(0x12d)?_0x10e1ba[_0x366039(0x1a0)](_0x3cf9a2):_0x13339e[_0x366039(0x1a0)](_0x3cf9a2);}if(!(!_0x13339e[_0x366039(0x1bf)]||_0x10e1ba[_0x366039(0x1bf)]<=0x1)){_0x446f2b[_0x366039(0x1f6)]=_0x13339e;var _0x549186={'functionsNode':!0x0,'props':_0x10e1ba};this[_0x366039(0x1c7)](_0x549186,_0x1b11ba),this['_setNodeLabel'](_0x549186,_0x1b11ba),this[_0x366039(0x1f3)](_0x549186),this[_0x366039(0x1f8)](_0x549186,_0x1b11ba),_0x549186['id']+='\\x20f',_0x446f2b[_0x366039(0x1f6)][_0x366039(0x184)](_0x549186);}}}[_0x293447(0x205)](_0x4c40b3,_0x1ff381){}[_0x293447(0x1f3)](_0x117591){}[_0x293447(0x174)](_0x51f5ce){var _0x2c42f0=_0x293447;return Array[_0x2c42f0(0x198)](_0x51f5ce)||typeof _0x51f5ce==_0x2c42f0(0x155)&&this[_0x2c42f0(0x16f)](_0x51f5ce)==='[object\\x20Array]';}[_0x293447(0x1f8)](_0x392cbb,_0x281927){}[_0x293447(0x1da)](_0x4c8651){var _0x165202=_0x293447;delete _0x4c8651[_0x165202(0x167)],delete _0x4c8651[_0x165202(0x18c)],delete _0x4c8651[_0x165202(0x17b)];}[_0x293447(0x1cf)](_0x513945,_0x3b49c2){}}let _0x5b4cef=new _0x17520b(),_0x54ed19={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cc6fd={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51276c(_0x56a223,_0x4d7393,_0x37d4ff,_0x448b33,_0x3bb7c4,_0x4d919b){var _0x371f52=_0x293447;let _0x26f3f4,_0x16ae89;try{_0x16ae89=_0x147949(),_0x26f3f4=_0x4c887a[_0x4d7393],!_0x26f3f4||_0x16ae89-_0x26f3f4['ts']>0x1f4&&_0x26f3f4['count']&&_0x26f3f4['time']/_0x26f3f4['count']<0x64?(_0x4c887a[_0x4d7393]=_0x26f3f4={'count':0x0,'time':0x0,'ts':_0x16ae89},_0x4c887a[_0x371f52(0x168)]={}):_0x16ae89-_0x4c887a[_0x371f52(0x168)]['ts']>0x32&&_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]&&_0x4c887a[_0x371f52(0x168)]['time']/_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]<0x64&&(_0x4c887a[_0x371f52(0x168)]={});let _0x1ec019=[],_0x2bed04=_0x26f3f4[_0x371f52(0x15c)]||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]?_0x4cc6fd:_0x54ed19,_0x2002fe=_0x24b007=>{var _0xf5206a=_0x371f52;let _0x18426c={};return _0x18426c[_0xf5206a(0x1f6)]=_0x24b007[_0xf5206a(0x1f6)],_0x18426c['elements']=_0x24b007[_0xf5206a(0x148)],_0x18426c[_0xf5206a(0x1a2)]=_0x24b007[_0xf5206a(0x1a2)],_0x18426c[_0xf5206a(0x186)]=_0x24b007[_0xf5206a(0x186)],_0x18426c[_0xf5206a(0x178)]=_0x24b007[_0xf5206a(0x178)],_0x18426c[_0xf5206a(0x1f5)]=_0x24b007[_0xf5206a(0x1f5)],_0x18426c[_0xf5206a(0x14b)]=!0x1,_0x18426c[_0xf5206a(0x166)]=!_0x57e6b2,_0x18426c[_0xf5206a(0x152)]=0x1,_0x18426c[_0xf5206a(0x1bc)]=0x0,_0x18426c[_0xf5206a(0x171)]=_0xf5206a(0x169),_0x18426c[_0xf5206a(0x158)]='root_exp',_0x18426c['autoExpand']=!0x0,_0x18426c[_0xf5206a(0x12b)]=[],_0x18426c[_0xf5206a(0x1c3)]=0x0,_0x18426c[_0xf5206a(0x140)]=!0x0,_0x18426c[_0xf5206a(0x1c8)]=0x0,_0x18426c[_0xf5206a(0x204)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x18426c;};for(var _0x131ddb=0x0;_0x131ddb<_0x3bb7c4[_0x371f52(0x1bf)];_0x131ddb++)_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'timeNode':_0x56a223===_0x371f52(0x1cd)||void 0x0},_0x3bb7c4[_0x131ddb],_0x2002fe(_0x2bed04),{}));if(_0x56a223===_0x371f52(0x12e)){let _0x3a6f25=Error['stackTraceLimit'];try{Error[_0x371f52(0x1cb)]=0x1/0x0,_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'stackNode':!0x0},new Error()[_0x371f52(0x11f)],_0x2002fe(_0x2bed04),{'strLength':0x1/0x0}));}finally{Error[_0x371f52(0x1cb)]=_0x3a6f25;}}return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':_0x1ec019,'id':_0x4d7393,'context':_0x4d919b}]};}catch(_0x6fdb2){return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':[{'type':_0x371f52(0x1e9),'error':_0x6fdb2&&_0x6fdb2[_0x371f52(0x194)]}],'id':_0x4d7393,'context':_0x4d919b}]};}finally{try{if(_0x26f3f4&&_0x16ae89){let _0x46ed87=_0x147949();_0x26f3f4['count']++,_0x26f3f4['time']+=_0x3407be(_0x16ae89,_0x46ed87),_0x26f3f4['ts']=_0x46ed87,_0x4c887a[_0x371f52(0x168)]['count']++,_0x4c887a['hits'][_0x371f52(0x1cd)]+=_0x3407be(_0x16ae89,_0x46ed87),_0x4c887a['hits']['ts']=_0x46ed87,(_0x26f3f4[_0x371f52(0x202)]>0x32||_0x26f3f4[_0x371f52(0x1cd)]>0x64)&&(_0x26f3f4[_0x371f52(0x15c)]=!0x0),(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]>0x3e8||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x1cd)]>0x12c)&&(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]=!0x0);}}catch{}}}return _0x51276c;}((_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x5ca465,_0x5c8d8e,_0x3928e8,_0x5a585c,_0x3f3d25)=>{var _0x4934aa=_0xcad5d2;if(_0x286e60[_0x4934aa(0x18d)])return _0x286e60[_0x4934aa(0x18d)];if(!J(_0x286e60,_0x3928e8,_0x3f48b2))return _0x286e60[_0x4934aa(0x18d)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x286e60[_0x4934aa(0x18d)];let _0x425c22=W(_0x286e60),_0x408ec9=_0x425c22[_0x4934aa(0x129)],_0x4f57cc=_0x425c22[_0x4934aa(0x1ab)],_0x587aeb=_0x425c22[_0x4934aa(0x13b)],_0x4823a2={'hits':{},'ts':{}},_0x1b72ac=Y(_0x286e60,_0x5a585c,_0x4823a2,_0x5ca465),_0x1b1e6b=_0x253605=>{_0x4823a2['ts'][_0x253605]=_0x4f57cc();},_0x57c59a=(_0x599542,_0x1e2fab)=>{let _0x12e671=_0x4823a2['ts'][_0x1e2fab];if(delete _0x4823a2['ts'][_0x1e2fab],_0x12e671){let _0x40c3fd=_0x408ec9(_0x12e671,_0x4f57cc());_0x44510b(_0x1b72ac('time',_0x599542,_0x587aeb(),_0x5731f6,[_0x40c3fd],_0x1e2fab));}},_0x35091e=_0x31d627=>_0x39550d=>{var _0xc1d5f6=_0x4934aa;try{_0x1b1e6b(_0x39550d),_0x31d627(_0x39550d);}finally{_0x286e60[_0xc1d5f6(0x1ad)][_0xc1d5f6(0x1cd)]=_0x31d627;}},_0x6a42e3=_0x30aeda=>_0x4e197f=>{var _0x1c5b5e=_0x4934aa;try{let [_0x1025c3,_0x2db8a6]=_0x4e197f[_0x1c5b5e(0x19e)](_0x1c5b5e(0x182));_0x57c59a(_0x2db8a6,_0x1025c3),_0x30aeda(_0x1025c3);}finally{_0x286e60[_0x1c5b5e(0x1ad)][_0x1c5b5e(0x170)]=_0x30aeda;}};_0x286e60[_0x4934aa(0x18d)]={'consoleLog':(_0x59d10c,_0xdbe705)=>{var _0x42f196=_0x4934aa;_0x286e60['console'][_0x42f196(0x1a4)][_0x42f196(0x1d7)]!==_0x42f196(0x18f)&&_0x44510b(_0x1b72ac('log',_0x59d10c,_0x587aeb(),_0x5731f6,_0xdbe705));},'consoleTrace':(_0x5ae885,_0x2c92c5)=>{var _0x3706a6=_0x4934aa;_0x286e60[_0x3706a6(0x1ad)][_0x3706a6(0x1a4)][_0x3706a6(0x1d7)]!==_0x3706a6(0x1c5)&&_0x44510b(_0x1b72ac('trace',_0x5ae885,_0x587aeb(),_0x5731f6,_0x2c92c5));},'consoleTime':()=>{var _0x169253=_0x4934aa;_0x286e60[_0x169253(0x1ad)]['time']=_0x35091e(_0x286e60[_0x169253(0x1ad)][_0x169253(0x1cd)]);},'consoleTimeEnd':()=>{var _0x218684=_0x4934aa;_0x286e60[_0x218684(0x1ad)][_0x218684(0x170)]=_0x6a42e3(_0x286e60['console']['timeEnd']);},'autoLog':(_0x2d8fba,_0x2f3a42)=>{var _0x5b8014=_0x4934aa;_0x44510b(_0x1b72ac(_0x5b8014(0x1a4),_0x2f3a42,_0x587aeb(),_0x5731f6,[_0x2d8fba]));},'autoLogMany':(_0x15bced,_0xb0778)=>{var _0x54901e=_0x4934aa;_0x44510b(_0x1b72ac(_0x54901e(0x1a4),_0x15bced,_0x587aeb(),_0x5731f6,_0xb0778));},'autoTrace':(_0x31f390,_0x13ce3a)=>{var _0x49313e=_0x4934aa;_0x44510b(_0x1b72ac(_0x49313e(0x12e),_0x13ce3a,_0x587aeb(),_0x5731f6,[_0x31f390]));},'autoTraceMany':(_0x172d93,_0x4bc431)=>{var _0x3375f5=_0x4934aa;_0x44510b(_0x1b72ac(_0x3375f5(0x12e),_0x172d93,_0x587aeb(),_0x5731f6,_0x4bc431));},'autoTime':(_0x4eb614,_0xcaed47,_0x545aa6)=>{_0x1b1e6b(_0x545aa6);},'autoTimeEnd':(_0x4ff496,_0x55180c,_0x50a20f)=>{_0x57c59a(_0x55180c,_0x50a20f);},'coverage':_0x5d797e=>{var _0x2ead12=_0x4934aa;_0x44510b({'method':_0x2ead12(0x189),'version':_0x5ca465,'args':[{'id':_0x5d797e}]});}};let _0x44510b=b(_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x3f3d25),_0x5731f6=_0x286e60[_0x4934aa(0x201)];return _0x286e60[_0x4934aa(0x18d)];})(globalThis,'127.0.0.1','50425',_0xcad5d2(0x16b),_0xcad5d2(0x162),'1.0.0',_0xcad5d2(0x190),_0xcad5d2(0x14a),_0xcad5d2(0x20b),_0xcad5d2(0x1fa));")}catch(e){}}const J_=document.querySelector("#todoList");function Q_(e){const t=document.createElement("li");t.draggable="true";const n=document.createElement("span"),i=document.createElement("i"),r=document.createElement("span"),s=document.createElement("i"),o=document.createElement("span"),a=document.createElement("i"),c=document.createElement("span");n.appendChild(i),r.className="grip",o.className="edit",n.className="checkmark",r.appendChild(s),o.appendChild(a),a.className="fas fa-edit",s.className="fas fa-arrows-alt-v",i.className="far fa-check-square",c.className="main-message",t.appendChild(c),t.dataset.id=e.id,c.innerText=e.category?`[${e.category}] ${e.message}`:`${e.message}`,e.completed&&(c.classList.add("completed"),n.classList.add("show-checkmark")),t.insertAdjacentElement("afterbegin",n),t.insertAdjacentElement("beforeend",o),t.insertAdjacentElement("beforeend",r),J_.append(t)}const X_=function(){const e=[...document.querySelectorAll("li")],t=[...document.querySelectorAll("[data-draggable-container]")];e.forEach((e=>{e.addEventListener("dragstart",(()=>{e.classList.add("dragging")})),e.addEventListener("dragend",(()=>{document.querySelector("#todoList").style.cursor="default",e.classList.remove("dragging"),function(){const e=[...document.querySelectorAll("li")],t=[];e.forEach((e=>{t.push(+e.dataset.id)}));const n=B_();t.length>0&&(n.order=t,z_(n))}()}))})),t.forEach((e=>{e.addEventListener("dragover",(t=>{t.preventDefault();const n=function(e,t){return[...e.querySelectorAll('[draggable="true"]:not(.dragging)')].reduce(((e,n)=>{const i=n.getBoundingClientRect(),r=t-i.top-i.height/2;return r<0&&r>e.offset?{offset:r,element:n}:e}),{offset:Number.NEGATIVE_INFINITY}).element}(e,t.clientY),i=document.querySelector(".dragging");i.opacity="0.5",null!=n?e.insertBefore(i,n):e.appendChild(i)}))}))};function Z_(){const e=document.querySelector("#todoList");e.innerHTML="";const t=$_(),n=B_()?.order??[];try{if(0===n.length)return Object.keys(t).forEach((e=>{Q_(t[e])})),void X_();n.forEach((e=>{Q_(t[+e])})),e.style.opacity="1",X_(),j_(),function(){const e=B_()?.todos;if(!e)return;const t=document.querySelector("#groups");let n=[];Object.keys(e).forEach((t=>{null!==e[t].category&&n.push(`(${e[t].category})`)})),n=[...new Set(n)],t.replaceChildren();const i=document.createElement("option");i.value="(    )",t.append(i),n.forEach((e=>{const n=document.createElement("option");n.value=e,t.append(n)}))}()}catch(e){console.error(e)}n.length>=4?document.querySelector("#todoList").style.overflowY="scroll":document.querySelector("#todoList").style.overflowY="hidden"}function el(e){return e[0].toUpperCase()+e.slice(1)}function tl(e){let t=null,n=e;if(-1!==e.indexOf("("))try{t=e.match(/(\(.*?\))/).pop(),n=e.replace(t,"").trim(),t=t.replace("(","").replace(")","").trim(),t=el(t)}catch(e){e.message=" Invalid format trying to create a category\n\nGood Example: (Category) task, (Category) other task \n            \nor \n            \n(Category): task, other task, . . .  ",q_(e.message,6)}try{if(0===n.length)throw new Error(' Task left blank during multi-entry mode\n      Bad Example: task1<span class="bad">, ,</span>task2\n\n      Good Example: task1<span class="good">,</span>task2\n      ');n=el(n);return{id:Math.floor(1e8*Math.random()),message:n,date:new Date,category:t,completed:!1}}catch(e){console.error(),q_(e,12)}}function nl(e){const t=tl(e);try{if(t)return function(e){const t={...B_()};let n={...t?.todos};n=n??{},0===Object.keys(n).length&&(document.querySelector("#todoList").style.opacity="1"),Object.assign(n,{[e.id]:e}),t.order=t?.order??[],t.order=[e.id,...t.order],t.todos=n,z_(t)}(t),Z_()}catch(e){console.error(e),q_(e.message)}}function il(e){const t=e.split(",");try{if(t.length>30)throw new Error(`Woah ! Woah !. . . that's too many at one time!, I'll only accept <span class="good">30</span> ,\n      you tried to enter <span class="bad">${t.length}</span> Tasks !\n      `);t.forEach((e=>{nl(e)}))}catch(e){console.error(e.message),q_(e.message,10)}}function rl(e){const t=e.split(","),n=e.match(/\((.*)\)/).pop(),i=[];return i.push(t[0].replace(":","")),t.slice(1).forEach((e=>{i.push(`(${n})${e}`)})),i.join(",")}function sl(e){const t={...B_()},n=[];e.forEach((e=>{n.push(+e[0])})),t.order=n,z_(t)}const ol=function(e){let t=null,n=1;return{sort(){t=t??Object.entries($_());try{if(0===t.length)return;t.sort(((e,t)=>function(e,t){return(t>e?1:-1)*n}(e[1].date,t[1].date))),n*=-1}catch(e){console.error(e)}sl(t),Z_(),X_()},getEtries(){const e=t;return t=null,e},setSort(e){t=e}}}(),al=function(e){let t=null,n=1;return{sort(){let e,i;t=Object.entries($_());try{if(0===t.length)return;i=t.filter((e=>null!==e[1].category)),e=t.filter((e=>null===e[1].category)),ol.setSort(e),ol.sort(),i.sort(((e,t)=>function(e,t){return(t>e?1:-1)*n}(e[1].category,t[1].category))),n*=-1}catch(e){console.error(e)}sl([...i,...ol.getEtries()]),Z_(),X_()}}}(),cl=document.querySelector(".app-container"),_l=document.querySelector("#logo"),ll=document.querySelector(".app-name"),dl=document.querySelector(".confirmation-popup"),hl=document.querySelector(".logo-container");function xl(){try{let e={...B_()?.todos};if(e=e??{},0===Object.keys(e).length)throw new Error("You Dont have any tasks to delete yet , That's just a demonstration");cl.classList.add("blur"),_l.classList.add("negate-blur"),hl.classList.add("negate-blur"),ll.classList.add("negate-blur"),dl.classList.add("active"),dl.classList.add("negate-blur"),document.body.style.overflow="hidden",q_("Are you sure you want to delete all your Tasks?!",300)}catch(e){console.error(e),q_(e.message,3)}}function ul(){j_(),document.body.style.overflow="",dl.classList.remove("negate-blur"),dl.classList.remove("active"),ll.classList.remove("negate-blur"),hl.classList.remove("negate-blur"),_l.classList.remove("negate-blur"),cl.classList.remove("blur"),Z_()}function fl(){ul(),q_("Few! . . .that was close!",2)}function pl(){const e=B_();e.todos=null,e.order=null,z_(e),ul(),Z_(),W_("Done! . . .")}function bl(e){const t=e.target.closest("li"),{id:n}=t.dataset;t.style.transition="0.3s",t.style.opacity=0,t.style.marginTop="-40px",function(e){const t={...B_()};let n=[...B_()?.order],i={...t?.todos};i=i??{},n=n.filter((t=>t!==e)),delete i[e],t.todos=i,t.order=n,z_(t)}(+n),setTimeout((()=>{t.remove(),Z_()}),400)}function ml(){const e={...B_()},t=e?.todos;try{if(!t)throw new Error("You Dont have any tasks to delete yet , That's just a demonstration");if(0===Object.entries(t).filter((e=>!0===e[1].completed)).length)throw new Error("No tasks are completed yet . . .\nTo mark a task as complete ,\nclick on the task name");const n=Object.entries(t).filter((e=>!1===e[1].completed));e.todos=Object.fromEntries(n),z_(e),sl(n),Z_(),W_("Done! . . .")}catch(e){console.error(e),q_(e.message,3)}}function gl(e){const t=document.querySelector("#todoInput"),n=e.target.closest("li"),{id:i}=n.dataset,r=n.offsetTop,s=document.querySelector("h1").offsetTop,o=n.querySelector(".main-message"),a=o.innerText;if(o.classList.contains("completed"))return Z_();const c=o.innerText.replace("[","(").replace("]",")");t.value=c,t.classList.add("editing-in-progress"),t.classList.add("pop-out-fade-out"),t.placeholder=`Updating: ${a.slice(0,16)}...📑`,window.scrollTo({top:s,behavior:"smooth"});const _={};_.id=+i;!function(e){const t=B_();if(t?.todos?.[e.updatedTodo.id])return t.updateConfig=e,z_(t);V_()}({todoOffset:r,updatedTodo:_})}function yl(e,t,n){try{document.addEventListener(e,(e=>{e.target.closest(t)&&n(e)}))}catch(e){let t=e?.code,n=e?.message;console.error("An error occurred in event listener: ",n,"Error Code: ",t)}}const vl=document.querySelector(".app-container"),wl=document.querySelector("#logo"),Il=document.querySelector(".app-name"),Tl=document.querySelector(".confirmation-popup"),Cl=document.querySelector(".logo-container");let El;function kl(){vl.classList.add("blur"),wl.classList.add("negate-blur"),Cl.classList.add("negate-blur"),Il.classList.add("negate-blur"),Tl.classList.add("active"),Tl.classList.add("tutorial"),Tl.classList.add("negate-blur"),document.body.style.overflowY="hidden";const e=document.createElement("h1");e.innerText="Instructions",e.style.fontFamily="CabinSketch",El=[...Tl.children],Tl.replaceChildren();const t=document.createElement("div"),n=document.createElement("p");t.append(e),t.append(n),n.innerHTML=' \n  \n  <ol>\n  <li><p>To enter a basic task just give it a name and press enter.</p> </li>\n  <hr>\n  <li><p>To enter a task and assign it a  <span class="good">category</span> put the category inside parentheses <span class="good">(&nbsp;&nbsp;&nbsp;&nbsp;)</span>\n  </br>e.g. (Math) calculus or (Math) fractions.</p></li>\n  <hr>\n  <li>\n  <p>  Entering a task one at a time can become tedious, so you can enter multiple tasks at a time by seperating each task by a comma <span class="good"> &nbsp;,</span> </br>\n  e.g. Walk the dog<span class="good"> &nbsp;,</span> pick up milk<span class="good"> &nbsp;,</span> call Jane.</p>\n  </li>\n  <hr>\n  <li><p>  You can also include categories with them!</br> e.g.(Rufus) Walk the dog<span class="good">&nbsp;,</span> (Supermarket)pick up milk<span class="good">&nbsp;,</span> (Visiting this summer)call Jane.  </p></li>\n  <hr>\n  <li>\n  <p>  But what if you wanted to make a list all your task belonging to one category?</br>\nyou don\'t have to write... </br><span class="bad">(Grocerylist) eggs , (Grocerylist) cheese , (Grocerylist) bread</span> . . .</p></li>\n<hr>\n  <li><p> you can use a colon <span class="good">:</span> after the brackets to set\n  all following task to that group.<br/>\n  e.g. <span class="good">(Grocerylist) : eggs , cheese , bread</span>\n</p></li>\n</ol>\n\n\n<button class="tutorial-ok-btn"><i class="fas fa-check"></i></button>\n\n\n',n.classList.add("guide"),t.classList.add("instructions"),Tl.appendChild(t),Tl.scrollTo({top:0,behavior:"smooth"}),document.addEventListener("pointerdown",(e=>{const t=Tl.contains(e.target);e.target.closest(".tutorial-btn")||Tl.classList.contains("active")&&(t||Sl(e))}))}function Sl(e){e.preventDefault(),Tl.replaceChildren(...El),ul(),Z_()}function Nl(e,t,n=3e3){let i;clearTimeout(i),e.value||(i=setTimeout(t,n))}function Pl(e){e.value="",e.placeholder="Add New Task...📄",e.classList.remove("editing-in-progress")}function Rl(e){if("Enter"===e.key){const t=document.querySelector("#todoInput");if(e.target.classList.contains("editing-in-progress")){const e=B_()?.updateConfig;if(e)try{const n=t.value.trim();if(""===n)throw new Error("Whoops, update cannot be blank! . . . try deleting it instead");const i=tl(n);return i.id=e.updatedTodo.id,function(e){const t={...B_()};let n={...t?.todos};n=n??{},Object.assign(n,{[e.id]:e}),t.todos=n,z_(t)}(i),Pl(t),V_(),Nl(t,K_),window.scrollTo({top:e.todoOffset,behavior:"smooth"}),Z_()}catch(e){return console.trace(e),q_(e.message)}}try{if(""===e.target.value.trim())throw new Error("Whoops, you have to enter something first!");!function(){const e=document.querySelector("#todoInput").value.trim();if(-1===e.indexOf(","))return nl(e);const t=e.match(/^\(.*\):|^\(.*\)\s:/i),n=e.split(/(\(([^)]*)\)[^)]*$)/),i=n[0],r=n[1];if(t)try{if(0===i.length)return il(rl(r));return il(`${i}${rl(r)}`)}catch(e){q_(`${e.message}inside`,12)}il(e)}(),e.target.value="",Pl(e.target),Z_(),Nl(t,K_)}catch(e){return console.trace(e),q_(e.message)}}}function Ol(e){Pl(e.target),V_(),Z_()}function Al(e){const t=e.target;if(t.classList.contains("editing-in-progress"))return;t.classList.toggle("completed");t.previousElementSibling.classList.toggle("show-checkmark"),function(e){const t=e.target,n=e.target.closest("li"),{id:i}=n.dataset;if(t.classList.contains("completed"))return G_({id:i,completed:!0});G_({id:i,completed:!1})}(e),Ll()}const Ll=function(e,t){let n;return function(){const i=this,r=arguments;clearTimeout(n),n=setTimeout((function(){e.apply(i,r)}),1e3*t)}}(K_,15);function Dl(){const e=document.querySelector("#todoList");[...e.querySelectorAll(".grip")].forEach((e=>{e.style.setProperty("cursor","grab")})),e.style.cursor="default"}function Ml(){const e=document.querySelector("#todoInput"),t=document.querySelector(".list-group");e.classList.toggle("pop-out-fade-out"),t.classList.toggle("input-ready");document.querySelector(".tutorial-btn").classList.toggle("tutorial-btn-show")}function Fl(e){e.target.style.cursor="grabbing";document.querySelector("#todoList").style.cursor="grabbing"}function Ul(e){const t=function(){const e=B_()?.todos??{};if(0===Object.keys(e).length)return;let t;const n={true:e=>t+=`, (${e.category}) ${e.message}`,false:e=>t+=`, ${e.message}`};return Object.keys(e).forEach((t=>{n[!!e[t].category]?.(e[t])})),t=t.replace("undefined",""),t=t.slice(1).trim(),t}()||"";return navigator.clipboard.writeText(t),t?W_("copied to your clipboard !"):q_("You have no tasks to export !")}function jl(){return navigator.onLine}function ql(e){if(e.preventDefault(),!jl())return q_("You are not currently online, please try again later",6);const t=document.querySelector("#email").value,n=document.querySelector("#password").value,i=A_();fc(i,gc),async function(e,t,n){var i;const r=ja(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(null===(i=r._getRecaptchaConfig())||void 0===i?void 0:i.emailPasswordEnabled){const e=await Ma(r,s,"signUpPassword");o=oc(r,e)}else o=oc(r,s).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const e=await Ma(r,s,"signUpPassword");return oc(r,e)}return Promise.reject(e)}));const a=await o.catch((e=>Promise.reject(e))),c=await ac._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(c.user),c}(i,t,n).then((e=>{const{user:t}=e;W_(`Welcome ${t.email.split("@")[0]}`)})).catch((e=>{e.code;const t=e.message;console.error("An error occurred during sign up: ",t,"Error Code: ",e.code),q_("An error occurred siging up\n please make sure your password is at least 6 characters long",6)}))}async function Wl(e){if(e.preventDefault(),!jl())return feedbackMessage("You are not currently online, please try again later",6);const t=document.querySelector("#email").value,n=document.querySelector("#password").value,i=A_();try{await fc(i,gc);const e=await function(e,t,n){return uc(z(e),Za.credential(t,n))}
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
 */(i,t,n),{user:r}=e;await async function(){const e=Eo(Je),t=A_().currentUser;if(!t)return Promise.resolve();const n=uo(e,`users/${t.uid}/tasks`);return new Promise(((e,t)=>{yo(n,(async n=>{try{const t=await n.val();await z_(JSON.parse(t)),await Z_(),e()}catch(e){t(e)}}))}))}(),W_(`Welcome ${r.email.split("@")[0]}`)}catch(e){e.code,e.message;return feedbackMessage("An error occurred Logging in\n incorrect username or password",6)}}function Hl(){document.querySelector("#login-form").style.setProperty("display","block","important"),document.getElementById("logout-form").style.setProperty("display","none","important")}function Vl(e){e.preventDefault();(function(e){return z(e).signOut()})(A_()).then((()=>{Hl(),W_("logged out successfully")})).catch((e=>{q_("An error occurred logging out")}))}function Bl(){!function(e,t,n,i){z(e).onAuthStateChanged(t,n,i)}(A_(),(e=>{if(!e)return Hl();const t=e.email.split("@")[0];document.querySelector("#username").textContent=t,document.querySelector("#login-form").style.setProperty("display","none","important"),document.getElementById("logout-form").style.setProperty("display","block","important"),document.getElementById("logout-form").style.setProperty("text-align","right","important")}))}function zl(){Bl(),Z_()}function $l(e){document.querySelector(".remove-main-btn");document.querySelector(".button-type-delete > .btn-collection").classList.toggle("btn-collection--active")}function Gl(e){document.querySelector(".sort-main-btn");document.querySelector(".button-type-sort > .btn-collection").classList.toggle("btn-collection--active")}function Kl(){yl("keyup","#todoInput",Rl),yl("focusout","#todoInput",Ol),yl("pointerup",".edit",gl),yl("pointerup",".drop-down-entry",Ml),yl("pointerdown",".grip",Fl),yl("pointerup","#todoList",Dl),yl("pointerdown",".main-message",Al),yl("pointerdown",".checkmark",bl),yl("pointerdown",".remove-main-btn",$l),yl("pointerdown",".sort-main-btn",Gl),yl("pointerdown",".date-sort",ol.sort),yl("pointerdown",".category-sort",al.sort),yl("pointerup",".delete-all",xl),yl("pointerup",".yes-btn",pl),yl("pointerup",".no-btn",fl),yl("pointerup",".delete-selected",ml),yl("pointerdown",".tutorial-btn",kl),yl("pointerdown",".tutorial-ok-btn",Sl),yl("pointerdown","#logo",Ul),yl("click","#signup-btn",ql),yl("click","#logout-btn",Vl),yl("click","#login-btn",Wl),window.addEventListener("load",zl),yl("click","#logo",Ul)}function Yl(){try{return(0,eval)("globalThis._console_ninja")||(0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';var _0xcad5d2=_0x1c6c;function _0x12b9(){var _0x19e831=[':logPointId:','join','unshift','getOwnPropertyDescriptor','totalStrLength','negativeZero','send','coverage','_connectToHostNow','Map','_hasSetOnItsPath','_console_ninja','get','disabledLog','1696653033421','getOwnPropertyNames','pop','POSITIVE_INFINITY','message','onopen','1FtswoI','type','isArray','warn','NEGATIVE_INFINITY','bigint','_p_','_ws','split','_type','push','getOwnPropertySymbols','strLength','6894264XFUiaf','log','_processTreeNodeResult','_maxConnectAttemptCount','WebSocket','_setNodeLabel','_Symbol','path','timeStamp','[object\\x20Array]','console','_connecting','ws://','index','_keyStrRegExp','_connectAttemptCount','66563mjGyJi','onmessage','_isSet','bind','set','url','symbol','onclose','current','level','hrtime','create','length','isExpressionToEvaluate','enumerable','_treeNodePropertiesAfterFullValue','autoExpandPropertyCount','versions','disabledTrace','Symbol','_setNodeId','allStrLength','String','_getOwnPropertyDescriptor','stackTraceLimit','global','time','_isMap','_setNodeExpressionPath','_HTMLAllCollection','then','sort','edge','defineProperty','_addObjectProperty','getWebSocketClass','name','catch','toString','_cleanNode','_connected','_WebSocketClass','serialize','nan','https://tinyurl.com/37x8b79t','concat','_allowedToConnectOnSend','toLowerCase','cappedElements','_inNextEdge','_regExpToString','_addProperty','_webSocketErrorDocsLink','env','unknown','performance','_undefined','getPrototypeOf','nuxt','_p_length','_WebSocket','_numberRegExp','nodeModules','number','_setNodeExpandableState','168ogoyEi','autoExpandMaxDepth','props','setter','_setNodePermissions','ws/index.js','','_allowedToSend','_dateToString','_setNodeQueryPath','_isNegativeZero','[object\\x20BigInt]','_propertyName','_console_ninja_session','count','error','node','_addLoadNode','[object\\x20Date]','constructor','parent','gateway.docker.internal','location','','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','Set','NEXT_RUNTIME','_isPrimitiveWrapperType','stack','test','[object\\x20Set]','[object\\x20Map]','value','_blacklistedProperty','port','cappedProps','next.js','includes','elapsed','_treeNodePropertiesBeforeFullValue','autoExpandPreviousObjects','process','function','trace','1069780bPjMJE','slice','capped','_addFunctionsNode','_property','unref','HTMLAllCollection','\\x20server','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','null','1500042kSwZYa','data','now','\\x20browser','logger\\x20websocket\\x20error','_consoleNinjaAllowedToStart','_additionalMetadata','resolveGetters','close','method','_attemptToReconnectShortly','array','date','prototype','undefined','elements','indexOf',[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"Skynet-Global\",\"192.168.56.1\",\"192.168.137.1\",\"192.168.0.4\"],'sortProps','autoExpand','host','_inBrowser','valueOf','_isPrimitiveType','1654820ofrHlo','depth','Error','funcName','object','boolean','default','rootExpression','36eVrAMY','_isUndefined','stringify','reduceLimits','_sortProps','forEach','_reconnectTimeout','replace','3659840UAwsGX','webpack','2872143HYLacE','reload','substr','noFunctions','_hasSymbolPropertyOnItsPath','hits','root_exp_id','parse',\"c:\\\\Users\\\\clickwithclark\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-0.0.231\\\\node_modules\",'hostname','string','hasOwnProperty','_objectToString','timeEnd','expId','__es'+'Module','_getOwnPropertyNames','_isArray','_disposeWebsocket','_getOwnPropertySymbols','expressionsToEvaluate','autoExpandLimit','perf_hooks','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','_hasMapOnItsPath','_capIfString','_socket','Number','dockerizedApp','_quotedRegExp','call'];_0x12b9=function(){return _0x19e831;};return _0x12b9();}(function(_0x1dceec,_0x472a96){var _0x46d447=_0x1c6c,_0x7f3037=_0x1dceec();while(!![]){try{var _0x1ff89a=-parseInt(_0x46d447(0x196))/0x1*(parseInt(_0x46d447(0x139))/0x2)+-parseInt(_0x46d447(0x163))/0x3+parseInt(_0x46d447(0x161))/0x4+-parseInt(_0x46d447(0x12f))/0x5+-parseInt(_0x46d447(0x1f4))/0x6*(-parseInt(_0x46d447(0x1b3))/0x7)+parseInt(_0x46d447(0x1a3))/0x8+-parseInt(_0x46d447(0x159))/0x9*(-parseInt(_0x46d447(0x151))/0xa);if(_0x1ff89a===_0x472a96)break;else _0x7f3037['push'](_0x7f3037['shift']());}catch(_0x1115bc){_0x7f3037['push'](_0x7f3037['shift']());}}}(_0x12b9,0xbf4cd));var j=Object[_0xcad5d2(0x1be)],H=Object[_0xcad5d2(0x1d4)],G=Object[_0xcad5d2(0x185)],ee=Object[_0xcad5d2(0x191)],te=Object[_0xcad5d2(0x1ec)],ne=Object['prototype'][_0xcad5d2(0x16e)],re=(_0x52e5c2,_0x2f7179,_0x379308,_0x398506)=>{var _0x36978b=_0xcad5d2;if(_0x2f7179&&typeof _0x2f7179==_0x36978b(0x155)||typeof _0x2f7179=='function'){for(let _0x1333b7 of ee(_0x2f7179))!ne[_0x36978b(0x181)](_0x52e5c2,_0x1333b7)&&_0x1333b7!==_0x379308&&H(_0x52e5c2,_0x1333b7,{'get':()=>_0x2f7179[_0x1333b7],'enumerable':!(_0x398506=G(_0x2f7179,_0x1333b7))||_0x398506[_0x36978b(0x1c1)]});}return _0x52e5c2;},x=(_0xd0d481,_0x5a9545,_0x58472d)=>(_0x58472d=_0xd0d481!=null?j(te(_0xd0d481)):{},re(_0x5a9545||!_0xd0d481||!_0xd0d481[_0xcad5d2(0x172)]?H(_0x58472d,_0xcad5d2(0x157),{'value':_0xd0d481,'enumerable':!0x0}):_0x58472d,_0xd0d481)),X=class{constructor(_0xf67ac2,_0x39905a,_0xdeb3c1,_0xbbe41c,_0x18b065){var _0x4753f9=_0xcad5d2;this[_0x4753f9(0x1cc)]=_0xf67ac2,this[_0x4753f9(0x14d)]=_0x39905a,this['port']=_0xdeb3c1,this[_0x4753f9(0x1f1)]=_0xbbe41c,this[_0x4753f9(0x17f)]=_0x18b065,this['_allowedToSend']=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x4753f9(0x1db)]=!0x1,this[_0x4753f9(0x1ae)]=!0x1,this[_0x4753f9(0x1e4)]=_0xf67ac2[_0x4753f9(0x12c)]?.['env']?.['NEXT_RUNTIME']===_0x4753f9(0x1d3),this[_0x4753f9(0x14e)]=!this[_0x4753f9(0x1cc)]['process']?.[_0x4753f9(0x1c4)]?.[_0x4753f9(0x204)]&&!this[_0x4753f9(0x1e4)],this['_WebSocketClass']=null,this['_connectAttemptCount']=0x0,this[_0x4753f9(0x1a6)]=0x14,this[_0x4753f9(0x1e7)]=_0x4753f9(0x1df),this['_sendErrorMessage']=(this['_inBrowser']?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x4753f9(0x17a))+this[_0x4753f9(0x1e7)];}async['getWebSocketClass'](){var _0x1351c1=_0xcad5d2;if(this[_0x1351c1(0x1dc)])return this['_WebSocketClass'];let _0x364031;if(this[_0x1351c1(0x14e)]||this[_0x1351c1(0x1e4)])_0x364031=this[_0x1351c1(0x1cc)][_0x1351c1(0x1a7)];else{if(this[_0x1351c1(0x1cc)][_0x1351c1(0x12c)]?.[_0x1351c1(0x1ef)])_0x364031=this[_0x1351c1(0x1cc)]['process']?.[_0x1351c1(0x1ef)];else try{let _0x124ebe=await import('path');_0x364031=(await import((await import(_0x1351c1(0x1b8)))['pathToFileURL'](_0x124ebe[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],_0x1351c1(0x1f9)))[_0x1351c1(0x1d9)]()))['default'];}catch{try{_0x364031=require(require(_0x1351c1(0x1aa))[_0x1351c1(0x183)](this[_0x1351c1(0x1f1)],'ws'));}catch{throw new Error(_0x1351c1(0x137));}}}return this[_0x1351c1(0x1dc)]=_0x364031,_0x364031;}['_connectToHostNow'](){var _0xe4b17f=_0xcad5d2;this['_connecting']||this[_0xe4b17f(0x1db)]||this[_0xe4b17f(0x1b2)]>=this[_0xe4b17f(0x1a6)]||(this[_0xe4b17f(0x1e1)]=!0x1,this[_0xe4b17f(0x1ae)]=!0x0,this[_0xe4b17f(0x1b2)]++,this['_ws']=new Promise((_0x22849b,_0x38a9cd)=>{var _0x415d02=_0xe4b17f;this[_0x415d02(0x1d6)]()['then'](_0x469e18=>{var _0x4d8716=_0x415d02;let _0x5fa263=new _0x469e18(_0x4d8716(0x1af)+(!this['_inBrowser']&&this[_0x4d8716(0x17f)]?_0x4d8716(0x209):this[_0x4d8716(0x14d)])+':'+this[_0x4d8716(0x125)]);_0x5fa263['onerror']=()=>{var _0x25600d=_0x4d8716;this['_allowedToSend']=!0x1,this['_disposeWebsocket'](_0x5fa263),this[_0x25600d(0x143)](),_0x38a9cd(new Error(_0x25600d(0x13d)));},_0x5fa263[_0x4d8716(0x195)]=()=>{var _0x5576fe=_0x4d8716;this[_0x5576fe(0x14e)]||_0x5fa263['_socket']&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)]&&_0x5fa263[_0x5576fe(0x17d)][_0x5576fe(0x134)](),_0x22849b(_0x5fa263);},_0x5fa263[_0x4d8716(0x1ba)]=()=>{var _0x1c4726=_0x4d8716;this[_0x1c4726(0x1e1)]=!0x0,this[_0x1c4726(0x175)](_0x5fa263),this[_0x1c4726(0x143)]();},_0x5fa263[_0x4d8716(0x1b4)]=_0x21adb4=>{var _0x55b71e=_0x4d8716;try{_0x21adb4&&_0x21adb4[_0x55b71e(0x13a)]&&this[_0x55b71e(0x14e)]&&JSON[_0x55b71e(0x16a)](_0x21adb4[_0x55b71e(0x13a)])[_0x55b71e(0x142)]===_0x55b71e(0x164)&&this[_0x55b71e(0x1cc)][_0x55b71e(0x20a)][_0x55b71e(0x164)]();}catch{}};})[_0x415d02(0x1d1)](_0x381826=>(this[_0x415d02(0x1db)]=!0x0,this['_connecting']=!0x1,this[_0x415d02(0x1e1)]=!0x1,this[_0x415d02(0x1fb)]=!0x0,this['_connectAttemptCount']=0x0,_0x381826))[_0x415d02(0x1d8)](_0x370b61=>(this[_0x415d02(0x1db)]=!0x1,this['_connecting']=!0x1,console[_0x415d02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20'+this[_0x415d02(0x1e7)]),_0x38a9cd(new Error(_0x415d02(0x20c)+(_0x370b61&&_0x370b61[_0x415d02(0x194)])))));}));}['_disposeWebsocket'](_0x1ada9b){var _0x1e726d=_0xcad5d2;this[_0x1e726d(0x1db)]=!0x1,this[_0x1e726d(0x1ae)]=!0x1;try{_0x1ada9b['onclose']=null,_0x1ada9b['onerror']=null,_0x1ada9b[_0x1e726d(0x195)]=null;}catch{}try{_0x1ada9b['readyState']<0x2&&_0x1ada9b[_0x1e726d(0x141)]();}catch{}}['_attemptToReconnectShortly'](){var _0x3e4cc6=_0xcad5d2;clearTimeout(this['_reconnectTimeout']),!(this['_connectAttemptCount']>=this[_0x3e4cc6(0x1a6)])&&(this['_reconnectTimeout']=setTimeout(()=>{var _0xea924d=_0x3e4cc6;this[_0xea924d(0x1db)]||this['_connecting']||(this[_0xea924d(0x18a)](),this[_0xea924d(0x19d)]?.['catch'](()=>this[_0xea924d(0x143)]()));},0x1f4),this[_0x3e4cc6(0x15f)][_0x3e4cc6(0x134)]&&this[_0x3e4cc6(0x15f)]['unref']());}async['send'](_0xce1d6){var _0xc52a3=_0xcad5d2;try{if(!this[_0xc52a3(0x1fb)])return;this[_0xc52a3(0x1e1)]&&this[_0xc52a3(0x18a)](),(await this[_0xc52a3(0x19d)])[_0xc52a3(0x188)](JSON[_0xc52a3(0x15b)](_0xce1d6));}catch(_0x51fc5b){console['warn'](this['_sendErrorMessage']+':\\x20'+(_0x51fc5b&&_0x51fc5b[_0xc52a3(0x194)])),this[_0xc52a3(0x1fb)]=!0x1,this[_0xc52a3(0x143)]();}}};function _0x1c6c(_0x4e5f1a,_0xe7b3b5){var _0x12b9d6=_0x12b9();return _0x1c6c=function(_0x1c6ce7,_0x2c87be){_0x1c6ce7=_0x1c6ce7-0x11f;var _0x39be75=_0x12b9d6[_0x1c6ce7];return _0x39be75;},_0x1c6c(_0x4e5f1a,_0xe7b3b5);}function b(_0x2f099e,_0x303c3d,_0x1baa03,_0x2c0edb,_0x51ccfe,_0x4bfbe1){var _0x480dd3=_0xcad5d2;let _0x43d30f=_0x1baa03[_0x480dd3(0x19e)](',')['map'](_0xff04cc=>{var _0x102f02=_0x480dd3;try{_0x2f099e[_0x102f02(0x201)]||((_0x51ccfe===_0x102f02(0x127)||_0x51ccfe==='remix'||_0x51ccfe==='astro')&&(_0x51ccfe+=!_0x2f099e[_0x102f02(0x12c)]?.[_0x102f02(0x1c4)]?.[_0x102f02(0x204)]&&_0x2f099e['process']?.['env']?.[_0x102f02(0x20e)]!==_0x102f02(0x1d3)?_0x102f02(0x13c):_0x102f02(0x136)),_0x2f099e[_0x102f02(0x201)]={'id':+new Date(),'tool':_0x51ccfe});let _0x1b1659=new X(_0x2f099e,_0x303c3d,_0xff04cc,_0x2c0edb,_0x4bfbe1);return _0x1b1659[_0x102f02(0x188)][_0x102f02(0x1b6)](_0x1b1659);}catch(_0xcd874a){return console[_0x102f02(0x199)]('logger\\x20failed\\x20to\\x20connect\\x20to\\x20host',_0xcd874a&&_0xcd874a[_0x102f02(0x194)]),()=>{};}});return _0x2807c9=>_0x43d30f[_0x480dd3(0x15e)](_0x4f0788=>_0x4f0788(_0x2807c9));}function W(_0x102cde){var _0x2e7d06=_0xcad5d2;let _0x208e9d=function(_0x5a8746,_0x10e3ca){return _0x10e3ca-_0x5a8746;},_0x44de2f;if(_0x102cde['performance'])_0x44de2f=function(){var _0x298d92=_0x1c6c;return _0x102cde[_0x298d92(0x1ea)][_0x298d92(0x13b)]();};else{if(_0x102cde['process']&&_0x102cde['process'][_0x2e7d06(0x1bd)]&&_0x102cde[_0x2e7d06(0x12c)]?.[_0x2e7d06(0x1e8)]?.[_0x2e7d06(0x20e)]!==_0x2e7d06(0x1d3))_0x44de2f=function(){return _0x102cde['process']['hrtime']();},_0x208e9d=function(_0x117359,_0x58a9f2){return 0x3e8*(_0x58a9f2[0x0]-_0x117359[0x0])+(_0x58a9f2[0x1]-_0x117359[0x1])/0xf4240;};else try{let {performance:_0xfd60cc}=require(_0x2e7d06(0x179));_0x44de2f=function(){var _0x3343ed=_0x2e7d06;return _0xfd60cc[_0x3343ed(0x13b)]();};}catch{_0x44de2f=function(){return+new Date();};}}return{'elapsed':_0x208e9d,'timeStamp':_0x44de2f,'now':()=>Date[_0x2e7d06(0x13b)]()};}function J(_0x2b6bc0,_0x46ad11,_0xa84d0e){var _0x3d6cef=_0xcad5d2;if(_0x2b6bc0[_0x3d6cef(0x13e)]!==void 0x0)return _0x2b6bc0[_0x3d6cef(0x13e)];let _0x237ec4=_0x2b6bc0['process']?.[_0x3d6cef(0x1c4)]?.[_0x3d6cef(0x204)]||_0x2b6bc0[_0x3d6cef(0x12c)]?.[_0x3d6cef(0x1e8)]?.['NEXT_RUNTIME']===_0x3d6cef(0x1d3);return _0x237ec4&&_0xa84d0e===_0x3d6cef(0x1ed)?_0x2b6bc0[_0x3d6cef(0x13e)]=!0x1:_0x2b6bc0[_0x3d6cef(0x13e)]=_0x237ec4||!_0x46ad11||_0x2b6bc0[_0x3d6cef(0x20a)]?.['hostname']&&_0x46ad11[_0x3d6cef(0x128)](_0x2b6bc0[_0x3d6cef(0x20a)][_0x3d6cef(0x16c)]),_0x2b6bc0[_0x3d6cef(0x13e)];}function Y(_0x46482b,_0x57e6b2,_0x4c887a,_0x17fda6){var _0x293447=_0xcad5d2;_0x46482b=_0x46482b,_0x57e6b2=_0x57e6b2,_0x4c887a=_0x4c887a,_0x17fda6=_0x17fda6;let _0x1e581f=W(_0x46482b),_0x3407be=_0x1e581f[_0x293447(0x129)],_0x147949=_0x1e581f[_0x293447(0x1ab)];class _0x17520b{constructor(){var _0x1a8064=_0x293447;this[_0x1a8064(0x1b1)]=/^(?!(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$)[_$a-zA-Z\\xA0-\\uFFFF][_$a-zA-Z0-9\\xA0-\\uFFFF]*$/,this[_0x1a8064(0x1f0)]=/^(0|[1-9][0-9]*)$/,this[_0x1a8064(0x180)]=/'([^\\\\']|\\\\')*'/,this[_0x1a8064(0x1eb)]=_0x46482b[_0x1a8064(0x147)],this['_HTMLAllCollection']=_0x46482b[_0x1a8064(0x135)],this[_0x1a8064(0x1ca)]=Object[_0x1a8064(0x185)],this['_getOwnPropertyNames']=Object[_0x1a8064(0x191)],this[_0x1a8064(0x1a9)]=_0x46482b[_0x1a8064(0x1c6)],this[_0x1a8064(0x1e5)]=RegExp['prototype'][_0x1a8064(0x1d9)],this['_dateToString']=Date[_0x1a8064(0x146)][_0x1a8064(0x1d9)];}[_0x293447(0x1dd)](_0x33f3af,_0x541f55,_0x535e8a,_0x5abbd7){var _0x89a98b=_0x293447,_0x4dc61f=this,_0x131512=_0x535e8a['autoExpand'];function _0xe5fc89(_0x31c971,_0x1051f9,_0x106ea8){var _0xa14823=_0x1c6c;_0x1051f9['type']=_0xa14823(0x1e9),_0x1051f9[_0xa14823(0x203)]=_0x31c971[_0xa14823(0x194)],_0x21fe89=_0x106ea8[_0xa14823(0x204)][_0xa14823(0x1bb)],_0x106ea8[_0xa14823(0x204)]['current']=_0x1051f9,_0x4dc61f['_treeNodePropertiesBeforeFullValue'](_0x1051f9,_0x106ea8);}try{_0x535e8a['level']++,_0x535e8a['autoExpand']&&_0x535e8a['autoExpandPreviousObjects'][_0x89a98b(0x1a0)](_0x541f55);var _0x40b035,_0x37207d,_0x4b1d9f,_0x1d0dc7,_0x237f23=[],_0x19fd43=[],_0x385bc2,_0x47a5fb=this[_0x89a98b(0x19f)](_0x541f55),_0x4746da=_0x47a5fb===_0x89a98b(0x144),_0x23ece8=!0x1,_0x9c79d5=_0x47a5fb===_0x89a98b(0x12d),_0x3eb391=this['_isPrimitiveType'](_0x47a5fb),_0x2de0c3=this[_0x89a98b(0x20f)](_0x47a5fb),_0x856d9b=_0x3eb391||_0x2de0c3,_0x5def3c={},_0x4112fb=0x0,_0x392aa4=!0x1,_0x21fe89,_0x47e1b9=/^(([1-9]{1}[0-9]*)|0)$/;if(_0x535e8a[_0x89a98b(0x152)]){if(_0x4746da){if(_0x37207d=_0x541f55['length'],_0x37207d>_0x535e8a[_0x89a98b(0x148)]){for(_0x4b1d9f=0x0,_0x1d0dc7=_0x535e8a[_0x89a98b(0x148)],_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1e6)](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));_0x33f3af[_0x89a98b(0x1e3)]=!0x0;}else{for(_0x4b1d9f=0x0,_0x1d0dc7=_0x37207d,_0x40b035=_0x4b1d9f;_0x40b035<_0x1d0dc7;_0x40b035++)_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f['_addProperty'](_0x237f23,_0x541f55,_0x47a5fb,_0x40b035,_0x535e8a));}_0x535e8a['autoExpandPropertyCount']+=_0x19fd43[_0x89a98b(0x1bf)];}if(!(_0x47a5fb==='null'||_0x47a5fb==='undefined')&&!_0x3eb391&&_0x47a5fb!==_0x89a98b(0x1c9)&&_0x47a5fb!=='Buffer'&&_0x47a5fb!==_0x89a98b(0x19b)){var _0x2652cb=_0x5abbd7[_0x89a98b(0x1f6)]||_0x535e8a[_0x89a98b(0x1f6)];if(this[_0x89a98b(0x1b5)](_0x541f55)?(_0x40b035=0x0,_0x541f55[_0x89a98b(0x15e)](function(_0x2bfb85){var _0x56d7fe=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x56d7fe(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a[_0x56d7fe(0x1c0)]&&_0x535e8a[_0x56d7fe(0x14c)]&&_0x535e8a[_0x56d7fe(0x1c3)]>_0x535e8a['autoExpandLimit']){_0x392aa4=!0x0;return;}_0x19fd43[_0x56d7fe(0x1a0)](_0x4dc61f[_0x56d7fe(0x1e6)](_0x237f23,_0x541f55,_0x56d7fe(0x20d),_0x40b035++,_0x535e8a,function(_0x3d7054){return function(){return _0x3d7054;};}(_0x2bfb85)));})):this[_0x89a98b(0x1ce)](_0x541f55)&&_0x541f55[_0x89a98b(0x15e)](function(_0x2039af,_0x18c51b){var _0x2c5d76=_0x89a98b;if(_0x4112fb++,_0x535e8a[_0x2c5d76(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;return;}if(!_0x535e8a['isExpressionToEvaluate']&&_0x535e8a[_0x2c5d76(0x14c)]&&_0x535e8a['autoExpandPropertyCount']>_0x535e8a[_0x2c5d76(0x178)]){_0x392aa4=!0x0;return;}var _0x36b8a8=_0x18c51b[_0x2c5d76(0x1d9)]();_0x36b8a8[_0x2c5d76(0x1bf)]>0x64&&(_0x36b8a8=_0x36b8a8[_0x2c5d76(0x130)](0x0,0x64)+'...'),_0x19fd43[_0x2c5d76(0x1a0)](_0x4dc61f[_0x2c5d76(0x1e6)](_0x237f23,_0x541f55,'Map',_0x36b8a8,_0x535e8a,function(_0x33390e){return function(){return _0x33390e;};}(_0x2039af)));}),!_0x23ece8){try{for(_0x385bc2 in _0x541f55)if(!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2))&&!this[_0x89a98b(0x124)](_0x541f55,_0x385bc2,_0x535e8a)){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}catch{}if(_0x5def3c[_0x89a98b(0x1ee)]=!0x0,_0x9c79d5&&(_0x5def3c['_p_name']=!0x0),!_0x392aa4){var _0x33c504=[][_0x89a98b(0x1e0)](this[_0x89a98b(0x173)](_0x541f55))[_0x89a98b(0x1e0)](this[_0x89a98b(0x176)](_0x541f55));for(_0x40b035=0x0,_0x37207d=_0x33c504[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)if(_0x385bc2=_0x33c504[_0x40b035],!(_0x4746da&&_0x47e1b9[_0x89a98b(0x120)](_0x385bc2[_0x89a98b(0x1d9)]()))&&!this['_blacklistedProperty'](_0x541f55,_0x385bc2,_0x535e8a)&&!_0x5def3c[_0x89a98b(0x19c)+_0x385bc2[_0x89a98b(0x1d9)]()]){if(_0x4112fb++,_0x535e8a[_0x89a98b(0x1c3)]++,_0x4112fb>_0x2652cb){_0x392aa4=!0x0;break;}if(!_0x535e8a[_0x89a98b(0x1c0)]&&_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x1c3)]>_0x535e8a[_0x89a98b(0x178)]){_0x392aa4=!0x0;break;}_0x19fd43[_0x89a98b(0x1a0)](_0x4dc61f[_0x89a98b(0x1d5)](_0x237f23,_0x5def3c,_0x541f55,_0x47a5fb,_0x385bc2,_0x535e8a));}}}}}if(_0x33f3af[_0x89a98b(0x197)]=_0x47a5fb,_0x856d9b?(_0x33f3af[_0x89a98b(0x123)]=_0x541f55[_0x89a98b(0x14f)](),this[_0x89a98b(0x17c)](_0x47a5fb,_0x33f3af,_0x535e8a,_0x5abbd7)):_0x47a5fb===_0x89a98b(0x145)?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1fc)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x19b)?_0x33f3af['value']=_0x541f55['toString']():_0x47a5fb==='RegExp'?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1e5)]['call'](_0x541f55):_0x47a5fb===_0x89a98b(0x1b9)&&this[_0x89a98b(0x1a9)]?_0x33f3af[_0x89a98b(0x123)]=this[_0x89a98b(0x1a9)][_0x89a98b(0x146)][_0x89a98b(0x1d9)]['call'](_0x541f55):!_0x535e8a[_0x89a98b(0x152)]&&!(_0x47a5fb===_0x89a98b(0x138)||_0x47a5fb===_0x89a98b(0x147))&&(delete _0x33f3af['value'],_0x33f3af['capped']=!0x0),_0x392aa4&&(_0x33f3af[_0x89a98b(0x126)]=!0x0),_0x21fe89=_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)],_0x535e8a[_0x89a98b(0x204)][_0x89a98b(0x1bb)]=_0x33f3af,this[_0x89a98b(0x12a)](_0x33f3af,_0x535e8a),_0x19fd43[_0x89a98b(0x1bf)]){for(_0x40b035=0x0,_0x37207d=_0x19fd43[_0x89a98b(0x1bf)];_0x40b035<_0x37207d;_0x40b035++)_0x19fd43[_0x40b035](_0x40b035);}_0x237f23[_0x89a98b(0x1bf)]&&(_0x33f3af[_0x89a98b(0x1f6)]=_0x237f23);}catch(_0x332a80){_0xe5fc89(_0x332a80,_0x33f3af,_0x535e8a);}return this[_0x89a98b(0x13f)](_0x541f55,_0x33f3af),this['_treeNodePropertiesAfterFullValue'](_0x33f3af,_0x535e8a),_0x535e8a[_0x89a98b(0x204)]['current']=_0x21fe89,_0x535e8a[_0x89a98b(0x1bc)]--,_0x535e8a[_0x89a98b(0x14c)]=_0x131512,_0x535e8a[_0x89a98b(0x14c)]&&_0x535e8a[_0x89a98b(0x12b)][_0x89a98b(0x192)](),_0x33f3af;}[_0x293447(0x176)](_0xc2da79){var _0x30bba4=_0x293447;return Object[_0x30bba4(0x1a1)]?Object[_0x30bba4(0x1a1)](_0xc2da79):[];}[_0x293447(0x1b5)](_0x1d60a9){var _0x48facd=_0x293447;return!!(_0x1d60a9&&_0x46482b[_0x48facd(0x20d)]&&this['_objectToString'](_0x1d60a9)===_0x48facd(0x121)&&_0x1d60a9['forEach']);}[_0x293447(0x124)](_0x34f203,_0x464c54,_0x34f808){var _0x336088=_0x293447;return _0x34f808[_0x336088(0x166)]?typeof _0x34f203[_0x464c54]==_0x336088(0x12d):!0x1;}['_type'](_0x485e7d){var _0x5ba655=_0x293447,_0x28ac8c='';return _0x28ac8c=typeof _0x485e7d,_0x28ac8c===_0x5ba655(0x155)?this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ac)?_0x28ac8c=_0x5ba655(0x144):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x206)?_0x28ac8c=_0x5ba655(0x145):this[_0x5ba655(0x16f)](_0x485e7d)===_0x5ba655(0x1ff)?_0x28ac8c=_0x5ba655(0x19b):_0x485e7d===null?_0x28ac8c='null':_0x485e7d['constructor']&&(_0x28ac8c=_0x485e7d[_0x5ba655(0x207)][_0x5ba655(0x1d7)]||_0x28ac8c):_0x28ac8c===_0x5ba655(0x147)&&this[_0x5ba655(0x1d0)]&&_0x485e7d instanceof this[_0x5ba655(0x1d0)]&&(_0x28ac8c=_0x5ba655(0x135)),_0x28ac8c;}['_objectToString'](_0x470728){var _0x3feed7=_0x293447;return Object[_0x3feed7(0x146)][_0x3feed7(0x1d9)][_0x3feed7(0x181)](_0x470728);}[_0x293447(0x150)](_0x16bd2f){var _0x42f834=_0x293447;return _0x16bd2f===_0x42f834(0x156)||_0x16bd2f===_0x42f834(0x16d)||_0x16bd2f===_0x42f834(0x1f2);}[_0x293447(0x20f)](_0x1ee66b){var _0x17537c=_0x293447;return _0x1ee66b==='Boolean'||_0x1ee66b===_0x17537c(0x1c9)||_0x1ee66b==='Number';}[_0x293447(0x1e6)](_0x557084,_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9){var _0x51915e=this;return function(_0x150684){var _0xcc84a=_0x1c6c,_0x35daea=_0x1f5832['node']['current'],_0x4c332f=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)],_0x2a27c1=_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)];_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x35daea,_0x1f5832[_0xcc84a(0x204)]['index']=typeof _0x2114e0==_0xcc84a(0x1f2)?_0x2114e0:_0x150684,_0x557084[_0xcc84a(0x1a0)](_0x51915e[_0xcc84a(0x133)](_0x2e0b7c,_0x1d9f5b,_0x2114e0,_0x1f5832,_0x315ae9)),_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x208)]=_0x2a27c1,_0x1f5832[_0xcc84a(0x204)][_0xcc84a(0x1b0)]=_0x4c332f;};}[_0x293447(0x1d5)](_0x192f6e,_0x355a0b,_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5){var _0x547e59=_0x293447,_0x1c109d=this;return _0x355a0b[_0x547e59(0x19c)+_0x5bdced[_0x547e59(0x1d9)]()]=!0x0,function(_0x52a5b4){var _0x5657c0=_0x547e59,_0x45bbe1=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1bb)],_0x45577f=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x1b0)],_0x3d53c2=_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)];_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x45bbe1,_0x2947fa['node'][_0x5657c0(0x1b0)]=_0x52a5b4,_0x192f6e[_0x5657c0(0x1a0)](_0x1c109d[_0x5657c0(0x133)](_0x1f9ccb,_0x4d3a35,_0x5bdced,_0x2947fa,_0x4127b5)),_0x2947fa[_0x5657c0(0x204)][_0x5657c0(0x208)]=_0x3d53c2,_0x2947fa[_0x5657c0(0x204)]['index']=_0x45577f;};}['_property'](_0x3dde9b,_0x45c585,_0xf7c324,_0x28ae42,_0x91c8db){var _0x448894=_0x293447,_0x3b8c7d=this;_0x91c8db||(_0x91c8db=function(_0x1d56b8,_0x552056){return _0x1d56b8[_0x552056];});var _0x542036=_0xf7c324[_0x448894(0x1d9)](),_0x499dbf=_0x28ae42['expressionsToEvaluate']||{},_0x99faac=_0x28ae42[_0x448894(0x152)],_0x220b83=_0x28ae42[_0x448894(0x1c0)];try{var _0x33c50a=this[_0x448894(0x1ce)](_0x3dde9b),_0x5cf05a=_0x542036;_0x33c50a&&_0x5cf05a[0x0]==='\\x27'&&(_0x5cf05a=_0x5cf05a[_0x448894(0x165)](0x1,_0x5cf05a[_0x448894(0x1bf)]-0x2));var _0x3e746c=_0x28ae42['expressionsToEvaluate']=_0x499dbf['_p_'+_0x5cf05a];_0x3e746c&&(_0x28ae42[_0x448894(0x152)]=_0x28ae42[_0x448894(0x152)]+0x1),_0x28ae42[_0x448894(0x1c0)]=!!_0x3e746c;var _0x39cd35=typeof _0xf7c324==_0x448894(0x1b9),_0x18fe60={'name':_0x39cd35||_0x33c50a?_0x542036:this['_propertyName'](_0x542036)};if(_0x39cd35&&(_0x18fe60[_0x448894(0x1b9)]=!0x0),!(_0x45c585===_0x448894(0x144)||_0x45c585===_0x448894(0x153))){var _0x3c4558=this[_0x448894(0x1ca)](_0x3dde9b,_0xf7c324);if(_0x3c4558&&(_0x3c4558[_0x448894(0x1b7)]&&(_0x18fe60[_0x448894(0x1f7)]=!0x0),_0x3c4558[_0x448894(0x18e)]&&!_0x3e746c&&!_0x28ae42[_0x448894(0x140)]))return _0x18fe60['getter']=!0x0,this['_processTreeNodeResult'](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x43c9ad;try{_0x43c9ad=_0x91c8db(_0x3dde9b,_0xf7c324);}catch(_0x563553){return _0x18fe60={'name':_0x542036,'type':'unknown','error':_0x563553[_0x448894(0x194)]},this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42),_0x18fe60;}var _0x42622f=this['_type'](_0x43c9ad),_0x301a1d=this['_isPrimitiveType'](_0x42622f);if(_0x18fe60[_0x448894(0x197)]=_0x42622f,_0x301a1d)this['_processTreeNodeResult'](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x176368=_0x448894;_0x18fe60[_0x176368(0x123)]=_0x43c9ad[_0x176368(0x14f)](),!_0x3e746c&&_0x3b8c7d[_0x176368(0x17c)](_0x42622f,_0x18fe60,_0x28ae42,{});});else{var _0x39a0ba=_0x28ae42[_0x448894(0x14c)]&&_0x28ae42[_0x448894(0x1bc)]<_0x28ae42[_0x448894(0x1f5)]&&_0x28ae42[_0x448894(0x12b)][_0x448894(0x149)](_0x43c9ad)<0x0&&_0x42622f!==_0x448894(0x12d)&&_0x28ae42[_0x448894(0x1c3)]<_0x28ae42[_0x448894(0x178)];_0x39a0ba||_0x28ae42[_0x448894(0x1bc)]<_0x99faac||_0x3e746c?(this[_0x448894(0x1dd)](_0x18fe60,_0x43c9ad,_0x28ae42,_0x3e746c||{}),this['_additionalMetadata'](_0x43c9ad,_0x18fe60)):this[_0x448894(0x1a5)](_0x18fe60,_0x28ae42,_0x43c9ad,function(){var _0x15a072=_0x448894;_0x42622f===_0x15a072(0x138)||_0x42622f===_0x15a072(0x147)||(delete _0x18fe60[_0x15a072(0x123)],_0x18fe60['capped']=!0x0);});}return _0x18fe60;}finally{_0x28ae42[_0x448894(0x177)]=_0x499dbf,_0x28ae42['depth']=_0x99faac,_0x28ae42['isExpressionToEvaluate']=_0x220b83;}}[_0x293447(0x17c)](_0x292d65,_0x2e866c,_0x3e54e2,_0x54b8ae){var _0x433b68=_0x293447,_0xe467f8=_0x54b8ae[_0x433b68(0x1a2)]||_0x3e54e2[_0x433b68(0x1a2)];if((_0x292d65===_0x433b68(0x16d)||_0x292d65===_0x433b68(0x1c9))&&_0x2e866c['value']){let _0x4b6f9d=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x1bf)];_0x3e54e2[_0x433b68(0x1c8)]+=_0x4b6f9d,_0x3e54e2[_0x433b68(0x1c8)]>_0x3e54e2[_0x433b68(0x186)]?(_0x2e866c[_0x433b68(0x131)]='',delete _0x2e866c['value']):_0x4b6f9d>_0xe467f8&&(_0x2e866c[_0x433b68(0x131)]=_0x2e866c[_0x433b68(0x123)][_0x433b68(0x165)](0x0,_0xe467f8),delete _0x2e866c[_0x433b68(0x123)]);}}[_0x293447(0x1ce)](_0x41133b){var _0x4e4a01=_0x293447;return!!(_0x41133b&&_0x46482b['Map']&&this['_objectToString'](_0x41133b)===_0x4e4a01(0x122)&&_0x41133b[_0x4e4a01(0x15e)]);}[_0x293447(0x200)](_0x11d20f){var _0x23db08=_0x293447;if(_0x11d20f['match'](/^\\d+$/))return _0x11d20f;var _0x5adfc1;try{_0x5adfc1=JSON['stringify'](''+_0x11d20f);}catch{_0x5adfc1='\\x22'+this[_0x23db08(0x16f)](_0x11d20f)+'\\x22';}return _0x5adfc1['match'](/^\"([a-zA-Z_][a-zA-Z_0-9]*)\"$/)?_0x5adfc1=_0x5adfc1['substr'](0x1,_0x5adfc1[_0x23db08(0x1bf)]-0x2):_0x5adfc1=_0x5adfc1[_0x23db08(0x160)](/'/g,'\\x5c\\x27')[_0x23db08(0x160)](/\\\\\"/g,'\\x22')[_0x23db08(0x160)](/(^\"|\"$)/g,'\\x27'),_0x5adfc1;}[_0x293447(0x1a5)](_0x1d7671,_0x498e8f,_0x5d4ebb,_0x2a25f5){var _0x17280d=_0x293447;this[_0x17280d(0x12a)](_0x1d7671,_0x498e8f),_0x2a25f5&&_0x2a25f5(),this['_additionalMetadata'](_0x5d4ebb,_0x1d7671),this[_0x17280d(0x1c2)](_0x1d7671,_0x498e8f);}[_0x293447(0x12a)](_0x31a115,_0x24b39a){var _0x31f20d=_0x293447;this[_0x31f20d(0x1c7)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1fd)](_0x31a115,_0x24b39a),this[_0x31f20d(0x1cf)](_0x31a115,_0x24b39a),this['_setNodePermissions'](_0x31a115,_0x24b39a);}[_0x293447(0x1c7)](_0x47f680,_0x21bac2){}['_setNodeQueryPath'](_0x987612,_0x3a623b){}[_0x293447(0x1a8)](_0x3b02a4,_0x17ac04){}[_0x293447(0x15a)](_0x1a1ba3){var _0x13d424=_0x293447;return _0x1a1ba3===this[_0x13d424(0x1eb)];}[_0x293447(0x1c2)](_0x4b2b5b,_0x210fca){var _0x2a5047=_0x293447;this[_0x2a5047(0x1a8)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1f3)](_0x4b2b5b),_0x210fca['sortProps']&&this[_0x2a5047(0x15d)](_0x4b2b5b),this[_0x2a5047(0x132)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x205)](_0x4b2b5b,_0x210fca),this[_0x2a5047(0x1da)](_0x4b2b5b);}[_0x293447(0x13f)](_0x20792e,_0x1d1cce){var _0x581b38=_0x293447;let _0x4b47bf;try{_0x46482b[_0x581b38(0x1ad)]&&(_0x4b47bf=_0x46482b['console']['error'],_0x46482b[_0x581b38(0x1ad)][_0x581b38(0x203)]=function(){}),_0x20792e&&typeof _0x20792e[_0x581b38(0x1bf)]==_0x581b38(0x1f2)&&(_0x1d1cce[_0x581b38(0x1bf)]=_0x20792e[_0x581b38(0x1bf)]);}catch{}finally{_0x4b47bf&&(_0x46482b['console'][_0x581b38(0x203)]=_0x4b47bf);}if(_0x1d1cce[_0x581b38(0x197)]===_0x581b38(0x1f2)||_0x1d1cce['type']===_0x581b38(0x17e)){if(isNaN(_0x1d1cce['value']))_0x1d1cce[_0x581b38(0x1de)]=!0x0,delete _0x1d1cce[_0x581b38(0x123)];else switch(_0x1d1cce[_0x581b38(0x123)]){case Number[_0x581b38(0x193)]:_0x1d1cce['positiveInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case Number[_0x581b38(0x19a)]:_0x1d1cce['negativeInfinity']=!0x0,delete _0x1d1cce[_0x581b38(0x123)];break;case 0x0:this[_0x581b38(0x1fe)](_0x1d1cce[_0x581b38(0x123)])&&(_0x1d1cce[_0x581b38(0x187)]=!0x0);break;}}else _0x1d1cce[_0x581b38(0x197)]==='function'&&typeof _0x20792e[_0x581b38(0x1d7)]==_0x581b38(0x16d)&&_0x20792e[_0x581b38(0x1d7)]&&_0x1d1cce[_0x581b38(0x1d7)]&&_0x20792e['name']!==_0x1d1cce['name']&&(_0x1d1cce[_0x581b38(0x154)]=_0x20792e[_0x581b38(0x1d7)]);}['_isNegativeZero'](_0x138f02){var _0x295204=_0x293447;return 0x1/_0x138f02===Number[_0x295204(0x19a)];}[_0x293447(0x15d)](_0x3c496e){var _0x3d54d6=_0x293447;!_0x3c496e[_0x3d54d6(0x1f6)]||!_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1bf)]||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x144)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x18b)||_0x3c496e[_0x3d54d6(0x197)]===_0x3d54d6(0x20d)||_0x3c496e[_0x3d54d6(0x1f6)][_0x3d54d6(0x1d2)](function(_0xd835fa,_0x3acc3e){var _0x1cb500=_0x3d54d6,_0x5c1e0b=_0xd835fa['name'][_0x1cb500(0x1e2)](),_0x3a5c54=_0x3acc3e[_0x1cb500(0x1d7)][_0x1cb500(0x1e2)]();return _0x5c1e0b<_0x3a5c54?-0x1:_0x5c1e0b>_0x3a5c54?0x1:0x0;});}['_addFunctionsNode'](_0x446f2b,_0x1b11ba){var _0x366039=_0x293447;if(!(_0x1b11ba[_0x366039(0x166)]||!_0x446f2b[_0x366039(0x1f6)]||!_0x446f2b[_0x366039(0x1f6)]['length'])){for(var _0x10e1ba=[],_0x13339e=[],_0x124074=0x0,_0x2b5050=_0x446f2b[_0x366039(0x1f6)]['length'];_0x124074<_0x2b5050;_0x124074++){var _0x3cf9a2=_0x446f2b[_0x366039(0x1f6)][_0x124074];_0x3cf9a2['type']===_0x366039(0x12d)?_0x10e1ba[_0x366039(0x1a0)](_0x3cf9a2):_0x13339e[_0x366039(0x1a0)](_0x3cf9a2);}if(!(!_0x13339e[_0x366039(0x1bf)]||_0x10e1ba[_0x366039(0x1bf)]<=0x1)){_0x446f2b[_0x366039(0x1f6)]=_0x13339e;var _0x549186={'functionsNode':!0x0,'props':_0x10e1ba};this[_0x366039(0x1c7)](_0x549186,_0x1b11ba),this['_setNodeLabel'](_0x549186,_0x1b11ba),this[_0x366039(0x1f3)](_0x549186),this[_0x366039(0x1f8)](_0x549186,_0x1b11ba),_0x549186['id']+='\\x20f',_0x446f2b[_0x366039(0x1f6)][_0x366039(0x184)](_0x549186);}}}[_0x293447(0x205)](_0x4c40b3,_0x1ff381){}[_0x293447(0x1f3)](_0x117591){}[_0x293447(0x174)](_0x51f5ce){var _0x2c42f0=_0x293447;return Array[_0x2c42f0(0x198)](_0x51f5ce)||typeof _0x51f5ce==_0x2c42f0(0x155)&&this[_0x2c42f0(0x16f)](_0x51f5ce)==='[object\\x20Array]';}[_0x293447(0x1f8)](_0x392cbb,_0x281927){}[_0x293447(0x1da)](_0x4c8651){var _0x165202=_0x293447;delete _0x4c8651[_0x165202(0x167)],delete _0x4c8651[_0x165202(0x18c)],delete _0x4c8651[_0x165202(0x17b)];}[_0x293447(0x1cf)](_0x513945,_0x3b49c2){}}let _0x5b4cef=new _0x17520b(),_0x54ed19={'props':0x64,'elements':0x64,'strLength':0x400*0x32,'totalStrLength':0x400*0x32,'autoExpandLimit':0x1388,'autoExpandMaxDepth':0xa},_0x4cc6fd={'props':0x5,'elements':0x5,'strLength':0x100,'totalStrLength':0x100*0x3,'autoExpandLimit':0x1e,'autoExpandMaxDepth':0x2};function _0x51276c(_0x56a223,_0x4d7393,_0x37d4ff,_0x448b33,_0x3bb7c4,_0x4d919b){var _0x371f52=_0x293447;let _0x26f3f4,_0x16ae89;try{_0x16ae89=_0x147949(),_0x26f3f4=_0x4c887a[_0x4d7393],!_0x26f3f4||_0x16ae89-_0x26f3f4['ts']>0x1f4&&_0x26f3f4['count']&&_0x26f3f4['time']/_0x26f3f4['count']<0x64?(_0x4c887a[_0x4d7393]=_0x26f3f4={'count':0x0,'time':0x0,'ts':_0x16ae89},_0x4c887a[_0x371f52(0x168)]={}):_0x16ae89-_0x4c887a[_0x371f52(0x168)]['ts']>0x32&&_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]&&_0x4c887a[_0x371f52(0x168)]['time']/_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]<0x64&&(_0x4c887a[_0x371f52(0x168)]={});let _0x1ec019=[],_0x2bed04=_0x26f3f4[_0x371f52(0x15c)]||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]?_0x4cc6fd:_0x54ed19,_0x2002fe=_0x24b007=>{var _0xf5206a=_0x371f52;let _0x18426c={};return _0x18426c[_0xf5206a(0x1f6)]=_0x24b007[_0xf5206a(0x1f6)],_0x18426c['elements']=_0x24b007[_0xf5206a(0x148)],_0x18426c[_0xf5206a(0x1a2)]=_0x24b007[_0xf5206a(0x1a2)],_0x18426c[_0xf5206a(0x186)]=_0x24b007[_0xf5206a(0x186)],_0x18426c[_0xf5206a(0x178)]=_0x24b007[_0xf5206a(0x178)],_0x18426c[_0xf5206a(0x1f5)]=_0x24b007[_0xf5206a(0x1f5)],_0x18426c[_0xf5206a(0x14b)]=!0x1,_0x18426c[_0xf5206a(0x166)]=!_0x57e6b2,_0x18426c[_0xf5206a(0x152)]=0x1,_0x18426c[_0xf5206a(0x1bc)]=0x0,_0x18426c[_0xf5206a(0x171)]=_0xf5206a(0x169),_0x18426c[_0xf5206a(0x158)]='root_exp',_0x18426c['autoExpand']=!0x0,_0x18426c[_0xf5206a(0x12b)]=[],_0x18426c[_0xf5206a(0x1c3)]=0x0,_0x18426c[_0xf5206a(0x140)]=!0x0,_0x18426c[_0xf5206a(0x1c8)]=0x0,_0x18426c[_0xf5206a(0x204)]={'current':void 0x0,'parent':void 0x0,'index':0x0},_0x18426c;};for(var _0x131ddb=0x0;_0x131ddb<_0x3bb7c4[_0x371f52(0x1bf)];_0x131ddb++)_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'timeNode':_0x56a223===_0x371f52(0x1cd)||void 0x0},_0x3bb7c4[_0x131ddb],_0x2002fe(_0x2bed04),{}));if(_0x56a223===_0x371f52(0x12e)){let _0x3a6f25=Error['stackTraceLimit'];try{Error[_0x371f52(0x1cb)]=0x1/0x0,_0x1ec019[_0x371f52(0x1a0)](_0x5b4cef[_0x371f52(0x1dd)]({'stackNode':!0x0},new Error()[_0x371f52(0x11f)],_0x2002fe(_0x2bed04),{'strLength':0x1/0x0}));}finally{Error[_0x371f52(0x1cb)]=_0x3a6f25;}}return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':_0x1ec019,'id':_0x4d7393,'context':_0x4d919b}]};}catch(_0x6fdb2){return{'method':_0x371f52(0x1a4),'version':_0x17fda6,'args':[{'ts':_0x37d4ff,'session':_0x448b33,'args':[{'type':_0x371f52(0x1e9),'error':_0x6fdb2&&_0x6fdb2[_0x371f52(0x194)]}],'id':_0x4d7393,'context':_0x4d919b}]};}finally{try{if(_0x26f3f4&&_0x16ae89){let _0x46ed87=_0x147949();_0x26f3f4['count']++,_0x26f3f4['time']+=_0x3407be(_0x16ae89,_0x46ed87),_0x26f3f4['ts']=_0x46ed87,_0x4c887a[_0x371f52(0x168)]['count']++,_0x4c887a['hits'][_0x371f52(0x1cd)]+=_0x3407be(_0x16ae89,_0x46ed87),_0x4c887a['hits']['ts']=_0x46ed87,(_0x26f3f4[_0x371f52(0x202)]>0x32||_0x26f3f4[_0x371f52(0x1cd)]>0x64)&&(_0x26f3f4[_0x371f52(0x15c)]=!0x0),(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x202)]>0x3e8||_0x4c887a[_0x371f52(0x168)][_0x371f52(0x1cd)]>0x12c)&&(_0x4c887a[_0x371f52(0x168)][_0x371f52(0x15c)]=!0x0);}}catch{}}}return _0x51276c;}((_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x5ca465,_0x5c8d8e,_0x3928e8,_0x5a585c,_0x3f3d25)=>{var _0x4934aa=_0xcad5d2;if(_0x286e60[_0x4934aa(0x18d)])return _0x286e60[_0x4934aa(0x18d)];if(!J(_0x286e60,_0x3928e8,_0x3f48b2))return _0x286e60[_0x4934aa(0x18d)]={'consoleLog':()=>{},'consoleTrace':()=>{},'consoleTime':()=>{},'consoleTimeEnd':()=>{},'autoLog':()=>{},'autoLogMany':()=>{},'autoTraceMany':()=>{},'coverage':()=>{},'autoTrace':()=>{},'autoTime':()=>{},'autoTimeEnd':()=>{}},_0x286e60[_0x4934aa(0x18d)];let _0x425c22=W(_0x286e60),_0x408ec9=_0x425c22[_0x4934aa(0x129)],_0x4f57cc=_0x425c22[_0x4934aa(0x1ab)],_0x587aeb=_0x425c22[_0x4934aa(0x13b)],_0x4823a2={'hits':{},'ts':{}},_0x1b72ac=Y(_0x286e60,_0x5a585c,_0x4823a2,_0x5ca465),_0x1b1e6b=_0x253605=>{_0x4823a2['ts'][_0x253605]=_0x4f57cc();},_0x57c59a=(_0x599542,_0x1e2fab)=>{let _0x12e671=_0x4823a2['ts'][_0x1e2fab];if(delete _0x4823a2['ts'][_0x1e2fab],_0x12e671){let _0x40c3fd=_0x408ec9(_0x12e671,_0x4f57cc());_0x44510b(_0x1b72ac('time',_0x599542,_0x587aeb(),_0x5731f6,[_0x40c3fd],_0x1e2fab));}},_0x35091e=_0x31d627=>_0x39550d=>{var _0xc1d5f6=_0x4934aa;try{_0x1b1e6b(_0x39550d),_0x31d627(_0x39550d);}finally{_0x286e60[_0xc1d5f6(0x1ad)][_0xc1d5f6(0x1cd)]=_0x31d627;}},_0x6a42e3=_0x30aeda=>_0x4e197f=>{var _0x1c5b5e=_0x4934aa;try{let [_0x1025c3,_0x2db8a6]=_0x4e197f[_0x1c5b5e(0x19e)](_0x1c5b5e(0x182));_0x57c59a(_0x2db8a6,_0x1025c3),_0x30aeda(_0x1025c3);}finally{_0x286e60[_0x1c5b5e(0x1ad)][_0x1c5b5e(0x170)]=_0x30aeda;}};_0x286e60[_0x4934aa(0x18d)]={'consoleLog':(_0x59d10c,_0xdbe705)=>{var _0x42f196=_0x4934aa;_0x286e60['console'][_0x42f196(0x1a4)][_0x42f196(0x1d7)]!==_0x42f196(0x18f)&&_0x44510b(_0x1b72ac('log',_0x59d10c,_0x587aeb(),_0x5731f6,_0xdbe705));},'consoleTrace':(_0x5ae885,_0x2c92c5)=>{var _0x3706a6=_0x4934aa;_0x286e60[_0x3706a6(0x1ad)][_0x3706a6(0x1a4)][_0x3706a6(0x1d7)]!==_0x3706a6(0x1c5)&&_0x44510b(_0x1b72ac('trace',_0x5ae885,_0x587aeb(),_0x5731f6,_0x2c92c5));},'consoleTime':()=>{var _0x169253=_0x4934aa;_0x286e60[_0x169253(0x1ad)]['time']=_0x35091e(_0x286e60[_0x169253(0x1ad)][_0x169253(0x1cd)]);},'consoleTimeEnd':()=>{var _0x218684=_0x4934aa;_0x286e60[_0x218684(0x1ad)][_0x218684(0x170)]=_0x6a42e3(_0x286e60['console']['timeEnd']);},'autoLog':(_0x2d8fba,_0x2f3a42)=>{var _0x5b8014=_0x4934aa;_0x44510b(_0x1b72ac(_0x5b8014(0x1a4),_0x2f3a42,_0x587aeb(),_0x5731f6,[_0x2d8fba]));},'autoLogMany':(_0x15bced,_0xb0778)=>{var _0x54901e=_0x4934aa;_0x44510b(_0x1b72ac(_0x54901e(0x1a4),_0x15bced,_0x587aeb(),_0x5731f6,_0xb0778));},'autoTrace':(_0x31f390,_0x13ce3a)=>{var _0x49313e=_0x4934aa;_0x44510b(_0x1b72ac(_0x49313e(0x12e),_0x13ce3a,_0x587aeb(),_0x5731f6,[_0x31f390]));},'autoTraceMany':(_0x172d93,_0x4bc431)=>{var _0x3375f5=_0x4934aa;_0x44510b(_0x1b72ac(_0x3375f5(0x12e),_0x172d93,_0x587aeb(),_0x5731f6,_0x4bc431));},'autoTime':(_0x4eb614,_0xcaed47,_0x545aa6)=>{_0x1b1e6b(_0x545aa6);},'autoTimeEnd':(_0x4ff496,_0x55180c,_0x50a20f)=>{_0x57c59a(_0x55180c,_0x50a20f);},'coverage':_0x5d797e=>{var _0x2ead12=_0x4934aa;_0x44510b({'method':_0x2ead12(0x189),'version':_0x5ca465,'args':[{'id':_0x5d797e}]});}};let _0x44510b=b(_0x286e60,_0x143385,_0x33d862,_0x140af9,_0x3f48b2,_0x3f3d25),_0x5731f6=_0x286e60[_0x4934aa(0x201)];return _0x286e60[_0x4934aa(0x18d)];})(globalThis,'127.0.0.1','50425',_0xcad5d2(0x16b),_0xcad5d2(0x162),'1.0.0',_0xcad5d2(0x190),_0xcad5d2(0x14a),_0xcad5d2(0x20b),_0xcad5d2(0x1fa));")}catch(e){}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",Kl):Kl(),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("./service-worker.js").then((e=>console.log(...function(e,...t){try{Yl().consoleLog(e,t)}catch(e){}return t}("4016500604_0",`Service Worker Registered!😁 \n ${e.scope}`)))).catch((e=>console.error(`service worker error:😭${e}`)))}))})()})();