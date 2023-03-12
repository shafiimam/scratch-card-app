var Qp = Object.defineProperty;
var Yp = (e, t, n) =>
  t in e
    ? Qp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ar = (e, t, n) => (Yp(e, typeof t != 'symbol' ? t + '' : t, n), n);
function Gp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const o in r)
        if (o !== 'default' && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
  );
}
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
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (i.credentials = 'include')
        : o.crossorigin === 'anonymous'
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
function Xp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
var Ar = {},
  Zp = {
    get exports() {
      return Ar;
    },
    set exports(e) {
      Ar = e;
    },
  },
  Ti = {},
  _ = {},
  Jp = {
    get exports() {
      return _;
    },
    set exports(e) {
      _ = e;
    },
  },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var oo = Symbol.for('react.element'),
  qp = Symbol.for('react.portal'),
  eh = Symbol.for('react.fragment'),
  th = Symbol.for('react.strict_mode'),
  nh = Symbol.for('react.profiler'),
  rh = Symbol.for('react.provider'),
  oh = Symbol.for('react.context'),
  ih = Symbol.for('react.forward_ref'),
  lh = Symbol.for('react.suspense'),
  sh = Symbol.for('react.memo'),
  uh = Symbol.for('react.lazy'),
  da = Symbol.iterator;
function ah(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (da && e[da]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var Zc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Jc = Object.assign,
  qc = {};
function or(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qc),
    (this.updater = n || Zc);
}
or.prototype.isReactComponent = {};
or.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function ef() {}
ef.prototype = or.prototype;
function Js(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qc),
    (this.updater = n || Zc);
}
var qs = (Js.prototype = new ef());
qs.constructor = Js;
Jc(qs, or.prototype);
qs.isPureReactComponent = !0;
var pa = Array.isArray,
  tf = Object.prototype.hasOwnProperty,
  eu = { current: null },
  nf = { key: !0, ref: !0, __self: !0, __source: !0 };
