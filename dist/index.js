"use strict";var c=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var p=c(function(C,m){
var a=require('@stdlib/number-float64-base-to-float32/dist'),w=require('@stdlib/blas-ext-base-ssumpw/dist').ndarray;function E(r,e,i,n,y){var d,o,u,v,t,s,q;if(s=r-e,r<=0||s<=0)return NaN;if(r===1||n===0)return 0;for(d=w(r,i,n,y)/r,o=y,u=0,v=0,q=0;q<r;q++)t=a(i[o]-d),u=a(u+a(t*t)),v=a(v+t),o+=n;return a(a(u/s)-a(a(v/r)*a(v/s)))}m.exports=E
});var x=c(function(D,l){
var F=require('@stdlib/strided-base-stride2offset/dist'),O=p();function T(r,e,i,n){return O(r,e,i,n,F(r,n))}l.exports=T
});var R=c(function(G,M){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),g=p();b(j,"ndarray",g);M.exports=j
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),f,_=k(h(__dirname,"./native.js"));z(_)?f=A:f=_;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
