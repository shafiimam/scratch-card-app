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
function th(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Hr = {},
  nh = {
    get exports() {
      return Hr;
    },
    set exports(e) {
      Hr = e;
    },
  },
  Mi = {},
  N = {},
  rh = {
    get exports() {
      return N;
    },
    set exports(e) {
      N = e;
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
 */ var fo = Symbol.for('react.element'),
  oh = Symbol.for('react.portal'),
  ih = Symbol.for('react.fragment'),
  lh = Symbol.for('react.strict_mode'),
  sh = Symbol.for('react.profiler'),
  uh = Symbol.for('react.provider'),
  ah = Symbol.for('react.context'),
  ch = Symbol.for('react.forward_ref'),
  fh = Symbol.for('react.suspense'),
  dh = Symbol.for('react.memo'),
  ph = Symbol.for('react.lazy'),
  Ta = Symbol.iterator;
function hh(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Ta && e[Ta]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var gf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  yf = Object.assign,
  vf = {};
function gr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vf),
    (this.updater = n || gf);
}
gr.prototype.isReactComponent = {};
gr.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
gr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function wf() {}
wf.prototype = gr.prototype;
function du(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = vf),
    (this.updater = n || gf);
}
var pu = (du.prototype = new wf());
pu.constructor = du;
yf(pu, gr.prototype);
pu.isPureReactComponent = !0;
var Ra = Array.isArray,
  Sf = Object.prototype.hasOwnProperty,
  hu = { current: null },
  xf = { key: !0, ref: !0, __self: !0, __source: !0 };
function kf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      Sf.call(t, r) && !xf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: fo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: hu.current,
  };
}
function mh(e, t) {
  return {
    $$typeof: fo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function mu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === fo;
}
function gh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Oa = /\/+/g;
function Ol(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? gh('' + e.key)
    : t.toString(36);
}
function Ho(e, t, n, r, o) {
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
          case fo:
          case oh:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Ol(l, 0) : r),
      Ra(o)
        ? ((n = ''),
          e != null && (n = e.replace(Oa, '$&/') + '/'),
          Ho(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (mu(o) &&
            (o = mh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(Oa, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), Ra(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Ol(i, s);
      l += Ho(i, t, n, u, o);
    }
  else if (((u = hh(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Ol(i, s++)), (l += Ho(i, t, n, u, o));
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
function So(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Ho(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function yh(e) {
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
  Ko = { transition: null },
  vh = {
    ReactCurrentDispatcher: He,
    ReactCurrentBatchConfig: Ko,
    ReactCurrentOwner: hu,
  };
Q.Children = {
  map: So,
  forEach: function (e, t, n) {
    So(
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
      So(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      So(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!mu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
Q.Component = gr;
Q.Fragment = ih;
Q.Profiler = sh;
Q.PureComponent = du;
Q.StrictMode = lh;
Q.Suspense = fh;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = vh;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = yf({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = hu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Sf.call(t, u) &&
        !xf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: fo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: ah,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: uh, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = kf;
Q.createFactory = function (e) {
  var t = kf.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: ch, render: e };
};
Q.isValidElement = mu;
Q.lazy = function (e) {
  return { $$typeof: ph, _payload: { _status: -1, _result: e }, _init: yh };
};
Q.memo = function (e, t) {
  return { $$typeof: dh, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Ko.transition;
  Ko.transition = {};
  try {
    e();
  } finally {
    Ko.transition = t;
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
})(rh);
const ft = th(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wh = N,
  Sh = Symbol.for('react.element'),
  xh = Symbol.for('react.fragment'),
  kh = Object.prototype.hasOwnProperty,
  Ch = wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Eh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) kh.call(t, r) && !Eh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: Sh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Ch.current,
  };
}
Mi.Fragment = xh;
Mi.jsx = Cf;
Mi.jsxs = Cf;
(function (e) {
  e.exports = Mi;
})(nh);
const Ph = Hr.Fragment,
  Te = Hr.jsx,
  ii = Hr.jsxs;
var ss = {},
  us = {},
  _h = {
    get exports() {
      return us;
    },
    set exports(e) {
      us = e;
    },
  },
  it = {},
  as = {},
  $h = {
    get exports() {
      return as;
    },
    set exports(e) {
      as = e;
    },
  },
  Ef = {};
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
    y = !1,
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
  function v(C) {
    if (((g = !1), h(C), !y))
      if (n(u) !== null) (y = !0), Ce(x);
      else {
        var D = n(a);
        D !== null && ae(v, D.startTime - C);
      }
  }
  function x(C, D) {
    (y = !1), g && ((g = !1), d(O), (O = -1)), (S = !0);
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
        _ !== null && ae(v, _.startTime - D), (z = !1);
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
      y || S || ((y = !0), Ce(x));
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
              (g ? (d(O), (O = -1)) : (g = !0), ae(v, j - q)))
          : ((C.sortIndex = $), t(u, C), y || S || ((y = !0), Ce(x))),
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
})(Ef);
(function (e) {
  e.exports = Ef;
})($h);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Pf = N,
  ot = as;
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
var _f = new Set(),
  Kr = {};
function On(e, t) {
  lr(e, t), lr(e + 'Capture', t);
}
function lr(e, t) {
  for (Kr[e] = t, e = 0; e < t.length; e++) _f.add(t[e]);
}
var jt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  cs = Object.prototype.hasOwnProperty,
  Th =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  za = {},
  Ia = {};
function Rh(e) {
  return cs.call(Ia, e)
    ? !0
    : cs.call(za, e)
    ? !1
    : Th.test(e)
    ? (Ia[e] = !0)
    : ((za[e] = !0), !1);
}
function Oh(e, t, n, r) {
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
function zh(e, t, n, r) {
  if (t === null || typeof t > 'u' || Oh(e, t, n, r)) return !0;
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
var gu = /[\-:]([a-z])/g;
function yu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gu, yu);
    je[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(gu, yu);
    je[t] = new Ke(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(gu, yu);
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
function vu(e, t, n, r) {
  var o = je.hasOwnProperty(t) ? je[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (zh(t, n, o, r) && (n = null),
    r || o === null
      ? Rh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Wt = Pf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xo = Symbol.for('react.element'),
  Bn = Symbol.for('react.portal'),
  Un = Symbol.for('react.fragment'),
  wu = Symbol.for('react.strict_mode'),
  fs = Symbol.for('react.profiler'),
  $f = Symbol.for('react.provider'),
  Tf = Symbol.for('react.context'),
  Su = Symbol.for('react.forward_ref'),
  ds = Symbol.for('react.suspense'),
  ps = Symbol.for('react.suspense_list'),
  xu = Symbol.for('react.memo'),
  Kt = Symbol.for('react.lazy'),
  Rf = Symbol.for('react.offscreen'),
  Na = Symbol.iterator;
function Sr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Na && e[Na]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var ye = Object.assign,
  zl;
function Or(e) {
  if (zl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      zl = (t && t[1]) || '';
    }
  return (
    `
` +
    zl +
    e
  );
}
var Il = !1;
function Nl(e, t) {
  if (!e || Il) return '';
  Il = !0;
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
    (Il = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Or(e) : '';
}
function Ih(e) {
  switch (e.tag) {
    case 5:
      return Or(e.type);
    case 16:
      return Or('Lazy');
    case 13:
      return Or('Suspense');
    case 19:
      return Or('SuspenseList');
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
function hs(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Un:
      return 'Fragment';
    case Bn:
      return 'Portal';
    case fs:
      return 'Profiler';
    case wu:
      return 'StrictMode';
    case ds:
      return 'Suspense';
    case ps:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Tf:
        return (e.displayName || 'Context') + '.Consumer';
      case $f:
        return (e._context.displayName || 'Context') + '.Provider';
      case Su:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case xu:
        return (
          (t = e.displayName || null), t !== null ? t : hs(e.type) || 'Memo'
        );
      case Kt:
        (t = e._payload), (e = e._init);
        try {
          return hs(e(t));
        } catch {}
    }
  return null;
}
function Nh(e) {
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
      return hs(t);
    case 8:
      return t === wu ? 'StrictMode' : 'Mode';
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
function Of(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function Mh(e) {
  var t = Of(e) ? 'checked' : 'value',
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
function ko(e) {
  e._valueTracker || (e._valueTracker = Mh(e));
}
function zf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = Of(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function li(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ms(e, t) {
  var n = t.checked;
  return ye({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Ma(e, t) {
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
function If(e, t) {
  (t = t.checked), t != null && vu(e, 'checked', t, !1);
}
function gs(e, t) {
  If(e, t);
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
    ? ys(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ys(e, t.type, un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Aa(e, t, n) {
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
function ys(e, t, n) {
  (t !== 'number' || li(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var zr = Array.isArray;
function qn(e, t, n, r) {
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
function vs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ye({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function La(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (zr(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: un(n) };
}
function Nf(e, t) {
  var n = un(t.value),
    r = un(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Da(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Mf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function ws(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Mf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var Co,
  Af = (function (e) {
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
        Co = Co || document.createElement('div'),
          Co.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Co.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Qr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Mr = {
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
  Ah = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Mr).forEach(function (e) {
  Ah.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Mr[t] = Mr[e]);
  });
});
function Lf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Mr.hasOwnProperty(e) && Mr[e])
    ? ('' + t).trim()
    : t + 'px';
}
function Df(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = Lf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Lh = ye(
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
function Ss(e, t) {
  if (t) {
    if (Lh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function xs(e, t) {
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
var ks = null;
function ku(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cs = null,
  er = null,
  tr = null;
function ja(e) {
  if ((e = mo(e))) {
    if (typeof Cs != 'function') throw Error(k(280));
    var t = e.stateNode;
    t && ((t = Fi(t)), Cs(e.stateNode, e.type, t));
  }
}
function jf(e) {
  er ? (tr ? tr.push(e) : (tr = [e])) : (er = e);
}
function Ff() {
  if (er) {
    var e = er,
      t = tr;
    if (((tr = er = null), ja(e), t)) for (e = 0; e < t.length; e++) ja(t[e]);
  }
}
function Bf(e, t) {
  return e(t);
}
function Uf() {}
var Ml = !1;
function bf(e, t, n) {
  if (Ml) return e(t, n);
  Ml = !0;
  try {
    return Bf(e, t, n);
  } finally {
    (Ml = !1), (er !== null || tr !== null) && (Uf(), Ff());
  }
}
function Yr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Fi(n);
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
var Es = !1;
if (jt)
  try {
    var xr = {};
    Object.defineProperty(xr, 'passive', {
      get: function () {
        Es = !0;
      },
    }),
      window.addEventListener('test', xr, xr),
      window.removeEventListener('test', xr, xr);
  } catch {
    Es = !1;
  }
function Dh(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Ar = !1,
  si = null,
  ui = !1,
  Ps = null,
  jh = {
    onError: function (e) {
      (Ar = !0), (si = e);
    },
  };
function Fh(e, t, n, r, o, i, l, s, u) {
  (Ar = !1), (si = null), Dh.apply(jh, arguments);
}
function Bh(e, t, n, r, o, i, l, s, u) {
  if ((Fh.apply(this, arguments), Ar)) {
    if (Ar) {
      var a = si;
      (Ar = !1), (si = null);
    } else throw Error(k(198));
    ui || ((ui = !0), (Ps = a));
  }
}
function zn(e) {
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
function Wf(e) {
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
function Fa(e) {
  if (zn(e) !== e) throw Error(k(188));
}
function Uh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = zn(e)), t === null)) throw Error(k(188));
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
        if (i === n) return Fa(o), e;
        if (i === r) return Fa(o), t;
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
function Vf(e) {
  return (e = Uh(e)), e !== null ? Hf(e) : null;
}
function Hf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Hf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kf = ot.unstable_scheduleCallback,
  Ba = ot.unstable_cancelCallback,
  bh = ot.unstable_shouldYield,
  Wh = ot.unstable_requestPaint,
  Pe = ot.unstable_now,
  Vh = ot.unstable_getCurrentPriorityLevel,
  Cu = ot.unstable_ImmediatePriority,
  Qf = ot.unstable_UserBlockingPriority,
  ai = ot.unstable_NormalPriority,
  Hh = ot.unstable_LowPriority,
  Yf = ot.unstable_IdlePriority,
  Ai = null,
  Rt = null;
function Kh(e) {
  if (Rt && typeof Rt.onCommitFiberRoot == 'function')
    try {
      Rt.onCommitFiberRoot(Ai, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : Gh,
  Qh = Math.log,
  Yh = Math.LN2;
function Gh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Qh(e) / Yh) | 0)) | 0;
}
var Eo = 64,
  Po = 4194304;
function Ir(e) {
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
function ci(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Ir(s)) : ((i &= l), i !== 0 && (r = Ir(i)));
  } else (l = n & ~o), l !== 0 ? (r = Ir(l)) : i !== 0 && (r = Ir(i));
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
function Xh(e, t) {
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
function Zh(e, t) {
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
      ? (!(s & n) || s & r) && (o[l] = Xh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function _s(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Gf() {
  var e = Eo;
  return (Eo <<= 1), !(Eo & 4194240) && (Eo = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function po(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function Jh(e, t) {
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
function Eu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var re = 0;
function Xf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Zf,
  Pu,
  Jf,
  qf,
  ed,
  $s = !1,
  _o = [],
  Jt = null,
  qt = null,
  en = null,
  Gr = new Map(),
  Xr = new Map(),
  Yt = [],
  qh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Ua(e, t) {
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
      Gr.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Xr.delete(t.pointerId);
  }
}
function kr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = mo(t)), t !== null && Pu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function em(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Jt = kr(Jt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (qt = kr(qt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (en = kr(en, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Gr.set(i, kr(Gr.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Xr.set(i, kr(Xr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function td(e) {
  var t = vn(e.target);
  if (t !== null) {
    var n = zn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Wf(n)), t !== null)) {
          (e.blockedOn = t),
            ed(e.priority, function () {
              Jf(n);
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
function Qo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ts(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ks = r), n.target.dispatchEvent(r), (ks = null);
    } else return (t = mo(n)), t !== null && Pu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ba(e, t, n) {
  Qo(e) && n.delete(t);
}
function tm() {
  ($s = !1),
    Jt !== null && Qo(Jt) && (Jt = null),
    qt !== null && Qo(qt) && (qt = null),
    en !== null && Qo(en) && (en = null),
    Gr.forEach(ba),
    Xr.forEach(ba);
}
function Cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    $s ||
      (($s = !0),
      ot.unstable_scheduleCallback(ot.unstable_NormalPriority, tm)));
}
function Zr(e) {
  function t(o) {
    return Cr(o, e);
  }
  if (0 < _o.length) {
    Cr(_o[0], e);
    for (var n = 1; n < _o.length; n++) {
      var r = _o[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Jt !== null && Cr(Jt, e),
      qt !== null && Cr(qt, e),
      en !== null && Cr(en, e),
      Gr.forEach(t),
      Xr.forEach(t),
      n = 0;
    n < Yt.length;
    n++
  )
    (r = Yt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Yt.length && ((n = Yt[0]), n.blockedOn === null); )
    td(n), n.blockedOn === null && Yt.shift();
}
var nr = Wt.ReactCurrentBatchConfig,
  fi = !0;
function nm(e, t, n, r) {
  var o = re,
    i = nr.transition;
  nr.transition = null;
  try {
    (re = 1), _u(e, t, n, r);
  } finally {
    (re = o), (nr.transition = i);
  }
}
function rm(e, t, n, r) {
  var o = re,
    i = nr.transition;
  nr.transition = null;
  try {
    (re = 4), _u(e, t, n, r);
  } finally {
    (re = o), (nr.transition = i);
  }
}
function _u(e, t, n, r) {
  if (fi) {
    var o = Ts(e, t, n, r);
    if (o === null) Hl(e, t, r, di, n), Ua(e, r);
    else if (em(o, e, t, n, r)) r.stopPropagation();
    else if ((Ua(e, r), t & 4 && -1 < qh.indexOf(e))) {
      for (; o !== null; ) {
        var i = mo(o);
        if (
          (i !== null && Zf(i),
          (i = Ts(e, t, n, r)),
          i === null && Hl(e, t, r, di, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var di = null;
function Ts(e, t, n, r) {
  if (((di = null), (e = ku(r)), (e = vn(e)), e !== null))
    if (((t = zn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Wf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (di = e), null;
}
function nd(e) {
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
      switch (Vh()) {
        case Cu:
          return 1;
        case Qf:
          return 4;
        case ai:
        case Hh:
          return 16;
        case Yf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Xt = null,
  $u = null,
  Yo = null;
function rd() {
  if (Yo) return Yo;
  var e,
    t = $u,
    n = t.length,
    r,
    o = 'value' in Xt ? Xt.value : Xt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Yo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Go(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function $o() {
  return !0;
}
function Wa() {
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
        ? $o
        : Wa),
      (this.isPropagationStopped = Wa),
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
          (this.isDefaultPrevented = $o));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = $o));
      },
      persist: function () {},
      isPersistent: $o,
    }),
    t
  );
}
var yr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Tu = lt(yr),
  ho = ye({}, yr, { view: 0, detail: 0 }),
  om = lt(ho),
  Ll,
  Dl,
  Er,
  Li = ye({}, ho, {
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
    getModifierState: Ru,
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
        : (e !== Er &&
            (Er && e.type === 'mousemove'
              ? ((Ll = e.screenX - Er.screenX), (Dl = e.screenY - Er.screenY))
              : (Dl = Ll = 0),
            (Er = e)),
          Ll);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Dl;
    },
  }),
  Va = lt(Li),
  im = ye({}, Li, { dataTransfer: 0 }),
  lm = lt(im),
  sm = ye({}, ho, { relatedTarget: 0 }),
  jl = lt(sm),
  um = ye({}, yr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  am = lt(um),
  cm = ye({}, yr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  fm = lt(cm),
  dm = ye({}, yr, { data: 0 }),
  Ha = lt(dm),
  pm = {
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
  hm = {
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
  mm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function gm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = mm[e]) ? !!t[e] : !1;
}
function Ru() {
  return gm;
}
var ym = ye({}, ho, {
    key: function (e) {
      if (e.key) {
        var t = pm[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Go(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? hm[e.keyCode] || 'Unidentified'
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
    getModifierState: Ru,
    charCode: function (e) {
      return e.type === 'keypress' ? Go(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Go(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  vm = lt(ym),
  wm = ye({}, Li, {
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
  Ka = lt(wm),
  Sm = ye({}, ho, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru,
  }),
  xm = lt(Sm),
  km = ye({}, yr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cm = lt(km),
  Em = ye({}, Li, {
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
  Pm = lt(Em),
  _m = [9, 13, 27, 32],
  Ou = jt && 'CompositionEvent' in window,
  Lr = null;
jt && 'documentMode' in document && (Lr = document.documentMode);
var $m = jt && 'TextEvent' in window && !Lr,
  od = jt && (!Ou || (Lr && 8 < Lr && 11 >= Lr)),
  Qa = String.fromCharCode(32),
  Ya = !1;
function id(e, t) {
  switch (e) {
    case 'keyup':
      return _m.indexOf(t.keyCode) !== -1;
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
function ld(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var bn = !1;
function Tm(e, t) {
  switch (e) {
    case 'compositionend':
      return ld(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Ya = !0), Qa);
    case 'textInput':
      return (e = t.data), e === Qa && Ya ? null : e;
    default:
      return null;
  }
}
function Rm(e, t) {
  if (bn)
    return e === 'compositionend' || (!Ou && id(e, t))
      ? ((e = rd()), (Yo = $u = Xt = null), (bn = !1), e)
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
      return od && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Om = {
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
function Ga(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Om[e.type] : t === 'textarea';
}
function sd(e, t, n, r) {
  jf(r),
    (t = pi(t, 'onChange')),
    0 < t.length &&
      ((n = new Tu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dr = null,
  Jr = null;
function zm(e) {
  vd(e, 0);
}
function Di(e) {
  var t = Hn(e);
  if (zf(t)) return e;
}
function Im(e, t) {
  if (e === 'change') return t;
}
var ud = !1;
if (jt) {
  var Fl;
  if (jt) {
    var Bl = 'oninput' in document;
    if (!Bl) {
      var Xa = document.createElement('div');
      Xa.setAttribute('oninput', 'return;'),
        (Bl = typeof Xa.oninput == 'function');
    }
    Fl = Bl;
  } else Fl = !1;
  ud = Fl && (!document.documentMode || 9 < document.documentMode);
}
function Za() {
  Dr && (Dr.detachEvent('onpropertychange', ad), (Jr = Dr = null));
}
function ad(e) {
  if (e.propertyName === 'value' && Di(Jr)) {
    var t = [];
    sd(t, Jr, e, ku(e)), bf(zm, t);
  }
}
function Nm(e, t, n) {
  e === 'focusin'
    ? (Za(), (Dr = t), (Jr = n), Dr.attachEvent('onpropertychange', ad))
    : e === 'focusout' && Za();
}
function Mm(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return Di(Jr);
}
function Am(e, t) {
  if (e === 'click') return Di(t);
}
function Lm(e, t) {
  if (e === 'input' || e === 'change') return Di(t);
}
function Dm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ct = typeof Object.is == 'function' ? Object.is : Dm;
function qr(e, t) {
  if (Ct(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!cs.call(t, o) || !Ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Ja(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function qa(e, t) {
  var n = Ja(e);
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
    n = Ja(n);
  }
}
function cd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? cd(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function fd() {
  for (var e = window, t = li(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = li(e.document);
  }
  return t;
}
function zu(e) {
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
function jm(e) {
  var t = fd(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    cd(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && zu(n)) {
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
          (o = qa(n, i));
        var l = qa(n, r);
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
var Fm = jt && 'documentMode' in document && 11 >= document.documentMode,
  Wn = null,
  Rs = null,
  jr = null,
  Os = !1;
function ec(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Os ||
    Wn == null ||
    Wn !== li(r) ||
    ((r = Wn),
    'selectionStart' in r && zu(r)
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
    (jr && qr(jr, r)) ||
      ((jr = r),
      (r = pi(Rs, 'onSelect')),
      0 < r.length &&
        ((t = new Tu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Wn))));
}
function To(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Vn = {
    animationend: To('Animation', 'AnimationEnd'),
    animationiteration: To('Animation', 'AnimationIteration'),
    animationstart: To('Animation', 'AnimationStart'),
    transitionend: To('Transition', 'TransitionEnd'),
  },
  Ul = {},
  dd = {};
jt &&
  ((dd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Vn.animationend.animation,
    delete Vn.animationiteration.animation,
    delete Vn.animationstart.animation),
  'TransitionEvent' in window || delete Vn.transitionend.transition);
function ji(e) {
  if (Ul[e]) return Ul[e];
  if (!Vn[e]) return e;
  var t = Vn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in dd) return (Ul[e] = t[n]);
  return e;
}
var pd = ji('animationend'),
  hd = ji('animationiteration'),
  md = ji('animationstart'),
  gd = ji('transitionend'),
  yd = new Map(),
  tc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function cn(e, t) {
  yd.set(e, t), On(t, [e]);
}
for (var bl = 0; bl < tc.length; bl++) {
  var Wl = tc[bl],
    Bm = Wl.toLowerCase(),
    Um = Wl[0].toUpperCase() + Wl.slice(1);
  cn(Bm, 'on' + Um);
}
cn(pd, 'onAnimationEnd');
cn(hd, 'onAnimationIteration');
cn(md, 'onAnimationStart');
cn('dblclick', 'onDoubleClick');
cn('focusin', 'onFocus');
cn('focusout', 'onBlur');
cn(gd, 'onTransitionEnd');
lr('onMouseEnter', ['mouseout', 'mouseover']);
lr('onMouseLeave', ['mouseout', 'mouseover']);
lr('onPointerEnter', ['pointerout', 'pointerover']);
lr('onPointerLeave', ['pointerout', 'pointerover']);
On(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
On(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
On('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
On(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
On(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
On(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Nr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  bm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Nr));
function nc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Bh(r, t, void 0, e), (e.currentTarget = null);
}
function vd(e, t) {
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
          nc(o, s, a), (i = u);
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
          nc(o, s, a), (i = u);
        }
    }
  }
  if (ui) throw ((e = Ps), (ui = !1), (Ps = null), e);
}
function ce(e, t) {
  var n = t[As];
  n === void 0 && (n = t[As] = new Set());
  var r = e + '__bubble';
  n.has(r) || (wd(t, e, 2, !1), n.add(r));
}
function Vl(e, t, n) {
  var r = 0;
  t && (r |= 4), wd(n, e, r, t);
}
var Ro = '_reactListening' + Math.random().toString(36).slice(2);
function eo(e) {
  if (!e[Ro]) {
    (e[Ro] = !0),
      _f.forEach(function (n) {
        n !== 'selectionchange' && (bm.has(n) || Vl(n, !1, e), Vl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ro] || ((t[Ro] = !0), Vl('selectionchange', !1, t));
  }
}
function wd(e, t, n, r) {
  switch (nd(t)) {
    case 1:
      var o = nm;
      break;
    case 4:
      o = rm;
      break;
    default:
      o = _u;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Es ||
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
function Hl(e, t, n, r, o) {
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
  bf(function () {
    var a = i,
      m = ku(n),
      p = [];
    e: {
      var f = yd.get(e);
      if (f !== void 0) {
        var S = Tu,
          y = e;
        switch (e) {
          case 'keypress':
            if (Go(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            S = vm;
            break;
          case 'focusin':
            (y = 'focus'), (S = jl);
            break;
          case 'focusout':
            (y = 'blur'), (S = jl);
            break;
          case 'beforeblur':
          case 'afterblur':
            S = jl;
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
            S = Va;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            S = lm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            S = xm;
            break;
          case pd:
          case hd:
          case md:
            S = am;
            break;
          case gd:
            S = Cm;
            break;
          case 'scroll':
            S = om;
            break;
          case 'wheel':
            S = Pm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            S = fm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            S = Ka;
        }
        var g = (t & 4) !== 0,
          E = !g && e === 'scroll',
          d = g ? (f !== null ? f + 'Capture' : null) : f;
        g = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              d !== null && ((v = Yr(c, d)), v != null && g.push(to(c, v, h)))),
            E)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((f = new S(f, y, null, n, m)), p.push({ event: f, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (S = e === 'mouseout' || e === 'pointerout'),
          f &&
            n !== ks &&
            (y = n.relatedTarget || n.fromElement) &&
            (vn(y) || y[Ft]))
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
            ? ((y = n.relatedTarget || n.toElement),
              (S = a),
              (y = y ? vn(y) : null),
              y !== null &&
                ((E = zn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((S = null), (y = a)),
          S !== y)
        ) {
          if (
            ((g = Va),
            (v = 'onMouseLeave'),
            (d = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = Ka),
              (v = 'onPointerLeave'),
              (d = 'onPointerEnter'),
              (c = 'pointer')),
            (E = S == null ? f : Hn(S)),
            (h = y == null ? f : Hn(y)),
            (f = new g(v, c + 'leave', S, n, m)),
            (f.target = E),
            (f.relatedTarget = h),
            (v = null),
            vn(m) === a &&
              ((g = new g(d, c + 'enter', y, n, m)),
              (g.target = h),
              (g.relatedTarget = E),
              (v = g)),
            (E = v),
            S && y)
          )
            t: {
              for (g = S, d = y, c = 0, h = g; h; h = Mn(h)) c++;
              for (h = 0, v = d; v; v = Mn(v)) h++;
              for (; 0 < c - h; ) (g = Mn(g)), c--;
              for (; 0 < h - c; ) (d = Mn(d)), h--;
              for (; c--; ) {
                if (g === d || (d !== null && g === d.alternate)) break t;
                (g = Mn(g)), (d = Mn(d));
              }
              g = null;
            }
          else g = null;
          S !== null && rc(p, f, S, g, !1),
            y !== null && E !== null && rc(p, E, y, g, !0);
        }
      }
      e: {
        if (
          ((f = a ? Hn(a) : window),
          (S = f.nodeName && f.nodeName.toLowerCase()),
          S === 'select' || (S === 'input' && f.type === 'file'))
        )
          var x = Im;
        else if (Ga(f))
          if (ud) x = Lm;
          else {
            x = Mm;
            var P = Nm;
          }
        else
          (S = f.nodeName) &&
            S.toLowerCase() === 'input' &&
            (f.type === 'checkbox' || f.type === 'radio') &&
            (x = Am);
        if (x && (x = x(e, a))) {
          sd(p, x, n, m);
          break e;
        }
        P && P(e, f, a),
          e === 'focusout' &&
            (P = f._wrapperState) &&
            P.controlled &&
            f.type === 'number' &&
            ys(f, 'number', f.value);
      }
      switch (((P = a ? Hn(a) : window), e)) {
        case 'focusin':
          (Ga(P) || P.contentEditable === 'true') &&
            ((Wn = P), (Rs = a), (jr = null));
          break;
        case 'focusout':
          jr = Rs = Wn = null;
          break;
        case 'mousedown':
          Os = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Os = !1), ec(p, n, m);
          break;
        case 'selectionchange':
          if (Fm) break;
        case 'keydown':
        case 'keyup':
          ec(p, n, m);
      }
      var R;
      if (Ou)
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
        bn
          ? id(e, n) && (O = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (O = 'onCompositionStart');
      O &&
        (od &&
          n.locale !== 'ko' &&
          (bn || O !== 'onCompositionStart'
            ? O === 'onCompositionEnd' && bn && (R = rd())
            : ((Xt = m),
              ($u = 'value' in Xt ? Xt.value : Xt.textContent),
              (bn = !0))),
        (P = pi(a, O)),
        0 < P.length &&
          ((O = new Ha(O, e, null, n, m)),
          p.push({ event: O, listeners: P }),
          R ? (O.data = R) : ((R = ld(n)), R !== null && (O.data = R)))),
        (R = $m ? Tm(e, n) : Rm(e, n)) &&
          ((a = pi(a, 'onBeforeInput')),
          0 < a.length &&
            ((m = new Ha('onBeforeInput', 'beforeinput', null, n, m)),
            p.push({ event: m, listeners: a }),
            (m.data = R)));
    }
    vd(p, t);
  });
}
function to(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pi(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Yr(e, n)),
      i != null && r.unshift(to(e, i, o)),
      (i = Yr(e, t)),
      i != null && r.push(to(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Mn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rc(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Yr(n, i)), u != null && l.unshift(to(n, u, s)))
        : o || ((u = Yr(n, i)), u != null && l.push(to(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Wm = /\r\n?/g,
  Vm = /\u0000|\uFFFD/g;
function oc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Wm,
      `
`
    )
    .replace(Vm, '');
}
function Oo(e, t, n) {
  if (((t = oc(t)), oc(e) !== t && n)) throw Error(k(425));
}
function hi() {}
var zs = null,
  Is = null;
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
var Ms = typeof setTimeout == 'function' ? setTimeout : void 0,
  Hm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ic = typeof Promise == 'function' ? Promise : void 0,
  Km =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ic < 'u'
      ? function (e) {
          return ic.resolve(null).then(e).catch(Qm);
        }
      : Ms;
function Qm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Zr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Zr(t);
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
function lc(e) {
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
var vr = Math.random().toString(36).slice(2),
  $t = '__reactFiber$' + vr,
  no = '__reactProps$' + vr,
  Ft = '__reactContainer$' + vr,
  As = '__reactEvents$' + vr,
  Ym = '__reactListeners$' + vr,
  Gm = '__reactHandles$' + vr;
function vn(e) {
  var t = e[$t];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ft] || n[$t])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lc(e); e !== null; ) {
          if ((n = e[$t])) return n;
          e = lc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function mo(e) {
  return (
    (e = e[$t] || e[Ft]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Hn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Fi(e) {
  return e[no] || null;
}
var Ls = [],
  Kn = -1;
function fn(e) {
  return { current: e };
}
function fe(e) {
  0 > Kn || ((e.current = Ls[Kn]), (Ls[Kn] = null), Kn--);
}
function ue(e, t) {
  Kn++, (Ls[Kn] = e.current), (e.current = t);
}
var an = {},
  be = fn(an),
  Xe = fn(!1),
  En = an;
function sr(e, t) {
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
function mi() {
  fe(Xe), fe(be);
}
function sc(e, t, n) {
  if (be.current !== an) throw Error(k(168));
  ue(be, t), ue(Xe, n);
}
function Sd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(k(108, Nh(e) || 'Unknown', o));
  return ye({}, n, r);
}
function gi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || an),
    (En = be.current),
    ue(be, e),
    ue(Xe, Xe.current),
    !0
  );
}
function uc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Sd(e, t, En)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      fe(Xe),
      fe(be),
      ue(be, e))
    : fe(Xe),
    ue(Xe, n);
}
var It = null,
  Bi = !1,
  Ql = !1;
function xd(e) {
  It === null ? (It = [e]) : It.push(e);
}
function Xm(e) {
  (Bi = !0), xd(e);
}
function dn() {
  if (!Ql && It !== null) {
    Ql = !0;
    var e = 0,
      t = re;
    try {
      var n = It;
      for (re = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (It = null), (Bi = !1);
    } catch (o) {
      throw (It !== null && (It = It.slice(e + 1)), Kf(Cu, dn), o);
    } finally {
      (re = t), (Ql = !1);
    }
  }
  return null;
}
var Qn = [],
  Yn = 0,
  yi = null,
  vi = 0,
  at = [],
  ct = 0,
  Pn = null,
  Nt = 1,
  Mt = '';
function mn(e, t) {
  (Qn[Yn++] = vi), (Qn[Yn++] = yi), (yi = e), (vi = t);
}
function kd(e, t, n) {
  (at[ct++] = Nt), (at[ct++] = Mt), (at[ct++] = Pn), (Pn = e);
  var r = Nt;
  e = Mt;
  var o = 32 - xt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - xt(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Nt = (1 << (32 - xt(t) + o)) | (n << o) | r),
      (Mt = i + e);
  } else (Nt = (1 << i) | (n << o) | r), (Mt = e);
}
function Iu(e) {
  e.return !== null && (mn(e, 1), kd(e, 1, 0));
}
function Nu(e) {
  for (; e === yi; )
    (yi = Qn[--Yn]), (Qn[Yn] = null), (vi = Qn[--Yn]), (Qn[Yn] = null);
  for (; e === Pn; )
    (Pn = at[--ct]),
      (at[ct] = null),
      (Mt = at[--ct]),
      (at[ct] = null),
      (Nt = at[--ct]),
      (at[ct] = null);
}
var rt = null,
  nt = null,
  pe = !1,
  St = null;
function Cd(e, t) {
  var n = dt(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ac(e, t) {
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
          ? ((n = Pn !== null ? { id: Nt, overflow: Mt } : null),
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
function Ds(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function js(e) {
  if (pe) {
    var t = nt;
    if (t) {
      var n = t;
      if (!ac(e, t)) {
        if (Ds(e)) throw Error(k(418));
        t = tn(n.nextSibling);
        var r = rt;
        t && ac(e, t)
          ? Cd(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e));
      }
    } else {
      if (Ds(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (pe = !1), (rt = e);
    }
  }
}
function cc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function zo(e) {
  if (e !== rt) return !1;
  if (!pe) return cc(e), (pe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !Ns(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (Ds(e)) throw (Ed(), Error(k(418)));
    for (; t; ) Cd(e, t), (t = tn(t.nextSibling));
  }
  if ((cc(e), e.tag === 13)) {
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
function Ed() {
  for (var e = nt; e; ) e = tn(e.nextSibling);
}
function ur() {
  (nt = rt = null), (pe = !1);
}
function Mu(e) {
  St === null ? (St = [e]) : St.push(e);
}
var Zm = Wt.ReactCurrentBatchConfig;
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = ye({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var wi = fn(null),
  Si = null,
  Gn = null,
  Au = null;
function Lu() {
  Au = Gn = Si = null;
}
function Du(e) {
  var t = wi.current;
  fe(wi), (e._currentValue = t);
}
function Fs(e, t, n) {
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
function rr(e, t) {
  (Si = e),
    (Au = Gn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ge = !0), (e.firstContext = null));
}
function ht(e) {
  var t = e._currentValue;
  if (Au !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Gn === null)) {
      if (Si === null) throw Error(k(308));
      (Gn = e), (Si.dependencies = { lanes: 0, firstContext: e });
    } else Gn = Gn.next = e;
  return t;
}
var wn = null;
function ju(e) {
  wn === null ? (wn = [e]) : wn.push(e);
}
function Pd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ju(t)) : ((n.next = o.next), (o.next = n)),
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
function Fu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function _d(e, t) {
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
    o === null ? ((t.next = t), ju(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Bt(e, n)
  );
}
function Xo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
function fc(e, t) {
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
function xi(e, t, n, r) {
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
          var y = e,
            g = s;
          switch (((f = t), (S = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == 'function')) {
                p = y.call(S, p, f);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (f = typeof y == 'function' ? y.call(S, p, f) : y),
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
    ($n |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function dc(e, t, n) {
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
var $d = new Pf.Component().refs;
function Bs(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ye({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ui = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? zn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ve(),
      o = on(e),
      i = Lt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = nn(e, i, o)),
      t !== null && (kt(t, e, o, r), Xo(t, e, o));
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
      t !== null && (kt(t, e, o, r), Xo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ve(),
      r = on(e),
      o = Lt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = nn(e, o, r)),
      t !== null && (kt(t, e, r, n), Xo(t, e, r));
  },
};
function pc(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !qr(n, r) || !qr(o, i)
      : !0
  );
}
function Td(e, t, n) {
  var r = !1,
    o = an,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = ht(i))
      : ((o = Ze(t) ? En : be.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? sr(e, o) : an)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ui),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function hc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ui.enqueueReplaceState(t, t.state, null);
}
function Us(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = $d), Fu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = ht(i))
    : ((i = Ze(t) ? En : be.current), (o.context = sr(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && (Bs(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ui.enqueueReplaceState(o, o.state, null),
      xi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Pr(e, t, n) {
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
            s === $d && (s = o.refs = {}),
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
function Io(e, t) {
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
function mc(e) {
  var t = e._init;
  return t(e._payload);
}
function Rd(e) {
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
  function s(d, c, h, v) {
    return c === null || c.tag !== 6
      ? ((c = es(h, d.mode, v)), (c.return = d), c)
      : ((c = o(c, h)), (c.return = d), c);
  }
  function u(d, c, h, v) {
    var x = h.type;
    return x === Un
      ? m(d, c, h.props.children, v, h.key)
      : c !== null &&
        (c.elementType === x ||
          (typeof x == 'object' &&
            x !== null &&
            x.$$typeof === Kt &&
            mc(x) === c.type))
      ? ((v = o(c, h.props)), (v.ref = Pr(d, c, h)), (v.return = d), v)
      : ((v = ni(h.type, h.key, h.props, null, d.mode, v)),
        (v.ref = Pr(d, c, h)),
        (v.return = d),
        v);
  }
  function a(d, c, h, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = ts(h, d.mode, v)), (c.return = d), c)
      : ((c = o(c, h.children || [])), (c.return = d), c);
  }
  function m(d, c, h, v, x) {
    return c === null || c.tag !== 7
      ? ((c = Cn(h, d.mode, v, x)), (c.return = d), c)
      : ((c = o(c, h)), (c.return = d), c);
  }
  function p(d, c, h) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = es('' + c, d.mode, h)), (c.return = d), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case xo:
          return (
            (h = ni(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = Pr(d, null, c)),
            (h.return = d),
            h
          );
        case Bn:
          return (c = ts(c, d.mode, h)), (c.return = d), c;
        case Kt:
          var v = c._init;
          return p(d, v(c._payload), h);
      }
      if (zr(c) || Sr(c))
        return (c = Cn(c, d.mode, h, null)), (c.return = d), c;
      Io(d, c);
    }
    return null;
  }
  function f(d, c, h, v) {
    var x = c !== null ? c.key : null;
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return x !== null ? null : s(d, c, '' + h, v);
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case xo:
          return h.key === x ? u(d, c, h, v) : null;
        case Bn:
          return h.key === x ? a(d, c, h, v) : null;
        case Kt:
          return (x = h._init), f(d, c, x(h._payload), v);
      }
      if (zr(h) || Sr(h)) return x !== null ? null : m(d, c, h, v, null);
      Io(d, h);
    }
    return null;
  }
  function S(d, c, h, v, x) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (d = d.get(h) || null), s(c, d, '' + v, x);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case xo:
          return (d = d.get(v.key === null ? h : v.key) || null), u(c, d, v, x);
        case Bn:
          return (d = d.get(v.key === null ? h : v.key) || null), a(c, d, v, x);
        case Kt:
          var P = v._init;
          return S(d, c, h, P(v._payload), x);
      }
      if (zr(v) || Sr(v)) return (d = d.get(h) || null), m(c, d, v, x, null);
      Io(c, v);
    }
    return null;
  }
  function y(d, c, h, v) {
    for (
      var x = null, P = null, R = c, O = (c = 0), A = null;
      R !== null && O < h.length;
      O++
    ) {
      R.index > O ? ((A = R), (R = null)) : (A = R.sibling);
      var I = f(d, R, h[O], v);
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
        (R = p(d, h[O], v)),
          R !== null &&
            ((c = i(R, c, O)), P === null ? (x = R) : (P.sibling = R), (P = R));
      return pe && mn(d, O), x;
    }
    for (R = r(d, R); O < h.length; O++)
      (A = S(R, d, O, h[O], v)),
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
  function g(d, c, h, v) {
    var x = Sr(h);
    if (typeof x != 'function') throw Error(k(150));
    if (((h = x.call(h)), h == null)) throw Error(k(151));
    for (
      var P = (x = null), R = c, O = (c = 0), A = null, I = h.next();
      R !== null && !I.done;
      O++, I = h.next()
    ) {
      R.index > O ? ((A = R), (R = null)) : (A = R.sibling);
      var V = f(d, R, I.value, v);
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
        (I = p(d, I.value, v)),
          I !== null &&
            ((c = i(I, c, O)), P === null ? (x = I) : (P.sibling = I), (P = I));
      return pe && mn(d, O), x;
    }
    for (R = r(d, R); !I.done; O++, I = h.next())
      (I = S(R, d, O, I.value, v)),
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
  function E(d, c, h, v) {
    if (
      (typeof h == 'object' &&
        h !== null &&
        h.type === Un &&
        h.key === null &&
        (h = h.props.children),
      typeof h == 'object' && h !== null)
    ) {
      switch (h.$$typeof) {
        case xo:
          e: {
            for (var x = h.key, P = c; P !== null; ) {
              if (P.key === x) {
                if (((x = h.type), x === Un)) {
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
                    mc(x) === P.type)
                ) {
                  n(d, P.sibling),
                    (c = o(P, h.props)),
                    (c.ref = Pr(d, P, h)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, P);
                break;
              } else t(d, P);
              P = P.sibling;
            }
            h.type === Un
              ? ((c = Cn(h.props.children, d.mode, v, h.key)),
                (c.return = d),
                (d = c))
              : ((v = ni(h.type, h.key, h.props, null, d.mode, v)),
                (v.ref = Pr(d, c, h)),
                (v.return = d),
                (d = v));
          }
          return l(d);
        case Bn:
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
            (c = ts(h, d.mode, v)), (c.return = d), (d = c);
          }
          return l(d);
        case Kt:
          return (P = h._init), E(d, c, P(h._payload), v);
      }
      if (zr(h)) return y(d, c, h, v);
      if (Sr(h)) return g(d, c, h, v);
      Io(d, h);
    }
    return (typeof h == 'string' && h !== '') || typeof h == 'number'
      ? ((h = '' + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = o(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = es(h, d.mode, v)), (c.return = d), (d = c)),
        l(d))
      : n(d, c);
  }
  return E;
}
var ar = Rd(!0),
  Od = Rd(!1),
  go = {},
  Ot = fn(go),
  ro = fn(go),
  oo = fn(go);
function Sn(e) {
  if (e === go) throw Error(k(174));
  return e;
}
function Bu(e, t) {
  switch ((ue(oo, t), ue(ro, e), ue(Ot, go), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ws(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ws(t, e));
  }
  fe(Ot), ue(Ot, t);
}
function cr() {
  fe(Ot), fe(ro), fe(oo);
}
function zd(e) {
  Sn(oo.current);
  var t = Sn(Ot.current),
    n = ws(t, e.type);
  t !== n && (ue(ro, e), ue(Ot, n));
}
function Uu(e) {
  ro.current === e && (fe(Ot), fe(ro));
}
var me = fn(0);
function ki(e) {
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
var Yl = [];
function bu() {
  for (var e = 0; e < Yl.length; e++)
    Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var Zo = Wt.ReactCurrentDispatcher,
  Gl = Wt.ReactCurrentBatchConfig,
  _n = 0,
  ge = null,
  Re = null,
  ze = null,
  Ci = !1,
  Fr = !1,
  io = 0,
  Jm = 0;
function Fe() {
  throw Error(k(321));
}
function Wu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ct(e[n], t[n])) return !1;
  return !0;
}
function Vu(e, t, n, r, o, i) {
  if (
    ((_n = i),
    (ge = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Zo.current = e === null || e.memoizedState === null ? n0 : r0),
    (e = n(r, o)),
    Fr)
  ) {
    i = 0;
    do {
      if (((Fr = !1), (io = 0), 25 <= i)) throw Error(k(301));
      (i += 1),
        (ze = Re = null),
        (t.updateQueue = null),
        (Zo.current = o0),
        (e = n(r, o));
    } while (Fr);
  }
  if (
    ((Zo.current = Ei),
    (t = Re !== null && Re.next !== null),
    (_n = 0),
    (ze = Re = ge = null),
    (Ci = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Hu() {
  var e = io !== 0;
  return (io = 0), e;
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
function lo(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Xl(e) {
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
      if ((_n & m) === m)
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
          ($n |= m);
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
    do (i = o.lane), (ge.lanes |= i), ($n |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Zl(e) {
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
function Id() {}
function Nd(e, t) {
  var n = ge,
    r = mt(),
    o = t(),
    i = !Ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ge = !0)),
    (r = r.queue),
    Ku(Ld.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ze !== null && ze.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      so(9, Ad.bind(null, n, r, o, t), void 0, null),
      Ie === null)
    )
      throw Error(k(349));
    _n & 30 || Md(n, t, o);
  }
  return o;
}
function Md(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ge.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ge.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ad(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Dd(t) && jd(e);
}
function Ld(e, t, n) {
  return n(function () {
    Dd(t) && jd(e);
  });
}
function Dd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ct(e, n);
  } catch {
    return !0;
  }
}
function jd(e) {
  var t = Bt(e, 1);
  t !== null && kt(t, e, 1, -1);
}
function gc(e) {
  var t = _t();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: lo,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = t0.bind(null, ge, e)),
    [t.memoizedState, e]
  );
}
function so(e, t, n, r) {
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
function Fd() {
  return mt().memoizedState;
}
function Jo(e, t, n, r) {
  var o = _t();
  (ge.flags |= e),
    (o.memoizedState = so(1 | t, n, void 0, r === void 0 ? null : r));
}
function bi(e, t, n, r) {
  var o = mt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Re !== null) {
    var l = Re.memoizedState;
    if (((i = l.destroy), r !== null && Wu(r, l.deps))) {
      o.memoizedState = so(t, n, i, r);
      return;
    }
  }
  (ge.flags |= e), (o.memoizedState = so(1 | t, n, i, r));
}
function yc(e, t) {
  return Jo(8390656, 8, e, t);
}
function Ku(e, t) {
  return bi(2048, 8, e, t);
}
function Bd(e, t) {
  return bi(4, 2, e, t);
}
function Ud(e, t) {
  return bi(4, 4, e, t);
}
function bd(e, t) {
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
function Wd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), bi(4, 4, bd.bind(null, t, e), n)
  );
}
function Qu() {}
function Vd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Hd(e, t) {
  var n = mt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Wu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Kd(e, t, n) {
  return _n & 21
    ? (Ct(n, t) || ((n = Gf()), (ge.lanes |= n), ($n |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ge = !0)), (e.memoizedState = n));
}
function qm(e, t) {
  var n = re;
  (re = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), t();
  } finally {
    (re = n), (Gl.transition = r);
  }
}
function Qd() {
  return mt().memoizedState;
}
function e0(e, t, n) {
  var r = on(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Yd(e))
  )
    Gd(t, n);
  else if (((n = Pd(e, t, n, r)), n !== null)) {
    var o = Ve();
    kt(n, e, r, o), Xd(n, t, r);
  }
}
function t0(e, t, n) {
  var r = on(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Yd(e)) Gd(t, o);
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
            ? ((o.next = o), ju(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = Pd(e, t, o, r)),
      n !== null && ((o = Ve()), kt(n, e, r, o), Xd(n, t, r));
  }
}
function Yd(e) {
  var t = e.alternate;
  return e === ge || (t !== null && t === ge);
}
function Gd(e, t) {
  Fr = Ci = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Xd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Eu(e, n);
  }
}
var Ei = {
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
  n0 = {
    readContext: ht,
    useCallback: function (e, t) {
      return (_t().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ht,
    useEffect: yc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Jo(4194308, 4, bd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Jo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Jo(4, 2, e, t);
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
        (e = e.dispatch = e0.bind(null, ge, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _t();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: gc,
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      return (_t().memoizedState = e);
    },
    useTransition: function () {
      var e = gc(!1),
        t = e[0];
      return (e = qm.bind(null, e[1])), (_t().memoizedState = e), [t, e];
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
        _n & 30 || Md(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        yc(Ld.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        so(9, Ad.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _t(),
        t = Ie.identifierPrefix;
      if (pe) {
        var n = Mt,
          r = Nt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = io++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Jm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  r0 = {
    readContext: ht,
    useCallback: Vd,
    useContext: ht,
    useEffect: Ku,
    useImperativeHandle: Wd,
    useInsertionEffect: Bd,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: Xl,
    useRef: Fd,
    useState: function () {
      return Xl(lo);
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = mt();
      return Kd(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(lo)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: Nd,
    useId: Qd,
    unstable_isNewReconciler: !1,
  },
  o0 = {
    readContext: ht,
    useCallback: Vd,
    useContext: ht,
    useEffect: Ku,
    useImperativeHandle: Wd,
    useInsertionEffect: Bd,
    useLayoutEffect: Ud,
    useMemo: Hd,
    useReducer: Zl,
    useRef: Fd,
    useState: function () {
      return Zl(lo);
    },
    useDebugValue: Qu,
    useDeferredValue: function (e) {
      var t = mt();
      return Re === null ? (t.memoizedState = e) : Kd(t, Re.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(lo)[0],
        t = mt().memoizedState;
      return [e, t];
    },
    useMutableSource: Id,
    useSyncExternalStore: Nd,
    useId: Qd,
    unstable_isNewReconciler: !1,
  };
function fr(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Ih(r)), (r = r.return);
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
function Jl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function bs(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var i0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Zd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      _i || ((_i = !0), (Js = r)), bs(e, t);
    }),
    n
  );
}
function Jd(e, t, n) {
  (n = Lt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        bs(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        bs(e, t),
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
function vc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new i0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = w0.bind(null, e, t, n)), t.then(e, e));
}
function wc(e) {
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
function Sc(e, t, n, r, o) {
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
var l0 = Wt.ReactCurrentOwner,
  Ge = !1;
function We(e, t, n, r) {
  t.child = e === null ? Od(t, null, n, r) : ar(t, e.child, n, r);
}
function xc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    rr(t, o),
    (r = Vu(e, t, n, r, i, o)),
    (n = Hu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (pe && n && Iu(t), (t.flags |= 1), We(e, t, r, o), t.child)
  );
}
function kc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !ta(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), qd(e, t, i, r, o))
      : ((e = ni(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : qr), n(l, r) && e.ref === t.ref)
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
function qd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (qr(i, r) && e.ref === t.ref)
      if (((Ge = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ge = !0);
      else return (t.lanes = e.lanes), Ut(e, t, o);
  }
  return Ws(e, t, n, r, o);
}
function ep(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Zn, et),
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
          ue(Zn, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(Zn, et),
        (et |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(Zn, et),
      (et |= r);
  return We(e, t, o, n), t.child;
}
function tp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ws(e, t, n, r, o) {
  var i = Ze(n) ? En : be.current;
  return (
    (i = sr(t, i)),
    rr(t, o),
    (n = Vu(e, t, n, r, i, o)),
    (r = Hu()),
    e !== null && !Ge
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ut(e, t, o))
      : (pe && r && Iu(t), (t.flags |= 1), We(e, t, n, o), t.child)
  );
}
function Cc(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0;
    gi(t);
  } else i = !1;
  if ((rr(t, o), t.stateNode === null))
    qo(e, t), Td(t, n, r), Us(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = ht(a))
      : ((a = Ze(n) ? En : be.current), (a = sr(t, a)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && hc(t, l, r, a)),
      (Qt = !1);
    var f = t.memoizedState;
    (l.state = f),
      xi(t, r, l, o),
      (u = t.memoizedState),
      s !== r || f !== u || Xe.current || Qt
        ? (typeof m == 'function' && (Bs(t, n, m, r), (u = t.memoizedState)),
          (s = Qt || pc(t, n, s, r, f, u, a))
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
      _d(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : vt(t.type, s)),
      (l.props = a),
      (p = t.pendingProps),
      (f = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = ht(u))
        : ((u = Ze(n) ? En : be.current), (u = sr(t, u)));
    var S = n.getDerivedStateFromProps;
    (m =
      typeof S == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== p || f !== u) && hc(t, l, r, u)),
      (Qt = !1),
      (f = t.memoizedState),
      (l.state = f),
      xi(t, r, l, o);
    var y = t.memoizedState;
    s !== p || f !== y || Xe.current || Qt
      ? (typeof S == 'function' && (Bs(t, n, S, r), (y = t.memoizedState)),
        (a = Qt || pc(t, n, a, r, f, y, u) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != 'function' &&
                typeof l.componentWillUpdate != 'function') ||
              (typeof l.componentWillUpdate == 'function' &&
                l.componentWillUpdate(r, y, u),
              typeof l.UNSAFE_componentWillUpdate == 'function' &&
                l.UNSAFE_componentWillUpdate(r, y, u)),
            typeof l.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
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
  return Vs(e, t, n, r, i, o);
}
function Vs(e, t, n, r, o, i) {
  tp(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && uc(t, n, !1), Ut(e, t, i);
  (r = t.stateNode), (l0.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = ar(t, e.child, null, i)), (t.child = ar(t, null, s, i)))
      : We(e, t, s, i),
    (t.memoizedState = r.state),
    o && uc(t, n, !0),
    t.child
  );
}
function np(e) {
  var t = e.stateNode;
  t.pendingContext
    ? sc(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && sc(e, t.context, !1),
    Bu(e, t.containerInfo);
}
function Ec(e, t, n, r, o) {
  return ur(), Mu(o), (t.flags |= 256), We(e, t, n, r), t.child;
}
var Hs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ks(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function rp(e, t, n) {
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
      js(t),
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
                : (i = Hi(l, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ks(n)),
              (t.memoizedState = Hs),
              e)
            : Yu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return s0(e, t, l, r, s, o, n);
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
          ? Ks(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Hs),
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
function Yu(e, t) {
  return (
    (t = Hi({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function No(e, t, n, r) {
  return (
    r !== null && Mu(r),
    ar(t, e.child, null, n),
    (e = Yu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function s0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Jl(Error(k(422)))), No(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Hi({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = Cn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && ar(t, e.child, null, l),
        (t.child.memoizedState = Ks(l)),
        (t.memoizedState = Hs),
        i);
  if (!(t.mode & 1)) return No(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(k(419))), (r = Jl(i, r, void 0)), No(e, t, l, r);
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
    return ea(), (r = Jl(Error(k(421)))), No(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = S0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (nt = tn(o.nextSibling)),
      (rt = t),
      (pe = !0),
      (St = null),
      e !== null &&
        ((at[ct++] = Nt),
        (at[ct++] = Mt),
        (at[ct++] = Pn),
        (Nt = e.id),
        (Mt = e.overflow),
        (Pn = t)),
      (t = Yu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Pc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fs(e.return, t, n);
}
function ql(e, t, n, r, o) {
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
function op(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((We(e, t, r.children, n), (r = me.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Pc(e, n, t);
        else if (e.tag === 19) Pc(e, n, t);
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
            e !== null && ki(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          ql(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && ki(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        ql(t, !0, n, null, i);
        break;
      case 'together':
        ql(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ut(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    ($n |= t.lanes),
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
function u0(e, t, n) {
  switch (t.tag) {
    case 3:
      np(t), ur();
      break;
    case 5:
      zd(t);
      break;
    case 1:
      Ze(t.type) && gi(t);
      break;
    case 4:
      Bu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ue(wi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(me, me.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? rp(e, t, n)
          : (ue(me, me.current & 1),
            (e = Ut(e, t, n)),
            e !== null ? e.sibling : null);
      ue(me, me.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return op(e, t, n);
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
      return (t.lanes = 0), ep(e, t, n);
  }
  return Ut(e, t, n);
}
var ip, Qs, lp, sp;
ip = function (e, t) {
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
Qs = function () {};
lp = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), Sn(Ot.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = ms(e, o)), (r = ms(e, r)), (i = []);
        break;
      case 'select':
        (o = ye({}, o, { value: void 0 })),
          (r = ye({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = vs(e, o)), (r = vs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hi);
    }
    Ss(n, r);
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
            (Kr.hasOwnProperty(a)
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
              (Kr.hasOwnProperty(a)
                ? (u != null && a === 'onScroll' && ce('scroll', e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
sp = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _r(e, t) {
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
function a0(e, t, n) {
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
      return Ze(t.type) && mi(), Be(t), null;
    case 3:
      return (
        (r = t.stateNode),
        cr(),
        fe(Xe),
        fe(be),
        bu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (zo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), St !== null && (tu(St), (St = null)))),
        Qs(e, t),
        Be(t),
        null
      );
    case 5:
      Uu(t);
      var o = Sn(oo.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        lp(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return Be(t), null;
        }
        if (((e = Sn(Ot.current)), zo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[$t] = t), (r[no] = i), (e = (t.mode & 1) !== 0), n)) {
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
              Ma(r, i), ce('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                ce('invalid', r);
              break;
            case 'textarea':
              La(r, i), ce('invalid', r);
          }
          Ss(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oo(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Oo(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : Kr.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  ce('scroll', r);
            }
          switch (n) {
            case 'input':
              ko(r), Aa(r, i, !0);
              break;
            case 'textarea':
              ko(r), Da(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = hi);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Mf(n)),
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
            (e[no] = r),
            ip(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = xs(n, r)), n)) {
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
                Ma(e, r), (o = ms(e, r)), ce('invalid', e);
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
                La(e, r), (o = vs(e, r)), ce('invalid', e);
                break;
              default:
                o = r;
            }
            Ss(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? Df(e, u)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && Af(e, u))
                  : i === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Qr(e, u)
                    : typeof u == 'number' && Qr(e, '' + u)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Kr.hasOwnProperty(i)
                      ? u != null && i === 'onScroll' && ce('scroll', e)
                      : u != null && vu(e, i, u, l));
              }
            switch (n) {
              case 'input':
                ko(e), Aa(e, r, !1);
                break;
              case 'textarea':
                ko(e), Da(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + un(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = hi);
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
      if (e && t.stateNode != null) sp(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(k(166));
        if (((n = Sn(oo.current)), Sn(Ot.current), zo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[$t] = t),
            (i = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                Oo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Oo(r.nodeValue, n, (e.mode & 1) !== 0);
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
          Ed(), ur(), (t.flags |= 98560), (i = !1);
        else if (((i = zo(t)), r !== null && r.dehydrated !== null)) {
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
            ur(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Be(t), (i = !1);
        } else St !== null && (tu(St), (St = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || me.current & 1 ? Oe === 0 && (Oe = 3) : ea())),
          t.updateQueue !== null && (t.flags |= 4),
          Be(t),
          null);
    case 4:
      return (
        cr(), Qs(e, t), e === null && eo(t.stateNode.containerInfo), Be(t), null
      );
    case 10:
      return Du(t.type._context), Be(t), null;
    case 17:
      return Ze(t.type) && mi(), Be(t), null;
    case 19:
      if ((fe(me), (i = t.memoizedState), i === null)) return Be(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) _r(i, !1);
        else {
          if (Oe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = ki(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    _r(i, !1),
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
            Pe() > dr &&
            ((t.flags |= 128), (r = !0), _r(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ki(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              _r(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !pe)
            )
              return Be(t), null;
          } else
            2 * Pe() - i.renderingStartTime > dr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), _r(i, !1), (t.lanes = 4194304));
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
        qu(),
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
function c0(e, t) {
  switch ((Nu(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && mi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        cr(),
        fe(Xe),
        fe(be),
        bu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Uu(t), null;
    case 13:
      if (
        (fe(me), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(k(340));
        ur();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return fe(me), null;
    case 4:
      return cr(), null;
    case 10:
      return Du(t.type._context), null;
    case 22:
    case 23:
      return qu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mo = !1,
  Ue = !1,
  f0 = typeof WeakSet == 'function' ? WeakSet : Set,
  M = null;
function Xn(e, t) {
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
function Ys(e, t, n) {
  try {
    n();
  } catch (r) {
    ke(e, t, r);
  }
}
var _c = !1;
function d0(e, t) {
  if (((zs = fi), (e = fd()), zu(e))) {
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
  for (Is = { focusedElem: e, selectionRange: n }, fi = !1, M = t; M !== null; )
    if (((t = M), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (M = e);
    else
      for (; M !== null; ) {
        t = M;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var g = y.memoizedProps,
                    E = y.memoizedState,
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
        } catch (v) {
          ke(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (M = e);
          break;
        }
        M = t.return;
      }
  return (y = _c), (_c = !1), y;
}
function Br(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ys(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Wi(e, t) {
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
function Gs(e) {
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
function up(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), up(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[$t], delete t[no], delete t[As], delete t[Ym], delete t[Gm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function ap(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function $c(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || ap(e.return)) return null;
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
function Xs(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = hi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Xs(e, t, n), e = e.sibling; e !== null; ) Xs(e, t, n), (e = e.sibling);
}
function Zs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Zs(e, t, n), e = e.sibling; e !== null; ) Zs(e, t, n), (e = e.sibling);
}
var Me = null,
  wt = !1;
function Ht(e, t, n) {
  for (n = n.child; n !== null; ) cp(e, t, n), (n = n.sibling);
}
function cp(e, t, n) {
  if (Rt && typeof Rt.onCommitFiberUnmount == 'function')
    try {
      Rt.onCommitFiberUnmount(Ai, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ue || Xn(n, t);
    case 6:
      var r = Me,
        o = wt;
      (Me = null),
        Ht(e, t, n),
        (Me = r),
        (wt = o),
        Me !== null &&
          (wt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Me.removeChild(n.stateNode));
      break;
    case 18:
      Me !== null &&
        (wt
          ? ((e = Me),
            (n = n.stateNode),
            e.nodeType === 8
              ? Kl(e.parentNode, n)
              : e.nodeType === 1 && Kl(e, n),
            Zr(e))
          : Kl(Me, n.stateNode));
      break;
    case 4:
      (r = Me),
        (o = wt),
        (Me = n.stateNode.containerInfo),
        (wt = !0),
        Ht(e, t, n),
        (Me = r),
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
            l !== void 0 && (i & 2 || i & 4) && Ys(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Ht(e, t, n);
      break;
    case 1:
      if (
        !Ue &&
        (Xn(n, t),
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
function Tc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new f0()),
      t.forEach(function (r) {
        var o = x0.bind(null, e, r);
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
              (Me = s.stateNode), (wt = !1);
              break e;
            case 3:
              (Me = s.stateNode.containerInfo), (wt = !0);
              break e;
            case 4:
              (Me = s.stateNode.containerInfo), (wt = !0);
              break e;
          }
          s = s.return;
        }
        if (Me === null) throw Error(k(160));
        cp(i, l, o), (Me = null), (wt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        ke(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) fp(t, e), (t = t.sibling);
}
function fp(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((yt(t, e), Pt(e), r & 4)) {
        try {
          Br(3, e, e.return), Wi(3, e);
        } catch (g) {
          ke(e, e.return, g);
        }
        try {
          Br(5, e, e.return);
        } catch (g) {
          ke(e, e.return, g);
        }
      }
      break;
    case 1:
      yt(t, e), Pt(e), r & 512 && n !== null && Xn(n, n.return);
      break;
    case 5:
      if (
        (yt(t, e),
        Pt(e),
        r & 512 && n !== null && Xn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Qr(o, '');
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
            s === 'input' && i.type === 'radio' && i.name != null && If(o, i),
              xs(s, l);
            var a = xs(s, i);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                p = u[l + 1];
              m === 'style'
                ? Df(o, p)
                : m === 'dangerouslySetInnerHTML'
                ? Af(o, p)
                : m === 'children'
                ? Qr(o, p)
                : vu(o, m, p, a);
            }
            switch (s) {
              case 'input':
                gs(o, i);
                break;
              case 'textarea':
                Nf(o, i);
                break;
              case 'select':
                var f = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var S = i.value;
                S != null
                  ? qn(o, !!i.multiple, S, !1)
                  : f !== !!i.multiple &&
                    (i.defaultValue != null
                      ? qn(o, !!i.multiple, i.defaultValue, !0)
                      : qn(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[no] = i;
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
          Zr(t.containerInfo);
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
            (Zu = Pe())),
        r & 4 && Tc(e);
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
          for (M = e, m = e.child; m !== null; ) {
            for (p = M = m; M !== null; ) {
              switch (((f = M), (S = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Br(4, f, f.return);
                  break;
                case 1:
                  Xn(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      ke(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Xn(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Oc(p);
                    continue;
                  }
              }
              S !== null ? ((S.return = f), (M = S)) : Oc(p);
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
                      (s.style.display = Lf('display', l)));
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
      yt(t, e), Pt(e), r & 4 && Tc(e);
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
          if (ap(n)) {
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
          r.flags & 32 && (Qr(o, ''), (r.flags &= -33));
          var i = $c(e);
          Zs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = $c(e);
          Xs(e, s, l);
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
function p0(e, t, n) {
  (M = e), dp(e);
}
function dp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; M !== null; ) {
    var o = M,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Mo;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Ue;
        s = Mo;
        var a = Ue;
        if (((Mo = l), (Ue = u) && !a))
          for (M = o; M !== null; )
            (l = M),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? zc(o)
                : u !== null
                ? ((u.return = l), (M = u))
                : zc(o);
        for (; i !== null; ) (M = i), dp(i), (i = i.sibling);
        (M = o), (Mo = s), (Ue = a);
      }
      Rc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (M = i)) : Rc(e);
  }
}
function Rc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ue || Wi(5, t);
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
              i !== null && dc(t, i, r);
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
                dc(t, l, n);
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
                    p !== null && Zr(p);
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
        Ue || (t.flags & 512 && Gs(t));
      } catch (f) {
        ke(t, t.return, f);
      }
    }
    if (t === e) {
      M = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function Oc(e) {
  for (; M !== null; ) {
    var t = M;
    if (t === e) {
      M = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (M = n);
      break;
    }
    M = t.return;
  }
}
function zc(e) {
  for (; M !== null; ) {
    var t = M;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Wi(4, t);
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
            Gs(t);
          } catch (u) {
            ke(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Gs(t);
          } catch (u) {
            ke(t, l, u);
          }
      }
    } catch (u) {
      ke(t, t.return, u);
    }
    if (t === e) {
      M = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (M = s);
      break;
    }
    M = t.return;
  }
}
var h0 = Math.ceil,
  Pi = Wt.ReactCurrentDispatcher,
  Gu = Wt.ReactCurrentOwner,
  pt = Wt.ReactCurrentBatchConfig,
  J = 0,
  Ie = null,
  _e = null,
  Le = 0,
  et = 0,
  Zn = fn(0),
  Oe = 0,
  uo = null,
  $n = 0,
  Vi = 0,
  Xu = 0,
  Ur = null,
  Ye = null,
  Zu = 0,
  dr = 1 / 0,
  zt = null,
  _i = !1,
  Js = null,
  rn = null,
  Ao = !1,
  Zt = null,
  $i = 0,
  br = 0,
  qs = null,
  ei = -1,
  ti = 0;
function Ve() {
  return J & 6 ? Pe() : ei !== -1 ? ei : (ei = Pe());
}
function on(e) {
  return e.mode & 1
    ? J & 2 && Le !== 0
      ? Le & -Le
      : Zm.transition !== null
      ? (ti === 0 && (ti = Gf()), ti)
      : ((e = re),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nd(e.type))),
        e)
    : 1;
}
function kt(e, t, n, r) {
  if (50 < br) throw ((br = 0), (qs = null), Error(k(185)));
  po(e, n, r),
    (!(J & 2) || e !== Ie) &&
      (e === Ie && (!(J & 2) && (Vi |= n), Oe === 4 && Gt(e, Le)),
      Je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((dr = Pe() + 500), Bi && dn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Zh(e, t);
  var r = ci(e, e === Ie ? Le : 0);
  if (r === 0)
    n !== null && Ba(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ba(n), t === 1))
      e.tag === 0 ? Xm(Ic.bind(null, e)) : xd(Ic.bind(null, e)),
        Km(function () {
          !(J & 6) && dn();
        }),
        (n = null);
    else {
      switch (Xf(r)) {
        case 1:
          n = Cu;
          break;
        case 4:
          n = Qf;
          break;
        case 16:
          n = ai;
          break;
        case 536870912:
          n = Yf;
          break;
        default:
          n = ai;
      }
      n = Sp(n, pp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function pp(e, t) {
  if (((ei = -1), (ti = 0), J & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (or() && e.callbackNode !== n) return null;
  var r = ci(e, e === Ie ? Le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ti(e, r);
  else {
    t = r;
    var o = J;
    J |= 2;
    var i = mp();
    (Ie !== e || Le !== t) && ((zt = null), (dr = Pe() + 500), kn(e, t));
    do
      try {
        y0();
        break;
      } catch (s) {
        hp(e, s);
      }
    while (1);
    Lu(),
      (Pi.current = i),
      (J = o),
      _e !== null ? (t = 0) : ((Ie = null), (Le = 0), (t = Oe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = _s(e)), o !== 0 && ((r = o), (t = eu(e, o)))), t === 1)
    )
      throw ((n = uo), kn(e, 0), Gt(e, r), Je(e, Pe()), n);
    if (t === 6) Gt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !m0(o) &&
          ((t = Ti(e, r)),
          t === 2 && ((i = _s(e)), i !== 0 && ((r = i), (t = eu(e, i)))),
          t === 1))
      )
        throw ((n = uo), kn(e, 0), Gt(e, r), Je(e, Pe()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          gn(e, Ye, zt);
          break;
        case 3:
          if (
            (Gt(e, r), (r & 130023424) === r && ((t = Zu + 500 - Pe()), 10 < t))
          ) {
            if (ci(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Ve(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Ms(gn.bind(null, e, Ye, zt), t);
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
                : 1960 * h0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ms(gn.bind(null, e, Ye, zt), r);
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
  return Je(e, Pe()), e.callbackNode === n ? pp.bind(null, e) : null;
}
function eu(e, t) {
  var n = Ur;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = Ti(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && tu(t)),
    e
  );
}
function tu(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function m0(e) {
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
    t &= ~Xu,
      t &= ~Vi,
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
function Ic(e) {
  if (J & 6) throw Error(k(327));
  or();
  var t = ci(e, 0);
  if (!(t & 1)) return Je(e, Pe()), null;
  var n = Ti(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = _s(e);
    r !== 0 && ((t = r), (n = eu(e, r)));
  }
  if (n === 1) throw ((n = uo), kn(e, 0), Gt(e, t), Je(e, Pe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    gn(e, Ye, zt),
    Je(e, Pe()),
    null
  );
}
function Ju(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((dr = Pe() + 500), Bi && dn());
  }
}
function Tn(e) {
  Zt !== null && Zt.tag === 0 && !(J & 6) && or();
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
function qu() {
  (et = Zn.current), fe(Zn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Hm(n)), _e !== null))
    for (n = _e.return; n !== null; ) {
      var r = n;
      switch ((Nu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && mi();
          break;
        case 3:
          cr(), fe(Xe), fe(be), bu();
          break;
        case 5:
          Uu(r);
          break;
        case 4:
          cr();
          break;
        case 13:
          fe(me);
          break;
        case 19:
          fe(me);
          break;
        case 10:
          Du(r.type._context);
          break;
        case 22:
        case 23:
          qu();
      }
      n = n.return;
    }
  if (
    ((Ie = e),
    (_e = e = ln(e.current, null)),
    (Le = et = t),
    (Oe = 0),
    (uo = null),
    (Xu = Vi = $n = 0),
    (Ye = Ur = null),
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
function hp(e, t) {
  do {
    var n = _e;
    try {
      if ((Lu(), (Zo.current = Ei), Ci)) {
        for (var r = ge.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        Ci = !1;
      }
      if (
        ((_n = 0),
        (ze = Re = ge = null),
        (Fr = !1),
        (io = 0),
        (Gu.current = null),
        n === null || n.return === null)
      ) {
        (Oe = 1), (uo = t), (_e = null);
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
          var S = wc(l);
          if (S !== null) {
            (S.flags &= -257),
              Sc(S, l, s, i, t),
              S.mode & 1 && vc(i, a, t),
              (t = S),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              vc(i, a, t), ea();
              break e;
            }
            u = Error(k(426));
          }
        } else if (pe && s.mode & 1) {
          var E = wc(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Sc(E, l, s, i, t),
              Mu(fr(u, s));
            break e;
          }
        }
        (i = u = fr(u, s)),
          Oe !== 4 && (Oe = 2),
          Ur === null ? (Ur = [i]) : Ur.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var d = Zd(i, u, t);
              fc(i, d);
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
                var v = Jd(i, s, t);
                fc(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      yp(n);
    } catch (x) {
      (t = x), _e === n && n !== null && (_e = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function mp() {
  var e = Pi.current;
  return (Pi.current = Ei), e === null ? Ei : e;
}
function ea() {
  (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
    Ie === null || (!($n & 268435455) && !(Vi & 268435455)) || Gt(Ie, Le);
}
function Ti(e, t) {
  var n = J;
  J |= 2;
  var r = mp();
  (Ie !== e || Le !== t) && ((zt = null), kn(e, t));
  do
    try {
      g0();
      break;
    } catch (o) {
      hp(e, o);
    }
  while (1);
  if ((Lu(), (J = n), (Pi.current = r), _e !== null)) throw Error(k(261));
  return (Ie = null), (Le = 0), Oe;
}
function g0() {
  for (; _e !== null; ) gp(_e);
}
function y0() {
  for (; _e !== null && !bh(); ) gp(_e);
}
function gp(e) {
  var t = wp(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? yp(e) : (_e = t),
    (Gu.current = null);
}
function yp(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = c0(n, t)), n !== null)) {
        (n.flags &= 32767), (_e = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Oe = 6), (_e = null);
        return;
      }
    } else if (((n = a0(n, t, et)), n !== null)) {
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
    (pt.transition = null), (re = 1), v0(e, t, n, r);
  } finally {
    (pt.transition = o), (re = r);
  }
  return null;
}
function v0(e, t, n, r) {
  do or();
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
    (Jh(e, i),
    e === Ie && ((_e = Ie = null), (Le = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ao ||
      ((Ao = !0),
      Sp(ai, function () {
        return or(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = pt.transition), (pt.transition = null);
    var l = re;
    re = 1;
    var s = J;
    (J |= 4),
      (Gu.current = null),
      d0(e, n),
      fp(n, e),
      jm(Is),
      (fi = !!zs),
      (Is = zs = null),
      (e.current = n),
      p0(n),
      Wh(),
      (J = s),
      (re = l),
      (pt.transition = i);
  } else e.current = n;
  if (
    (Ao && ((Ao = !1), (Zt = e), ($i = o)),
    (i = e.pendingLanes),
    i === 0 && (rn = null),
    Kh(n.stateNode),
    Je(e, Pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (_i) throw ((_i = !1), (e = Js), (Js = null), e);
  return (
    $i & 1 && e.tag !== 0 && or(),
    (i = e.pendingLanes),
    i & 1 ? (e === qs ? br++ : ((br = 0), (qs = e))) : (br = 0),
    dn(),
    null
  );
}
function or() {
  if (Zt !== null) {
    var e = Xf($i),
      t = pt.transition,
      n = re;
    try {
      if (((pt.transition = null), (re = 16 > e ? 16 : e), Zt === null))
        var r = !1;
      else {
        if (((e = Zt), (Zt = null), ($i = 0), J & 6)) throw Error(k(331));
        var o = J;
        for (J |= 4, M = e.current; M !== null; ) {
          var i = M,
            l = i.child;
          if (M.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (M = a; M !== null; ) {
                  var m = M;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Br(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (M = p);
                  else
                    for (; M !== null; ) {
                      m = M;
                      var f = m.sibling,
                        S = m.return;
                      if ((up(m), m === a)) {
                        M = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = S), (M = f);
                        break;
                      }
                      M = S;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var E = g.sibling;
                    (g.sibling = null), (g = E);
                  } while (g !== null);
                }
              }
              M = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (M = l);
          else
            e: for (; M !== null; ) {
              if (((i = M), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Br(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (M = d);
                break e;
              }
              M = i.return;
            }
        }
        var c = e.current;
        for (M = c; M !== null; ) {
          l = M;
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (M = h);
          else
            e: for (l = c; M !== null; ) {
              if (((s = M), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Wi(9, s);
                  }
                } catch (x) {
                  ke(s, s.return, x);
                }
              if (s === l) {
                M = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (M = v);
                break e;
              }
              M = s.return;
            }
        }
        if (
          ((J = o), dn(), Rt && typeof Rt.onPostCommitFiberRoot == 'function')
        )
          try {
            Rt.onPostCommitFiberRoot(Ai, e);
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
function Nc(e, t, n) {
  (t = fr(n, t)),
    (t = Zd(e, t, 1)),
    (e = nn(e, t, 1)),
    (t = Ve()),
    e !== null && (po(e, 1, t), Je(e, t));
}
function ke(e, t, n) {
  if (e.tag === 3) Nc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Nc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (rn === null || !rn.has(r)))
        ) {
          (e = fr(n, e)),
            (e = Jd(t, e, 1)),
            (t = nn(t, e, 1)),
            (e = Ve()),
            t !== null && (po(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function w0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ve()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ie === e &&
      (Le & n) === n &&
      (Oe === 4 || (Oe === 3 && (Le & 130023424) === Le && 500 > Pe() - Zu)
        ? kn(e, 0)
        : (Xu |= n)),
    Je(e, t);
}
function vp(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Po), (Po <<= 1), !(Po & 130023424) && (Po = 4194304))
      : (t = 1));
  var n = Ve();
  (e = Bt(e, t)), e !== null && (po(e, t, n), Je(e, n));
}
function S0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), vp(e, n);
}
function x0(e, t) {
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
  r !== null && r.delete(t), vp(e, n);
}
var wp;
wp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Xe.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ge = !1), u0(e, t, n);
      Ge = !!(e.flags & 131072);
    }
  else (Ge = !1), pe && t.flags & 1048576 && kd(t, vi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      qo(e, t), (e = t.pendingProps);
      var o = sr(t, be.current);
      rr(t, n), (o = Vu(null, t, r, e, o, n));
      var i = Hu();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), gi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Fu(t),
            (o.updater = Ui),
            (t.stateNode = o),
            (o._reactInternals = t),
            Us(t, r, e, n),
            (t = Vs(null, t, r, !0, i, n)))
          : ((t.tag = 0), pe && i && Iu(t), We(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (qo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = C0(r)),
          (e = vt(r, e)),
          o)
        ) {
          case 0:
            t = Ws(null, t, r, e, n);
            break e;
          case 1:
            t = Cc(null, t, r, e, n);
            break e;
          case 11:
            t = xc(null, t, r, e, n);
            break e;
          case 14:
            t = kc(null, t, r, vt(r.type, e), n);
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
        Ws(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        Cc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((np(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          _d(e, t),
          xi(t, r, null, n);
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
            (o = fr(Error(k(423)), t)), (t = Ec(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = fr(Error(k(424)), t)), (t = Ec(e, t, r, n, o));
            break e;
          } else
            for (
              nt = tn(t.stateNode.containerInfo.firstChild),
                rt = t,
                pe = !0,
                St = null,
                n = Od(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ur(), r === o)) {
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
        zd(t),
        e === null && js(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        Ns(r, o) ? (l = null) : i !== null && Ns(r, i) && (t.flags |= 32),
        tp(e, t),
        We(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && js(t), null;
    case 13:
      return rp(e, t, n);
    case 4:
      return (
        Bu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = ar(t, null, r, n)) : We(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        xc(e, t, r, o, n)
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
          ue(wi, r._currentValue),
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
                      Fs(i.return, n, t),
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
                  Fs(l, n, t),
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
        rr(t, n),
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
        kc(e, t, r, o, n)
      );
    case 15:
      return qd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : vt(r, o)),
        qo(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), gi(t)) : (e = !1),
        rr(t, n),
        Td(t, r, o),
        Us(t, r, o, n),
        Vs(null, t, r, !0, e, n)
      );
    case 19:
      return op(e, t, n);
    case 22:
      return ep(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Sp(e, t) {
  return Kf(e, t);
}
function k0(e, t, n, r) {
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
  return new k0(e, t, n, r);
}
function ta(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function C0(e) {
  if (typeof e == 'function') return ta(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Su)) return 11;
    if (e === xu) return 14;
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
function ni(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) ta(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case Un:
        return Cn(n.children, o, i, t);
      case wu:
        (l = 8), (o |= 8);
        break;
      case fs:
        return (
          (e = dt(12, n, t, o | 2)), (e.elementType = fs), (e.lanes = i), e
        );
      case ds:
        return (e = dt(13, n, t, o)), (e.elementType = ds), (e.lanes = i), e;
      case ps:
        return (e = dt(19, n, t, o)), (e.elementType = ps), (e.lanes = i), e;
      case Rf:
        return Hi(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case $f:
              l = 10;
              break e;
            case Tf:
              l = 9;
              break e;
            case Su:
              l = 11;
              break e;
            case xu:
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
function Hi(e, t, n, r) {
  return (
    (e = dt(22, e, r, t)),
    (e.elementType = Rf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function es(e, t, n) {
  return (e = dt(6, e, null, t)), (e.lanes = n), e;
}
function ts(e, t, n) {
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
function E0(e, t, n, r, o) {
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
    (this.eventTimes = Al(0)),
    (this.expirationTimes = Al(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Al(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function na(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new E0(e, t, n, s, u)),
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
    Fu(i),
    e
  );
}
function P0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Bn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function xp(e) {
  if (!e) return an;
  e = e._reactInternals;
  e: {
    if (zn(e) !== e || e.tag !== 1) throw Error(k(170));
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
    if (Ze(n)) return Sd(e, n, t);
  }
  return t;
}
function kp(e, t, n, r, o, i, l, s, u) {
  return (
    (e = na(n, r, !0, e, o, i, l, s, u)),
    (e.context = xp(null)),
    (n = e.current),
    (r = Ve()),
    (o = on(n)),
    (i = Lt(r, o)),
    (i.callback = t ?? null),
    nn(n, i, o),
    (e.current.lanes = o),
    po(e, o, r),
    Je(e, r),
    e
  );
}
function Ki(e, t, n, r) {
  var o = t.current,
    i = Ve(),
    l = on(o);
  return (
    (n = xp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Lt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = nn(o, t, l)),
    e !== null && (kt(e, o, l, i), Xo(e, o, l)),
    l
  );
}
function Ri(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ra(e, t) {
  Mc(e, t), (e = e.alternate) && Mc(e, t);
}
function _0() {
  return null;
}
var Cp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function oa(e) {
  this._internalRoot = e;
}
Qi.prototype.render = oa.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ki(e, t, null, null);
};
Qi.prototype.unmount = oa.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Tn(function () {
      Ki(null, e, null, null);
    }),
      (t[Ft] = null);
  }
};
function Qi(e) {
  this._internalRoot = e;
}
Qi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = qf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Yt.length && t !== 0 && t < Yt[n].priority; n++);
    Yt.splice(n, 0, e), n === 0 && td(e);
  }
};
function ia(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Yi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Ac() {}
function $0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Ri(l);
        i.call(a);
      };
    }
    var l = kp(t, r, e, 0, null, !1, !1, '', Ac);
    return (
      (e._reactRootContainer = l),
      (e[Ft] = l.current),
      eo(e.nodeType === 8 ? e.parentNode : e),
      Tn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = Ri(u);
      s.call(a);
    };
  }
  var u = na(e, 0, !1, null, null, !1, !1, '', Ac);
  return (
    (e._reactRootContainer = u),
    (e[Ft] = u.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    Tn(function () {
      Ki(t, u, n, r);
    }),
    u
  );
}
function Gi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var u = Ri(l);
        s.call(u);
      };
    }
    Ki(t, l, e, o);
  } else l = $0(n, t, e, o, r);
  return Ri(l);
}
Zf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ir(t.pendingLanes);
        n !== 0 &&
          (Eu(t, n | 1), Je(t, Pe()), !(J & 6) && ((dr = Pe() + 500), dn()));
      }
      break;
    case 13:
      Tn(function () {
        var r = Bt(e, 1);
        if (r !== null) {
          var o = Ve();
          kt(r, e, 1, o);
        }
      }),
        ra(e, 1);
  }
};
Pu = function (e) {
  if (e.tag === 13) {
    var t = Bt(e, 134217728);
    if (t !== null) {
      var n = Ve();
      kt(t, e, 134217728, n);
    }
    ra(e, 134217728);
  }
};
Jf = function (e) {
  if (e.tag === 13) {
    var t = on(e),
      n = Bt(e, t);
    if (n !== null) {
      var r = Ve();
      kt(n, e, t, r);
    }
    ra(e, t);
  }
};
qf = function () {
  return re;
};
ed = function (e, t) {
  var n = re;
  try {
    return (re = e), t();
  } finally {
    re = n;
  }
};
Cs = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((gs(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = Fi(r);
            if (!o) throw Error(k(90));
            zf(r), gs(r, o);
          }
        }
      }
      break;
    case 'textarea':
      Nf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && qn(e, !!n.multiple, t, !1);
  }
};
Bf = Ju;
Uf = Tn;
var T0 = { usingClientEntryPoint: !1, Events: [mo, Hn, Fi, jf, Ff, Ju] },
  $r = {
    findFiberByHostInstance: vn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  R0 = {
    bundleType: $r.bundleType,
    version: $r.version,
    rendererPackageName: $r.rendererPackageName,
    rendererConfig: $r.rendererConfig,
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
      return (e = Vf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $r.findFiberByHostInstance || _0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Lo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Lo.isDisabled && Lo.supportsFiber)
    try {
      (Ai = Lo.inject(R0)), (Rt = Lo);
    } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T0;
it.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ia(t)) throw Error(k(200));
  return P0(e, t, null, n);
};
it.createRoot = function (e, t) {
  if (!ia(e)) throw Error(k(299));
  var n = !1,
    r = '',
    o = Cp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = na(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ft] = t.current),
    eo(e.nodeType === 8 ? e.parentNode : e),
    new oa(t)
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
  return (e = Vf(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
  return Tn(e);
};
it.hydrate = function (e, t, n) {
  if (!Yi(t)) throw Error(k(200));
  return Gi(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
  if (!ia(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = Cp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = kp(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ft] = t.current),
    eo(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Qi(t);
};
it.render = function (e, t, n) {
  if (!Yi(t)) throw Error(k(200));
  return Gi(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
  if (!Yi(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (Tn(function () {
        Gi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ft] = null);
        });
      }),
      !0)
    : !1;
};
it.unstable_batchedUpdates = Ju;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Yi(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Gi(e, t, n, !1, r);
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
})(_h);
var Lc = us;
(ss.createRoot = Lc.createRoot), (ss.hydrateRoot = Lc.hydrateRoot);
const O0 = { black: '#000', white: '#fff' },
  ao = O0,
  z0 = {
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
  An = z0,
  I0 = {
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
  Ln = I0,
  N0 = {
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
  Dn = N0,
  M0 = {
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
  jn = M0,
  A0 = {
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
  Fn = A0,
  L0 = {
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
  Tr = L0,
  D0 = {
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
  j0 = D0;
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
function Ep(e) {
  if (!yn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = Ep(e[n]);
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
            ? (r[o] = yn(t[o]) ? Ep(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function pr(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
var Oi = {},
  F0 = {
    get exports() {
      return Oi;
    },
    set exports(e) {
      Oi = e;
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
 */ var la = Symbol.for('react.element'),
  sa = Symbol.for('react.portal'),
  Xi = Symbol.for('react.fragment'),
  Zi = Symbol.for('react.strict_mode'),
  Ji = Symbol.for('react.profiler'),
  qi = Symbol.for('react.provider'),
  el = Symbol.for('react.context'),
  B0 = Symbol.for('react.server_context'),
  tl = Symbol.for('react.forward_ref'),
  nl = Symbol.for('react.suspense'),
  rl = Symbol.for('react.suspense_list'),
  ol = Symbol.for('react.memo'),
  il = Symbol.for('react.lazy'),
  U0 = Symbol.for('react.offscreen'),
  Pp;
Pp = Symbol.for('react.module.reference');
function gt(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case la:
        switch (((e = e.type), e)) {
          case Xi:
          case Ji:
          case Zi:
          case nl:
          case rl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case B0:
              case el:
              case tl:
              case il:
              case ol:
              case qi:
                return e;
              default:
                return t;
            }
        }
      case sa:
        return t;
    }
  }
}
oe.ContextConsumer = el;
oe.ContextProvider = qi;
oe.Element = la;
oe.ForwardRef = tl;
oe.Fragment = Xi;
oe.Lazy = il;
oe.Memo = ol;
oe.Portal = sa;
oe.Profiler = Ji;
oe.StrictMode = Zi;
oe.Suspense = nl;
oe.SuspenseList = rl;
oe.isAsyncMode = function () {
  return !1;
};
oe.isConcurrentMode = function () {
  return !1;
};
oe.isContextConsumer = function (e) {
  return gt(e) === el;
};
oe.isContextProvider = function (e) {
  return gt(e) === qi;
};
oe.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === la;
};
oe.isForwardRef = function (e) {
  return gt(e) === tl;
};
oe.isFragment = function (e) {
  return gt(e) === Xi;
};
oe.isLazy = function (e) {
  return gt(e) === il;
};
oe.isMemo = function (e) {
  return gt(e) === ol;
};
oe.isPortal = function (e) {
  return gt(e) === sa;
};
oe.isProfiler = function (e) {
  return gt(e) === Ji;
};
oe.isStrictMode = function (e) {
  return gt(e) === Zi;
};
oe.isSuspense = function (e) {
  return gt(e) === nl;
};
oe.isSuspenseList = function (e) {
  return gt(e) === rl;
};
oe.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Xi ||
    e === Ji ||
    e === Zi ||
    e === nl ||
    e === rl ||
    e === U0 ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === il ||
        e.$$typeof === ol ||
        e.$$typeof === qi ||
        e.$$typeof === el ||
        e.$$typeof === tl ||
        e.$$typeof === Pp ||
        e.getModuleId !== void 0))
  );
};
oe.typeOf = gt;
(function (e) {
  e.exports = oe;
})(F0);
function Ae(e) {
  if (typeof e != 'string') throw new Error(pr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function b0(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const W0 = typeof window < 'u' ? N.useLayoutEffect : N.useEffect,
  V0 = W0;
function Do(e) {
  const t = N.useRef(e);
  return (
    V0(() => {
      t.current = e;
    }),
    N.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function Dc(...e) {
  return N.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              b0(n, t);
            });
          },
    e
  );
}
let ll = !0,
  nu = !1,
  jc;
const H0 = {
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
function K0(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && H0[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function Q0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ll = !0);
}
function ns() {
  ll = !1;
}
function Y0() {
  this.visibilityState === 'hidden' && nu && (ll = !0);
}
function G0(e) {
  e.addEventListener('keydown', Q0, !0),
    e.addEventListener('mousedown', ns, !0),
    e.addEventListener('pointerdown', ns, !0),
    e.addEventListener('touchstart', ns, !0),
    e.addEventListener('visibilitychange', Y0, !0);
}
function X0(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return ll || K0(t);
}
function Z0() {
  const e = N.useCallback((o) => {
      o != null && G0(o.ownerDocument);
    }, []),
    t = N.useRef(!1);
  function n() {
    return t.current
      ? ((nu = !0),
        window.clearTimeout(jc),
        (jc = window.setTimeout(() => {
          nu = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return X0(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function ua(e, t) {
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
                n[r][l] = ua(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function aa(e, t, n) {
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
const Fc = (e) => e,
  J0 = () => {
    let e = Fc;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Fc;
      },
    };
  },
  q0 = J0(),
  _p = q0,
  eg = {
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
function sl(e, t, n = 'Mui') {
  const r = eg[t];
  return r ? `${n}-${r}` : `${_p.generate(e)}-${t}`;
}
function ul(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = sl(e, o, n);
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
function tg(e) {
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
        wr = '',
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
            (wr += H),
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
        return Nn + le + wr;
      if (((le = $e.join(',') + '{' + le + '}'), se * ne !== 0)) {
        switch ((se !== 2 || i(le, 2) || (ne = 0), ne)) {
          case 111:
            le = le.replace(v, ':-moz-$1') + le;
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
    return Nn + le + wr;
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
        return y.test(w)
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
    y = /zoo|gra/,
    g = /([,: ])(transform)/g,
    E = /,\r+?/g,
    d = /([\t\r\n ])*\f?&/g,
    c = /@(k\w+)\s*(\S*)\s*/,
    h = /::(place)/g,
    v = /:(read-only)/g,
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
var ng = {
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
function rg(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var og =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Bc = rg(function (e) {
    return (
      og.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  }),
  ru = {},
  ig = {
    get exports() {
      return ru;
    },
    set exports(e) {
      ru = e;
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
 */ var Ne = typeof Symbol == 'function' && Symbol.for,
  ca = Ne ? Symbol.for('react.element') : 60103,
  fa = Ne ? Symbol.for('react.portal') : 60106,
  al = Ne ? Symbol.for('react.fragment') : 60107,
  cl = Ne ? Symbol.for('react.strict_mode') : 60108,
  fl = Ne ? Symbol.for('react.profiler') : 60114,
  dl = Ne ? Symbol.for('react.provider') : 60109,
  pl = Ne ? Symbol.for('react.context') : 60110,
  da = Ne ? Symbol.for('react.async_mode') : 60111,
  hl = Ne ? Symbol.for('react.concurrent_mode') : 60111,
  ml = Ne ? Symbol.for('react.forward_ref') : 60112,
  gl = Ne ? Symbol.for('react.suspense') : 60113,
  lg = Ne ? Symbol.for('react.suspense_list') : 60120,
  yl = Ne ? Symbol.for('react.memo') : 60115,
  vl = Ne ? Symbol.for('react.lazy') : 60116,
  sg = Ne ? Symbol.for('react.block') : 60121,
  ug = Ne ? Symbol.for('react.fundamental') : 60117,
  ag = Ne ? Symbol.for('react.responder') : 60118,
  cg = Ne ? Symbol.for('react.scope') : 60119;
function st(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case ca:
        switch (((e = e.type), e)) {
          case da:
          case hl:
          case al:
          case fl:
          case cl:
          case gl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case pl:
              case ml:
              case vl:
              case yl:
              case dl:
                return e;
              default:
                return t;
            }
        }
      case fa:
        return t;
    }
  }
}
function $p(e) {
  return st(e) === hl;
}
ie.AsyncMode = da;
ie.ConcurrentMode = hl;
ie.ContextConsumer = pl;
ie.ContextProvider = dl;
ie.Element = ca;
ie.ForwardRef = ml;
ie.Fragment = al;
ie.Lazy = vl;
ie.Memo = yl;
ie.Portal = fa;
ie.Profiler = fl;
ie.StrictMode = cl;
ie.Suspense = gl;
ie.isAsyncMode = function (e) {
  return $p(e) || st(e) === da;
};
ie.isConcurrentMode = $p;
ie.isContextConsumer = function (e) {
  return st(e) === pl;
};
ie.isContextProvider = function (e) {
  return st(e) === dl;
};
ie.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === ca;
};
ie.isForwardRef = function (e) {
  return st(e) === ml;
};
ie.isFragment = function (e) {
  return st(e) === al;
};
ie.isLazy = function (e) {
  return st(e) === vl;
};
ie.isMemo = function (e) {
  return st(e) === yl;
};
ie.isPortal = function (e) {
  return st(e) === fa;
};
ie.isProfiler = function (e) {
  return st(e) === fl;
};
ie.isStrictMode = function (e) {
  return st(e) === cl;
};
ie.isSuspense = function (e) {
  return st(e) === gl;
};
ie.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === al ||
    e === hl ||
    e === fl ||
    e === cl ||
    e === gl ||
    e === lg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === vl ||
        e.$$typeof === yl ||
        e.$$typeof === dl ||
        e.$$typeof === pl ||
        e.$$typeof === ml ||
        e.$$typeof === ug ||
        e.$$typeof === ag ||
        e.$$typeof === cg ||
        e.$$typeof === sg))
  );
};
ie.typeOf = st;
(function (e) {
  e.exports = ie;
})(ig);
var pa = ru,
  fg = {
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
  dg = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0,
  },
  pg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Tp = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  ha = {};
ha[pa.ForwardRef] = pg;
ha[pa.Memo] = Tp;
function Uc(e) {
  return pa.isMemo(e) ? Tp : ha[e.$$typeof] || fg;
}
var hg = Object.defineProperty,
  mg = Object.getOwnPropertyNames,
  bc = Object.getOwnPropertySymbols,
  gg = Object.getOwnPropertyDescriptor,
  yg = Object.getPrototypeOf,
  Wc = Object.prototype;
function Rp(e, t, n) {
  if (typeof t != 'string') {
    if (Wc) {
      var r = yg(t);
      r && r !== Wc && Rp(e, r, n);
    }
    var o = mg(t);
    bc && (o = o.concat(bc(t)));
    for (var i = Uc(e), l = Uc(t), s = 0; s < o.length; ++s) {
      var u = o[s];
      if (!dg[u] && !(n && n[u]) && !(l && l[u]) && !(i && i[u])) {
        var a = gg(t, u);
        try {
          hg(e, u, a);
        } catch {}
      }
    }
  }
  return e;
}
var vg = Rp;
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
var Vc = function (e, t) {
    for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
      n.push(t[r], e[r + 1]);
    return n;
  },
  ou = function (e) {
    return (
      e !== null &&
      typeof e == 'object' &&
      (e.toString ? e.toString() : Object.prototype.toString.call(e)) ===
        '[object Object]' &&
      !Oi.typeOf(e)
    );
  },
  zi = Object.freeze([]),
  sn = Object.freeze({});
function co(e) {
  return typeof e == 'function';
}
function Hc(e) {
  return e.displayName || e.name || 'Component';
}
function ma(e) {
  return e && typeof e.styledComponentId == 'string';
}
var hr =
    (typeof process < 'u' &&
      process.env !== void 0 &&
      ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
    'data-styled',
  ga = typeof window < 'u' && 'HTMLElement' in window,
  wg = Boolean(
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
function yo(e) {
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
var Sg = (function () {
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
            (l <<= 1) < 0 && yo(16, '' + n);
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
  ri = new Map(),
  Ii = new Map(),
  Wr = 1,
  jo = function (e) {
    if (ri.has(e)) return ri.get(e);
    for (; Ii.has(Wr); ) Wr++;
    var t = Wr++;
    return ri.set(e, t), Ii.set(t, e), t;
  },
  xg = function (e) {
    return Ii.get(e);
  },
  kg = function (e, t) {
    t >= Wr && (Wr = t + 1), ri.set(e, t), Ii.set(t, e);
  },
  Cg = 'style[' + hr + '][data-styled-version="5.3.8"]',
  Eg = new RegExp('^' + hr + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
  Pg = function (e, t, n) {
    for (var r, o = n.split(','), i = 0, l = o.length; i < l; i++)
      (r = o[i]) && e.registerName(t, r);
  },
  _g = function (e, t) {
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
        var s = l.match(Eg);
        if (s) {
          var u = 0 | parseInt(s[1], 10),
            a = s[2];
          u !== 0 && (kg(a, u), Pg(e, a, s[3]), e.getTag().insertRules(u, r)),
            (r.length = 0);
        } else r.push(l);
      }
    }
  },
  $g = function () {
    return typeof __webpack_nonce__ < 'u' ? __webpack_nonce__ : null;
  },
  Op = function (e) {
    var t = document.head,
      n = e || t,
      r = document.createElement('style'),
      o = (function (s) {
        for (var u = s.childNodes, a = u.length; a >= 0; a--) {
          var m = u[a];
          if (m && m.nodeType === 1 && m.hasAttribute(hr)) return m;
        }
      })(n),
      i = o !== void 0 ? o.nextSibling : null;
    r.setAttribute(hr, 'active'),
      r.setAttribute('data-styled-version', '5.3.8');
    var l = $g();
    return l && r.setAttribute('nonce', l), n.insertBefore(r, i), r;
  },
  Tg = (function () {
    function e(n) {
      var r = (this.element = Op(n));
      r.appendChild(document.createTextNode('')),
        (this.sheet = (function (o) {
          if (o.sheet) return o.sheet;
          for (var i = document.styleSheets, l = 0, s = i.length; l < s; l++) {
            var u = i[l];
            if (u.ownerNode === o) return u;
          }
          yo(17);
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
  Rg = (function () {
    function e(n) {
      var r = (this.element = Op(n));
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
  Og = (function () {
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
  Kc = ga,
  zg = { isServer: !ga, useCSSOMInjection: !wg },
  zp = (function () {
    function e(n, r, o) {
      n === void 0 && (n = sn),
        r === void 0 && (r = {}),
        (this.options = At({}, zg, {}, n)),
        (this.gs = r),
        (this.names = new Map(o)),
        (this.server = !!n.isServer),
        !this.server &&
          ga &&
          Kc &&
          ((Kc = !1),
          (function (i) {
            for (
              var l = document.querySelectorAll(Cg), s = 0, u = l.length;
              s < u;
              s++
            ) {
              var a = l[s];
              a &&
                a.getAttribute(hr) !== 'active' &&
                (_g(i, a), a.parentNode && a.parentNode.removeChild(a));
            }
          })(this));
    }
    e.registerId = function (n) {
      return jo(n);
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
            (n = o ? new Og(l) : i ? new Tg(l) : new Rg(l)),
            new Sg(n)))
        );
        var n, r, o, i, l;
      }),
      (t.hasNameForId = function (n, r) {
        return this.names.has(n) && this.names.get(n).has(r);
      }),
      (t.registerName = function (n, r) {
        if ((jo(n), this.names.has(n))) this.names.get(n).add(r);
        else {
          var o = new Set();
          o.add(r), this.names.set(n, o);
        }
      }),
      (t.insertRules = function (n, r, o) {
        this.registerName(n, r), this.getTag().insertRules(jo(n), o);
      }),
      (t.clearNames = function (n) {
        this.names.has(n) && this.names.get(n).clear();
      }),
      (t.clearRules = function (n) {
        this.getTag().clearGroup(jo(n)), this.clearNames(n);
      }),
      (t.clearTag = function () {
        this.tag = void 0;
      }),
      (t.toString = function () {
        return (function (n) {
          for (var r = n.getTag(), o = r.length, i = '', l = 0; l < o; l++) {
            var s = xg(l);
            if (s !== void 0) {
              var u = n.names.get(s),
                a = r.getGroup(l);
              if (u && a && u.size) {
                var m = hr + '.g' + l + '[id="' + s + '"]',
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
  Ig = /(a)(d)/gi,
  Qc = function (e) {
    return String.fromCharCode(e + (e > 25 ? 39 : 97));
  };
function iu(e) {
  var t,
    n = '';
  for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = Qc(t % 52) + n;
  return (Qc(t % 52) + n).replace(Ig, '$1-$2');
}
var Jn = function (e, t) {
    for (var n = t.length; n; ) e = (33 * e) ^ t.charCodeAt(--n);
    return e;
  },
  Ip = function (e) {
    return Jn(5381, e);
  };
function Ng(e) {
  for (var t = 0; t < e.length; t += 1) {
    var n = e[t];
    if (co(n) && !ma(n)) return !1;
  }
  return !0;
}
var Mg = Ip('5.3.8'),
  Ag = (function () {
    function e(t, n, r) {
      (this.rules = t),
        (this.staticRulesId = ''),
        (this.isStatic = (r === void 0 || r.isStatic) && Ng(t)),
        (this.componentId = n),
        (this.baseHash = Jn(Mg, n)),
        (this.baseStyle = r),
        zp.registerId(n);
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
            var l = mr(this.rules, t, n, r).join(''),
              s = iu(Jn(this.baseHash, l) >>> 0);
            if (!n.hasNameForId(o, s)) {
              var u = r(l, '.' + s, void 0, o);
              n.insertRules(o, s, u);
            }
            i.push(s), (this.staticRulesId = s);
          }
        else {
          for (
            var a = this.rules.length,
              m = Jn(this.baseHash, r.hash),
              p = '',
              f = 0;
            f < a;
            f++
          ) {
            var S = this.rules[f];
            if (typeof S == 'string') p += S;
            else if (S) {
              var y = mr(S, t, n, r),
                g = Array.isArray(y) ? y.join('') : y;
              (m = Jn(m, g + f)), (p += g);
            }
          }
          if (p) {
            var E = iu(m >>> 0);
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
  Lg = /^\s*\/\/.*$/gm,
  Dg = [':', '[', '.', '#'];
function jg(e) {
  var t,
    n,
    r,
    o,
    i = e === void 0 ? sn : e,
    l = i.options,
    s = l === void 0 ? sn : l,
    u = i.plugins,
    a = u === void 0 ? zi : u,
    m = new tg(s),
    p = [],
    f = (function (g) {
      function E(d) {
        if (d)
          try {
            g(d + '}');
          } catch {}
      }
      return function (d, c, h, v, x, P, R, O, A, I) {
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
      return (E === 0 && Dg.indexOf(d[n.length]) !== -1) || d.match(o)
        ? g
        : '.' + t;
    };
  function y(g, E, d, c) {
    c === void 0 && (c = '&');
    var h = g.replace(Lg, ''),
      v = E && d ? d + ' ' + E + ' { ' + h + ' }' : h;
    return (
      (t = c),
      (n = E),
      (r = new RegExp('\\' + n + '\\b', 'g')),
      (o = new RegExp('(\\' + n + '\\b){2,}')),
      m(d || !E ? '' : E, v)
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
    (y.hash = a.length
      ? a
          .reduce(function (g, E) {
            return E.name || yo(15), Jn(g, E.name);
          }, 5381)
          .toString()
      : ''),
    y
  );
}
var Np = ft.createContext();
Np.Consumer;
var Mp = ft.createContext(),
  Fg = (Mp.Consumer, new zp()),
  lu = jg();
function Bg() {
  return N.useContext(Np) || Fg;
}
function Ug() {
  return N.useContext(Mp) || lu;
}
var Ap = (function () {
    function e(t, n) {
      var r = this;
      (this.inject = function (o, i) {
        i === void 0 && (i = lu);
        var l = r.name + i.hash;
        o.hasNameForId(r.id, l) ||
          o.insertRules(r.id, l, i(r.rules, l, '@keyframes'));
      }),
        (this.toString = function () {
          return yo(12, String(r.name));
        }),
        (this.name = t),
        (this.id = 'sc-keyframes-' + t),
        (this.rules = n);
    }
    return (
      (e.prototype.getName = function (t) {
        return t === void 0 && (t = lu), this.name + t.hash;
      }),
      e
    );
  })(),
  bg = /([A-Z])/,
  Wg = /([A-Z])/g,
  Vg = /^ms-/,
  Hg = function (e) {
    return '-' + e.toLowerCase();
  };
function Yc(e) {
  return bg.test(e) ? e.replace(Wg, Hg).replace(Vg, '-ms-') : e;
}
var Gc = function (e) {
  return e == null || e === !1 || e === '';
};
function mr(e, t, n, r) {
  if (Array.isArray(e)) {
    for (var o, i = [], l = 0, s = e.length; l < s; l += 1)
      (o = mr(e[l], t, n, r)) !== '' &&
        (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
    return i;
  }
  if (Gc(e)) return '';
  if (ma(e)) return '.' + e.styledComponentId;
  if (co(e)) {
    if (
      typeof (a = e) != 'function' ||
      (a.prototype && a.prototype.isReactComponent) ||
      !t
    )
      return e;
    var u = e(t);
    return mr(u, t, n, r);
  }
  var a;
  return e instanceof Ap
    ? n
      ? (e.inject(n, r), e.getName(r))
      : e
    : ou(e)
    ? (function m(p, f) {
        var S,
          y,
          g = [];
        for (var E in p)
          p.hasOwnProperty(E) &&
            !Gc(p[E]) &&
            ((Array.isArray(p[E]) && p[E].isCss) || co(p[E])
              ? g.push(Yc(E) + ':', p[E], ';')
              : ou(p[E])
              ? g.push.apply(g, m(p[E], E))
              : g.push(
                  Yc(E) +
                    ': ' +
                    ((S = E),
                    (y = p[E]) == null || typeof y == 'boolean' || y === ''
                      ? ''
                      : typeof y != 'number' || y === 0 || S in ng
                      ? String(y).trim()
                      : y + 'px') +
                    ';'
                ));
        return f ? [f + ' {'].concat(g, ['}']) : g;
      })(e)
    : e.toString();
}
var Xc = function (e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Lp(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  return co(e) || ou(e)
    ? Xc(mr(Vc(zi, [e].concat(n))))
    : n.length === 0 && e.length === 1 && typeof e[0] == 'string'
    ? e
    : Xc(mr(Vc(e, n)));
}
var Kg = function (e, t, n) {
    return (
      n === void 0 && (n = sn), (e.theme !== n.theme && e.theme) || t || n.theme
    );
  },
  Qg = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
  Yg = /(^-|-$)/g;
function rs(e) {
  return e.replace(Qg, '-').replace(Yg, '');
}
var Dp = function (e) {
  return iu(Ip(e) >>> 0);
};
function Fo(e) {
  return typeof e == 'string' && !0;
}
var su = function (e) {
    return (
      typeof e == 'function' ||
      (typeof e == 'object' && e !== null && !Array.isArray(e))
    );
  },
  Gg = function (e) {
    return e !== '__proto__' && e !== 'constructor' && e !== 'prototype';
  };
function Xg(e, t, n) {
  var r = e[n];
  su(t) && su(r) ? jp(r, t) : (e[n] = t);
}
function jp(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  for (var o = 0, i = n; o < i.length; o++) {
    var l = i[o];
    if (su(l)) for (var s in l) Gg(s) && Xg(e, l[s], s);
  }
  return e;
}
var Fp = ft.createContext();
Fp.Consumer;
var os = {};
function Bp(e, t, n) {
  var r = ma(e),
    o = !Fo(e),
    i = t.attrs,
    l = i === void 0 ? zi : i,
    s = t.componentId,
    u =
      s === void 0
        ? (function (c, h) {
            var v = typeof c != 'string' ? 'sc' : rs(c);
            os[v] = (os[v] || 0) + 1;
            var x = v + '-' + Dp('5.3.8' + v + os[v]);
            return h ? h + '-' + x : x;
          })(t.displayName, t.parentComponentId)
        : s,
    a = t.displayName,
    m =
      a === void 0
        ? (function (c) {
            return Fo(c) ? 'styled.' + c : 'Styled(' + Hc(c) + ')';
          })(e)
        : a,
    p =
      t.displayName && t.componentId
        ? rs(t.displayName) + '-' + t.componentId
        : t.componentId || u,
    f = r && e.attrs ? Array.prototype.concat(e.attrs, l).filter(Boolean) : l,
    S = t.shouldForwardProp;
  r &&
    e.shouldForwardProp &&
    (S = t.shouldForwardProp
      ? function (c, h, v) {
          return e.shouldForwardProp(c, h, v) && t.shouldForwardProp(c, h, v);
        }
      : e.shouldForwardProp);
  var y,
    g = new Ag(n, p, r ? e.componentStyle : void 0),
    E = g.isStatic && l.length === 0,
    d = function (c, h) {
      return (function (v, x, P, R) {
        var O = v.attrs,
          A = v.componentStyle,
          I = v.defaultProps,
          V = v.foldedComponentIds,
          K = v.shouldForwardProp,
          ee = v.styledComponentId,
          ne = v.target,
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
                for (Z in (co(he) && (he = he(T)), he))
                  T[Z] = G[Z] =
                    Z === 'className'
                      ? ((U = G[Z]),
                        (ve = he[Z]),
                        U && ve ? U + ' ' + ve : U || ve)
                      : he[Z];
              }),
              [T, G]
            );
          })(Kg(x, N.useContext(Fp), I) || sn, x, O),
          Ce = se[0],
          ae = se[1],
          C = (function (L, w, b, T) {
            var G = Bg(),
              X = Ug(),
              Z = w
                ? L.generateAndInjectStyles(sn, G, X)
                : L.generateAndInjectStyles(b, G, X);
            return Z;
          })(A, R, Ce),
          D = P,
          j = ae.$as || x.$as || ae.as || x.as || ne,
          q = Fo(j),
          $ = ae !== x ? At({}, x, {}, ae) : x,
          z = {};
        for (var _ in $)
          _[0] !== '$' &&
            _ !== 'as' &&
            (_ === 'forwardedAs'
              ? (z.as = $[_])
              : (K ? K(_, Bc, j) : !q || Bc(_)) && (z[_] = $[_]));
        return (
          x.style &&
            ae.style !== x.style &&
            (z.style = At({}, x.style, {}, ae.style)),
          (z.className = Array.prototype
            .concat(V, ee, C !== ee ? C : null, x.className, ae.className)
            .filter(Boolean)
            .join(' ')),
          (z.ref = D),
          N.createElement(j, z)
        );
      })(y, c, h, E);
    };
  return (
    (d.displayName = m),
    ((y = ft.forwardRef(d)).attrs = f),
    (y.componentStyle = g),
    (y.displayName = m),
    (y.shouldForwardProp = S),
    (y.foldedComponentIds = r
      ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
      : zi),
    (y.styledComponentId = p),
    (y.target = r ? e.target : e),
    (y.withComponent = function (c) {
      var h = t.componentId,
        v = (function (P, R) {
          if (P == null) return {};
          var O,
            A,
            I = {},
            V = Object.keys(P);
          for (A = 0; A < V.length; A++)
            (O = V[A]), R.indexOf(O) >= 0 || (I[O] = P[O]);
          return I;
        })(t, ['componentId']),
        x = h && h + '-' + (Fo(c) ? c : rs(Hc(c)));
      return Bp(c, At({}, v, { attrs: f, componentId: x }), n);
    }),
    Object.defineProperty(y, 'defaultProps', {
      get: function () {
        return this._foldedDefaultProps;
      },
      set: function (c) {
        this._foldedDefaultProps = r ? jp({}, e.defaultProps, c) : c;
      },
    }),
    (y.toString = function () {
      return '.' + y.styledComponentId;
    }),
    o &&
      vg(y, e, {
        attrs: !0,
        componentStyle: !0,
        displayName: !0,
        foldedComponentIds: !0,
        shouldForwardProp: !0,
        styledComponentId: !0,
        target: !0,
        withComponent: !0,
      }),
    y
  );
}
var uu = function (e) {
  return (function t(n, r, o) {
    if ((o === void 0 && (o = sn), !Oi.isValidElementType(r)))
      return yo(1, String(r));
    var i = function () {
      return n(r, o, Lp.apply(void 0, arguments));
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
  })(Bp, e);
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
  uu[e] = uu(e);
});
function ya(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var o = Lp.apply(void 0, [e].concat(n)).join(''),
    i = Dp(o);
  return new Ap(i, o);
}
const Zc = uu;
/**
 * @mui/styled-engine-sc v5.11.11
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Up(e, t) {
  let n;
  return (
    t
      ? (n = Zc(e).withConfig({
          displayName: t.label,
          shouldForwardProp: t.shouldForwardProp,
        }))
      : (n = Zc(e)),
    n
  );
}
const Zg = (e, t) => {
  e.componentStyle && (e.componentStyle.rules = t(e.componentStyle.rules));
};
function Vr(e, t) {
  return t ? Dt(e, t, { clone: !1 }) : e;
}
const va = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Jc = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${va[e]}px)`,
  };
function bt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Jc;
    return t.reduce((l, s, u) => ((l[i.up(i.keys[u])] = n(t[u])), l), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || Jc;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || va).indexOf(s) !== -1) {
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
function Jg(e = {}) {
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
function qg(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function wl(e, t, n = !0) {
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
      : (o = wl(e, n) || r),
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
        a = wl(u, r) || {};
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
function Sl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Vr(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function ey(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const ty = { m: 'margin', p: 'padding' },
  ny = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
  },
  qc = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  ry = ey((e) => {
    if (e.length > 2)
      if (qc[e]) e = qc[e];
      else return [e];
    const [t, n] = e.split(''),
      r = ty[t],
      o = ny[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  wa = [
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
  Sa = [
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
[...wa, ...Sa];
function vo(e, t, n, r) {
  var o;
  const i = (o = wl(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (l) => (typeof l == 'string' ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == 'string' ? l : i[l])
    : typeof i == 'function'
    ? i
    : () => {};
}
function bp(e) {
  return vo(e, 'spacing', 8);
}
function wo(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function oy(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = wo(t, n)), r), {});
}
function iy(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = ry(n),
    i = oy(o, r),
    l = e[n];
  return bt(e, l, i);
}
function Wp(e, t) {
  const n = bp(e.theme);
  return Object.keys(e)
    .map((r) => iy(e, t, r, n))
    .reduce(Vr, {});
}
function Se(e) {
  return Wp(e, wa);
}
Se.propTypes = {};
Se.filterProps = wa;
function xe(e) {
  return Wp(e, Sa);
}
xe.propTypes = {};
xe.filterProps = Sa;
function Tt(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
const ly = te({ prop: 'border', themeKey: 'borders', transform: Tt }),
  sy = te({ prop: 'borderTop', themeKey: 'borders', transform: Tt }),
  uy = te({ prop: 'borderRight', themeKey: 'borders', transform: Tt }),
  ay = te({ prop: 'borderBottom', themeKey: 'borders', transform: Tt }),
  cy = te({ prop: 'borderLeft', themeKey: 'borders', transform: Tt }),
  fy = te({ prop: 'borderColor', themeKey: 'palette' }),
  dy = te({ prop: 'borderTopColor', themeKey: 'palette' }),
  py = te({ prop: 'borderRightColor', themeKey: 'palette' }),
  hy = te({ prop: 'borderBottomColor', themeKey: 'palette' }),
  my = te({ prop: 'borderLeftColor', themeKey: 'palette' }),
  xl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = vo(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: wo(t, r) });
      return bt(e, e.borderRadius, n);
    }
    return null;
  };
xl.propTypes = {};
xl.filterProps = ['borderRadius'];
Sl(ly, sy, uy, ay, cy, fy, dy, py, hy, my, xl);
const kl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = vo(e.theme, 'spacing', 8),
      n = (r) => ({ gap: wo(t, r) });
    return bt(e, e.gap, n);
  }
  return null;
};
kl.propTypes = {};
kl.filterProps = ['gap'];
const Cl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = vo(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: wo(t, r) });
    return bt(e, e.columnGap, n);
  }
  return null;
};
Cl.propTypes = {};
Cl.filterProps = ['columnGap'];
const El = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = vo(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: wo(t, r) });
    return bt(e, e.rowGap, n);
  }
  return null;
};
El.propTypes = {};
El.filterProps = ['rowGap'];
const gy = te({ prop: 'gridColumn' }),
  yy = te({ prop: 'gridRow' }),
  vy = te({ prop: 'gridAutoFlow' }),
  wy = te({ prop: 'gridAutoColumns' }),
  Sy = te({ prop: 'gridAutoRows' }),
  xy = te({ prop: 'gridTemplateColumns' }),
  ky = te({ prop: 'gridTemplateRows' }),
  Cy = te({ prop: 'gridTemplateAreas' }),
  Ey = te({ prop: 'gridArea' });
Sl(kl, Cl, El, gy, yy, vy, wy, Sy, xy, ky, Cy, Ey);
function ir(e, t) {
  return t === 'grey' ? t : e;
}
const Py = te({ prop: 'color', themeKey: 'palette', transform: ir }),
  _y = te({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: ir,
  }),
  $y = te({ prop: 'backgroundColor', themeKey: 'palette', transform: ir });
Sl(Py, _y, $y);
function tt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ty = te({ prop: 'width', transform: tt }),
  xa = (e) => {
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
            va[n] ||
            tt(n),
        };
      };
      return bt(e, e.maxWidth, t);
    }
    return null;
  };
xa.filterProps = ['maxWidth'];
const Ry = te({ prop: 'minWidth', transform: tt }),
  Oy = te({ prop: 'height', transform: tt }),
  zy = te({ prop: 'maxHeight', transform: tt }),
  Iy = te({ prop: 'minHeight', transform: tt });
te({ prop: 'size', cssProperty: 'width', transform: tt });
te({ prop: 'size', cssProperty: 'height', transform: tt });
const Ny = te({ prop: 'boxSizing' });
Sl(Ty, xa, Ry, Oy, zy, Iy, Ny);
const My = {
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
    borderRadius: { themeKey: 'shape.borderRadius', style: xl },
    color: { themeKey: 'palette', transform: ir },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: ir,
    },
    backgroundColor: { themeKey: 'palette', transform: ir },
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
    gap: { style: kl },
    rowGap: { style: El },
    columnGap: { style: Cl },
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
    maxWidth: { style: xa },
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
  Pl = My;
function Ay(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Ly(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Dy() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: u = n, themeKey: a, transform: m, style: p } = s;
    if (r == null) return null;
    const f = wl(o, a) || {};
    return p
      ? p(l)
      : bt(l, r, (y) => {
          let g = Ni(f, m, y);
          return (
            y === g &&
              typeof y == 'string' &&
              (g = Ni(f, m, `${n}${y === 'default' ? '' : Ae(y)}`, y)),
            u === !1 ? g : { [u]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : Pl;
    function s(u) {
      let a = u;
      if (typeof u == 'function') a = u(i);
      else if (typeof u != 'object') return u;
      if (!a) return null;
      const m = Jg(i.breakpoints),
        p = Object.keys(m);
      let f = m;
      return (
        Object.keys(a).forEach((S) => {
          const y = Ly(a[S], i);
          if (y != null)
            if (typeof y == 'object')
              if (l[S]) f = Vr(f, e(S, y, i, l));
              else {
                const g = bt({ theme: i }, y, (E) => ({ [S]: E }));
                Ay(g, y) ? (f[S] = t({ sx: y, theme: i })) : (f = Vr(f, g));
              }
            else f = Vr(f, e(S, y, i, l));
        }),
        qg(p, f)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const Vp = Dy();
Vp.filterProps = ['sx'];
const _l = Vp,
  jy = ['sx'],
  Fy = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : Pl;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Hp(e) {
  const { sx: t } = e,
    n = De(e, jy),
    { systemProps: r, otherProps: o } = Fy(n);
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
function Kp(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Kp(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function Qe() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Kp(e)) && (r && (r += ' '), (r += t));
  return r;
}
const By = ['values', 'unit', 'step'],
  Uy = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => F({}, n, { [r.key]: r.val }), {})
    );
  };
function by(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = De(e, By),
    i = Uy(t),
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
    const y = l.indexOf(S);
    return `@media (min-width:${
      typeof t[f] == 'number' ? t[f] : f
    }${n}) and (max-width:${
      (y !== -1 && typeof t[l[y]] == 'number' ? t[l[y]] : S) - r / 100
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
const Wy = { borderRadius: 4 },
  Vy = Wy;
function Hy(e = 8) {
  if (e.mui) return e;
  const t = bp({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == 'number' ? `${l}px` : l;
        })
        .join(' ');
  return (n.mui = !0), n;
}
const Ky = ['breakpoints', 'palette', 'spacing', 'shape'];
function ka(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = De(e, Ky),
    s = by(n),
    u = Hy(o);
  let a = Dt(
    {
      breakpoints: s,
      direction: 'ltr',
      components: {},
      palette: F({ mode: 'light' }, r),
      spacing: u,
      shape: F({}, Vy, i),
    },
    l
  );
  return (
    (a = t.reduce((m, p) => Dt(m, p), a)),
    (a.unstable_sxConfig = F({}, Pl, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (p) {
      return _l({ sx: p, theme: this });
    }),
    a
  );
}
const Qy = N.createContext(null),
  Yy = Qy;
function Gy() {
  return N.useContext(Yy);
}
function Xy(e) {
  return Object.keys(e).length === 0;
}
function Zy(e = null) {
  const t = Gy();
  return !t || Xy(t) ? e : t;
}
const Jy = ka();
function Qp(e = Jy) {
  return Zy(e);
}
const qy = ['className', 'component'];
function e1(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: r,
    } = e,
    o = Up('div', {
      shouldForwardProp: (l) => l !== 'theme' && l !== 'sx' && l !== 'as',
    })(_l);
  return N.forwardRef(function (s, u) {
    const a = Qp(t),
      m = Hp(s),
      { className: p, component: f = 'div' } = m,
      S = De(m, qy);
    return Te(
      o,
      F({ as: f, ref: u, className: Qe(p, r ? r(n) : n), theme: a }, S)
    );
  });
}
const t1 = ['variant'];
function ef(e) {
  return e.length === 0;
}
function Yp(e) {
  const { variant: t } = e,
    n = De(e, t1);
  let r = t || '';
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === 'color'
          ? (r += ef(r) ? e[o] : Ae(e[o]))
          : (r += `${ef(r) ? o : Ae(o)}${Ae(e[o].toString())}`);
      }),
    r
  );
}
const n1 = [
    'name',
    'slot',
    'skipVariantsResolver',
    'skipSx',
    'overridesResolver',
  ],
  r1 = ['theme'],
  o1 = ['theme'];
function Rr(e) {
  return Object.keys(e).length === 0;
}
function i1(e) {
  return typeof e == 'string' && e.charCodeAt(0) > 96;
}
const l1 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  s1 = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = Yp(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  u1 = (e, t, n, r) => {
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
            m && s.push(t[Yp(a.props)]);
        }),
      s
    );
  };
function oi(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const a1 = ka();
function c1(e = {}) {
  const {
      defaultTheme: t = a1,
      rootShouldForwardProp: n = oi,
      slotShouldForwardProp: r = oi,
    } = e,
    o = (i) => {
      const l = Rr(i.theme) ? t : i.theme;
      return _l(F({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      Zg(i, (h) => h.filter((v) => !(v != null && v.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: a,
          skipSx: m,
          overridesResolver: p,
        } = l,
        f = De(l, n1),
        S = a !== void 0 ? a : (u && u !== 'Root') || !1,
        y = m || !1;
      let g,
        E = oi;
      u === 'Root' ? (E = n) : u ? (E = r) : i1(i) && (E = void 0);
      const d = Up(i, F({ shouldForwardProp: E, label: g }, f)),
        c = (h, ...v) => {
          const x = v
            ? v.map((A) =>
                typeof A == 'function' && A.__emotion_real !== A
                  ? (I) => {
                      let { theme: V } = I,
                        K = De(I, r1);
                      return A(F({ theme: Rr(V) ? t : V }, K));
                    }
                  : A
              )
            : [];
          let P = h;
          s &&
            p &&
            x.push((A) => {
              const I = Rr(A.theme) ? t : A.theme,
                V = l1(s, I);
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
                const I = Rr(A.theme) ? t : A.theme;
                return u1(A, s1(s, I), I, s);
              }),
            y || x.push(o);
          const R = x.length - v.length;
          if (Array.isArray(h) && R > 0) {
            const A = new Array(R).fill('');
            (P = [...h, ...A]), (P.raw = [...h.raw, ...A]);
          } else
            typeof h == 'function' &&
              h.__emotion_real !== h &&
              (P = (A) => {
                let { theme: I } = A,
                  V = De(A, o1);
                return h(F({ theme: Rr(I) ? t : I }, V));
              });
          return d(P, ...x);
        };
      return d.withConfig && (c.withConfig = d.withConfig), c;
    }
  );
}
function f1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : ua(t.components[n].defaultProps, r);
}
function d1({ props: e, name: t, defaultTheme: n }) {
  const r = Qp(n);
  return f1({ theme: r, name: t, props: e });
}
function Ca(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function p1(e) {
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
function Rn(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return Rn(p1(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(pr(9, e));
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
      throw new Error(pr(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function $l(e) {
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
function h1(e) {
  e = Rn(e);
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
    e.type === 'hsla' && ((s += 'a'), u.push(t[3])), $l({ type: s, values: u })
  );
}
function tf(e) {
  e = Rn(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? Rn(h1(e)).values : e.values;
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
function m1(e, t) {
  const n = tf(e),
    r = tf(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Bo(e, t) {
  return (
    (e = Rn(e)),
    (t = Ca(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    $l(e)
  );
}
function g1(e, t) {
  if (((e = Rn(e)), (t = Ca(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return $l(e);
}
function y1(e, t) {
  if (((e = Rn(e)), (t = Ca(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return $l(e);
}
function v1(e, t) {
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
const w1 = ['mode', 'contrastThreshold', 'tonalOffset'],
  nf = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: ao.white, default: ao.white },
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
  is = {
    text: {
      primary: ao.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: ao.white,
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
function rf(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === 'light'
      ? (e.light = y1(e.main, o))
      : t === 'dark' && (e.dark = g1(e.main, i)));
}
function S1(e = 'light') {
  return e === 'dark'
    ? { main: Dn[200], light: Dn[50], dark: Dn[400] }
    : { main: Dn[700], light: Dn[400], dark: Dn[800] };
}
function x1(e = 'light') {
  return e === 'dark'
    ? { main: Ln[200], light: Ln[50], dark: Ln[400] }
    : { main: Ln[500], light: Ln[300], dark: Ln[700] };
}
function k1(e = 'light') {
  return e === 'dark'
    ? { main: An[500], light: An[300], dark: An[700] }
    : { main: An[700], light: An[400], dark: An[800] };
}
function C1(e = 'light') {
  return e === 'dark'
    ? { main: jn[400], light: jn[300], dark: jn[700] }
    : { main: jn[700], light: jn[500], dark: jn[900] };
}
function E1(e = 'light') {
  return e === 'dark'
    ? { main: Fn[400], light: Fn[300], dark: Fn[700] }
    : { main: Fn[800], light: Fn[500], dark: Fn[900] };
}
function P1(e = 'light') {
  return e === 'dark'
    ? { main: Tr[400], light: Tr[300], dark: Tr[700] }
    : { main: '#ed6c02', light: Tr[500], dark: Tr[900] };
}
function _1(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = De(e, w1),
    i = e.primary || S1(t),
    l = e.secondary || x1(t),
    s = e.error || k1(t),
    u = e.info || C1(t),
    a = e.success || E1(t),
    m = e.warning || P1(t);
  function p(g) {
    return m1(g, is.text.primary) >= n ? is.text.primary : nf.text.primary;
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
        throw new Error(pr(11, E ? ` (${E})` : '', d));
      if (typeof g.main != 'string')
        throw new Error(pr(12, E ? ` (${E})` : '', JSON.stringify(g.main)));
      return (
        rf(g, 'light', c, r),
        rf(g, 'dark', h, r),
        g.contrastText || (g.contrastText = p(g.main)),
        g
      );
    },
    S = { dark: is, light: nf };
  return Dt(
    F(
      {
        common: F({}, ao),
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
        grey: j0,
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
const $1 = [
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
function T1(e) {
  return Math.round(e * 1e5) / 1e5;
}
const of = { textTransform: 'uppercase' },
  lf = '"Roboto", "Helvetica", "Arial", sans-serif';
function R1(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = lf,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: u = 700,
      htmlFontSize: a = 16,
      allVariants: m,
      pxToRem: p,
    } = n,
    f = De(n, $1),
    S = o / 14,
    y = p || ((d) => `${(d / a) * S}rem`),
    g = (d, c, h, v, x) =>
      F(
        { fontFamily: r, fontWeight: d, fontSize: y(c), lineHeight: h },
        r === lf ? { letterSpacing: `${T1(v / c)}em` } : {},
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
      button: g(s, 14, 1.75, 0.4, of),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, of),
    };
  return Dt(
    F(
      {
        htmlFontSize: a,
        pxToRem: y,
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
const O1 = 0.2,
  z1 = 0.14,
  I1 = 0.12;
function de(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${O1})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${z1})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${I1})`,
  ].join(',');
}
const N1 = [
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
  M1 = N1,
  A1 = ['duration', 'easing', 'delay'],
  L1 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  D1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function sf(e) {
  return `${Math.round(e)}ms`;
}
function j1(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function F1(e) {
  const t = F({}, L1, e.easing),
    n = F({}, D1, e.duration);
  return F(
    {
      getAutoHeightDuration: j1,
      create: (o = ['all'], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: u = 0,
        } = i;
        return (
          De(i, A1),
          (Array.isArray(o) ? o : [o])
            .map(
              (a) =>
                `${a} ${typeof l == 'string' ? l : sf(l)} ${s} ${
                  typeof u == 'string' ? u : sf(u)
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
const B1 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  U1 = B1,
  b1 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function Gp(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = De(e, b1);
  if (e.vars) throw new Error(pr(18));
  const s = _1(r),
    u = ka(e);
  let a = Dt(u, {
    mixins: v1(u.breakpoints, n),
    palette: s,
    shadows: M1.slice(),
    typography: R1(s, i),
    transitions: F1(o),
    zIndex: F({}, U1),
  });
  return (
    (a = Dt(a, l)),
    (a = t.reduce((m, p) => Dt(m, p), a)),
    (a.unstable_sxConfig = F({}, Pl, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (p) {
      return _l({ sx: p, theme: this });
    }),
    a
  );
}
const W1 = Gp(),
  Xp = W1;
function Tl({ props: e, name: t }) {
  return d1({ props: e, name: t, defaultTheme: Xp });
}
const Zp = (e) => oi(e) && e !== 'classes',
  V1 = c1({ defaultTheme: Xp, rootShouldForwardProp: Zp }),
  In = V1;
function au(e, t) {
  return (
    (au = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    au(e, t)
  );
}
function H1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    au(e, t);
}
const uf = ft.createContext(null);
function K1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function Ea(e, t) {
  var n = function (i) {
      return t && N.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      N.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function Q1(e, t) {
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
function Y1(e, t) {
  return Ea(e.children, function (n) {
    return N.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: xn(n, 'appear', e),
      enter: xn(n, 'enter', e),
      exit: xn(n, 'exit', e),
    });
  });
}
function G1(e, t, n) {
  var r = Ea(e.children),
    o = Q1(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (N.isValidElement(l)) {
        var s = i in t,
          u = i in r,
          a = t[i],
          m = N.isValidElement(a) && !a.props.in;
        u && (!s || m)
          ? (o[i] = N.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: xn(l, 'exit', e),
              enter: xn(l, 'enter', e),
            }))
          : !u && s && !m
          ? (o[i] = N.cloneElement(l, { in: !1 }))
          : u &&
            s &&
            N.isValidElement(a) &&
            (o[i] = N.cloneElement(l, {
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
var X1 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  Z1 = {
    component: 'div',
    childFactory: function (t) {
      return t;
    },
  },
  Pa = (function (e) {
    H1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(K1(i));
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
        return { children: u ? Y1(o, s) : G1(o, l, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = Ea(this.props.children);
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
          a = X1(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? ft.createElement(uf.Provider, { value: u }, a)
            : ft.createElement(
                uf.Provider,
                { value: u },
                ft.createElement(i, s, a)
              )
        );
      }),
      t
    );
  })(ft.Component);
Pa.propTypes = {};
Pa.defaultProps = Z1;
const J1 = Pa;
function q1(e) {
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
    [m, p] = N.useState(!1),
    f = Qe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    S = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = Qe(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !s && !m && p(!0),
    N.useEffect(() => {
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
      children: Te('span', { className: y }),
    })
  );
}
const ev = ul('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  ut = ev,
  tv = ['center', 'classes', 'className'];
let Rl = (e) => e,
  af,
  cf,
  ff,
  df;
const cu = 550,
  nv = 80,
  rv = ya(
    af ||
      (af = Rl`
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
  ov = ya(
    cf ||
      (cf = Rl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  iv = ya(
    ff ||
      (ff = Rl`
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
  lv = In('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  sv = In(q1, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    df ||
      (df = Rl`
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
    rv,
    cu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ut.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    ut.child,
    ut.childLeaving,
    ov,
    cu,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    ut.childPulsate,
    iv,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  uv = N.forwardRef(function (t, n) {
    const r = Tl({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = De(r, tv),
      [u, a] = N.useState([]),
      m = N.useRef(0),
      p = N.useRef(null);
    N.useEffect(() => {
      p.current && (p.current(), (p.current = null));
    }, [u]);
    const f = N.useRef(!1),
      S = N.useRef(null),
      y = N.useRef(null),
      g = N.useRef(null);
    N.useEffect(
      () => () => {
        clearTimeout(S.current);
      },
      []
    );
    const E = N.useCallback(
        (v) => {
          const {
            pulsate: x,
            rippleX: P,
            rippleY: R,
            rippleSize: O,
            cb: A,
          } = v;
          a((I) => [
            ...I,
            Te(
              sv,
              {
                classes: {
                  ripple: Qe(i.ripple, ut.ripple),
                  rippleVisible: Qe(i.rippleVisible, ut.rippleVisible),
                  ripplePulsate: Qe(i.ripplePulsate, ut.ripplePulsate),
                  child: Qe(i.child, ut.child),
                  childLeaving: Qe(i.childLeaving, ut.childLeaving),
                  childPulsate: Qe(i.childPulsate, ut.childPulsate),
                },
                timeout: cu,
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
      d = N.useCallback(
        (v = {}, x = {}, P = () => {}) => {
          const {
            pulsate: R = !1,
            center: O = o || x.pulsate,
            fakeElement: A = !1,
          } = x;
          if ((v == null ? void 0 : v.type) === 'mousedown' && f.current) {
            f.current = !1;
            return;
          }
          (v == null ? void 0 : v.type) === 'touchstart' && (f.current = !0);
          const I = A ? null : g.current,
            V = I
              ? I.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let K, ee, ne;
          if (
            O ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            (K = Math.round(V.width / 2)), (ee = Math.round(V.height / 2));
          else {
            const { clientX: se, clientY: Ce } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
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
          v != null && v.touches
            ? y.current === null &&
              ((y.current = () => {
                E({
                  pulsate: R,
                  rippleX: K,
                  rippleY: ee,
                  rippleSize: ne,
                  cb: P,
                });
              }),
              (S.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, nv)))
            : E({ pulsate: R, rippleX: K, rippleY: ee, rippleSize: ne, cb: P });
        },
        [o, E]
      ),
      c = N.useCallback(() => {
        d({}, { pulsate: !0 });
      }, [d]),
      h = N.useCallback((v, x) => {
        if (
          (clearTimeout(S.current),
          (v == null ? void 0 : v.type) === 'touchend' && y.current)
        ) {
          y.current(),
            (y.current = null),
            (S.current = setTimeout(() => {
              h(v, x);
            }));
          return;
        }
        (y.current = null),
          a((P) => (P.length > 0 ? P.slice(1) : P)),
          (p.current = x);
      }, []);
    return (
      N.useImperativeHandle(n, () => ({ pulsate: c, start: d, stop: h }), [
        c,
        d,
        h,
      ]),
      Te(
        lv,
        F({ className: Qe(ut.root, i.root, l), ref: g }, s, {
          children: Te(J1, { component: null, exit: !0, children: u }),
        })
      )
    );
  }),
  av = uv;
function cv(e) {
  return sl('MuiButtonBase', e);
}
const fv = ul('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
  dv = fv,
  pv = [
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
  hv = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = aa({ root: ['root', t && 'disabled', n && 'focusVisible'] }, cv, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  mv = In('button', {
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
    [`&.${dv.disabled}`]: { pointerEvents: 'none', cursor: 'default' },
    '@media print': { colorAdjust: 'exact' },
  }),
  gv = N.forwardRef(function (t, n) {
    const r = Tl({ props: t, name: 'MuiButtonBase' }),
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
        onBlur: y,
        onClick: g,
        onContextMenu: E,
        onDragLeave: d,
        onFocus: c,
        onFocusVisible: h,
        onKeyDown: v,
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
      Ce = De(r, pv),
      ae = N.useRef(null),
      C = N.useRef(null),
      D = Dc(C, ne),
      { isFocusVisibleRef: j, onFocus: q, onBlur: $, ref: z } = Z0(),
      [_, L] = N.useState(!1);
    a && _ && L(!1),
      N.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            L(!0), ae.current.focus();
          },
        }),
        []
      );
    const [w, b] = N.useState(!1);
    N.useEffect(() => {
      b(!0);
    }, []);
    const T = w && !m && !a;
    N.useEffect(() => {
      _ && f && !m && w && C.current.pulsate();
    }, [m, f, _, w]);
    function G(W, _a, eh = p) {
      return Do(
        ($a) => (_a && _a($a), !eh && C.current && C.current[W]($a), !0)
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
          $(W), j.current === !1 && L(!1), y && y(W);
        },
        !1
      ),
      pn = Do((W) => {
        ae.current || (ae.current = W.currentTarget),
          q(W),
          j.current === !0 && (L(!0), h && h(W)),
          c && c(W);
      }),
      Ee = () => {
        const W = ae.current;
        return u && u !== 'button' && !(W.tagName === 'A' && W.href);
      },
      Vt = N.useRef(!1),
      hn = Do((W) => {
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
          v && v(W),
          W.target === W.currentTarget &&
            Ee() &&
            W.key === 'Enter' &&
            !a &&
            (W.preventDefault(), g && g(W));
      }),
      qe = Do((W) => {
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
    const wr = Dc(n, z, ae),
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
      Et = hv(Nn);
    return ii(
      mv,
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
          ref: wr,
          tabIndex: a ? -1 : K,
          type: se,
        },
        le,
        Ce,
        { children: [l, T ? Te(av, F({ ref: D, center: i }, ee)) : null] }
      )
    );
  }),
  yv = gv;
function vv(e) {
  return sl('MuiTypography', e);
}
ul('MuiTypography', [
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
const wv = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
  ],
  Sv = (e) => {
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
    return aa(s, vv, l);
  },
  xv = In('span', {
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
  pf = {
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
  kv = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  },
  Cv = (e) => kv[e] || e,
  Ev = N.forwardRef(function (t, n) {
    const r = Tl({ props: t, name: 'MuiTypography' }),
      o = Cv(r.color),
      i = Hp(F({}, r, { color: o })),
      {
        align: l = 'inherit',
        className: s,
        component: u,
        gutterBottom: a = !1,
        noWrap: m = !1,
        paragraph: p = !1,
        variant: f = 'body1',
        variantMapping: S = pf,
      } = i,
      y = De(i, wv),
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
      E = u || (p ? 'p' : S[f] || pf[f]) || 'span',
      d = Sv(g);
    return Te(
      xv,
      F({ as: E, ref: n, ownerState: g, className: Qe(d.root, s) }, y)
    );
  }),
  ls = Ev,
  Pv = Gp(),
  _v = e1({
    defaultTheme: Pv,
    defaultClassName: 'MuiBox-root',
    generateClassName: _p.generate,
  }),
  Uo = _v;
function $v(e) {
  return sl('MuiButton', e);
}
const Tv = ul('MuiButton', [
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
  bo = Tv,
  Rv = N.createContext({}),
  Ov = Rv,
  zv = [
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
  Iv = (e) => {
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
      u = aa(s, $v, l);
    return F({}, l, u);
  },
  Jp = (e) =>
    F(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  Nv = In(yv, {
    shouldForwardProp: (e) => Zp(e) || e === 'classes',
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
                : Bo(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Bo(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Bo(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
          [`&.${bo.focusVisible}`]: F(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${bo.disabled}`]: F(
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
              : `1px solid ${Bo(e.palette[t.color].main, 0.5)}`,
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
        [`&.${bo.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${bo.disabled}`]: { boxShadow: 'none' },
      }
  ),
  Mv = In('span', {
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
      Jp(e)
    )
  ),
  Av = In('span', {
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
      Jp(e)
    )
  ),
  Lv = N.forwardRef(function (t, n) {
    const r = N.useContext(Ov),
      o = ua(r, t),
      i = Tl({ props: o, name: 'MuiButton' }),
      {
        children: l,
        color: s = 'primary',
        component: u = 'button',
        className: a,
        disabled: m = !1,
        disableElevation: p = !1,
        disableFocusRipple: f = !1,
        endIcon: S,
        focusVisibleClassName: y,
        fullWidth: g = !1,
        size: E = 'medium',
        startIcon: d,
        type: c,
        variant: h = 'text',
      } = i,
      v = De(i, zv),
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
      P = Iv(x),
      R = d && Te(Mv, { className: P.startIcon, ownerState: x, children: d }),
      O = S && Te(Av, { className: P.endIcon, ownerState: x, children: S });
    return ii(
      Nv,
      F(
        {
          ownerState: x,
          className: Qe(r.className, P.root, a),
          component: u,
          disabled: m,
          focusRipple: !f,
          focusVisibleClassName: Qe(P.focusVisible, y),
          ref: n,
          type: c,
        },
        v,
        { classes: P, children: [R, l, O] }
      )
    );
  }),
  Dv = Lv;
function jv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    fu(e, t);
}
function fu(e, t) {
  return (
    (fu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    fu(e, t)
  );
}
var Fv = (function (e) {
  jv(t, e);
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
      (o.handleTouchStart = function (i) {
        i.preventDefault();
        var l = o.getMouse(i, o.canvas),
          s = i.changedTouches,
          u = o.canvas.getBoundingClientRect(),
          a = u.top,
          m = u.left,
          p = window.pageYOffset || document.documentElement.scrollTop,
          f = window.pageXOffset || document.documentElement.scrollLeft,
          S = 0,
          y = 0;
        (S = i.changedTouches[0].clientX - m - f),
          (y = i.changedTouches[0].clientY - a - p);
        for (var g = 0; g < s.length; g++)
          o.ctx.beginPath(),
            o.ctx.arc(S, y, 4, 0, 2 * Math.PI, !1),
            o.ctx.fill();
        (o.lastPoint = l), o.handlePercentage(o.getFilledInPixels(32));
      }),
      (o.handleTouchMove = function (i) {
        for (
          var l = o.getMouse(i, o.canvas), s = i.changedTouches, u = 0;
          u < s.length;
          u++
        ) {
          o.ctx.globalCompositeOperation = 'destination-out';
          var a = o.canvas.getBoundingClientRect(),
            m = a.top,
            p = a.left,
            f = window.pageYOffset || document.documentElement.scrollTop,
            S = window.pageXOffset || document.documentElement.scrollLeft,
            y = 0,
            g = 0;
          (y = i.changedTouches[0].clientX - p - S),
            (g = i.changedTouches[0].clientY - m - f),
            o.brushImage && o.props.customBrush
              ? o.ctx.drawImage(
                  o.brushImage,
                  y,
                  g,
                  o.props.customBrush.width,
                  o.props.customBrush.height
                )
              : (o.ctx.beginPath(),
                o.ctx.arc(y, g, o.props.brushSize || 20, 0, 2 * Math.PI, !1),
                o.ctx.fill());
        }
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
            o.changedTouches &&
            (console.log('touches', o),
            (p = o.changedTouches[0].clientX - u - m),
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
          onTouchStart: this.handleTouchStart,
          onMouseMove: this.handleMouseMove,
          onTouchMove: this.handleTouchMove,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleTouchMove,
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
})(N.Component);
const hf = (e) => {
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
  mf = (e, t, n) => (
    console.log({
      selectedProducts: e,
      currentProductHandle: t,
      productSelection: n,
    }),
    n === 'all-products' ? !0 : e.some((r) => r.handle === t)
  );
function Bv() {
  const [e, t] = N.useState(!1),
    [n, r] = N.useState(null),
    [o, i] = N.useState(100);
  let l = sessionStorage.getItem('scratchCardConfig');
  l = JSON.parse(l);
  const { shopConfig: s, discountCodes: u } = l,
    {
      'border-color': a,
      'bg-color': m,
      height: p,
      'text-color': f,
      'border-radius': S,
      'border-width': y,
      'font-size': g,
      'selected-title-font-style': E,
      title: d,
      'title-color': c,
      'title-font-size': h,
      'title-text-align-center': v,
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
    z = N.useRef(null),
    _ = N.useRef(null),
    L = N.useRef(null);
  N.useEffect(() => (z.current && i(z.current.offsetWidth), () => {}), []);
  let w = window.innerWidth,
    b = w < 600;
  ne.includes('mobile') && b
    ? (($ = mf(q, D, j)), console.log('mobile device', { willShowWidget: $ }))
    : ne.includes('desktop') && !b
    ? (($ = mf(q, D, j)), console.log('desktop device', { willShowWidget: $ }))
    : (($ = !1), console.log('widget will not show'));
  var T;
  console.log('sc app', { isMobile: b, deviceWidth: w, willShowWidget: $ }),
    N.useEffect(() => {
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
    X = hf(E),
    Z = hf(O);
  let U = null;
  return (
    $ &&
      (U = ii(Uo, {
        className: 'scratch-card-app',
        ref: z,
        children: [
          Te(ls, {
            sx: {
              ...X,
              width: '100%',
              fontSize: `${h}px`,
              textAlign: v && 'center',
              color: c,
            },
            children: d,
          }),
          Te(ls, {
            sx: {
              ...Z,
              width: '100%',
              fontSize: `${P}px`,
              textAlign: R && 'center',
              color: V,
            },
            children: I,
          }),
          Te(Uo, {
            className: 'root-container-sc',
            sx: {
              marginTop: '10px',
              marginBottom: '10px',
              borderRadius: `${S}px`,
              zIndex: 4,
              backgroundColor: m,
            },
            children: Te(Uo, {
              className: 'ScratchCard__Container',
              sx: {
                '.ScratchCard__Canvas': {
                  borderRadius: `${S - 4}px`,
                  MozBorderRadius: `${S}px`,
                  overflow: 'hidden',
                  border: `${y}px solid ${a}`,
                  width: o,
                  height: p,
                },
              },
              children: Te(Fv, {
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
                children: ii(Uo, {
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
                    border: `${y}px solid ${a}`,
                  },
                  children: [
                    Te(ls, {
                      variant: 'h6',
                      sx: { fontSize: `${g}px`, color: f },
                      children: C,
                    }),
                    Te(Dv, {
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
    Te(Ph, { children: U })
  );
}
async function Uv() {
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
function Wo() {
  ss.createRoot(document.getElementById('scratch-card-app-root')).render(
    Te(Bv, {})
  );
}
function Vo() {
  let t = null;
  const n = setInterval(() => {
    (t = document.querySelector('.ScratchCard__Canvas')),
      t && (console.log('canvas found', !1), clearInterval(n));
  }, 1e3);
}
let qp = !1;
window.addEventListener('DOMContentLoaded', () => {
  (qp = !0),
    Uv().then(() => {
      const { shopConfig: e } = JSON.parse(
          sessionStorage.getItem('scratchCardConfig')
        ),
        { 'trigger-event': t, 'load-delay': n } = e;
      switch (
        (console.log(`trigger event is ${t} and load delay ${n} second`), t)
      ) {
        case 'onload':
          console.log('render on load'), Wo(), setTimeout(Vo(), 0);
          break;
        case 'after-interval':
          setTimeout(() => {
            console.log('rendering after', n), Wo(), setTimeout(Vo(), 0);
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
                  Wo(),
                  setTimeout(Vo(), 0));
              },
              { once: !0 }
            ),
            window.innerWidth < 700 &&
              (console.log('mobile device, exit intent wont work'),
              Wo(),
              setTimeout(Vo(), 0));
          break;
      }
    });
});
window.onload = function () {
  if (!qp) {
    console.log('load event not fired! firing now====>>>'),
      console.log('======= INIT :: SCRATCH-CARD-APP =======');
    const e = new Event('DOMContentLoaded');
    dispatchEvent(e);
  }
};
