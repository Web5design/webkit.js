// Note: For maximum-speed code, see "Optimizing Code" on the Emscripten wiki, https://github.com/kripken/emscripten/wiki/Optimizing-Code
// Note: Some Emscripten settings may limit the speed of the generated code.
// Capture the output of this into a variable, if you want
(function(FUNCTION_TABLE_OFFSET, parentModule) {
  var Module = {};
  var args = [];
  Module.arguments = [];
  Module.print = parentModule.print;
  Module.printErr = parentModule.printErr;
  Module.cleanups = [];
  var H_BASE = 0;
  // Each module has its own stack
  var STACKTOP = parentModule['_malloc'](TOTAL_STACK);
  assert(STACKTOP % 8 == 0);
  var STACK_MAX = STACKTOP + TOTAL_STACK;
  Module.cleanups.push(function() {
    parentModule['_free'](STACKTOP); // XXX ensure exported
    parentModule['_free'](H_BASE);
  });
// === Auto-generated preamble library stuff ===
//========================================
// Runtime essentials
//========================================
function callRuntimeCallbacks(callbacks) {
  while(callbacks.length > 0) {
    var callback = callbacks.pop();
    var func = callback.func;
    if (typeof func === 'number') {
      func = FUNCTION_TABLE[func];
    }
    func(callback.arg === undefined ? null : callback.arg);
  }
}
var __ATINIT__ = []; // functions called during startup
function initRuntime() {
  callRuntimeCallbacks(__ATINIT__);
}
// === Body ===
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore7FEImageC1EPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE;
var __ZN7WebCore7FEImageC1EPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE;
/* memory initializer */ allocate([34,93,10,0,0,0,0,0,120,0,0,0,0,0,0,0,32,105,109,97,103,101,45,115,105,122,101,61,34,0,0,0,91,102,101,73,109,97,103,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var Math_min = Math.min;
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vii(index,a1,a2) {
  try {
    Module["dynCall_vii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viii(index,a1,a2,a3) {
  try {
    Module["dynCall_viii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iii(index,a1,a2) {
  try {
    return Module["dynCall_iii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function asmPrintInt(x, y) {
  Module.print('int ' + x + ',' + y);// + ' ' + new Error().stack);
}
function asmPrintFloat(x, y) {
  Module.print('float ' + x + ',' + y);// + ' ' + new Error().stack);
}
// EMSCRIPTEN_START_ASM
var asm = (function(global, env, buffer) {
  'almost asm';
  var HEAP8 = new global.Int8Array(buffer);
  var HEAP16 = new global.Int16Array(buffer);
  var HEAP32 = new global.Int32Array(buffer);
  var HEAPU8 = new global.Uint8Array(buffer);
  var HEAPU16 = new global.Uint16Array(buffer);
  var HEAPU32 = new global.Uint32Array(buffer);
  var HEAPF32 = new global.Float32Array(buffer);
  var HEAPF64 = new global.Float64Array(buffer);
  var STACKTOP=env.STACKTOP|0;
  var STACK_MAX=env.STACK_MAX|0;
  var tempDoublePtr=env.tempDoublePtr|0;
  var ABORT=env.ABORT|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore7FEImageE=(H_BASE+56)|0;
  var __THREW__ = 0;
  var threwValue = 0;
  var setjmpId = 0;
  var undef = 0;
  var tempInt = 0, tempBigInt = 0, tempBigIntP = 0, tempBigIntS = 0, tempBigIntR = 0.0, tempBigIntI = 0, tempBigIntD = 0, tempValue = 0, tempDouble = 0.0;
  var tempRet0 = 0;
  var tempRet1 = 0;
  var tempRet2 = 0;
  var tempRet3 = 0;
  var tempRet4 = 0;
  var tempRet5 = 0;
  var tempRet6 = 0;
  var tempRet7 = 0;
  var tempRet8 = 0;
  var tempRet9 = 0;
  var Math_floor=global.Math.floor;
  var Math_abs=global.Math.abs;
  var Math_sqrt=global.Math.sqrt;
  var Math_pow=global.Math.pow;
  var Math_cos=global.Math.cos;
  var Math_sin=global.Math.sin;
  var Math_tan=global.Math.tan;
  var Math_acos=global.Math.acos;
  var Math_asin=global.Math.asin;
  var Math_atan=global.Math.atan;
  var Math_atan2=global.Math.atan2;
  var Math_exp=global.Math.exp;
  var Math_log=global.Math.log;
  var Math_ceil=global.Math.ceil;
  var Math_imul=global.Math.imul;
  var abort=env.abort;
  var assert=env.assert;
  var asmPrintInt=env.asmPrintInt;
  var asmPrintFloat=env.asmPrintFloat;
  var Math_min=env.min;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore7FEImage21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i22 | 0) == 0) {
   i23 = 0;
  } else {
   i24 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i1 + 128 | 0, i22, 0, 0) | 0;
   if ((i24 | 0) == 0) {
    i23 = 0;
    break;
   }
   i25 = HEAP32[i24 + 12 >> 2] | 0;
   if ((i25 & 32 | 0) == 0) {
    i23 = 0;
    break;
   }
   i26 = i24 + 32 | 0;
   if ((i25 & 2048 | 0) == 0) {
    i27 = i26 | 0;
   } else {
    i27 = HEAP32[i26 >> 2] | 0;
   }
   i23 = HEAP32[i27 >> 2] | 0;
  }
 } while (0);
 i27 = i1 + 120 | 0;
 if ((HEAP32[i27 >> 2] | 0) == 0 & (i23 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i22 = i1 | 0;
 i26 = __ZN7WebCore12FilterEffect23createImageBufferResultEv(i22) | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i25 = (HEAP32[i1 + 68 >> 2] | 0) + 24 | 0;
 i24 = i4;
 i28 = i1 + 72 | 0;
 HEAP32[i24 >> 2] = HEAP32[i28 >> 2];
 HEAP32[i24 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
 HEAP32[i24 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
 HEAP32[i24 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
 __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i3, i25, i4);
 i4 = i5;
 _memset(i4 | 0, 0, 16) | 0;
 i28 = (i23 | 0) != 0;
 if (i28) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 416 >> 2] & 7](i9, i23 | 0);
  __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i8, i25, i9);
  i9 = i8;
  HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i4 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 } else {
  i9 = HEAP32[i27 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 48 >> 2] & 7](i12, i9);
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i11, i12);
  i12 = HEAP32[i10 >> 2] | 0;
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  i6 = i5 + 8 | 0;
  HEAP32[i6 >> 2] = i12;
  HEAP32[i6 + 4 >> 2] = i11;
  __ZN7WebCore22SVGPreserveAspectRatio13transformRectERNS_9FloatRectES2_(i1 + 132 | 0, i3, i7);
 }
 i11 = i1 + 36 | 0;
 d29 = +(-(HEAP32[i11 + 4 >> 2] | 0) | 0);
 i6 = i3 | 0;
 HEAPF32[i6 >> 2] = +HEAPF32[i6 >> 2] + +(-(HEAP32[i11 >> 2] | 0) | 0);
 i11 = i3 + 4 | 0;
 HEAPF32[i11 >> 2] = +HEAPF32[i11 >> 2] + d29;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] & 7](i22, 0);
 i22 = __ZNK7WebCore11ImageBuffer7contextEv(i26) | 0;
 if (!i28) {
  i28 = HEAP32[i27 >> 2] | 0;
  HEAP32[i21 >> 2] = 0;
  HEAP32[i21 + 4 >> 2] = 1;
  __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i22, i28, 0, i3, i7, 2, i21, 0);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i22, i25);
 i25 = HEAP32[i23 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i25 + 76 >> 2] | 0) != 0) {
   __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i13, i25);
   HEAPF32[i14 >> 2] = +0;
   HEAPF32[i15 + 4 >> 2] = +0;
   if (!(__ZNK7WebCore16SVGLengthContext17determineViewportERNS_9FloatSizeE(i13, i15) | 0)) {
    break;
   }
   i22 = __ZNK7WebCore11ImageBuffer7contextEv(i26) | 0;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   i21 = i17 + 8 | 0;
   i7 = HEAP32[i14 + 4 >> 2] | 0;
   HEAP32[i21 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i21 + 4 >> 2] = i7;
   __ZN7WebCore19makeMapBetweenRectsERKNS_9FloatRectES2_(i16, i19, i3);
   __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i22, i16);
  }
 } while (0);
 __ZN7WebCore15AffineTransformC1Ev(i20);
 __ZN7WebCore19SVGRenderingContext26renderSubtreeToImageBufferEPNS_11ImageBufferERNS_13RenderElementERKNS_15AffineTransformE(i26, i23, i20);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore7FEImage26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 64 | 0;
 i9 = i2 + 80 | 0;
 i10 = i2 + 96 | 0;
 i11 = i2 + 112 | 0;
 i12 = i2 + 128 | 0;
 i13 = (HEAP32[i1 + 68 >> 2] | 0) + 24 | 0;
 i14 = i4;
 i15 = i1 + 72 | 0;
 HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i3, i13, i4);
 i4 = i5;
 _memset(i4 | 0, 0, 16) | 0;
 i15 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i14 = HEAP32[i1 + 124 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i1 + 128 | 0, i14, 0, 0) | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i16 + 12 >> 2] | 0;
   if ((i14 & 32 | 0) == 0) {
    break;
   }
   i17 = i16 + 32 | 0;
   if ((i14 & 2048 | 0) == 0) {
    i18 = i17 | 0;
   } else {
    i18 = HEAP32[i17 >> 2] | 0;
   }
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 416 >> 2] & 7](i9, i17);
   __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i8, i13, i9);
   i17 = i8;
   HEAP32[i4 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
   HEAP32[i4 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 48 >> 2] & 7](i7, i15);
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, i7);
   i17 = i5 + 8 | 0;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i17 + 4 >> 2] = i14;
   __ZN7WebCore22SVGPreserveAspectRatio13transformRectERNS_9FloatRectES2_(i1 + 132 | 0, i3, i5);
  }
 } while (0);
 i5 = i1 + 52 | 0;
 if ((HEAP8[i1 + 108 | 0] & 1) == 0) {
  i6 = i11;
  i7 = i5;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  __ZN7WebCore9FloatRect5uniteERKS0_(i3, i11);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i3);
  i19 = i1 + 36 | 0;
  i20 = i19;
  i21 = i12;
  HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
  HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
  HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
  STACKTOP = i2;
  return;
 } else {
  i11 = i10;
  i7 = i5;
  HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  __ZN7WebCore9FloatRect9intersectERKS0_(i3, i10);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i3);
  i19 = i1 + 36 | 0;
  i20 = i19;
  i21 = i12;
  HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
  HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
  HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore7FEImage22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = HEAP32[i1 + 124 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   i12 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i1 + 128 | 0, i9, 0, 0) | 0;
   if ((i12 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   i9 = HEAP32[i12 + 12 >> 2] | 0;
   if ((i9 & 32 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   i13 = i12 + 32 | 0;
   if ((i9 & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   i13 = HEAP32[i14 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 416 >> 2] & 7](i6, i13);
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i7, i6);
   i13 = i7 + 8 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   i11 = HEAP32[i13 + 4 >> 2] | 0;
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] & 7](i5, i8);
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = HEAP32[i5 + 4 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 40 | 0) | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i1 | 0, i2, 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 24 | 0) | 0, i10) | 0, H_BASE + 16 | 0) | 0, i11) | 0, H_BASE + 8 | 0) | 0;
 STACKTOP = i4;
 return i2 | 0;
}
function __ZN7WebCore7FEImageD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore7FEImageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore7FEImage22createWithIRIReferenceEPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i6 = __ZN3WTF10fastMallocEj(140) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i6, i2);
 HEAP32[i6 >> 2] = H_BASE + 64;
 HEAP32[i6 + 120 >> 2] = 0;
 HEAP32[i6 + 124 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i6 + 128 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i5;
 i5 = i6 + 132 | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCore7FEImage15createWithImageEPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = __ZN3WTF10fastMallocEj(140) | 0;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i5, i2);
 HEAP32[i5 >> 2] = H_BASE + 64;
 HEAP32[i5 + 120 >> 2] = i3;
 HEAP32[i5 + 124 >> 2] = 0;
 HEAP32[i5 + 128 >> 2] = 0;
 i3 = i4;
 i4 = i5 + 132 | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore7FEImageC2EPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 128 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i5;
 i5 = i1 + 132 | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore7FEImageC1EPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP32[i1 + 124 >> 2] = i3;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 + 128 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i5;
 i5 = i1 + 132 | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore7FEImage18referencedRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i1 + 128 | 0, i2, 0, 0) | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = HEAP32[i4 + 12 >> 2] | 0;
 if ((i2 & 32 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i4 + 32 | 0;
 if ((i2 & 2048 | 0) == 0) {
  i5 = i1 | 0;
 } else {
  i5 = HEAP32[i1 >> 2] | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore7FEImageC2EPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 i3 = i4;
 i4 = i1 + 132 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore7FEImageC1EPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 i3 = i4;
 i4 = i1 + 132 | 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 return;
}
function _memset(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + i3 | 0;
 if ((i3 | 0) >= 20) {
  i2 = i2 & 255;
  i5 = i1 & 3;
  i6 = i2 | i2 << 8 | i2 << 16 | i2 << 24;
  i7 = i4 & ~3;
  if (i5) {
   i5 = i1 + 4 - i5 | 0;
   while ((i1 | 0) < (i5 | 0)) {
    HEAP8[i1] = i2;
    i1 = i1 + 1 | 0;
   }
  }
  while ((i1 | 0) < (i7 | 0)) {
   HEAP32[i1 >> 2] = i6;
   i1 = i1 + 4 | 0;
  }
 }
 while ((i1 | 0) < (i4 | 0)) {
  HEAP8[i1] = i2;
  i1 = i1 + 1 | 0;
 }
 return i1 - i3 | 0;
}
function _memcpy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 | 0;
 if ((i1 & 3) == (i2 & 3)) {
  while (i1 & 3) {
   if ((i3 | 0) == 0) return i4 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
   i1 = i1 + 1 | 0;
   i2 = i2 + 1 | 0;
   i3 = i3 - 1 | 0;
  }
  while ((i3 | 0) >= 4) {
   HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
   i1 = i1 + 4 | 0;
   i2 = i2 + 4 | 0;
   i3 = i3 - 4 | 0;
  }
 }
 while ((i3 | 0) > 0) {
  HEAP8[i1] = HEAP8[i2] | 0;
  i1 = i1 + 1 | 0;
  i2 = i2 + 1 | 0;
  i3 = i3 - 1 | 0;
 }
 return i4 | 0;
}
function copyTempDouble(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
 HEAP8[tempDoublePtr + 4 | 0] = HEAP8[i1 + 4 | 0];
 HEAP8[tempDoublePtr + 5 | 0] = HEAP8[i1 + 5 | 0];
 HEAP8[tempDoublePtr + 6 | 0] = HEAP8[i1 + 6 | 0];
 HEAP8[tempDoublePtr + 7 | 0] = HEAP8[i1 + 7 | 0];
}
function __ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = i2;
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function _strlen(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (HEAP8[i2] | 0) {
  i2 = i2 + 1 | 0;
 }
 return i2 - i1 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore7FEImage16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN7WebCore7FEImage4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function setTempRet9(i1) {
 i1 = i1 | 0;
 tempRet9 = i1;
}
function setTempRet8(i1) {
 i1 = i1 | 0;
 tempRet8 = i1;
}
function setTempRet7(i1) {
 i1 = i1 | 0;
 tempRet7 = i1;
}
function setTempRet6(i1) {
 i1 = i1 | 0;
 tempRet6 = i1;
}
function setTempRet5(i1) {
 i1 = i1 | 0;
 tempRet5 = i1;
}
function setTempRet4(i1) {
 i1 = i1 | 0;
 tempRet4 = i1;
}
function setTempRet3(i1) {
 i1 = i1 | 0;
 tempRet3 = i1;
}
function setTempRet2(i1) {
 i1 = i1 | 0;
 tempRet2 = i1;
}
function setTempRet1(i1) {
 i1 = i1 | 0;
 tempRet1 = i1;
}
function setTempRet0(i1) {
 i1 = i1 | 0;
 tempRet0 = i1;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore7FEImageC2EPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore7FEImageD1Ev,b1,__ZN7WebCore7FEImage21platformApplySoftwareEv,b1,__ZN7WebCore7FEImageD0Ev,b1,__ZN7WebCore7FEImage4dumpEv,b1,__ZN7WebCore7FEImage26determineAbsolutePaintRectEv,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b3,__ZNK7WebCore7FEImage16filterEffectTypeEv,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZNK7WebCore7FEImage22externalRepresentationERNS_10TextStreamEi,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZN7WebCore7FEImageC2EPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
// Warning: printing of i64 values may be slightly rounded! No deep i64 math used, so precise i64 code not included
var i64Math = null;
// === Auto-generated postamble setup entry stuff ===
function run(args) {
  initRuntime();
}
Module['run'] = run;
// {{PRE_RUN_ADDITIONS}}
run();
// {{POST_RUN_ADDITIONS}}
  // {{MODULE_ADDITIONS}}
  return Module;
});
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","__ZN7WebCore12FilterEffect25transformResultColorSpaceEPS0_i","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv","__ZN7WebCore7FEImage22createWithIRIReferenceEPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE","__ZN7WebCore7FEImageD1Ev","__ZN7WebCore7FEImage21platformApplySoftwareEv","__ZN7WebCore7FEImage15createWithImageEPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE","_memset","__ZN7WebCore7FEImage4dumpEv","__ZN7WebCore7FEImage26determineAbsolutePaintRectEv","_memcpy","__ZN7WebCore12FilterEffect19setResultColorSpaceENS_10ColorSpaceE","__ZN7WebCore7FEImageC2EPNS_6FilterERNS_8DocumentERKN3WTF6StringERKNS_22SVGPreserveAspectRatioE","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZNK7WebCore7FEImage16filterEffectTypeEv","__ZNK7WebCore7FEImage22externalRepresentationERNS_10TextStreamEi","__ZN7WebCore7FEImageC2EPNS_6FilterEN3WTF10PassRefPtrINS_5ImageEEERKNS_22SVGPreserveAspectRatioE","__ZNK7WebCore7FEImage18referencedRendererEv","__ZN7WebCore7FEImageD0Ev"]