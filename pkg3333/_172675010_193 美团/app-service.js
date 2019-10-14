	var __wxAppData = __wxAppData || {}; 	var __wxRoute = __wxRoute || ""; 	var __wxRouteBegin = __wxRouteBegin || ""; 	var __wxAppCode__ = __wxAppCode__ || {};	var global = global || {};	var __WXML_GLOBAL__=__WXML_GLOBAL__ || {};	var __wxAppCurrentFile__=__wxAppCurrentFile__||""; 	var Component = Component || function(){};	var definePlugin = definePlugin || function(){};	var requirePlugin = requirePlugin || function(){};	var Behavior = Behavior || function(){};
		definePlugin("plugin://wx7264e79652f66bc9", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages) {			/*v0.5vv_20180814_syb_cb_crawl*/global.__wcc_version__='v0.5vv_20180814_syb_cb_crawl';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx_wx7264e79652f66bc9=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx_wx7264e79652f66bc9:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx_wx7264e79652f66bc9 || [];
function gz$gwx_wx7264e79652f66bc9_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_1)return __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_1
__WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'||'],[[2,'&&'],[[6],[[7],[3,'goods']],[3,'owl']],[[2,'>'],[[6],[[6],[[7],[3,'goods']],[3,'owl']],[3,'owl_type']],[1,0]]],[[2,'!=='],[[2,'&'],[[7],[3,'redirectType']],[1,2]],[1,0]]])
Z([3,'handleGrouponClick'])
Z([a,[3,'groupon-item '],[[7],[3,'goodsClass']]])
Z([[9],[[9],[[9],[[9],[[9],[[8],'goods',[[7],[3,'goods']]],[[8],'imageFillStyle',[[7],[3,'imageFillStyle']]]],[[8],'imageUrl',[[7],[3,'imageUrl']]]],[[8],'hasStock',[[7],[3,'hasStock']]]],[[8],'isShowGrouponNum',[[7],[3,'isShowGrouponNum']]]],[[8],'imageIconStyle',[[7],[3,'imageIconStyle']]]])
Z([3,'groupon-header'])
Z([[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[9],[[8],'appId',[[7],[3,'appId']]],[[8],'extraData',[[7],[3,'extraData']]]],[[8],'goods',[[7],[3,'goods']]]],[[8],'goodsBodyClass',[[7],[3,'goodsBodyClass']]]],[[8],'activityTagText',[[7],[3,'activityTagText']]]],[[8],'isShowTitle',[[7],[3,'isShowTitle']]]],[[8],'minActivityPrice',[[7],[3,'minActivityPrice']]]],[[8],'minOriginPrice',[[7],[3,'minOriginPrice']]]],[[8],'buttonText',[[7],[3,'buttonText']]]],[[8],'isShowBuyBtn',[[7],[3,'isShowBuyBtn']]]],[[8],'redirectType',[[7],[3,'redirectType']]]])
Z([3,'groupon-body'])
Z([[7],[3,'appId']])
Z([a,z[2][1],z[2][2]])
Z([[7],[3,'extraData']])
Z([3,'navigate'])
Z([a,[3,'/pages/goods/detail/index?alias\x3d'],[[6],[[6],[[7],[3,'goods']],[3,'goodsInfo']],[3,'alias']]])
Z([3,'miniProgram'])
Z(z[3])
Z(z[4])
Z(z[5])
Z(z[6])
Z(z[4])
Z([3,'groupon-item__header'])
Z([[2,'||'],[[2,'!'],[[7],[3,'hasStock']]],[[6],[[7],[3,'goods']],[3,'isEnd']]])
Z([[7],[3,'isShowGrouponNum']])
Z([3,'goods.imageIcon'])
Z(z[6])
Z([a,[3,'groupon-item__body '],[[7],[3,'goodsBodyClass']]])
Z([[7],[3,'isShowTitle']])
Z([[7],[3,'isShowBuyBtn']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_1);return __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_1
}
function gz$gwx_wx7264e79652f66bc9_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_2)return __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_2
__WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cap-grounon-wrapper'])
Z([3,'goods'])
Z([[7],[3,'list']])
Z([3,'alias'])
Z([[7],[3,'appId']])
Z([3,'handleGrouponBuyClick'])
Z([3,'handleGrouponClick'])
Z([[2,'-'],[[2,'-'],[[7],[3,'buy']],[[7],[3,'btn']]],[[7],[3,'type']]])
Z([[7],[3,'extraData']])
Z([[7],[3,'goods']])
Z([[7],[3,'imageFillStyle']])
Z([[7],[3,'redirectType']])
Z([[7],[3,'showBuyButton']])
Z([[7],[3,'showGrouponNum']])
Z([[7],[3,'showTitle']])
Z([[7],[3,'size']])
Z([[7],[3,'isShowMore']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_2);return __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_2
}
function gz$gwx_wx7264e79652f66bc9_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_3)return __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_3
__WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'loading']]])
Z([[7],[3,'appId']])
Z([[7],[3,'buyButtonType']])
Z([[7],[3,'extraData']])
Z([[7],[3,'imageFillStyle']])
Z([[7],[3,'list']])
Z([[7],[3,'showBuyButton']])
Z([[7],[3,'showGrouponNum']])
Z([[7],[3,'showTitle']])
Z([[7],[3,'size']])
})(__WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_3);return __WXML_GLOBAL__.ops_cached.$gwx_wx7264e79652f66bc9_3
}
__WXML_GLOBAL__.ops_set.$gwx_wx7264e79652f66bc9=z;
__WXML_GLOBAL__.ops_init.$gwx_wx7264e79652f66bc9=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./@youzan/captain-weapp/dist/packages/groupon/components/item/index.wxml','./@youzan/captain-weapp/dist/packages/groupon/index.wxml','./components/groupon/index.wxml'];d_[x[0]]={}
d_[x[0]]["groupon-header"]=function(e,s,r,gg){
var z=gz$gwx_wx7264e79652f66bc9_1()
var b=x[0]+':groupon-header'
r.wxVkey=b
gg.f=$gdc(f_["./@youzan/captain-weapp/dist/packages/groupon/components/item/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',18,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,19,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,20,e,s,gg)){oD.wxVkey=1
}
var fE=_v()
_(oB,fE)
if(_oz(z,21,e,s,gg)){fE.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
fE.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[0]]["groupon-body"]=function(e,s,r,gg){
var z=gz$gwx_wx7264e79652f66bc9_1()
var b=x[0]+':groupon-body'
r.wxVkey=b
gg.f=$gdc(f_["./@youzan/captain-weapp/dist/packages/groupon/components/item/index.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_n('view')
_rz(z,oB,'class',23,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,24,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(oB,oD)
if(_oz(z,25,e,s,gg)){oD.wxVkey=1
}
xC.wxXCkey=1
oD.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_wx7264e79652f66bc9_1()
var oB=_n('view')
var xC=_v()
_(oB,xC)
if(_oz(z,0,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'view',['catch:tap',1,'class',1],[],e,s,gg)
var fE=_v()
_(oD,fE)
var cF=_oz(z,4,e,s,gg)
var hG=_gd(x[0],cF,e_,d_)
if(hG){
var oH=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
fE.wxXCkey=3
hG(oH,oH,fE,gg)
gg.f=cur_globalf
}
else _w(cF,x[0],7,18)
var cI=_v()
_(oD,cI)
var oJ=_oz(z,6,e,s,gg)
var lK=_gd(x[0],oJ,e_,d_)
if(lK){
var aL=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[0],8,18)
_(xC,oD)
}
else{xC.wxVkey=2
var tM=_mz(z,'navigator',['appId',7,'class',1,'extraData',2,'openType',3,'path',4,'target',5],[],e,s,gg)
var eN=_v()
_(tM,eN)
var bO=_oz(z,14,e,s,gg)
var oP=_gd(x[0],bO,e_,d_)
if(oP){
var xQ=_1z(z,13,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[0],20,18)
var oR=_v()
_(tM,oR)
var fS=_oz(z,16,e,s,gg)
var cT=_gd(x[0],fS,e_,d_)
if(cT){
var hU=_1z(z,15,e,s,gg) || {}
var cur_globalf=gg.f
oR.wxXCkey=3
cT(hU,hU,oR,gg)
gg.f=cur_globalf
}
else _w(fS,x[0],21,18)
_(xC,tM)
}
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_wx7264e79652f66bc9_2()
var cW=_n('view')
_rz(z,cW,'class',0,e,s,gg)
var lY=_v()
_(cW,lY)
var aZ=function(e2,t1,b3,gg){
var x5=_mz(z,'groupon-item',['appId',4,'bind:buy',1,'bind:item-click',2,'buyBtnType',3,'extraData',4,'goods',5,'imageFillStyle',6,'redirectType',7,'showBuyButton',8,'showGrouponNum',9,'showTitle',10,'size',11],[],e2,t1,gg)
_(b3,x5)
return b3
}
lY.wxXCkey=4
_2z(z,2,aZ,e,s,gg,lY,'goods','index','alias')
var oX=_v()
_(cW,oX)
if(_oz(z,16,e,s,gg)){oX.wxVkey=1
}
oX.wxXCkey=1
_(r,cW)
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_wx7264e79652f66bc9_3()
var f7=_v()
_(r,f7)
if(_oz(z,0,e,s,gg)){f7.wxVkey=1
var c8=_mz(z,'cap-groupon',['appId',1,'buyButtonType',1,'extraData',2,'imageFillStyle',3,'list',4,'showBuyButton',5,'showGrouponNum',6,'showTitle',7,'size',8],[],e,s,gg)
_(f7,c8)
}
f7.wxXCkey=1
f7.wxXCkey=3
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
}catch(err){
console.log(err)
}
return root;
}
}
}

				global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/@youzan/captain-weapp/dist/packages/groupon/components/item/index.json'] = {
  "component": true
}
;
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/@youzan/captain-weapp/dist/packages/groupon/components/item/index.wxml'] = $gwx_wx7264e79652f66bc9( './@youzan/captain-weapp/dist/packages/groupon/components/item/index.wxml' );
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/@youzan/captain-weapp/dist/packages/groupon/index.json'] = {"component":true,"usingComponents":{"groupon-item":"components/item/index"}};
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/@youzan/captain-weapp/dist/packages/groupon/index.wxml'] = $gwx_wx7264e79652f66bc9( './@youzan/captain-weapp/dist/packages/groupon/index.wxml' );
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/components/groupon/index.json'] = {"component":true,"usingComponents":{"cap-groupon":"../../@youzan/captain-weapp/dist/packages/groupon/index"}};
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/components/groupon/index.wxml'] = $gwx_wx7264e79652f66bc9( './components/groupon/index.wxml' );
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/plugin.json'] = {
  "publicComponents": {
    "groupon": "components/groupon/index"
  },
  "main": "index.js"
};
		global.__wxAppCode__['plugin-private://wx7264e79652f66bc9/plugin.wxml'] = $gwx_wx7264e79652f66bc9( './plugin.wxml' );
	
				define("api/data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};module.exports=function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==(void 0===e?"undefined":n(e))&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var c in e)t.d(o,c,function(n){return e[n]}.bind(null,c));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=11)}([function(e,n,t){n.__esModule=!0;var r=function(e){return e&&e.__esModule?e:{default:e}}(t(39));n.default=r.default||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}},function(e,n){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,n,t){e.exports=!t(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){return"object"==(void 0===e?"undefined":n(e))?null!==e:"function"==typeof e}},function(e,n){var t=e.exports={version:"2.5.7"};"number"==typeof __e&&(__e=t)},function(e,n){var t=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=t)},function(e,n){var t=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:t)(e)}},function(e,n){e.exports=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e}},function(e,n,t){var r=t(23);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},function(e,n,t){var r=t(8),o=t(7);e.exports=function(e){return r(o(e))}},function(e,n){var t={}.hasOwnProperty;e.exports=function(e,n){return t.call(e,n)}},function(t,r,o){function c(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split("#")[0].split("?"),n={};return e[1]&&e[1].split("&").forEach(function(e){var t=e.split("=");n[t[0]]=t.slice(1).join("=")}),n}function i(e){return G||(D=wx.getStorageSync(A)||{},N=Object.keys(D)||[],G=!0),D||(D={},N=[]),D[e]}function u(e,n){return new Promise(function(t){a(j()({},n,{success:function(r){!function(e,n){if(i(e)&&(D[e]=n),N.length>z){var t=N.shift();delete D[t]}N.push(e),D[e]=n,L(D)}(e,r),n.success(r),t(r)}}))})}function a(e){wx.request(j()({},e,{success:function(n){200!==n.statusCode?e.fail({msg:"服务器请求错误，请稍后再试"}):e.success(n.data)}}))}function s(e){return e=_({},U,e),new Promise(function(n,t){var r={url:q(e.urlData),method:e.method,data:e.data,header:e.header,yzconfig:e.config,success:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};n(e)},fail:function(e){t(e)}};R(r)})}function f(){}function l(e){if(e=function(e){return e.api&&e.api.indexOf("retail")>-1&&(e=Object.assign({},e,{query:{retail_source:"MINAPP-RETAIL-SCAN"}})),e}(e=_({},W,e)),!B.token.accessToken){var t=F.get("app:token");t&&"object"==(void 0===t?"undefined":n(t))&&(B.token=t,B.hasToken=!0)}return new Promise(function(t,r){var o=function o(){T.off("app:token:success",o);var c={access_token:B.token.accessToken},i={urlData:{origin:"carmen",pathname:"api/oauthentry/"+e.api,query:_(c,e.query)},config:e.config,method:(e.method||"").toUpperCase(),data:e.data,header:e.header};return console.info("[carmen:request]",e.api),s(i).then(function(o){var c=function e(t){var r=t.error_response;if(!r){var o=t.response;"object"!=(void 0===o?"undefined":n(o))&&(console.warn("请求返回内容非对象格式，可能会导致数据丢失"),o={value:t.response});var c=o;if(t.fromCache){c.fromCache=t.fromCache;var i=t.cacheData||{};i.refresh&&(i.refreshPromise=i.refreshPromise.then(function(n){var t=e(n),r=t.error,o=t.res,c=void 0===o?{}:o;return r?Promise.reject(r):Promise.resolve(c)})),c.cacheData=i}return console.info("[carmen:success]",c),{error:null,res:c}}return{error:r}}(o),i=c.error,u=c.res,a=void 0===u?{}:u;if(!i){console.info("[h5:success]",a);try{e.success&&e.success(a)}catch(e){return r(e),p(e)}return t(a)}if(40010===i.code)return B.hasToken=!1,e.config=e.config||{},e.config.cache=!1,p(i),void l(e);p({type:"yz:carmen",msg:"服务器错误",code:-99999},e)}).catch(function(){p({type:"yz:carmen",msg:"服务器错误",code:-99999},e)}).then(function(){return e.complete()})};if(B.hasToken)return o();T.once("app:token:success",function(e){B.hasToken=!0,B.token=e,o()})})}function p(e,n){console.error("[carmen:fail]",n.api,e),n.fail&&n.fail(e)}function d(e){return/^\d+$/.test(e)?e:e.replace(/[A-Z]/g,function(e){return"_"+e.toLowerCase()})}function h(e){return/^\d+$/.test(e)?e:e.replace(/\_[a-z]/g,function(e){return e[1].toUpperCase()})}function v(e){var t=e=Object.assign({},Y,e),r=t.success,o=void 0===r?ne:r,c=t.fail,i=void 0===c?ne:c;if(!ee.token.accessToken){var u=F.get("app:token");u&&"object"==(void 0===u?"undefined":n(u))&&(ee.token=u,ee.hasToken=!0)}return new Promise(function(t,r){var c=function c(){T.off("app:token:success",c);var u={access_token:ee.token.accessToken},a={urlData:{origin:e.origin||"h5",pathname:e.path,query:Object.assign(u,e.query)},config:e.config,method:(e.method||"").toUpperCase(),data:e.data,header:Object.assign({"Extra-Data":JSON.stringify({is_weapp:1,sid:ee.token.sessionId||ee.token.session_id,version:e.version})},e.header)};return console.info("[h5:request]",e.path),s(a).then(function(c){var u=function e(t){if(0===t.code){var r=t.data;"object"!=(void 0===r?"undefined":n(r))&&(console.warn("请求返回内容非对象格式，可能会导致数据丢失"),r={value:t.data});var o=r;if(t.fromCache){o.fromCache=t.fromCache;var c=t.cacheData||{};c.refresh&&(c.refreshPromise=c.refreshPromise.then(function(n){var t=e(n),r=t.error,o=t.res,c=void 0===o?{}:o;return r?Promise.reject(r):Promise.resolve(c)})),o.cacheData=c}return{error:null,res:o}}return{error:{code:t.code,msg:t.msg},res:{}}}(c),a=u.error,s=u.res,f=void 0===s?{}:s;if(!a){console.info("[h5:success]",f);try{o(f)}catch(e){return r(e),i(e)}return t(f)}if(-1===a.code)return console.info("[h5:40010] AccessToken不存在或已过期, 正在重新登录..."),ee.hasToken=!1,F.remove("app:token"),e.config=e.config||{},e.config.cache=!1,i(a),void v(e);var l={code:c.code||-9999,msg:c.errMsg||c.msg||"请求失败，请稍后重试",res:c};return r(l),Promise.reject(l)}).catch(function(e){console.log("error"),i(e);var n={code:e.code||-9999,msg:e.errMsg||"请求失败，请稍后重试",res:e};return r(n),Promise.reject(n)})};return ee.hasToken?c():T.once("app:token:success",function(e){ee.hasToken=!0,ee.token=e,c()})})}function y(e){return e.replace(ce,function(e){return"_"+e[0].toLowerCase()})}function g(e){return e.replace(oe,function(e,n){return n.toUpperCase()})}function m(e,t){return Array.isArray(e)?e.map(function(e){return m(e,t)}):function(e){var t=void 0===e?"undefined":n(e);return null!==e&&("object"===t||"function"===t)}(e)&&Object.keys(e).forEach(function(n){var r=t(n);e[r]=m(e[n],t),n!==r&&delete e[n]}),e}function b(e){re(e);var n=function(e){return m(e,y)}({orderState:"ALL",pageNo:e.pageNo||1,pageSize:e.pageSize||10,useHasNext:!0,orderMark:"wx_shop"});return X({api:"kdt.trade.buyer.search/1.0.0/get",query:n}).then(function(e){return function(e){return m(e,g)}(e)})}function k(e){re(e);var n=e.goodsSource,t=void 0===n?0:n,r=e.orderRule,o=void 0===r?0:r,c=e.activityIds,i=void 0===c?"":c,u=e.goodsNum;return te({path:"wscshop/ump/groupon/grouponList.json",method:"get",data:{goodsSource:t,orderRule:o,activityIds:i,goodsNum:void 0===u?20:u,showGrouponNum:1,hideSoldOutGoods:1}})}var w;o.r(r);var x=o(0),j=o.n(x),_=function(e){return([].slice.call(arguments,1)||[]).forEach(function(n){if(n)for(var t in n)e[t]=n[t]}),e},O=/\s+/,S=function(e,t,r,o){if(!r)return!0;if("object"==(void 0===r?"undefined":n(r))){for(var c in r)e[t].apply(e,[c,r[c]].concat(o));return!1}if(O.test(r)){for(var i=r.split(O),u=0,a=i.length;u<a;u++)e[t].apply(e,[i[u]].concat(o));return!1}return!0},P=function(e,n){var t,r=-1,o=e.length,c=n[0],i=n[1],u=n[2];switch(n.length){case 0:for(;++r<o;)(t=e[r]).callback.call(t.ctx);return;case 1:for(;++r<o;)(t=e[r]).callback.call(t.ctx,c);return;case 2:for(;++r<o;)(t=e[r]).callback.call(t.ctx,c,i);return;case 3:for(;++r<o;)(t=e[r]).callback.call(t.ctx,c,i,u);return;default:for(;++r<o;)(t=e[r]).callback.apply(t.ctx,n)}},T={on:function(e,n,t){return S(this,"on",e,[n,t])&&n?(this._events||(this._events={}),(this._events[e]||(this._events[e]=[])).push({callback:n,context:t,ctx:t||this}),this):this},once:function(e,n,t){if(!S(this,"once",e,[n,t])||!n)return this;var r=this,o=function(e){var n,t=!1;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}}(function(){r.off(e,o),n.apply(this,arguments)});return o._callback=n,this.on(e,o,t)},off:function(e,n,t){var r,o,c,i,u,a,s,f;if(!this._events||!S(this,"off",e,[n,t]))return this;if(!e&&!n&&!t)return this._events={},this;for(u=0,a=(i=e?[e]:Object.keys(this._events)).length;u<a;u++)if(e=i[u],c=this._events[e]){if(this._events[e]=r=[],n||t)for(s=0,f=c.length;s<f;s++)o=c[s],(n&&n!==o.callback&&n!==o.callback._callback||t&&t!==o.context)&&r.push(o);r.length||delete this._events[e]}return this},trigger:function(e){if(!this._events)return this;var n=[].slice.call(arguments,1);if(!S(this,"trigger",e,n))return this;var t=this._events[e],r=this._events.all;return t&&P(t,n),r&&P(r,arguments),this}},C=function(e){var n="";for(var t in e)""!==e[t]&&(n+=t.trim()+"="+e[t]+"&");return n?"?"+n.slice(0,n.length-1):""},E={add:function(e,n){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||0===e.length||0===e.trim().indexOf("javascript"))return"";var r=e.split("#"),o=r[0].split("?"),i=c(e);return Object.keys(n).forEach(function(e){i[e.trim()]=t?encodeURIComponent(n[e]):n[e]}),e=o[0]+C(i),r[1]?e+="#"+r[1]:e},getAll:c},I=(w={cashier:"https://cashier.youzan.com",uic:"https://uic.youzan.com",carmen:"https://open.youzan.com",h5:"https://h5.youzan.com",trade:"https://trade.youzan.com",qiniu:"https://img.yzcdn.cn"},e(w,"cashier","https://cashier.youzan.com"),e(w,"money","https://money.youzan.com"),w),M={origin:"carmen",path:"",query:{}},q=function(e){var n=((e=_({},M,e)).pathname||"").startsWith("/"),t=I[e.origin]+(n?"":"/")+e.pathname;return E.add(t,e.query||{})},z=20,A="request-cache",D=null,N=[],G=!1,L=function(e,n,t){function r(){i=this,c=arguments,u=Date.now();var r=t&&!o;return o||(o=setTimeout(s,n)),r&&(a=e.apply(i,c),i=c=null),a}var o,c,i,u,a,s=function r(){var s=Date.now()-u;s<n&&s>=0?o=setTimeout(r,n-s):(o=null,t||(a=e.apply(i,c),o||(i=c=null)))};return r.cancel=function(){clearTimeout(o),o=null},r}(function(e){wx.setStorage({key:A,data:e})},3e3),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.yzconfig;if((void 0===n?{}:n).cache)return e.method&&"GET"!==e.method?(console.warn("暂不支持非get请求缓存"),void a(e)):void function(e){var n=e.yzconfig,t=void 0===n?{}:n,r=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).url,n=void 0===e?"":e;return n=n.replace(/^http(s)?:\/\/[^/]*\//,"").replace(/access_token=([^&]*)/,"").replace(/appid=([^&]*)/,"")}(e),o=i(r);o&&!t.forceRefreshCache?setTimeout(function(){var n={};t.needRefresh&&(n.refresh=!0,n.refreshPromise=u(r,j()({},e,{success:function(){}}))),e.success(j()({},o,{fromCache:!0,cacheData:n}))},0):u(r,e)}(e);a(e)},U={method:"GET",header:{"content-type":"application/x-www-form-urlencoded"}},F={set:function(e,n,t){var r=(t=t||{}).expire||7;try{wx.setStorageSync(e,{value:n,version:t.version||"",expire:Date.now()+24*r*3600*1e3})}catch(e){console.error(e)}},get:function(e){try{var n=wx.getStorageSync(e);if(n.expire>Date.now())return n.value;wx.removeStorage({key:e})}catch(e){console.error(e)}},remove:function(e){try{wx.removeStorageSync(e)}catch(e){console.error(e)}},clear:function(){try{wx.clearStorageSync()}catch(e){console.error(e)}}},W={config:{},method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},success:f,fail:f,complete:f},B={hasToken:!1,token:{}},Z=function(e,n){return hasOwnProperty.call(e,n)},$=function(e,n,t){if(null!=e)if(e.length===+e.length)for(var r=0,o=e.length;r<o;r++)n.call(t,e[r],r,e);else{var c=function(e){if(e!==Object(e))throw new TypeError("Invalid object");var n=[];for(var t in e)Z(e,t)&&n.push(t);return n}(e);for(r=0,o=c.length;r<o;r++)n.call(t,e[c[r]],c[r],e)}},H={toSnakeCase:function e(t){if("string"==typeof t)return d(t);if("object"==(void 0===t?"undefined":n(t))){var r={};return t instanceof Array&&(r=[]),$(t,function(t,o){r[d(o)]="object"==(void 0===t?"undefined":n(t))?e(t):t}),r}return t},toCamelCase:function e(t){if("string"==typeof t)return h(t);if("object"==(void 0===t?"undefined":n(t))){var r={};return t instanceof Array&&(r=[]),$(t,function(t,o){r[h(o)]="object"==(void 0===t?"undefined":n(t))?e(t):t}),r}return t}},J=null,K={method:"POST",header:{"content-type":"application/x-www-form-urlencoded"}},Q=function(e){var t=F.get("app:token");return t&&"object"==(void 0===t?"undefined":n(t))?Promise.resolve(t):function e(n){return J||(J=new Promise(function(t,r){var o=n=Object.assign({},K,n),c=o.origin,i=o.path,u=o.query,a=o.method,f=o.data,l=o.header;return s({urlData:{origin:c||"h5",pathname:i,query:u},method:(a||"").toUpperCase(),data:f,header:l}).then(function(o){var c=o.code,i=o.data,u=H.toCamelCase(i);0==+c?(F.set("app:token",u),J=null,t(u),n.success&&n.success(u)):135000025==+c?(setTimeout(function(){e(n)},100),n.fail&&n.fail(u)):(r(o),n.fail&&n.fail(u))}).catch(function(e){n.fail&&n.fail({code:-1,error:e})})}))}(e)},V=function(){var e=F.get("app:token:params");return e||Promise.reject(),Q({path:"wscuser/wx/getPluginAuthSessionKey.json",method:"post",data:e}).catch(function(e){-1==+e.code&&wx.showToast({title:"AppId错误"})})},X=function(e){return new Promise(function(t,r){V().then(function(){var o=F.get("app:token");o&&"object"==(void 0===o?"undefined":n(o))&&(e.query=j()({kdt_id:o.kdtId},e.query)),l(j()({},e,{success:function(n){return e.success&&e.success(n),t(n)},fail:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(-1!=+n.code)return e.fail&&e.fail(n),r(n);V().then(function(e){T.trigger("app:token:success",e)})}}))})})},Y={method:"GET",header:{"content-type":"application/json"}},ee={hasToken:!1,token:{}},ne=function(){},te=function(e){return new Promise(function(t,r){V().then(function(){var o=F.get("app:token");o&&"object"==(void 0===o?"undefined":n(o))&&(e.data=j()({},e.data,{kdtId:o.kdtId})),v(j()({},e,{success:function(e){return t(e)},fail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(-1!=+e.code)return r(e);V().then(function(e){T.trigger("app:token:success",e)})}}))})})},re=function(e){if(e&&e.appId){var n=e.shopId,t=e.appId,r=e.openId;F.set("app:token:params",{appId:t,openId:r,shopId:n})}},oe=/_(\w)/g,ce=/[A-Z]/g;o.d(r,"fetchOrderList",function(){return b}),o.d(r,"fetchGrouponList",function(){return k})},function(e,n,t){var r=t(7);e.exports=function(e){return Object(r(e))}},function(e,n){n.f={}.propertyIsEnumerable},function(e,n){n.f=Object.getOwnPropertySymbols},function(e,n){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,n){var t=0,r=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++t+r).toString(36))}},function(e,n){e.exports=!0},function(e,n,t){var r=t(4),o=t(5),c=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(e.exports=function(e,n){return c[e]||(c[e]=void 0!==n?n:{})})("versions",[]).push({version:r.version,mode:t(17)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,n,t){var r=t(18)("keys"),o=t(16);e.exports=function(e){return r[e]||(r[e]=o(e))}},function(e,n,t){var r=t(6),o=Math.max,c=Math.min;e.exports=function(e,n){return(e=r(e))<0?o(e+n,0):c(e,n)}},function(e,n,t){var r=t(6),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},function(e,n,t){var r=t(9),o=t(21),c=t(20);e.exports=function(e){return function(n,t,i){var u,a=r(n),s=o(a.length),f=c(i,s);if(e&&t!=t){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((e||f in a)&&a[f]===t)return e||f||0;return!e&&-1}}},function(e,n){var t={}.toString;e.exports=function(e){return t.call(e).slice(8,-1)}},function(e,n,t){var r=t(10),o=t(9),c=t(22)(!1),i=t(19)("IE_PROTO");e.exports=function(e,n){var t,u=o(e),a=0,s=[];for(t in u)t!=i&&r(u,t)&&s.push(t);for(;n.length>a;)r(u,t=n[a++])&&(~c(s,t)||s.push(t));return s}},function(e,n,t){var r=t(24),o=t(15);e.exports=Object.keys||function(e){return r(e,o)}},function(e,n,t){var r=t(25),o=t(14),c=t(13),i=t(12),u=t(8),a=Object.assign;e.exports=!a||t(1)(function(){var e={},n={},t=Symbol(),r="abcdefghijklmnopqrst";return e[t]=7,r.split("").forEach(function(e){n[e]=e}),7!=a({},e)[t]||Object.keys(a({},n)).join("")!=r})?function(e,n){for(var t=i(e),a=arguments.length,s=1,f=o.f,l=c.f;a>s;)for(var p,d=u(arguments[s++]),h=f?r(d).concat(f(d)):r(d),v=h.length,y=0;v>y;)l.call(d,p=h[y++])&&(t[p]=d[p]);return t}:a},function(e,n){e.exports=function(e,n){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:n}}},function(e,n,t){var r=t(3);e.exports=function(e,n){if(!r(e))return e;var t,o;if(n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;if("function"==typeof(t=e.valueOf)&&!r(o=t.call(e)))return o;if(!n&&"function"==typeof(t=e.toString)&&!r(o=t.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},function(e,n,t){var r=t(3),o=t(5).document,c=r(o)&&r(o.createElement);e.exports=function(e){return c?o.createElement(e):{}}},function(e,n,t){e.exports=!t(2)&&!t(1)(function(){return 7!=Object.defineProperty(t(29)("div"),"a",{get:function(){return 7}}).a})},function(e,n,t){var r=t(3);e.exports=function(e){if(!r(e))throw TypeError(e+" is not an object!");return e}},function(e,n,t){var r=t(31),o=t(30),c=t(28),i=Object.defineProperty;n.f=t(2)?Object.defineProperty:function(e,n,t){if(r(e),n=c(n,!0),r(t),o)try{return i(e,n,t)}catch(e){}if("get"in t||"set"in t)throw TypeError("Accessors not supported!");return"value"in t&&(e[n]=t.value),e}},function(e,n,t){var r=t(32),o=t(27);e.exports=t(2)?function(e,n,t){return r.f(e,n,o(1,t))}:function(e,n,t){return e[n]=t,e}},function(e,n){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,n,t){var r=t(34);e.exports=function(e,n,t){if(r(e),void 0===n)return e;switch(t){case 1:return function(t){return e.call(n,t)};case 2:return function(t,r){return e.call(n,t,r)};case 3:return function(t,r,o){return e.call(n,t,r,o)}}return function(){return e.apply(n,arguments)}}},function(e,n,t){var r=t(5),o=t(4),c=t(35),i=t(33),u=t(10),a=function e(n,t,a){var s,f,l,p=n&e.F,d=n&e.G,h=n&e.S,v=n&e.P,y=n&e.B,g=n&e.W,m=d?o:o[t]||(o[t]={}),b=m.prototype,k=d?r:h?r[t]:(r[t]||{}).prototype;for(s in d&&(a=t),a)(f=!p&&k&&void 0!==k[s])&&u(m,s)||(l=f?k[s]:a[s],m[s]=d&&"function"!=typeof k[s]?a[s]:y&&f?c(l,r):g&&k[s]==l?function(e){var n=function(n,t,r){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(n);case 2:return new e(n,t)}return new e(n,t,r)}return e.apply(this,arguments)};return n.prototype=e.prototype,n}(l):v&&"function"==typeof l?c(Function.call,l):l,v&&((m.virtual||(m.virtual={}))[s]=l,n&e.R&&b&&!b[s]&&i(b,s,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,e.exports=a},function(e,n,t){var r=t(36);r(r.S+r.F,"Object",{assign:t(26)})},function(e,n,t){t(37),e.exports=t(4).Object.assign},function(e,n,t){e.exports={default:t(38),__esModule:!0}}]); 
 			}); 
		define("index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t=require("./api/data");module.exports={fetchOrderList:t.fetchOrderList,fetchGrouponList:t.fetchGrouponList}; 
 			}); 
		define("utils/camelize.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";function e(e){return e.replace(c,function(e){return"_"+e[0].toLowerCase()})}function t(e){return e.replace(u,function(e,t){return t.toUpperCase()})}function n(e){var t=void 0===e?"undefined":o(e);return null!==e&&("object"===t||"function"===t)}function r(e,t){return Array.isArray(e)?e.map(function(e){return r(e,t)}):n(e)&&Object.keys(e).forEach(function(n){var o=t(n);e[o]=r(e[n],t),n!==o&&delete e[n]}),e}Object.defineProperty(exports,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.decamelize=function(t){return r(t,e)},exports.camelize=function(e){return r(e,t)};var u=/_(\w)/g,c=/[A-Z]/g; 
 			}); 
		global.__wxAppCurrentFile__ = 'plugin-private://wx7264e79652f66bc9/@youzan/captain-weapp/dist/packages/groupon/components/item/index.js';	define("@youzan/captain-weapp/dist/packages/groupon/components/item/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(e){function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}var n={};o.m=e,o.c=n,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==(void 0===e?"undefined":t(e))&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)o.d(i,r,function(t){return e[t]}.bind(null,r));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=51)}({11:function(t,e,o){e.a=function(t){return([].slice.call(arguments,1)||[]).forEach(function(e){if(e)for(var o in e)t[o]=e[o]}),t}},50:function(t,e,o){var n=function(t,e){return hasOwnProperty.call(t,e)};e.a=function(t,e,o){if(null!=t)if(t.length===+t.length)for(var i=0,r=t.length;i<r;i++)e.call(o,t[i],i,t);else{var u=function(t){if(t!==Object(t))throw new TypeError("Invalid object");var e=[];for(var o in t)n(t,o)&&e.push(o);return e}(t);for(i=0,r=u.length;i<r;i++)e.call(o,t[u[i]],u[i],t)}}},51:function(t,e,o){function n(t){this.money=t}function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!t||t.match(/^data:/i))return t;if(l.forEach(function(e){t.replace(e,p)}),t.match(/^(https?:)?\/\//i)){if(!t.match(p)&&!t.match("dn-kdt-img-test.qbox.me")||t.match("!"))return t;t=""+t+e}else t=p+"/"+t+e;return function(t){var e=1,o=t.match(h);return m?o&&o.length>=4?("+2x"===o[5]&&(e=2),t=t.replace(h,".")+o[1]+"?imageView2/2/w/"+parseInt(o[2],10)*e+"/h/"+parseInt(o[3],10)*e+"/q/"+(o[4]||75)+"/format/"+("gif"===o[1]?"gif":"webp")):t=r(t,!0):o&&o.length>=4?("+2x"===o[5]&&(e=2),t=t.replace(h,".")+o[1]+"?imageView2/2/w/"+parseInt(o[2],10)*e+"/h/"+parseInt(o[3],10)*e+"/q/"+(o[4]||75)+"/format/"+("webp"===o[1]?"jpg":o[1])):t=r(t,!1),t}(t)}function r(t,e){var o=/(\?imageView2\/\d\/w\/\d+\/h\/\d+\/q\/\d+\/format\/)(\w+)/,n=t;if(o.test(t)){var i=t.match(o)[2];e?"gif"!==i&&"webp"!==i&&(n=t.replace(o,"$1webp")):"webp"===i&&(n=t.replace(o,"$1jpg"))}return n}o.r(e);var u={SIZE:{BIG:0,SMALL:1,LIST:2},SHOW_BUY_BTN:{HIDE:0,SHOW:1},SHOW_TITLE:{HIDE:0,SHOW:1},SHOW_DISCOUNT:{HIDE:0,SHOW:1},SHOW_ORIGIN_PRICE:{HIDE:0,SHOW:1},SHOW_COUNTDOWN:{HIDE:0,SHOW:1},SHOW_GROUP_NUMS:{HIDE:0,SHOW:1},SIZE_MAP:{0:"big",1:"small",2:"list"}},a=o(11);n.prototype=Object(a.a)(n.prototype,{toCent:function(){return parseInt(Math.round(100*this.money),10)||0},toYuan:function(){return this.adjustFixed(parseFloat(this.money/100)||0,2)},adjustFixed:function(t,e){return(Math.round(t*Math.pow(10,e))/Math.pow(10,e)).toFixed(e)}});var c=function(t){return new n(t)},s=o(50),p="https://img.yzcdn.cn",m=function(){var t=wx.getSystemInfoSync().platform;return"devtools"===t||"android"===t}(),l=[/^(https?:)?\/\/imgqn.koudaitong.com/,/^(https?:)?\/\/kdt-img.koudaitong.com/,/^(https?:)?\/\/img.yzcdn.cn/,/^(https?:)?\/\/dn-kdt-img.qbox.me/],h=/\.([^.!]+)!([0-9]{1,4})x([0-9]{1,4})q?([0-9]{0,2}|100)?(\+2x)?\..+/;Component({properties:{appId:String,goods:{type:Object,value:{}},showTitle:{type:Number,value:1},showGrouponNum:{type:Number,value:1},size:{type:Number,value:0},showBuyBtn:{type:Number,value:1},buyBtnType:{type:Number,value:1},imageFillStyle:{type:Number,value:2},extraData:Object,redirectType:{type:Number,value:0}},data:{goodsClass:"",hasStock:!1,isShowGrouponNum:!1,imageIconStyle:"",imageUrl:"",goodsBodyClass:"",isShowTitle:!1,activityTagText:"",minActivityPrice:{},minOriginPrice:"",buttonText:"",isShowBuyBtn:!1},attached:function(){this.setData({goodsClass:this.computeGoodsClass(),hasStock:this.computeHasStock(),isShowGrouponNum:this.computeIsShowGrouponNum(),imageUrl:this.computeImageUrl(),imageIconStyle:this.computeImageIconStyle(),goodsBodyClass:this.computeGoodsBodyClass(),isShowTitle:this.isShowTitle(),activityTagText:this.computeActivityTagText(),minActivityPrice:this.computeMinActivityPrice(),minOriginPrice:this.computeMinOriginPrice(),buttonText:this.computeButtonText(),isShowBuyBtn:this.computeIsShowBuyButton()})},methods:{computeGoodsClass:function(){var t=this.data,e=t.goods,o=t.size,n="groupon-item--"+u.SIZE_MAP[o.toString()];return this.computeHasStock()||(n+=" groupon-item--soldout"),e.isEnd&&(n+=" groupon-item--end"),n},computeHasStock:function(){return this.data.goods.goodsInfo.totalStock>0},computeIsShowGrouponNum:function(){var t=this.data,e=t.showGrouponNum,o=t.goods;return e&&e===u.SHOW_GROUP_NUMS.SHOW&&o.groupNums>0},computeImageUrl:function(){var t=this.data,e=t.goods,o="!400x0.jpg";return 0===t.size&&(o="!730x0.jpg"),i(e.thumbUrl,o)},computeImageIconStyle:function(){var t=this.data.goods;return t.imageIcon?'background-image: url("'+t.imageIcon+'")':""},computeGoodsBodyClass:function(){var t=this.data,e=t.buyBtnType,o=(t.showBuyBtn,t.size,"groupon-item__body--btn-"+e);return this.isShowBuyBtn()||(o+=" groupon-item__body--no-btn"),o},isShowBuyBtn:function(){var t=this.data,e=t.showBuyBtn,o=t.size;return e==u.SHOW_BUY_BTN.SHOW&&o!=u.SIZE.SMALL},isShowTitle:function(){return this.data.showTitle===u.SHOW_TITLE.SHOW},computeActivityTagText:function(){return this.data.size===u.SIZE.SMALL?"人团":"人拼团价"},getMinPrice:function(t){var e=1/0;return Object(s.a)(t,function(t){e=Math.min(e,t)}),e},computeMinActivityPrice:function(){var t=this.data.goods,e=/(\d+)(\.\d+)/.exec(c(this.getMinPrice(t.skuPrices)).toYuan().toString());return e?{yuan:e[1],cent:e[2]}:{}},computeMinOriginPrice:function(){var t=this.data.goods;return c(this.getMinPrice(t.originSkuPrice)).toYuan()},computeButtonText:function(){return this.computeHasStock()?"去开团":"去看看"},computeIsShowBuyButton:function(){var t=this.data,e=t.showBuyBtn,o=t.size;return e==u.SHOW_BUY_BTN.SHOW&&o!=u.SIZE.SMALL},handleGrouponClick:function(){this.triggerEvent("item-click",this.data.goods)},handleGrouponBuyClick:function(){0!=(1&this.data.redirectType)&&this.triggerEvent("buy",this.data.goods)}}})}}); 
 			}); 	require("@youzan/captain-weapp/dist/packages/groupon/components/item/index.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx7264e79652f66bc9/@youzan/captain-weapp/dist/packages/groupon/index.js';	define("@youzan/captain-weapp/dist/packages/groupon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};r.m=t,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==(void 0===t?"undefined":e(t))&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var u in t)r.d(o,u,function(e){return t[e]}.bind(null,u));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=45)}({45:function(e,t){Component({type:"groupon",properties:{appId:String,list:{type:Array,value:[]},imageFillStyle:{type:Number,value:2},showGrouponNum:{type:Number,value:1},showTitle:{type:Number,value:1},size:{type:Number,value:0},showBuyBtn:{type:Number,value:1},buyBtnType:{type:Number,value:1},isShowMore:Boolean,moreUrl:String,extraData:Object,redirectType:{type:String,value:0}},data:{sizeStr:""},attached:function(){this.setData({sizeStr:this.computeSize()})},methods:{computeSize:function(){return{0:"big",1:"small",2:"list"}[this.data.size.toString()]},handleGrouponClick:function(e){this.triggerEvent("item-click",e.detail)},handleGrouponBuyClick:function(e){this.triggerEvent("buy",e.detail)}}})}}); 
 			}); 	require("@youzan/captain-weapp/dist/packages/groupon/index.js");
 		global.__wxAppCurrentFile__ = 'plugin-private://wx7264e79652f66bc9/components/groupon/index.js';	define("components/groupon/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			"use strict";			
"use strict";var e=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}(require("../../api/data")),t=require("../../utils/camelize"),o=function(e){return"number"==typeof+e?{0:e}:e},r=function(e){try{var t=wx.getStorageSync(e);if(t.expire>Date.now())return t.value;wx.removeStorage({key:e})}catch(e){console.error(e)}};Component({properties:{appId:String,openId:String,shopId:Number,goodsSource:{type:Number,value:0},orderRule:{type:Number,value:0},activityIds:String,goodsNum:{type:Number,value:20},imageFillStyle:{type:Number,value:2},showGrouponNum:{type:Boolean,value:!0},showTitle:{type:Boolean,value:!0},size:{type:Number,value:0},showBuyBtn:{type:Boolean,value:!0},buyBtnType:{type:Number,value:1},extraData:{type:Object,value:{}}},data:{list:[],loading:!0,appId:null},ready:function(){this.fetchGrouponList()},methods:{fetchGrouponList:function(){var a=this,i=wx.getAccountInfoSync&&wx.getAccountInfoSync(),n=this.data,u=n.goodsSource,p=n.orderRule,l=n.activityIds,s=n.goodsNum,c=n.extraData,d=n.appId,m=n.shopId,g=n.openId;e.fetchGrouponList({appId:i&&i.miniProgram.appId?i.miniProgram.appId:d,shopId:m,openId:g,goodsSource:u,orderRule:p,activityIds:l,goodsNum:s}).then(function(e){var i=e.list,n=r("app:token")||{};c.pluginSessionId=n.sessionId;var u=(0,t.camelize)(i).map(function(e){return e.thumbUrl=e.thumbUrl||e.imageUrl,e.imageIcon="",e.originSkuPrice=o(e.originSkuPrice||e.originPrice),e.skuPrices=o(e.skuPrices||e.minSkuPrice),e});a.setData({list:u,loading:!1,extraData:c,appId:n.appId})}).catch(function(){console.log("拼团商品获取失败"),a.setData({loading:!1})})}}}); 
 			}); 	require("components/groupon/index.js");
 	
				global.publishDomainComponents({
			"plugin://wx7264e79652f66bc9/groupon":"plugin-private://wx7264e79652f66bc9/components/groupon/index"
	})
				module.exports = function() {
		return require('index.js')
	}
			});
	requirePlugin("plugin://wx7264e79652f66bc9");
/*v0.5vv_20181116_syb_scopedata*/global.__wcc_version__='v0.5vv_20181116_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'>'],[[6],[[7],[3,'list']],[3,'length']],[1,0]])
Z([[7],[3,'popup']])
Z(z[1])
Z([3,'hijack'])
Z([3,'coupon-modal'])
Z([[7],[3,'list']])
Z([3,'major flex'])
Z([[2,'==='],[[6],[[6],[[7],[3,'item']],[3,'status']],[3,'status']],[1,0]])
Z([[2,'!=='],[[6],[[6],[[7],[3,'item']],[3,'status']],[3,'status']],[1,0]])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'renderCore'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'animation']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindtap']]])
Z([3,'onBind'])
Z([3,'onLifeCycle'])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'class']])
Z([[7],[3,'config']])
Z([[6],[[7],[3,'config']],[3,'attr']])
Z([[6],[[7],[3,'config']],[3,'ctx']])
Z([[6],[[7],[3,'config']],[3,'selector']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'id']])
Z([[7],[3,'mode']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'style']])
Z([3,'renderView'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getIf']],[[5],[[7],[3,'config']]]])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-dynamic']])
Z(z[2])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'case']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'caseData']])
Z(z[5])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'context']])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'snapshot']])
Z(z[12])
Z([[6],[[6],[[7],[3,'config']],[3,'children']],[3,'length']])
Z([[8],'config',[[7],[3,'config']]])
Z(z[0])
Z([[2,'=='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-view']])
Z(z[28])
Z(z[0])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-text']])
Z([[2,'!'],[[6],[[7],[3,'config']],[3,'tag']]])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-image']])
Z(z[28])
Z([3,'renderImage'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-slot']])
Z([[2,'=='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-rich-text']])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-input']])
Z(z[28])
Z([3,'renderInput'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-switch']])
Z(z[28])
Z([3,'renderSwitch'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-textarea']])
Z(z[28])
Z([3,'renderTextarea'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-slider']])
Z(z[28])
Z([3,'renderSlider'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-icon']])
Z(z[28])
Z([3,'renderIcon'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-progress']])
Z(z[28])
Z([3,'renderProgress'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-video']])
Z(z[28])
Z([3,'renderVideo'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-camera']])
Z(z[28])
Z([3,'renderCamera'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-cover-image']])
Z(z[28])
Z([3,'renderCoverImage'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-coupon-bag']])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'options']])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-component-share']])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindhidemaskshare']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindsaveshareimg']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindshareclick']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindshowsharefriend']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindshowshareoption']]])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'maskShow']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'noReload']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'outfile']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'resource']])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-formcover']])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'formIdType']])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'source']])
Z(z[12])
Z(z[27])
Z(z[28])
Z(z[0])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-back']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'appIcon']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'appText']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'appUrl']])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'jumpType']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'pageName']])
Z(z[12])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'weappIcon']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'weappText']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'weappUrl']])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-coupon']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'activityId']])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindclose']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindopen']]])
Z(z[2])
Z(z[5])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'couponPackId']])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'moneyText']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'poiId']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'shareOpenId']])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-guide']])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'isSecondHomeView']])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-pendant']])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'icon']])
Z(z[10])
Z(z[12])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'text']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'type']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'url']])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-order-block']])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindrefreshorder']]])
Z(z[2])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindtogglesrcoll']]])
Z(z[5])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'current']])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'list']])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'posi']])
Z(z[12])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-open-data']])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-map']])
Z(z[28])
Z([3,'renderMap'])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-web-view']])
Z(z[28])
Z([3,'renderWebView'])
Z(z[174])
Z(z[42])
Z([3,'renderCanvas'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'binderror']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindlongtap']]])
Z(z[2])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindtouchcancel']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindtouchend']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindtouchmove']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindtouchstart']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'canvasId']],[1,'']],[[7],[3,'config']]]])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'disableScroll']],[1,false]],[[7],[3,'config']]]])
Z(z[10])
Z(z[12])
Z([[6],[[7],[3,'config']],[3,'children']])
Z([3,'key'])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[[7],[3,'layer']]]])
Z([[2,'+'],[1,'renderCont'],[[7],[3,'layer']]])
Z([3,'renderCoverView'])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scrollTop']],[1,0]],[[7],[3,'config']]]])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z(z[66])
Z(z[37])
Z(z[60])
Z(z[63])
Z([3,'renderLivePlayer'])
Z([3,'renderLivePusher'])
Z(z[177])
Z([3,'renderScrollView'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindscroll']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindscrolltolower']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindscrolltoupper']]])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'enableBackToTop']],[1,false]],[[7],[3,'config']]]])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'lowerThreshold']],[1,50]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scrollIntoView']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scrollLeft']],[1,0]],[[7],[3,'config']]]])
Z(z[207])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scrollWithAnimation']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scrollX']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scrollY']],[1,false]],[[7],[3,'config']]]])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'upperThreshold']],[1,50]],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderMovableArea'])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scaleArea']],[1,false]],[[7],[3,'config']]]])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderMovableView'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'animation']],[1,true]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindchange']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindscale']]])
Z(z[2])
Z(z[5])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'damping']],[1,20]],[[7],[3,'config']]]])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'direction']],[1,null]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'disabled']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'friction']],[1,2]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'htouchmove']]])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'inertia']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'outOfBounds']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scale']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scaleMax']],[1,10]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scaleMin']],[1,0.5]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'scaleValue']],[1,1]],[[7],[3,'config']]]])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'vtouchmove']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'x']],[1,0]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'y']],[1,0]],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z(z[48])
Z(z[51])
Z([3,'renderBlock'])
Z([[2,'&&'],[[12],[[6],[[7],[3,'helper']],[3,'getIf']],[[5],[[7],[3,'config']]]],[[6],[[6],[[7],[3,'config']],[3,'children']],[3,'length']]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderForm'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindreset']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindsubmit']]])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'reportSubmit']])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderCheckboxGroup'])
Z(z[259])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'name']])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderCheckbox'])
Z(z[2])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'checked']],[1,false]],[[7],[3,'config']]]])
Z(z[5])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'color']],[1,'']],[[7],[3,'config']]]])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[268])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hidden']],[1,false]],[[7],[3,'config']]]])
Z(z[10])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'value']],[1,'']],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderLabel'])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'for']],[1,'']],[[7],[3,'config']]]])
Z(z[10])
Z(z[12])
Z(z[27])
Z(z[196])
Z(z[197])
Z([[8],'config',[[7],[3,'item']]])
Z(z[199])
Z(z[54])
Z(z[45])
Z(z[57])
Z([3,'renderRadioGroup'])
Z(z[259])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[317])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderRadio'])
Z(z[2])
Z(z[325])
Z(z[5])
Z(z[327])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[268])
Z(z[10])
Z(z[12])
Z(z[335])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderSwiperItem'])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[2,'||'],[[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'itemId']],[1,'']])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderSwiper'])
Z(z[27])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'autoplay']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindanimationfinish']]])
Z(z[259])
Z(z[2])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'circular']],[1,false]],[[7],[3,'config']]]])
Z(z[5])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'current']],[1,0]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'currentItemId']],[1,'']],[[7],[3,'config']]]])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'displayMultipleItems']],[1,1]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'duration']],[1,500]],[[7],[3,'config']]]])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'indicatorActiveColor']],[1,'#000']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'indicatorColor']],[1,'rgba(0,0,0.3)']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'indicatorDots']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'interval']],[1,5000]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'nextMargin']],[1,'0px']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'previousMargin']],[1,'0px']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'skipHiddenItemLayout']],[1,false]],[[7],[3,'config']]]])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'vertical']],[1,false]],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderNavigator'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'appId']],[1,'']],[[7],[3,'config']]]])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'delta']],[1,0]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'extraData']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverClass']],[1,'navigator-hover']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverStartTime']],[1,50]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverStayTime']],[1,600]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverStopPropagation']],[1,false]],[[7],[3,'config']]]])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'openType']],[1,'navigate']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'path']],[1,'']],[[7],[3,'config']]]])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'target']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'url']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'version']],[1,'release']],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderButton'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'appParameter']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindcontact']]])
Z(z[181])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindgetphonenumber']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindgetuserinfo']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindopensetting']]])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[268])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'formType']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverClass']],[1,'button-hover']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverStartTime']],[1,20]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'hoverStayTime']],[1,70]],[[7],[3,'config']]]])
Z(z[441])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'lang']],[1,'en']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'loading']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'name']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'openType']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'plain']],[1,false]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'sendMessageImg']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'sendMessagePath']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'sendMessageTitle']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'sessionFrom']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'showMessageCard']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'size']],[1,'default']],[[7],[3,'config']]]])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'type']],[1,'default']],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderPicker'])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindcancel']]])
Z(z[259])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindcolumnchange']]])
Z(z[2])
Z(z[5])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'customItem']],[1,'']],[[7],[3,'config']]]])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[268])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'end']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'fields']],[1,'']],[[7],[3,'config']]]])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'mode']],[1,'selector']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'range']],[1,null]],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'rangeKey']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'start']],[1,'']],[[7],[3,'config']]]])
Z(z[12])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'value']],[1,0]],[[7],[3,'config']]]])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderPickerView'])
Z(z[259])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindpickend']]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getBind']],[[5],[[5],[[7],[3,'config']]],[1,'bindpickstart']]])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'indicatorClass']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'indicatorStyle']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'maskClass']],[1,'']],[[7],[3,'config']]]])
Z([[12],[[6],[[7],[3,'helper']],[3,'getAttr']],[[5],[[5],[[5],[1,'maskStyle']],[1,'']],[[7],[3,'config']]]])
Z(z[12])
Z(z[335])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderPickerViewColumn'])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z(z[198])
Z(z[199])
Z([3,'renderCont0'])
Z([[2,'&&'],[[2,'!='],[[12],[[6],[[7],[3,'helper']],[3,'typeOf']],[[5],[[7],[3,'config']]]],[1,'string']],[[2,'!='],[[7],[3,'mode']],[1,'self']]])
Z(z[196])
Z(z[197])
Z(z[198])
Z([3,'renderCont1'])
Z(z[14])
Z(z[28])
Z([3,'renderItem0'])
Z(z[553])
Z([[2,'=='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-block']])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'layer',[1,1]]])
Z(z[288])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-form']])
Z(z[556])
Z(z[294])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-checkbox-group']])
Z(z[556])
Z(z[309])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-checkbox']])
Z(z[556])
Z(z[323])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-label']])
Z(z[556])
Z(z[340])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-radio-group']])
Z(z[556])
Z(z[357])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-radio']])
Z(z[556])
Z(z[371])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-button']])
Z(z[556])
Z(z[453])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-swiper']])
Z(z[556])
Z(z[400])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-swiper-item']])
Z(z[556])
Z(z[387])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-navigator']])
Z(z[556])
Z(z[429])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-scroll-view']])
Z(z[556])
Z(z[220])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-movable-area']])
Z(z[556])
Z(z[244])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-movable-view']])
Z(z[556])
Z(z[257])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-cover-view']])
Z(z[556])
Z(z[200])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-canvas']])
Z(z[556])
Z(z[180])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-picker']])
Z(z[556])
Z(z[489])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-picker-view']])
Z(z[556])
Z(z[513])
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-picker-view-column']])
Z(z[556])
Z(z[533])
Z([[2,'&&'],[[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-view']],[[2,'==='],[[6],[[6],[[7],[3,'config']],[3,'attr']],[3,'core']],[1,false]]])
Z(z[1])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[1,1]]])
Z([[2,'+'],[1,'renderCont'],[1,1]])
Z(z[28])
Z(z[13])
Z(z[550])
Z(z[14])
Z(z[28])
Z([3,'renderItem1'])
Z(z[630])
Z(z[555])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'layer',[1,2]]])
Z(z[288])
Z(z[558])
Z(z[633])
Z(z[294])
Z(z[561])
Z(z[633])
Z(z[309])
Z(z[564])
Z(z[633])
Z(z[323])
Z(z[567])
Z(z[633])
Z(z[340])
Z(z[570])
Z(z[633])
Z(z[357])
Z(z[573])
Z(z[633])
Z(z[371])
Z(z[576])
Z(z[633])
Z(z[453])
Z(z[579])
Z(z[633])
Z(z[400])
Z(z[582])
Z(z[633])
Z(z[387])
Z(z[585])
Z(z[633])
Z(z[429])
Z(z[588])
Z(z[633])
Z(z[220])
Z(z[591])
Z(z[633])
Z(z[244])
Z(z[594])
Z(z[633])
Z(z[257])
Z(z[597])
Z(z[633])
Z(z[200])
Z(z[600])
Z(z[633])
Z(z[180])
Z(z[603])
Z(z[633])
Z(z[489])
Z(z[606])
Z(z[633])
Z(z[513])
Z(z[609])
Z(z[633])
Z(z[533])
Z(z[612])
Z(z[1])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[1,2]]])
Z([[2,'+'],[1,'renderCont'],[1,2]])
Z(z[28])
Z(z[13])
Z([3,'renderCont2'])
Z(z[14])
Z(z[28])
Z([3,'renderItem2'])
Z(z[707])
Z(z[555])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'layer',[1,3]]])
Z(z[288])
Z(z[558])
Z(z[710])
Z(z[294])
Z(z[561])
Z(z[710])
Z(z[309])
Z(z[564])
Z(z[710])
Z(z[323])
Z(z[567])
Z(z[710])
Z(z[340])
Z(z[570])
Z(z[710])
Z(z[357])
Z(z[573])
Z(z[710])
Z(z[371])
Z(z[576])
Z(z[710])
Z(z[453])
Z(z[579])
Z(z[710])
Z(z[400])
Z(z[582])
Z(z[710])
Z(z[387])
Z(z[585])
Z(z[710])
Z(z[429])
Z(z[588])
Z(z[710])
Z(z[220])
Z(z[591])
Z(z[710])
Z(z[244])
Z(z[594])
Z(z[710])
Z(z[257])
Z(z[597])
Z(z[710])
Z(z[200])
Z(z[600])
Z(z[710])
Z(z[180])
Z(z[603])
Z(z[710])
Z(z[489])
Z(z[606])
Z(z[710])
Z(z[513])
Z(z[609])
Z(z[710])
Z(z[533])
Z(z[612])
Z(z[1])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[1,3]]])
Z([[2,'+'],[1,'renderCont'],[1,3]])
Z(z[28])
Z(z[13])
Z([3,'renderCont3'])
Z(z[14])
Z(z[28])
Z([3,'renderItem3'])
Z(z[784])
Z(z[555])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'layer',[1,4]]])
Z(z[288])
Z(z[558])
Z(z[787])
Z(z[294])
Z(z[561])
Z(z[787])
Z(z[309])
Z(z[564])
Z(z[787])
Z(z[323])
Z(z[567])
Z(z[787])
Z(z[340])
Z(z[570])
Z(z[787])
Z(z[357])
Z(z[573])
Z(z[787])
Z(z[371])
Z(z[576])
Z(z[787])
Z(z[453])
Z(z[579])
Z(z[787])
Z(z[400])
Z(z[582])
Z(z[787])
Z(z[387])
Z(z[585])
Z(z[787])
Z(z[429])
Z(z[588])
Z(z[787])
Z(z[220])
Z(z[591])
Z(z[787])
Z(z[244])
Z(z[594])
Z(z[787])
Z(z[257])
Z(z[597])
Z(z[787])
Z(z[200])
Z(z[600])
Z(z[787])
Z(z[180])
Z(z[603])
Z(z[787])
Z(z[489])
Z(z[606])
Z(z[787])
Z(z[513])
Z(z[609])
Z(z[787])
Z(z[533])
Z(z[612])
Z(z[1])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[1,4]]])
Z([[2,'+'],[1,'renderCont'],[1,4]])
Z(z[28])
Z(z[13])
Z([3,'renderCont4'])
Z(z[14])
Z(z[28])
Z([3,'renderItem4'])
Z(z[861])
Z(z[555])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'layer',[1,5]]])
Z(z[288])
Z(z[558])
Z(z[864])
Z(z[294])
Z(z[561])
Z(z[864])
Z(z[309])
Z(z[564])
Z(z[864])
Z(z[323])
Z(z[567])
Z(z[864])
Z(z[340])
Z(z[570])
Z(z[864])
Z(z[357])
Z(z[573])
Z(z[864])
Z(z[371])
Z(z[576])
Z(z[864])
Z(z[453])
Z(z[579])
Z(z[864])
Z(z[400])
Z(z[582])
Z(z[864])
Z(z[387])
Z(z[585])
Z(z[864])
Z(z[429])
Z(z[588])
Z(z[864])
Z(z[220])
Z(z[591])
Z(z[864])
Z(z[244])
Z(z[594])
Z(z[864])
Z(z[257])
Z(z[597])
Z(z[864])
Z(z[200])
Z(z[600])
Z(z[864])
Z(z[180])
Z(z[603])
Z(z[864])
Z(z[489])
Z(z[606])
Z(z[864])
Z(z[513])
Z(z[609])
Z(z[864])
Z(z[533])
Z(z[612])
Z(z[1])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[1,5]]])
Z([[2,'+'],[1,'renderCont'],[1,5]])
Z(z[28])
Z(z[13])
Z([3,'renderCont5'])
Z(z[14])
Z(z[28])
Z([3,'renderItem5'])
Z(z[938])
Z(z[555])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'layer',[1,6]]])
Z(z[288])
Z(z[558])
Z(z[941])
Z(z[294])
Z(z[561])
Z(z[941])
Z(z[309])
Z(z[564])
Z(z[941])
Z(z[323])
Z(z[567])
Z(z[941])
Z(z[340])
Z(z[570])
Z(z[941])
Z(z[357])
Z(z[573])
Z(z[941])
Z(z[371])
Z(z[576])
Z(z[941])
Z(z[453])
Z(z[579])
Z(z[941])
Z(z[400])
Z(z[582])
Z(z[941])
Z(z[387])
Z(z[585])
Z(z[941])
Z(z[429])
Z(z[588])
Z(z[941])
Z(z[220])
Z(z[591])
Z(z[941])
Z(z[244])
Z(z[594])
Z(z[941])
Z(z[257])
Z(z[597])
Z(z[941])
Z(z[200])
Z(z[600])
Z(z[941])
Z(z[180])
Z(z[603])
Z(z[941])
Z(z[489])
Z(z[606])
Z(z[941])
Z(z[513])
Z(z[609])
Z(z[941])
Z(z[533])
Z(z[612])
Z(z[1])
Z(z[2])
Z(z[5])
Z(z[7])
Z(z[8])
Z(z[9])
Z(z[10])
Z(z[12])
Z(z[196])
Z(z[197])
Z([[9],[[8],'config',[[7],[3,'item']]],[[8],'layer',[1,6]]])
Z([[2,'+'],[1,'renderCont'],[1,6]])
Z(z[28])
Z(z[13])
Z([3,'renderCont6'])
Z(z[14])
Z(z[28])
Z([3,'renderItem6'])
Z(z[1015])
Z([[9],[[8],'config',[[7],[3,'config']]],[[8],'mode',[[7],[3,'mode']]]])
Z(z[0])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'==='],[[6],[[7],[3,'config']],[3,'tag']],[1,'wx-body']])
Z([[6],[[7],[3,'config']],[3,'children']])
Z([3,'key'])
Z([[9],[[9],[[8],'config',[[7],[3,'item']]],[[8],'mode',[1,'self']]],[[8],'layer',[1,0]]])
Z([3,'renderCont0'])
Z([[9],[[9],[[8],'config',[[7],[3,'config']]],[[8],'mode',[[7],[3,'mode']]]],[[8],'layer',[1,0]]])
Z(z[4])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'maskShow']])
Z([3,'share'])
Z([[7],[3,'optionShow']])
Z(z[2])
Z([[2,'!'],[[7],[3,'optionShow']]])
Z(z[4])
Z([3,'share-friend'])
Z([[7],[3,'isOpenSetting']])
Z([[2,'!'],[[7],[3,'isOpenSetting']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submitHandler'])
Z([3,'customform'])
Z([3,'true'])
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'submitHandler'])
Z([3,'true'])
Z([[2,'||'],[[7],[3,'showBackWeapp']],[[7],[3,'showBackApp']]])
Z([a,[3,'back-container '],[[2,'?:'],[[7],[3,'isSingle']],[1,'single'],[1,'normal']]])
Z([[7],[3,'showBackWeapp']])
Z([[7],[3,'showBackApp']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'visible']])
Z([3,'coupon'])
Z([[2,'&&'],[[2,'==='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'NO_AUTHORIZATION']]],[[2,'==='],[[7],[3,'authFailCount']],[1,1]]])
Z([a,[3,'coupon-cnt '],[[7],[3,'statusClass']]])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'NO_AUTHORIZATION']]],[[2,'!=='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'UNKNOWN']]]])
Z([[2,'==='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'SUCCESS']]])
Z([[2,'==='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'EMPTY']]])
Z([[2,'==='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'OVER']]])
Z([[2,'==='],[[7],[3,'status']],[[6],[[7],[3,'COUPON_STATUS_MAPPING']],[3,'NO_AUTHORIZATION']]])
Z([[2,'>'],[[7],[3,'remainCount']],[1,0]])
Z([[7],[3,'users']])
Z([3,'id'])
Z([[2,'&&'],[[2,'>'],[[7],[3,'userCount']],[1,4]],[[2,'==='],[[7],[3,'index']],[1,1]]])
Z(z[0])
Z([[6],[[7],[3,'toast']],[3,'show']])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'show']],[[7],[3,'isSecondHomeView']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'pendant-com'])
Z([3,''])
Z([[7],[3,'type']])
Z([[7],[3,'url']])
Z([[7],[3,'icon']])
Z([[7],[3,'text']])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'mt-mine-v2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'home-page'])
Z([3,'mt-index-v5'])
Z([[7],[3,'snapshot']])
Z([[9],[[8],'guessData',[[7],[3,'guessData']]],[[8],'loadingTxt',[[7],[3,'loadingTxt']]]])
Z([3,'guess'])
Z([[7],[3,'isSecondHomeView']])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'list']],[3,'orderDetail']])
Z([3,'goDetail'])
Z([3,'onTouchEnd'])
Z([3,'onTouchMove'])
Z([3,'onTouchStart'])
Z([a,[3,'order-c '],[[2,'?:'],[[2,'==='],[[7],[3,'index']],[1,0]],[1,'order-c-bordertop'],[1,'']],[3,' posi']])
Z(z[0])
Z([a,[3,'left:'],[[7],[3,'left']],[3,'rpx;']])
Z([3,'desc'])
Z([[6],[[7],[3,'list']],[3,'orderinfoIterator']])
Z([[7],[3,'index']])
Z([[7],[3,'item']])
Z([3,'item'])
Z([[6],[[7],[3,'list']],[3,'buttons']])
Z(z[10])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'text']],[1,'评价']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[8],'nav',[[7],[3,'nav']]])
Z([3,'nav'])
Z([[2,'!=='],[[7],[3,'current']],[1,1]])
Z([[9],[[8],'nav',[[7],[3,'navmain']]],[[8],'navTapHandler',[1,'handleNavMain']]])
Z([3,'subnav'])
Z([3,'moreOrders'])
Z([3,'changeOrderState'])
Z([3,'scroll-view'])
Z([[7],[3,'scrollTop']])
Z([[7],[3,'canScroll']])
Z([[2,'==='],[[7],[3,'current']],[1,0]])
Z([3,'idx'])
Z([3,'list'])
Z([[7],[3,'orderList']])
Z([[6],[[7],[3,'list']],[3,'orderid']])
Z([[2,'||'],[[2,'!='],[[7],[3,'currentmain']],[1,3]],[[2,'&&'],[[6],[[7],[3,'list']],[3,'buttons']],[[2,'>'],[[6],[[6],[[7],[3,'list']],[3,'buttons']],[3,'length']],[1,0]]]])
Z([3,'refreshOrder'])
Z([3,'toggleSrcoll'])
Z([[7],[3,'currentmain']])
Z([[7],[3,'list']])
Z([[7],[3,'idx']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'guess'])
Z([[7],[3,'guessData']])
Z([[7],[3,'index']])
Z([[6],[[7],[3,'item']],[3,'jumperUrl']])
Z([3,'jumpTogo'])
Z([[6],[[7],[3,'item']],[3,'_id']])
Z(z[2])
Z(z[3])
Z([3,'pingtai'])
Z([[6],[[7],[3,'item']],[3,'_type']])
Z([a,[3,'{\x22type\x22: \x22'],z[9],[3,'\x22, \x22id\x22: \x22'],z[5],[3,'\x22,\x22index\x22:\x22'],z[2],[3,'\x22}']])
Z([3,'true'])
Z([a,[3,'guess-item '],[[2,'?:'],[[6],[[7],[3,'item']],[3,'isInExposureQueue']],[1,''],[1,' newcard']]])
Z([[6],[[7],[3,'item']],[3,'imageTagIcon']])
Z([3,'gs-info-view'])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'item']],[3,'subTitle2']]]])
Z([[6],[[7],[3,'item']],[3,'subMessage']])
Z([3,'gs-tags'])
Z([[2,'!'],[[2,'!'],[[6],[[6],[[7],[3,'item']],[3,'campaign']],[3,'tag']]]])
Z([[2,'!'],[[2,'!'],[[6],[[7],[3,'item']],[3,'reason']]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'nav'])
Z([[7],[3,'nav']])
Z([3,'index'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isNotshow']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'subnav'])
Z([[7],[3,'nav']])
Z([3,'index'])
Z([[2,'!'],[[6],[[7],[3,'item']],[3,'isNotshow']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[6],[[7],[3,'authrizePageData']],[3,'image']],[3,'src']])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={"p_./dynamic/helper.wxs":np_0,};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
f_['./dynamic/core.wxml']={};
f_['./dynamic/core.wxml']['helper'] =f_['./dynamic/helper.wxs'] || nv_require("p_./dynamic/helper.wxs");
f_['./dynamic/core.wxml']['helper']();

f_['./dynamic/helper.wxs'] = nv_require("p_./dynamic/helper.wxs");
function np_0(){var nv_module={nv_exports:{}};var nv_getIf = (function (nv_config){if (nv_config && nv_config.nv_attr){var nv_val = nv_config.nv_attr.nv_wxIf;if (typeof nv_val === 'undefined')return(true);;return(!!nv_val)};return(nv_config != null)});var nv_getBind = (function (nv_config,nv_name){if (nv_config && nv_config.nv_attr && nv_config.nv_attr[((nt_0=(nv_name),null==nt_0?undefined:'number'=== typeof nt_0?nt_0:"nv_"+nt_0))]){return('coreBind')};return('')});var nv_getAttr = (function (nv_name,nv_defaultVal,nv_config){var nv_val = nv_config && nv_config.nv_attr && nv_config.nv_attr[((nt_1=(nv_name),null==nt_1?undefined:'number'=== typeof nt_1?nt_1:"nv_"+nt_1))];return(nv_val == null ? nv_defaultVal:nv_val)});nv_module.nv_exports.nv_getBind = nv_getBind;nv_module.nv_exports.nv_getIf = nv_getIf;nv_module.nv_exports.nv_getAttr = nv_getAttr;nv_module.nv_exports.nv_log = (function (nv_obj,nv_msg){nv_msg = nv_msg || 'wxs log: ';nv_console.nv_log(nv_msg,nv_obj && nv_JSON.nv_stringify(nv_obj,null,4) || nv_obj)});nv_module.nv_exports.nv_typeOf = (function (nv_variable){return(typeof nv_variable)});return nv_module.nv_exports;}

var x=['./components/coupon-bag/index.wxml','./dynamic/core.wxml','./dynamic/dynamic.wxml','./core.wxml','./index/components/component-share/index.wxml','./index/components/formcover/formcover.wxml','./index/components/mt-back/back.wxml','./index/components/mt-coupon/coupon.wxml','./index/components/mt-guide/guide.wxml','./index/components/mt-pendant/pendant.wxml','./index/pages/home/home.wxml','./index/pages/hotel/index.wxml','./index/pages/list/list.wxml','./index/pages/mine/mine.wxml','./index/pages/movie/index.wxml','./index/pages/mt/mt.wxml','../../tpls/guess/guess.wxml','./index/pages/order/components/order-block/order-block.wxml','./index/pages/order/order-list.wxml','../../tpls/nav/nav.wxml','../../tpls/subnav/nav.wxml','./index/pages/poi/poi.wxml','./index/pages/qrcode/qrcode.wxml','./index/pages/search/search.wxml','./index/tpls/guess/guess.wxml','./index/tpls/nav/nav.wxml','./index/tpls/subnav/nav.wxml','./npm/@mtfe/mt-weapp-authrize/page/index.wxml','./web-pay/pay/index.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_v()
_(r,oB)
if(_oz(z,0,e,s,gg)){oB.wxVkey=1
}
var xC=_v()
_(r,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_v()
_(r,oD)
if(_oz(z,2,e,s,gg)){oD.wxVkey=1
var fE=_mz(z,'view',['catchtap',3,'class',1],[],e,s,gg)
var cF=_v()
_(fE,cF)
var hG=function(cI,oH,oJ,gg){
var aL=_n('view')
_rz(z,aL,'class',6,cI,oH,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,7,cI,oH,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,8,cI,oH,gg)){eN.wxVkey=1
}
tM.wxXCkey=1
eN.wxXCkey=1
_(oJ,aL)
return oJ
}
cF.wxXCkey=2
_2z(z,5,hG,e,s,gg,cF,'item','index','')
_(oD,fE)
}
oB.wxXCkey=1
xC.wxXCkey=1
oD.wxXCkey=1
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
d_[x[1]]["renderCore"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCore'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'core',['animation',1,'bindtap',1,'catch:bind',2,'catch:life',3,'class',4,'config',5,'data-attr',6,'data-ctx',7,'data-selector',8,'id',9,'mode',10,'style',11],[],e,s,gg)
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderView"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderView'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,14,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
if(_oz(z,15,e,s,gg)){xC.wxVkey=1
var oD=_mz(z,'core',['bindtap',16,'case',1,'caseData',2,'class',3,'context',4,'data-attr',5,'data-ctx',6,'data-selector',7,'id',8,'snapshot',9,'style',10],[],e,s,gg)
var fE=_v()
_(oD,fE)
if(_oz(z,27,e,s,gg)){fE.wxVkey=1
var cF=_v()
_(fE,cF)
var hG=_oz(z,29,e,s,gg)
var oH=_gd(x[1],hG,e_,d_)
if(oH){
var cI=_1z(z,28,e,s,gg) || {}
var cur_globalf=gg.f
cF.wxXCkey=3
oH(cI,cI,cF,gg)
gg.f=cur_globalf
}
else _w(hG,x[1],1,984)
}
fE.wxXCkey=1
_(xC,oD)
}
else if(_oz(z,30,e,s,gg)){xC.wxVkey=2
var oJ=_v()
_(xC,oJ)
var lK=_oz(z,32,e,s,gg)
var aL=_gd(x[1],lK,e_,d_)
if(aL){
var tM=_1z(z,31,e,s,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[1],1,1077)
}
else if(_oz(z,33,e,s,gg)){xC.wxVkey=3
}
else if(_oz(z,34,e,s,gg)){xC.wxVkey=4
}
else if(_oz(z,35,e,s,gg)){xC.wxVkey=5
var eN=_v()
_(xC,eN)
var bO=_oz(z,37,e,s,gg)
var oP=_gd(x[1],bO,e_,d_)
if(oP){
var xQ=_1z(z,36,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[1],1,1689)
}
else if(_oz(z,38,e,s,gg)){xC.wxVkey=6
var oR=_n('slot')
_(xC,oR)
}
else if(_oz(z,39,e,s,gg)){xC.wxVkey=7
}
else if(_oz(z,40,e,s,gg)){xC.wxVkey=8
var fS=_v()
_(xC,fS)
var cT=_oz(z,42,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,41,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,2454)
}
else if(_oz(z,43,e,s,gg)){xC.wxVkey=9
var cW=_v()
_(xC,cW)
var oX=_oz(z,45,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,44,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,2547)
}
else if(_oz(z,46,e,s,gg)){xC.wxVkey=10
var t1=_v()
_(xC,t1)
var e2=_oz(z,48,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,47,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,2643)
}
else if(_oz(z,49,e,s,gg)){xC.wxVkey=11
var x5=_v()
_(xC,x5)
var o6=_oz(z,51,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,50,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,2739)
}
else if(_oz(z,52,e,s,gg)){xC.wxVkey=12
var h9=_v()
_(xC,h9)
var o0=_oz(z,54,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,53,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,2831)
}
else if(_oz(z,55,e,s,gg)){xC.wxVkey=13
var lCB=_v()
_(xC,lCB)
var aDB=_oz(z,57,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,56,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,2925)
}
else if(_oz(z,58,e,s,gg)){xC.wxVkey=14
var bGB=_v()
_(xC,bGB)
var oHB=_oz(z,60,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,59,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,3020)
}
else if(_oz(z,61,e,s,gg)){xC.wxVkey=15
var fKB=_v()
_(xC,fKB)
var cLB=_oz(z,63,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,62,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,3113)
}
else if(_oz(z,64,e,s,gg)){xC.wxVkey=16
var cOB=_v()
_(xC,cOB)
var oPB=_oz(z,66,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,65,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,3212)
}
else if(_oz(z,67,e,s,gg)){xC.wxVkey=17
var tSB=_mz(z,'coupon-bag',['bindtap',68,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'id',5,'options',6,'style',7],[],e,s,gg)
_(xC,tSB)
}
else if(_oz(z,76,e,s,gg)){xC.wxVkey=18
var eTB=_mz(z,'component-share',['bindhidemaskshare',77,'bindsaveshareimg',1,'bindshareclick',2,'bindshowsharefriend',3,'bindshowshareoption',4,'bindtap',5,'class',6,'data-attr',7,'data-ctx',8,'data-selector',9,'id',10,'maskShow',11,'noReload',12,'outfile',13,'resource',14,'style',15],[],e,s,gg)
_(xC,eTB)
}
else if(_oz(z,93,e,s,gg)){xC.wxVkey=19
var bUB=_mz(z,'formcover',['bindtap',94,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'formIdType',5,'id',6,'source',7,'style',8],[],e,s,gg)
var oVB=_v()
_(bUB,oVB)
if(_oz(z,103,e,s,gg)){oVB.wxVkey=1
var xWB=_v()
_(oVB,xWB)
var oXB=_oz(z,105,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,104,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,4901)
}
oVB.wxXCkey=1
_(xC,bUB)
}
else if(_oz(z,106,e,s,gg)){xC.wxVkey=20
var h1B=_mz(z,'back',['appIcon',107,'appText',1,'appUrl',2,'bindtap',3,'class',4,'data-attr',5,'data-ctx',6,'data-selector',7,'id',8,'jumpType',9,'pageName',10,'style',11,'weappIcon',12,'weappText',13,'weappUrl',14],[],e,s,gg)
_(xC,h1B)
}
else if(_oz(z,122,e,s,gg)){xC.wxVkey=21
var o2B=_mz(z,'coupon',['activityId',123,'bindclose',1,'bindopen',2,'bindtap',3,'class',4,'couponPackId',5,'data-attr',6,'data-ctx',7,'data-selector',8,'id',9,'moneyText',10,'poiId',11,'shareOpenId',12,'style',13],[],e,s,gg)
_(xC,o2B)
}
else if(_oz(z,137,e,s,gg)){xC.wxVkey=22
var c3B=_mz(z,'guide',['bindtap',138,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'id',5,'isSecondHomeView',6,'style',7],[],e,s,gg)
_(xC,c3B)
}
else if(_oz(z,146,e,s,gg)){xC.wxVkey=23
var o4B=_mz(z,'pendant',['bindtap',147,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'icon',5,'id',6,'style',7,'text',8,'type',9,'url',10],[],e,s,gg)
_(xC,o4B)
}
else if(_oz(z,158,e,s,gg)){xC.wxVkey=24
var l5B=_mz(z,'order-block',['bindrefreshorder',159,'bindtap',1,'bindtogglesrcoll',2,'class',3,'current',4,'data-attr',5,'data-ctx',6,'data-selector',7,'id',8,'list',9,'posi',10,'style',11],[],e,s,gg)
_(xC,l5B)
}
else if(_oz(z,171,e,s,gg)){xC.wxVkey=25
}
else if(_oz(z,172,e,s,gg)){xC.wxVkey=26
var a6B=_v()
_(xC,a6B)
var t7B=_oz(z,174,e,s,gg)
var e8B=_gd(x[1],t7B,e_,d_)
if(e8B){
var b9B=_1z(z,173,e,s,gg) || {}
var cur_globalf=gg.f
a6B.wxXCkey=3
e8B(b9B,b9B,a6B,gg)
gg.f=cur_globalf
}
else _w(t7B,x[1],1,7746)
}
else if(_oz(z,175,e,s,gg)){xC.wxVkey=27
var o0B=_v()
_(xC,o0B)
var xAC=_oz(z,177,e,s,gg)
var oBC=_gd(x[1],xAC,e_,d_)
if(oBC){
var fCC=_1z(z,176,e,s,gg) || {}
var cur_globalf=gg.f
o0B.wxXCkey=3
oBC(fCC,fCC,o0B,gg)
gg.f=cur_globalf
}
else _w(xAC,x[1],1,7837)
}
else{xC.wxVkey=28
}
xC.wxXCkey=1
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
xC.wxXCkey=3
}
oB.wxXCkey=1
oB.wxXCkey=3
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderMap"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderMap'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderInput"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderInput'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCanvas"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCanvas'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'canvas',['binderror',181,'bindlongtap',1,'bindtap',2,'bindtouchcancel',3,'bindtouchend',4,'bindtouchmove',5,'bindtouchstart',6,'canvasId',7,'class',8,'data-attr',9,'data-ctx',10,'data-selector',11,'disableScroll',12,'id',13,'style',14],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,199,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,198,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,11358)
return hG
}
xC.wxXCkey=2
_2z(z,196,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCoverView"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCoverView'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'cover-view',['bindtap',201,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'id',5,'scrollTop',6,'style',7],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,212,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,211,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,11842)
return hG
}
xC.wxXCkey=2
_2z(z,209,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCoverImage"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCoverImage'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderImage"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderImage'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderVideo"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderVideo'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCamera"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCamera'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderLivePlayer"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderLivePlayer'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderLivePusher"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderLivePusher'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderWebView"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderWebView'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderScrollView"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderScrollView'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'scroll-view',['bindscroll',221,'bindscrolltolower',1,'bindscrolltoupper',2,'bindtap',3,'class',4,'data-attr',5,'data-ctx',6,'data-selector',7,'enableBackToTop',8,'id',9,'lowerThreshold',10,'scrollIntoView',11,'scrollLeft',12,'scrollTop',13,'scrollWithAnimation',14,'scrollX',15,'scrollY',16,'style',17,'upperThreshold',18],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,243,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,242,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,19224)
return hG
}
xC.wxXCkey=2
_2z(z,240,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderMovableArea"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderMovableArea'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'movable-area',['bindtap',245,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'id',5,'scaleArea',6,'style',7],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,256,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,255,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,19721)
return hG
}
xC.wxXCkey=2
_2z(z,253,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderMovableView"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderMovableView'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'movable-view',['animation',258,'bindchange',1,'bindscale',2,'bindtap',3,'class',4,'damping',5,'data-attr',6,'data-ctx',7,'data-selector',8,'direction',9,'disabled',10,'friction',11,'htouchmove',12,'id',13,'inertia',14,'outOfBounds',15,'scale',16,'scaleMax',17,'scaleMin',18,'scaleValue',19,'style',20,'vtouchmove',21,'x',22,'y',23],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,285,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,284,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,21069)
return hG
}
xC.wxXCkey=2
_2z(z,282,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderTextarea"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderTextarea'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderSlider"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderSlider'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderBlock"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderBlock'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,289,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,293,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,292,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,24023)
return hG
}
xC.wxXCkey=2
_2z(z,290,oD,e,s,gg,xC,'item','index','key')
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderForm"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderForm'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'form',['bindreset',295,'bindsubmit',1,'bindtap',2,'class',3,'data-attr',4,'data-ctx',5,'data-selector',6,'id',7,'reportSubmit',8,'style',9],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,308,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,307,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,24588)
return hG
}
xC.wxXCkey=2
_2z(z,305,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCheckboxGroup"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCheckboxGroup'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'checkbox-group',['bindchange',310,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'name',7,'style',8],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,322,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,321,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,25106)
return hG
}
xC.wxXCkey=2
_2z(z,319,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCheckbox"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCheckbox'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'checkbox',['bindtap',324,'checked',1,'class',2,'color',3,'data-attr',4,'data-ctx',5,'data-selector',6,'disabled',7,'hidden',8,'id',9,'style',10,'value',11],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,339,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,338,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,25800)
return hG
}
xC.wxXCkey=2
_2z(z,336,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderLabel"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderLabel'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'label',['bindtap',341,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'for',5,'id',6,'style',7],[],e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,349,e,s,gg)){xC.wxVkey=1
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,353,hG,cF,gg)
var aL=_gd(x[1],lK,e_,d_)
if(aL){
var tM=_1z(z,352,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[1],1,26308)
return oH
}
oD.wxXCkey=2
_2z(z,350,fE,e,s,gg,oD,'item','index','key')
}
xC.wxXCkey=1
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderIcon"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderIcon'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderSwitch"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderSwitch'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderProgress"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderProgress'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderRadioGroup"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderRadioGroup'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'radio-group',['bindchange',358,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'name',7,'style',8],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,370,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,369,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,28472)
return hG
}
xC.wxXCkey=2
_2z(z,367,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderRadio"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderRadio'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'radio',['bindtap',372,'checked',1,'class',2,'color',3,'data-attr',4,'data-ctx',5,'data-selector',6,'disabled',7,'id',8,'style',9,'value',10],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,386,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,385,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,29146)
return hG
}
xC.wxXCkey=2
_2z(z,383,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderSwiperItem"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderSwiperItem'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'swiper-item',['bindtap',388,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'id',5,'itemId',6,'style',7],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,399,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,398,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,29615)
return hG
}
xC.wxXCkey=2
_2z(z,396,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderSwiper"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderSwiper'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,401,e,s,gg)){oB.wxVkey=1
var xC=_mz(z,'swiper',['autoplay',402,'bindanimationfinish',1,'bindchange',2,'bindtap',3,'circular',4,'class',5,'current',6,'currentItemId',7,'data-attr',8,'data-ctx',9,'data-selector',10,'displayMultipleItems',11,'duration',12,'id',13,'indicatorActiveColor',14,'indicatorColor',15,'indicatorDots',16,'interval',17,'nextMargin',18,'previousMargin',19,'skipHiddenItemLayout',20,'style',21,'vertical',22],[],e,s,gg)
var oD=_v()
_(xC,oD)
var fE=function(hG,cF,oH,gg){
var oJ=_v()
_(oH,oJ)
var lK=_oz(z,428,hG,cF,gg)
var aL=_gd(x[1],lK,e_,d_)
if(aL){
var tM=_1z(z,427,hG,cF,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[1],1,31128)
return oH
}
oD.wxXCkey=2
_2z(z,425,fE,e,s,gg,oD,'item','index','key')
_(oB,xC)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderNavigator"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderNavigator'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'navigator',['appId',430,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'delta',6,'extraData',7,'hoverClass',8,'hoverStartTime',9,'hoverStayTime',10,'hoverStopPropagation',11,'id',12,'openType',13,'path',14,'style',15,'target',16,'url',17,'version',18],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,452,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,451,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,32262)
return hG
}
xC.wxXCkey=2
_2z(z,449,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderButton"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderButton'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'button',['appParameter',454,'bindcontact',1,'binderror',2,'bindgetphonenumber',3,'bindgetuserinfo',4,'bindopensetting',5,'bindtap',6,'class',7,'data-attr',8,'data-ctx',9,'data-selector',10,'disabled',11,'formType',12,'hoverClass',13,'hoverStartTime',14,'hoverStayTime',15,'hoverStopPropagation',16,'id',17,'lang',18,'loading',19,'name',20,'openType',21,'plain',22,'sendMessageImg',23,'sendMessagePath',24,'sendMessageTitle',25,'sessionFrom',26,'showMessageCard',27,'size',28,'style',29,'type',30],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,488,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,487,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,34157)
return hG
}
xC.wxXCkey=2
_2z(z,485,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderPicker"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderPicker'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'picker',['bindcancel',490,'bindchange',1,'bindcolumnchange',2,'bindtap',3,'class',4,'customItem',5,'data-attr',6,'data-ctx',7,'data-selector',8,'disabled',9,'end',10,'fields',11,'id',12,'mode',13,'range',14,'rangeKey',15,'start',16,'style',17,'value',18],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,512,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,511,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,35216)
return hG
}
xC.wxXCkey=2
_2z(z,509,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderPickerView"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderPickerView'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'picker-view',['bindchange',514,'bindpickend',1,'bindpickstart',2,'bindtap',3,'class',4,'data-attr',5,'data-ctx',6,'data-selector',7,'id',8,'indicatorClass',9,'indicatorStyle',10,'maskClass',11,'maskStyle',12,'style',13,'value',14],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,532,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,531,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,36112)
return hG
}
xC.wxXCkey=2
_2z(z,529,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderPickerViewColumn"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderPickerViewColumn'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_mz(z,'picker-view-column',['bindtap',534,'class',1,'data-attr',2,'data-ctx',3,'data-selector',4,'id',5,'style',6],[],e,s,gg)
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,544,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,543,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,36560)
return hG
}
xC.wxXCkey=2
_2z(z,541,oD,e,s,gg,xC,'item','index','key')
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont0'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,546,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=function(cF,fE,hG,gg){
var cI=_v()
_(hG,cI)
var oJ=_oz(z,550,cF,fE,gg)
var lK=_gd(x[1],oJ,e_,d_)
if(lK){
var aL=_1z(z,549,cF,fE,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[1],1,36832)
return hG
}
xC.wxXCkey=2
_2z(z,547,oD,e,s,gg,xC,'item','index','key')
}
else if(_oz(z,551,e,s,gg)){oB.wxVkey=2
var tM=_v()
_(oB,tM)
var eN=_oz(z,553,e,s,gg)
var bO=_gd(x[1],eN,e_,d_)
if(bO){
var oP=_1z(z,552,e,s,gg) || {}
var cur_globalf=gg.f
tM.wxXCkey=3
bO(oP,oP,tM,gg)
gg.f=cur_globalf
}
else _w(eN,x[1],1,36954)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem0"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem0'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,555,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,557,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,556,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,37090)
}
else if(_oz(z,558,e,s,gg)){oB.wxVkey=2
var hG=_v()
_(oB,hG)
var oH=_oz(z,560,e,s,gg)
var cI=_gd(x[1],oH,e_,d_)
if(cI){
var oJ=_1z(z,559,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[1],1,37189)
}
else if(_oz(z,561,e,s,gg)){oB.wxVkey=3
var lK=_v()
_(oB,lK)
var aL=_oz(z,563,e,s,gg)
var tM=_gd(x[1],aL,e_,d_)
if(tM){
var eN=_1z(z,562,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[1],1,37297)
}
else if(_oz(z,564,e,s,gg)){oB.wxVkey=4
var bO=_v()
_(oB,bO)
var oP=_oz(z,566,e,s,gg)
var xQ=_gd(x[1],oP,e_,d_)
if(xQ){
var oR=_1z(z,565,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[1],1,37408)
}
else if(_oz(z,567,e,s,gg)){oB.wxVkey=5
var fS=_v()
_(oB,fS)
var cT=_oz(z,569,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,568,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,37510)
}
else if(_oz(z,570,e,s,gg)){oB.wxVkey=6
var cW=_v()
_(oB,cW)
var oX=_oz(z,572,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,571,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,37616)
}
else if(_oz(z,573,e,s,gg)){oB.wxVkey=7
var t1=_v()
_(oB,t1)
var e2=_oz(z,575,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,574,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,37721)
}
else if(_oz(z,576,e,s,gg)){oB.wxVkey=8
var x5=_v()
_(oB,x5)
var o6=_oz(z,578,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,577,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,37821)
}
else if(_oz(z,579,e,s,gg)){oB.wxVkey=9
var h9=_v()
_(oB,h9)
var o0=_oz(z,581,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,580,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,37923)
}
else if(_oz(z,582,e,s,gg)){oB.wxVkey=10
var lCB=_v()
_(oB,lCB)
var aDB=_oz(z,584,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,583,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,38030)
}
else if(_oz(z,585,e,s,gg)){oB.wxVkey=11
var bGB=_v()
_(oB,bGB)
var oHB=_oz(z,587,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,586,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,38139)
}
else if(_oz(z,588,e,s,gg)){oB.wxVkey=12
var fKB=_v()
_(oB,fKB)
var cLB=_oz(z,590,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,589,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,38249)
}
else if(_oz(z,591,e,s,gg)){oB.wxVkey=13
var cOB=_v()
_(oB,cOB)
var oPB=_oz(z,593,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,592,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,38361)
}
else if(_oz(z,594,e,s,gg)){oB.wxVkey=14
var tSB=_v()
_(oB,tSB)
var eTB=_oz(z,596,e,s,gg)
var bUB=_gd(x[1],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,595,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[1],1,38474)
}
else if(_oz(z,597,e,s,gg)){oB.wxVkey=15
var xWB=_v()
_(oB,xWB)
var oXB=_oz(z,599,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,598,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,38585)
}
else if(_oz(z,600,e,s,gg)){oB.wxVkey=16
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,602,e,s,gg)
var c3B=_gd(x[1],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,601,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[1],1,38690)
}
else if(_oz(z,603,e,s,gg)){oB.wxVkey=17
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,605,e,s,gg)
var t7B=_gd(x[1],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,604,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[1],1,38792)
}
else if(_oz(z,606,e,s,gg)){oB.wxVkey=18
var b9B=_v()
_(oB,b9B)
var o0B=_oz(z,608,e,s,gg)
var xAC=_gd(x[1],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,607,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[1],1,38899)
}
else if(_oz(z,609,e,s,gg)){oB.wxVkey=19
var fCC=_v()
_(oB,fCC)
var cDC=_oz(z,611,e,s,gg)
var hEC=_gd(x[1],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,610,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[1],1,39017)
}
else if(_oz(z,612,e,s,gg)){oB.wxVkey=20
var cGC=_mz(z,'view',['animation',613,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'style',7],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
var xOC=_oz(z,624,tKC,aJC,gg)
var oPC=_gd(x[1],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,623,tKC,aJC,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[1],1,39500)
return eLC
}
oHC.wxXCkey=2
_2z(z,621,lIC,e,s,gg,oHC,'item','index','key')
_(oB,cGC)
}
else{oB.wxVkey=21
var cRC=_v()
_(oB,cRC)
var hSC=_oz(z,626,e,s,gg)
var oTC=_gd(x[1],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,625,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[1],1,39599)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont1"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont1'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,628,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,630,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,629,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,39729)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem1"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem1'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,632,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,634,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,633,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,39865)
}
else if(_oz(z,635,e,s,gg)){oB.wxVkey=2
var hG=_v()
_(oB,hG)
var oH=_oz(z,637,e,s,gg)
var cI=_gd(x[1],oH,e_,d_)
if(cI){
var oJ=_1z(z,636,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[1],1,39964)
}
else if(_oz(z,638,e,s,gg)){oB.wxVkey=3
var lK=_v()
_(oB,lK)
var aL=_oz(z,640,e,s,gg)
var tM=_gd(x[1],aL,e_,d_)
if(tM){
var eN=_1z(z,639,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[1],1,40072)
}
else if(_oz(z,641,e,s,gg)){oB.wxVkey=4
var bO=_v()
_(oB,bO)
var oP=_oz(z,643,e,s,gg)
var xQ=_gd(x[1],oP,e_,d_)
if(xQ){
var oR=_1z(z,642,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[1],1,40183)
}
else if(_oz(z,644,e,s,gg)){oB.wxVkey=5
var fS=_v()
_(oB,fS)
var cT=_oz(z,646,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,645,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,40285)
}
else if(_oz(z,647,e,s,gg)){oB.wxVkey=6
var cW=_v()
_(oB,cW)
var oX=_oz(z,649,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,648,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,40391)
}
else if(_oz(z,650,e,s,gg)){oB.wxVkey=7
var t1=_v()
_(oB,t1)
var e2=_oz(z,652,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,651,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,40496)
}
else if(_oz(z,653,e,s,gg)){oB.wxVkey=8
var x5=_v()
_(oB,x5)
var o6=_oz(z,655,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,654,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,40596)
}
else if(_oz(z,656,e,s,gg)){oB.wxVkey=9
var h9=_v()
_(oB,h9)
var o0=_oz(z,658,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,657,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,40698)
}
else if(_oz(z,659,e,s,gg)){oB.wxVkey=10
var lCB=_v()
_(oB,lCB)
var aDB=_oz(z,661,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,660,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,40805)
}
else if(_oz(z,662,e,s,gg)){oB.wxVkey=11
var bGB=_v()
_(oB,bGB)
var oHB=_oz(z,664,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,663,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,40914)
}
else if(_oz(z,665,e,s,gg)){oB.wxVkey=12
var fKB=_v()
_(oB,fKB)
var cLB=_oz(z,667,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,666,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,41024)
}
else if(_oz(z,668,e,s,gg)){oB.wxVkey=13
var cOB=_v()
_(oB,cOB)
var oPB=_oz(z,670,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,669,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,41136)
}
else if(_oz(z,671,e,s,gg)){oB.wxVkey=14
var tSB=_v()
_(oB,tSB)
var eTB=_oz(z,673,e,s,gg)
var bUB=_gd(x[1],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,672,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[1],1,41249)
}
else if(_oz(z,674,e,s,gg)){oB.wxVkey=15
var xWB=_v()
_(oB,xWB)
var oXB=_oz(z,676,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,675,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,41360)
}
else if(_oz(z,677,e,s,gg)){oB.wxVkey=16
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,679,e,s,gg)
var c3B=_gd(x[1],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,678,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[1],1,41465)
}
else if(_oz(z,680,e,s,gg)){oB.wxVkey=17
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,682,e,s,gg)
var t7B=_gd(x[1],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,681,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[1],1,41567)
}
else if(_oz(z,683,e,s,gg)){oB.wxVkey=18
var b9B=_v()
_(oB,b9B)
var o0B=_oz(z,685,e,s,gg)
var xAC=_gd(x[1],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,684,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[1],1,41674)
}
else if(_oz(z,686,e,s,gg)){oB.wxVkey=19
var fCC=_v()
_(oB,fCC)
var cDC=_oz(z,688,e,s,gg)
var hEC=_gd(x[1],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,687,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[1],1,41792)
}
else if(_oz(z,689,e,s,gg)){oB.wxVkey=20
var cGC=_mz(z,'view',['animation',690,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'style',7],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
var xOC=_oz(z,701,tKC,aJC,gg)
var oPC=_gd(x[1],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,700,tKC,aJC,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[1],1,42275)
return eLC
}
oHC.wxXCkey=2
_2z(z,698,lIC,e,s,gg,oHC,'item','index','key')
_(oB,cGC)
}
else{oB.wxVkey=21
var cRC=_v()
_(oB,cRC)
var hSC=_oz(z,703,e,s,gg)
var oTC=_gd(x[1],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,702,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[1],1,42374)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont2"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont2'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,705,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,707,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,706,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,42504)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem2"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem2'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,709,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,711,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,710,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,42640)
}
else if(_oz(z,712,e,s,gg)){oB.wxVkey=2
var hG=_v()
_(oB,hG)
var oH=_oz(z,714,e,s,gg)
var cI=_gd(x[1],oH,e_,d_)
if(cI){
var oJ=_1z(z,713,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[1],1,42739)
}
else if(_oz(z,715,e,s,gg)){oB.wxVkey=3
var lK=_v()
_(oB,lK)
var aL=_oz(z,717,e,s,gg)
var tM=_gd(x[1],aL,e_,d_)
if(tM){
var eN=_1z(z,716,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[1],1,42847)
}
else if(_oz(z,718,e,s,gg)){oB.wxVkey=4
var bO=_v()
_(oB,bO)
var oP=_oz(z,720,e,s,gg)
var xQ=_gd(x[1],oP,e_,d_)
if(xQ){
var oR=_1z(z,719,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[1],1,42958)
}
else if(_oz(z,721,e,s,gg)){oB.wxVkey=5
var fS=_v()
_(oB,fS)
var cT=_oz(z,723,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,722,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,43060)
}
else if(_oz(z,724,e,s,gg)){oB.wxVkey=6
var cW=_v()
_(oB,cW)
var oX=_oz(z,726,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,725,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,43166)
}
else if(_oz(z,727,e,s,gg)){oB.wxVkey=7
var t1=_v()
_(oB,t1)
var e2=_oz(z,729,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,728,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,43271)
}
else if(_oz(z,730,e,s,gg)){oB.wxVkey=8
var x5=_v()
_(oB,x5)
var o6=_oz(z,732,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,731,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,43371)
}
else if(_oz(z,733,e,s,gg)){oB.wxVkey=9
var h9=_v()
_(oB,h9)
var o0=_oz(z,735,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,734,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,43473)
}
else if(_oz(z,736,e,s,gg)){oB.wxVkey=10
var lCB=_v()
_(oB,lCB)
var aDB=_oz(z,738,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,737,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,43580)
}
else if(_oz(z,739,e,s,gg)){oB.wxVkey=11
var bGB=_v()
_(oB,bGB)
var oHB=_oz(z,741,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,740,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,43689)
}
else if(_oz(z,742,e,s,gg)){oB.wxVkey=12
var fKB=_v()
_(oB,fKB)
var cLB=_oz(z,744,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,743,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,43799)
}
else if(_oz(z,745,e,s,gg)){oB.wxVkey=13
var cOB=_v()
_(oB,cOB)
var oPB=_oz(z,747,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,746,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,43911)
}
else if(_oz(z,748,e,s,gg)){oB.wxVkey=14
var tSB=_v()
_(oB,tSB)
var eTB=_oz(z,750,e,s,gg)
var bUB=_gd(x[1],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,749,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[1],1,44024)
}
else if(_oz(z,751,e,s,gg)){oB.wxVkey=15
var xWB=_v()
_(oB,xWB)
var oXB=_oz(z,753,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,752,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,44135)
}
else if(_oz(z,754,e,s,gg)){oB.wxVkey=16
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,756,e,s,gg)
var c3B=_gd(x[1],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,755,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[1],1,44240)
}
else if(_oz(z,757,e,s,gg)){oB.wxVkey=17
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,759,e,s,gg)
var t7B=_gd(x[1],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,758,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[1],1,44342)
}
else if(_oz(z,760,e,s,gg)){oB.wxVkey=18
var b9B=_v()
_(oB,b9B)
var o0B=_oz(z,762,e,s,gg)
var xAC=_gd(x[1],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,761,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[1],1,44449)
}
else if(_oz(z,763,e,s,gg)){oB.wxVkey=19
var fCC=_v()
_(oB,fCC)
var cDC=_oz(z,765,e,s,gg)
var hEC=_gd(x[1],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,764,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[1],1,44567)
}
else if(_oz(z,766,e,s,gg)){oB.wxVkey=20
var cGC=_mz(z,'view',['animation',767,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'style',7],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
var xOC=_oz(z,778,tKC,aJC,gg)
var oPC=_gd(x[1],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,777,tKC,aJC,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[1],1,45050)
return eLC
}
oHC.wxXCkey=2
_2z(z,775,lIC,e,s,gg,oHC,'item','index','key')
_(oB,cGC)
}
else{oB.wxVkey=21
var cRC=_v()
_(oB,cRC)
var hSC=_oz(z,780,e,s,gg)
var oTC=_gd(x[1],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,779,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[1],1,45149)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont3"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont3'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,782,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,784,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,783,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,45279)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem3"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem3'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,786,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,788,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,787,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,45415)
}
else if(_oz(z,789,e,s,gg)){oB.wxVkey=2
var hG=_v()
_(oB,hG)
var oH=_oz(z,791,e,s,gg)
var cI=_gd(x[1],oH,e_,d_)
if(cI){
var oJ=_1z(z,790,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[1],1,45514)
}
else if(_oz(z,792,e,s,gg)){oB.wxVkey=3
var lK=_v()
_(oB,lK)
var aL=_oz(z,794,e,s,gg)
var tM=_gd(x[1],aL,e_,d_)
if(tM){
var eN=_1z(z,793,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[1],1,45622)
}
else if(_oz(z,795,e,s,gg)){oB.wxVkey=4
var bO=_v()
_(oB,bO)
var oP=_oz(z,797,e,s,gg)
var xQ=_gd(x[1],oP,e_,d_)
if(xQ){
var oR=_1z(z,796,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[1],1,45733)
}
else if(_oz(z,798,e,s,gg)){oB.wxVkey=5
var fS=_v()
_(oB,fS)
var cT=_oz(z,800,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,799,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,45835)
}
else if(_oz(z,801,e,s,gg)){oB.wxVkey=6
var cW=_v()
_(oB,cW)
var oX=_oz(z,803,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,802,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,45941)
}
else if(_oz(z,804,e,s,gg)){oB.wxVkey=7
var t1=_v()
_(oB,t1)
var e2=_oz(z,806,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,805,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,46046)
}
else if(_oz(z,807,e,s,gg)){oB.wxVkey=8
var x5=_v()
_(oB,x5)
var o6=_oz(z,809,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,808,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,46146)
}
else if(_oz(z,810,e,s,gg)){oB.wxVkey=9
var h9=_v()
_(oB,h9)
var o0=_oz(z,812,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,811,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,46248)
}
else if(_oz(z,813,e,s,gg)){oB.wxVkey=10
var lCB=_v()
_(oB,lCB)
var aDB=_oz(z,815,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,814,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,46355)
}
else if(_oz(z,816,e,s,gg)){oB.wxVkey=11
var bGB=_v()
_(oB,bGB)
var oHB=_oz(z,818,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,817,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,46464)
}
else if(_oz(z,819,e,s,gg)){oB.wxVkey=12
var fKB=_v()
_(oB,fKB)
var cLB=_oz(z,821,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,820,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,46574)
}
else if(_oz(z,822,e,s,gg)){oB.wxVkey=13
var cOB=_v()
_(oB,cOB)
var oPB=_oz(z,824,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,823,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,46686)
}
else if(_oz(z,825,e,s,gg)){oB.wxVkey=14
var tSB=_v()
_(oB,tSB)
var eTB=_oz(z,827,e,s,gg)
var bUB=_gd(x[1],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,826,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[1],1,46799)
}
else if(_oz(z,828,e,s,gg)){oB.wxVkey=15
var xWB=_v()
_(oB,xWB)
var oXB=_oz(z,830,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,829,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,46910)
}
else if(_oz(z,831,e,s,gg)){oB.wxVkey=16
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,833,e,s,gg)
var c3B=_gd(x[1],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,832,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[1],1,47015)
}
else if(_oz(z,834,e,s,gg)){oB.wxVkey=17
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,836,e,s,gg)
var t7B=_gd(x[1],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,835,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[1],1,47117)
}
else if(_oz(z,837,e,s,gg)){oB.wxVkey=18
var b9B=_v()
_(oB,b9B)
var o0B=_oz(z,839,e,s,gg)
var xAC=_gd(x[1],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,838,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[1],1,47224)
}
else if(_oz(z,840,e,s,gg)){oB.wxVkey=19
var fCC=_v()
_(oB,fCC)
var cDC=_oz(z,842,e,s,gg)
var hEC=_gd(x[1],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,841,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[1],1,47342)
}
else if(_oz(z,843,e,s,gg)){oB.wxVkey=20
var cGC=_mz(z,'view',['animation',844,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'style',7],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
var xOC=_oz(z,855,tKC,aJC,gg)
var oPC=_gd(x[1],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,854,tKC,aJC,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[1],1,47825)
return eLC
}
oHC.wxXCkey=2
_2z(z,852,lIC,e,s,gg,oHC,'item','index','key')
_(oB,cGC)
}
else{oB.wxVkey=21
var cRC=_v()
_(oB,cRC)
var hSC=_oz(z,857,e,s,gg)
var oTC=_gd(x[1],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,856,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[1],1,47924)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont4"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont4'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,859,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,861,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,860,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,48054)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem4"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem4'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,863,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,865,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,864,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,48190)
}
else if(_oz(z,866,e,s,gg)){oB.wxVkey=2
var hG=_v()
_(oB,hG)
var oH=_oz(z,868,e,s,gg)
var cI=_gd(x[1],oH,e_,d_)
if(cI){
var oJ=_1z(z,867,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[1],1,48289)
}
else if(_oz(z,869,e,s,gg)){oB.wxVkey=3
var lK=_v()
_(oB,lK)
var aL=_oz(z,871,e,s,gg)
var tM=_gd(x[1],aL,e_,d_)
if(tM){
var eN=_1z(z,870,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[1],1,48397)
}
else if(_oz(z,872,e,s,gg)){oB.wxVkey=4
var bO=_v()
_(oB,bO)
var oP=_oz(z,874,e,s,gg)
var xQ=_gd(x[1],oP,e_,d_)
if(xQ){
var oR=_1z(z,873,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[1],1,48508)
}
else if(_oz(z,875,e,s,gg)){oB.wxVkey=5
var fS=_v()
_(oB,fS)
var cT=_oz(z,877,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,876,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,48610)
}
else if(_oz(z,878,e,s,gg)){oB.wxVkey=6
var cW=_v()
_(oB,cW)
var oX=_oz(z,880,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,879,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,48716)
}
else if(_oz(z,881,e,s,gg)){oB.wxVkey=7
var t1=_v()
_(oB,t1)
var e2=_oz(z,883,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,882,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,48821)
}
else if(_oz(z,884,e,s,gg)){oB.wxVkey=8
var x5=_v()
_(oB,x5)
var o6=_oz(z,886,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,885,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,48921)
}
else if(_oz(z,887,e,s,gg)){oB.wxVkey=9
var h9=_v()
_(oB,h9)
var o0=_oz(z,889,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,888,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,49023)
}
else if(_oz(z,890,e,s,gg)){oB.wxVkey=10
var lCB=_v()
_(oB,lCB)
var aDB=_oz(z,892,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,891,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,49130)
}
else if(_oz(z,893,e,s,gg)){oB.wxVkey=11
var bGB=_v()
_(oB,bGB)
var oHB=_oz(z,895,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,894,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,49239)
}
else if(_oz(z,896,e,s,gg)){oB.wxVkey=12
var fKB=_v()
_(oB,fKB)
var cLB=_oz(z,898,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,897,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,49349)
}
else if(_oz(z,899,e,s,gg)){oB.wxVkey=13
var cOB=_v()
_(oB,cOB)
var oPB=_oz(z,901,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,900,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,49461)
}
else if(_oz(z,902,e,s,gg)){oB.wxVkey=14
var tSB=_v()
_(oB,tSB)
var eTB=_oz(z,904,e,s,gg)
var bUB=_gd(x[1],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,903,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[1],1,49574)
}
else if(_oz(z,905,e,s,gg)){oB.wxVkey=15
var xWB=_v()
_(oB,xWB)
var oXB=_oz(z,907,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,906,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,49685)
}
else if(_oz(z,908,e,s,gg)){oB.wxVkey=16
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,910,e,s,gg)
var c3B=_gd(x[1],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,909,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[1],1,49790)
}
else if(_oz(z,911,e,s,gg)){oB.wxVkey=17
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,913,e,s,gg)
var t7B=_gd(x[1],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,912,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[1],1,49892)
}
else if(_oz(z,914,e,s,gg)){oB.wxVkey=18
var b9B=_v()
_(oB,b9B)
var o0B=_oz(z,916,e,s,gg)
var xAC=_gd(x[1],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,915,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[1],1,49999)
}
else if(_oz(z,917,e,s,gg)){oB.wxVkey=19
var fCC=_v()
_(oB,fCC)
var cDC=_oz(z,919,e,s,gg)
var hEC=_gd(x[1],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,918,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[1],1,50117)
}
else if(_oz(z,920,e,s,gg)){oB.wxVkey=20
var cGC=_mz(z,'view',['animation',921,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'style',7],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
var xOC=_oz(z,932,tKC,aJC,gg)
var oPC=_gd(x[1],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,931,tKC,aJC,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[1],1,50600)
return eLC
}
oHC.wxXCkey=2
_2z(z,929,lIC,e,s,gg,oHC,'item','index','key')
_(oB,cGC)
}
else{oB.wxVkey=21
var cRC=_v()
_(oB,cRC)
var hSC=_oz(z,934,e,s,gg)
var oTC=_gd(x[1],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,933,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[1],1,50699)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont5"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont5'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,936,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,938,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,937,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,50829)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem5"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem5'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,940,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,942,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,941,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,50965)
}
else if(_oz(z,943,e,s,gg)){oB.wxVkey=2
var hG=_v()
_(oB,hG)
var oH=_oz(z,945,e,s,gg)
var cI=_gd(x[1],oH,e_,d_)
if(cI){
var oJ=_1z(z,944,e,s,gg) || {}
var cur_globalf=gg.f
hG.wxXCkey=3
cI(oJ,oJ,hG,gg)
gg.f=cur_globalf
}
else _w(oH,x[1],1,51064)
}
else if(_oz(z,946,e,s,gg)){oB.wxVkey=3
var lK=_v()
_(oB,lK)
var aL=_oz(z,948,e,s,gg)
var tM=_gd(x[1],aL,e_,d_)
if(tM){
var eN=_1z(z,947,e,s,gg) || {}
var cur_globalf=gg.f
lK.wxXCkey=3
tM(eN,eN,lK,gg)
gg.f=cur_globalf
}
else _w(aL,x[1],1,51172)
}
else if(_oz(z,949,e,s,gg)){oB.wxVkey=4
var bO=_v()
_(oB,bO)
var oP=_oz(z,951,e,s,gg)
var xQ=_gd(x[1],oP,e_,d_)
if(xQ){
var oR=_1z(z,950,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[1],1,51283)
}
else if(_oz(z,952,e,s,gg)){oB.wxVkey=5
var fS=_v()
_(oB,fS)
var cT=_oz(z,954,e,s,gg)
var hU=_gd(x[1],cT,e_,d_)
if(hU){
var oV=_1z(z,953,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[1],1,51385)
}
else if(_oz(z,955,e,s,gg)){oB.wxVkey=6
var cW=_v()
_(oB,cW)
var oX=_oz(z,957,e,s,gg)
var lY=_gd(x[1],oX,e_,d_)
if(lY){
var aZ=_1z(z,956,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[1],1,51491)
}
else if(_oz(z,958,e,s,gg)){oB.wxVkey=7
var t1=_v()
_(oB,t1)
var e2=_oz(z,960,e,s,gg)
var b3=_gd(x[1],e2,e_,d_)
if(b3){
var o4=_1z(z,959,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[1],1,51596)
}
else if(_oz(z,961,e,s,gg)){oB.wxVkey=8
var x5=_v()
_(oB,x5)
var o6=_oz(z,963,e,s,gg)
var f7=_gd(x[1],o6,e_,d_)
if(f7){
var c8=_1z(z,962,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[1],1,51696)
}
else if(_oz(z,964,e,s,gg)){oB.wxVkey=9
var h9=_v()
_(oB,h9)
var o0=_oz(z,966,e,s,gg)
var cAB=_gd(x[1],o0,e_,d_)
if(cAB){
var oBB=_1z(z,965,e,s,gg) || {}
var cur_globalf=gg.f
h9.wxXCkey=3
cAB(oBB,oBB,h9,gg)
gg.f=cur_globalf
}
else _w(o0,x[1],1,51798)
}
else if(_oz(z,967,e,s,gg)){oB.wxVkey=10
var lCB=_v()
_(oB,lCB)
var aDB=_oz(z,969,e,s,gg)
var tEB=_gd(x[1],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,968,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[1],1,51905)
}
else if(_oz(z,970,e,s,gg)){oB.wxVkey=11
var bGB=_v()
_(oB,bGB)
var oHB=_oz(z,972,e,s,gg)
var xIB=_gd(x[1],oHB,e_,d_)
if(xIB){
var oJB=_1z(z,971,e,s,gg) || {}
var cur_globalf=gg.f
bGB.wxXCkey=3
xIB(oJB,oJB,bGB,gg)
gg.f=cur_globalf
}
else _w(oHB,x[1],1,52014)
}
else if(_oz(z,973,e,s,gg)){oB.wxVkey=12
var fKB=_v()
_(oB,fKB)
var cLB=_oz(z,975,e,s,gg)
var hMB=_gd(x[1],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,974,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[1],1,52124)
}
else if(_oz(z,976,e,s,gg)){oB.wxVkey=13
var cOB=_v()
_(oB,cOB)
var oPB=_oz(z,978,e,s,gg)
var lQB=_gd(x[1],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,977,e,s,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[1],1,52236)
}
else if(_oz(z,979,e,s,gg)){oB.wxVkey=14
var tSB=_v()
_(oB,tSB)
var eTB=_oz(z,981,e,s,gg)
var bUB=_gd(x[1],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,980,e,s,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[1],1,52349)
}
else if(_oz(z,982,e,s,gg)){oB.wxVkey=15
var xWB=_v()
_(oB,xWB)
var oXB=_oz(z,984,e,s,gg)
var fYB=_gd(x[1],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,983,e,s,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[1],1,52460)
}
else if(_oz(z,985,e,s,gg)){oB.wxVkey=16
var h1B=_v()
_(oB,h1B)
var o2B=_oz(z,987,e,s,gg)
var c3B=_gd(x[1],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,986,e,s,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[1],1,52565)
}
else if(_oz(z,988,e,s,gg)){oB.wxVkey=17
var l5B=_v()
_(oB,l5B)
var a6B=_oz(z,990,e,s,gg)
var t7B=_gd(x[1],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,989,e,s,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[1],1,52667)
}
else if(_oz(z,991,e,s,gg)){oB.wxVkey=18
var b9B=_v()
_(oB,b9B)
var o0B=_oz(z,993,e,s,gg)
var xAC=_gd(x[1],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,992,e,s,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[1],1,52774)
}
else if(_oz(z,994,e,s,gg)){oB.wxVkey=19
var fCC=_v()
_(oB,fCC)
var cDC=_oz(z,996,e,s,gg)
var hEC=_gd(x[1],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,995,e,s,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[1],1,52892)
}
else if(_oz(z,997,e,s,gg)){oB.wxVkey=20
var cGC=_mz(z,'view',['animation',998,'bindtap',1,'class',2,'data-attr',3,'data-ctx',4,'data-selector',5,'id',6,'style',7],[],e,s,gg)
var oHC=_v()
_(cGC,oHC)
var lIC=function(tKC,aJC,eLC,gg){
var oNC=_v()
_(eLC,oNC)
var xOC=_oz(z,1009,tKC,aJC,gg)
var oPC=_gd(x[1],xOC,e_,d_)
if(oPC){
var fQC=_1z(z,1008,tKC,aJC,gg) || {}
var cur_globalf=gg.f
oNC.wxXCkey=3
oPC(fQC,fQC,oNC,gg)
gg.f=cur_globalf
}
else _w(xOC,x[1],1,53375)
return eLC
}
oHC.wxXCkey=2
_2z(z,1006,lIC,e,s,gg,oHC,'item','index','key')
_(oB,cGC)
}
else{oB.wxVkey=21
var cRC=_v()
_(oB,cRC)
var hSC=_oz(z,1011,e,s,gg)
var oTC=_gd(x[1],hSC,e_,d_)
if(oTC){
var cUC=_1z(z,1010,e,s,gg) || {}
var cur_globalf=gg.f
cRC.wxXCkey=3
oTC(cUC,cUC,cRC,gg)
gg.f=cur_globalf
}
else _w(hSC,x[1],1,53474)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderCont6"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderCont6'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1013,e,s,gg)){oB.wxVkey=1
var xC=_v()
_(oB,xC)
var oD=_oz(z,1015,e,s,gg)
var fE=_gd(x[1],oD,e_,d_)
if(fE){
var cF=_1z(z,1014,e,s,gg) || {}
var cur_globalf=gg.f
xC.wxXCkey=3
fE(cF,cF,xC,gg)
gg.f=cur_globalf
}
else _w(oD,x[1],1,53604)
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
d_[x[1]]["renderItem6"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[1]+':renderItem6'
r.wxVkey=b
gg.f=$gdc(f_["./dynamic/core.wxml"],"",1)
if(p_[b]){_wl(b,x[1]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=_oz(z,1018,e,s,gg)
var oD=_gd(x[1],xC,e_,d_)
if(oD){
var fE=_1z(z,1017,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[1],1,53703)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
var xQ=e_[x[2]].i
_ai(xQ,x[3],e_,x[2],1,1)
var oR=_v()
_(r,oR)
if(_oz(z,0,e,s,gg)){oR.wxVkey=1
var fS=_v()
_(oR,fS)
var cT=function(oV,hU,cW,gg){
var lY=_v()
_(cW,lY)
var aZ=_oz(z,4,oV,hU,gg)
var t1=_gd(x[2],aZ,e_,d_)
if(t1){
var e2=_1z(z,3,oV,hU,gg) || {}
var cur_globalf=gg.f
lY.wxXCkey=3
t1(e2,e2,lY,gg)
gg.f=cur_globalf
}
else _w(aZ,x[2],1,131)
return cW
}
fS.wxXCkey=2
_2z(z,1,cT,e,s,gg,fS,'item','index','key')
}
else{oR.wxVkey=2
var b3=_v()
_(oR,b3)
var o4=_oz(z,6,e,s,gg)
var x5=_gd(x[2],o4,e_,d_)
if(x5){
var o6=_1z(z,5,e,s,gg) || {}
var cur_globalf=gg.f
b3.wxXCkey=3
x5(o6,o6,b3,gg)
gg.f=cur_globalf
}
else _w(o4,x[2],1,225)
}
oR.wxXCkey=1
xQ.pop()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[x[3]],ic:[]}
d_[x[4]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
var c8=_v()
_(r,c8)
if(_oz(z,0,e,s,gg)){c8.wxVkey=1
var h9=_n('view')
_rz(z,h9,'class',1,e,s,gg)
var o0=_v()
_(h9,o0)
if(_oz(z,2,e,s,gg)){o0.wxVkey=1
}
var cAB=_v()
_(h9,cAB)
if(_oz(z,3,e,s,gg)){cAB.wxVkey=1
}
var oBB=_v()
_(h9,oBB)
if(_oz(z,4,e,s,gg)){oBB.wxVkey=1
}
var lCB=_v()
_(h9,lCB)
if(_oz(z,5,e,s,gg)){lCB.wxVkey=1
var aDB=_n('view')
_rz(z,aDB,'class',6,e,s,gg)
var tEB=_v()
_(aDB,tEB)
if(_oz(z,7,e,s,gg)){tEB.wxVkey=1
}
var eFB=_v()
_(aDB,eFB)
if(_oz(z,8,e,s,gg)){eFB.wxVkey=1
}
tEB.wxXCkey=1
eFB.wxXCkey=1
_(lCB,aDB)
}
o0.wxXCkey=1
cAB.wxXCkey=1
oBB.wxXCkey=1
lCB.wxXCkey=1
_(c8,h9)
}
c8.wxXCkey=1
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var oHB=_mz(z,'form',['bindsubmit',0,'class',1,'reportSubmit',1],[],e,s,gg)
var xIB=_n('slot')
_(oHB,xIB)
_(r,oHB)
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var fKB=_mz(z,'form',['bindsubmit',0,'reportSubmit',1],[],e,s,gg)
var cLB=_v()
_(fKB,cLB)
if(_oz(z,2,e,s,gg)){cLB.wxVkey=1
var hMB=_n('view')
_rz(z,hMB,'class',3,e,s,gg)
var oNB=_v()
_(hMB,oNB)
if(_oz(z,4,e,s,gg)){oNB.wxVkey=1
}
var cOB=_v()
_(hMB,cOB)
if(_oz(z,5,e,s,gg)){cOB.wxVkey=1
}
oNB.wxXCkey=1
cOB.wxXCkey=1
_(cLB,hMB)
}
cLB.wxXCkey=1
_(r,fKB)
return r
}
e_[x[6]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var lQB=_v()
_(r,lQB)
if(_oz(z,0,e,s,gg)){lQB.wxVkey=1
var eTB=_n('view')
_rz(z,eTB,'class',1,e,s,gg)
var bUB=_v()
_(eTB,bUB)
if(_oz(z,2,e,s,gg)){bUB.wxVkey=1
}
else{bUB.wxVkey=2
var oVB=_n('view')
_rz(z,oVB,'class',3,e,s,gg)
var xWB=_v()
_(oVB,xWB)
if(_oz(z,4,e,s,gg)){xWB.wxVkey=1
var fYB=_v()
_(xWB,fYB)
if(_oz(z,5,e,s,gg)){fYB.wxVkey=1
}
var cZB=_v()
_(xWB,cZB)
if(_oz(z,6,e,s,gg)){cZB.wxVkey=1
}
var h1B=_v()
_(xWB,h1B)
if(_oz(z,7,e,s,gg)){h1B.wxVkey=1
}
fYB.wxXCkey=1
cZB.wxXCkey=1
h1B.wxXCkey=1
}
else if(_oz(z,8,e,s,gg)){xWB.wxVkey=2
}
else{xWB.wxVkey=3
}
var oXB=_v()
_(oVB,oXB)
if(_oz(z,9,e,s,gg)){oXB.wxVkey=1
}
var o2B=_v()
_(oVB,o2B)
var c3B=function(l5B,o4B,a6B,gg){
var e8B=_v()
_(a6B,e8B)
if(_oz(z,12,l5B,o4B,gg)){e8B.wxVkey=1
}
e8B.wxXCkey=1
return a6B
}
o2B.wxXCkey=2
_2z(z,10,c3B,e,s,gg,o2B,'item','index','id')
xWB.wxXCkey=1
oXB.wxXCkey=1
_(bUB,oVB)
}
bUB.wxXCkey=1
_(lQB,eTB)
}
var aRB=_v()
_(r,aRB)
if(_oz(z,13,e,s,gg)){aRB.wxVkey=1
}
var tSB=_v()
_(r,tSB)
if(_oz(z,14,e,s,gg)){tSB.wxVkey=1
}
lQB.wxXCkey=1
aRB.wxXCkey=1
tSB.wxXCkey=1
return r
}
e_[x[7]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var o0B=_v()
_(r,o0B)
if(_oz(z,0,e,s,gg)){o0B.wxVkey=1
}
o0B.wxXCkey=1
return r
}
e_[x[8]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
var oBC=_mz(z,'navigator',['class',0,'hoverClass',1,'openType',1,'url',2],[],e,s,gg)
var fCC=_v()
_(oBC,fCC)
if(_oz(z,4,e,s,gg)){fCC.wxVkey=1
}
var cDC=_v()
_(oBC,cDC)
if(_oz(z,5,e,s,gg)){cDC.wxVkey=1
}
fCC.wxXCkey=1
cDC.wxXCkey=1
_(r,oBC)
return r
}
e_[x[9]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
return r
}
e_[x[10]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
return r
}
e_[x[11]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[12]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var lIC=_n('dynamic')
_rz(z,lIC,'case',0,e,s,gg)
_(r,lIC)
return r
}
e_[x[13]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
return r
}
e_[x[14]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var eLC=e_[x[15]].i
_ai(eLC,x[16],e_,x[15],1,1)
var bMC=_n('view')
_rz(z,bMC,'class',0,e,s,gg)
var oNC=_mz(z,'dynamic',['case',1,'snapshot',1],[],e,s,gg)
_(bMC,oNC)
var xOC=_v()
_(bMC,xOC)
var oPC=_oz(z,4,e,s,gg)
var fQC=_gd(x[15],oPC,e_,d_)
if(fQC){
var cRC=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
xOC.wxXCkey=3
fQC(cRC,cRC,xOC,gg)
gg.f=cur_globalf
}
else _w(oPC,x[15],1,811)
_(r,bMC)
var hSC=_n('add-my-program')
_rz(z,hSC,'isSecondHomeView',5,e,s,gg)
_(r,hSC)
eLC.pop()
return r
}
e_[x[15]]={f:m14,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[17]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var cUC=_v()
_(r,cUC)
if(_oz(z,0,e,s,gg)){cUC.wxVkey=1
var oVC=_mz(z,'view',['bindtap',1,'bindtouchend',1,'bindtouchmove',2,'bindtouchstart',3,'class',4,'data-url',5,'style',6],[],e,s,gg)
var lWC=_n('view')
_rz(z,lWC,'class',8,e,s,gg)
var aXC=_v()
_(lWC,aXC)
var tYC=function(b1C,eZC,o2C,gg){
var o4C=_v()
_(o2C,o4C)
if(_oz(z,11,b1C,eZC,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
return o2C
}
aXC.wxXCkey=2
_2z(z,9,tYC,e,s,gg,aXC,'item','index','{{index}}')
var f5C=_v()
_(lWC,f5C)
var c6C=function(o8C,h7C,c9C,gg){
var lAD=_v()
_(c9C,lAD)
if(_oz(z,15,o8C,h7C,gg)){lAD.wxVkey=1
}
lAD.wxXCkey=1
return c9C
}
f5C.wxXCkey=2
_2z(z,13,c6C,e,s,gg,f5C,'item','index','{{index}}')
_(oVC,lWC)
_(cUC,oVC)
}
cUC.wxXCkey=1
return r
}
e_[x[17]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var tCD=e_[x[18]].i
_ai(tCD,x[19],e_,x[18],1,1)
_ai(tCD,x[20],e_,x[18],1,42)
var bED=_v()
_(r,bED)
var oFD=_oz(z,1,e,s,gg)
var xGD=_gd(x[18],oFD,e_,d_)
if(xGD){
var oHD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bED.wxXCkey=3
xGD(oHD,oHD,bED,gg)
gg.f=cur_globalf
}
else _w(oFD,x[18],1,98)
var eDD=_v()
_(r,eDD)
if(_oz(z,2,e,s,gg)){eDD.wxVkey=1
var fID=_v()
_(eDD,fID)
var cJD=_oz(z,4,e,s,gg)
var hKD=_gd(x[18],cJD,e_,d_)
if(hKD){
var oLD=_1z(z,3,e,s,gg) || {}
var cur_globalf=gg.f
fID.wxXCkey=3
hKD(oLD,oLD,fID,gg)
gg.f=cur_globalf
}
else _w(cJD,x[18],1,163)
}
var cMD=_mz(z,'scroll-view',['bindscrolltolower',5,'bindscrolltoupper',1,'class',2,'scrollTop',3,'scrollY',4],[],e,s,gg)
var oND=_v()
_(cMD,oND)
if(_oz(z,10,e,s,gg)){oND.wxVkey=1
var lOD=_v()
_(oND,lOD)
var aPD=function(eRD,tQD,bSD,gg){
var xUD=_v()
_(bSD,xUD)
if(_oz(z,15,eRD,tQD,gg)){xUD.wxVkey=1
var oVD=_mz(z,'order-block',['bind:refreshOrder',16,'bind:toggleSrcoll',1,'current',2,'list',3,'posi',4],[],eRD,tQD,gg)
_(xUD,oVD)
}
xUD.wxXCkey=1
xUD.wxXCkey=3
return bSD
}
lOD.wxXCkey=4
_2z(z,13,aPD,e,s,gg,lOD,'list','idx','{{list.orderid}}')
}
else{oND.wxVkey=2
}
oND.wxXCkey=1
oND.wxXCkey=3
_(r,cMD)
eDD.wxXCkey=1
tCD.pop()
tCD.pop()
return r
}
e_[x[18]]={f:m16,j:[],i:[],ti:[x[19],x[20]],ic:[]}
d_[x[21]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
return r
}
e_[x[21]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[22]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
return r
}
e_[x[23]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
d_[x[24]]["guess"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[24]+':guess'
r.wxVkey=b
gg.f=$gdc(f_["./index/tpls/guess/guess.wxml"],"",1)
if(p_[b]){_wl(b,x[24]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,3,fE,oD,gg)){oH.wxVkey=1
var cI=_mz(z,'form',['bindsubmit',4,'data-id',1,'data-index',2,'data-jumperurl',3,'data-source',4,'data-type',5,'data-vallab',6,'reportSubmit',7],[],fE,oD,gg)
var oJ=_n('view')
_rz(z,oJ,'class',12,fE,oD,gg)
var lK=_v()
_(oJ,lK)
if(_oz(z,13,fE,oD,gg)){lK.wxVkey=1
}
var aL=_n('view')
_rz(z,aL,'class',14,fE,oD,gg)
var tM=_v()
_(aL,tM)
if(_oz(z,15,fE,oD,gg)){tM.wxVkey=1
}
var eN=_v()
_(aL,eN)
if(_oz(z,16,fE,oD,gg)){eN.wxVkey=1
}
var bO=_n('view')
_rz(z,bO,'class',17,fE,oD,gg)
var oP=_v()
_(bO,oP)
if(_oz(z,18,fE,oD,gg)){oP.wxVkey=1
}
var xQ=_v()
_(bO,xQ)
if(_oz(z,19,fE,oD,gg)){xQ.wxVkey=1
}
oP.wxXCkey=1
xQ.wxXCkey=1
_(aL,bO)
tM.wxXCkey=1
eN.wxXCkey=1
_(oJ,aL)
lK.wxXCkey=1
_(cI,oJ)
_(oH,cI)
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,1,xC,e,s,gg,oB,'item','index','{{index}}')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[24]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
d_[x[25]]["nav"]=function(e,s,r,gg){
var z=gz$gwx_22()
var b=x[25]+':nav'
r.wxVkey=b
gg.f=$gdc(f_["./index/tpls/nav/nav.wxml"],"",1)
if(p_[b]){_wl(b,x[25]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,3,fE,oD,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,1,xC,e,s,gg,oB,'item','index','index')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
return r
}
e_[x[25]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
d_[x[26]]["subnav"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[26]+':subnav'
r.wxVkey=b
gg.f=$gdc(f_["./index/tpls/subnav/nav.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,3,fE,oD,gg)){oH.wxVkey=1
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,1,xC,e,s,gg,oB,'item','index','index')
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[26]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var a4D=_v()
_(r,a4D)
if(_oz(z,0,e,s,gg)){a4D.wxVkey=1
}
a4D.wxXCkey=1
return r
}
e_[x[27]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[28]]={f:m24,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}
	__wxAppCode__['components/coupon-bag/index.json'] = {"component":true};
		__wxAppCode__['components/coupon-bag/index.wxml'] = $gwx( './components/coupon-bag/index.wxml' );
		__wxAppCode__['dynamic/dynamic.json'] = {"component":true,"usingComponents":{"core":"./dynamic","component-share":"../index/components/component-share/index","formcover":"../index/components/formcover/formcover","back":"../index/components/mt-back/back","coupon":"../index/components/mt-coupon/coupon","guide":"../index/components/mt-guide/guide","pendant":"../index/components/mt-pendant/pendant","coupon-bag":"../components/coupon-bag/index","order-block":"../index/pages/order/components/order-block/order-block"}};
		__wxAppCode__['dynamic/dynamic.wxml'] = $gwx( './dynamic/dynamic.wxml' );
		__wxAppCode__['index/components/component-share/index.json'] = {"component":true};
		__wxAppCode__['index/components/component-share/index.wxml'] = $gwx( './index/components/component-share/index.wxml' );
		__wxAppCode__['index/components/formcover/formcover.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['index/components/formcover/formcover.wxml'] = $gwx( './index/components/formcover/formcover.wxml' );
		__wxAppCode__['index/components/mt-back/back.json'] = {"component":true};
		__wxAppCode__['index/components/mt-back/back.wxml'] = $gwx( './index/components/mt-back/back.wxml' );
		__wxAppCode__['index/components/mt-coupon/coupon.json'] = {"component":true};
		__wxAppCode__['index/components/mt-coupon/coupon.wxml'] = $gwx( './index/components/mt-coupon/coupon.wxml' );
		__wxAppCode__['index/components/mt-guide/guide.json'] = {"component":true};
		__wxAppCode__['index/components/mt-guide/guide.wxml'] = $gwx( './index/components/mt-guide/guide.wxml' );
		__wxAppCode__['index/components/mt-pendant/pendant.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['index/components/mt-pendant/pendant.wxml'] = $gwx( './index/components/mt-pendant/pendant.wxml' );
		__wxAppCode__['index/pages/list/list.json'] = {"enablePullDownRefresh":true,"usingComponents":{"mt-back":"../../../index/components/mt-back/back"}};
		__wxAppCode__['index/pages/list/list.wxml'] = $gwx( './index/pages/list/list.wxml' );
		__wxAppCode__['index/pages/mine/mine.json'] = {"navigationBarTitleText":"我的","usingComponents":{"formcover":"../../../index/components/formcover/formcover","dynamic":"../../../dynamic/dynamic"}};
		__wxAppCode__['index/pages/mine/mine.wxml'] = $gwx( './index/pages/mine/mine.wxml' );
		__wxAppCode__['index/pages/mt/mt.json'] = {"navigationBarTitleText":"美团","enablePullDownRefresh":true,"navigationBarBackgroundColor":"#FEFEFE","navigationBarTextStyle":"black","usingComponents":{"formcover":"../../../index/components/formcover/formcover","dynamic":"../../../dynamic/dynamic","add-my-program":"../../../index/components/mt-guide/guide"}};
		__wxAppCode__['index/pages/mt/mt.wxml'] = $gwx( './index/pages/mt/mt.wxml' );
		__wxAppCode__['index/pages/order/components/order-block/order-block.json'] = {"component":true,"usingComponents":{}};
		__wxAppCode__['index/pages/order/components/order-block/order-block.wxml'] = $gwx( './index/pages/order/components/order-block/order-block.wxml' );
		__wxAppCode__['index/pages/order/order-list.json'] = {"navigationBarTitleText":"我的订单","enablePullDownRefresh":true,"usingComponents":{"order-block":"./components/order-block/order-block"}};
		__wxAppCode__['index/pages/order/order-list.wxml'] = $gwx( './index/pages/order/order-list.wxml' );
	
	define("config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="https://i.meituan.com/brunch/applet/",i="https://apimobile.meituan.com/group";module.exports={indexApi:e+"index",dealApi:e+"deal",dealApi2:e+"deal2",postOrderApi:"https://i.meituan.com/weixin/deal/buy",postOrderApiDaozong:"https://web.meituan.com/web/wxbuy/daozong",errReportApi:e+"err",captchaApi:"https://i.meituan.com/account/appcaptcha",poiInfo:"https://i.meituan.com/wrapapi/poiinfo",poiApi:"https://apimobile.meituan.com/group/v1/poi/",poiDealApi:"https://apimobile.meituan.com/group/v1/deal/poi/",loginApi:e+"user/login",uuidApi:e+"user/uuid",mobileCodeApi:e+"user/mobilecode",mobileCodeCheckApi:e+"user/mobilecodecheck",foodOrderDetailApi:"https://i.meituan.com/weixin/order/",yuleOrderDetailApi:"https://i.meituan.com/general/platform/mtusercenter/mtorder.json",poiListApi:e+"deal-pois",orderListApi:"https://ordercenter.meituan.com/ordercenter/user/orders",reviewPayApi:e+"review-pay",reviewTagApi:e+"review-tag",reviewApi:e+"review",lxApi:"https://report.meituan.com",getCityInfoByLocApi:"https://i.meituan.com/locate/latlng/",swiper:{indicatorDots:!0,autoplay:!0,current:0,interval:5e3,duration:1e3},toastConf:{duration:2e3,text:"默认",hidden:!0,handler:"toastHandler"},getOpenId:"https://i.meituan.com/wrapapi/getopenid",userInfoApi:"https://i.meituan.com/wrapapi/getLoginedUserInfo",guessApi:i+"/v2/recommend/homepage/city/",commentsApi:"https://web.meituan.com/web/poi/",commentsDealApi:"https://web.meituan.com/web/deal/",poiAlunmApi:"https://web.meituan.com/web/album/poi/",commentScoreApi:"https://web.meituan.com/web/poi/",commentPoiTagsApi:"https://web.meituan.com/web/poi/",commentDealTagsApi:"https://web.meituan.com/web/deal/",votegoodApi:"https://web.meituan.com/web/comment/",nearsApi:i+"/v2/recommend/nearstoredeals/poi/",recommendApi:i+"/v2/deal/recommend/collaborative",branchApi:"https://i.meituan.com/brunch/applet/deal-pois",couponApi:"https://mapi.dianping.com/pay/generalpromo/v1/getgeneralpromodeskcoupon.jsonp",foodOrderVoucherApi:"https://rpc.meituan.com/api/foodorder",c_zcApi:"https://c-zc.meituan.com/api/wxapp/coupon",vouchersApi:"https://promotionapi-wpt.meituan.com/miniapp/v1/user/",WAIMAI_APPID:"wx2c348cf579062e56",PINTUAN_APPID:"wx0ab7d1f9c2bd8571",JIUDIAN11_APPID:"wx45f06b3c34169740",XIEDIANPING_APPID:"wxd2dc491d7e28fe28",TICKET_APPID:"wx4fa555703dced95c",TRAIN_APPID:"wx7970573ccad929a7",ZHENGGUO_APPID:"wxc147016e2b3bf9d6",MT_APPID:"wxde8ac0a21135c07d",dealPromoTagApi:"https://web.meituan.com/web/lijian/simple",listPromoTagApi:"https://web.meituan.com/web/lijian/complex",commentUploadApi:"https://web.meituan.com/web/addComment"}; 
 			}); 
		define("dynamic/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../npm/@mtfe/mt-weapp-request/lib/request.js");exports.default={request:e.promiseRequest,env:"",project:"mtweapp",injections:null}; 
 			}); 
		define("dynamic/inline-data.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.VDOM=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=require("../npm/@mtfe/mt-weapp-jsvm/lib/index.js"),o=function(e){return"wx-template"===e.tag&&e.attr.is};exports.VDOM=function(){function a(e,n){t(this,a),this.ctxPool={};var r=e.tag,i=e.attr,o=e.template,l=void 0===o?{}:o;this.template=l,this.scope=n,e&&(this.vnodes={tag:r,attr:i,selector:r,children:this.inlineChildren(r,e.children,n)})}return r(a,[{key:"inlineChildren",value:function(t,r,a,l){var c=this,f=function(e,t){if(e&&"exp"===e.type){var n=e.value.map(function(e){if("ast"===e.type)try{return(0,i.getVm)().runInScope(t||a,e.value)}catch(e){return null}return e.value});return n.length>1?n.join(""):n[0]}return e},u=[];if(r&&r.length){var s=!1;r.forEach(function(r,p){if(r.tag){var h=r.attr,d=r.tag,y=Object.assign({},l),v={},x=h.wxIf,m=h.wxElif,w=h.wxElse,b=h.wxFor,g=h.wxKey,j=e(h,["wxIf","wxElif","wxElse","wxFor","wxKey"]);if(x){if(!(s=v.wxIf=f(x)))return}else{var O=m||w;if(s){if(O)return}else if(O&&!(s=v.wxIf=f(O)))return}var S=f(b);if(b&&!S)return;var C=Object.keys(j),E=function(e,t){C.forEach(function(n){e[n]=f(h[n],t),"wx-dynamic"===d&&"context"===n&&(e[n]=JSON.stringify(e[n])),0===n.indexOf("data")&&(y[n]=v[n])})};if(void 0===b){E(v);var I=t+">"+d+"["+p+"]";c.ctxPool[I]=y,o(r)?u=u.concat(c.injectTemplateChild(r,I,v,y)):u.push({tag:d,key:g||p,selector:I,attr:v,children:c.inlineChildren(I,r.children,a,y)})}else if(Array.isArray(S)){var k=j.wxForItem,P=j.wxForIndex,_=j.wxKey;S.forEach(function(e,l){if(null!=e){var f={},s=new i.Scope("function",a);s.var(k||"item",e),s.var(P||"index",l),E(f,s),"object"===(void 0===e?"undefined":n(e))&&(e._wxfor_index_=l);var h=t+">"+d+"["+(p+l)+"]";c.ctxPool[h]=e,o(r)?u=u.concat(c.injectTemplateChild(r,h,f,y)):u.push({tag:d,key:e[_]||p+"-"+l,selector:h,attr:f,children:c.inlineChildren(h,r.children,s,e)})}})}}else u.push(f(r))})}return u}},{key:"injectTemplateChild",value:function(e,t,n,r){var o=this.template[e.attr.is].children,a=new i.Scope("function",this.scope);return n.data&&(0,i.injectIntoScope)(a,n.data),this.inlineChildren(t,o,a,r)}}]),a}(); 
 			}); 
		define("dynamic/interface.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict"; 
 			}); 
		define("index/components/component-share/WXcanvas.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),n=require("../../../npm/@mtfe/mt-weapp-promise/index.js"),i=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx;exports.WXCanvas=function(){function o(e,n){t(this,o),this.id=e,this.ctx=i.createCanvasContext(e,n),this.comp=n;var a=i.getSystemInfoSync();this.factor=a.screenWidth/750}return e(o,[{key:"toPx",value:function(t){return t*this.factor}},{key:"drawRect",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n(function(n,i){t.ctx.save(),t.ctx.setFillStyle(e.color),t.ctx.fillRect(t.toPx(e.x),t.toPx(e.y),t.toPx(e.width),t.toPx(e.height)),t.ctx.restore(),n()})}},{key:"drawText",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n(function(n,i){t.ctx.save(),t.ctx.setFillStyle(e.color||"#333"),t.ctx.setFontSize(t.toPx(e.size||30)),e.font&&(t.ctx.font=e.font||""),t.ctx.fillText(e.text||"",t.toPx(e.x||0),t.toPx(e.y||0)),t.ctx.restore(),n()})}},{key:"loadImage",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new n(function(e,n){t.indexOf("https:")>-1||t.indexOf("http:")>-1?i.downloadFile({url:t,success:function(n){n.tempFilePath?e(n.tempFilePath):(console.log("图片加载失败"),e(t))},fail:function(){console.log("图片加载失败"),e(t)}}):e(t)})}},{key:"drawImage",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n(function(n){t.loadImage(e.url).then(function(i){t.ctx.save(),e.radius&&t.drawRadiusRect(t.toPx(e.x),t.toPx(e.y),t.toPx(e.width),t.toPx(e.height),t.toPx(e.radius),e.bcolor||"#ffffff"),t.ctx.drawImage(i,t.toPx(e.x||0),t.toPx(e.y||0),t.toPx(e.width),t.toPx(e.height)),t.ctx.restore(),n()})})}},{key:"draw",value:function(){var t=this,e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map(function(e){switch(e.type){case"text":return t.drawText(e);case"image":return t.drawImage(e);case"rect":return t.drawRect(e);default:return console.log("未声明类型type，或不支持此类型"),n.resolve()}});return n.all(e)}},{key:"saveTempFile",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new n(function(n,o){t.ctx.draw(!0,function(){setTimeout(function(){i.canvasToTempFilePath({x:t.toPx(e.x||0),y:t.toPx(e.y||0),width:t.toPx(e.width),height:t.toPx(e.height),destWidth:t.toPx(e.dWidth),destHeight:t.toPx(e.dheight),fileType:e.fileType?e.fileType:"jpg",quality:e.quality?e.quality:1,canvasId:t.id,success:function(t){n(t.tempFilePath)},fail:function(t){console.log(t),o(t)}},t.comp)},400)})})}},{key:"saveImageToPhotos",value:function(t){return new n(function(e,n){i.saveImageToPhotosAlbum({filePath:t,success:function(t){e(t)},fail:function(t){n(t)}})})}},{key:"save",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.saveTempFile(e).then(function(e){return t.saveImageToPhotos(e)})}},{key:"drawRadiusRect",value:function(t,e,n,i,o,a){this.ctx.beginPath(),this.ctx.moveTo(t+o,e),this.ctx.lineTo(t+n-o,e),this.ctx.arc(t+n-o,e+o,o,-.5*Math.PI,0),this.ctx.lineTo(t+n,e+i-o),this.ctx.arc(t+n-o,e+i-o,o,0,.5*Math.PI),this.ctx.lineTo(t+o,e+i),this.ctx.arc(t+o,e+i-o,o,.5*Math.PI,1*Math.PI),this.ctx.lineTo(t,e+o),this.ctx.arc(t+o,e+o,o,1*Math.PI,1.5*Math.PI),this.ctx.setStrokeStyle(a),this.ctx.stroke(),this.ctx.closePath(),this.ctx.clip()}}]),o}(); 
 			}); 
		define("index/components/mt-coupon/apis.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.assignList=exports.assignCoupon=void 0;var t=require("./utils"),e=function(t){var e={prod:"https://c-zc.meituan.com/api/wxapp/coupon",st:"http://c.zc.st.meituan.com/api/wxapp/coupon",dev:"http://10.21.63.137:8080",test:"http://10.21.61.216:8080"};return e[t]||e.prod}("prod");exports.assignCoupon=function(s){return(0,t.request)({url:e+"/promotion/user/share/coupon/assign",method:"POST",data:Object.assign(s,{appId:t.appId})}).then(function(t){return t.data})},exports.assignList=function(s){return(0,t.request)({url:e+"/promotion/user/share/assign/list",data:s}).then(function(t){return t.data})}; 
 			}); 
		define("index/components/mt-coupon/report.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(e){var t=n||{};o.reportAnalytics?o.reportAnalytics(e,t):(t.key=e,i.moduleClick("noReportAnalytics",t))}}var o=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,i=require("../../../utils/lx"),n=getApp();module.exports={wxReport:e,report:function(o,t,r){if(o){o=o.toLowerCase();var s={},a=n.globalData,l=a.openId,p=void 0===l?"":l,d=a.unionId,u=void 0===d?"":d;Object.assign(s,{openid:p,unionid:u},t),e(o,s),i&&n.getSysInfo&&n.getSysInfo(function(e){if(s.sdk_version=e.SDKVersion||"",s.platform=e.platform||"",s.system=e.system||"",s.version=e.version||"",s.language=e.language||"",s.model=e.model||"",s.brand=e.brand||"","view"===r){var n=o;i.pageView(n,s)}else i.moduleClick(o,s)})}}}; 
 			}); 
		define("index/components/mt-coupon/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var t=e.unionId,n=e.openId,r=getApp().globalData;t&&(r.unionId=t,o.setStorage({key:"unionId",data:t})),n&&(r.openId=n,o.setStorage({key:"openId",data:n}))}function t(){var e=getApp().globalData,t=e.openId,n=e.unionId;return t||(t=o.getStorageSync("openId"),e.openId=t),n||(n=o.getStorageSync("unionId"),e.unionId=n),{openId:t,unionId:n}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.allIsNotEmpty=exports.isEmpty=exports.getFullUserInfo=exports.getUnionId=exports.getEncryptedData=exports.getOpenId=exports.getStorage=exports.getUserInfo=exports.authSetting=exports.request=exports.login=exports.promisify=exports.appId=void 0,exports.saveUnionIdAndOpenId=e,exports.getUnionIdAndOpenId=t,exports.formatDate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-";if(!e)return"";var n=new Date(e);return[n.getFullYear(),n.getMonth()+1,n.getDate()].map(function(e){return e>9?e:"0"+e}).join(t)};var n=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../utils/promise-6.1.0")),o=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,r=(exports.appId="wxde8ac0a21135c07d",exports.promisify=function(e){return function(t){for(var o=arguments.length,r=Array(o>1?o-1:0),a=1;a<o;a++)r[a-1]=arguments[a];return new n.default(function(n,o){e.apply(void 0,[Object.assign({},t,{success:n,fail:o})].concat(r))})}}),a=exports.login=function(){return new n.default(function(e,t){o.login({success:function(n){var o=n.code,r=n.errMsg;o?e(o):t(new Error(r))},fail:t})})},u=exports.request=r(o.request),i=exports.authSetting=function(e){return new n.default(function(t,n){o.getSetting({success:function(n){t(!!n.authSetting[e])},fail:n})})},s=exports.getUserInfo=function(){return new n.default(function(e,t){var n=getApp().globalData.fullUserInfo;n?e(n):i("scope.userInfo").then(function(n){console.log("用户是否授权了个人信息：",n),n?o.getUserInfo({withCredentials:!0,success:function(t){getApp().globalData.fullUserInfo=t,e(t)},fail:t}):t({errMsg:"getUserInfo:fail"})}).catch(t)})},d=(exports.getStorage=r(o.getStorage),exports.getOpenId=function(e){return u({url:"https://qrcode.meituan.com/api/xcx/getOpenId?js_code="+e}).then(function(e){return e.data})}),p=exports.getEncryptedData=function(e,t,n){return u({method:"POST",url:"https://i.meituan.com/brunch/applet/unionid",data:{iv:t,encryptedData:e,sessionKey:n}}).then(function(e){if(e.data&&0===e.data.code&&e.data.data)return e.data.data})},c=exports.getUnionId=function(){var e=t(),o=e.openId,r=e.unionId;return o&&r?n.default.resolve({openId:o,unionId:r}):a().then(d).then(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.data&&e.data.unionid?{openId:e.data.openid,unionId:e.data.unionid,sessionKey:e.data.session_key}:s().then(function(t){var n=e.data&&e.data.session_key||"";return p(t.encryptedData,t.iv,n)})})},f=(exports.getFullUserInfo=function(){return c().then(function(e){return e.nickName&&e.openId&&e.unionId?e:e.openId&&e.unionId?s().then(function(t){return Object.assign(e,t.userInfo)}):void 0}).then(function(t){return e(t),t})},exports.isEmpty=function(e){return null==e||0===e.length});exports.allIsNotEmpty=function(e){return e.every(function(e){return!f(e)})}; 
 			}); 
		define("index/pages/city/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../../npm/@mtfe/mt-weapp-promise/index.js"),t=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,i=exports.state={},r=exports.config={};exports.goCityPick=function(n,o){return new e(function(e,s){n&&o&&(r[n]=o),i.resolve=function(i){t.navigateBack(),setTimeout(function(){e(i)},200)},t.navigateTo({url:"/search/pages/city/city?key="+n}),i.reject=s})}; 
 			}); 
		define("index/pages/mt/snapshot.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,e=["/index/pages/search/search?cateId=1","/movie/pages/home/index","/hotel/pages/list/index?defaultId=20641&tag=hotel&name=酒店住宿","/play/pages/home/index",void 0,"/index/pages/search/search?cateId=2&subCate=10","/index/pages/h5/h5?weburl=https%3A%2F%2Fi.meituan.…m_source%3Dmeituan-wxapp&f_token=1&f_ci=1&f_pos=1","/ticket/pages/index/index","/train/pages/index/index?utm_source=home","/zhenguo/pages/webview/index?url=https%3A%2F%2Fi-z…ype%3Dgroup_wxapp_entry%26phx_wake_up_source%3Dmt"];module.exports={context:{submitHandler:function(o){var r=o.detail.target;if(r.id){var i=e[r.id];i&&t.navigateTo({url:i})}}},delay:500,config:{tag:"wx-body",attr:{},selector:"wx-body",children:[{tag:"wx-form",key:0,selector:"wx-body>wx-form[0]",attr:{bindsubmit:"submitHandler",class:"nav-view",reportSubmit:"true",style:"background: #fff; display: block; overflow: hidden; padding-top: 20rpx;"},children:[{tag:"wx-block",key:"0-0",selector:"wx-body>wx-form[0]>wx-block[0]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[0]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:0,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[0]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p0.meituan.net/wxapp/73f4055c8619baac4348c04248f7bb6011976.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"美食"]}]},{tag:"wx-block",key:"0-1",selector:"wx-body>wx-form[0]>wx-block[1]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[1]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:1,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[1]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p1.meituan.net/wxapp/035014f9d50a950cf8b383691f0cb00414582.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"猫眼电影"]}]},{tag:"wx-block",key:"0-2",selector:"wx-body>wx-form[0]>wx-block[2]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[2]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:2,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[2]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p0.meituan.net/wxapp/df83cc56d1c21b7c6eda2046b229c1ee11230.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"酒店住宿"]}]},{tag:"wx-block",key:"0-3",selector:"wx-body>wx-form[0]>wx-block[3]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[3]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:3,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[3]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p0.meituan.net/wxapp/09ce9d4ebe47768e4f975344674a061628744.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"休闲娱乐"]}]},{tag:"wx-block",key:"0-4",selector:"wx-body>wx-form[0]>wx-block[4]",attr:{},children:[{tag:"wx-navigator",key:0,selector:"wx-body>wx-form[0]>wx-block[4]>wx-navigator[0]",attr:{wxIf:"wx2c348cf579062e56",appId:"wx2c348cf579062e56",bindtap:"navMina",class:"nav-icon-button",extraData:{from:"mt",fromMTApp:1},style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;",target:"miniProgram"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[4]>wx-navigator[0]>wx-image[0]",attr:{class:"nav-icon",src:"https://p1.meituan.net/wxapp/6dd3ca3c8598570f07df7ddb32cf09c812356.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"外卖"]}]},{tag:"wx-block",key:"0-5",selector:"wx-body>wx-form[0]>wx-block[5]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[5]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:5,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[5]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p1.meituan.net/wxapp/d1d4b9fb256d124443aa0e65530685d711845.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"KTV"]}]},{tag:"wx-block",key:"0-6",selector:"wx-body>wx-form[0]>wx-block[6]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[6]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:6,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[6]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p0.meituan.net/wxapp/3a552f0194fcca2292bb693f73ebf00c10385.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"丽人/美发"]}]},{tag:"wx-block",key:"0-7",selector:"wx-body>wx-form[0]>wx-block[7]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[7]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:7,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[7]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p1.meituan.net/wxapp/a7c8630b748696d745d0e3f522a2dda722271.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"景点门票"]}]},{tag:"wx-block",key:"0-8",selector:"wx-body>wx-form[0]>wx-block[8]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[8]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:8,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[8]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p1.meituan.net/wxapp/cbdb67efd1163676bc634e8cab9c228d28273.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"火车票"]}]},{tag:"wx-block",key:"0-9",selector:"wx-body>wx-form[0]>wx-block[9]",attr:{},children:[{tag:"wx-button",key:1,selector:"wx-body>wx-form[0]>wx-block[9]>wx-button[1]",attr:{wxIf:!0,bindtap:"setScene",class:"nav-icon-button noborder",formType:"submit",id:9,style:"background-color: inherit; color: #666; display: block; float: left; font-size: 24rpx; line-height: 24rpx; margin-bottom: 20rpx; padding-left: 0; padding-right: 0; position: relative; text-align: center; width: 150rpx;"},children:[{tag:"wx-image",key:0,selector:"wx-body>wx-form[0]>wx-block[9]>wx-button[1]>wx-image[0]",attr:{class:"nav-icon",src:"https://p1.meituan.net/wxapp/8e3b420571b3d9d6200fc4915a7ff66615942.png",style:"display: block; height: 107rpx; margin: 0 auto; width: 100rpx;"},children:[]},"民宿/公寓"]}]}]}]}}; 
 			}); 
		define("index/pages/order/youzan-image.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cdnImage=function(c){return!c||c.match(p)?c:(e.forEach(function(e){c.replace(e,t)}),c.match(n)||(c=t+"/"+c),c)};var t="https://img.yzcdn.cn",e=[new RegExp("^(https?:)?//imgqn.koudaitong.com"),new RegExp("^(https?:)?//kdt-img.koudaitong.com"),new RegExp("/^(https?:)?//img.yzcdn.cn"),new RegExp("^(https?:)?//dn-kdt-img.qbox.me")],n=new RegExp("^(https?:)?//","i"),p=new RegExp("^data:","i"); 
 			}); 
		define("login/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={route:"/login",env:"",api:"portm",promise:null,appConfig:{appName:"group",risk_app:-1,risk_platform:0,risk_partner:0,risk_smsTemplateId:0,risk_smsPrefixId:0,persistKey:"logindata",version_name:""},entryPageOption:{title:"登录",imageSrc:"https://p0.meituan.net/codeman/1d662d64d96895705a1d0b9433fd0fa8175649.png",imageMode:"aspectFit",wxLoginText:"微信用户一键登录",mobileLoginText:"手机号码登录/注册"},bindPageOption:{title:"绑定手机",sendCodeActiveStyle:"color: #06C1AE",loginActiveStyle:"background: #06C1AE; color: #FFF",loginText:"登录"},authrizePageOption:{tipText:"请完成微信授权以继续使用",imageSrc:"https://p0.meituan.net/codeman/1d662d64d96895705a1d0b9433fd0fa8175649.png",imageMode:"aspectFit"},tips:{smsCodeSent:"验证码已发送",logining:"登录中...",loginSuccess:"登录成功",loginParamLoss:"验证信息丢失，请重新发送验证码！",relogin:"您已登录，是否重新登录？",refuseUserInfoAuth:"您已拒绝授权用户信息，请重新点击并授权！",refusePhoneNumberAuth:"您已拒绝授权，请重新点击并授权！",verifyFailed:"验证失败",networkTimeout:"网络连接超时，请重试",illegalVerifyType:"验证方式id不合法，请重试或联系客服",illegalPhoneNumber:"手机号输入不正确，请重新输入",illegalSmsCode:"请输入正确的6位验证码",illegalAuthInfo:"获取的授权信息不正确，请重试",twiceVerifyFail:"二次验证失败，",changeBindFail:"换绑失败，请稍后重试",changeBindSucc:"换绑成功！"}}; 
 			}); 
		define("login/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&"object"==(void 0===e?"undefined":s(e))&&"default"in e?e.default:e}function t(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function n(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&(n[r[i]]=e[r[i]])}return n}function r(e,t,n,r){return new(n||(n=a))(function(i,o){function s(e){try{u(r.next(e))}catch(e){o(e)}}function a(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(s,a)}u((r=r.apply(e,t||[])).next())})}function i(e,t){function n(n){return function(s){return function(n){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,i&&(o=2&n[0]?i.return:n[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,n[1])).done)return o;switch(i=0,o&&(n=[2&n[0],o.value]),n[0]){case 0:case 1:o=n;break;case 4:return a.label++,{value:n[1],done:!1};case 5:a.label++,i=n[1],n=[0];continue;case 7:n=a.ops.pop(),a.trys.pop();continue;default:if(!(o=0<(o=a.trys).length&&o[o.length-1])&&(6===n[0]||2===n[0])){a=0;continue}if(3===n[0]&&(!o||n[1]>o[0]&&n[1]<o[3])){a.label=n[1];break}if(6===n[0]&&a.label<o[1]){a.label=o[1],o=n;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(n);break}o[2]&&a.ops.pop(),a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e],i=0}finally{r=o=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,s])}}var r,i,o,s,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:n(0),throw:n(1),return:n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s}function o(){}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=require("../npm/@mtfe/mt-weapp-promise/index.js"),u=require("../npm/@mtfe/mt-weapp-api/dist/index.js").wx,c=require("./config.js").promise;c&&(a=c);var d=require("./config.js").promise;d&&(a=d),Object.defineProperty(exports,"__esModule",{value:!0});var l=require("../npm/@mtfe/mt-weapp-url/stringify.js"),f=require("../npm/@mtfe/mt-weapp-authrize/index.js"),p=require("../npm/@mtfe/mt-weapp-authrize/types.js"),h=e(require("../npm/@mtfe/wx-rc-finger/dist/finger.js")),v=e(require("../npm/@mtfe/wxapp-rohr/dist/rohr.js")),g=require("../npm/@mtfe/mt-weapp-url/parse.js");String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return this.substr(!t||t<0?0:+t,e.length)===e});var m,w=function(e,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},y=function(e){function n(t,n){var r=e.call(this,"Wechat API "+t+" get error result: [msg]"+n)||this;return r.api=t,r.msg=n,Object.setPrototypeOf(r,x.prototype),r}return t(n,e),n}(Error),k=function(e){function n(t,r,i){void 0===i&&(i="");var o=e.call(this,"Request "+r+" failed: "+t+". "+i)||this;return o.errType="WxRequestError",Object.setPrototypeOf(o,n.prototype),o}return t(n,e),n}(Error),x=function(e){function n(t,r,i){void 0===i&&(i=!1);var o=this,s=r||{code:0,message:"自定义未知错误，可能是数据返回格式错误"},a=s.code,u=s.message;return(o=e.call(this,"API "+t+" return error result: "+u)||this).errType="MtAPIError",o.code=a,o.tip=u,o.show=i,Object.setPrototypeOf(o,n.prototype),o}return t(n,e),n}(Error),_=function(e){function n(t,r,i){void 0===i&&(i=!0);var o=e.call(this,t+(null!=r?"["+r+"]":""))||this;return o.show=i,o.code=r,o.tip=t,o.errType="SDKError",Object.setPrototypeOf(o,n.prototype),o}return t(n,e),n}(Error),I=void 0,C=function(e){return r(I,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return null!=e?[3,2]:[4,(void 0===n&&(n={}),new a(function(e,t){u.login({success:function(n){n?e(n.code):t(new y("wx.login","null login result"))},fail:function(e){t(new y("wx.login","fail to request login"))}})}))];case 1:return[2,m=t.sent()];case 2:return[2,m=e]}var n})})},P=function(e){return new a(function(t,n){u.getStorage({key:e,success:function(e){e&&e.data?t(e.data):n(new y("getStorage","null result"))},fail:function(e){n(new y("getStorage","fail to request getStorage"))}})})},S=function(e,t){return new a(function(n,r){u.setStorage({key:e,data:t,success:function(e){n(e)},fail:function(e){r(new y("setStorage","fail to request setStorage"))}})})},T=function(e,t){var n=void 0===t?{}:t,r=n.title,i=void 0===r?"提示":r,o=n.showCancel,s=void 0!==o&&o,c=n.confirmText,d=void 0===c?"确定":c,l=n.cancelText,f=void 0===l?"取消":l;return new a(function(t,n){u.showModal({title:i,content:e||"",showCancel:s,confirmText:d,cancelText:f,success:function(e){t(!s||e&&e.confirm)},fail:function(){n()}})})},E=function(e,t,n){void 0===t&&(t="success"),void 0===n&&(n=2e3),e&&e.length&&u.showToast({title:e,mask:!0,icon:t,duration:n})},O=function(){return new a(function(e,t){u.checkSession({success:function(){e(!0)},fail:function(){e(!1)}})})},N=!1,D=function(e,t,n,o){return void 0===t&&(t=e.replace(/^\/|\?.*$/g,"")),void 0===n&&(n=!1),void 0===o&&(o=!1),r(I,void 0,void 0,function(){return i(this,function(r){return N?[2]:[2,new a(function(r,i){var s,a,c;N=!0,setTimeout(function(){N=!1},200),o?u.reLaunch({url:e,success:r,fail:i}):n||(s=t,(c=(a=getCurrentPages())[a.length-1])&&(c.route||c.__route__)===s)?u.redirectTo({url:e,success:r,fail:i}):u.navigateTo({url:e,success:r,fail:i})})]})})},A=require("./config.js").request||function(e,t){return void 0===t&&(t={}),new a(function(n,r){var i=t.data,o=t.header,s=void 0===o?{}:o,a=t.method,c=t.query,d=t.type;d&&"form"===d.toLocaleLowerCase()&&(s["content-type"]="application/x-www-form-urlencoded"),c&&(e+=(~e.indexOf("?")?"&":"?")+l.stringify(c)),u.request({url:e,data:i,header:s,method:a,success:function(t){t&&t.data?n(t.data):r(new k("No data in response.",e,JSON.stringify(t)))},fail:function(t){r(new k("May be due to network.",e,JSON.stringify(t)))}})})},L=require("./config.js")||{},U="2.2.0",q={env:L?L.env:""},R=function(){return q.env},B=R,V="https://portal-portm.meituan.com/weapp/loginsdk/api/",j=L,H=j.appConfig,W={loginRoute:"",bindRoute:"",smsVerifyRoute:"",changeBindPhoneRoute:"",_route:"",set sdkRoute(e){this._route=e,this.loginRoute=e+"/subpages/entry/index",this.bindRoute=e+"/subpages/bind/index",this.smsVerifyRoute=e+"/subpages/sms-verify/index",this.changeBindPhoneRoute=e+"/subpages/change-bind-phone/index"},get sdkRoute(){return this._route}};W.sdkRoute=j.route;var M,G,K,Y=j.entryPageOption,F=j.bindPageOption,X=j.authrizePageOption,z=j.tips;(G=exports.API_TYPE||(exports.API_TYPE={})).WX_MOBILE="wxMobileLogin",G.WXV2="wxLogin",G.MOBILE="mobileLogin",G.LOGIN="login",G.CHANGE_BIND="changeBind",(K||(K={})).create="createSession";var $,J,Q,Z=function(e){return e&&"string"==typeof e&&64===e.length},ee=function e(t){return r(void 0,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return[4,A("portm"===L.api?V+"uuid":"https://i.meituan.com/uuid/register").catch(function(e){return console.log(e)})];case 1:return n=r.sent(),Z(n)?[3,3]:0<t?[4,e(t-1)]:[3,3];case 2:return[2,r.sent()];case 3:return[2,n||""]}})})},te=function(e,t){return void 0===t&&(t=1),r(void 0,void 0,void 0,function(){var n,r;return i(this,function(i){switch(i.label){case 0:return Z(e)?[2,$=e]:Z($)?[2,$]:[4,H.persistKey?P(H.persistKey).then(function(e){return e&&e.uuid}).catch(function(e){return""}):""];case 1:return n=i.sent(),Z(n)?[2,$=n]:[4,ee(t)];case 2:return r=i.sent(),[2,$=r]}})})},ne=function(e){return e&&e.iv?e:null},re=function(e){return void 0===e&&(e={}),r(void 0,void 0,void 0,function(){var t,n,r;return i(this,function(i){switch(i.label){case 0:return[4,new a(function(e,t){u.getSetting({success:function(t){e(t)},fail:function(e){t(null)}})})];case 1:return(t=i.sent().authSetting)&&t["scope.userInfo"]?(!0===(n=e.withCredentials)&&C(m),[4,(o={withCredentials:n},new a(function(e,t){u.getUserInfo(b({},o,{success:function(t){e(t)},fail:function(){t(null)}}))}))]):[3,3];case 2:if(r=i.sent(),!n||ne(r))return[2,r];i.label=3;case 3:return u.hideToast(),f.config.dirname=L.authRoute||W.sdkRoute+"/authrize",f.config.pageConfig=Object.assign(f.config.pageConfig,{tipText:X.tipText,image:{src:X.imageSrc,mode:X.imageMode}}),[2,f.authrize(p.AUTH_TYPE.userInfo,e).catch(function(e){throw console.error(e),new Error(z.refuseUserInfoAuth)})]}var o})})};(J=exports.SessionState||(exports.SessionState={})).AUTH="auth",J.BINDING="bind",J.DESTORY="destory",J.ABORT="abort",(Q=exports.SessionEvent||(exports.SessionEvent={})).CLICK="click",Q.SMSCLICK="smsclick",Q.LOGINCLICK="loginclick",Q.BINDPAGEONSHOW="bindpageonshow",Q.ENTRYPAGEONSHOW="entrypageonshow",Q.CHANGEPHONEPAGEONSHOW="changebindpageonshow",Q.ALLOWPHONE="allowphone",Q.REFUSEPHONE="refusephone",Q.CHANGEPHONEGETNEWCODE="changephonegetnewcode";var ie,oe,se,ae=function(){function e(e,t,n){void 0===t&&(t=exports.SessionState.AUTH),this._callbacks={},this.type=e,this.state=t,n&&(this.expire=(new Date).getTime()+n)}return Object.defineProperty(e.prototype,"expired",{get:function(){return!!this.expire&&this.expire<(new Date).getTime()},enumerable:!0,configurable:!0}),e.prototype._state=function(e,t){this.state=e,t&&(this.data=t),this._emit(e,t)},e.prototype._emit=function(e,t){var n=this,r=this._callbacks[e];r&&r.forEach(function(e){return e.call(n,t)})},e.prototype.on=function(e,t){(this._callbacks[e]=this._callbacks[e]||[]).push(t)},e.prototype.clean=function(){this._callbacks={},this.resolve=null},e.prototype.abort=function(){this._state(exports.SessionState.ABORT)},e}(),ue={},ce={},de={get session(){return ie},set session(e){ie&&ie._state(exports.SessionState.DESTORY),ie=e}},le=function(){de.session=null},fe=void 0,pe=[function(e){if("MtAPIError"===e.errType)return e.show?T(e.tip):(console.error("MtAPIError: "+e.message+", "+e.tip),!0)},function(e){if("WxRequestError"===e.errType)return console.error(e.message),T(z.networkTimeout)},function(e){if(e instanceof y)return console.error("调用"+e.api+"出错！"+e.msg),!0},function(e){if("SDKError"===e.errType)return console.log("SDKError: "+e.message),!e.show||T(""+e.tip)}],he=function(e){return r(fe,void 0,void 0,function(){var t,n;return i(this,function(r){switch(r.label){case 0:u.hideToast(),t=0,n=pe,r.label=1;case 1:return t<n.length?[4,(0,n[t])(e)]:[3,4];case 2:if(r.sent())return[2];r.label=3;case 3:return t++,[3,1];case 4:return console.error(e.message),[2]}})})},ve=function(e){return r(fe,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return e&&e.token&&e.userId?(de.authInfo=e,H.persistKey?[4,S(H.persistKey,e).catch(function(e){console.error(e)})]:[3,2]):[3,4];case 1:t.sent(),t.label=2;case 2:return[4,we()];case 3:return t.sent(),[2,e];case 4:throw new _(z.illegalAuthInfo)}})})},ge=function(){return r(fe,void 0,void 0,function(){var e,t;return i(this,function(n){switch(n.label){case 0:return(e=de.authInfo)&&e.token?[2,e]:H.persistKey?[4,P(H.persistKey).catch(function(){return null})]:[3,2];case 1:if((t=n.sent())&&t.token)return[2,t];n.label=2;case 2:return[2,null]}})})},me=function(){return r(fe,void 0,void 0,function(){return i(this,function(e){switch(e.label){case 0:return de.authInfo=null,H.persistKey?[4,(t=H.persistKey,new a(function(e,n){u.removeStorage({key:t,success:function(t){e(t)},fail:function(e){n(new y("removeStorage","fail to request removeStorage"))}})})).catch(o)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}var t})})},we=function(e){return r(fe,void 0,void 0,function(){var t,n,r,o;return i(this,function(i){switch(i.label){case 0:return(t=de.session)?(n=t.resolve,r=t.redirectUrl,o=t.waitBack,de.session=null,o?[4,be(r)]:[3,2]):[3,4];case 1:return i.sent(),[3,3];case 2:be(r),i.label=3;case 3:"function"==typeof n&&n(e||ge()),i.label=4;case 4:return[2]}})})},be=function(e){return r(fe,void 0,void 0,function(){var t,n,r,o,s;return i(this,function(i){return t=getCurrentPages(),n=W.sdkRoute.replace(/^\//,""),r=t[0].route?"route":"__route__",o=t.findIndex(function(e){return e[r].startsWith(n)}),e?0<o&&o===t.length-1?[2,D(e,"",!0)]:[2,D(e)]:-1===o?[2]:0<(s=0<o?t.length-o:t.length-o-1)?[2,new a(function(e){u.navigateBack({delta:s});var n=t.length-s;!function t(){setTimeout(function(){getCurrentPages().length===n?e():t()},100)}()})]:[2]})})},ye=function(e,t){return r(fe,void 0,void 0,function(){var n;return i(this,function(r){switch(r.label){case 0:return[4,ve(Object.assign(e,t))];case 1:return n=r.sent(),E(z.loginSuccess),[2,n]}})})},ke=function(e){return r(fe,void 0,void 0,function(){return i(this,function(t){switch(t.label){case 0:return M?[4,M(e)]:[3,2];case 1:if(!t.sent())throw new _("loginCheck failed",3,!1);t.label=2;case 2:return[2]}})})},xe=function(e,t){var n=de.session;return n&&!n.expired?(n.clean(),n):de.session=new ae(e,exports.SessionState.AUTH,t)},_e={getLoginCode:C,getUserInfo:re,getUUID:te,getStorage:P,setStorage:S,showTip:T,showToast:E,request:A,stringify:l.stringify,navigate:D},Ie=function e(t){return r(void 0,void 0,void 0,function(){var n,r,o,s;return i(this,function(i){switch(i.label){case 0:return r=!0,(t=t||{})instanceof ae?n=t:(n=t.session||e[K.create](),!1===t.bind&&(r=!1)),n.data=n.data||{},n.redirectUrl=t.redirectUrl,n.waitBack=t.waitBack,n.data.wxUserInfoData=t.wxUserInfoData,o=W.loginRoute,s=n.type===exports.API_TYPE.LOGIN?o+"?bind="+r+"&redirectUrl="+(n.redirectUrl||""):o+"?type="+n.type+"&bind="+r+"&redirectUrl="+(n.redirectUrl||""),t.code&&n.data.wxUserInfoData&&(s=s+"code="+t.code),[4,D(s,o.substr(1))];case 1:return i.sent(),[4,new a(function(e,t){n.resolve=e})];case 2:return[2,i.sent()]}})})};Ie[K.create]=function(){return xe(exports.API_TYPE.LOGIN)},(se=oe||(oe={})).navigateTo="navigateTo",se.redirectTo="redirectTo",se.reLaunch="reLaunch";var Ce,Pe,Se=function(e,t){return r(void 0,void 0,void 0,function(){var n,r,o,s;return i(this,function(i){switch(i.label){case 0:return n=e||Te[K.create](),r=""+W.bindRoute,o=t===oe.redirectTo,s=t===oe.reLaunch,[4,D(r,W.bindRoute.substr(1),o,s)];case 1:return i.sent(),[2,n]}})})},Te=function(e){return void 0===e&&(e={}),r(void 0,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:return[4,Se(e.session,e.navType)];case 1:return t=n.sent(),[4,new a(function(e,n){t.resolve=e})];case 2:return[2,n.sent()]}})})};Te[K.create]=function(){return xe(exports.API_TYPE.MOBILE)},(Pe=Ce||(Ce={})).loginApplyUrl="mobileloginapply",Pe.mobileLoginUrl="mobilelogin",Pe.verifyloginUrl="verifylogin",Pe.wxMobileLoginApiV2="wxmobilelogin",Pe.wxLoginApiV2="wxlogin",Pe.wxSlientLoginApiV2="wxslientlogin",Pe.wxMobileBindApplyApiV2="wxbindapply",Pe.wxMobileBindLoginApiV2="wxbind",Pe.wxTicketLoginApiV2="wxticketlogin",Pe.updateWxUserApi="updatewxuserinfo",Pe.getWxUserApi="getwxuserinfo",Pe.smartCheckApi="smartcheck",Pe.sendNewcodeApi="sendnewcode",Pe.verifyNewApi="verifynew",Pe.logoutUrl="logout",Pe.islogoutUrl="islogout";var Ee,Oe=function(e){var t=require("./urls.js")[R()||"prod"];return("portm"===L.api?Object.keys(t).reduce(function(e,t){return e[t]=V+(R()?R()+"/":"")+t,e},{}):t)[e]},Ne=Ce.verifyloginUrl,De=function(){return Ee||new a(function(e,t){h.g(e)}).then(function(e){return Ee=e}).catch(function(e){throw new _("获取指纹信息失败："+(e&&e.message))})},Ae=function(e,t,n,r,i){var o=n.risk_platform,s=n.risk_partner,a=n.risk_app,u=n.version_name,c={uuid:t,risk_platform:o,risk_partner:s,sdkVersion:U,risk_app:a,version_name:u};return void 0!==n.risk_smsPrefixId&&(c.risk_smsPrefixId=n.risk_smsPrefixId),void 0!==n.risk_smsTemplateId&&(c.risk_smsTemplateId=n.risk_smsTemplateId),A(e,{method:"POST",query:c,type:"form",data:r})},Le=void 0,Ue=Ce.wxLoginApiV2,qe=Ce.wxMobileLoginApiV2,Re=Ce.wxMobileBindApplyApiV2,Be=Ce.wxMobileBindLoginApiV2,Ve=Ce.wxTicketLoginApiV2,je=Ce.wxSlientLoginApiV2,He=Ce.loginApplyUrl,We=Ce.mobileLoginUrl,Me=function(e,t,n,o,s){return void 0===n&&(n=!0),void 0===o&&(o=null),r(void 0,void 0,void 0,function(){var u,c,d,l,f,p,h,v,g,m,w,y,k;return i(this,function(_){switch(_.label){case 0:s||xe(exports.API_TYPE.WX_MOBILE),_.label=1;case 1:return _.trys.push([1,6,,7]),u=H.appName,c=H.risk_partner,d=H.risk_platform,l=H.uuid,f=H.risk_app,p=H.version_name,"string"==typeof t?[3,3]:(console.log("wxMobileLogin get code inside"),[4,C()]);case 2:t=_.sent(),_.label=3;case 3:return h={phoneNumberData:e,uuid:l,appName:u,risk_partner:c,risk_platform:d,risk_app:f,version_name:p,loginCode:t,bind:n,wxUserInfoData:ne(o)},[4,(I=h,r(Le,void 0,void 0,function(){var e,t,n,r,o,s,u,c,d,l,f,p,h,v,g,m,w,b,y,k,_,P,S;return i(this,function(i){switch(i.label){case 0:return e=I.appName,n=I.loginCode,r=I.uuid,o=I.bind,s=I.wxUserInfoData,u=(t=I.phoneNumberData).iv,c=t.encryptedData,[4,a.all([te(r),C(n),De()])];case 1:return d=i.sent(),l=d[0],f=d[1],p=d[2],h={appName:e,code:f,iv:u,encryptedData:c,bind:!!o,wechatFingerprint:p},v={code:f,uuid:l},o?(_=ne(s))?[3,3]:[4,re()]:[3,4];case 2:_=i.sent(),i.label=3;case 3:m=(g=_).userInfo,w=g.rawData,b=g.signature,y=g.iv,k=g.encryptedData,Object.assign(h,{rawData:w,signature:b,encryptedData2:k,iv2:y}),v.userInfo=m,i.label=4;case 4:return[4,Ae(Oe(qe),l,I,h)];case 5:if(P=i.sent(),S=P.error)throw new x(Oe(qe),S,!0);return v.loginInfo=P,[2,v]}})}))];case 4:return v=_.sent(),g=v.loginInfo,m=v.uuid,w=v.code,y=b({type:exports.API_TYPE.WX_MOBILE},g.data,{uuid:m,code:w}),n&&(y.wxUserInfo=v.userInfo),[4,ve(y)];case 5:return[2,_.sent()];case 6:return k=_.sent(),console.log("error",k),[2,he(k)];case 7:return[2]}var I})})},Ge=function e(t){return void 0===t&&(t={}),r(void 0,void 0,void 0,function(){var n,o,s,c,d,f,p,h,v,g,m,w,y,k,_,I,P,S,T,O,N,A;return i(this,function(L){switch(L.label){case 0:d=c=!(s=o=!0),(n=t.session||e[K.create]()).redirectUrl=t.redirectUrl,n.waitBack=t.waitBack,!1===t.bind&&(o=!1),!1===t.slient&&(s=!1),n.redirectUrl&&o&&(c=t.navType===oe.redirectTo,d=t.navType===oe.reLaunch),s||E("登录中...","loading",5e3),L.label=1;case 1:return L.trys.push([1,11,,12]),f=H.appName,p=H.risk_app,h=H.risk_partner,v=H.risk_platform,g=H.uuid,m=H.version_name,w=n.data,s?[4,(q={appName:f,risk_partner:h,risk_platform:v,risk_app:p,version_name:m,uuid:g},r(Le,void 0,void 0,function(){var e,t,n,r,o,s,u,c,d;return i(this,function(i){switch(i.label){case 0:return e=q.appName,t=q.uuid,[4,C()];case 1:return n=i.sent(),[4,a.all([te(t),De()])];case 2:return r=i.sent(),o=r[0],s=r[1],u={appName:e,code:n,wechatFingerprint:s},[4,Ae(Oe(je),o,q,u)];case 3:if(c=i.sent(),(d=c.error)&&101155!==d.code)throw new x(Oe(je),d);return[2,{loginInfo:c,code:n,uuid:o}]}})}))]:[3,3];case 2:return w=L.sent(),[3,5];case 3:return[4,(U={appName:f,risk_partner:h,risk_platform:v,risk_app:p,version_name:m,uuid:g,wxUserInfoData:t.wxUserInfoData},r(Le,void 0,void 0,function(){var e,t,n,r,o,s,u,c,d,l,f,p,h,v,g,m,w;return i(this,function(i){switch(i.label){case 0:return e=U.appName,t=U.uuid,n=U.wxUserInfoData,[4,C(U.loginCode)];case 1:return r=i.sent(),(f=ne(n))?[3,3]:[4,re({withCredentials:!0})];case 2:f=i.sent(),i.label=3;case 3:return s=(o=f).userInfo,u=o.rawData,c=o.signature,d=o.iv,l=o.encryptedData,[4,a.all([te(t),De()])];case 4:return p=i.sent(),h=p[0],v=p[1],g={appName:e,code:r,iv:d,encryptedData:l,rawData:u,signature:c,wechatFingerprint:v,admitLogout:!0},[4,Ae(Oe(Ue),h,U,g)];case 5:if(m=i.sent(),(w=m.error)&&101155!==w.code)throw new x(Oe(Ue),w);return[2,{loginInfo:m,userInfo:s,code:r,uuid:h}]}})}))];case 4:w=L.sent(),L.label=5;case 5:return y=w.loginInfo,k=w.code,_=w.uuid,I=w.userInfo,P=y.openId,S=y.unionId,T=y.data,O=y.error,N={code:k,uuid:_,openId:P,unionId:S,wxUserInfo:null},s||(N.wxUserInfo=I),O?(n._state(exports.SessionState.BINDING,w),o?[4,D(W.bindRoute+"?"+l.stringify({openId:P}),W.bindRoute.substr(1),c,d)]:[2,b({},N,{error:O})]):[3,8];case 6:return L.sent(),u.hideToast(),[4,new a(function(e,t){n.resolve=e})];case 7:return[2,L.sent()];case 8:return u.hideToast(),T?[4,ve(b({},N,T))]:[3,10];case 9:return[2,L.sent()];case 10:return[3,12];case 11:return A=L.sent(),[2,he(A)];case 12:return[2]}var U,q})})};Ge[K.create]=function(){var e=xe(exports.API_TYPE.WXV2);return e.type===exports.API_TYPE.WXV2?e:de.session=new ae(exports.API_TYPE.WXV2,exports.SessionState.AUTH,6e5)};var Ke=Ce.updateWxUserApi,Ye=Ce.getWxUserApi,Fe=function(e){return t=H.appName,n=e||{},r(void 0,void 0,void 0,function(){var e,r,o,s,a,u,c,d,l;return i(this,function(i){switch(i.label){case 0:return e=n.code,[4,C(e)];case 1:return r=i.sent(),[4,re({withCredentials:!0})];case 2:return o=i.sent(),s=o.rawData,a=o.signature,u=o.iv,c=o.encryptedData,d={appName:t,code:r,iv:u,encryptedData:c,rawData:s,signature:a},[4,A(Oe(Ke),{method:"POST",type:"form",data:d})];case 3:if((l=i.sent()).uniqueid)return[2,l];throw new x(Oe(Ke),l.error)}})});var t,n},Xe=function e(t){return void 0===t&&(t={}),r(void 0,void 0,void 0,function(){var n,r,o,s;return i(this,function(i){switch(i.label){case 0:return(n=t.token)?(r=t.uuid,(o=t.session||e[K.create]()).waitBack=!0,s=W.changeBindPhoneRoute+"?token="+n+"&uuid="+r,[4,D(s)]):(console.error("changeBindPhone方法中token参数是必须的"),[2]);case 1:return i.sent(),[4,new a(function(e,t){o.resolve=e})];case 2:return[2,i.sent()]}})})};Xe[K.create]=function(){return le(),xe(exports.API_TYPE.CHANGE_BIND)};var ze=function(){function e(){var e,t,n,r,i,o;this.data=(e=Y.title,t=Y.wxLoginText,n=Y.mobileLoginText,r=Y.imageSrc,i=Y.imageMode,o=Y.imageStyle,{API_TYPE:exports.API_TYPE,type:exports.API_TYPE.MOBILE,title:e,wxLoginText:t,mobileLoginText:n,image:{src:r,mode:i,style:o}})}return e.prototype.onLoad=function(e){return r(this,void 0,void 0,function(){var t,n;return i(this,function(r){switch(r.label){case 0:return e.type&&this.setData({type:e.type}),t=this,(n=e.code)?[3,2]:[4,C()];case 1:n=r.sent(),r.label=2;case 2:return t.loginCode=n,this.bind=e.bind,this.redirectUrl=e.redirectUrl,[2]}})})},e.prototype.onReady=function(){u.setNavigationBarTitle({title:this.data.title})},e.prototype.onShow=function(){de.session&&de.session._emit(exports.SessionEvent.ENTRYPAGEONSHOW,de.session)},e.prototype.getLoginCode=function(){return r(this,void 0,void 0,function(){var e;return i(this,function(t){switch(t.label){case 0:return e=this,[4,C()];case 1:return e.loginCode=t.sent(),[2]}})})},e.prototype.wxMobileLoginClick=function(e){return r(this,void 0,void 0,function(){var t,n,r,o;return i(this,function(i){switch(i.label){case 0:return(t=de.session)&&t._emit(exports.SessionEvent.CLICK,exports.API_TYPE.WX_MOBILE),null==(n=e.detail).iv?(t&&t._emit(exports.SessionEvent.REFUSEPHONE,t),T(z.refusePhoneNumberAuth),[2]):(t&&t._emit(exports.SessionEvent.ALLOWPHONE,t),[4,ke("wechat")]);case 1:return i.sent(),E(z.logining,"loading",5e3),r=null,t&&t.data&&(r=t.data.wxUserInfoData),[4,Me(n,this.loginCode,this.bind,r,t)];case 2:return o=i.sent(),u.hideToast(),o&&E(z.loginSuccess),[2]}})})},e.prototype.mobileLoginClick=function(){de.session&&de.session._emit(exports.SessionEvent.CLICK,de.session.type);var e=this.redirectUrl?oe.redirectTo:oe.navigateTo;Se(de.session,e)},e.prototype.wxLoginClick=function(e){de.session&&de.session._emit(exports.SessionEvent.CLICK,de.session.type);var t=e.detail;if(null!=t.iv){var n=de.session,r=n.resolve||function(){return new _("Login session destroyed!")},i=this.redirectUrl?oe.redirectTo:oe.navigateTo;Ge({session:n,wxUserInfoData:t,slient:!1,redirectUrl:this.redirectUrl,navType:i}).then(r)}else T(z.refuseUserInfoAuth)},e}(),$e="http://verify.inf.dev.meituan.com",Je="https://verify.meituan.com",Qe="dev"===L.env?$e:Je,Ze=function(){return"dev"===B()?$e:"test"===B()?"http://verify.inf.test.meituan.com":Je},et=function(){return Ze()+"/v2/ext_api/page_data"},tt=function(e){return Ze()+"/v2/ext_api/"+e+"/info"},nt=function(e){return Ze()+"/v2/ext_api/"+e+"/verify"},rt=Object.freeze({baseUrl:Qe,getYodaBaseUrl:Ze,getPageDataUrl:et,getInfoUrl:tt,getVerifyUrl:nt}),it=function(e){return A(et(),{method:"POST",data:{requestCode:e},type:"form"}).then(function(e){var t=e.status,n=e.error;if(0===t&&n)throw new x(et(),n,!0);return e})},ot=function(e,t){var n=Object.assign(t,{_token:v.r(t)});return 4===n.id&&(n.moduleEnable=!0),A(tt(e),{method:"POST",data:n,type:"form"})},st=function(e,t){var n=Object.assign(t,{_token:v.r(t)}),r=nt(e);return A(r,{method:"POST",data:n,type:"form"}).then(function(e){var t=e.status,n=e.error;if(0===t&&n)throw new x(r,n,!0);return e})},at=void 0,ut=function(e){if(/^1[0-9]\d{9}$/.test(e))return e;throw new _(z.illegalPhoneNumber,1)},ct=function(e,t,o){return r(at,void 0,void 0,function(){var r;return i(this,function(i){switch(i.label){case 0:return a=t,u=(s=e).id,c=s.token,d=n(s,["id","token"]),r={type:exports.API_TYPE.MOBILE,userId:u,token:c,mobileUserInfo:d,uuid:a},o&&(r.mobile=o),[4,ye(r)];case 1:return i.sent(),[2]}var s,a,u,c,d})})},dt=function(e,t,n,o){return r(at,void 0,void 0,function(){var s,a,c,d,l,f,p,h,v,m,w,b,y,k,x,_,I;return i(this,function(C){switch(C.label){case 0:return s=de.uuid,a=H.risk_platform,c=H.risk_partner,d=H.version_name,l=H.risk_app,[4,(P={uuid:s,risk_platform:a,risk_partner:c,version_name:d,risk_app:l},S={responseCode:t,requestCode:e,mobile:n,code:o},r(void 0,void 0,void 0,function(){var e,t,n;return i(this,function(r){switch(r.label){case 0:return[4,te((e=P).uuid)];case 1:return e.uuid=r.sent(),P.sdkVersion=U,t=S,[4,De()];case 2:return t.wechatFingerprint=r.sent(),[4,A(Oe(We),{method:"post",type:"form",query:P,data:S})];case 3:return n=r.sent(),[2,{uuid:P.uuid,loginInfo:n}]}})}))];case 1:return f=C.sent(),p=f.uuid,h=void 0===p?"":p,v=f.loginInfo,u.hideToast(),v.error?(m=v.error,w=m.code,b=m.data,y=m.message,[4,T(y)]):[3,3];case 2:return C.sent(),101157===w&&(k=b.param,x=b.userTicket,ue.userTicket=x,ue.mobile=n,_=g.parse(k),I=_.requestCode,u.navigateTo({url:W.smsVerifyRoute+"?requestCode="+I+"&success="+W.bindRoute+"&fail="+W.bindRoute})),[3,5];case 3:return[4,ct(v.user,h,n)];case 4:C.sent(),C.label=5;case 5:return[2]}var P,S})})},lt=function(e,t,o,s,u,c,d){return r(at,void 0,void 0,function(){var s,l,f,p,h,v,g,m,w,y,k,_,I,C,P,S,T;return i(this,function(E){switch(E.label){case 0:return s=H.appName,l=H.risk_platform,f=H.risk_partner,p=H.risk_app,h=H.version_name,[4,(N={risk_app:p,version_name:h,appName:s,risk_platform:l,risk_partner:f,requestCode:e,responseCode:t,mobile:o,openId:u,wxUserInfoData:d&&d.detail},r(Le,void 0,void 0,function(){var e,t,r,o,s,u,c,d,l,f,p,h,v,g,m,w;return i(this,function(i){switch(i.label){case 0:return e=N.uuid,t=N.wxUserInfoData,r=n(N,["uuid","wxUserInfoData"]),(f=ne(t))?[3,2]:[4,re()];case 1:f=i.sent(),i.label=2;case 2:return s=(o=f).userInfo,u=o.rawData,c=o.signature,d=o.iv,l=o.encryptedData,[4,a.all([te(e),De()])];case 3:return p=i.sent(),h=p[0],v=p[1],g=b({},r,{iv:d,encryptedData:l,rawData:u,signature:c,wechatFingerprint:v}),[4,Ae(Oe(Be),h,N,g)];case 4:if(m=i.sent(),(w=m.error)&&101188!==w.code)throw new x(Oe(Be),w);return[2,{loginInfo:m,userInfo:s,uuid:h}]}})}))];case 1:return v=E.sent(),g=v.loginInfo,m=v.userInfo,w=v.uuid,y=g.error,k=Object.assign({openId:u,wxUserInfo:m,uuid:w,type:exports.API_TYPE.WXV2},{code:c}),y?(T=y.data,_=T.userInfos,I=_[1],C=I.ticket,P=I.userid,[4,(O={ticket:C,userid:P},r(Le,void 0,void 0,function(){var e,t,n,r;return i(this,function(i){switch(i.label){case 0:return[4,te(O.uuid)];case 1:return e=i.sent(),[4,A(Oe(Ve),{method:"POST",query:{uuid:e},type:"form",data:O})];case 2:if(t=i.sent(),n=t.error,r=t.data,n)throw new x(Oe(Ve),n);if(r)return[2,r];throw new x(Oe(Ve))}})}))]):[3,4];case 2:return S=E.sent(),[4,ye(Object.assign(k,S))];case 3:return[2,E.sent()];case 4:return(T=g.data)?[4,ye(Object.assign(k,T))]:[3,6];case 5:return[2,E.sent()];case 6:return[2]}var O,N})})},ft={data:{configData:F,mobileCode:"",phoneNumber:"",countdown:{limit:60,hidden:!0},sendCodeBtn:{active:!1},submitBtn:{active:!1}},onReady:function(){var e=this.data.configData;u.setNavigationBarTitle({title:e&&e.title||"绑定手机"}),this.Slider=this.selectComponent("#slider"),console.log("this.Slider",this.Slider)},onLoad:function(e){return r(this,void 0,void 0,function(){var t,n,o;return i(this,function(s){switch(s.label){case 0:return(t=de.session)&&t.type===exports.API_TYPE.WXV2&&(n=t.data,this.preData=n,o=this.openId=n.loginInfo.openId,this.setData({openId:o})),console.log("options",e),e&&"1"===e.status?(a=e,r(at,void 0,void 0,function(){var e,t,n,r,o,s,u,c;return i(this,function(i){switch(i.label){case 0:if(e=ue.userTicket,t=ue.mobile,n=a.requestCode,r=a.responseCode,!(e&&n&&r))return[3,5];i.label=1;case 1:return i.trys.push([1,4,,5]),o=de.uuid,s=void 0===o?"":o,[4,(d={requestCode:n,responseCode:r,userTicket:e},A(Oe(Ne),{method:"POST",data:d,type:"form"}).then(function(e){if(e.error)throw new x(Oe(Ne),e.error);return e}))];case 2:return u=i.sent().user,[4,ct(u,s,t)];case 3:return i.sent(),[3,5];case 4:return c=i.sent(),[2,he(c)];case 5:return ue.userTicket="",ue.mobile="",[2]}var d})}),[3,3]):[3,1];case 1:return e&&"0"===e.status?(u.navigateBack({delta:1}),[4,T(""+z.twiceVerifyFail+e.msg+"("+e.code+")")]):[3,3];case 2:s.sent(),s.label=3;case 3:return[2]}var a})})},onShow:function(){de.session&&de.session._emit(exports.SessionEvent.BINDPAGEONSHOW,de.session)},phoneInputHandler:function(e){var t=e&&e.detail;if(t){var n=t.value;this.setData({phoneNumber:n,sendCodeBtn:{active:11===n.length}})}},mobileCodeInputHandler:function(e){var t=e&&e.detail;if(t){var n=t.value;this.setData({mobileCode:n,submitBtn:{active:11===this.data.phoneNumber.length&&6===n.length}})}},getLoginCode:function(){return r(this,void 0,void 0,function(){var e,t,n,r;return i(this,function(i){switch(i.label){case 0:return t=(e=console).log,n=["checkSession"],[4,O()];case 1:return t.apply(e,n.concat([i.sent()])),[4,O()];case 2:return i.sent()?[3,4]:(this.updateSessionKey=!0,r=this,[4,C()]);case 3:r.loginCode=i.sent(),i.label=4;case 4:return[2]}})})},sendVerifyCodeClick:function(e){return r(this,void 0,void 0,function(){var t,n,r,o;return i(this,function(i){switch(i.label){case 0:if(!this.data.sendCodeBtn.active)return[2];de.session&&de.session._emit(exports.SessionEvent.SMSCLICK,de.session.type),i.label=1;case 1:return i.trys.push([1,6,,7]),t=ut(this.data.phoneNumber),r=de,[4,te(H.uuid)];case 2:return n=r.uuid=i.sent(),this.updateSessionKey?(this.updateSessionKey=!1,[4,Fe({code:this.loginCode})]):[3,4];case 3:i.sent(),i.label=4;case 4:return[4,this.sendVerifyCodeHandler(t,n,e)];case 5:return i.sent(),[3,7];case 6:return o=i.sent(),[2,he(o)];case 7:return[2]}})})},yodaVerifyAndSendCode:function(e,t){return r(this,void 0,void 0,function(){var n,r,o,s,a;return i(this,function(i){switch(i.label){case 0:return[4,it(t)];case 1:return n=i.sent().data,r=this.pageData=n,o=r.action,s=r.type,a=parseInt(s),isNaN(a)?(T(z.illegalVerifyType+"("+s+")"),[2]):(this.extInfoParam={id:a,request_code:t,fingerprint:"",mobile:""+e},[4,this.requestExtInfo(o,this.extInfoParam)]);case 2:return i.sent(),[2]}})})},requestExtInfo:function(e,t){return r(this,void 0,void 0,function(){var n,r;return i(this,function(i){switch(i.label){case 0:return[4,ot(e,t)];case 1:if(1===(n=i.sent()).status)return this.startCountdown(),[2];switch((r=n.error).code){case 121048:T("暂不支持图片验证");break;case 121060:this.Slider.showSlider({requestCode:r.request_code});break;default:T(r.message)}return[2]}})})},onSliderEnd:function(e){return r(this,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:return 1!==(t=e.detail.status)?[3,2]:[4,this.requestExtInfo(this.pageData.action,this.extInfoParam)];case 1:return n.sent(),[3,3];case 2:0===t&&T("验证失败，请稍后重试"),n.label=3;case 3:return[2]}})})},loginClick:function(e){return r(this,void 0,void 0,function(){var t,n,r,o,s,a;return i(this,function(i){switch(i.label){case 0:if(!this.data.submitBtn.active)return[2];de.session&&de.session._emit(exports.SessionEvent.LOGINCLICK,de.session.type),i.label=1;case 1:return i.trys.push([1,5,,6]),[4,ke("mobile")];case 2:if(i.sent(),t=this.data.phoneNumber,ut(t),n=function(e){if(/^.{6}$/.test(e))return e;throw new _(z.illegalSmsCode,1)}(this.data.mobileCode),!this.extInfoParam||!this.pageData)throw new _(z.loginParamLoss);return E(z.logining,"loading",1e4),[4,st(this.pageData.action,b({},this.extInfoParam,{smscode:n}))];case 3:return r=i.sent(),o=r.data.response_code,s=this.extInfoParam.request_code,[4,this.loginHandler(s,o,t,n,this.openId,this.preData&&this.preData.code,e)];case 4:return i.sent(),[3,6];case 5:return a=i.sent(),u.hideToast(),[2,he(a)];case 6:return[2]}})})},startCountdown:function(){var e=this,t=this.data.countdown;t.hidden=!1,t.limit=60;var n=function(){t.limit--,t.limit<0&&(t.limit=60,t.hidden=!0,clearInterval(r)),e.setData({countdown:t})},r=setInterval(n,1e3);n(),E(z.smsCodeSent)}},pt=(Object.assign(ft,{sendVerifyCodeHandler:function(e,t,n){return r(this,void 0,void 0,function(){return i(this,function(o){switch(o.label){case 0:return this.openId?[4,(Object.assign(ft,{sendVerifyCodeHandler:function(e,t,n){return r(this,void 0,void 0,function(){var o,s,u,c,d,l,f,p,h;return i(this,function(v){switch(v.label){case 0:if(!this.openId)throw new _("null openId for wxlogin");return o=H.appName,s=H.risk_platform,u=H.risk_partner,c=H.specialRiskCode,d=H.risk_smsTemplateId,l=H.risk_smsPrefixId,f=H.version_name,p=H.risk_app,[4,(g={version_name:f,risk_app:p,mobile:e,uuid:t,openId:this.openId,appName:o,wxUserInfoData:n.detail,risk_platform:s,risk_partner:u,specialRiskCode:c,risk_smsTemplateId:d,risk_smsPrefixId:l},r(Le,void 0,void 0,function(){var e,t,n,r,o,s,u,c,d,l,f,p,h,v,m,w;return i(this,function(i){switch(i.label){case 0:return e=g.mobile,t=g.openId,n=g.uuid,(d=ne(g.wxUserInfoData))?[3,2]:[4,re({withCredentials:!0})];case 1:d=i.sent(),i.label=2;case 2:return o=(r=d).rawData,s=r.signature,u=r.iv,c=r.encryptedData,[4,a.all([te(n),De()])];case 3:return l=i.sent(),f=l[0],p=l[1],h={openId:t,mobile:e,iv:u,encryptedData:c,rawData:o,signature:s,wechatFingerprint:p},[4,Ae(Oe(Re),f,g,h)];case 4:if(v=i.sent(),m=v.error,w=v.data,m)throw new x(Oe(Re),m,!0);if(w)return[2,w.requestCode];throw new x(Oe(Re))}})}))];case 1:return h=v.sent(),[4,ft.yodaVerifyAndSendCode.call(this,e,h)];case 2:return v.sent(),[2]}var g})})},loginHandler:function(){return lt.apply(this,arguments)}}),ft).sendVerifyCodeHandler.call(this,e,t,n)]:[3,2];case 1:return o.sent(),[3,4];case 2:return[4,(Object.assign(ft,{sendVerifyCodeHandler:function(e,t){return r(this,void 0,void 0,function(){var n,o,s,a,u,c,d,l;return i(this,function(f){switch(f.label){case 0:return n=H.risk_platform,o=H.risk_partner,s=H.specialRiskCode,a=H.risk_smsTemplateId,u=H.risk_smsPrefixId,c=H.risk_app,d=H.version_name,[4,(p={mobile:e,uuid:t,risk_app:c,risk_platform:n,risk_partner:o,specialRiskCode:s,risk_smsTemplateId:a,risk_smsPrefixId:u,version_name:d},r(void 0,void 0,void 0,function(){var e,t,n,r,o,s,a,u,c;return i(this,function(i){switch(i.label){case 0:return e=p.mobile,n=void 0===(t=p.verifyLevel)?2:t,r=p.specialRiskCode,a={uuid:p.uuid,risk_app:p.risk_app,risk_platform:p.risk_platform,risk_partner:p.risk_partner,sdkVersion:U,risk_smsTemplateId:void 0===(o=p.risk_smsTemplateId)?0:o,risk_smsPrefixId:void 0===(s=p.risk_smsPrefixId)?0:s,version_name:p.version_name},[4,De()];case 1:return u=i.sent(),c={mobile:e,verifyLevel:n,wechatFingerprint:u},r&&(c.specialRiskCode=r),[2,A(Oe(He),{method:"post",type:"form",query:a,data:c}).then(function(e){var t=e.error;if(!t)throw new x(Oe(He));var n=t.data;if(n)return n.requestCode;throw new x(Oe(He),t,!0)})]}})}))];case 1:return l=f.sent(),[4,ft.yodaVerifyAndSendCode.call(this,e,l)];case 2:return f.sent(),[2]}var p})})},loginHandler:function(){return dt.apply(this,arguments)}}),ft).sendVerifyCodeHandler.call(this,e,t)];case 3:o.sent(),o.label=4;case 4:return[2]}})})},loginHandler:function(){return this.openId?lt.apply(this,arguments):dt.apply(this,arguments)}}),ft),ht=function(e){return r(void 0,void 0,void 0,function(){var t,n,r,o,s,a,u,c,d,l;return i(this,function(i){switch(i.label){case 0:return t=e.risk_platform,n=e.risk_partner,r=e.risk_app,o=e.token,s=e.uuid,a=e.sdkVersion,u=e.version_name,c={risk_platform:t,risk_partner:n,risk_app:r,version_name:u,sdkVersion:a},l={token:o},[4,te(s)];case 1:return l.uuid=i.sent(),[4,De()];case 2:return l.wechatFingerprint=i.sent(),d=l,[2,A(Oe(Ce.smartCheckApi),{method:"post",type:"form",query:c,data:d}).then(function(e){var t=e.error;if(t.data)return t.data;throw new x(Oe(Ce.smartCheckApi),t,!0)})]}})})},vt={rotateDeg:20,data:{title:"更换手机号",pageState:"checking",checkImage:{succSrc:"https://p1.meituan.net/codeman/4425def0f660e5ea550909ad6f9c6f269881.png",shieldSrc:"https://p1.meituan.net/codeman/bb9ff1fc8ab8da0f4241399e4f29376c4681.png",rotateSrc:"https://p1.meituan.net/codeman/d10f442abb65b5f816ffc98acdd914bd6992.png"},checkText:"正在进行智能安全检测...",canGetNewCode:!1,countdown:{limit:60,hidden:!0},focus:!0},onLoad:function(e){return r(this,void 0,void 0,function(){var t,n,r,o,s,a,c,d=this;return i(this,function(i){switch(i.label){case 0:return console.log("changeBindPhoneState",ce),"1"===e.status&&e.requestCode&&e.responseCode?(ce.responseCode=e.responseCode,this.setData({checkText:"您的账户当前处于安全环境，可直接输入要更换的新手机号",pageState:"checkSucc"}),[2]):(this.uuid=e.uuid||"",t=u.createAnimation({duration:100}),this.animationIntervalId=setInterval(function(){t.rotate(2*-++d.rotateDeg).step(),d.setData({animationData:t.export()})},10),[4,this.changeCheckText("正在检测您的账户环境...")]);case 1:return i.sent(),[4,this.changeCheckText("正在检测当前账号状态...")];case 2:return i.sent(),r=ht,o={},[4,this.getToken(e.token||"")];case 3:return[4,r.apply(void 0,[(o.token=i.sent(),o.risk_partner=H.risk_partner,o.risk_platform=H.risk_platform,o.risk_app=H.risk_app,o.version_name=H.version_name,o.sdkVersion=U,o.uuid=this.uuid,o)]).catch(function(e){he(e).then(function(){be()})})];case 4:return(n=i.sent())&&(s=n.requestCode,a=n.ticket,ce.ticket=a,s?(ce.smartRequestCode=s,u.redirectTo({url:W.smsVerifyRoute+"?requestCode="+s+"&success="+W.changeBindPhoneRoute+"&fail="+W.changeBindPhoneRoute})):c=setTimeout(function(){clearTimeout(c),c=null,d.setData({checkText:"您的账户当前处于安全环境，可直接输入要更换的新手机号",pageState:"checkSucc"})},500)),[2]}})})},onReady:function(){u.setNavigationBarTitle({title:this.data.title}),this.Slider=this.selectComponent("#slider")},onShow:function(){de.session&&de.session._emit(exports.SessionEvent.CHANGEPHONEPAGEONSHOW,de.session)},getToken:function(e){return r(this,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:if(e||!H.persistKey)return[3,5];t=void 0,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,P(H.persistKey)];case 2:return t=n.sent(),[3,4];case 3:return n.sent(),t="",[3,4];case 4:e=t&&t.token||"",n.label=5;case 5:return[2,ce.token=e]}})})},clearAnimation:function(){this.animationIntervalId&&(clearInterval(this.animationIntervalId),this.animationIntervalId=null,this.setData({animationData:null}))},changeCheckText:function(e){var t=this;return new a(function(n,r){var i=setTimeout(function(){clearTimeout(i),i=null,t.setData({checkText:e}),n(e)},900)})},onChangePhoneClick:function(){this.setData({pageState:"changePhone"})},phoneInputHandler:function(e){var t=e&&e.detail;if(t){var n=t.value;this.newPhoneNumber=n,this.setData({canGetNewCode:/^1[0-9]\d{9}$/.test(this.newPhoneNumber)})}},onGetNewCodeClick:function(){return r(this,void 0,void 0,function(){return i(this,function(e){return this.data.canGetNewCode&&(de.session&&de.session._emit(exports.SessionEvent.CHANGEPHONEGETNEWCODE,de.session),this.getNewSmsCode(0)),[2]})})},getNewSmsCode:function(e){return r(this,void 0,void 0,function(){var t,n,o=this;return i(this,function(s){switch(s.label){case 0:return[4,(a={mobile:this.newPhoneNumber,token:ce.token||"",requestCode:ce.smartRequestCode,responseCode:ce.responseCode,ticket:ce.ticket||"",confirm:e,uuid:this.uuid},r(void 0,void 0,void 0,function(){var e,t,n,r,o,s,u,c,d,l,f,p;return i(this,function(i){switch(i.label){case 0:return e=a.mobile,n=void 0===(t=a.countryCode)?86:t,r=a.token,s=void 0===(o=a.confirm)?0:o,u=a.requestCode,c=a.ticket,d=a.responseCode,f={},[4,te(a.uuid)];case 1:return f.uuid=i.sent(),l=f,p={mobile:e,countryCode:n,token:r,confirm:s,ticket:c},u&&(p.requestCode=u),u&&(p.responseCode=d),[2,A(Oe(Ce.sendNewcodeApi),{method:"post",type:"form",query:l,data:p}).then(function(e){console.log("res===>",e);var t=e.error;if(t.data)return t.data;throw new x(Oe(Ce.sendNewcodeApi),t,!0)})]}})})).catch(function(e){e&&101055===e.code?T(e.tip,{showCancel:!0}).then(function(e){if(e)return o.getNewSmsCode(1)}):he(e)})];case 1:return(t=s.sent())&&(n=t.requestCode,this.getPageData(n)),[2]}var a})})},getPageData:function(e){return r(this,void 0,void 0,function(){var t,n,r,o,s;return i(this,function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),[4,it(e)];case 1:return t=i.sent().data,n=this.pageData=t,r=n.action,o=n.type,this.extInfoParam={id:parseInt(o),request_code:e,fingerprint:"",mobile:""+this.newPhoneNumber},[4,this.requestExtInfo(r,this.extInfoParam)];case 2:return i.sent(),[3,4];case 3:return s=i.sent(),he(s),[3,4];case 4:return[2]}})})},requestExtInfo:function(e,t){return r(this,void 0,void 0,function(){var n,r;return i(this,function(i){switch(i.label){case 0:return[4,ot(e,t)];case 1:if(1===(n=i.sent()).status)return this.setData({pageState:"bindNewPhone"}),this.startCountdown(),[2];switch((r=n.error).code){case 121048:T("暂不支持图片验证");break;case 121060:this.Slider.showSlider({requestCode:r.request_code});break;default:T(r.message)}return[2]}})})},onSliderEnd:function(e){return r(this,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:return 1!==(t=e.detail.status)?[3,2]:[4,this.requestExtInfo(this.pageData.action,this.extInfoParam)];case 1:return n.sent(),[3,3];case 2:0===t&&T("验证失败，请稍后重试"),n.label=3;case 3:return[2]}})})},startCountdown:function(){var e=this,t=this.data.countdown;t.hidden=!1,t.limit=60;var n=function(){t.limit--,t.limit<0&&(t.limit=60,t.hidden=!0,clearInterval(r)),e.setData({countdown:t})},r=setInterval(n,1e3);n(),E("验证码已发送")},codeInputHandler:function(e){var t=e&&e.detail;if(t){var n=t.value;if(n&&6===n.length)return void this.verifyNewPhone(n)}},verifyNewPhone:function(e){return r(this,void 0,void 0,function(){var t,n,o,s;return i(this,function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),[4,st(this.pageData.action,b({},this.extInfoParam,{smscode:e}))];case 1:return t=a.sent(),n=t.data.response_code,[4,(u={mobile:this.newPhoneNumber,token:ce.token||"",requestCode:this.extInfoParam.request_code,responseCode:n,ticket:ce.ticket||"",risk_partner:H.risk_partner,risk_platform:H.risk_platform,risk_app:H.risk_app,version_name:H.version_name,sdkVersion:U,uuid:this.uuid},r(void 0,void 0,void 0,function(){var e,t,n,r,o,s,a,c,d,l,f,p,h,v;return i(this,function(i){switch(i.label){case 0:return e=u.mobile,t=u.token,n=u.requestCode,r=u.responseCode,o=u.ticket,s=u.risk_platform,a=u.risk_partner,c=u.risk_app,d=u.version_name,l=u.sdkVersion,p={},[4,te(u.uuid)];case 1:return p.uuid=i.sent(),p.risk_platform=s,p.risk_partner=a,p.risk_app=c,p.version_name=d,p.sdkVersion=l,f=p,v={mobile:e,requestCode:n,token:t,ticket:o},[4,De()];case 2:return v.wechatFingerprint=i.sent(),h=v,r&&(h.responseCode=r),[2,A(Oe(Ce.verifyNewApi),{method:"post",type:"form",query:f,data:h}).then(function(e){console.log("res===>",e);var t=e.data,n=e.error;if(t)return t;throw new x(Oe(Ce.sendNewcodeApi),n,!0)})]}})}))];case 2:return o=a.sent(),this.changeComplete(o),[3,4];case 3:return s=a.sent(),he(s),[3,4];case 4:return[2]}var u})})},changeComplete:function(e){return r(this,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:return 0!=e.success?[3,2]:[4,ge()];case 1:return(t=n.sent())&&t.token&&(t.token=e.token,t.mobile=this.newPhoneNumber,this.setData({focus:!1},function(){ve(t)})),[3,4];case 2:return[4,T("换绑失败，请稍后重试")];case 3:n.sent(),be(),n.label=4;case 4:return[2]}})})},sendVerifyCodeClick:function(){this.getNewSmsCode(1)}};exports.finger=h,exports.yodaConfig=rt,exports.EntryPage=ze,exports.BindPage=pt,exports.changeBind=vt,exports.setAppConfig=function(e){Object.assign(H,e)},exports.setSdkRoute=function(e){e.startsWith("/")||(e="/"+e),W.sdkRoute=e},exports.setBindPageOption=function(e){Object.assign(F,e)},exports.setLoginPageOption=function(e){Object.assign(Y,e)},exports.setAuthrizePageOption=function(e){Object.assign(X,e)},exports.setLoginCheck=function(e){M=e},exports.config=j,exports.mobileLogin=Te,exports.utils=_e,exports.SDKError=_,exports.WxAPIError=y,exports.WxRequestError=k,exports.authState=de,exports.destroySession=le,exports.getAuthInfo=ge,exports.removeAuthInfo=me,exports.version=U,exports.login=Ie,exports.cleanLogin=function(e){return me().then(function(){return Ie(e)})},exports.wxMobileLogin=Me,exports.wxLogin=Ge,exports.updateWxUserInfo=Fe,exports.getWxUserInfo=function(e){return r(void 0,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:return[4,A(Oe(Ye),{method:"GET",data:b({},e,{thirdType:"weixin"})})];case 1:if((t=n.sent()).uniqueid)return[2,t];throw new x(Oe(Ye),t.error)}})})},exports.getSdkEnv=R,exports.setEnv=function(e){q.env=e},exports.getEnv=B,exports.changeBindPhone=Xe,exports.logout=function(e,t){if(void 0===t&&(t=H.appName),e)return A(Oe(Ce.logoutUrl),{method:"post",type:"form",data:{token:e,appName:t}}).then(function(e){return me(),e.result}).catch(function(e){return console.log(e),me(),!1});console.error("token is required")},exports.isLogout=function(e,t){return void 0===t&&(t=H.appName),A(Oe(Ce.islogoutUrl),{method:"post",type:"form",data:{userId:e,appName:t}}).then(function(e){if(e.error)throw new x(Oe(Ce.islogoutUrl),e.error);return e.result}).catch(function(e){console.log(e)})}; 
 			}); 
		define("login/urls.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={prod:{updatewxuserinfo:"https://open.meituan.com/user/thirdinfo/updateweappuserinfo",getwxuserinfo:"https://open.meituan.com/user/thirdinfo/getwechatuserinfo",wxmobilelogin:"https://open.meituan.com/user/v2/weappgetmobilelogin",wxlogin:"https://open.meituan.com/user/v2/weapplogin",wxbindapply:"https://open.meituan.com/user/v2/weappbindmobileloginapply",wxbind:"https://open.meituan.com/user/v2/weappbindmobilelogin",wxticketlogin:"https://open.meituan.com/user/v2/weappticketlogin",mobileloginapply:"https://passport.meituan.com/api/v3/account/mobileloginapply",mobilelogin:"https://passport.meituan.com/api/v3/account/mobilelogin",verifylogin:"https://passport.meituan.com/api/v1/account/verifylogin",wxslientlogin:"https://open.meituan.com/user/v1/weappsilentlogin",smartcheck:"https://open.meituan.com/user/v3/riskcheck",sendnewcode:"https://open.meituan.com/user/v3/sendnew",verifynew:"https://open.meituan.com/user/v4/verifynew",logout:"https://open.meituan.com/thirdlogin/wechatapplogout",islogout:"https://open.meituan.com/thirdlogin/isWechatAppLogout"},dev:{updatewxuserinfo:"http://open.wpt.dev.sankuai.com/user/thirdinfo/updateweappuserinfo",getwxuserinfo:"http://open.wpt.dev.sankuai.com/user/thirdinfo/getwechatuserinfo",wxmobilelogin:"http://open.wpt.dev.sankuai.com/user/v2/weappgetmobilelogin",wxlogin:"http://open.wpt.dev.sankuai.com/user/v2/weapplogin",wxbindapply:"http://open.wpt.dev.sankuai.com/user/v2/weappbindmobileloginapply",wxbind:"http://open.wpt.dev.sankuai.com/user/v2/weappbindmobilelogin",wxticketlogin:"http://open.wpt.dev.sankuai.com/user/v2/weappticketlogin",mobileloginapply:"http://passport.wpt.dev.sankuai.com/api/v3/account/mobileloginapply",mobilelogin:"http://passport.wpt.dev.sankuai.com/api/v3/account/mobilelogin",verifylogin:"http://passport.wpt.dev.sankuai.com/api/v1/account/verifylogin",wxslientlogin:"http://open.wpt.dev.sankuai.com/user/v1/weappsilentlogin",smartcheck:"http://open.wpt.dev.sankuai.com/user/v3/riskcheck",sendnewcode:"http://open.wpt.dev.sankuai.com/user/v3/sendnew",verifynew:"http://open.wpt.dev.sankuai.com/user/v4/verifynew",logout:"http://thirdlogin.wpt.dev.sankuai.com/thirdlogin/wechatapplogout",islogout:"http://thirdlogin.wpt.dev.sankuai.com/thirdlogin/isWechatAppLogout"},test:{updatewxuserinfo:"http://open.wpt.test.sankuai.com/user/thirdinfo/updateweappuserinfo",getwxuserinfo:"http://open.wpt.test.sankuai.com/user/thirdinfo/getwechatuserinfo",wxmobilelogin:"http://open.wpt.test.sankuai.com/user/v2/weappgetmobilelogin",wxlogin:"http://open.wpt.test.sankuai.com/user/v2/weapplogin",wxbindapply:"http://open.wpt.test.sankuai.com/user/v2/weappbindmobileloginapply",wxbind:"http://open.wpt.test.sankuai.com/user/v2/weappbindmobilelogin",wxticketlogin:"http://open.wpt.test.sankuai.com/user/v2/weappticketlogin",mobileloginapply:"http://passport.wpt.test.sankuai.com/api/v3/account/mobileloginapply",mobilelogin:"http://passport.wpt.test.sankuai.com/api/v3/account/mobilelogin",verifylogin:"http://passport.wpt.test.sankuai.com/api/v1/account/verifylogin",wxslientlogin:"http://open.wpt.test.sankuai.com/user/v1/weappsilentlogin",smartcheck:"http://open.wpt.test.sankuai.com/user/v3/riskcheck",sendnewcode:"http://open.wpt.test.sankuai.com/user/v3/sendnew",verifynew:"http://open.wpt.test.sankuai.com/user/v4/verifynew",logout:"http://thirdlogin.wpt.test.sankuai.com/thirdlogin/wechatapplogout",islogout:"http://thirdlogin.wpt.test.sankuai.com/thirdlogin/isWechatAppLogout"}}; 
 			}); 
		define("npm/@analytics/wechat-sdk/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(e){return void 0===e?"undefined":X(e)}function n(e,n){return t(e)===n}function r(e){return n(e,"number")}function i(){return 65535*Math.random()}function o(){return Math.ceil(i()).toString(16)}function a(){return Y.now().toString(16)+"-"+o()+"-"+o()}function s(e,t){try{Q.setStorageSync(re+e,t)}catch(e){oe("setCache error :",e)}}function c(e){try{return Q.getStorageSync(re+e)}catch(e){return oe("getCache error :",e),z}}function u(e){try{Q.removeStorageSync(re+e)}catch(e){oe("removeCache error: ",e)}}function f(e){var t=Math;return t.ceil(t.min(1e3*(.5+t.random())*t.pow(2,e),15e3))}function l(e,n){var r=/^((\d+\.)+\d+).*$/;if("string"===t(e)&&"string"===t(n)&&r.test(e)&&r.test(n)){for(var i=e.replace(r,"$1").split("."),o=n.replace(r,"$1").split("."),a=0,s=Math.max(i.length,o.length);a<s;a++){i[a]&&o[a]||(!i[a]&&i||!o[a]&&o).push("0");var c=i[a].toString().length,u=o[a].toString().length;if(c!==u){var f=c>u?o:i;f[a]=Array(Math.abs(c-u)+1).join("0")+f[a].toString()}}var l=parseInt(i.join("")),d=parseInt(o.join(""));return l==d?0:l>d?1:-1}}function d(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n=void 0,r=void 0,i=void 0,o=void 0,a=void 0,s=0,c=0,u="",f=[];if(!e)return e;e=v(e);do{n=(a=e.charCodeAt(s++)<<16|e.charCodeAt(s++)<<8|e.charCodeAt(s++))>>18&63,r=a>>12&63,i=a>>6&63,o=63&a,f[c++]=t.charAt(n)+t.charAt(r)+t.charAt(i)+t.charAt(o)}while(s<e.length);switch(u=f.join(""),e.length%3){case 1:u=u.slice(0,-2)+"==";break;case 2:u=u.slice(0,-1)+"="}return u}function v(e){var t="",n=void 0,r=void 0,i=0,o=void 0;for(n=r=0,i=(e=(e+"").replace(/\r\n/g,"\n").replace(/\r/g,"\n")).length,o=0;o<i;o++){var a=e.charCodeAt(o),s=null;a<128?r++:s=a>127&&a<2048?String.fromCharCode(a>>6|192,63&a|128):String.fromCharCode(a>>12|224,a>>6&63|128,63&a|128),null!==s&&(r>n&&(t+=e.substring(n,r)),t+=s,n=r=o+1)}return r>n&&(t+=e.substring(n,e.length)),t}function h(e,t){if(!Oe||t===ce&&t===fe)if(t===pe){if(be>=Ce)return Ce++,void setTimeout(function(){x(e,z,t)},f(Ce));Ie=[],Ce=0,clearTimeout(Me),Me=null,O(e,pe)}else{if(be>=we)return we++,void setTimeout(function(){x(e,z,t)},f(we));t==ce&&(u(je),clearTimeout(Me),Me=null),qe=[],we=0,xe=null,ke.length&&O(e),Oe=!1}}function p(e,t){t>be||setTimeout(function(){m({data:e,success:function(){},fail:function(){p(e,++t)}})},2e3)}function g(e){var t=[];return _(e).forEach(function(e){var n=JSON.stringify(e),r=encodeURIComponent(d(n));if(ye>r.length)t.push(new F(function(e){m({data:r,success:function(){e()},fail:function(){p(r,1),e()}})}));else{var i=e[0],o=i.evs,a=o.length;if(a>1){for(var s=[],c=0;c<a/2;c++)s.push(o.pop());t=t.concat(g([Object.assign(i,{evs:s})])),t=t.concat(g(e))}else{var u=i.evs[0];C("report.js","wx-get-fail","body too long "+u.cid+"  bid:"+u.bid)}}}),t}function m(e){var t=e.data,n=e.success,r=e.fail,i="https://wreport.meituan.net?d="+t+"&t=1&rnd="+Math.random();Q.request({method:"GET",url:i,success:function(e){var t=e.statusCode;400>t?n&&n():r&&r(t)},fail:function(){r&&r(0)}})}function y(e){var t=e.url,n=e.data,r=e.success,i=e.fail;Q.request({method:"POST",url:t,data:n,success:function(e){var t=e.statusCode;400>t?r&&r():i(t)},fail:function(){i(0)}})}function _(e){for(var t=0,n=[];e[t];)!function(e){for(var t=e.evs,r=Object.assign(Object.assign({},e),{evs:null}),i=0,o=t.length,a=encodeURIComponent(JSON.stringify(r)).length,s=encodeURIComponent(JSON.stringify(t[i])).length,c=Math.floor((_e-a)/s),u=[];t[i];){if(u.push(t[i]),i+1===o||i>0&&i%c==0){var f=[Object.assign(r,{evs:u})];n.push(f),u=[]}i++}}(e[t]),t++;return n}function b(e,t,n){if(Y.isArray(t)&&t.length)if(Ue()){var r=g(t);F.all(r).then(function(){S(e,n)}).catch(function(){S(e,n)})}else{var i=ie(t)?JSON.stringify(t):t;y({url:e,data:i,success:function(){S(e,n)},fail:function(){h(e,n),C("report.js","wx-request-fail","report fail")}})}}function S(e,t){if(t==pe)return Ce=0,clearTimeout(Me),Me=null,Ie=[],void O(e,pe);t==ce&&(clearTimeout(Me),Ce=0,Me=null,u(je)),Oe=!1,we=0,qe=[],xe=null,ke.length&&O(e)}function x(e,t,n){if(t)n===pe?Ce=0:we=0,b(e,t,n);else{b(e,n==pe?Ie:qe,n)}}function w(e,t){if(Ae||(Ae=c(je)||[])&&Ae.length&&(qe=Ae,xe=!0,x(e,qe)),t){ke.push(t);var n=void 0,r=void 0,i=void 0;switch(t.nm){case fe:n=D(),i=A(),ke=ke.concat(i),r=[Object.assign({evs:ke},n)],ke=[],qe=qe.concat(r,Ie),Ie=[],Oe=!0,xe&&(clearTimeout(xe),xe=null),xe=!0,x(e,qe,fe);break;case ce:i=A(),ke=ke.concat(i),qe.length?qe[0].evs=qe[0].evs.concat(ke):(n=D(),r=[Object.assign({evs:ke},n)],qe=qe.concat(r)),ke=[],qe=qe.concat(Ie),Ie=[],Oe=!0,s(je,qe),xe&&(clearTimeout(xe),xe=null),xe=!0,x(e,qe,ce);break;case ve:case he:n=D(),r=[Object.assign({evs:ke},n)],ke=[],qe=qe.concat(r),xe&&(clearTimeout(xe),xe=null),xe=!0,x(e,qe,fe);break;default:xe||Oe||O(e)}}}function O(e,t){t?Me=setTimeout(function(){var t=A();if(t.length){var n=D(),r=[Object.assign({evs:t},n)];Ie=Ie.concat(r)}Ie.length?x(e,Ie,pe):(clearTimeout(Me),Me=null)},5e3):xe=setTimeout(function(){if(!ke.length)return clearTimeout(xe),void(xe=null);var t=D(),n=[Object.assign({evs:ke},t)];ke=[],qe=qe.concat(n),x(e,qe)},Se)}function j(e,t){if((t=Y.isObj(t)?t:{}).mvlId&&t.evs){var n=t.mvlId,r=t.evs.val_lab?t.evs.val_lab:{};r._tm=t.evs.tm,r._seq=t.evs.seq,Te[n]?Te[n].val_lab.mv_list.push(r):(t.evs.val_lab={mv_list:[r]},Te[n]=t.evs)}Me||O(e,pe)}function A(){var e=[];for(var t in Te)e.push(Te[t]);return Te={},e}function q(e,t,n){if(JSON.stringify(e)!==JSON.stringify(t)){if(n&&ke.length){var r=[Object.assign({evs:ke},e)];ke=[],qe=qe.concat(r)}var i=A();if(i.length>0){var o=[Object.assign({evs:i},e)];Ie=Ie.concat(o)}}}function k(e,t){if("domainReport"==t.catMode)De.url="https://catfront.dianping.com/api/log?v=1";else if(e&&"nginxReport"==t.catMode){var n=/^(https:\/\/)[^\/]+/,r=e.match(n);r&&(De.url=r[0]+"/lx-cat")}}function C(t,n,r,i){if(De.url)try{var o=getCurrentPages(),a="app.js";o.length&&(a=o[o.length-1].__route__);var s=[{project:"wx-lx-sdk",pageUrl:a,resourceUrl:t,category:i?"jsError":"ajaxError",sec_category:n||"",level:"error",unionId:D("lxcuid"),timestamp:Y.now(),content:""+r||""}];Q.request({method:"POST",url:De.url,data:"c="+encodeURIComponent(JSON.stringify(s)),header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){},fail:function(){oe("cat report error:",e)}})}catch(e){oe("reportError error:",e)}}function I(){try{var e=Q.getSystemInfoSync(),t="MicroMessenger"+W+"A ("+e.model+"; "+e.system+"; "+e.pixelRatio+"dpr; language/"+e.language+") "+e.platform+"/"+e.version+" NetType/";Ne.ct=e.platform.toLowerCase(),Ne.os=e.system,Ne.sc=e.screenWidth+"*"+e.screenHeight,Ne.ua=t,Ve=e}catch(e){C("env.js","lx-api-error",e.message,!0)}return new F(function(e){var t=c("wxid"),n=c("wxunionid");t&&(Ne.wxid=t),n&&(Ne.wxunionid=n),e(Ne)}).then(function(){return new F(function(e){try{Q.getNetworkType({success:function(t){Ne.net=t.networkType.toUpperCase(),Ne.ua=Ne.ua.replace(/(NetType\/).*/,"$1"+t.networkType.toUpperCase()),e(Ne)},fail:function(){e(Ne)}})}catch(t){e(Ne)}})})}function T(e){delete Ne[e]}function M(e,t,n){if(!(Ee.indexOf(e)>-1)){var r=Y.extend({},Ne),i=!1;"category"===e&&(t="data_sdk_"+t),"wxid"!==e&&"wxunionid"!==e||s(e,t),"msid"===e&&Ne.scene&&T("scene"),"msid"===e&&(i=!0),Ne[e]=t;var o=Y.extend({},Ne);n&&n(r,o,i)}}function D(e){return e?e&&Ne[e]:Ne}function L(){var e=[],t=Y.now();return e.push(t.toString(16)),e.push(o()),e.push(o()),e.push(o()),e.join("-")}function P(e){e=e||c("quickOptions"),Qe=e.quickReport||{},Y.isObj(Qe)&&(Y.isArray(Qe.envInfo)&&Y.each(Qe.envInfo,function(e){-1==Fe.indexOf(e)&&Fe.push(e)}),Y.isArray(Qe.evsInfo)&&Y.each(Qe.evsInfo,function(e){-1==$e.indexOf(e)&&$e.push(e)})),setInterval(function(){R(Ge,1),Ge=[]},500)}function U(e){if(Y.isObj(Qe))switch(Y.isArray(Qe.envInfo)&&(Fe=Fe.concat(Qe.envInfo)),Y.isArray(Qe.evsInfo)&&($e=$e.concat(Qe.evsInfo)),e.nm){case se:Qe.hasAS&&N(e);break;case ce:Qe.hasAQ&&N(e);break;case ue:case fe:Y.isArray(Qe[ue])&&Qe[ue].indexOf(e.val_cid)>-1&&N(e);break;case de:V(Qe[de],e);break;case le:V(Qe[le],e);break;case ve:V(Qe[ve],e);break;case he:V(Qe[he],e)}}function V(e,t){Y.isArray(e)&&e.indexOf(t.val_bid)>-1&&N(t)}function N(e){var t={};Y.each($e,function(n){t["evs."+n]=e[n]||""});var n=D();Y.each(Fe,function(e){t[e]=n[e]||""}),Ge.push(t),30==Ge.length&&(R(Ge,1),Ge=[])}function E(e,t){t<=3&&(t++,setTimeout(function(){R(e,t)},f(t)))}function R(e,t){0!==e.length&&Q.request({method:"POST",url:me,data:e,success:function(n){400>n.statusCode||E(e,t)},fail:function(){E(e,t)}})}function B(){var e=this;I().then(function(){rt=!0}),e._opts={},e._config={},ft=a()}function J(e,t){var n=c(We);n||(n=[]),n.length>=Xe&&n.shift(),t?n.push({seq:e.seq,category:D().category,cid:t.val_cid,bid:e.val_bid,val_lab:e.val_lab||{}}):n.push({seq:e.seq,category:D().category,cid:at,bid:e.val_bid,val_lab:e.val_lab||{}}),s(We,n)}function Z(){nt=1,M("msid",L(),q),u(We)}function H(e,t,n,r,i,o){try{ct?ct&&ct!==D("lch")&&(Z(),ct=D("lch")):ct=D("lch"),Ye<Date.now()-et&&Z(),et=Date.now();var a={nm:e,tm:Y.now(),nt:ge,seq:nt++,isauto:ze,req_id:t};if(a=Y.extend(a||{},ht),a=Y.extend(a||{},vt),vt={},at)a.val_cid=at;else{var s=getCurrentPages();s&&s.length&&(a.val_cid=s[s.length-1].__route__)}if(n&&(a.val_lab=n),st&&(a.val_ref=st),r&&(a.val_bid=r),lt&&(a.refer_req_id=lt),o&&(a=Y.extend(a||{},o),o.refer_req_id||delete a.refer_req_id,o.val_ref||delete a.val_ref),e==le&&i&&!0===i.sf&&J(a,o),e==ue||e==ve||e==he){var u=c(We);u&&(a.s_from=u)}return a}catch(e){return C("index.js","lx-api-error",e.message,!0),oe(e.message),null}}var K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F=require("../../../@mtfe/mt-weapp-promise/index.js"),$=require("../../../@mtfe/mt-weapp-log/dist/index.js").page,G="function"==typeof Symbol&&"symbol"==K(Symbol.iterator)?function(e){return void 0===e?"undefined":K(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":K(e)},Q=void 0,W=void 0;"undefined"!==("undefined"==typeof mmp?"undefined":G(mmp))?(Q=mmp,W="MT"):"undefined"!==("undefined"==typeof swan?"undefined":G(swan))?(Q=swan,W="Baidu"):"undefined"!==("undefined"==typeof tt?"undefined":G(tt))?(Q=tt,W="TouTiao"):(Q=wx,W="WX");var X="function"==typeof Symbol&&"symbol"==K(Symbol.iterator)?function(e){return void 0===e?"undefined":K(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":K(e)},z=void 0,Y={},ee=Object.prototype,te=ee.toString,ne=ee.hasOwnProperty,re="_lx_sdk_",ie=function(e){return e&&n(e,"string")};Y.isStr=ie;Y.isObj=function(e){return e&&"[object Object]"===te.call(e)},Y.now=function(){return new Date-0},Y.isArray=Array.isArray||function(e){return"[object Array]"===te.call(e)},Y.isArrayLike=function(e){if(!e)return!1;var t=e.length;return!!Y.isArray(e)||!!(e&&r(t)&&t>=0)&&(!Y.isObj(e)||!(t>1)||t-1 in e)},Y.each=function(e,t,n){if(e){var r,i,o;if(Y.isArrayLike(e))for(i=0,o=e.length;i<o&&!1!==t.call(n,e[i],i,e);i++);else for(r in e)if(ne.call(e,r)&&!1===t.call(n,e[r],r,e))break}},Y.extend=function e(t,n,r){var i,o=!0===t;return o||(r=n,n=t),n&&Y.isObj(n)||(n={}),r&&Y.isObj(r)||(r={}),Y.each(r,function(t,a){o&&Y.isObj(r[a])?(i=n[a]={},e(o,i,r[a])):n[a]=r[a]}),n},Y.toArray=function(e,t,n){var r=[];return Y.isArrayLike(e)&&Y.each(e,function(e){r.push(t?t.call(n,e):e)},n),r};var oe=function(){Y.toArray(arguments).unshift("[LX SDK]"),console},ae=function(){Y.toArray(arguments).unshift("[LX SDK]"),console},se="AS",ce="AQ",ue="PV",fe="PD",le="MC",de="ME",ve="BO",he="BP",pe="MVL",ge=3,me="https://hreport.meituan.com",ye=7943,_e=ye-1e3,be=3,Se=500,xe=null,we=0,Oe=!1,je="lx_send_cache_data",Ae=z,qe=[],ke=[],Ce=0,Ie=[],Te={},Me=null,De={},Le=!1,Pe=!1,Ue=function(){if(Pe||"MT"!==W||!Ve.mmpSDKVersion||"ios"!==Ve.platform.toLowerCase())return Pe=!0,Le;Pe=!0;var e=l(Ve.mmpSDKVersion,"1.0.2");return Le=Ve.mmpSDKVersion&&e<0},Ve={},Ne={sdk_ver:"1.9.1-alpha.2",ch:"weixin",lch:"wx",rtt:"mp"},Ee=["sdk_ver","lxcuid"];Ne.lxcuid=function(e){function t(e,t){var n,r=0;for(n=0;n<t.length;n++)r|=f[n]<<8*n;return e^r}var n=c("lxcuid");if(n)return n;var r,i,o=function(){for(var e=1*new Date,t=0;e===1*new Date&&t<200;)t++;return e.toString(16)+t.toString(16)},a=+(Math.random()+"").slice(2),u=e.ua||"",f=[],l=0;for(r=0;r<u.length;r++)i=u.charCodeAt(r),f.unshift(255&i),f.length>=4&&(l=t(l,f),f=[]);f.length>0&&(l=t(l,f)),u=l;var d=0;e.sc&&(d=e.sc.split("*"),d=+d[0]*+d[1]);var v=[o(),a,u,d,o()].map(function(e){return e.toString(16)}).join("-");return s("lxcuid",v),v}(Ne);var Re=function(e,t){try{["onShow","onHide"].forEach(function(n){var r=t[n];"onShow"===n&&(t[n]=function(t){e._config.hasAs=!1,e._config.hasAq=!1,t.scene&&e.set("scene",t.scene),e.setUTM(t),e.start({custom:t}),e._config.hasAs=!0,r&&r.call(this,t)}),"onHide"===n&&(t[n]=function(t){r&&r.call(this,t),e._config.hasAq?ae("PD（页面离开）灵犀集成自动上报，请注释灵犀 quit 接口调用！"):e.quit()})})}catch(e){C("index.js","lx-api-error",e.message,!0),oe(e.message)}return t},Be=App,Je=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var n=function(t){t=Re(e,t),Be(t)};return t&&Be&&(App=n),n.OriginApp=Be,n}catch(e){C("index.js","lx-api-error",e.message,!0),oe(e.message)}},Ze=function(e,t){try{["onUnload","onShow","onHide","onLoad"].forEach(function(n){var r=t[n];switch(n){case"onShow":t[n]=function(){e._config.hasPv=!1,e._config.hasPd=!1;for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];r&&r.apply(this,n)};break;case"onHide":case"onUnload":t[n]=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];r&&r.apply(this,n),e._config.hasPv&&!e._config.hasPd?e.pageDisappear({},!0):ae("PD（页面离开）灵犀集成自动上报，请注释灵犀 pageDisappear 接口调用！")};break;case"onLoad":t[n]=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];n.length>0&&"{}"!==JSON.stringify(n[0])&&(e._config.query=n[0]),r&&r.apply(this,n)}}})}catch(e){C("index.js","lx-api-error",e.message,!0),oe(e.message)}return t},He=$,Ke=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];try{var n=function(t){t=Ze(e,t),He(t)};return t&&He&&($=n),n.OriginPage=He,n}catch(e){C("index.js","lx-api-error",e.message,!0),oe(e.message)}},Fe=["uid","uuid","union_id","sdk_ver","msid","ct","os","appnm","app","category","utm"],$e=["val_bid","val_cid","lng","lat","val_lab","req_id","nm","val_ref","seq","tm"],Ge=[],Qe={},We="lx_cache_sf",Xe=500,ze=7,Ye=18e5,et=Date.now(),nt=1,rt=!1,it=Date.now(),ot=z,at=z,st=z,ct=z,ut=z,ft=void 0,lt=void 0,dt=void 0,vt={},ht={},pt=!0,gt=B.prototype;gt.init=function(e,t,n){var r=this,i=r._opts;if(!i.reportUrl){r._config=n=Y.extend(r._config||{},n),n.catMode&&k(e,n),i.reportUrl=e;var o=t.appnm,a=t.category;o||oe("没有设置应用标识（appnm） !"),a||(t.category=o),t.appnm=o,Z(),Y.each(t||{},function(e,t){if(!Y.isStr(t)||z===e)return i[t];r.set(t,e),i[t]=e})}},gt.setUTM=function(e){if(e){var t=this,n=e||{},r=n.query||{},i=n.referrerInfo||{},o=["utm_source","utm_medium","utm_term","utm_content","utm_campaign"],a={};if("clear"===n)return void T("utm");if(r&&Y.each(o,function(e){Y.isStr(r[e])&&(a[e]=r[e])}),i.extraData){var s=i.extraData;if(Y.isStr(s))try{s=JSON.parse(s)}catch(e){s={},C("index.js","lx-api-error",e.message,!0),oe(e.message)}Y.each(o,function(e){Y.isStr(s[e])&&(a[e]=s[e])})}Y.each(o,function(e){Y.isStr(n[e])&&(a[e]=n[e])}),a.utm_source||1037!=n.scene&&1038!=n.scene||n.referrerInfo&&n.referrerInfo.appId&&(a.utm_source=n.referrerInfo.appId,a.utm_medium="otherApp"),Object.keys(a).length>0?(t.set("utm",a),!ut&&a.utm_source?ut=a.utm_source:ut&&ut!==a.utm_source&&(Z(),ut=a.utm_source)):ae("没有设置utm(站外来源)!")}},gt.set=function(e,t){Y.isStr(e)&&0!==e.replace(/(^\s*)|(\s*$)/g,"").length&&M(e,t,q)},gt.get=function(e){return D(e)},gt.start=function(e){if(this._config.hasAs)ae("AS（应用启动）灵犀集成自动上报，请注释灵犀 start 接口调用！");else{e=Y.isObj(e)?e:z,it=Date.now(),dt=a(),ft=null,at=z;var t=H(se,dt,e);t.isauto=6,this.send(t)}},gt.quit=function(e){e=Y.isObj(e)?e:{};var t=Date.now()-it;e=Y.extend({duration:""+t},e),this._config.hasAq=!0;var n=H(ce,dt,e);n.isauto=6,this.send(n)},gt.pageView=function(e,t,n){t=Y.isObj(t)?t:{},this._config.query&&(t.custom?t.custom.__lxsdk_query=JSON.stringify(this._config.query):t.custom={__lxsdk_query:JSON.stringify(this._config.query)}),this._config.query="",ft||at?(!ft||at&&at!==e)&&(st=at,lt=ft,ft=a()):(pt||(st=e),ft=a()),this._config.hasPv=!0,n&&Y.isStr(n.category)?(this._config.defaultCategory=this._opts.category,this.set("category",n.category)):this._config.defaultCategory="",ot=Date.now(),at=e;var r=void 0;r=H(ue,ft,t),this.send(r),pt=!1},gt.pageDisappear=function(e,t){if(this._config.hasPv&&ft){if(e=Y.isObj(e)?e:{},ot){var n=Date.now()-ot;e=Y.extend({duration:""+n},e)}this._config.hasPd=!0;var r=H(fe,ft,e);t&&(r.isauto=6),this.send(r),ot=z,this._config.defaultCategory&&this.set("category",this._config.defaultCategory)}else ae("该页面没有上报PV(页面展示)事件，请确认!")},gt.moduleView=function(e,t){var n=H("MV",ft,t,e);this.send(n)},gt.systemCheck=function(e,t){var n=H("SC",ft,t,e);this.send(n)},gt.moduleClick=function(e,t,n){var r=H(le,ft,t,e,n);this.send(r)},gt.moduleEdit=function(e,t){var n=H(de,ft,t,e);this.send(n)},gt.order=function(e,t,n){n=Y.extend(n||{},{order_id:t});var r=H(ve,ft,n,e);this.send(r)},gt.pay=function(e,t,n){n=Y.extend(n||{},{order_id:t});var r=H(he,ft,n,e);this.send(r)},gt.send=function(e){var t=this._opts.reportUrl;t?"MVL"===e.nm?j(t,{mvlId:e.val_bid+e.req_id+D("category"),evs:e}):(this._config.quickReportOptions&&U(e),w(t,e)):oe("Must config reportUrl!")},gt.presetGeolocation=function(e,t){var n=parseFloat(e),r=parseFloat(t);return n&&(vt.lng=n),r&&(vt.lat=r),this},gt.resetGeolocation=function(e,t){var n=parseFloat(e),r=parseFloat(t);n&&(ht.lng=n),r&&(ht.lat=r)},gt.turnOnValidate=function(){var e=parseInt("10000000",36),t=parseInt("ZZZZZZZZ",36),n=parseInt(Math.random()*(t-e)+e).toString(36).toUpperCase();return M("_lx_validcode",n),n},gt.sendEvsAsycBefore=function(){var e={};return at&&(e.val_cid=at),st&&(e.val_ref=st),ft&&(e.req_id=ft),lt&&(e.refer_req_id=lt),e},gt.sendEvsAsycAfter=function(e,t){if(!Y.isObj(t)||!Y.isObj(e))return!1;var n=void 0;switch(""+t.nm.toUpperCase()){case"MC":n=H(le,ft,t.valLab,t.valBid,t.options,e);break;case"MV":n=H("MV",ft,t.valLab,t.valBid,z,e);break;case"ME":n=H(de,ft,t.valLab,t.valBid,z,e);break;case"BO":t.valLab=Y.extend(t.valLab||{},{order_id:t.orderId}),n=H(ve,ft,t.valLab,t.valBid,z,e);break;case"BP":t.valLab=Y.extend(t.valLab||{},{order_id:t.orderId}),n=H(he,ft,t.valLab,t.valBid,z,e);break;default:return}this.send(n)},gt.moduleViewList=function(e,t){if(e&&Y.isStr(e)){var n=H("MVL",ft,t,e);this.send(n)}},gt.appLifeCycleInterceptor=function(){var e=this;return function(t){return Re(e,t)}},gt.pageLifeCycleInterceptor=function(){var e=this;return function(t){return Ze(e,t)}},gt.overrideApp=function(e){return Je(this,e)},gt.overridePage=function(e){return Ke(this,e)},gt.setCanaryReleaseVersion=function(e){e&&this.set("canary_release",e+"")},gt.collectParamsToWeb=function(e){if(!0===e){var t=D("wxid")||"";return"s:"+D("msid")+";l:"+D("lxcuid")+";a:"+D("appnm")+";w:"+t}return"s:"+D("msid")+";l:"+D("lxcuid")+";a:"+D("appnm")},gt.updateQuickConfig=function(e){Y.isObj(e)&&(this._config.quickReportOptions=e||null,s("quickOptions",e||{}),P(this._config.quickReportOptions))};var mt=new B;module.exports=mt; 
 			}); 
		define("npm/@dp/adu_track/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){return(e||"").replace(new RegExp("(?:^|&)"+t+"=[^&=?]*","ig"),"")}function t(e){function t(d){if(!(d>5)){var o=decodeURIComponent(n.getStorageSync("openid")||n.getStorageSync("openId")||"");o?e(o):setTimeout(function(){t(d+1)},100)}}t(0)}function d(t,d,a,p){a=a||{};var u=(p=p||{}).env||o.PRODUCT,c=(p.ishttp||!1?"http:":"https:")+(i[u]||i[o.PRODUCT]),s="",m="";try{s=decodeURIComponent(n.getStorageSync("_lx_sdk_lxcuid")||""),m=decodeURIComponent(n.getStorageSync("unionid")||n.getStorageSync("unionId")||"")}catch(e){}var _=d._fb_;/(%253d|%253D|%3d|%3D)/.test(_)&&(_=decodeURIComponent(_)),/^(http|https)/.test(_)&&(_=decodeURIComponent(_)),_=e(_,"act"),_+="&act=4",a.openid?_=(_=e(_,"openid"))+"&openid="+a.openid:t&&(_=(_=e(_,"openid"))+"&openid="+t),s&&(_=(_=e(_,"_lxsdk_cuid"))+"&_lxsdk_cuid="+s),m&&(_=(_=e(_,"unionid"))+"&unionid="+m),!/adshop_id/.test(_)&&a.adshop_id&&(_=_+"&adshop_id="+a.adshop_id),"tuandetail"===a.pageName&&!/addeal_id/.test(_)&&a.addeal_id&&(_=_+"&addeal_id="+a.addeal_id),d.utm&&(_=(_=e(_,"utm"))+"&utm="+d.utm),d.utm_source&&(_=(_=e(_,"utm_source"))+"&utm_source="+d.utm_source),d.sub_media&&(_=(_=e(_,"sub_media"))+"&sub_media="+d.sub_media),n.request({url:c+"?"+_,data:{},header:{"content-type":"application/json"}})}var n=require("../../@mtfe/mt-weapp-api/dist/index.js").wx,o={BETA:"beta",PPE:"ppe",PRODUCT:"product"},i={};i[o.BETA]="//m.51ping.com/adp/log",i[o.PPE]="//m.51ping.com/adp/log",i[o.PRODUCT]="//m.dianping.com/adp/log",exports.init=function(e,n,o){e&&e._fb_&&(n&&n.openid?d(n.openid,e,n,o):t(function(t){d(t,e,n,o)}))}; 
 			}); 
		define("npm/@dp/logan-wxapp/build/wxlogan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=require("../../../@mtfe/mt-weapp-promise/index.js"),n=require("../../../@mtfe/mt-weapp-api/dist/index.js").wx;!function(e,n){"object"===("undefined"==typeof exports?"undefined":t(exports))&&"object"===("undefined"==typeof module?"undefined":t(module))?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"===("undefined"==typeof exports?"undefined":t(exports))?exports.Logan=n():e.Logan=n()}("undefined"!=typeof self?self:void 0,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=7)}([function(t,e,n){(function(e){var r,o=n(2),i=n(12),a=n(13),u=Array.prototype.slice,c={};r=void 0!==e&&e.console?e.console:"undefined"!=typeof window&&window.console?window.console:{};for(var s=[[function(){},"log"],[function(){r.log.apply(r,arguments)},"info"],[function(){r.log.apply(r,arguments)},"warn"],[function(){r.warn.apply(r,arguments)},"error"],[function(t){c[t]=a()},"time"],[function(t){var e=c[t];if(!e)throw new Error("No such label: "+t);var n=a()-e;r.log(t+": "+n+"ms")},"timeEnd"],[function(){var t=new Error;t.name="Trace",t.message=o.format.apply(null,arguments),r.error(t.stack)},"trace"],[function(t){r.log(o.inspect(t)+"\n")},"dir"],[function(t){if(!t){var e=u.call(arguments,1);i.ok(!1,o.format.apply(null,e))}},"assert"]],f=0;f<s.length;f++){var l=s[f],d=l[0],p=l[1];r[p]||(r[p]=d)}t.exports=r}).call(e,n(1))},function(e,n){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":t(window))&&(r=window)}e.exports=r},function(e,n,r){(function(e,o,i){function a(t,e){var r={seen:[],stylize:c};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),v(e)?r.showHidden=e:e&&n._extend(r,e),b(r.showHidden)&&(r.showHidden=!1),b(r.depth)&&(r.depth=2),b(r.colors)&&(r.colors=!1),b(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),f(r,t,r.depth)}function u(t,e){var n=a.styles[e];return n?"["+a.colors[n][0]+"m"+t+"["+a.colors[n][1]+"m":t}function c(t,e){return t}function s(t){var e={};return t.forEach(function(t,n){e[t]=!0}),e}function f(t,e,r){if(t.customInspect&&e&&T(e.inspect)&&e.inspect!==n.inspect&&(!e.constructor||e.constructor.prototype!==e)){var o=e.inspect(r,t);return w(o)||(o=f(t,o,r)),o}var i=l(t,e);if(i)return i;var a=Object.keys(e),u=s(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(e)),x(e)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return d(e);if(0===a.length){if(T(e)){var c=e.name?": "+e.name:"";return t.stylize("[Function"+c+"]","special")}if(_(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp");if(E(e))return t.stylize(Date.prototype.toString.call(e),"date");if(x(e))return d(e)}var v="",m=!1,S=["{","}"];if(y(e)&&(m=!0,S=["[","]"]),T(e)&&(v=" [Function"+(e.name?": "+e.name:"")+"]"),_(e)&&(v=" "+RegExp.prototype.toString.call(e)),E(e)&&(v=" "+Date.prototype.toUTCString.call(e)),x(e)&&(v=" "+d(e)),0===a.length&&(!m||0==e.length))return S[0]+v+S[1];if(r<0)return _(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special");t.seen.push(e);var b;return b=m?p(t,e,r,u,a):a.map(function(n){return g(t,e,r,u,n,m)}),t.seen.pop(),h(b,v,S)}function l(t,e){if(b(e))return t.stylize("undefined","undefined");if(w(e)){var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string")}return S(e)?t.stylize(""+e,"number"):v(e)?t.stylize(""+e,"boolean"):m(e)?t.stylize("null","null"):void 0}function d(t){return"["+Error.prototype.toString.call(t)+"]"}function p(t,e,n,r,o){for(var i=[],a=0,u=e.length;a<u;++a)k(e,String(a))?i.push(g(t,e,n,r,String(a),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(g(t,e,n,r,o,!0))}),i}function g(t,e,n,r,o,i){var a,u,c;if((c=Object.getOwnPropertyDescriptor(e,o)||{value:e[o]}).get?u=c.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):c.set&&(u=t.stylize("[Setter]","special")),k(r,o)||(a="["+o+"]"),u||(t.seen.indexOf(c.value)<0?(u=m(n)?f(t,c.value,null):f(t,c.value,n-1)).indexOf("\n")>-1&&(u=i?u.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+u.split("\n").map(function(t){return"   "+t}).join("\n")):u=t.stylize("[Circular]","special")),b(a)){if(i&&o.match(/^\d+$/))return u;(a=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+u}function h(t,e,n){var r=0;return t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function y(t){return Array.isArray(t)}function v(t){return"boolean"==typeof t}function m(t){return null===t}function S(t){return"number"==typeof t}function w(t){return"string"==typeof t}function b(t){return void 0===t}function _(t){return O(t)&&"[object RegExp]"===R(t)}function O(e){return"object"===(void 0===e?"undefined":t(e))&&null!==e}function E(t){return O(t)&&"[object Date]"===R(t)}function x(t){return O(t)&&("[object Error]"===R(t)||t instanceof Error)}function T(t){return"function"==typeof t}function R(t){return Object.prototype.toString.call(t)}function A(t){return t<10?"0"+t.toString(10):t.toString(10)}function j(){var t=new Date,e=[A(t.getHours()),A(t.getMinutes()),A(t.getSeconds())].join(":");return[t.getDate(),I[t.getMonth()],e].join(" ")}function k(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var D=/%[sdj%]/g;n.format=function(t){if(!w(t)){for(var e=[],n=0;n<arguments.length;n++)e.push(a(arguments[n]));return e.join(" ")}for(var n=1,r=arguments,o=r.length,i=String(t).replace(D,function(t){if("%%"===t)return"%";if(n>=o)return t;switch(t){case"%s":return String(r[n++]);case"%d":return Number(r[n++]);case"%j":try{return JSON.stringify(r[n++])}catch(t){return"[Circular]"}default:return t}}),u=r[n];n<o;u=r[++n])m(u)||!O(u)?i+=" "+u:i+=" "+a(u);return i},n.deprecate=function(t,r){if(b(e.process))return function(){return n.deprecate(t,r).apply(this,arguments)};if(!0===o.noDeprecation)return t;var a=!1;return function(){if(!a){if(o.throwDeprecation)throw new Error(r);o.traceDeprecation?i.trace(r):i.error(r),a=!0}return t.apply(this,arguments)}};var M,z={};n.debuglog=function(t){if(b(M)&&(M=""),t=t.toUpperCase(),!z[t])if(new RegExp("\\b"+t+"\\b","i").test(M)){var e=o.pid;z[t]=function(){var r=n.format.apply(n,arguments);i.error("%s %d: %s",t,e,r)}}else z[t]=function(){};return z[t]},n.inspect=a,a.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},a.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},n.isArray=y,n.isBoolean=v,n.isNull=m,n.isNullOrUndefined=function(t){return null==t},n.isNumber=S,n.isString=w,n.isSymbol=function(e){return"symbol"===(void 0===e?"undefined":t(e))},n.isUndefined=b,n.isRegExp=_,n.isObject=O,n.isDate=E,n.isError=x,n.isFunction=T,n.isPrimitive=function(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"===(void 0===e?"undefined":t(e))||void 0===e},n.isBuffer=r(10);var I=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];n.log=function(){i.log("%s - %s",j(),n.format.apply(n,arguments))},n.inherits=r(11),n._extend=function(t,e){if(!e||!O(e))return t;for(var n=Object.keys(e),r=n.length;r--;)t[n[r]]=e[n[r]];return t}}).call(n,r(1),r(9),r(0))},function(t,e,n){!function(n,r){t.exports=e=r()}(0,function(){var t=t||function(t,e){var n=Object.create||function(){function t(){}return function(e){var n;return t.prototype=e,n=new t,t.prototype=null,n}}(),r={},o=r.lib={},i=o.Base={extend:function(t){var e=n(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},a=o.WordArray=i.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=void 0!=e?e:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,n=t.words,r=this.sigBytes,o=t.sigBytes;if(this.clamp(),r%4)for(a=0;a<o;a++){var i=n[a>>>2]>>>24-a%4*8&255;e[r+a>>>2]|=i<<24-(r+a)%4*8}else for(var a=0;a<o;a+=4)e[r+a>>>2]=n[a>>>2];return this.sigBytes+=o,this},clamp:function(){var e=this.words,n=this.sigBytes;e[n>>>2]&=4294967295<<32-n%4*8,e.length=t.ceil(n/4)},clone:function(){var t=i.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var n,r=[],o=0;o<e;o+=4){var i=function(e){var e=e,n=987654321,r=4294967295;return function(){var o=((n=36969*(65535&n)+(n>>16)&r)<<16)+(e=18e3*(65535&e)+(e>>16)&r)&r;return o/=4294967296,(o+=.5)*(t.random()>.5?1:-1)}}(4294967296*(n||t.random()));n=987654071*i(),r.push(4294967296*i()|0)}return new a.init(r,e)}}),u=r.enc={},c=u.Hex={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r+=2)n[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new a.init(n,e/2)}},s=u.Latin1={stringify:function(t){for(var e=t.words,n=t.sigBytes,r=[],o=0;o<n;o++){var i=e[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},parse:function(t){for(var e=t.length,n=[],r=0;r<e;r++)n[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new a.init(n,e)}},f=u.Utf8={stringify:function(t){try{return decodeURIComponent(escape(s.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return s.parse(unescape(encodeURIComponent(t)))}},l=o.BufferedBlockAlgorithm=i.extend({reset:function(){this._data=new a.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var n=this._data,r=n.words,o=n.sigBytes,i=this.blockSize,u=o/(4*i),c=(u=e?t.ceil(u):t.max((0|u)-this._minBufferSize,0))*i,s=t.min(4*c,o);if(c){for(var f=0;f<c;f+=i)this._doProcessBlock(r,f);var l=r.splice(0,c);n.sigBytes-=s}return new a.init(l,s)},clone:function(){var t=i.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),d=(o.Hasher=l.extend({cfg:i.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){l.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,n){return new t.init(n).finalize(e)}},_createHmacHelper:function(t){return function(e,n){return new d.HMAC.init(t,n).finalize(e)}}}),r.algo={});return r}(Math);return t})},function(t,r,o){Object.defineProperty(r,"__esModule",{value:!0}),r.default={send:function(t,r,o){return new e(function(e,i){n.request({url:""+t,data:r,method:o||"GET",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e&&e(t)},fail:function(t){i(t)}})})}}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t,e){return{code:t,msg:e}};e.default={SAVE_SUCC:r(200,"存储成功"),SAVE_LOG_FAIL:r(201,"存储日志失败"),EXCEED_DAY_LIMIT:r(302,"超出当天日志容量限额"),REPORT_SUCC:r(400,"上报成功"),REPORT_AJAX_ERROR:r(402,"上报接口失败"),REPORT_SERVER_ERROR:r(403,"上报服务端有错"),REPORT_UNKNOWN_ERROR:r(404,"上报未知错误"),UNKNOWN_ERROR:r(666,"未知错误")}},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r={enableShake:!1,appSource:"",devMode:!1,customReport:{}};e.default={set:function(t){var e=t||{};void 0!==e.enableShake&&(r.enableShake=Boolean(e.enableShake)),void 0!==e.appSource&&(r.appSource=e.appSource),void 0!==e.devMode&&(r.devMode=Boolean(e.devMode)),void 0!==e.customReport&&(r.customReport=e.customReport)},get:function(){return r}}},function(t,e,n){t.exports=n(8)},function(t,r,o){(function(r){function i(t){return t&&t.__esModule?t:{default:t}}function a(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var u,c=i(o(14)),s=i(o(17)),f=i(o(18)),l=i(o(4)),d=i(o(19)),p=i(o(20)),g=i(o(21)),h=i(o(5)),y=i(o(6)),v={default:14,owl:15,redux:16},m=1*s.default.M_BYTE,S=1*s.default.M_BYTE,w=[],b=!1,_=!1,O=function(t,e,n){return["loganlog",d.default.stringify(t),e,n].join("_")},E=function(t){var e=t.split("_");if("loganlog"==e[0])return{date:new Date(e[1]),version:parseInt(e[2]),pageNo:parseInt(e[3])};throw new Error("loganlog key parse error! key is not correct:"+t)},x=function(t){return t.getTime()<d.default.getOffsetDayTime(new Date,-1)},T=function(t,e,n){r.log(t+": "+(e.errMsg||e.message||e.stack||e.toString()||"")),"function"==typeof n&&n()},R=function(){return new e(function(t,e){f.default.getStorageInfo().then(function(t){t.keys.filter(function(t){return t.indexOf("loganlog")>=0&&x(E(t).date)}).map(function(t){f.default.remove(t).catch(function(){})})}).catch(t),f.default.get("logan_days_info").then(function(e){var n=Object.keys(e.data).reduce(function(t,n){return x(new Date(n))||(t[n]=Object.assign({},e.data[n])),t},{});f.default.set("logan_days_info",n).then(t).catch(t)}).catch(t)})},A=function(){return new e(function(t,e){f.default.getStorageInfo().then(function(n){n.keys.indexOf("logan_days_info")<0?f.default.set("logan_days_info",{}).then(function(){t()}).catch(e):t()}).catch(e)})},j=function(t){return new e(function(e,n){var r=k(t);f.default.get("logan_days_info").then(function(t){((t.data[d.default.stringify(new Date)]||{}).totalSize||0)+r.logSize>S?(g.default.saveLogFail(h.default.EXCEED_DAY_LIMIT),n(new Error("单天日志总大小将超过"+s.default.readableByte(S)+"，无法继续写入"))):f.default.getStorageInfo().then(function(t){var o=t.keys.filter(function(t){return t.indexOf("loganlog")>=0&&d.default.isToday(E(t).date)&&1===E(t).version}).reduce(function(t,e){return e>t?e:t},"");o?f.default.get(o).then(function(t){var i=t.data,u=t.data.totalSize||0;u+r.logSize>m?f.default.set(O(new Date,1,E(o).pageNo+1),{totalSize:r.logSize,logStringArray:[r]}).then(function(){e(r.logSize)}).catch(n):f.default.set(o,{totalSize:u+r.logSize,logStringArray:[].concat(a(i.logStringArray),[r])}).then(function(){e(r.logSize)}).catch(n)}).catch(function(t){f.default.set(O(new Date,1,E(o).pageNo+1),{totalSize:r.logSize,logStringArray:[r]}).then(function(){e(r.logSize)}).catch(n)}):f.default.set(O(new Date,1,0),{totalSize:r.logSize,logStringArray:[r]}).then(function(){e(r.logSize)}).catch(n)}).catch(n)}).catch(n)})},k=function(t){var e={f:""+(v[t.logType]||v.default),c:""+encodeURIComponent(t.logString),d:""+Date.now(),l:""+Date.now(),m:"true",s:""+u},n=JSON.stringify(e)+"\n";try{n=c.default.changeToBase64(n)}catch(t){throw new Error("changeToBase64 error!")}var r=JSON.stringify({log:n});return{logString:r,logSize:s.default.sizeOf(r)}},D=function t(){var e=function(){b=!1,t()};if(w.length>0&&!b){b=!0;var n=w.shift();A().then(function(){j(n).then(function(t){g.default.saveLogSucc(),f.default.get("logan_days_info").then(function(n){var r=n.data,o=r[d.default.stringify(new Date)]||{},i=Object.assign(o,{totalSize:(o.totalSize||0)+t}),a={};a[d.default.stringify(new Date)]=i;var u=Object.assign(r,a);f.default.set("logan_days_info",u).then(function(){e()}).catch(function(t){T("set DaysInfo failed after insert loganlog, may result in capacity overflow: ",t,e)})}).catch(function(t){T("get DaysInfo failed after insert loganlog, may result in capacity overflow: ",t,e)})}).catch(function(t){g.default.saveLogFail(h.default.SAVE_LOG_FAIL,"err: "+(t.errMsg||t.message||t.stack||t.toString()||"")),T("updateLoganLog failed: ",t,e)})}).catch(function(t){g.default.saveLogFail(h.default.SAVE_LOG_FAIL,"initLoganDaysInfoWhenNotFound failed err: "+(t.errMsg||t.message||t.stack||t.toString()||"")),T("initLoganDaysInfoWhenNotFound failed: ",t,e)})}},M=function t(e,o){var i=function(t){"function"==typeof e.errorHandler&&e.errorHandler(t),_=!1},a=function(t,e){if(!e)return!0;var n=E(t),r=E(e);return d.default.stringify(n.date)!==d.default.stringify(r.date)||n.version!==r.version};if(o.length>0){var u=o.shift(),c=o.length>0?o[0]:null;f.default.get(u).then(function(s){var f=s.data.logStringArray.reduce(function(t,e){var n=JSON.parse(e.logString);return t.logArray.push(n.log),t},{logArray:[]}),p=E(u),v=p.version,m=d.default.stringify(p.date),S=p.pageNo,w="";try{var b=n.getSystemInfoSync();w=JSON.stringify({version:b.version||"",system:b.system||"",model:b.model||"",platform:b.platform||"",sdkVersion:b.SDKVersion||""})}catch(t){r.log("getSystemInfoSync error",t)}var _=a(u,c),O=Date.now(),x=("string"==typeof e.customReport?e.customReport:JSON.stringify(e.customReport||{})).substring(0,1024);l.default.send(y.default.get().devMode?"http://logan.plat.test.sankuai.com/logger/webLogUpload.json":"https://logan.sankuai.com/logger/webLogUpload.json",{webSource:y.default.get().appSource||"unknown",unionId:e.unionId||"unknown",environment:w,version:v,fileDate:m,logArray:f.logArray,ivArray:f.ivArray,logPageNo:S+1,logPageEnd:_,client:"wxapp",unencrypted:!0,uploadSource:e.uploadSource||"userToast",customReportInfo:x},"POST").then(function(n){var a=Date.now()-O;n.data&&200===n.data.code?(_&&g.default.reportLogSucc(a),r.log("send succ! key: "+u),t(e,o)):(g.default.reportLogFail(h.default.REPORT_SERVER_ERROR,"serverCode: "+(n.data&&n.data.code),a),T("send failed!","code:"+(n.data&&n.data.code||"unknown"),function(){i("问题反馈失败，错误代码:"+(n.data&&n.data.code||0))}))}).catch(function(t){var e=Date.now()-O;g.default.reportLogFail(h.default.REPORT_AJAX_ERROR,"err: "+(t.errMsg||t.message||t.stack||t.toString()||""),e),T("send failed!",t,function(){i("网络请求错误，问题反馈失败，请稍后再试")})})}).catch(function(t){g.default.reportLogFail(h.default.REPORT_UNKNOWN_ERROR,"err: "+(t.errMsg||t.message||t.stack||t.toString()||""),0),T("获取日志"+u+"失败",t,function(){i("获取"+u+"日志失败了")})})}else"function"==typeof e.succHandler&&e.succHandler(),_=!1},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_?r.log("日志还在上报过程中..."):(_=!0,f.default.getStorageInfo().then(function(e){var n=e.keys.filter(function(t){return t.indexOf("loganlog")>=0});n.length>0?(n.sort(function(t,e){return t<e?-1:1}),M(t,n)):T("日志为空","",function(){"function"==typeof t.errorHandler&&t.errorHandler("没有相关日志需要上报~"),_=!1})}).catch(function(e){T("Get StorageInfo before report failed",e,function(){"function"==typeof t.errorHandler&&t.errorHandler("获取存储信息失败了T^T，请稍后再试~"),_=!1})}))},I=function(){var t="",e=y.default.get().customReport;e&&e.unionId?t=e.biz?e.biz+"|"+e.unionId:e.unionId:f.default.getSync("token")?t="token|"+f.default.getSync("token"):f.default.getSync("openid")?t="openid|"+f.default.getSync("openid"):f.default.getSync("openId")?t="openId|"+f.default.getSync("openId"):f.default.getSync("_lx_sdk_lxcuid")&&(t="lxcuid|"+f.default.getSync("_lx_sdk_lxcuid")),t=t.substring(0,256);var o=function(t,e){n.showModal({confirmText:"继续反馈",cancelText:"取消",title:y.default.get().devMode?"dev模式问题反馈":"问题反馈",content:e?"点击继续反馈，将上传当前小程序日志作为反馈问题的参考":"建议在 Wi-Fi 环境下点击继续反馈，将上传当前小程序日志作为反馈问题的参考",success:function(e){if(e.confirm){n.showLoading({title:"问题正在反馈..",mask:!1});var o=setTimeout(function(){T("反馈超时，","",function(){n.showToast({title:"反馈超时了，请稍后再试试",icon:"none",duration:2e3}),_=!1}),o=null},2e4);z({customReport:y.default.get().customReport,unionId:t,succHandler:function(){clearTimeout(o),n.hideLoading(),t?n.showModal({title:"提示",confirmText:"复制",cancelText:"关闭",content:"问题反馈成功！您的反馈号码为："+t+"，点击复制后该号会存入剪贴板，您可粘贴提供给客服或相关技术人员。感谢您的反馈。",success:function(e){e.confirm?n.setClipboardData({data:t,success:function(t){n.showToast({title:"Id复制成功!",icon:"success",duration:2e3})}}):e.cancel&&r.log("用户点击取消")}}):n.showToast({title:"感谢您的反馈！",icon:"success",duration:2e3})},errorHandler:function(t){clearTimeout(o),n.hideLoading(),n.showToast({title:t||"反馈出错了T^T，请稍后再试试",icon:"none",duration:2e3})}})}else e.cancel&&r.log("用户点击取消反馈")}})};y.default.get().enableShake&&n.getNetworkType({success:function(e){o(t,e.networkType&&"wifi"===e.networkType)},fail:function(){o(t,!1)}})};u=f.default.setSync("logan_session_token",s.default.generateRandomBytes(20)),new p.default({threshold:2,timeout:2e3,shakeHandler:I}).start();var B={config:function(t){return y.default.set(t),B},log:function(t,e){var n=s.default.sizeOf(t||"");n<=0?r.log("日志内容为空"):n>=m?r.log("日志内容超过单条容量限制："+s.default.readableByte(m)+",无法写入"):(y.default.get().devMode&&r.log("[log in Logan][logType: "+(e||"default")+"]: "+t),w.push({logString:t,logType:e||"default"}),R().then(D).catch(function(){}))},report:z};t.exports=B}).call(r,o(0))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(l===clearTimeout)return clearTimeout(t);if((l===r||!l)&&clearTimeout)return l=clearTimeout,clearTimeout(t);try{return l(t)}catch(e){try{return l.call(null,t)}catch(e){return l.call(this,t)}}}function a(){h&&p&&(h=!1,p.length?g=p.concat(g):y=-1,g.length&&u())}function u(){if(!h){var t=o(a);h=!0;for(var e=g.length;e;){for(p=g,g=[];++y<e;)p&&p[y].run();y=-1,e=g.length}p=null,h=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function s(){}var f,l,d=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{l="function"==typeof clearTimeout?clearTimeout:r}catch(t){l=r}}();var p,g=[],h=!1,y=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];g.push(new c(t,e)),1!==g.length||h||o(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,n){e.exports=function(e){return e&&"object"===(void 0===e?"undefined":t(e))&&"function"==typeof e.copy&&"function"==typeof e.fill&&"function"==typeof e.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(e,n,r){(function(n){function o(t,e){if(t===e)return 0;for(var n=t.length,r=e.length,o=0,i=Math.min(n,r);o<i;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0}function i(t){return n.Buffer&&"function"==typeof n.Buffer.isBuffer?n.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}function a(t){return Object.prototype.toString.call(t)}function u(t){return!i(t)&&("function"==typeof n.ArrayBuffer&&("function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}function c(t){if(b.isFunction(t)){if(E)return t.name;var e=t.toString().match(T);return e&&e[1]}}function s(t,e){return"string"==typeof t?t.length<e?t:t.slice(0,e):t}function f(t){if(E||!b.isFunction(t))return b.inspect(t);var e=c(t);return"[Function"+(e?": "+e:"")+"]"}function l(t){return s(f(t.actual),128)+" "+t.operator+" "+s(f(t.expected),128)}function d(t,e,n,r,o){throw new x.AssertionError({message:n,actual:t,expected:e,operator:r,stackStartFunction:o})}function p(t,e){t||d(t,!0,e,"==",x.ok)}function g(e,n,r,c){if(e===n)return!0;if(i(e)&&i(n))return 0===o(e,n);if(b.isDate(e)&&b.isDate(n))return e.getTime()===n.getTime();if(b.isRegExp(e)&&b.isRegExp(n))return e.source===n.source&&e.global===n.global&&e.multiline===n.multiline&&e.lastIndex===n.lastIndex&&e.ignoreCase===n.ignoreCase;if(null!==e&&"object"===(void 0===e?"undefined":t(e))||null!==n&&"object"===(void 0===n?"undefined":t(n))){if(u(e)&&u(n)&&a(e)===a(n)&&!(e instanceof Float32Array||e instanceof Float64Array))return 0===o(new Uint8Array(e.buffer),new Uint8Array(n.buffer));if(i(e)!==i(n))return!1;var s=(c=c||{actual:[],expected:[]}).actual.indexOf(e);return-1!==s&&s===c.expected.indexOf(n)||(c.actual.push(e),c.expected.push(n),y(e,n,r,c))}return r?e===n:e==n}function h(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function y(t,e,n,r){if(null===t||void 0===t||null===e||void 0===e)return!1;if(b.isPrimitive(t)||b.isPrimitive(e))return t===e;if(n&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var o=h(t),i=h(e);if(o&&!i||!o&&i)return!1;if(o)return t=O.call(t),e=O.call(e),g(t,e,n);var a,u,c=R(t),s=R(e);if(c.length!==s.length)return!1;for(c.sort(),s.sort(),u=c.length-1;u>=0;u--)if(c[u]!==s[u])return!1;for(u=c.length-1;u>=0;u--)if(a=c[u],!g(t[a],e[a],n,r))return!1;return!0}function v(t,e,n){g(t,e,!0)&&d(t,e,n,"notDeepStrictEqual",v)}function m(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(t){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function S(t){var e;try{t()}catch(t){e=t}return e}function w(t,e,n,r){var o;if("function"!=typeof e)throw new TypeError('"block" argument must be a function');"string"==typeof n&&(r=n,n=null),o=S(e),r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:"."),t&&!o&&d(o,n,"Missing expected exception"+r);var i="string"==typeof r,a=!t&&b.isError(o),u=!t&&o&&!n;if((a&&i&&m(o,n)||u)&&d(o,n,"Got unwanted exception"+r),t&&o&&n&&!m(o,n)||!t&&o)throw o}var b=r(2),_=Object.prototype.hasOwnProperty,O=Array.prototype.slice,E="foo"===function(){}.name,x=e.exports=p,T=/\s*function\s+([^\(\s]*)\s*/;x.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=l(this),this.generatedMessage=!0);var e=t.stackStartFunction||d;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var n=new Error;if(n.stack){var r=n.stack,o=c(e),i=r.indexOf("\n"+o);if(i>=0){var a=r.indexOf("\n",i+1);r=r.substring(a+1)}this.stack=r}}},b.inherits(x.AssertionError,Error),x.fail=d,x.ok=p,x.equal=function(t,e,n){t!=e&&d(t,e,n,"==",x.equal)},x.notEqual=function(t,e,n){t==e&&d(t,e,n,"!=",x.notEqual)},x.deepEqual=function(t,e,n){g(t,e,!1)||d(t,e,n,"deepEqual",x.deepEqual)},x.deepStrictEqual=function(t,e,n){g(t,e,!0)||d(t,e,n,"deepStrictEqual",x.deepStrictEqual)},x.notDeepEqual=function(t,e,n){g(t,e,!1)&&d(t,e,n,"notDeepEqual",x.notDeepEqual)},x.notDeepStrictEqual=v,x.strictEqual=function(t,e,n){t!==e&&d(t,e,n,"===",x.strictEqual)},x.notStrictEqual=function(t,e,n){t===e&&d(t,e,n,"!==",x.notStrictEqual)},x.throws=function(t,e,n){w(!0,t,e,n)},x.doesNotThrow=function(t,e,n){w(!1,t,e,n)},x.ifError=function(t){if(t)throw t};var R=Object.keys||function(t){var e=[];for(var n in t)_.call(t,n)&&e.push(n);return e}}).call(n,r(1))},function(t,e){t.exports=function(){return(new Date).getTime()}},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(15)),i=r(n(16));e.default={changeToBase64:function(t){return o.default.parse(t).toString(i.default)}}},function(t,e,n){!function(r,o){t.exports=e=o(n(3))}(0,function(t){return t.enc.Utf8})},function(t,e,n){!function(r,o){t.exports=e=o(n(3))}(0,function(t){return function(){function e(t,e,n){for(var o=[],i=0,a=0;a<e;a++)if(a%4){var u=n[t.charCodeAt(a-1)]<<a%4*2,c=n[t.charCodeAt(a)]>>>6-a%4*2;o[i>>>2]|=(u|c)<<24-i%4*8,i++}return r.create(o,i)}var n=t,r=n.lib.WordArray;n.enc.Base64={stringify:function(t){var e=t.words,n=t.sigBytes,r=this._map;t.clamp();for(var o=[],i=0;i<n;i+=3)for(var a=(e[i>>>2]>>>24-i%4*8&255)<<16|(e[i+1>>>2]>>>24-(i+1)%4*8&255)<<8|e[i+2>>>2]>>>24-(i+2)%4*8&255,u=0;u<4&&i+.75*u<n;u++)o.push(r.charAt(a>>>6*(3-u)&63));var c=r.charAt(64);if(c)for(;o.length%4;)o.push(c);return o.join("")},parse:function(t){var n=t.length,r=this._map,o=this._reverseMap;if(!o){o=this._reverseMap=[];for(var i=0;i<r.length;i++)o[r.charCodeAt(i)]=i}var a=r.charAt(64);if(a){var u=t.indexOf(a);-1!==u&&(n=u)}return e(t,n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64})},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=1024,o=1048576,i=1073741824;e.default={sizeOf:function(t,e){var n,r,o,i=0;if("utf-16"===(e=e?e.toLowerCase():"")||"utf16"===e)for(r=0,o=t.length;r<o;r++)i+=(n=t.charCodeAt(r))<=65535?2:4;else for(r=0,o=t.length;r<o;r++)i+=(n=t.charCodeAt(r))<=127?1:n<=2047?2:n<=65535?3:4;return i},readableByte:function(t,e){return e=e||0,t>=i?(t/i).toFixed(e)+"G":t>=o?(t/o).toFixed(e)+"M":t>=r?(t/r).toFixed(e)+"K":(t||0)+"B"},K_BYTE:r,M_BYTE:o,G_BYTE:i,generateRandomBytes:function(t){for(var e="",n=parseInt(t/8)+1,r=0;r<n;r++){var o=r===n-1?t%8:8;e+=Math.random().toString(36).substr(2,o)}return e}}},function(t,r,o){(function(t){Object.defineProperty(r,"__esModule",{value:!0});var o=function(t){return new e(function(e,n){t(function(t){e(t)},function(t){n(t)})})};r.default={set:function(t,e){return o(function(r,o){n.setStorage({key:t,data:e,success:r,fail:o})})},setSync:function(e,r){try{return n.setStorageSync(e,r),r}catch(n){return t.log("setSync by key: "+e+" failed, "+(n.errMsg||n.message||n.toString())),""}},get:function(t){return o(function(e,r){n.getStorage({key:t,success:e,fail:r})})},getSync:function(e){try{return n.getStorageSync(e)}catch(n){return t.log("getSync by key: "+e+" failed, "+n.errMsg),""}},remove:function(t){return o(function(e,r){n.removeStorage({key:t,success:e,fail:r})})},getStorageInfo:function(){return o(function(t,e){n.getStorageInfo({success:t,fail:e})})}}}).call(r,o(0))},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){if("Invalid Date"==t)throw new Error("Invalid Date");return!0},o=function(t){return r(t),new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()},i=function(t,e){return r(t),o(new Date(t.getTime()+864e5*e))};e.default={ONE_DAY_TIME_SPAN:864e5,checkDate:r,stringify:function(t){return r(t),t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())},getDawnTime:o,isToday:function(t){r(t);var e=o(new Date);return t.getTime()>=e&&t.getTime()<i(new Date,1)},getOffsetDayTime:i,dayTimeWithinRange:function(t,e,n){return t<=n&&t>=e}}},function(e,r,o){(function(e){function o(t){if(this.hasDeviceMotion=n.onAccelerometerChange,this.options={threshold:3,timeout:2e3,shakeHandler:function(){e.log("shaked!")}},"object"===(void 0===t?"undefined":i(t)))for(var r in t)t.hasOwnProperty(r)&&(this.options[r]=t[r]);this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null}Object.defineProperty(r,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)};o.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},o.prototype.start=function(){var t=this;this.reset(),this.hasDeviceMotion&&(n.startAccelerometer&&n.startAccelerometer(),n.onAccelerometerChange(function(e){t.devicemotion(e)}))},o.prototype.stop=function(){this.hasDeviceMotion&&n.stopAccelerometer&&n.stopAccelerometer(),this.reset()},o.prototype.devicemotion=function(t){var e=t,n=0,r=0,o=0;if(null===this.lastX&&null===this.lastY&&null===this.lastZ)return this.lastX=e.x,this.lastY=e.y,void(this.lastZ=e.z);n=Math.abs(this.lastX-e.x),r=Math.abs(this.lastY-e.y),o=Math.abs(this.lastZ-e.z),(n>this.options.threshold&&r>this.options.threshold||n>this.options.threshold&&o>this.options.threshold||r>this.options.threshold&&o>this.options.threshold)&&(new Date).getTime()-this.lastTime.getTime()>this.options.timeout&&("function"==typeof this.options.shakeHandler&&this.options.shakeHandler(),this.lastTime=new Date),this.lastX=e.x,this.lastY=e.y,this.lastZ=e.z},r.default=o}).call(r,o(0))},function(t,e,n){function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=r(n(4)),i=r(n(5)),a=r(n(6)),u=["resourceUrl","timestamp","requestbyte","responsebyte","responsetime","project","pageUrl","statusCode","firstCategory","secondCategory","logContent"],c=!1,s=!1,f=function(t){var e=[],n=u.map(function(e){return t[e]});return e.push("S\t"),e.push(n.join("\t")),e=e.join("\n")},l=function(t,e,n,r){var i={resourceUrl:t,timestamp:Date.now(),requestbyte:0,responsebyte:0,responsetime:r||0,project:"logan-wxapp",pageUrl:a.default.get().appSource||"",statusCode:"|"+e,firstCategory:null===n?"":"ajaxError",secondCategory:null===n?"":t,logContent:n||""};o.default.send(a.default.get().devMode?"https://catfront.51ping.com/api/batch?v=1&sdk=1.7.8":"https://catfront.dianping.com/api/batch?v=1&sdk=1.7.8","c="+encodeURIComponent(f(i)),"POST").then(function(){}).catch(function(){})};e.default={saveLogSucc:function(){c||(c=!0,s=!1,l(i.default.SAVE_SUCC.msg,i.default.SAVE_SUCC.code,null,0))},saveLogFail:function(t,e){s||(s=!0,c=!1,l(t&&t.msg||i.default.UNKNOWN_ERROR.msg,t&&t.code||i.default.UNKNOWN_ERROR.code,e||"",0))},reportLogSucc:function(t){l(i.default.REPORT_SUCC.msg,i.default.REPORT_SUCC.code,null,t||0)},reportLogFail:function(t,e,n){l(t&&t.msg||i.default.REPORT_UNKNOWN_ERROR.msg,t&&t.code||i.default.REPORT_UNKNOWN_ERROR.code,e||"",n||0)}}}])}); 
 			}); 
		define("npm/@dp/owl-wxapp/es6/app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(o,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:App,n=r.onLaunch,c=r.onError,e=r.onHide,a=r.onPageNotFound,l=o.pageSpeed,u=o.error,h=o.resource;r.onLaunch=function(o){try{var r=Date.now();l.appLaunch(r,o.path)}catch(o){console.log("onLaunch error:"+o.stack||o)}n.call(this,o)},r.onError=function(o){try{o=r.preError?r.preError(o):o,u.onError(o)}catch(o){console.log("onError catch:"+o.stack||o)}c&&c.call(this,o)},r.onHide=function(){try{u.report(),h.report()}catch(o){console.log("onHide catch:"+o.stack||o)}e&&e.call(this)},r.onPageNotFound=function(o){try{o&&(o=r.preNotFound?r.preNotFound(o):o,u.addError("page not found",o.path))}catch(o){console.log("onPageNotFound catch:"+o.stack||o)}a&&a.call(this)},t(r)}; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/config.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}(),i=require("./constant/index"),o=require("./util/util"),r="https://catfront.dianping.com",s=["region","operator","network","container","os","unionId"],a=function(){function a(n){if(e(this,a),this._config={devMode:!1,project:"",pageUrl:"",resource:{sample:.1,errSample:.2},page:{sample:.5},error:{sample:1,maxSize:10240,maxNum:100,maxTime:6e4},version:{},logan:{enable:!1},hasRecordApp:!1},this.config={},this.userConfig={},this.url=r,n?this.set(n):this.config=this._config,this.baseQuery={v:1,sdk:i.VERSION},this.apiPaths={log:"/api/log",error:"/api/log",page:"/api/speed",resource:"/batch",metric:"/api/metric"},this.extensions={},!n.unionId){var t=wx.getStorageSync(i.STOREKEY+"-unionId");t?this.config.unionId=t:(this.config.unionId=(0,o.MSID)(),this.cacheUnionId(this.config.unionId))}}return t(a,[{key:"_update",value:function(){this.config=this._config;try{for(var e in this.userConfig){var t=this.userConfig[e];"object"!==(void 0===t?"undefined":n(t))||t instanceof RegExp||t instanceof Array?this.config[e]=t:this.config[e]=(0,o.extend)(this.config[e],this.userConfig[e])}}catch(e){console.log("_update err")}}},{key:"update",value:function(e,n){try{if(!e||!n)return void console.log("参数错误");"unionId"===e?this.cacheUnionId(n):this.config[e]=n}catch(e){console.log("update err")}}},{key:"get",value:function(e){return e?this.config[e]:this.config}},{key:"set",value:function(e){try{for(var t in e)e.hasOwnProperty(t)&&("devMode"===t&&this.setApiDomain(e[t]),"object"!==n(e[t])||e[t]instanceof RegExp||e[t]instanceof Array?this.userConfig[t]=e[t]:this.userConfig[t]=(0,o.extend)(this.userConfig[t],e[t]));this._update()}catch(e){console.log("set err")}}},{key:"getApiPath",value:function(e){var n=this.apiPaths[e];return(0,o.stringify)(this.url+n,this.baseQuery)}},{key:"setApiDomain",value:function(e){this.url=e?"https://catfront.51ping.com":r}},{key:"getExtension",value:function(e){return e?this.extensions[e]:this.extensions}},{key:"setExtension",value:function(e){try{for(var n in e)if(e.hasOwnProperty(n)){var t=e[n];-1!==s.indexOf(n)?this.extensions[n]="unionId"===n?this.config.unionId:t:this.config.version[n]=t}}catch(e){console.log("setExtension err")}}},{key:"cacheUnionId",value:function(e){wx.setStorage({key:i.STOREKEY+"-unionId",data:e})}}]),a}();exports.default=a; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/constant/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.STOREKEY="WXOWLKEY",exports.VERSION="1.0.1",exports.LEVEL={ERROR:"error",INFO:"info",WARN:"warn",DEBUG:"debug"},exports.CATEGORY={SCRIPT:"jsError",AJAX:"ajaxError",RESOURCE:"resourceError"}; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/env.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(){var n=getCurrentPages()||[];return n.length?n[n.length-1].route||n[n.length-1].__route__:"app"}function e(){try{return wx.onNetworkStatusChange&&wx.onNetworkStatusChange(function(n){n&&(i.network=n.networkType)}),new o(function(n,e){wx.getNetworkType({success:function(e){n(e.networkType)},fail:function(){n("unknown network")}}),setTimeout(function(){n("unknown network")},2e3)})}catch(n){console.log("getNetWorkType err")}}function t(){try{return new o(function(n,e){wx.getSystemInfo({success:function(e){var t=e.system,r=void 0===t?"":t,o=e.version,i=void 0===o?"Unknown":o,u=e.SDKVersion,c=void 0===u?"Unknown":u,s=r.toLowerCase().match(/ios/)?"iOS":"Android";n({os:s,wxVersion:i,wxLibVersion:c})},fail:function(){n("unknown system")}})})}catch(n){console.log("getSystemInfo err")}}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function n(n,e){var t=[],r=!0,o=!1,i=void 0;try{for(var u,c=n[Symbol.iterator]();!(r=(u=c.next()).done)&&(t.push(u.value),!e||t.length!==e);r=!0);}catch(n){o=!0,i=n}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return t}return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return n(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();exports.getPageUrl=n,exports.getEnv=function(){var u=n();try{return new o(function(n,c){Object.keys(i).length?n(Object.assign({pageUrl:u},i)):o.all([e(),t()]).then(function(e){var t=r(e,2),o=t[0],c=t[1];i=Object.assign({},c,{container:"MicroMessenger"},{network:o},{unionId:""}),n(Object.assign({},i,{pageUrl:u}))}).catch(function(){n({})})})}catch(n){console.log("getEnv err")}};var o=require("../../../@mtfe/mt-weapp-promise/index.js"),i={}; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/error/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function r(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},o=function(){function r(r,e){for(var o=0;o<e.length;o++){var t=e[o];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(e,o,t){return o&&r(e.prototype,o),t&&r(e,t),e}}(),t=require("../env"),n=require("../util/util"),i=require("../constant/index"),c=require("./model").default,a=[],s=function(){function s(e){r(this,s),this.cfgManager=e}return o(s,[{key:"parse",value:function(r){return r.project||(r.project=this.cfgManager.get("project")),r.pageUrl||(r.pageUrl=this.cfgManager.get("pageUrl")||(0,t.getPageUrl)()),r}},{key:"pushError",value:function(r,e){var o=this,n=this.cfgManager;try{(0,t.getEnv)().then(function(t){var i=new c(r);i=i.updateTags({wxLibVersion:t.wxLibVersion,wxVersion:t.wxVersion}),i=(i=o._handleError(i)).toJson(),r=o.parse(i);var s=t.network,u=t.container,l=t.os,f=t.unionId;f=n.config.unionId||f,r=Object.assign({network:s,container:u,os:l,unionId:f},r),a.push(r),e&&o.report()})}catch(r){this.reportSystemError(r),console.log("owl-inside-error pushError",r)}}},{key:"_handleError",value:function(r){try{var e=this.cfgManager.get("onErrorPush");if(e instanceof Function&&(r=e(r)),r instanceof c||void 0===r)return r;console.log("onErrorPush方法返回结果有误")}catch(e){return r}}},{key:"addError",value:function(r,o,t){r||(r="default"),o||(o="error");var n=o&&o.level?o.level:i.LEVEL.ERROR;try{o instanceof c||(o instanceof Error?o=o.stack||o.message:"object"===(void 0===o?"undefined":e(o))&&(o={sec_category:o.name,content:o.msg})),this.pushError({sec_category:r,content:o,category:i.CATEGORY.SCRIPT,level:n},t)}catch(r){this.reportSystemError(r),console.log("owl-inside-error",r)}}},{key:"reportSystemError",value:function(r){var e=this;try{r&&r.stack&&(0,t.getEnv)().then(function(o){a.push(new c({project:"owl",pageUrl:e.cfgManager.config.project+(0,t.getPageUrl)(),sec_category:r.msg||r.name||"parseError",content:JSON.stringify(r.stack)})),e.report()}).catch(function(r){console.log("owl-error",r)})}catch(r){console.log("reportSystemError",r)}}},{key:"onError",value:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"jsError",t="unknow error",n=i.LEVEL.ERROR,a=void 0,s=!1;try{r&&"string"==typeof r?a=r:r&&"object"===(void 0===r?"undefined":e(r))&&(a=r.message||r.toString()),a&&"string"==typeof a&&(-1!==a.indexOf("SDKScriptError")?s=!0:-1!==a.indexOf("webviewScriptError")?s=!0:t=(t=(t=a.replace("thirdScriptError","").split(";")).length?t[0]:"").replace(/\t|\n/g,"")),s||this.pushError(new c({content:a,category:o,sec_category:t,level:n}),!0)}catch(r){this.reportSystemError(r),console.log("owl-inside-error onError",r)}}},{key:"report",value:function(r,e){var o=this.cfgManager;if(a.length)try{var t=o.getApiPath("error"),i=(0,n.stringify)(t);i=i+"&"+(0,n.getReportVersions)(o.config),(0,n.requestQueue)({url:i,data:"c="+encodeURIComponent(JSON.stringify(a)),method:"POST",header:{"content-type":"application/x-www-form-urlencoded;"},success:function(e){a=[],r&&r instanceof Function&&r(e)},fail:function(r){e&&e instanceof Function&&e(r)}})}catch(r){this.reportSystemError(r),console.log("owl-inside-error report",r)}}}]),s}();exports.default=s; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/error/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),r=require("../util/util"),i={ERROR:"error"},n={SCRIPT:"jsError",AJAX:"ajaxError"},o=["project","pageUrl","resourceUrl","category","sec_category","level","timestamp","content"],a=["rowNum","colNum"].concat(o),s=function(){function s(e){if(t(this,s),e){var r=void 0;for(r in e)e.hasOwnProperty(r)&&(this[r]=e[r]);this.parse(e)}}return e(s,[{key:"parse",value:function(){this.category||(this.category=n.SCRIPT),this.level||(this.level=i.ERROR),this.timestamp||(this.timestamp=Date.now()),this.sec_category||(this.sec_category="default")}},{key:"isEqual",value:function(t){return this.sec_category===t.sec_category&&this.resourceUrl===t.resourceUrl&&this.content===t.content}},{key:"update",value:function(t){for(var e in t)void 0!==t[e]&&-1!==a.indexOf(e)&&(this[e]=t[e]);return this}},{key:"updateTags",value:function(t){var e=(0,r.extend)(this.tags||{},t);return this.tags=e,this}},{key:"toJson",value:function(){var t=this,e=this.rowNum,i=this.colNum,a={};return o.map(function(e){void 0!==t[e]&&(a[e]=t[e])}),a.category===n.SCRIPT&&e&&i&&(a.dynamicMetric={rowNum:e,colNum:i}),this.tags&&(a.dynamicMetric=(0,r.extend)(a.dynamicMetric||{},this.tags)),a}}]),s}();s.LEVEL=i,s.CATEGORY=n,exports.default=s; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.OWL=exports.owl=void 0;var t=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();exports.page=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Page;(0,l.default)(v,e,r)},exports.app=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:App;(0,c.default)(v,e,r)},exports.request=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:v;return(0,a.default)(e,r)};var n=e(require("./error/index")),i=e(require("./resource/index")),a=e(require("./resource/request")),o=e(require("./page/index")),u=e(require("./metric/index")),s=e(require("./log/index")),f=e(require("./config")),g=require("./env"),l=e(require("./page")),c=e(require("./app")),d=e(require("./error/model")),p=e(require("./util/logan")),h=function(){function e(t){r(this,e);var a=new f.default(t);this.error=new n.default(a),this.resource=new i.default(a,this.error),this.pageSpeed=new o.default(a,this.error),this.logManager=new s.default(a,this.error),this.cfgManager=a,this.init()}return t(e,[{key:"init",value:function(){var e=this;(0,g.getEnv)().then(function(r){e.cfgManager.setExtension(r)})}},{key:"newMetric",value:function(){return new u.default(this.cfgManager)}},{key:"report",value:function(){this.error.report(),this.resource.report(),this.pageSpeed.report()}}]),e}(),v=new h({});v.OWL=h,v.errorModel=d.default,v.start=function(e){if(!this.isStarted&&(this.isStarted=!0,e&&v.cfgManager.set(e),this.cfgManager.get("logan").enable)){var r=this.cfgManager.get("logan").Logan,t=this.cfgManager.get("logan").config,n=this.cfgManager.get("project");p.default.ready({LoganAPI:r,project:n,loganConfig:t})}},exports.owl=v,exports.OWL=h; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/log/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var n=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}(),t=function(e){return e&&e.__esModule?e:{default:e}}(require("../util/logan")),o=function(){function o(n){e(this,o),this.cfgManager=n}return n(o,[{key:"addLog",value:function(e){try{if("string"!=typeof e)return void console.log("addLog只接受string类型的日志");t.default.log("[Log]: "+e)}catch(e){console.log("logan addlog err")}}}]),o}();exports.default=o; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/metric/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,s,n){return s&&t(e.prototype,s),n&&t(e,n),e}}(),s=require("../util/util"),n=function(){function n(e){t(this,n),this.cfgManager=e,this.tags={},this.kvs={}}return e(n,[{key:"setTags",value:function(t){this.tags=Object.assign(this.tags,t)}},{key:"getTags",value:function(t){return t?this.tags[t]:this.tags}},{key:"setMetric",value:function(t,e){return"string"!=typeof t?console.log("metric名称必须是string类型"):"number"!=typeof e?console.log("metric值必须是number类型,当前为"+t+"-"+e):(this.kvs[t]||(this.kvs[t]=[]),void this.kvs[t].push(e))}},{key:"getMetric",value:function(t){return t?this.kvs[t]:this.kvs}},{key:"clearMetric",value:function(){this.kvs={}}},{key:"clearTags",value:function(){this.tags={}}},{key:"_rollbackMetric",value:function(t){for(var e in t)t.hasOwnProperty(e)&&(this.kvs[e]=t[e].concat(this.kvs[e]||[]))}},{key:"_rollbackTags",value:function(t){this.tags=t||{}}},{key:"report",value:function(){var t=this,e=this.cfgManager;try{if(!this.kvs||0===Object.keys(this.kvs).length)return;var n={kvs:this.kvs,tags:this.tags,ts:parseInt(+new Date/1e3)},r=this.tags;this.clearTags();var i=e.getApiPath("metric");(0,s.requestQueue)({url:i+"&p="+e.config.project,method:"POST",header:{"Content-Type":"application/x-www-form-urlencoded"},data:"data="+encodeURIComponent(JSON.stringify(n)),fail:function(){t._rollbackTags(r)}})}catch(t){console.log("metre report err")}}}]),n}();exports.default=n; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(e,o){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Page,a=o.onLoad,t=o.onReady,n=o.onHide,c=o.onUnload,l=o.onPullDownRefresh,s=e.pageSpeed,d=e.cfgManager,i=e.error;o.onLoad=function(e){try{if(!d.get("hasRecordApp")){var o=this.route;s.appReady(o),d.update("hasRecordApp",!0)}s.pageLoad(d)}catch(e){console.log("onLoad error:"+e.stack||e)}a&&a.call(this,e)},o.imageError=function(e){i.pushError({content:e.detail&&e.detail.errMsg,category:"jsError",sec_category:"image error",level:"error"})},o.onReady=function(e){try{s.pageReady()}catch(e){console.log("onReady error:"+e.stack||e)}t&&t.call(this,e)},o.onHide=function(e){try{s.report()}catch(e){console.log("page onHide error:"+e.stack||e)}n&&n.call(this,e)},o.onUnload=function(e){try{s.report()}catch(e){console.log("page onUnload error:"+e.stack||e)}c&&c.call(this,e)},o.onPullDownRefresh=function(e){try{s.pullRefresh()}catch(e){console.log("page pullRefresh error:"+e.stack||e)}l&&l.call(this,e)},r(o)}; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/page/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),i=require("../env"),r=require("../util/util"),n=function(){function n(t){e(this,n),this.cfgManager=t,this.speed={},this.firstContentfullPaint={},this.moduleFirstRenderTime={},this.pageSource={}}return t(n,[{key:"pushSpeed",value:function(e,t,r){var n=this,a=this.speed;a[e]||(a[e]={},a[e].customspeed=[]);try{(0,i.getEnv)().then(function(i){var o=i;o.pageurl=e||o.pageUrl,delete o.pageUrl;var s=n.cfgManager.config,u=s.project,l=s.unionId,c=s.wxAppVersion;Object.assign(a[e],o,{project:u,timestamp:Date.now(),unionId:l,speed:"0|0|0",wxAppVersion:c}),a[e].customspeed[t]=r})}catch(e){console.log("pushSpeed err")}}},{key:"start",value:function(e,t){this["start-"+e+"-"+t]=Date.now()}},{key:"end",value:function(e,t){var i=this["start-"+e+"-"+t],r=this["start-app-0"];r&&(delete this["start-app-0"],this.pushSpeed("app",0,Date.now()-r)),i?this.pushSpeed(e,t,Date.now()-i):console.log("请先埋点 start")}},{key:"addSource",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";try{if(this._refresh)return;var t=(0,i.getPageUrl)();this.pageSource[t]||(this.pageSource[t]={}),this.pageSource[t].source=e}catch(e){console.log("addSource error",JSON.stringify(e))}}},{key:"addPoint",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(!this._refresh){t||(t=(0,i.getPageUrl)()||"");try{if("app"===t)this.pushSpeed("app",e.position,Date.now()-this._appStart);else{var r=this._start||Date.now(),n=void 0;if(void 0===e.position)return void console.log("请先埋点position");if(void 0!==e.duration)n=e;else if(void 0!==r){var a=e.timeStamp||+Date.now();n={position:e.position,duration:a-r}}n&&this.pushSpeed(t,n.position,n.duration)}}catch(e){console.log("addPoint err")}}}},{key:"createFirstContentfulPaint",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["default"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;try{if(this._refresh)return;var r=(0,i.getPageUrl)();this.firstContentfullPaint[r]||(this.firstContentfullPaint[r]={}),this.firstContentfullPaint[r][t]=e}catch(e){console.log("create first error",JSON.stringify(e))}}},{key:"addFirstContentfulPaint",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments[1];if(!this._refresh){var r=(0,i.getPageUrl)(),n=void 0;try{this.firstContentfullPaint[r]||(this.firstContentfullPaint[r]={}),n=t||+new Date-this._start,this.moduleFirstRenderTime[r]||(this.moduleFirstRenderTime[r]={}),this.moduleFirstRenderTime[r][e]||(this.moduleFirstRenderTime[r][e]=n)}catch(e){console.log("add first error",JSON.stringify(e))}}}},{key:"_getPageFirstPaint",value:function(e,t){var i=this,r=void 0;try{this.firstContentfullPaint[e]&&(r=this.firstContentfullPaint[e][t]);var n=0;return this.moduleFirstRenderTime[e]?(r.map(function(t){n=Math.max(i.moduleFirstRenderTime[e][t],n)}),n):n}catch(e){return console.log("_getPageFirstPaint err"),0}}},{key:"appLaunch",value:function(e,t){this._appStart=e,this._enterPage=t}},{key:"appReady",value:function(e){e===this._enterPage&&this.addPoint({position:0},"app")}},{key:"pageLoad",value:function(){this._start=Date.now(),this._refresh=!1}},{key:"pageReady",value:function(){this.addPoint({position:0},(0,i.getPageUrl)())}},{key:"pullRefresh",value:function(){this._refresh=!0}},{key:"report",value:function(){var e=this,t=this.cfgManager,i=this.speed,n=this.firstContentfullPaint,a=this.moduleFirstRenderTime,o=t.getApiPath("page");try{Object.keys(i).map(function(s){var u=Object.assign({},i[s]);if(n[s]){var l=e.firstContentfullPaint[s];try{for(var c in l)u.customspeed[c]=e._getPageFirstPaint(s,c)||""}catch(e){console.log("err:"+JSON.stringify(e))}}u.customspeed=u.customspeed.join("|");var f=(0,r.stringify)(o);f=(0,r.stringify)(f,u),i[s]&&delete i[s],a[s]&&delete a[s],n[s]&&delete n[s],Math.random()>t.get("page").sample||(0,r.requestQueue)({url:f,header:{"content-type":"application/x-www-form-urlencoded;"},method:"GET",success:function(){}})})}catch(e){console.log("page report err")}}}]),n}();exports.default=n; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/resource/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var r=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),t=require("../env"),n=require("../util/util"),o=require("../constant/index"),i=function(e){return e&&e.__esModule?e:{default:e}}(require("./model")),a="resource",s=[],c=function(){function c(r,t){e(this,c),this.cfgManager=r,this.errManager=t,this.CACHE_SEND_TRIGGER=10}return r(c,[{key:"_parse",value:function(e){return e.pageUrl||(e.pageUrl=this.cfgManager.get("pageUrl")||(0,t.getPageUrl)()),e.project||(e.project=this.cfgManager.get("project")),e}},{key:"_stringify",value:function(e){var r=[],t=r=e?s.splice(0,this.CACHE_SEND_TRIGGER):s.splice(0,s.length);if(t&&t.length)try{for(var n=this.cfgManager.getExtension(),o={},i=[],a=["region","operator","network","container","os"],c=0;c<a.length;c++)o[a[c]]="";for(var u=0;u<t.length;u++){var g=t[u];i.push(g)}for(var l in o)o.hasOwnProperty(l)&&(o[l]=n[l]||"");return o.infos=i,o}catch(e){console.log("_stringify err")}}},{key:"pushApi",value:function(e,r){try{var t=this._parse(e),n=new i.default(t);if(s.push(n),!s.length)return;s.length>=this.CACHE_SEND_TRIGGER&&this.report(!0),r&&this.report()}catch(e){console.log("pushApi err"+JSON.stringify(e.stack||e))}}},{key:"addApi",value:function(e,r){if(e)try{if(void 0!==e.networkCode&&"number"!=typeof e.networkCode)return void console.log("网络状态码必须为Number类型",JSON.stringify(e));if(void 0!==e.statusCode&&"number"!=typeof e.statusCode)return void console.log("业务状态码必须为Number类型",JSON.stringify(e));var t={type:"api",connectType:e.connectType||"https",resourceUrl:e.name,statusCode:(e.networkCode||"")+"|"+(e.statusCode||""),responsetime:e.responseTime&&e.responseTime.toString()?e.responseTime.toString():"0"};e.content&&(t.firstCategory=o.CATEGORY.AJAX,t.secondCategory=e.secondCategory||e.name,t.logContent=e.content),this.pushApi(t,r)}catch(e){console.log("addApi err"+JSON.stringify(e.stack||e))}}},{key:"addApiError",value:function(e,r,t){var n=this.cfgManager.get(a).errSample||.2;Math.random()>n||this.errManager.pushError({sec_category:e,content:r,category:"ajaxError",level:"warn"},t)}},{key:"report",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=this.cfgManager;try{var t=this._stringify(e);if(Math.random()>r.get(a).sample)return;if(t){var o=r.getApiPath(a),i=(0,n.stringify)(o);i=i+"&"+(0,n.getReportVersions)(r.config),(0,n.requestQueue)({url:i,data:t,header:{"content-type":"application/json"},method:"POST",success:function(){}})}}catch(e){console.log("report err"+JSON.stringify(e.stack||e))}}}]),c}();exports.default=c; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/resource/model.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=["resourceUrl","connectType","timestamp","requestbyte","responsebyte","responsetime","project","pageUrl","statusCode","firstCategory","secondCategory","logContent"],n=["resourceUrl","connectType","timestamp","requestbyte","responsebyte","responsetime","project","pageUrl","statusCode","firstCategory","secondCategory","logContent"],o=function(){function o(t){var n=this;e(this,o),r.forEach(function(e){void 0!==t[e]?n[e]=t[e]:n[e]=""}),this.parse()}return t(o,[{key:"update",value:function(e){for(var t in e)e.hasOwnProperty(t)&&-1!==r.indexOf(t)&&(this[t]=e[t])}},{key:"parse",value:function(){if(!this.timestamp){var e=Date.now();this.timestamp=e.toString()}this.requestbyte||(this.requestbyte="0"),this.responsebyte||(this.responsebyte="0")}},{key:"stringify",value:function(){var e=this;return n.map(function(t){return e[t]}).join("\t")}}]),o}();exports.default=o; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/resource/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(r,o){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:wx.request,n=r.url,i=r.reportError,u=r.isRequest,c=Date.now(),p=r.complete;try{r.complete=function(s){try{if(s&&"object"===(void 0===s?"undefined":t(s))){var u=s.statusCode,a=void 0===u?"500|":u,y=s.errMsg,l=void 0===y?"request:ok":y,d=s.connectType,f=void 0===d?"https":d,m=s.responseTime,b=(void 0===m?0:m)||Date.now()-c;b=b.toString(),c=c.toString();var v={};if(i&&"request:fail "!==l){var g=i(s,e)||{},S=g.log,h=void 0===S?"":S,q=g.code,C=void 0===q?200:q,j=g.name,w=void 0===j?"":j,x="";(h||w)&&(x="ajaxError"),v={statusCode:a+"|"+C,logContent:h,firstCategory:x,secondCategory:w||r.url}}a=""+a,o.resource.pushApi(Object.assign({connectType:f,timestamp:c,requestbyte:0,responsebyte:0,statusCode:a,resourceUrl:n,responsetime:b},v))}else{var E=Date.now()-c;o.resource.pushApi({connectType:"https",timestamp:c.toString(),requestbyte:"0",responsebyte:"0",statusCode:"500|",resourceUrl:n,responsetime:E.toString()})}}catch(e){o.error.addError("requestObject complete err",e)}finally{p&&p.apply(this,arguments)}}}catch(e){o.error.addError("requestObject complete err",e)}return u&&s(r),r}Object.defineProperty(exports,"__esModule",{value:!0});var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.default=e; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/util/logan.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../env"),o=void 0,l=!1,r={queue:[],ready:function(){var r=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var g=t.LoganAPI,n=t.project,u=t.loganConfig;l=!0;g?(o=g,function(){for(u&&(o=o.config(u)),o.log("[新小程序项目]：项目-> "+n+" 对应页面-> "+(0,e.getPageUrl)());r.queue.length;){var l=r.queue.shift();o.log(l)}}()):console.log("当前暂不支持log")}catch(e){console.log("logan ready err")}},log:function(e){arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(l){try{o?o.log(e,"owl"):this.queue.push(e)}catch(e){console.log("logan log err")}}}};exports.default=r; 
 			}); 
		define("npm/@dp/owl-wxapp/es6/util/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n){var e=[];for(var r in n)n.hasOwnProperty(r)&&e.push(encodeURIComponent(r)+"="+encodeURIComponent(n[r]));return e.join("&")}function e(n){if(n&&t.push(n),t.length>1&&n);else{var r=t[0],o=r.complete;r.complete=function(n){t.shift(),t.length&&e(),o&&o.call(this,n)},wx.request(r)}}function r(){return 65535*Math.random()}function o(){return Math.ceil(r()).toString(16)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.serialize=n,exports.requestQueue=e,exports.rnd=r,exports.rndSeed=o,exports.MSID=function(){var n=[],e=(new Date).getTime();return n.push(e.toString(16)),n.push(o()),n.push(o()),n.push(o()),n.join("-")},exports.getReportVersions=function(e){var r=e.wxAppVersion,o=void 0===r?"Unknown":r,t=e.version,i=t.wxVersion,s=void 0===i?"Unknown":i,u=t.wxLibVersion;return n({wxVersion:s,wxLibVersion:void 0===u?"Unknown":u,wxAppVersion:o})},exports.stringify=function(n,e){if(!e)return n;var r=[];for(var o in e)e.hasOwnProperty(o)&&r.push(o+"="+e[o]);return~n.indexOf("?")?n+"&"+r.join("&"):n+"?"+r.join("&")},exports.extend=function(n,e){var r={},o=void 0;for(o in n)r[o]=n[o];for(o in e)e.hasOwnProperty(o)&&void 0!==e[o]&&(r[o]=e[o]);return r};var t=[]; 
 			}); 
		define("npm/@hfe/train-common/lib/plugins/EncryptionService.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.EncryptionService=void 0;var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),n=e(require("../../../../crypto-js/aes.js")),i=e(require("../../../../crypto-js/enc-utf8.js")),c=e(require("../../../../crypto-js/pad-pkcs7.js")),o=i.default.parse("8jq1gbW=l~b5c?yt"),u=function(e){return"[object Object]"===Object.prototype.toString.call(e)},a=function(e){return"[object Array]"===Object.prototype.toString.call(e)};exports.EncryptionService=function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];t(this,e),this.configs=r}return r(e,[{key:"getDefaultSecretConfig",value:function(){return this.configs.filter(function(e){return e.isDefault})[0]}},{key:"encryption",value:function(e){if(!e||0===e.indexOf("*"))return e;var t=this.getDefaultSecretConfig(),r=i.default.parse(e),u=i.default.parse(t.key),a=n.default.encrypt(r,u,{padding:c.default,iv:o}).toString();return"*"+t.edition+"|"+a}},{key:"getDecryptionSecretConfig",value:function(e){var t=e.slice("*".length,e.indexOf("|"));return this.configs.filter(function(e){return e.edition===t})[0]}},{key:"decryption",value:function(e){if(!e||0!==e.indexOf("*"))return e;var t=this.getDecryptionSecretConfig(e),r=e.substr(e.indexOf("|")+1),u=i.default.parse(t.key);return n.default.decrypt(r,u,{padding:c.default,iv:o}).toString(i.default)}},{key:"encryptOrDecryptObjByMethod",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments[2];if(!e)return e;var i=function(e,i){switch(!0){case a(e):case u(e):return t.encryptOrDecryptObjByMethod(e,r,n);default:return i&&r.indexOf(i)>-1?"encryption"===n?t.encryption(e):t.decryption(e):e}};return a(e)?e.map(function(e){return i(e)}):Object.keys(e).reduce(function(t,r){return t[r]=i(e[r],r),t},{})}},{key:"encryptionObjByKeys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];try{return a(e)||u(e)?this.encryptOrDecryptObjByMethod(e,t,"encryption"):e}catch(t){return e}}},{key:"decryptionObjByKeys",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];try{return a(e)||u(e)?this.encryptOrDecryptObjByMethod(e,t,"decryption"):e}catch(t){return e}}}]),e}(); 
 			}); 
		define("npm/@hfe/train-common/lib/plugins/EncryptionUrlConfig.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.commonConfig={decryption:{"/uts/train/qiangpiao/task/qorderinfo":["passengerIDNo"],"/uts/train/qiangpiao/getSubmitInfo":["passenger_id_no","mobilePhoneNumber"],"/uts/train/account12306/getpassenger":["passenger_id_no"],"/uts/train/trainorder/holdseat/getHoldSeatOrderInfo":["mobile_phone_number","passenger_id_no"],"/uts/train/trainorder/holdseat/pollingGetStatus":["mobile_phone_number","passenger_id_no"],"/uts/train/trainorder/getorderinfonew":["mobile_phone_number","passenger_id_no"],"/uts/train/trainorder/preRefundDetail":["passageIdNo"],"/uts/train/passenger/getpassenger":["passenger_id_no"],"/uts/train/account12306/freshpassenger":["passenger_id_no"]}},exports.hbConfig={decryption:{"/train/qiangpiao/task/qorderinfo":["passengerIDNo"],"/train/qiangpiao/getSubmitInfo":["passenger_id_no","mobilePhoneNumber"],"/train/account12306/getpassenger":["passenger_id_no"],"/train/trainorder/holdseat/getHoldSeatOrderInfo":["mobile_phone_number","passenger_id_no"],"/train/trainorder/holdseat/pollingGetStatus":["mobile_phone_number","passenger_id_no"],"/train/trainorder/getorderinfonew":["mobile_phone_number","passenger_id_no"],"/train/trainorder/preRefundDetail":["passageIdNo"],"/train/passenger/getpassenger":["passenger_id_no"],"/train/account12306/freshpassenger":["passenger_id_no"]}},exports.grapTicketConfig={decryption:{"/qiangpiao/task/qorderinfo":["passengerIDNo"],"/qiangpiao/getSubmitInfo":["passenger_id_no","mobilePhoneNumber"],"/account12306/getpassenger":["passenger_id_no"],"/trainorder/holdseat/getHoldSeatOrderInfo":["mobile_phone_number","passenger_id_no"],"/trainorder/holdseat/pollingGetStatus":["mobile_phone_number","passenger_id_no"],"/trainorder/getorderinfonew":["mobile_phone_number","passenger_id_no"],"/trainorder/preRefundDetail":["passageIdNo"],"/passenger/getpassenger":["passenger_id_no"],"/account12306/freshpassenger":["passenger_id_no"]}}; 
 			}); 
		define("npm/@mtfe/balloon-inflate/build/balloon-inflate.min.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,r){"object"==("undefined"==typeof exports?"undefined":e(exports))&&"object"==("undefined"==typeof module?"undefined":e(module))?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==("undefined"==typeof exports?"undefined":e(exports))?exports["balloon-inflate"]=r():t["balloon-inflate"]=r()}(global,function(){return function(t){function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}var n={};return r.m=t,r.c=n,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==(void 0===t?"undefined":e(t))&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)r.d(o,a,function(e){return t[e]}.bind(null,a));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function e(t){if(Array.isArray(t[0]))return t.map(function(t){return e(t)});if(0===t.length)return[];var r={type:""},a=o[t[0]];r.type=a;for(var i=t.length,p=1;p<i;p++)-1!==t[p]&&(r[n[a][p]]=Array.isArray(t[p])?e(t[p]):t[p]);return r}(e)};var n={Comment:["type","value"],Program:["type","sourceType","body","comments"],EmptyStatement:["type"],BlockStatement:["type","body","innerComments"],ExpressionStatement:["type","expression"],IfStatement:["type","test","consequent","alternate"],LabeledStatement:["type","label","body"],BreakStatement:["type","label"],ContinueStatement:["type","label"],WithStatement:["type","object","body"],SwitchStatement:["type","discriminant","cases"],ReturnStatement:["type","argument"],ThrowStatement:["type","argument"],TryStatement:["type","block","handler","finalizer"],WhileStatement:["type","test","body"],DoWhileStatement:["type","body","test"],ForStatement:["type","init","test","update","body"],ForInStatement:["type","left","right","body"],DebuggerStatement:["type"],FunctionDeclaration:["type","id","body","params","generator","async"],VariableDeclaration:["type","declarations","kind"],VariableDeclarator:["type","id","init"],ThisExpression:["type"],ArrayExpression:["type","elements"],ObjectExpression:["type","properties"],Property:["type","key","value","kind","method","shorthand","computed"],FunctionExpression:["type","id","body","params","generator","async"],SequenceExpression:["type","expressions"],UnaryExpression:["type","operator","prefix","argument"],BinaryExpression:["type","operator","left","right"],AssignmentExpression:["type","operator","left","right"],UpdateExpression:["type","operator","argument","prefix"],LogicalExpression:["type","operator","left","right"],ConditionalExpression:["type","test","alternate","consequent"],CallExpression:["type","callee","arguments"],NewExpression:["type","callee","arguments"],MemberExpression:["type","object","property","computed"],SwitchCase:["type","test","consequent"],CatchClause:["type","param","body"],Identifier:["type","name"],Literal:["type","value","raw","regex"],ForOfStatement:["type","left","right","body"],Super:["type"],SpreadElement:["type","argument"],ArrowFunctionExpression:["type","expression","body","params","generator","async"],YieldExpression:["type","argument","delegate"],TemplateLiteral:["type","quasis","expressions"],TaggedTemplateExpression:["type","tag","quasi"],TemplateElement:["type","tail","value"],AssignmentProperty:["type","key","value","kind","method","shorthand","computed"],ObjectPattern:["type","properties"],ArrayPattern:["type","elements"],RestElement:["type","argument"],AssignmentPattern:["type","left","right"],ClassBody:["type","body"],MethodDefinition:["type","key","value","kind","computed","static"],ClassDeclaration:["type","id","superClass","body"],ClassExpression:["type","id","superClass","body"],MetaProperty:["type","meta","property"],ImportDeclaration:["type","specifiers","source"],ImportSpecifier:["type","imported","local"],ImportDefaultSpecifier:["type","local"],ImportNamespaceSpecifier:["type","local"],ExportNamedDeclaration:["type","declaration","specifiers","source",""],ExportSpecifier:["type","exported","local"],ExportDefaultDeclaration:["type","declaration"],ExportAllDeclaration:["type","source"],AwaitExpression:["type","argument"]},o={0:"Comment",1:"Program",2:"Identifier",3:"Literal",4:"ExpressionStatement",5:"BlockStatement",6:"EmptyStatement",7:"DebuggerStatement",8:"WithStatement",9:"ReturnStatement",10:"LabeledStatement",11:"BreakStatement",12:"ContinueStatement",13:"IfStatement",14:"SwitchStatement",15:"SwitchCase",16:"ThrowStatement",17:"TryStatement",18:"CatchClause",19:"WhileStatement",20:"DoWhileStatement",21:"ForStatement",22:"ForInStatement",23:"ForOfStatement",24:"FunctionDeclaration",25:"VariableDeclaration",26:"VariableDeclarator",27:"ThisExpression",28:"ArrayExpression",29:"ObjectExpression",30:"ObjectPattern",31:"Property",32:"FunctionExpression",33:"UnaryExpression",34:"UpdateExpression",35:"BinaryExpression",36:"AssignmentExpression",37:"LogicalExpression",38:"MemberExpression",39:"ConditionalExpression",40:"CallExpression",41:"NewExpression",42:"SequenceExpression",43:"Super",44:"SpreadElement",45:"ArrowFunctionExpression",46:"YieldExpression",47:"TemplateLiteral",48:"TaggedTemplateExpression",49:"TemplateElement",50:"ArrayPattern",51:"RestElement",52:"AssignmentPattern",53:"ClassBody",54:"MethodDefinition",55:"ClassDeclaration",56:"ClassExpression",57:"MetaProperty",58:"ImportDeclaration",59:"ImportSpecifier",60:"ImportDefaultSpecifier",61:"ImportNamespaceSpecifier",62:"ExportNamedDeclaration",63:"ExportSpecifier",64:"ExportDefaultDeclaration",65:"ExportAllDeclaration",66:"AwaitExpression",67:"AssignmentProperty"}}])}); 
 			}); 
		define("npm/@mtfe/jsvm/build/jsvm.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=require("../../mt-weapp-promise/index.js");!function(e,t){"object"===("undefined"==typeof exports?"undefined":a(exports))&&"object"===("undefined"==typeof module?"undefined":a(module))?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"===("undefined"==typeof exports?"undefined":a(exports))?exports.jsvm=t():e.jsvm=t()}(global,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===(void 0===e?"undefined":a(e))&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(t){return e[t]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./src/jsvm.ts")}({"./src/ast_map.ts":function(o,u,l){Object.defineProperty(u,"__esModule",{value:!0});var c=l("./src/scope.ts"),s=l("./src/break_signal.ts"),f=function(o){function u(){t(this,u);var e=n(this,(u.__proto__||Object.getPrototypeOf(u)).call(this));return e.WalkCount=0,e}return r(u,s.default),i(u,[{key:"walk",value:function(e,t){this.WalkCount++;for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];return this[e.type].apply(this,[e,t].concat(r))}},{key:"Program",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.body[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value;this.walk(u,t)}}catch(e){r=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}}},{key:"Identifier",value:function(e,t){return t.get(e.name)}},{key:"Literal",value:function(e,t){return e.regex?new RegExp(e.regex.pattern,e.regex.flags):e.value}},{key:"BlockStatement",value:function(e,t){var n=new c.default("block",t),r=!0,i=!1,a=void 0;try{for(var o,u=e.body[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l=o.value,s=this.walk(l,n);if(this.isBreakSignal(s)||this.isContinueSignal(s)||this.isReturnSignal(s))return s}}catch(e){i=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}}},{key:"EmptyStatement",value:function(e,t){}},{key:"DebuggerStatement",value:function(e,t){}},{key:"ExpressionStatement",value:function(e,t){this.walk(e.expression,t)}},{key:"ReturnStatement",value:function(e,t){return this.createReturnSignal(e.argument?this.walk(e.argument,t):void 0)}},{key:"LabeledStatement",value:function(e,t){throw e.type+" 未实现"}},{key:"BreakStatement",value:function(e,t){return this.createBreakSignal()}},{key:"ContinueStatement",value:function(e,t){return this.createContinueSignal()}},{key:"IfStatement",value:function(e,t){return this.walk(e.test,t)?this.walk(e.consequent,t):e.alternate?this.walk(e.alternate,t):void 0}},{key:"SwitchStatement",value:function(e,t){var n=this.walk(e.discriminant,t),r=new c.default("switch",t),i=!1,a=!0,o=!1,u=void 0;try{for(var l,s=e.cases[Symbol.iterator]();!(a=(l=s.next()).done);a=!0){var f=l.value;if(i||f.test&&n!==this.walk(f.test,r)||(i=!0),i){var _=this.walk(f,r);if(this.isBreakSignal(_))break;if(this.isContinueSignal(_)||this.isReturnSignal(_))return _}}}catch(e){o=!0,u=e}finally{try{!a&&s.return&&s.return()}finally{if(o)throw u}}}},{key:"SwitchCase",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.consequent[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var u=a.value,l=this.walk(u,t);if(this.isBreakSignal(l)||this.isContinueSignal(l)||this.isReturnSignal(l))return l}}catch(e){r=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(r)throw i}}}},{key:"WithStatement",value:function(e,t){throw SyntaxError("Strict mode code may not include a with statement")}},{key:"ThrowStatement",value:function(e,t){throw this.walk(e.argument,t)}},{key:"TryStatement",value:function(e,t){try{return this.walk(e.block,new c.default("try",t))}catch(i){if(e.handler){var n=e.handler.param,r=new c.default("catch",t);return r.const(n.name,i),this.walk(e.handler,r)}throw i}finally{if(e.finalizer){var i=this.walk(e.finalizer,new c.default("finally",t));if(this.isReturnSignal(i))return i}}}},{key:"CatchClause",value:function(e,t){return this.walk(e.body,t)}},{key:"WhileStatement",value:function(e,t){for(;this.walk(e.test,t);){var n=new c.default("while",t),r=this.walk(e.body,n);if(this.isBreakSignal(r))break;if(!this.isContinueSignal(r)&&this.isReturnSignal(r))return r}}},{key:"DoWhileStatement",value:function(e,t){do{var n=new c.default("dowhile",t),r=this.walk(e.body,n);if(this.isBreakSignal(r))break;if(!this.isContinueSignal(r)&&this.isReturnSignal(r))return r}while(this.walk(e.test,t))}},{key:"ForStatement",value:function(e,t){var n=this,r=[];e.init&&e.init.type&&"VariableDeclaration"===e.init.type&&"let"===e.init.kind&&e.init.declarations.forEach(function(e){e.id.name&&r.push(e.id.name)});var i=new c.default("for",t);e:for(e.init&&this.walk(e.init,i);!e.test||this.walk(e.test,i);e.update?this.walk(e.update,i):void 0){var o=function(t,i){var a=new c.default("for_body",t),o=n.walk(e.body,a);return r.forEach(function(e){return a.let(e,t.get(e))}),n.isBreakSignal(o)?"break":n.isContinueSignal(o)?"continue":n.isReturnSignal(o)?{v:o}:void 0}(i);switch(o){case"break":break e;case"continue":continue;default:if("object"===(void 0===o?"undefined":a(o)))return o.v}}}},{key:"ForInStatement",value:function(e,t){var n="var",r=void 0;"Identifier"===e.left.type?r=e.left.name:(r=e.left.declarations[0].id.name,n=e.left.kind);for(var i in this.walk(e.right,t)){var a=new c.default("forin",t);a[n](r,i);var o=this.walk(e.body,a);if(this.isBreakSignal(o))break;if(!this.isContinueSignal(o)&&this.isReturnSignal(o))return o}}},{key:"FunctionDeclaration",value:function(e,t){var n=this.FunctionExpression(e,t),r="";if(!(e&&e.id&&e.id.name))throw new SyntaxError("Function must have a name as its identifier");r=e.id.name,t.func(r,n)}},{key:"FunctionExpression",value:function(e,t){var n=this;return function(){for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];for(var o=new c.default("function",t),u=0;u<e.params.length;u++){var l=e.params[u].name;o.var(l,i[u])}o.const("this",this),o.const("arguments",arguments);var s=n.walk(e.body,o);if(n.isReturnSignal(s))return s.data}}},{key:"VariableDeclaration",value:function(e,t){var n=e.kind,r=!0,i=!1,a=void 0;try{for(var o,u=e.declarations[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l=o.value;if("const"===n&&!l.init)throw new SyntaxError("Missing initializer in const declaration");var c=l.id.name,s=l.init?this.walk(l.init,t):void 0;t[n](c,s)}}catch(e){i=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}}},{key:"VariableDeclarator",value:function(e,t){}},{key:"ThisExpression",value:function(e,t){return t.hasVariableInChain("this")?t.get("this"):null}},{key:"ArrayExpression",value:function(e,t){var n=this,r=[];return e.elements.forEach(function(e){var i=n.walk(e,t,r);i&&r.push(i)}),r}},{key:"ObjectExpression",value:function(e,t){var n=this,r={};return e.properties.forEach(function(e){return n.walk(e,t,r)}),r}},{key:"Property",value:function(e,t,n){var r=e.kind,i=void 0;if("Literal"===e.key.type)i=e.key.value;else{if("Identifier"!==e.key.type)throw new Error("Key of object must be Literal or Identifier, please check your code of ObjectExpression");i=e.key.name}var a=this.walk(e.value,t);if("init"===r)n[i]=a;else if("set"===r)Object.defineProperty(n,i,{set:a});else{if("get"!==r)throw new Error("声明对象的属性必须为初始化，getter或者setter，请检查你对象声明的表达式");Object.defineProperty(n,i,{get:a})}}},{key:"SpreadElement",value:function(e,t,n){var r=this.walk(e.argument,t);if(Array.isArray(n)){if(!r[Symbol.iterator]||"function"!=typeof r[Symbol.iterator])throw TypeError(r+" is not iterable");for(var i=r[Symbol.iterator](),o=void 0;!(o=i.next()).done;)n.push(o.value)}else"object"===(void 0===n?"undefined":a(n))&&Object.assign(n,r)}},{key:"UnaryExpression",value:function(e,t){var n=this,r=this;return{"-":function(){return-n.walk(e.argument,t)},"+":function(){return+n.walk(e.argument,t)},"!":function(){return!n.walk(e.argument,t)},"~":function(){return~n.walk(e.argument,t)},void:function(){return void n.walk(e.argument,t)},typeof:function(){if("Identifier"===e.argument.type)return t.hasVariableInChain(e.argument.name)?a(r.walk(e.argument,t)):"undefined";if("MemberExpression"===e.argument.type){var n=e.argument,i=n.object,o=n.property,u=n.computed;return a(u?r.walk(i,t)[r.walk(o,t)]:r.walk(i,t)[o.name])}return a(r.walk(e.argument,t))},delete:function(){if("MemberExpression"===e.argument.type){var r=e.argument,i=r.object,a=r.property;return r.computed?delete n.walk(i,t)[n.walk(a,t)]:delete n.walk(i,t)[a.name]}if("Identifier"===e.argument.type)throw new SyntaxError("Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.");return!0}}[e.operator]()}},{key:"UpdateExpression",value:function(e,t){var n=e.prefix,r=e.operator;if("Identifier"===e.argument.type){var i=e.argument.name,a=t.get(i);return"++"===r?(t.set(i,a+1),n?++a:a++):(t.set(i,a-1),n?--a:a--)}if("MemberExpression"===e.argument.type){var o=e.argument,u=this.walk(o.object,t),l=o.computed?this.walk(o.property,t):o.property.name;return"++"===r?n?++u[l]:u[l]++:n?--u[l]:u[l]--}var c=this.walk(e.argument,t);return"++"===r?n?++c:c++:n?--c:c--}},{key:"BinaryExpression",value:function(e,t){return{"==":function(e,t){return e==t},"!=":function(e,t){return e!=t},"===":function(e,t){return e===t},"!==":function(e,t){return e!==t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"<<":function(e,t){return e<<t},">>":function(e,t){return e>>t},">>>":function(e,t){return e>>>t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"|":function(e,t){return e|t},"^":function(e,t){return e^t},"&":function(e,t){return e&t},in:function(e,t){return e in t},instanceof:function(e,t){return e instanceof t}}[e.operator](this.walk(e.left,t),this.walk(e.right,t))}},{key:"AssignmentExpression",value:function(e,t){var n=void 0;if("Identifier"===e.left.type){var r=e.left.name;n={$set:function(e){t.set(r,e)},$get:function(){return t.get(r)}}}else{if("MemberExpression"!==e.left.type)throw"赋值表达式的左边的类型只能是Identifier或者MemberExpression，此处显然不正确";var i=e.left,a=this.walk(i.object,t),o=i.computed?this.walk(i.property,t):i.property.name;n={$set:function(e){a[o]=e},$get:function(){return a[o]}}}return{"=":function(e){return n.$set(e),e},"+=":function(e){return n.$set(n.$get()+e),n.$get()},"-=":function(e){return n.$set(n.$get()-e),n.$get()},"*=":function(e){return n.$set(n.$get()*e),n.$get()},"/=":function(e){return n.$set(n.$get()/e),n.$get()},"%=":function(e){return n.$set(n.$get()%e),n.$get()},"<<=":function(e){return n.$set(n.$get()<<e),n.$get()},">>=":function(e){return n.$set(n.$get()>>e),n.$get()},">>>=":function(e){return n.$set(n.$get()>>>e),n.$get()},"|=":function(e){return n.$set(n.$get()|e),n.$get()},"^=":function(e){return n.$set(n.$get()^e),n.$get()},"&=":function(e){return n.$set(n.$get()&e),n.$get()}}[e.operator](this.walk(e.right,t))}},{key:"LogicalExpression",value:function(e,t){var n=this;return{"||":function(){return n.walk(e.left,t)||n.walk(e.right,t)},"&&":function(){return n.walk(e.left,t)&&n.walk(e.right,t)}}[e.operator]()}},{key:"MemberExpression",value:function(e,t){var n=e.object,r=e.property;return e.computed?this.walk(n,t)[this.walk(r,t)]:this.walk(n,t)[r.name]}},{key:"ConditionalExpression",value:function(e,t){return this.walk(e.test,t)?this.walk(e.consequent,t):this.walk(e.alternate,t)}},{key:"CallExpression",value:function(t,n){var r=this,i=t.arguments.map(function(e){return r.walk(e,n)});if("MemberExpression"===t.callee.type){var a=this.walk(t.callee.object,n);return a[t.callee.computed?this.walk(t.callee.property,n):t.callee.property.name].apply(a,e(i))}return this.walk(t.callee,n).apply(void 0,e(i))}},{key:"NewExpression",value:function(e,t){var n=this,r=this.walk(e.callee,t),i=e.arguments.map(function(e){return n.walk(e,t)});return new(r.bind.apply(r,[null].concat(i)))}},{key:"SequenceExpression",value:function(e,t){var n=void 0,r=!0,i=!1,a=void 0;try{for(var o,u=e.expressions[Symbol.iterator]();!(r=(o=u.next()).done);r=!0){var l=o.value;n=this.walk(l,t)}}catch(e){i=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(i)throw a}}return n}},{key:"ClassDeclaration",value:function(e,t){throw e.type+" 未实现"}},{key:"ClassExpression",value:function(e,t){throw e.type+" 未实现"}},{key:"ClassBody",value:function(e,t){throw e.type+" 未实现"}},{key:"Super",value:function(e,t){throw e.type+" 未实现"}},{key:"MethodDefinition",value:function(e,t){throw e.type+" 未实现"}},{key:"TemplateLiteral",value:function(e,t){throw e.type+" 未实现"}},{key:"TemplateElement",value:function(e,t){throw e.type+" 未实现"}},{key:"TaggedTemplateExpression",value:function(e,t){throw e.type+" 未实现"}},{key:"ObjectPattern",value:function(e,t){throw e.type+" 未实现"}},{key:"AssignmentPattern",value:function(e,t){throw e.type+" 未实现"}},{key:"ArrayPattern",value:function(e,t){throw e.type+" 未实现"}},{key:"RestElement",value:function(e,t){throw e.type+" 未实现"}},{key:"MetaProperty",value:function(e,t){throw e.type+" 未实现"}},{key:"AwaitExpression",value:function(e,t){throw e.type+" 未实现"}},{key:"ForOfStatement",value:function(e,t){throw e.type+" 未实现"}},{key:"YieldExpression",value:function(e,t){throw e.type+" 未实现"}},{key:"ArrowFunctionExpression",value:function(e,t){throw e.type+" 未实现"}},{key:"AssignmentProperty",value:function(e,t){throw e.type+" 未实现"}},{key:"ImportDeclaration",value:function(e,t){throw e.type+" 未实现"}},{key:"ImportSpecifier",value:function(e,t){throw e.type+" 未实现"}},{key:"ImportDefaultSpecifier",value:function(e,t){throw e.type+" 未实现"}},{key:"ImportNamespaceSpecifier",value:function(e,t){throw e.type+" 未实现"}},{key:"ExportSpecifier",value:function(e,t){throw e.type+" 未实现"}},{key:"ExportNamedDeclaration",value:function(e,t){throw e.type+" 未实现"}},{key:"ExportDefaultDeclaration",value:function(e,t){throw e.type+" 未实现"}},{key:"ExportAllDeclaration",value:function(e,t){throw e.type+" 未实现"}}]),u}();u.default=f},"./src/break_signal.ts":function(e,n,r){Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function e(){t(this,e),this.BREAK_SIGNAL={},this.CONTINUE_SIGNAL={},this.RETURN_SIGNAL={}}return i(e,[{key:"createBreakSignal",value:function(){return this.BREAK_SIGNAL}},{key:"createContinueSignal",value:function(){return this.CONTINUE_SIGNAL}},{key:"createReturnSignal",value:function(e){return{signal:this.RETURN_SIGNAL,data:e}}},{key:"isBreakSignal",value:function(e){return e===this.BREAK_SIGNAL}},{key:"isContinueSignal",value:function(e){return e===this.CONTINUE_SIGNAL}},{key:"isReturnSignal",value:function(e){return!!e&&e.signal===this.RETURN_SIGNAL}}]),e}();n.default=a},"./src/jsvm.ts":function(e,a,u){Object.defineProperty(a,"__esModule",{value:!0});var l=u("./src/scope.ts");a.Scope=l.default;var c=u("./src/ast_map.ts"),s=function(e){function a(e,r){t(this,a);var i=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return i.__context__=new l.default("root",null,[]),i.__callstack__=[],i.__context__.const("this",e),i.__inject_vars__=r,r&&i.inject(r),i.___inject_global_variable__(),i}return r(a,c.default),i(a,[{key:"init",value:function(e,t){var n=this;this.__context__=new l.default("root",null,[]),this.__callstack__=[],this.__context__.const("this",e),t&&Object.keys(t).forEach(function(e){return n.__context__.var(e,t[e])}),this.___inject_global_variable__()}},{key:"___inject_global_variable__",value:function(){var e=this,t={console:console,setTimeout:setTimeout,setInterval:setInterval,clearTimeout:clearTimeout,clearInterval:clearInterval,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,decodeURI:decodeURI,decodeURIComponent:decodeURIComponent,escape:escape,unescape:unescape,Infinity:1/0,NaN:NaN,isFinite:isFinite,isNaN:isNaN,parseFloat:parseFloat,parseInt:parseInt,Object:Object,Function:Function,Boolean:Boolean,Error:Error,EvalError:EvalError,RangeError:RangeError,ReferenceError:ReferenceError,SyntaxError:SyntaxError,TypeError:TypeError,URIError:URIError,Number:Number,Math:Math,Date:Date,String:String,RegExp:RegExp,Array:Array,JSON:JSON,Promise:o,Symbol:Symbol,Set:Set,Map:Map};Object.keys(t).forEach(function(n){return e.__context__.const(n,t[n])})}},{key:"execute",value:function(e){return"string"==typeof e&&(e=JSON.parse(e)),this.walk(e,this.__context__)}},{key:"inject",value:function(e){var t=this;e&&Object.keys(e).forEach(function(n){return t.__context__.var(n,e[n])})}},{key:"getRootScope",value:function(){return this.__context__}},{key:"runInScope",value:function(e,t){if(e instanceof l.default)return"string"==typeof t&&(t=JSON.parse(t)),this.walk(t,e);throw new Error("scope must be instance of Scope")}},{key:"getVariable",value:function(e){return this.__context__.get(e)}},{key:"reset",value:function(){var e=this,t=this.__context__.get("this");this.__context__=new l.default("root",null,[]),this.__callstack__=[],this.__context__.const("this",t),this.__inject_vars__&&Object.keys(this.__inject_vars__).forEach(function(t){return e.__context__.var(t,e.__inject_vars__&&e.__inject_vars__[t])}),this.___inject_global_variable__()}}]),a}();a.default=s},"./src/scope.ts":function(n,r,a){Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function n(e,r,i){return t(this,n),this.__type__="block",this.__variables__=new Map,this.__parent__=null,this.__function_parent__=null,this.__children__=[],"root"===e?(this.__type__=e,this.__variables__=new Map,this.__parent__=r,i&&this.__add_children__(i),this):this.__create_child_scope__(e,r,i)}return i(n,[{key:"__create_child_scope__",value:function(e,t,r){var i=Object.create(t||null);return i.__type__=e,i.__variables__=new Map,i.__parent__=t,i.__function_parent__=null,i.__children__=r||[],t instanceof n&&t.__add_children__(i),i}},{key:"__add_children__",value:function(t){if(t){var n;Array.isArray(t)?(n=this.__children__).push.apply(n,e(t)):this.__children__.push(t)}}},{key:"hasVariableInChain",value:function(e){return void 0!==this[e]}},{key:"hasVariable",value:function(e){return this.__variables__.has(e)}},{key:"getDecType",value:function(e){return this[e].decType}},{key:"get",value:function(e){var t=this[e];if(t)return t.value;throw new ReferenceError(e+" is not defined")}},{key:"set",value:function(e,t){var n=this[e];if(n){if("const"===n.decType)throw new TypeError("Assignment to constant variable.");return n.value=t,n.value}throw new ReferenceError(e+" is not defined")}},{key:"remove",value:function(e){return!!this[e]&&(delete this[e]&&this.__variables__.delete(e))}},{key:"var",value:function(e,t,n,r){this.__function_declaration__("var",e,t,n,r)}},{key:"func",value:function(e,t,n,r){this.__function_declaration__("function",e,t,n,r)}},{key:"let",value:function(e,t,n,r){this.__block_declaration__("let",e,t,n,r)}},{key:"const",value:function(e,t,n){this.__block_declaration__("const",e,t,n)}},{key:"__find_parent_function_scope__",value:function(e){if(e){var t=e.__parent__?e.__parent__.__type__:null;return"function"===t||"root"===t?e.__parent__||null:e.__find_parent_function_scope__(e.__parent__)}return null}},{key:"__block_declaration__",value:function(e,t,n,r,i){if(this.__variables__.has(t))throw new SyntaxError("Uncaught SyntaxError: Identifier '"+t+"' has already been declared");var a={decType:e,value:n};this.__variables__.set(t,a);var o=this,u=function(e){var n=o[t];return n.value=e,o.__variables__.set(t,n),i&&"function"==typeof i&&i(),n};return"const"===e&&(u=function(e){throw new TypeError("Assignment to constant variable")}),Object.defineProperty(this,t,{configurable:!0,enumerable:!0,get:function(){return r&&"function"==typeof r&&r(),o.__variables__.get(t)},set:u}),a}},{key:"__function_declaration__",value:function(e,t,n,r,i){var a=this.__variables__.get(t);if(a){var o=a.decType;if("let"===o||"const"===o)throw SyntaxError("Uncaught SyntaxError: Identifier '"+t+"' has already been declared");return a.decType=e,a.value=n,a}if("function"===this.__type__||"root"===this.__type__){var u={decType:e,value:n};this.__variables__.set(t,u);var l=this;return Object.defineProperty(this,t,{configurable:!0,enumerable:!0,get:function(){return r&&"function"==typeof r&&r(),l.__variables__.get(t)},set:function(e){var n=l[t];return n.value=e,l.__variables__.set(t,n),i&&"function"==typeof i&&i(),n}}),u}if(this.__function_parent__||(this.__function_parent__=this.__find_parent_function_scope__(this)),this.__function_parent__){var c=this.__function_parent__.__function_declaration__(e,t,n,r,i);if(c)return this.__variables__.set(t,c),c;throw new Error("执行器内部错误，上层function作用域返回一个空的变量")}throw new Error("执行器内部错误，无法找到一个合适的作用域声明"+e+"类型的变量")}}]),n}();r.default=o}})}); 
 			}); 
		define("npm/@mtfe/mt-weapp-api/dist/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.request=exports.removeStorage=exports.setStorage=exports.getStorage=exports.getLocation=exports.config=exports.wx=exports.wrapAPI=void 0;var e=require("../../mt-weapp-utils/lib/wx-promisify.js"),r=require("../../mt-weapp-request/lib/index.js"),t=require("../../mt-weapp-navigation/lib/index.js"),o=require("../../mt-weapp-log/dist/index.js"),a={request:null,throwError:!1,env:"production",proxy:null,proxyUrl:"https://portal-portm.sankuai.com/weapp/proxy-direct",userMis:"",portmToken:"",proxyUrlHeader:"X-WEAPP-PROXY-URL",proxyEnvHeader:"X-WEAPP-PROXY-ENV",proxyKeepHeader:"X-WEAPP-KEEP-HEADER",userMisHeader:"X-WEAPP-USER-MIS",portmTokenHeader:"X-WEAPP-PORTM-TOKEN"},i=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wx,o=arguments[2],i=(0,e.wxPromisify)(r,t);return function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,t).catch(function(e){var i="wx."+r+" failed: "+(e&&(e.errMsg||e.message))+", arguments: "+JSON.stringify(t);if(!1===o)return e;if(o||a.throwError)throw new Error(i);return console.error(i),e})}},n=i("getLocation",wx),p=i("getStorage"),s=i("setStorage"),u=i("removeStorage"),l=i("request"),c=(0,r.getMtRequest)(function(){return(a.request||l).apply(this,arguments)},a);Object.setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e};var f={};Object.setPrototypeOf(f,wx),Object.defineProperty(f,"request",{writable:!0,value:function(e){return c(e)}}),Object.defineProperty(f,"navigateTo",{writable:!0,value:function(e){var r=e.fail;return e.fail=function(){for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];(0,o.navigateError)(a,"navigateTo"),r&&r.apply(e,a)},(0,t.navigateTo)(e)}}),Object.defineProperty(f,"reLaunch",{writable:!0,value:function(e){var r=e.fail;return e.fail=function(){for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];(0,o.navigateError)(a,"reLaunch"),r&&r.apply(e,a)},wx.reLaunch(e)}}),Object.defineProperty(f,"switchTab",{writable:!0,value:function(e){var r=e.fail;e.fail=function(){for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];(0,o.navigateError)(a,"switchTab"),r&&r.apply(e,a)},wx.switchTab(e)}}),Object.defineProperty(f,"redirectTo",{writable:!0,value:function(e){var r=e.fail;return e.fail=function(){for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];(0,o.navigateError)(a,"redirectTo"),r&&r.apply(e,a)},(0,t.redirectTo)(e)}}),exports.wrapAPI=i,exports.wx=f,exports.config=a,exports.getLocation=n,exports.getStorage=p,exports.setStorage=s,exports.removeStorage=u,exports.request=c; 
 			}); 
		define("npm/@mtfe/mt-weapp-authrize/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.authrize=exports.state=exports.config=void 0;var e=require("./types"),t=require("../mt-weapp-promise/index.js"),i=require("../mt-weapp-api/dist/index.js").wx,a=exports.config={dirname:"/npm/@mtfe/mt-weapp-authrize",pageConfig:{tipText:"请完成微信授权以继续使用",image:{src:"https://p0.meituan.net/codeman/1d662d64d96895705a1d0b9433fd0fa8175649.png",mode:"aspectFit"}}},r=exports.state={cache:null};exports.authrize=function(n,p){return new t(function(t,o){e.AUTH_TYPE[n]?!1===p.withCredentials&&r.cache?t(r.cache):(r.resolve=function(e){i.navigateBack(),setTimeout(function(){r.cache=e,t(e)},200)},r.reject=o,i.navigateTo({url:a.dirname+"/page/index?type="+n})):o("API "+n+" is not supported")})}; 
 			}); 
		define("npm/@mtfe/mt-weapp-authrize/types.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.AUTH_TYPE={userInfo:"userInfo"}; 
 			}); 
		define("npm/@mtfe/mt-weapp-city/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("../mt-weapp-promise/index.js"),o=require("../mt-weapp-api/dist/index.js").wx,e=void 0,n=void 0,r=void 0,i={storageName:"mt_cityInfo",noCache:!1},c={_locProm:null,_locCityProm:null,_cityProm:null,_ipGeoProm:null},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{latest:!1,useIpGeo:!1},n=e.latest,i=e.useIpGeo,l=e.timeout,a=void 0===l?"":l;return r&&!n?t.resolve(r):c._locProm?c._locProm:(c._locProm=new t(function(t,e){a&&setTimeout(function(){c._locProm&&u().then(function(o){r=o,c._locProm=null,t(r)}).catch(function(t){c._locProm=null,e({code:"103",msg:"通过ip获取经纬度失败",error:t})})},a),o.getLocation({type:"wgs84",success:function(o){t(r=o)},fail:function(o){i?u().then(function(o){t(r=o)}).catch(function(t){e({code:"103",msg:"通过ip获取经纬度失败",error:t})}):e({code:"101",msg:"wx获取定位信息失败",error:o})},complete:function(){c._locProm=null}})}),c._locProm)},u=function(){return c._ipGeoProm?c._ipGeoProm:(c._ipGeoProm=new t(function(t,e){o.request({url:"https://apimobile.meituan.com/locate/v2/ip/loc?client_source=mt-weapp",header:{"content-type":"application/json","X-Default-Location":1,X_WEAPP_KEEP_HEADER:"X-Default-Location"},success:function(o){c._ipGeoProm=null;var n=o.data&&o.data.data;n&&n.lng&&n.lat&&t({latitude:n.lat,longitude:n.lng}),e(o)},fail:function(t){c._ipGeoProm=null,e(t)}})}),c._ipGeoProm)},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{latest:!1,useIpGeo:!1},r=e.latest;return n&&!r?t.resolve(n):c._locCityProm?c._locCityProm:(c._locCityProm=new t(function(t,r){l(e).then(function(e){o.request({url:"https://i.meituan.com/locate/latlng/"+e.latitude+","+e.longitude+".json",data:{isMars:!1},header:{cookie:"_source=miniapp"},success:function(o){var e=o.data.data;c._locCityProm=null,e&&e.id&&t(n=e),r({code:"102",msg:"获取定位城市失败",error:e})},fail:function(t){c._locCityProm=null,r({code:"102",msg:"获取定位城市失败",error:t})}})}).catch(function(t){c._locCityProm=null,r(t)})}),c._locCityProm)},s=function(t,e){try{o.setStorageSync(i.storageName,{value:t,timestamp:e||new Date((new Date).toLocaleDateString()).getTime()})}catch(t){console.log(t)}},m=function(){try{return o.getStorageSync(i.storageName)}catch(t){return console.log(t),null}};exports.cityInfo=function(){return e},exports.location=function(){return r},exports.localCity=function(){return n},exports.getCityInfo=function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{latest:!1,useIpGeo:!1,timeout:0},n=o.latest;return e&&!n?t.resolve(e):c._cityProm?c._cityProm:(c._cityProm=new t(function(t,n){a(o).then(function(o){if(!i.noCache){var n=m(i.storageName);n&&n.value?(o.id===n.value.id&&(n.value.lat=o.lat,n.value.lng=o.lng,s(n.value,n.timestamp)),o=n.value):s(o)}c._cityProm=null,t(e=o)}).catch(function(t){c._cityProm=null,n(t)})}),c._cityProm)},exports.getLocalCity=a,exports.getLocation=l,exports.setCityInfo=function(t,o){return t&&t.id&&t.name?(e=t,i.noCache||s(t,o?o.timestamp:null),{code:"success",msg:"设置城市信息成功"}):{code:"error",msg:"缺少城市信息"}},exports.setConfig=function(t){return Object.assign(i,t)},exports.getConfig=function(){return i},exports.getGeoByIp=u; 
 			}); 
		define("npm/@mtfe/mt-weapp-event/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var u=t[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(e,u.key,u)}}return function(t,n,u){return n&&e(t.prototype,n),u&&e(t,u),t}}(),n=exports.Event=function(){function n(){e(this,n),this.queue={}}return t(n,[{key:"on",value:function(e,t){"function"==typeof t&&(this.queue[e]||(this.queue[e]=[]),this.queue[e].push(t))}},{key:"emit",value:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),u=1;u<t;u++)n[u-1]=arguments[u];this.queue[e]&&Array.isArray(this.queue[e])&&this.queue[e].forEach(function(e){return e.apply(n[0],n)})}},{key:"off",value:function(e,t){var n=this.queue[e];if(n&&n.length){var u=n.indexOf(t);n.splice(u,1)}}}]),n}();exports.default=new n; 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.App=function(e){var r=(0,o.hookLifeCycle)(e,n.mainLoader,"app");e.onLaunch=r("onLaunch"),e.onShow=r("onShow"),e.onError=r("onError"),e.onHide=r("onHide"),e.onUnlaunch=r("onUnlaunch"),n.mainLoader.App.call(this,e)};var o=require("./utils"),n=require("./start"); 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/constant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.STORE_KEY="__mt_hotfix_obj__",exports.PAGE_NAME="__mt_hotfix_pagename__",exports.cacheKey="mtweapp_hotfix"; 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./app");Object.keys(e).forEach(function(r){"default"!==r&&"__esModule"!==r&&Object.defineProperty(exports,r,{enumerable:!0,get:function(){return e[r]}})});var r=require("./page");Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return r[e]}})});var t=require("./sub-page");Object.keys(t).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return t[e]}})});var u=require("./start");Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(exports,e,{enumerable:!0,get:function(){return u[e]}})}); 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.pageHooks=void 0,exports.Page=function(n){var r=(0,o.hookLifeCycle)(n);a.forEach(function(o){n[o]=r(o)}),n.onPageScroll=n.onPageScroll||function(){},e.mainLoader.Page.call(this,n)};var o=require("./utils"),e=require("./start"),a=exports.pageHooks=["onLoad","onShow","onReady","onHide","onUnload","onTabItemTap","onPullDownRefresh","onShareAppMessage","onReachBottom"]; 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/start.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.startSubPackage=exports.start=exports.mainLoader=exports.HotfixLoader=void 0;var r=function(){function e(e,t){for(var r=0;r<t.length;r++){var s=t[r];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,r,s){return r&&e(t.prototype,r),s&&e(t,s),t}}(),s=e(require("../../mt-weapp-polling/lib/index.js")),a=require("../../mt-weapp-request/lib/request.js"),n=e(require("../../mt-weapp-request/lib/retry.js")),i=require("./constant"),o=require("../../mt-weapp-promise/index.js"),u=exports.HotfixLoader=function(){function e(r){var o=this;t(this,e),this.Page=Page,this.App=App,this.env="pre",this.version="default",this.updateCb=[],this.getData=function(){return o._request("https://portal-portm.meituan.com/weapp/hotfix/v3/"+o.env+"/client/"+o.appName+"/"+o.version).then(function(e){if(e){var t=e.data;if(t){var r=t.hash;r!==o.hash&&(o.updateCb.forEach(function(e){return e(r,o.hash,t)}),o.hash=r,wx.setStorage({key:i.cacheKey,data:o.store=t}))}}})},Object.assign(this,r),this.request=this.request||a.promiseRequest,this._request=(0,a.getRequest)(function(e){return(o.request||a.promiseRequest)(e)},{throwError:!0},n.default),s.default.register(this.getData),this.store=wx.getStorageSync(i.cacheKey),this.store||(this.preTask=this.getData())}return r(e,[{key:"onUpdate",value:function(e){this.updateCb.push(e)}},{key:"preTask",set:function(e){var t=this;this._task=e,o.resolve(e).then(function(){t._task=null})},get:function(){return this._task}}]),e}(),p=exports.mainLoader=void 0;exports.start=function(e){return exports.mainLoader=p=new u(e)},exports.startSubPackage=function(e){return new u(Object.assign({},p,{appName:e}))}; 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/sub-page.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSubPage=void 0;var e=require("./utils"),r=require("./start"),t=require("./page");exports.createSubPage=function(a){var o=(0,r.startSubPackage)(a);return function(r){var a=(0,e.hookLifeCycle)(r,o);t.pageHooks.forEach(function(e){r[e]=a(e)}),o.Page.call(this,r)}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-hotfix/lib/utils.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.hookLifeCycle=void 0;var e=require("../../mt-weapp-jsvm/lib/index.js"),t=function(e){return e&&e.__esModule?e:{default:e}}(require("../../balloon-inflate/build/balloon-inflate.min.js")),r=require("./start"),n=require("./constant"),o=require("../../mt-weapp-promise/index.js"),i=function(r,o,i){var a=o.store;if(r[n.STORE_KEY])return r[n.STORE_KEY];i||(i=r.route||r.__route__);var u=void 0;if(a&&i&&(u=a.data)&&(u=u[i])){r[n.PAGE_NAME]=i;var c=(0,e.getVm)(),p=function(r,n){var i=function(t){Object.assign(a,t),(0,e.injectIntoScope)(u,t)},a=Object.assign({app:getApp(),page:r,Page:i,App:i,$import:function(r){return o._request({url:r}).then(function(r){var n=r.jscode||r,o={exports:{}},i=(0,e.getScope)({module:o,exports:o.exports});return c.runInScope(i,n.type?n:(0,t.default)(n)),i.module.value.exports})}},o.injections,n),u=(0,e.getScope)(a);return u.ctx=a,u};return r[n.STORE_KEY]=u.map(function(e){var n=e.js,o=e.json,i=e.waitFix,a=p(r,o);return n&&c.runInScope(a,n.type?n:e.js=(0,t.default)(n)),{ctx:a.ctx,waitFix:i}})}},a=function(e){console.error(e)};exports.hookLifeCycle=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.mainLoader,n=arguments[2];return function(r){var u=e[r];return function(){for(var e=this,c=arguments.length,p=Array(c),s=0;s<c;s++)p[s]=arguments[s];var f=function(){return u&&u.apply(e,p)},l=function(){var u=i(e,t,n);if(u){var c=[];if(u.forEach(function(t){var n=t.ctx[r];if(n){var i=n.apply(e,p);t.waitFix&&c.push(o.resolve(i))}}),c.length)return o.all(c).catch(a).then(f)}return f()};if(t.store)return l();t.preTask||(t.preTask=t.getData()),t.preTask=t.preTask.then(function(){l()}).catch(a)}}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-jsvm/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getScope=exports.injectIntoScope=exports.getVm=exports.vm=exports.Scope=void 0;var e=require("../../jsvm/build/jsvm.js");Object.defineProperty(exports,"Scope",{enumerable:!0,get:function(){return e.Scope}});var t=function(e){return e&&e.__esModule?e:{default:e}}(e),r=exports.vm=void 0,o=exports.getVm=function(){return r||(exports.vm=r=new t.default(getApp(),{wx:wx,app:getApp(),requirePlugin:"undefined"==typeof requirePlugin||requirePlugin,require:require,getCurrentPages:getCurrentPages})),r},n=exports.injectIntoScope=function(e,t){t&&Object.keys(t).forEach(function(r){e.var(r,t[r])})};exports.getScope=function(t){r||o();var u=new e.Scope("function",r.getRootScope());return n(u,t),u}; 
 			}); 
		define("npm/@mtfe/mt-weapp-log/dist/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,o){return n(e)||r(e,o)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function r(e,t){var r=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return r}function n(e){if(Array.isArray(e))return e}function o(t){return h.async(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,h.awrap(d.all([t.getOpenId(),(0,g.getStorage)("lifelog"),(0,g.request)({url:"https://portal-portm.meituan.com/weapp/check/log/reportUser",method:"GET"})]).then(function(t){var r=e(t,3),n=r[0],o=r[1],a=r[2].data.find(function(e){return e.op===n});a&&-1===o.indexOf(a.key)&&(o.unshift(a.key),o.length>5&&(o.length=5),wx.setStorage({key:"lifelog",data:o}),m.Logan&&m.Logan.report({unionId:"openid|"+n,uploadSource:"mt-weapp"}))}).catch(function(e){a(e.errorMsg)}));case 2:m.isReport=!0,m.tempArr.forEach(function(e){a(e)}),m.tempArr=[];case 5:case"end":return r.stop()}},null,this)}function a(e){m.Logan&&m.Logan.log(e)}function i(e,t,r){var n=e+":{path:"+t+"}，param:"+JSON.stringify(r)+"，"+(0,g.formatDate)();m.isReport?a(n):m.tempArr.push(n)}function u(e,t){if(e){var r="{"+(e.method||"get")+"} {"+e.url+"}: \n    "+t.statusCode+" 响应片段："+(t.data&&JSON.stringify(t.data).substring(0,100)||"data为空")+" 时间："+(0,g.formatDate)();m.isReport?a(r):m.tempArr.push(r)}}function s(e){var t=e;e instanceof Object&&(t="",Object.keys(e).forEach(function(r){t+=r+": "+e[r]+" "})),m.isReport?a(t):m.tempArr.push(t)}function p(e){var t=e.complete;return e.complete=function(r){try{u(e,r)}finally{t&&t.apply(this,arguments)}},m.request(e)}function c(e){try{m.owl&&m.owl.error.onError(e)}catch(e){console.log("errorReport catch:"+e.stack||e)}}function l(e){var t=(0,g.getCurrentPage)(),r=(0,g.getURLfFromPage)(t),n=e.split("\n"),o=r.split("?")[0].split("/")[0],a=n[1]&&n[1].split(";"),i=e+" \n报错子包："+o+"\n页面地址："+r+"\n浏览路径：["+f.default.pageTrace.serialize()+"]",u=wx.getSystemInfoSync();return a&&(i=i.replace(a[0],u.SDKVersion+"~~"+a[0]+";")),s(i),i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.config=void 0,exports.checkReportUser=o,exports.loganlog=a,exports.addLifeLog=i,exports.addRequestLog=u,exports.addCommonLog=s,exports.init=function(e){Object.assign(m,e)},exports.setConf=function(e){Object.assign(m,e)},exports.request=p,exports.errorReport=c,exports.navigateError=function(e,t){c(e[0]&&e[0].errMsg)},exports.app=function(e){var t=e.onLaunch,r=e.onShow,n=e.onHide,a=e.preError,u=e.preNotFound,p=e.Logan;m.Logan=p,Object.assign(e,{onLaunch:function(e){o(this),i("onLaunch",e.path,e.query),f.default.enterPage=e.path,f.default.scene=e.scene,f.default.query=e.query,f.default.referrerInfo=e.referrerInfo,t&&t.call(this,e)},onShow:function(e){i("onShow",e.path,e.query),r&&r.call(this,e)},onHide:function(){i("onHide","",{}),n&&n.call(this)},preError:function(e){return e=l(e),a&&a.call(this,e),e},preNotFound:function(e){var t=e.path,r=e.query,n=e.isEntryPage,o=(0,g.getCurrentPage)();s({"onPageNotFound-isEntry":n,path:t,query:JSON.stringify(r),scene:f.default.scene,pageUrl:n?"app":o.route}),u&&u.call(this,e);var a=(0,g.serialize)(r||{});return e.path+=a?"?"+a:"",e.path+="\n路径:["+f.default.pageTrace.serialize()+"]",e}}),m.App(e)},exports.page=function(e){var t=e.onLoad,r=e.onReady,n=e.onShow,o=e.onHide;Object.assign(e,{onLoad:function(e){i("onLoad",(0,g.getURLfFromPage)(this),e),t&&t.call(this,e)},onReady:function(){i("onReady",(0,g.getURLfFromPage)(this),{}),r&&r.call(this)},onShow:function(){var e=(0,g.getURLfFromPage)(this);i("onShow",e,{}),y.push({time:Date().toString(),path:e}),n&&n.call(this)},onHide:function(){i("onHide",(0,g.getURLfFromPage)(this),{}),o&&o.call(this)}}),m.Page(e)};var f=function(e){return e&&e.__esModule?e:{default:e}}(require("./storage")),g=require("./util"),h=require("../../../regenerator-runtime/runtime.js"),d=require("../../mt-weapp-promise/index.js"),y=f.default.pageTrace,m=exports.config={env:"dev",reportUrl:"https://catfront.dianping.com",project:"default",os:"Unknown",request:p,App:App,Page:Page,isReport:!1,tempArr:[],Logan:null,owl:null}; 
 			}); 
		define("npm/@mtfe/mt-weapp-log/dist/storage.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e={enterPage:"",pageTrace:[]};e.pageTrace.serialize=function(){return this.reduce(function(e,r){return e+=r.time+"  "+r.path+" \n"},"")},exports.default=e; 
 			}); 
		define("npm/@mtfe/mt-weapp-log/dist/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.serialize=e,exports.getCurrentPage=function(){var e=getCurrentPages()||[];return e.length>0?e[e.length-1]:{route:"unknown",options:{}}},exports.getURLfFromPage=function(t){var n=t.route,o=void 0===n?"":n,r=t.__route__,u=void 0===r?"":r,s=t.options,i=void 0===s?{}:s,g=o||u||"Unknown",a=e(i);return g+(a?"?"+a:"")},exports.formatDate=function(){var e=new Date(new Date);return e.getFullYear()+"-"+(e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1)+"-"+(e.getDate()<10?"0"+e.getDate():e.getDate())+" "+(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())+":"+(e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds())+" "+e.getMilliseconds()},exports.getStorage=function(e){return new t(function(t,n){wx.getStorage({key:e,success:function(e){t(e.data)},fail:function(){t([])}})})},exports.request=function(e){return new t(function(t,n){e.success=function(e){t(e)},e.fail=function(e){n(e)},wx.request(e)})};var t=require("../../mt-weapp-promise/index.js"); 
 			}); 
		define("npm/@mtfe/mt-weapp-navigation/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=exports.tabConfig=["/index/pages/mt/mt","/index/pages/order/order-list","/index/pages/mine/mine"],t=(exports.redirectTo=function(e){t(e.url)?wx.switchTab(e):wx.redirectTo(e)},exports.navigateTo=function(e){t(e.url)?wx.switchTab(e):wx.navigateTo(e)},function(t){return t=t.split("?")[0],!!e&&e.some(function(e){return t.indexOf(e)>-1})}); 
 			}); 
		define("npm/@mtfe/mt-weapp-perf/dist/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Perf=exports.config=void 0;var t=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),r=require("../../mt-weapp-utils/lib/func.js"),n={owl:null},s=function(){function s(){var t=this;e(this,s),this.spots=new Map,this.queue=[],this.reporterPool={},this.flush=(0,r.throttle)(function(){var e=n.owl;if(!e)throw new Error("Owl instance required!");var r=t.reporterPool;t.queue.forEach(function(t){var n=t.batchId,s=r[n];s||(s=r[n]=e.newMetric()),s.setTags(t.tags),s.setMetric(t.metric,t.span)}),t.queue.length=0,Object.keys(r).forEach(function(e){var t=r[e];t.report(),t.clearMetric()})},2e3)}return t(s,[{key:"start",value:function(e){this.spots.set(e,Date.now())}},{key:"end",value:function(e,t,r,n){this.spots.has(e)&&(this.queue.push({tags:r,batchId:n,span:Date.now()-this.spots.get(e),metric:t}),this.spots.delete(e),this.flush())}},{key:"report",value:function(e,t,r,n){this.queue.push({tags:r,batchId:n,span:e,metric:t})}}]),s}(),o=new s;exports.default=o,exports.config=n,exports.Perf=s; 
 			}); 
		define("npm/@mtfe/mt-weapp-polling/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function e(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,n,l){return n&&e(t.prototype,n),l&&e(t,l),t}}(),n=exports.Polling=function(){function n(){e(this,n),this.interval=3e4,this.callbacks=[],this.stop()}return t(n,[{key:"launch",value:function(){var e=this;this.pollId||setInterval(function(){e.callbacks.forEach(function(e){return e()})},this.interval)}},{key:"stop",value:function(){this.pollId&&clearInterval(this.pollId)}},{key:"register",value:function(e){this.callbacks.push(e),this.launch()}},{key:"unregister",value:function(e){var t=this.callbacks.indexOf(e);this.callbacks.splice(t,1)}}]),n}();exports.default=new n; 
 			}); 
		define("npm/@mtfe/mt-weapp-promise/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(){}function e(n,e){return function(){n.apply(e,arguments)}}function t(n){if("object"!==l(this))throw new TypeError("Promises must be constructed via new");if("function"!=typeof n)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(n,this)}function o(n,e){for(;3===n._state;)n=n._value;0!==n._state?(n._handled=!0,t._immediateFn(function(){var t=1===n._state?e.onFulfilled:e.onRejected;if(null!==t){var o;try{o=t(n._value)}catch(n){return void r(e.promise,n)}i(e.promise,o)}else(1===n._state?i:r)(e.promise,n._value)})):n._deferreds.push(e)}function i(n,o){try{if(o===n)throw new TypeError("A promise cannot be resolved with itself.");if(o&&("object"===(void 0===o?"undefined":l(o))||"function"==typeof o)){var i=o.then;if(o instanceof t)return n._state=3,n._value=o,void u(n);if("function"==typeof i)return void c(e(i,o),n)}n._state=1,n._value=o,u(n)}catch(e){r(n,e)}}function r(n,e){n._state=2,n._value=e,u(n)}function u(n){2===n._state&&0===n._deferreds.length&&t._immediateFn(function(){n._handled||t._unhandledRejectionFn(n._value)});for(var e=0,i=n._deferreds.length;e<i;e++)o(n,n._deferreds[e]);n._deferreds=null}function f(n,e,t){this.onFulfilled="function"==typeof n?n:null,this.onRejected="function"==typeof e?e:null,this.promise=t}function c(n,e){var t=!1;try{n(function(n){t||(t=!0,i(e,n))},function(n){t||(t=!0,r(e,n))})}catch(n){if(t)return;t=!0,r(e,n)}}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},s=setTimeout;t.prototype.catch=function(n){return this.then(null,n)},t.prototype.then=function(e,t){var i=new this.constructor(n);return o(this,new f(e,t,i)),i},t.all=function(n){var e=Array.prototype.slice.call(n);return new t(function(n,t){function o(r,u){try{if(u&&("object"===(void 0===u?"undefined":l(u))||"function"==typeof u)){var f=u.then;if("function"==typeof f)return void f.call(u,function(n){o(r,n)},t)}e[r]=u,0==--i&&n(e)}catch(n){t(n)}}if(0===e.length)return n([]);for(var i=e.length,r=0;r<e.length;r++)o(r,e[r])})},t.resolve=function(n){return n&&"object"===(void 0===n?"undefined":l(n))&&n.constructor===t?n:new t(function(e){e(n)})},t.reject=function(n){return new t(function(e,t){t(n)})},t.race=function(n){return new t(function(e,t){for(var o=0,i=n.length;o<i;o++)n[o].then(e,t)})},t._immediateFn="function"==typeof setImmediate&&function(n){setImmediate(n)}||function(n){s(n,0)},t._unhandledRejectionFn=function(n){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",n)},t._setImmediateFn=function(n){t._immediateFn=n},t._setUnhandledRejectionFn=function(n){t._unhandledRejectionFn=n},module.exports=t; 
 			}); 
		define("npm/@mtfe/mt-weapp-queue/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../@analytics/wechat-sdk/lib/index.js"),o=[],r={pageView:e.pageView,moduleClick:e.moduleClick,moduleView:e.moduleView,order:e.order,pay:e.pay},i=["pageView","moduleClick","moduleView","order","pay"];i.forEach(function(i){e[i]=function(){for(var u=arguments.length,a=Array(u),n=0;n<u;n++)a[n]=arguments[n];o.push(function(){return r[i].apply(e,a)})}});exports.default=function(){o.forEach(function(e){e()}),i.forEach(function(o){e[o]=r[o]})}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/cache.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCacheKey=void 0,exports.default=function(e){var a=this,o=(0,t.wxPromisify)("getStorage",wx);return function(t){var n=t.cache,i=t.delay,u=void 0===i?1e3:i;if(n){var c=r(a.config.env,t.url,t.data),s=function r(){return e.call(a,t).then(function(e){return 200===e.statusCode&&wx.setStorage({key:c,data:e}),"defer"===n&&(e.freshCache=r),e})};return o({key:c}).catch(function(e){console.log("[mt-weapp-request]: fail to fetch "+t.url+" cached, reason: "+e.errMsg+"!")}).then(function(e){var t=void 0;return e&&(t=e.data)?("defer"===n?(t.freshCache=s,t.fromStorage=!0):setTimeout(s,u),e.data):s()})}return e(t)}};var e=require("./common"),t=require("../../mt-weapp-utils/lib/wx-promisify.js"),r=exports.getCacheKey=function(t,r,a){return"mtweapp_api_"+((0,e.isProd)(t)?"":t+"_")+r+(0,e.getBodyStr)(a)}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/common.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.getBodyStr=function(t){return t?JSON.stringify(t):""},exports.isProd=function(t){return"production"===t||!t}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/ext.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cancatQuery=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.default=function(e){return function(r){var o=r.type,n=r.url,u=r.query;return o&&"form"===o.toLocaleLowerCase()&&(r.header["content-type"]="application/x-www-form-urlencoded"),u&&(r.url=t(n,u),delete r.query),e(r)}};var r=require("../../mt-weapp-url/url.js"),t=exports.cancatQuery=function(t,o){var n=(0,r.urlParse)(t);switch(void 0===o?"undefined":e(o)){case"string":var u=(0,r.parse)(o);Object.assign(n.query,u);break;case"object":Object.assign(n.query,o)}return n.format()}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getMtRequest=void 0;var t=e(require("../../mt-weapp-utils/lib/pipe.js")),r=e(require("./mq")),u=e(require("./proxy")),i=require("./request"),s=e(require("./cache")),l=e(require("./retry")),q=e(require("./ext"));exports.getMtRequest=function(e,a){return(0,i.getRequest)(e,a,(0,t.default)(r.default,l.default,u.default,s.default,q.default))}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/mq.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function n(n){if(Array.isArray(n)){for(var t=0,e=Array(n.length);t<n.length;t++)e[t]=n[t];return e}return Array.from(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(n){return function(t){return e.add(n,t)}};var t=require("../../mt-weapp-promise/index.js"),e=exports.requestMQ={map:{},mq:[],running:[],MAX_REQUEST:4,push:function(n){for(n.t=+new Date;this.mq.indexOf(n.t)>-1||this.running.indexOf(n.t)>-1;)n.t+=10*Math.random()>>0;this.mq.push(n.t),this.map[n.t]=n},next:function(){var t=this;if(0!==this.mq.length&&this.running.length<this.MAX_REQUEST){var e=this.mq.shift(),r=this.map[e];return this.running.push(r.t),r.fn.apply(r,n(r.args)).then(function(n){return t.running.splice(t.running.indexOf(r.t),1),delete t.map[r.t],t.next(),r.handle.resolve(n)}).catch(function(n){return t.running.splice(t.running.indexOf(r.t),1),delete t.map[r.t],t.next(),r.handle.reject(n)})}},add:function(n){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r=r||[];var u=void 0,s=new t(function(n,t){u={resolve:n,reject:t}});return this.push({fn:n,args:r,handle:u}),this.next(),s}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/proxy.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(o){var t=this,a=0;return function(n){var d=n.method,u=n.proxy,s=t.config,i=s.env;if(null==u?null==s.proxy?!(0,e.isProd)(i):s.proxy:u){var l=n.url;!n.data||d&&"get"!==d.toLowerCase()||(l=(0,r.cancatQuery)(l,n.data),delete n.data);var p=n.header,y=Object.keys(p).join(","),x="["+i+"]["+(d||"GET")+"]["+a+"] Request: "+l+", headers: "+y+", body: "+(0,e.getBodyStr)(n.data);return p[s.proxyKeepHeader]=y,p[s.proxyUrlHeader]=l,p[s.proxyEnvHeader]=i,p[s.userMisHeader]=s.userMis,p[s.portmTokenHeader]=s.portmToken,n.url=s.proxyUrl+"?seq="+a++,o(n).then(function(e){var r=e.header["X-WEAPP-PROXIED"];return r&&r!==l&&(x="[proxied]"+x+"\nProxy to: "+r),console.log(x),e})}return o(n)}};var e=require("./common"),r=require("./ext"); 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/request.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getRequest=exports.promiseRequest=void 0;var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.MtRequest=function(){return{request:o.apply(null,arguments)}};var t=require("../../mt-weapp-utils/lib/wx-promisify.js"),r=exports.promiseRequest=(0,t.wxPromisify)("request",wx),o=exports.getRequest=function(t,o,u){var s=function t(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"===(void 0===r?"undefined":e(r))?o=r:o.url=r,o.header||(o.header={}),t._request(o)};return t=t||r,s.config=o||{},s.use=function(e){s._request=e.call(s,s._request)},s._request=u?u.call(s,t):t,s}; 
 			}); 
		define("npm/@mtfe/mt-weapp-request/lib/retry.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(r){var e=this;return function(t){var n=e.config,u=t.retry||1;return function e(){return r(t).catch(function(r){return r}).then(function(r){if(r&&"request:ok"==r.errMsg)return r;if(u>0)return u--,e();if(console.log("[mt-weapp-request failed]: "+t.url+", "+(r&&(r.errMsg||r.message))),n.throwError)throw new Error(r);return r})}()}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-sdks/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports={citySDK:require("../mt-weapp-city/index.js"),loginSDK:require("../../../login/index.js"),perf:require("../mt-weapp-perf/dist/index.js").default,event:require("../mt-weapp-event/lib/index.js").default,lxSDK:require("../../@analytics/wechat-sdk/lib/index.js"),apiSDK:require("../mt-weapp-api/dist/index.js"),urlSDK:require("../mt-weapp-url/url.js")}; 
 			}); 
		define("npm/@mtfe/mt-weapp-url/parse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../mt-weapp-utils/lib/parse.js");Object.keys(e).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(exports,t,{enumerable:!0,get:function(){return e[t]}})}); 
 			}); 
		define("npm/@mtfe/mt-weapp-url/stringify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../mt-weapp-utils/lib/stringify.js");Object.keys(e).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(exports,t,{enumerable:!0,get:function(){return e[t]}})}); 
 			}); 
		define("npm/@mtfe/mt-weapp-url/url.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.urlParse=exports.parse=exports.stringify=void 0;var r=function(){function r(r,t){var e=[],i=!0,n=!1,s=void 0;try{for(var o,a=r[Symbol.iterator]();!(i=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(r){n=!0,s=r}finally{try{!i&&a.return&&a.return()}finally{if(n)throw s}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return r(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),t=require("./stringify"),e=require("./parse");exports.stringify=t.stringify,exports.parse=e.parse;exports.urlParse=function(i){var n=i.match(/^(https?:)?(\/\/)?([^/?#]+)?(\/[^?#]*)?(\?([^#]*))?#?(.*)$/);if(!n)throw new Error("[urlSDK]parse error: wrong url"+i);var s=r(n,8),o=s[1],a=s[3],h=s[4],u=void 0===h?"":h,f=s[5],p=s[6],c=s[7];return{protocol:o,host:a,hostname:a.split(":")[0],search:f,pathname:u,hash:c,href:i,query:(0,e.parse)(p),getSearch:function(){var r=(0,t.stringify)(this.query);return r&&"?"+r||""},format:function(){var r=this.getSearch();return this.href=o+"//"+this.host+u+r+(this.hash?"#"+this.hash:""),this.href}}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-utils/lib/func.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.noop=function(){};exports.cached=function(t,r){var e=new Map,n=function(){for(var n=arguments.length,o=Array(n),u=0;u<n;u++)o[u]=arguments[u];var a=r||o[0],c=e.get(a);return c||(c=t.apply(this,o),e.set(a,c)),c};return n.cache=e,n},exports.throttle=function(t,r){var e=void 0;return function(){for(var n=this,o=arguments.length,u=Array(o),a=0;a<o;a++)u[a]=arguments[a];return e||(e=setTimeout(function(){t.apply(n,u),e=null},r))}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-utils/lib/hex.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.isHexTable=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; 
 			}); 
		define("npm/@mtfe/mt-weapp-utils/lib/parse.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){if(0===e.length)return[];if(1===e.length)return[e.charCodeAt(0)];for(var i=[],n=0;n<e.length;++n)i[i.length]=e.charCodeAt(n);return i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.parse=function(r,l,f){var o={};if("string"!=typeof r||0===r.length)return o;for(var s=l?e(l+""):n,c=f?e(f+""):t,h=s.length,u=c.length,a=decodeURIComponent,g=[],p=0,v=0,d=0,x="",C="",b=!1,A=!1,O=0,y=0;y<r.length;++y){var H=r.charCodeAt(y);if(H===s[v]){if(++v===h){var T=y-v+1;if(d<u){if(!(p<T)){p=y+1,v=d=0;continue}x+=r.slice(p,T),b&&(x=a(x))}else p<T&&(C+=r.slice(p,T),A&&(C=a(C))),b&&(x=a(x));if(-1===g.indexOf(x))o[x]=C,g[g.length]=x;else{var _=o[x];_.pop?_[_.length]=C:o[x]=[_,C]}b=A=!1,x=C="",O=0,p=y+1,v=d=0}}else{if(v=0,d<u){if(H===c[d]){if(++d===u){var j=y-d+1;p<j&&(x+=r.slice(p,j)),O=0,p=y+1}continue}if(d=0,!b){if(37===H){O=1;continue}if(O>0){if(i.isHexTable[H]){3==++O&&(b=!0);continue}O=0}}if(43===H){p<y&&(x+=r.slice(p,y)),x+=" ",p=y+1;continue}}43===H?(p<y&&(C+=r.slice(p,y)),C+=" ",p=y+1):A||(37===H?O=1:O>0&&(i.isHexTable[H]?3==++O&&(A=!0):O=0))}}if(p<r.length)d<u?x+=r.slice(p):v<h&&(C+=r.slice(p));else if(0===d)return o;if(b&&(x=a(x)),A&&(C=a(C)),-1===g.indexOf(x))o[x]=C,g[g.length]=x;else{var m=o[x];m.pop?m[m.length]=C:o[x]=[m,C]}return o};var i=require("./hex"),n=[38],t=[61]; 
 			}); 
		define("npm/@mtfe/mt-weapp-utils/lib/pipe.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e,r){return function(){return r.call(this,e.apply(this,arguments))}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(){for(var r=arguments.length,t=Array(r),n=0;n<r;n++)t[n]=arguments[n];return t.reduce(function(r,t){return e(r,t)})}; 
 			}); 
		define("npm/@mtfe/mt-weapp-utils/lib/stringify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return"string"==typeof e?e:"number"==typeof e&&isFinite(e)?""+e:"boolean"==typeof e?e?"true":"false":"object"===(void 0===e?"undefined":o(e))?JSON.stringify(e):e}Object.defineProperty(exports,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};exports.stringify=function(t,n){var r=n||{},i=r.sep,f=void 0===i?"&":i,y=r.eq,u=void 0===y?"=":y,s=r.encode,l=void 0===s?encodeURIComponent:s;if(null!==t&&"object"===(void 0===t?"undefined":o(t))){for(var c=Object.keys(t),p=c.length,b=p-1,d="",a=0;a<p;++a){var v=c[a],m=t[v],S=l(e(v))+u;if(Array.isArray(m)){for(var g=m.length,j=g-1,O=0;O<g;++O)d+=S+l(e(m[O])),O<j&&(d+=f);g&&a<b&&(d+=f)}else d+=S+l(e(m)),a<b&&(d+=f)}return d}return""}; 
 			}); 
		define("npm/@mtfe/mt-weapp-utils/lib/wx-promisify.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../mt-weapp-promise/index.js");exports.wxPromisify=function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:wx;return function(){for(var s=arguments.length,t=Array(s>1?s-1:0),i=1;i<s;i++)t[i-1]=arguments[i];var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new e(function(e,s){var i=Object.assign({},c,{success:function(r){c.success&&c.success(r),e(r)},fail:function(e){c.fail&&c.fail(e),s(e)}});n[r].apply(n,[i].concat(t))})}}; 
 			}); 
		define("npm/@mtfe/mt-weapp-vuex/lib/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var e=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();exports.Store=function(){function n(){t(this,n),this.mutations={},this.state={},this.actions={}}return e(n,[{key:"register",value:function(t){t&&(Object.assign(this.mutations,t.mutations),Object.assign(this.actions,t.mutations),Object.assign(this.state,t.state))}},{key:"commit",value:function(t){for(var e=this.mutations[t],n=arguments.length,i=Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=arguments[s];i.unshift(this.state),e&&e.apply(this,i)}},{key:"dispatch",value:function(t){var e=this.actions[t];e&&e(this)}}]),n}(); 
 			}); 
		define("npm/@mtfe/wx-rc-finger/dist/finger.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=require("../../mt-weapp-api/dist/index.js").wx;!function(e,n){"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.finger=n()}(void 0,function(){var t=function(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)},n=function(t,e){return"string"==typeof t?t.charCodeAt(e):t instanceof Uint8Array?t[e]:0},o="undefined"!=typeof top&&top.btoa||function(e){for(var o=[],s=0,c=e.length,i=0,r=0;r<c;++r)3===(s+=1)&&(s=0),i=n(e,r),0===s?o.push(t(63&(n(e,r-1)<<2|i>>6)),t(63&i)):1===s?o.push(t(i>>2&63)):o.push(t(63&(n(e,r-1)<<4|i>>4))),r===c-1&&0<s&&o.push(t(i<<(3-s<<1)&63));if(s)for(;s<3;)s+=1,o.push("=");return o.join("")},s={app:0},c={system:{}},i=function(){try{e.getSetting&&e.getSetting({success:function(t){t.authSetting&&t.authSetting["scope.userLocation"]&&function(){try{e.getLocation({type:"wgs84",success:function(t){c.location=t}})}catch(t){}}()}})}catch(t){}},r=function(t){try{e.getSetting?e.getSetting({success:function(e){e.authSetting&&e.authSetting["scope.userInfo"]?u(t):t&&t()},fail:function(){t&&t()}}):t&&t()}catch(e){t&&t()}},u=function(t){e.getUserInfo({success:function(e){var n={};Object.assign(n,e.userInfo),n.nickName=encodeURIComponent(e.userInfo.nickName),n.city=encodeURIComponent(e.userInfo.city),n.province=encodeURIComponent(e.userInfo.province),n.country=encodeURIComponent(e.userInfo.country),c.userInfo=n,t&&t()},fail:function(){t&&t()}})};return function(){try{e.getSystemInfo({success:function(t){Object.assign(c.system,t)}})}catch(t){}}(),function(){try{e.getNetworkType({success:function(t){c.system.networkType=t.networkType}}),e.onNetworkStatusChange&&e.onNetworkStatusChange(function(t){c.system.networkType=t.networkType})}catch(t){}}(),function(){try{e.onAccelerometerChange(function(t){c.system.accelerometer||(c.system.accelerometer=[]),20<c.system.accelerometer.length&&c.system.accelerometer.shift(),c.system.accelerometer.push({x:Number(t.x).toFixed(3),y:Number(t.y).toFixed(3),z:Number(t.z).toFixed(3)})}),e.onCompassChange(function(t){c.system.compass||(c.system.compass=[]),20<c.system.compass.length&&c.system.compass.shift(),c.system.compass.push(Number(t.direction).toFixed(3))})}catch(t){}}(),r(),i(),{s:function(t){s.app=t},g:function(t){c.app=s.app;var e="WX__1_";try{if(c.location||i(),c.userInfo){var n=JSON.stringify(c);e+=o(n),t&&t(e)}else r(function(){var n=JSON.stringify(c);e+=o(n),t&&t(e)})}catch(n){t&&t(e)}}}}); 
 			}); 
		define("npm/@mtfe/wxapp-rohr/dist/rohr.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=require("../../mt-weapp-api/dist/index.js").wx;!function(){function a(t){for(var e=t.length;--e>=0;)t[e]=0}function n(t,e,a,n,r){this.static_tree=t,this.extra_bits=e,this.extra_base=a,this.elems=n,this.max_length=r,this.has_stree=t&&t.length}function r(t,e){this.dyn_tree=t,this.max_code=0,this.stat_desc=e}function i(t){return t<256?kt[t]:kt[256+(t>>>7)]}function s(t,e){t.pending_buf[t.pending++]=255&e,t.pending_buf[t.pending++]=e>>>8&255}function h(t,e,a){t.bi_valid>_t-a?(t.bi_buf|=e<<t.bi_valid&65535,s(t,t.bi_buf),t.bi_buf=e>>_t-t.bi_valid,t.bi_valid+=a-_t):(t.bi_buf|=e<<t.bi_valid&65535,t.bi_valid+=a)}function o(t,e,a){h(t,a[2*e],a[2*e+1])}function l(t,e){var a=0;do{a|=1&t,t>>>=1,a<<=1}while(--e>0);return a>>>1}function _(t){16===t.bi_valid?(s(t,t.bi_buf),t.bi_buf=0,t.bi_valid=0):t.bi_valid>=8&&(t.pending_buf[t.pending++]=255&t.bi_buf,t.bi_buf>>=8,t.bi_valid-=8)}function d(t,e){var a,n,r,i,s,h,o=e.dyn_tree,l=e.max_code,_=e.stat_desc.static_tree,d=e.stat_desc.has_stree,u=e.stat_desc.extra_bits,f=e.stat_desc.extra_base,c=e.stat_desc.max_length,p=0;for(i=0;i<=lt;i++)t.bl_count[i]=0;for(o[2*t.heap[t.heap_max]+1]=0,a=t.heap_max+1;a<ot;a++)(i=o[2*o[2*(n=t.heap[a])+1]+1]+1)>c&&(i=c,p++),o[2*n+1]=i,n>l||(t.bl_count[i]++,s=0,n>=f&&(s=u[n-f]),h=o[2*n],t.opt_len+=h*(i+s),d&&(t.static_len+=h*(_[2*n+1]+s)));if(0!==p){do{for(i=c-1;0===t.bl_count[i];)i--;t.bl_count[i]--,t.bl_count[i+1]+=2,t.bl_count[c]--,p-=2}while(p>0);for(i=c;0!==i;i--)for(n=t.bl_count[i];0!==n;)(r=t.heap[--a])>l||(o[2*r+1]!==i&&(t.opt_len+=(i-o[2*r+1])*o[2*r],o[2*r+1]=i),n--)}}function u(t,e,a){var n,r,i=new Array(lt+1),s=0;for(n=1;n<=lt;n++)i[n]=s=s+a[n-1]<<1;for(r=0;r<=e;r++){var h=t[2*r+1];0!==h&&(t[2*r]=l(i[h]++,h))}}function f(){var t,e,a,r,i,s=new Array(lt+1);for(a=0,r=0;r<nt-1;r++)for(xt[r]=a,t=0;t<1<<gt[r];t++)zt[a++]=r;for(zt[a-1]=r,i=0,r=0;r<16;r++)for(At[r]=i,t=0;t<1<<bt[r];t++)kt[i++]=r;for(i>>=7;r<st;r++)for(At[r]=i<<7,t=0;t<1<<bt[r]-7;t++)kt[256+i++]=r;for(e=0;e<=lt;e++)s[e]=0;for(t=0;t<=143;)mt[2*t+1]=8,t++,s[8]++;for(;t<=255;)mt[2*t+1]=9,t++,s[9]++;for(;t<=279;)mt[2*t+1]=7,t++,s[7]++;for(;t<=287;)mt[2*t+1]=8,t++,s[8]++;for(u(mt,it+1,s),t=0;t<st;t++)yt[2*t+1]=5,yt[2*t]=l(t,5);Bt=new n(mt,gt,rt+1,it,lt),St=new n(yt,bt,0,st,lt),Ct=new n(new Array(0),vt,0,ht,dt)}function c(t){var e;for(e=0;e<it;e++)t.dyn_ltree[2*e]=0;for(e=0;e<st;e++)t.dyn_dtree[2*e]=0;for(e=0;e<ht;e++)t.bl_tree[2*e]=0;t.dyn_ltree[2*ut]=1,t.opt_len=t.static_len=0,t.last_lit=t.matches=0}function p(t){t.bi_valid>8?s(t,t.bi_buf):t.bi_valid>0&&(t.pending_buf[t.pending++]=t.bi_buf),t.bi_buf=0,t.bi_valid=0}function g(t,e,a,n){p(t),n&&(s(t,a),s(t,~a)),F.arraySet(t.pending_buf,t.window,e,a,t.pending),t.pending+=a}function b(t,e,a,n){var r=2*e,i=2*a;return t[r]<t[i]||t[r]===t[i]&&n[e]<=n[a]}function v(t,e,a){for(var n=t.heap[a],r=a<<1;r<=t.heap_len&&(r<t.heap_len&&b(e,t.heap[r+1],t.heap[r],t.depth)&&r++,!b(e,n,t.heap[r],t.depth));)t.heap[a]=t.heap[r],a=r,r<<=1;t.heap[a]=n}function w(t,e,a){var n,r,s,l,_=0;if(0!==t.last_lit)do{n=t.pending_buf[t.d_buf+2*_]<<8|t.pending_buf[t.d_buf+2*_+1],r=t.pending_buf[t.l_buf+_],_++,0===n?o(t,r,e):(o(t,(s=zt[r])+rt+1,e),0!==(l=gt[s])&&h(t,r-=xt[s],l),o(t,s=i(--n),a),0!==(l=bt[s])&&h(t,n-=At[s],l))}while(_<t.last_lit);o(t,ut,e)}function m(t,e){var a,n,r,i=e.dyn_tree,s=e.stat_desc.static_tree,h=e.stat_desc.has_stree,o=e.stat_desc.elems,l=-1;for(t.heap_len=0,t.heap_max=ot,a=0;a<o;a++)0!==i[2*a]?(t.heap[++t.heap_len]=l=a,t.depth[a]=0):i[2*a+1]=0;for(;t.heap_len<2;)i[2*(r=t.heap[++t.heap_len]=l<2?++l:0)]=1,t.depth[r]=0,t.opt_len--,h&&(t.static_len-=s[2*r+1]);for(e.max_code=l,a=t.heap_len>>1;a>=1;a--)v(t,i,a);r=o;do{a=t.heap[1],t.heap[1]=t.heap[t.heap_len--],v(t,i,1),n=t.heap[1],t.heap[--t.heap_max]=a,t.heap[--t.heap_max]=n,i[2*r]=i[2*a]+i[2*n],t.depth[r]=(t.depth[a]>=t.depth[n]?t.depth[a]:t.depth[n])+1,i[2*a+1]=i[2*n+1]=r,t.heap[1]=r++,v(t,i,1)}while(t.heap_len>=2);t.heap[--t.heap_max]=t.heap[1],d(t,e),u(i,l,t.bl_count)}function y(t,e,a){var n,r,i=-1,s=e[1],h=0,o=7,l=4;for(0===s&&(o=138,l=3),e[2*(a+1)+1]=65535,n=0;n<=a;n++)r=s,s=e[2*(n+1)+1],++h<o&&r===s||(h<l?t.bl_tree[2*r]+=h:0!==r?(r!==i&&t.bl_tree[2*r]++,t.bl_tree[2*ft]++):h<=10?t.bl_tree[2*ct]++:t.bl_tree[2*pt]++,h=0,i=r,0===s?(o=138,l=3):r===s?(o=6,l=3):(o=7,l=4))}function k(t,e,a){var n,r,i=-1,s=e[1],l=0,_=7,d=4;for(0===s&&(_=138,d=3),n=0;n<=a;n++)if(r=s,s=e[2*(n+1)+1],!(++l<_&&r===s)){if(l<d)do{o(t,r,t.bl_tree)}while(0!=--l);else 0!==r?(r!==i&&(o(t,r,t.bl_tree),l--),o(t,ft,t.bl_tree),h(t,l-3,2)):l<=10?(o(t,ct,t.bl_tree),h(t,l-3,3)):(o(t,pt,t.bl_tree),h(t,l-11,7));l=0,i=r,0===s?(_=138,d=3):r===s?(_=6,d=3):(_=7,d=4)}}function z(t){var e;for(y(t,t.dyn_ltree,t.l_desc.max_code),y(t,t.dyn_dtree,t.d_desc.max_code),m(t,t.bl_desc),e=ht-1;e>=3&&0===t.bl_tree[2*wt[e]+1];e--);return t.opt_len+=3*(e+1)+5+5+4,e}function x(t,e,a,n){var r;for(h(t,e-257,5),h(t,a-1,5),h(t,n-4,4),r=0;r<n;r++)h(t,t.bl_tree[2*wt[r]+1],3);k(t,t.dyn_ltree,e-1),k(t,t.dyn_dtree,a-1)}function A(t){var e,a=4093624447;for(e=0;e<=31;e++,a>>>=1)if(1&a&&0!==t.dyn_ltree[2*e])return Q;if(0!==t.dyn_ltree[18]||0!==t.dyn_ltree[20]||0!==t.dyn_ltree[26])return Z;for(e=32;e<rt;e++)if(0!==t.dyn_ltree[2*e])return Z;return Q}function B(t,e,a,n){h(t,(tt<<1)+(n?1:0),3),g(t,e,a,!0)}function S(t,e){return t.msg=Ot[e],e}function C(t){return(t<<1)-(t>4?9:0)}function T(t){for(var e=t.length;--e>=0;)t[e]=0}function j(t){var e=t.state,a=e.pending;a>t.avail_out&&(a=t.avail_out),0!==a&&(F.arraySet(t.output,e.pending_buf,e.pending_out,a,t.next_out),t.next_out+=a,e.pending_out+=a,t.total_out+=a,t.avail_out-=a,e.pending-=a,0===e.pending&&(e.pending_out=0))}function D(t,e){Dt._tr_flush_block(t,t.block_start>=0?t.block_start:-1,t.strstart-t.block_start,e),t.block_start=t.strstart,j(t.strm)}function I(t,e){t.pending_buf[t.pending++]=e}function E(t,e){t.pending_buf[t.pending++]=e>>>8&255,t.pending_buf[t.pending++]=255&e}function U(t,e,a,n){var r=t.avail_in;return r>n&&(r=n),0===r?0:(t.avail_in-=r,F.arraySet(e,t.input,t.next_in,r,a),1===t.state.wrap?t.adler=It(t.adler,e,r,a):2===t.state.wrap&&(t.adler=Ut(t.adler,e,r,a)),t.next_in+=r,t.total_in+=r,r)}function O(t,e){var a,n,r=t.max_chain_length,i=t.strstart,s=t.prev_length,h=t.nice_match,o=t.strstart>t.w_size-_e?t.strstart-(t.w_size-_e):0,l=t.window,_=t.w_mask,d=t.prev,u=t.strstart+le,f=l[i+s-1],c=l[i+s];t.prev_length>=t.good_match&&(r>>=2),h>t.lookahead&&(h=t.lookahead);do{if(a=e,l[a+s]===c&&l[a+s-1]===f&&l[a]===l[i]&&l[++a]===l[i+1]){i+=2,a++;do{}while(l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&l[++i]===l[++a]&&i<u);if(n=le-(u-i),i=u-le,n>s){if(t.match_start=e,s=n,n>=h)break;f=l[i+s-1],c=l[i+s]}}}while((e=d[e&_])>o&&0!=--r);return s<=t.lookahead?s:t.lookahead}function R(t){var e,a,n,r,i,s=t.w_size;do{if(r=t.window_size-t.lookahead-t.strstart,t.strstart>=s+(s-_e)){F.arraySet(t.window,t.window,s,s,0),t.match_start-=s,t.strstart-=s,t.block_start-=s,e=a=t.hash_size;do{n=t.head[--e],t.head[e]=n>=s?n-s:0}while(--a);e=a=s;do{n=t.prev[--e],t.prev[e]=n>=s?n-s:0}while(--a);r+=s}if(0===t.strm.avail_in)break;if(a=U(t.strm,t.window,t.strstart+t.lookahead,r),t.lookahead+=a,t.lookahead+t.insert>=oe)for(i=t.strstart-t.insert,t.ins_h=t.window[i],t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+1])&t.hash_mask;t.insert&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[i+oe-1])&t.hash_mask,t.prev[i&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=i,i++,t.insert--,!(t.lookahead+t.insert<oe)););}while(t.lookahead<_e&&0!==t.strm.avail_in)}function V(t,e){for(var a,n;;){if(t.lookahead<_e){if(R(t),t.lookahead<_e&&e===Rt)return we;if(0===t.lookahead)break}if(a=0,t.lookahead>=oe&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+oe-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),0!==a&&t.strstart-a<=t.w_size-_e&&(t.match_length=O(t,a)),t.match_length>=oe)if(n=Dt._tr_tally(t,t.strstart-t.match_start,t.match_length-oe),t.lookahead-=t.match_length,t.match_length<=t.max_lazy_match&&t.lookahead>=oe){t.match_length--;do{t.strstart++,t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+oe-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart}while(0!=--t.match_length);t.strstart++}else t.strstart+=t.match_length,t.match_length=0,t.ins_h=t.window[t.strstart],t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+1])&t.hash_mask;else n=Dt._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++;if(n&&(D(t,!1),0===t.strm.avail_out))return we}return t.insert=t.strstart<oe-1?t.strstart:oe-1,e===Nt?(D(t,!0),0===t.strm.avail_out?ye:ke):t.last_lit&&(D(t,!1),0===t.strm.avail_out)?we:me}function H(t,e){for(var a,n,r;;){if(t.lookahead<_e){if(R(t),t.lookahead<_e&&e===Rt)return we;if(0===t.lookahead)break}if(a=0,t.lookahead>=oe&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+oe-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart),t.prev_length=t.match_length,t.prev_match=t.match_start,t.match_length=oe-1,0!==a&&t.prev_length<t.max_lazy_match&&t.strstart-a<=t.w_size-_e&&(t.match_length=O(t,a),t.match_length<=5&&(t.strategy===Xt||t.match_length===oe&&t.strstart-t.match_start>4096)&&(t.match_length=oe-1)),t.prev_length>=oe&&t.match_length<=t.prev_length){r=t.strstart+t.lookahead-oe,n=Dt._tr_tally(t,t.strstart-1-t.prev_match,t.prev_length-oe),t.lookahead-=t.prev_length-1,t.prev_length-=2;do{++t.strstart<=r&&(t.ins_h=(t.ins_h<<t.hash_shift^t.window[t.strstart+oe-1])&t.hash_mask,a=t.prev[t.strstart&t.w_mask]=t.head[t.ins_h],t.head[t.ins_h]=t.strstart)}while(0!=--t.prev_length);if(t.match_available=0,t.match_length=oe-1,t.strstart++,n&&(D(t,!1),0===t.strm.avail_out))return we}else if(t.match_available){if((n=Dt._tr_tally(t,0,t.window[t.strstart-1]))&&D(t,!1),t.strstart++,t.lookahead--,0===t.strm.avail_out)return we}else t.match_available=1,t.strstart++,t.lookahead--}return t.match_available&&(n=Dt._tr_tally(t,0,t.window[t.strstart-1]),t.match_available=0),t.insert=t.strstart<oe-1?t.strstart:oe-1,e===Nt?(D(t,!0),0===t.strm.avail_out?ye:ke):t.last_lit&&(D(t,!1),0===t.strm.avail_out)?we:me}function N(t,e){for(var a,n,r,i,s=t.window;;){if(t.lookahead<=le){if(R(t),t.lookahead<=le&&e===Rt)return we;if(0===t.lookahead)break}if(t.match_length=0,t.lookahead>=oe&&t.strstart>0&&(r=t.strstart-1,(n=s[r])===s[++r]&&n===s[++r]&&n===s[++r])){i=t.strstart+le;do{}while(n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&n===s[++r]&&r<i);t.match_length=le-(i-r),t.match_length>t.lookahead&&(t.match_length=t.lookahead)}if(t.match_length>=oe?(a=Dt._tr_tally(t,1,t.match_length-oe),t.lookahead-=t.match_length,t.strstart+=t.match_length,t.match_length=0):(a=Dt._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++),a&&(D(t,!1),0===t.strm.avail_out))return we}return t.insert=0,e===Nt?(D(t,!0),0===t.strm.avail_out?ye:ke):t.last_lit&&(D(t,!1),0===t.strm.avail_out)?we:me}function J(t,e){for(var a;;){if(0===t.lookahead&&(R(t),0===t.lookahead)){if(e===Rt)return we;break}if(t.match_length=0,a=Dt._tr_tally(t,0,t.window[t.strstart]),t.lookahead--,t.strstart++,a&&(D(t,!1),0===t.strm.avail_out))return we}return t.insert=0,e===Nt?(D(t,!0),0===t.strm.avail_out?ye:ke):t.last_lit&&(D(t,!1),0===t.strm.avail_out)?we:me}function L(t,e,a,n,r){this.good_length=t,this.max_lazy=e,this.nice_length=a,this.max_chain=n,this.func=r}function M(t){t.window_size=2*t.w_size,T(t.head),t.max_lazy_match=Tt[t.level].max_lazy,t.good_match=Tt[t.level].good_length,t.nice_match=Tt[t.level].nice_length,t.max_chain_length=Tt[t.level].max_chain,t.strstart=0,t.block_start=0,t.lookahead=0,t.insert=0,t.match_length=t.prev_length=oe-1,t.match_available=0,t.ins_h=0}function P(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=$t,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new F.Buf16(2*se),this.dyn_dtree=new F.Buf16(2*(2*re+1)),this.bl_tree=new F.Buf16(2*(2*ie+1)),T(this.dyn_ltree),T(this.dyn_dtree),T(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new F.Buf16(he+1),this.heap=new F.Buf16(2*ne+1),T(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new F.Buf16(2*ne+1),T(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function q(t){var e;return t&&t.state?(t.total_in=t.total_out=0,t.data_type=Zt,e=t.state,e.pending=0,e.pending_out=0,e.wrap<0&&(e.wrap=-e.wrap),e.status=e.wrap?ue:be,t.adler=2===e.wrap?0:1,e.last_flush=Rt,Dt._tr_init(e),Lt):S(t,Pt)}function K(t){var e=q(t);return e===Lt&&M(t.state),e}function W(t,e,a,n,r,i){if(!t)return Pt;var s=1;if(e===Wt&&(e=6),n<0?(s=0,n=-n):n>15&&(s=2,n-=16),r<1||r>te||a!==$t||n<8||n>15||e<0||e>9||i<0||i>Gt)return S(t,Pt);8===n&&(n=9);var h=new P;return t.state=h,h.strm=t,h.wrap=s,h.gzhead=null,h.w_bits=n,h.w_size=1<<h.w_bits,h.w_mask=h.w_size-1,h.hash_bits=r+7,h.hash_size=1<<h.hash_bits,h.hash_mask=h.hash_size-1,h.hash_shift=~~((h.hash_bits+oe-1)/oe),h.window=new F.Buf8(2*h.w_size),h.head=new F.Buf16(h.hash_size),h.prev=new F.Buf16(h.w_size),h.lit_bufsize=1<<r+6,h.pending_buf_size=4*h.lit_bufsize,h.pending_buf=new F.Buf8(h.pending_buf_size),h.d_buf=1*h.lit_bufsize,h.l_buf=3*h.lit_bufsize,h.level=e,h.strategy=i,h.method=a,K(t)}function X(t,e){if(e<65537&&(t.subarray&&Be||!t.subarray&&Ae))return String.fromCharCode.apply(null,F.shrinkBuf(t,e));for(var a="",n=0;n<e;n++)a+=String.fromCharCode(t[n]);return a}function Y(t){if(!(this instanceof Y))return new Y(t);this.options=F.assign({level:Ee,method:Oe,chunkSize:16384,windowBits:15,memLevel:8,strategy:Ue,to:""},t||{});var e=this.options;e.raw&&e.windowBits>0?e.windowBits=-e.windowBits:e.gzip&&e.windowBits>0&&e.windowBits<16&&(e.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new je,this.strm.avail_out=0;var a=xe.deflateInit2(this.strm,e.level,e.method,e.windowBits,e.memLevel,e.strategy);if(a!==Ie)throw new Error(Ot[a]);if(e.header&&xe.deflateSetHeader(this.strm,e.header),e.dictionary){var n;if(n="string"==typeof e.dictionary?Te.string2buf(e.dictionary):"[object ArrayBuffer]"===De.call(e.dictionary)?new Uint8Array(e.dictionary):e.dictionary,(a=xe.deflateSetDictionary(this.strm,n))!==Ie)throw new Error(Ot[a]);this._dict_set=!0}}var F=function(t,e){return e={exports:{}},t(e,e.exports),e.exports}(function(e,a){var n="undefined"!=typeof Uint8Array&&"undefined"!=typeof Uint16Array&&"undefined"!=typeof Int32Array;a.assign=function(e){for(var a=Array.prototype.slice.call(arguments,1);a.length;){var n=a.shift();if(n){if("object"!=(void 0===n?"undefined":t(n)))throw new TypeError(n+"must be non-object");for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])}}return e},a.shrinkBuf=function(t,e){return t.length===e?t:t.subarray?t.subarray(0,e):(t.length=e,t)};var r={arraySet:function(t,e,a,n,r){if(e.subarray&&t.subarray)t.set(e.subarray(a,a+n),r);else for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){var e,a,n,r,i,s;for(n=0,e=0,a=t.length;e<a;e++)n+=t[e].length;for(s=new Uint8Array(n),r=0,e=0,a=t.length;e<a;e++)i=t[e],s.set(i,r),r+=i.length;return s}},i={arraySet:function(t,e,a,n,r){for(var i=0;i<n;i++)t[r+i]=e[a+i]},flattenChunks:function(t){return[].concat.apply([],t)}};a.setTyped=function(t){t?(a.Buf8=Uint8Array,a.Buf16=Uint16Array,a.Buf32=Int32Array,a.assign(a,r)):(a.Buf8=Array,a.Buf16=Array,a.Buf32=Array,a.assign(a,i))},a.setTyped(n)}),G=4,Q=0,Z=1,$=2,tt=0,et=1,at=2,nt=29,rt=256,it=rt+1+nt,st=30,ht=19,ot=2*it+1,lt=15,_t=16,dt=7,ut=256,ft=16,ct=17,pt=18,gt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],bt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],vt=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],wt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],mt=new Array(2*(it+2));a(mt);var yt=new Array(2*st);a(yt);var kt=new Array(512);a(kt);var zt=new Array(256);a(zt);var xt=new Array(nt);a(xt);var At=new Array(st);a(At);var Bt,St,Ct,Tt,jt=!1,Dt={_tr_init:function(t){jt||(f(),jt=!0),t.l_desc=new r(t.dyn_ltree,Bt),t.d_desc=new r(t.dyn_dtree,St),t.bl_desc=new r(t.bl_tree,Ct),t.bi_buf=0,t.bi_valid=0,c(t)},_tr_stored_block:B,_tr_flush_block:function(t,e,a,n){var r,i,s=0;t.level>0?(t.strm.data_type===$&&(t.strm.data_type=A(t)),m(t,t.l_desc),m(t,t.d_desc),s=z(t),r=t.opt_len+3+7>>>3,(i=t.static_len+3+7>>>3)<=r&&(r=i)):r=i=a+5,a+4<=r&&-1!==e?B(t,e,a,n):t.strategy===G||i===r?(h(t,(et<<1)+(n?1:0),3),w(t,mt,yt)):(h(t,(at<<1)+(n?1:0),3),x(t,t.l_desc.max_code+1,t.d_desc.max_code+1,s+1),w(t,t.dyn_ltree,t.dyn_dtree)),c(t),n&&p(t)},_tr_tally:function(t,e,a){return t.pending_buf[t.d_buf+2*t.last_lit]=e>>>8&255,t.pending_buf[t.d_buf+2*t.last_lit+1]=255&e,t.pending_buf[t.l_buf+t.last_lit]=255&a,t.last_lit++,0===e?t.dyn_ltree[2*a]++:(t.matches++,e--,t.dyn_ltree[2*(zt[a]+rt+1)]++,t.dyn_dtree[2*i(e)]++),t.last_lit===t.lit_bufsize-1},_tr_align:function(t){h(t,et<<1,3),o(t,ut,mt),_(t)}},It=function(t,e,a,n){for(var r=65535&t|0,i=t>>>16&65535|0,s=0;0!==a;){a-=s=a>2e3?2e3:a;do{i=i+(r=r+e[n++]|0)|0}while(--s);r%=65521,i%=65521}return r|i<<16|0},Et=function(){for(var t,e=[],a=0;a<256;a++){t=a;for(var n=0;n<8;n++)t=1&t?3988292384^t>>>1:t>>>1;e[a]=t}return e}(),Ut=function(t,e,a,n){var r=Et,i=n+a;t^=-1;for(var s=n;s<i;s++)t=t>>>8^r[255&(t^e[s])];return-1^t},Ot={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},Rt=0,Vt=1,Ht=3,Nt=4,Jt=5,Lt=0,Mt=1,Pt=-2,qt=-3,Kt=-5,Wt=-1,Xt=1,Yt=2,Ft=3,Gt=4,Qt=0,Zt=2,$t=8,te=9,ee=15,ae=8,ne=286,re=30,ie=19,se=2*ne+1,he=15,oe=3,le=258,_e=le+oe+1,de=32,ue=42,fe=69,ce=73,pe=91,ge=103,be=113,ve=666,we=1,me=2,ye=3,ke=4,ze=3;Tt=[new L(0,0,0,0,function(t,e){var a=65535;for(a>t.pending_buf_size-5&&(a=t.pending_buf_size-5);;){if(t.lookahead<=1){if(R(t),0===t.lookahead&&e===Rt)return we;if(0===t.lookahead)break}t.strstart+=t.lookahead,t.lookahead=0;var n=t.block_start+a;if((0===t.strstart||t.strstart>=n)&&(t.lookahead=t.strstart-n,t.strstart=n,D(t,!1),0===t.strm.avail_out))return we;if(t.strstart-t.block_start>=t.w_size-_e&&(D(t,!1),0===t.strm.avail_out))return we}return t.insert=0,e===Nt?(D(t,!0),0===t.strm.avail_out?ye:ke):(t.strstart>t.block_start&&(D(t,!1),t.strm.avail_out),we)}),new L(4,4,8,4,V),new L(4,5,16,8,V),new L(4,6,32,32,V),new L(4,4,16,16,H),new L(8,16,32,32,H),new L(8,16,128,128,H),new L(8,32,128,256,H),new L(32,128,258,1024,H),new L(32,258,258,4096,H)];var xe={deflateInit:function(t,e){return W(t,e,$t,ee,ae,Qt)},deflateInit2:W,deflateReset:K,deflateResetKeep:q,deflateSetHeader:function(t,e){return t&&t.state?2!==t.state.wrap?Pt:(t.state.gzhead=e,Lt):Pt},deflate:function(t,e){var a,n,r,i;if(!t||!t.state||e>Jt||e<0)return t?S(t,Pt):Pt;if(n=t.state,!t.output||!t.input&&0!==t.avail_in||n.status===ve&&e!==Nt)return S(t,0===t.avail_out?Kt:Pt);if(n.strm=t,a=n.last_flush,n.last_flush=e,n.status===ue)if(2===n.wrap)t.adler=0,I(n,31),I(n,139),I(n,8),n.gzhead?(I(n,(n.gzhead.text?1:0)+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),I(n,255&n.gzhead.time),I(n,n.gzhead.time>>8&255),I(n,n.gzhead.time>>16&255),I(n,n.gzhead.time>>24&255),I(n,9===n.level?2:n.strategy>=Yt||n.level<2?4:0),I(n,255&n.gzhead.os),n.gzhead.extra&&n.gzhead.extra.length&&(I(n,255&n.gzhead.extra.length),I(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(t.adler=Ut(t.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=fe):(I(n,0),I(n,0),I(n,0),I(n,0),I(n,0),I(n,9===n.level?2:n.strategy>=Yt||n.level<2?4:0),I(n,ze),n.status=be);else{var s=$t+(n.w_bits-8<<4)<<8;s|=(n.strategy>=Yt||n.level<2?0:n.level<6?1:6===n.level?2:3)<<6,0!==n.strstart&&(s|=de),s+=31-s%31,n.status=be,E(n,s),0!==n.strstart&&(E(n,t.adler>>>16),E(n,65535&t.adler)),t.adler=1}if(n.status===fe)if(n.gzhead.extra){for(r=n.pending;n.gzindex<(65535&n.gzhead.extra.length)&&(n.pending!==n.pending_buf_size||(n.gzhead.hcrc&&n.pending>r&&(t.adler=Ut(t.adler,n.pending_buf,n.pending-r,r)),j(t),r=n.pending,n.pending!==n.pending_buf_size));)I(n,255&n.gzhead.extra[n.gzindex]),n.gzindex++;n.gzhead.hcrc&&n.pending>r&&(t.adler=Ut(t.adler,n.pending_buf,n.pending-r,r)),n.gzindex===n.gzhead.extra.length&&(n.gzindex=0,n.status=ce)}else n.status=ce;if(n.status===ce)if(n.gzhead.name){r=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>r&&(t.adler=Ut(t.adler,n.pending_buf,n.pending-r,r)),j(t),r=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.name.length?255&n.gzhead.name.charCodeAt(n.gzindex++):0,I(n,i)}while(0!==i);n.gzhead.hcrc&&n.pending>r&&(t.adler=Ut(t.adler,n.pending_buf,n.pending-r,r)),0===i&&(n.gzindex=0,n.status=pe)}else n.status=pe;if(n.status===pe)if(n.gzhead.comment){r=n.pending;do{if(n.pending===n.pending_buf_size&&(n.gzhead.hcrc&&n.pending>r&&(t.adler=Ut(t.adler,n.pending_buf,n.pending-r,r)),j(t),r=n.pending,n.pending===n.pending_buf_size)){i=1;break}i=n.gzindex<n.gzhead.comment.length?255&n.gzhead.comment.charCodeAt(n.gzindex++):0,I(n,i)}while(0!==i);n.gzhead.hcrc&&n.pending>r&&(t.adler=Ut(t.adler,n.pending_buf,n.pending-r,r)),0===i&&(n.status=ge)}else n.status=ge;if(n.status===ge&&(n.gzhead.hcrc?(n.pending+2>n.pending_buf_size&&j(t),n.pending+2<=n.pending_buf_size&&(I(n,255&t.adler),I(n,t.adler>>8&255),t.adler=0,n.status=be)):n.status=be),0!==n.pending){if(j(t),0===t.avail_out)return n.last_flush=-1,Lt}else if(0===t.avail_in&&C(e)<=C(a)&&e!==Nt)return S(t,Kt);if(n.status===ve&&0!==t.avail_in)return S(t,Kt);if(0!==t.avail_in||0!==n.lookahead||e!==Rt&&n.status!==ve){var h=n.strategy===Yt?J(n,e):n.strategy===Ft?N(n,e):Tt[n.level].func(n,e);if(h!==ye&&h!==ke||(n.status=ve),h===we||h===ye)return 0===t.avail_out&&(n.last_flush=-1),Lt;if(h===me&&(e===Vt?Dt._tr_align(n):e!==Jt&&(Dt._tr_stored_block(n,0,0,!1),e===Ht&&(T(n.head),0===n.lookahead&&(n.strstart=0,n.block_start=0,n.insert=0))),j(t),0===t.avail_out))return n.last_flush=-1,Lt}return e!==Nt?Lt:n.wrap<=0?Mt:(2===n.wrap?(I(n,255&t.adler),I(n,t.adler>>8&255),I(n,t.adler>>16&255),I(n,t.adler>>24&255),I(n,255&t.total_in),I(n,t.total_in>>8&255),I(n,t.total_in>>16&255),I(n,t.total_in>>24&255)):(E(n,t.adler>>>16),E(n,65535&t.adler)),j(t),n.wrap>0&&(n.wrap=-n.wrap),0!==n.pending?Lt:Mt)},deflateEnd:function(t){var e;return t&&t.state?(e=t.state.status)!==ue&&e!==fe&&e!==ce&&e!==pe&&e!==ge&&e!==be&&e!==ve?S(t,Pt):(t.state=null,e===be?S(t,qt):Lt):Pt},deflateSetDictionary:function(t,e){var a,n,r,i,s,h,o,l,_=e.length;if(!t||!t.state)return Pt;if(a=t.state,2===(i=a.wrap)||1===i&&a.status!==ue||a.lookahead)return Pt;for(1===i&&(t.adler=It(t.adler,e,_,0)),a.wrap=0,_>=a.w_size&&(0===i&&(T(a.head),a.strstart=0,a.block_start=0,a.insert=0),l=new F.Buf8(a.w_size),F.arraySet(l,e,_-a.w_size,a.w_size,0),e=l,_=a.w_size),s=t.avail_in,h=t.next_in,o=t.input,t.avail_in=_,t.next_in=0,t.input=e,R(a);a.lookahead>=oe;){n=a.strstart,r=a.lookahead-(oe-1);do{a.ins_h=(a.ins_h<<a.hash_shift^a.window[n+oe-1])&a.hash_mask,a.prev[n&a.w_mask]=a.head[a.ins_h],a.head[a.ins_h]=n,n++}while(--r);a.strstart=n,a.lookahead=oe-1,R(a)}return a.strstart+=a.lookahead,a.block_start=a.strstart,a.insert=a.lookahead,a.lookahead=0,a.match_length=a.prev_length=oe-1,a.match_available=0,t.next_in=h,t.input=o,t.avail_in=s,a.wrap=i,Lt},deflateInfo:"pako deflate (from Nodeca project)"},Ae=!0,Be=!0;try{String.fromCharCode.apply(null,[0])}catch(a){Ae=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch(a){Be=!1}for(var Se=new F.Buf8(256),Ce=0;Ce<256;Ce++)Se[Ce]=Ce>=252?6:Ce>=248?5:Ce>=240?4:Ce>=224?3:Ce>=192?2:1;Se[254]=Se[254]=1;var Te={string2buf:function(t){var e,a,n,r,i,s=t.length,h=0;for(r=0;r<s;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),h+=a<128?1:a<2048?2:a<65536?3:4;for(e=new F.Buf8(h),i=0,r=0;i<h;r++)55296==(64512&(a=t.charCodeAt(r)))&&r+1<s&&56320==(64512&(n=t.charCodeAt(r+1)))&&(a=65536+(a-55296<<10)+(n-56320),r++),a<128?e[i++]=a:a<2048?(e[i++]=192|a>>>6,e[i++]=128|63&a):a<65536?(e[i++]=224|a>>>12,e[i++]=128|a>>>6&63,e[i++]=128|63&a):(e[i++]=240|a>>>18,e[i++]=128|a>>>12&63,e[i++]=128|a>>>6&63,e[i++]=128|63&a);return e},buf2binstring:function(t){return X(t,t.length)},binstring2buf:function(t){for(var e=new F.Buf8(t.length),a=0,n=e.length;a<n;a++)e[a]=t.charCodeAt(a);return e},buf2string:function(t,e){var a,n,r,i,s=e||t.length,h=new Array(2*s);for(n=0,a=0;a<s;)if((r=t[a++])<128)h[n++]=r;else if((i=Se[r])>4)h[n++]=65533,a+=i-1;else{for(r&=2===i?31:3===i?15:7;i>1&&a<s;)r=r<<6|63&t[a++],i--;i>1?h[n++]=65533:r<65536?h[n++]=r:(r-=65536,h[n++]=55296|r>>10&1023,h[n++]=56320|1023&r)}return X(h,n)},utf8border:function(t,e){var a;for((e=e||t.length)>t.length&&(e=t.length),a=e-1;a>=0&&128==(192&t[a]);)a--;return a<0?e:0===a?e:a+Se[t[a]]>e?a:e}},je=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0},De=Object.prototype.toString,Ie=0,Ee=-1,Ue=0,Oe=8;Y.prototype.push=function(t,e){var a,n,r=this.strm,i=this.options.chunkSize;if(this.ended)return!1;n=e===~~e?e:!0===e?4:0,"string"==typeof t?r.input=Te.string2buf(t):"[object ArrayBuffer]"===De.call(t)?r.input=new Uint8Array(t):r.input=t,r.next_in=0,r.avail_in=r.input.length;do{if(0===r.avail_out&&(r.output=new F.Buf8(i),r.next_out=0,r.avail_out=i),1!==(a=xe.deflate(r,n))&&a!==Ie)return this.onEnd(a),this.ended=!0,!1;0!==r.avail_out&&(0!==r.avail_in||4!==n&&2!==n)||("string"===this.options.to?this.onData(Te.buf2binstring(F.shrinkBuf(r.output,r.next_out))):this.onData(F.shrinkBuf(r.output,r.next_out)))}while((r.avail_in>0||0===r.avail_out)&&1!==a);return 4===n?(a=xe.deflateEnd(this.strm),this.onEnd(a),this.ended=!0,a===Ie):2!==n||(this.onEnd(Ie),r.avail_out=0,!0)},Y.prototype.onData=function(t){this.chunks.push(t)},Y.prototype.onEnd=function(t){t===Ie&&("string"===this.options.to?this.result=this.chunks.join(""):this.result=F.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};var Re=function(t,e){var a=new Y(e);if(a.push(t,!0),a.err)throw a.msg||Ot[a.err];return a.result},Ve=function(t){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t)},He="undefined"!=typeof top&&top.btoa||function(t){for(var e=[],a=0,n=t.length,r=0,i=0;i<n;++i)3===(a+=1)&&(a=0),r=t.charCodeAt(i),0===a?e.push(Ve(63&(t.charCodeAt(i-1)<<2|r>>6)),Ve(63&r)):1===a?e.push(Ve(r>>2&63)):e.push(Ve(63&(t.charCodeAt(i-1)<<4|r>>4))),i===n-1&&a>0&&e.push(Ve(r<<(3-a<<1)&63));if(a)for(;a<3;)a+=1,e.push("=");return e.join("")},Ne=function(t){var e=Re(JSON.stringify(t),{to:"string"});return He(e)},Je="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return void 0===e?"undefined":t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":t(e)},Le=function(t){var e=[];return Object.keys(t).sort().forEach(function(a){var n=t[a];"_token"!==a&&(n&&"object"===(void 0===n?"undefined":Je(n))&&(n=JSON.stringify(n)),e.push(a+"="+n))}),Ne(e.join("&"))},Me={f:0,r:0,w:0,h:0},Pe={rId:0,ts:0,cts:0,brVD:[],brR:[],bI:[],mT:[],kT:[],aT:[],tT:[],sign:""},qe=function(){if(Pe.rId=Me.f,0===Pe.ts&&(Pe.ts=Date.now()),0===Pe.brVD.length||0===Pe.brVD[0]||0===Pe.brVD[1]){var t=Me.r,e=Me.w,a=Me.h,n=[e,a],r=[Math.round(t*e),Math.round(t*a)],i=r;Pe.brVD=n,Pe.brR=[r,i,24,24]}};try{e.getSystemInfo({success:function(t){var e=t.pixelRatio,a=t.windowWidth,n=t.windowHeight;Me.r=e,Me.w=a,Me.h=n}})}catch(a){}var Ke={i:function(t){Me.f=t},m:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.touches,a=t.changedTouches,n=a&&a[0]||e&&e[0];if(n){var r=n.clientX,i=void 0===r?0:r,s=n.clientY,h=void 0===s?0:s,o=e&&e.length||a&&a.length||0;Pe.mT=[i+","+h].concat(Pe.mT.slice(0,29)),Pe.tT=[i+","+h+","+o].concat(Pe.tT.slice(0,29))}},t:function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).detail,e=t&&t.x||0,a=t&&t.y||0;Pe.aT=[e+","+a+",view"].concat(Pe.aT.slice(0,29))},r:function(t){qe();var e="",a="";try{var n=getCurrentPages(),r=n.length;e=n[r-1].__route__,r>1&&(a=n[r-2].__route__)}catch(t){}var i="";try{i=Le(t)}catch(t){}Pe.sign=i,Pe.cts=Date.now(),Pe.bI=[e,a];try{return Ne(Pe)}catch(t){return""}}};module.exports=Ke}(); 
 			}); 
		define("npm/crypto-js/aes.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o,r,t){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=r(require("./core"),require("./enc-base64"),require("./md5"),require("./evpkdf"),require("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./enc-base64","./md5","./evpkdf","./cipher-core"],r):r(o.CryptoJS)}(void 0,function(e){return function(){var o=e,r=o.lib.BlockCipher,t=o.algo,i=[],n=[],c=[],f=[],s=[],u=[],y=[],d=[],p=[],l=[];!function(){for(var e=[],o=0;o<256;o++)e[o]=o<128?o<<1:o<<1^283;for(var r=0,t=0,o=0;o<256;o++){var a=t^t<<1^t<<2^t<<3^t<<4;a=a>>>8^255&a^99,i[r]=a,n[a]=r;var h=e[r],v=e[h],_=e[v],k=257*e[a]^16843008*a;c[r]=k<<24|k>>>8,f[r]=k<<16|k>>>16,s[r]=k<<8|k>>>24,u[r]=k;k=16843009*_^65537*v^257*h^16843008*r;y[a]=k<<24|k>>>8,d[a]=k<<16|k>>>16,p[a]=k<<8|k>>>24,l[a]=k,r?(r=h^e[e[e[_^h]]],t^=e[e[t]]):r=t=1}}();var a=[0,1,2,4,8,16,32,64,128,27,54],h=t.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var e=this._keyPriorReset=this._key,o=e.words,r=e.sigBytes/4,t=4*((this._nRounds=r+6)+1),n=this._keySchedule=[],c=0;c<t;c++)if(c<r)n[c]=o[c];else{u=n[c-1];c%r?r>6&&c%r==4&&(u=i[u>>>24]<<24|i[u>>>16&255]<<16|i[u>>>8&255]<<8|i[255&u]):(u=i[(u=u<<8|u>>>24)>>>24]<<24|i[u>>>16&255]<<16|i[u>>>8&255]<<8|i[255&u],u^=a[c/r|0]<<24),n[c]=n[c-r]^u}for(var f=this._invKeySchedule=[],s=0;s<t;s++){c=t-s;if(s%4)u=n[c];else var u=n[c-4];f[s]=s<4||c<=4?u:y[i[u>>>24]]^d[i[u>>>16&255]]^p[i[u>>>8&255]]^l[i[255&u]]}}},encryptBlock:function(e,o){this._doCryptBlock(e,o,this._keySchedule,c,f,s,u,i)},decryptBlock:function(e,o){r=e[o+1];e[o+1]=e[o+3],e[o+3]=r,this._doCryptBlock(e,o,this._invKeySchedule,y,d,p,l,n);var r=e[o+1];e[o+1]=e[o+3],e[o+3]=r},_doCryptBlock:function(e,o,r,t,i,n,c,f){for(var s=this._nRounds,u=e[o]^r[0],y=e[o+1]^r[1],d=e[o+2]^r[2],p=e[o+3]^r[3],l=4,a=1;a<s;a++){var h=t[u>>>24]^i[y>>>16&255]^n[d>>>8&255]^c[255&p]^r[l++],v=t[y>>>24]^i[d>>>16&255]^n[p>>>8&255]^c[255&u]^r[l++],_=t[d>>>24]^i[p>>>16&255]^n[u>>>8&255]^c[255&y]^r[l++],k=t[p>>>24]^i[u>>>16&255]^n[y>>>8&255]^c[255&d]^r[l++];u=h,y=v,d=_,p=k}var h=(f[u>>>24]<<24|f[y>>>16&255]<<16|f[d>>>8&255]<<8|f[255&p])^r[l++],v=(f[y>>>24]<<24|f[d>>>16&255]<<16|f[p>>>8&255]<<8|f[255&u])^r[l++],_=(f[d>>>24]<<24|f[p>>>16&255]<<16|f[u>>>8&255]<<8|f[255&y])^r[l++],k=(f[p>>>24]<<24|f[u>>>16&255]<<16|f[y>>>8&255]<<8|f[255&d])^r[l++];e[o]=h,e[o+1]=v,e[o+2]=_,e[o+3]=k},keySize:8});o.AES=r._createHelper(h)}(),e.AES}); 
 			}); 
		define("npm/crypto-js/cipher-core.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,r,i){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=r(require("./core"),require("./evpkdf")):"function"==typeof define&&define.amd?define(["./core","./evpkdf"],r):r(t.CryptoJS)}(void 0,function(e){e.lib.Cipher||function(t){var r=e,i=r.lib,n=i.Base,c=i.WordArray,o=i.BufferedBlockAlgorithm,s=r.enc,a=(s.Utf8,s.Base64),f=r.algo.EvpKDF,p=i.Cipher=o.extend({cfg:n.extend(),createEncryptor:function(e,t){return this.create(this._ENC_XFORM_MODE,e,t)},createDecryptor:function(e,t){return this.create(this._DEC_XFORM_MODE,e,t)},init:function(e,t,r){this.cfg=this.cfg.extend(r),this._xformMode=e,this._key=t,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(e){return this._append(e),this._process()},finalize:function(e){return e&&this._append(e),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function e(e){return"string"==typeof e?k:v}return function(t){return{encrypt:function(r,i,n){return e(i).encrypt(t,r,i,n)},decrypt:function(r,i,n){return e(i).decrypt(t,r,i,n)}}}}()}),d=(i.StreamCipher=p.extend({_doFinalize:function(){return this._process(!0)},blockSize:1}),r.mode={}),u=i.BlockCipherMode=n.extend({createEncryptor:function(e,t){return this.Encryptor.create(e,t)},createDecryptor:function(e,t){return this.Decryptor.create(e,t)},init:function(e,t){this._cipher=e,this._iv=t}}),h=d.CBC=function(){function e(e,r,i){var n=this._iv;if(n){c=n;this._iv=t}else var c=this._prevBlock;for(var o=0;o<i;o++)e[r+o]^=c[o]}var r=u.extend();return r.Encryptor=r.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize;e.call(this,t,r,n),i.encryptBlock(t,r),this._prevBlock=t.slice(r,r+n)}}),r.Decryptor=r.extend({processBlock:function(t,r){var i=this._cipher,n=i.blockSize,c=t.slice(r,r+n);i.decryptBlock(t,r),e.call(this,t,r,n),this._prevBlock=c}}),r}(),l=(r.pad={}).Pkcs7={pad:function(e,t){for(var r=4*t,i=r-e.sigBytes%r,n=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(n);var a=c.create(o,i);e.concat(a)},unpad:function(e){var t=255&e.words[e.sigBytes-1>>>2];e.sigBytes-=t}},y=(i.BlockCipher=p.extend({cfg:p.cfg.extend({mode:h,padding:l}),reset:function(){p.reset.call(this);var e=this.cfg,t=e.iv,r=e.mode;if(this._xformMode==this._ENC_XFORM_MODE)i=r.createEncryptor;else{var i=r.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==i?this._mode.init(this,t&&t.words):(this._mode=i.call(r,this,t&&t.words),this._mode.__creator=i)},_doProcessBlock:function(e,t){this._mode.processBlock(e,t)},_doFinalize:function(){var e=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){e.pad(this._data,this.blockSize);t=this._process(!0)}else{var t=this._process(!0);e.unpad(t)}return t},blockSize:4}),i.CipherParams=n.extend({init:function(e){this.mixIn(e)},toString:function(e){return(e||this.formatter).stringify(this)}})),_=(r.format={}).OpenSSL={stringify:function(e){var t=e.ciphertext,r=e.salt;if(r)i=c.create([1398893684,1701076831]).concat(r).concat(t);else var i=t;return i.toString(a)},parse:function(e){var t=a.parse(e),r=t.words;if(1398893684==r[0]&&1701076831==r[1]){var i=c.create(r.slice(2,4));r.splice(0,4),t.sigBytes-=16}return y.create({ciphertext:t,salt:i})}},v=i.SerializableCipher=n.extend({cfg:n.extend({format:_}),encrypt:function(e,t,r,i){i=this.cfg.extend(i);var n=e.createEncryptor(r,i),c=n.finalize(t),o=n.cfg;return y.create({ciphertext:c,key:r,iv:o.iv,algorithm:e,mode:o.mode,padding:o.padding,blockSize:e.blockSize,formatter:i.format})},decrypt:function(e,t,r,i){return i=this.cfg.extend(i),t=this._parse(t,i.format),e.createDecryptor(r,i).finalize(t.ciphertext)},_parse:function(e,t){return"string"==typeof e?t.parse(e,this):e}}),m=(r.kdf={}).OpenSSL={execute:function(e,t,r,i){i||(i=c.random(8));var n=f.create({keySize:t+r}).compute(e,i),o=c.create(n.words.slice(t),4*r);return n.sigBytes=4*t,y.create({key:n,iv:o,salt:i})}},k=i.PasswordBasedCipher=v.extend({cfg:v.cfg.extend({kdf:m}),encrypt:function(e,t,r,i){var n=(i=this.cfg.extend(i)).kdf.execute(r,e.keySize,e.ivSize);i.iv=n.iv;var c=v.encrypt.call(this,e,t,n.key,i);return c.mixIn(n),c},decrypt:function(e,t,r,i){i=this.cfg.extend(i),t=this._parse(t,i.format);var n=i.kdf.execute(r,e.keySize,e.ivSize,t.salt);return i.iv=n.iv,v.decrypt.call(this,e,t,n.key,i)}})}()}); 
 			}); 
		define("npm/crypto-js/core.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(n,i){"object"===("undefined"==typeof exports?"undefined":t(exports))?module.exports=exports=i():"function"==typeof define&&define.amd?define([],i):n.CryptoJS=i()}(void 0,function(){var t=t||function(t,n){var i=Object.create||function(){function t(){}return function(n){var i;return t.prototype=n,i=new t,t.prototype=null,i}}(),e={},r=e.lib={},o=r.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},s=r.WordArray=o.extend({init:function(t,n){t=this.words=t||[],this.sigBytes=void 0!=n?n:4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var n=this.words,i=t.words,e=this.sigBytes,r=t.sigBytes;if(this.clamp(),e%4)for(s=0;s<r;s++){var o=i[s>>>2]>>>24-s%4*8&255;n[e+s>>>2]|=o<<24-(e+s)%4*8}else for(var s=0;s<r;s+=4)n[e+s>>>2]=i[s>>>2];return this.sigBytes+=r,this},clamp:function(){var n=this.words,i=this.sigBytes;n[i>>>2]&=4294967295<<32-i%4*8,n.length=t.ceil(i/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(n){for(var i,e=[],r=0;r<n;r+=4){var o=function(n){var n=n,i=987654321,e=4294967295;return function(){var r=((i=36969*(65535&i)+(i>>16)&e)<<16)+(n=18e3*(65535&n)+(n>>16)&e)&e;return r/=4294967296,(r+=.5)*(t.random()>.5?1:-1)}}(4294967296*(i||t.random()));i=987654071*o(),e.push(4294967296*o()|0)}return new s.init(e,n)}}),a=e.enc={},c=a.Hex={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push((o>>>4).toString(16)),e.push((15&o).toString(16))}return e.join("")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e+=2)i[e>>>3]|=parseInt(t.substr(e,2),16)<<24-e%8*4;return new s.init(i,n/2)}},u=a.Latin1={stringify:function(t){for(var n=t.words,i=t.sigBytes,e=[],r=0;r<i;r++){var o=n[r>>>2]>>>24-r%4*8&255;e.push(String.fromCharCode(o))}return e.join("")},parse:function(t){for(var n=t.length,i=[],e=0;e<n;e++)i[e>>>2]|=(255&t.charCodeAt(e))<<24-e%4*8;return new s.init(i,n)}},f=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(u.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return u.parse(unescape(encodeURIComponent(t)))}},p=r.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=f.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var i=this._data,e=i.words,r=i.sigBytes,o=this.blockSize,a=r/(4*o),c=(a=n?t.ceil(a):t.max((0|a)-this._minBufferSize,0))*o,u=t.min(4*c,r);if(c){for(var f=0;f<c;f+=o)this._doProcessBlock(e,f);var p=e.splice(0,c);i.sigBytes-=u}return new s.init(p,u)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),h=(r.Hasher=p.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,i){return new t.init(i).finalize(n)}},_createHmacHelper:function(t){return function(n,i){return new h.HMAC.init(t,i).finalize(n)}}}),e.algo={});return e}(Math);return t}); 
 			}); 
		define("npm/crypto-js/enc-base64.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r};!function(e,t){"object"===("undefined"==typeof exports?"undefined":r(exports))?module.exports=exports=t(require("./core")):"function"==typeof define&&define.amd?define(["./core"],t):t(e.CryptoJS)}(void 0,function(r){return function(){function e(r,e,t){for(var n=[],f=0,i=0;i<e;i++)if(i%4){var a=t[r.charCodeAt(i-1)]<<i%4*2,c=t[r.charCodeAt(i)]>>>6-i%4*2;n[f>>>2]|=(a|c)<<24-f%4*8,f++}return o.create(n,f)}var t=r,o=t.lib.WordArray;t.enc.Base64={stringify:function(r){var e=r.words,t=r.sigBytes,o=this._map;r.clamp();for(var n=[],f=0;f<t;f+=3)for(var i=(e[f>>>2]>>>24-f%4*8&255)<<16|(e[f+1>>>2]>>>24-(f+1)%4*8&255)<<8|e[f+2>>>2]>>>24-(f+2)%4*8&255,a=0;a<4&&f+.75*a<t;a++)n.push(o.charAt(i>>>6*(3-a)&63));var c=o.charAt(64);if(c)for(;n.length%4;)n.push(c);return n.join("")},parse:function(r){var t=r.length,o=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var f=0;f<o.length;f++)n[o.charCodeAt(f)]=f}var i=o.charAt(64);if(i){var a=r.indexOf(i);-1!==a&&(t=a)}return e(r,t,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),r.enc.Base64}); 
 			}); 
		define("npm/crypto-js/enc-utf8.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o};!function(e,t){"object"===("undefined"==typeof exports?"undefined":o(exports))?module.exports=exports=t(require("./core")):"function"==typeof define&&define.amd?define(["./core"],t):t(e.CryptoJS)}(void 0,function(o){return o.enc.Utf8}); 
 			}); 
		define("npm/crypto-js/evpkdf.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,o,r){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=o(require("./core"),require("./sha1"),require("./hmac")):"function"==typeof define&&define.amd?define(["./core","./sha1","./hmac"],o):o(t.CryptoJS)}(void 0,function(e){return function(){var t=e,o=t.lib,r=o.Base,n=o.WordArray,i=t.algo,f=i.MD5,c=i.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:f,iterations:1}),init:function(e){this.cfg=this.cfg.extend(e)},compute:function(e,t){for(var o=this.cfg,r=o.hasher.create(),i=n.create(),f=i.words,c=o.keySize,u=o.iterations;f.length<c;){a&&r.update(a);var a=r.update(e).finalize(t);r.reset();for(var s=1;s<u;s++)a=r.finalize(a),r.reset();i.concat(a)}return i.sigBytes=4*c,i}});t.EvpKDF=function(e,t,o){return c.create(o).compute(e,t)}}(),e.EvpKDF}); 
 			}); 
		define("npm/crypto-js/hmac.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,o){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=o(require("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(t.CryptoJS)}(void 0,function(e){!function(){var t=e,o=t.lib.Base,i=t.enc.Utf8;t.algo.HMAC=o.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=i.parse(t));var o=e.blockSize,n=4*o;t.sigBytes>n&&(t=e.finalize(t)),t.clamp();for(var r=this._oKey=t.clone(),s=this._iKey=t.clone(),f=r.words,c=s.words,u=0;u<o;u++)f[u]^=1549556828,c[u]^=909522486;r.sigBytes=s.sigBytes=n,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,o=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(o))}})}()}); 
 			}); 
		define("npm/crypto-js/md5.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};!function(r,o){"object"===("undefined"==typeof exports?"undefined":t(exports))?module.exports=exports=o(require("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(r.CryptoJS)}(void 0,function(t){return function(r){function o(t,r,o,e,n,i,a){var s=t+(r&o|~r&e)+n+a;return(s<<i|s>>>32-i)+r}function e(t,r,o,e,n,i,a){var s=t+(r&e|o&~e)+n+a;return(s<<i|s>>>32-i)+r}function n(t,r,o,e,n,i,a){var s=t+(r^o^e)+n+a;return(s<<i|s>>>32-i)+r}function i(t,r,o,e,n,i,a){var s=t+(o^(r|~e))+n+a;return(s<<i|s>>>32-i)+r}var a=t,s=a.lib,c=s.WordArray,f=s.Hasher,u=a.algo,h=[];!function(){for(var t=0;t<64;t++)h[t]=4294967296*r.abs(r.sin(t+1))|0}();var l=u.MD5=f.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,r){for(var a=0;a<16;a++){var s=r+a,c=t[s];t[s]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var f=this._hash.words,u=t[r+0],l=t[r+1],y=t[r+2],d=t[r+3],p=t[r+4],v=t[r+5],_=t[r+6],m=t[r+7],b=t[r+8],S=t[r+9],x=t[r+10],D=t[r+11],H=t[r+12],M=t[r+13],g=t[r+14],w=t[r+15],B=f[0],j=f[1],k=f[2],q=f[3];j=i(j=i(j=i(j=i(j=n(j=n(j=n(j=n(j=e(j=e(j=e(j=e(j=o(j=o(j=o(j=o(j,k=o(k,q=o(q,B=o(B,j,k,q,u,7,h[0]),j,k,l,12,h[1]),B,j,y,17,h[2]),q,B,d,22,h[3]),k=o(k,q=o(q,B=o(B,j,k,q,p,7,h[4]),j,k,v,12,h[5]),B,j,_,17,h[6]),q,B,m,22,h[7]),k=o(k,q=o(q,B=o(B,j,k,q,b,7,h[8]),j,k,S,12,h[9]),B,j,x,17,h[10]),q,B,D,22,h[11]),k=o(k,q=o(q,B=o(B,j,k,q,H,7,h[12]),j,k,M,12,h[13]),B,j,g,17,h[14]),q,B,w,22,h[15]),k=e(k,q=e(q,B=e(B,j,k,q,l,5,h[16]),j,k,_,9,h[17]),B,j,D,14,h[18]),q,B,u,20,h[19]),k=e(k,q=e(q,B=e(B,j,k,q,v,5,h[20]),j,k,x,9,h[21]),B,j,w,14,h[22]),q,B,p,20,h[23]),k=e(k,q=e(q,B=e(B,j,k,q,S,5,h[24]),j,k,g,9,h[25]),B,j,d,14,h[26]),q,B,b,20,h[27]),k=e(k,q=e(q,B=e(B,j,k,q,M,5,h[28]),j,k,y,9,h[29]),B,j,m,14,h[30]),q,B,H,20,h[31]),k=n(k,q=n(q,B=n(B,j,k,q,v,4,h[32]),j,k,b,11,h[33]),B,j,D,16,h[34]),q,B,g,23,h[35]),k=n(k,q=n(q,B=n(B,j,k,q,l,4,h[36]),j,k,p,11,h[37]),B,j,m,16,h[38]),q,B,x,23,h[39]),k=n(k,q=n(q,B=n(B,j,k,q,M,4,h[40]),j,k,u,11,h[41]),B,j,d,16,h[42]),q,B,_,23,h[43]),k=n(k,q=n(q,B=n(B,j,k,q,S,4,h[44]),j,k,H,11,h[45]),B,j,w,16,h[46]),q,B,y,23,h[47]),k=i(k,q=i(q,B=i(B,j,k,q,u,6,h[48]),j,k,m,10,h[49]),B,j,g,15,h[50]),q,B,v,21,h[51]),k=i(k,q=i(q,B=i(B,j,k,q,H,6,h[52]),j,k,d,10,h[53]),B,j,x,15,h[54]),q,B,l,21,h[55]),k=i(k,q=i(q,B=i(B,j,k,q,b,6,h[56]),j,k,w,10,h[57]),B,j,_,15,h[58]),q,B,M,21,h[59]),k=i(k,q=i(q,B=i(B,j,k,q,p,6,h[60]),j,k,D,10,h[61]),B,j,y,15,h[62]),q,B,S,21,h[63]),f[0]=f[0]+B|0,f[1]=f[1]+j|0,f[2]=f[2]+k|0,f[3]=f[3]+q|0},_doFinalize:function(){var t=this._data,o=t.words,e=8*this._nDataBytes,n=8*t.sigBytes;o[n>>>5]|=128<<24-n%32;var i=r.floor(e/4294967296),a=e;o[15+(n+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),o[14+(n+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),t.sigBytes=4*(o.length+1),this._process();for(var s=this._hash,c=s.words,f=0;f<4;f++){var u=c[f];c[f]=16711935&(u<<8|u>>>24)|4278255360&(u<<24|u>>>8)}return s},clone:function(){var t=f.clone.call(this);return t._hash=this._hash.clone(),t}});a.MD5=f._createHelper(l),a.HmacMD5=f._createHmacHelper(l)}(Math),t.MD5}); 
 			}); 
		define("npm/crypto-js/pad-pkcs7.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(o,t,r){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=t(require("./core"),require("./cipher-core")):"function"==typeof define&&define.amd?define(["./core","./cipher-core"],t):t(o.CryptoJS)}(void 0,function(e){return e.pad.Pkcs7}); 
 			}); 
		define("npm/crypto-js/sha1.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t,o){"object"===("undefined"==typeof exports?"undefined":e(exports))?module.exports=exports=o(require("./core")):"function"==typeof define&&define.amd?define(["./core"],o):o(t.CryptoJS)}(void 0,function(e){return function(){var t=e,o=t.lib,n=o.WordArray,r=o.Hasher,i=[],s=t.algo.SHA1=r.extend({_doReset:function(){this._hash=new n.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(e,t){for(var o=this._hash.words,n=o[0],r=o[1],s=o[2],c=o[3],a=o[4],f=0;f<80;f++){if(f<16)i[f]=0|e[t+f];else{var u=i[f-3]^i[f-8]^i[f-14]^i[f-16];i[f]=u<<1|u>>>31}var l=(n<<5|n>>>27)+a+i[f];l+=f<20?1518500249+(r&s|~r&c):f<40?1859775393+(r^s^c):f<60?(r&s|r&c|s&c)-1894007588:(r^s^c)-899497514,a=c,c=s,s=r<<30|r>>>2,r=n,n=l}o[0]=o[0]+n|0,o[1]=o[1]+r|0,o[2]=o[2]+s|0,o[3]=o[3]+c|0,o[4]=o[4]+a|0},_doFinalize:function(){var e=this._data,t=e.words,o=8*this._nDataBytes,n=8*e.sigBytes;return t[n>>>5]|=128<<24-n%32,t[14+(n+64>>>9<<4)]=Math.floor(o/4294967296),t[15+(n+64>>>9<<4)]=o,e.sigBytes=4*t.length,this._process(),this._hash},clone:function(){var e=r.clone.call(this);return e._hash=this._hash.clone(),e}});t.SHA1=r._createHelper(s),t.HmacSHA1=r._createHmacHelper(s)}(),e.SHA1}); 
 			}); 
		define("npm/regenerator-runtime/runtime.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=require("../@mtfe/mt-weapp-promise/index.js");!function(e){function n(t,r,e,n){var o=r&&r.prototype instanceof i?r:i,a=Object.create(o.prototype),c=new y(n||[]);return a._invoke=h(t,e,c),a}function o(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}function i(){}function a(){}function c(){}function u(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function f(e){function n(i,a,c,u){var f=o(e[i],e,a);if("throw"!==f.type){var h=f.arg,l=h.value;return l&&"object"===(void 0===l?"undefined":t(l))&&w.call(l,"__await")?r.resolve(l.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(l).then(function(t){h.value=t,c(h)},u)}u(f.arg)}var i;this._invoke=function(t,e){function o(){return new r(function(r,o){n(t,e,r,o)})}return i=i?i.then(o,o):o()}}function h(t,r,e){var n=O;return function(i,a){if(n===k)throw new Error("Generator is already running");if(n===G){if("throw"===i)throw a;return v()}for(e.method=i,e.arg=a;;){var c=e.delegate;if(c){var u=l(c,e);if(u){if(u===N)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===O)throw n=G,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=k;var f=o(t,r,e);if("normal"===f.type){if(n=e.done?G:S,f.arg===N)continue;return{value:f.arg,done:e.done}}"throw"===f.type&&(n=G,e.method="throw",e.arg=f.arg)}}}function l(t,r){var e=t.iterator[r.method];if(e===m){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=m,l(t,r),"throw"===r.method))return N;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return N}var n=o(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,N;var i=n.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=m),r.delegate=null,N):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,N)}function s(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function p(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function y(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(s,this),this.reset(!0)}function d(t){if(t){var r=t[L];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(w.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=m,r.done=!0,r};return n.next=n}}return{next:v}}function v(){return{value:m,done:!0}}var m,g=Object.prototype,w=g.hasOwnProperty,x="function"==typeof Symbol?Symbol:{},L=x.iterator||"@@iterator",b=x.asyncIterator||"@@asyncIterator",E=x.toStringTag||"@@toStringTag",_="object"===("undefined"==typeof module?"undefined":t(module)),j=e.regeneratorRuntime;if(j)_&&(module.exports=j);else{(j=e.regeneratorRuntime=_?module.exports:{}).wrap=n;var O="suspendedStart",S="suspendedYield",k="executing",G="completed",N={},F={};F[L]=function(){return this};var T=Object.getPrototypeOf,P=T&&T(T(d([])));P&&P!==g&&w.call(P,L)&&(F=P);var I=c.prototype=i.prototype=Object.create(F);a.prototype=I.constructor=c,c.constructor=a,c[E]=a.displayName="GeneratorFunction",j.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===a||"GeneratorFunction"===(r.displayName||r.name))},j.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,c):(t.__proto__=c,E in t||(t[E]="GeneratorFunction")),t.prototype=Object.create(I),t},j.awrap=function(t){return{__await:t}},u(f.prototype),f.prototype[b]=function(){return this},j.AsyncIterator=f,j.async=function(t,r,e,o){var i=new f(n(t,r,e,o));return j.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},u(I),I[E]="Generator",I[L]=function(){return this},I.toString=function(){return"[object Generator]"},j.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},j.values=d,y.prototype={constructor:y,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=m,this.done=!1,this.delegate=null,this.method="next",this.arg=m,this.tryEntries.forEach(p),!t)for(var r in this)"t"===r.charAt(0)&&w.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=m)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=m),!!n}if(this.done)throw t;for(var e=this,n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var a=w.call(o,"catchLoc"),c=w.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&w.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,N):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),N},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),p(e),N}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;p(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:d(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=m),N}}}}(function(){return this}()||Function("return this")()); 
 			}); 
		define("utils/cat.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=require("../npm/@dp/owl-wxapp/es6/index.js"); 
 			}); 
		define("utils/lx.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=require("../npm/@analytics/wechat-sdk/lib/index.js"); 
 			}); 
		define("utils/promise-6.1.0.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=require("../npm/@mtfe/mt-weapp-promise/index.js"); 
 			}); 
		define("utils/qs.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(e){function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){r.decode=r.parse=t(1),r.encode=r.stringify=t(2)},function(e,r){function t(e,r){return Object.prototype.hasOwnProperty.call(e,r)}e.exports=function(e,r,o,u){r=r||"&",o=o||"=";var c={};if("string"!=typeof e||0===e.length)return c;var i=/\+/g;e=e.split(r);var a=1e3;u&&"number"==typeof u.maxKeys&&(a=u.maxKeys);var p=e.length;a>0&&p>a&&(p=a);for(var f=0;p>f;++f){var s,y,l,d,m=e[f].replace(i,"%20"),b=m.indexOf(o);b>=0?(s=m.substr(0,b),y=m.substr(b+1)):(s=m,y=""),l=decodeURIComponent(s),d=decodeURIComponent(y),t(c,l)?n(c[l])?c[l].push(d):c[l]=[c[l],d]:c[l]=d}return c};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},function(r,t){function n(e,r){if(e.map)return e.map(r);for(var t=[],n=0;n<e.length;n++)t.push(r(e[n],n));return t}var o=function(r){switch(void 0===r?"undefined":e(r)){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}};r.exports=function(r,t,i,a){return t=t||"&",i=i||"=",null===r&&(r=void 0),"object"==(void 0===r?"undefined":e(r))?n(c(r),function(e){var c=encodeURIComponent(o(e))+i;return u(r[e])?n(r[e],function(e){return c+encodeURIComponent(o(e))}).join(t):c+encodeURIComponent(o(r[e]))}).join(t):a?encodeURIComponent(o(a))+i+encodeURIComponent(o(r)):""};var u=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},c=Object.keys||function(e){var r=[];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.push(t);return r}}]);module.exports=r; 
 			}); 
		define("utils/risk.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../npm/@mtfe/mt-weapp-api/dist/index.js").wx,e=require("./util").getUserInfo;module.exports={getRiskParams:function(n,i,o){var c=getApp(),a={};try{t.onAccelerometerChange(function(t){a.x=t.x,a.y=t.y,a.z=t.z})}catch(t){}try{t.onCompassChange(function(t){a.direction=t.direction})}catch(t){}try{t.getNetworkType({success:function(t){a.networkType=t.networkType}})}catch(t){}if("review"!==o&&c.getLocation(function(t){a.latitude=t.latitude,a.longitude=t.longitude}),c.getSysInfo(function(t){a.model=t.model,a.pixelRatio=t.pixelRatio,a.windowWidth=t.windowWidth,a.windowHeight=t.windowHeight,a.language=t.language,a.version=t.version,a.system=t.system,a.platform=t.platform}),"review"!==o&&(c.getOpenId(function(){a.openid=c.globalData.openId}),t.getSetting&&t.getSetting({success:function(t){t.authSetting["scope.userInfo"]&&e().then(function(t){a.nickName=t.nickName,a.gender=t.gender,a.city=t.city,a.province=t.province,a.country=t.country,a.avatarUrl=t.avatarUrl})}})),a.app_name="group",a.user_type="wx",n){var r=void 0;try{r=n.detail.x+","+n.detail.y}catch(t){}try{r=r||n.touches[0].pageX+","+n.touches[0].pageY}catch(t){}try{r=r||n.touches[0].x+","+n.touches[0].y}catch(t){}null==r&&(r="string"==typeof n?n:JSON.stringify(n)),r&&(a.touchPoint=r)}setTimeout(function(){"function"==typeof i&&(i(a),i=null)},500)}}; 
 			}); 
		define("utils/rohr-1.0.1.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";module.exports=require("../npm/@mtfe/wxapp-rohr/dist/rohr.js"); 
 			}); 
		define("utils/util.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,e){if(e=e||null){var n=Object.keys(e).map(function(t){return t+"="+e[t]});t+="?"+(n=n.join("&"))}return t}function e(t){return(t=t.toString())[1]?t:"0"+t}function n(t,e){var n,r,o,i;try{n=t.toString().split(".")[1].length}catch(t){n=0}try{r=e.toString().split(".")[1].length}catch(t){r=0}return i=Math.max(n,r),o=Math.pow(10,i),Number(((t*o-e*o)/o).toFixed(i))}function r(t){t&&(0,c.request)(t)}function o(t){this.visibleHeight=t.visibleHeight,this.percent=t.percent||.7,this.bid=t.bid,this.viewDots=[],this.val_lab=t.val_lab,this.lx=t.lx}var i=function(){function t(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{!r&&c.return&&c.return()}finally{if(o)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c=require("../npm/@mtfe/mt-weapp-api/dist/index.js"),u=require("../npm/@mtfe/mt-weapp-promise/index.js"),s=require("../npm/@mtfe/mt-weapp-api/dist/index.js").wx,l=require("../config.js"),f=require("../login/index.js"),p={"mt/pages/mycomment/my-comment":"c_ht1bsplb","index/pages/mt/mt":"c_qan50600","index/pages/h5/h5":"c_gya2akq1","mt/pages/deal/deal":"c_oiyv8tl2","mt/pages/order/order-detail":"c_is2pkyrx","mt/pages/order/order-detail-daozong":"c_x9czc210","index/pages/order/order-list":"c_s57hl3r2","mt/pages/poi/poi-list":"c_sqmfco4b","mt/pages/poi/poi":"c_doyuzb5v","nodata/pages/nodata/nodata":"c_kjely8ps","search/pages/search/search":"c_v08khz16","mt/pages/list/list":"c_9ffftlmu","index/pages/mine/mine":"c_a3br2oqo","mt/pages/comment/comment":"c_tvhkll6w","mt/pages/poi/album":"c_3ubromfr","search/pages/city/city":"c_369augie"},g={mtOrder:"b_3wzoszrv",mtPay:"b_b1w4ccta"};"function"!=typeof Object.assign&&(Object.assign=function(t){if(t)return([].slice.call(arguments,1)||[]).forEach(function(e){e&&Object.keys(e).forEach(function(n){t[n]=e[n]})}),t}),String.prototype.startsWith||(String.prototype.startsWith=function(t,e){return this.substr(!e||e<0?0:+e,t.length)===t}),o.prototype={constructor:o,setValLab:function(t){this.val_lab=t},addDots:function(t){t instanceof Array?this.viewDots=[].concat(t):t&&"object"===(void 0===t?"undefined":a(t))&&this.viewDots.push(t)},check:function(t){var e=this,n=(t=t||0)+this.visibleHeight;this.viewDots.forEach(function(o){var i=(o.bottom-o.top)*e.percent;if(!o.report&&o.bottom-t>i&&n-o.top>i&&(o.dataset.hasads&&r(o.dataset.adsshowurl),e.lx)){var a={};if(o.dataset.vallab)try{a=JSON.parse(o.dataset.vallab)}catch(t){console.error(t)}e.lx.moduleView(e.bid,Object.assign(a,e.val_lab)),o.report=!0}}),this.removeReported()},clearList:function(){this.viewDots.length=0},removeReported:function(){var t=this;clearTimeout(this.removeFlag),this.removeFlag=setTimeout(function(){t.viewDots=t.viewDots.filter(function(t){return!t.report})},1e3)},init:function(){this.check()}};var d=function(){s.showModal({title:"提示信息",content:"微信版本太低，请下载最新版查看该服务。",showCancel:!1})},h=s.canIUse?function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=s.canIUse(t);return!n&&e&&d(),n}:function(t){return(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&d(),!1};s.reLaunch||(s.reLaunch=function(t){s.navigateBack(getCurrentPages().length),s.redirectTo(t)}),s.showLoading||(s.showLoading=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.icon="loading",s.showToast(t)},s.hideLoading=s.hideToast);var m=function(t,e){return(0,c.request)({url:"https://web.meituan.com/web/miniprogram/formid/report",method:"POST",data:t,success:function(t){e&&e.call(void 0,t)},fail:function(t){console.error("fail to post formId:"+t.message)}})},v=function(t,e){return function(){return t.apply(this,arguments).catch(function(t){e&&console.error("mt-group: ",t)})}},y=f.utils,b=y.getLoginCode,w=y.setStorage,S=y.getStorage,I=y.stringify,j=function(t){getApp().getSysInfo&&getApp().getSysInfo(function(e){var n=[{category:t.category||"resourceError",content:t.content||"自定义错误",level:t.level||"error",network:t.network||"unknow",os:e.os||"unknow",pageUrl:t.pageUrl||"index/pages/mt/mt",project:"mt-weapp",sec_category:t.sec_category||"自定义错误",timestamp:parseInt(+new Date/1e3),unionId:t.unionId||""}];(0,c.request)({url:"https://catfront.dianping.com/api/log?v=1",data:"c="+encodeURIComponent(JSON.stringify(n)),method:"POST",header:{"content-type":"application/x-www-form-urlencoded;"}})})};module.exports={stringify:I,getLoginCode:b,getStorage:v(S),setStorage:v(w,!0),postFormId:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pingtai",n=arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"common";console.log("posting","formid is :",t);var o=getApp(),i={formId:t,source:e,appId:"wxde8ac0a21135c07d",formIdType:r},a=o.globalData,c=a.openId,u=a.userId;u&&(i.userId=u),c?(i.openId=c,m(i,n)):o.getOpenId(function(t){i.openId=t,m(i,n)})},showLowVersionTip:d,canIUse:h,getUserInfo:function(){return y.getUserInfo({withCredentials:!1},!0).then(function(t){return t.userInfo})},formatTime:function(t){var n=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),i=t.getHours(),a=t.getMinutes(),c=t.getSeconds();return[n,r,o].map(e).join("/")+" "+[i,a,c].map(e).join(":")},formatDate:function(t){return[t.getFullYear(),t.getMonth()+1,t.getDate()].map(e).join("/")},formatDateWithEmptyStr:function(t){return[t.getFullYear(),t.getMonth()+1,t.getDate()].map(e).join("")},getScoreArr:function(t){for(var e=[0,0,0,0,0],r=0;r<5;r++){var o=n(t,r);if(o>=.8)e[r]=1;else{if(!(o<=.2)){e[r]=2;break}e[r]=0}}return e},formatUrl:t,genCaptchaUrl:function(e){return t(l.captchaApi,{uuid:e,n:Math.random()})},callShopPhone:function(t){var e=t.currentTarget.dataset.phone;if(e){var n=(e=e.split("/")).map(function(t){return"联系商家:"+t});s.showActionSheet({itemList:n,success:function(t){if(!t.cancel){var n=e[t.tapIndex].replace(/-/g,"");n.length>10&&(0===n.indexOf("400")||0===n.indexOf("800"))&&(n=n.slice(0,10)+",,"+n.slice(10)),s.makePhoneCall({phoneNumber:n})}}})}},hideLoading:function(t){t.setData({loading:{hidden:!0}})},getCid:function(){var t=getCurrentPages(),e=t[t.length-1].route;return p[e]},mtBids:g,formatImageUrl:function(t,e,n,r){t=t||"";try{t=decodeURIComponent(t)}catch(e){console.error(e),console.error("=================="+t)}n+="",r=r?r+":":"";var o={"2g":"10Q","3g":"30Q","4g":"50Q",wifi:"50Q"},i="50Q";return o[n.toLowerCase()]&&(i=o[n.toLowerCase()]),e=(e=e||"192w_192h_1e_1c")+"_"+i,e=t.indexOf("@")>0?"|"+e:/mss\.sankuai\.com/.test(t)?"":"@"+e,t.replace("/w.h/","/").replace("http:",r||"")+e},getCurrentPagePath:function(){var e=getCurrentPages(),n=e[e.length-1];return t("/"+n.route,n.options)},mtSetStorageSync:function(t,e,n){try{s.setStorageSync(t,{value:e,timestamp:+new Date,expires:n})}catch(t){console.log(t)}},mtGetStorageSync:function(t){try{var e=s.getStorageSync(t);return e.expires&&+new Date-e.timestamp>e.expires?(s.removeStorageSync(t),null):e.value}catch(t){return console.log(t),null}},ViewGA:o,sendAdsLog:r,json2Form:function(t){var e=[];for(var n in t)void 0!==t[n]&&e.push(encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return e.join("&")},formatTimestamp:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Date.now(),e=new Date(t).getDate();return new Date(t).getMonth()+1+"月"+e+"日"},computerDays:function(t,e){if(t&&e)return Number(t)!==Number(e)?Math.ceil((e-t)/1e3/3600/24):0},valuesPolyfill:function(){var t=Function.bind.call(Function.call,Array.prototype.reduce),e=Function.bind.call(Function.call,Object.prototype.propertyIsEnumerable),n=Function.bind.call(Function.call,Array.prototype.concat),r="object"===("undefined"==typeof Reflect?"undefined":a(Reflect))&&Reflect.ownKeys||Object.keys;Object.values||(Object.values=function(o){return t(r(o),function(t,r){return n(t,"string"==typeof r&&e(o,r)?[o[r]]:[])},[])}),Object.entries||(Object.entries=function(o){return t(r(o),function(t,r){return n(t,"string"==typeof r&&e(o,r)?[[r,o[r]]]:[])},[])})},filterPramas:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce(function(e,n){return null!=t[n]&&(e[n]=t[n]),e},{})},formatImgURI:function(t,e){e=Object.assign({},e),t=(t=decodeURIComponent(t)).replace("img.meituan.net","p0.meituan.net");var n=/p([0-1]{1})\.meituan\.net(\/[^@]+)@?(.*)?/;if(n.test(t)){var r=n.exec(t),o=i(r,4),a=(o[0],o[1],o[2]),c=o[3];a=a.replace("/w.h/","/");var u=Object.keys(e).map(function(t){return""+e[t]+t}).join("_");return u&&(c=(c?c+"|":"")+u),"http://p"+[].reduce.call(a,function(t,e){return t+e.charCodeAt(0)|0},0)%2+".meituan.net"+a+(c?"@"+c:"")}return t},strToArrWithSize:function(t,e){for(var n=[],r=0;r<t.length/e;r++)n.push(t.slice(r*e,(r+1)*e));return n},promisify:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s;return function(){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new u(function(n,o){var a=Object.assign({},i,{success:function(t){i.success&&i.success(t),n(t)},fail:function(t){i.fail&&i.fail(t),o(new Error("No data:"+i.url+"++"+JSON.stringify(t)))}});t.call.apply(t,[e,a].concat(r))})}},request:c.request,getLocation:c.getLocation,reportFormId:m,isIphoneX:function(){try{var t=s.getSystemInfoSync();return/iPhone X/i.test(t.model)}catch(t){return console.error(t),!1}},owlErrorReport:function(t){var e=t.key,n=t.tag,r=t.value,o=t.isWatch,i=void 0===o||o;try{if(!e)return;var a=getApp().owl.newMetric();if(a.setTags(n||{}),a.setMetric(e,r||1),a.report(),i){var c=" "+JSON.stringify(n||{});j({content:c,sec_category:e})}}catch(t){return void console.warn(t)}},owlErrorWatch:j,md5:function(t,e,n){function r(t,e){var n=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(n>>16)<<16|65535&n}function o(t,e){return t<<e|t>>>32-e}function i(t,e,n,i,a,c){return r(o(r(r(e,t),r(i,c)),a),n)}function a(t,e,n,r,o,a,c){return i(e&n|~e&r,t,e,o,a,c)}function c(t,e,n,r,o,a,c){return i(e&r|n&~r,t,e,o,a,c)}function u(t,e,n,r,o,a,c){return i(e^n^r,t,e,o,a,c)}function s(t,e,n,r,o,a,c){return i(n^(e|~r),t,e,o,a,c)}function l(t,e){t[e>>5]|=128<<e%32,t[14+(e+64>>>9<<4)]=e;var n,o,i,l,f,p=1732584193,g=-271733879,d=-1732584194,h=271733878;for(n=0;n<t.length;n+=16)o=p,i=g,l=d,f=h,g=s(g=s(g=s(g=s(g=u(g=u(g=u(g=u(g=c(g=c(g=c(g=c(g=a(g=a(g=a(g=a(g,d=a(d,h=a(h,p=a(p,g,d,h,t[n],7,-680876936),g,d,t[n+1],12,-389564586),p,g,t[n+2],17,606105819),h,p,t[n+3],22,-1044525330),d=a(d,h=a(h,p=a(p,g,d,h,t[n+4],7,-176418897),g,d,t[n+5],12,1200080426),p,g,t[n+6],17,-1473231341),h,p,t[n+7],22,-45705983),d=a(d,h=a(h,p=a(p,g,d,h,t[n+8],7,1770035416),g,d,t[n+9],12,-1958414417),p,g,t[n+10],17,-42063),h,p,t[n+11],22,-1990404162),d=a(d,h=a(h,p=a(p,g,d,h,t[n+12],7,1804603682),g,d,t[n+13],12,-40341101),p,g,t[n+14],17,-1502002290),h,p,t[n+15],22,1236535329),d=c(d,h=c(h,p=c(p,g,d,h,t[n+1],5,-165796510),g,d,t[n+6],9,-1069501632),p,g,t[n+11],14,643717713),h,p,t[n],20,-373897302),d=c(d,h=c(h,p=c(p,g,d,h,t[n+5],5,-701558691),g,d,t[n+10],9,38016083),p,g,t[n+15],14,-660478335),h,p,t[n+4],20,-405537848),d=c(d,h=c(h,p=c(p,g,d,h,t[n+9],5,568446438),g,d,t[n+14],9,-1019803690),p,g,t[n+3],14,-187363961),h,p,t[n+8],20,1163531501),d=c(d,h=c(h,p=c(p,g,d,h,t[n+13],5,-1444681467),g,d,t[n+2],9,-51403784),p,g,t[n+7],14,1735328473),h,p,t[n+12],20,-1926607734),d=u(d,h=u(h,p=u(p,g,d,h,t[n+5],4,-378558),g,d,t[n+8],11,-2022574463),p,g,t[n+11],16,1839030562),h,p,t[n+14],23,-35309556),d=u(d,h=u(h,p=u(p,g,d,h,t[n+1],4,-1530992060),g,d,t[n+4],11,1272893353),p,g,t[n+7],16,-155497632),h,p,t[n+10],23,-1094730640),d=u(d,h=u(h,p=u(p,g,d,h,t[n+13],4,681279174),g,d,t[n],11,-358537222),p,g,t[n+3],16,-722521979),h,p,t[n+6],23,76029189),d=u(d,h=u(h,p=u(p,g,d,h,t[n+9],4,-640364487),g,d,t[n+12],11,-421815835),p,g,t[n+15],16,530742520),h,p,t[n+2],23,-995338651),d=s(d,h=s(h,p=s(p,g,d,h,t[n],6,-198630844),g,d,t[n+7],10,1126891415),p,g,t[n+14],15,-1416354905),h,p,t[n+5],21,-57434055),d=s(d,h=s(h,p=s(p,g,d,h,t[n+12],6,1700485571),g,d,t[n+3],10,-1894986606),p,g,t[n+10],15,-1051523),h,p,t[n+1],21,-2054922799),d=s(d,h=s(h,p=s(p,g,d,h,t[n+8],6,1873313359),g,d,t[n+15],10,-30611744),p,g,t[n+6],15,-1560198380),h,p,t[n+13],21,1309151649),d=s(d,h=s(h,p=s(p,g,d,h,t[n+4],6,-145523070),g,d,t[n+11],10,-1120210379),p,g,t[n+2],15,718787259),h,p,t[n+9],21,-343485551),p=r(p,o),g=r(g,i),d=r(d,l),h=r(h,f);return[p,g,d,h]}function f(t){var e,n="",r=32*t.length;for(e=0;e<r;e+=8)n+=String.fromCharCode(t[e>>5]>>>e%32&255);return n}function p(t){var e,n=[];for(n[(t.length>>2)-1]=void 0,e=0;e<n.length;e+=1)n[e]=0;var r=8*t.length;for(e=0;e<r;e+=8)n[e>>5]|=(255&t.charCodeAt(e/8))<<e%32;return n}function g(t){return f(l(p(t),8*t.length))}function d(t,e){var n,r,o=p(t),i=[],a=[];for(i[15]=a[15]=void 0,o.length>16&&(o=l(o,8*t.length)),n=0;n<16;n+=1)i[n]=909522486^o[n],a[n]=1549556828^o[n];return r=l(i.concat(p(e)),512+8*e.length),f(l(a.concat(r),640))}function h(t){var e,n,r="";for(n=0;n<t.length;n+=1)e=t.charCodeAt(n),r+="0123456789abcdef".charAt(e>>>4&15)+"0123456789abcdef".charAt(15&e);return r}function m(t){return unescape(encodeURIComponent(t))}function v(t){return g(m(t))}function y(t,e){return d(m(t),m(e))}return e?n?y(e,t):h(y(e,t)):n?v(t):h(v(t))}}; 
 			}); 
		define("web-pay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});exports.test=function(){console.log("测试")}; 
 			}); 
		define("app.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=e(require("./utils/promise-6.1.0")),n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(require("npm/@mtfe/mt-weapp-city/index.js")),o=require("npm/@mtfe/mt-weapp-api/dist/index.js"),i=require("npm/@mtfe/mt-weapp-perf/dist/index.js"),r=require("npm/@dp/owl-wxapp/es6/index.js"),a=require("npm/@mtfe/mt-weapp-log/dist/index.js"),u=e(require("npm/@mtfe/mt-weapp-event/lib/index.js")),s=e(require("npm/@dp/logan-wxapp/build/wxlogan.js")),c=require("npm/@mtfe/mt-weapp-hotfix/lib/index.js");require("web-pay/index.js");var l=e(require("./dynamic/config")),f=e(require("npm/@mtfe/mt-weapp-queue/index.js")),p=require("./utils/util"),d=require("npm/@mtfe/mt-weapp-api/dist/index.js").wx,g=(0,c.start)({appName:"mtweapp",env:"pro",App:r.app,Page:r.page});g.onUpdate(function(e){d.reportAnalytics("hotfix_loaded",{p_project:"mtweapp",p_version:"default",p_hash:e})}),l.default.env="",g.injections=l.default.injections=require("npm/@mtfe/mt-weapp-sdks/index.js"),o.config.env=d.getStorageSync("api_env")||void 0||"production",o.request.use(function(e){return function(t){if(t.isRequest=!0,t.mtsi){var n=getApp(),o=n&&n.globalData;o&&Object.assign(t.header,{uuid:o.uuid||"",open_id:o.openId||"",clientversion:o.sysInfo&&o.sysInfo.SDKVersion||"",utm_medium:o.sysInfo&&o.sysInfo.os||"",myLng:o.location&&o.location.latitude||"",myLat:o.location&&o.location.longitude||"",token:o.token||""})}return e(t)}});var h=require("./config"),m=require("./utils/util"),I=require("login/index.js"),y=require("npm/@analytics/wechat-sdk/lib/index.js"),v=require("./index/pages/city/config.js").goCityPick;y.init(h.lxApi,{appnm:"group_wxapp",category:"group"});var _=Date.now(),w=_-_%864e5;i.config.owl=r.owl,(0,a.init)({App:c.App,Page:c.Page,request:r.request||d.request,wx:d,env:"",project:"mt-weapp",owl:r.owl,Logan:s.default,switch:{speed:!0,error:!0}}),o.config.request=(0,o.wrapAPI)("request",require("npm/@mtfe/mt-weapp-log/dist/index.js")),l.default.request=function(e){return e.isRequest=!0,o.config.request(e)};I.setAppConfig({appName:"group",risk_platform:13,risk_partner:0,persistKey:"userInfo"}),I.config.api="",I.setEnv(""),I.config.authRoute="/npm/@mtfe/mt-weapp-authrize",I.config.request=function(){return o.request.apply(void 0,arguments).then(function(e){return e.data})},I.setSdkRoute("/login");var b={"ticket/pages/poi/poi":{path:"ticket/mpvue-pages/pages/poi/poi",query:{poiid:"poiId"}}};(0,a.app)({lx:y,owl:r.owl,Logan:s.default,loginSdk:I,event:u.default,require:require,md5:p.md5,version:"3.6.22",fixShareData:function(e){return Object.assign({title:"享美食，爱玩乐，看电影",path:"/index/pages/mt/mt"},e)},onLaunch:function(e){var n=this;this.globalData.lxDebugTime=new Date,this.globalData.lxStartCount=0,m.valuesPolyfill(),y.set("scene",e.scene);var o=e&&"finance/pages/pay/index"===e.path;if(this.globalData.isFinance=o,r.owl.start({project:"mt-weapp",devMode:!1,page:{sample:1},wxAppVersion:"3.6.22",logan:{enable:!0,Logan:s.default,config:{enableShake:!1,appSource:"mt-weapp"}}}),o){if(e&&e.query){var i=void 0;/\%26env\%3D([^&#]*)/.test(e.query.q)&&(i=RegExp.$1),this.globalData.finance_env=i||e.query.env||"prod"}this.reportOpenid=1,this.reportFlag=this.delayReport()}else this.getSysInfo().then(function(e){e.SDKVersion<"1.7.3"&&r.owl.cfgManager.update("project","mt-weapp-discard")}),this._appPv=I.getAuthInfo().then(function(e){return t.default.all([n.getAuthInfo(e),n.getUUID(),n.getOpenId(function(e){try{r.owl.cfgManager.update("unionId",e)}catch(e){s.default.log(e.toString())}})])}).catch(function(e){return console.error(e)}).then(function(){n.reportOpenid=1,n.reportFlag=n.delayReport();var t=e||{},o=t.path,i=t.query,r=t.scene,a=t.shareTicket,u=t.referrerInfo;y.moduleView("b_j4t50khy",{path:o,query:i,scene:r,shareTicket:a,referrerInfo:u})});this.globalData.coldBoot=!0},slientLogin:function(){var e=this;return this._sLoginProm?this._sLoginProm:this._sLoginProm=I.wxLogin({bind:!1}).catch(function(t){console.error(t),e._sLoginProm=null}).then(function(t){return setTimeout(function(){e._sLoginProm=null},3e3),t})},getAuthInfo:function(e){var n=this;return this._authProm?this._authProm:this.globalData.token?t.default.resolve(this.globalData):(this._authProm=function(){if(e){var o=e.token,i=e.uuid,r=e.openId;if(Object.assign(n.globalData,{uuid:i,openId:r}),o)return m.request(h.userInfoApi,{query:{token:o}}).then(function(t){!t||null==t.data||t.data.error?I.removeAuthInfo():n.saveLoginData(e)})}return t.default.resolve()}().catch(function(e){console.error(e)}).then(function(){if(!n.globalData.token)return n.slientLogin().then(function(e){e&&!e.error&&n.saveLoginData(e)})}).then(function(){return n._authProm=null,n.globalData}),this._authProm)},onShow:function(e){var t=this;y.set("scene",e.scene),e&&(e.out_trade_no||e.transaction_id)&&(this.globalData.finance_params=e,this.globalData.out_trade_no=e.out_trade_no,this.globalData.transaction_id=e.transaction_id),e.query&&e.query.wxsource?this.globalData.hotelScene=e.query.wxsource:this.globalData.hotelScene&&delete this.globalData.hotelScene,e&&"1011"===e.scene&&"finance/pages/pay/index"===e.path||this.getOpenId(function(e){t.lxSetPathEnv({openId:e}),y.moduleView("b_yb0v9i24")}),1037==e.scene&&this.getOpenId(function(t){setTimeout(function(){try{var n=e.query&&e.query.from||e.referrerInfo&&e.referrerInfo.appId||e.referrerInfo&&e.referrerInfo.extraData&&e.referrerInfo.extraData.from||"",o=e.query&&e.query.position||e.referrerInfo&&e.referrerInfo.extraData&&e.referrerInfo.extraData.position||"";d.reportAnalytics("mt_advertising",{openid:t,source:n,position:o})}catch(e){}},2e3)});var n=e&&e.query,o={utm_campaign:"",utm_source:"",utm_medium:""};if(n&&n.utm_campaign&&(o.utm_campaign=n.utm_campaign),n&&n.utm_source&&(o.utm_source=n.utm_source),n&&n.utm_medium&&(o.utm_medium=n.utm_medium),y.setUTM(o),y.start({custom:{path:e&&e.path||"",scene:e&&e.scene||0}}),this.globalData.scene=e&&e.scene,this.globalData.referrerInfo=e&&e.referrerInfo,1038!==this.globalData.scene&&1037!==this.globalData.scene);else{var i=e.referrerInfo&&e.referrerInfo.extraData,r=(i="string"==typeof i?JSON.parse(i):i)&&(i.tab||i.fromMiniProgram)?i.tab||i.fromMiniProgram:null;this.globalData.tab=r}},getUUID:function(){var e,t=this;try{e=this.globalData.uuid||d.getStorageSync("uuid")}catch(e){console.warn(e)}var n=I.utils,o=n.getUUID,i=n.setStorage;return e?(this.globalData.uuid=e,this.globalData.isFirst=!1,I.setAppConfig({uuid:e}),i("uuid",e).then(function(){return e})):o().then(function(n){return e=n,t.globalData.uuid=e,i("uuid",e).then(function(){return e})}).catch(function(e){console.error(e)})},getOpenId:function(e){var n=this,o=function(t){if(n.globalData.openId=t,y.set("wxid",t),"function"==typeof e)try{e(t)}catch(e){console.error("app getOpenId callback: ",e)}return t};if(this._openIdProm)return this._openIdProm.then(o);return this._openIdProm=function(){var e=n.globalData.openId;return e?t.default.resolve(e):m.getStorage("openId")}().then(function(e){return e?o(e):n.slientLogin().then(function(e){var t=e.openId;return m.setStorage("openId",t),o(t)}).catch(function(e){console.error(e)}).then(function(e){return n._openIdProm=null,e})}),this._openIdProm},getWxUserInfo:function(e){var n=this,o=function(e){return m.setStorage("unionId",e.uniqueid),m.setStorage("wxuser",e),n.globalData.wxUser=e,e},i=function(){return I.updateWxUserInfo().then(o).catch(function(e){return console.error(e)})};return e?i():this.globalData.wxUser?t.default.resolve(this.globalData.wxUser):m.getStorage("wxuser").then(function(e){return e?(n.globalData.wxUser=e,e):n.getOpenId().then(function(e){return I.getWxUserInfo({openId:e})}).then(o).catch(function(){return i()})})},onHide:function(){y.quit()},saveLoginData:function(e,t){var n=e.openId,o=e.token,i=e.userId,r=e.code,a=e.uuid;y.set("uid",i);var u={code:r};Object.assign(this.globalData,{loginInfo:u,openId:n,token:o,userId:i,uuid:a}),this.$user=Object.assign(this.$user||{},{uuid:a,code:r,token:o,openId:n,userId:i,isBindMobile:!0,timestamp:Date.now()}),"function"==typeof t&&t(n,u)},logout:function(){var e=this;return I.removeAuthInfo().then(function(){e.globalData.token=null,e.globalData.userId=null})},login:function(e,n){var o=this,i=this.globalData;return i.token?"function"==typeof e?t.default.resolve(e(i.openId,i.loginInfo)):t.default.resolve():this.slientLogin().then(function(t){if(t){if(t.error){y.pageView("c_wbb1658t");var i=I.API_TYPE,r=I.authState.session||I.login.createSession();return r.on(I.SessionEvent.CLICK,function(e){switch(e){case i.WX_MOBILE:y.moduleClick("b_vavlaut5");break;case i.WXV2:y.moduleClick("b_40nq94kb")}}),I.cleanLogin(r).then(function(t){t?o.saveLoginData(t,e):n&&n()})}o.saveLoginData(t,e)}else n&&n()})},fixCityInfo:function(e){return"金华"===e.name&&"义乌市"===e.district&&(e.id=405,e.name="义乌"),e},getCityInfo:function(e){var o=this;return new t.default(function(t,i){n.getCityInfo(e).then(function(e){e=o.fixCityInfo(e),y.set("cityid",e.id),t(e)}).catch(function(e){if("101"===e.code){var t=m.getCurrentPagePath();d.redirectTo({url:"/nodata/pages/nodata/nodata?type=getLocation&backUrl="+encodeURIComponent(t)})}})})},getLocalCity:function(e){var o=this;return new t.default(function(t,i){n.getLocalCity(e).then(function(e){e=o.fixCityInfo(e),t(e)}).catch(function(e){if("101"===e.code){var t=m.getCurrentPagePath();d.redirectTo({url:"/nodata/pages/nodata/nodata?type=getLocation&backUrl="+encodeURIComponent(t)})}})})},getLoginCode:function(e){var t=this;t.globalData.code?"function"==typeof e&&e(t.globalData.code):I.utils.getLoginCode().then(function(n){t.globalData.code=n,"function"==typeof e&&e(t.globalData.code)})},onError:function(e){"request:fail"!==e&&m.request(h.errReportApi,{method:"POST",data:{content:e}})},preNotFound:function(e){var t=b[e.path];if(t){var n=t.path,o={};Object.keys(e.query).forEach(function(n){o[t.query[n]||n]=e.query[n]}),d.redirectTo({url:m.formatUrl(n,o)})}},getSysInfo:function(e){var n=this;return this.globalData.sysInfo?("function"==typeof e&&e(this.globalData.sysInfo),t.default.resolve(this.globalData.sysInfo)):new t.default(function(t,o){d.getSystemInfo({success:function(o){o&&o.model&&/iphone/i.test(o.model)&&(o.os="iphone"),n.globalData.sysInfo=o,"function"==typeof e&&e(o),t(o)},fail:function(e){console.error(e),o(e)}})})},getNetwork:function(){var e=this;d.getNetworkType({success:function(t){e.globalData.networkType=t.networkType}})},getLocation:function(e,t,n){return this._location(e,t,n)},_location:function(e,o,i){var r=this;return new t.default(function(t){var a=(new Date).getTime();n.getLocation().then(function(n){"function"==typeof e&&e(n),t(n)}).catch(function(){var e=!1;if(r.getNetwork(),("none"==r.globalData.networkType||a-(new Date).getTime>1e4)&&(e=!0),"function"==typeof o&&o(e),"function"!=typeof o||i){var t=m.getCurrentPagePath();d.redirectTo({url:"/nodata/pages/nodata/nodata?type=getLocation&backUrl="+encodeURIComponent(t)})}})})},updateLocation:function(e,t){this._location(e,t)},cityPick:function(e,t){return v(e,t)},globalData:{loginInfo:null,sysInfo:null,uuid:null,openId:null,token:null,networkType:null,tag:null,coldBoot:!1,get location(){return n.location()},set cityInfo(e){n.setCityInfo(e)},get cityInfo(){return n.cityInfo()},get mt_localCity(){return n.localCity()},cityId:"1",checkInTime:w,checkOutTime:w+864e5,hotelPrefix:"/hotel",appid:"wxde8ac0a21135c07d",appName:"group"},lxLog:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.event_type,n=e.val_bid,o=e.val_lab,i=e.custom,r=void 0===i?{}:i,a={pv:"pageView"}[t],u=this.globalData,s=u.checkInTime,c=u.checkOutTime,l=u.cityId,f=u.scene,p=(this.$user||{}).userId,d=void 0===p?"":p,g=this.$location||{},h=g.latitude,m=void 0===h?"":h,I=g.longitude,v=void 0===I?"":I;this.getUUID().then(function(e){var t={custom:{checkin_date:s,checkout_date:c,checkin_city_id:l,scene:f,mt_uuid:e,user_id:d,latitude:m,longitude:v}};t.custom=Object.assign(t.custom,r);var i=Object.assign(t,o);y[a](n,i)})},fetch:function(e,t,n,o,i){e=m.formatUrl(e,t);var r=function(){};o=o||r,i=i||r,"function"==typeof n&&n(),m.request(e,{method:"GET"}).then(o).catch(i||function(e){console.log(e)})},showToast:function(e,t,n){n=n||2e3,d.showToast({title:e,icon:t,duration:n})},hideToast:function(){d.hideToast()},showLoading:function(){this.showToast("数据读取中.","loading",1e4)},hideLoading:function(){d.hideToast()},showErrTip:function(e,t){d.showModal({title:"提示",content:e,showCancel:!1,success:function(e){e.confirm&&t&&t()}})},lxSetPathEnv:function(e){var t=e.openId,n=e.unionId;t&&!y.get("wxid")&&(console.log("lx set wxid for the first time"),y.set("wxid",t)),n&&!y.get("wxunionid")&&y.set("wxunionid",n)},lxPvReport:function(e,t){var n=this;return this.getOpenId().then(function(o){n.lxSetPathEnv({openId:o}),t?y.pageView(e,t):y.pageView(e)})},getOpenIdWithoutLogin:function(e){var n=this,o=function(e){var t=e.openId,o=e.unionId;return n.globalData.openId=t,n.globalData.unionId=o,{openId:t,unionId:o}};if(this._openIdPromFina)return this._openIdPromFina.then(o);return this._openIdPromFina=function(){var e=n.globalData.openId,o=n.globalData.unionId;return e&&o?t.default.resolve({openId:e,unionId:o}):t.default.all([m.getStorage("openId"),m.getStorage("unionId")]).then(function(e){return{openId:e&&e[0]||"",unionId:e&&e[1]||""}})}().then(function(i){var r=i.openId,a=i.unionId;return r&&a?o({openId:r,unionId:a}):new t.default(function(t,n){e?t(e):d.login({success:function(e){e.code?t(e.code):(m.owlErrorReport({key:"mt_openid_nologin_fail",tag:{errorType:"success_cb",errorMsg:e&&e.errMsg||"wx.login success but has no code"}}),console.log("登录失败！",e.errMsg),n(""))},fail:function(e){m.owlErrorReport({key:"mt_openid_nologin_fail",tag:{errorType:"fail_cb",errorMsg:e||"wx.login fail"}}),console.log("wx.login调用失败！",e),n("")}})}).then(function(e){return m.request({url:h.getOpenId,data:{code:e},fail:function(e){var t="request_fail";try{t=e instanceof Error?e.toString&&e.toString():JSON.stringify(e)}catch(e){t="request_fail2"}m.owlErrorReport({key:"mt_openid_nologin_fail",tag:{errorType:"request_fail_cb",errorMsg:t}})}})}).catch(function(e){m.owlErrorReport({key:"mt_openid_nologin_fail",tag:{errorType:"catch_error",errorMsg:e.toString()||"getOpenIdWithoutLogin err"}}),console.error(e)}).then(function(e){return n._openIdPromFina=null,o(e&&e.data||{})})}),this._openIdPromFina},reportAdvertisingOut:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];this.getOpenId(function(n){d.reportAnalytics("mt_advertising_out",{openid:n||"",source:e.source||"",position:e.position||t})})},delayReport:function(){var e=this;return setTimeout(function(){console.log("app",e.stopDelayReport),e.hasReportQueue&&e.stopDelayReport||(e.hasReportQueue=!0,(0,f.default)())},2e3)},implementReport:function(){1==this.reportOpenid&&1==this.reportCity&&(this.hasReportQueue||(this.hasReportQueue=!0,(0,f.default)()))},formatImgURI:function(e,t){return m.formatImgURI(e,t)},postFormId:function(){m.postFormId.apply(m,arguments)}}); 
 			}); 	require("app.js");
 		__wxRoute = 'components/coupon-bag/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'components/coupon-bag/index.js';	define("components/coupon-bag/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,e=require("../../npm/@mtfe/mt-weapp-city/index.js").getCityInfo,i=require("../../npm/@mtfe/wxapp-rohr/dist/rohr.js"),o=require("../../npm/@mtfe/mt-weapp-api/dist/index.js").request,s=getApp(),n=void 0;Component({properties:{options:{type:Object,observer:"init"}},data:{title:"",modalTitle:"",list:[],entry:"",mark:"",popup:!1},methods:{init:function(t){if(t){var p=this;e({useIpGeo:!0}).then(function(e){n=e.id;var a={shopid:t.shopId,productId:t.dealId,cityid:n,token:s.globalData.token,usercode:1};i.i(99),a.cx=i.r(a),o({url:"https://mapi.dianping.com/pay/promo/unifiedissuecouponcomponent.bin",data:a,method:"POST",type:"form",success:function(t){if(200===t.statusCode){var e=t.data;if(e.unifiedIssueCouponLists){var i=e.unifiedIssueCouponLists[0]||{};p.setData({mark:e.icon,title:e.couponText,modalTitle:i.title||"",list:i.unifiedIssueCouponOption||[],entry:e.entranceText})}}}})})}},showMe:function(){this.setData({popup:!0})},off:function(){this.setData({popup:!1})},hijack:function(){},check:function(e){var n=this,p=e.currentTarget.dataset,a=p.item,r=n.properties.options;s.login(function(){var e={shopid:r.shopId,productId:r.dealId,token:s.globalData.token,usercode:1,coupongroupid:a.couponGroupId};i.i(99),e.cx=i.r(e),o({url:"https://mapi.dianping.com/pay/promo/unifiedissuecoupon.bin",data:e,type:"form",method:"POST",success:function(e){var i=e.data;if(i.isSuccess){a.status.status=1;var o={};o["list["+p.index+"]"]=a,n.setData(o)}else t.showToast({title:i.errorMsg.errorMsg,icon:"none"})}})})}}}); 
 			}); 	require("components/coupon-bag/index.js");
 		__wxRoute = 'dynamic/dynamic';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'dynamic/dynamic.js';	define("dynamic/dynamic.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){e&&!t&&this.init()}var r=require("../npm/@mtfe/mt-weapp-jsvm/lib/index.js"),a=require("../npm/@mtfe/mt-weapp-vuex/lib/index.js"),i=e(require("../npm/@mtfe/balloon-inflate/build/balloon-inflate.min.js")),o=require("../npm/@mtfe/mt-weapp-utils/lib/func.js"),s=e(require("./config")),c=require("./inline-data"),u=require("../npm/@mtfe/mt-weapp-request/lib/request.js"),d=e(require("../npm/@mtfe/mt-weapp-utils/lib/pipe.js")),p=e(require("../npm/@mtfe/mt-weapp-request/lib/retry.js")),f=e(require("../npm/@mtfe/mt-weapp-request/lib/cache.js")),h=require("../npm/@mtfe/mt-weapp-promise/index.js"),l=(require("../npm/@mtfe/mt-weapp-log/dist/index.js").page,(0,u.getRequest)(function(e){return s.default.request(e)},{throwError:!0},(0,d.default)(p.default,f.default))),m="$$context",v=function(e){return function(){this[m]?this[e]&&this[e]():this.triggerEvent("life",{eventName:e,instance:this})}},g=function(e){if(!e.$page){var t=getCurrentPages(),n=t.length;if(n){var r=e.$page=t[n-1];r.isIndex=1===n,r.$store||(r.$store=new a.Store)}}return e.$page},$={},b=function(e){delete $[e],j.cache.delete(e)},j=(0,o.cached)(function(e,t){if($[e])return h.resolve($[e]);var n=!s.default.env;return l({url:"https://portal-portm.meituan.com/weapp/dynamic/v5/"+s.default.project+"/"+e+(n?"":"/"+s.default.env),cache:n&&"defer"}).then(function(r){if(r){var a=r.data;if(a&&($[e]=a,Object.assign($,a.dep),e&&t&&(t.hash=a.hash,n))){var i=function(){b(e),r.freshCache&&r.fromStorage?r.freshCache():t.isCold=!0},o=g(t);if(o&&(setTimeout(i,2e3),!o.isIndex)){var s=o.onUnload;o.onUnload=function(){i(),s&&s.call(o)}}}return a}})}),y=["created","attached","ready","moved","detached"],w=["created","attached","ready"],q=["onLoad","onShow","onReady"],x={properties:{case:{type:String,observer:n},caseData:{type:Object,observer:n},snapshot:{type:Object,observer:function(e){var t=this;e&&setTimeout(function(){if(!t.$$vdom){var n=e.config,r=e.context;n&&t.setData({config:n}),r&&(t[m]=r)}},e.delay||0)}},context:{type:String,observer:function(e,t){if(e&&e!==t)try{e=JSON.parse(e||""),this[m]?this[m].setData.value(e):this._props=Object.assign({},this._props,e)}catch(e){console.error("You should set component context as an object!!!")}}},config:{type:Object},mode:{type:String}},methods:{coreBind:function(e){var t=e.currentTarget,n=e.target,r=e.type,a=(t||n).dataset,i=a.attr,o=i&&i["bind"+r];o&&this.onBind({detail:{name:o,event:e,dataset:a}})},onBind:function(e){var t=this,n=e.detail;if(!this.properties.snapshot||this.$$vdom||this[m])if(this[m]){var r=n.name,a=n.event,i=n.dataset,o=this[m][r];if(o){var s=i.selector;i.param=this.$$vdom&&this.$$vdom.ctxPool[s]||i.ctx;try{o.value?o.value.call(this[m].get("this"),a,i):o.call(this,a,i)}catch(e){throw console.error(e,this),new Error("Dynamic Component: "+this.name+" throw callback error; eventName: "+r+"; error: "+e.message)}}}else this.triggerEvent("bind",n);else this.$cached_actions||(this.$cached_actions=[]),this.$cached_actions.push(function(){t.onBind({detail:n})})},onLifeCycle:function(e){var t=e.detail,n=t.instance,r=n.id;r&&(this.children?this.children[r]=n:this.triggerEvent("life",t))},init:function(){var e=this;this.children={};var n=this.properties.caseData,a=this.properties.case||n&&n.name;this.name=a;var o,u,d=this,p=(0,r.getVm)(),f=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,r=t.jscode,a=t.dom;if(a&&(d.$$tpl=a),r)try{p.runInScope(n,r.type?r:t.jscode=(0,i.default)(r))}catch(t){throw console.error(t),new Error("Dynamic Component: "+e.name+" throw js eval error;  error: "+t.message)}return n},v=function(e,t){Object.assign(u.data||(u.data={}),e),(0,r.injectIntoScope)(o,e);var n=new c.VDOM(d.$$tpl,o);d.$$vdom=n,n.vnodes&&d.setData({config:n.vnodes},t);var a=d.$cached_actions;a&&a.length&&(a.forEach(function(e){e()}),a.length=0)},$=d.$reload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return b(e),j(e).then(function(e){delete d.$$vdom,f(e),d.$$vdom||v()})},x={start:Date.now()};d.perf=x,(n?h.resolve(n):j(a,d)).then(function(n){if(n){x.loaded=Date.now();var a=n.prefetch;a&&setTimeout(function(){a.names.forEach(function(e){return j(e)})},a.delay||0);var i=g(d);!function(){var a,c=getApp();t(a={require:require,app:c,$app:c,page:i,$page:i},"$store",i.$store),t(a,"comp",d),t(a,"$comp",d),t(a,"$reload",$),t(a,"$import",function(e){return(0===e.indexOf("https://")?l({url:e}):j(e)).then(function(e){var t=e.jscode||e,n={exports:{}};return f({jscode:t},(0,r.getScope)({module:n,exports:n.exports})).module.value.exports})}),t(a,"Component",function(e){var t=e.data,n=e.lifetimes,a=void 0===n?e:n,i=Object.assign({data:t},t,e.methods);Object.assign(u,i),y.forEach(function(e){var t=a[e];t&&(d[e]=u[e]=i[e]=t.bind(u),~w.indexOf(e)&&t.call(u))}),(0,r.injectIntoScope)(o,i)}),t(a,"Page",function(e){var t={data:e.data};Object.assign(u,t),Object.keys(e).forEach(function(n){var r=e[n];"function"==typeof r&&(i[n]=u[n]=t[n]=r.bind(u),~q.indexOf(n)&&r.call(u))}),(0,r.injectIntoScope)(o,t)}),t(a,"setData",function(e,t){v(e,function(){t&&t()}),u.setData=v,o.var("setData",v)}),u=a,Object.assign(u,n.json,s.default.injections,d._props,e[m]),(o=e[m]=(0,r.getScope)(u)).const("this",u)}(),f(n),d.$$vdom||e.properties.snapshot||u.setData()}})}}};y.forEach(function(e){x[e]=v(e)}),Component(x); 
 			}); 	require("dynamic/dynamic.js");
 		__wxRoute = 'index/components/component-share/index';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/components/component-share/index.js';	define("index/components/component-share/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./WXcanvas.js"),e=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx;Component({properties:{resource:{type:Array},outfile:{type:Object},maskShow:{type:Boolean,observer:function(t){t&&this.triggerEvent("showShareOption",{})}},noReload:{type:Boolean,value:!1}},data:{maskShow:!0,optionShow:!0,factor:null,isOpenSetting:!1,tempFilePath:""},attached:function(){},methods:{shareToFriend:function(){this.triggerEvent("shareClick",{type:"share",btn_name:"分享给好友"})},showShareFriend:function(){this.triggerEvent("shareClick",{type:"share",btn_name:"生成海报"}),this.setData({headText:"生成海报",optionShow:!1,cav:new t.WXCanvas("poi_pic",this)},this.canvasInit),this.triggerEvent("showShareFriend",{})},canvasInit:function(){var t=this;if(!this.data.tempFilePath||this.data.noReload){this.data.noReload&&this.setData({tempFilePath:""});var i=this.data.cav;e.showLoading({title:"生成图片中"}),i.draw(this.data.resource).catch(function(i){t.close(),e.showToast({title:"图片生成失败，请重试",icon:"none",duration:2e3}),console.log(i)}).then(function(){var e=t.data.outfile,a=e.x,n=void 0===a?0:a,o=e.y,s=void 0===o?0:o,h=e.width,r=void 0===h?750:h,c=e.height,l=void 0===c?1056:c,d=e.filetype,p=void 0===d?"jpg":d,u=e.quality,v=void 0===u?1:u;return i.saveTempFile({x:n,y:s,width:r,height:l,fileType:p,quality:v})}).then(function(i){t.setData({tempFilePath:i}),e.hideLoading()})}},saveImage:function(){var t=this;this.triggerEvent("shareClick",{type:"savePic",btn_name:"保存图片"}),this.data.tempFilePath&&this.data.cav.saveImageToPhotos(this.data.tempFilePath).then(function(){t.triggerEvent("saveShareImg",{}),t.close(),e.showToast({title:"已经成功保存到相册，可以分享啦",icon:"none",duration:3e3})}).catch(function(i){t.setData({isOpenSetting:!0}),e.showToast({title:"请打开保存相册权限后重试",icon:"none",duration:3e3})})},openShareSet:function(t){t.detail.authSetting&&t.detail.authSetting["scope.writePhotosAlbum"]&&(this.setData({isOpenSetting:!1}),this.saveImage())},closeOption:function(){this.close("close","closeBtn")},cancelOption:function(){this.close("cancel","cancelBtn")},close:function(t,i){this.setData({maskShow:!1,optionShow:!0}),e.hideLoading(),this.triggerEvent("hideMaskShare",{type:t,btn_name:i})}}}); 
 			}); 	require("index/components/component-share/index.js");
 		__wxRoute = 'index/components/formcover/formcover';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/components/formcover/formcover.js';	define("index/components/formcover/formcover.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../utils/util.js");Component({properties:{source:{type:String,value:"pingtai"},formIdType:{type:String,value:"common"}},data:{source:"pingtai",formIdType:"common"},methods:{submitHandler:function(t){var o=this.data,e=o.formIdType,r=o.source,i=t.detail.formId;console.log("the form id is",i),this.postFormId(i,r,e)},postFormId:function(o,e,r,i){t.postFormId(o,e,i,r)}},attached:function(){var t=this.properties.source;this.setData({source:t})}}); 
 			}); 	require("index/components/formcover/formcover.js");
 		__wxRoute = 'index/components/mt-back/back';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/components/mt-back/back.js';	define("index/components/mt-back/back.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(e){return e&&e.__esModule?e:{default:e}}(require("../../../npm/@analytics/wechat-sdk/lib/index.js")),t=require("../../../npm/@mtfe/mt-weapp-url/url.js"),p=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,a=require("../../../utils/util.js"),i={mvBid:"b_i40qmov0",mcBid:"b_ubil4ali"},n={},r=getApp();Component({properties:{weappIcon:{type:String,value:"https://p0.meituan.net/travelcube/cc84d50813a1cb7269eda43add1c72541182.png"},weappText:{type:String,value:"首页"},weappUrl:{type:String,value:"/index/pages/mt/mt"},jumpType:{type:String,value:"switchTab"},pageName:{type:String,value:"poi"},appIcon:{type:String,value:"https://p1.meituan.net/travelcube/e45bccf14ff18944fb31f676bbac9cb42906.png"},appText:{type:String,value:"去App"},appUrl:{type:String,observer:"_observeAppUrl"}},data:{showBackWeapp:!1,showBackApp:!1,isSingle:!0,launchAppUrl:""},attached:function(){var e=this,t=this.properties.weappText;getCurrentPages&&1==getCurrentPages().length&&(this.setData({showBackWeapp:!0,isSingle:!this.data.showBackApp}),setTimeout(function(){var p=Object.assign({},n,{button_name:t});e.lxReport("moduleView","mvBid",p)},300))},methods:{submitHandler:function(e){var t=e.detail,i=t.formId,r=t.target.dataset.type,s=this.properties,o=s.jumpType,l=s.weappText,u=s.weappUrl,c=s.appText;"weapp"===r&&p[o]({url:u}),a.postFormId(i,"pingtai");var d=Object.assign({},n,{button_name:"weapp"===r?l:c});this.lxReport("moduleClick","mcBid",d)},launchAppError:function(e){console.log(e),p.showToast({title:"请查看是否下载美团App",icon:"none"})},lxReport:function(t,p,a){r.getOpenId().then(function(n){a.open_id=n,e.default[t](i[p],a)})},_observeAppUrl:function(e,p){if(e){console.log("---------------",e,"-----------------");var a=r.globalData.scene,i=this.properties,s=i.appText;if("poi"===i.pageName){var o=(0,t.urlParse)(e);n.poi_id=o.query.id}if(a&&1036===a){this.setData({showBackApp:!0,isSingle:!this.data.showBackWeapp,launchAppUrl:e});var l=Object.assign({},n,{button_name:s});this.lxReport("moduleView","mvBid",l)}}}}}); 
 			}); 	require("index/components/mt-back/back.js");
 		__wxRoute = 'index/components/mt-coupon/coupon';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/components/mt-coupon/coupon.js';	define("index/components/mt-coupon/coupon.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("./utils"),e=require("./apis"),o=require("./report"),i={SUCCESS:1,EMPTY:2,OVER:3,NO_AUTHORIZATION:4,UNKNOWN:101};Component({properties:{activityId:String,couponPackId:String,poiId:String,shareOpenId:String,moneyText:{type:String,value:0}},data:{COUPON_STATUS_MAPPING:i,status:1,authFailCount:0,visible:!1,users:[],userCount:0,remainCount:0,bizName:"",description:"",type:0,beginTime:0,endTime:0,minConsumption:0,accurateMinConsum:0,discountAmount:0,accurateDiscount:0,errMsg:"",toast:{show:!1,title:"出错了",duration:3e3}},methods:{report:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.data,s=i.activityId,a=i.couponPackId,n=i.poiId,r=i.shareOpenId;(0,o.report)(t,Object.assign(e,{activityid:s,couponpackid:a,poiid:n,shareopenid:r}))},openToast:function(t){var e=this,o=this.data.toast;"string"==typeof t?o.title=t:Object.assign(o,t),o.show=!0,this.setData({toast:o}),clearTimeout(this.toastTimeId),this.toastTimeId=setTimeout(function(){e.setData({"toast.show":!1})},o.duration)},open:function(){this.data.visible||this.setData({visible:!0}),this.triggerEvent("open",1===this.data.status)},close:function(){this.setData({visible:!1}),this.triggerEvent("close")},setStatus:function(t){this.setData({status:t,statusClass:t===i.NO_AUTHORIZATION||t===i.UNKNOWN?"coupon-no-authorize":1!==t?"coupon-over":""})},requestCoupon:function(){var o=this;(0,t.getFullUserInfo)().then(function(t){o.userInfo=t;var i=o.data,s=i.activityId,a=i.couponPackId,n=i.poiId,r=i.orderId,u=i.shareOpenId,c=t.openId,d=t.unionId,p=t.avatarUrl,h=t.nickName;return(0,e.assignCoupon)({activityId:s,couponPackId:a,poiId:n,orderId:r,shareOpenId:u,openId:c,unionId:d,headImgUrl:p,nickName:h,extTag:{unconditional:c===u}})}).then(function(t){o.handleResponse(t)}).catch(function(t){t.errMsg&&0===t.errMsg.indexOf("getUserInfo:fail")?(o.setData({authFailCount:o.data.authFailCount+1}),o.setStatus(i.NO_AUTHORIZATION),o.open(),o.report("mt_coupon_error",{code:7,msg:"取消授权"})):(o.setStatus(i.UNKNOWN),o.open(),o.openToast("网络异常，请稍后重试！"),o.report("mt_coupon_error",{code:6,msg:"网络异常"}))})},handleResponse:function(e){switch(e.status){case 200:var o=e.data,s=o.coupons[0];s&&(this.setData({bizName:o.bizName,description:s.description,type:s.type,beginTime:(0,t.formatDate)(s.beginTime,"."),endTime:(0,t.formatDate)(s.endTime,"."),minConsumption:s.minConsumption,accurateMinConsum:s.accurateMinConsum/100,discountAmount:s.discountAmount,accurateDiscount:s.accurateDiscount/100}),this.setStatus(i.SUCCESS),this.fetchCouponMemberList());break;case 114:case 144:case 112:this.setStatus(i.OVER),this.report("mt_coupon_error",{code:3,msg:"活动已截止"});break;case 141:case 117:this.setStatus(i.EMPTY),this.report("mt_coupon_error",{code:2,msg:"优惠券领完"});break;default:this.setStatus(i.UNKNOWN),this.openToast("服务端异常，请稍后重试"),console.log("后端接口返回值：",e),this.report("mt_coupon_error",{code:5,msg:e.msg})}this.open()},onGotUserInfo:function(t){t.detail.userInfo?(getApp().globalData.fullUserInfo=t.detail,this.requestCoupon(),this.report("mt_coupon_authorize_ok")):(this.setData({authFailCount:this.data.authFailCount+1}),this.report("mt_coupon_authorize_fail"))},fetchCouponMemberList:function(){var o=this,i=this.data,s=i.activityId,a=i.couponPackId;(0,e.assignList)({activityId:s,couponPackId:a}).then(function(e){if(200===e.status){var i=e.data.couponMemberList,s=i.length;o.setData({remainCount:e.data.remainCount,userCount:s,users:(s>4?[i[0],i[1],i[s-2],i[s-1]]:i).map(function(e){var o=e.headImgUrl,i=e.discountAmount,s=e.accurateDiscount;return{id:e.openId,headImgUrl:(0,t.isEmpty)(o)?"https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-st/file:bcde5843/xiaomei.png":o,discountAmount:i,accurateDiscount:s/100}})})}else console.log(e.msg)})}},ready:function(){var e=this.data,o=e.activityId,i=e.couponPackId,s=e.poiId,a=e.shareOpenId;(0,t.allIsNotEmpty)([o,i,s,a])&&(this.requestCoupon(),this.fetchCouponMemberList(),this.report("mt_coupon_assign"))}}); 
 			}); 	require("index/components/mt-coupon/coupon.js");
 		__wxRoute = 'index/components/mt-guide/guide';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/components/mt-guide/guide.js';	define("index/components/mt-guide/guide.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";require("../../../utils/lx.js");Component({properties:{isSecondHomeView:{type:Boolean,value:!1}},data:{show:!0,step:0,iKnowImg:"../../imgs/home/guide-iKnow.png",bgColor:"rgba(0, 0, 0, 0.8)",animationDuration:"500",animationClass:"show"},methods:{close:function(){console.log("close"),this.hidden()},show:function(){this.setData({show:!0})},hidden:function(){this.setData({show:!1})},preventD:function(){return!1},pressClose:function(){console.log("pressClose"),this.setData({closeImg:"../../imgs/home/guide-close2.png"})},releaseClose:function(){console.log("releaseClose"),this.setData({closeImg:"../../imgs/home/guide-close.png"})},pressBtn:function(){console.log("pressClose"),this.setData({iKnowImg:"../../imgs/home/guide-iKnow2.png"})},releaseBtn:function(){console.log("releaseClose"),this.setData({iKnowImg:"../../imgs/home/guide-iKnow.png"})}}}); 
 			}); 	require("index/components/mt-guide/guide.js");
 		__wxRoute = 'index/components/mt-pendant/pendant';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/components/mt-pendant/pendant.js';	define("index/components/mt-pendant/pendant.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";Component({properties:{icon:{type:String,value:"https://p0.meituan.net/travelcube/cc84d50813a1cb7269eda43add1c72541182.png"},text:{type:String,value:"首页"},url:{type:String,value:"/index/pages/mt/mt"},type:{type:String,value:"switchTab"}}}); 
 			}); 	require("index/components/mt-pendant/pendant.js");
 		__wxRoute = 'index/pages/order/components/order-block/order-block';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/pages/order/components/order-block/order-block.js';	define("index/pages/order/components/order-block/order-block.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t=require("../../../../../npm/@mtfe/mt-weapp-api/dist/index.js"),e=require("../../../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,a=require("../../../../../utils/lx.js"),i=getApp(),o={0:"全部",1:"待付款",2:"待使用",3:"待评价",4:"退款/售后"};Component({properties:{list:{type:Object},posi:{type:Number},current:{type:Number}},data:{opState:1,left:0,opWidth:148},methods:{onDelCard:function(s){var r=this,n=s.target.dataset,h=n.url,l=n.posi,c=n.state,u=n.orderid,d=n.catename,p=n.candelete,g=n.nodeletemsg;if(a.moduleClick("b_euk2yxfl",{open_id:i.globalData.openId,order_id:u,tab_name:o[c]}),p)if(h){var m=i.globalData,f={token:m.token,orderid:u,userid:m.userId};h=h.replace(/^http:/,"https:").replace(/apihotel.meituan.com/,"ihotel.meituan.com"),(0,t.request)({url:h,data:f,method:"POST",type:"form"}).then(function(t){if(!(0===t.data.code&&"闪惠"!==d||1===t.data.code&&"闪惠"===d))throw new Error(t.data.message);e.showToast({title:"删除成功",icon:"none",duration:3e3}),r.setData({left:0}),r.triggerEvent("refreshOrder",{posi:l})}).catch(function(){e.showToast({title:"删除失败",icon:"none",duration:3e3})})}else e.showToast({title:"删除失败",icon:"none",duration:3e3});else e.showToast({title:g||"删除失败",icon:"none",duration:3e3})},goComment:function(t){var o=decodeURIComponent((t.target.dataset.linkcomment+"&title="+t.target.dataset.title).replace("imeituan://www.meituan.com/web?url=",""));a.moduleClick("b_tiqgutvy",{openid:i.globalData.openId}),e.navigateTo({url:o})},goDetail:function(t){this.isOpAreaShow?(this.setData({left:0}),this.isOpAreaShow=!1):e.navigateTo({url:t.currentTarget.dataset.url})},onTouchStart:function(t){var e=t.touches&&t.touches[0]&&t.touches[0].clientX,a=t.touches&&t.touches[0]&&t.touches[0].clientY;this.startX=e,this.startY=a},onTouchMove:function(t){var e=t.touches&&t.touches[0]&&t.touches[0].clientX,a=t.touches&&t.touches[0]&&t.touches[0].clientY,i=e-this.startX,o=a-this.startY;Math.abs(i)>Math.abs(o)?(this.leftSlideAnimate(i),this.triggerEvent("toggleSrcoll",{cScroll:!1})):(this.isVertical=!0,this.triggerEvent("toggleSrcoll",{cScroll:!0}))},leftSlideAnimate:function(t){var e=this.data.opWidth-10;t<0?Math.abs(t)>e&&(t=-e,this.isOpAreaShow=!0):(t=this.data.left+t)>=0&&(t=0,this.isOpAreaShow=!1),this.setData({left:t})},onTouchEnd:function(t){var e=(t.changedTouches&&t.changedTouches[0]&&t.changedTouches[0].clientX)-this.startX,a=Math.abs(e),i=this.data.opWidth-10;!this.isVertical||this.data.left?(e<0?a>=i/3?(this.setData({left:-i}),this.isOpAreaShow=!0):(this.setData({left:0}),this.isOpAreaShow=!1):e>0&&(this.setData({left:0}),this.isOpAreaShow=!1),this.setData({opState:1}),this.triggerEvent("toggleSrcoll",{cScroll:!0})):this.isVertical=!1}}}); 
 			}); 	require("index/pages/order/components/order-block/order-block.js");
 		__wxRoute = 'index/pages/mt/mt';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/pages/mt/mt.js';	define("index/pages/mt/mt.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function t(t,n){return a(t)||o(t,n)||e()}function e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function o(t,e){var o=[],a=!0,n=!1,i=void 0;try{for(var r,s=t[Symbol.iterator]();!(a=(r=s.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(t){n=!0,i=t}finally{try{a||null==s.return||s.return()}finally{if(n)throw i}}return o}function a(t){if(Array.isArray(t))return t}var n=require("../../../npm/@mtfe/mt-weapp-city/index.js"),i=require("../../../npm/regenerator-runtime/runtime.js"),r=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,s=require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page,c=require("../../../utils/lx.js"),l=require("../../../utils/util.js"),u=getApp(),d=require("../../../config.js"),p=null,g=0,f=l.canIUse;s({data:{snapshot:require("./snapshot"),placeholder:"请输入商家名、品类或者商圈...",guessUrl:"https://api.mobile.meituan.com/group/v2/recommend/homepage/city/",loadingTxt:"加载中...",sysInfo:u.globalData.sysInfo,guessData:[],cityInfo:{},isSecondHomeView:!1},scrollTop:0,globalId:"",offset:0,displayed:[],bottom:!1,searchClick:function(){c.moduleClick("b_r48jj85q")},showPoiDot:function(t){if(f("createSelectorQuery")){var e=this,o=r.createSelectorQuery();o.selectAll(".newcard").boundingClientRect(),o.exec(function(o){o[0].forEach(function(t){t.bottom+=e.scrollTop,t.top+=e.scrollTop}),p?p.val_lab={global_id:e.globalId}:p=new l.ViewGA({visibleHeight:u.globalData.sysInfo.windowHeight,val_lab:{global_id:e.globalId},lx:c,bid:t}),p.addDots(o[0]),p.init();var a=e.data.guessData.map(function(t){return t.isInExposureQueue?t:Object.assign({},t,{isInExposureQueue:!0})});e.setData({guessData:a})})}},onPageScroll:function(t){var e=t.scrollTop;g=this.scrollTop=e||0,p&&p.check(e)},filterTransaction:function(t){return/^20[1-9][0-9]/.test(t)},onLoad:function(t){var e=this;if(1034===getApp().globalData.scene){var o=t.env||"prod",a=getApp().globalData.out_trade_no?getApp().globalData.out_trade_no:t.out_trade_no,n=getApp().globalData.transaction_id?getApp().globalData.transaction_id:t.transaction_id;return a&&n||r.reportAnalytics("finance_wmq_param"),void r.redirectTo({url:"/finance-ext/pages/sendWMCoupon/index?out_trade_no="+a+"&transaction_id="+n+"&env="+o})}t&&t.transaction_id&&this.filterTransaction(t.out_trade_no)?r.redirectTo({url:"/finance-ext/pages/distribute/index?out_trade_no="+t.out_trade_no+"&transaction_id="+t.transaction_id}):(u.getWxUserInfo(),u.reportFlag&&clearTimeout(u.reportFlag),u.stopDelayReport=!0,u.getCityInfo({useIpGeo:!0,timeout:5e3}).then(function(t){u.reportCity=1,u.reportFlag&&clearTimeout(u.reportFlag),u.implementReport();var o=r.getStorageSync("mt_cityInfo"),a=new Date((new Date).toLocaleDateString()).getTime();u.globalData.coldBoot&&o.timestamp<a&&(u.getLocalCity({useIpGeo:!0}).then(function(o){o.id!=t.id&&e.showCityCheck(t,o,function(t){e.setData({cityInfo:t,guessData:[]}),e.getGuessData(function(){u.hideLoading()},function(){u.showErrTip("数据读取失败")})})}),u.globalData.coldBoot=!1),e.setData({cityInfo:t}),e.getGuessData(function(){u.hideLoading()},function(){u.showErrTip("数据读取失败")})}).catch(function(t){u.reportCity=1,u.reportFlag&&clearTimeout(u.reportFlag),u.implementReport(),console.log(t)}))},formatURI:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o=Object.assign({},o),e=(e=decodeURIComponent(e)).replace("img.meituan.net","p0.meituan.net");var a=/p([0-1]{1})\.meituan\.net(\/[^@]+)@?(.*)?/;if(a.test(e)){var n=t(a.exec(e),4),i=(n[0],n[1],n[2]),r=n[3];i=i.replace("/w.h/","/");var s=Object.keys(o).map(function(t){return""+o[t]+t}).join("_");return s&&(r=(r?r+"|":"")+s),"http://p"+[].reduce.call(i,function(t,e){return t+e.charCodeAt(0)|0},0)%2+".meituan.net"+i+(r?"@"+r:"")}return e},jumpTogo:function(t){var e=t.currentTarget.dataset,o=e.type,a=e.id,n=e.index,i=e.source,s=e.jumperurl;l.postFormId(t.detail.formId,i);var u={custom:{type:o,index:n,id:a,global_id:this.globalId}};c.moduleClick("b_gzc047ln",u),r.navigateTo({url:s})},GuessJumpUrl:function(){},getGuessData:function(t,e){var o=this,a=this.data.cityInfo;if(!0!==this.bottom){var n=d.guessApi;u.getLocation(function(i){var s={token:u.globalData.token,userid:u.globalData.userId,uuid:r.getStorageSync("uuid"),scene:"wx_guess",position:i.latitude+","+i.longitude,client:"xiaochengxu",globalId:o.globalId,displayed:o.displayed.toString().toLocaleUpperCase()};l.request(""+n+a.id+"?"+l.json2Form(s),{data:l.json2Form({offset:o.offset}),method:"POST",mtsi:!0,header:{"content-type":"application/json"}}).then(function(n){if("200"==n.statusCode){if(n&&n.data.data){var i=o.data.guessData;o.bottom=n.data.bottom;try{n.data.data.filter(function(t){return o.filterTicketDeal(t)}).forEach(function(t){var e=t.imageUrl,n=t._id,r=t._from,s=t._type,c=t._jumpNeed,l=void 0===c?{}:c;e=o.formatURI(t.imageUrl,{w:200,h:200,e:1,c:1});var u="";switch(s){case"deal":u="food"===l.channel?"/food/pages/mt/deal/deal?d="+n:"/gnc/pages/grouping/index?id="+n;break;case"poi":u="MPOI_MOVIE"===r?"/movie/pages/cinema/cinema?poiId="+n:"POI_HOTEL"===r||"POI_HOTEL2"===r?"/hotel/pages/poi/poi?poiId="+n+"&poiCity="+a.id:"POI_LVYOU"===r?"/ticket/mpvue-pages/pages/poi/poi?poiId="+n:"/mt/pages/poi/poi?id="+n;break;case"film":u="/movie/pages/cinema/movie?movieId="+n}return t.imageUrl=e,t.jumperUrl=u,o.displayed.push(n+":"+r),i.push(t),t})}catch(t){console.log(t)}o.setData({guessData:i},function(){o.showPoiDot.call(o,"b_xe6rhodt")}),t&&"function"==typeof t&&t.bind(o).call(n),o.globalId=n.data.globalId,o.offset=i.length}}else e&&"function"==typeof e&&e.bind(o)()}).catch(function(){r.hideNavigationBarLoading()})})}else this.setData({loadingTxt:"没有更多了"})},filterTicketDeal:function(t){var e=["travel","trip","gty","mp","jiujing"],o=t._jumpNeed;return!("deal"===t._type&&o&&e.indexOf(o.channel)>-1)},showCityCheck:function(t,e,o){var a=t;r.showModal({title:"定位到您在 "+e.name,content:"是否切换至该城市进行探索",success:function(t){t.confirm&&((0,n.setCityInfo)(e),getApp().event.emit("cityChange",e),c.set("cityid",e.id),a=e,o(e));try{r.setStorageSync("mt_cityInfo",{value:a,timestamp:new Date((new Date).toLocaleDateString()).getTime()})}catch(t){console.log("mt_cityInfo setStorage fail")}}})},onReady:function(){},onShow:function(){var t,e;return i.async(function(o){for(;;)switch(o.prev=o.next){case 0:return(t=u.globalData.cityInfo)&&t.id!==this.data.cityInfo.id&&(this.bottom=!1,this.offset=0,this.setData({cityInfo:u.globalData.cityInfo,guessData:[],loadingTxt:"加载中..."}),this.getGuessData(function(){u.hideLoading()},function(){u.showErrTip("数据读取失败")})),o.next=4,i.awrap(u.lxPvReport(l.getCid(),null));case 4:(e=r.getStorageSync("isSecondHomeView"))||"string"!=typeof e||r.setStorageSync("isSecondHomeView",!0),e&&r.setStorageSync("isSecondHomeView",!1),this.setData({isSecondHomeView:e});case 8:case"end":return o.stop()}},null,this)},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){r.stopPullDownRefresh()},onReachBottom:function(){this.getGuessData()},onShareAppMessage:function(){return{title:"美团",desc:"享美食，爱玩乐，看电影",path:"/index/pages/mt/mt"}}}); 
 			}); 	require("index/pages/mt/mt.js");
 		__wxRoute = 'index/pages/home/home';__wxRouteBegin = true; 	define("index/pages/home/home.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx;(0,require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page)({onLoad:function(){e.reLaunch({url:"/index/pages/mt/mt"})}}); 
 			}); 	require("index/pages/home/home.js");
 		__wxRoute = 'index/pages/mine/mine';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/pages/mine/mine.js';	define("index/pages/mine/mine.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";(0,require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page)({data:{}}); 
 			}); 	require("index/pages/mine/mine.js");
 		__wxRoute = 'index/pages/order/order-list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/pages/order/order-list.js';	define("index/pages/order/order-list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var t,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(){function t(t,a){var e=[],r=!0,i=!1,n=void 0;try{for(var o,s=t[Symbol.iterator]();!(r=(o=s.next()).done)&&(e.push(o.value),!a||e.length!==a);r=!0);}catch(t){i=!0,n=t}finally{try{!r&&s.return&&s.return()}finally{if(i)throw n}}return e}return function(a,e){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a))return t(a,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=(require("../../../npm/@mtfe/mt-weapp-api/dist/index.js"),require("./youzan-image.js")),i=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,n=require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page,o=requirePlugin("yzGrouponPlugin"),s=require("../../../config.js"),d=require("../../../utils/lx.js"),l=require("../../../utils/util.js"),c=getApp();n({ptDataState:{end:!1,lockFlag:!1,limit:10,offset:0,platformid:6,statusFilter:0,version:0},data:{navmain:[{name:"全部订单",active:!0,canFetch:!0},{name:"待付款",active:!1,canFetch:!0},{name:"待使用",active:!1,canFetch:!0},{name:"待评价",active:!1,canFetch:!0},{name:"退款／售后",active:!1,canFetch:!0}],nav:[{name:"美团订单",active:!0,canFetch:!0,gray:!0},{name:"拼团订单",active:!1,canFetch:!0}],current:0,currentmain:0,showList:!1,sysInfo:c.globalData.sysInfo,orderList:[],statels:[0,1,2,3,4],canScroll:!0,scrollTop:0},getOrderListParams:function(){return{userid:c.globalData.userId,token:c.globalData.token,offset:this.ptDataState.offset,limit:this.ptDataState.limit,platformid:this.ptDataState.platformid,statusFilter:this.data.currentmain,version:this.ptDataState.version}},handleNavMain:function(t){var a=t.target.dataset.index;if(a!==this.data.navmain){var e=this.getMainNavData(a);this.setData({navmain:e,currentmain:a}),this.changeOrderState()}},getMainNavData:function(t){var a=this.data.navmain;return a.map(function(a,e){return a.active=e==t,a}),a},onNavTap:function(t){var a=t.target.dataset.index;if(a!==this.data.current){var e=this.getNewNavData(a);this.setData({nav:e,current:a}),1===a&&this.loadYouzanData()}},getNewNavData:function(t){var a=this.data.nav;return a.forEach(function(a,e){a.active=e==t}),a},loadYouzanData:function(){var t=this;o.fetchOrderList({appId:"wxde8ac0a21135c07d",shopId:"11798553",openId:c.globalData.openId,pageNo:1,pageSize:100}).then(function(a){var i=a.trades.map(function(t){var a=t.items,i=t.stateStr,n=t.realPay,o=t.orderNo,s=e(a,1)[0];return{imageUrl:(0,r.cdnImage)(s.imageUrl),title:s.title,count:a.reduce(function(t,a){return t+a.num},0),stateStr:i,realPay:n,orderNo:o}});t.setData({youzanOrderList:i})})},changeOrderState:function(){this.setData({scrollTop:0}),c.showLoading();var t={userid:c.globalData.userId,token:c.globalData.token,offset:0,limit:this.ptDataState.limit,platformid:this.ptDataState.platformid,statusFilter:this.data.currentmain,version:this.ptDataState.version};this.ptDataState.offset=0,c.fetch(s.orderListApi,t,function(){i.showNavigationBarLoading()},function(t){var a=this;if(t&&t.data&&t.data.error)c.showErrTip("订单列表读取失败");else if(t&&t.data&&t.data.data&&t.data.data.orders){this.ptDataState.offset+=this.ptDataState.limit;var e=t.data.data.orders;this.processingMoreDataState(e),e.forEach(function(t){t.dealpic=l.formatImgURI(t.dealpic),t.orderDetail=a.formatOrderDetail(t.orderDetail,t.partnerid,t.orderid)}),this.setData({orderList:e},function(){a.ptDataState.lockFlag=!1})}i.hideNavigationBarLoading(),i.stopPullDownRefresh(),c.hideLoading()}.bind(this),function(t){c.hideLoading(),c.showErrTip("订单列表读取失败"),i.stopPullDownRefresh()})},refreshOrder:function(t){var a=t.detail;this.data.orderList.splice(a.posi,1),this.setData({orderList:this.data.orderList})},toggleSrcoll:function(t){var a=t.detail.cScroll;this.setData({canScroll:a})},moreOrders:function(){if(1!==this.data.current&&!this.ptDataState.end&&!this.ptDataState.lockFlag){this.ptDataState.lockFlag=!0,c.showLoading();var t=this.getOrderListParams();c.fetch(s.orderListApi,t,function(){i.showNavigationBarLoading()},function(t){var a=this;if(t&&t.data&&t.data.error)c.showErrTip("订单列表读取失败");else if(t&&t.data&&t.data.data&&t.data.data.orders){this.ptDataState.offset+=this.ptDataState.limit;var e=t.data.data.orders;this.processingMoreDataState(e),e.forEach(function(t){t.dealpic=l.formatImgURI(t.dealpic),t.orderDetail=a.formatOrderDetail(t.orderDetail,t.partnerid,t.orderid)}),this.setData({orderList:this.data.orderList.concat(e)},function(){a.ptDataState.lockFlag=!1})}i.hideNavigationBarLoading(),i.stopPullDownRefresh(),c.hideLoading()}.bind(this),function(t){c.hideLoading(),c.showErrTip("订单列表读取失败"),i.stopPullDownRefresh()})}},processingMoreDataState:function(t){t&&t.length<this.ptDataState.limit?this.ptDataState.end=!0:this.ptDataState.end=!1},onReady:function(){},onPullDownRefresh:function(){var t=this;c.login(function(){t.setData({orderList:[]}),t.ptDataState.offset=0,t.ptDataState.end=!1,t.ptDataState.lockFlag=!1,t.moreOrders()})},onLoad:function(t){var a=t.currentmain;if("3"===a){var e=this.getMainNavData(a);this.setData({navmain:e,currentinit:a})}c._sLoginProm||c.loginSdk.destroySession(),c.showLoading()},onShow:function(){var a=this;t=new Date-0,c.lxPvReport(l.getCid());a.setData({showList:!0,orderList:[]}),a.ptDataState={end:!1,lockFlag:!1,limit:10,offset:0,platformid:6,statusFilter:0,version:0},c.loginSdk.authState.session&&"index/pages/order/order-list"===c.loginEntryRefer?(c._sLoginProm||c.loginSdk.destroySession(),a.gotoLogin()):(c.login(function(){"3"===a.data.currentinit&&a.setData({currentmain:3}),a.moreOrders()},function(){a.gotoLogin()}),c.loginEntryRefer="index/pages/order/order-list")},gotoLogin:function(){i.switchTab({url:"/index/pages/mine/mine"}),c.globalData.redirectUrl="/index/pages/order/order-list",c.globalData.suppressLogin=!0},onHide:function(){d.pageDisappear({duration:new Date-t})},formatOrderDetail:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",i="";if(t)try{i=decodeURIComponent(t.replace("imeituan://www.meituan.com/web?url=",""))}catch(t){console.error(t)}return i=i||function(t,e){var r={1:"/food/pages/mt/order-detail/order-detail?orderId=${orderId}",2:"",3:"",30:"/gnc/pages/order/index?id=${orderId}"}[t];if(!r||!e||"object"!==(void 0===e?"undefined":a(e)))return"";for(var i in e)r=r.replace("${"+i+"}",e[i]);return r}(e,{orderId:r})},onReachBottom:function(){this.moreOrders()}}); 
 			}); 	require("index/pages/order/order-list.js");
 		__wxRoute = 'index/pages/search/search';__wxRouteBegin = true; 	define("index/pages/search/search.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,r=require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page,i=require("../../../utils/util");r({onLoad:function(r){e.redirectTo({url:i.formatUrl("/search/pages/search/search",r)})}}); 
 			}); 	require("index/pages/search/search.js");
 		__wxRoute = 'index/pages/poi/poi';__wxRouteBegin = true; 	define("index/pages/poi/poi.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(i){return i+"="+e[i]}).join("&")}function i(e){var i=e.id,r=e.showtype,o=void 0===r?"":r,p=e.cate,n=e.movieid,c=e.query,s=void 0===c?"":c,d=e.source;a[o]?a[o]({id:i,movieid:n,query:s,source:d}):u[p]?u[p]({id:i,movieid:n,query:s,source:d}):t.defaults({id:i,query:s,source:d})}var r=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,o=require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page,t=(require("../../../config.js"),{defaults:function(i){var o=i.id,t=i.query;r.redirectTo({url:"/mt/pages/poi/poi?id="+o+(t?"&"+e(t):"")})},hotel:function(i){var o=i.id,t=i.query;r.redirectTo({url:"/hotel/pages/poi/poi?poiId="+o+(t?"&"+e(t):"")})},cinema:function(i){var o=i.id,t=i.movieid,u=i.query;r.redirectTo({url:"/movie/pages/cinema/cinema?poiId="+o+"&movieId="+t+(u?"&"+e(u):"")})},zhenguo:function(i){var o=i.id,t=i.query,u=void 0===t?"":t;switch(i.source){case"wxwidget":u="phx_wake_up_type=group_wxapp_entry&phx_wake_up_source=search";break;case"search":u="phx_wake_up_type=group_wxapp_entry&phx_wake_up_source=searchresult";break;case"guess":u="phx_wake_up_type=group_wxapp_entry&phx_wake_up_source=guesslike"}r.redirectTo({url:"/zhenguo/pages/webview/index?url="+encodeURIComponent("https://i-zhenguo.meituan.com/housing/mt/"+o+"?startDate=&endDate="+(u?"&"+e(u):""))})},travel:function(i){var o=i.id,t=i.query;r.redirectTo({url:"/ticket/mpvue-pages/pages/poi/poi?poiId="+o+(t?"&"+e(t):"")})}}),u={20:t.hotel,99:t.cinema,20966:t.zhenguo,78:t.travel,195:t.travel},a={travel:t.travel,hotel:t.hotel,cinema:t.cinema,food:t.defaults};o({onLoad:function(e){e.id?i({id:e.id,showtype:e.showtype,cate:e.cate,movieid:e.movieid,source:e.source}):r.switchTab({url:"/index/pages/mt/mt"})}}); 
 			}); 	require("index/pages/poi/poi.js");
 		__wxRoute = 'index/pages/movie/index';__wxRouteBegin = true; 	define("index/pages/movie/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx;(0,require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page)({onLoad:function(){e.redirectTo({url:"/movie/pages/home/index"})}}); 
 			}); 	require("index/pages/movie/index.js");
 		__wxRoute = 'index/pages/hotel/index';__wxRouteBegin = true; 	define("index/pages/hotel/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx;(0,require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page)({onLoad:function(t){e.redirectTo({url:"/hotel/pages/list/index?defaultId=20641&tag=hotel&name=酒店住宿"})}}); 
 			}); 	require("index/pages/hotel/index.js");
 		__wxRoute = 'index/pages/list/list';__wxRouteBegin = true; 	__wxAppCurrentFile__ = 'index/pages/list/list.js';	define("index/pages/list/list.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,t=require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page,i=require("../../../utils/util.js");t({onLoad:function(t){var a="/mt/pages/list/list";a="movie"===t.tag?"/movie/pages/home/index":"hotel"===t.tag?"/hotel/pages/list/index":"/search/pages/search/search?cateId=1",e.redirectTo({url:i.formatUrl(a,t)})}}); 
 			}); 	require("index/pages/list/list.js");
 		__wxRoute = 'index/pages/qrcode/qrcode';__wxRouteBegin = true; 	define("index/pages/qrcode/qrcode.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=function(){function e(e,n){var i=[],o=!0,t=!1,r=void 0;try{for(var a,p=e[Symbol.iterator]();!(o=(a=p.next()).done)&&(i.push(a.value),!n||i.length!==n);o=!0);}catch(e){t=!0,r=e}finally{try{!o&&p.return&&p.return()}finally{if(t)throw r}}return i}return function(n,i){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=require("../../../npm/@mtfe/mt-weapp-api/dist/index.js").wx,i={1:"/index/pages/mt/mt",2:"/index/pages/order/order-list",3:"/index/pages/mine/mine",4:"/index/pages/search/search",5:"/index/pages/h5/h5",6:"/index/pages/poi/poi",7:"/index/pages/poi/poi?showtype=hotel",8:"/index/pages/poi/poi?showtype=cinema",9:"/index/pages/poi/poi?showtype=travel",a:"/index/pages/hotel/index",b:"/index/pages/movie/index"};(0,require("../../../npm/@mtfe/mt-weapp-log/dist/index.js").page)({data:{},onLoad:function(o){var t={},r=decodeURIComponent(o.q).replace("http://i.meituan.com/wrapapi/qrcode/","").split("?"),a=e(r,2),p=a[0],d=a[1];if(d&&d.split("&").forEach(function(n){var i=n.split("="),o=e(i,2),r=o[0],a=o[1];t[r]=a}),p&&i[p]){var s=i[p].indexOf("?")>=0?"&":"?";n.redirectTo({url:i[p]+(d?s+d:"")})}else t.url?n.redirectTo({url:decodeURIComponent(t.url)}):n.redirectTo({url:"/index/pages/home/home"})},onReady:function(){},onShow:function(){},onHide:function(){},onUnload:function(){},onPullDownRefresh:function(){},onReachBottom:function(){},onShareAppMessage:function(){}}); 
 			}); 	require("index/pages/qrcode/qrcode.js");
 		__wxRoute = 'npm/@mtfe/mt-weapp-authrize/page/index';__wxRouteBegin = true; 	define("npm/@mtfe/mt-weapp-authrize/page/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../index"),t=require("../types"),n=require("../../mt-weapp-log/dist/index.js").page,i=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t.AUTH_TYPE.userInfo,{type:t.AUTH_TYPE.userInfo,text:"授权微信用户信息",openType:"getUserInfo"});n({data:{AUTH_TYPE:t.AUTH_TYPE,btn:{},authrizePageData:e.config.pageConfig},onLoad:function(e){this.setData({btn:i[e.type]})},getuserinfoClick:function(t){var n=t.detail;n&&n.iv&&e.state.resolve(n)}}); 
 			}); 	require("npm/@mtfe/mt-weapp-authrize/page/index.js");
 		__wxRoute = 'web-pay/pay/index';__wxRouteBegin = true; 	define("web-pay/pay/index.js", function(require, module, exports, window,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,XMLHttpRequest,WebSocket,Reporter,webkit,WeixinJSCore){ 			
"use strict";var e=require("../../npm/@mtfe/mt-weapp-api/dist/index.js").wx;(0,require("../../npm/@mtfe/mt-weapp-log/dist/index.js").page)({data:{},onLoad:function(e){this.goPayment(e)},goPayment:function(n){var t=this,i=n.successRedirectUrl,o=n.failRedirectUrl,a=this.checkParams(n);if(n.package=decodeURIComponent(n.package),n.paySign="true"===n.isPaySignEncoded?decodeURIComponent(n.paySign):n.paySign,a){e.showLoading({title:"支付中...",icon:"loading"});try{var c=n.timeStamp,r=n.nonceStr,s=n.signType,g=n.paySign;e.requestPayment({timeStamp:c,nonceStr:r,package:n.package,signType:s,paySign:g,success:function(n){e.hideLoading(),t.goRedirect(i)},fail:function(n){e.hideLoading(),n&&"requestPayment:fail cancel"===n.errMsg?e.showToast({title:"您已取消支付",icon:"none"}):e.showToast({title:"支付失败，请重新尝试",icon:"none"}),console.log("支付失败:",n),t.goRedirect(o)}})}catch(n){e.showToast({title:"支付出错了",icon:"none"}),e.goRedirect(o)}}else e.showToast({title:"支付参数出现问题",icon:"none"}),this.goRedirect(o)},goRedirect:function(n){n?e.redirectTo({url:decodeURIComponent(n)}):e.navigateBack({delta:1})},checkParams:function(e){return 0==["timeStamp","nonceStr","package","signType","paySign"].filter(function(n){return!e[n]&&"undefined"==e[n]}).length}}); 
 			}); 	require("web-pay/pay/index.js");
 	