function rf(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = '' + t.key),
    t))
      tf.call(t, r) && !nf.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: oo,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: eu.current,
  };
}
function ch(e, t) {
  return {
    $$typeof: oo,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function tu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === oo;
}
function fh(e) {
  var t = { '=': '=0', ':': '=2' };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ha = /\/+/g;
function Sl(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? fh('' + e.key)
    : t.toString(36);
}
function jo(e, t, n, r, o) {
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
          case oo:
          case qp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === '' ? '.' + Sl(l, 0) : r),
      pa(o)
        ? ((n = ''),
          e != null && (n = e.replace(ha, '$&/') + '/'),
          jo(o, t, n, '', function (a) {
            return a;
          }))
        : o != null &&
          (tu(o) &&
            (o = ch(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ''
                  : ('' + o.key).replace(ha, '$&/') + '/') +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === '' ? '.' : r + ':'), pa(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + Sl(i, s);
      l += jo(i, t, n, u, o);
    }
  else if (((u = ah(e)), typeof u == 'function'))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + Sl(i, s++)), (l += jo(i, t, n, u, o));
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
function mo(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    jo(e, r, '', '', function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function dh(e) {
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
var $e = { current: null },
  Bo = { transition: null },
  ph = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: Bo,
    ReactCurrentOwner: eu,
  };
L.Children = {
  map: mo,
  forEach: function (e, t, n) {
    mo(
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
      mo(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      mo(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!tu(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.'
      );
    return e;
  },
};
L.Component = or;
L.Fragment = eh;
L.Profiler = nh;
L.PureComponent = Js;
L.StrictMode = th;
L.Suspense = lh;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ph;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.'
    );
  var r = Jc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = eu.current)),
      t.key !== void 0 && (o = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      tf.call(t, u) &&
        !nf.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: oo, type: e.type, key: o, ref: i, props: r, _owner: l };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: oh,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: rh, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = rf;
L.createFactory = function (e) {
  var t = rf.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: ih, render: e };
};
L.isValidElement = tu;
L.lazy = function (e) {
  return { $$typeof: uh, _payload: { _status: -1, _result: e }, _init: dh };
};
L.memo = function (e, t) {
  return { $$typeof: sh, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Bo.transition;
  Bo.transition = {};
  try {
    e();
  } finally {
    Bo.transition = t;
  }
};
L.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
L.useCallback = function (e, t) {
  return $e.current.useCallback(e, t);
};
L.useContext = function (e) {
  return $e.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return $e.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return $e.current.useEffect(e, t);
};
L.useId = function () {
  return $e.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return $e.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return $e.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return $e.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return $e.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return $e.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return $e.current.useRef(e);
};
L.useState = function (e) {
  return $e.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return $e.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return $e.current.useTransition();
};
L.version = '18.2.0';
(function (e) {
  e.exports = L;
})(Jp);
const Rn = Xp(_),
  ma = Gp({ __proto__: null, default: Rn }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hh = _,
  mh = Symbol.for('react.element'),
  gh = Symbol.for('react.fragment'),
  yh = Object.prototype.hasOwnProperty,
  vh = hh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wh = { key: !0, ref: !0, __self: !0, __source: !0 };
function of(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = '' + n),
    t.key !== void 0 && (i = '' + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) yh.call(t, r) && !wh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: mh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: vh.current,
  };
}
Ti.Fragment = gh;
Ti.jsx = of;
Ti.jsxs = of;
(function (e) {
  e.exports = Ti;
})(Zp);
const Sh = Ar.Fragment,
  de = Ar.jsx,
  Pr = Ar.jsxs;
var Xl = {},
  Zl = {},
  xh = {
    get exports() {
      return Zl;
    },
    set exports(e) {
      Zl = e;
    },
  },
  He = {},
  Jl = {},
  kh = {
    get exports() {
      return Jl;
    },
    set exports(e) {
      Jl = e;
    },
  },
  lf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, M) {
    var N = E.length;
    E.push(M);
    e: for (; 0 < N; ) {
      var F = (N - 1) >>> 1,
        Q = E[F];
      if (0 < o(Q, M)) (E[F] = M), (E[N] = Q), (N = F);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var M = E[0],
      N = E.pop();
    if (N !== M) {
      E[0] = N;
      e: for (var F = 0, Q = E.length, xt = Q >>> 1; F < xt; ) {
        var se = 2 * (F + 1) - 1,
          ft = E[se],
          De = se + 1,
          It = E[De];
        if (0 > o(ft, N))
          De < Q && 0 > o(It, ft)
            ? ((E[F] = It), (E[De] = N), (F = De))
            : ((E[F] = ft), (E[se] = N), (F = se));
        else if (De < Q && 0 > o(It, N)) (E[F] = It), (E[De] = N), (F = De);
        else break e;
      }
    }
    return M;
  }
  function o(E, M) {
    var N = E.sortIndex - M.sortIndex;
    return N !== 0 ? N : E.id - M.id;
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
    h = null,
    d = 3,
    w = !1,
    y = !1,
    g = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    f = typeof clearTimeout == 'function' ? clearTimeout : null,
    c = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var M = n(a); M !== null; ) {
      if (M.callback === null) r(a);
      else if (M.startTime <= E)
        r(a), (M.sortIndex = M.expirationTime), t(u, M);
      else break;
      M = n(a);
    }
  }
  function v(E) {
    if (((g = !1), p(E), !y))
      if (n(u) !== null) (y = !0), me(S);
      else {
        var M = n(a);
        M !== null && Ye(v, M.startTime - E);
      }
  }
  function S(E, M) {
    (y = !1), g && ((g = !1), f(T), (T = -1)), (w = !0);
    var N = d;
    try {
      for (
        p(M), h = n(u);
        h !== null && (!(h.expirationTime > M) || (E && !j()));

      ) {
        var F = h.callback;
        if (typeof F == 'function') {
          (h.callback = null), (d = h.priorityLevel);
          var Q = F(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof Q == 'function' ? (h.callback = Q) : h === n(u) && r(u),
            p(M);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var xt = !0;
      else {
        var se = n(a);
        se !== null && Ye(v, se.startTime - M), (xt = !1);
      }
      return xt;
    } finally {
      (h = null), (d = N), (w = !1);
    }
  }
  var k = !1,
    x = null,
    T = -1,
    z = 5,
    $ = -1;
  function j() {
    return !(e.unstable_now() - $ < z);
  }
  function q() {
    if (x !== null) {
      var E = e.unstable_now();
      $ = E;
      var M = !0;
      try {
        M = x(!0, E);
      } finally {
        M ? le() : ((k = !1), (x = null));
      }
    } else k = !1;
  }
  var le;
  if (typeof c == 'function')
    le = function () {
      c(q);
    };
  else if (typeof MessageChannel < 'u') {
    var ce = new MessageChannel(),
      nt = ce.port2;
    (ce.port1.onmessage = q),
      (le = function () {
        nt.postMessage(null);
      });
  } else
    le = function () {
      P(q, 0);
    };
  function me(E) {
    (x = E), k || ((k = !0), le());
  }
  function Ye(E, M) {
    T = P(function () {
      E(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), me(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (z = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (E) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var N = d;
      d = M;
      try {
        return E();
      } finally {
        d = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, M) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var N = d;
      d = E;
      try {
        return M();
      } finally {
        d = N;
      }
    }),
    (e.unstable_scheduleCallback = function (E, M, N) {
      var F = e.unstable_now();
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? F + N : F))
          : (N = F),
        E)
      ) {
        case 1:
          var Q = -1;
          break;
        case 2:
          Q = 250;
          break;
        case 5:
          Q = 1073741823;
          break;
        case 4:
          Q = 1e4;
          break;
        default:
          Q = 5e3;
      }
      return (
        (Q = N + Q),
        (E = {
          id: m++,
          callback: M,
          priorityLevel: E,
          startTime: N,
          expirationTime: Q,
          sortIndex: -1,
        }),
        N > F
          ? ((E.sortIndex = N),
            t(a, E),
            n(u) === null &&
              E === n(a) &&
              (g ? (f(T), (T = -1)) : (g = !0), Ye(v, N - F)))
          : ((E.sortIndex = Q), t(u, E), y || w || ((y = !0), me(S))),
        E
      );
    }),
    (e.unstable_shouldYield = j),
    (e.unstable_wrapCallback = function (E) {
      var M = d;
      return function () {
        var N = d;
        d = M;
        try {
          return E.apply(this, arguments);
        } finally {
          d = N;
        }
      };
    });
})(lf);
(function (e) {
  e.exports = lf;
})(kh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var sf = _,
  be = Jl;
function C(e) {
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
var uf = new Set(),
  Fr = {};
function vn(e, t) {
  Gn(e, t), Gn(e + 'Capture', t);
}
function Gn(e, t) {
  for (Fr[e] = t, e = 0; e < t.length; e++) uf.add(t[e]);
}
var Rt = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  ql = Object.prototype.hasOwnProperty,
  Ch =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ga = {},
  ya = {};
function Eh(e) {
  return ql.call(ya, e)
    ? !0
    : ql.call(ga, e)
    ? !1
    : Ch.test(e)
    ? (ya[e] = !0)
    : ((ga[e] = !0), !1);
}
function Ph(e, t, n, r) {
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
function _h(e, t, n, r) {
  if (t === null || typeof t > 'u' || Ph(e, t, n, r)) return !0;
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
function ze(e, t, n, r, o, i, l) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = l);
}
var xe = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    xe[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  xe[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  xe[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  xe[e] = new ze(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    xe[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  xe[e] = new ze(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  xe[e] = new ze(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  xe[e] = new ze(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  xe[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var nu = /[\-:]([a-z])/g;
function ru(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(nu, ru);
    xe[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(nu, ru);
    xe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(nu, ru);
  xe[t] = new ze(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
xe.xlinkHref = new ze(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1
);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  xe[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ou(e, t, n, r) {
  var o = xe.hasOwnProperty(t) ? xe[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (_h(t, n, o, r) && (n = null),
    r || o === null
      ? Eh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
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
var Nt = sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  go = Symbol.for('react.element'),
  $n = Symbol.for('react.portal'),
  zn = Symbol.for('react.fragment'),
  iu = Symbol.for('react.strict_mode'),
  es = Symbol.for('react.profiler'),
  af = Symbol.for('react.provider'),
  cf = Symbol.for('react.context'),
  lu = Symbol.for('react.forward_ref'),
  ts = Symbol.for('react.suspense'),
  ns = Symbol.for('react.suspense_list'),
  su = Symbol.for('react.memo'),
  Ft = Symbol.for('react.lazy'),
  ff = Symbol.for('react.offscreen'),
  va = Symbol.iterator;
function cr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (va && e[va]) || e['@@iterator']),
      typeof e == 'function' ? e : null);
}
var J = Object.assign,
  xl;
function xr(e) {
  if (xl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      xl = (t && t[1]) || '';
    }
  return (
    `
` +
    xl +
    e
  );
}
var kl = !1;
function Cl(e, t) {
  if (!e || kl) return '';
  kl = !0;
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
    (kl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? xr(e) : '';
}
function Th(e) {
  switch (e.tag) {
    case 5:
      return xr(e.type);
    case 16:
      return xr('Lazy');
    case 13:
      return xr('Suspense');
    case 19:
      return xr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Cl(e.type, !1)), e;
    case 11:
      return (e = Cl(e.type.render, !1)), e;
    case 1:
      return (e = Cl(e.type, !0)), e;
    default:
      return '';
  }
}
function rs(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case zn:
      return 'Fragment';
    case $n:
      return 'Portal';
    case es:
      return 'Profiler';
    case iu:
      return 'StrictMode';
    case ts:
      return 'Suspense';
    case ns:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case cf:
        return (e.displayName || 'Context') + '.Consumer';
      case af:
        return (e._context.displayName || 'Context') + '.Provider';
      case lu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case su:
        return (
          (t = e.displayName || null), t !== null ? t : rs(e.type) || 'Memo'
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return rs(e(t));
        } catch {}
    }
  return null;
}
function Rh(e) {
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
      return rs(t);
    case 8:
      return t === iu ? 'StrictMode' : 'Mode';
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
function Zt(e) {
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
function df(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  );
}
function $h(e) {
  var t = df(e) ? 'checked' : 'value',
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
function yo(e) {
  e._valueTracker || (e._valueTracker = $h(e));
}
function pf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return (
    e && (r = df(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ti(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function os(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function wa(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    });
}
function hf(e, t) {
  (t = t.checked), t != null && ou(e, 'checked', t, !1);
}
function is(e, t) {
  hf(e, t);
  var n = Zt(t.value),
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
    ? ls(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && ls(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Sa(e, t, n) {
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
function ls(e, t, n) {
  (t !== 'number' || ti(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var kr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + Zt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ss(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function xa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (kr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function mf(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function ka(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function gf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function us(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? gf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : e;
}
var vo,
  yf = (function (e) {
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
        vo = vo || document.createElement('div'),
          vo.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = vo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Dr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var _r = {
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
  zh = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(_r).forEach(function (e) {
  zh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_r[t] = _r[e]);
  });
});
function vf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (_r.hasOwnProperty(e) && _r[e])
    ? ('' + t).trim()
    : t + 'px';
}
function wf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        o = vf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Oh = J(
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
function as(e, t) {
  if (t) {
    if (Oh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(C(62));
  }
}
function cs(e, t) {
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
var fs = null;
function uu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ds = null,
  Wn = null,
  Vn = null;
function Ca(e) {
  if ((e = so(e))) {
    if (typeof ds != 'function') throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Mi(t)), ds(e.stateNode, e.type, t));
  }
}
function Sf(e) {
  Wn ? (Vn ? Vn.push(e) : (Vn = [e])) : (Wn = e);
}
function xf() {
  if (Wn) {
    var e = Wn,
      t = Vn;
    if (((Vn = Wn = null), Ca(e), t)) for (e = 0; e < t.length; e++) Ca(t[e]);
  }
}
function kf(e, t) {
  return e(t);
}
function Cf() {}
var El = !1;
function Ef(e, t, n) {
  if (El) return e(t, n);
  El = !0;
  try {
    return kf(e, t, n);
  } finally {
    (El = !1), (Wn !== null || Vn !== null) && (Cf(), xf());
  }
}
function jr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Mi(n);
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
  if (n && typeof n != 'function') throw Error(C(231, t, typeof n));
  return n;
}
var ps = !1;
if (Rt)
  try {
    var fr = {};
    Object.defineProperty(fr, 'passive', {
      get: function () {
        ps = !0;
      },
    }),
      window.addEventListener('test', fr, fr),
      window.removeEventListener('test', fr, fr);
  } catch {
    ps = !1;
  }
function Mh(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Tr = !1,
  ni = null,
  ri = !1,
  hs = null,
  Nh = {
    onError: function (e) {
      (Tr = !0), (ni = e);
    },
  };
function Ih(e, t, n, r, o, i, l, s, u) {
  (Tr = !1), (ni = null), Mh.apply(Nh, arguments);
}
function Lh(e, t, n, r, o, i, l, s, u) {
  if ((Ih.apply(this, arguments), Tr)) {
    if (Tr) {
      var a = ni;
      (Tr = !1), (ni = null);
    } else throw Error(C(198));
    ri || ((ri = !0), (hs = a));
  }
}
function wn(e) {
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
function Pf(e) {
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
function Ea(e) {
  if (wn(e) !== e) throw Error(C(188));
}
function Ah(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = wn(e)), t === null)) throw Error(C(188));
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
        if (i === n) return Ea(o), e;
        if (i === r) return Ea(o), t;
        i = i.sibling;
      }
      throw Error(C(188));
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
        if (!l) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function _f(e) {
  return (e = Ah(e)), e !== null ? Tf(e) : null;
}
function Tf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Tf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Rf = be.unstable_scheduleCallback,
  Pa = be.unstable_cancelCallback,
  Fh = be.unstable_shouldYield,
  Dh = be.unstable_requestPaint,
  re = be.unstable_now,
  jh = be.unstable_getCurrentPriorityLevel,
  au = be.unstable_ImmediatePriority,
  $f = be.unstable_UserBlockingPriority,
  oi = be.unstable_NormalPriority,
  Bh = be.unstable_LowPriority,
  zf = be.unstable_IdlePriority,
  Ri = null,
  vt = null;
function Uh(e) {
  if (vt && typeof vt.onCommitFiberRoot == 'function')
    try {
      vt.onCommitFiberRoot(Ri, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : bh,
  Wh = Math.log,
  Vh = Math.LN2;
function bh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Wh(e) / Vh) | 0)) | 0;
}
var wo = 64,
  So = 4194304;
function Cr(e) {
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
function ii(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = Cr(s)) : ((i &= l), i !== 0 && (r = Cr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Cr(l)) : i !== 0 && (r = Cr(i));
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
      (n = 31 - ut(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Hh(e, t) {
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
function Kh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - ut(i),
      s = 1 << l,
      u = o[l];
    u === -1
      ? (!(s & n) || s & r) && (o[l] = Hh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function ms(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Of() {
  var e = wo;
  return (wo <<= 1), !(wo & 4194240) && (wo = 64), e;
}
function Pl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function io(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Qh(e, t) {
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
    var o = 31 - ut(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function cu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var W = 0;
function Mf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Nf,
  fu,
  If,
  Lf,
  Af,
  gs = !1,
  xo = [],
  Vt = null,
  bt = null,
  Ht = null,
  Br = new Map(),
  Ur = new Map(),
  jt = [],
  Yh =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function _a(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      Vt = null;
      break;
    case 'dragenter':
    case 'dragleave':
      bt = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ht = null;
      break;
    case 'pointerover':
    case 'pointerout':
      Br.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      Ur.delete(t.pointerId);
  }
}
function dr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = so(t)), t !== null && fu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Gh(e, t, n, r, o) {
  switch (t) {
    case 'focusin':
      return (Vt = dr(Vt, e, t, n, r, o)), !0;
    case 'dragenter':
      return (bt = dr(bt, e, t, n, r, o)), !0;
    case 'mouseover':
      return (Ht = dr(Ht, e, t, n, r, o)), !0;
    case 'pointerover':
      var i = o.pointerId;
      return Br.set(i, dr(Br.get(i) || null, e, t, n, r, o)), !0;
    case 'gotpointercapture':
      return (
        (i = o.pointerId), Ur.set(i, dr(Ur.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Ff(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Pf(n)), t !== null)) {
          (e.blockedOn = t),
            Af(e.priority, function () {
              If(n);
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
function Uo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (fs = r), n.target.dispatchEvent(r), (fs = null);
    } else return (t = so(n)), t !== null && fu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ta(e, t, n) {
  Uo(e) && n.delete(t);
}
function Xh() {
  (gs = !1),
    Vt !== null && Uo(Vt) && (Vt = null),
    bt !== null && Uo(bt) && (bt = null),
    Ht !== null && Uo(Ht) && (Ht = null),
    Br.forEach(Ta),
    Ur.forEach(Ta);
}
function pr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    gs ||
      ((gs = !0),
      be.unstable_scheduleCallback(be.unstable_NormalPriority, Xh)));
}
function Wr(e) {
  function t(o) {
    return pr(o, e);
  }
  if (0 < xo.length) {
    pr(xo[0], e);
    for (var n = 1; n < xo.length; n++) {
      var r = xo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && pr(Vt, e),
      bt !== null && pr(bt, e),
      Ht !== null && pr(Ht, e),
      Br.forEach(t),
      Ur.forEach(t),
      n = 0;
    n < jt.length;
    n++
  )
    (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
    Ff(n), n.blockedOn === null && jt.shift();
}
var bn = Nt.ReactCurrentBatchConfig,
  li = !0;
function Zh(e, t, n, r) {
  var o = W,
    i = bn.transition;
  bn.transition = null;
  try {
    (W = 1), du(e, t, n, r);
  } finally {
    (W = o), (bn.transition = i);
  }
}
function Jh(e, t, n, r) {
  var o = W,
    i = bn.transition;
  bn.transition = null;
  try {
    (W = 4), du(e, t, n, r);
  } finally {
    (W = o), (bn.transition = i);
  }
}
function du(e, t, n, r) {
  if (li) {
    var o = ys(e, t, n, r);
    if (o === null) Ll(e, t, r, si, n), _a(e, r);
    else if (Gh(o, e, t, n, r)) r.stopPropagation();
    else if ((_a(e, r), t & 4 && -1 < Yh.indexOf(e))) {
      for (; o !== null; ) {
        var i = so(o);
        if (
          (i !== null && Nf(i),
          (i = ys(e, t, n, r)),
          i === null && Ll(e, t, r, si, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ll(e, t, r, null, n);
  }
}
var si = null;
function ys(e, t, n, r) {
  if (((si = null), (e = uu(r)), (e = ln(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Pf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (si = e), null;
}
function Df(e) {
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
      switch (jh()) {
        case au:
          return 1;
        case $f:
          return 4;
        case oi:
        case Bh:
          return 16;
        case zf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  pu = null,
  Wo = null;
function jf() {
  if (Wo) return Wo;
  var e,
    t = pu,
    n = t.length,
    r,
    o = 'value' in Ut ? Ut.value : Ut.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Wo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Vo(e) {
  var t = e.keyCode;
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ko() {
  return !0;
}
function Ra() {
  return !1;
}
function Ke(e) {
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
        ? ko
        : Ra),
      (this.isPropagationStopped = Ra),
      this
    );
  }
  return (
    J(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ko));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ko));
      },
      persist: function () {},
      isPersistent: ko,
    }),
    t
  );
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  hu = Ke(ir),
  lo = J({}, ir, { view: 0, detail: 0 }),
  qh = Ke(lo),
  _l,
  Tl,
  hr,
  $i = J({}, lo, {
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
    getModifierState: mu,
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
        : (e !== hr &&
            (hr && e.type === 'mousemove'
              ? ((_l = e.screenX - hr.screenX), (Tl = e.screenY - hr.screenY))
              : (Tl = _l = 0),
            (hr = e)),
          _l);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Tl;
    },
  }),
  $a = Ke($i),
  em = J({}, $i, { dataTransfer: 0 }),
  tm = Ke(em),
  nm = J({}, lo, { relatedTarget: 0 }),
  Rl = Ke(nm),
  rm = J({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  om = Ke(rm),
  im = J({}, ir, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  lm = Ke(im),
  sm = J({}, ir, { data: 0 }),
  za = Ke(sm),
  um = {
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
  am = {
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
  cm = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function fm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cm[e]) ? !!t[e] : !1;
}
function mu() {
  return fm;
}
var dm = J({}, lo, {
    key: function (e) {
      if (e.key) {
        var t = um[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = Vo(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
        ? am[e.keyCode] || 'Unidentified'
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
    getModifierState: mu,
    charCode: function (e) {
      return e.type === 'keypress' ? Vo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Vo(e)
        : e.type === 'keydown' || e.type === 'keyup'
        ? e.keyCode
        : 0;
    },
  }),
  pm = Ke(dm),
  hm = J({}, $i, {
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
  Oa = Ke(hm),
  mm = J({}, lo, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mu,
  }),
  gm = Ke(mm),
  ym = J({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  vm = Ke(ym),
  wm = J({}, $i, {
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
  Sm = Ke(wm),
  xm = [9, 13, 27, 32],
  gu = Rt && 'CompositionEvent' in window,
  Rr = null;
Rt && 'documentMode' in document && (Rr = document.documentMode);
var km = Rt && 'TextEvent' in window && !Rr,
  Bf = Rt && (!gu || (Rr && 8 < Rr && 11 >= Rr)),
  Ma = String.fromCharCode(32),
  Na = !1;
function Uf(e, t) {
  switch (e) {
    case 'keyup':
      return xm.indexOf(t.keyCode) !== -1;
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
function Wf(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var On = !1;
function Cm(e, t) {
  switch (e) {
    case 'compositionend':
      return Wf(t);
    case 'keypress':
      return t.which !== 32 ? null : ((Na = !0), Ma);
    case 'textInput':
      return (e = t.data), e === Ma && Na ? null : e;
    default:
      return null;
  }
}
function Em(e, t) {
  if (On)
    return e === 'compositionend' || (!gu && Uf(e, t))
      ? ((e = jf()), (Wo = pu = Ut = null), (On = !1), e)
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
      return Bf && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var Pm = {
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
function Ia(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!Pm[e.type] : t === 'textarea';
}
function Vf(e, t, n, r) {
  Sf(r),
    (t = ui(t, 'onChange')),
    0 < t.length &&
      ((n = new hu('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }));
}
var $r = null,
  Vr = null;
function _m(e) {
  ed(e, 0);
}
function zi(e) {
  var t = In(e);
  if (pf(t)) return e;
}
function Tm(e, t) {
  if (e === 'change') return t;
}
var bf = !1;
if (Rt) {
  var $l;
  if (Rt) {
    var zl = 'oninput' in document;
    if (!zl) {
      var La = document.createElement('div');
      La.setAttribute('oninput', 'return;'),
        (zl = typeof La.oninput == 'function');
    }
    $l = zl;
  } else $l = !1;
  bf = $l && (!document.documentMode || 9 < document.documentMode);
}
function Aa() {
  $r && ($r.detachEvent('onpropertychange', Hf), (Vr = $r = null));
}
function Hf(e) {
  if (e.propertyName === 'value' && zi(Vr)) {
    var t = [];
    Vf(t, Vr, e, uu(e)), Ef(_m, t);
  }
}
function Rm(e, t, n) {
  e === 'focusin'
    ? (Aa(), ($r = t), (Vr = n), $r.attachEvent('onpropertychange', Hf))
    : e === 'focusout' && Aa();
}
function $m(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
    return zi(Vr);
}
function zm(e, t) {
  if (e === 'click') return zi(t);
}
function Om(e, t) {
  if (e === 'input' || e === 'change') return zi(t);
}
function Mm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == 'function' ? Object.is : Mm;
function br(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!ql.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Fa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Da(e, t) {
  var n = Fa(e);
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
    n = Fa(n);
  }
}
function Kf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Kf(e, t.parentNode)
      : 'contains' in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Qf() {
  for (var e = window, t = ti(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ti(e.document);
  }
  return t;
}
function yu(e) {
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
function Nm(e) {
  var t = Qf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Kf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yu(n)) {
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
          (o = Da(n, i));
        var l = Da(n, r);
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
var Im = Rt && 'documentMode' in document && 11 >= document.documentMode,
  Mn = null,
  vs = null,
  zr = null,
  ws = !1;
function ja(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ws ||
    Mn == null ||
    Mn !== ti(r) ||
    ((r = Mn),
    'selectionStart' in r && yu(r)
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
    (zr && br(zr, r)) ||
      ((zr = r),
      (r = ui(vs, 'onSelect')),
      0 < r.length &&
        ((t = new hu('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function Co(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  );
}
var Nn = {
    animationend: Co('Animation', 'AnimationEnd'),
    animationiteration: Co('Animation', 'AnimationIteration'),
    animationstart: Co('Animation', 'AnimationStart'),
    transitionend: Co('Transition', 'TransitionEnd'),
  },
  Ol = {},
  Yf = {};
Rt &&
  ((Yf = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
  'TransitionEvent' in window || delete Nn.transitionend.transition);
function Oi(e) {
  if (Ol[e]) return Ol[e];
  if (!Nn[e]) return e;
  var t = Nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Yf) return (Ol[e] = t[n]);
  return e;
}
var Gf = Oi('animationend'),
  Xf = Oi('animationiteration'),
  Zf = Oi('animationstart'),
  Jf = Oi('transitionend'),
  qf = new Map(),
  Ba =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function qt(e, t) {
  qf.set(e, t), vn(t, [e]);
}
for (var Ml = 0; Ml < Ba.length; Ml++) {
  var Nl = Ba[Ml],
    Lm = Nl.toLowerCase(),
    Am = Nl[0].toUpperCase() + Nl.slice(1);
  qt(Lm, 'on' + Am);
}
qt(Gf, 'onAnimationEnd');
qt(Xf, 'onAnimationIteration');
qt(Zf, 'onAnimationStart');
qt('dblclick', 'onDoubleClick');
qt('focusin', 'onFocus');
qt('focusout', 'onBlur');
qt(Jf, 'onTransitionEnd');
Gn('onMouseEnter', ['mouseout', 'mouseover']);
Gn('onMouseLeave', ['mouseout', 'mouseover']);
Gn('onPointerEnter', ['pointerout', 'pointerover']);
Gn('onPointerLeave', ['pointerout', 'pointerover']);
vn(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(' ')
);
vn(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' '
  )
);
vn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
vn(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' ')
);
vn(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
);
vn(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
);
var Er =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  Fm = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Er));
function Ua(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Lh(r, t, void 0, e), (e.currentTarget = null);
}
function ed(e, t) {
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
          Ua(o, s, a), (i = u);
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
          Ua(o, s, a), (i = u);
        }
    }
  }
  if (ri) throw ((e = hs), (ri = !1), (hs = null), e);
}
function H(e, t) {
  var n = t[Es];
  n === void 0 && (n = t[Es] = new Set());
  var r = e + '__bubble';
  n.has(r) || (td(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), td(n, e, r, t);
}
var Eo = '_reactListening' + Math.random().toString(36).slice(2);
function Hr(e) {
  if (!e[Eo]) {
    (e[Eo] = !0),
      uf.forEach(function (n) {
        n !== 'selectionchange' && (Fm.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Eo] || ((t[Eo] = !0), Il('selectionchange', !1, t));
  }
}
function td(e, t, n, r) {
  switch (Df(t)) {
    case 1:
      var o = Zh;
      break;
    case 4:
      o = Jh;
      break;
    default:
      o = du;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !ps ||
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
function Ll(e, t, n, r, o) {
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
          if (((l = ln(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  Ef(function () {
    var a = i,
      m = uu(n),
      h = [];
    e: {
      var d = qf.get(e);
      if (d !== void 0) {
        var w = hu,
          y = e;
        switch (e) {
          case 'keypress':
            if (Vo(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = pm;
            break;
          case 'focusin':
            (y = 'focus'), (w = Rl);
            break;
          case 'focusout':
            (y = 'blur'), (w = Rl);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = Rl;
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
            w = $a;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = tm;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = gm;
            break;
          case Gf:
          case Xf:
          case Zf:
            w = om;
            break;
          case Jf:
            w = vm;
            break;
          case 'scroll':
            w = qh;
            break;
          case 'wheel':
            w = Sm;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = lm;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = Oa;
        }
        var g = (t & 4) !== 0,
          P = !g && e === 'scroll',
          f = g ? (d !== null ? d + 'Capture' : null) : d;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = jr(c, f)), v != null && g.push(Kr(c, v, p)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((d = new w(d, y, null, n, m)), h.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== fs &&
            (y = n.relatedTarget || n.fromElement) &&
            (ln(y) || y[$t]))
        )
          break e;
        if (
          (w || d) &&
          ((d =
            m.window === m
              ? m
              : (d = m.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          w
            ? ((y = n.relatedTarget || n.toElement),
              (w = a),
              (y = y ? ln(y) : null),
              y !== null &&
                ((P = wn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = a)),
          w !== y)
        ) {
          if (
            ((g = $a),
            (v = 'onMouseLeave'),
            (f = 'onMouseEnter'),
            (c = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((g = Oa),
              (v = 'onPointerLeave'),
              (f = 'onPointerEnter'),
              (c = 'pointer')),
            (P = w == null ? d : In(w)),
            (p = y == null ? d : In(y)),
            (d = new g(v, c + 'leave', w, n, m)),
            (d.target = P),
            (d.relatedTarget = p),
            (v = null),
            ln(m) === a &&
              ((g = new g(f, c + 'enter', y, n, m)),
              (g.target = p),
              (g.relatedTarget = P),
              (v = g)),
            (P = v),
            w && y)
          )
            t: {
              for (g = w, f = y, c = 0, p = g; p; p = kn(p)) c++;
              for (p = 0, v = f; v; v = kn(v)) p++;
              for (; 0 < c - p; ) (g = kn(g)), c--;
              for (; 0 < p - c; ) (f = kn(f)), p--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = kn(g)), (f = kn(f));
              }
              g = null;
            }
          else g = null;
          w !== null && Wa(h, d, w, g, !1),
            y !== null && P !== null && Wa(h, P, y, g, !0);
        }
      }
      e: {
        if (
          ((d = a ? In(a) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && d.type === 'file'))
        )
          var S = Tm;
        else if (Ia(d))
          if (bf) S = Om;
          else {
            S = $m;
            var k = Rm;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (S = zm);
        if (S && (S = S(e, a))) {
          Vf(h, S, n, m);
          break e;
        }
        k && k(e, d, a),
          e === 'focusout' &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === 'number' &&
            ls(d, 'number', d.value);
      }
      switch (((k = a ? In(a) : window), e)) {
        case 'focusin':
          (Ia(k) || k.contentEditable === 'true') &&
            ((Mn = k), (vs = a), (zr = null));
          break;
        case 'focusout':
          zr = vs = Mn = null;
          break;
        case 'mousedown':
          ws = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (ws = !1), ja(h, n, m);
          break;
        case 'selectionchange':
          if (Im) break;
        case 'keydown':
        case 'keyup':
          ja(h, n, m);
      }
      var x;
      if (gu)
        e: {
          switch (e) {
            case 'compositionstart':
              var T = 'onCompositionStart';
              break e;
            case 'compositionend':
              T = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              T = 'onCompositionUpdate';
              break e;
          }
          T = void 0;
        }
      else
        On
          ? Uf(e, n) && (T = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (T = 'onCompositionStart');
      T &&
        (Bf &&
          n.locale !== 'ko' &&
          (On || T !== 'onCompositionStart'
            ? T === 'onCompositionEnd' && On && (x = jf())
            : ((Ut = m),
              (pu = 'value' in Ut ? Ut.value : Ut.textContent),
              (On = !0))),
        (k = ui(a, T)),
        0 < k.length &&
          ((T = new za(T, e, null, n, m)),
          h.push({ event: T, listeners: k }),
          x ? (T.data = x) : ((x = Wf(n)), x !== null && (T.data = x)))),
        (x = km ? Cm(e, n) : Em(e, n)) &&
          ((a = ui(a, 'onBeforeInput')),
          0 < a.length &&
            ((m = new za('onBeforeInput', 'beforeinput', null, n, m)),
            h.push({ event: m, listeners: a }),
            (m.data = x)));
    }
    ed(h, t);
  });
}
function Kr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ui(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = jr(e, n)),
      i != null && r.unshift(Kr(e, i, o)),
      (i = jr(e, t)),
      i != null && r.push(Kr(e, i, o))),
      (e = e.return);
  }
  return r;
}
function kn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Wa(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = jr(n, i)), u != null && l.unshift(Kr(n, u, s)))
        : o || ((u = jr(n, i)), u != null && l.push(Kr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Dm = /\r\n?/g,
  jm = /\u0000|\uFFFD/g;
function Va(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Dm,
      `
`
    )
    .replace(jm, '');
}
function Po(e, t, n) {
  if (((t = Va(t)), Va(e) !== t && n)) throw Error(C(425));
}
function ai() {}
var Ss = null,
  xs = null;
function ks(e, t) {
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
var Cs = typeof setTimeout == 'function' ? setTimeout : void 0,
  Bm = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  ba = typeof Promise == 'function' ? Promise : void 0,
  Um =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof ba < 'u'
      ? function (e) {
          return ba.resolve(null).then(e).catch(Wm);
        }
      : Cs;
function Wm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Al(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(o), Wr(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = o;
  } while (n);
  Wr(t);
}
function Kt(e) {
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
function Ha(e) {
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
var lr = Math.random().toString(36).slice(2),
  gt = '__reactFiber$' + lr,
  Qr = '__reactProps$' + lr,
  $t = '__reactContainer$' + lr,
  Es = '__reactEvents$' + lr,
  Vm = '__reactListeners$' + lr,
  bm = '__reactHandles$' + lr;
function ln(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$t] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ha(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Ha(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function so(e) {
  return (
    (e = e[gt] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Mi(e) {
  return e[Qr] || null;
}
var Ps = [],
  Ln = -1;
function en(e) {
  return { current: e };
}
function K(e) {
  0 > Ln || ((e.current = Ps[Ln]), (Ps[Ln] = null), Ln--);
}
function b(e, t) {
  Ln++, (Ps[Ln] = e.current), (e.current = t);
}
var Jt = {},
  _e = en(Jt),
  Ie = en(!1),
  dn = Jt;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Jt;
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
function Le(e) {
  return (e = e.childContextTypes), e != null;
}
function ci() {
  K(Ie), K(_e);
}
function Ka(e, t, n) {
  if (_e.current !== Jt) throw Error(C(168));
  b(_e, t), b(Ie, n);
}
function nd(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, Rh(e) || 'Unknown', o));
  return J({}, n, r);
}
function fi(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (dn = _e.current),
    b(_e, e),
    b(Ie, Ie.current),
    !0
  );
}
function Qa(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = nd(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ie),
      K(_e),
      b(_e, e))
    : K(Ie),
    b(Ie, n);
}
var Ct = null,
  Ni = !1,
  Fl = !1;
function rd(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Hm(e) {
  (Ni = !0), rd(e);
}
function tn() {
  if (!Fl && Ct !== null) {
    Fl = !0;
    var e = 0,
      t = W;
    try {
      var n = Ct;
      for (W = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (Ni = !1);
    } catch (o) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Rf(au, tn), o);
    } finally {
      (W = t), (Fl = !1);
    }
  }
  return null;
}
var An = [],
  Fn = 0,
  di = null,
  pi = 0,
  Xe = [],
  Ze = 0,
  pn = null,
  Et = 1,
  Pt = '';
function nn(e, t) {
  (An[Fn++] = pi), (An[Fn++] = di), (di = e), (pi = t);
}
function od(e, t, n) {
  (Xe[Ze++] = Et), (Xe[Ze++] = Pt), (Xe[Ze++] = pn), (pn = e);
  var r = Et;
  e = Pt;
  var o = 32 - ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ut(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Et = (1 << (32 - ut(t) + o)) | (n << o) | r),
      (Pt = i + e);
  } else (Et = (1 << i) | (n << o) | r), (Pt = e);
}
function vu(e) {
  e.return !== null && (nn(e, 1), od(e, 1, 0));
}
function wu(e) {
  for (; e === di; )
    (di = An[--Fn]), (An[Fn] = null), (pi = An[--Fn]), (An[Fn] = null);
  for (; e === pn; )
    (pn = Xe[--Ze]),
      (Xe[Ze] = null),
      (Pt = Xe[--Ze]),
      (Xe[Ze] = null),
      (Et = Xe[--Ze]),
      (Xe[Ze] = null);
}
var We = null,
  Ue = null,
  G = !1,
  st = null;
function id(e, t) {
  var n = Je(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ya(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (We = e), (Ue = Kt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: Et, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Je(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (We = e),
            (Ue = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function _s(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ts(e) {
  if (G) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Ya(e, t)) {
        if (_s(e)) throw Error(C(418));
        t = Kt(n.nextSibling);
        var r = We;
        t && Ya(e, t)
          ? id(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (We = e));
      }
    } else {
      if (_s(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (We = e);
    }
  }
}
function Ga(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function _o(e) {
  if (e !== We) return !1;
  if (!G) return Ga(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !ks(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (_s(e)) throw (ld(), Error(C(418)));
    for (; t; ) id(e, t), (t = Kt(t.nextSibling));
  }
  if ((Ga(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ue = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = We ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function ld() {
  for (var e = Ue; e; ) e = Kt(e.nextSibling);
}
function Zn() {
  (Ue = We = null), (G = !1);
}
function Su(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Km = Nt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var hi = en(null),
  mi = null,
  Dn = null,
  xu = null;
function ku() {
  xu = Dn = mi = null;
}
function Cu(e) {
  var t = hi.current;
  K(hi), (e._currentValue = t);
}
function Rs(e, t, n) {
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
function Hn(e, t) {
  (mi = e),
    (xu = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function et(e) {
  var t = e._currentValue;
  if (xu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
      if (mi === null) throw Error(C(308));
      (Dn = e), (mi.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return t;
}
var sn = null;
function Eu(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function sd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Eu(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    zt(e, r)
  );
}
function zt(e, t) {
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
var Dt = !1;
function Pu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ud(e, t) {
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
function _t(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Qt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Eu(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
function Xa(e, t) {
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
function gi(e, t, n, r) {
  var o = e.updateQueue;
  Dt = !1;
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
    var h = o.baseState;
    (l = 0), (m = a = u = null), (s = i);
    do {
      var d = s.lane,
        w = s.eventTime;
      if ((r & d) === d) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            });
        e: {
          var y = e,
            g = s;
          switch (((d = t), (w = n), g.tag)) {
            case 1:
              if (((y = g.payload), typeof y == 'function')) {
                h = y.call(w, h, d);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == 'function' ? y.call(w, h, d) : y),
                d == null)
              )
                break e;
              h = J({}, h, d);
              break e;
            case 2:
              Dt = !0;
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [s]) : d.push(s));
      } else
        (w = {
          eventTime: w,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          m === null ? ((a = m = w), (u = h)) : (m = m.next = w),
          (l |= d);
      if (((s = s.next), s === null)) {
        if (((s = o.shared.pending), s === null)) break;
        (d = s),
          (s = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (u = h),
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
    (mn |= l), (e.lanes = l), (e.memoizedState = h);
  }
}
function Za(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != 'function'))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var ad = new sf.Component().refs;
function $s(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ii = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Gt(e),
      i = _t(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (at(t, e, o, r), bo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Gt(e),
      i = _t(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (at(t, e, o, r), bo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Gt(e),
      o = _t(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Qt(e, o, r)),
      t !== null && (at(t, e, r, n), bo(t, e, r));
  },
};
function Ja(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !br(n, r) || !br(o, i)
      : !0
  );
}
function cd(e, t, n) {
  var r = !1,
    o = Jt,
    i = t.contextType;
  return (
    typeof i == 'object' && i !== null
      ? (i = et(i))
      : ((o = Le(t) ? dn : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xn(e, o) : Jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ii),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function qa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ii.enqueueReplaceState(t, t.state, null);
}
function zs(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = ad), Pu(e);
  var i = t.contextType;
  typeof i == 'object' && i !== null
    ? (o.context = et(i))
    : ((i = Le(t) ? dn : _e.current), (o.context = Xn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == 'function' && ($s(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof o.getSnapshotBeforeUpdate == 'function' ||
      (typeof o.UNSAFE_componentWillMount != 'function' &&
        typeof o.componentWillMount != 'function') ||
      ((t = o.state),
      typeof o.componentWillMount == 'function' && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == 'function' &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ii.enqueueReplaceState(o, o.state, null),
      gi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == 'function' && (e.flags |= 4194308);
}
function mr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r,
        i = '' + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === ad && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != 'string') throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function To(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e
      )
    ))
  );
}
function ec(e) {
  var t = e._init;
  return t(e._payload);
}
function fd(e) {
  function t(f, c) {
    if (e) {
      var p = f.deletions;
      p === null ? ((f.deletions = [c]), (f.flags |= 16)) : p.push(c);
    }
  }
  function n(f, c) {
    if (!e) return null;
    for (; c !== null; ) t(f, c), (c = c.sibling);
    return null;
  }
  function r(f, c) {
    for (f = new Map(); c !== null; )
      c.key !== null ? f.set(c.key, c) : f.set(c.index, c), (c = c.sibling);
    return f;
  }
  function o(f, c) {
    return (f = Xt(f, c)), (f.index = 0), (f.sibling = null), f;
  }
  function i(f, c, p) {
    return (
      (f.index = p),
      e
        ? ((p = f.alternate),
          p !== null
            ? ((p = p.index), p < c ? ((f.flags |= 2), c) : p)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, p, v) {
    return c === null || c.tag !== 6
      ? ((c = bl(p, f.mode, v)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function u(f, c, p, v) {
    var S = p.type;
    return S === zn
      ? m(f, c, p.props.children, v, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == 'object' &&
            S !== null &&
            S.$$typeof === Ft &&
            ec(S) === c.type))
      ? ((v = o(c, p.props)), (v.ref = mr(f, c, p)), (v.return = f), v)
      : ((v = Xo(p.type, p.key, p.props, null, f.mode, v)),
        (v.ref = mr(f, c, p)),
        (v.return = f),
        v);
  }
  function a(f, c, p, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Hl(p, f.mode, v)), (c.return = f), c)
      : ((c = o(c, p.children || [])), (c.return = f), c);
  }
  function m(f, c, p, v, S) {
    return c === null || c.tag !== 7
      ? ((c = fn(p, f.mode, v, S)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == 'string' && c !== '') || typeof c == 'number')
      return (c = bl('' + c, f.mode, p)), (c.return = f), c;
    if (typeof c == 'object' && c !== null) {
      switch (c.$$typeof) {
        case go:
          return (
            (p = Xo(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = mr(f, null, c)),
            (p.return = f),
            p
          );
        case $n:
          return (c = Hl(c, f.mode, p)), (c.return = f), c;
        case Ft:
          var v = c._init;
          return h(f, v(c._payload), p);
      }
      if (kr(c) || cr(c))
        return (c = fn(c, f.mode, p, null)), (c.return = f), c;
      To(f, c);
    }
    return null;
  }
  function d(f, c, p, v) {
    var S = c !== null ? c.key : null;
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return S !== null ? null : s(f, c, '' + p, v);
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case go:
          return p.key === S ? u(f, c, p, v) : null;
        case $n:
          return p.key === S ? a(f, c, p, v) : null;
        case Ft:
          return (S = p._init), d(f, c, S(p._payload), v);
      }
      if (kr(p) || cr(p)) return S !== null ? null : m(f, c, p, v, null);
      To(f, p);
    }
    return null;
  }
  function w(f, c, p, v, S) {
    if ((typeof v == 'string' && v !== '') || typeof v == 'number')
      return (f = f.get(p) || null), s(c, f, '' + v, S);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case go:
          return (f = f.get(v.key === null ? p : v.key) || null), u(c, f, v, S);
        case $n:
          return (f = f.get(v.key === null ? p : v.key) || null), a(c, f, v, S);
        case Ft:
          var k = v._init;
          return w(f, c, p, k(v._payload), S);
      }
      if (kr(v) || cr(v)) return (f = f.get(p) || null), m(c, f, v, S, null);
      To(c, v);
    }
    return null;
  }
  function y(f, c, p, v) {
    for (
      var S = null, k = null, x = c, T = (c = 0), z = null;
      x !== null && T < p.length;
      T++
    ) {
      x.index > T ? ((z = x), (x = null)) : (z = x.sibling);
      var $ = d(f, x, p[T], v);
      if ($ === null) {
        x === null && (x = z);
        break;
      }
      e && x && $.alternate === null && t(f, x),
        (c = i($, c, T)),
        k === null ? (S = $) : (k.sibling = $),
        (k = $),
        (x = z);
    }
    if (T === p.length) return n(f, x), G && nn(f, T), S;
    if (x === null) {
      for (; T < p.length; T++)
        (x = h(f, p[T], v)),
          x !== null &&
            ((c = i(x, c, T)), k === null ? (S = x) : (k.sibling = x), (k = x));
      return G && nn(f, T), S;
    }
    for (x = r(f, x); T < p.length; T++)
      (z = w(x, f, T, p[T], v)),
        z !== null &&
          (e && z.alternate !== null && x.delete(z.key === null ? T : z.key),
          (c = i(z, c, T)),
          k === null ? (S = z) : (k.sibling = z),
          (k = z));
    return (
      e &&
        x.forEach(function (j) {
          return t(f, j);
        }),
      G && nn(f, T),
      S
    );
  }
  function g(f, c, p, v) {
    var S = cr(p);
    if (typeof S != 'function') throw Error(C(150));
    if (((p = S.call(p)), p == null)) throw Error(C(151));
    for (
      var k = (S = null), x = c, T = (c = 0), z = null, $ = p.next();
      x !== null && !$.done;
      T++, $ = p.next()
    ) {
      x.index > T ? ((z = x), (x = null)) : (z = x.sibling);
      var j = d(f, x, $.value, v);
      if (j === null) {
        x === null && (x = z);
        break;
      }
      e && x && j.alternate === null && t(f, x),
        (c = i(j, c, T)),
        k === null ? (S = j) : (k.sibling = j),
        (k = j),
        (x = z);
    }
    if ($.done) return n(f, x), G && nn(f, T), S;
    if (x === null) {
      for (; !$.done; T++, $ = p.next())
        ($ = h(f, $.value, v)),
          $ !== null &&
            ((c = i($, c, T)), k === null ? (S = $) : (k.sibling = $), (k = $));
      return G && nn(f, T), S;
    }
    for (x = r(f, x); !$.done; T++, $ = p.next())
      ($ = w(x, f, T, $.value, v)),
        $ !== null &&
          (e && $.alternate !== null && x.delete($.key === null ? T : $.key),
          (c = i($, c, T)),
          k === null ? (S = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        x.forEach(function (q) {
          return t(f, q);
        }),
      G && nn(f, T),
      S
    );
  }
  function P(f, c, p, v) {
    if (
      (typeof p == 'object' &&
        p !== null &&
        p.type === zn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == 'object' && p !== null)
    ) {
      switch (p.$$typeof) {
        case go:
          e: {
            for (var S = p.key, k = c; k !== null; ) {
              if (k.key === S) {
                if (((S = p.type), S === zn)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (c = o(k, p.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == 'object' &&
                    S !== null &&
                    S.$$typeof === Ft &&
                    ec(S) === k.type)
                ) {
                  n(f, k.sibling),
                    (c = o(k, p.props)),
                    (c.ref = mr(f, k, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            p.type === zn
              ? ((c = fn(p.props.children, f.mode, v, p.key)),
                (c.return = f),
                (f = c))
              : ((v = Xo(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = mr(f, c, p)),
                (v.return = f),
                (f = v));
          }
          return l(f);
        case $n:
          e: {
            for (k = p.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === p.containerInfo &&
                  c.stateNode.implementation === p.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, p.children || [])),
                    (c.return = f),
                    (f = c);
                  break e;
                } else {
                  n(f, c);
                  break;
                }
              else t(f, c);
              c = c.sibling;
            }
            (c = Hl(p, f.mode, v)), (c.return = f), (f = c);
          }
          return l(f);
        case Ft:
          return (k = p._init), P(f, c, k(p._payload), v);
      }
      if (kr(p)) return y(f, c, p, v);
      if (cr(p)) return g(f, c, p, v);
      To(f, p);
    }
    return (typeof p == 'string' && p !== '') || typeof p == 'number'
      ? ((p = '' + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = bl(p, f.mode, v)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return P;
}
var Jn = fd(!0),
  dd = fd(!1),
  uo = {},
  wt = en(uo),
  Yr = en(uo),
  Gr = en(uo);
function un(e) {
  if (e === uo) throw Error(C(174));
  return e;
}
function _u(e, t) {
  switch ((b(Gr, t), b(Yr, e), b(wt, uo), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : us(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = us(t, e));
  }
  K(wt), b(wt, t);
}
function qn() {
  K(wt), K(Yr), K(Gr);
}
function pd(e) {
  un(Gr.current);
  var t = un(wt.current),
    n = us(t, e.type);
  t !== n && (b(Yr, e), b(wt, n));
}
function Tu(e) {
  Yr.current === e && (K(wt), K(Yr));
}
var X = en(0);
function yi(e) {
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
var Dl = [];
function Ru() {
  for (var e = 0; e < Dl.length; e++)
    Dl[e]._workInProgressVersionPrimary = null;
  Dl.length = 0;
}
var Ho = Nt.ReactCurrentDispatcher,
  jl = Nt.ReactCurrentBatchConfig,
  hn = 0,
  Z = null,
  ue = null,
  fe = null,
  vi = !1,
  Or = !1,
  Xr = 0,
  Qm = 0;
function ke() {
  throw Error(C(321));
}
function $u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function zu(e, t, n, r, o, i) {
  if (
    ((hn = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ho.current = e === null || e.memoizedState === null ? Zm : Jm),
    (e = n(r, o)),
    Or)
  ) {
    i = 0;
    do {
      if (((Or = !1), (Xr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (fe = ue = null),
        (t.updateQueue = null),
        (Ho.current = qm),
        (e = n(r, o));
    } while (Or);
  }
  if (
    ((Ho.current = wi),
    (t = ue !== null && ue.next !== null),
    (hn = 0),
    (fe = ue = Z = null),
    (vi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ou() {
  var e = Xr !== 0;
  return (Xr = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (Z.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function tt() {
  if (ue === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ue.next;
  var t = fe === null ? Z.memoizedState : fe.next;
  if (t !== null) (fe = t), (ue = e);
  else {
    if (e === null) throw Error(C(310));
    (ue = e),
      (e = {
        memoizedState: ue.memoizedState,
        baseState: ue.baseState,
        baseQueue: ue.baseQueue,
        queue: ue.queue,
        next: null,
      }),
      fe === null ? (Z.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Zr(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Bl(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = ue,
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
      if ((hn & m) === m)
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
        var h = {
          lane: m,
          action: a.action,
          hasEagerState: a.hasEagerState,
          eagerState: a.eagerState,
          next: null,
        };
        u === null ? ((s = u = h), (l = r)) : (u = u.next = h),
          (Z.lanes |= m),
          (mn |= m);
      }
      a = a.next;
    } while (a !== null && a !== i);
    u === null ? (l = r) : (u.next = s),
      ct(r, t.memoizedState) || (Ne = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (Z.lanes |= i), (mn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ul(e) {
  var t = tt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var l = (o = o.next);
    do (i = e(i, l.action)), (l = l.next);
    while (l !== o);
    ct(i, t.memoizedState) || (Ne = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function hd() {}
function md(e, t) {
  var n = Z,
    r = tt(),
    o = t(),
    i = !ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ne = !0)),
    (r = r.queue),
    Mu(vd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jr(9, yd.bind(null, n, r, o, t), void 0, null),
      pe === null)
    )
      throw Error(C(349));
    hn & 30 || gd(n, t, o);
  }
  return o;
}
function gd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function yd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), wd(t) && Sd(e);
}
function vd(e, t, n) {
  return n(function () {
    wd(t) && Sd(e);
  });
}
function wd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function Sd(e) {
  var t = zt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function tc(e) {
  var t = pt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Xm.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Jr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function xd() {
  return tt().memoizedState;
}
function Ko(e, t, n, r) {
  var o = pt();
  (Z.flags |= e),
    (o.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Li(e, t, n, r) {
  var o = tt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (((i = l.destroy), r !== null && $u(r, l.deps))) {
      o.memoizedState = Jr(t, n, i, r);
      return;
    }
  }
  (Z.flags |= e), (o.memoizedState = Jr(1 | t, n, i, r));
}
function nc(e, t) {
  return Ko(8390656, 8, e, t);
}
function Mu(e, t) {
  return Li(2048, 8, e, t);
}
function kd(e, t) {
  return Li(4, 2, e, t);
}
function Cd(e, t) {
  return Li(4, 4, e, t);
}
function Ed(e, t) {
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
function Pd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Li(4, 4, Ed.bind(null, t, e), n)
  );
}
function Nu() {}
function _d(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Td(e, t) {
  var n = tt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Rd(e, t, n) {
  return hn & 21
    ? (ct(n, t) || ((n = Of()), (Z.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Ym(e, t) {
  var n = W;
  (W = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = jl.transition;
  jl.transition = {};
  try {
    e(!1), t();
  } finally {
    (W = n), (jl.transition = r);
  }
}
function $d() {
  return tt().memoizedState;
}
function Gm(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    zd(e))
  )
    Od(t, n);
  else if (((n = sd(e, t, n, r)), n !== null)) {
    var o = Re();
    at(n, e, r, o), Md(n, t, r);
  }
}
function Xm(e, t, n) {
  var r = Gt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (zd(e)) Od(t, o);
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
        if (((o.hasEagerState = !0), (o.eagerState = s), ct(s, l))) {
          var u = t.interleaved;
          u === null
            ? ((o.next = o), Eu(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = sd(e, t, o, r)),
      n !== null && ((o = Re()), at(n, e, r, o), Md(n, t, r));
  }
}
function zd(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Od(e, t) {
  Or = vi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Md(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), cu(e, n);
  }
}
var wi = {
    readContext: et,
    useCallback: ke,
    useContext: ke,
    useEffect: ke,
    useImperativeHandle: ke,
    useInsertionEffect: ke,
    useLayoutEffect: ke,
    useMemo: ke,
    useReducer: ke,
    useRef: ke,
    useState: ke,
    useDebugValue: ke,
    useDeferredValue: ke,
    useTransition: ke,
    useMutableSource: ke,
    useSyncExternalStore: ke,
    useId: ke,
    unstable_isNewReconciler: !1,
  },
  Zm = {
    readContext: et,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: et,
    useEffect: nc,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ko(4194308, 4, Ed.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ko(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ko(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = pt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = pt();
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
        (e = e.dispatch = Gm.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: tc,
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = tc(!1),
        t = e[0];
      return (e = Ym.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        o = pt();
      if (G) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(C(349));
        hn & 30 || gd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        nc(vd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Jr(9, yd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = pe.identifierPrefix;
      if (G) {
        var n = Pt,
          r = Et;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = Xr++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Qm++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Jm = {
    readContext: et,
    useCallback: _d,
    useContext: et,
    useEffect: Mu,
    useImperativeHandle: Pd,
    useInsertionEffect: kd,
    useLayoutEffect: Cd,
    useMemo: Td,
    useReducer: Bl,
    useRef: xd,
    useState: function () {
      return Bl(Zr);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = tt();
      return Rd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Zr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: md,
    useId: $d,
    unstable_isNewReconciler: !1,
  },
  qm = {
    readContext: et,
    useCallback: _d,
    useContext: et,
    useEffect: Mu,
    useImperativeHandle: Pd,
    useInsertionEffect: kd,
    useLayoutEffect: Cd,
    useMemo: Td,
    useReducer: Ul,
    useRef: xd,
    useState: function () {
      return Ul(Zr);
    },
    useDebugValue: Nu,
    useDeferredValue: function (e) {
      var t = tt();
      return ue === null ? (t.memoizedState = e) : Rd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ul(Zr)[0],
        t = tt().memoizedState;
      return [e, t];
    },
    useMutableSource: hd,
    useSyncExternalStore: md,
    useId: $d,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Th(r)), (r = r.return);
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
function Wl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Os(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var e0 = typeof WeakMap == 'function' ? WeakMap : Map;
function Nd(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      xi || ((xi = !0), (Us = r)), Os(e, t);
    }),
    n
  );
}
function Id(e, t, n) {
  (n = _t(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Os(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (n.callback = function () {
        Os(e, t),
          typeof r != 'function' &&
            (Yt === null ? (Yt = new Set([this])) : Yt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : '',
        });
      }),
    n
  );
}
function rc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new e0();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = h0.bind(null, e, t, n)), t.then(e, e));
}
function oc(e) {
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
function ic(e, t, n, r, o) {
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
              : ((t = _t(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var t0 = Nt.ReactCurrentOwner,
  Ne = !1;
function Te(e, t, n, r) {
  t.child = e === null ? dd(t, null, n, r) : Jn(t, e.child, n, r);
}
function lc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Hn(t, o),
    (r = zu(e, t, n, r, i, o)),
    (n = Ou()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ot(e, t, o))
      : (G && n && vu(t), (t.flags |= 1), Te(e, t, r, o), t.child)
  );
}
function sc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == 'function' &&
      !Uu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Ld(e, t, i, r, o))
      : ((e = Xo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(l, r) && e.ref === t.ref)
    )
      return Ot(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Ld(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (br(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Ot(e, t, o);
  }
  return Ms(e, t, n, r, o);
}
function Ad(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Bn, je),
        (je |= n);
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
          b(Bn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(Bn, je),
        (je |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Bn, je),
      (je |= r);
  return Te(e, t, o, n), t.child;
}
function Fd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ms(e, t, n, r, o) {
  var i = Le(n) ? dn : _e.current;
  return (
    (i = Xn(t, i)),
    Hn(t, o),
    (n = zu(e, t, n, r, i, o)),
    (r = Ou()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ot(e, t, o))
      : (G && r && vu(t), (t.flags |= 1), Te(e, t, n, o), t.child)
  );
}
function uc(e, t, n, r, o) {
  if (Le(n)) {
    var i = !0;
    fi(t);
  } else i = !1;
  if ((Hn(t, o), t.stateNode === null))
    Qo(e, t), cd(t, n, r), zs(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == 'object' && a !== null
      ? (a = et(a))
      : ((a = Le(n) ? dn : _e.current), (a = Xn(t, a)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == 'function' ||
        typeof l.getSnapshotBeforeUpdate == 'function';
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== r || u !== a) && qa(t, l, r, a)),
      (Dt = !1);
    var d = t.memoizedState;
    (l.state = d),
      gi(t, r, l, o),
      (u = t.memoizedState),
      s !== r || d !== u || Ie.current || Dt
        ? (typeof m == 'function' && ($s(t, n, m, r), (u = t.memoizedState)),
          (s = Dt || Ja(t, n, s, r, d, u, a))
            ? (h ||
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
      ud(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : it(t.type, s)),
      (l.props = a),
      (h = t.pendingProps),
      (d = l.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null
        ? (u = et(u))
        : ((u = Le(n) ? dn : _e.current), (u = Xn(t, u)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function') ||
      (typeof l.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof l.componentWillReceiveProps != 'function') ||
      ((s !== h || d !== u) && qa(t, l, r, u)),
      (Dt = !1),
      (d = t.memoizedState),
      (l.state = d),
      gi(t, r, l, o);
    var y = t.memoizedState;
    s !== h || d !== y || Ie.current || Dt
      ? (typeof w == 'function' && ($s(t, n, w, r), (y = t.memoizedState)),
        (a = Dt || Ja(t, n, a, r, d, y, u) || !1)
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
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ns(e, t, n, r, i, o);
}
function Ns(e, t, n, r, o, i) {
  Fd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && Qa(t, n, !1), Ot(e, t, i);
  (r = t.stateNode), (t0.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Jn(t, e.child, null, i)), (t.child = Jn(t, null, s, i)))
      : Te(e, t, s, i),
    (t.memoizedState = r.state),
    o && Qa(t, n, !0),
    t.child
  );
}
function Dd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ka(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ka(e, t.context, !1),
    _u(e, t.containerInfo);
}
function ac(e, t, n, r, o) {
  return Zn(), Su(o), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var Is = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ls(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function jd(e, t, n) {
  var r = t.pendingProps,
    o = X.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    s;
  if (
    ((s = l) ||
      (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    b(X, o & 1),
    e === null)
  )
    return (
      Ts(t),
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
                : (i = Di(l, r, 0, null)),
              (e = fn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Ls(n)),
              (t.memoizedState = Is),
              e)
            : Iu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return n0(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: 'hidden', children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Xt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Xt(s, i)) : ((i = fn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Ls(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Is),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xt(i, { mode: 'visible', children: r.children })),
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
function Iu(e, t) {
  return (
    (t = Di({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Ro(e, t, n, r) {
  return (
    r !== null && Su(r),
    Jn(t, e.child, null, n),
    (e = Iu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function n0(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Wl(Error(C(422)))), Ro(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Di({ mode: 'visible', children: r.children }, o, 0, null)),
        (i = fn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, l),
        (t.child.memoizedState = Ls(l)),
        (t.memoizedState = Is),
        i);
  if (!(t.mode & 1)) return Ro(e, t, l, null);
  if (o.data === '$!') {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = Wl(i, r, void 0)), Ro(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ne || s)) {
    if (((r = pe), r !== null)) {
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
          ((i.retryLane = o), zt(e, o), at(r, e, o, -1));
    }
    return Bu(), (r = Wl(Error(C(421)))), Ro(e, t, l, r);
  }
  return o.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = m0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ue = Kt(o.nextSibling)),
      (We = t),
      (G = !0),
      (st = null),
      e !== null &&
        ((Xe[Ze++] = Et),
        (Xe[Ze++] = Pt),
        (Xe[Ze++] = pn),
        (Et = e.id),
        (Pt = e.overflow),
        (pn = t)),
      (t = Iu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function cc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Rs(e.return, t, n);
}
function Vl(e, t, n, r, o) {
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
function Bd(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Te(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cc(e, n, t);
        else if (e.tag === 19) cc(e, n, t);
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
  if ((b(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case 'forwards':
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && yi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Vl(t, !1, o, n, i);
        break;
      case 'backwards':
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && yi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Vl(t, !0, n, null, i);
        break;
      case 'together':
        Vl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Qo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Xt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function r0(e, t, n) {
  switch (t.tag) {
    case 3:
      Dd(t), Zn();
      break;
    case 5:
      pd(t);
      break;
    case 1:
      Le(t.type) && fi(t);
      break;
    case 4:
      _u(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      b(hi, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? jd(e, t, n)
          : (b(X, X.current & 1),
            (e = Ot(e, t, n)),
            e !== null ? e.sibling : null);
      b(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Bd(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        b(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Ad(e, t, n);
  }
  return Ot(e, t, n);
}
var Ud, As, Wd, Vd;
Ud = function (e, t) {
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
As = function () {};
Wd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), un(wt.current);
    var i = null;
    switch (n) {
      case 'input':
        (o = os(e, o)), (r = os(e, r)), (i = []);
        break;
      case 'select':
        (o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = []);
        break;
      case 'textarea':
        (o = ss(e, o)), (r = ss(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = ai);
    }
    as(n, r);
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
            (Fr.hasOwnProperty(a)
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
              (Fr.hasOwnProperty(a)
                ? (u != null && a === 'onScroll' && H('scroll', e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push('style', n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Vd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function gr(e, t) {
  if (!G)
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
function Ce(e) {
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
function o0(e, t, n) {
  var r = t.pendingProps;
  switch ((wu(t), t.tag)) {
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
      return Ce(t), null;
    case 1:
      return Le(t.type) && ci(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        K(Ie),
        K(_e),
        Ru(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (bs(st), (st = null)))),
        As(e, t),
        Ce(t),
        null
      );
    case 5:
      Tu(t);
      var o = un(Gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Ce(t), null;
        }
        if (((e = un(wt.current)), _o(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[Qr] = i), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              H('cancel', r), H('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              H('load', r);
              break;
            case 'video':
            case 'audio':
              for (o = 0; o < Er.length; o++) H(Er[o], r);
              break;
            case 'source':
              H('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              H('error', r), H('load', r);
              break;
            case 'details':
              H('toggle', r);
              break;
            case 'input':
              wa(r, i), H('invalid', r);
              break;
            case 'select':
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H('invalid', r);
              break;
            case 'textarea':
              xa(r, i), H('invalid', r);
          }
          as(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Po(r.textContent, s, e),
                    (o = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Po(r.textContent, s, e),
                    (o = ['children', '' + s]))
                : Fr.hasOwnProperty(l) &&
                  s != null &&
                  l === 'onScroll' &&
                  H('scroll', r);
            }
          switch (n) {
            case 'input':
              yo(r), Sa(r, i, !0);
              break;
            case 'textarea':
              yo(r), ka(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof i.onClick == 'function' && (r.onclick = ai);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = gf(n)),
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
            (e[gt] = t),
            (e[Qr] = r),
            Ud(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = cs(n, r)), n)) {
              case 'dialog':
                H('cancel', e), H('close', e), (o = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                H('load', e), (o = r);
                break;
              case 'video':
              case 'audio':
                for (o = 0; o < Er.length; o++) H(Er[o], e);
                o = r;
                break;
              case 'source':
                H('error', e), (o = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                H('error', e), H('load', e), (o = r);
                break;
              case 'details':
                H('toggle', e), (o = r);
                break;
              case 'input':
                wa(e, r), (o = os(e, r)), H('invalid', e);
                break;
              case 'option':
                o = r;
                break;
              case 'select':
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = J({}, r, { value: void 0 })),
                  H('invalid', e);
                break;
              case 'textarea':
                xa(e, r), (o = ss(e, r)), H('invalid', e);
                break;
              default:
                o = r;
            }
            as(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === 'style'
                  ? wf(e, u)
                  : i === 'dangerouslySetInnerHTML'
                  ? ((u = u ? u.__html : void 0), u != null && yf(e, u))
                  : i === 'children'
                  ? typeof u == 'string'
                    ? (n !== 'textarea' || u !== '') && Dr(e, u)
                    : typeof u == 'number' && Dr(e, '' + u)
                  : i !== 'suppressContentEditableWarning' &&
                    i !== 'suppressHydrationWarning' &&
                    i !== 'autoFocus' &&
                    (Fr.hasOwnProperty(i)
                      ? u != null && i === 'onScroll' && H('scroll', e)
                      : u != null && ou(e, i, u, l));
              }
            switch (n) {
              case 'input':
                yo(e), Sa(e, r, !1);
                break;
              case 'textarea':
                yo(e), ka(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + Zt(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == 'function' && (e.onclick = ai);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) Vd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(C(166));
        if (((n = un(Gr.current)), un(wt.current), _o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                Po(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Po(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return Ce(t), null;
    case 13:
      if (
        (K(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ue !== null && t.mode & 1 && !(t.flags & 128))
          ld(), Zn(), (t.flags |= 98560), (i = !1);
        else if (((i = _o(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(C(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(C(317));
            i[gt] = t;
          } else
            Zn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ce(t), (i = !1);
        } else st !== null && (bs(st), (st = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? ae === 0 && (ae = 3) : Bu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return (
        qn(), As(e, t), e === null && Hr(t.stateNode.containerInfo), Ce(t), null
      );
    case 10:
      return Cu(t.type._context), Ce(t), null;
    case 17:
      return Le(t.type) && ci(), Ce(t), null;
    case 19:
      if ((K(X), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) gr(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = yi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    gr(i, !1),
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
                return b(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            re() > tr &&
            ((t.flags |= 128), (r = !0), gr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = yi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              gr(i, !0),
              i.tail === null && i.tailMode === 'hidden' && !l.alternate && !G)
            )
              return Ce(t), null;
          } else
            2 * re() - i.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), gr(i, !1), (t.lanes = 4194304));
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
          (i.renderingStartTime = re()),
          (t.sibling = null),
          (n = X.current),
          b(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        ju(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Ce(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function i0(e, t) {
  switch ((wu(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && ci(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        K(Ie),
        K(_e),
        Ru(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Tu(t), null;
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Zn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(X), null;
    case 4:
      return qn(), null;
    case 10:
      return Cu(t.type._context), null;
    case 22:
    case 23:
      return ju(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var $o = !1,
  Pe = !1,
  l0 = typeof WeakSet == 'function' ? WeakSet : Set,
  R = null;
function jn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function Fs(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var fc = !1;
function s0(e, t) {
  if (((Ss = li), (e = Qf()), yu(e))) {
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
            h = e,
            d = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (o !== 0 && h.nodeType !== 3) || (s = l + o),
                h !== i || (r !== 0 && h.nodeType !== 3) || (u = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (d = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++a === o && (s = l),
                d === i && ++m === r && (u = l),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (xs = { focusedElem: e, selectionRange: n }, li = !1, R = t; R !== null; )
    if (((t = R), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (R = e);
    else
      for (; R !== null; ) {
        t = R;
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
                    P = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      P
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = '')
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (v) {
          ne(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (y = fc), (fc = !1), y;
}
function Mr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Fs(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Ai(e, t) {
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
function Ds(e) {
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
function bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[Qr], delete t[Es], delete t[Vm], delete t[bm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Hd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function dc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Hd(e.return)) return null;
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
function js(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ai));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (js(e, t, n), e = e.sibling; e !== null; ) js(e, t, n), (e = e.sibling);
}
function Bs(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Bs(e, t, n), e = e.sibling; e !== null; ) Bs(e, t, n), (e = e.sibling);
}
var ge = null,
  lt = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Kd(e, t, n), (n = n.sibling);
}
function Kd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == 'function')
    try {
      vt.onCommitFiberUnmount(Ri, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Pe || jn(n, t);
    case 6:
      var r = ge,
        o = lt;
      (ge = null),
        At(e, t, n),
        (ge = r),
        (lt = o),
        ge !== null &&
          (lt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (lt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? Al(e.parentNode, n)
              : e.nodeType === 1 && Al(e, n),
            Wr(e))
          : Al(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (o = lt),
        (ge = n.stateNode.containerInfo),
        (lt = !0),
        At(e, t, n),
        (ge = r),
        (lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Pe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Fs(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Pe &&
        (jn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          ne(n, t, s);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Pe = (r = Pe) || n.memoizedState !== null), At(e, t, n), (Pe = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function pc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new l0()),
      t.forEach(function (r) {
        var o = g0.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function ot(e, t) {
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
              (ge = s.stateNode), (lt = !1);
              break e;
            case 3:
              (ge = s.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (ge = s.stateNode.containerInfo), (lt = !0);
              break e;
          }
          s = s.return;
        }
        if (ge === null) throw Error(C(160));
        Kd(i, l, o), (ge = null), (lt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        ne(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Qd(t, e), (t = t.sibling);
}
function Qd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), dt(e), r & 4)) {
        try {
          Mr(3, e, e.return), Ai(3, e);
        } catch (g) {
          ne(e, e.return, g);
        }
        try {
          Mr(5, e, e.return);
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      break;
    case 1:
      ot(t, e), dt(e), r & 512 && n !== null && jn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        dt(e),
        r & 512 && n !== null && jn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Dr(o, '');
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === 'input' && i.type === 'radio' && i.name != null && hf(o, i),
              cs(s, l);
            var a = cs(s, i);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                h = u[l + 1];
              m === 'style'
                ? wf(o, h)
                : m === 'dangerouslySetInnerHTML'
                ? yf(o, h)
                : m === 'children'
                ? Dr(o, h)
                : ou(o, m, h, a);
            }
            switch (s) {
              case 'input':
                is(o, i);
                break;
              case 'textarea':
                mf(o, i);
                break;
              case 'select':
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Un(o, !!i.multiple, w, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Un(o, !!i.multiple, i.defaultValue, !0)
                      : Un(o, !!i.multiple, i.multiple ? [] : '', !1));
            }
            o[Qr] = i;
          } catch (g) {
            ne(e, e.return, g);
          }
      }
      break;
    case 6:
      if ((ot(t, e), dt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Wr(t.containerInfo);
        } catch (g) {
          ne(e, e.return, g);
        }
      break;
    case 4:
      ot(t, e), dt(e);
      break;
    case 13:
      ot(t, e),
        dt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Fu = re())),
        r & 4 && pc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Pe = (a = Pe) || m), ot(t, e), (Pe = a)) : ot(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (R = e, m = e.child; m !== null; ) {
            for (h = R = m; R !== null; ) {
              switch (((d = R), (w = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mr(4, d, d.return);
                  break;
                case 1:
                  jn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == 'function') {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      ne(r, n, g);
                    }
                  }
                  break;
                case 5:
                  jn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    mc(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = d), (R = w)) : mc(h);
            }
            m = m.sibling;
          }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                (o = h.stateNode),
                  a
                    ? ((i = o.style),
                      typeof i.setProperty == 'function'
                        ? i.setProperty('display', 'none', 'important')
                        : (i.display = 'none'))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty('display')
                          ? u.display
                          : null),
                      (s.style.display = vf('display', l)));
              } catch (g) {
                ne(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = a ? '' : h.memoizedProps;
              } catch (g) {
                ne(e, e.return, g);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), (h = h.return);
          }
          m === h && (m = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      ot(t, e), dt(e), r & 4 && pc(e);
      break;
    case 21:
      break;
    default:
      ot(t, e), dt(e);
  }
}
function dt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Hd(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (Dr(o, ''), (r.flags &= -33));
          var i = dc(e);
          Bs(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = dc(e);
          js(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      ne(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function u0(e, t, n) {
  (R = e), Yd(e);
}
function Yd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || $o;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Pe;
        s = $o;
        var a = Pe;
        if ((($o = l), (Pe = u) && !a))
          for (R = o; R !== null; )
            (l = R),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? gc(o)
                : u !== null
                ? ((u.return = l), (R = u))
                : gc(o);
        for (; i !== null; ) (R = i), Yd(i), (i = i.sibling);
        (R = o), ($o = s), (Pe = a);
      }
      hc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : hc(e);
  }
}
function hc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Pe || Ai(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Pe)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : it(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Za(t, i, r);
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
                Za(t, l, n);
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
                    var h = m.dehydrated;
                    h !== null && Wr(h);
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
              throw Error(C(163));
          }
        Pe || (t.flags & 512 && Ds(t));
      } catch (d) {
        ne(t, t.return, d);
      }
    }
    if (t === e) {
      R = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function mc(e) {
  for (; R !== null; ) {
    var t = R;
    if (t === e) {
      R = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (R = n);
      break;
    }
    R = t.return;
  }
}
function gc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ai(4, t);
          } catch (u) {
            ne(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ne(t, o, u);
            }
          }
          var i = t.return;
          try {
            Ds(t);
          } catch (u) {
            ne(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ds(t);
          } catch (u) {
            ne(t, l, u);
          }
      }
    } catch (u) {
      ne(t, t.return, u);
    }
    if (t === e) {
      R = null;
      break;
    }
    var s = t.sibling;
    if (s !== null) {
      (s.return = t.return), (R = s);
      break;
    }
    R = t.return;
  }
}
var a0 = Math.ceil,
  Si = Nt.ReactCurrentDispatcher,
  Lu = Nt.ReactCurrentOwner,
  qe = Nt.ReactCurrentBatchConfig,
  A = 0,
  pe = null,
  ie = null,
  we = 0,
  je = 0,
  Bn = en(0),
  ae = 0,
  qr = null,
  mn = 0,
  Fi = 0,
  Au = 0,
  Nr = null,
  Me = null,
  Fu = 0,
  tr = 1 / 0,
  kt = null,
  xi = !1,
  Us = null,
  Yt = null,
  zo = !1,
  Wt = null,
  ki = 0,
  Ir = 0,
  Ws = null,
  Yo = -1,
  Go = 0;
function Re() {
  return A & 6 ? re() : Yo !== -1 ? Yo : (Yo = re());
}
function Gt(e) {
  return e.mode & 1
    ? A & 2 && we !== 0
      ? we & -we
      : Km.transition !== null
      ? (Go === 0 && (Go = Of()), Go)
      : ((e = W),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Df(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Ir) throw ((Ir = 0), (Ws = null), Error(C(185)));
  io(e, n, r),
    (!(A & 2) || e !== pe) &&
      (e === pe && (!(A & 2) && (Fi |= n), ae === 4 && Bt(e, we)),
      Ae(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((tr = re() + 500), Ni && tn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Kh(e, t);
  var r = ii(e, e === pe ? we : 0);
  if (r === 0)
    n !== null && Pa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Pa(n), t === 1))
      e.tag === 0 ? Hm(yc.bind(null, e)) : rd(yc.bind(null, e)),
        Um(function () {
          !(A & 6) && tn();
        }),
        (n = null);
    else {
      switch (Mf(r)) {
        case 1:
          n = au;
          break;
        case 4:
          n = $f;
          break;
        case 16:
          n = oi;
          break;
        case 536870912:
          n = zf;
          break;
        default:
          n = oi;
      }
      n = np(n, Gd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Gd(e, t) {
  if (((Yo = -1), (Go = 0), A & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = ii(e, e === pe ? we : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ci(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var i = Zd();
    (pe !== e || we !== t) && ((kt = null), (tr = re() + 500), cn(e, t));
    do
      try {
        d0();
        break;
      } catch (s) {
        Xd(e, s);
      }
    while (1);
    ku(),
      (Si.current = i),
      (A = o),
      ie !== null ? (t = 0) : ((pe = null), (we = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = ms(e)), o !== 0 && ((r = o), (t = Vs(e, o)))), t === 1)
    )
      throw ((n = qr), cn(e, 0), Bt(e, r), Ae(e, re()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !c0(o) &&
          ((t = Ci(e, r)),
          t === 2 && ((i = ms(e)), i !== 0 && ((r = i), (t = Vs(e, i)))),
          t === 1))
      )
        throw ((n = qr), cn(e, 0), Bt(e, r), Ae(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          rn(e, Me, kt);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = Fu + 500 - re()), 10 < t))
          ) {
            if (ii(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = Cs(rn.bind(null, e, Me, kt), t);
            break;
          }
          rn(e, Me, kt);
          break;
        case 4:
          if ((Bt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - ut(r);
            (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
          }
          if (
            ((r = o),
            (r = re() - r),
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
                : 1960 * a0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Cs(rn.bind(null, e, Me, kt), r);
            break;
          }
          rn(e, Me, kt);
          break;
        case 5:
          rn(e, Me, kt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ae(e, re()), e.callbackNode === n ? Gd.bind(null, e) : null;
}
function Vs(e, t) {
  var n = Nr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = Ci(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && bs(t)),
    e
  );
}
function bs(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function c0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!ct(i(), o)) return !1;
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
function Bt(e, t) {
  for (
    t &= ~Au,
      t &= ~Fi,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ut(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function yc(e) {
  if (A & 6) throw Error(C(327));
  Kn();
  var t = ii(e, 0);
  if (!(t & 1)) return Ae(e, re()), null;
  var n = Ci(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ms(e);
    r !== 0 && ((t = r), (n = Vs(e, r)));
  }
  if (n === 1) throw ((n = qr), cn(e, 0), Bt(e, t), Ae(e, re()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rn(e, Me, kt),
    Ae(e, re()),
    null
  );
}
function Du(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((tr = re() + 500), Ni && tn());
  }
}
function gn(e) {
  Wt !== null && Wt.tag === 0 && !(A & 6) && Kn();
  var t = A;
  A |= 1;
  var n = qe.transition,
    r = W;
  try {
    if (((qe.transition = null), (W = 1), e)) return e();
  } finally {
    (W = r), (qe.transition = n), (A = t), !(A & 6) && tn();
  }
}
function ju() {
  (je = Bn.current), K(Bn);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bm(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((wu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ci();
          break;
        case 3:
          qn(), K(Ie), K(_e), Ru();
          break;
        case 5:
          Tu(r);
          break;
        case 4:
          qn();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          Cu(r.type._context);
          break;
        case 22:
        case 23:
          ju();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ie = e = Xt(e.current, null)),
    (we = je = t),
    (ae = 0),
    (qr = null),
    (Au = Fi = mn = 0),
    (Me = Nr = null),
    sn !== null)
  ) {
    for (t = 0; t < sn.length; t++)
      if (((n = sn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    sn = null;
  }
  return e;
}
function Xd(e, t) {
  do {
    var n = ie;
    try {
      if ((ku(), (Ho.current = wi), vi)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        vi = !1;
      }
      if (
        ((hn = 0),
        (fe = ue = Z = null),
        (Or = !1),
        (Xr = 0),
        (Lu.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (qr = t), (ie = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = we),
          (s.flags |= 32768),
          u !== null && typeof u == 'object' && typeof u.then == 'function')
        ) {
          var a = u,
            m = s,
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = oc(l);
          if (w !== null) {
            (w.flags &= -257),
              ic(w, l, s, i, t),
              w.mode & 1 && rc(i, a, t),
              (t = w),
              (u = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(u), (t.updateQueue = g);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              rc(i, a, t), Bu();
              break e;
            }
            u = Error(C(426));
          }
        } else if (G && s.mode & 1) {
          var P = oc(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              ic(P, l, s, i, t),
              Su(er(u, s));
            break e;
          }
        }
        (i = u = er(u, s)),
          ae !== 4 && (ae = 2),
          Nr === null ? (Nr = [i]) : Nr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Nd(i, u, t);
              Xa(i, f);
              break e;
            case 1:
              s = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == 'function' ||
                  (p !== null &&
                    typeof p.componentDidCatch == 'function' &&
                    (Yt === null || !Yt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = Id(i, s, t);
                Xa(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      qd(n);
    } catch (S) {
      (t = S), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Zd() {
  var e = Si.current;
  return (Si.current = wi), e === null ? wi : e;
}
function Bu() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    pe === null || (!(mn & 268435455) && !(Fi & 268435455)) || Bt(pe, we);
}
function Ci(e, t) {
  var n = A;
  A |= 2;
  var r = Zd();
  (pe !== e || we !== t) && ((kt = null), cn(e, t));
  do
    try {
      f0();
      break;
    } catch (o) {
      Xd(e, o);
    }
  while (1);
  if ((ku(), (A = n), (Si.current = r), ie !== null)) throw Error(C(261));
  return (pe = null), (we = 0), ae;
}
function f0() {
  for (; ie !== null; ) Jd(ie);
}
function d0() {
  for (; ie !== null && !Fh(); ) Jd(ie);
}
function Jd(e) {
  var t = tp(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? qd(e) : (ie = t),
    (Lu.current = null);
}
function qd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = i0(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    } else if (((n = o0(n, t, je)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ae === 0 && (ae = 5);
}
function rn(e, t, n) {
  var r = W,
    o = qe.transition;
  try {
    (qe.transition = null), (W = 1), p0(e, t, n, r);
  } finally {
    (qe.transition = o), (W = r);
  }
  return null;
}
function p0(e, t, n, r) {
  do Kn();
  while (Wt !== null);
  if (A & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Qh(e, i),
    e === pe && ((ie = pe = null), (we = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      zo ||
      ((zo = !0),
      np(oi, function () {
        return Kn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = qe.transition), (qe.transition = null);
    var l = W;
    W = 1;
    var s = A;
    (A |= 4),
      (Lu.current = null),
      s0(e, n),
      Qd(n, e),
      Nm(xs),
      (li = !!Ss),
      (xs = Ss = null),
      (e.current = n),
      u0(n),
      Dh(),
      (A = s),
      (W = l),
      (qe.transition = i);
  } else e.current = n;
  if (
    (zo && ((zo = !1), (Wt = e), (ki = o)),
    (i = e.pendingLanes),
    i === 0 && (Yt = null),
    Uh(n.stateNode),
    Ae(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (xi) throw ((xi = !1), (e = Us), (Us = null), e);
  return (
    ki & 1 && e.tag !== 0 && Kn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ws ? Ir++ : ((Ir = 0), (Ws = e))) : (Ir = 0),
    tn(),
    null
  );
}
function Kn() {
  if (Wt !== null) {
    var e = Mf(ki),
      t = qe.transition,
      n = W;
    try {
      if (((qe.transition = null), (W = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (ki = 0), A & 6)) throw Error(C(331));
        var o = A;
        for (A |= 4, R = e.current; R !== null; ) {
          var i = R,
            l = i.child;
          if (R.flags & 16) {
            var s = i.deletions;
            if (s !== null) {
              for (var u = 0; u < s.length; u++) {
                var a = s[u];
                for (R = a; R !== null; ) {
                  var m = R;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mr(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (R = h);
                  else
                    for (; R !== null; ) {
                      m = R;
                      var d = m.sibling,
                        w = m.return;
                      if ((bd(m), m === a)) {
                        R = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = w), (R = d);
                        break;
                      }
                      R = w;
                    }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var g = y.child;
                if (g !== null) {
                  y.child = null;
                  do {
                    var P = g.sibling;
                    (g.sibling = null), (g = P);
                  } while (g !== null);
                }
              }
              R = i;
            }
          }
          if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (R = l);
          else
            e: for (; R !== null; ) {
              if (((i = R), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mr(9, i, i.return);
                }
              var f = i.sibling;
              if (f !== null) {
                (f.return = i.return), (R = f);
                break e;
              }
              R = i.return;
            }
        }
        var c = e.current;
        for (R = c; R !== null; ) {
          l = R;
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (R = p);
          else
            e: for (l = c; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ai(9, s);
                  }
                } catch (S) {
                  ne(s, s.return, S);
                }
              if (s === l) {
                R = null;
                break e;
              }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (R = v);
                break e;
              }
              R = s.return;
            }
        }
        if (
          ((A = o), tn(), vt && typeof vt.onPostCommitFiberRoot == 'function')
        )
          try {
            vt.onPostCommitFiberRoot(Ri, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (W = n), (qe.transition = t);
    }
  }
  return !1;
}
function vc(e, t, n) {
  (t = er(n, t)),
    (t = Nd(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Re()),
    e !== null && (io(e, 1, t), Ae(e, t));
}
function ne(e, t, n) {
  if (e.tag === 3) vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (Yt === null || !Yt.has(r)))
        ) {
          (e = er(n, e)),
            (e = Id(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Re()),
            t !== null && (io(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function h0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (we & n) === n &&
      (ae === 4 || (ae === 3 && (we & 130023424) === we && 500 > re() - Fu)
        ? cn(e, 0)
        : (Au |= n)),
    Ae(e, t);
}
function ep(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = So), (So <<= 1), !(So & 130023424) && (So = 4194304))
      : (t = 1));
  var n = Re();
  (e = zt(e, t)), e !== null && (io(e, t, n), Ae(e, n));
}
function m0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ep(e, n);
}
function g0(e, t) {
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
      throw Error(C(314));
  }
  r !== null && r.delete(t), ep(e, n);
}
var tp;
tp = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), r0(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), G && t.flags & 1048576 && od(t, pi, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Qo(e, t), (e = t.pendingProps);
      var o = Xn(t, _e.current);
      Hn(t, n), (o = zu(null, t, r, e, o, n));
      var i = Ou();
      return (
        (t.flags |= 1),
        typeof o == 'object' &&
        o !== null &&
        typeof o.render == 'function' &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((i = !0), fi(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Pu(t),
            (o.updater = Ii),
            (t.stateNode = o),
            (o._reactInternals = t),
            zs(t, r, e, n),
            (t = Ns(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && vu(t), Te(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Qo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = v0(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = Ms(null, t, r, e, n);
            break e;
          case 1:
            t = uc(null, t, r, e, n);
            break e;
          case 11:
            t = lc(null, t, r, e, n);
            break e;
          case 14:
            t = sc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ''));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Ms(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        uc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Dd(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          ud(e, t),
          gi(t, r, null, n);
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
            (o = er(Error(C(423)), t)), (t = ac(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = er(Error(C(424)), t)), (t = ac(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = Kt(t.stateNode.containerInfo.firstChild),
                We = t,
                G = !0,
                st = null,
                n = dd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zn(), r === o)) {
            t = Ot(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        pd(t),
        e === null && Ts(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ks(r, o) ? (l = null) : i !== null && ks(r, i) && (t.flags |= 32),
        Fd(e, t),
        Te(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Ts(t), null;
    case 13:
      return jd(e, t, n);
    case 4:
      return (
        _u(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        lc(e, t, r, o, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          b(hi, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ct(i.value, l)) {
            if (i.children === o.children && !Ie.current) {
              t = Ot(e, t, n);
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
                      (u = _t(-1, n & -n)), (u.tag = 2);
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
                      Rs(i.return, n, t),
                      (s.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(C(341));
                (l.lanes |= n),
                  (s = l.alternate),
                  s !== null && (s.lanes |= n),
                  Rs(l, n, t),
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
        Te(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (o = et(o)),
        (r = r(o)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        sc(e, t, r, o, n)
      );
    case 15:
      return Ld(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Qo(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), fi(t)) : (e = !1),
        Hn(t, n),
        cd(t, r, o),
        zs(t, r, o, n),
        Ns(null, t, r, !0, e, n)
      );
    case 19:
      return Bd(e, t, n);
    case 22:
      return Ad(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function np(e, t) {
  return Rf(e, t);
}
function y0(e, t, n, r) {
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
function Je(e, t, n, r) {
  return new y0(e, t, n, r);
}
function Uu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function v0(e) {
  if (typeof e == 'function') return Uu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lu)) return 11;
    if (e === su) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Je(e.tag, t, e.key, e.mode)),
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
function Xo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == 'function')) Uu(e) && (l = 1);
  else if (typeof e == 'string') l = 5;
  else
    e: switch (e) {
      case zn:
        return fn(n.children, o, i, t);
      case iu:
        (l = 8), (o |= 8);
        break;
      case es:
        return (
          (e = Je(12, n, t, o | 2)), (e.elementType = es), (e.lanes = i), e
        );
      case ts:
        return (e = Je(13, n, t, o)), (e.elementType = ts), (e.lanes = i), e;
      case ns:
        return (e = Je(19, n, t, o)), (e.elementType = ns), (e.lanes = i), e;
      case ff:
        return Di(n, o, i, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case af:
              l = 10;
              break e;
            case cf:
              l = 9;
              break e;
            case lu:
              l = 11;
              break e;
            case su:
              l = 14;
              break e;
            case Ft:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ''));
    }
  return (
    (t = Je(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function fn(e, t, n, r) {
  return (e = Je(7, e, r, t)), (e.lanes = n), e;
}
function Di(e, t, n, r) {
  return (
    (e = Je(22, e, r, t)),
    (e.elementType = ff),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function bl(e, t, n) {
  return (e = Je(6, e, null, t)), (e.lanes = n), e;
}
function Hl(e, t, n) {
  return (
    (t = Je(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function w0(e, t, n, r, o) {
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
    (this.eventTimes = Pl(0)),
    (this.expirationTimes = Pl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Pl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Wu(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new w0(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = Je(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Pu(i),
    e
  );
}
function S0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function rp(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (wn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Le(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Le(n)) return nd(e, n, t);
  }
  return t;
}
function op(e, t, n, r, o, i, l, s, u) {
  return (
    (e = Wu(n, r, !0, e, o, i, l, s, u)),
    (e.context = rp(null)),
    (n = e.current),
    (r = Re()),
    (o = Gt(n)),
    (i = _t(r, o)),
    (i.callback = t ?? null),
    Qt(n, i, o),
    (e.current.lanes = o),
    io(e, o, r),
    Ae(e, r),
    e
  );
}
function ji(e, t, n, r) {
  var o = t.current,
    i = Re(),
    l = Gt(o);
  return (
    (n = rp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = _t(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(o, t, l)),
    e !== null && (at(e, o, l, i), bo(e, o, l)),
    l
  );
}
function Ei(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function wc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vu(e, t) {
  wc(e, t), (e = e.alternate) && wc(e, t);
}
function x0() {
  return null;
}
var ip =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function bu(e) {
  this._internalRoot = e;
}
Bi.prototype.render = bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  ji(e, t, null, null);
};
Bi.prototype.unmount = bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      ji(null, e, null, null);
    }),
      (t[$t] = null);
  }
};
function Bi(e) {
  this._internalRoot = e;
}
Bi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Lf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    jt.splice(n, 0, e), n === 0 && Ff(e);
  }
};
function Hu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ui(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Sc() {}
function k0(e, t, n, r, o) {
  if (o) {
    if (typeof r == 'function') {
      var i = r;
      r = function () {
        var a = Ei(l);
        i.call(a);
      };
    }
    var l = op(t, r, e, 0, null, !1, !1, '', Sc);
    return (
      (e._reactRootContainer = l),
      (e[$t] = l.current),
      Hr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == 'function') {
    var s = r;
    r = function () {
      var a = Ei(u);
      s.call(a);
    };
  }
  var u = Wu(e, 0, !1, null, null, !1, !1, '', Sc);
  return (
    (e._reactRootContainer = u),
    (e[$t] = u.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      ji(t, u, n, r);
    }),
    u
  );
}
function Wi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == 'function') {
      var s = o;
      o = function () {
        var u = Ei(l);
        s.call(u);
      };
    }
    ji(t, l, e, o);
  } else l = k0(n, t, e, o, r);
  return Ei(l);
}
Nf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Cr(t.pendingLanes);
        n !== 0 &&
          (cu(t, n | 1), Ae(t, re()), !(A & 6) && ((tr = re() + 500), tn()));
      }
      break;
    case 13:
      gn(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var o = Re();
          at(r, e, 1, o);
        }
      }),
        Vu(e, 1);
  }
};
fu = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = Re();
      at(t, e, 134217728, n);
    }
    Vu(e, 134217728);
  }
};
If = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = zt(e, t);
    if (n !== null) {
      var r = Re();
      at(n, e, t, r);
    }
    Vu(e, t);
  }
};
Lf = function () {
  return W;
};
Af = function (e, t) {
  var n = W;
  try {
    return (W = e), t();
  } finally {
    W = n;
  }
};
ds = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((is(e, n), (t = n.name), n.type === 'radio' && t != null)) {
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
            var o = Mi(r);
            if (!o) throw Error(C(90));
            pf(r), is(r, o);
          }
        }
      }
      break;
    case 'textarea':
      mf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
kf = Du;
Cf = gn;
var C0 = { usingClientEntryPoint: !1, Events: [so, In, Mi, Sf, xf, Du] },
  yr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  E0 = {
    bundleType: yr.bundleType,
    version: yr.version,
    rendererPackageName: yr.rendererPackageName,
    rendererConfig: yr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Nt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = _f(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: yr.findFiberByHostInstance || x0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var Oo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Oo.isDisabled && Oo.supportsFiber)
    try {
      (Ri = Oo.inject(E0)), (vt = Oo);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = C0;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Hu(t)) throw Error(C(200));
  return S0(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!Hu(e)) throw Error(C(299));
  var n = !1,
    r = '',
    o = ip;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Wu(e, 1, !1, null, null, n, !1, r, o)),
    (e[$t] = t.current),
    Hr(e.nodeType === 8 ? e.parentNode : e),
    new bu(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(C(188))
      : ((e = Object.keys(e).join(',')), Error(C(268, e)));
  return (e = _f(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return gn(e);
};
He.hydrate = function (e, t, n) {
  if (!Ui(t)) throw Error(C(200));
  return Wi(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!Hu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = '',
    l = ip;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = op(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[$t] = t.current),
    Hr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Bi(t);
};
He.render = function (e, t, n) {
  if (!Ui(t)) throw Error(C(200));
  return Wi(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Ui(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (gn(function () {
        Wi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[$t] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Du;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ui(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Wi(e, t, n, !1, r);
};
He.version = '18.2.0-next-9e3b772b8-20220608';
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
  t(), (e.exports = He);
})(xh);
var xc = Zl;
(Xl.createRoot = xc.createRoot), (Xl.hydrateRoot = xc.hydrateRoot);
const P0 = { black: '#000', white: '#fff' },
  eo = P0,
  _0 = {
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
  Cn = _0,
  T0 = {
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
  En = T0,
  R0 = {
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
  Pn = R0,
  $0 = {
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
  _n = $0,
  z0 = {
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
  Tn = z0,
  O0 = {
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
  vr = O0,
  M0 = {
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
  N0 = M0;
function O() {
  return (
    (O = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    O.apply(this, arguments)
  );
}
function on(e) {
  return e !== null && typeof e == 'object' && e.constructor === Object;
}
function lp(e) {
  if (!on(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = lp(e[n]);
    }),
    t
  );
}
function Tt(e, t, n = { clone: !0 }) {
  const r = n.clone ? O({}, e) : e;
  return (
    on(e) &&
      on(t) &&
      Object.keys(t).forEach((o) => {
        o !== '__proto__' &&
          (on(t[o]) && o in e && on(e[o])
            ? (r[o] = Tt(e[o], t[o], n))
            : n.clone
            ? (r[o] = on(t[o]) ? lp(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function nr(e) {
  let t = 'https://mui.com/production-error/?code=' + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return 'Minified MUI error #' + e + '; visit ' + t + ' for the full message.';
}
function ve(e) {
  if (typeof e != 'string') throw new Error(nr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function I0(e, t) {
  typeof e == 'function' ? e(t) : e && (e.current = t);
}
const L0 = typeof window < 'u' ? _.useLayoutEffect : _.useEffect,
  A0 = L0;
function Mo(e) {
  const t = _.useRef(e);
  return (
    A0(() => {
      t.current = e;
    }),
    _.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function kc(...e) {
  return _.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              I0(n, t);
            });
          },
    e
  );
}
let Vi = !0,
  Hs = !1,
  Cc;
const F0 = {
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
function D0(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === 'INPUT' && F0[t] && !e.readOnly) ||
    (n === 'TEXTAREA' && !e.readOnly) ||
    e.isContentEditable
  );
}
function j0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Vi = !0);
}
function Kl() {
  Vi = !1;
}
function B0() {
  this.visibilityState === 'hidden' && Hs && (Vi = !0);
}
function U0(e) {
  e.addEventListener('keydown', j0, !0),
    e.addEventListener('mousedown', Kl, !0),
    e.addEventListener('pointerdown', Kl, !0),
    e.addEventListener('touchstart', Kl, !0),
    e.addEventListener('visibilitychange', B0, !0);
}
function W0(e) {
  const { target: t } = e;
  try {
    return t.matches(':focus-visible');
  } catch {}
  return Vi || D0(t);
}
function V0() {
  const e = _.useCallback((o) => {
      o != null && U0(o.ownerDocument);
    }, []),
    t = _.useRef(!1);
  function n() {
    return t.current
      ? ((Hs = !0),
        window.clearTimeout(Cc),
        (Cc = window.setTimeout(() => {
          Hs = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return W0(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Ku(e, t) {
  const n = O({}, t);
  return (
    Object.keys(e).forEach((r) => {
      if (r.toString().match(/^(components|slots)$/)) n[r] = O({}, e[r], n[r]);
      else if (r.toString().match(/^(componentsProps|slotProps)$/)) {
        const o = e[r] || {},
          i = t[r];
        (n[r] = {}),
          !i || !Object.keys(i)
            ? (n[r] = o)
            : !o || !Object.keys(o)
            ? (n[r] = i)
            : ((n[r] = O({}, i)),
              Object.keys(o).forEach((l) => {
                n[r][l] = Ku(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Qu(e, t, n) {
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
const Ec = (e) => e,
  b0 = () => {
    let e = Ec;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Ec;
      },
    };
  },
  H0 = b0(),
  sp = H0,
  K0 = {
    active: 'active',
    checked: 'checked',
    completed: 'completed',
    disabled: 'disabled',
    error: 'error',
    expanded: 'expanded',
    focused: 'focused',
    focusVisible: 'focusVisible',
    required: 'required',
    selected: 'selected',
  };
function bi(e, t, n = 'Mui') {
  const r = K0[t];
  return r ? `${n}-${r}` : `${sp.generate(e)}-${t}`;
}
function Hi(e, t, n = 'Mui') {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = bi(e, o, n);
    }),
    r
  );
}
function Se(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function up(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Q0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Y0 = up(function (e) {
    return (
      Q0.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function G0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function X0(e) {
  var t = document.createElement('style');
  return (
    t.setAttribute('data-emotion', e.key),
    e.nonce !== void 0 && t.setAttribute('nonce', e.nonce),
    t.appendChild(document.createTextNode('')),
    t.setAttribute('data-s', ''),
    t
  );
}
var Z0 = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (o) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(o, i),
          r.tags.push(o);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(X0(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = G0(o);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else o.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Ee = '-ms-',
  Pi = '-moz-',
  D = '-webkit-',
  ap = 'comm',
  Yu = 'rule',
  Gu = 'decl',
  J0 = '@import',
  cp = '@keyframes',
  q0 = Math.abs,
  Ki = String.fromCharCode,
  eg = Object.assign;
function tg(e, t) {
  return ye(e, 0) ^ 45
    ? (((((((t << 2) ^ ye(e, 0)) << 2) ^ ye(e, 1)) << 2) ^ ye(e, 2)) << 2) ^
        ye(e, 3)
    : 0;
}
function fp(e) {
  return e.trim();
}
function ng(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function B(e, t, n) {
  return e.replace(t, n);
}
function Ks(e, t) {
  return e.indexOf(t);
}
function ye(e, t) {
  return e.charCodeAt(t) | 0;
}
function to(e, t, n) {
  return e.slice(t, n);
}
function ht(e) {
  return e.length;
}
function Xu(e) {
  return e.length;
}
function No(e, t) {
  return t.push(e), e;
}
function rg(e, t) {
  return e.map(t).join('');
}
var Qi = 1,
  rr = 1,
  dp = 0,
  Fe = 0,
  oe = 0,
  sr = '';
function Yi(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Qi,
    column: rr,
    length: l,
    return: '',
  };
}
function wr(e, t) {
  return eg(Yi('', null, null, '', null, null, 0), e, { length: -e.length }, t);
}
function og() {
  return oe;
}
function ig() {
  return (
    (oe = Fe > 0 ? ye(sr, --Fe) : 0), rr--, oe === 10 && ((rr = 1), Qi--), oe
  );
}
function Ve() {
  return (
    (oe = Fe < dp ? ye(sr, Fe++) : 0), rr++, oe === 10 && ((rr = 1), Qi++), oe
  );
}
function St() {
  return ye(sr, Fe);
}
function Zo() {
  return Fe;
}
function ao(e, t) {
  return to(sr, e, t);
}
function no(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function pp(e) {
  return (Qi = rr = 1), (dp = ht((sr = e))), (Fe = 0), [];
}
function hp(e) {
  return (sr = ''), e;
}
function Jo(e) {
  return fp(ao(Fe - 1, Qs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function lg(e) {
  for (; (oe = St()) && oe < 33; ) Ve();
  return no(e) > 2 || no(oe) > 3 ? '' : ' ';
}
function sg(e, t) {
  for (
    ;
    --t &&
    Ve() &&
    !(oe < 48 || oe > 102 || (oe > 57 && oe < 65) || (oe > 70 && oe < 97));

  );
  return ao(e, Zo() + (t < 6 && St() == 32 && Ve() == 32));
}
function Qs(e) {
  for (; Ve(); )
    switch (oe) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Qs(oe);
        break;
      case 40:
        e === 41 && Qs(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Fe;
}
function ug(e, t) {
  for (; Ve() && e + oe !== 47 + 10; )
    if (e + oe === 42 + 42 && St() === 47) break;
  return '/*' + ao(t, Fe - 1) + '*' + Ki(e === 47 ? e : Ve());
}
function ag(e) {
  for (; !no(St()); ) Ve();
  return ao(e, Fe);
}
function cg(e) {
  return hp(qo('', null, null, null, [''], (e = pp(e)), 0, [0], e));
}
function qo(e, t, n, r, o, i, l, s, u) {
  for (
    var a = 0,
      m = 0,
      h = l,
      d = 0,
      w = 0,
      y = 0,
      g = 1,
      P = 1,
      f = 1,
      c = 0,
      p = '',
      v = o,
      S = i,
      k = r,
      x = p;
    P;

  )
    switch (((y = c), (c = Ve()))) {
      case 40:
        if (y != 108 && ye(x, h - 1) == 58) {
          Ks((x += B(Jo(c), '&', '&\f')), '&\f') != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Jo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += lg(y);
        break;
      case 92:
        x += sg(Zo() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            No(fg(ug(Ve(), Zo()), t, n), u);
            break;
          default:
            x += '/';
        }
        break;
      case 123 * g:
        s[a++] = ht(x) * f;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            P = 0;
          case 59 + m:
            w > 0 &&
              ht(x) - h &&
              No(
                w > 32
                  ? _c(x + ';', r, n, h - 1)
                  : _c(B(x, ' ', '') + ';', r, n, h - 2),
                u
              );
            break;
          case 59:
            x += ';';
          default:
            if (
              (No((k = Pc(x, t, n, a, m, o, s, p, (v = []), (S = []), h)), i),
              c === 123)
            )
              if (m === 0) qo(x, t, k, k, v, i, h, s, S);
              else
                switch (d === 99 && ye(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    qo(
                      e,
                      k,
                      k,
                      r && No(Pc(e, k, k, 0, 0, o, s, p, o, (v = []), h), S),
                      o,
                      S,
                      h,
                      s,
                      r ? v : S
                    );
                    break;
                  default:
                    qo(x, k, k, k, [''], S, 0, s, S);
                }
        }
        (a = m = w = 0), (g = f = 1), (p = x = ''), (h = l);
        break;
      case 58:
        (h = 1 + ht(x)), (w = y);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && ig() == 125) continue;
        }
        switch (((x += Ki(c)), c * g)) {
          case 38:
            f = m > 0 ? 1 : ((x += '\f'), -1);
            break;
          case 44:
            (s[a++] = (ht(x) - 1) * f), (f = 1);
            break;
          case 64:
            St() === 45 && (x += Jo(Ve())),
              (d = St()),
              (m = h = ht((p = x += ag(Zo())))),
              c++;
            break;
          case 45:
            y === 45 && ht(x) == 2 && (g = 0);
        }
    }
  return i;
}
function Pc(e, t, n, r, o, i, l, s, u, a, m) {
  for (
    var h = o - 1, d = o === 0 ? i : [''], w = Xu(d), y = 0, g = 0, P = 0;
    y < r;
    ++y
  )
    for (var f = 0, c = to(e, h + 1, (h = q0((g = l[y])))), p = e; f < w; ++f)
      (p = fp(g > 0 ? d[f] + ' ' + c : B(c, /&\f/g, d[f]))) && (u[P++] = p);
  return Yi(e, t, n, o === 0 ? Yu : s, u, a, m);
}
function fg(e, t, n) {
  return Yi(e, t, n, ap, Ki(og()), to(e, 2, -2), 0);
}
function _c(e, t, n, r) {
  return Yi(e, t, n, Gu, to(e, 0, r), to(e, r + 1, -1), r);
}
function Qn(e, t) {
  for (var n = '', r = Xu(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || '';
  return n;
}
function dg(e, t, n, r) {
  switch (e.type) {
    case J0:
    case Gu:
      return (e.return = e.return || e.value);
    case ap:
      return '';
    case cp:
      return (e.return = e.value + '{' + Qn(e.children, r) + '}');
    case Yu:
      e.value = e.props.join(',');
  }
  return ht((n = Qn(e.children, r)))
    ? (e.return = e.value + '{' + n + '}')
    : '';
}
function pg(e) {
  var t = Xu(e);
  return function (n, r, o, i) {
    for (var l = '', s = 0; s < t; s++) l += e[s](n, r, o, i) || '';
    return l;
  };
}
function hg(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var mg = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = St()), o === 38 && i === 12 && (n[r] = 1), !no(i);

    )
      Ve();
    return ao(t, Fe);
  },
  gg = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (no(o)) {
        case 0:
          o === 38 && St() === 12 && (n[r] = 1), (t[r] += mg(Fe - 1, n, r));
          break;
        case 2:
          t[r] += Jo(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = St() === 58 ? '&\f' : ''), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ki(o);
      }
    while ((o = Ve()));
    return t;
  },
  yg = function (t, n) {
    return hp(gg(pp(t), n));
  },
  Tc = new WeakMap(),
  vg = function (t) {
    if (!(t.type !== 'rule' || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== 'rule';

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Tc.get(r)) &&
        !o
      ) {
        Tc.set(t, !0);
        for (
          var i = [], l = yg(n, i), s = r.props, u = 0, a = 0;
          u < l.length;
          u++
        )
          for (var m = 0; m < s.length; m++, a++)
            t.props[a] = i[u] ? l[u].replace(/&\f/g, s[m]) : s[m] + ' ' + l[u];
      }
    }
  },
  wg = function (t) {
    if (t.type === 'decl') {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ''), (t.value = ''));
    }
  };
function mp(e, t) {
  switch (tg(e, t)) {
    case 5103:
      return D + 'print-' + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return D + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return D + e + Pi + e + Ee + e + e;
    case 6828:
    case 4268:
      return D + e + Ee + e + e;
    case 6165:
      return D + e + Ee + 'flex-' + e + e;
    case 5187:
      return (
        D + e + B(e, /(\w+).+(:[^]+)/, D + 'box-$1$2' + Ee + 'flex-$1$2') + e
      );
    case 5443:
      return D + e + Ee + 'flex-item-' + B(e, /flex-|-self/, '') + e;
    case 4675:
      return (
        D +
        e +
        Ee +
        'flex-line-pack' +
        B(e, /align-content|flex-|-self/, '') +
        e
      );
    case 5548:
      return D + e + Ee + B(e, 'shrink', 'negative') + e;
    case 5292:
      return D + e + Ee + B(e, 'basis', 'preferred-size') + e;
    case 6060:
      return (
        D +
        'box-' +
        B(e, '-grow', '') +
        D +
        e +
        Ee +
        B(e, 'grow', 'positive') +
        e
      );
    case 4554:
      return D + B(e, /([^-])(transform)/g, '$1' + D + '$2') + e;
    case 6187:
      return (
        B(B(B(e, /(zoom-|grab)/, D + '$1'), /(image-set)/, D + '$1'), e, '') + e
      );
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, D + '$1$`$1');
    case 4968:
      return (
        B(
          B(e, /(.+:)(flex-)?(.*)/, D + 'box-pack:$3' + Ee + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        D +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, D + '$1$2') + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ht(e) - 1 - t > 6)
        switch (ye(e, t + 1)) {
          case 109:
            if (ye(e, t + 4) !== 45) break;
          case 102:
            return (
              B(
                e,
                /(.+:)(.+)-([^]+)/,
                '$1' +
                  D +
                  '$2-$3$1' +
                  Pi +
                  (ye(e, t + 3) == 108 ? '$3' : '$2-$3')
              ) + e
            );
          case 115:
            return ~Ks(e, 'stretch')
              ? mp(B(e, 'stretch', 'fill-available'), t) + e
              : e;
        }
      break;
    case 4949:
      if (ye(e, t + 1) !== 115) break;
    case 6444:
      switch (ye(e, ht(e) - 3 - (~Ks(e, '!important') && 10))) {
        case 107:
          return B(e, ':', ':' + D) + e;
        case 101:
          return (
            B(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                D +
                (ye(e, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                D +
                '$2$3$1' +
                Ee +
                '$2box$3'
            ) + e
          );
      }
      break;
    case 5936:
      switch (ye(e, t + 11)) {
        case 114:
          return D + e + Ee + B(e, /[svh]\w+-[tblr]{2}/, 'tb') + e;
        case 108:
          return D + e + Ee + B(e, /[svh]\w+-[tblr]{2}/, 'tb-rl') + e;
        case 45:
          return D + e + Ee + B(e, /[svh]\w+-[tblr]{2}/, 'lr') + e;
      }
      return D + e + Ee + e + e;
  }
  return e;
}
var Sg = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Gu:
          t.return = mp(t.value, t.length);
          break;
        case cp:
          return Qn([wr(t, { value: B(t.value, '@', '@' + D) })], o);
        case Yu:
          if (t.length)
            return rg(t.props, function (i) {
              switch (ng(i, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return Qn(
                    [wr(t, { props: [B(i, /:(read-\w+)/, ':' + Pi + '$1')] })],
                    o
                  );
                case '::placeholder':
                  return Qn(
                    [
                      wr(t, {
                        props: [B(i, /:(plac\w+)/, ':' + D + 'input-$1')],
                      }),
                      wr(t, { props: [B(i, /:(plac\w+)/, ':' + Pi + '$1')] }),
                      wr(t, { props: [B(i, /:(plac\w+)/, Ee + 'input-$1')] }),
                    ],
                    o
                  );
              }
              return '';
            });
      }
  },
  xg = [Sg],
  kg = function (t) {
    var n = t.key;
    if (n === 'css') {
      var r = document.querySelectorAll('style[data-emotion]:not([data-s])');
      Array.prototype.forEach.call(r, function (g) {
        var P = g.getAttribute('data-emotion');
        P.indexOf(' ') !== -1 &&
          (document.head.appendChild(g), g.setAttribute('data-s', ''));
      });
    }
    var o = t.stylisPlugins || xg,
      i = {},
      l,
      s = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var P = g.getAttribute('data-emotion').split(' '), f = 1;
            f < P.length;
            f++
          )
            i[P[f]] = !0;
          s.push(g);
        }
      );
    var u,
      a = [vg, wg];
    {
      var m,
        h = [
          dg,
          hg(function (g) {
            m.insert(g);
          }),
        ],
        d = pg(a.concat(o, h)),
        w = function (P) {
          return Qn(cg(P), d);
        };
      u = function (P, f, c, p) {
        (m = c),
          w(P ? P + '{' + f.styles + '}' : f.styles),
          p && (y.inserted[f.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new Z0({
        key: n,
        container: l,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: u,
    };
    return y.sheet.hydrate(s), y;
  },
  Ys = {},
  Cg = {
    get exports() {
      return Ys;
    },
    set exports(e) {
      Ys = e;
    },
  },
  V = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var he = typeof Symbol == 'function' && Symbol.for,
  Zu = he ? Symbol.for('react.element') : 60103,
  Ju = he ? Symbol.for('react.portal') : 60106,
  Gi = he ? Symbol.for('react.fragment') : 60107,
  Xi = he ? Symbol.for('react.strict_mode') : 60108,
  Zi = he ? Symbol.for('react.profiler') : 60114,
  Ji = he ? Symbol.for('react.provider') : 60109,
  qi = he ? Symbol.for('react.context') : 60110,
  qu = he ? Symbol.for('react.async_mode') : 60111,
  el = he ? Symbol.for('react.concurrent_mode') : 60111,
  tl = he ? Symbol.for('react.forward_ref') : 60112,
  nl = he ? Symbol.for('react.suspense') : 60113,
  Eg = he ? Symbol.for('react.suspense_list') : 60120,
  rl = he ? Symbol.for('react.memo') : 60115,
  ol = he ? Symbol.for('react.lazy') : 60116,
  Pg = he ? Symbol.for('react.block') : 60121,
  _g = he ? Symbol.for('react.fundamental') : 60117,
  Tg = he ? Symbol.for('react.responder') : 60118,
  Rg = he ? Symbol.for('react.scope') : 60119;
function Qe(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Zu:
        switch (((e = e.type), e)) {
          case qu:
          case el:
          case Gi:
          case Zi:
          case Xi:
          case nl:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case qi:
              case tl:
              case ol:
              case rl:
              case Ji:
                return e;
              default:
                return t;
            }
        }
      case Ju:
        return t;
    }
  }
}
function gp(e) {
  return Qe(e) === el;
}
V.AsyncMode = qu;
V.ConcurrentMode = el;
V.ContextConsumer = qi;
V.ContextProvider = Ji;
V.Element = Zu;
V.ForwardRef = tl;
V.Fragment = Gi;
V.Lazy = ol;
V.Memo = rl;
V.Portal = Ju;
V.Profiler = Zi;
V.StrictMode = Xi;
V.Suspense = nl;
V.isAsyncMode = function (e) {
  return gp(e) || Qe(e) === qu;
};
V.isConcurrentMode = gp;
V.isContextConsumer = function (e) {
  return Qe(e) === qi;
};
V.isContextProvider = function (e) {
  return Qe(e) === Ji;
};
V.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Zu;
};
V.isForwardRef = function (e) {
  return Qe(e) === tl;
};
V.isFragment = function (e) {
  return Qe(e) === Gi;
};
V.isLazy = function (e) {
  return Qe(e) === ol;
};
V.isMemo = function (e) {
  return Qe(e) === rl;
};
V.isPortal = function (e) {
  return Qe(e) === Ju;
};
V.isProfiler = function (e) {
  return Qe(e) === Zi;
};
V.isStrictMode = function (e) {
  return Qe(e) === Xi;
};
V.isSuspense = function (e) {
  return Qe(e) === nl;
};
V.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === Gi ||
    e === el ||
    e === Zi ||
    e === Xi ||
    e === nl ||
    e === Eg ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === ol ||
        e.$$typeof === rl ||
        e.$$typeof === Ji ||
        e.$$typeof === qi ||
        e.$$typeof === tl ||
        e.$$typeof === _g ||
        e.$$typeof === Tg ||
        e.$$typeof === Rg ||
        e.$$typeof === Pg))
  );
};
V.typeOf = Qe;
(function (e) {
  e.exports = V;
})(Cg);
var yp = Ys,
  $g = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  zg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  vp = {};
vp[yp.ForwardRef] = $g;
vp[yp.Memo] = zg;
var Og = !0;
function Mg(e, t, n) {
  var r = '';
  return (
    n.split(' ').forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ';') : (r += o + ' ');
    }),
    r
  );
}
var wp = function (t, n, r) {
    var o = t.key + '-' + n.name;
    (r === !1 || Og === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Ng = function (t, n, r) {
    wp(t, n, r);
    var o = t.key + '-' + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? '.' + o : '', i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Ig(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var Lg = {
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
  },
  Ag = /[A-Z]|^ms/g,
  Fg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Sp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Rc = function (t) {
    return t != null && typeof t != 'boolean';
  },
  Ql = up(function (e) {
    return Sp(e) ? e : e.replace(Ag, '-$&').toLowerCase();
  }),
  $c = function (t, n) {
    switch (t) {
      case 'animation':
      case 'animationName':
        if (typeof n == 'string')
          return n.replace(Fg, function (r, o, i) {
            return (mt = { name: o, styles: i, next: mt }), o;
          });
    }
    return Lg[t] !== 1 && !Sp(t) && typeof n == 'number' && n !== 0
      ? n + 'px'
      : n;
  };
function ro(e, t, n) {
  if (n == null) return '';
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case 'boolean':
      return '';
    case 'object': {
      if (n.anim === 1)
        return (mt = { name: n.name, styles: n.styles, next: mt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (mt = { name: r.name, styles: r.styles, next: mt }), (r = r.next);
        var o = n.styles + ';';
        return o;
      }
      return Dg(e, t, n);
    }
    case 'function': {
      if (e !== void 0) {
        var i = mt,
          l = n(e);
        return (mt = i), ro(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Dg(e, t, n) {
  var r = '';
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += ro(e, t, n[o]) + ';';
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != 'object')
        t != null && t[l] !== void 0
          ? (r += i + '{' + t[l] + '}')
          : Rc(l) && (r += Ql(i) + ':' + $c(i, l) + ';');
      else if (
        Array.isArray(l) &&
        typeof l[0] == 'string' &&
        (t == null || t[l[0]] === void 0)
      )
        for (var s = 0; s < l.length; s++)
          Rc(l[s]) && (r += Ql(i) + ':' + $c(i, l[s]) + ';');
      else {
        var u = ro(e, t, l);
        switch (i) {
          case 'animation':
          case 'animationName': {
            r += Ql(i) + ':' + u + ';';
            break;
          }
          default:
            r += i + '{' + u + '}';
        }
      }
    }
  return r;
}
var zc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  mt,
  xp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == 'object' &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = '';
    mt = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += ro(r, n, l)))
      : (i += l[0]);
    for (var s = 1; s < t.length; s++) (i += ro(r, n, t[s])), o && (i += l[s]);
    zc.lastIndex = 0;
    for (var u = '', a; (a = zc.exec(i)) !== null; ) u += '-' + a[1];
    var m = Ig(i) + u;
    return { name: m, styles: i, next: mt };
  },
  jg = function (t) {
    return t();
  },
  Bg = ma['useInsertionEffect'] ? ma['useInsertionEffect'] : !1,
  Ug = Bg || jg,
  kp = _.createContext(typeof HTMLElement < 'u' ? kg({ key: 'css' }) : null);
kp.Provider;
var Wg = function (t) {
    return _.forwardRef(function (n, r) {
      var o = _.useContext(kp);
      return t(n, o, r);
    });
  },
  Vg = _.createContext({});
function bg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return xp(t);
}
var ea = function () {
    var t = bg.apply(void 0, arguments),
      n = 'animation-' + t.name;
    return {
      name: n,
      styles: '@keyframes ' + n + '{' + t.styles + '}',
      anim: 1,
      toString: function () {
        return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
      },
    };
  },
  Hg = Y0,
  Kg = function (t) {
    return t !== 'theme';
  },
  Oc = function (t) {
    return typeof t == 'string' && t.charCodeAt(0) > 96 ? Hg : Kg;
  },
  Mc = function (t, n, r) {
    var o;
    if (n) {
      var i = n.shouldForwardProp;
      o =
        t.__emotion_forwardProp && i
          ? function (l) {
              return t.__emotion_forwardProp(l) && i(l);
            }
          : i;
    }
    return typeof o != 'function' && r && (o = t.__emotion_forwardProp), o;
  },
  Qg = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      wp(n, r, o),
      Ug(function () {
        return Ng(n, r, o);
      }),
      null
    );
  },
  Yg = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var s = Mc(t, n, r),
      u = s || Oc(o),
      a = !u('as');
    return function () {
      var m = arguments,
        h =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && h.push('label:' + i + ';'),
        m[0] == null || m[0].raw === void 0)
      )
        h.push.apply(h, m);
      else {
        h.push(m[0][0]);
        for (var d = m.length, w = 1; w < d; w++) h.push(m[w], m[0][w]);
      }
      var y = Wg(function (g, P, f) {
        var c = (a && g.as) || o,
          p = '',
          v = [],
          S = g;
        if (g.theme == null) {
          S = {};
          for (var k in g) S[k] = g[k];
          S.theme = _.useContext(Vg);
        }
        typeof g.className == 'string'
          ? (p = Mg(P.registered, v, g.className))
          : g.className != null && (p = g.className + ' ');
        var x = xp(h.concat(v), P.registered, S);
        (p += P.key + '-' + x.name), l !== void 0 && (p += ' ' + l);
        var T = a && s === void 0 ? Oc(c) : u,
          z = {};
        for (var $ in g) (a && $ === 'as') || (T($) && (z[$] = g[$]));
        return (
          (z.className = p),
          (z.ref = f),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(Qg, {
              cache: P,
              serialized: x,
              isStringTag: typeof c == 'string',
            }),
            _.createElement(c, z)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : 'Styled(' +
              (typeof o == 'string'
                ? o
                : o.displayName || o.name || 'Component') +
              ')'),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = h),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, 'toString', {
          value: function () {
            return '.' + l;
          },
        }),
        (y.withComponent = function (g, P) {
          return e(g, O({}, n, P, { shouldForwardProp: Mc(y, P, !0) })).apply(
            void 0,
            h
          );
        }),
        y
      );
    };
  },
  Gg = [
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
    'tspan',
  ],
  Gs = Yg.bind();
Gg.forEach(function (e) {
  Gs[e] = Gs(e);
});
const Xg = Gs;
/**
 * @mui/styled-engine v5.11.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function Cp(e, t) {
  return Xg(e, t);
}
const Zg = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Lr(e, t) {
  return t ? Tt(e, t, { clone: !1 }) : e;
}
const ta = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  Nc = {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: (e) => `@media (min-width:${ta[e]}px)`,
  };
function Mt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || Nc;
    return t.reduce((l, s, u) => ((l[i.up(i.keys[u])] = n(t[u])), l), {});
  }
  if (typeof t == 'object') {
    const i = r.breakpoints || Nc;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || ta).indexOf(s) !== -1) {
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
function il(e, t, n = !0) {
  if (!t || typeof t != 'string') return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split('.')
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split('.').reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function _i(e, t, n, r = n) {
  let o;
  return (
    typeof e == 'function'
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = il(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function U(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const s = l[t],
        u = l.theme,
        a = il(u, r) || {};
      return Mt(l, s, (h) => {
        let d = _i(a, o, h);
        return (
          h === d &&
            typeof h == 'string' &&
            (d = _i(a, o, `${t}${h === 'default' ? '' : ve(h)}`, h)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function ll(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Lr(o, t[i](r)) : o), {});
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
  Ic = { marginX: 'mx', marginY: 'my', paddingX: 'px', paddingY: 'py' },
  ry = ey((e) => {
    if (e.length > 2)
      if (Ic[e]) e = Ic[e];
      else return [e];
    const [t, n] = e.split(''),
      r = ty[t],
      o = ny[n] || '';
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  na = [
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
  ra = [
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
[...na, ...ra];
function co(e, t, n, r) {
  var o;
  const i = (o = il(e, t, !1)) != null ? o : n;
  return typeof i == 'number'
    ? (l) => (typeof l == 'string' ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == 'string' ? l : i[l])
    : typeof i == 'function'
    ? i
    : () => {};
}
function Ep(e) {
  return co(e, 'spacing', 8);
}
function fo(e, t) {
  if (typeof t == 'string' || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == 'number' ? -r : `-${r}`;
}
function oy(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = fo(t, n)), r), {});
}
function iy(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = ry(n),
    i = oy(o, r),
    l = e[n];
  return Mt(e, l, i);
}
function Pp(e, t) {
  const n = Ep(e.theme);
  return Object.keys(e)
    .map((r) => iy(e, t, r, n))
    .reduce(Lr, {});
}
function ee(e) {
  return Pp(e, na);
}
ee.propTypes = {};
ee.filterProps = na;
function te(e) {
  return Pp(e, ra);
}
te.propTypes = {};
te.filterProps = ra;
function yt(e) {
  return typeof e != 'number' ? e : `${e}px solid`;
}
const ly = U({ prop: 'border', themeKey: 'borders', transform: yt }),
  sy = U({ prop: 'borderTop', themeKey: 'borders', transform: yt }),
  uy = U({ prop: 'borderRight', themeKey: 'borders', transform: yt }),
  ay = U({ prop: 'borderBottom', themeKey: 'borders', transform: yt }),
  cy = U({ prop: 'borderLeft', themeKey: 'borders', transform: yt }),
  fy = U({ prop: 'borderColor', themeKey: 'palette' }),
  dy = U({ prop: 'borderTopColor', themeKey: 'palette' }),
  py = U({ prop: 'borderRightColor', themeKey: 'palette' }),
  hy = U({ prop: 'borderBottomColor', themeKey: 'palette' }),
  my = U({ prop: 'borderLeftColor', themeKey: 'palette' }),
  sl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = co(e.theme, 'shape.borderRadius', 4),
        n = (r) => ({ borderRadius: fo(t, r) });
      return Mt(e, e.borderRadius, n);
    }
    return null;
  };
sl.propTypes = {};
sl.filterProps = ['borderRadius'];
ll(ly, sy, uy, ay, cy, fy, dy, py, hy, my, sl);
const ul = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = (r) => ({ gap: fo(t, r) });
    return Mt(e, e.gap, n);
  }
  return null;
};
ul.propTypes = {};
ul.filterProps = ['gap'];
const al = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = (r) => ({ columnGap: fo(t, r) });
    return Mt(e, e.columnGap, n);
  }
  return null;
};
al.propTypes = {};
al.filterProps = ['columnGap'];
const cl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = co(e.theme, 'spacing', 8),
      n = (r) => ({ rowGap: fo(t, r) });
    return Mt(e, e.rowGap, n);
  }
  return null;
};
cl.propTypes = {};
cl.filterProps = ['rowGap'];
const gy = U({ prop: 'gridColumn' }),
  yy = U({ prop: 'gridRow' }),
  vy = U({ prop: 'gridAutoFlow' }),
  wy = U({ prop: 'gridAutoColumns' }),
  Sy = U({ prop: 'gridAutoRows' }),
  xy = U({ prop: 'gridTemplateColumns' }),
  ky = U({ prop: 'gridTemplateRows' }),
  Cy = U({ prop: 'gridTemplateAreas' }),
  Ey = U({ prop: 'gridArea' });
ll(ul, al, cl, gy, yy, vy, wy, Sy, xy, ky, Cy, Ey);
function Yn(e, t) {
  return t === 'grey' ? t : e;
}
const Py = U({ prop: 'color', themeKey: 'palette', transform: Yn }),
  _y = U({
    prop: 'bgcolor',
    cssProperty: 'backgroundColor',
    themeKey: 'palette',
    transform: Yn,
  }),
  Ty = U({ prop: 'backgroundColor', themeKey: 'palette', transform: Yn });
ll(Py, _y, Ty);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ry = U({ prop: 'width', transform: Be }),
  oa = (e) => {
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
            ta[n] ||
            Be(n),
        };
      };
      return Mt(e, e.maxWidth, t);
    }
    return null;
  };
oa.filterProps = ['maxWidth'];
const $y = U({ prop: 'minWidth', transform: Be }),
  zy = U({ prop: 'height', transform: Be }),
  Oy = U({ prop: 'maxHeight', transform: Be }),
  My = U({ prop: 'minHeight', transform: Be });
U({ prop: 'size', cssProperty: 'width', transform: Be });
U({ prop: 'size', cssProperty: 'height', transform: Be });
const Ny = U({ prop: 'boxSizing' });
ll(Ry, oa, $y, zy, Oy, My, Ny);
const Iy = {
    border: { themeKey: 'borders', transform: yt },
    borderTop: { themeKey: 'borders', transform: yt },
    borderRight: { themeKey: 'borders', transform: yt },
    borderBottom: { themeKey: 'borders', transform: yt },
    borderLeft: { themeKey: 'borders', transform: yt },
    borderColor: { themeKey: 'palette' },
    borderTopColor: { themeKey: 'palette' },
    borderRightColor: { themeKey: 'palette' },
    borderBottomColor: { themeKey: 'palette' },
    borderLeftColor: { themeKey: 'palette' },
    borderRadius: { themeKey: 'shape.borderRadius', style: sl },
    color: { themeKey: 'palette', transform: Yn },
    bgcolor: {
      themeKey: 'palette',
      cssProperty: 'backgroundColor',
      transform: Yn,
    },
    backgroundColor: { themeKey: 'palette', transform: Yn },
    p: { style: te },
    pt: { style: te },
    pr: { style: te },
    pb: { style: te },
    pl: { style: te },
    px: { style: te },
    py: { style: te },
    padding: { style: te },
    paddingTop: { style: te },
    paddingRight: { style: te },
    paddingBottom: { style: te },
    paddingLeft: { style: te },
    paddingX: { style: te },
    paddingY: { style: te },
    paddingInline: { style: te },
    paddingInlineStart: { style: te },
    paddingInlineEnd: { style: te },
    paddingBlock: { style: te },
    paddingBlockStart: { style: te },
    paddingBlockEnd: { style: te },
    m: { style: ee },
    mt: { style: ee },
    mr: { style: ee },
    mb: { style: ee },
    ml: { style: ee },
    mx: { style: ee },
    my: { style: ee },
    margin: { style: ee },
    marginTop: { style: ee },
    marginRight: { style: ee },
    marginBottom: { style: ee },
    marginLeft: { style: ee },
    marginX: { style: ee },
    marginY: { style: ee },
    marginInline: { style: ee },
    marginInlineStart: { style: ee },
    marginInlineEnd: { style: ee },
    marginBlock: { style: ee },
    marginBlockStart: { style: ee },
    marginBlockEnd: { style: ee },
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
    gap: { style: ul },
    rowGap: { style: cl },
    columnGap: { style: al },
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
    width: { transform: Be },
    maxWidth: { style: oa },
    minWidth: { transform: Be },
    height: { transform: Be },
    maxHeight: { transform: Be },
    minHeight: { transform: Be },
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
  fl = Iy;
function Ly(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Ay(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Fy() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: u = n, themeKey: a, transform: m, style: h } = s;
    if (r == null) return null;
    const d = il(o, a) || {};
    return h
      ? h(l)
      : Mt(l, r, (y) => {
          let g = _i(d, m, y);
          return (
            y === g &&
              typeof y == 'string' &&
              (g = _i(d, m, `${n}${y === 'default' ? '' : ve(y)}`, y)),
            u === !1 ? g : { [u]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : fl;
    function s(u) {
      let a = u;
      if (typeof u == 'function') a = u(i);
      else if (typeof u != 'object') return u;
      if (!a) return null;
      const m = Jg(i.breakpoints),
        h = Object.keys(m);
      let d = m;
      return (
        Object.keys(a).forEach((w) => {
          const y = Ay(a[w], i);
          if (y != null)
            if (typeof y == 'object')
              if (l[w]) d = Lr(d, e(w, y, i, l));
              else {
                const g = Mt({ theme: i }, y, (P) => ({ [w]: P }));
                Ly(g, y) ? (d[w] = t({ sx: y, theme: i })) : (d = Lr(d, g));
              }
            else d = Lr(d, e(w, y, i, l));
        }),
        qg(h, d)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const _p = Fy();
_p.filterProps = ['sx'];
const dl = _p,
  Dy = ['sx'],
  jy = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : fl;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Tp(e) {
  const { sx: t } = e,
    n = Se(e, Dy),
    { systemProps: r, otherProps: o } = jy(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == 'function'
      ? (i = (...l) => {
          const s = t(...l);
          return on(s) ? O({}, r, s) : r;
        })
      : (i = O({}, r, t)),
    O({}, o, { sx: i })
  );
}
function Rp(e) {
  var t,
    n,
    r = '';
  if (typeof e == 'string' || typeof e == 'number') r += e;
  else if (typeof e == 'object')
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Rp(e[t])) && (r && (r += ' '), (r += n));
    else for (t in e) e[t] && (r && (r += ' '), (r += t));
  return r;
}
function Oe() {
  for (var e, t, n = 0, r = ''; n < arguments.length; )
    (e = arguments[n++]) && (t = Rp(e)) && (r && (r += ' '), (r += t));
  return r;
}
const By = ['values', 'unit', 'step'],
  Uy = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => O({}, n, { [r.key]: r.val }), {})
    );
  };
function Wy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = 'px',
      step: r = 5,
    } = e,
    o = Se(e, By),
    i = Uy(t),
    l = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == 'number' ? t[d] : d}${n})`;
  }
  function u(d) {
    return `@media (max-width:${
      (typeof t[d] == 'number' ? t[d] : d) - r / 100
    }${n})`;
  }
  function a(d, w) {
    const y = l.indexOf(w);
    return `@media (min-width:${
      typeof t[d] == 'number' ? t[d] : d
    }${n}) and (max-width:${
      (y !== -1 && typeof t[l[y]] == 'number' ? t[l[y]] : w) - r / 100
    }${n})`;
  }
  function m(d) {
    return l.indexOf(d) + 1 < l.length ? a(d, l[l.indexOf(d) + 1]) : s(d);
  }
  function h(d) {
    const w = l.indexOf(d);
    return w === 0
      ? s(l[1])
      : w === l.length - 1
      ? u(l[w])
      : a(d, l[l.indexOf(d) + 1]).replace('@media', '@media not all and');
  }
  return O(
    {
      keys: l,
      values: i,
      up: s,
      down: u,
      between: a,
      only: m,
      not: h,
      unit: n,
    },
    o
  );
}
const Vy = { borderRadius: 4 },
  by = Vy;
function Hy(e = 8) {
  if (e.mui) return e;
  const t = Ep({ spacing: e }),
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
function ia(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = Se(e, Ky),
    s = Wy(n),
    u = Hy(o);
  let a = Tt(
    {
      breakpoints: s,
      direction: 'ltr',
      components: {},
      palette: O({ mode: 'light' }, r),
      spacing: u,
      shape: O({}, by, i),
    },
    l
  );
  return (
    (a = t.reduce((m, h) => Tt(m, h), a)),
    (a.unstable_sxConfig = O({}, fl, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (h) {
      return dl({ sx: h, theme: this });
    }),
    a
  );
}
const Qy = _.createContext(null),
  Yy = Qy;
function Gy() {
  return _.useContext(Yy);
}
function Xy(e) {
  return Object.keys(e).length === 0;
}
function Zy(e = null) {
  const t = Gy();
  return !t || Xy(t) ? e : t;
}
const Jy = ia();
function $p(e = Jy) {
  return Zy(e);
}
const qy = ['className', 'component'];
function e1(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = 'MuiBox-root',
      generateClassName: r,
    } = e,
    o = Cp('div', {
      shouldForwardProp: (l) => l !== 'theme' && l !== 'sx' && l !== 'as',
    })(dl);
  return _.forwardRef(function (s, u) {
    const a = $p(t),
      m = Tp(s),
      { className: h, component: d = 'div' } = m,
      w = Se(m, qy);
    return de(
      o,
      O({ as: d, ref: u, className: Oe(h, r ? r(n) : n), theme: a }, w)
    );
  });
}
const t1 = ['variant'];
function Lc(e) {
  return e.length === 0;
}
function zp(e) {
  const { variant: t } = e,
    n = Se(e, t1);
  let r = t || '';
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === 'color'
          ? (r += Lc(r) ? e[o] : ve(e[o]))
          : (r += `${Lc(r) ? o : ve(o)}${ve(e[o].toString())}`);
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
function Sr(e) {
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
        const i = zp(o.props);
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
          Object.keys(a.props).forEach((h) => {
            l[h] !== a.props[h] && e[h] !== a.props[h] && (m = !1);
          }),
            m && s.push(t[zp(a.props)]);
        }),
      s
    );
  };
function ei(e) {
  return e !== 'ownerState' && e !== 'theme' && e !== 'sx' && e !== 'as';
}
const a1 = ia();
function c1(e = {}) {
  const {
      defaultTheme: t = a1,
      rootShouldForwardProp: n = ei,
      slotShouldForwardProp: r = ei,
    } = e,
    o = (i) => {
      const l = Sr(i.theme) ? t : i.theme;
      return dl(O({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      Zg(i, (p) => p.filter((v) => !(v != null && v.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: a,
          skipSx: m,
          overridesResolver: h,
        } = l,
        d = Se(l, n1),
        w = a !== void 0 ? a : (u && u !== 'Root') || !1,
        y = m || !1;
      let g,
        P = ei;
      u === 'Root' ? (P = n) : u ? (P = r) : i1(i) && (P = void 0);
      const f = Cp(i, O({ shouldForwardProp: P, label: g }, d)),
        c = (p, ...v) => {
          const S = v
            ? v.map((z) =>
                typeof z == 'function' && z.__emotion_real !== z
                  ? ($) => {
                      let { theme: j } = $,
                        q = Se($, r1);
                      return z(O({ theme: Sr(j) ? t : j }, q));
                    }
                  : z
              )
            : [];
          let k = p;
          s &&
            h &&
            S.push((z) => {
              const $ = Sr(z.theme) ? t : z.theme,
                j = l1(s, $);
              if (j) {
                const q = {};
                return (
                  Object.entries(j).forEach(([le, ce]) => {
                    q[le] =
                      typeof ce == 'function' ? ce(O({}, z, { theme: $ })) : ce;
                  }),
                  h(z, q)
                );
              }
              return null;
            }),
            s &&
              !w &&
              S.push((z) => {
                const $ = Sr(z.theme) ? t : z.theme;
                return u1(z, s1(s, $), $, s);
              }),
            y || S.push(o);
          const x = S.length - v.length;
          if (Array.isArray(p) && x > 0) {
            const z = new Array(x).fill('');
            (k = [...p, ...z]), (k.raw = [...p.raw, ...z]);
          } else
            typeof p == 'function' &&
              p.__emotion_real !== p &&
              (k = (z) => {
                let { theme: $ } = z,
                  j = Se(z, o1);
                return p(O({ theme: Sr($) ? t : $ }, j));
              });
          return f(k, ...S);
        };
      return f.withConfig && (c.withConfig = f.withConfig), c;
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
    : Ku(t.components[n].defaultProps, r);
}
function d1({ props: e, name: t, defaultTheme: n }) {
  const r = $p(n);
  return f1({ theme: r, name: t, props: e });
}
function la(e, t = 0, n = 1) {
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
function yn(e) {
  if (e.type) return e;
  if (e.charAt(0) === '#') return yn(p1(e));
  const t = e.indexOf('('),
    n = e.substring(0, t);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(n) === -1)
    throw new Error(nr(9, e));
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
      throw new Error(nr(10, o));
  } else r = r.split(',');
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function pl(e) {
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
  e = yn(e);
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
    e.type === 'hsla' && ((s += 'a'), u.push(t[3])), pl({ type: s, values: u })
  );
}
function Ac(e) {
  e = yn(e);
  let t = e.type === 'hsl' || e.type === 'hsla' ? yn(h1(e)).values : e.values;
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
  const n = Ac(e),
    r = Ac(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function Io(e, t) {
  return (
    (e = yn(e)),
    (t = la(t)),
    (e.type === 'rgb' || e.type === 'hsl') && (e.type += 'a'),
    e.type === 'color' ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    pl(e)
  );
}
function g1(e, t) {
  if (((e = yn(e)), (t = la(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf('rgb') !== -1 || e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return pl(e);
}
function y1(e, t) {
  if (((e = yn(e)), (t = la(t)), e.type.indexOf('hsl') !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf('rgb') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf('color') !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return pl(e);
}
function v1(e, t) {
  return O(
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
  Fc = {
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: { paper: eo.white, default: eo.white },
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
  Yl = {
    text: {
      primary: eo.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: { paper: '#121212', default: '#121212' },
    action: {
      active: eo.white,
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
function Dc(e, t, n, r) {
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
    ? { main: Pn[200], light: Pn[50], dark: Pn[400] }
    : { main: Pn[700], light: Pn[400], dark: Pn[800] };
}
function x1(e = 'light') {
  return e === 'dark'
    ? { main: En[200], light: En[50], dark: En[400] }
    : { main: En[500], light: En[300], dark: En[700] };
}
function k1(e = 'light') {
  return e === 'dark'
    ? { main: Cn[500], light: Cn[300], dark: Cn[700] }
    : { main: Cn[700], light: Cn[400], dark: Cn[800] };
}
function C1(e = 'light') {
  return e === 'dark'
    ? { main: _n[400], light: _n[300], dark: _n[700] }
    : { main: _n[700], light: _n[500], dark: _n[900] };
}
function E1(e = 'light') {
  return e === 'dark'
    ? { main: Tn[400], light: Tn[300], dark: Tn[700] }
    : { main: Tn[800], light: Tn[500], dark: Tn[900] };
}
function P1(e = 'light') {
  return e === 'dark'
    ? { main: vr[400], light: vr[300], dark: vr[700] }
    : { main: '#ed6c02', light: vr[500], dark: vr[900] };
}
function _1(e) {
  const {
      mode: t = 'light',
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = Se(e, w1),
    i = e.primary || S1(t),
    l = e.secondary || x1(t),
    s = e.error || k1(t),
    u = e.info || C1(t),
    a = e.success || E1(t),
    m = e.warning || P1(t);
  function h(g) {
    return m1(g, Yl.text.primary) >= n ? Yl.text.primary : Fc.text.primary;
  }
  const d = ({
      color: g,
      name: P,
      mainShade: f = 500,
      lightShade: c = 300,
      darkShade: p = 700,
    }) => {
      if (
        ((g = O({}, g)),
        !g.main && g[f] && (g.main = g[f]),
        !g.hasOwnProperty('main'))
      )
        throw new Error(nr(11, P ? ` (${P})` : '', f));
      if (typeof g.main != 'string')
        throw new Error(nr(12, P ? ` (${P})` : '', JSON.stringify(g.main)));
      return (
        Dc(g, 'light', c, r),
        Dc(g, 'dark', p, r),
        g.contrastText || (g.contrastText = h(g.main)),
        g
      );
    },
    w = { dark: Yl, light: Fc };
  return Tt(
    O(
      {
        common: O({}, eo),
        mode: t,
        primary: d({ color: i, name: 'primary' }),
        secondary: d({
          color: l,
          name: 'secondary',
          mainShade: 'A400',
          lightShade: 'A200',
          darkShade: 'A700',
        }),
        error: d({ color: s, name: 'error' }),
        warning: d({ color: m, name: 'warning' }),
        info: d({ color: u, name: 'info' }),
        success: d({ color: a, name: 'success' }),
        grey: N0,
        contrastThreshold: n,
        getContrastText: h,
        augmentColor: d,
        tonalOffset: r,
      },
      w[t]
    ),
    o
  );
}
const T1 = [
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
function R1(e) {
  return Math.round(e * 1e5) / 1e5;
}
const jc = { textTransform: 'uppercase' },
  Bc = '"Roboto", "Helvetica", "Arial", sans-serif';
function $1(e, t) {
  const n = typeof t == 'function' ? t(e) : t,
    {
      fontFamily: r = Bc,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: u = 700,
      htmlFontSize: a = 16,
      allVariants: m,
      pxToRem: h,
    } = n,
    d = Se(n, T1),
    w = o / 14,
    y = h || ((f) => `${(f / a) * w}rem`),
    g = (f, c, p, v, S) =>
      O(
        { fontFamily: r, fontWeight: f, fontSize: y(c), lineHeight: p },
        r === Bc ? { letterSpacing: `${R1(v / c)}em` } : {},
        S,
        m
      ),
    P = {
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
      button: g(s, 14, 1.75, 0.4, jc),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, jc),
    };
  return Tt(
    O(
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
      P
    ),
    d,
    { clone: !1 }
  );
}
const z1 = 0.2,
  O1 = 0.14,
  M1 = 0.12;
function Y(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${z1})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${O1})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${M1})`,
  ].join(',');
}
const N1 = [
    'none',
    Y(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Y(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Y(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Y(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Y(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Y(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Y(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Y(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Y(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Y(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Y(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Y(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Y(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Y(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Y(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Y(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Y(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Y(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Y(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Y(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Y(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Y(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Y(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Y(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  I1 = N1,
  L1 = ['duration', 'easing', 'delay'],
  A1 = {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },
  F1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Uc(e) {
  return `${Math.round(e)}ms`;
}
function D1(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function j1(e) {
  const t = O({}, A1, e.easing),
    n = O({}, F1, e.duration);
  return O(
    {
      getAutoHeightDuration: D1,
      create: (o = ['all'], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: u = 0,
        } = i;
        return (
          Se(i, L1),
          (Array.isArray(o) ? o : [o])
            .map(
              (a) =>
                `${a} ${typeof l == 'string' ? l : Uc(l)} ${s} ${
                  typeof u == 'string' ? u : Uc(u)
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
  W1 = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];
function Op(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = Se(e, W1);
  if (e.vars) throw new Error(nr(18));
  const s = _1(r),
    u = ia(e);
  let a = Tt(u, {
    mixins: v1(u.breakpoints, n),
    palette: s,
    shadows: I1.slice(),
    typography: $1(s, i),
    transitions: j1(o),
    zIndex: O({}, U1),
  });
  return (
    (a = Tt(a, l)),
    (a = t.reduce((m, h) => Tt(m, h), a)),
    (a.unstable_sxConfig = O({}, fl, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (h) {
      return dl({ sx: h, theme: this });
    }),
    a
  );
}
const V1 = Op(),
  Mp = V1;
function hl({ props: e, name: t }) {
  return d1({ props: e, name: t, defaultTheme: Mp });
}
const Np = (e) => ei(e) && e !== 'classes',
  b1 = c1({ defaultTheme: Mp, rootShouldForwardProp: Np }),
  Sn = b1;
function Xs(e, t) {
  return (
    (Xs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Xs(e, t)
  );
}
function H1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Xs(e, t);
}
const Wc = Rn.createContext(null);
function K1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function sa(e, t) {
  var n = function (i) {
      return t && _.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      _.Children.map(e, function (o) {
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
function an(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function Y1(e, t) {
  return sa(e.children, function (n) {
    return _.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: an(n, 'appear', e),
      enter: an(n, 'enter', e),
      exit: an(n, 'exit', e),
    });
  });
}
function G1(e, t, n) {
  var r = sa(e.children),
    o = Q1(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (_.isValidElement(l)) {
        var s = i in t,
          u = i in r,
          a = t[i],
          m = _.isValidElement(a) && !a.props.in;
        u && (!s || m)
          ? (o[i] = _.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: an(l, 'exit', e),
              enter: an(l, 'enter', e),
            }))
          : !u && s && !m
          ? (o[i] = _.cloneElement(l, { in: !1 }))
          : u &&
            s &&
            _.isValidElement(a) &&
            (o[i] = _.cloneElement(l, {
              onExited: n.bind(null, l),
              in: a.props.in,
              exit: an(l, 'exit', e),
              enter: an(l, 'enter', e),
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
  ua = (function (e) {
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
        var l = sa(this.props.children);
        o.key in l ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (s) {
              var u = O({}, s.children);
              return delete u[o.key], { children: u };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          l = o.childFactory,
          s = Se(o, ['component', 'childFactory']),
          u = this.state.contextValue,
          a = X1(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Rn.createElement(Wc.Provider, { value: u }, a)
            : Rn.createElement(
                Wc.Provider,
                { value: u },
                Rn.createElement(i, s, a)
              )
        );
      }),
      t
    );
  })(Rn.Component);
ua.propTypes = {};
ua.defaultProps = Z1;
const J1 = ua;
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
    [m, h] = _.useState(!1),
    d = Oe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    w = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = Oe(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !s && !m && h(!0),
    _.useEffect(() => {
      if (!s && u != null) {
        const g = setTimeout(u, a);
        return () => {
          clearTimeout(g);
        };
      }
    }, [u, s, a]),
    de('span', {
      className: d,
      style: w,
      children: de('span', { className: y }),
    })
  );
}
const ev = Hi('MuiTouchRipple', [
    'root',
    'ripple',
    'rippleVisible',
    'ripplePulsate',
    'child',
    'childLeaving',
    'childPulsate',
  ]),
  Ge = ev,
  tv = ['center', 'classes', 'className'];
let ml = (e) => e,
  Vc,
  bc,
  Hc,
  Kc;
const Zs = 550,
  nv = 80,
  rv = ea(
    Vc ||
      (Vc = ml`
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
  ov = ea(
    bc ||
      (bc = ml`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  iv = ea(
    Hc ||
      (Hc = ml`
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
  lv = Sn('span', { name: 'MuiTouchRipple', slot: 'Root' })({
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
  sv = Sn(q1, { name: 'MuiTouchRipple', slot: 'Ripple' })(
    Kc ||
      (Kc = ml`
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
    Ge.rippleVisible,
    rv,
    Zs,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ge.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Ge.child,
    Ge.childLeaving,
    ov,
    Zs,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Ge.childPulsate,
    iv,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  uv = _.forwardRef(function (t, n) {
    const r = hl({ props: t, name: 'MuiTouchRipple' }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = Se(r, tv),
      [u, a] = _.useState([]),
      m = _.useRef(0),
      h = _.useRef(null);
    _.useEffect(() => {
      h.current && (h.current(), (h.current = null));
    }, [u]);
    const d = _.useRef(!1),
      w = _.useRef(null),
      y = _.useRef(null),
      g = _.useRef(null);
    _.useEffect(
      () => () => {
        clearTimeout(w.current);
      },
      []
    );
    const P = _.useCallback(
        (v) => {
          const {
            pulsate: S,
            rippleX: k,
            rippleY: x,
            rippleSize: T,
            cb: z,
          } = v;
          a(($) => [
            ...$,
            de(
              sv,
              {
                classes: {
                  ripple: Oe(i.ripple, Ge.ripple),
                  rippleVisible: Oe(i.rippleVisible, Ge.rippleVisible),
                  ripplePulsate: Oe(i.ripplePulsate, Ge.ripplePulsate),
                  child: Oe(i.child, Ge.child),
                  childLeaving: Oe(i.childLeaving, Ge.childLeaving),
                  childPulsate: Oe(i.childPulsate, Ge.childPulsate),
                },
                timeout: Zs,
                pulsate: S,
                rippleX: k,
                rippleY: x,
                rippleSize: T,
              },
              m.current
            ),
          ]),
            (m.current += 1),
            (h.current = z);
        },
        [i]
      ),
      f = _.useCallback(
        (v = {}, S = {}, k = () => {}) => {
          const {
            pulsate: x = !1,
            center: T = o || S.pulsate,
            fakeElement: z = !1,
          } = S;
          if ((v == null ? void 0 : v.type) === 'mousedown' && d.current) {
            d.current = !1;
            return;
          }
          (v == null ? void 0 : v.type) === 'touchstart' && (d.current = !0);
          const $ = z ? null : g.current,
            j = $
              ? $.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let q, le, ce;
          if (
            T ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            (q = Math.round(j.width / 2)), (le = Math.round(j.height / 2));
          else {
            const { clientX: nt, clientY: me } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
            (q = Math.round(nt - j.left)), (le = Math.round(me - j.top));
          }
          if (T)
            (ce = Math.sqrt((2 * j.width ** 2 + j.height ** 2) / 3)),
              ce % 2 === 0 && (ce += 1);
          else {
            const nt =
                Math.max(Math.abs(($ ? $.clientWidth : 0) - q), q) * 2 + 2,
              me =
                Math.max(Math.abs(($ ? $.clientHeight : 0) - le), le) * 2 + 2;
            ce = Math.sqrt(nt ** 2 + me ** 2);
          }
          v != null && v.touches
            ? y.current === null &&
              ((y.current = () => {
                P({
                  pulsate: x,
                  rippleX: q,
                  rippleY: le,
                  rippleSize: ce,
                  cb: k,
                });
              }),
              (w.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, nv)))
            : P({ pulsate: x, rippleX: q, rippleY: le, rippleSize: ce, cb: k });
        },
        [o, P]
      ),
      c = _.useCallback(() => {
        f({}, { pulsate: !0 });
      }, [f]),
      p = _.useCallback((v, S) => {
        if (
          (clearTimeout(w.current),
          (v == null ? void 0 : v.type) === 'touchend' && y.current)
        ) {
          y.current(),
            (y.current = null),
            (w.current = setTimeout(() => {
              p(v, S);
            }));
          return;
        }
        (y.current = null),
          a((k) => (k.length > 0 ? k.slice(1) : k)),
          (h.current = S);
      }, []);
    return (
      _.useImperativeHandle(n, () => ({ pulsate: c, start: f, stop: p }), [
        c,
        f,
        p,
      ]),
      de(
        lv,
        O({ className: Oe(Ge.root, i.root, l), ref: g }, s, {
          children: de(J1, { component: null, exit: !0, children: u }),
        })
      )
    );
  }),
  av = uv;
function cv(e) {
  return bi('MuiButtonBase', e);
}
const fv = Hi('MuiButtonBase', ['root', 'disabled', 'focusVisible']),
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
      l = Qu({ root: ['root', t && 'disabled', n && 'focusVisible'] }, cv, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  mv = Sn('button', {
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
  gv = _.forwardRef(function (t, n) {
    const r = hl({ props: t, name: 'MuiButtonBase' }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: s,
        component: u = 'button',
        disabled: a = !1,
        disableRipple: m = !1,
        disableTouchRipple: h = !1,
        focusRipple: d = !1,
        LinkComponent: w = 'a',
        onBlur: y,
        onClick: g,
        onContextMenu: P,
        onDragLeave: f,
        onFocus: c,
        onFocusVisible: p,
        onKeyDown: v,
        onKeyUp: S,
        onMouseDown: k,
        onMouseLeave: x,
        onMouseUp: T,
        onTouchEnd: z,
        onTouchMove: $,
        onTouchStart: j,
        tabIndex: q = 0,
        TouchRippleProps: le,
        touchRippleRef: ce,
        type: nt,
      } = r,
      me = Se(r, pv),
      Ye = _.useRef(null),
      E = _.useRef(null),
      M = kc(E, ce),
      { isFocusVisibleRef: N, onFocus: F, onBlur: Q, ref: xt } = V0(),
      [se, ft] = _.useState(!1);
    a && se && ft(!1),
      _.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ft(!0), Ye.current.focus();
          },
        }),
        []
      );
    const [De, It] = _.useState(!1);
    _.useEffect(() => {
      It(!0);
    }, []);
    const po = De && !m && !a;
    _.useEffect(() => {
      se && d && !m && De && E.current.pulsate();
    }, [m, d, se, De]);
    function rt(I, ca, Kp = h) {
      return Mo(
        (fa) => (ca && ca(fa), !Kp && E.current && E.current[I](fa), !0)
      );
    }
    const Lt = rt('start', k),
      xn = rt('stop', P),
      gl = rt('stop', f),
      yl = rt('stop', T),
      Ap = rt('stop', (I) => {
        se && I.preventDefault(), x && x(I);
      }),
      Fp = rt('start', j),
      Dp = rt('stop', z),
      jp = rt('stop', $),
      Bp = rt(
        'stop',
        (I) => {
          Q(I), N.current === !1 && ft(!1), y && y(I);
        },
        !1
      ),
      Up = Mo((I) => {
        Ye.current || (Ye.current = I.currentTarget),
          F(I),
          N.current === !0 && (ft(!0), p && p(I)),
          c && c(I);
      }),
      vl = () => {
        const I = Ye.current;
        return u && u !== 'button' && !(I.tagName === 'A' && I.href);
      },
      wl = _.useRef(!1),
      Wp = Mo((I) => {
        d &&
          !wl.current &&
          se &&
          E.current &&
          I.key === ' ' &&
          ((wl.current = !0),
          E.current.stop(I, () => {
            E.current.start(I);
          })),
          I.target === I.currentTarget &&
            vl() &&
            I.key === ' ' &&
            I.preventDefault(),
          v && v(I),
          I.target === I.currentTarget &&
            vl() &&
            I.key === 'Enter' &&
            !a &&
            (I.preventDefault(), g && g(I));
      }),
      Vp = Mo((I) => {
        d &&
          I.key === ' ' &&
          E.current &&
          se &&
          !I.defaultPrevented &&
          ((wl.current = !1),
          E.current.stop(I, () => {
            E.current.pulsate(I);
          })),
          S && S(I),
          g &&
            I.target === I.currentTarget &&
            vl() &&
            I.key === ' ' &&
            !I.defaultPrevented &&
            g(I);
      });
    let ho = u;
    ho === 'button' && (me.href || me.to) && (ho = w);
    const ur = {};
    ho === 'button'
      ? ((ur.type = nt === void 0 ? 'button' : nt), (ur.disabled = a))
      : (!me.href && !me.to && (ur.role = 'button'),
        a && (ur['aria-disabled'] = a));
    const bp = kc(n, xt, Ye),
      aa = O({}, r, {
        centerRipple: i,
        component: u,
        disabled: a,
        disableRipple: m,
        disableTouchRipple: h,
        focusRipple: d,
        tabIndex: q,
        focusVisible: se,
      }),
      Hp = hv(aa);
    return Pr(
      mv,
      O(
        {
          as: ho,
          className: Oe(Hp.root, s),
          ownerState: aa,
          onBlur: Bp,
          onClick: g,
          onContextMenu: xn,
          onFocus: Up,
          onKeyDown: Wp,
          onKeyUp: Vp,
          onMouseDown: Lt,
          onMouseLeave: Ap,
          onMouseUp: yl,
          onDragLeave: gl,
          onTouchEnd: Dp,
          onTouchMove: jp,
          onTouchStart: Fp,
          ref: bp,
          tabIndex: a ? -1 : q,
          type: nt,
        },
        ur,
        me,
        { children: [l, po ? de(av, O({ ref: M, center: i }, le)) : null] }
      )
    );
  }),
  yv = gv;
function vv(e) {
  return bi('MuiTypography', e);
}
Hi('MuiTypography', [
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
          e.align !== 'inherit' && `align${ve(t)}`,
          n && 'gutterBottom',
          r && 'noWrap',
          o && 'paragraph',
        ],
      };
    return Qu(s, vv, l);
  },
  xv = Sn('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== 'inherit' && t[`align${ve(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    O(
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
  Qc = {
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
  Ev = _.forwardRef(function (t, n) {
    const r = hl({ props: t, name: 'MuiTypography' }),
      o = Cv(r.color),
      i = Tp(O({}, r, { color: o })),
      {
        align: l = 'inherit',
        className: s,
        component: u,
        gutterBottom: a = !1,
        noWrap: m = !1,
        paragraph: h = !1,
        variant: d = 'body1',
        variantMapping: w = Qc,
      } = i,
      y = Se(i, wv),
      g = O({}, i, {
        align: l,
        color: o,
        className: s,
        component: u,
        gutterBottom: a,
        noWrap: m,
        paragraph: h,
        variant: d,
        variantMapping: w,
      }),
      P = u || (h ? 'p' : w[d] || Qc[d]) || 'span',
      f = Sv(g);
    return de(
      xv,
      O({ as: P, ref: n, ownerState: g, className: Oe(f.root, s) }, y)
    );
  }),
  Gl = Ev,
  Pv = Op(),
  _v = e1({
    defaultTheme: Pv,
    defaultClassName: 'MuiBox-root',
    generateClassName: sp.generate,
  }),
  Lo = _v;
function Tv(e) {
  return bi('MuiButton', e);
}
const Rv = Hi('MuiButton', [
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
  Ao = Rv,
  $v = _.createContext({}),
  zv = $v,
  Ov = [
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
  Mv = (e) => {
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
          `${i}${ve(t)}`,
          `size${ve(o)}`,
          `${i}Size${ve(o)}`,
          t === 'inherit' && 'colorInherit',
          n && 'disableElevation',
          r && 'fullWidth',
        ],
        label: ['label'],
        startIcon: ['startIcon', `iconSize${ve(o)}`],
        endIcon: ['endIcon', `iconSize${ve(o)}`],
      },
      u = Qu(s, Tv, l);
    return O({}, l, u);
  },
  Ip = (e) =>
    O(
      {},
      e.size === 'small' && { '& > *:nth-of-type(1)': { fontSize: 18 } },
      e.size === 'medium' && { '& > *:nth-of-type(1)': { fontSize: 20 } },
      e.size === 'large' && { '& > *:nth-of-type(1)': { fontSize: 22 } }
    ),
  Nv = Sn(yv, {
    shouldForwardProp: (e) => Np(e) || e === 'classes',
    name: 'MuiButton',
    slot: 'Root',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ve(n.color)}`],
        t[`size${ve(n.size)}`],
        t[`${n.variant}Size${ve(n.size)}`],
        n.color === 'inherit' && t.colorInherit,
        n.disableElevation && t.disableElevation,
        n.fullWidth && t.fullWidth,
      ];
    },
  })(
    ({ theme: e, ownerState: t }) => {
      var n, r;
      return O(
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
          '&:hover': O(
            {
              textDecoration: 'none',
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : Io(e.palette.text.primary, e.palette.action.hoverOpacity),
              '@media (hover: none)': { backgroundColor: 'transparent' },
            },
            t.variant === 'text' &&
              t.color !== 'inherit' && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Io(e.palette[t.color].main, e.palette.action.hoverOpacity),
                '@media (hover: none)': { backgroundColor: 'transparent' },
              },
            t.variant === 'outlined' &&
              t.color !== 'inherit' && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : Io(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
          '&:active': O(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Ao.focusVisible}`]: O(
            {},
            t.variant === 'contained' && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Ao.disabled}`]: O(
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
              : `1px solid ${Io(e.palette[t.color].main, 0.5)}`,
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
        [`&.${Ao.focusVisible}`]: { boxShadow: 'none' },
        '&:active': { boxShadow: 'none' },
        [`&.${Ao.disabled}`]: { boxShadow: 'none' },
      }
  ),
  Iv = Sn('span', {
    name: 'MuiButton',
    slot: 'StartIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${ve(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    O(
      { display: 'inherit', marginRight: 8, marginLeft: -4 },
      e.size === 'small' && { marginLeft: -2 },
      Ip(e)
    )
  ),
  Lv = Sn('span', {
    name: 'MuiButton',
    slot: 'EndIcon',
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${ve(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    O(
      { display: 'inherit', marginRight: -4, marginLeft: 8 },
      e.size === 'small' && { marginRight: -2 },
      Ip(e)
    )
  ),
  Av = _.forwardRef(function (t, n) {
    const r = _.useContext(zv),
      o = Ku(r, t),
      i = hl({ props: o, name: 'MuiButton' }),
      {
        children: l,
        color: s = 'primary',
        component: u = 'button',
        className: a,
        disabled: m = !1,
        disableElevation: h = !1,
        disableFocusRipple: d = !1,
        endIcon: w,
        focusVisibleClassName: y,
        fullWidth: g = !1,
        size: P = 'medium',
        startIcon: f,
        type: c,
        variant: p = 'text',
      } = i,
      v = Se(i, Ov),
      S = O({}, i, {
        color: s,
        component: u,
        disabled: m,
        disableElevation: h,
        disableFocusRipple: d,
        fullWidth: g,
        size: P,
        type: c,
        variant: p,
      }),
      k = Mv(S),
      x = f && de(Iv, { className: k.startIcon, ownerState: S, children: f }),
      T = w && de(Lv, { className: k.endIcon, ownerState: S, children: w });
    return Pr(
      Nv,
      O(
        {
          ownerState: S,
          className: Oe(r.className, k.root, a),
          component: u,
          disabled: m,
          focusRipple: !d,
          focusVisibleClassName: Oe(k.focusVisible, y),
          ref: n,
          type: c,
        },
        v,
        { classes: k, children: [x, l, T] }
      )
    );
  }),
  Fv = Av;
const Yc = (e) => {
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
  Gc = (e, t, n) => (
    console.log({
      selectedProducts: e,
      currentProductHandle: t,
      productSelection: n,
    }),
    n === 'all-products' ? !0 : e.some((r) => r.handle === t)
  );
class Xc {
  constructor(t, n, r, o) {
    ar(this, 'handleMouseDown', (t) => {
      (this.isDrawing = !0), (this.lastPoint = this.getMouse(t, this.canvas));
    });
    ar(this, 'handleTouchMove', (t) => {
      const n = this.getMouse(t, this.canvas),
        r = this.distanceBetween(this.lastPoint, n),
        o = this.angleBetween(this.lastPoint, n);
      let i, l;
      for (let s = 0; s < r; s++)
        (i = this.lastPoint ? this.lastPoint.x + Math.sin(o) * s : 0),
          (l = this.lastPoint ? this.lastPoint.y + Math.cos(o) * s : 0),
          (this.ctx.globalCompositeOperation = 'destination-out'),
          this.brushImage && this.props.customBrush
            ? this.ctx.drawImage(
                this.brushImage,
                i,
                l,
                this.props.customBrush.width,
                this.props.customBrush.height
              )
            : (this.ctx.beginPath(),
              this.ctx.arc(i, l, 30, 0, 2 * Math.PI, !1),
              this.ctx.fill());
      (this.lastPoint = n), this.handlePercentage(this.getFilledInPixels(32));
    });
    ar(this, 'handleMouseMove', (t) => {
      if (!this.isDrawing) return;
      const n = this.getMouse(t, this.canvas),
        r = this.distanceBetween(this.lastPoint, n),
        o = this.angleBetween(this.lastPoint, n);
      let i, l;
      for (let s = 0; s < r; s++)
        (i = this.lastPoint ? this.lastPoint.x + Math.sin(o) * s : 0),
          (l = this.lastPoint ? this.lastPoint.y + Math.cos(o) * s : 0),
          (this.ctx.globalCompositeOperation = 'destination-out'),
          this.brushImage && this.props.customBrush
            ? this.ctx.drawImage(
                this.brushImage,
                i,
                l,
                this.props.customBrush.width,
                this.props.customBrush.height
              )
            : (this.ctx.beginPath(),
              this.ctx.arc(i, l, 30, 0, 2 * Math.PI, !1),
              this.ctx.fill());
      (this.lastPoint = n), this.handlePercentage(this.getFilledInPixels(32));
    });
    ar(this, 'handleMouseUp', () => {
      this.isDrawing = !1;
    });
    (this.isDrawing = !1),
      (this.canvas = t),
      (this.width = r),
      (this.height = o),
      (this.lastPoint = null),
      (this.ctx = this.canvas.getContext('2d')),
      (this.image = new Image()),
      (this.image.crossOrigin = 'Anonymous'),
      (this.image.onload = () => {
        console.log('image loaded'),
          this.scratchedOnce || this.ctx.drawImage(this.image, 0, 0, r, o),
          (this.scratchCardContainer.style.display = 'flex');
      }),
      (this.image.src = n),
      (this.appURL = 'https://scratch-card-app.herokuapp.com'),
      (this.scReportSent = sessionStorage.getItem('scReportSent') === 'true'),
      (this.scratchCardContainer =
        document.querySelector('.sc-code-container')),
      (this.scratchedOnce = sessionStorage.getItem('scratchedOnce') === 'true');
  }
  async sendReport() {
    console.log('sending sc report');
    const { scReportSent: t } = this;
    if (t) return;
    const n =
        Shopify != null && Shopify.shop
          ? Shopify == null
            ? void 0
            : Shopify.shop
          : window.location.hostname,
      o = await (
        await fetch(`${this.appURL}/analytics/report?shop=${n}`)
      ).json();
    o.message === 'success' && (this.scReportSent = !0),
      console.log('report sent', o);
  }
  getFilledInPixels(t) {
    (!t || t < 1) && (t = 1);
    const n = 0,
      r = 0,
      { width: o } = this.canvas,
      { height: i } = this.canvas,
      l = this.ctx.getImageData(n, r, o, i),
      s = l.data.length / t;
    let u = 0;
    for (let a = 0; a < l.data.length; a += t)
      parseInt(l.data[a], 10) === 0 && u++;
    return Math.round((u / s) * 100);
  }
  getScratchCardState() {
    this.scratchedOnce &&
      (console.log('already scratched'),
      (this.canvas.style.transition = '1s'),
      (this.canvas.style.opacity = '0'),
      (this.canvas.style.zIndex = '0'));
  }
  getMouse(t, n) {
    const { top: r, left: o } = n.getBoundingClientRect(),
      i = window.pageYOffset || document.documentElement.scrollTop,
      l = window.pageXOffset || document.documentElement.scrollLeft;
    let s = 0,
      u = 0;
    return (
      t && t.pageX && t.pageY
        ? ((s = t.pageX - o - l), (u = t.pageY - r - i))
        : t &&
          t.touches &&
          ((s = t.touches[0].clientX - o - l),
          (u = t.touches[0].clientY - r - i)),
      { x: s, y: u }
    );
  }
  distanceBetween(t, n) {
    return t && n ? Math.sqrt((n.x - t.x) ** 2 + (n.y - t.y) ** 2) : 0;
  }
  angleBetween(t, n) {
    return t && n ? Math.atan2(n.x - t.x, n.y - t.y) : 0;
  }
  handlePercentage(t = 0) {
    if (this.isFinished) return;
    t > 70 &&
      ((this.canvas.style.transition = '1s'),
      (this.canvas.style.zIndex = '0'),
      (this.isFinished = !0),
      sessionStorage.getItem('scReportSent') !== 'true'
        ? (console.log('sending report'),
          sessionStorage.setItem('scReportSent', !0),
          this.sendReport())
        : console.log('report sent already'),
      sessionStorage.setItem('scratchedOnce', !0));
  }
  render() {
    this.canvas.addEventListener('mousedown', this.handleMouseDown),
      this.canvas.addEventListener('touchstart', this.handleTouchMove),
      this.canvas.addEventListener('mousemove', this.handleMouseMove),
      this.canvas.addEventListener('mouseup', this.handleMouseUp),
      this.canvas.addEventListener('touchmove', this.handleTouchMove),
      this.canvas.addEventListener('touchend', this.handleMouseUp);
  }
}
function Dv() {
  const [e, t] = _.useState(!1),
    [n, r] = _.useState(null),
    [o, i] = _.useState(100);
  let l = sessionStorage.getItem('scratchCardConfig');
  l = JSON.parse(l);
  const { shopConfig: s, discountCodes: u } = l,
    {
      'border-color': a,
      'bg-color': m,
      height: h,
      'text-color': d,
      'border-radius': w,
      'border-width': y,
      'font-size': g,
      'selected-title-font-style': P,
      title: f,
      'title-color': c,
      'title-font-size': p,
      'title-text-align-center': v,
      'sub-title': S,
      'sub-title-font-size': k,
      'sub-title-text-align-center': x,
      'selected-sub-title-font-style': T,
      'selected-scratch-card-style': z,
      'sub-title': $,
      'sub-title-color': j,
      'cusom-scratch-card-selected': q,
      'selected-custom-card-image': le,
      'selected-devices': ce,
    } = s,
    nt = Math.floor(Math.random() * 4);
  let me = sessionStorage.getItem('currentSessionScratchCardCode');
  me == null && sessionStorage.setItem('currentSessionScratchCardCode', nt);
  const Ye = u[Number(me)];
  let E = localStorage.getItem('productHandle');
  const M = s['product-selection'],
    N = s['selected-products'];
  let F = !0,
    Q = _.useRef(null);
  _.useEffect(() => (Q.current && i(Q.current.offsetWidth), () => {}), []);
  let xt = window.innerWidth,
    se = xt < 600;
  ce.includes('mobile') && se
    ? ((F = Gc(N, E, M)), console.log('mobile device', { willShowWidget: F }))
    : ce.includes('desktop') && !se
    ? ((F = Gc(N, E, M)), console.log('desktop device', { willShowWidget: F }))
    : ((F = !1), console.log('widget will not show')),
    console.log('sc app', { isMobile: se, deviceWidth: xt, willShowWidget: F }),
    _.useEffect(() => {
      if (F)
        if (q) {
          const Lt = document.querySelector('.ScratchCard__Canvas');
          new Xc(Lt, le, o, h).render(), r(le);
        } else {
          const Lt = `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${z
            .split(' ')
            .join('-')}.png`;
          r(
            `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${z
              .split(' ')
              .join('-')}.png`
          );
          const xn = document.querySelector('.ScratchCard__Canvas');
          new Xc(xn, Lt, o, h).render();
        }
    }, [o]);
  const ft = async () => {
      const Lt = (await fetch('/cart.js')).json(),
        xn = Lt.attributes;
      if (Lt.item_count === 0) {
        alert('Add one or more item in cart first!');
        return;
      }
      await fetch(`/discount/${Ye}`)
        .then((yl) => {
          t(!0),
            fetch('/cart/update.js', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                attributes: { ...xn, addedby: 'scratch-card-app' },
              }),
            });
        })
        .catch((yl) => t(!0));
    },
    De = Yc(P),
    It = Yc(T);
  let po = null;
  return (
    F &&
      (po = Pr(Lo, {
        className: 'scratch-card-app',
        ref: Q,
        children: [
          de(Gl, {
            sx: {
              ...De,
              width: '100%',
              fontSize: `${p}px`,
              textAlign: v && 'center',
              color: c,
            },
            children: f,
          }),
          de(Gl, {
            sx: {
              ...It,
              width: '100%',
              fontSize: `${k}px`,
              textAlign: x && 'center',
              color: j,
            },
            children: $,
          }),
          de(Lo, {
            className: 'root-container-sc',
            sx: {
              marginTop: '10px',
              marginBottom: '10px',
              border: `${y}px solid ${a}`,
              borderRadius: `${w}px`,
              width: `${o}px !important`,
              height: `${h}px !important`,
              zIndex: 4,
              backgroundColor: m,
              '.ScratchCard__Canvas': {
                borderRadius: `${w - 4}px`,
                MozBorderRadius: `${w}px`,
                overflow: 'hidden',
                zIndex: 1,
              },
            },
            children: Pr(Lo, {
              className: 'ScratchCard__Container',
              sx: { position: 'relative', height: '100%' },
              children: [
                de('canvas', {
                  width: o,
                  height: h,
                  id: 'scratch',
                  className: 'ScratchCard__Canvas',
                  style: {
                    position: 'absolute',
                    userSelect: 'none',
                    width: '100%',
                    height: '100%',
                  },
                }),
                Pr(Lo, {
                  className: 'sc-code-container',
                  sx: {
                    display: 'none',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                    margin: '0 auto',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: `${w - 4}px`,
                  },
                  children: [
                    de(Gl, {
                      variant: 'h6',
                      sx: { fontSize: `${g}px`, color: d },
                      children: Ye,
                    }),
                    de(Fv, {
                      variant: 'text',
                      sx: { color: d, borderRadius: 0 },
                      disabled: e,
                      onClick: ft,
                      children: e ? 'Applied On Checkout' : 'Apply Discount',
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      })),
    de(Sh, { children: po })
  );
}
async function jv() {
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
function Fo() {
  Xl.createRoot(document.getElementById('scratch-card-app-root')).render(
    de(Dv, {})
  );
}
function Do() {
  let t = null;
  const n = setInterval(() => {
    (t = document.querySelector('.ScratchCard__Canvas')),
      t && (console.log('canvas found', !1), clearInterval(n));
  }, 1e3);
}
let Lp = !1;
window.addEventListener('DOMContentLoaded', () => {
  (Lp = !0),
    jv().then(() => {
      const { shopConfig: e } = JSON.parse(
          sessionStorage.getItem('scratchCardConfig')
        ),
        { 'trigger-event': t, 'load-delay': n } = e;
      switch (
        (console.log(`trigger event is ${t} and load delay ${n} second`), t)
      ) {
        case 'onload':
          console.log('render on load'), Fo(), setTimeout(Do(), 0);
          break;
        case 'after-interval':
          setTimeout(() => {
            console.log('rendering after', n), Fo(), setTimeout(Do(), 0);
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
                  Fo(),
                  setTimeout(Do(), 0));
              },
              { once: !0 }
            ),
            window.innerWidth < 700 &&
              (console.log('mobile device, exit intent wont work'),
              Fo(),
              setTimeout(Do(), 0));
          break;
      }
    });
});
window.onload = function () {
  if (!Lp) {
    console.log('load event not fired! firing now====>>>'),
      console.log('======= INIT :: SCRATCH-CARD-APP =======');
    const e = new Event('DOMContentLoaded');
    dispatchEvent(e);
  }
};
