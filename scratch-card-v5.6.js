(function () {
  const t = document.createElement('link').relList;
  if (t && t.supports && t.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === 'childList')
        for (const l of i.addedNodes)
          l.tagName === 'LINK' && l.rel === 'modulepreload' && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossOrigin === 'anonymous'
        ? (i.credentials = 'omit')
        : (i.credentials = 'same-origin'),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function oh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Kr = {},
  ih = {
    get exports() {
      return Kr;
    },
    set exports(e) {
      Kr = e;
    },
  },
  Ai = {},
  M = {},
  lh = {
    get exports() {
      return M;
    },
    set exports(e) {
      M = e;
    },
  },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var po = Symbol.for('react.element'),
  sh = Symbol.for('react.portal'),
  uh = Symbol.for('react.fragment'),
  ah = Symbol.for('react.strict_mode'),
  ch = Symbol.for('react.profiler'),
  fh = Symbol.for('react.provider'),
  dh = Symbol.for('react.context'),
  ph = Symbol.for('react.forward_ref'),
  hh = Symbol.for('react.suspense'),
  mh = Symbol.for('react.memo'),
  gh = Symbol.for('react.lazy'),
  za = Symbol.iterator;
function yh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (za && e[za]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var wf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Sf = Object.assign,
  xf = {};
function yr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xf),
    (this.updater = n || wf);
}
yr.prototype.isReactComponent = {};
yr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
yr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function kf() {}
kf.prototype = yr.prototype;
function pu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = xf),
    (this.updater = n || wf);
}
var hu = (pu.prototype = new kf());
hu.constructor = pu;
Sf(hu, yr.prototype);
hu.isPureReactComponent = !0;
var Ia = Array.isArray,
  Cf = Object.prototype.hasOwnProperty,
  mu = { current: null },
  Ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Pf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Cf.call(t, r) && !Ef.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: po,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: mu.current,
  };
}
function vh(e, t) {
  return {
    $$typeof: po,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function gu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === po;
}
function wh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ma = /\/+/g;
function zl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? wh('' + e.key)
    : t.toString(36);
}
function Ko(e, t, n, r, o) {
  var i = typeof e;
  (i === 'undefined' || i === 'boolean') && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case 'string':
      case 'number':
        l = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case po:
          case sh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + zl(l, 0) : r),
      Ia(o)
        ? ((n = ''),
          e != null && (n = e.replace(Ma, '$&/') + '/'),
          Ko(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (gu(o) &&
            (o = vh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Ma, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Ia(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + zl(i, s);
      l += Ko(i, t, n, u, o);
    }
  else if (((u = yh(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + zl(i, s++)), (l += Ko(i, t, n, u, o));
  else if (i === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return l;
}
function xo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ko(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function Sh(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var He = { current: null },
  Qo = { transition: null },
  xh = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Qo,
    ReactCurrentOwner: mu,
  };
Q.Children = {
  map: xo,
  forEach: function (e, t, n) {
    xo(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      xo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      xo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!gu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Q.Component = yr;
Q.Fragment = uh;
Q.Profiler = ch;
Q.PureComponent = pu;
Q.StrictMode = ah;
Q.Suspense = hh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xh;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Sf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = mu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Cf.call(t, u) &&
        !Ef.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: po, type: e.type, key: o, ref: i, props: r, _owner: l };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: dh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = Pf;
Q.createFactory = function (e) {
  var t = Pf.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: ph, render: e };
};
Q.isValidElement = gu;
Q.lazy = function (e) {
  return { $$typeof: gh, _payload: { _status: -1, _result: e }, _init: Sh };
};
Q.memo = function (e, t) {
  return { $$typeof: mh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Qo.transition;
  Qo.transition = {};
  try {
    e();
  } finally {
    Qo.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Q.useCallback = function (e, t) {
  return He.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return He.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return He.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return He.current.useEffect(e, t);
};
Q.useId = function () {
  return He.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return He.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return He.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return He.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return He.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return He.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return He.current.useRef(e);
};
Q.useState = function (e) {
  return He.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return He.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return He.current.useTransition();
};
Q.version = '18.2.0';
(function (e) {
  e.exports = Q;
})(lh);
const ft = oh(M);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var kh = M,
  Ch = Symbol.for('react.element'),
  Eh = Symbol.for('react.fragment'),
  Ph = Object.prototype.hasOwnProperty,
  _h = kh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  $h = { key: !0, ref: !0, __self: !0, __source: !0 };
function _f(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) Ph.call(t, r) && !$h.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Ch,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: _h.current,
  };
}
Ai.Fragment = Eh;
Ai.jsx = _f;
Ai.jsxs = _f;
(function (e) {
  e.exports = Ai;
})(ih);
const Th = Kr.Fragment,
  Te = Kr.jsx,
  li = Kr.jsxs;
var us = {},
  as = {},
  Rh = {
    get exports() {
      return as;
    },
    set exports(e) {
      as = e;
    },
  },
  it = {},
  cs = {},
  Oh = {
    get exports() {
      return cs;
    },
    set exports(e) {
      cs = e;
    },
  },
  $f = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, D) {
    var j = C.length;
    C.push(D);
    e: for (; 0 < j; ) {
      var q = (j - 1) >>> 1,
        $ = C[q];
      if (0 < o($, D)) (C[q] = D), (C[j] = $), (j = q);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0],
      j = C.pop();
    if (j !== D) {
      C[0] = j;
      e: for (var q = 0, $ = C.length, z = $ >>> 1; q < z; ) {
        var _ = 2 * (q + 1) - 1,
          L = C[_],
          w = _ + 1,
          b = C[w];
        if (0 > o(L, j))
          w < $ && 0 > o(b, L)
            ? ((C[q] = b), (C[w] = j), (q = w))
            : ((C[q] = L), (C[_] = j), (q = _));
        else if (w < $ && 0 > o(b, j)) (C[q] = b), (C[w] = j), (q = w);
        else break e;
      }
    }
    return D;
  }
  function o(C, D) {
    var j = C.sortIndex - D.sortIndex;
    return j !== 0 ? j : C.id - D.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      s = l.now();
    e.unstable_now = function () {
      return l.now() - s;
    };
  }
  var u = [],
    a = [],
    m = 1,
    p = null,
    f = 3,
    S = !1,
    v = !1,
    g = !1,
    E = typeof setTimeout == 'function' ? setTimeout : null,
    d = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var D = n(a); D !== null; ) {
      if (D.callback === null) r(a);
      else if (D.startTime <= C)
        r(a), (D.sortIndex = D.expirationTime), t(u, D);
      else break;
      D = n(a);
    }
  }
  function y(C) {
    if (((g = !1), h(C), !v))
      if (n(u) !== null) (v = !0), Ce(x);
      else {
        var D = n(a);
        D !== null && ae(y, D.startTime - C);
      }
  }
  function x(C, D) {
    (v = !1), g && ((g = !1), d(O), (O = -1)), (S = !0);
    var j = f;
    try {
      for (
        h(D), p = n(u);
        p !== null && (!(p.expirationTime > D) || (C && !V()));

      ) {
        var q = p.callback;
        if (typeof q == 'function') {
          (p.callback = null), (f = p.priorityLevel);
          var $ = q(p.expirationTime <= D);
          (D = e.unstable_now()),
            typeof $ == 'function' ? (p.callback = $) : p === n(u) && r(u),
            h(D);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var z = !0;
      else {
        var _ = n(a);
        _ !== null && ae(y, _.startTime - D), (z = !1);
      }
      return z;
    } finally {
      (p = null), (f = j), (S = !1);
    }
  }
  var P = !1,
    R = null,
    O = -1,
    A = 5,
    I = -1;
  function V() {
    return !(e.unstable_now() - I < A);
  }
  function K() {
    if (R !== null) {
      var C = e.unstable_now();
      I = C;
      var D = !0;
      try {
        D = R(!0, C);
      } finally {
        D ? ee() : ((P = !1), (R = null));
      }
    } else P = !1;
  }
  var ee;
  if (typeof c == 'function')
    ee = function () {
      c(K);
    };
  else if (typeof MessageChannel < 'u') {
    var ne = new MessageChannel(),
      se = ne.port2;
    (ne.port1.onmessage = K),
      (ee = function () {
        se.postMessage(null);
      });
  } else
    ee = function () {
      E(K, 0);
    };
  function Ce(C) {
    (R = C), P || ((P = !0), ee());
  }
  function ae(C, D) {
    O = E(function () {
      C(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || S || ((v = !0), Ce(x));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (A = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = f;
      }
      var j = f;
      f = D;
      try {
        return C();
      } finally {
        f = j;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var j = f;
      f = C;
      try {
        return D();
      } finally {
        f = j;
      }
    }),
    (e.unstable_scheduleCallback = function (C, D, j) {
      var q = e.unstable_now();
      switch (
        (typeof j == 'object' && j !== null
          ? ((j = j.delay), (j = typeof j == 'number' && 0 < j ? q + j : q))
          : (j = q),
        C)
      ) {
        case 1:
          var $ = -1;
          break;
        case 2:
          $ = 250;
          break;
        case 5:
          $ = 1073741823;
          break;
        case 4:
          $ = 1e4;
          break;
        default:
          $ = 5e3;
      }
      return (
        ($ = j + $),
        (C = {
          id: m++,
          callback: D,
          priorityLevel: C,
          startTime: j,
          expirationTime: $,
          sortIndex: -1,
        }),
        j > q
          ? ((C.sortIndex = j),
            t(a, C),
            n(u) === null &&
              C === n(a) &&
              (g ? (d(O), (O = -1)) : (g = !0), ae(y, j - q)))
          : ((C.sortIndex = $), t(u, C), v || S || ((v = !0), Ce(x))),
        C
      );
    }),
    (e.unstable_shouldYield = V),
    (e.unstable_wrapCallback = function (C) {
      var D = f;
      return function () {
        var j = f;
        f = D;
        try {
          return C.apply(this, arguments);
        } finally {
          f = j;
        }
      };
    });
})($f);
(function (e) {
  e.exports = $f;
})(Oh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tf = M,
  ot = cs;
function k(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Rf = new Set(),
  Qr = {};
function zn(e, t) {
  sr(e, t), sr(e + 'Capture', t);
}
function sr(e, t) {
  for (Qr[e] = t, e = 0; e < t.length; e++) Rf.add(t[e]);
}
var jt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  fs = Object.prototype.hasOwnProperty,
  zh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Na = {},
  Aa = {};
function Ih(e) {
  return fs.call(Aa, e)
    ? !0
    : fs.call(Na, e)
    ? !1
    : zh.test(e)
    ? (Aa[e] = !0)
    : ((Na[e] = !0), !1);
}
function Mh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Nh(e, t, n, r) {
  if (t === null || typeof t > 'u' || Mh(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var je = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    je[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  je[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  je[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  je[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    je[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  je[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  je[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  je[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  je[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var yu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(yu, vu);
    je[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(yu, vu);
    je[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(yu, vu);
  je[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  je[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
je.xlinkHref = new Ke(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  je[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function wu(e, t, n, r) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (Nh(t, n, o, r) && (n = null),
    r || o === null
      ? Ih(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : '') : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? '' : '' + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Wt = Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ko = Symbol.for('react.element'),
  Un = Symbol.for('react.portal'),
  bn = Symbol.for('react.fragment'),
  Su = Symbol.for('react.strict_mode'),
  ds = Symbol.for('react.profiler'),
  Of = Symbol.for('react.provider'),
  zf = Symbol.for('react.context'),
  xu = Symbol.for('react.forward_ref'),
  ps = Symbol.for('react.suspense'),
  hs = Symbol.for('react.suspense_list'),
  ku = Symbol.for('react.memo'),
  Kt = Symbol.for('react.lazy'),
  If = Symbol.for('react.offscreen'),
  La = Symbol.iterator;
function xr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (La && e[La]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ye = Object.assign,
  Il;
function zr(e) {
  if (Il === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Il = (t && t[1]) || '';
    }
  return (
    `
` +
    Il +
    e
  );
}
var Ml = !1;
function Nl(e, t) {
  if (!e || Ml) return '';
  Ml = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (a) {
          var r = a;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (a) {
          r = a;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (a) {
        r = a;
      }
      e();
    }
  } catch (a) {
    if (a && r && typeof a.stack == 'string') {
      for (
        var o = a.stack.split(`
`),
          i = r.stack.split(`
`),
          l = o.length - 1,
          s = i.length - 1;
        1 <= l && 0 <= s && o[l] !== i[s];

      )
        s--;
      for (; 1 <= l && 0 <= s; l--, s--)
        if (o[l] !== i[s]) {
          if (l !== 1 || s !== 1)
            do
              if ((l--, s--, 0 > s || o[l] !== i[s])) {
                var u =
                  `
` + o[l].replace(' at new ', ' at ');
                return (
                  e.displayName &&
                    u.includes('<anonymous>') &&
                    (u = u.replace('<anonymous>', e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (Ml = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? zr(e) : '';
}
function Ah(e) {
  switch (e.tag) {
    case 5:
      return zr(e.type);
    case 16:
      return zr('Lazy');
    case 13:
      return zr('Suspense');
    case 19:
      return zr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return '';
  }
}
function ms(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case bn:
      return 'Fragment';
    case Un:
      return 'Portal';
    case ds:
      return 'Profiler';
    case Su:
      return 'StrictMode';
    case ps:
      return 'Suspense';
    case hs:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case zf:
        return (e.displayName || 'Context') + '.Consumer';
      case Of:
        return (e._context.displayName || 'Context') + '.Provider';
      case xu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case ku:
        return (
          (t = e.displayName || null), t !== null ? t : ms(e.type) || 'Memo'
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return ms(e(t));
        } catch {}
    }
  return null;
}
function Lh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ms(t);
    case 8:
      return t === Su ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function un(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Mf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Dh(e) {
  var t = Mf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (l) {
          (r = '' + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = '' + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Co(e) {
  e._valueTracker || (e._valueTracker = Dh(e));
}
function Nf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Mf(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function si(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gs(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Da(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function Af(e, t) {
  (t = t.checked), t != null && wu(e, 'checked', t, !1);
}
function ys(e, t) {
  Af(e, t);
  var n = un(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value')
    ? vs(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && vs(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ja(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function vs(e, t, n) {
  (t !== 'number' || si(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Ir = Array.isArray;
function er(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ws(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Fa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (Ir(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Lf(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ba(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Df(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ss(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Df(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Eo,
  jf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t;
    else {
      for (
        Eo = Eo || document.createElement('div'),
          Eo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Eo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Yr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ar = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  jh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Ar).forEach(function (e) {
  jh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ar[t] = Ar[e]);
  });
});
function Ff(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Ar.hasOwnProperty(e) && Ar[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Bf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Ff(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Fh = ye(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xs(e, t) {
  if (t) {
    if (Fh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(k(62));
  }
}
function ks(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var Cs = null;
function Cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Es = null,
  tr = null,
  nr = null;
function Ua(e) {
  if ((e = go(e))) {
    if (typeof Es != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Bi(t)), Es(e.stateNode, e.type, t));
  }
}
function Uf(e) {
  tr ? (nr ? nr.push(e) : (nr = [e])) : (tr = e);
}
function bf() {
  if (tr) {
    var e = tr,
      t = nr;
    if (((nr = tr = null), Ua(e), t)) for (e = 0; e < t.length; e++) Ua(t[e]);
  }
}
function Wf(e, t) {
  return e(t);
}
function Vf() {}
var Al = !1;
function Hf(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return Wf(e, t, n);
  } finally {
    (Al = !1), (tr !== null || nr !== null) && (Vf(), bf());
  }
}
function Gr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Bi(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(k(231, t, typeof n));
  return n;
}
var Ps = !1;
if (jt)
  try {
    var kr = {};
    Object.defineProperty(kr, 'passive', {
      get: function () {
        Ps = !0;
      },
    }),
      window.addEventListener('test', kr, kr),
      window.removeEventListener('test', kr, kr);
  } catch {
    Ps = !1;
  }
function Bh(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Lr = !1,
  ui = null,
  ai = !1,
  _s = null,
  Uh = {
    onError: function (e) {
      (Lr = !0), (ui = e);
    },
  };
function bh(e, t, n, r, o, i, l, s, u) {
  (Lr = !1), (ui = null), Bh.apply(Uh, arguments);
}
function Wh(e, t, n, r, o, i, l, s, u) {
  if ((bh.apply(this, arguments), Lr)) {
    if (Lr) {
      var a = ui;
      (Lr = !1), (ui = null);
    } else throw Error(k(198));
    ai || ((ai = !0), (_s = a));
  }
}
function In(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Kf(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ba(e) {
  if (In(e) !== e) throw Error(k(188));
}
function Vh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = In(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return ba(o), e;
        if (i === r) return ba(o), t;
        i = i.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var l = !1, s = o.child; s; ) {
        if (s === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (s === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        s = s.sibling;
      }
      if (!l) {
        for (s = i.child; s; ) {
          if (s === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (s === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          s = s.sibling;
        }
        if (!l) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function Qf(e) {
  return (e = Vh(e)), e !== null ? Yf(e) : null;
}
function Yf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gf = ot.unstable_scheduleCallback,
  Wa = ot.unstable_cancelCallback,
  Hh = ot.unstable_shouldYield,
  Kh = ot.unstable_requestPaint,
  Pe = ot.unstable_now,
  Qh = ot.unstable_getCurrentPriorityLevel,
  Eu = ot.unstable_ImmediatePriority,
  Xf = ot.unstable_UserBlockingPriority,
  ci = ot.unstable_NormalPriority,
  Yh = ot.unstable_LowPriority,
  Zf = ot.unstable_IdlePriority,
  Li = null,
  Rt = null;
function Gh(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == 'function')
    try {
      Rt.onCommitFiberRoot(Li, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : Jh,
  Xh = Math.log,
  Zh = Math.LN2;
function Jh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Xh(e) / Zh) | 0)) | 0;
}
var Po = 64,
  _o = 4194304;
function Mr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function fi(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Mr(s)) : ((i &= l), i !== 0 && (r = Mr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Mr(l)) : i !== 0 && (r = Mr(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function qh(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function em(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - xt(i),
      s = 1 << l,
      u = o[l];
    u === -1
      ? (!(s & n) || s & r) && (o[l] = qh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function $s(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Jf() {
  var e = Po;
  return (Po <<= 1), !(Po & 4194240) && (Po = 64), e;
}
function Ll(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ho(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function tm(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - xt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function Pu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var re = 0;
function qf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ed,
  _u,
  td,
  nd,
  rd,
  Ts = !1,
  $o = [],
  Jt = null,
  qt = null,
  en = null,
  Xr = new Map(),
  Zr = new Map(),
  Yt = [],
  nm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Va(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Jt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      qt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      en = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Xr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Zr.delete(t.pointerId);
  }
}
function Cr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = go(t)), t !== null && _u(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function rm(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Jt = Cr(Jt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (qt = Cr(qt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (en = Cr(en, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Xr.set(i, Cr(Xr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Zr.set(i, Cr(Zr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function od(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = In(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Kf(n)), t !== null)) {
          (e.blockedOn = t),
            rd(e.priority, function () {
              td(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Yo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Rs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Cs = r), n.target.dispatchEvent(r), (Cs = null);
    } else return (t = go(n)), t !== null && _u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ha(e, t, n) {
  Yo(e) && n.delete(t);
}
function om() {
  (Ts = !1),
    Jt !== null && Yo(Jt) && (Jt = null),
    qt !== null && Yo(qt) && (qt = null),
    en !== null && Yo(en) && (en = null),
    Xr.forEach(Ha),
    Zr.forEach(Ha);
}
function Er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ts ||
      ((Ts = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, om)));
}
function Jr(e) {
  function t(o) {
    return Er(o, e);
  }
  if (0 < $o.length) {
    Er($o[0], e);
    for (var n = 1; n < $o.length; n++) {
      var r = $o[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && Er(Jt, e),
      qt !== null && Er(qt, e),
      en !== null && Er(en, e),
      Xr.forEach(t),
      Zr.forEach(t),
      n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
    od(n), n.blockedOn === null && Yt.shift();
}
var rr = Wt.ReactCurrentBatchConfig,
  di = !0;
function im(e, t, n, r) {
  var o = re,
    i = rr.transition;
  rr.transition = null;
  try {
    (re = 1), $u(e, t, n, r);
  } finally {
    (re = o), (rr.transition = i);
  }
}
function lm(e, t, n, r) {
  var o = re,
    i = rr.transition;
  rr.transition = null;
  try {
    (re = 4), $u(e, t, n, r);
  } finally {
    (re = o), (rr.transition = i);
  }
}
function $u(e, t, n, r) {
  if (di) {
    var o = Rs(e, t, n, r);
    if (o === null) Kl(e, t, r, pi, n), Va(e, r);
    else if (rm(o, e, t, n, r)) r.stopPropagation();
    else if ((Va(e, r), t & 4 && -1 < nm.indexOf(e))) {
      for (; o !== null; ) {
        var i = go(o);
        if (
          (i !== null && ed(i),
          (i = Rs(e, t, n, r)),
          i === null && Kl(e, t, r, pi, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Kl(e, t, r, null, n);
  }
}
var pi = null;
function Rs(e, t, n, r) {
  if (((pi = null), (e = Cu(r)), (e = vn(e)), e !== null))
    if (((t = In(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Kf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (pi = e), null;
}
function id(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Qh()) {
        case Eu:
          return 1;
        case Xf:
          return 4;
        case ci:
        case Yh:
          return 16;
        case Zf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  Tu = null,
  Go = null;
function ld() {
  if (Go) return Go;
  var e,
    t = Tu,
    n = t.length,
    r,
    o = 'value' in Xt ? Xt.value : Xt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Go = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Xo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function To() {
  return !0;
}
function Ka() {
  return !1;
}
function lt(e) {
  function t(n, r, o, i, l) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = l),
      (this.currentTarget = null);
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? To
        : Ka),
      (this.isPropagationStopped = Ka),
      this
    );
  }
  return (
    ye(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = To));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = To));
      },
      persist: function () {},
      isPersistent: To,
    }),
    t
  );
}
var vr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Ru = lt(vr),
  mo = ye({}, vr, { view: 0, detail: 0 }),
  sm = lt(mo),
  Dl,
  jl,
  Pr,
  Di = ye({}, mo, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ou,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== Pr &&
            (Pr && e.type === 'mousemove'
              ? ((Dl = e.screenX - Pr.screenX), (jl = e.screenY - Pr.screenY))
              : (jl = Dl = 0),
            (Pr = e)),
          Dl);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : jl;
    },
  }),
  Qa = lt(Di),
  um = ye({}, Di, { dataTransfer: 0 }),
  am = lt(um),
  cm = ye({}, mo, { relatedTarget: 0 }),
  Fl = lt(cm),
  fm = ye({}, vr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dm = lt(fm),
  pm = ye({}, vr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  hm = lt(pm),
  mm = ye({}, vr, { data: 0 }),
  Ya = lt(mm),
  gm = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  ym = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  vm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function wm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = vm[e]) ? !!t[e] : !1;
}
function Ou() {
  return wm;
}
var Sm = ye({}, mo, {
    key: function (e) {
      if (e.key) {
        var t = gm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Xo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? ym[e.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ou,
    charCode: function (e) {
      return e.type === 'keypress' ? Xo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Xo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  xm = lt(Sm),
  km = ye({}, Di, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Ga = lt(km),
  Cm = ye({}, mo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ou,
  }),
  Em = lt(Cm),
  Pm = ye({}, vr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  _m = lt(Pm),
  $m = ye({}, Di, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
        ? -e.wheelDeltaY
        : 'wheelDelta' in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Tm = lt($m),
  Rm = [9, 13, 27, 32],
  zu = jt && 'CompositionEvent' in window,
  Dr = null;
jt && 'documentMode' in document && (Dr = document.documentMode);
var Om = jt && 'TextEvent' in window && !Dr,
  sd = jt && (!zu || (Dr && 8 < Dr && 11 >= Dr)),
  Xa = String.fromCharCode(32),
  Za = !1;
function ud(e, t) {
  switch (e) {
    case 'keyup':
      return Rm.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function ad(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var Wn = !1;
function zm(e, t) {
  switch (e) {
    case 'compositionend':
      return ad(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Za = !0), Xa);
    case 'textInput':
      return (e = t.data), e === Xa && Za ? null : e;
    default:
      return null;
  }
}
function Im(e, t) {
  if (Wn)
    return e === 'compositionend' || (!zu && ud(e, t))
      ? ((e = ld()), (Go = Tu = Xt = null), (Wn = !1), e)
      : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return sd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Mm = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Ja(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Mm[e.type] : t === 'textarea';
}
function cd(e, t, n, r) {
  Uf(r),
    (t = hi(t, 'onChange')),
    0 < t.length &&
      ((n = new Ru('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var jr = null,
  qr = null;
function Nm(e) {
  xd(e, 0);
}
function ji(e) {
  var t = Kn(e);
  if (Nf(t)) return e;
}
function Am(e, t) {
  if (e === 'change') return t;
}
var fd = !1;
if (jt) {
  var Bl;
  if (jt) {
    var Ul = 'oninput' in document;
    if (!Ul) {
      var qa = document.createElement('div');
      qa.setAttribute('oninput', 'return;'),
        (Ul = typeof qa.oninput == 'function');
    }
    Bl = Ul;
  } else Bl = !1;
  fd = Bl && (!document.documentMode || 9 < document.documentMode);
}
function ec() {
  jr && (jr.detachEvent('onpropertychange', dd), (qr = jr = null));
}
function dd(e) {
  if (e.propertyName === 'value' && ji(qr)) {
    var t = [];
    cd(t, qr, e, Cu(e)), Hf(Nm, t);
  }
}
function Lm(e, t, n) {
  e === 'focusin'
    ? (ec(), (jr = t), (qr = n), jr.attachEvent('onpropertychange', dd))
    : e === 'focusout' && ec();
}
function Dm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return ji(qr);
}
function jm(e, t) {
  if (e === 'click') return ji(t);
}
function Fm(e, t) {
  if (e === 'input' || e === 'change') return ji(t);
}
function Bm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == 'function' ? Object.is : Bm;
function eo(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!fs.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function tc(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function nc(e, t) {
  var n = tc(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = tc(n);
  }
}
function pd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? pd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function hd() {
  for (var e = window, t = si(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = si(e.document);
  }
  return t;
}
function Iu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Um(e) {
  var t = hd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    pd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Iu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = nc(n, i));
        var l = nc(n, r);
        o &&
          l &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== l.node ||
            e.focusOffset !== l.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(l.node, l.offset))
            : (t.setEnd(l.node, l.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var bm = jt && 'documentMode' in document && 11 >= document.documentMode,
  Vn = null,
  Os = null,
  Fr = null,
  zs = !1;
function rc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zs ||
    Vn == null ||
    Vn !== si(r) ||
    ((r = Vn),
    'selectionStart' in r && Iu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && eo(Fr, r)) ||
      ((Fr = r),
      (r = hi(Os, 'onSelect')),
      0 < r.length &&
        ((t = new Ru('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Vn))));
}
function Ro(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Hn = {
    animationend: Ro('Animation', 'AnimationEnd'),
    animationiteration: Ro('Animation', 'AnimationIteration'),
    animationstart: Ro('Animation', 'AnimationStart'),
    transitionend: Ro('Transition', 'TransitionEnd'),
  },
  bl = {},
  md = {};
jt &&
  ((md = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Hn.animationend.animation,
    delete Hn.animationiteration.animation,
    delete Hn.animationstart.animation),
  'TransitionEvent' in window || delete Hn.transitionend.transition);
function Fi(e) {
  if (bl[e]) return bl[e];
  if (!Hn[e]) return e;
  var t = Hn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in md) return (bl[e] = t[n]);
  return e;
}
var gd = Fi('animationend'),
  yd = Fi('animationiteration'),
  vd = Fi('animationstart'),
  wd = Fi('transitionend'),
  Sd = new Map(),
  oc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function cn(e, t) {
  Sd.set(e, t), zn(t, [e]);
}
for (var Wl = 0; Wl < oc.length; Wl++) {
  var Vl = oc[Wl],
    Wm = Vl.toLowerCase(),
    Vm = Vl[0].toUpperCase() + Vl.slice(1);
  cn(Wm, 'on' + Vm);
}
cn(gd, 'onAnimationEnd');
cn(yd, 'onAnimationIteration');
cn(vd, 'onAnimationStart');
cn('dblclick', 'onDoubleClick');
cn('focusin', 'onFocus');
cn('focusout', 'onBlur');
cn(wd, 'onTransitionEnd');
sr('onMouseEnter', ['mouseout', 'mouseover']);
sr('onMouseLeave', ['mouseout', 'mouseover']);
sr('onPointerEnter', ['pointerout', 'pointerover']);
sr('onPointerLeave', ['pointerout', 'pointerover']);
zn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
zn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
zn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
zn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
zn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
zn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Nr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Hm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Nr));
function ic(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Wh(r, t, void 0, e), (e.currentTarget = null);
}
function xd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var l = r.length - 1; 0 <= l; l--) {
          var s = r[l],
            u = s.instance,
            a = s.currentTarget;
          if (((s = s.listener), u !== i && o.isPropagationStopped())) break e;
          ic(o, s, a), (i = u);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((s = r[l]),
            (u = s.instance),
            (a = s.currentTarget),
            (s = s.listener),
            u !== i && o.isPropagationStopped())
          )
            break e;
          ic(o, s, a), (i = u);
        }
    }
  }
  if (ai) throw ((e = _s), (ai = !1), (_s = null), e);
}
function ce(e, t) {
  var n = t[Ls];
  n === void 0 && (n = t[Ls] = new Set());
  var r = e + '__bubble';
  n.has(r) || (kd(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), kd(n, e, r, t);
}
var Oo = '_reactListening' + Math.random().toString(36).slice(2);
function to(e) {
  if (!e[Oo]) {
    (e[Oo] = !0),
      Rf.forEach(function (n) {
        n !== 'selectionchange' && (Hm.has(n) || Hl(n, !1, e), Hl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Oo] || ((t[Oo] = !0), Hl('selectionchange', !1, t));
  }
}
function kd(e, t, n, r) {
  switch (id(t)) {
    case 1:
      var o = im;
      break;
    case 4:
      o = lm;
      break;
    default:
      o = $u;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ps ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function Kl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var s = r.stateNode.containerInfo;
        if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var u = l.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = l.stateNode.containerInfo),
              u === o || (u.nodeType === 8 && u.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; s !== null; ) {
          if (((l = vn(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Hf(function () {
    var a = i,
      m = Cu(n),
      p = [];
    e: {
      var f = Sd.get(e);
      if (f !== void 0) {
        var S = Ru,
          v = e;
        switch (e) {
          case 'keypress':
            if (Xo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = xm;
            break;
          case 'focusin':
            (v = 'focus'), (S = Fl);
            break;
          case 'focusout':
            (v = 'blur'), (S = Fl);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = Fl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            S = Qa;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = am;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = Em;
            break;
          case gd:
          case yd:
          case vd:
            S = dm;
            break;
          case wd:
            S = _m;
            break;
          case 'scroll':
            S = sm;
            break;
          case 'wheel':
            S = Tm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = hm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = Ga;
        }
        var g = (t & 4) !== 0,
          E = !g && e === 'scroll',
          d = g ? (f !== null ? f + 'Capture' : null) : f;
        g = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var y = h.stateNode;
          if (
            (h.tag === 5 &&
              y !== null &&
              ((h = y),
              d !== null && ((y = Gr(c, d)), y != null && g.push(no(c, y, h)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((f = new S(f, v, null, n, m)), p.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== Cs &&
            (v = n.relatedTarget || n.fromElement) &&
            (vn(v) || v[Ft]))
        )
          break e;
        if (
          (S || f) &&
          ((f =
            m.window === m
              ? m
              : (f = m.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          S
            ? ((v = n.relatedTarget || n.toElement),
              (S = a),
              (v = v ? vn(v) : null),
              v !== null &&
                ((E = In(v)), v !== E || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((S = null), (v = a)),
          S !== v)
        ) {
          if (
            ((g = Qa),
            (y = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = Ga),
              (y = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (E = S == null ? f : Kn(S)),
            (h = v == null ? f : Kn(v)),
            (f = new g(y, c + 'leave', S, n, m)),
            (f.target = E),
            (f.relatedTarget = h),
            (y = null),
            vn(m) === a &&
              ((g = new g(d, c + 'enter', v, n, m)),
              (g.target = h),
              (g.relatedTarget = E),
              (y = g)),
            (E = y),
            S && v)
          )
            t: {
              for (g = S, d = v, c = 0, h = g; h; h = An(h)) c++;
              for (h = 0, y = d; y; y = An(y)) h++;
              for (; 0 < c - h; ) (g = An(g)), c--;
              for (; 0 < h - c; ) (d = An(d)), h--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = An(g)), (d = An(d));
              }
              g = null;
            }
          else g = null;
          S !== null && lc(p, f, S, g, !1),
            v !== null && E !== null && lc(p, E, v, g, !0);
        }
      }
      e: {
        if (
          ((f = a ? Kn(a) : window),
          (S = f.nodeName && f.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && f.type === 'file'))
        )
          var x = Am;
        else if (Ja(f))
          if (fd) x = Fm;
          else {
            x = Dm;
            var P = Lm;
          }
        else
          (S = f.nodeName) &&
            S.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (x = jm);
        if (x && (x = x(e, a))) {
          cd(p, x, n, m);
          break e;
        }
        P && P(e, f, a),
          e === 'focusout' &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === 'number' &&
            vs(f, 'number', f.value);
      }
      switch (((P = a ? Kn(a) : window), e)) {
        case 'focusin':
          (Ja(P) || P.contentEditable === 'true') &&
            ((Vn = P), (Os = a), (Fr = null));
          break;
        case 'focusout':
          Fr = Os = Vn = null;
          break;
        case 'mousedown':
          zs = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (zs = !1), rc(p, n, m);
          break;
        case 'selectionchange':
          if (bm) break;
        case 'keydown':
        case 'keyup':
          rc(p, n, m);
      }
      var R;
      if (zu)
        e: {
          switch (e) {
            case 'compositionstart':
              var O = 'onCompositionStart';
              break e;
            case 'compositionend':
              O = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              O = 'onCompositionUpdate';
              break e;
          }
          O = void 0;
        }
      else
        Wn
          ? ud(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (sd &&
          n.locale !== 'ko' &&
          (Wn || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && Wn && (R = ld())
            : ((Xt = m),
              (Tu = 'value' in Xt ? Xt.value : Xt.textContent),
              (Wn = !0))),
        (P = hi(a, O)),
        0 < P.length &&
          ((O = new Ya(O, e, null, n, m)),
          p.push({ event: O, listeners: P }),
          R ? (O.data = R) : ((R = ad(n)), R !== null && (O.data = R)))),
        (R = Om ? zm(e, n) : Im(e, n)) &&
          ((a = hi(a, 'onBeforeInput')),
          0 < a.length &&
            ((m = new Ya('onBeforeInput', 'beforeinput', null, n, m)),
            p.push({ event: m, listeners: a }),
            (m.data = R)));
    }
    xd(p, t);
  });
}
function no(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function hi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Gr(e, n)),
      i != null && r.unshift(no(e, i, o)),
      (i = Gr(e, t)),
      i != null && r.push(no(e, i, o))),
      (e = e.return);
  }
  return r;
}
function An(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function lc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Gr(n, i)), u != null && l.unshift(no(n, u, s)))
        : o || ((u = Gr(n, i)), u != null && l.push(no(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Km = /\r\n?/g,
  Qm = /\u0000|\uFFFD/g;
function sc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Km,
      `
`
    )
    .replace(Qm, '');
}
function zo(e, t, n) {
  if (((t = sc(t)), sc(e) !== t && n)) throw Error(k(425));
}
function mi() {}
var Is = null,
  Ms = null;
function Ns(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var As = typeof setTimeout == 'function' ? setTimeout : void 0,
  Ym = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  uc = typeof Promise == 'function' ? Promise : void 0,
  Gm =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof uc < 'u'
      ? function (e) {
          return uc.resolve(null).then(e).catch(Xm);
        }
      : As;
function Xm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ql(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Jr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Jr(t);
}
function tn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function ac(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var wr = Math.random().toString(36).slice(2),
  $t = '__reactFiber$' + wr,
  ro = '__reactProps$' + wr,
  Ft = '__reactContainer$' + wr,
  Ls = '__reactEvents$' + wr,
  Zm = '__reactListeners$' + wr,
  Jm = '__reactHandles$' + wr;
function vn(e) {
  var t = e[$t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[$t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ac(e); e !== null; ) {
          if ((n = e[$t])) return n;
          e = ac(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function go(e) {
  return (
    (e = e[$t] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Bi(e) {
  return e[ro] || null;
}
var Ds = [],
  Qn = -1;
function fn(e) {
  return { current: e };
}
function fe(e) {
  0 > Qn || ((e.current = Ds[Qn]), (Ds[Qn] = null), Qn--);
}
function ue(e, t) {
  Qn++, (Ds[Qn] = e.current), (e.current = t);
}
var an = {},
  be = fn(an),
  Xe = fn(!1),
  Pn = an;
function ur(e, t) {
  var n = e.type.contextTypes;
  if (!n) return an;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function gi() {
  fe(Xe), fe(be);
}
function cc(e, t, n) {
  if (be.current !== an) throw Error(k(168));
  ue(be, t), ue(Xe, n);
}
function Cd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, Lh(e) || 'Unknown', o));
  return ye({}, n, r);
}
function yi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    (Pn = be.current),
    ue(be, e),
    ue(Xe, Xe.current),
    !0
  );
}
function fc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Cd(e, t, Pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(Xe),
      fe(be),
      ue(be, e))
    : fe(Xe),
    ue(Xe, n);
}
var It = null,
  Ui = !1,
  Yl = !1;
function Ed(e) {
  It === null ? (It = [e]) : It.push(e);
}
function qm(e) {
  (Ui = !0), Ed(e);
}
function dn() {
  if (!Yl && It !== null) {
    Yl = !0;
    var e = 0,
      t = re;
    try {
      var n = It;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (It = null), (Ui = !1);
    } catch (o) {
      throw (It !== null && (It = It.slice(e + 1)), Gf(Eu, dn), o);
    } finally {
      (re = t), (Yl = !1);
    }
  }
  return null;
}
var Yn = [],
  Gn = 0,
  vi = null,
  wi = 0,
  at = [],
  ct = 0,
  _n = null,
  Mt = 1,
  Nt = '';
function mn(e, t) {
  (Yn[Gn++] = wi), (Yn[Gn++] = vi), (vi = e), (wi = t);
}
function Pd(e, t, n) {
  (at[ct++] = Mt), (at[ct++] = Nt), (at[ct++] = _n), (_n = e);
  var r = Mt;
  e = Nt;
  var o = 32 - xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Mt = (1 << (32 - xt(t) + o)) | (n << o) | r),
      (Nt = i + e);
  } else (Mt = (1 << i) | (n << o) | r), (Nt = e);
}
function Mu(e) {
  e.return !== null && (mn(e, 1), Pd(e, 1, 0));
}
function Nu(e) {
  for (; e === vi; )
    (vi = Yn[--Gn]), (Yn[Gn] = null), (wi = Yn[--Gn]), (Yn[Gn] = null);
  for (; e === _n; )
    (_n = at[--ct]),
      (at[ct] = null),
      (Nt = at[--ct]),
      (at[ct] = null),
      (Mt = at[--ct]),
      (at[ct] = null);
}
var rt = null,
  nt = null,
  pe = !1,
  St = null;
function _d(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function dc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = tn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = _n !== null ? { id: Mt, overflow: Nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = dt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function js(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Fs(e) {
  if (pe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!dc(e, t)) {
        if (js(e)) throw Error(k(418));
        t = tn(n.nextSibling);
        var r = rt;
        t && dc(e, t)
          ? _d(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e));
      }
    } else {
      if (js(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e);
    }
  }
}
function pc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function Io(e) {
  if (e !== rt) return !1;
  if (!pe) return pc(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ns(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (js(e)) throw ($d(), Error(k(418)));
    for (; t; ) _d(e, t), (t = tn(t.nextSibling));
  }
  if ((pc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              nt = tn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? tn(e.stateNode.nextSibling) : null;
  return !0;
}
function $d() {
  for (var e = nt; e; ) e = tn(e.nextSibling);
}
function ar() {
  (nt = rt = null), (pe = !1);
}
function Au(e) {
  St === null ? (St = [e]) : St.push(e);
}
var e0 = Wt.ReactCurrentBatchConfig;
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Si = fn(null),
  xi = null,
  Xn = null,
  Lu = null;
function Du() {
  Lu = Xn = xi = null;
}
function ju(e) {
  var t = Si.current;
  fe(Si), (e._currentValue = t);
}
function Bs(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function or(e, t) {
  (xi = e),
    (Lu = Xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (Lu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
      if (xi === null) throw Error(k(308));
      (Xn = e), (xi.dependencies = { lanes: 0, firstContext: e });
    } else Xn = Xn.next = e;
  return t;
}
var wn = null;
function Fu(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function Td(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Fu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Bt(e, r)
  );
}
function Bt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Qt = !1;
function Bu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Rd(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Lt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function nn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Bt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Fu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function Zo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n);
  }
}
function hc(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var l = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function ki(e, t, n, r) {
  var o = e.updateQueue;
  Qt = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    s = o.shared.pending;
  if (s !== null) {
    o.shared.pending = null;
    var u = s,
      a = u.next;
    (u.next = null), l === null ? (i = a) : (l.next = a), (l = u);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (s = m.lastBaseUpdate),
      s !== l &&
        (s === null ? (m.firstBaseUpdate = a) : (s.next = a),
        (m.lastBaseUpdate = u)));
  }
  if (i !== null) {
    var p = o.baseState;
    (l = 0), (m = a = u = null), (s = i);
    do {
      var f = s.lane,
        S = s.eventTime;
      if ((r & f) === f) {
        m !== null &&
          (m = m.next =
            {
              eventTime: S,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var v = e,
            g = s;
          switch (((f = t), (S = n), g.tag)) {
            case 1:
              if (((v = g.payload), typeof v == 'function')) {
                p = v.call(S, p, f);
                break e;
              }
              p = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = g.payload),
                (f = typeof v == 'function' ? v.call(S, p, f) : v),
                f == null)
              )
                break e;
              p = ye({}, p, f);
              break e;
            case 2:
              Qt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (f = o.effects),
          f === null ? (o.effects = [s]) : f.push(s));
      } else
        (S = {
          eventTime: S,
          lane: f,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((a = m = S), (u = p)) : (m = m.next = S),
          (l |= f);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (f = s),
          (s = f.next),
          (f.next = null),
          (o.lastBaseUpdate = f),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (u = p),
      (o.baseState = u),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (Tn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function mc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(k(191, o));
        o.call(r);
      }
    }
}
var Od = new Tf.Component().refs;
function Us(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var bi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = on(e),
      i = Lt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = nn(e, i, o)),
      t !== null && (kt(t, e, o, r), Zo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = on(e),
      i = Lt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = nn(e, i, o)),
      t !== null && (kt(t, e, o, r), Zo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = on(e),
      o = Lt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = nn(e, o, r)),
      t !== null && (kt(t, e, r, n), Zo(t, e, r));
  },
};
function gc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !eo(n, r) || !eo(o, i)
      : !0
  );
}
function zd(e, t, n) {
  var r = !1,
    o = an,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = ht(i))
      : ((o = Ze(t) ? Pn : be.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ur(e, o) : an)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = bi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function yc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && bi.enqueueReplaceState(t, t.state, null);
}
function bs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = Od), Bu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = ht(i))
    : ((i = Ze(t) ? Pn : be.current), (o.context = ur(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Us(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && bi.enqueueReplaceState(o, o.state, null),
      ki(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function _r(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === Od && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Mo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function vc(e) {
  var t = e._init;
  return t(e._payload);
}
function Id(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function o(d, c) {
    return (d = ln(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, c, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function l(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function s(d, c, h, y) {
    return c === null || c.tag !== 6
      ? ((c = ts(h, d.mode, y)), (c.return = d), c)
      : ((c = o(c, h)), (c.return = d), c);
  }
  function u(d, c, h, y) {
    var x = h.type;
    return x === bn
      ? m(d, c, h.props.children, y, h.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === Kt &&
            vc(x) === c.type))
      ? ((y = o(c, h.props)), (y.ref = _r(d, c, h)), (y.return = d), y)
      : ((y = ri(h.type, h.key, h.props, null, d.mode, y)),
        (y.ref = _r(d, c, h)),
        (y.return = d),
        y);
  }
  function a(d, c, h, y) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = ns(h, d.mode, y)), (c.return = d), c)
      : ((c = o(c, h.children || [])), (c.return = d), c);
  }
  function m(d, c, h, y, x) {
    return c === null || c.tag !== 7
      ? ((c = Cn(h, d.mode, y, x)), (c.return = d), c)
      : ((c = o(c, h)), (c.return = d), c);
  }
  function p(d, c, h) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = ts('' + c, d.mode, h)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case ko:
          return (
            (h = ri(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = _r(d, null, c)),
            (h.return = d),
            h
          );
        case Un:
          return (c = ns(c, d.mode, h)), (c.return = d), c;
        case Kt:
          var y = c._init;
          return p(d, y(c._payload), h);
      }
      if (Ir(c) || xr(c))
        return (c = Cn(c, d.mode, h, null)), (c.return = d), c;
      Mo(d, c);
    }
    return null;
  }
  function f(d, c, h, y) {
    var x = c !== null ? c.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return x !== null ? null : s(d, c, '' + h, y);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case ko:
          return h.key === x ? u(d, c, h, y) : null;
        case Un:
          return h.key === x ? a(d, c, h, y) : null;
        case Kt:
          return (x = h._init), f(d, c, x(h._payload), y);
      }
      if (Ir(h) || xr(h)) return x !== null ? null : m(d, c, h, y, null);
      Mo(d, h);
    }
    return null;
  }
  function S(d, c, h, y, x) {
    if ((typeof y == 'string' && y !== '') || typeof y == 'number')
      return (d = d.get(h) || null), s(c, d, '' + y, x);
    if (typeof y == 'object' && y !== null) {
      switch (y.$$typeof) {
        case ko:
          return (d = d.get(y.key === null ? h : y.key) || null), u(c, d, y, x);
        case Un:
          return (d = d.get(y.key === null ? h : y.key) || null), a(c, d, y, x);
        case Kt:
          var P = y._init;
          return S(d, c, h, P(y._payload), x);
      }
      if (Ir(y) || xr(y)) return (d = d.get(h) || null), m(c, d, y, x, null);
      Mo(c, y);
    }
    return null;
  }
  function v(d, c, h, y) {
    for (
      var x = null, P = null, R = c, O = (c = 0), A = null;
      R !== null && O < h.length;
      O++
    ) {
      R.index > O ? ((A = R), (R = null)) : (A = R.sibling);
      var I = f(d, R, h[O], y);
      if (I === null) {
        R === null && (R = A);
        break;
      }
      e && R && I.alternate === null && t(d, R),
        (c = i(I, c, O)),
        P === null ? (x = I) : (P.sibling = I),
        (P = I),
        (R = A);
    }
    if (O === h.length) return n(d, R), pe && mn(d, O), x;
    if (R === null) {
      for (; O < h.length; O++)
        (R = p(d, h[O], y)),
          R !== null &&
            ((c = i(R, c, O)), P === null ? (x = R) : (P.sibling = R), (P = R));
      return pe && mn(d, O), x;
    }
    for (R = r(d, R); O < h.length; O++)
      (A = S(R, d, O, h[O], y)),
        A !== null &&
          (e && A.alternate !== null && R.delete(A.key === null ? O : A.key),
          (c = i(A, c, O)),
          P === null ? (x = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        R.forEach(function (V) {
          return t(d, V);
        }),
      pe && mn(d, O),
      x
    );
  }
  function g(d, c, h, y) {
    var x = xr(h);
    if (typeof x != 'function') throw Error(k(150));
    if (((h = x.call(h)), h == null)) throw Error(k(151));
    for (
      var P = (x = null), R = c, O = (c = 0), A = null, I = h.next();
      R !== null && !I.done;
      O++, I = h.next()
    ) {
      R.index > O ? ((A = R), (R = null)) : (A = R.sibling);
      var V = f(d, R, I.value, y);
      if (V === null) {
        R === null && (R = A);
        break;
      }
      e && R && V.alternate === null && t(d, R),
        (c = i(V, c, O)),
        P === null ? (x = V) : (P.sibling = V),
        (P = V),
        (R = A);
    }
    if (I.done) return n(d, R), pe && mn(d, O), x;
    if (R === null) {
      for (; !I.done; O++, I = h.next())
        (I = p(d, I.value, y)),
          I !== null &&
            ((c = i(I, c, O)), P === null ? (x = I) : (P.sibling = I), (P = I));
      return pe && mn(d, O), x;
    }
    for (R = r(d, R); !I.done; O++, I = h.next())
      (I = S(R, d, O, I.value, y)),
        I !== null &&
          (e && I.alternate !== null && R.delete(I.key === null ? O : I.key),
          (c = i(I, c, O)),
          P === null ? (x = I) : (P.sibling = I),
          (P = I));
    return (
      e &&
        R.forEach(function (K) {
          return t(d, K);
        }),
      pe && mn(d, O),
      x
    );
  }
  function E(d, c, h, y) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === bn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case ko:
          e: {
            for (var x = h.key, P = c; P !== null; ) {
              if (P.key === x) {
                if (((x = h.type), x === bn)) {
                  if (P.tag === 7) {
                    n(d, P.sibling),
                      (c = o(P, h.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  P.elementType === x ||
                  (typeof x == 'object' &&
                    x !== null &&
                    x.$$typeof === Kt &&
                    vc(x) === P.type)
                ) {
                  n(d, P.sibling),
                    (c = o(P, h.props)),
                    (c.ref = _r(d, P, h)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            h.type === bn
              ? ((c = Cn(h.props.children, d.mode, y, h.key)),
                (c.return = d),
                (d = c))
              : ((y = ri(h.type, h.key, h.props, null, d.mode, y)),
                (y.ref = _r(d, c, h)),
                (y.return = d),
                (d = y));
          }
          return l(d);
        case Un:
          e: {
            for (P = h.key; c !== null; ) {
              if (c.key === P)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(d, c.sibling),
                    (c = o(c, h.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = ns(h, d.mode, y)), (c.return = d), (d = c);
          }
          return l(d);
        case Kt:
          return (P = h._init), E(d, c, P(h._payload), y);
      }
      if (Ir(h)) return v(d, c, h, y);
      if (xr(h)) return g(d, c, h, y);
      Mo(d, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = ts(h, d.mode, y)), (c.return = d), (d = c)),
        l(d))
      : n(d, c);
  }
  return E;
}
var cr = Id(!0),
  Md = Id(!1),
  yo = {},
  Ot = fn(yo),
  oo = fn(yo),
  io = fn(yo);
function Sn(e) {
  if (e === yo) throw Error(k(174));
  return e;
}
function Uu(e, t) {
  switch ((ue(io, t), ue(oo, e), ue(Ot, yo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ss(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ss(t, e));
  }
  fe(Ot), ue(Ot, t);
}
function fr() {
  fe(Ot), fe(oo), fe(io);
}
function Nd(e) {
  Sn(io.current);
  var t = Sn(Ot.current),
    n = Ss(t, e.type);
  t !== n && (ue(oo, e), ue(Ot, n));
}
function bu(e) {
  oo.current === e && (fe(Ot), fe(oo));
}
var me = fn(0);
function Ci(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gl = [];
function Wu() {
  for (var e = 0; e < Gl.length; e++)
    Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Jo = Wt.ReactCurrentDispatcher,
  Xl = Wt.ReactCurrentBatchConfig,
  $n = 0,
  ge = null,
  Re = null,
  ze = null,
  Ei = !1,
  Br = !1,
  lo = 0,
  t0 = 0;
function Fe() {
  throw Error(k(321));
}
function Vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, o, i) {
  if (
    (($n = i),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Jo.current = e === null || e.memoizedState === null ? i0 : l0),
    (e = n(r, o)),
    Br)
  ) {
    i = 0;
    do {
      if (((Br = !1), (lo = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (ze = Re = null),
        (t.updateQueue = null),
        (Jo.current = s0),
        (e = n(r, o));
    } while (Br);
  }
  if (
    ((Jo.current = Pi),
    (t = Re !== null && Re.next !== null),
    ($n = 0),
    (ze = Re = ge = null),
    (Ei = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Ku() {
  var e = lo !== 0;
  return (lo = 0), e;
}
function _t() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ze === null ? (ge.memoizedState = ze = e) : (ze = ze.next = e), ze;
}
function mt() {
  if (Re === null) {
    var e = ge.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Re.next;
  var t = ze === null ? ge.memoizedState : ze.next;
  if (t !== null) (ze = t), (Re = e);
  else {
    if (e === null) throw Error(k(310));
    (Re = e),
      (e = {
        memoizedState: Re.memoizedState,
        baseState: Re.baseState,
        baseQueue: Re.baseQueue,
        queue: Re.queue,
        next: null,
      }),
      ze === null ? (ge.memoizedState = ze = e) : (ze = ze.next = e);
  }
  return ze;
}
function so(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Zl(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = Re,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var l = o.next;
      (o.next = i.next), (i.next = l);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var s = (l = null),
      u = null,
      a = i;
    do {
      var m = a.lane;
      if (($n & m) === m)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: a.action,
              hasEagerState: a.hasEagerState,
              eagerState: a.eagerState,
              next: null,
            }),
          (r = a.hasEagerState ? a.eagerState : e(r, a.action));
      else {
        var p = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = p), (l = r)) : (u = u.next = p),
          (ge.lanes |= m),
          (Tn |= m);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (l = r) : (u.next = s),
      Ct(r, t.memoizedState) || (Ge = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ge.lanes |= i), (Tn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = mt(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    Ct(i, t.memoizedState) || (Ge = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Ad() {}
function Ld(e, t) {
  var n = ge,
    r = mt(),
    o = t(),
    i = !Ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ge = !0)),
    (r = r.queue),
    Qu(Fd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      uo(9, jd.bind(null, n, r, o, t), void 0, null),
      Ie === null)
    )
      throw Error(k(349));
    $n & 30 || Dd(n, t, o);
  }
  return o;
}
function Dd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function jd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Bd(t) && Ud(e);
}
function Fd(e, t, n) {
  return n(function () {
    Bd(t) && Ud(e);
  });
}
function Bd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function Ud(e) {
  var t = Bt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function wc(e) {
  var t = _t();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: so,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = o0.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function uo(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function bd() {
  return mt().memoizedState;
}
function qo(e, t, n, r) {
  var o = _t();
  (ge.flags |= e),
    (o.memoizedState = uo(1 | t, n, void 0, r === void 0 ? null : r));
}
function Wi(e, t, n, r) {
  var o = mt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var l = Re.memoizedState;
    if (((i = l.destroy), r !== null && Vu(r, l.deps))) {
      o.memoizedState = uo(t, n, i, r);
      return;
    }
  }
  (ge.flags |= e), (o.memoizedState = uo(1 | t, n, i, r));
}
function Sc(e, t) {
  return qo(8390656, 8, e, t);
}
function Qu(e, t) {
  return Wi(2048, 8, e, t);
}
function Wd(e, t) {
  return Wi(4, 2, e, t);
}
function Vd(e, t) {
  return Wi(4, 4, e, t);
}
function Hd(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Kd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Wi(4, 4, Hd.bind(null, t, e), n)
  );
}
function Yu() {}
function Qd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Gd(e, t, n) {
  return $n & 21
    ? (Ct(n, t) || ((n = Jf()), (ge.lanes |= n), (Tn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function n0(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (Xl.transition = r);
  }
}
function Xd() {
  return mt().memoizedState;
}
function r0(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Zd(e))
  )
    Jd(t, n);
  else if (((n = Td(e, t, n, r)), n !== null)) {
    var o = Ve();
    kt(n, e, r, o), qd(n, t, r);
  }
}
function o0(e, t, n) {
  var r = on(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Zd(e)) Jd(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          s = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = s), Ct(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Fu(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Td(e, t, o, r)),
      n !== null && ((o = Ve()), kt(n, e, r, o), qd(n, t, r));
  }
}
function Zd(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function Jd(e, t) {
  Br = Ei = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function qd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Pu(e, n);
  }
}
var Pi = {
    readContext: ht,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  i0 = {
    readContext: ht,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: Sc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        qo(4194308, 4, Hd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return qo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return qo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _t();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _t();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = r0.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: wc,
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = wc(!1),
        t = e[0];
      return (e = n0.bind(null, e[1])), (_t().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ge,
        o = _t();
      if (pe) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), Ie === null)) throw Error(k(349));
        $n & 30 || Dd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Sc(Fd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        uo(9, jd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Ie.identifierPrefix;
      if (pe) {
        var n = Nt,
          r = Mt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = lo++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = t0++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  l0 = {
    readContext: ht,
    useCallback: Qd,
    useContext: ht,
    useEffect: Qu,
    useImperativeHandle: Kd,
    useInsertionEffect: Wd,
    useLayoutEffect: Vd,
    useMemo: Yd,
    useReducer: Zl,
    useRef: bd,
    useState: function () {
      return Zl(so);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = mt();
      return Gd(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(so)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ad,
    useSyncExternalStore: Ld,
    useId: Xd,
    unstable_isNewReconciler: !1,
  },
  s0 = {
    readContext: ht,
    useCallback: Qd,
    useContext: ht,
    useEffect: Qu,
    useImperativeHandle: Kd,
    useInsertionEffect: Wd,
    useLayoutEffect: Vd,
    useMemo: Yd,
    useReducer: Jl,
    useRef: bd,
    useState: function () {
      return Jl(so);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = mt();
      return Re === null ? (t.memoizedState = e) : Gd(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Jl(so)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Ad,
    useSyncExternalStore: Ld,
    useId: Xd,
    unstable_isNewReconciler: !1,
  };
function dr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Ah(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ws(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var u0 = typeof WeakMap == 'function' ? WeakMap : Map;
function ep(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      $i || (($i = !0), (qs = r)), Ws(e, t);
    }),
    n
  );
}
function tp(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ws(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ws(e, t),
          typeof r != 'function' &&
            (rn === null ? (rn = new Set([this])) : rn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function xc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new u0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = k0.bind(null, e, t, n)), t.then(e, e));
}
function kc(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Cc(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Lt(-1, 1)), (t.tag = 2), nn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var a0 = Wt.ReactCurrentOwner,
  Ge = !1;
function We(e, t, n, r) {
  t.child = e === null ? Md(t, null, n, r) : cr(t, e.child, n, r);
}
function Ec(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    or(t, o),
    (r = Hu(e, t, n, r, i, o)),
    (n = Ku()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (pe && n && Mu(t), (t.flags |= 1), We(e, t, r, o), t.child)
  );
}
function Pc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !na(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), np(e, t, i, r, o))
      : ((e = ri(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : eo), n(l, r) && e.ref === t.ref)
    )
      return Ut(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = ln(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function np(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (eo(i, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Ut(e, t, o);
  }
  return Vs(e, t, n, r, o);
}
function rp(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Jn, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(Jn, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(Jn, et),
        (et |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(Jn, et),
      (et |= r);
  return We(e, t, o, n), t.child;
}
function op(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Vs(e, t, n, r, o) {
  var i = Ze(n) ? Pn : be.current;
  return (
    (i = ur(t, i)),
    or(t, o),
    (n = Hu(e, t, n, r, i, o)),
    (r = Ku()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (pe && r && Mu(t), (t.flags |= 1), We(e, t, n, o), t.child)
  );
}
function _c(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0;
    yi(t);
  } else i = !1;
  if ((or(t, o), t.stateNode === null))
    ei(e, t), zd(t, n, r), bs(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = ht(a))
      : ((a = Ze(n) ? Pn : be.current), (a = ur(t, a)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && yc(t, l, r, a)),
      (Qt = !1);
    var f = t.memoizedState;
    (l.state = f),
      ki(t, r, l, o),
      (u = t.memoizedState),
      s !== r || f !== u || Xe.current || Qt
        ? (typeof m == 'function' && (Us(t, n, m, r), (u = t.memoizedState)),
          (s = Qt || gc(t, n, s, r, f, u, a))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != 'function' &&
                  typeof l.componentWillMount != 'function') ||
                (typeof l.componentWillMount == 'function' &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == 'function' &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      Rd(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : vt(t.type, s)),
      (l.props = a),
      (p = t.pendingProps),
      (f = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ht(u))
        : ((u = Ze(n) ? Pn : be.current), (u = ur(t, u)));
    var S = n.getDerivedStateFromProps;
    (m =
      typeof S == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== p || f !== u) && yc(t, l, r, u)),
      (Qt = !1),
      (f = t.memoizedState),
      (l.state = f),
      ki(t, r, l, o);
    var v = t.memoizedState;
    s !== p || f !== v || Xe.current || Qt
      ? (typeof S == 'function' && (Us(t, n, S, r), (v = t.memoizedState)),
        (a = Qt || gc(t, n, a, r, f, v, u) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, v, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, v, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (l.props = r),
        (l.state = v),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Hs(e, t, n, r, i, o);
}
function Hs(e, t, n, r, o, i) {
  op(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && fc(t, n, !1), Ut(e, t, i);
  (r = t.stateNode), (a0.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = cr(t, e.child, null, i)), (t.child = cr(t, null, s, i)))
      : We(e, t, s, i),
    (t.memoizedState = r.state),
    o && fc(t, n, !0),
    t.child
  );
}
function ip(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cc(e, t.context, !1),
    Uu(e, t.containerInfo);
}
function $c(e, t, n, r, o) {
  return ar(), Au(o), (t.flags |= 256), We(e, t, n, r), t.child;
}
var Ks = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function lp(e, t, n) {
  var r = t.pendingProps,
    o = me.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(me, o & 1),
    e === null)
  )
    return (
      Fs(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: 'hidden', children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Ki(l, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Qs(n)),
              (t.memoizedState = Ks),
              e)
            : Gu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return c0(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = ln(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = ln(s, i)) : ((i = Cn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Qs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ks),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = ln(i, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Gu(e, t) {
  return (
    (t = Ki({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function No(e, t, n, r) {
  return (
    r !== null && Au(r),
    cr(t, e.child, null, n),
    (e = Gu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function c0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ql(Error(k(422)))), No(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ki({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Cn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && cr(t, e.child, null, l),
        (t.child.memoizedState = Qs(l)),
        (t.memoizedState = Ks),
        i);
  if (!(t.mode & 1)) return No(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(k(419))), (r = ql(i, r, void 0)), No(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ge || s)) {
    if (((r = Ie), r !== null)) {
      switch (l & -l) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | l) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), Bt(e, o), kt(r, e, o, -1));
    }
    return ta(), (r = ql(Error(k(421)))), No(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = C0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (nt = tn(o.nextSibling)),
      (rt = t),
      (pe = !0),
      (St = null),
      e !== null &&
        ((at[ct++] = Mt),
        (at[ct++] = Nt),
        (at[ct++] = _n),
        (Mt = e.id),
        (Nt = e.overflow),
        (_n = t)),
      (t = Gu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Tc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bs(e.return, t, n);
}
function es(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function sp(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((We(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Tc(e, n, t);
        else if (e.tag === 19) Tc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ue(me, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Ci(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          es(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Ci(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        es(t, !0, n, null, i);
        break;
      case 'together':
        es(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function ei(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Tn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ln(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ln(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function f0(e, t, n) {
  switch (t.tag) {
    case 3:
      ip(t), ar();
      break;
    case 5:
      Nd(t);
      break;
    case 1:
      Ze(t.type) && yi(t);
      break;
    case 4:
      Uu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ue(Si, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? lp(e, t, n)
          : (ue(me, me.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return sp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ue(me, me.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), rp(e, t, n);
  }
  return Ut(e, t, n);
}
var up, Ys, ap, cp;
up = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ys = function () {};
ap = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Sn(Ot.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = gs(e, o)), (r = gs(e, r)), (i = []);
        break;
      case 'select':
        (o = ye({}, o, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = ws(e, o)), (r = ws(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = mi);
    }
    xs(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === 'style') {
          var s = o[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ''));
        } else
          a !== 'dangerouslySetInnerHTML' &&
            a !== 'children' &&
            a !== 'suppressContentEditableWarning' &&
            a !== 'suppressHydrationWarning' &&
            a !== 'autoFocus' &&
            (Qr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === 'style')
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ''));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === 'children'
            ? (typeof u != 'string' && typeof u != 'number') ||
              (i = i || []).push(a, '' + u)
            : a !== 'suppressContentEditableWarning' &&
              a !== 'suppressHydrationWarning' &&
              (Qr.hasOwnProperty(a)
                ? (u != null && a === 'onScroll' && ce('scroll', e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
cp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $r(e, t) {
  if (!pe)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Be(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function d0(e, t, n) {
  var r = t.pendingProps;
  switch ((Nu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Be(t), null;
    case 1:
      return Ze(t.type) && gi(), Be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        fr(),
        fe(Xe),
        fe(be),
        Wu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Io(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (nu(St), (St = null)))),
        Ys(e, t),
        Be(t),
        null
      );
    case 5:
      bu(t);
      var o = Sn(io.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        ap(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Be(t), null;
        }
        if (((e = Sn(Ot.current)), Io(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[$t] = t), (r[ro] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              ce('cancel', r), ce('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              ce('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Nr.length; o++) ce(Nr[o], r);
              break;
            case 'source':
              ce('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              ce('error', r), ce('load', r);
              break;
            case 'details':
              ce('toggle', r);
              break;
            case 'input':
              Da(r, i), ce('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ce('invalid', r);
              break;
            case 'textarea':
              Fa(r, i), ce('invalid', r);
          }
          xs(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      zo(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : Qr.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  ce('scroll', r);
            }
          switch (n) {
            case 'input':
              Co(r), ja(r, i, !0);
              break;
            case 'textarea':
              Co(r), Ba(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = mi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Df(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = l.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === 'select' &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[$t] = t),
            (e[ro] = r),
            up(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ks(n, r)), n)) {
              case 'dialog':
                ce('cancel', e), ce('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                ce('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Nr.length; o++) ce(Nr[o], e);
                o = r;
                break;
              case 'source':
                ce('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                ce('error', e), ce('load', e), (o = r);
                break;
              case 'details':
                ce('toggle', e), (o = r);
                break;
              case 'input':
                Da(e, r), (o = gs(e, r)), ce('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = ye({}, r, { value: void 0 })),
                  ce('invalid', e);
                break;
              case 'textarea':
                Fa(e, r), (o = ws(e, r)), ce('invalid', e);
                break;
              default:
                o = r;
            }
            xs(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? Bf(e, u)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && jf(e, u))
                  : i === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Yr(e, u)
                    : typeof u == 'number' && Yr(e, '' + u)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Qr.hasOwnProperty(i)
                      ? u != null && i === 'onScroll' && ce('scroll', e)
                      : u != null && wu(e, i, u, l));
              }
            switch (n) {
              case 'input':
                Co(e), ja(e, r, !1);
                break;
              case 'textarea':
                Co(e), Ba(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + un(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? er(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      er(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = mi);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Be(t), null;
    case 6:
      if (e && t.stateNode != null) cp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = Sn(io.current)), Sn(Ot.current), Io(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$t] = t),
            (i = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                zo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[$t] = t),
            (t.stateNode = r);
      }
      return Be(t), null;
    case 13:
      if (
        (fe(me),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (pe && nt !== null && t.mode & 1 && !(t.flags & 128))
          $d(), ar(), (t.flags |= 98560), (i = !1);
        else if (((i = Io(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(k(317));
            i[$t] = t;
          } else
            ar(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Be(t), (i = !1);
        } else St !== null && (nu(St), (St = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? Oe === 0 && (Oe = 3) : ta())),
          t.updateQueue !== null && (t.flags |= 4),
          Be(t),
          null);
    case 4:
      return (
        fr(), Ys(e, t), e === null && to(t.stateNode.containerInfo), Be(t), null
      );
    case 10:
      return ju(t.type._context), Be(t), null;
    case 17:
      return Ze(t.type) && gi(), Be(t), null;
    case 19:
      if ((fe(me), (i = t.memoizedState), i === null)) return Be(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) $r(i, !1);
        else {
          if (Oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = Ci(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    $r(i, !1),
                    r = l.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (l = i.alternate),
                    l === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = l.childLanes),
                        (i.lanes = l.lanes),
                        (i.child = l.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = l.memoizedProps),
                        (i.memoizedState = l.memoizedState),
                        (i.updateQueue = l.updateQueue),
                        (i.type = l.type),
                        (e = l.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(me, (me.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Pe() > pr &&
            ((t.flags |= 128), (r = !0), $r(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ci(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $r(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !pe)
            )
              return Be(t), null;
          } else
            2 * Pe() - i.renderingStartTime > pr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $r(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((l.sibling = t.child), (t.child = l))
          : ((n = i.last),
            n !== null ? (n.sibling = l) : (t.child = l),
            (i.last = l));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = Pe()),
          (t.sibling = null),
          (n = me.current),
          ue(me, r ? (n & 1) | 2 : n & 1),
          t)
        : (Be(t), null);
    case 22:
    case 23:
      return (
        ea(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Be(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function p0(e, t) {
  switch ((Nu(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && gi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        fr(),
        fe(Xe),
        fe(be),
        Wu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return bu(t), null;
    case 13:
      if (
        (fe(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(k(340));
        ar();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(me), null;
    case 4:
      return fr(), null;
    case 10:
      return ju(t.type._context), null;
    case 22:
    case 23:
      return ea(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ao = !1,
  Ue = !1,
  h0 = typeof WeakSet == 'function' ? WeakSet : Set,
  N = null;
function Zn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ke(e, t, r);
      }
    else n.current = null;
}
function Gs(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var Rc = !1;
function m0(e, t) {
  if (((Is = di), (e = hd()), Iu(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var l = 0,
            s = -1,
            u = -1,
            a = 0,
            m = 0,
            p = e,
            f = null;
          t: for (;;) {
            for (
              var S;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (S = p.firstChild) !== null;

            )
              (f = p), (p = S);
            for (;;) {
              if (p === e) break t;
              if (
                (f === n && ++a === o && (s = l),
                f === i && ++m === r && (u = l),
                (S = p.nextSibling) !== null)
              )
                break;
              (p = f), (f = p.parentNode);
            }
            p = S;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ms = { focusedElem: e, selectionRange: n }, di = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var g = v.memoizedProps,
                    E = v.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : vt(t.type, g),
                      E
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = '')
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (y) {
          ke(t, t.return, y);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (v = Rc), (Rc = !1), v;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Gs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Vi(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Xs(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function fp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$t], delete t[ro], delete t[Ls], delete t[Zm], delete t[Jm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function dp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Oc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || dp(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = mi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zs(e, t, n), e = e.sibling; e !== null; ) Zs(e, t, n), (e = e.sibling);
}
function Js(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Js(e, t, n), e = e.sibling; e !== null; ) Js(e, t, n), (e = e.sibling);
}
var Ne = null,
  wt = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) pp(e, t, n), (n = n.sibling);
}
function pp(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
    try {
      Rt.onCommitFiberUnmount(Li, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || Zn(n, t);
    case 6:
      var r = Ne,
        o = wt;
      (Ne = null),
        Ht(e, t, n),
        (Ne = r),
        (wt = o),
        Ne !== null &&
          (wt
            ? ((e = Ne),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Ne.removeChild(n.stateNode));
      break;
    case 18:
      Ne !== null &&
        (wt
          ? ((e = Ne),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ql(e.parentNode, n)
              : e.nodeType === 1 && Ql(e, n),
            Jr(e))
          : Ql(Ne, n.stateNode));
      break;
    case 4:
      (r = Ne),
        (o = wt),
        (Ne = n.stateNode.containerInfo),
        (wt = !0),
        Ht(e, t, n),
        (Ne = r),
        (wt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ue &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Gs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (Zn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ke(n, t, s);
        }
      Ht(e, t, n);
      break;
    case 21:
      Ht(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ue = (r = Ue) || n.memoizedState !== null), Ht(e, t, n), (Ue = r))
        : Ht(e, t, n);
      break;
    default:
      Ht(e, t, n);
  }
}
function zc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new h0()),
      t.forEach(function (r) {
        var o = E0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function yt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          l = t,
          s = l;
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              (Ne = s.stateNode), (wt = !1);
              break e;
            case 3:
              (Ne = s.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Ne = s.stateNode.containerInfo), (wt = !0);
              break e;
          }
          s = s.return;
        }
        if (Ne === null) throw Error(k(160));
        pp(i, l, o), (Ne = null), (wt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        ke(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) hp(t, e), (t = t.sibling);
}
function hp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), r & 4)) {
        try {
          Ur(3, e, e.return), Vi(3, e);
        } catch (g) {
          ke(e, e.return, g);
        }
        try {
          Ur(5, e, e.return);
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      break;
    case 1:
      yt(t, e), Pt(e), r & 512 && n !== null && Zn(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Pt(e),
        r & 512 && n !== null && Zn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Yr(o, '');
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && Af(o, i),
              ks(s, l);
            var a = ks(s, i);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                p = u[l + 1];
              m === 'style'
                ? Bf(o, p)
                : m === 'dangerouslySetInnerHTML'
                ? jf(o, p)
                : m === 'children'
                ? Yr(o, p)
                : wu(o, m, p, a);
            }
            switch (s) {
              case 'input':
                ys(o, i);
                break;
              case 'textarea':
                Lf(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? er(o, !!i.multiple, S, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? er(o, !!i.multiple, i.defaultValue, !0)
                      : er(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[ro] = i;
          } catch (g) {
            ke(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((yt(t, e), Pt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (yt(t, e), Pt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Jr(t.containerInfo);
        } catch (g) {
          ke(e, e.return, g);
        }
      break;
    case 4:
      yt(t, e), Pt(e);
      break;
    case 13:
      yt(t, e),
        Pt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Ju = Pe())),
        r & 4 && zc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ue = (a = Ue) || m), yt(t, e), (Ue = a)) : yt(t, e),
        Pt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (N = e, m = e.child; m !== null; ) {
            for (p = N = m; N !== null; ) {
              switch (((f = N), (S = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, f, f.return);
                  break;
                case 1:
                  Zn(f, f.return);
                  var v = f.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (g) {
                      ke(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Zn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Mc(p);
                    continue;
                  }
              }
              S !== null ? ((S.return = f), (N = S)) : Mc(p);
            }
            m = m.sibling;
          }
        e: for (m = null, p = e; ; ) {
          if (p.tag === 5) {
            if (m === null) {
              m = p;
              try {
                (o = p.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = Ff('display', l)));
              } catch (g) {
                ke(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = a ? '' : p.memoizedProps;
              } catch (g) {
                ke(e, e.return, g);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            m === p && (m = null), (p = p.return);
          }
          m === p && (m = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      yt(t, e), Pt(e), r & 4 && zc(e);
      break;
    case 21:
      break;
    default:
      yt(t, e), Pt(e);
  }
}
function Pt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (dp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Yr(o, ''), (r.flags &= -33));
          var i = Oc(e);
          Js(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = Oc(e);
          Zs(e, s, l);
          break;
        default:
          throw Error(k(161));
      }
    } catch (u) {
      ke(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function g0(e, t, n) {
  (N = e), mp(e);
}
function mp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var o = N,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ao;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Ue;
        s = Ao;
        var a = Ue;
        if (((Ao = l), (Ue = u) && !a))
          for (N = o; N !== null; )
            (l = N),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? Nc(o)
                : u !== null
                ? ((u.return = l), (N = u))
                : Nc(o);
        for (; i !== null; ) (N = i), mp(i), (i = i.sibling);
        (N = o), (Ao = s), (Ue = a);
      }
      Ic(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (N = i)) : Ic(e);
  }
}
function Ic(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Vi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ue)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && mc(t, i, r);
              break;
            case 3:
              var l = t.updateQueue;
              if (l !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                mc(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var a = t.alternate;
                if (a !== null) {
                  var m = a.memoizedState;
                  if (m !== null) {
                    var p = m.dehydrated;
                    p !== null && Jr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Ue || (t.flags & 512 && Xs(t));
      } catch (f) {
        ke(t, t.return, f);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Mc(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function Nc(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Vi(4, t);
          } catch (u) {
            ke(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ke(t, o, u);
            }
          }
          var i = t.return;
          try {
            Xs(t);
          } catch (u) {
            ke(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Xs(t);
          } catch (u) {
            ke(t, l, u);
          }
      }
    } catch (u) {
      ke(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (N = s);
      break;
    }
    N = t.return;
  }
}
var y0 = Math.ceil,
  _i = Wt.ReactCurrentDispatcher,
  Xu = Wt.ReactCurrentOwner,
  pt = Wt.ReactCurrentBatchConfig,
  J = 0,
  Ie = null,
  _e = null,
  Le = 0,
  et = 0,
  Jn = fn(0),
  Oe = 0,
  ao = null,
  Tn = 0,
  Hi = 0,
  Zu = 0,
  br = null,
  Ye = null,
  Ju = 0,
  pr = 1 / 0,
  zt = null,
  $i = !1,
  qs = null,
  rn = null,
  Lo = !1,
  Zt = null,
  Ti = 0,
  Wr = 0,
  eu = null,
  ti = -1,
  ni = 0;
function Ve() {
  return J & 6 ? Pe() : ti !== -1 ? ti : (ti = Pe());
}
function on(e) {
  return e.mode & 1
    ? J & 2 && Le !== 0
      ? Le & -Le
      : e0.transition !== null
      ? (ni === 0 && (ni = Jf()), ni)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : id(e.type))),
        e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < Wr) throw ((Wr = 0), (eu = null), Error(k(185)));
  ho(e, n, r),
    (!(J & 2) || e !== Ie) &&
      (e === Ie && (!(J & 2) && (Hi |= n), Oe === 4 && Gt(e, Le)),
      Je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((pr = Pe() + 500), Ui && dn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  em(e, t);
  var r = fi(e, e === Ie ? Le : 0);
  if (r === 0)
    n !== null && Wa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Wa(n), t === 1))
      e.tag === 0 ? qm(Ac.bind(null, e)) : Ed(Ac.bind(null, e)),
        Gm(function () {
          !(J & 6) && dn();
        }),
        (n = null);
    else {
      switch (qf(r)) {
        case 1:
          n = Eu;
          break;
        case 4:
          n = Xf;
          break;
        case 16:
          n = ci;
          break;
        case 536870912:
          n = Zf;
          break;
        default:
          n = ci;
      }
      n = Cp(n, gp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gp(e, t) {
  if (((ti = -1), (ni = 0), J & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (ir() && e.callbackNode !== n) return null;
  var r = fi(e, e === Ie ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ri(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = vp();
    (Ie !== e || Le !== t) && ((zt = null), (pr = Pe() + 500), kn(e, t));
    do
      try {
        S0();
        break;
      } catch (s) {
        yp(e, s);
      }
    while (1);
    Du(),
      (_i.current = i),
      (J = o),
      _e !== null ? (t = 0) : ((Ie = null), (Le = 0), (t = Oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = $s(e)), o !== 0 && ((r = o), (t = tu(e, o)))), t === 1)
    )
      throw ((n = ao), kn(e, 0), Gt(e, r), Je(e, Pe()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !v0(o) &&
          ((t = Ri(e, r)),
          t === 2 && ((i = $s(e)), i !== 0 && ((r = i), (t = tu(e, i)))),
          t === 1))
      )
        throw ((n = ao), kn(e, 0), Gt(e, r), Je(e, Pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          gn(e, Ye, zt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = Ju + 500 - Pe()), 10 < t))
          ) {
            if (fi(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = As(gn.bind(null, e, Ye, zt), t);
            break;
          }
          gn(e, Ye, zt);
          break;
        case 4:
          if ((Gt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - xt(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = Pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * y0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = As(gn.bind(null, e, Ye, zt), r);
            break;
          }
          gn(e, Ye, zt);
          break;
        case 5:
          gn(e, Ye, zt);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Je(e, Pe()), e.callbackNode === n ? gp.bind(null, e) : null;
}
function tu(e, t) {
  var n = br;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Ri(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && nu(t)),
    e
  );
}
function nu(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function v0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!Ct(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Gt(e, t) {
  for (
    t &= ~Zu,
      t &= ~Hi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Ac(e) {
  if (J & 6) throw Error(k(327));
  ir();
  var t = fi(e, 0);
  if (!(t & 1)) return Je(e, Pe()), null;
  var n = Ri(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = $s(e);
    r !== 0 && ((t = r), (n = tu(e, r)));
  }
  if (n === 1) throw ((n = ao), kn(e, 0), Gt(e, t), Je(e, Pe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gn(e, Ye, zt),
    Je(e, Pe()),
    null
  );
}
function qu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((pr = Pe() + 500), Ui && dn());
  }
}
function Rn(e) {
  Zt !== null && Zt.tag === 0 && !(J & 6) && ir();
  var t = J;
  J |= 1;
  var n = pt.transition,
    r = re;
  try {
    if (((pt.transition = null), (re = 1), e)) return e();
  } finally {
    (re = r), (pt.transition = n), (J = t), !(J & 6) && dn();
  }
}
function ea() {
  (et = Jn.current), fe(Jn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ym(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch ((Nu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && gi();
          break;
        case 3:
          fr(), fe(Xe), fe(be), Wu();
          break;
        case 5:
          bu(r);
          break;
        case 4:
          fr();
          break;
        case 13:
          fe(me);
          break;
        case 19:
          fe(me);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          ea();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (_e = e = ln(e.current, null)),
    (Le = et = t),
    (Oe = 0),
    (ao = null),
    (Zu = Hi = Tn = 0),
    (Ye = br = null),
    wn !== null)
  ) {
    for (t = 0; t < wn.length; t++)
      if (((n = wn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    wn = null;
  }
  return e;
}
function yp(e, t) {
  do {
    var n = _e;
    try {
      if ((Du(), (Jo.current = Pi), Ei)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ei = !1;
      }
      if (
        (($n = 0),
        (ze = Re = ge = null),
        (Br = !1),
        (lo = 0),
        (Xu.current = null),
        n === null || n.return === null)
      ) {
        (Oe = 1), (ao = t), (_e = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = Le),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            m = s,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var f = m.alternate;
            f
              ? ((m.updateQueue = f.updateQueue),
                (m.memoizedState = f.memoizedState),
                (m.lanes = f.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var S = kc(l);
          if (S !== null) {
            (S.flags &= -257),
              Cc(S, l, s, i, t),
              S.mode & 1 && xc(i, a, t),
              (t = S),
              (u = a);
            var v = t.updateQueue;
            if (v === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else v.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              xc(i, a, t), ta();
              break e;
            }
            u = Error(k(426));
          }
        } else if (pe && s.mode & 1) {
          var E = kc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Cc(E, l, s, i, t),
              Au(dr(u, s));
            break e;
          }
        }
        (i = u = dr(u, s)),
          Oe !== 4 && (Oe = 2),
          br === null ? (br = [i]) : br.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = ep(i, u, t);
              hc(i, d);
              break e;
            case 1:
              s = u;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (h !== null &&
                    typeof h.componentDidCatch == 'function' &&
                    (rn === null || !rn.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var y = tp(i, s, t);
                hc(i, y);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Sp(n);
    } catch (x) {
      (t = x), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function vp() {
  var e = _i.current;
  return (_i.current = Pi), e === null ? Pi : e;
}
function ta() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Ie === null || (!(Tn & 268435455) && !(Hi & 268435455)) || Gt(Ie, Le);
}
function Ri(e, t) {
  var n = J;
  J |= 2;
  var r = vp();
  (Ie !== e || Le !== t) && ((zt = null), kn(e, t));
  do
    try {
      w0();
      break;
    } catch (o) {
      yp(e, o);
    }
  while (1);
  if ((Du(), (J = n), (_i.current = r), _e !== null)) throw Error(k(261));
  return (Ie = null), (Le = 0), Oe;
}
function w0() {
  for (; _e !== null; ) wp(_e);
}
function S0() {
  for (; _e !== null && !Hh(); ) wp(_e);
}
function wp(e) {
  var t = kp(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sp(e) : (_e = t),
    (Xu.current = null);
}
function Sp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = p0(n, t)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (_e = null);
        return;
      }
    } else if (((n = d0(n, t, et)), n !== null)) {
      _e = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      _e = t;
      return;
    }
    _e = t = e;
  } while (t !== null);
  Oe === 0 && (Oe = 5);
}
function gn(e, t, n) {
  var r = re,
    o = pt.transition;
  try {
    (pt.transition = null), (re = 1), x0(e, t, n, r);
  } finally {
    (pt.transition = o), (re = r);
  }
  return null;
}
function x0(e, t, n, r) {
  do ir();
  while (Zt !== null);
  if (J & 6) throw Error(k(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (tm(e, i),
    e === Ie && ((_e = Ie = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Lo ||
      ((Lo = !0),
      Cp(ci, function () {
        return ir(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var l = re;
    re = 1;
    var s = J;
    (J |= 4),
      (Xu.current = null),
      m0(e, n),
      hp(n, e),
      Um(Ms),
      (di = !!Is),
      (Ms = Is = null),
      (e.current = n),
      g0(n),
      Kh(),
      (J = s),
      (re = l),
      (pt.transition = i);
  } else e.current = n;
  if (
    (Lo && ((Lo = !1), (Zt = e), (Ti = o)),
    (i = e.pendingLanes),
    i === 0 && (rn = null),
    Gh(n.stateNode),
    Je(e, Pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if ($i) throw (($i = !1), (e = qs), (qs = null), e);
  return (
    Ti & 1 && e.tag !== 0 && ir(),
    (i = e.pendingLanes),
    i & 1 ? (e === eu ? Wr++ : ((Wr = 0), (eu = e))) : (Wr = 0),
    dn(),
    null
  );
}
function ir() {
  if (Zt !== null) {
    var e = qf(Ti),
      t = pt.transition,
      n = re;
    try {
      if (((pt.transition = null), (re = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), (Ti = 0), J & 6)) throw Error(k(331));
        var o = J;
        for (J |= 4, N = e.current; N !== null; ) {
          var i = N,
            l = i.child;
          if (N.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (N = a; N !== null; ) {
                  var m = N;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (N = p);
                  else
                    for (; N !== null; ) {
                      m = N;
                      var f = m.sibling,
                        S = m.return;
                      if ((fp(m), m === a)) {
                        N = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = S), (N = f);
                        break;
                      }
                      N = S;
                    }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var E = g.sibling;
                    (g.sibling = null), (g = E);
                  } while (g !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (N = l);
          else
            e: for (; N !== null; ) {
              if (((i = N), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (N = d);
                break e;
              }
              N = i.return;
            }
        }
        var c = e.current;
        for (N = c; N !== null; ) {
          l = N;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (N = h);
          else
            e: for (l = c; N !== null; ) {
              if (((s = N), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vi(9, s);
                  }
                } catch (x) {
                  ke(s, s.return, x);
                }
              if (s === l) {
                N = null;
                break e;
              }
              var y = s.sibling;
              if (y !== null) {
                (y.return = s.return), (N = y);
                break e;
              }
              N = s.return;
            }
        }
        if (
          ((J = o), dn(), Rt && typeof Rt.onPostCommitFiberRoot == 'function')
        )
          try {
            Rt.onPostCommitFiberRoot(Li, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (re = n), (pt.transition = t);
    }
  }
  return !1;
}
function Lc(e, t, n) {
  (t = dr(n, t)),
    (t = ep(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = Ve()),
    e !== null && (ho(e, 1, t), Je(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) Lc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Lc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (rn === null || !rn.has(r)))
        ) {
          (e = dr(n, e)),
            (e = tp(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = Ve()),
            t !== null && (ho(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function k0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (Le & n) === n &&
      (Oe === 4 || (Oe === 3 && (Le & 130023424) === Le && 500 > Pe() - Ju)
        ? kn(e, 0)
        : (Zu |= n)),
    Je(e, t);
}
function xp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = _o), (_o <<= 1), !(_o & 130023424) && (_o = 4194304))
      : (t = 1));
  var n = Ve();
  (e = Bt(e, t)), e !== null && (ho(e, t, n), Je(e, n));
}
function C0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xp(e, n);
}
function E0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), xp(e, n);
}
var kp;
kp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), f0(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), pe && t.flags & 1048576 && Pd(t, wi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      ei(e, t), (e = t.pendingProps);
      var o = ur(t, be.current);
      or(t, n), (o = Hu(null, t, r, e, o, n));
      var i = Ku();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), yi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Bu(t),
            (o.updater = bi),
            (t.stateNode = o),
            (o._reactInternals = t),
            bs(t, r, e, n),
            (t = Hs(null, t, r, !0, i, n)))
          : ((t.tag = 0), pe && i && Mu(t), We(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (ei(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = _0(r)),
          (e = vt(r, e)),
          o)
        ) {
          case 0:
            t = Vs(null, t, r, e, n);
            break e;
          case 1:
            t = _c(null, t, r, e, n);
            break e;
          case 11:
            t = Ec(null, t, r, e, n);
            break e;
          case 14:
            t = Pc(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        Vs(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        _c(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((ip(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          Rd(e, t),
          ki(t, r, null, n);
        var l = t.memoizedState;
        if (((r = l.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: l.cache,
              pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
              transitions: l.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = dr(Error(k(423)), t)), (t = $c(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = dr(Error(k(424)), t)), (t = $c(e, t, r, n, o));
            break e;
          } else
            for (
              nt = tn(t.stateNode.containerInfo.firstChild),
                rt = t,
                pe = !0,
                St = null,
                n = Md(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ar(), r === o)) {
            t = Ut(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Nd(t),
        e === null && Fs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ns(r, o) ? (l = null) : i !== null && Ns(r, i) && (t.flags |= 32),
        op(e, t),
        We(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Fs(t), null;
    case 13:
      return lp(e, t, n);
    case 4:
      return (
        Uu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = cr(t, null, r, n)) : We(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        Ec(e, t, r, o, n)
      );
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          ue(Si, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (Ct(i.value, l)) {
            if (i.children === o.children && !Xe.current) {
              t = Ut(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var s = i.dependencies;
              if (s !== null) {
                l = i.child;
                for (var u = s.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (i.tag === 1) {
                      (u = Lt(-1, n & -n)), (u.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null
                          ? (u.next = u)
                          : ((u.next = m.next), (m.next = u)),
                          (a.pending = u);
                      }
                    }
                    (i.lanes |= n),
                      (u = i.alternate),
                      u !== null && (u.lanes |= n),
                      Bs(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(k(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Bs(l, n, t),
                  (l = i.sibling);
              } else l = i.child;
              if (l !== null) l.return = i;
              else
                for (l = i; l !== null; ) {
                  if (l === t) {
                    l = null;
                    break;
                  }
                  if (((i = l.sibling), i !== null)) {
                    (i.return = l.return), (l = i);
                    break;
                  }
                  l = l.return;
                }
              i = l;
            }
        We(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        or(t, n),
        (o = ht(o)),
        (r = r(o)),
        (t.flags |= 1),
        We(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = vt(r, t.pendingProps)),
        (o = vt(r.type, o)),
        Pc(e, t, r, o, n)
      );
    case 15:
      return np(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        ei(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), yi(t)) : (e = !1),
        or(t, n),
        zd(t, r, o),
        bs(t, r, o, n),
        Hs(null, t, r, !0, e, n)
      );
    case 19:
      return sp(e, t, n);
    case 22:
      return rp(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Cp(e, t) {
  return Gf(e, t);
}
function P0(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function dt(e, t, n, r) {
  return new P0(e, t, n, r);
}
function na(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function _0(e) {
  if (typeof e == 'function') return na(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === xu)) return 11;
    if (e === ku) return 14;
  }
  return 2;
}
function ln(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = dt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function ri(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) na(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case bn:
        return Cn(n.children, o, i, t);
      case Su:
        (l = 8), (o |= 8);
        break;
      case ds:
        return (
          (e = dt(12, n, t, o | 2)), (e.elementType = ds), (e.lanes = i), e
        );
      case ps:
        return (e = dt(13, n, t, o)), (e.elementType = ps), (e.lanes = i), e;
      case hs:
        return (e = dt(19, n, t, o)), (e.elementType = hs), (e.lanes = i), e;
      case If:
        return Ki(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Of:
              l = 10;
              break e;
            case zf:
              l = 9;
              break e;
            case xu:
              l = 11;
              break e;
            case ku:
              l = 14;
              break e;
            case Kt:
              (l = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = dt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Cn(e, t, n, r) {
  return (e = dt(7, e, r, t)), (e.lanes = n), e;
}
function Ki(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = If),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ts(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function ns(e, t, n) {
  return (
    (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function $0(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ll(0)),
    (this.expirationTimes = Ll(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ll(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function ra(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new $0(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = dt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Bu(i),
    e
  );
}
function T0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Un,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ep(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (In(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Cd(e, n, t);
  }
  return t;
}
function Pp(e, t, n, r, o, i, l, s, u) {
  return (
    (e = ra(n, r, !0, e, o, i, l, s, u)),
    (e.context = Ep(null)),
    (n = e.current),
    (r = Ve()),
    (o = on(n)),
    (i = Lt(r, o)),
    (i.callback = t ?? null),
    nn(n, i, o),
    (e.current.lanes = o),
    ho(e, o, r),
    Je(e, r),
    e
  );
}
function Qi(e, t, n, r) {
  var o = t.current,
    i = Ve(),
    l = on(o);
  return (
    (n = Ep(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(o, t, l)),
    e !== null && (kt(e, o, l, i), Zo(e, o, l)),
    l
  );
}
function Oi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Dc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function oa(e, t) {
  Dc(e, t), (e = e.alternate) && Dc(e, t);
}
function R0() {
  return null;
}
var _p =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function ia(e) {
  this._internalRoot = e;
}
Yi.prototype.render = ia.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Qi(e, t, null, null);
};
Yi.prototype.unmount = ia.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Rn(function () {
      Qi(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function Yi(e) {
  this._internalRoot = e;
}
Yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = nd();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && od(e);
  }
};
function la(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Gi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function jc() {}
function O0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Oi(l);
        i.call(a);
      };
    }
    var l = Pp(t, r, e, 0, null, !1, !1, '', jc);
    return (
      (e._reactRootContainer = l),
      (e[Ft] = l.current),
      to(e.nodeType === 8 ? e.parentNode : e),
      Rn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = Oi(u);
      s.call(a);
    };
  }
  var u = ra(e, 0, !1, null, null, !1, !1, '', jc);
  return (
    (e._reactRootContainer = u),
    (e[Ft] = u.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    Rn(function () {
      Qi(t, u, n, r);
    }),
    u
  );
}
function Xi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var u = Oi(l);
        s.call(u);
      };
    }
    Qi(t, l, e, o);
  } else l = O0(n, t, e, o, r);
  return Oi(l);
}
ed = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mr(t.pendingLanes);
        n !== 0 &&
          (Pu(t, n | 1), Je(t, Pe()), !(J & 6) && ((pr = Pe() + 500), dn()));
      }
      break;
    case 13:
      Rn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var o = Ve();
          kt(r, e, 1, o);
        }
      }),
        oa(e, 1);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Ve();
      kt(t, e, 134217728, n);
    }
    oa(e, 134217728);
  }
};
td = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Ve();
      kt(n, e, t, r);
    }
    oa(e, t);
  }
};
nd = function () {
  return re;
};
rd = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Es = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ys(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = Bi(r);
            if (!o) throw Error(k(90));
            Nf(r), ys(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Lf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && er(e, !!n.multiple, t, !1);
  }
};
Wf = qu;
Vf = Rn;
var z0 = { usingClientEntryPoint: !1, Events: [go, Kn, Bi, Uf, bf, qu] },
  Tr = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  I0 = {
    bundleType: Tr.bundleType,
    version: Tr.version,
    rendererPackageName: Tr.rendererPackageName,
    rendererConfig: Tr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Qf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Tr.findFiberByHostInstance || R0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Do = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Do.isDisabled && Do.supportsFiber)
    try {
      (Li = Do.inject(I0)), (Rt = Do);
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z0;
it.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!la(t)) throw Error(k(200));
  return T0(e, t, null, n);
};
it.createRoot = function (e, t) {
  if (!la(e)) throw Error(k(299));
  var n = !1,
    r = '',
    o = _p;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = ra(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    to(e.nodeType === 8 ? e.parentNode : e),
    new ia(t)
  );
};
it.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(k(188))
      : ((e = Object.keys(e).join(',')), Error(k(268, e)));
  return (e = Qf(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
  return Rn(e);
};
it.hydrate = function (e, t, n) {
  if (!Gi(t)) throw Error(k(200));
  return Xi(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
  if (!la(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = _p;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = Pp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ft] = t.current),
    to(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Yi(t);
};
it.render = function (e, t, n) {
  if (!Gi(t)) throw Error(k(200));
  return Xi(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
  if (!Gi(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Rn(function () {
        Xi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
it.unstable_batchedUpdates = qu;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Gi(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Xi(e, t, n, !1, r);
};
it.version = '18.2.0-next-9e3b772b8-20220608';
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = it);
})(Rh);
var Fc = as;
(us.createRoot = Fc.createRoot), (us.hydrateRoot = Fc.hydrateRoot);
const M0 = { black: '#000', white: '#fff' },
  co = M0,
  N0 = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  },
  Ln = N0,
  A0 = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  },
  Dn = A0,
  L0 = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  },
  jn = L0,
  D0 = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  },
  Fn = D0,
  j0 = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  },
  Bn = j0,
  F0 = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  },
  Rr = F0,
  B0 = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  },
  U0 = B0;
function F() {
  return (
    (F = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    F.apply(this, arguments)
  );
}
function yn(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object;
}
function $p(e) {
  if (!yn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = $p(e[n]);
    }),
    t
  );
}
function Dt(e, t, n = { clone: !0 }) {
  const r = n.clone ? F({}, e) : e;
  return (
    yn(e) &&
      yn(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' &&
          (yn(t[o]) && o in e && yn(e[o])
            ? (r[o] = Dt(e[o], t[o], n))
            : n.clone
            ? (r[o] = yn(t[o]) ? $p(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function hr(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
var zi = {},
  b0 = {
    get exports() {
      return zi;
    },
    set exports(e) {
      zi = e;
    },
  },
  oe = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sa = Symbol.for('react.element'),
  ua = Symbol.for('react.portal'),
  Zi = Symbol.for('react.fragment'),
  Ji = Symbol.for('react.strict_mode'),
  qi = Symbol.for('react.profiler'),
  el = Symbol.for('react.provider'),
  tl = Symbol.for('react.context'),
  W0 = Symbol.for('react.server_context'),
  nl = Symbol.for('react.forward_ref'),
  rl = Symbol.for('react.suspense'),
  ol = Symbol.for('react.suspense_list'),
  il = Symbol.for('react.memo'),
  ll = Symbol.for('react.lazy'),
  V0 = Symbol.for('react.offscreen'),
  Tp;
Tp = Symbol.for('react.module.reference');
function gt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case sa:
        switch (((e = e.type), e)) {
          case Zi:
          case qi:
          case Ji:
          case rl:
          case ol:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case W0:
              case tl:
              case nl:
              case ll:
              case il:
              case el:
                return e;
              default:
                return t;
            }
        }
      case ua:
        return t;
    }
  }
}
oe.ContextConsumer = tl;
oe.ContextProvider = el;
oe.Element = sa;
oe.ForwardRef = nl;
oe.Fragment = Zi;
oe.Lazy = ll;
oe.Memo = il;
oe.Portal = ua;
oe.Profiler = qi;
oe.StrictMode = Ji;
oe.Suspense = rl;
oe.SuspenseList = ol;
oe.isAsyncMode = function () {
  return !1;
};
oe.isConcurrentMode = function () {
  return !1;
};
oe.isContextConsumer = function (e) {
  return gt(e) === tl;
};
oe.isContextProvider = function (e) {
  return gt(e) === el;
};
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === sa;
};
oe.isForwardRef = function (e) {
  return gt(e) === nl;
};
oe.isFragment = function (e) {
  return gt(e) === Zi;
};
oe.isLazy = function (e) {
  return gt(e) === ll;
};
oe.isMemo = function (e) {
  return gt(e) === il;
};
oe.isPortal = function (e) {
  return gt(e) === ua;
};
oe.isProfiler = function (e) {
  return gt(e) === qi;
};
oe.isStrictMode = function (e) {
  return gt(e) === Ji;
};
oe.isSuspense = function (e) {
  return gt(e) === rl;
};
oe.isSuspenseList = function (e) {
  return gt(e) === ol;
};
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Zi ||
    e === qi ||
    e === Ji ||
    e === rl ||
    e === ol ||
    e === V0 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ll ||
        e.$$typeof === il ||
        e.$$typeof === el ||
        e.$$typeof === tl ||
        e.$$typeof === nl ||
        e.$$typeof === Tp ||
        e.getModuleId !== void 0))
  );
};
oe.typeOf = gt;
(function (e) {
  e.exports = oe;
})(b0);
function Ae(e) {
  if (typeof e != 'string') throw new Error(hr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function H0(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const K0 = typeof window < 'u' ? M.useLayoutEffect : M.useEffect,
  Q0 = K0;
function jo(e) {
  const t = M.useRef(e);
  return (
    Q0(() => {
      t.current = e;
    }),
    M.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function Bc(...e) {
  return M.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              H0(n, t);
            });
          },
    e
  );
}
let sl = !0,
  ru = !1,
  Uc;
const Y0 = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  'datetime-local': !0,
};
function G0(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && Y0[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function X0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (sl = !0);
}
function rs() {
  sl = !1;
}
function Z0() {
  this.visibilityState === 'hidden' && ru && (sl = !0);
}
function J0(e) {
  e.addEventListener('keydown', X0, !0),
    e.addEventListener('mousedown', rs, !0),
    e.addEventListener('pointerdown', rs, !0),
    e.addEventListener('touchstart', rs, !0),
    e.addEventListener('visibilitychange', Z0, !0);
}
function q0(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return sl || G0(t);
}
function eg() {
  const e = M.useCallback((o) => {
      o != null && J0(o.ownerDocument);
    }, []),
    t = M.useRef(!1);
  function n() {
    return t.current
      ? ((ru = !0),
        window.clearTimeout(Uc),
        (Uc = window.setTimeout(() => {
          ru = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return q0(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function aa(e, t) {
  const n = F({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = F({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = F({}, i)),
              Object.keys(o).forEach((l) => {
                n[r][l] = aa(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function ca(e, t, n) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce(
          (i, l) => (l && (i.push(t(l)), n && n[l] && i.push(n[l])), i),
          []
        )
        .join(' ');
    }),
    r
  );
}
const bc = (e) => e,
  tg = () => {
    let e = bc;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = bc;
      },
    };
  },
  ng = tg(),
  Rp = ng,
  rg = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    readOnly: 'readOnly',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    required: 'required',
    selected: 'selected',
  };
function ul(e, t, n = 'Mui') {
  const r = rg[t];
  return r ? `${n}-${r}` : `${Rp.generate(e)}-${t}`;
}
function al(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = ul(e, o, n);
    }),
    r
  );
}
function De(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function og(e) {
  function t($, z, _, L, w) {
    for (
      var b = 0,
        T = 0,
        G = 0,
        X = 0,
        Z,
        U,
        ve = 0,
        he = 0,
        H,
        we = (H = Z = 0),
        Y = 0,
        $e = 0,
        pn = 0,
        Ee = 0,
        Vt = _.length,
        hn = Vt - 1,
        qe,
        B = '',
        le = '',
        Sr = '',
        Nn = '',
        Et;
      Y < Vt;

    ) {
      if (
        ((U = _.charCodeAt(Y)),
        Y === hn &&
          T + X + G + b !== 0 &&
          (T !== 0 && (U = T === 47 ? 10 : 47), (X = G = b = 0), Vt++, hn++),
        T + X + G + b === 0)
      ) {
        if (
          Y === hn &&
          (0 < $e && (B = B.replace(f, '')), 0 < B.trim().length)
        ) {
          switch (U) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              B += _.charAt(Y);
          }
          U = 59;
        }
        switch (U) {
          case 123:
            for (B = B.trim(), Z = B.charCodeAt(0), H = 1, Ee = ++Y; Y < Vt; ) {
              switch ((U = _.charCodeAt(Y))) {
                case 123:
                  H++;
                  break;
                case 125:
                  H--;
                  break;
                case 47:
                  switch ((U = _.charCodeAt(Y + 1))) {
                    case 42:
                    case 47:
                      e: {
                        for (we = Y + 1; we < hn; ++we)
                          switch (_.charCodeAt(we)) {
                            case 47:
                              if (
                                U === 42 &&
                                _.charCodeAt(we - 1) === 42 &&
                                Y + 2 !== we
                              ) {
                                Y = we + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (U === 47) {
                                Y = we + 1;
                                break e;
                              }
                          }
                        Y = we;
                      }
                  }
                  break;
                case 91:
                  U++;
                case 40:
                  U++;
                case 34:
                case 39:
                  for (; Y++ < hn && _.charCodeAt(Y) !== U; );
              }
              if (H === 0) break;
              Y++;
            }
            switch (
              ((H = _.substring(Ee, Y)),
              Z === 0 && (Z = (B = B.replace(p, '').trim()).charCodeAt(0)),
              Z)
            ) {
              case 64:
                switch (
                  (0 < $e && (B = B.replace(f, '')), (U = B.charCodeAt(1)), U)
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    $e = z;
                    break;
                  default:
                    $e = Ce;
                }
                if (
                  ((H = t(z, $e, H, U, w + 1)),
                  (Ee = H.length),
                  0 < C &&
                    (($e = n(Ce, B, pn)),
                    (Et = s(3, H, $e, z, ee, K, Ee, U, w, L)),
                    (B = $e.join('')),
                    Et !== void 0 &&
                      (Ee = (H = Et.trim()).length) === 0 &&
                      ((U = 0), (H = ''))),
                  0 < Ee)
                )
                  switch (U) {
                    case 115:
                      B = B.replace(P, l);
                    case 100:
                    case 109:
                    case 45:
                      H = B + '{' + H + '}';
                      break;
                    case 107:
                      (B = B.replace(c, '$1 $2')),
                        (H = B + '{' + H + '}'),
                        (H =
                          se === 1 || (se === 2 && i('@' + H, 3))
                            ? '@-webkit-' + H + '@' + H
                            : '@' + H);
                      break;
                    default:
                      (H = B + H), L === 112 && (H = ((le += H), ''));
                  }
                else H = '';
                break;
              default:
                H = t(z, n(z, B, pn), H, L, w + 1);
            }
            (Sr += H),
              (H = pn = $e = we = Z = 0),
              (B = ''),
              (U = _.charCodeAt(++Y));
            break;
          case 125:
          case 59:
            if (
              ((B = (0 < $e ? B.replace(f, '') : B).trim()),
              1 < (Ee = B.length))
            )
              switch (
                (we === 0 &&
                  ((Z = B.charCodeAt(0)), Z === 45 || (96 < Z && 123 > Z)) &&
                  (Ee = (B = B.replace(' ', ':')).length),
                0 < C &&
                  (Et = s(1, B, z, $, ee, K, le.length, L, w, L)) !== void 0 &&
                  (Ee = (B = Et.trim()).length) === 0 &&
                  (B = '\0\0'),
                (Z = B.charCodeAt(0)),
                (U = B.charCodeAt(1)),
                Z)
              ) {
                case 0:
                  break;
                case 64:
                  if (U === 105 || U === 99) {
                    Nn += B + _.charAt(Y);
                    break;
                  }
                default:
                  B.charCodeAt(Ee - 1) !== 58 &&
                    (le += o(B, Z, U, B.charCodeAt(2)));
              }
            (pn = $e = we = Z = 0), (B = ''), (U = _.charCodeAt(++Y));
        }
      }
      switch (U) {
        case 13:
        case 10:
          T === 47
            ? (T = 0)
            : 1 + Z === 0 &&
              L !== 107 &&
              0 < B.length &&
              (($e = 1), (B += '\0')),
            0 < C * j && s(0, B, z, $, ee, K, le.length, L, w, L),
            (K = 1),
            ee++;
          break;
        case 59:
        case 125:
          if (T + X + G + b === 0) {
            K++;
            break;
          }
        default:
          switch ((K++, (qe = _.charAt(Y)), U)) {
            case 9:
            case 32:
              if (X + b + T === 0)
                switch (ve) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    qe = '';
                    break;
                  default:
                    U !== 32 && (qe = ' ');
                }
              break;
            case 0:
              qe = '\\0';
              break;
            case 12:
              qe = '\\f';
              break;
            case 11:
              qe = '\\v';
              break;
            case 38:
              X + T + b === 0 && (($e = pn = 1), (qe = '\f' + qe));
              break;
            case 108:
              if (X + T + b + ne === 0 && 0 < we)
                switch (Y - we) {
                  case 2:
                    ve === 112 && _.charCodeAt(Y - 3) === 58 && (ne = ve);
                  case 8:
                    he === 111 && (ne = he);
                }
              break;
            case 58:
              X + T + b === 0 && (we = Y);
              break;
            case 44:
              T + G + X + b === 0 && (($e = 1), (qe += '\r'));
              break;
            case 34:
            case 39:
              T === 0 && (X = X === U ? 0 : X === 0 ? U : X);
              break;
            case 91:
              X + T + G === 0 && b++;
              break;
            case 93:
              X + T + G === 0 && b--;
              break;
            case 41:
              X + T + b === 0 && G--;
              break;
            case 40:
              if (X + T + b === 0) {
                if (Z === 0)
                  switch (2 * ve + 3 * he) {
                    case 533:
                      break;
                    default:
                      Z = 1;
                  }
                G++;
              }
              break;
            case 64:
              T + G + X + b + we + H === 0 && (H = 1);
              break;
            case 42:
            case 47:
              if (!(0 < X + b + G))
                switch (T) {
                  case 0:
                    switch (2 * U + 3 * _.charCodeAt(Y + 1)) {
                      case 235:
                        T = 47;
                        break;
                      case 220:
                        (Ee = Y), (T = 42);
                    }
                    break;
                  case 42:
                    U === 47 &&
                      ve === 42 &&
                      Ee + 2 !== Y &&
                      (_.charCodeAt(Ee + 2) === 33 &&
                        (le += _.substring(Ee, Y + 1)),
                      (qe = ''),
                      (T = 0));
                }
          }
          T === 0 && (B += qe);
      }
      (he = ve), (ve = U), Y++;
    }
    if (((Ee = le.length), 0 < Ee)) {
      if (
        (($e = z),
        0 < C &&
          ((Et = s(2, le, $e, $, ee, K, Ee, L, w, L)),
          Et !== void 0 && (le = Et).length === 0))
      )
        return Nn + le + Sr;
      if (((le = $e.join(',') + '{' + le + '}'), se * ne !== 0)) {
        switch ((se !== 2 || i(le, 2) || (ne = 0), ne)) {
          case 111:
            le = le.replace(y, ':-moz-$1') + le;
            break;
          case 112:
            le =
              le.replace(h, '::-webkit-input-$1') +
              le.replace(h, '::-moz-$1') +
              le.replace(h, ':-ms-input-$1') +
              le;
        }
        ne = 0;
      }
    }
    return Nn + le + Sr;
  }
  function n($, z, _) {
    var L = z.trim().split(E);
    z = L;
    var w = L.length,
      b = $.length;
    switch (b) {
      case 0:
      case 1:
        var T = 0;
        for ($ = b === 0 ? '' : $[0] + ' '; T < w; ++T)
          z[T] = r($, z[T], _).trim();
        break;
      default:
        var G = (T = 0);
        for (z = []; T < w; ++T)
          for (var X = 0; X < b; ++X) z[G++] = r($[X] + ' ', L[T], _).trim();
    }
    return z;
  }
  function r($, z, _) {
    var L = z.charCodeAt(0);
    switch ((33 > L && (L = (z = z.trim()).charCodeAt(0)), L)) {
      case 38:
        return z.replace(d, '$1' + $.trim());
      case 58:
        return $.trim() + z.replace(d, '$1' + $.trim());
      default:
        if (0 < 1 * _ && 0 < z.indexOf('\f'))
          return z.replace(d, ($.charCodeAt(0) === 58 ? '' : '$1') + $.trim());
    }
    return $ + z;
  }
  function o($, z, _, L) {
    var w = $ + ';',
      b = 2 * z + 3 * _ + 4 * L;
    if (b === 944) {
      $ = w.indexOf(':', 9) + 1;
      var T = w.substring($, w.length - 1).trim();
      return (
        (T = w.substring(0, $).trim() + T + ';'),
        se === 1 || (se === 2 && i(T, 1)) ? '-webkit-' + T + T : T
      );
    }
    if (se === 0 || (se === 2 && !i(w, 1))) return w;
    switch (b) {
      case 1015:
        return w.charCodeAt(10) === 97 ? '-webkit-' + w + w : w;
      case 951:
        return w.charCodeAt(3) === 116 ? '-webkit-' + w + w : w;
      case 963:
        return w.charCodeAt(5) === 110 ? '-webkit-' + w + w : w;
      case 1009:
        if (w.charCodeAt(4) !== 100) break;
      case 969:
      case 942:
        return '-webkit-' + w + w;
      case 978:
        return '-webkit-' + w + '-moz-' + w + w;
      case 1019:
      case 983:
        return '-webkit-' + w + '-moz-' + w + '-ms-' + w + w;
      case 883:
        if (w.charCodeAt(8) === 45) return '-webkit-' + w + w;
        if (0 < w.indexOf('image-set(', 11))
          return w.replace(V, '$1-webkit-$2') + w;
        break;
      case 932:
        if (w.charCodeAt(4) === 45)
          switch (w.charCodeAt(5)) {
            case 103:
              return (
                '-webkit-box-' +
                w.replace('-grow', '') +
                '-webkit-' +
                w +
                '-ms-' +
                w.replace('grow', 'positive') +
                w
              );
            case 115:
              return (
                '-webkit-' + w + '-ms-' + w.replace('shrink', 'negative') + w
              );
            case 98:
              return (
                '-webkit-' +
                w +
                '-ms-' +
                w.replace('basis', 'preferred-size') +
                w
              );
          }
        return '-webkit-' + w + '-ms-' + w + w;
      case 964:
        return '-webkit-' + w + '-ms-flex-' + w + w;
      case 1023:
        if (w.charCodeAt(8) !== 99) break;
        return (
          (T = w
            .substring(w.indexOf(':', 15))
            .replace('flex-', '')
            .replace('space-between', 'justify')),
          '-webkit-box-pack' + T + '-webkit-' + w + '-ms-flex-pack' + T + w
        );
      case 1005:
        return v.test(w)
          ? w.replace(S, ':-webkit-') + w.replace(S, ':-moz-') + w
          : w;
      case 1e3:
        switch (
          ((T = w.substring(13).trim()),
          (z = T.indexOf('-') + 1),
          T.charCodeAt(0) + T.charCodeAt(z))
        ) {
          case 226:
            T = w.replace(x, 'tb');
            break;
          case 232:
            T = w.replace(x, 'tb-rl');
            break;
          case 220:
            T = w.replace(x, 'lr');
            break;
          default:
            return w;
        }
        return '-webkit-' + w + '-ms-' + T + w;
      case 1017:
        if (w.indexOf('sticky', 9) === -1) break;
      case 975:
        switch (
          ((z = (w = $).length - 10),
          (T = (w.charCodeAt(z) === 33 ? w.substring(0, z) : w)
            .substring($.indexOf(':', 7) + 1)
            .trim()),
          (b = T.charCodeAt(0) + (T.charCodeAt(7) | 0)))
        ) {
          case 203:
            if (111 > T.charCodeAt(8)) break;
          case 115:
            w = w.replace(T, '-webkit-' + T) + ';' + w;
            break;
          case 207:
          case 102:
            w =
              w.replace(T, '-webkit-' + (102 < b ? 'inline-' : '') + 'box') +
              ';' +
              w.replace(T, '-webkit-' + T) +
              ';' +
              w.replace(T, '-ms-' + T + 'box') +
              ';' +
              w;
        }
        return w + ';';
      case 938:
        if (w.charCodeAt(5) === 45)
          switch (w.charCodeAt(6)) {
            case 105:
              return (
                (T = w.replace('-items', '')),
                '-webkit-' + w + '-webkit-box-' + T + '-ms-flex-' + T + w
              );
            case 115:
              return '-webkit-' + w + '-ms-flex-item-' + w.replace(O, '') + w;
            default:
              return (
                '-webkit-' +
                w +
                '-ms-flex-line-pack' +
                w.replace('align-content', '').replace(O, '') +
                w
              );
          }
        break;
      case 973:
      case 989:
        if (w.charCodeAt(3) !== 45 || w.charCodeAt(4) === 122) break;
      case 931:
      case 953:
        if (I.test($) === !0)
          return (T = $.substring($.indexOf(':') + 1)).charCodeAt(0) === 115
            ? o($.replace('stretch', 'fill-available'), z, _, L).replace(
                ':fill-available',
                ':stretch'
              )
            : w.replace(T, '-webkit-' + T) +
                w.replace(T, '-moz-' + T.replace('fill-', '')) +
                w;
        break;
      case 962:
        if (
          ((w =
            '-webkit-' + w + (w.charCodeAt(5) === 102 ? '-ms-' + w : '') + w),
          _ + L === 211 &&
            w.charCodeAt(13) === 105 &&
            0 < w.indexOf('transform', 10))
        )
          return (
            w.substring(0, w.indexOf(';', 27) + 1).replace(g, '$1-webkit-$2') +
            w
          );
    }
    return w;
  }
  function i($, z) {
    var _ = $.indexOf(z === 1 ? ':' : '{'),
      L = $.substring(0, z !== 3 ? _ : 10);
    return (
      (_ = $.substring(_ + 1, $.length - 1)),
      D(z !== 2 ? L : L.replace(A, '$1'), _, z)
    );
  }
  function l($, z) {
    var _ = o(z, z.charCodeAt(0), z.charCodeAt(1), z.charCodeAt(2));
    return _ !== z + ';'
      ? _.replace(R, ' or ($1)').substring(4)
      : '(' + z + ')';
  }
  function s($, z, _, L, w, b, T, G, X, Z) {
    for (var U = 0, ve = z, he; U < C; ++U)
      switch ((he = ae[U].call(m, $, ve, _, L, w, b, T, G, X, Z))) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ve = he;
      }
    if (ve !== z) return ve;
  }
  function u($) {
    switch ($) {
      case void 0:
      case null:
        C = ae.length = 0;
        break;
      default:
        if (typeof $ == 'function') ae[C++] = $;
        else if (typeof $ == 'object')
          for (var z = 0, _ = $.length; z < _; ++z) u($[z]);
        else j = !!$ | 0;
    }
    return u;
  }
  function a($) {
    return (
      ($ = $.prefix),
      $ !== void 0 &&
        ((D = null),
        $
          ? typeof $ != 'function'
            ? (se = 1)
            : ((se = 2), (D = $))
          : (se = 0)),
      a
    );
  }
  function m($, z) {
    var _ = $;
    if ((33 > _.charCodeAt(0) && (_ = _.trim()), (q = _), (_ = [q]), 0 < C)) {
      var L = s(-1, z, _, _, ee, K, 0, 0, 0, 0);
      L !== void 0 && typeof L == 'string' && (z = L);
    }
    var w = t(Ce, _, z, 0, 0);
    return (
      0 < C &&
        ((L = s(-2, w, _, _, ee, K, w.length, 0, 0, 0)),
        L !== void 0 && (w = L)),
      (q = ''),
      (ne = 0),
      (K = ee = 1),
      w
    );
  }
  var p = /^\0+/g,
    f = /[\0\r\f]/g,
    S = /: */g,
    v = /zoo|gra/,
    g = /([,: ])(transform)/g,
    E = /,\r+?/g,
    d = /([\t\r\n ])*\f?&/g,
    c = /@(k\w+)\s*(\S*)\s*/,
    h = /::(place)/g,
    y = /:(read-only)/g,
    x = /[svh]\w+-[tblr]{2}/,
    P = /\(\s*(.*)\s*\)/g,
    R = /([\s\S]*?);/g,
    O = /-self|flex-/g,
    A = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
    I = /stretch|:\s*\w+\-(?:conte|avail)/,
    V = /([^-])(image-set\()/,
    K = 1,
    ee = 1,
    ne = 0,
    se = 1,
    Ce = [],
    ae = [],
    C = 0,
    D = null,
    j = 0,
    q = '';
  return (m.use = u), (m.set = a), e !== void 0 && a(e), m;
}
var ig = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1,
};
function lg(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var sg =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Wc = lg(function (e) {
    return (
      sg.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  ou = {},
  ug = {
    get exports() {
      return ou;
    },
    set exports(e) {
      ou = e;
    },
  },
  ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Me = typeof Symbol == 'function' && Symbol.for,
  fa = Me ? Symbol.for('react.element') : 60103,
  da = Me ? Symbol.for('react.portal') : 60106,
  cl = Me ? Symbol.for('react.fragment') : 60107,
  fl = Me ? Symbol.for('react.strict_mode') : 60108,
  dl = Me ? Symbol.for('react.profiler') : 60114,
  pl = Me ? Symbol.for('react.provider') : 60109,
  hl = Me ? Symbol.for('react.context') : 60110,
  pa = Me ? Symbol.for('react.async_mode') : 60111,
  ml = Me ? Symbol.for('react.concurrent_mode') : 60111,
  gl = Me ? Symbol.for('react.forward_ref') : 60112,
  yl = Me ? Symbol.for('react.suspense') : 60113,
  ag = Me ? Symbol.for('react.suspense_list') : 60120,
  vl = Me ? Symbol.for('react.memo') : 60115,
  wl = Me ? Symbol.for('react.lazy') : 60116,
  cg = Me ? Symbol.for('react.block') : 60121,
  fg = Me ? Symbol.for('react.fundamental') : 60117,
  dg = Me ? Symbol.for('react.responder') : 60118,
  pg = Me ? Symbol.for('react.scope') : 60119;
function st(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case fa:
        switch (((e = e.type), e)) {
          case pa:
          case ml:
          case cl:
          case dl:
          case fl:
          case yl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case hl:
              case gl:
              case wl:
              case vl:
              case pl:
                return e;
              default:
                return t;
            }
        }
      case da:
        return t;
    }
  }
}
function Op(e) {
  return st(e) === ml;
}
ie.AsyncMode = pa;
ie.ConcurrentMode = ml;
ie.ContextConsumer = hl;
ie.ContextProvider = pl;
ie.Element = fa;
ie.ForwardRef = gl;
ie.Fragment = cl;
ie.Lazy = wl;
ie.Memo = vl;
ie.Portal = da;
ie.Profiler = dl;
ie.StrictMode = fl;
ie.Suspense = yl;
ie.isAsyncMode = function (e) {
  return Op(e) || st(e) === pa;
};
ie.isConcurrentMode = Op;
ie.isContextConsumer = function (e) {
  return st(e) === hl;
};
ie.isContextProvider = function (e) {
  return st(e) === pl;
};
ie.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fa;
};
ie.isForwardRef = function (e) {
  return st(e) === gl;
};
ie.isFragment = function (e) {
  return st(e) === cl;
};
ie.isLazy = function (e) {
  return st(e) === wl;
};
ie.isMemo = function (e) {
  return st(e) === vl;
};
ie.isPortal = function (e) {
  return st(e) === da;
};
ie.isProfiler = function (e) {
  return st(e) === dl;
};
ie.isStrictMode = function (e) {
  return st(e) === fl;
};
ie.isSuspense = function (e) {
  return st(e) === yl;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === cl ||
    e === ml ||
    e === dl ||
    e === fl ||
    e === yl ||
    e === ag ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === wl ||
        e.$$typeof === vl ||
        e.$$typeof === pl ||
        e.$$typeof === hl ||
        e.$$typeof === gl ||
        e.$$typeof === fg ||
        e.$$typeof === dg ||
        e.$$typeof === pg ||
        e.$$typeof === cg))
  );
};
ie.typeOf = st;
(function (e) {
  e.exports = ie;
})(ug);
var ha = ou,
  hg = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0,
  },
  mg = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  gg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  zp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ma = {};
ma[ha.ForwardRef] = gg;
ma[ha.Memo] = zp;
function Vc(e) {
  return ha.isMemo(e) ? zp : ma[e.$$typeof] || hg;
}
var yg = Object.defineProperty,
  vg = Object.getOwnPropertyNames,
  Hc = Object.getOwnPropertySymbols,
  wg = Object.getOwnPropertyDescriptor,
  Sg = Object.getPrototypeOf,
  Kc = Object.prototype;
function Ip(e, t, n) {
  if (typeof t != 'string') {
    if (Kc) {
      var r = Sg(t);
      r && r !== Kc && Ip(e, r, n);
    }
    var o = vg(t);
    Hc && (o = o.concat(Hc(t)));
    for (var i = Vc(e), l = Vc(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!mg[u] && !(n && n[u]) && !(l && l[u]) && !(i && i[u])) {
        var a = wg(t, u);
        try {
          yg(e, u, a);
        } catch {}
      }
    }
  }
  return e;
}
var xg = Ip;
function At() {
  return (At =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    }).apply(this, arguments);
}
var Qc = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  iu = function (e) {
    return (
      e !== null &&
      typeof e == 'object' &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        '[object Object]' &&
      !zi.typeOf(e)
    );
  },
  Ii = Object.freeze([]),
  sn = Object.freeze({});
function fo(e) {
  return typeof e == 'function';
}
function Yc(e) {
  return e.displayName || e.name || 'Component';
}
function ga(e) {
  return e && typeof e.styledComponentId == 'string';
}
var mr =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  ya = typeof window < 'u' && 'HTMLElement' in window,
  kg = Boolean(
    typeof SC_DISABLE_SPEEDY == 'boolean'
      ? SC_DISABLE_SPEEDY
      : typeof process < 'u' &&
          process.env !== void 0 &&
          ({}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
          {}.REACT_APP_SC_DISABLE_SPEEDY !== ''
            ? {}.REACT_APP_SC_DISABLE_SPEEDY !== 'false' &&
              {}.REACT_APP_SC_DISABLE_SPEEDY
            : {}.SC_DISABLE_SPEEDY !== void 0 && {}.SC_DISABLE_SPEEDY !== ''
            ? {}.SC_DISABLE_SPEEDY !== 'false' && {}.SC_DISABLE_SPEEDY
            : !1)
  );
function vo(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  throw new Error(
    'An error occurred. See https://git.io/JUIaE#' +
      e +
      ' for more information.' +
      (n.length > 0 ? ' Args: ' + n.join(', ') : '')
  );
}
var Cg = (function () {
    function e(n) {
      (this.groupSizes = new Uint32Array(512)),
        (this.length = 512),
        (this.tag = n);
    }
    var t = e.prototype;
    return (
      (t.indexOfGroup = function (n) {
        for (var r = 0, o = 0; o < n; o++) r += this.groupSizes[o];
        return r;
      }),
      (t.insertRules = function (n, r) {
        if (n >= this.groupSizes.length) {
          for (var o = this.groupSizes, i = o.length, l = i; n >= l; )
            (l <<= 1) < 0 && vo(16, '' + n);
          (this.groupSizes = new Uint32Array(l)),
            this.groupSizes.set(o),
            (this.length = l);
          for (var s = i; s < l; s++) this.groupSizes[s] = 0;
        }
        for (var u = this.indexOfGroup(n + 1), a = 0, m = r.length; a < m; a++)
          this.tag.insertRule(u, r[a]) && (this.groupSizes[n]++, u++);
      }),
      (t.clearGroup = function (n) {
        if (n < this.length) {
          var r = this.groupSizes[n],
            o = this.indexOfGroup(n),
            i = o + r;
          this.groupSizes[n] = 0;
          for (var l = o; l < i; l++) this.tag.deleteRule(o);
        }
      }),
      (t.getGroup = function (n) {
        var r = '';
        if (n >= this.length || this.groupSizes[n] === 0) return r;
        for (
          var o = this.groupSizes[n],
            i = this.indexOfGroup(n),
            l = i + o,
            s = i;
          s < l;
          s++
        )
          r +=
            this.tag.getRule(s) +
            `/*!sc*/
`;
        return r;
      }),
      e
    );
  })(),
  oi = new Map(),
  Mi = new Map(),
  Vr = 1,
  Fo = function (e) {
    if (oi.has(e)) return oi.get(e);
    for (; Mi.has(Vr); ) Vr++;
    var t = Vr++;
    return oi.set(e, t), Mi.set(t, e), t;
  },
  Eg = function (e) {
    return Mi.get(e);
  },
  Pg = function (e, t) {
    t >= Vr && (Vr = t + 1), oi.set(e, t), Mi.set(t, e);
  },
  _g = 'style[' + mr + '][data-styled-version="5.3.8"]',
  $g = new RegExp('^' + mr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Tg = function (e, t, n) {
    for (var r, o = n.split(','), i = 0, l = o.length; i < l; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  Rg = function (e, t) {
    for (
      var n = (t.textContent || '').split(`/*!sc*/
`),
        r = [],
        o = 0,
        i = n.length;
      o < i;
      o++
    ) {
      var l = n[o].trim();
      if (l) {
        var s = l.match($g);
        if (s) {
          var u = 0 | parseInt(s[1], 10),
            a = s[2];
          u !== 0 && (Pg(a, u), Tg(e, a, s[3]), e.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(l);
      }
    }
  },
  Og = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  Mp = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (s) {
        for (var u = s.childNodes, a = u.length; a >= 0; a--) {
          var m = u[a];
          if (m && m.nodeType === 1 && m.hasAttribute(mr)) return m;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(mr, 'active'),
      r.setAttribute('data-styled-version', '5.3.8');
    var l = Og();
    return l && r.setAttribute('nonce', l), n.insertBefore(r, i), r;
  },
  zg = (function () {
    function e(n) {
      var r = (this.element = Mp(n));
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, l = 0, s = i.length; l < s; l++) {
            var u = i[l];
            if (u.ownerNode === o) return u;
          }
          vo(17);
        })(r)),
        (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        try {
          return this.sheet.insertRule(r, n), this.length++, !0;
        } catch {
          return !1;
        }
      }),
      (t.deleteRule = function (n) {
        this.sheet.deleteRule(n), this.length--;
      }),
      (t.getRule = function (n) {
        var r = this.sheet.cssRules[n];
        return r !== void 0 && typeof r.cssText == 'string' ? r.cssText : '';
      }),
      e
    );
  })(),
  Ig = (function () {
    function e(n) {
      var r = (this.element = Mp(n));
      (this.nodes = r.childNodes), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        if (n <= this.length && n >= 0) {
          var o = document.createTextNode(r),
            i = this.nodes[n];
          return this.element.insertBefore(o, i || null), this.length++, !0;
        }
        return !1;
      }),
      (t.deleteRule = function (n) {
        this.element.removeChild(this.nodes[n]), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.nodes[n].textContent : '';
      }),
      e
    );
  })(),
  Mg = (function () {
    function e(n) {
      (this.rules = []), (this.length = 0);
    }
    var t = e.prototype;
    return (
      (t.insertRule = function (n, r) {
        return (
          n <= this.length && (this.rules.splice(n, 0, r), this.length++, !0)
        );
      }),
      (t.deleteRule = function (n) {
        this.rules.splice(n, 1), this.length--;
      }),
      (t.getRule = function (n) {
        return n < this.length ? this.rules[n] : '';
      }),
      e
    );
  })(),
  Gc = ya,
  Ng = { isServer: !ya, useCSSOMInjection: !kg },
  Np = (function () {
    function e(n, r, o) {
      n === void 0 && (n = sn),
        r === void 0 && (r = {}),
        (this.options = At({}, Ng, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          ya &&
          Gc &&
          ((Gc = !1),
          (function (i) {
            for (
              var l = document.querySelectorAll(_g), s = 0, u = l.length;
              s < u;
              s++
            ) {
              var a = l[s];
              a &&
                a.getAttribute(mr) !== 'active' &&
                (Rg(i, a), a.parentNode && a.parentNode.removeChild(a));
            }
          })(this));
    }
    e.registerId = function (n) {
      return Fo(n);
    };
    var t = e.prototype;
    return (
      (t.reconstructWithOptions = function (n, r) {
        return (
          r === void 0 && (r = !0),
          new e(
            At({}, this.options, {}, n),
            this.gs,
            (r && this.names) || void 0
          )
        );
      }),
      (t.allocateGSInstance = function (n) {
        return (this.gs[n] = (this.gs[n] || 0) + 1);
      }),
      (t.getTag = function () {
        return (
          this.tag ||
          (this.tag =
            ((o = (r = this.options).isServer),
            (i = r.useCSSOMInjection),
            (l = r.target),
            (n = o ? new Mg(l) : i ? new zg(l) : new Ig(l)),
            new Cg(n)))
        );
        var n, r, o, i, l;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((Fo(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(Fo(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(Fo(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = '', l = 0; l < o; l++) {
            var s = Eg(l);
            if (s !== void 0) {
              var u = n.names.get(s),
                a = r.getGroup(l);
              if (u && a && u.size) {
                var m = mr + '.g' + l + '[id="' + s + '"]',
                  p = '';
                u !== void 0 &&
                  u.forEach(function (f) {
                    f.length > 0 && (p += f + ',');
                  }),
                  (i +=
                    '' +
                    a +
                    m +
                    '{content:"' +
                    p +
                    `"}/*!sc*/
`);
              }
            }
          }
          return i;
        })(this);
      }),
      e
    );
  })(),
  Ag = /(a)(d)/gi,
  Xc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function lu(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Xc(t % 52) + n;
  return (Xc(t % 52) + n).replace(Ag, '$1-$2');
}
var qn = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Ap = function (e) {
    return qn(5381, e);
  };
function Lg(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (fo(n) && !ga(n)) return !1;
  }
  return !0;
}
var Dg = Ap('5.3.8'),
  jg = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && Lg(t)),
        (this.componentId = n),
        (this.baseHash = qn(Dg, n)),
        (this.baseStyle = r),
        Np.registerId(n);
    }
    return (
      (e.prototype.generateAndInjectStyles = function (t, n, r) {
        var o = this.componentId,
          i = [];
        if (
          (this.baseStyle &&
            i.push(this.baseStyle.generateAndInjectStyles(t, n, r)),
          this.isStatic && !r.hash)
        )
          if (this.staticRulesId && n.hasNameForId(o, this.staticRulesId))
            i.push(this.staticRulesId);
          else {
            var l = gr(this.rules, t, n, r).join(''),
              s = lu(qn(this.baseHash, l) >>> 0);
            if (!n.hasNameForId(o, s)) {
              var u = r(l, '.' + s, void 0, o);
              n.insertRules(o, s, u);
            }
            i.push(s), (this.staticRulesId = s);
          }
        else {
          for (
            var a = this.rules.length,
              m = qn(this.baseHash, r.hash),
              p = '',
              f = 0;
            f < a;
            f++
          ) {
            var S = this.rules[f];
            if (typeof S == 'string') p += S;
            else if (S) {
              var v = gr(S, t, n, r),
                g = Array.isArray(v) ? v.join('') : v;
              (m = qn(m, g + f)), (p += g);
            }
          }
          if (p) {
            var E = lu(m >>> 0);
            if (!n.hasNameForId(o, E)) {
              var d = r(p, '.' + E, void 0, o);
              n.insertRules(o, E, d);
            }
            i.push(E);
          }
        }
        return i.join(' ');
      }),
      e
    );
  })(),
  Fg = /^\s*\/\/.*$/gm,
  Bg = [':', '[', '.', '#'];
function Ug(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? sn : e,
    l = i.options,
    s = l === void 0 ? sn : l,
    u = i.plugins,
    a = u === void 0 ? Ii : u,
    m = new og(s),
    p = [],
    f = (function (g) {
      function E(d) {
        if (d)
          try {
            g(d + '}');
          } catch {}
      }
      return function (d, c, h, y, x, P, R, O, A, I) {
        switch (d) {
          case 1:
            if (A === 0 && c.charCodeAt(0) === 64) return g(c + ';'), '';
            break;
          case 2:
            if (O === 0) return c + '/*|*/';
            break;
          case 3:
            switch (O) {
              case 102:
              case 112:
                return g(h[0] + c), '';
              default:
                return c + (I === 0 ? '/*|*/' : '');
            }
          case -2:
            c.split('/*|*/}').forEach(E);
        }
      };
    })(function (g) {
      p.push(g);
    }),
    S = function (g, E, d) {
      return (E === 0 && Bg.indexOf(d[n.length]) !== -1) || d.match(o)
        ? g
        : '.' + t;
    };
  function v(g, E, d, c) {
    c === void 0 && (c = '&');
    var h = g.replace(Fg, ''),
      y = E && d ? d + ' ' + E + ' { ' + h + ' }' : h;
    return (
      (t = c),
      (n = E),
      (r = new RegExp('\\' + n + '\\b', 'g')),
      (o = new RegExp('(\\' + n + '\\b){2,}')),
      m(d || !E ? '' : E, y)
    );
  }
  return (
    m.use(
      [].concat(a, [
        function (g, E, d) {
          g === 2 &&
            d.length &&
            d[0].lastIndexOf(n) > 0 &&
            (d[0] = d[0].replace(r, S));
        },
        f,
        function (g) {
          if (g === -2) {
            var E = p;
            return (p = []), E;
          }
        },
      ])
    ),
    (v.hash = a.length
      ? a
          .reduce(function (g, E) {
            return E.name || vo(15), qn(g, E.name);
          }, 5381)
          .toString()
      : ''),
    v
  );
}
var Lp = ft.createContext();
Lp.Consumer;
var Dp = ft.createContext(),
  bg = (Dp.Consumer, new Np()),
  su = Ug();
function Wg() {
  return M.useContext(Lp) || bg;
}
function Vg() {
  return M.useContext(Dp) || su;
}
var jp = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = su);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) ||
          o.insertRules(r.id, l, i(r.rules, l, '@keyframes'));
      }),
        (this.toString = function () {
          return vo(12, String(r.name));
        }),
        (this.name = t),
        (this.id = 'sc-keyframes-' + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = su), this.name + t.hash;
      }),
      e
    );
  })(),
  Hg = /([A-Z])/,
  Kg = /([A-Z])/g,
  Qg = /^ms-/,
  Yg = function (e) {
    return '-' + e.toLowerCase();
  };
function Zc(e) {
  return Hg.test(e) ? e.replace(Kg, Yg).replace(Qg, '-ms-') : e;
}
var Jc = function (e) {
  return e == null || e === !1 || e === '';
};
function gr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, s = e.length; l < s; l += 1)
      (o = gr(e[l], t, n, r)) !== '' &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Jc(e)) return '';
  if (ga(e)) return '.' + e.styledComponentId;
  if (fo(e)) {
    if (
      typeof (a = e) != 'function' ||
      (a.prototype && a.prototype.isReactComponent) ||
      !t
    )
      return e;
    var u = e(t);
    return gr(u, t, n, r);
  }
  var a;
  return e instanceof jp
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : iu(e)
    ? (function m(p, f) {
        var S,
          v,
          g = [];
        for (var E in p)
          p.hasOwnProperty(E) &&
            !Jc(p[E]) &&
            ((Array.isArray(p[E]) && p[E].isCss) || fo(p[E])
              ? g.push(Zc(E) + ':', p[E], ';')
              : iu(p[E])
              ? g.push.apply(g, m(p[E], E))
              : g.push(
                  Zc(E) +
                    ': ' +
                    ((S = E),
                    (v = p[E]) == null || typeof v == 'boolean' || v === ''
                      ? ''
                      : typeof v != 'number' || v === 0 || S in ig
                      ? String(v).trim()
                      : v + 'px') +
                    ';'
                ));
        return f ? [f + ' {'].concat(g, ['}']) : g;
      })(e)
    : e.toString();
}
var qc = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Fp(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return fo(e) || iu(e)
    ? qc(gr(Qc(Ii, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
    ? e
    : qc(gr(Qc(e, n)));
}
var Gg = function (e, t, n) {
    return (
      n === void 0 && (n = sn), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  Xg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Zg = /(^-|-$)/g;
function os(e) {
  return e.replace(Xg, '-').replace(Zg, '');
}
var Bp = function (e) {
  return lu(Ap(e) >>> 0);
};
function Bo(e) {
  return typeof e == 'string' && !0;
}
var uu = function (e) {
    return (
      typeof e == 'function' ||
      (typeof e == 'object' && e !== null && !Array.isArray(e))
    );
  },
  Jg = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype';
  };
function qg(e, t, n) {
  var r = e[n];
  uu(t) && uu(r) ? Up(r, t) : (e[n] = t);
}
function Up(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (uu(l)) for (var s in l) Jg(s) && qg(e, l[s], s);
  }
  return e;
}
var bp = ft.createContext();
bp.Consumer;
var is = {};
function Wp(e, t, n) {
  var r = ga(e),
    o = !Bo(e),
    i = t.attrs,
    l = i === void 0 ? Ii : i,
    s = t.componentId,
    u =
      s === void 0
        ? (function (c, h) {
            var y = typeof c != 'string' ? 'sc' : os(c);
            is[y] = (is[y] || 0) + 1;
            var x = y + '-' + Bp('5.3.8' + y + is[y]);
            return h ? h + '-' + x : x;
          })(t.displayName, t.parentComponentId)
        : s,
    a = t.displayName,
    m =
      a === void 0
        ? (function (c) {
            return Bo(c) ? 'styled.' + c : 'Styled(' + Yc(c) + ')';
          })(e)
        : a,
    p =
      t.displayName && t.componentId
        ? os(t.displayName) + '-' + t.componentId
        : t.componentId || u,
    f = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l,
    S = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (S = t.shouldForwardProp
      ? function (c, h, y) {
          return e.shouldForwardProp(c, h, y) && t.shouldForwardProp(c, h, y);
        }
      : e.shouldForwardProp);
  var v,
    g = new jg(n, p, r ? e.componentStyle : void 0),
    E = g.isStatic && l.length === 0,
    d = function (c, h) {
      return (function (y, x, P, R) {
        var O = y.attrs,
          A = y.componentStyle,
          I = y.defaultProps,
          V = y.foldedComponentIds,
          K = y.shouldForwardProp,
          ee = y.styledComponentId,
          ne = y.target,
          se = (function (L, w, b) {
            L === void 0 && (L = sn);
            var T = At({}, w, { theme: L }),
              G = {};
            return (
              b.forEach(function (X) {
                var Z,
                  U,
                  ve,
                  he = X;
                for (Z in (fo(he) && (he = he(T)), he))
                  T[Z] = G[Z] =
                    Z === 'className'
                      ? ((U = G[Z]),
                        (ve = he[Z]),
                        U && ve ? U + ' ' + ve : U || ve)
                      : he[Z];
              }),
              [T, G]
            );
          })(Gg(x, M.useContext(bp), I) || sn, x, O),
          Ce = se[0],
          ae = se[1],
          C = (function (L, w, b, T) {
            var G = Wg(),
              X = Vg(),
              Z = w
                ? L.generateAndInjectStyles(sn, G, X)
                : L.generateAndInjectStyles(b, G, X);
            return Z;
          })(A, R, Ce),
          D = P,
          j = ae.$as || x.$as || ae.as || x.as || ne,
          q = Bo(j),
          $ = ae !== x ? At({}, x, {}, ae) : x,
          z = {};
        for (var _ in $)
          _[0] !== '$' &&
            _ !== 'as' &&
            (_ === 'forwardedAs'
              ? (z.as = $[_])
              : (K ? K(_, Wc, j) : !q || Wc(_)) && (z[_] = $[_]));
        return (
          x.style &&
            ae.style !== x.style &&
            (z.style = At({}, x.style, {}, ae.style)),
          (z.className = Array.prototype
            .concat(V, ee, C !== ee ? C : null, x.className, ae.className)
            .filter(Boolean)
            .join(' ')),
          (z.ref = D),
          M.createElement(j, z)
        );
      })(v, c, h, E);
    };
  return (
    (d.displayName = m),
    ((v = ft.forwardRef(d)).attrs = f),
    (v.componentStyle = g),
    (v.displayName = m),
    (v.shouldForwardProp = S),
    (v.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : Ii),
    (v.styledComponentId = p),
    (v.target = r ? e.target : e),
    (v.withComponent = function (c) {
      var h = t.componentId,
        y = (function (P, R) {
          if (P == null) return {};
          var O,
            A,
            I = {},
            V = Object.keys(P);
          for (A = 0; A < V.length; A++)
            (O = V[A]), R.indexOf(O) >= 0 || (I[O] = P[O]);
          return I;
        })(t, ['componentId']),
        x = h && h + '-' + (Bo(c) ? c : os(Yc(c)));
      return Wp(c, At({}, y, { attrs: f, componentId: x }), n);
    }),
    Object.defineProperty(v, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (c) {
        this._foldedDefaultProps = r ? Up({}, e.defaultProps, c) : c;
      },
    }),
    (v.toString = function () {
      return '.' + v.styledComponentId;
    }),
    o &&
      xg(v, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    v
  );
}
var au = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = sn), !zi.isValidElementType(r)))
      return vo(1, String(r));
    var i = function () {
      return n(r, o, Fp.apply(void 0, arguments));
    };
    return (
      (i.withConfig = function (l) {
        return t(n, r, At({}, o, {}, l));
      }),
      (i.attrs = function (l) {
        return t(
          n,
          r,
          At({}, o, {
            attrs: Array.prototype.concat(o.attrs, l).filter(Boolean),
          })
        );
      }),
      i
    );
  })(Wp, e);
};
[
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'textPath',
  'tspan',
].forEach(function (e) {
  au[e] = au(e);
});
function va(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = Fp.apply(void 0, [e].concat(n)).join(''),
    i = Bp(o);
  return new jp(i, o);
}
const ef = au;
/**
 * @mui/styled-engine-sc v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Vp(e, t) {
  let n;
  return (
    t
      ? (n = ef(e).withConfig({
          displayName: t.label,
          shouldForwardProp: t.shouldForwardProp,
        }))
      : (n = ef(e)),
    n
  );
}
const ey = (e, t) => {
  e.componentStyle && (e.componentStyle.rules = t(e.componentStyle.rules));
};
function Hr(e, t) {
  return t ? Dt(e, t, { clone: !1 }) : e;
}
const wa = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  tf = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${wa[e]}px)`,
  };
function bt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || tf;
    return t.reduce((l, s, u) => ((l[i.up(i.keys[u])] = n(t[u])), l), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || tf;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || wa).indexOf(s) !== -1) {
        const u = i.up(s);
        l[u] = n(t[s], s);
      } else {
        const u = s;
        l[u] = t[u];
      }
      return l;
    }, {});
  }
  return n(t);
}
function ty(e = {}) {
  var t;
  return (
    ((t = e.keys) == null
      ? void 0
      : t.reduce((r, o) => {
          const i = e.up(o);
          return (r[i] = {}), r;
        }, {})) || {}
  );
}
function ny(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function Sl(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Ni(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = Sl(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function te(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const s = l[t],
        u = l.theme,
        a = Sl(u, r) || {};
      return bt(l, s, (p) => {
        let f = Ni(a, o, p);
        return (
          p === f &&
            typeof p == 'string' &&
            (f = Ni(a, o, `${t}${p === 'default' ? '' : Ae(p)}`, p)),
          n === !1 ? f : { [n]: f }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function xl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Hr(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function ry(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const oy = { m: 'margin', p: 'padding' },
  iy = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  nf = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  ly = ry((e) => {
    if (e.length > 2)
      if (nf[e]) e = nf[e];
      else return [e];
    const [t, n] = e.split(''),
      r = oy[t],
      o = iy[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Sa = [
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'marginInline',
    'marginInlineStart',
    'marginInlineEnd',
    'marginBlock',
    'marginBlockStart',
    'marginBlockEnd',
  ],
  xa = [
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'paddingInline',
    'paddingInlineStart',
    'paddingInlineEnd',
    'paddingBlock',
    'paddingBlockStart',
    'paddingBlockEnd',
  ];
[...Sa, ...xa];
function wo(e, t, n, r) {
  var o;
  const i = (o = Sl(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (l) => (typeof l == 'string' ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == 'string' ? l : i[l])
    : typeof i == 'function'
    ? i
    : () => {};
}
function Hp(e) {
  return wo(e, 'spacing', 8);
}
function So(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function sy(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = So(t, n)), r), {});
}
function uy(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = ly(n),
    i = sy(o, r),
    l = e[n];
  return bt(e, l, i);
}
function Kp(e, t) {
  const n = Hp(e.theme);
  return Object.keys(e)
    .map((r) => uy(e, t, r, n))
    .reduce(Hr, {});
}
function Se(e) {
  return Kp(e, Sa);
}
Se.propTypes = {};
Se.filterProps = Sa;
function xe(e) {
  return Kp(e, xa);
}
xe.propTypes = {};
xe.filterProps = xa;
function Tt(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
const ay = te({ prop: 'border', themeKey: 'borders', transform: Tt }),
  cy = te({ prop: 'borderTop', themeKey: 'borders', transform: Tt }),
  fy = te({ prop: 'borderRight', themeKey: 'borders', transform: Tt }),
  dy = te({ prop: 'borderBottom', themeKey: 'borders', transform: Tt }),
  py = te({ prop: 'borderLeft', themeKey: 'borders', transform: Tt }),
  hy = te({ prop: 'borderColor', themeKey: 'palette' }),
  my = te({ prop: 'borderTopColor', themeKey: 'palette' }),
  gy = te({ prop: 'borderRightColor', themeKey: 'palette' }),
  yy = te({ prop: 'borderBottomColor', themeKey: 'palette' }),
  vy = te({ prop: 'borderLeftColor', themeKey: 'palette' }),
  kl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = wo(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: So(t, r) });
      return bt(e, e.borderRadius, n);
    }
    return null;
  };
kl.propTypes = {};
kl.filterProps = ['borderRadius'];
xl(ay, cy, fy, dy, py, hy, my, gy, yy, vy, kl);
const Cl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = wo(e.theme, 'spacing', 8),
      n = (r) => ({ gap: So(t, r) });
    return bt(e, e.gap, n);
  }
  return null;
};
Cl.propTypes = {};
Cl.filterProps = ['gap'];
const El = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = wo(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: So(t, r) });
    return bt(e, e.columnGap, n);
  }
  return null;
};
El.propTypes = {};
El.filterProps = ['columnGap'];
const Pl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = wo(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: So(t, r) });
    return bt(e, e.rowGap, n);
  }
  return null;
};
Pl.propTypes = {};
Pl.filterProps = ['rowGap'];
const wy = te({ prop: 'gridColumn' }),
  Sy = te({ prop: 'gridRow' }),
  xy = te({ prop: 'gridAutoFlow' }),
  ky = te({ prop: 'gridAutoColumns' }),
  Cy = te({ prop: 'gridAutoRows' }),
  Ey = te({ prop: 'gridTemplateColumns' }),
  Py = te({ prop: 'gridTemplateRows' }),
  _y = te({ prop: 'gridTemplateAreas' }),
  $y = te({ prop: 'gridArea' });
xl(Cl, El, Pl, wy, Sy, xy, ky, Cy, Ey, Py, _y, $y);
function lr(e, t) {
  return t === 'grey' ? t : e;
}
const Ty = te({ prop: 'color', themeKey: 'palette', transform: lr }),
  Ry = te({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: lr,
  }),
  Oy = te({ prop: 'backgroundColor', themeKey: 'palette', transform: lr });
xl(Ty, Ry, Oy);
function tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const zy = te({ prop: 'width', transform: tt }),
  ka = (e) => {
    if (e.maxWidth !== void 0 && e.maxWidth !== null) {
      const t = (n) => {
        var r, o, i;
        return {
          maxWidth:
            ((r = e.theme) == null ||
            (o = r.breakpoints) == null ||
            (i = o.values) == null
              ? void 0
              : i[n]) ||
            wa[n] ||
            tt(n),
        };
      };
      return bt(e, e.maxWidth, t);
    }
    return null;
  };
ka.filterProps = ['maxWidth'];
const Iy = te({ prop: 'minWidth', transform: tt }),
  My = te({ prop: 'height', transform: tt }),
  Ny = te({ prop: 'maxHeight', transform: tt }),
  Ay = te({ prop: 'minHeight', transform: tt });
te({ prop: 'size', cssProperty: 'width', transform: tt });
te({ prop: 'size', cssProperty: 'height', transform: tt });
const Ly = te({ prop: 'boxSizing' });
xl(zy, ka, Iy, My, Ny, Ay, Ly);
const Dy = {
    border: { themeKey: 'borders', transform: Tt },
    borderTop: { themeKey: 'borders', transform: Tt },
    borderRight: { themeKey: 'borders', transform: Tt },
    borderBottom: { themeKey: 'borders', transform: Tt },
    borderLeft: { themeKey: 'borders', transform: Tt },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: kl },
    color: { themeKey: 'palette', transform: lr },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: lr,
    },
    backgroundColor: { themeKey: 'palette', transform: lr },
    p: { style: xe },
    pt: { style: xe },
    pr: { style: xe },
    pb: { style: xe },
    pl: { style: xe },
    px: { style: xe },
    py: { style: xe },
    padding: { style: xe },
    paddingTop: { style: xe },
    paddingRight: { style: xe },
    paddingBottom: { style: xe },
    paddingLeft: { style: xe },
    paddingX: { style: xe },
    paddingY: { style: xe },
    paddingInline: { style: xe },
    paddingInlineStart: { style: xe },
    paddingInlineEnd: { style: xe },
    paddingBlock: { style: xe },
    paddingBlockStart: { style: xe },
    paddingBlockEnd: { style: xe },
    m: { style: Se },
    mt: { style: Se },
    mr: { style: Se },
    mb: { style: Se },
    ml: { style: Se },
    mx: { style: Se },
    my: { style: Se },
    margin: { style: Se },
    marginTop: { style: Se },
    marginRight: { style: Se },
    marginBottom: { style: Se },
    marginLeft: { style: Se },
    marginX: { style: Se },
    marginY: { style: Se },
    marginInline: { style: Se },
    marginInlineStart: { style: Se },
    marginInlineEnd: { style: Se },
    marginBlock: { style: Se },
    marginBlockStart: { style: Se },
    marginBlockEnd: { style: Se },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ '@media print': { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Cl },
    rowGap: { style: Pl },
    columnGap: { style: El },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: 'zIndex' },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: 'shadows' },
    width: { transform: tt },
    maxWidth: { style: ka },
    minWidth: { transform: tt },
    height: { transform: tt },
    maxHeight: { transform: tt },
    minHeight: { transform: tt },
    boxSizing: {},
    fontFamily: { themeKey: 'typography' },
    fontSize: { themeKey: 'typography' },
    fontStyle: { themeKey: 'typography' },
    fontWeight: { themeKey: 'typography' },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: 'typography' },
  },
  _l = Dy;
function jy(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Fy(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function By() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: u = n, themeKey: a, transform: m, style: p } = s;
    if (r == null) return null;
    const f = Sl(o, a) || {};
    return p
      ? p(l)
      : bt(l, r, (v) => {
          let g = Ni(f, m, v);
          return (
            v === g &&
              typeof v == 'string' &&
              (g = Ni(f, m, `${n}${v === 'default' ? '' : Ae(v)}`, v)),
            u === !1 ? g : { [u]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : _l;
    function s(u) {
      let a = u;
      if (typeof u == 'function') a = u(i);
      else if (typeof u != 'object') return u;
      if (!a) return null;
      const m = ty(i.breakpoints),
        p = Object.keys(m);
      let f = m;
      return (
        Object.keys(a).forEach((S) => {
          const v = Fy(a[S], i);
          if (v != null)
            if (typeof v == 'object')
              if (l[S]) f = Hr(f, e(S, v, i, l));
              else {
                const g = bt({ theme: i }, v, (E) => ({ [S]: E }));
                jy(g, v) ? (f[S] = t({ sx: v, theme: i })) : (f = Hr(f, g));
              }
            else f = Hr(f, e(S, v, i, l));
        }),
        ny(p, f)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Qp = By();
Qp.filterProps = ['sx'];
const $l = Qp,
  Uy = ['sx'],
  by = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : _l;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Yp(e) {
  const { sx: t } = e,
    n = De(e, Uy),
    { systemProps: r, otherProps: o } = by(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == 'function'
      ? (i = (...l) => {
          const s = t(...l);
          return yn(s) ? F({}, r, s) : r;
        })
      : (i = F({}, r, t)),
    F({}, o, { sx: i })
  );
}
function Gp(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Gp(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function Qe() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Gp(e)) && (r && (r += ' '), (r += t));
  return r;
}
const Wy = ['values', 'unit', 'step'],
  Vy = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => F({}, n, { [r.key]: r.val }), {})
    );
  };
function Hy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = De(e, Wy),
    i = Vy(t),
    l = Object.keys(i);
  function s(f) {
    return `@media (min-width:${typeof t[f] == 'number' ? t[f] : f}${n})`;
  }
  function u(f) {
    return `@media (max-width:${
      (typeof t[f] == 'number' ? t[f] : f) - r / 100
    }${n})`;
  }
  function a(f, S) {
    const v = l.indexOf(S);
    return `@media (min-width:${
      typeof t[f] == 'number' ? t[f] : f
    }${n}) and (max-width:${
      (v !== -1 && typeof t[l[v]] == 'number' ? t[l[v]] : S) - r / 100
    }${n})`;
  }
  function m(f) {
    return l.indexOf(f) + 1 < l.length ? a(f, l[l.indexOf(f) + 1]) : s(f);
  }
  function p(f) {
    const S = l.indexOf(f);
    return S === 0
      ? s(l[1])
      : S === l.length - 1
      ? u(l[S])
      : a(f, l[l.indexOf(f) + 1]).replace('@media', '@media not all and');
  }
  return F(
    {
      keys: l,
      values: i,
      up: s,
      down: u,
      between: a,
      only: m,
      not: p,
      unit: n,
    },
    o
  );
}
const Ky = { borderRadius: 4 },
  Qy = Ky;
function Yy(e = 8) {
  if (e.mui) return e;
  const t = Hp({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == 'number' ? `${l}px` : l;
        })
        .join(' ');
  return (n.mui = !0), n;
}
const Gy = ['breakpoints', 'palette', 'spacing', 'shape'];
function Ca(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = De(e, Gy),
    s = Hy(n),
    u = Yy(o);
  let a = Dt(
    {
      breakpoints: s,
      direction: 'ltr',
      components: {},
      palette: F({ mode: 'light' }, r),
      spacing: u,
      shape: F({}, Qy, i),
    },
    l
  );
  return (
    (a = t.reduce((m, p) => Dt(m, p), a)),
    (a.unstable_sxConfig = F({}, _l, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (p) {
      return $l({ sx: p, theme: this });
    }),
    a
  );
}
const Xy = M.createContext(null),
  Zy = Xy;
function Jy() {
  return M.useContext(Zy);
}
function qy(e) {
  return Object.keys(e).length === 0;
}
function e1(e = null) {
  const t = Jy();
  return !t || qy(t) ? e : t;
}
const t1 = Ca();
function Xp(e = t1) {
  return e1(e);
}
const n1 = ['className', 'component'];
function r1(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: r,
    } = e,
    o = Vp('div', {
      shouldForwardProp: (l) => l !== 'theme' && l !== 'sx' && l !== 'as',
    })($l);
  return M.forwardRef(function (s, u) {
    const a = Xp(t),
      m = Yp(s),
      { className: p, component: f = 'div' } = m,
      S = De(m, n1);
    return Te(
      o,
      F({ as: f, ref: u, className: Qe(p, r ? r(n) : n), theme: a }, S)
    );
  });
}
const o1 = ['variant'];
function rf(e) {
  return e.length === 0;
}
function Zp(e) {
  const { variant: t } = e,
    n = De(e, o1);
  let r = t || '';
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === 'color'
          ? (r += rf(r) ? e[o] : Ae(e[o]))
          : (r += `${rf(r) ? o : Ae(o)}${Ae(e[o].toString())}`);
      }),
    r
  );
}
const i1 = [
    'name',
    'slot',
    'skipVariantsResolver',
    'skipSx',
    'overridesResolver',
  ],
  l1 = ['theme'],
  s1 = ['theme'];
function Or(e) {
  return Object.keys(e).length === 0;
}
function u1(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
const a1 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  c1 = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = Zp(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  f1 = (e, t, n, r) => {
    var o, i;
    const { ownerState: l = {} } = e,
      s = [],
      u =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      u &&
        u.forEach((a) => {
          let m = !0;
          Object.keys(a.props).forEach((p) => {
            l[p] !== a.props[p] && e[p] !== a.props[p] && (m = !1);
          }),
            m && s.push(t[Zp(a.props)]);
        }),
      s
    );
  };
function ii(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const d1 = Ca();
function p1(e = {}) {
  const {
      defaultTheme: t = d1,
      rootShouldForwardProp: n = ii,
      slotShouldForwardProp: r = ii,
    } = e,
    o = (i) => {
      const l = Or(i.theme) ? t : i.theme;
      return $l(F({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      ey(i, (h) => h.filter((y) => !(y != null && y.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: a,
          skipSx: m,
          overridesResolver: p,
        } = l,
        f = De(l, i1),
        S = a !== void 0 ? a : (u && u !== 'Root') || !1,
        v = m || !1;
      let g,
        E = ii;
      u === 'Root' ? (E = n) : u ? (E = r) : u1(i) && (E = void 0);
      const d = Vp(i, F({ shouldForwardProp: E, label: g }, f)),
        c = (h, ...y) => {
          const x = y
            ? y.map((A) =>
                typeof A == 'function' && A.__emotion_real !== A
                  ? (I) => {
                      let { theme: V } = I,
                        K = De(I, l1);
                      return A(F({ theme: Or(V) ? t : V }, K));
                    }
                  : A
              )
            : [];
          let P = h;
          s &&
            p &&
            x.push((A) => {
              const I = Or(A.theme) ? t : A.theme,
                V = a1(s, I);
              if (V) {
                const K = {};
                return (
                  Object.entries(V).forEach(([ee, ne]) => {
                    K[ee] =
                      typeof ne == 'function' ? ne(F({}, A, { theme: I })) : ne;
                  }),
                  p(A, K)
                );
              }
              return null;
            }),
            s &&
              !S &&
              x.push((A) => {
                const I = Or(A.theme) ? t : A.theme;
                return f1(A, c1(s, I), I, s);
              }),
            v || x.push(o);
          const R = x.length - y.length;
          if (Array.isArray(h) && R > 0) {
            const A = new Array(R).fill('');
            (P = [...h, ...A]), (P.raw = [...h.raw, ...A]);
          } else
            typeof h == 'function' &&
              h.__emotion_real !== h &&
              (P = (A) => {
                let { theme: I } = A,
                  V = De(A, s1);
                return h(F({ theme: Or(I) ? t : I }, V));
              });
          return d(P, ...x);
        };
      return d.withConfig && (c.withConfig = d.withConfig), c;
    }
  );
}
function h1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : aa(t.components[n].defaultProps, r);
}
function m1({ props: e, name: t, defaultTheme: n }) {
  const r = Xp(n);
  return h1({ theme: r, name: t, props: e });
}
function Ea(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function g1(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, 'g');
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? 'a' : ''}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(', ')})`
      : ''
  );
}
function On(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return On(g1(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(hr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === 'color') {
    if (
      ((r = r.split(' ')),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === '/' && (r[3] = r[3].slice(1)),
      ['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(
        o
      ) === -1)
    )
      throw new Error(hr(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function Tl(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf('rgb') !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf('hsl') !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf('color') !== -1
      ? (r = `${n} ${r.join(' ')}`)
      : (r = `${r.join(', ')}`),
    `${t}(${r})`
  );
}
function y1(e) {
  e = On(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (a, m = (a + n / 30) % 12) =>
      o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = 'rgb';
  const u = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === 'hsla' && ((s += 'a'), u.push(t[3])), Tl({ type: s, values: u })
  );
}
function of(e) {
  e = On(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? On(y1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== 'color' && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function v1(e, t) {
  const n = of(e),
    r = of(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Uo(e, t) {
  return (
    (e = On(e)),
    (t = Ea(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    Tl(e)
  );
}
function w1(e, t) {
  if (((e = On(e)), (t = Ea(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return Tl(e);
}
function S1(e, t) {
  if (((e = On(e)), (t = Ea(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return Tl(e);
}
function x1(e, t) {
  return F(
    {
      toolbar: {
        minHeight: 56,
        [e.up('xs')]: { '@media (orientation: landscape)': { minHeight: 48 } },
        [e.up('sm')]: { minHeight: 64 },
      },
    },
    t
  );
}
const k1 = ['mode', 'contrastThreshold', 'tonalOffset'],
  lf = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: co.white, default: co.white },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  ls = {
    text: {
      primary: co.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: co.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function sf(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = S1(e.main, o))
      : t === 'dark' && (e.dark = w1(e.main, i)));
}
function C1(e = 'light') {
  return e === 'dark'
    ? { main: jn[200], light: jn[50], dark: jn[400] }
    : { main: jn[700], light: jn[400], dark: jn[800] };
}
function E1(e = 'light') {
  return e === 'dark'
    ? { main: Dn[200], light: Dn[50], dark: Dn[400] }
    : { main: Dn[500], light: Dn[300], dark: Dn[700] };
}
function P1(e = 'light') {
  return e === 'dark'
    ? { main: Ln[500], light: Ln[300], dark: Ln[700] }
    : { main: Ln[700], light: Ln[400], dark: Ln[800] };
}
function _1(e = 'light') {
  return e === 'dark'
    ? { main: Fn[400], light: Fn[300], dark: Fn[700] }
    : { main: Fn[700], light: Fn[500], dark: Fn[900] };
}
function $1(e = 'light') {
  return e === 'dark'
    ? { main: Bn[400], light: Bn[300], dark: Bn[700] }
    : { main: Bn[800], light: Bn[500], dark: Bn[900] };
}
function T1(e = 'light') {
  return e === 'dark'
    ? { main: Rr[400], light: Rr[300], dark: Rr[700] }
    : { main: '#ed6c02', light: Rr[500], dark: Rr[900] };
}
function R1(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = De(e, k1),
    i = e.primary || C1(t),
    l = e.secondary || E1(t),
    s = e.error || P1(t),
    u = e.info || _1(t),
    a = e.success || $1(t),
    m = e.warning || T1(t);
  function p(g) {
    return v1(g, ls.text.primary) >= n ? ls.text.primary : lf.text.primary;
  }
  const f = ({
      color: g,
      name: E,
      mainShade: d = 500,
      lightShade: c = 300,
      darkShade: h = 700,
    }) => {
      if (
        ((g = F({}, g)),
        !g.main && g[d] && (g.main = g[d]),
        !g.hasOwnProperty('main'))
      )
        throw new Error(hr(11, E ? ` (${E})` : '', d));
      if (typeof g.main != 'string')
        throw new Error(hr(12, E ? ` (${E})` : '', JSON.stringify(g.main)));
      return (
        sf(g, 'light', c, r),
        sf(g, 'dark', h, r),
        g.contrastText || (g.contrastText = p(g.main)),
        g
      );
    },
    S = { dark: ls, light: lf };
  return Dt(
    F(
      {
        common: F({}, co),
        mode: t,
        primary: f({ color: i, name: 'primary' }),
        secondary: f({
          color: l,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: f({ color: s, name: 'error' }),
        warning: f({ color: m, name: 'warning' }),
        info: f({ color: u, name: 'info' }),
        success: f({ color: a, name: 'success' }),
        grey: U0,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: f,
        tonalOffset: r,
      },
      S[t]
    ),
    o
  );
}
const O1 = [
  'fontFamily',
  'fontSize',
  'fontWeightLight',
  'fontWeightRegular',
  'fontWeightMedium',
  'fontWeightBold',
  'htmlFontSize',
  'allVariants',
  'pxToRem',
];
function z1(e) {
  return Math.round(e * 1e5) / 1e5;
}
const uf = { textTransform: 'uppercase' },
  af = '"Roboto", "Helvetica", "Arial", sans-serif';
function I1(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = af,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: u = 700,
      htmlFontSize: a = 16,
      allVariants: m,
      pxToRem: p,
    } = n,
    f = De(n, O1),
    S = o / 14,
    v = p || ((d) => `${(d / a) * S}rem`),
    g = (d, c, h, y, x) =>
      F(
        { fontFamily: r, fontWeight: d, fontSize: v(c), lineHeight: h },
        r === af ? { letterSpacing: `${z1(y / c)}em` } : {},
        x,
        m
      ),
    E = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(l, 48, 1.167, 0),
      h4: g(l, 34, 1.235, 0.25),
      h5: g(l, 24, 1.334, 0),
      h6: g(s, 20, 1.6, 0.15),
      subtitle1: g(l, 16, 1.75, 0.15),
      subtitle2: g(s, 14, 1.57, 0.1),
      body1: g(l, 16, 1.5, 0.15),
      body2: g(l, 14, 1.43, 0.15),
      button: g(s, 14, 1.75, 0.4, uf),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, uf),
    };
  return Dt(
    F(
      {
        htmlFontSize: a,
        pxToRem: v,
        fontFamily: r,
        fontSize: o,
        fontWeightLight: i,
        fontWeightRegular: l,
        fontWeightMedium: s,
        fontWeightBold: u,
      },
      E
    ),
    f,
    { clone: !1 }
  );
}
const M1 = 0.2,
  N1 = 0.14,
  A1 = 0.12;
function de(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${M1})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${N1})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${A1})`,
  ].join(',');
}
const L1 = [
    'none',
    de(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    de(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    de(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    de(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    de(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    de(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    de(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    de(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    de(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    de(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    de(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    de(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    de(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    de(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    de(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    de(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    de(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    de(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    de(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    de(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    de(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    de(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    de(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    de(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  D1 = L1,
  j1 = ['duration', 'easing', 'delay'],
  F1 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  B1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function cf(e) {
  return `${Math.round(e)}ms`;
}
function U1(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function b1(e) {
  const t = F({}, F1, e.easing),
    n = F({}, B1, e.duration);
  return F(
    {
      getAutoHeightDuration: U1,
      create: (o = ['all'], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: u = 0,
        } = i;
        return (
          De(i, j1),
          (Array.isArray(o) ? o : [o])
            .map(
              (a) =>
                `${a} ${typeof l == 'string' ? l : cf(l)} ${s} ${
                  typeof u == 'string' ? u : cf(u)
                }`
            )
            .join(',')
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const W1 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  V1 = W1,
  H1 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function Jp(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = De(e, H1);
  if (e.vars) throw new Error(hr(18));
  const s = R1(r),
    u = Ca(e);
  let a = Dt(u, {
    mixins: x1(u.breakpoints, n),
    palette: s,
    shadows: D1.slice(),
    typography: I1(s, i),
    transitions: b1(o),
    zIndex: F({}, V1),
  });
  return (
    (a = Dt(a, l)),
    (a = t.reduce((m, p) => Dt(m, p), a)),
    (a.unstable_sxConfig = F({}, _l, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (p) {
      return $l({ sx: p, theme: this });
    }),
    a
  );
}
const K1 = Jp(),
  qp = K1;
function Rl({ props: e, name: t }) {
  return m1({ props: e, name: t, defaultTheme: qp });
}
const eh = (e) => ii(e) && e !== 'classes',
  Q1 = p1({ defaultTheme: qp, rootShouldForwardProp: eh }),
  Mn = Q1;
function cu(e, t) {
  return (
    (cu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    cu(e, t)
  );
}
function Y1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    cu(e, t);
}
const ff = ft.createContext(null);
function G1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Pa(e, t) {
  var n = function (i) {
      return t && M.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      M.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function X1(e, t) {
  (e = e || {}), (t = t || {});
  function n(m) {
    return m in t ? t[m] : e[m];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var l,
    s = {};
  for (var u in t) {
    if (r[u])
      for (l = 0; l < r[u].length; l++) {
        var a = r[u][l];
        s[r[u][l]] = n(a);
      }
    s[u] = n(u);
  }
  for (l = 0; l < o.length; l++) s[o[l]] = n(o[l]);
  return s;
}
function xn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Z1(e, t) {
  return Pa(e.children, function (n) {
    return M.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: xn(n, 'appear', e),
      enter: xn(n, 'enter', e),
      exit: xn(n, 'exit', e),
    });
  });
}
function J1(e, t, n) {
  var r = Pa(e.children),
    o = X1(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (M.isValidElement(l)) {
        var s = i in t,
          u = i in r,
          a = t[i],
          m = M.isValidElement(a) && !a.props.in;
        u && (!s || m)
          ? (o[i] = M.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: xn(l, 'exit', e),
              enter: xn(l, 'enter', e),
            }))
          : !u && s && !m
          ? (o[i] = M.cloneElement(l, { in: !1 }))
          : u &&
            s &&
            M.isValidElement(a) &&
            (o[i] = M.cloneElement(l, {
              onExited: n.bind(null, l),
              in: a.props.in,
              exit: xn(l, 'exit', e),
              enter: xn(l, 'enter', e),
            }));
      }
    }),
    o
  );
}
var q1 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  ev = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  _a = (function (e) {
    Y1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(G1(i));
      return (
        (i.state = {
          contextValue: { isMounting: !0 },
          handleExited: l,
          firstRender: !0,
        }),
        i
      );
    }
    var n = t.prototype;
    return (
      (n.componentDidMount = function () {
        (this.mounted = !0),
          this.setState({ contextValue: { isMounting: !1 } });
      }),
      (n.componentWillUnmount = function () {
        this.mounted = !1;
      }),
      (t.getDerivedStateFromProps = function (o, i) {
        var l = i.children,
          s = i.handleExited,
          u = i.firstRender;
        return { children: u ? Z1(o, s) : J1(o, l, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = Pa(this.props.children);
        o.key in l ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var u = F({}, s.children);
              return delete u[o.key], { children: u };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          l = o.childFactory,
          s = De(o, ['component', 'childFactory']),
          u = this.state.contextValue,
          a = q1(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? ft.createElement(ff.Provider, { value: u }, a)
            : ft.createElement(
                ff.Provider,
                { value: u },
                ft.createElement(i, s, a)
              )
        );
      }),
      t
    );
  })(ft.Component);
_a.propTypes = {};
_a.defaultProps = ev;
const tv = _a;
function nv(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: l,
      in: s,
      onExited: u,
      timeout: a,
    } = e,
    [m, p] = M.useState(!1),
    f = Qe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    S = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    v = Qe(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !s && !m && p(!0),
    M.useEffect(() => {
      if (!s && u != null) {
        const g = setTimeout(u, a);
        return () => {
          clearTimeout(g);
        };
      }
    }, [u, s, a]),
    Te('span', {
      className: f,
      style: S,
      children: Te('span', { className: v }),
    })
  );
}
const rv = al('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  ut = rv,
  ov = ['center', 'classes', 'className'];
let Ol = (e) => e,
  df,
  pf,
  hf,
  mf;
const fu = 550,
  iv = 80,
  lv = va(
    df ||
      (df = Ol`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)
  ),
  sv = va(
    pf ||
      (pf = Ol`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  uv = va(
    hf ||
      (hf = Ol`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)
  ),
  av = Mn('span', { name: 'MuiTouchRipple', slot: 'Root' })({
    overflow: 'hidden',
    pointerEvents: 'none',
    position: 'absolute',
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: 'inherit',
  }),
  cv = Mn(nv, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    mf ||
      (mf = Ol`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),
    ut.rippleVisible,
    lv,
    fu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ut.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    ut.child,
    ut.childLeaving,
    sv,
    fu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ut.childPulsate,
    uv,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  fv = M.forwardRef(function (t, n) {
    const r = Rl({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = De(r, ov),
      [u, a] = M.useState([]),
      m = M.useRef(0),
      p = M.useRef(null);
    M.useEffect(() => {
      p.current && (p.current(), (p.current = null));
    }, [u]);
    const f = M.useRef(!1),
      S = M.useRef(null),
      v = M.useRef(null),
      g = M.useRef(null);
    M.useEffect(
      () => () => {
        clearTimeout(S.current);
      },
      []
    );
    const E = M.useCallback(
        (y) => {
          const {
            pulsate: x,
            rippleX: P,
            rippleY: R,
            rippleSize: O,
            cb: A,
          } = y;
          a((I) => [
            ...I,
            Te(
              cv,
              {
                classes: {
                  ripple: Qe(i.ripple, ut.ripple),
                  rippleVisible: Qe(i.rippleVisible, ut.rippleVisible),
                  ripplePulsate: Qe(i.ripplePulsate, ut.ripplePulsate),
                  child: Qe(i.child, ut.child),
                  childLeaving: Qe(i.childLeaving, ut.childLeaving),
                  childPulsate: Qe(i.childPulsate, ut.childPulsate),
                },
                timeout: fu,
                pulsate: x,
                rippleX: P,
                rippleY: R,
                rippleSize: O,
              },
              m.current
            ),
          ]),
            (m.current += 1),
            (p.current = A);
        },
        [i]
      ),
      d = M.useCallback(
        (y = {}, x = {}, P = () => {}) => {
          const {
            pulsate: R = !1,
            center: O = o || x.pulsate,
            fakeElement: A = !1,
          } = x;
          if ((y == null ? void 0 : y.type) === 'mousedown' && f.current) {
            f.current = !1;
            return;
          }
          (y == null ? void 0 : y.type) === 'touchstart' && (f.current = !0);
          const I = A ? null : g.current,
            V = I
              ? I.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let K, ee, ne;
          if (
            O ||
            y === void 0 ||
            (y.clientX === 0 && y.clientY === 0) ||
            (!y.clientX && !y.touches)
          )
            (K = Math.round(V.width / 2)), (ee = Math.round(V.height / 2));
          else {
            const { clientX: se, clientY: Ce } =
              y.touches && y.touches.length > 0 ? y.touches[0] : y;
            (K = Math.round(se - V.left)), (ee = Math.round(Ce - V.top));
          }
          if (O)
            (ne = Math.sqrt((2 * V.width ** 2 + V.height ** 2) / 3)),
              ne % 2 === 0 && (ne += 1);
          else {
            const se =
                Math.max(Math.abs((I ? I.clientWidth : 0) - K), K) * 2 + 2,
              Ce =
                Math.max(Math.abs((I ? I.clientHeight : 0) - ee), ee) * 2 + 2;
            ne = Math.sqrt(se ** 2 + Ce ** 2);
          }
          y != null && y.touches
            ? v.current === null &&
              ((v.current = () => {
                E({
                  pulsate: R,
                  rippleX: K,
                  rippleY: ee,
                  rippleSize: ne,
                  cb: P,
                });
              }),
              (S.current = setTimeout(() => {
                v.current && (v.current(), (v.current = null));
              }, iv)))
            : E({ pulsate: R, rippleX: K, rippleY: ee, rippleSize: ne, cb: P });
        },
        [o, E]
      ),
      c = M.useCallback(() => {
        d({}, { pulsate: !0 });
      }, [d]),
      h = M.useCallback((y, x) => {
        if (
          (clearTimeout(S.current),
          (y == null ? void 0 : y.type) === 'touchend' && v.current)
        ) {
          v.current(),
            (v.current = null),
            (S.current = setTimeout(() => {
              h(y, x);
            }));
          return;
        }
        (v.current = null),
          a((P) => (P.length > 0 ? P.slice(1) : P)),
          (p.current = x);
      }, []);
    return (
      M.useImperativeHandle(n, () => ({ pulsate: c, start: d, stop: h }), [
        c,
        d,
        h,
      ]),
      Te(
        av,
        F({ className: Qe(ut.root, i.root, l), ref: g }, s, {
          children: Te(tv, { component: null, exit: !0, children: u }),
        })
      )
    );
  }),
  dv = fv;
function pv(e) {
  return ul('MuiButtonBase', e);
}
const hv = al('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  mv = hv,
  gv = [
    'action',
    'centerRipple',
    'children',
    'className',
    'component',
    'disabled',
    'disableRipple',
    'disableTouchRipple',
    'focusRipple',
    'focusVisibleClassName',
    'LinkComponent',
    'onBlur',
    'onClick',
    'onContextMenu',
    'onDragLeave',
    'onFocus',
    'onFocusVisible',
    'onKeyDown',
    'onKeyUp',
    'onMouseDown',
    'onMouseLeave',
    'onMouseUp',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
    'tabIndex',
    'TouchRippleProps',
    'touchRippleRef',
    'type',
  ],
  yv = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = ca({ root: ['root', t && 'disabled', n && 'focusVisible'] }, pv, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  vv = Mn('button', {
    name: 'MuiButtonBase',
    slot: 'Root',
    overridesResolver: (e, t) => t.root,
  })({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    WebkitAppearance: 'none',
    textDecoration: 'none',
    color: 'inherit',
    '&::-moz-focus-inner': { borderStyle: 'none' },
    [`&.${mv.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  wv = M.forwardRef(function (t, n) {
    const r = Rl({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: s,
        component: u = 'button',
        disabled: a = !1,
        disableRipple: m = !1,
        disableTouchRipple: p = !1,
        focusRipple: f = !1,
        LinkComponent: S = 'a',
        onBlur: v,
        onClick: g,
        onContextMenu: E,
        onDragLeave: d,
        onFocus: c,
        onFocusVisible: h,
        onKeyDown: y,
        onKeyUp: x,
        onMouseDown: P,
        onMouseLeave: R,
        onMouseUp: O,
        onTouchEnd: A,
        onTouchMove: I,
        onTouchStart: V,
        tabIndex: K = 0,
        TouchRippleProps: ee,
        touchRippleRef: ne,
        type: se,
      } = r,
      Ce = De(r, gv),
      ae = M.useRef(null),
      C = M.useRef(null),
      D = Bc(C, ne),
      { isFocusVisibleRef: j, onFocus: q, onBlur: $, ref: z } = eg(),
      [_, L] = M.useState(!1);
    a && _ && L(!1),
      M.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            L(!0), ae.current.focus();
          },
        }),
        []
      );
    const [w, b] = M.useState(!1);
    M.useEffect(() => {
      b(!0);
    }, []);
    const T = w && !m && !a;
    M.useEffect(() => {
      _ && f && !m && w && C.current.pulsate();
    }, [m, f, _, w]);
    function G(W, Ra, rh = p) {
      return jo(
        (Oa) => (Ra && Ra(Oa), !rh && C.current && C.current[W](Oa), !0)
      );
    }
    const X = G('start', P),
      Z = G('stop', E),
      U = G('stop', d),
      ve = G('stop', O),
      he = G('stop', (W) => {
        _ && W.preventDefault(), R && R(W);
      }),
      H = G('start', V),
      we = G('stop', A),
      Y = G('stop', I),
      $e = G(
        'stop',
        (W) => {
          $(W), j.current === !1 && L(!1), v && v(W);
        },
        !1
      ),
      pn = jo((W) => {
        ae.current || (ae.current = W.currentTarget),
          q(W),
          j.current === !0 && (L(!0), h && h(W)),
          c && c(W);
      }),
      Ee = () => {
        const W = ae.current;
        return u && u !== 'button' && !(W.tagName === 'A' && W.href);
      },
      Vt = M.useRef(!1),
      hn = jo((W) => {
        f &&
          !Vt.current &&
          _ &&
          C.current &&
          W.key === ' ' &&
          ((Vt.current = !0),
          C.current.stop(W, () => {
            C.current.start(W);
          })),
          W.target === W.currentTarget &&
            Ee() &&
            W.key === ' ' &&
            W.preventDefault(),
          y && y(W),
          W.target === W.currentTarget &&
            Ee() &&
            W.key === 'Enter' &&
            !a &&
            (W.preventDefault(), g && g(W));
      }),
      qe = jo((W) => {
        f &&
          W.key === ' ' &&
          C.current &&
          _ &&
          !W.defaultPrevented &&
          ((Vt.current = !1),
          C.current.stop(W, () => {
            C.current.pulsate(W);
          })),
          x && x(W),
          g &&
            W.target === W.currentTarget &&
            Ee() &&
            W.key === ' ' &&
            !W.defaultPrevented &&
            g(W);
      });
    let B = u;
    B === 'button' && (Ce.href || Ce.to) && (B = S);
    const le = {};
    B === 'button'
      ? ((le.type = se === void 0 ? 'button' : se), (le.disabled = a))
      : (!Ce.href && !Ce.to && (le.role = 'button'),
        a && (le['aria-disabled'] = a));
    const Sr = Bc(n, z, ae),
      Nn = F({}, r, {
        centerRipple: i,
        component: u,
        disabled: a,
        disableRipple: m,
        disableTouchRipple: p,
        focusRipple: f,
        tabIndex: K,
        focusVisible: _,
      }),
      Et = yv(Nn);
    return li(
      vv,
      F(
        {
          as: B,
          className: Qe(Et.root, s),
          ownerState: Nn,
          onBlur: $e,
          onClick: g,
          onContextMenu: Z,
          onFocus: pn,
          onKeyDown: hn,
          onKeyUp: qe,
          onMouseDown: X,
          onMouseLeave: he,
          onMouseUp: ve,
          onDragLeave: U,
          onTouchEnd: we,
          onTouchMove: Y,
          onTouchStart: H,
          ref: Sr,
          tabIndex: a ? -1 : K,
          type: se,
        },
        le,
        Ce,
        { children: [l, T ? Te(dv, F({ ref: D, center: i }, ee)) : null] }
      )
    );
  }),
  Sv = wv;
function xv(e) {
  return ul('MuiTypography', e);
}
al('MuiTypography', [
  'root',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'inherit',
  'button',
  'caption',
  'overline',
  'alignLeft',
  'alignRight',
  'alignCenter',
  'alignJustify',
  'noWrap',
  'gutterBottom',
  'paragraph',
]);
const kv = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  Cv = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: l,
      } = e,
      s = {
        root: [
          'root',
          i,
          e.align !== 'inherit' && `align${Ae(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          o && 'paragraph',
        ],
      };
    return ca(s, xv, l);
  },
  Ev = Mn('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${Ae(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    F(
      { margin: 0 },
      t.variant && e.typography[t.variant],
      t.align !== 'inherit' && { textAlign: t.align },
      t.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      t.gutterBottom && { marginBottom: '0.35em' },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  gf = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  },
  Pv = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  _v = (e) => Pv[e] || e,
  $v = M.forwardRef(function (t, n) {
    const r = Rl({ props: t, name: 'MuiTypography' }),
      o = _v(r.color),
      i = Yp(F({}, r, { color: o })),
      {
        align: l = 'inherit',
        className: s,
        component: u,
        gutterBottom: a = !1,
        noWrap: m = !1,
        paragraph: p = !1,
        variant: f = 'body1',
        variantMapping: S = gf,
      } = i,
      v = De(i, kv),
      g = F({}, i, {
        align: l,
        color: o,
        className: s,
        component: u,
        gutterBottom: a,
        noWrap: m,
        paragraph: p,
        variant: f,
        variantMapping: S,
      }),
      E = u || (p ? 'p' : S[f] || gf[f]) || 'span',
      d = Cv(g);
    return Te(
      Ev,
      F({ as: E, ref: n, ownerState: g, className: Qe(d.root, s) }, v)
    );
  }),
  ss = $v,
  Tv = Jp(),
  Rv = r1({
    defaultTheme: Tv,
    defaultClassName: 'MuiBox-root',
    generateClassName: Rp.generate,
  }),
  bo = Rv;
function Ov(e) {
  return ul('MuiButton', e);
}
const zv = al('MuiButton', [
    'root',
    'text',
    'textInherit',
    'textPrimary',
    'textSecondary',
    'textSuccess',
    'textError',
    'textInfo',
    'textWarning',
    'outlined',
    'outlinedInherit',
    'outlinedPrimary',
    'outlinedSecondary',
    'outlinedSuccess',
    'outlinedError',
    'outlinedInfo',
    'outlinedWarning',
    'contained',
    'containedInherit',
    'containedPrimary',
    'containedSecondary',
    'containedSuccess',
    'containedError',
    'containedInfo',
    'containedWarning',
    'disableElevation',
    'focusVisible',
    'disabled',
    'colorInherit',
    'textSizeSmall',
    'textSizeMedium',
    'textSizeLarge',
    'outlinedSizeSmall',
    'outlinedSizeMedium',
    'outlinedSizeLarge',
    'containedSizeSmall',
    'containedSizeMedium',
    'containedSizeLarge',
    'sizeMedium',
    'sizeSmall',
    'sizeLarge',
    'fullWidth',
    'startIcon',
    'endIcon',
    'iconSizeSmall',
    'iconSizeMedium',
    'iconSizeLarge',
  ]),
  Wo = zv,
  Iv = M.createContext({}),
  Mv = Iv,
  Nv = [
    'children',
    'color',
    'component',
    'className',
    'disabled',
    'disableElevation',
    'disableFocusRipple',
    'endIcon',
    'focusVisibleClassName',
    'fullWidth',
    'size',
    'startIcon',
    'type',
    'variant',
  ],
  Av = (e) => {
    const {
        color: t,
        disableElevation: n,
        fullWidth: r,
        size: o,
        variant: i,
        classes: l,
      } = e,
      s = {
        root: [
          'root',
          i,
          `${i}${Ae(t)}`,
          `size${Ae(o)}`,
          `${i}Size${Ae(o)}`,
          t === 'inherit' && 'colorInherit',
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['startIcon', `iconSize${Ae(o)}`],
        endIcon: ['endIcon', `iconSize${Ae(o)}`],
      },
      u = ca(s, Ov, l);
    return F({}, l, u);
  },
  th = (e) =>
    F(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  Lv = Mn(Sv, {
    shouldForwardProp: (e) => eh(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${Ae(n.color)}`],
        t[`size${Ae(n.size)}`],
        t[`${n.variant}Size${Ae(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      return F(
        {},
        e.typography.button,
        {
          minWidth: 64,
          padding: '6px 16px',
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ['background-color', 'box-shadow', 'border-color', 'color'],
            { duration: e.transitions.duration.short }
          ),
          '&:hover': F(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Uo(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Uo(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Uo(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'contained' && {
              backgroundColor: (e.vars || e).palette.grey.A100,
              boxShadow: (e.vars || e).shadows[4],
              '@media (hover: none)': {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === 'contained' &&
              t.color !== 'inherit' && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                '@media (hover: none)': {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          '&:active': F(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Wo.focusVisible}`]: F(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Wo.disabled}`]: F(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === 'outlined' && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === 'contained' && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === 'text' && { padding: '6px 8px' },
        t.variant === 'text' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === 'outlined' && {
          padding: '5px 15px',
          border: '1px solid currentColor',
        },
        t.variant === 'outlined' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${Uo(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === 'contained' && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === 'contained' &&
          t.color !== 'inherit' && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === 'inherit' && {
          color: 'inherit',
          borderColor: 'currentColor',
        },
        t.size === 'small' &&
          t.variant === 'text' && {
            padding: '4px 5px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'text' && {
            padding: '8px 11px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'outlined' && {
            padding: '3px 9px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'outlined' && {
            padding: '7px 21px',
            fontSize: e.typography.pxToRem(15),
          },
        t.size === 'small' &&
          t.variant === 'contained' && {
            padding: '4px 10px',
            fontSize: e.typography.pxToRem(13),
          },
        t.size === 'large' &&
          t.variant === 'contained' && {
            padding: '8px 22px',
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: '100%' }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: 'none',
        '&:hover': { boxShadow: 'none' },
        [`&.${Wo.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Wo.disabled}`]: { boxShadow: 'none' },
      }
  ),
  Dv = Mn('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${Ae(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    F(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      th(e)
    )
  ),
  jv = Mn('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${Ae(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    F(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      th(e)
    )
  ),
  Fv = M.forwardRef(function (t, n) {
    const r = M.useContext(Mv),
      o = aa(r, t),
      i = Rl({ props: o, name: 'MuiButton' }),
      {
        children: l,
        color: s = 'primary',
        component: u = 'button',
        className: a,
        disabled: m = !1,
        disableElevation: p = !1,
        disableFocusRipple: f = !1,
        endIcon: S,
        focusVisibleClassName: v,
        fullWidth: g = !1,
        size: E = 'medium',
        startIcon: d,
        type: c,
        variant: h = 'text',
      } = i,
      y = De(i, Nv),
      x = F({}, i, {
        color: s,
        component: u,
        disabled: m,
        disableElevation: p,
        disableFocusRipple: f,
        fullWidth: g,
        size: E,
        type: c,
        variant: h,
      }),
      P = Av(x),
      R = d && Te(Dv, { className: P.startIcon, ownerState: x, children: d }),
      O = S && Te(jv, { className: P.endIcon, ownerState: x, children: S });
    return li(
      Lv,
      F(
        {
          ownerState: x,
          className: Qe(r.className, P.root, a),
          component: u,
          disabled: m,
          focusRipple: !f,
          focusVisibleClassName: Qe(P.focusVisible, v),
          ref: n,
          type: c,
        },
        y,
        { classes: P, children: [R, l, O] }
      )
    );
  }),
  Bv = Fv;
function Uv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    du(e, t);
}
function du(e, t) {
  return (
    (du = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    du(e, t)
  );
}
var bv = (function (e) {
  Uv(t, e);
  function t(r) {
    var o;
    return (
      (o = e.call(this, r) || this),
      (o.isDrawing = !1),
      (o.lastPoint = null),
      (o.isFinished = !1),
      (o.reset = function () {
        (o.canvas.style.opacity = '1'),
          (o.ctx.globalCompositeOperation = 'source-over'),
          o.ctx.drawImage(o.image, 0, 0, o.props.width, o.props.height),
          (o.isFinished = !1);
      }),
      (o.handleMouseDown = function (i) {
        (o.isDrawing = !0), (o.lastPoint = o.getMouse(i, o.canvas));
      }),
      (o.handleTouchMove = function (i) {
        for (
          var l = o.getMouse(i, o.canvas),
            s = o.distanceBetween(o.lastPoint, l),
            u = o.angleBetween(o.lastPoint, l),
            a,
            m,
            p = 0;
          p < s;
          p++
        )
          (a = o.lastPoint ? o.lastPoint.x + Math.sin(u) * p : 0),
            (m = o.lastPoint ? o.lastPoint.y + Math.cos(u) * p : 0),
            (o.ctx.globalCompositeOperation = 'destination-out'),
            o.brushImage && o.props.customBrush
              ? o.ctx.drawImage(
                  o.brushImage,
                  a,
                  m,
                  o.props.customBrush.width,
                  o.props.customBrush.height
                )
              : (o.ctx.beginPath(),
                o.ctx.arc(a, m, o.props.brushSize || 20, 0, 2 * Math.PI, !1),
                o.ctx.fill());
        (o.lastPoint = l), o.handlePercentage(o.getFilledInPixels(32));
      }),
      (o.handleMouseMove = function (i) {
        if (o.isDrawing) {
          for (
            var l = o.getMouse(i, o.canvas),
              s = o.distanceBetween(o.lastPoint, l),
              u = o.angleBetween(o.lastPoint, l),
              a,
              m,
              p = 0;
            p < s;
            p++
          )
            (a = o.lastPoint ? o.lastPoint.x + Math.sin(u) * p : 0),
              (m = o.lastPoint ? o.lastPoint.y + Math.cos(u) * p : 0),
              (o.ctx.globalCompositeOperation = 'destination-out'),
              o.brushImage && o.props.customBrush
                ? o.ctx.drawImage(
                    o.brushImage,
                    a,
                    m,
                    o.props.customBrush.width,
                    o.props.customBrush.height
                  )
                : (o.ctx.beginPath(),
                  o.ctx.arc(a, m, o.props.brushSize || 20, 0, 2 * Math.PI, !1),
                  o.ctx.fill());
          (o.lastPoint = l), o.handlePercentage(o.getFilledInPixels(32));
        }
      }),
      (o.handleMouseUp = function () {
        o.isDrawing = !1;
      }),
      (o.state = { loaded: !1, finished: !1 }),
      o
    );
  }
  var n = t.prototype;
  return (
    (n.componentDidMount = function () {
      var o = this;
      (this.isDrawing = !1),
        (this.lastPoint = null),
        (this.ctx = this.canvas.getContext('2d')),
        (this.image = new Image()),
        (this.image.crossOrigin = 'Anonymous'),
        (this.image.onload = function () {
          o.ctx.drawImage(o.image, 0, 0, o.props.width, o.props.height),
            o.setState({ loaded: !0 });
        }),
        (this.image.src = this.props.image),
        this.props.customBrush &&
          ((this.brushImage = new Image(
            this.props.customBrush.width,
            this.props.customBrush.height
          )),
          (this.brushImage.src = this.props.customBrush.image));
    }),
    (n.getFilledInPixels = function (o) {
      (!o || o < 1) && (o = 1);
      var i = 0,
        l = 0,
        s = this.canvas.width,
        u = this.canvas.height;
      this.props.customCheckZone &&
        ((i = this.props.customCheckZone.x),
        (l = this.props.customCheckZone.y),
        (s = this.props.customCheckZone.width),
        (u = this.props.customCheckZone.height));
      for (
        var a = this.ctx.getImageData(i, l, s, u),
          m = a.data.length / o,
          p = 0,
          f = 0;
        f < a.data.length;
        f += o
      )
        parseInt(a.data[f], 10) === 0 && p++;
      return Math.round((p / m) * 100);
    }),
    (n.getMouse = function (o, i) {
      var l = i.getBoundingClientRect(),
        s = l.top,
        u = l.left,
        a = window.pageYOffset || document.documentElement.scrollTop,
        m = window.pageXOffset || document.documentElement.scrollLeft,
        p = 0,
        f = 0;
      return (
        o && o.pageX && o.pageY
          ? ((p = o.pageX - u - m), (f = o.pageY - s - a))
          : o &&
            o.touches &&
            ((p = o.changedTouches[0].clientX - u - m),
            (f = o.changedTouches[0].clientY - s - a)),
        { x: p, y: f }
      );
    }),
    (n.distanceBetween = function (o, i) {
      return o && i
        ? Math.sqrt(Math.pow(i.x - o.x, 2) + Math.pow(i.y - o.y, 2))
        : 0;
    }),
    (n.angleBetween = function (o, i) {
      return o && i ? Math.atan2(i.x - o.x, i.y - o.y) : 0;
    }),
    (n.handlePercentage = function (o) {
      if ((o === void 0 && (o = 0), !this.isFinished)) {
        var i = 70;
        this.props.finishPercent !== void 0 && (i = this.props.finishPercent),
          o > i &&
            (this.props.fadeOutOnComplete !== !1 &&
              ((this.canvas.style.transition = '1s'),
              (this.canvas.style.opacity = '0')),
            this.setState({ finished: !0 }),
            this.props.onComplete && this.props.onComplete(),
            (this.isFinished = !0));
      }
    }),
    (n.render = function () {
      var o = this,
        i = {
          width: this.props.width + 'px',
          height: this.props.height + 'px',
          position: 'relative',
          WebkitUserSelect: 'none',
          MozUserSelect: 'none',
          msUserSelect: 'none',
          userSelect: 'none',
        },
        l = { position: 'absolute', top: 0, zIndex: 1 },
        s = { width: '100%', height: '100%' };
      return ft.createElement(
        'div',
        { className: 'ScratchCard__Container', style: i },
        ft.createElement('canvas', {
          ref: function (a) {
            o.canvas = a;
          },
          className: 'ScratchCard__Canvas',
          style: l,
          width: this.props.width,
          height: this.props.height,
          onMouseDown: this.handleMouseDown,
          onMouseMove: this.handleMouseMove,
          onMouseUp: this.handleMouseUp,
        }),
        ft.createElement(
          'div',
          { className: 'ScratchCard__Result', style: s },
          this.props.children
        )
      );
    }),
    t
  );
})(M.Component);
const yf = (e) => {
    switch (e) {
      case 'regular':
        return { fontWeight: '500' };
      case 'bold':
        return { fontWeight: '800' };
      case 'italic':
        return { fontStyle: 'italic' };
      case 'light-italic':
        return { fontWeight: 100, fontStyle: 'italic' };
      case 'light':
        return { fontWeight: 100 };
      default:
        return;
    }
  },
  vf = (e, t, n) => (
    console.log({
      selectedProducts: e,
      currentProductHandle: t,
      productSelection: n,
    }),
    n === 'all-products' ? !0 : e.some((r) => r.handle === t)
  );
function Wv() {
  const [e, t] = M.useState(!1),
    [n, r] = M.useState(null),
    [o, i] = M.useState(100);
  let l = sessionStorage.getItem('scratchCardConfig');
  l = JSON.parse(l);
  const { shopConfig: s, discountCodes: u } = l,
    {
      'border-color': a,
      'bg-color': m,
      height: p,
      'text-color': f,
      'border-radius': S,
      'border-width': v,
      'font-size': g,
      'selected-title-font-style': E,
      title: d,
      'title-color': c,
      'title-font-size': h,
      'title-text-align-center': y,
      'sub-title': x,
      'sub-title-font-size': P,
      'sub-title-text-align-center': R,
      'selected-sub-title-font-style': O,
      'selected-scratch-card-style': A,
      'sub-title': I,
      'sub-title-color': V,
      'cusom-scratch-card-selected': K,
      'selected-custom-card-image': ee,
      'selected-devices': ne,
    } = s;
  async function se() {
    if (
      (console.log('sending sc report'),
      sessionStorage.getItem('scReportSent') === 'true')
    )
      return;
    const he =
      T != null && T.shop
        ? T == null
          ? void 0
          : T.shop
        : window.location.hostname;
    sessionStorage.setItem('scReportSent', !0),
      sessionStorage.setItem('scratchedOnce', !0);
    const we = await (
      await fetch(
        `https://scratch-card-app.herokuapp.com/analytics/report?shop=${he}`
      )
    ).json();
    we.message === 'success' && sessionStorage.setItem('scReportSent', !0),
      console.log('report sent', we);
  }
  const Ce = Math.floor(Math.random() * 4);
  let ae = sessionStorage.getItem('currentSessionScratchCardCode');
  ae == null && sessionStorage.setItem('currentSessionScratchCardCode', Ce);
  const C = u[Number(ae)];
  let D = localStorage.getItem('productHandle');
  const j = s['product-selection'],
    q = s['selected-products'];
  let $ = !0,
    z = M.useRef(null),
    _ = M.useRef(null),
    L = M.useRef(null);
  M.useEffect(() => (z.current && i(z.current.offsetWidth), () => {}), []);
  let w = window.innerWidth,
    b = w < 600;
  ne.includes('mobile') && b
    ? (($ = vf(q, D, j)), console.log('mobile device', { willShowWidget: $ }))
    : ne.includes('desktop') && !b
    ? (($ = vf(q, D, j)), console.log('desktop device', { willShowWidget: $ }))
    : (($ = !1), console.log('widget will not show'));
  var T;
  console.log('sc app', { isMobile: b, deviceWidth: w, willShowWidget: $ }),
    M.useEffect(() => {
      $ &&
        (K
          ? (r(ee),
            console.log('scratch card ref', _),
            sessionStorage.getItem('scratchedOnce') === 'true'
              ? (console.log('already scratched'),
                (_.current.canvas.style.opacity = '0'),
                (_.current.canvas.style.zIndex = '0'))
              : ((_.current.image.src = ee), _.current.reset()))
          : (r(
              `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${A.split(
                ' '
              ).join('-')}.png`
            ),
            console.log('scratch card ref', _),
            sessionStorage.getItem('scratchedOnce') === 'true'
              ? (console.log('already scratched'),
                (_.current.canvas.style.opacity = '0'),
                (_.current.canvas.style.zIndex = '0'))
              : ((_.current.image.src = `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${A.split(
                  ' '
                ).join('-')}.png`),
                _.current.reset())));
    }, [o, $]);
  const G = async () => {
      const he = (await fetch('/cart.js')).json(),
        H = he.attributes;
      if (he.item_count === 0) {
        alert('Add one or more item in cart first!');
        return;
      }
      await fetch(`/discount/${C}`)
        .then((Y) => {
          t(!0),
            fetch('/cart/update.js', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                attributes: { ...H, addedby: 'scratch-card-app' },
              }),
            });
        })
        .catch((Y) => t(!0));
    },
    X = yf(E),
    Z = yf(O);
  let U = null;
  return (
    $ &&
      (U = li(bo, {
        className: 'scratch-card-app',
        ref: z,
        children: [
          Te(ss, {
            sx: {
              ...X,
              width: '100%',
              fontSize: `${h}px`,
              textAlign: y && 'center',
              color: c,
            },
            children: d,
          }),
          Te(ss, {
            sx: {
              ...Z,
              width: '100%',
              fontSize: `${P}px`,
              textAlign: R && 'center',
              color: V,
            },
            children: I,
          }),
          Te(bo, {
            className: 'root-container-sc',
            sx: {
              marginTop: '10px',
              marginBottom: '10px',
              borderRadius: `${S}px`,
              zIndex: 4,
              backgroundColor: m,
            },
            children: Te(bo, {
              className: 'ScratchCard__Container',
              sx: {
                '.ScratchCard__Canvas': {
                  borderRadius: `${S - 4}px`,
                  MozBorderRadius: `${S}px`,
                  overflow: 'hidden',
                  border: `${v}px solid ${a}`,
                  width: o,
                  height: p,
                },
              },
              children: Te(bv, {
                width: o,
                height: p,
                image: n,
                finishPercent: 90,
                onComplete: () => {
                  console.log('complete', _),
                    (_.current.canvas.style.zIndex = 0),
                    (L.current.style.zIndex = 1),
                    se();
                },
                ref: _,
                brushSize: 30,
                children: li(bo, {
                  ref: L,
                  className: 'sc-code-container',
                  sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    margin: '0 auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: `${S - 4}px`,
                    border: `${v}px solid ${a}`,
                  },
                  children: [
                    Te(ss, {
                      variant: 'h6',
                      sx: { fontSize: `${g}px`, color: f },
                      children: C,
                    }),
                    Te(Bv, {
                      variant: 'text',
                      sx: { color: f, borderRadius: 0 },
                      disabled: e,
                      onClick: G,
                      children: e ? 'Applied On Checkout' : 'Apply Discount',
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      })),
    Te(Th, { children: U })
  );
}
async function Vv() {
  const e = sessionStorage.getItem('scratchCardConfig');
  if (e == null) {
    let n = await fetch(
      'https://scratch-card-app.herokuapp.com/public/shopConfig?shop=awesome-sauce-123.myshopify.com'
    ).then((r) => r.json());
    console.log('scratch card config ::: ', { shopConfig: n }),
      sessionStorage.setItem('scratchCardConfig', JSON.stringify(n));
  } else console.log('discount codes are already stored');
  return !0;
}
function Vo() {
  us
    .createRoot(document.getElementById('scratch-card-app-root'))
    .render(Te(Wv, {})),
    setTimeout(function () {
      console.log('attaching touch events'), Hv();
    }, 2e3);
}
function Ho() {
  let t = null;
  const n = setInterval(() => {
    (t = document.querySelector('.ScratchCard__Canvas')),
      t && (console.log('canvas found', !1), clearInterval(n));
  }, 1e3);
}
let nh = !1;
window.addEventListener('DOMContentLoaded', () => {
  (nh = !0),
    Vv().then(() => {
      const { shopConfig: e } = JSON.parse(
          sessionStorage.getItem('scratchCardConfig')
        ),
        { 'trigger-event': t, 'load-delay': n } = e;
      switch (
        (console.log(`trigger event is ${t} and load delay ${n} second`), t)
      ) {
        case 'onload':
          console.log('render on load'), Vo(), setTimeout(Ho(), 0);
          break;
        case 'after-interval':
          setTimeout(() => {
            console.log('rendering after', n), Vo(), setTimeout(Ho(), 0);
          }, n * 1e3);
          break;
        case 'onExtiIntent':
          console.log('attaching mouse leave event'),
            document.addEventListener(
              'mouseleave',
              function (r) {
                (r.clientY <= 0 ||
                  r.clientX <= 0 ||
                  r.clientX >= window.innerWidth ||
                  r.clientY >= window.innerHeight) &&
                  (console.log('user is about to leave, render now'),
                  Vo(),
                  setTimeout(Ho(), 0));
              },
              { once: !0 }
            ),
            window.innerWidth < 700 &&
              (console.log('mobile device, exit intent wont work'),
              Vo(),
              setTimeout(Ho(), 0));
          break;
      }
    });
});
window.onload = function () {
  if (!nh) {
    console.log('load event not fired! firing now====>>>'),
      console.log('======= INIT :: SCRATCH-CARD-APP =======');
    const e = new Event('DOMContentLoaded');
    dispatchEvent(e);
  }
};
const En = [];
function Hv() {
  const e = document.querySelector('.ScratchCard__Canvas');
  e.addEventListener('touchstart', Kv),
    e.addEventListener('touchend', Yv),
    e.addEventListener('touchcancel', Gv),
    e.addEventListener('touchmove', Qv);
}
function Kv(e) {
  e.preventDefault();
  const n = document.querySelector('.ScratchCard__Canvas').getContext('2d'),
    r = e.changedTouches;
  for (let o = 0; o < r.length; o++)
    En.push(Xv(r[o])),
      $a(r[o]),
      n.beginPath(),
      n.arc(r[o].pageX, r[o].pageY, 30, 0, 2 * Math.PI, !1),
      n.fill();
}
function Qv(e) {
  const t = document.querySelector('.ScratchCard__Canvas'),
    n = t.getContext('2d');
  n.globalCompositeOperation = 'destination-out';
  const r = e.changedTouches;
  for (let o = 0; o < r.length; o++) {
    $a(r[o]);
    const i = Ta(r[o].identifier),
      { top: l, left: s } = t.getBoundingClientRect(),
      u = window.pageYOffset || document.documentElement.scrollTop,
      a = window.pageXOffset || document.documentElement.scrollLeft;
    let m = 0,
      p = 0;
    (m = e.changedTouches[0].clientX - s - a),
      (p = e.changedTouches[0].clientY - l - u),
      i >= 0 &&
        (console.log('drawing'),
        n.beginPath(),
        n.arc(m, p, 30, 0, 2 * Math.PI, !1),
        n.fill());
  }
}
function Yv(e) {
  e.preventDefault();
  const n = document.querySelector('.ScratchCard__Canvas').getContext('2d'),
    r = e.changedTouches;
  for (let o = 0; o < r.length; o++) {
    $a(r[o]);
    let i = Ta(r[o].identifier);
    i >= 0 &&
      ((n.lineWidth = 4),
      n.beginPath(),
      n.moveTo(En[i].pageX, En[i].pageY),
      n.lineTo(r[o].pageX, r[o].pageY),
      n.fillRect(r[o].pageX - 4, r[o].pageY - 4, 8, 8),
      En.splice(i, 1));
  }
}
function Gv(e) {
  e.preventDefault();
  const t = e.changedTouches;
  for (let n = 0; n < t.length; n++) {
    let r = Ta(t[n].identifier);
    En.splice(r, 1);
  }
}
function $a(e) {
  let t = e.identifier % 16,
    n = Math.floor(e.identifier / 3) % 16,
    r = Math.floor(e.identifier / 7) % 16;
  return (
    (t = t.toString(16)),
    (n = n.toString(16)),
    (r = r.toString(16)),
    `#${t}${n}${r}`
  );
}
function Xv({ identifier: e, pageX: t, pageY: n }) {
  return { identifier: e, pageX: t, pageY: n };
}
function Ta(e) {
  for (let t = 0; t < En.length; t++) if (En[t].identifier === e) return t;
  return -1;
}
