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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore19SVGAnimatedPropertyC1EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE;
var __ZN7WebCore19SVGAnimatedPropertyD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZTVN7WebCore19SVGAnimatedPropertyE=(H_BASE+8)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 if (HEAP8[H_BASE + 40 | 0] | 0) {
  i4 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i6;
  HEAP8[H_BASE + 40 | 0] = 1;
  i4 = i6;
 }
 i6 = i4 + 12 | 0;
 i5 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = i4 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 + (i9 * 12 & -1) | 0;
 L5 : do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   L7 : do {
    if ((i9 | 0) == 0) {
     i11 = i7;
    } else {
     i12 = i7;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      i14 = i13;
      if ((i14 | 0) == 0) {
       if (!((HEAP32[i12 + 4 >> 2] | 0) == 0 | (i13 | 0) == -1)) {
        i11 = i12;
        break L7;
       }
      } else if ((i14 | 0) != (-1 | 0)) {
       i11 = i12;
       break L7;
      }
      i12 = i12 + 12 | 0;
      if ((i12 | 0) == (i10 | 0)) {
       break L5;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i15 = i11;
   }
   while (1) {
    if ((HEAP32[i15 + 8 >> 2] | 0) == (i1 | 0)) {
     break;
    }
    i12 = i15 + 12 | 0;
    if ((i12 | 0) == (i10 | 0)) {
     break L5;
    } else {
     i16 = i12;
    }
    while (1) {
     i12 = HEAP32[i16 >> 2] | 0;
     i14 = i12;
     if ((i14 | 0) == 0) {
      if (!((HEAP32[i16 + 4 >> 2] | 0) == 0 | (i12 | 0) == -1)) {
       break;
      }
     } else if ((i14 | 0) != (-1 | 0)) {
      break;
     }
     i14 = i16 + 12 | 0;
     if ((i14 | 0) == (i10 | 0)) {
      break L5;
     } else {
      i16 = i14;
     }
    }
    if ((i16 | 0) == (i10 | 0)) {
     break L5;
    } else {
     i15 = i16;
    }
   }
   i14 = i4 | 0;
   if ((i15 | 0) == (i10 | 0)) {
    break;
   }
   HEAP32[i15 >> 2] = -1;
   i12 = i4 + 16 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i13;
   i17 = HEAP32[i8 >> 2] | 0;
   if (!((i13 * 6 & -1 | 0) < (i17 | 0) & (i17 | 0) > 8)) {
    break;
   }
   i13 = (i17 | 0) / 2 & -1;
   i18 = HEAP32[i5 >> 2] | 0;
   HEAP32[i8 >> 2] = i13;
   HEAP32[i4 + 8 >> 2] = i13 - 1;
   HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i13 * 12 & -1) | 0;
   if ((i17 | 0) != 0) {
    i13 = i3 | 0;
    i19 = 0;
    while (1) {
     i20 = i18 + (i19 * 12 & -1) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     i22 = i21;
     if ((i22 | 0) == 0) {
      if (!((HEAP32[i18 + (i19 * 12 & -1) + 4 >> 2] | 0) == 0 | (i21 | 0) == -1)) {
       i23 = 17;
      }
     } else if ((i22 | 0) != (-1 | 0)) {
      i23 = 17;
     }
     if ((i23 | 0) == 17) {
      i23 = 0;
      __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i3, i14, i20 | 0);
      i22 = HEAP32[i13 >> 2] | 0;
      i21 = i20;
      HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
      HEAP32[i22 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
      HEAP32[i22 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
     }
     i19 = i19 + 1 | 0;
     if ((i19 | 0) == (i17 | 0)) {
      break;
     }
    }
   }
   HEAP32[i12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i18);
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i23 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i23;
 if ((i23 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore19SVGAnimatedPropertyD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 if (HEAP8[H_BASE + 40 | 0] | 0) {
  i4 = HEAP32[H_BASE + 48 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i6 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i6;
  HEAP8[H_BASE + 40 | 0] = 1;
  i4 = i6;
 }
 i6 = i4 + 12 | 0;
 i5 = i4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = i4 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 + (i9 * 12 & -1) | 0;
 L5 : do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   L7 : do {
    if ((i9 | 0) == 0) {
     i11 = i7;
    } else {
     i12 = i7;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      i14 = i13;
      if ((i14 | 0) == 0) {
       if (!((HEAP32[i12 + 4 >> 2] | 0) == 0 | (i13 | 0) == -1)) {
        i11 = i12;
        break L7;
       }
      } else if ((i14 | 0) != (-1 | 0)) {
       i11 = i12;
       break L7;
      }
      i12 = i12 + 12 | 0;
      if ((i12 | 0) == (i10 | 0)) {
       break L5;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i10 | 0)) {
    break;
   } else {
    i15 = i11;
   }
   while (1) {
    if ((HEAP32[i15 + 8 >> 2] | 0) == (i1 | 0)) {
     break;
    }
    i12 = i15 + 12 | 0;
    if ((i12 | 0) == (i10 | 0)) {
     break L5;
    } else {
     i16 = i12;
    }
    while (1) {
     i12 = HEAP32[i16 >> 2] | 0;
     i14 = i12;
     if ((i14 | 0) == 0) {
      if (!((HEAP32[i16 + 4 >> 2] | 0) == 0 | (i12 | 0) == -1)) {
       break;
      }
     } else if ((i14 | 0) != (-1 | 0)) {
      break;
     }
     i14 = i16 + 12 | 0;
     if ((i14 | 0) == (i10 | 0)) {
      break L5;
     } else {
      i16 = i14;
     }
    }
    if ((i16 | 0) == (i10 | 0)) {
     break L5;
    } else {
     i15 = i16;
    }
   }
   i14 = i4 | 0;
   if ((i15 | 0) == (i10 | 0)) {
    break;
   }
   HEAP32[i15 >> 2] = -1;
   i12 = i4 + 16 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i13;
   i17 = HEAP32[i8 >> 2] | 0;
   if (!((i13 * 6 & -1 | 0) < (i17 | 0) & (i17 | 0) > 8)) {
    break;
   }
   i13 = (i17 | 0) / 2 & -1;
   i18 = HEAP32[i5 >> 2] | 0;
   HEAP32[i8 >> 2] = i13;
   HEAP32[i4 + 8 >> 2] = i13 - 1;
   HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i13 * 12 & -1) | 0;
   if ((i17 | 0) != 0) {
    i13 = i3 | 0;
    i19 = 0;
    while (1) {
     i20 = i18 + (i19 * 12 & -1) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     i22 = i21;
     if ((i22 | 0) == 0) {
      if (!((HEAP32[i18 + (i19 * 12 & -1) + 4 >> 2] | 0) == 0 | (i21 | 0) == -1)) {
       i23 = 17;
      }
     } else if ((i22 | 0) != (-1 | 0)) {
      i23 = 17;
     }
     if ((i23 | 0) == 17) {
      i23 = 0;
      __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i3, i14, i20 | 0);
      i22 = HEAP32[i13 >> 2] | 0;
      i21 = i20;
      HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
      HEAP32[i22 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
      HEAP32[i22 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
     }
     i19 = i19 + 1 | 0;
     if ((i19 | 0) == (i17 | 0)) {
      break;
     }
    }
   }
   HEAP32[i12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i18);
  }
 } while (0);
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 8 | 0;
 i3 = i1 | 0;
 i23 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i23;
 if ((i23 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3;
 i6 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i7 = (HEAPU16[i2 + 2 >> 1] | 0) << 11 ^ i6 ^ i6 << 16;
 i6 = i3 + 4 | 0;
 i8 = i7 + (HEAPU16[i6 >> 1] | 0) + (i7 >>> 11) | 0;
 i7 = i8 ^ (HEAPU16[i2 + 6 >> 1] | 0) << 11 ^ i8 << 16;
 i8 = (i7 >>> 11) + i7 | 0;
 i7 = i8 << 3 ^ i8;
 i8 = (i7 >>> 5) + i7 | 0;
 i7 = i8 << 2 ^ i8;
 i8 = (i7 >>> 15) + i7 | 0;
 i7 = (i8 << 10 ^ i8) & 16777215;
 i8 = (i7 | 0) == 0 ? 8388608 : i7;
 i7 = i3 | 0;
 i3 = (i8 >>> 23) + ~i8 | 0;
 i2 = i3 << 12 ^ i3;
 i3 = i2 >>> 7 ^ i2;
 i2 = i3 << 2 ^ i3;
 i3 = i2 >>> 20 ^ i2 | 1;
 i2 = i8;
 i8 = 0;
 i9 = 0;
 while (1) {
  i10 = i2 & i5;
  i11 = i4 + (i10 * 12 & -1) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i13 = 4;
    break;
   }
  }
  if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    i13 = 7;
    break;
   }
  }
  i14 = (i8 | 0) == 0 ? i3 : i8;
  i2 = i14 + i10 | 0;
  i8 = i14;
  i9 = (i12 | 0) == -1 ? i11 : i9;
 }
 if ((i13 | 0) == 4) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 } else if ((i13 | 0) == 7) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 3;
 } else {
  i7 = HEAP32[i3 + 4 >> 2] | 0;
  if ((i7 & 1 | 0) == 0) {
   i6 = 3;
  } else {
   i8 = i3;
   i9 = i7;
  }
 }
 if ((i6 | 0) == 3) {
  __ZN7WebCore7Element23createUniqueElementDataEv(i4);
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4;
  i9 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i8 + 4 >> 2] = i9 | -2147483648;
 i9 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 612 >> 2] & 1](i9, HEAP32[i1 + 12 >> 2] | 0);
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
function __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 16 >> 2] = i4;
 HEAP8[i1 + 20 | 0] = 0;
 HEAP8[i1 + 21 | 0] = 0;
 return;
}
function __ZN7WebCore19SVGAnimatedPropertyC1EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 12 >> 2] = i3;
 HEAP32[i1 + 16 >> 2] = i4;
 HEAP8[i1 + 20 | 0] = 0;
 HEAP8[i1 + 21 | 0] = 0;
 return;
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
function __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 40 | 0] | 0) {
  i1 = HEAP32[H_BASE + 48 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 48 >> 2] = i3;
  HEAP8[H_BASE + 40 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 2;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore19SVGAnimatedPropertyD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(5);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore19SVGAnimatedPropertyD0Ev,b0,__ZN7WebCore19SVGAnimatedPropertyD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  var FUNCTION_TABLE_viiii = [b5,b5,__ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZN7WebCore19SVGAnimatedPropertyD2Ev","_memset","__ZN7WebCore19SVGAnimatedProperty12commitChangeEv","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","_memcpy","_strlen","__ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE","__ZN7WebCore19SVGAnimatedPropertyD0Ev","__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv"]
