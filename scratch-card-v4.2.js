function Vp(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
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
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const l of i.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerpolicy && (i.referrerPolicy = o.referrerpolicy),
      o.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
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
function bp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Nr = {},
  Hp = {
    get exports() {
      return Nr;
    },
    set exports(e) {
      Nr = e;
    },
  },
  xi = {},
  _ = {},
  Kp = {
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
 */ var to = Symbol.for("react.element"),
  Qp = Symbol.for("react.portal"),
  Gp = Symbol.for("react.fragment"),
  Yp = Symbol.for("react.strict_mode"),
  Xp = Symbol.for("react.profiler"),
  Zp = Symbol.for("react.provider"),
  Jp = Symbol.for("react.context"),
  qp = Symbol.for("react.forward_ref"),
  eh = Symbol.for("react.suspense"),
  th = Symbol.for("react.memo"),
  nh = Symbol.for("react.lazy"),
  aa = Symbol.iterator;
function rh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (aa && e[aa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Kc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Qc = Object.assign,
  Gc = {};
function rr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Kc);
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
rr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yc() {}
Yc.prototype = rr.prototype;
function Gs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Kc);
}
var Ys = (Gs.prototype = new Yc());
Ys.constructor = Gs;
Qc(Ys, rr.prototype);
Ys.isPureReactComponent = !0;
var ca = Array.isArray,
  Xc = Object.prototype.hasOwnProperty,
  Xs = { current: null },
  Zc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Xc.call(t, r) && !Zc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: to,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Xs.current,
  };
}
function oh(e, t) {
  return {
    $$typeof: to,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === to;
}
function ih(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var fa = /\/+/g;
function hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? ih("" + e.key)
    : t.toString(36);
}
function Mo(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var l = !1;
  if (e === null) l = !0;
  else
    switch (i) {
      case "string":
      case "number":
        l = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case to:
          case Qp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + hl(l, 0) : r),
      ca(o)
        ? ((n = ""),
          e != null && (n = e.replace(fa, "$&/") + "/"),
          Mo(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Zs(o) &&
            (o = oh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(fa, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), ca(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + hl(i, s);
      l += Mo(i, t, n, u, o);
    }
  else if (((u = rh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + hl(i, s++)), (l += Mo(i, t, n, u, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return l;
}
function co(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Mo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function lh(e) {
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
  No = { transition: null },
  sh = {
    ReactCurrentDispatcher: $e,
    ReactCurrentBatchConfig: No,
    ReactCurrentOwner: Xs,
  };
L.Children = {
  map: co,
  forEach: function (e, t, n) {
    co(
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
      co(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      co(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Zs(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = rr;
L.Fragment = Gp;
L.Profiler = Xp;
L.PureComponent = Gs;
L.StrictMode = Yp;
L.Suspense = eh;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sh;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Qc({}, e.props),
    o = e.key,
    i = e.ref,
    l = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (l = Xs.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps;
    for (u in t)
      Xc.call(t, u) &&
        !Zc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: to, type: e.type, key: o, ref: i, props: r, _owner: l };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: Jp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Zp, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = Jc;
L.createFactory = function (e) {
  var t = Jc.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: qp, render: e };
};
L.isValidElement = Zs;
L.lazy = function (e) {
  return { $$typeof: nh, _payload: { _status: -1, _result: e }, _init: lh };
};
L.memo = function (e, t) {
  return { $$typeof: th, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = No.transition;
  No.transition = {};
  try {
    e();
  } finally {
    No.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
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
L.version = "18.2.0";
(function (e) {
  e.exports = L;
})(Kp);
const Pt = bp(_),
  da = Vp({ __proto__: null, default: Pt }, [_]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uh = _,
  ah = Symbol.for("react.element"),
  ch = Symbol.for("react.fragment"),
  fh = Object.prototype.hasOwnProperty,
  dh = uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ph = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) fh.call(t, r) && !ph.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: ah,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: dh.current,
  };
}
xi.Fragment = ch;
xi.jsx = qc;
xi.jsxs = qc;
(function (e) {
  e.exports = xi;
})(Hp);
const hh = Nr.Fragment,
  se = Nr.jsx,
  Go = Nr.jsxs;
var Hl = {},
  Kl = {},
  mh = {
    get exports() {
      return Kl;
    },
    set exports(e) {
      Kl = e;
    },
  },
  He = {},
  Ql = {},
  gh = {
    get exports() {
      return Ql;
    },
    set exports(e) {
      Ql = e;
    },
  },
  ef = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(E, N) {
    var M = E.length;
    E.push(N);
    e: for (; 0 < M; ) {
      var V = (M - 1) >>> 1,
        ne = E[V];
      if (0 < o(ne, N)) (E[V] = N), (E[M] = ne), (M = V);
      else break e;
    }
  }
  function n(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var N = E[0],
      M = E.pop();
    if (M !== N) {
      E[0] = M;
      e: for (var V = 0, ne = E.length, xt = ne >>> 1; V < xt; ) {
        var he = 2 * (V + 1) - 1,
          ft = E[he],
          De = he + 1,
          kt = E[De];
        if (0 > o(ft, M))
          De < ne && 0 > o(kt, ft)
            ? ((E[V] = kt), (E[De] = M), (V = De))
            : ((E[V] = ft), (E[he] = M), (V = he));
        else if (De < ne && 0 > o(kt, M)) (E[V] = kt), (E[De] = M), (V = De);
        else break e;
      }
    }
    return N;
  }
  function o(E, N) {
    var M = E.sortIndex - N.sortIndex;
    return M !== 0 ? M : E.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
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
    d = 3,
    w = !1,
    y = !1,
    g = !1,
    P = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(E) {
    for (var N = n(a); N !== null; ) {
      if (N.callback === null) r(a);
      else if (N.startTime <= E)
        r(a), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(a);
    }
  }
  function v(E) {
    if (((g = !1), h(E), !y))
      if (n(u) !== null) (y = !0), _e(S);
      else {
        var N = n(a);
        N !== null && rt(v, N.startTime - E);
      }
  }
  function S(E, N) {
    (y = !1), g && ((g = !1), f(T), (T = -1)), (w = !0);
    var M = d;
    try {
      for (
        h(N), p = n(u);
        p !== null && (!(p.expirationTime > N) || (E && !D()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (d = p.priorityLevel);
          var ne = V(p.expirationTime <= N);
          (N = e.unstable_now()),
            typeof ne == "function" ? (p.callback = ne) : p === n(u) && r(u),
            h(N);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var xt = !0;
      else {
        var he = n(a);
        he !== null && rt(v, he.startTime - N), (xt = !1);
      }
      return xt;
    } finally {
      (p = null), (d = M), (w = !1);
    }
  }
  var k = !1,
    x = null,
    T = -1,
    z = 5,
    $ = -1;
  function D() {
    return !(e.unstable_now() - $ < z);
  }
  function Y() {
    if (x !== null) {
      var E = e.unstable_now();
      $ = E;
      var N = !0;
      try {
        N = x(!0, E);
      } finally {
        N ? ce() : ((k = !1), (x = null));
      }
    } else k = !1;
  }
  var ce;
  if (typeof c == "function")
    ce = function () {
      c(Y);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      Ge = le.port2;
    (le.port1.onmessage = Y),
      (ce = function () {
        Ge.postMessage(null);
      });
  } else
    ce = function () {
      P(Y, 0);
    };
  function _e(E) {
    (x = E), k || ((k = !0), ce());
  }
  function rt(E, N) {
    T = P(function () {
      E(e.unstable_now());
    }, N);
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
      y || w || ((y = !0), _e(S));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
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
          var N = 3;
          break;
        default:
          N = d;
      }
      var M = d;
      d = N;
      try {
        return E();
      } finally {
        d = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, N) {
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
      var M = d;
      d = E;
      try {
        return N();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (E, N, M) {
      var V = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? V + M : V))
          : (M = V),
        E)
      ) {
        case 1:
          var ne = -1;
          break;
        case 2:
          ne = 250;
          break;
        case 5:
          ne = 1073741823;
          break;
        case 4:
          ne = 1e4;
          break;
        default:
          ne = 5e3;
      }
      return (
        (ne = M + ne),
        (E = {
          id: m++,
          callback: N,
          priorityLevel: E,
          startTime: M,
          expirationTime: ne,
          sortIndex: -1,
        }),
        M > V
          ? ((E.sortIndex = M),
            t(a, E),
            n(u) === null &&
              E === n(a) &&
              (g ? (f(T), (T = -1)) : (g = !0), rt(v, M - V)))
          : ((E.sortIndex = ne), t(u, E), y || w || ((y = !0), _e(S))),
        E
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (E) {
      var N = d;
      return function () {
        var M = d;
        d = N;
        try {
          return E.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})(ef);
(function (e) {
  e.exports = ef;
})(gh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf = _,
  be = Ql;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var nf = new Set(),
  Ir = {};
function wn(e, t) {
  Gn(e, t), Gn(e + "Capture", t);
}
function Gn(e, t) {
  for (Ir[e] = t, e = 0; e < t.length; e++) nf.add(t[e]);
}
var zt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  yh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  pa = {},
  ha = {};
function vh(e) {
  return Gl.call(ha, e)
    ? !0
    : Gl.call(pa, e)
    ? !1
    : yh.test(e)
    ? (ha[e] = !0)
    : ((pa[e] = !0), !1);
}
function wh(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Sh(e, t, n, r) {
  if (t === null || typeof t > "u" || wh(e, t, n, r)) return !0;
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
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new ze(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new ze(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new ze(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new ze(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new ze(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new ze(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new ze(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new ze(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new ze(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function qs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, qs);
    Se[t] = new ze(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, qs);
    Se[t] = new ze(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Js, qs);
  Se[t] = new ze(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new ze(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new ze(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new ze(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function eu(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Sh(t, n, o, r) && (n = null),
    r || o === null
      ? vh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  fo = Symbol.for("react.element"),
  Rn = Symbol.for("react.portal"),
  $n = Symbol.for("react.fragment"),
  tu = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  rf = Symbol.for("react.provider"),
  of = Symbol.for("react.context"),
  nu = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  ru = Symbol.for("react.memo"),
  Ft = Symbol.for("react.lazy"),
  lf = Symbol.for("react.offscreen"),
  ma = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ma && e[ma]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  ml;
function wr(e) {
  if (ml === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      ml = (t && t[1]) || "";
    }
  return (
    `
` +
    ml +
    e
  );
}
var gl = !1;
function yl(e, t) {
  if (!e || gl) return "";
  gl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
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
    if (a && r && typeof a.stack == "string") {
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
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= l && 0 <= s);
          break;
        }
    }
  } finally {
    (gl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wr(e) : "";
}
function xh(e) {
  switch (e.tag) {
    case 5:
      return wr(e.type);
    case 16:
      return wr("Lazy");
    case 13:
      return wr("Suspense");
    case 19:
      return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = yl(e.type, !1)), e;
    case 11:
      return (e = yl(e.type.render, !1)), e;
    case 1:
      return (e = yl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case $n:
      return "Fragment";
    case Rn:
      return "Portal";
    case Yl:
      return "Profiler";
    case tu:
      return "StrictMode";
    case Xl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case of:
        return (e.displayName || "Context") + ".Consumer";
      case rf:
        return (e._context.displayName || "Context") + ".Provider";
      case nu:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ru:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case Ft:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function kh(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(t);
    case 8:
      return t === tu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Zt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function sf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ch(e) {
  var t = sf(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
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
          (r = "" + l), i.call(this, l);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (l) {
          r = "" + l;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function po(e) {
  e._valueTracker || (e._valueTracker = Ch(e));
}
function uf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = sf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Yo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ga(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Zt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function af(e, t) {
  (t = t.checked), t != null && eu(e, "checked", t, !1);
}
function es(e, t) {
  af(e, t);
  var n = Zt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? ts(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ts(e, t.type, Zt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ya(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function ts(e, t, n) {
  (t !== "number" || Yo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sr = Array.isArray;
function Bn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Zt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function ns(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function va(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Sr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Zt(n) };
}
function cf(e, t) {
  var n = Zt(t.value),
    r = Zt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function wa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function ff(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function rs(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ff(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ho,
  df = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ho = ho || document.createElement("div"),
          ho.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ho.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Lr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Cr = {
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
  Eh = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  Eh.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Cr[t] = Cr[e]);
  });
});
function pf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Cr.hasOwnProperty(e) && Cr[e])
    ? ("" + t).trim()
    : t + "px";
}
function hf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = pf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Ph = J(
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
function os(e, t) {
  if (t) {
    if (Ph[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function is(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ls = null;
function ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var ss = null,
  Un = null,
  Wn = null;
function Sa(e) {
  if ((e = oo(e))) {
    if (typeof ss != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = _i(t)), ss(e.stateNode, e.type, t));
  }
}
function mf(e) {
  Un ? (Wn ? Wn.push(e) : (Wn = [e])) : (Un = e);
}
function gf() {
  if (Un) {
    var e = Un,
      t = Wn;
    if (((Wn = Un = null), Sa(e), t)) for (e = 0; e < t.length; e++) Sa(t[e]);
  }
}
function yf(e, t) {
  return e(t);
}
function vf() {}
var vl = !1;
function wf(e, t, n) {
  if (vl) return e(t, n);
  vl = !0;
  try {
    return yf(e, t, n);
  } finally {
    (vl = !1), (Un !== null || Wn !== null) && (vf(), gf());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = _i(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var us = !1;
if (zt)
  try {
    var ar = {};
    Object.defineProperty(ar, "passive", {
      get: function () {
        us = !0;
      },
    }),
      window.addEventListener("test", ar, ar),
      window.removeEventListener("test", ar, ar);
  } catch {
    us = !1;
  }
function _h(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Er = !1,
  Xo = null,
  Zo = !1,
  as = null,
  Th = {
    onError: function (e) {
      (Er = !0), (Xo = e);
    },
  };
function Rh(e, t, n, r, o, i, l, s, u) {
  (Er = !1), (Xo = null), _h.apply(Th, arguments);
}
function $h(e, t, n, r, o, i, l, s, u) {
  if ((Rh.apply(this, arguments), Er)) {
    if (Er) {
      var a = Xo;
      (Er = !1), (Xo = null);
    } else throw Error(C(198));
    Zo || ((Zo = !0), (as = a));
  }
}
function Sn(e) {
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
function Sf(e) {
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
function xa(e) {
  if (Sn(e) !== e) throw Error(C(188));
}
function zh(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Sn(e)), t === null)) throw Error(C(188));
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
        if (i === n) return xa(o), e;
        if (i === r) return xa(o), t;
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
function xf(e) {
  return (e = zh(e)), e !== null ? kf(e) : null;
}
function kf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = kf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Cf = be.unstable_scheduleCallback,
  ka = be.unstable_cancelCallback,
  Oh = be.unstable_shouldYield,
  Mh = be.unstable_requestPaint,
  re = be.unstable_now,
  Nh = be.unstable_getCurrentPriorityLevel,
  iu = be.unstable_ImmediatePriority,
  Ef = be.unstable_UserBlockingPriority,
  Jo = be.unstable_NormalPriority,
  Ih = be.unstable_LowPriority,
  Pf = be.unstable_IdlePriority,
  ki = null,
  vt = null;
function Lh(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(ki, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Dh,
  Ah = Math.log,
  Fh = Math.LN2;
function Dh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ah(e) / Fh) | 0)) | 0;
}
var mo = 64,
  go = 4194304;
function xr(e) {
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
function qo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = xr(s)) : ((i &= l), i !== 0 && (r = xr(i)));
  } else (l = n & ~o), l !== 0 ? (r = xr(l)) : i !== 0 && (r = xr(i));
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
function jh(e, t) {
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
function Bh(e, t) {
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
      ? (!(s & n) || s & r) && (o[l] = jh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function cs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function _f() {
  var e = mo;
  return (mo <<= 1), !(mo & 4194240) && (mo = 64), e;
}
function wl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function no(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Uh(e, t) {
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
function lu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ut(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rf,
  su,
  $f,
  zf,
  Of,
  fs = !1,
  yo = [],
  Vt = null,
  bt = null,
  Ht = null,
  Fr = new Map(),
  Dr = new Map(),
  jt = [],
  Wh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Ca(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Vt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Ht = null;
      break;
    case "pointerover":
    case "pointerout":
      Fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dr.delete(t.pointerId);
  }
}
function cr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = oo(t)), t !== null && su(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Vh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Vt = cr(Vt, e, t, n, r, o)), !0;
    case "dragenter":
      return (bt = cr(bt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Ht = cr(Ht, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Fr.set(i, cr(Fr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Dr.set(i, cr(Dr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Mf(e) {
  var t = sn(e.target);
  if (t !== null) {
    var n = Sn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Sf(n)), t !== null)) {
          (e.blockedOn = t),
            Of(e.priority, function () {
              $f(n);
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
function Io(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ds(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ls = r), n.target.dispatchEvent(r), (ls = null);
    } else return (t = oo(n)), t !== null && su(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ea(e, t, n) {
  Io(e) && n.delete(t);
}
function bh() {
  (fs = !1),
    Vt !== null && Io(Vt) && (Vt = null),
    bt !== null && Io(bt) && (bt = null),
    Ht !== null && Io(Ht) && (Ht = null),
    Fr.forEach(Ea),
    Dr.forEach(Ea);
}
function fr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fs ||
      ((fs = !0),
      be.unstable_scheduleCallback(be.unstable_NormalPriority, bh)));
}
function jr(e) {
  function t(o) {
    return fr(o, e);
  }
  if (0 < yo.length) {
    fr(yo[0], e);
    for (var n = 1; n < yo.length; n++) {
      var r = yo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Vt !== null && fr(Vt, e),
      bt !== null && fr(bt, e),
      Ht !== null && fr(Ht, e),
      Fr.forEach(t),
      Dr.forEach(t),
      n = 0;
    n < jt.length;
    n++
  )
    (r = jt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < jt.length && ((n = jt[0]), n.blockedOn === null); )
    Mf(n), n.blockedOn === null && jt.shift();
}
var Vn = Lt.ReactCurrentBatchConfig,
  ei = !0;
function Hh(e, t, n, r) {
  var o = U,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (U = 1), uu(e, t, n, r);
  } finally {
    (U = o), (Vn.transition = i);
  }
}
function Kh(e, t, n, r) {
  var o = U,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (U = 4), uu(e, t, n, r);
  } finally {
    (U = o), (Vn.transition = i);
  }
}
function uu(e, t, n, r) {
  if (ei) {
    var o = ds(e, t, n, r);
    if (o === null) $l(e, t, r, ti, n), Ca(e, r);
    else if (Vh(o, e, t, n, r)) r.stopPropagation();
    else if ((Ca(e, r), t & 4 && -1 < Wh.indexOf(e))) {
      for (; o !== null; ) {
        var i = oo(o);
        if (
          (i !== null && Rf(i),
          (i = ds(e, t, n, r)),
          i === null && $l(e, t, r, ti, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else $l(e, t, r, null, n);
  }
}
var ti = null;
function ds(e, t, n, r) {
  if (((ti = null), (e = ou(r)), (e = sn(e)), e !== null))
    if (((t = Sn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Sf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ti = e), null;
}
function Nf(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Nh()) {
        case iu:
          return 1;
        case Ef:
          return 4;
        case Jo:
        case Ih:
          return 16;
        case Pf:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ut = null,
  au = null,
  Lo = null;
function If() {
  if (Lo) return Lo;
  var e,
    t = au,
    n = t.length,
    r,
    o = "value" in Ut ? Ut.value : Ut.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Lo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ao(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function vo() {
  return !0;
}
function Pa() {
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
        ? vo
        : Pa),
      (this.isPropagationStopped = Pa),
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
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = vo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = vo));
      },
      persist: function () {},
      isPersistent: vo,
    }),
    t
  );
}
var or = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  cu = Ke(or),
  ro = J({}, or, { view: 0, detail: 0 }),
  Qh = Ke(ro),
  Sl,
  xl,
  dr,
  Ci = J({}, ro, {
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
    getModifierState: fu,
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
      return "movementX" in e
        ? e.movementX
        : (e !== dr &&
            (dr && e.type === "mousemove"
              ? ((Sl = e.screenX - dr.screenX), (xl = e.screenY - dr.screenY))
              : (xl = Sl = 0),
            (dr = e)),
          Sl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : xl;
    },
  }),
  _a = Ke(Ci),
  Gh = J({}, Ci, { dataTransfer: 0 }),
  Yh = Ke(Gh),
  Xh = J({}, ro, { relatedTarget: 0 }),
  kl = Ke(Xh),
  Zh = J({}, or, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Jh = Ke(Zh),
  qh = J({}, or, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  em = Ke(qh),
  tm = J({}, or, { data: 0 }),
  Ta = Ke(tm),
  nm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  rm = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  om = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function im(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = om[e]) ? !!t[e] : !1;
}
function fu() {
  return im;
}
var lm = J({}, ro, {
    key: function (e) {
      if (e.key) {
        var t = nm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ao(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? rm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fu,
    charCode: function (e) {
      return e.type === "keypress" ? Ao(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ao(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  sm = Ke(lm),
  um = J({}, Ci, {
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
  Ra = Ke(um),
  am = J({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu,
  }),
  cm = Ke(am),
  fm = J({}, or, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  dm = Ke(fm),
  pm = J({}, Ci, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  hm = Ke(pm),
  mm = [9, 13, 27, 32],
  du = zt && "CompositionEvent" in window,
  Pr = null;
zt && "documentMode" in document && (Pr = document.documentMode);
var gm = zt && "TextEvent" in window && !Pr,
  Lf = zt && (!du || (Pr && 8 < Pr && 11 >= Pr)),
  $a = String.fromCharCode(32),
  za = !1;
function Af(e, t) {
  switch (e) {
    case "keyup":
      return mm.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ff(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var zn = !1;
function ym(e, t) {
  switch (e) {
    case "compositionend":
      return Ff(t);
    case "keypress":
      return t.which !== 32 ? null : ((za = !0), $a);
    case "textInput":
      return (e = t.data), e === $a && za ? null : e;
    default:
      return null;
  }
}
function vm(e, t) {
  if (zn)
    return e === "compositionend" || (!du && Af(e, t))
      ? ((e = If()), (Lo = au = Ut = null), (zn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Lf && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var wm = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
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
function Oa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!wm[e.type] : t === "textarea";
}
function Df(e, t, n, r) {
  mf(r),
    (t = ni(t, "onChange")),
    0 < t.length &&
      ((n = new cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var _r = null,
  Br = null;
function Sm(e) {
  Yf(e, 0);
}
function Ei(e) {
  var t = Nn(e);
  if (uf(t)) return e;
}
function xm(e, t) {
  if (e === "change") return t;
}
var jf = !1;
if (zt) {
  var Cl;
  if (zt) {
    var El = "oninput" in document;
    if (!El) {
      var Ma = document.createElement("div");
      Ma.setAttribute("oninput", "return;"),
        (El = typeof Ma.oninput == "function");
    }
    Cl = El;
  } else Cl = !1;
  jf = Cl && (!document.documentMode || 9 < document.documentMode);
}
function Na() {
  _r && (_r.detachEvent("onpropertychange", Bf), (Br = _r = null));
}
function Bf(e) {
  if (e.propertyName === "value" && Ei(Br)) {
    var t = [];
    Df(t, Br, e, ou(e)), wf(Sm, t);
  }
}
function km(e, t, n) {
  e === "focusin"
    ? (Na(), (_r = t), (Br = n), _r.attachEvent("onpropertychange", Bf))
    : e === "focusout" && Na();
}
function Cm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ei(Br);
}
function Em(e, t) {
  if (e === "click") return Ei(t);
}
function Pm(e, t) {
  if (e === "input" || e === "change") return Ei(t);
}
function _m(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : _m;
function Ur(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Gl.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Ia(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Ia(e);
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
    n = Ia(n);
  }
}
function Uf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Uf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Wf() {
  for (var e = window, t = Yo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yo(e.document);
  }
  return t;
}
function pu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Tm(e) {
  var t = Wf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && pu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
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
          (o = La(n, i));
        var l = La(n, r);
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
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Rm = zt && "documentMode" in document && 11 >= document.documentMode,
  On = null,
  ps = null,
  Tr = null,
  hs = !1;
function Aa(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hs ||
    On == null ||
    On !== Yo(r) ||
    ((r = On),
    "selectionStart" in r && pu(r)
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
    (Tr && Ur(Tr, r)) ||
      ((Tr = r),
      (r = ni(ps, "onSelect")),
      0 < r.length &&
        ((t = new cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = On))));
}
function wo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Mn = {
    animationend: wo("Animation", "AnimationEnd"),
    animationiteration: wo("Animation", "AnimationIteration"),
    animationstart: wo("Animation", "AnimationStart"),
    transitionend: wo("Transition", "TransitionEnd"),
  },
  Pl = {},
  Vf = {};
zt &&
  ((Vf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Mn.animationend.animation,
    delete Mn.animationiteration.animation,
    delete Mn.animationstart.animation),
  "TransitionEvent" in window || delete Mn.transitionend.transition);
function Pi(e) {
  if (Pl[e]) return Pl[e];
  if (!Mn[e]) return e;
  var t = Mn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vf) return (Pl[e] = t[n]);
  return e;
}
var bf = Pi("animationend"),
  Hf = Pi("animationiteration"),
  Kf = Pi("animationstart"),
  Qf = Pi("transitionend"),
  Gf = new Map(),
  Fa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function qt(e, t) {
  Gf.set(e, t), wn(t, [e]);
}
for (var _l = 0; _l < Fa.length; _l++) {
  var Tl = Fa[_l],
    $m = Tl.toLowerCase(),
    zm = Tl[0].toUpperCase() + Tl.slice(1);
  qt($m, "on" + zm);
}
qt(bf, "onAnimationEnd");
qt(Hf, "onAnimationIteration");
qt(Kf, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(Qf, "onTransitionEnd");
Gn("onMouseEnter", ["mouseout", "mouseover"]);
Gn("onMouseLeave", ["mouseout", "mouseover"]);
Gn("onPointerEnter", ["pointerout", "pointerover"]);
Gn("onPointerLeave", ["pointerout", "pointerover"]);
wn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
wn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
wn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
wn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
wn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
wn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Om = new Set("cancel close invalid load scroll toggle".split(" ").concat(kr));
function Da(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), $h(r, t, void 0, e), (e.currentTarget = null);
}
function Yf(e, t) {
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
          Da(o, s, a), (i = u);
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
          Da(o, s, a), (i = u);
        }
    }
  }
  if (Zo) throw ((e = as), (Zo = !1), (as = null), e);
}
function H(e, t) {
  var n = t[ws];
  n === void 0 && (n = t[ws] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xf(t, e, 2, !1), n.add(r));
}
function Rl(e, t, n) {
  var r = 0;
  t && (r |= 4), Xf(n, e, r, t);
}
var So = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[So]) {
    (e[So] = !0),
      nf.forEach(function (n) {
        n !== "selectionchange" && (Om.has(n) || Rl(n, !1, e), Rl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[So] || ((t[So] = !0), Rl("selectionchange", !1, t));
  }
}
function Xf(e, t, n, r) {
  switch (Nf(t)) {
    case 1:
      var o = Hh;
      break;
    case 4:
      o = Kh;
      break;
    default:
      o = uu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !us ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function $l(e, t, n, r, o) {
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
          if (((l = sn(s)), l === null)) return;
          if (((u = l.tag), u === 5 || u === 6)) {
            r = i = l;
            continue e;
          }
          s = s.parentNode;
        }
      }
      r = r.return;
    }
  wf(function () {
    var a = i,
      m = ou(n),
      p = [];
    e: {
      var d = Gf.get(e);
      if (d !== void 0) {
        var w = cu,
          y = e;
        switch (e) {
          case "keypress":
            if (Ao(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = sm;
            break;
          case "focusin":
            (y = "focus"), (w = kl);
            break;
          case "focusout":
            (y = "blur"), (w = kl);
            break;
          case "beforeblur":
          case "afterblur":
            w = kl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = _a;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = Yh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = cm;
            break;
          case bf:
          case Hf:
          case Kf:
            w = Jh;
            break;
          case Qf:
            w = dm;
            break;
          case "scroll":
            w = Qh;
            break;
          case "wheel":
            w = hm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = em;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ra;
        }
        var g = (t & 4) !== 0,
          P = !g && e === "scroll",
          f = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var c = a, h; c !== null; ) {
          h = c;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              f !== null && ((v = Ar(c, f)), v != null && g.push(Vr(c, v, h)))),
            P)
          )
            break;
          c = c.return;
        }
        0 < g.length &&
          ((d = new w(d, y, null, n, m)), p.push({ event: d, listeners: g }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          d &&
            n !== ls &&
            (y = n.relatedTarget || n.fromElement) &&
            (sn(y) || y[Ot]))
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
              (y = y ? sn(y) : null),
              y !== null &&
                ((P = Sn(y)), y !== P || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((w = null), (y = a)),
          w !== y)
        ) {
          if (
            ((g = _a),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((g = Ra),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (P = w == null ? d : Nn(w)),
            (h = y == null ? d : Nn(y)),
            (d = new g(v, c + "leave", w, n, m)),
            (d.target = P),
            (d.relatedTarget = h),
            (v = null),
            sn(m) === a &&
              ((g = new g(f, c + "enter", y, n, m)),
              (g.target = h),
              (g.relatedTarget = P),
              (v = g)),
            (P = v),
            w && y)
          )
            t: {
              for (g = w, f = y, c = 0, h = g; h; h = kn(h)) c++;
              for (h = 0, v = f; v; v = kn(v)) h++;
              for (; 0 < c - h; ) (g = kn(g)), c--;
              for (; 0 < h - c; ) (f = kn(f)), h--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = kn(g)), (f = kn(f));
              }
              g = null;
            }
          else g = null;
          w !== null && ja(p, d, w, g, !1),
            y !== null && P !== null && ja(p, P, y, g, !0);
        }
      }
      e: {
        if (
          ((d = a ? Nn(a) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === "select" || (w === "input" && d.type === "file"))
        )
          var S = xm;
        else if (Oa(d))
          if (jf) S = Pm;
          else {
            S = Cm;
            var k = km;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Em);
        if (S && (S = S(e, a))) {
          Df(p, S, n, m);
          break e;
        }
        k && k(e, d, a),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            ts(d, "number", d.value);
      }
      switch (((k = a ? Nn(a) : window), e)) {
        case "focusin":
          (Oa(k) || k.contentEditable === "true") &&
            ((On = k), (ps = a), (Tr = null));
          break;
        case "focusout":
          Tr = ps = On = null;
          break;
        case "mousedown":
          hs = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hs = !1), Aa(p, n, m);
          break;
        case "selectionchange":
          if (Rm) break;
        case "keydown":
        case "keyup":
          Aa(p, n, m);
      }
      var x;
      if (du)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        zn
          ? Af(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Lf &&
          n.locale !== "ko" &&
          (zn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && zn && (x = If())
            : ((Ut = m),
              (au = "value" in Ut ? Ut.value : Ut.textContent),
              (zn = !0))),
        (k = ni(a, T)),
        0 < k.length &&
          ((T = new Ta(T, e, null, n, m)),
          p.push({ event: T, listeners: k }),
          x ? (T.data = x) : ((x = Ff(n)), x !== null && (T.data = x)))),
        (x = gm ? ym(e, n) : vm(e, n)) &&
          ((a = ni(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new Ta("onBeforeInput", "beforeinput", null, n, m)),
            p.push({ event: m, listeners: a }),
            (m.data = x)));
    }
    Yf(p, t);
  });
}
function Vr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ni(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ar(e, n)),
      i != null && r.unshift(Vr(e, i, o)),
      (i = Ar(e, t)),
      i != null && r.push(Vr(e, i, o))),
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
function ja(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Ar(n, i)), u != null && l.unshift(Vr(n, u, s)))
        : o || ((u = Ar(n, i)), u != null && l.push(Vr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Mm = /\r\n?/g,
  Nm = /\u0000|\uFFFD/g;
function Ba(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Mm,
      `
`
    )
    .replace(Nm, "");
}
function xo(e, t, n) {
  if (((t = Ba(t)), Ba(e) !== t && n)) throw Error(C(425));
}
function ri() {}
var ms = null,
  gs = null;
function ys(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var vs = typeof setTimeout == "function" ? setTimeout : void 0,
  Im = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ua = typeof Promise == "function" ? Promise : void 0,
  Lm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ua < "u"
      ? function (e) {
          return Ua.resolve(null).then(e).catch(Am);
        }
      : vs;
function Am(e) {
  setTimeout(function () {
    throw e;
  });
}
function zl(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), jr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  jr(t);
}
function Kt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Wa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ir = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + ir,
  br = "__reactProps$" + ir,
  Ot = "__reactContainer$" + ir,
  ws = "__reactEvents$" + ir,
  Fm = "__reactListeners$" + ir,
  Dm = "__reactHandles$" + ir;
function sn(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ot] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Wa(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Wa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function oo(e) {
  return (
    (e = e[gt] || e[Ot]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function _i(e) {
  return e[br] || null;
}
var Ss = [],
  In = -1;
function en(e) {
  return { current: e };
}
function K(e) {
  0 > In || ((e.current = Ss[In]), (Ss[In] = null), In--);
}
function b(e, t) {
  In++, (Ss[In] = e.current), (e.current = t);
}
var Jt = {},
  Pe = en(Jt),
  Ie = en(!1),
  pn = Jt;
function Yn(e, t) {
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
function oi() {
  K(Ie), K(Pe);
}
function Va(e, t, n) {
  if (Pe.current !== Jt) throw Error(C(168));
  b(Pe, t), b(Ie, n);
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, kh(e) || "Unknown", o));
  return J({}, n, r);
}
function ii(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Jt),
    (pn = Pe.current),
    b(Pe, e),
    b(Ie, Ie.current),
    !0
  );
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Zf(e, t, pn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ie),
      K(Pe),
      b(Pe, e))
    : K(Ie),
    b(Ie, n);
}
var Et = null,
  Ti = !1,
  Ol = !1;
function Jf(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function jm(e) {
  (Ti = !0), Jf(e);
}
function tn() {
  if (!Ol && Et !== null) {
    Ol = !0;
    var e = 0,
      t = U;
    try {
      var n = Et;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), (Ti = !1);
    } catch (o) {
      throw (Et !== null && (Et = Et.slice(e + 1)), Cf(iu, tn), o);
    } finally {
      (U = t), (Ol = !1);
    }
  }
  return null;
}
var Ln = [],
  An = 0,
  li = null,
  si = 0,
  Ze = [],
  Je = 0,
  hn = null,
  _t = 1,
  Tt = "";
function rn(e, t) {
  (Ln[An++] = si), (Ln[An++] = li), (li = e), (si = t);
}
function qf(e, t, n) {
  (Ze[Je++] = _t), (Ze[Je++] = Tt), (Ze[Je++] = hn), (hn = e);
  var r = _t;
  e = Tt;
  var o = 32 - ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ut(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (_t = (1 << (32 - ut(t) + o)) | (n << o) | r),
      (Tt = i + e);
  } else (_t = (1 << i) | (n << o) | r), (Tt = e);
}
function hu(e) {
  e.return !== null && (rn(e, 1), qf(e, 1, 0));
}
function mu(e) {
  for (; e === li; )
    (li = Ln[--An]), (Ln[An] = null), (si = Ln[--An]), (Ln[An] = null);
  for (; e === hn; )
    (hn = Ze[--Je]),
      (Ze[Je] = null),
      (Tt = Ze[--Je]),
      (Ze[Je] = null),
      (_t = Ze[--Je]),
      (Ze[Je] = null);
}
var We = null,
  Ue = null,
  G = !1,
  st = null;
function ed(e, t) {
  var n = qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ha(e, t) {
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
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (We = e), (Ue = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = hn !== null ? { id: _t, overflow: Tt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qe(18, null, null, 0)),
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
function xs(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ks(e) {
  if (G) {
    var t = Ue;
    if (t) {
      var n = t;
      if (!Ha(e, t)) {
        if (xs(e)) throw Error(C(418));
        t = Kt(n.nextSibling);
        var r = We;
        t && Ha(e, t)
          ? ed(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (We = e));
      }
    } else {
      if (xs(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (We = e);
    }
  }
}
function Ka(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  We = e;
}
function ko(e) {
  if (e !== We) return !1;
  if (!G) return Ka(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !ys(e.type, e.memoizedProps))),
    t && (t = Ue))
  ) {
    if (xs(e)) throw (td(), Error(C(418)));
    for (; t; ) ed(e, t), (t = Kt(t.nextSibling));
  }
  if ((Ka(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ue = Kt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ue = null;
    }
  } else Ue = We ? Kt(e.stateNode.nextSibling) : null;
  return !0;
}
function td() {
  for (var e = Ue; e; ) e = Kt(e.nextSibling);
}
function Xn() {
  (Ue = We = null), (G = !1);
}
function gu(e) {
  st === null ? (st = [e]) : st.push(e);
}
var Bm = Lt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ui = en(null),
  ai = null,
  Fn = null,
  yu = null;
function vu() {
  yu = Fn = ai = null;
}
function wu(e) {
  var t = ui.current;
  K(ui), (e._currentValue = t);
}
function Cs(e, t, n) {
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
function bn(e, t) {
  (ai = e),
    (yu = Fn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ne = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Fn === null)) {
      if (ai === null) throw Error(C(308));
      (Fn = e), (ai.dependencies = { lanes: 0, firstContext: e });
    } else Fn = Fn.next = e;
  return t;
}
var un = null;
function Su(e) {
  un === null ? (un = [e]) : un.push(e);
}
function nd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Su(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Mt(e, r)
  );
}
function Mt(e, t) {
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
function xu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rd(e, t) {
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
function Rt(e, t) {
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
      Mt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Su(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Mt(e, n)
  );
}
function Fo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
function Qa(e, t) {
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
function ci(e, t, n, r) {
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
    var p = o.baseState;
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
              if (((y = g.payload), typeof y == "function")) {
                p = y.call(w, p, d);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = g.payload),
                (d = typeof y == "function" ? y.call(w, p, d) : y),
                d == null)
              )
                break e;
              p = J({}, p, d);
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
          m === null ? ((a = m = w), (u = p)) : (m = m.next = w),
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
    (gn |= l), (e.lanes = l), (e.memoizedState = p);
  }
}
function Ga(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(C(191, o));
        o.call(r);
      }
    }
}
var od = new tf.Component().refs;
function Es(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ri = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Sn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Yt(e),
      i = Rt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (at(t, e, o, r), Fo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Re(),
      o = Yt(e),
      i = Rt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Qt(e, i, o)),
      t !== null && (at(t, e, o, r), Fo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Re(),
      r = Yt(e),
      o = Rt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Qt(e, o, r)),
      t !== null && (at(t, e, r, n), Fo(t, e, r));
  },
};
function Ya(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Ur(n, r) || !Ur(o, i)
      : !0
  );
}
function id(e, t, n) {
  var r = !1,
    o = Jt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = tt(i))
      : ((o = Le(t) ? pn : Pe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Yn(e, o) : Jt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ri),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Xa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ri.enqueueReplaceState(t, t.state, null);
}
function Ps(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = od), xu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = tt(i))
    : ((i = Le(t) ? pn : Pe.current), (o.context = Yn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Es(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Ri.enqueueReplaceState(o, o.state, null),
      ci(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function pr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (l) {
            var s = o.refs;
            s === od && (s = o.refs = {}),
              l === null ? delete s[i] : (s[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Co(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Za(e) {
  var t = e._init;
  return t(e._payload);
}
function ld(e) {
  function t(f, c) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [c]), (f.flags |= 16)) : h.push(c);
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
  function i(f, c, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((f.flags |= 2), c) : h)
            : ((f.flags |= 2), c))
        : ((f.flags |= 1048576), c)
    );
  }
  function l(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function s(f, c, h, v) {
    return c === null || c.tag !== 6
      ? ((c = Dl(h, f.mode, v)), (c.return = f), c)
      : ((c = o(c, h)), (c.return = f), c);
  }
  function u(f, c, h, v) {
    var S = h.type;
    return S === $n
      ? m(f, c, h.props.children, v, h.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === Ft &&
            Za(S) === c.type))
      ? ((v = o(c, h.props)), (v.ref = pr(f, c, h)), (v.return = f), v)
      : ((v = Vo(h.type, h.key, h.props, null, f.mode, v)),
        (v.ref = pr(f, c, h)),
        (v.return = f),
        v);
  }
  function a(f, c, h, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = jl(h, f.mode, v)), (c.return = f), c)
      : ((c = o(c, h.children || [])), (c.return = f), c);
  }
  function m(f, c, h, v, S) {
    return c === null || c.tag !== 7
      ? ((c = dn(h, f.mode, v, S)), (c.return = f), c)
      : ((c = o(c, h)), (c.return = f), c);
  }
  function p(f, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Dl("" + c, f.mode, h)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case fo:
          return (
            (h = Vo(c.type, c.key, c.props, null, f.mode, h)),
            (h.ref = pr(f, null, c)),
            (h.return = f),
            h
          );
        case Rn:
          return (c = jl(c, f.mode, h)), (c.return = f), c;
        case Ft:
          var v = c._init;
          return p(f, v(c._payload), h);
      }
      if (Sr(c) || ur(c))
        return (c = dn(c, f.mode, h, null)), (c.return = f), c;
      Co(f, c);
    }
    return null;
  }
  function d(f, c, h, v) {
    var S = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : s(f, c, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case fo:
          return h.key === S ? u(f, c, h, v) : null;
        case Rn:
          return h.key === S ? a(f, c, h, v) : null;
        case Ft:
          return (S = h._init), d(f, c, S(h._payload), v);
      }
      if (Sr(h) || ur(h)) return S !== null ? null : m(f, c, h, v, null);
      Co(f, h);
    }
    return null;
  }
  function w(f, c, h, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(h) || null), s(c, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case fo:
          return (f = f.get(v.key === null ? h : v.key) || null), u(c, f, v, S);
        case Rn:
          return (f = f.get(v.key === null ? h : v.key) || null), a(c, f, v, S);
        case Ft:
          var k = v._init;
          return w(f, c, h, k(v._payload), S);
      }
      if (Sr(v) || ur(v)) return (f = f.get(h) || null), m(c, f, v, S, null);
      Co(c, v);
    }
    return null;
  }
  function y(f, c, h, v) {
    for (
      var S = null, k = null, x = c, T = (c = 0), z = null;
      x !== null && T < h.length;
      T++
    ) {
      x.index > T ? ((z = x), (x = null)) : (z = x.sibling);
      var $ = d(f, x, h[T], v);
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
    if (T === h.length) return n(f, x), G && rn(f, T), S;
    if (x === null) {
      for (; T < h.length; T++)
        (x = p(f, h[T], v)),
          x !== null &&
            ((c = i(x, c, T)), k === null ? (S = x) : (k.sibling = x), (k = x));
      return G && rn(f, T), S;
    }
    for (x = r(f, x); T < h.length; T++)
      (z = w(x, f, T, h[T], v)),
        z !== null &&
          (e && z.alternate !== null && x.delete(z.key === null ? T : z.key),
          (c = i(z, c, T)),
          k === null ? (S = z) : (k.sibling = z),
          (k = z));
    return (
      e &&
        x.forEach(function (D) {
          return t(f, D);
        }),
      G && rn(f, T),
      S
    );
  }
  function g(f, c, h, v) {
    var S = ur(h);
    if (typeof S != "function") throw Error(C(150));
    if (((h = S.call(h)), h == null)) throw Error(C(151));
    for (
      var k = (S = null), x = c, T = (c = 0), z = null, $ = h.next();
      x !== null && !$.done;
      T++, $ = h.next()
    ) {
      x.index > T ? ((z = x), (x = null)) : (z = x.sibling);
      var D = d(f, x, $.value, v);
      if (D === null) {
        x === null && (x = z);
        break;
      }
      e && x && D.alternate === null && t(f, x),
        (c = i(D, c, T)),
        k === null ? (S = D) : (k.sibling = D),
        (k = D),
        (x = z);
    }
    if ($.done) return n(f, x), G && rn(f, T), S;
    if (x === null) {
      for (; !$.done; T++, $ = h.next())
        ($ = p(f, $.value, v)),
          $ !== null &&
            ((c = i($, c, T)), k === null ? (S = $) : (k.sibling = $), (k = $));
      return G && rn(f, T), S;
    }
    for (x = r(f, x); !$.done; T++, $ = h.next())
      ($ = w(x, f, T, $.value, v)),
        $ !== null &&
          (e && $.alternate !== null && x.delete($.key === null ? T : $.key),
          (c = i($, c, T)),
          k === null ? (S = $) : (k.sibling = $),
          (k = $));
    return (
      e &&
        x.forEach(function (Y) {
          return t(f, Y);
        }),
      G && rn(f, T),
      S
    );
  }
  function P(f, c, h, v) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === $n &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case fo:
          e: {
            for (var S = h.key, k = c; k !== null; ) {
              if (k.key === S) {
                if (((S = h.type), S === $n)) {
                  if (k.tag === 7) {
                    n(f, k.sibling),
                      (c = o(k, h.props.children)),
                      (c.return = f),
                      (f = c);
                    break e;
                  }
                } else if (
                  k.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === Ft &&
                    Za(S) === k.type)
                ) {
                  n(f, k.sibling),
                    (c = o(k, h.props)),
                    (c.ref = pr(f, k, h)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            h.type === $n
              ? ((c = dn(h.props.children, f.mode, v, h.key)),
                (c.return = f),
                (f = c))
              : ((v = Vo(h.type, h.key, h.props, null, f.mode, v)),
                (v.ref = pr(f, c, h)),
                (v.return = f),
                (f = v));
          }
          return l(f);
        case Rn:
          e: {
            for (k = h.key; c !== null; ) {
              if (c.key === k)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(f, c.sibling),
                    (c = o(c, h.children || [])),
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
            (c = jl(h, f.mode, v)), (c.return = f), (f = c);
          }
          return l(f);
        case Ft:
          return (k = h._init), P(f, c, k(h._payload), v);
      }
      if (Sr(h)) return y(f, c, h, v);
      if (ur(h)) return g(f, c, h, v);
      Co(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, h)), (c.return = f), (f = c))
          : (n(f, c), (c = Dl(h, f.mode, v)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return P;
}
var Zn = ld(!0),
  sd = ld(!1),
  io = {},
  wt = en(io),
  Hr = en(io),
  Kr = en(io);
function an(e) {
  if (e === io) throw Error(C(174));
  return e;
}
function ku(e, t) {
  switch ((b(Kr, t), b(Hr, e), b(wt, io), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : rs(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = rs(t, e));
  }
  K(wt), b(wt, t);
}
function Jn() {
  K(wt), K(Hr), K(Kr);
}
function ud(e) {
  an(Kr.current);
  var t = an(wt.current),
    n = rs(t, e.type);
  t !== n && (b(Hr, e), b(wt, n));
}
function Cu(e) {
  Hr.current === e && (K(wt), K(Hr));
}
var X = en(0);
function fi(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
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
var Ml = [];
function Eu() {
  for (var e = 0; e < Ml.length; e++)
    Ml[e]._workInProgressVersionPrimary = null;
  Ml.length = 0;
}
var Do = Lt.ReactCurrentDispatcher,
  Nl = Lt.ReactCurrentBatchConfig,
  mn = 0,
  Z = null,
  ue = null,
  fe = null,
  di = !1,
  Rr = !1,
  Qr = 0,
  Um = 0;
function xe() {
  throw Error(C(321));
}
function Pu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function _u(e, t, n, r, o, i) {
  if (
    ((mn = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Do.current = e === null || e.memoizedState === null ? Hm : Km),
    (e = n(r, o)),
    Rr)
  ) {
    i = 0;
    do {
      if (((Rr = !1), (Qr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (fe = ue = null),
        (t.updateQueue = null),
        (Do.current = Qm),
        (e = n(r, o));
    } while (Rr);
  }
  if (
    ((Do.current = pi),
    (t = ue !== null && ue.next !== null),
    (mn = 0),
    (fe = ue = Z = null),
    (di = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Tu() {
  var e = Qr !== 0;
  return (Qr = 0), e;
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
function nt() {
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
function Gr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Il(e) {
  var t = nt(),
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
      if ((mn & m) === m)
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
          (Z.lanes |= m),
          (gn |= m);
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
    do (i = o.lane), (Z.lanes |= i), (gn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Ll(e) {
  var t = nt(),
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
function ad() {}
function cd(e, t) {
  var n = Z,
    r = nt(),
    o = t(),
    i = !ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ne = !0)),
    (r = r.queue),
    Ru(pd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, dd.bind(null, n, r, o, t), void 0, null),
      de === null)
    )
      throw Error(C(349));
    mn & 30 || fd(n, t, o);
  }
  return o;
}
function fd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function dd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), hd(t) && md(e);
}
function pd(e, t, n) {
  return n(function () {
    hd(t) && md(e);
  });
}
function hd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function md(e) {
  var t = Mt(e, 1);
  t !== null && at(t, e, 1, -1);
}
function Ja(e) {
  var t = pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bm.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
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
function gd() {
  return nt().memoizedState;
}
function jo(e, t, n, r) {
  var o = pt();
  (Z.flags |= e),
    (o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function $i(e, t, n, r) {
  var o = nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ue !== null) {
    var l = ue.memoizedState;
    if (((i = l.destroy), r !== null && Pu(r, l.deps))) {
      o.memoizedState = Yr(t, n, i, r);
      return;
    }
  }
  (Z.flags |= e), (o.memoizedState = Yr(1 | t, n, i, r));
}
function qa(e, t) {
  return jo(8390656, 8, e, t);
}
function Ru(e, t) {
  return $i(2048, 8, e, t);
}
function yd(e, t) {
  return $i(4, 2, e, t);
}
function vd(e, t) {
  return $i(4, 4, e, t);
}
function wd(e, t) {
  if (typeof t == "function")
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
function Sd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), $i(4, 4, wd.bind(null, t, e), n)
  );
}
function $u() {}
function xd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Pu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cd(e, t, n) {
  return mn & 21
    ? (ct(n, t) || ((n = _f()), (Z.lanes |= n), (gn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ne = !0)), (e.memoizedState = n));
}
function Wm(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Nl.transition;
  Nl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Nl.transition = r);
  }
}
function Ed() {
  return nt().memoizedState;
}
function Vm(e, t, n) {
  var r = Yt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Pd(e))
  )
    _d(t, n);
  else if (((n = nd(e, t, n, r)), n !== null)) {
    var o = Re();
    at(n, e, r, o), Td(n, t, r);
  }
}
function bm(e, t, n) {
  var r = Yt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) _d(t, o);
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
            ? ((o.next = o), Su(t))
            : ((o.next = u.next), (u.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = nd(e, t, o, r)),
      n !== null && ((o = Re()), at(n, e, r, o), Td(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function _d(e, t) {
  Rr = di = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
var pi = {
    readContext: tt,
    useCallback: xe,
    useContext: xe,
    useEffect: xe,
    useImperativeHandle: xe,
    useInsertionEffect: xe,
    useLayoutEffect: xe,
    useMemo: xe,
    useReducer: xe,
    useRef: xe,
    useState: xe,
    useDebugValue: xe,
    useDeferredValue: xe,
    useTransition: xe,
    useMutableSource: xe,
    useSyncExternalStore: xe,
    useId: xe,
    unstable_isNewReconciler: !1,
  },
  Hm = {
    readContext: tt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: qa,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        jo(4194308, 4, wd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return jo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return jo(4, 2, e, t);
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
        (e = e.dispatch = Vm.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ja,
    useDebugValue: $u,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ja(!1),
        t = e[0];
      return (e = Wm.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = Z,
        o = pt();
      if (G) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(C(349));
        mn & 30 || fd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        qa(pd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yr(9, dd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = de.identifierPrefix;
      if (G) {
        var n = Tt,
          r = _t;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Um++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Km = {
    readContext: tt,
    useCallback: xd,
    useContext: tt,
    useEffect: Ru,
    useImperativeHandle: Sd,
    useInsertionEffect: yd,
    useLayoutEffect: vd,
    useMemo: kd,
    useReducer: Il,
    useRef: gd,
    useState: function () {
      return Il(Gr);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = nt();
      return Cd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Il(Gr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: ad,
    useSyncExternalStore: cd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  },
  Qm = {
    readContext: tt,
    useCallback: xd,
    useContext: tt,
    useEffect: Ru,
    useImperativeHandle: Sd,
    useInsertionEffect: yd,
    useLayoutEffect: vd,
    useMemo: kd,
    useReducer: Ll,
    useRef: gd,
    useState: function () {
      return Ll(Gr);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = nt();
      return ue === null ? (t.memoizedState = e) : Cd(t, ue.memoizedState, e);
    },
    useTransition: function () {
      var e = Ll(Gr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: ad,
    useSyncExternalStore: cd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += xh(r)), (r = r.return);
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
function Al(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function _s(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Gm = typeof WeakMap == "function" ? WeakMap : Map;
function Rd(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mi || ((mi = !0), (As = r)), _s(e, t);
    }),
    n
  );
}
function $d(e, t, n) {
  (n = Rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        _s(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        _s(e, t),
          typeof r != "function" &&
            (Gt === null ? (Gt = new Set([this])) : Gt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function ec(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Gm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = u0.bind(null, e, t, n)), t.then(e, e));
}
function tc(e) {
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
function nc(e, t, n, r, o) {
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
              : ((t = Rt(-1, 1)), (t.tag = 2), Qt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ym = Lt.ReactCurrentOwner,
  Ne = !1;
function Te(e, t, n, r) {
  t.child = e === null ? sd(t, null, n, r) : Zn(t, e.child, n, r);
}
function rc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    bn(t, o),
    (r = _u(e, t, n, r, i, o)),
    (n = Tu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nt(e, t, o))
      : (G && n && hu(t), (t.flags |= 1), Te(e, t, r, o), t.child)
  );
}
function oc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Fu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), zd(e, t, i, r, o))
      : ((e = Vo(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(l, r) && e.ref === t.ref)
    )
      return Nt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Xt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ur(i, r) && e.ref === t.ref)
      if (((Ne = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ne = !0);
      else return (t.lanes = e.lanes), Nt(e, t, o);
  }
  return Ts(e, t, n, r, o);
}
function Od(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(jn, je),
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
          b(jn, je),
          (je |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        b(jn, je),
        (je |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(jn, je),
      (je |= r);
  return Te(e, t, o, n), t.child;
}
function Md(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ts(e, t, n, r, o) {
  var i = Le(n) ? pn : Pe.current;
  return (
    (i = Yn(t, i)),
    bn(t, o),
    (n = _u(e, t, n, r, i, o)),
    (r = Tu()),
    e !== null && !Ne
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Nt(e, t, o))
      : (G && r && hu(t), (t.flags |= 1), Te(e, t, n, o), t.child)
  );
}
function ic(e, t, n, r, o) {
  if (Le(n)) {
    var i = !0;
    ii(t);
  } else i = !1;
  if ((bn(t, o), t.stateNode === null))
    Bo(e, t), id(t, n, r), Ps(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = tt(a))
      : ((a = Le(n) ? pn : Pe.current), (a = Yn(t, a)));
    var m = n.getDerivedStateFromProps,
      p =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Xa(t, l, r, a)),
      (Dt = !1);
    var d = t.memoizedState;
    (l.state = d),
      ci(t, r, l, o),
      (u = t.memoizedState),
      s !== r || d !== u || Ie.current || Dt
        ? (typeof m == "function" && (Es(t, n, m, r), (u = t.memoizedState)),
          (s = Dt || Ya(t, n, s, r, d, u, a))
            ? (p ||
                (typeof l.UNSAFE_componentWillMount != "function" &&
                  typeof l.componentWillMount != "function") ||
                (typeof l.componentWillMount == "function" &&
                  l.componentWillMount(),
                typeof l.UNSAFE_componentWillMount == "function" &&
                  l.UNSAFE_componentWillMount()),
              typeof l.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (l.props = r),
          (l.state = u),
          (l.context = a),
          (r = s))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      rd(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : it(t.type, s)),
      (l.props = a),
      (p = t.pendingProps),
      (d = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = tt(u))
        : ((u = Le(n) ? pn : Pe.current), (u = Yn(t, u)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== p || d !== u) && Xa(t, l, r, u)),
      (Dt = !1),
      (d = t.memoizedState),
      (l.state = d),
      ci(t, r, l, o);
    var y = t.memoizedState;
    s !== p || d !== y || Ie.current || Dt
      ? (typeof w == "function" && (Es(t, n, w, r), (y = t.memoizedState)),
        (a = Dt || Ya(t, n, a, r, d, y, u) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, u),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, u)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = u),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Rs(e, t, n, r, i, o);
}
function Rs(e, t, n, r, o, i) {
  Md(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && ba(t, n, !1), Nt(e, t, i);
  (r = t.stateNode), (Ym.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Zn(t, e.child, null, i)), (t.child = Zn(t, null, s, i)))
      : Te(e, t, s, i),
    (t.memoizedState = r.state),
    o && ba(t, n, !0),
    t.child
  );
}
function Nd(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Va(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Va(e, t.context, !1),
    ku(e, t.containerInfo);
}
function lc(e, t, n, r, o) {
  return Xn(), gu(o), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var $s = { dehydrated: null, treeContext: null, retryLane: 0 };
function zs(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Id(e, t, n) {
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
      ks(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((l = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (l = { mode: "hidden", children: l }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = l))
                : (i = Mi(l, r, 0, null)),
              (e = dn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zs(n)),
              (t.memoizedState = $s),
              e)
            : zu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return Xm(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Xt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Xt(s, i)) : ((i = dn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? zs(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $s),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Xt(i, { mode: "visible", children: r.children })),
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
function zu(e, t) {
  return (
    (t = Mi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Eo(e, t, n, r) {
  return (
    r !== null && gu(r),
    Zn(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Xm(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Al(Error(C(422)))), Eo(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Mi({ mode: "visible", children: r.children }, o, 0, null)),
        (i = dn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Zn(t, e.child, null, l),
        (t.child.memoizedState = zs(l)),
        (t.memoizedState = $s),
        i);
  if (!(t.mode & 1)) return Eo(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = Al(i, r, void 0)), Eo(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ne || s)) {
    if (((r = de), r !== null)) {
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
          ((i.retryLane = o), Mt(e, o), at(r, e, o, -1));
    }
    return Au(), (r = Al(Error(C(421)))), Eo(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = a0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Ue = Kt(o.nextSibling)),
      (We = t),
      (G = !0),
      (st = null),
      e !== null &&
        ((Ze[Je++] = _t),
        (Ze[Je++] = Tt),
        (Ze[Je++] = hn),
        (_t = e.id),
        (Tt = e.overflow),
        (hn = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function sc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cs(e.return, t, n);
}
function Fl(e, t, n, r, o) {
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
function Ld(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Te(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && sc(e, n, t);
        else if (e.tag === 19) sc(e, n, t);
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
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && fi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Fl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && fi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Fl(t, !0, n, null, i);
        break;
      case "together":
        Fl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Nt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (gn |= t.lanes),
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
function Zm(e, t, n) {
  switch (t.tag) {
    case 3:
      Nd(t), Xn();
      break;
    case 5:
      ud(t);
      break;
    case 1:
      Le(t.type) && ii(t);
      break;
    case 4:
      ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      b(ui, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Id(e, t, n)
          : (b(X, X.current & 1),
            (e = Nt(e, t, n)),
            e !== null ? e.sibling : null);
      b(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ld(e, t, n);
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
      return (t.lanes = 0), Od(e, t, n);
  }
  return Nt(e, t, n);
}
var Ad, Os, Fd, Dd;
Ad = function (e, t) {
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
Os = function () {};
Fd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), an(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ql(e, o)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = ns(e, o)), (r = ns(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ri);
    }
    os(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var s = o[a];
          for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Ir.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var u = r[a];
      if (
        ((s = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && u !== s && (u != null || s != null))
      )
        if (a === "style")
          if (s) {
            for (l in s)
              !s.hasOwnProperty(l) ||
                (u && u.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in u)
              u.hasOwnProperty(l) &&
                s[l] !== u[l] &&
                (n || (n = {}), (n[l] = u[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = u);
        else
          a === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (s = s ? s.__html : void 0),
              u != null && s !== u && (i = i || []).push(a, u))
            : a === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (i = i || []).push(a, "" + u)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Ir.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && H("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Dd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function hr(e, t) {
  if (!G)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
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
function ke(e) {
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
function Jm(e, t, n) {
  var r = t.pendingProps;
  switch ((mu(t), t.tag)) {
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
      return ke(t), null;
    case 1:
      return Le(t.type) && oi(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Jn(),
        K(Ie),
        K(Pe),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ko(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (js(st), (st = null)))),
        Os(e, t),
        ke(t),
        null
      );
    case 5:
      Cu(t);
      var o = an(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ke(t), null;
        }
        if (((e = an(wt.current)), ko(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[br] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < kr.length; o++) H(kr[o], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              ga(r, i), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              va(r, i), H("invalid", r);
          }
          os(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      xo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      xo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ir.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              po(r), ya(r, i, !0);
              break;
            case "textarea":
              po(r), wa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ri);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ff(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = l.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = l.createElement(n, { is: r.is }))
                : ((e = l.createElement(n)),
                  n === "select" &&
                    ((l = e),
                    r.multiple
                      ? (l.multiple = !0)
                      : r.size && (l.size = r.size)))
              : (e = l.createElementNS(e, n)),
            (e[gt] = t),
            (e[br] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = is(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < kr.length; o++) H(kr[o], e);
                o = r;
                break;
              case "source":
                H("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (o = r);
                break;
              case "details":
                H("toggle", e), (o = r);
                break;
              case "input":
                ga(e, r), (o = ql(e, r)), H("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = J({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                va(e, r), (o = ns(e, r)), H("invalid", e);
                break;
              default:
                o = r;
            }
            os(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? hf(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && df(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Lr(e, u)
                    : typeof u == "number" && Lr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ir.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && H("scroll", e)
                      : u != null && eu(e, i, u, l));
              }
            switch (n) {
              case "input":
                po(e), ya(e, r, !1);
                break;
              case "textarea":
                po(e), wa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Zt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Bn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Bn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ri);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
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
      return ke(t), null;
    case 6:
      if (e && t.stateNode != null) Dd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = an(Kr.current)), an(wt.current), ko(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = We), e !== null))
          )
            switch (e.tag) {
              case 3:
                xo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  xo(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[gt] = t),
            (t.stateNode = r);
      }
      return ke(t), null;
    case 13:
      if (
        (K(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && Ue !== null && t.mode & 1 && !(t.flags & 128))
          td(), Xn(), (t.flags |= 98560), (i = !1);
        else if (((i = ko(t)), r !== null && r.dehydrated !== null)) {
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
            Xn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (i = !1);
        } else st !== null && (js(st), (st = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? ae === 0 && (ae = 3) : Au())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Jn(), Os(e, t), e === null && Wr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return wu(t.type._context), ke(t), null;
    case 17:
      return Le(t.type) && oi(), ke(t), null;
    case 19:
      if ((K(X), (i = t.memoizedState), i === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) hr(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = fi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    hr(i, !1),
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
            re() > er &&
            ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = fi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              hr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !G)
            )
              return ke(t), null;
          } else
            2 * re() - i.renderingStartTime > er &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), hr(i, !1), (t.lanes = 4194304));
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
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? je & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ke(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function qm(e, t) {
  switch ((mu(t), t.tag)) {
    case 1:
      return (
        Le(t.type) && oi(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Jn(),
        K(Ie),
        K(Pe),
        Eu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Cu(t), null;
    case 13:
      if ((K(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Xn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(X), null;
    case 4:
      return Jn(), null;
    case 10:
      return wu(t.type._context), null;
    case 22:
    case 23:
      return Lu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Po = !1,
  Ee = !1,
  e0 = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Dn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function Ms(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var uc = !1;
function t0(e, t) {
  if (((ms = ei), (e = Wf()), pu(e))) {
    if ("selectionStart" in e)
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
            d = null;
          t: for (;;) {
            for (
              var w;
              p !== n || (o !== 0 && p.nodeType !== 3) || (s = l + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (u = l + r),
                p.nodeType === 3 && (l += p.nodeValue.length),
                (w = p.firstChild) !== null;

            )
              (d = p), (p = w);
            for (;;) {
              if (p === e) break t;
              if (
                (d === n && ++a === o && (s = l),
                d === i && ++m === r && (u = l),
                (w = p.nextSibling) !== null)
              )
                break;
              (p = d), (d = p.parentNode);
            }
            p = w;
          }
          n = s === -1 || u === -1 ? null : { start: s, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gs = { focusedElem: e, selectionRange: n }, ei = !1, R = t; R !== null; )
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
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
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
                throw Error(C(163));
            }
        } catch (v) {
          te(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (y = uc), (uc = !1), y;
}
function $r(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ms(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function zi(e, t) {
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
function Ns(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function jd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), jd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[br], delete t[ws], delete t[Fm], delete t[Dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Bd(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ac(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Bd(e.return)) return null;
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
function Is(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ri));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Is(e, t, n), e = e.sibling; e !== null; ) Is(e, t, n), (e = e.sibling);
}
function Ls(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ls(e, t, n), e = e.sibling; e !== null; ) Ls(e, t, n), (e = e.sibling);
}
var me = null,
  lt = !1;
function At(e, t, n) {
  for (n = n.child; n !== null; ) Ud(e, t, n), (n = n.sibling);
}
function Ud(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(ki, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Dn(n, t);
    case 6:
      var r = me,
        o = lt;
      (me = null),
        At(e, t, n),
        (me = r),
        (lt = o),
        me !== null &&
          (lt
            ? ((e = me),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : me.removeChild(n.stateNode));
      break;
    case 18:
      me !== null &&
        (lt
          ? ((e = me),
            (n = n.stateNode),
            e.nodeType === 8
              ? zl(e.parentNode, n)
              : e.nodeType === 1 && zl(e, n),
            jr(e))
          : zl(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (o = lt),
        (me = n.stateNode.containerInfo),
        (lt = !0),
        At(e, t, n),
        (me = r),
        (lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ee &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Ms(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      At(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Dn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (s) {
          te(n, t, s);
        }
      At(e, t, n);
      break;
    case 21:
      At(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), At(e, t, n), (Ee = r))
        : At(e, t, n);
      break;
    default:
      At(e, t, n);
  }
}
function cc(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new e0()),
      t.forEach(function (r) {
        var o = c0.bind(null, e, r);
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
              (me = s.stateNode), (lt = !1);
              break e;
            case 3:
              (me = s.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (me = s.stateNode.containerInfo), (lt = !0);
              break e;
          }
          s = s.return;
        }
        if (me === null) throw Error(C(160));
        Ud(i, l, o), (me = null), (lt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        te(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Wd(t, e), (t = t.sibling);
}
function Wd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), dt(e), r & 4)) {
        try {
          $r(3, e, e.return), zi(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          $r(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
        }
      }
      break;
    case 1:
      ot(t, e), dt(e), r & 512 && n !== null && Dn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        dt(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Lr(o, "");
        } catch (g) {
          te(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          s = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            s === "input" && i.type === "radio" && i.name != null && af(o, i),
              is(s, l);
            var a = is(s, i);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                p = u[l + 1];
              m === "style"
                ? hf(o, p)
                : m === "dangerouslySetInnerHTML"
                ? df(o, p)
                : m === "children"
                ? Lr(o, p)
                : eu(o, m, p, a);
            }
            switch (s) {
              case "input":
                es(o, i);
                break;
              case "textarea":
                cf(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Bn(o, !!i.multiple, w, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Bn(o, !!i.multiple, i.defaultValue, !0)
                      : Bn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[br] = i;
          } catch (g) {
            te(e, e.return, g);
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
          te(e, e.return, g);
        }
      }
      break;
    case 3:
      if (
        (ot(t, e), dt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          jr(t.containerInfo);
        } catch (g) {
          te(e, e.return, g);
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
            (Nu = re())),
        r & 4 && cc(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ee = (a = Ee) || m), ot(t, e), (Ee = a)) : ot(t, e),
        dt(e),
        r & 8192)
      ) {
        if (
          ((a = e.memoizedState !== null),
          (e.stateNode.isHidden = a) && !m && e.mode & 1)
        )
          for (R = e, m = e.child; m !== null; ) {
            for (p = R = m; R !== null; ) {
              switch (((d = R), (w = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, d, d.return);
                  break;
                case 1:
                  Dn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (g) {
                      te(r, n, g);
                    }
                  }
                  break;
                case 5:
                  Dn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    dc(p);
                    continue;
                  }
              }
              w !== null ? ((w.return = d), (R = w)) : dc(p);
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
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = p.stateNode),
                      (u = p.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = pf("display", l)));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (p.tag === 6) {
            if (m === null)
              try {
                p.stateNode.nodeValue = a ? "" : p.memoizedProps;
              } catch (g) {
                te(e, e.return, g);
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
      ot(t, e), dt(e), r & 4 && cc(e);
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
          if (Bd(n)) {
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
          r.flags & 32 && (Lr(o, ""), (r.flags &= -33));
          var i = ac(e);
          Ls(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = ac(e);
          Is(e, s, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (u) {
      te(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function n0(e, t, n) {
  (R = e), Vd(e);
}
function Vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Po;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || Ee;
        s = Po;
        var a = Ee;
        if (((Po = l), (Ee = u) && !a))
          for (R = o; R !== null; )
            (l = R),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? pc(o)
                : u !== null
                ? ((u.return = l), (R = u))
                : pc(o);
        for (; i !== null; ) (R = i), Vd(i), (i = i.sibling);
        (R = o), (Po = s), (Ee = a);
      }
      fc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : fc(e);
  }
}
function fc(e) {
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
              Ee || zi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ee)
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
              i !== null && Ga(t, i, r);
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
                Ga(t, l, n);
              }
              break;
            case 5:
              var s = t.stateNode;
              if (n === null && t.flags & 4) {
                n = s;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
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
                    p !== null && jr(p);
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
        Ee || (t.flags & 512 && Ns(t));
      } catch (d) {
        te(t, t.return, d);
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
function dc(e) {
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
function pc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            zi(4, t);
          } catch (u) {
            te(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              te(t, o, u);
            }
          }
          var i = t.return;
          try {
            Ns(t);
          } catch (u) {
            te(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Ns(t);
          } catch (u) {
            te(t, l, u);
          }
      }
    } catch (u) {
      te(t, t.return, u);
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
var r0 = Math.ceil,
  hi = Lt.ReactCurrentDispatcher,
  Ou = Lt.ReactCurrentOwner,
  et = Lt.ReactCurrentBatchConfig,
  A = 0,
  de = null,
  ie = null,
  ve = 0,
  je = 0,
  jn = en(0),
  ae = 0,
  Xr = null,
  gn = 0,
  Oi = 0,
  Mu = 0,
  zr = null,
  Me = null,
  Nu = 0,
  er = 1 / 0,
  Ct = null,
  mi = !1,
  As = null,
  Gt = null,
  _o = !1,
  Wt = null,
  gi = 0,
  Or = 0,
  Fs = null,
  Uo = -1,
  Wo = 0;
function Re() {
  return A & 6 ? re() : Uo !== -1 ? Uo : (Uo = re());
}
function Yt(e) {
  return e.mode & 1
    ? A & 2 && ve !== 0
      ? ve & -ve
      : Bm.transition !== null
      ? (Wo === 0 && (Wo = _f()), Wo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Nf(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (Fs = null), Error(C(185)));
  no(e, n, r),
    (!(A & 2) || e !== de) &&
      (e === de && (!(A & 2) && (Oi |= n), ae === 4 && Bt(e, ve)),
      Ae(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((er = re() + 500), Ti && tn()));
}
function Ae(e, t) {
  var n = e.callbackNode;
  Bh(e, t);
  var r = qo(e, e === de ? ve : 0);
  if (r === 0)
    n !== null && ka(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ka(n), t === 1))
      e.tag === 0 ? jm(hc.bind(null, e)) : Jf(hc.bind(null, e)),
        Lm(function () {
          !(A & 6) && tn();
        }),
        (n = null);
    else {
      switch (Tf(r)) {
        case 1:
          n = iu;
          break;
        case 4:
          n = Ef;
          break;
        case 16:
          n = Jo;
          break;
        case 536870912:
          n = Pf;
          break;
        default:
          n = Jo;
      }
      n = Zd(n, bd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function bd(e, t) {
  if (((Uo = -1), (Wo = 0), A & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Hn() && e.callbackNode !== n) return null;
  var r = qo(e, e === de ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yi(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var i = Kd();
    (de !== e || ve !== t) && ((Ct = null), (er = re() + 500), fn(e, t));
    do
      try {
        l0();
        break;
      } catch (s) {
        Hd(e, s);
      }
    while (1);
    vu(),
      (hi.current = i),
      (A = o),
      ie !== null ? (t = 0) : ((de = null), (ve = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = cs(e)), o !== 0 && ((r = o), (t = Ds(e, o)))), t === 1)
    )
      throw ((n = Xr), fn(e, 0), Bt(e, r), Ae(e, re()), n);
    if (t === 6) Bt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !o0(o) &&
          ((t = yi(e, r)),
          t === 2 && ((i = cs(e)), i !== 0 && ((r = i), (t = Ds(e, i)))),
          t === 1))
      )
        throw ((n = Xr), fn(e, 0), Bt(e, r), Ae(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          on(e, Me, Ct);
          break;
        case 3:
          if (
            (Bt(e, r), (r & 130023424) === r && ((t = Nu + 500 - re()), 10 < t))
          ) {
            if (qo(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              Re(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = vs(on.bind(null, e, Me, Ct), t);
            break;
          }
          on(e, Me, Ct);
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
                : 1960 * r0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vs(on.bind(null, e, Me, Ct), r);
            break;
          }
          on(e, Me, Ct);
          break;
        case 5:
          on(e, Me, Ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Ae(e, re()), e.callbackNode === n ? bd.bind(null, e) : null;
}
function Ds(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    (e = yi(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && js(t)),
    e
  );
}
function js(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function o0(e) {
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
    t &= ~Mu,
      t &= ~Oi,
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
function hc(e) {
  if (A & 6) throw Error(C(327));
  Hn();
  var t = qo(e, 0);
  if (!(t & 1)) return Ae(e, re()), null;
  var n = yi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cs(e);
    r !== 0 && ((t = r), (n = Ds(e, r)));
  }
  if (n === 1) throw ((n = Xr), fn(e, 0), Bt(e, t), Ae(e, re()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    on(e, Me, Ct),
    Ae(e, re()),
    null
  );
}
function Iu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((er = re() + 500), Ti && tn());
  }
}
function yn(e) {
  Wt !== null && Wt.tag === 0 && !(A & 6) && Hn();
  var t = A;
  A |= 1;
  var n = et.transition,
    r = U;
  try {
    if (((et.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (et.transition = n), (A = t), !(A & 6) && tn();
  }
}
function Lu() {
  (je = jn.current), K(jn);
}
function fn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Im(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && oi();
          break;
        case 3:
          Jn(), K(Ie), K(Pe), Eu();
          break;
        case 5:
          Cu(r);
          break;
        case 4:
          Jn();
          break;
        case 13:
          K(X);
          break;
        case 19:
          K(X);
          break;
        case 10:
          wu(r.type._context);
          break;
        case 22:
        case 23:
          Lu();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ie = e = Xt(e.current, null)),
    (ve = je = t),
    (ae = 0),
    (Xr = null),
    (Mu = Oi = gn = 0),
    (Me = zr = null),
    un !== null)
  ) {
    for (t = 0; t < un.length; t++)
      if (((n = un[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    un = null;
  }
  return e;
}
function Hd(e, t) {
  do {
    var n = ie;
    try {
      if ((vu(), (Do.current = pi), di)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        di = !1;
      }
      if (
        ((mn = 0),
        (fe = ue = Z = null),
        (Rr = !1),
        (Qr = 0),
        (Ou.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Xr = t), (ie = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          s = n,
          u = t;
        if (
          ((t = ve),
          (s.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var a = u,
            m = s,
            p = m.tag;
          if (!(m.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = tc(l);
          if (w !== null) {
            (w.flags &= -257),
              nc(w, l, s, i, t),
              w.mode & 1 && ec(i, a, t),
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
              ec(i, a, t), Au();
              break e;
            }
            u = Error(C(426));
          }
        } else if (G && s.mode & 1) {
          var P = tc(l);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256),
              nc(P, l, s, i, t),
              gu(qn(u, s));
            break e;
          }
        }
        (i = u = qn(u, s)),
          ae !== 4 && (ae = 2),
          zr === null ? (zr = [i]) : zr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Rd(i, u, t);
              Qa(i, f);
              break e;
            case 1:
              s = u;
              var c = i.type,
                h = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Gt === null || !Gt.has(h))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = $d(i, s, t);
                Qa(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Gd(n);
    } catch (S) {
      (t = S), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Kd() {
  var e = hi.current;
  return (hi.current = pi), e === null ? pi : e;
}
function Au() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    de === null || (!(gn & 268435455) && !(Oi & 268435455)) || Bt(de, ve);
}
function yi(e, t) {
  var n = A;
  A |= 2;
  var r = Kd();
  (de !== e || ve !== t) && ((Ct = null), fn(e, t));
  do
    try {
      i0();
      break;
    } catch (o) {
      Hd(e, o);
    }
  while (1);
  if ((vu(), (A = n), (hi.current = r), ie !== null)) throw Error(C(261));
  return (de = null), (ve = 0), ae;
}
function i0() {
  for (; ie !== null; ) Qd(ie);
}
function l0() {
  for (; ie !== null && !Oh(); ) Qd(ie);
}
function Qd(e) {
  var t = Xd(e.alternate, e, je);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gd(e) : (ie = t),
    (Ou.current = null);
}
function Gd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = qm(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    } else if (((n = Jm(n, t, je)), n !== null)) {
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
function on(e, t, n) {
  var r = U,
    o = et.transition;
  try {
    (et.transition = null), (U = 1), s0(e, t, n, r);
  } finally {
    (et.transition = o), (U = r);
  }
  return null;
}
function s0(e, t, n, r) {
  do Hn();
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
    (Uh(e, i),
    e === de && ((ie = de = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      _o ||
      ((_o = !0),
      Zd(Jo, function () {
        return Hn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = et.transition), (et.transition = null);
    var l = U;
    U = 1;
    var s = A;
    (A |= 4),
      (Ou.current = null),
      t0(e, n),
      Wd(n, e),
      Tm(gs),
      (ei = !!ms),
      (gs = ms = null),
      (e.current = n),
      n0(n),
      Mh(),
      (A = s),
      (U = l),
      (et.transition = i);
  } else e.current = n;
  if (
    (_o && ((_o = !1), (Wt = e), (gi = o)),
    (i = e.pendingLanes),
    i === 0 && (Gt = null),
    Lh(n.stateNode),
    Ae(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (mi) throw ((mi = !1), (e = As), (As = null), e);
  return (
    gi & 1 && e.tag !== 0 && Hn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fs ? Or++ : ((Or = 0), (Fs = e))) : (Or = 0),
    tn(),
    null
  );
}
function Hn() {
  if (Wt !== null) {
    var e = Tf(gi),
      t = et.transition,
      n = U;
    try {
      if (((et.transition = null), (U = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (gi = 0), A & 6)) throw Error(C(331));
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
                      $r(8, m, i);
                  }
                  var p = m.child;
                  if (p !== null) (p.return = m), (R = p);
                  else
                    for (; R !== null; ) {
                      m = R;
                      var d = m.sibling,
                        w = m.return;
                      if ((jd(m), m === a)) {
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
                    $r(9, i, i.return);
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
          var h = l.child;
          if (l.subtreeFlags & 2064 && h !== null) (h.return = l), (R = h);
          else
            e: for (l = c; R !== null; ) {
              if (((s = R), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      zi(9, s);
                  }
                } catch (S) {
                  te(s, s.return, S);
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
          ((A = o), tn(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(ki, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (et.transition = t);
    }
  }
  return !1;
}
function mc(e, t, n) {
  (t = qn(n, t)),
    (t = Rd(e, t, 1)),
    (e = Qt(e, t, 1)),
    (t = Re()),
    e !== null && (no(e, 1, t), Ae(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) mc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        mc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Gt === null || !Gt.has(r)))
        ) {
          (e = qn(n, e)),
            (e = $d(t, e, 1)),
            (t = Qt(t, e, 1)),
            (e = Re()),
            t !== null && (no(t, 1, e), Ae(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function u0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Re()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (ve & n) === n &&
      (ae === 4 || (ae === 3 && (ve & 130023424) === ve && 500 > re() - Nu)
        ? fn(e, 0)
        : (Mu |= n)),
    Ae(e, t);
}
function Yd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = go), (go <<= 1), !(go & 130023424) && (go = 4194304))
      : (t = 1));
  var n = Re();
  (e = Mt(e, t)), e !== null && (no(e, t, n), Ae(e, n));
}
function a0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Yd(e, n);
}
function c0(e, t) {
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
  r !== null && r.delete(t), Yd(e, n);
}
var Xd;
Xd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Ie.current) Ne = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ne = !1), Zm(e, t, n);
      Ne = !!(e.flags & 131072);
    }
  else (Ne = !1), G && t.flags & 1048576 && qf(t, si, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Bo(e, t), (e = t.pendingProps);
      var o = Yn(t, Pe.current);
      bn(t, n), (o = _u(null, t, r, e, o, n));
      var i = Tu();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Le(r) ? ((i = !0), ii(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            xu(t),
            (o.updater = Ri),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ps(t, r, e, n),
            (t = Rs(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && hu(t), Te(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Bo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = d0(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = Ts(null, t, r, e, n);
            break e;
          case 1:
            t = ic(null, t, r, e, n);
            break e;
          case 11:
            t = rc(null, t, r, e, n);
            break e;
          case 14:
            t = oc(null, t, r, it(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Ts(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        ic(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Nd(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          rd(e, t),
          ci(t, r, null, n);
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
            (o = qn(Error(C(423)), t)), (t = lc(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = qn(Error(C(424)), t)), (t = lc(e, t, r, n, o));
            break e;
          } else
            for (
              Ue = Kt(t.stateNode.containerInfo.firstChild),
                We = t,
                G = !0,
                st = null,
                n = sd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Xn(), r === o)) {
            t = Nt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ud(t),
        e === null && ks(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        ys(r, o) ? (l = null) : i !== null && ys(r, i) && (t.flags |= 32),
        Md(e, t),
        Te(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ks(t), null;
    case 13:
      return Id(e, t, n);
    case 4:
      return (
        ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zn(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        rc(e, t, r, o, n)
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
          b(ui, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ct(i.value, l)) {
            if (i.children === o.children && !Ie.current) {
              t = Nt(e, t, n);
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
                      (u = Rt(-1, n & -n)), (u.tag = 2);
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
                      Cs(i.return, n, t),
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
                  Cs(l, n, t),
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
        bn(t, n),
        (o = tt(o)),
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
        oc(e, t, r, o, n)
      );
    case 15:
      return zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Bo(e, t),
        (t.tag = 1),
        Le(r) ? ((e = !0), ii(t)) : (e = !1),
        bn(t, n),
        id(t, r, o),
        Ps(t, r, o, n),
        Rs(null, t, r, !0, e, n)
      );
    case 19:
      return Ld(e, t, n);
    case 22:
      return Od(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Zd(e, t) {
  return Cf(e, t);
}
function f0(e, t, n, r) {
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
function qe(e, t, n, r) {
  return new f0(e, t, n, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function d0(e) {
  if (typeof e == "function") return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nu)) return 11;
    if (e === ru) return 14;
  }
  return 2;
}
function Xt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = qe(e.tag, t, e.key, e.mode)),
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
function Vo(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Fu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case $n:
        return dn(n.children, o, i, t);
      case tu:
        (l = 8), (o |= 8);
        break;
      case Yl:
        return (
          (e = qe(12, n, t, o | 2)), (e.elementType = Yl), (e.lanes = i), e
        );
      case Xl:
        return (e = qe(13, n, t, o)), (e.elementType = Xl), (e.lanes = i), e;
      case Zl:
        return (e = qe(19, n, t, o)), (e.elementType = Zl), (e.lanes = i), e;
      case lf:
        return Mi(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case rf:
              l = 10;
              break e;
            case of:
              l = 9;
              break e;
            case nu:
              l = 11;
              break e;
            case ru:
              l = 14;
              break e;
            case Ft:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function dn(e, t, n, r) {
  return (e = qe(7, e, r, t)), (e.lanes = n), e;
}
function Mi(e, t, n, r) {
  return (
    (e = qe(22, e, r, t)),
    (e.elementType = lf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Dl(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function jl(e, t, n) {
  return (
    (t = qe(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function p0(e, t, n, r, o) {
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
    (this.eventTimes = wl(0)),
    (this.expirationTimes = wl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = wl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Du(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new p0(e, t, n, s, u)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = qe(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    xu(i),
    e
  );
}
function h0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Rn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jd(e) {
  if (!e) return Jt;
  e = e._reactInternals;
  e: {
    if (Sn(e) !== e || e.tag !== 1) throw Error(C(170));
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
    if (Le(n)) return Zf(e, n, t);
  }
  return t;
}
function qd(e, t, n, r, o, i, l, s, u) {
  return (
    (e = Du(n, r, !0, e, o, i, l, s, u)),
    (e.context = Jd(null)),
    (n = e.current),
    (r = Re()),
    (o = Yt(n)),
    (i = Rt(r, o)),
    (i.callback = t ?? null),
    Qt(n, i, o),
    (e.current.lanes = o),
    no(e, o, r),
    Ae(e, r),
    e
  );
}
function Ni(e, t, n, r) {
  var o = t.current,
    i = Re(),
    l = Yt(o);
  return (
    (n = Jd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Qt(o, t, l)),
    e !== null && (at(e, o, l, i), Fo(e, o, l)),
    l
  );
}
function vi(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function gc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  gc(e, t), (e = e.alternate) && gc(e, t);
}
function m0() {
  return null;
}
var ep =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bu(e) {
  this._internalRoot = e;
}
Ii.prototype.render = Bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ni(e, t, null, null);
};
Ii.prototype.unmount = Bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    yn(function () {
      Ni(null, e, null, null);
    }),
      (t[Ot] = null);
  }
};
function Ii(e) {
  this._internalRoot = e;
}
Ii.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
    jt.splice(n, 0, e), n === 0 && Mf(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Li(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function yc() {}
function g0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = vi(l);
        i.call(a);
      };
    }
    var l = qd(t, r, e, 0, null, !1, !1, "", yc);
    return (
      (e._reactRootContainer = l),
      (e[Ot] = l.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      yn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = vi(u);
      s.call(a);
    };
  }
  var u = Du(e, 0, !1, null, null, !1, !1, "", yc);
  return (
    (e._reactRootContainer = u),
    (e[Ot] = u.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    yn(function () {
      Ni(t, u, n, r);
    }),
    u
  );
}
function Ai(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = vi(l);
        s.call(u);
      };
    }
    Ni(t, l, e, o);
  } else l = g0(n, t, e, o, r);
  return vi(l);
}
Rf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = xr(t.pendingLanes);
        n !== 0 &&
          (lu(t, n | 1), Ae(t, re()), !(A & 6) && ((er = re() + 500), tn()));
      }
      break;
    case 13:
      yn(function () {
        var r = Mt(e, 1);
        if (r !== null) {
          var o = Re();
          at(r, e, 1, o);
        }
      }),
        ju(e, 1);
  }
};
su = function (e) {
  if (e.tag === 13) {
    var t = Mt(e, 134217728);
    if (t !== null) {
      var n = Re();
      at(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
$f = function (e) {
  if (e.tag === 13) {
    var t = Yt(e),
      n = Mt(e, t);
    if (n !== null) {
      var r = Re();
      at(n, e, t, r);
    }
    ju(e, t);
  }
};
zf = function () {
  return U;
};
Of = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
ss = function (e, t, n) {
  switch (t) {
    case "input":
      if ((es(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = _i(r);
            if (!o) throw Error(C(90));
            uf(r), es(r, o);
          }
        }
      }
      break;
    case "textarea":
      cf(e, n);
      break;
    case "select":
      (t = n.value), t != null && Bn(e, !!n.multiple, t, !1);
  }
};
yf = Iu;
vf = yn;
var y0 = { usingClientEntryPoint: !1, Events: [oo, Nn, _i, mf, gf, Iu] },
  mr = {
    findFiberByHostInstance: sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  v0 = {
    bundleType: mr.bundleType,
    version: mr.version,
    rendererPackageName: mr.rendererPackageName,
    rendererConfig: mr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: mr.findFiberByHostInstance || m0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var To = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!To.isDisabled && To.supportsFiber)
    try {
      (ki = To.inject(v0)), (vt = To);
    } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = y0;
He.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(C(200));
  return h0(e, t, null, n);
};
He.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = ep;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Du(e, 1, !1, null, null, n, !1, r, o)),
    (e[Ot] = t.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
  );
};
He.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = xf(t)), (e = e === null ? null : e.stateNode), e;
};
He.flushSync = function (e) {
  return yn(e);
};
He.hydrate = function (e, t, n) {
  if (!Li(t)) throw Error(C(200));
  return Ai(null, e, t, !0, n);
};
He.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = ep;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = qd(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[Ot] = t.current),
    Wr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ii(t);
};
He.render = function (e, t, n) {
  if (!Li(t)) throw Error(C(200));
  return Ai(null, e, t, !1, n);
};
He.unmountComponentAtNode = function (e) {
  if (!Li(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (yn(function () {
        Ai(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ot] = null);
        });
      }),
      !0)
    : !1;
};
He.unstable_batchedUpdates = Iu;
He.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Li(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Ai(e, t, n, !1, r);
};
He.version = "18.2.0-next-9e3b772b8-20220608";
(function (e) {
  function t() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (n) {
        console.error(n);
      }
  }
  t(), (e.exports = He);
})(mh);
var vc = Kl;
(Hl.createRoot = vc.createRoot), (Hl.hydrateRoot = vc.hydrateRoot);
const w0 = { black: "#000", white: "#fff" },
  Zr = w0,
  S0 = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    A100: "#ff8a80",
    A200: "#ff5252",
    A400: "#ff1744",
    A700: "#d50000",
  },
  Cn = S0,
  x0 = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    A100: "#ea80fc",
    A200: "#e040fb",
    A400: "#d500f9",
    A700: "#aa00ff",
  },
  En = x0,
  k0 = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    A100: "#82b1ff",
    A200: "#448aff",
    A400: "#2979ff",
    A700: "#2962ff",
  },
  Pn = k0,
  C0 = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    A100: "#80d8ff",
    A200: "#40c4ff",
    A400: "#00b0ff",
    A700: "#0091ea",
  },
  _n = C0,
  E0 = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    A100: "#b9f6ca",
    A200: "#69f0ae",
    A400: "#00e676",
    A700: "#00c853",
  },
  Tn = E0,
  P0 = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    A100: "#ffd180",
    A200: "#ffab40",
    A400: "#ff9100",
    A700: "#ff6d00",
  },
  gr = P0,
  _0 = {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
  },
  T0 = _0;
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
function ln(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function tp(e) {
  if (!ln(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = tp(e[n]);
    }),
    t
  );
}
function $t(e, t, n = { clone: !0 }) {
  const r = n.clone ? O({}, e) : e;
  return (
    ln(e) &&
      ln(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (ln(t[o]) && o in e && ln(e[o])
            ? (r[o] = $t(e[o], t[o], n))
            : n.clone
            ? (r[o] = ln(t[o]) ? tp(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function tr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function ye(e) {
  if (typeof e != "string") throw new Error(tr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function R0(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const $0 = typeof window < "u" ? _.useLayoutEffect : _.useEffect,
  z0 = $0;
function Ro(e) {
  const t = _.useRef(e);
  return (
    z0(() => {
      t.current = e;
    }),
    _.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function wc(...e) {
  return _.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              R0(n, t);
            });
          },
    e
  );
}
let Fi = !0,
  Bs = !1,
  Sc;
const O0 = {
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
  "datetime-local": !0,
};
function M0(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && O0[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function N0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Fi = !0);
}
function Bl() {
  Fi = !1;
}
function I0() {
  this.visibilityState === "hidden" && Bs && (Fi = !0);
}
function L0(e) {
  e.addEventListener("keydown", N0, !0),
    e.addEventListener("mousedown", Bl, !0),
    e.addEventListener("pointerdown", Bl, !0),
    e.addEventListener("touchstart", Bl, !0),
    e.addEventListener("visibilitychange", I0, !0);
}
function A0(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Fi || M0(t);
}
function F0() {
  const e = _.useCallback((o) => {
      o != null && L0(o.ownerDocument);
    }, []),
    t = _.useRef(!1);
  function n() {
    return t.current
      ? ((Bs = !0),
        window.clearTimeout(Sc),
        (Sc = window.setTimeout(() => {
          Bs = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return A0(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Wu(e, t) {
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
                n[r][l] = Wu(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Vu(e, t, n) {
  const r = {};
  return (
    Object.keys(e).forEach((o) => {
      r[o] = e[o]
        .reduce(
          (i, l) => (l && (i.push(t(l)), n && n[l] && i.push(n[l])), i),
          []
        )
        .join(" ");
    }),
    r
  );
}
const xc = (e) => e,
  D0 = () => {
    let e = xc;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = xc;
      },
    };
  },
  j0 = D0(),
  np = j0,
  B0 = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    required: "required",
    selected: "selected",
  };
function Di(e, t, n = "Mui") {
  const r = B0[t];
  return r ? `${n}-${r}` : `${np.generate(e)}-${t}`;
}
function ji(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Di(e, o, n);
    }),
    r
  );
}
function we(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    o,
    i;
  for (i = 0; i < r.length; i++)
    (o = r[i]), !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function rp(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var U0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  W0 = rp(function (e) {
    return (
      U0.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function V0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function b0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var H0 = (function () {
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
          this._insertTag(b0(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = V0(o);
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
  Ce = "-ms-",
  wi = "-moz-",
  F = "-webkit-",
  op = "comm",
  bu = "rule",
  Hu = "decl",
  K0 = "@import",
  ip = "@keyframes",
  Q0 = Math.abs,
  Bi = String.fromCharCode,
  G0 = Object.assign;
function Y0(e, t) {
  return ge(e, 0) ^ 45
    ? (((((((t << 2) ^ ge(e, 0)) << 2) ^ ge(e, 1)) << 2) ^ ge(e, 2)) << 2) ^
        ge(e, 3)
    : 0;
}
function lp(e) {
  return e.trim();
}
function X0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function Us(e, t) {
  return e.indexOf(t);
}
function ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function Jr(e, t, n) {
  return e.slice(t, n);
}
function ht(e) {
  return e.length;
}
function Ku(e) {
  return e.length;
}
function $o(e, t) {
  return t.push(e), e;
}
function Z0(e, t) {
  return e.map(t).join("");
}
var Ui = 1,
  nr = 1,
  sp = 0,
  Fe = 0,
  oe = 0,
  lr = "";
function Wi(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Ui,
    column: nr,
    length: l,
    return: "",
  };
}
function yr(e, t) {
  return G0(Wi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function J0() {
  return oe;
}
function q0() {
  return (
    (oe = Fe > 0 ? ge(lr, --Fe) : 0), nr--, oe === 10 && ((nr = 1), Ui--), oe
  );
}
function Ve() {
  return (
    (oe = Fe < sp ? ge(lr, Fe++) : 0), nr++, oe === 10 && ((nr = 1), Ui++), oe
  );
}
function St() {
  return ge(lr, Fe);
}
function bo() {
  return Fe;
}
function lo(e, t) {
  return Jr(lr, e, t);
}
function qr(e) {
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
function up(e) {
  return (Ui = nr = 1), (sp = ht((lr = e))), (Fe = 0), [];
}
function ap(e) {
  return (lr = ""), e;
}
function Ho(e) {
  return lp(lo(Fe - 1, Ws(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function eg(e) {
  for (; (oe = St()) && oe < 33; ) Ve();
  return qr(e) > 2 || qr(oe) > 3 ? "" : " ";
}
function tg(e, t) {
  for (
    ;
    --t &&
    Ve() &&
    !(oe < 48 || oe > 102 || (oe > 57 && oe < 65) || (oe > 70 && oe < 97));

  );
  return lo(e, bo() + (t < 6 && St() == 32 && Ve() == 32));
}
function Ws(e) {
  for (; Ve(); )
    switch (oe) {
      case e:
        return Fe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ws(oe);
        break;
      case 40:
        e === 41 && Ws(e);
        break;
      case 92:
        Ve();
        break;
    }
  return Fe;
}
function ng(e, t) {
  for (; Ve() && e + oe !== 47 + 10; )
    if (e + oe === 42 + 42 && St() === 47) break;
  return "/*" + lo(t, Fe - 1) + "*" + Bi(e === 47 ? e : Ve());
}
function rg(e) {
  for (; !qr(St()); ) Ve();
  return lo(e, Fe);
}
function og(e) {
  return ap(Ko("", null, null, null, [""], (e = up(e)), 0, [0], e));
}
function Ko(e, t, n, r, o, i, l, s, u) {
  for (
    var a = 0,
      m = 0,
      p = l,
      d = 0,
      w = 0,
      y = 0,
      g = 1,
      P = 1,
      f = 1,
      c = 0,
      h = "",
      v = o,
      S = i,
      k = r,
      x = h;
    P;

  )
    switch (((y = c), (c = Ve()))) {
      case 40:
        if (y != 108 && ge(x, p - 1) == 58) {
          Us((x += j(Ho(c), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Ho(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += eg(y);
        break;
      case 92:
        x += tg(bo() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            $o(ig(ng(Ve(), bo()), t, n), u);
            break;
          default:
            x += "/";
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
              ht(x) - p &&
              $o(
                w > 32
                  ? Cc(x + ";", r, n, p - 1)
                  : Cc(j(x, " ", "") + ";", r, n, p - 2),
                u
              );
            break;
          case 59:
            x += ";";
          default:
            if (
              ($o((k = kc(x, t, n, a, m, o, s, h, (v = []), (S = []), p)), i),
              c === 123)
            )
              if (m === 0) Ko(x, t, k, k, v, i, p, s, S);
              else
                switch (d === 99 && ge(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Ko(
                      e,
                      k,
                      k,
                      r && $o(kc(e, k, k, 0, 0, o, s, h, o, (v = []), p), S),
                      o,
                      S,
                      p,
                      s,
                      r ? v : S
                    );
                    break;
                  default:
                    Ko(x, k, k, k, [""], S, 0, s, S);
                }
        }
        (a = m = w = 0), (g = f = 1), (h = x = ""), (p = l);
        break;
      case 58:
        (p = 1 + ht(x)), (w = y);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && q0() == 125) continue;
        }
        switch (((x += Bi(c)), c * g)) {
          case 38:
            f = m > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (s[a++] = (ht(x) - 1) * f), (f = 1);
            break;
          case 64:
            St() === 45 && (x += Ho(Ve())),
              (d = St()),
              (m = p = ht((h = x += rg(bo())))),
              c++;
            break;
          case 45:
            y === 45 && ht(x) == 2 && (g = 0);
        }
    }
  return i;
}
function kc(e, t, n, r, o, i, l, s, u, a, m) {
  for (
    var p = o - 1, d = o === 0 ? i : [""], w = Ku(d), y = 0, g = 0, P = 0;
    y < r;
    ++y
  )
    for (var f = 0, c = Jr(e, p + 1, (p = Q0((g = l[y])))), h = e; f < w; ++f)
      (h = lp(g > 0 ? d[f] + " " + c : j(c, /&\f/g, d[f]))) && (u[P++] = h);
  return Wi(e, t, n, o === 0 ? bu : s, u, a, m);
}
function ig(e, t, n) {
  return Wi(e, t, n, op, Bi(J0()), Jr(e, 2, -2), 0);
}
function Cc(e, t, n, r) {
  return Wi(e, t, n, Hu, Jr(e, 0, r), Jr(e, r + 1, -1), r);
}
function Kn(e, t) {
  for (var n = "", r = Ku(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function lg(e, t, n, r) {
  switch (e.type) {
    case K0:
    case Hu:
      return (e.return = e.return || e.value);
    case op:
      return "";
    case ip:
      return (e.return = e.value + "{" + Kn(e.children, r) + "}");
    case bu:
      e.value = e.props.join(",");
  }
  return ht((n = Kn(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function sg(e) {
  var t = Ku(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function ug(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var ag = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = St()), o === 38 && i === 12 && (n[r] = 1), !qr(i);

    )
      Ve();
    return lo(t, Fe);
  },
  cg = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (qr(o)) {
        case 0:
          o === 38 && St() === 12 && (n[r] = 1), (t[r] += ag(Fe - 1, n, r));
          break;
        case 2:
          t[r] += Ho(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = St() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Bi(o);
      }
    while ((o = Ve()));
    return t;
  },
  fg = function (t, n) {
    return ap(cg(up(t), n));
  },
  Ec = new WeakMap(),
  dg = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Ec.get(r)) &&
        !o
      ) {
        Ec.set(t, !0);
        for (
          var i = [], l = fg(n, i), s = r.props, u = 0, a = 0;
          u < l.length;
          u++
        )
          for (var m = 0; m < s.length; m++, a++)
            t.props[a] = i[u] ? l[u].replace(/&\f/g, s[m]) : s[m] + " " + l[u];
      }
    }
  },
  pg = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function cp(e, t) {
  switch (Y0(e, t)) {
    case 5103:
      return F + "print-" + e + e;
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
      return F + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return F + e + wi + e + Ce + e + e;
    case 6828:
    case 4268:
      return F + e + Ce + e + e;
    case 6165:
      return F + e + Ce + "flex-" + e + e;
    case 5187:
      return (
        F + e + j(e, /(\w+).+(:[^]+)/, F + "box-$1$2" + Ce + "flex-$1$2") + e
      );
    case 5443:
      return F + e + Ce + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        F +
        e +
        Ce +
        "flex-line-pack" +
        j(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return F + e + Ce + j(e, "shrink", "negative") + e;
    case 5292:
      return F + e + Ce + j(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        F +
        "box-" +
        j(e, "-grow", "") +
        F +
        e +
        Ce +
        j(e, "grow", "positive") +
        e
      );
    case 4554:
      return F + j(e, /([^-])(transform)/g, "$1" + F + "$2") + e;
    case 6187:
      return (
        j(j(j(e, /(zoom-|grab)/, F + "$1"), /(image-set)/, F + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, F + "$1$`$1");
    case 4968:
      return (
        j(
          j(e, /(.+:)(flex-)?(.*)/, F + "box-pack:$3" + Ce + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        F +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, F + "$1$2") + e;
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
        switch (ge(e, t + 1)) {
          case 109:
            if (ge(e, t + 4) !== 45) break;
          case 102:
            return (
              j(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  F +
                  "$2-$3$1" +
                  wi +
                  (ge(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Us(e, "stretch")
              ? cp(j(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ge(e, t + 1) !== 115) break;
    case 6444:
      switch (ge(e, ht(e) - 3 - (~Us(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + F) + e;
        case 101:
          return (
            j(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                F +
                (ge(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                F +
                "$2$3$1" +
                Ce +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ge(e, t + 11)) {
        case 114:
          return F + e + Ce + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return F + e + Ce + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return F + e + Ce + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return F + e + Ce + e + e;
  }
  return e;
}
var hg = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hu:
          t.return = cp(t.value, t.length);
          break;
        case ip:
          return Kn([yr(t, { value: j(t.value, "@", "@" + F) })], o);
        case bu:
          if (t.length)
            return Z0(t.props, function (i) {
              switch (X0(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Kn(
                    [yr(t, { props: [j(i, /:(read-\w+)/, ":" + wi + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Kn(
                    [
                      yr(t, {
                        props: [j(i, /:(plac\w+)/, ":" + F + "input-$1")],
                      }),
                      yr(t, { props: [j(i, /:(plac\w+)/, ":" + wi + "$1")] }),
                      yr(t, { props: [j(i, /:(plac\w+)/, Ce + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  mg = [hg],
  gg = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var P = g.getAttribute("data-emotion");
        P.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || mg,
      i = {},
      l,
      s = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var P = g.getAttribute("data-emotion").split(" "), f = 1;
            f < P.length;
            f++
          )
            i[P[f]] = !0;
          s.push(g);
        }
      );
    var u,
      a = [dg, pg];
    {
      var m,
        p = [
          lg,
          ug(function (g) {
            m.insert(g);
          }),
        ],
        d = sg(a.concat(o, p)),
        w = function (P) {
          return Kn(og(P), d);
        };
      u = function (P, f, c, h) {
        (m = c),
          w(P ? P + "{" + f.styles + "}" : f.styles),
          h && (y.inserted[f.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new H0({
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
  Vs = {},
  yg = {
    get exports() {
      return Vs;
    },
    set exports(e) {
      Vs = e;
    },
  },
  W = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pe = typeof Symbol == "function" && Symbol.for,
  Qu = pe ? Symbol.for("react.element") : 60103,
  Gu = pe ? Symbol.for("react.portal") : 60106,
  Vi = pe ? Symbol.for("react.fragment") : 60107,
  bi = pe ? Symbol.for("react.strict_mode") : 60108,
  Hi = pe ? Symbol.for("react.profiler") : 60114,
  Ki = pe ? Symbol.for("react.provider") : 60109,
  Qi = pe ? Symbol.for("react.context") : 60110,
  Yu = pe ? Symbol.for("react.async_mode") : 60111,
  Gi = pe ? Symbol.for("react.concurrent_mode") : 60111,
  Yi = pe ? Symbol.for("react.forward_ref") : 60112,
  Xi = pe ? Symbol.for("react.suspense") : 60113,
  vg = pe ? Symbol.for("react.suspense_list") : 60120,
  Zi = pe ? Symbol.for("react.memo") : 60115,
  Ji = pe ? Symbol.for("react.lazy") : 60116,
  wg = pe ? Symbol.for("react.block") : 60121,
  Sg = pe ? Symbol.for("react.fundamental") : 60117,
  xg = pe ? Symbol.for("react.responder") : 60118,
  kg = pe ? Symbol.for("react.scope") : 60119;
function Qe(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qu:
        switch (((e = e.type), e)) {
          case Yu:
          case Gi:
          case Vi:
          case Hi:
          case bi:
          case Xi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Qi:
              case Yi:
              case Ji:
              case Zi:
              case Ki:
                return e;
              default:
                return t;
            }
        }
      case Gu:
        return t;
    }
  }
}
function fp(e) {
  return Qe(e) === Gi;
}
W.AsyncMode = Yu;
W.ConcurrentMode = Gi;
W.ContextConsumer = Qi;
W.ContextProvider = Ki;
W.Element = Qu;
W.ForwardRef = Yi;
W.Fragment = Vi;
W.Lazy = Ji;
W.Memo = Zi;
W.Portal = Gu;
W.Profiler = Hi;
W.StrictMode = bi;
W.Suspense = Xi;
W.isAsyncMode = function (e) {
  return fp(e) || Qe(e) === Yu;
};
W.isConcurrentMode = fp;
W.isContextConsumer = function (e) {
  return Qe(e) === Qi;
};
W.isContextProvider = function (e) {
  return Qe(e) === Ki;
};
W.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qu;
};
W.isForwardRef = function (e) {
  return Qe(e) === Yi;
};
W.isFragment = function (e) {
  return Qe(e) === Vi;
};
W.isLazy = function (e) {
  return Qe(e) === Ji;
};
W.isMemo = function (e) {
  return Qe(e) === Zi;
};
W.isPortal = function (e) {
  return Qe(e) === Gu;
};
W.isProfiler = function (e) {
  return Qe(e) === Hi;
};
W.isStrictMode = function (e) {
  return Qe(e) === bi;
};
W.isSuspense = function (e) {
  return Qe(e) === Xi;
};
W.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vi ||
    e === Gi ||
    e === Hi ||
    e === bi ||
    e === Xi ||
    e === vg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === Ji ||
        e.$$typeof === Zi ||
        e.$$typeof === Ki ||
        e.$$typeof === Qi ||
        e.$$typeof === Yi ||
        e.$$typeof === Sg ||
        e.$$typeof === xg ||
        e.$$typeof === kg ||
        e.$$typeof === wg))
  );
};
W.typeOf = Qe;
(function (e) {
  e.exports = W;
})(yg);
var dp = Vs,
  Cg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Eg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  pp = {};
pp[dp.ForwardRef] = Cg;
pp[dp.Memo] = Eg;
var Pg = !0;
function _g(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var hp = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Pg === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Tg = function (t, n, r) {
    hp(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Rg(e) {
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
var $g = {
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
  zg = /[A-Z]|^ms/g,
  Og = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  mp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Pc = function (t) {
    return t != null && typeof t != "boolean";
  },
  Ul = rp(function (e) {
    return mp(e) ? e : e.replace(zg, "-$&").toLowerCase();
  }),
  _c = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Og, function (r, o, i) {
            return (mt = { name: o, styles: i, next: mt }), o;
          });
    }
    return $g[t] !== 1 && !mp(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function eo(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (mt = { name: n.name, styles: n.styles, next: mt }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (mt = { name: r.name, styles: r.styles, next: mt }), (r = r.next);
        var o = n.styles + ";";
        return o;
      }
      return Mg(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = mt,
          l = n(e);
        return (mt = i), eo(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Mg(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += eo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : Pc(l) && (r += Ul(i) + ":" + _c(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var s = 0; s < l.length; s++)
          Pc(l[s]) && (r += Ul(i) + ":" + _c(i, l[s]) + ";");
      else {
        var u = eo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Ul(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Tc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  mt,
  gp = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var o = !0,
      i = "";
    mt = void 0;
    var l = t[0];
    l == null || l.raw === void 0
      ? ((o = !1), (i += eo(r, n, l)))
      : (i += l[0]);
    for (var s = 1; s < t.length; s++) (i += eo(r, n, t[s])), o && (i += l[s]);
    Tc.lastIndex = 0;
    for (var u = "", a; (a = Tc.exec(i)) !== null; ) u += "-" + a[1];
    var m = Rg(i) + u;
    return { name: m, styles: i, next: mt };
  },
  Ng = function (t) {
    return t();
  },
  Ig = da["useInsertionEffect"] ? da["useInsertionEffect"] : !1,
  Lg = Ig || Ng,
  yp = _.createContext(typeof HTMLElement < "u" ? gg({ key: "css" }) : null);
yp.Provider;
var Ag = function (t) {
    return _.forwardRef(function (n, r) {
      var o = _.useContext(yp);
      return t(n, o, r);
    });
  },
  Fg = _.createContext({});
function Dg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return gp(t);
}
var Xu = function () {
    var t = Dg.apply(void 0, arguments),
      n = "animation-" + t.name;
    return {
      name: n,
      styles: "@keyframes " + n + "{" + t.styles + "}",
      anim: 1,
      toString: function () {
        return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
      },
    };
  },
  jg = W0,
  Bg = function (t) {
    return t !== "theme";
  },
  Rc = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? jg : Bg;
  },
  $c = function (t, n, r) {
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
    return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
  },
  Ug = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      hp(n, r, o),
      Lg(function () {
        return Tg(n, r, o);
      }),
      null
    );
  },
  Wg = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var s = $c(t, n, r),
      u = s || Rc(o),
      a = !u("as");
    return function () {
      var m = arguments,
        p =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && p.push("label:" + i + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        p.push.apply(p, m);
      else {
        p.push(m[0][0]);
        for (var d = m.length, w = 1; w < d; w++) p.push(m[w], m[0][w]);
      }
      var y = Ag(function (g, P, f) {
        var c = (a && g.as) || o,
          h = "",
          v = [],
          S = g;
        if (g.theme == null) {
          S = {};
          for (var k in g) S[k] = g[k];
          S.theme = _.useContext(Fg);
        }
        typeof g.className == "string"
          ? (h = _g(P.registered, v, g.className))
          : g.className != null && (h = g.className + " ");
        var x = gp(p.concat(v), P.registered, S);
        (h += P.key + "-" + x.name), l !== void 0 && (h += " " + l);
        var T = a && s === void 0 ? Rc(c) : u,
          z = {};
        for (var $ in g) (a && $ === "as") || (T($) && (z[$] = g[$]));
        return (
          (z.className = h),
          (z.ref = f),
          _.createElement(
            _.Fragment,
            null,
            _.createElement(Ug, {
              cache: P,
              serialized: x,
              isStringTag: typeof c == "string",
            }),
            _.createElement(c, z)
          )
        );
      });
      return (
        (y.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof o == "string"
                ? o
                : o.displayName || o.name || "Component") +
              ")"),
        (y.defaultProps = t.defaultProps),
        (y.__emotion_real = y),
        (y.__emotion_base = o),
        (y.__emotion_styles = p),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (y.withComponent = function (g, P) {
          return e(g, O({}, n, P, { shouldForwardProp: $c(y, P, !0) })).apply(
            void 0,
            p
          );
        }),
        y
      );
    };
  },
  Vg = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  bs = Wg.bind();
Vg.forEach(function (e) {
  bs[e] = bs(e);
});
const bg = bs;
/**
 * @mui/styled-engine v5.11.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function vp(e, t) {
  return bg(e, t);
}
const Hg = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Mr(e, t) {
  return t ? $t(e, t, { clone: !1 }) : e;
}
const Zu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  zc = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Zu[e]}px)`,
  };
function It(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || zc;
    return t.reduce((l, s, u) => ((l[i.up(i.keys[u])] = n(t[u])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || zc;
    return Object.keys(t).reduce((l, s) => {
      if (Object.keys(i.values || Zu).indexOf(s) !== -1) {
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
function Kg(e = {}) {
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
function Qg(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function qi(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function Si(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = qi(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function B(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const s = l[t],
        u = l.theme,
        a = qi(u, r) || {};
      return It(l, s, (p) => {
        let d = Si(a, o, p);
        return (
          p === d &&
            typeof p == "string" &&
            (d = Si(a, o, `${t}${p === "default" ? "" : ye(p)}`, p)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function el(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Mr(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Gg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Yg = { m: "margin", p: "padding" },
  Xg = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  Oc = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Zg = Gg((e) => {
    if (e.length > 2)
      if (Oc[e]) e = Oc[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Yg[t],
      o = Xg[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Ju = [
    "m",
    "mt",
    "mr",
    "mb",
    "ml",
    "mx",
    "my",
    "margin",
    "marginTop",
    "marginRight",
    "marginBottom",
    "marginLeft",
    "marginX",
    "marginY",
    "marginInline",
    "marginInlineStart",
    "marginInlineEnd",
    "marginBlock",
    "marginBlockStart",
    "marginBlockEnd",
  ],
  qu = [
    "p",
    "pt",
    "pr",
    "pb",
    "pl",
    "px",
    "py",
    "padding",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "paddingX",
    "paddingY",
    "paddingInline",
    "paddingInlineStart",
    "paddingInlineEnd",
    "paddingBlock",
    "paddingBlockStart",
    "paddingBlockEnd",
  ];
[...Ju, ...qu];
function so(e, t, n, r) {
  var o;
  const i = (o = qi(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == "string" ? l : i[l])
    : typeof i == "function"
    ? i
    : () => {};
}
function wp(e) {
  return so(e, "spacing", 8);
}
function uo(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Jg(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = uo(t, n)), r), {});
}
function qg(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = Zg(n),
    i = Jg(o, r),
    l = e[n];
  return It(e, l, i);
}
function Sp(e, t) {
  const n = wp(e.theme);
  return Object.keys(e)
    .map((r) => qg(e, t, r, n))
    .reduce(Mr, {});
}
function q(e) {
  return Sp(e, Ju);
}
q.propTypes = {};
q.filterProps = Ju;
function ee(e) {
  return Sp(e, qu);
}
ee.propTypes = {};
ee.filterProps = qu;
function yt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const ey = B({ prop: "border", themeKey: "borders", transform: yt }),
  ty = B({ prop: "borderTop", themeKey: "borders", transform: yt }),
  ny = B({ prop: "borderRight", themeKey: "borders", transform: yt }),
  ry = B({ prop: "borderBottom", themeKey: "borders", transform: yt }),
  oy = B({ prop: "borderLeft", themeKey: "borders", transform: yt }),
  iy = B({ prop: "borderColor", themeKey: "palette" }),
  ly = B({ prop: "borderTopColor", themeKey: "palette" }),
  sy = B({ prop: "borderRightColor", themeKey: "palette" }),
  uy = B({ prop: "borderBottomColor", themeKey: "palette" }),
  ay = B({ prop: "borderLeftColor", themeKey: "palette" }),
  tl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = so(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: uo(t, r) });
      return It(e, e.borderRadius, n);
    }
    return null;
  };
tl.propTypes = {};
tl.filterProps = ["borderRadius"];
el(ey, ty, ny, ry, oy, iy, ly, sy, uy, ay, tl);
const nl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = so(e.theme, "spacing", 8),
      n = (r) => ({ gap: uo(t, r) });
    return It(e, e.gap, n);
  }
  return null;
};
nl.propTypes = {};
nl.filterProps = ["gap"];
const rl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = so(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: uo(t, r) });
    return It(e, e.columnGap, n);
  }
  return null;
};
rl.propTypes = {};
rl.filterProps = ["columnGap"];
const ol = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = so(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: uo(t, r) });
    return It(e, e.rowGap, n);
  }
  return null;
};
ol.propTypes = {};
ol.filterProps = ["rowGap"];
const cy = B({ prop: "gridColumn" }),
  fy = B({ prop: "gridRow" }),
  dy = B({ prop: "gridAutoFlow" }),
  py = B({ prop: "gridAutoColumns" }),
  hy = B({ prop: "gridAutoRows" }),
  my = B({ prop: "gridTemplateColumns" }),
  gy = B({ prop: "gridTemplateRows" }),
  yy = B({ prop: "gridTemplateAreas" }),
  vy = B({ prop: "gridArea" });
el(nl, rl, ol, cy, fy, dy, py, hy, my, gy, yy, vy);
function Qn(e, t) {
  return t === "grey" ? t : e;
}
const wy = B({ prop: "color", themeKey: "palette", transform: Qn }),
  Sy = B({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Qn,
  }),
  xy = B({ prop: "backgroundColor", themeKey: "palette", transform: Qn });
el(wy, Sy, xy);
function Be(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const ky = B({ prop: "width", transform: Be }),
  ea = (e) => {
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
            Zu[n] ||
            Be(n),
        };
      };
      return It(e, e.maxWidth, t);
    }
    return null;
  };
ea.filterProps = ["maxWidth"];
const Cy = B({ prop: "minWidth", transform: Be }),
  Ey = B({ prop: "height", transform: Be }),
  Py = B({ prop: "maxHeight", transform: Be }),
  _y = B({ prop: "minHeight", transform: Be });
B({ prop: "size", cssProperty: "width", transform: Be });
B({ prop: "size", cssProperty: "height", transform: Be });
const Ty = B({ prop: "boxSizing" });
el(ky, ea, Cy, Ey, Py, _y, Ty);
const Ry = {
    border: { themeKey: "borders", transform: yt },
    borderTop: { themeKey: "borders", transform: yt },
    borderRight: { themeKey: "borders", transform: yt },
    borderBottom: { themeKey: "borders", transform: yt },
    borderLeft: { themeKey: "borders", transform: yt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: tl },
    color: { themeKey: "palette", transform: Qn },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Qn,
    },
    backgroundColor: { themeKey: "palette", transform: Qn },
    p: { style: ee },
    pt: { style: ee },
    pr: { style: ee },
    pb: { style: ee },
    pl: { style: ee },
    px: { style: ee },
    py: { style: ee },
    padding: { style: ee },
    paddingTop: { style: ee },
    paddingRight: { style: ee },
    paddingBottom: { style: ee },
    paddingLeft: { style: ee },
    paddingX: { style: ee },
    paddingY: { style: ee },
    paddingInline: { style: ee },
    paddingInlineStart: { style: ee },
    paddingInlineEnd: { style: ee },
    paddingBlock: { style: ee },
    paddingBlockStart: { style: ee },
    paddingBlockEnd: { style: ee },
    m: { style: q },
    mt: { style: q },
    mr: { style: q },
    mb: { style: q },
    ml: { style: q },
    mx: { style: q },
    my: { style: q },
    margin: { style: q },
    marginTop: { style: q },
    marginRight: { style: q },
    marginBottom: { style: q },
    marginLeft: { style: q },
    marginX: { style: q },
    marginY: { style: q },
    marginInline: { style: q },
    marginInlineStart: { style: q },
    marginInlineEnd: { style: q },
    marginBlock: { style: q },
    marginBlockStart: { style: q },
    marginBlockEnd: { style: q },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
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
    gap: { style: nl },
    rowGap: { style: ol },
    columnGap: { style: rl },
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
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: Be },
    maxWidth: { style: ea },
    minWidth: { transform: Be },
    height: { transform: Be },
    maxHeight: { transform: Be },
    minHeight: { transform: Be },
    boxSizing: {},
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  },
  il = Ry;
function $y(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function zy(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Oy() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: u = n, themeKey: a, transform: m, style: p } = s;
    if (r == null) return null;
    const d = qi(o, a) || {};
    return p
      ? p(l)
      : It(l, r, (y) => {
          let g = Si(d, m, y);
          return (
            y === g &&
              typeof y == "string" &&
              (g = Si(d, m, `${n}${y === "default" ? "" : ye(y)}`, y)),
            u === !1 ? g : { [u]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : il;
    function s(u) {
      let a = u;
      if (typeof u == "function") a = u(i);
      else if (typeof u != "object") return u;
      if (!a) return null;
      const m = Kg(i.breakpoints),
        p = Object.keys(m);
      let d = m;
      return (
        Object.keys(a).forEach((w) => {
          const y = zy(a[w], i);
          if (y != null)
            if (typeof y == "object")
              if (l[w]) d = Mr(d, e(w, y, i, l));
              else {
                const g = It({ theme: i }, y, (P) => ({ [w]: P }));
                $y(g, y) ? (d[w] = t({ sx: y, theme: i })) : (d = Mr(d, g));
              }
            else d = Mr(d, e(w, y, i, l));
        }),
        Qg(p, d)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const xp = Oy();
xp.filterProps = ["sx"];
const ll = xp,
  My = ["sx"],
  Ny = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : il;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function kp(e) {
  const { sx: t } = e,
    n = we(e, My),
    { systemProps: r, otherProps: o } = Ny(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...l) => {
          const s = t(...l);
          return ln(s) ? O({}, r, s) : r;
        })
      : (i = O({}, r, t)),
    O({}, o, { sx: i })
  );
}
function Cp(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Cp(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Oe() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Cp(e)) && (r && (r += " "), (r += t));
  return r;
}
const Iy = ["values", "unit", "step"],
  Ly = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => O({}, n, { [r.key]: r.val }), {})
    );
  };
function Ay(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = we(e, Iy),
    i = Ly(t),
    l = Object.keys(i);
  function s(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function u(d) {
    return `@media (max-width:${
      (typeof t[d] == "number" ? t[d] : d) - r / 100
    }${n})`;
  }
  function a(d, w) {
    const y = l.indexOf(w);
    return `@media (min-width:${
      typeof t[d] == "number" ? t[d] : d
    }${n}) and (max-width:${
      (y !== -1 && typeof t[l[y]] == "number" ? t[l[y]] : w) - r / 100
    }${n})`;
  }
  function m(d) {
    return l.indexOf(d) + 1 < l.length ? a(d, l[l.indexOf(d) + 1]) : s(d);
  }
  function p(d) {
    const w = l.indexOf(d);
    return w === 0
      ? s(l[1])
      : w === l.length - 1
      ? u(l[w])
      : a(d, l[l.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return O(
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
const Fy = { borderRadius: 4 },
  Dy = Fy;
function jy(e = 8) {
  if (e.mui) return e;
  const t = wp({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
  return (n.mui = !0), n;
}
const By = ["breakpoints", "palette", "spacing", "shape"];
function ta(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = we(e, By),
    s = Ay(n),
    u = jy(o);
  let a = $t(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: O({ mode: "light" }, r),
      spacing: u,
      shape: O({}, Dy, i),
    },
    l
  );
  return (
    (a = t.reduce((m, p) => $t(m, p), a)),
    (a.unstable_sxConfig = O({}, il, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (p) {
      return ll({ sx: p, theme: this });
    }),
    a
  );
}
const Uy = _.createContext(null),
  Wy = Uy;
function Vy() {
  return _.useContext(Wy);
}
function by(e) {
  return Object.keys(e).length === 0;
}
function Hy(e = null) {
  const t = Vy();
  return !t || by(t) ? e : t;
}
const Ky = ta();
function Ep(e = Ky) {
  return Hy(e);
}
const Qy = ["className", "component"];
function Gy(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = "MuiBox-root",
      generateClassName: r,
    } = e,
    o = vp("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(ll);
  return _.forwardRef(function (s, u) {
    const a = Ep(t),
      m = kp(s),
      { className: p, component: d = "div" } = m,
      w = we(m, Qy);
    return se(
      o,
      O({ as: d, ref: u, className: Oe(p, r ? r(n) : n), theme: a }, w)
    );
  });
}
const Yy = ["variant"];
function Mc(e) {
  return e.length === 0;
}
function Pp(e) {
  const { variant: t } = e,
    n = we(e, Yy);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += Mc(r) ? e[o] : ye(e[o]))
          : (r += `${Mc(r) ? o : ye(o)}${ye(e[o].toString())}`);
      }),
    r
  );
}
const Xy = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  Zy = ["theme"],
  Jy = ["theme"];
function vr(e) {
  return Object.keys(e).length === 0;
}
function qy(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const e1 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  t1 = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = Pp(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  n1 = (e, t, n, r) => {
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
            m && s.push(t[Pp(a.props)]);
        }),
      s
    );
  };
function Qo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const r1 = ta();
function o1(e = {}) {
  const {
      defaultTheme: t = r1,
      rootShouldForwardProp: n = Qo,
      slotShouldForwardProp: r = Qo,
    } = e,
    o = (i) => {
      const l = vr(i.theme) ? t : i.theme;
      return ll(O({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      Hg(i, (h) => h.filter((v) => !(v != null && v.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: a,
          skipSx: m,
          overridesResolver: p,
        } = l,
        d = we(l, Xy),
        w = a !== void 0 ? a : (u && u !== "Root") || !1,
        y = m || !1;
      let g,
        P = Qo;
      u === "Root" ? (P = n) : u ? (P = r) : qy(i) && (P = void 0);
      const f = vp(i, O({ shouldForwardProp: P, label: g }, d)),
        c = (h, ...v) => {
          const S = v
            ? v.map((z) =>
                typeof z == "function" && z.__emotion_real !== z
                  ? ($) => {
                      let { theme: D } = $,
                        Y = we($, Zy);
                      return z(O({ theme: vr(D) ? t : D }, Y));
                    }
                  : z
              )
            : [];
          let k = h;
          s &&
            p &&
            S.push((z) => {
              const $ = vr(z.theme) ? t : z.theme,
                D = e1(s, $);
              if (D) {
                const Y = {};
                return (
                  Object.entries(D).forEach(([ce, le]) => {
                    Y[ce] =
                      typeof le == "function" ? le(O({}, z, { theme: $ })) : le;
                  }),
                  p(z, Y)
                );
              }
              return null;
            }),
            s &&
              !w &&
              S.push((z) => {
                const $ = vr(z.theme) ? t : z.theme;
                return n1(z, t1(s, $), $, s);
              }),
            y || S.push(o);
          const x = S.length - v.length;
          if (Array.isArray(h) && x > 0) {
            const z = new Array(x).fill("");
            (k = [...h, ...z]), (k.raw = [...h.raw, ...z]);
          } else
            typeof h == "function" &&
              h.__emotion_real !== h &&
              (k = (z) => {
                let { theme: $ } = z,
                  D = we(z, Jy);
                return h(O({ theme: vr($) ? t : $ }, D));
              });
          return f(k, ...S);
        };
      return f.withConfig && (c.withConfig = f.withConfig), c;
    }
  );
}
function i1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Wu(t.components[n].defaultProps, r);
}
function l1({ props: e, name: t, defaultTheme: n }) {
  const r = Ep(n);
  return i1({ theme: r, name: t, props: e });
}
function na(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function s1(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let n = e.match(t);
  return (
    n && n[0].length === 1 && (n = n.map((r) => r + r)),
    n
      ? `rgb${n.length === 4 ? "a" : ""}(${n
          .map((r, o) =>
            o < 3
              ? parseInt(r, 16)
              : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
          )
          .join(", ")})`
      : ""
  );
}
function vn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return vn(s1(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(tr(9, e));
  let r = e.substring(t + 1, e.length - 1),
    o;
  if (n === "color") {
    if (
      ((r = r.split(" ")),
      (o = r.shift()),
      r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
      ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(
        o
      ) === -1)
    )
      throw new Error(tr(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function sl(e) {
  const { type: t, colorSpace: n } = e;
  let { values: r } = e;
  return (
    t.indexOf("rgb") !== -1
      ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
      : t.indexOf("hsl") !== -1 && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
    t.indexOf("color") !== -1
      ? (r = `${n} ${r.join(" ")}`)
      : (r = `${r.join(", ")}`),
    `${t}(${r})`
  );
}
function u1(e) {
  e = vn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (a, m = (a + n / 30) % 12) =>
      o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let s = "rgb";
  const u = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === "hsla" && ((s += "a"), u.push(t[3])), sl({ type: s, values: u })
  );
}
function Nc(e) {
  e = vn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? vn(u1(e)).values : e.values;
  return (
    (t = t.map(
      (n) => (
        e.type !== "color" && (n /= 255),
        n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
      )
    )),
    Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
  );
}
function a1(e, t) {
  const n = Nc(e),
    r = Nc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function zo(e, t) {
  return (
    (e = vn(e)),
    (t = na(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    sl(e)
  );
}
function c1(e, t) {
  if (((e = vn(e)), (t = na(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return sl(e);
}
function f1(e, t) {
  if (((e = vn(e)), (t = na(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return sl(e);
}
function d1(e, t) {
  return O(
    {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
    },
    t
  );
}
const p1 = ["mode", "contrastThreshold", "tonalOffset"],
  Ic = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: Zr.white, default: Zr.white },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  },
  Wl = {
    text: {
      primary: Zr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: Zr.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
function Lc(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = f1(e.main, o))
      : t === "dark" && (e.dark = c1(e.main, i)));
}
function h1(e = "light") {
  return e === "dark"
    ? { main: Pn[200], light: Pn[50], dark: Pn[400] }
    : { main: Pn[700], light: Pn[400], dark: Pn[800] };
}
function m1(e = "light") {
  return e === "dark"
    ? { main: En[200], light: En[50], dark: En[400] }
    : { main: En[500], light: En[300], dark: En[700] };
}
function g1(e = "light") {
  return e === "dark"
    ? { main: Cn[500], light: Cn[300], dark: Cn[700] }
    : { main: Cn[700], light: Cn[400], dark: Cn[800] };
}
function y1(e = "light") {
  return e === "dark"
    ? { main: _n[400], light: _n[300], dark: _n[700] }
    : { main: _n[700], light: _n[500], dark: _n[900] };
}
function v1(e = "light") {
  return e === "dark"
    ? { main: Tn[400], light: Tn[300], dark: Tn[700] }
    : { main: Tn[800], light: Tn[500], dark: Tn[900] };
}
function w1(e = "light") {
  return e === "dark"
    ? { main: gr[400], light: gr[300], dark: gr[700] }
    : { main: "#ed6c02", light: gr[500], dark: gr[900] };
}
function S1(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = we(e, p1),
    i = e.primary || h1(t),
    l = e.secondary || m1(t),
    s = e.error || g1(t),
    u = e.info || y1(t),
    a = e.success || v1(t),
    m = e.warning || w1(t);
  function p(g) {
    return a1(g, Wl.text.primary) >= n ? Wl.text.primary : Ic.text.primary;
  }
  const d = ({
      color: g,
      name: P,
      mainShade: f = 500,
      lightShade: c = 300,
      darkShade: h = 700,
    }) => {
      if (
        ((g = O({}, g)),
        !g.main && g[f] && (g.main = g[f]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(tr(11, P ? ` (${P})` : "", f));
      if (typeof g.main != "string")
        throw new Error(tr(12, P ? ` (${P})` : "", JSON.stringify(g.main)));
      return (
        Lc(g, "light", c, r),
        Lc(g, "dark", h, r),
        g.contrastText || (g.contrastText = p(g.main)),
        g
      );
    },
    w = { dark: Wl, light: Ic };
  return $t(
    O(
      {
        common: O({}, Zr),
        mode: t,
        primary: d({ color: i, name: "primary" }),
        secondary: d({
          color: l,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: d({ color: s, name: "error" }),
        warning: d({ color: m, name: "warning" }),
        info: d({ color: u, name: "info" }),
        success: d({ color: a, name: "success" }),
        grey: T0,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: d,
        tonalOffset: r,
      },
      w[t]
    ),
    o
  );
}
const x1 = [
  "fontFamily",
  "fontSize",
  "fontWeightLight",
  "fontWeightRegular",
  "fontWeightMedium",
  "fontWeightBold",
  "htmlFontSize",
  "allVariants",
  "pxToRem",
];
function k1(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ac = { textTransform: "uppercase" },
  Fc = '"Roboto", "Helvetica", "Arial", sans-serif';
function C1(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Fc,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: u = 700,
      htmlFontSize: a = 16,
      allVariants: m,
      pxToRem: p,
    } = n,
    d = we(n, x1),
    w = o / 14,
    y = p || ((f) => `${(f / a) * w}rem`),
    g = (f, c, h, v, S) =>
      O(
        { fontFamily: r, fontWeight: f, fontSize: y(c), lineHeight: h },
        r === Fc ? { letterSpacing: `${k1(v / c)}em` } : {},
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
      button: g(s, 14, 1.75, 0.4, Ac),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, Ac),
    };
  return $t(
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
const E1 = 0.2,
  P1 = 0.14,
  _1 = 0.12;
function Q(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${E1})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${P1})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_1})`,
  ].join(",");
}
const T1 = [
    "none",
    Q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    Q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    Q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    Q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    Q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    Q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    Q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    Q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    Q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    Q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    Q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    Q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    Q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    Q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    Q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    Q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    Q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    Q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    Q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    Q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    Q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    Q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    Q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    Q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ],
  R1 = T1,
  $1 = ["duration", "easing", "delay"],
  z1 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  O1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Dc(e) {
  return `${Math.round(e)}ms`;
}
function M1(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function N1(e) {
  const t = O({}, z1, e.easing),
    n = O({}, O1, e.duration);
  return O(
    {
      getAutoHeightDuration: M1,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: u = 0,
        } = i;
        return (
          we(i, $1),
          (Array.isArray(o) ? o : [o])
            .map(
              (a) =>
                `${a} ${typeof l == "string" ? l : Dc(l)} ${s} ${
                  typeof u == "string" ? u : Dc(u)
                }`
            )
            .join(",")
        );
      },
    },
    e,
    { easing: t, duration: n }
  );
}
const I1 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  L1 = I1,
  A1 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function _p(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = we(e, A1);
  if (e.vars) throw new Error(tr(18));
  const s = S1(r),
    u = ta(e);
  let a = $t(u, {
    mixins: d1(u.breakpoints, n),
    palette: s,
    shadows: R1.slice(),
    typography: C1(s, i),
    transitions: N1(o),
    zIndex: O({}, L1),
  });
  return (
    (a = $t(a, l)),
    (a = t.reduce((m, p) => $t(m, p), a)),
    (a.unstable_sxConfig = O({}, il, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (p) {
      return ll({ sx: p, theme: this });
    }),
    a
  );
}
const F1 = _p(),
  Tp = F1;
function ul({ props: e, name: t }) {
  return l1({ props: e, name: t, defaultTheme: Tp });
}
const Rp = (e) => Qo(e) && e !== "classes",
  D1 = o1({ defaultTheme: Tp, rootShouldForwardProp: Rp }),
  xn = D1;
function Hs(e, t) {
  return (
    (Hs = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Hs(e, t)
  );
}
function j1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Hs(e, t);
}
const jc = Pt.createContext(null);
function B1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ra(e, t) {
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
function U1(e, t) {
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
function cn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function W1(e, t) {
  return ra(e.children, function (n) {
    return _.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: cn(n, "appear", e),
      enter: cn(n, "enter", e),
      exit: cn(n, "exit", e),
    });
  });
}
function V1(e, t, n) {
  var r = ra(e.children),
    o = U1(t, r);
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
              exit: cn(l, "exit", e),
              enter: cn(l, "enter", e),
            }))
          : !u && s && !m
          ? (o[i] = _.cloneElement(l, { in: !1 }))
          : u &&
            s &&
            _.isValidElement(a) &&
            (o[i] = _.cloneElement(l, {
              onExited: n.bind(null, l),
              in: a.props.in,
              exit: cn(l, "exit", e),
              enter: cn(l, "enter", e),
            }));
      }
    }),
    o
  );
}
var b1 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  H1 = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  oa = (function (e) {
    j1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(B1(i));
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
        return { children: u ? W1(o, s) : V1(o, l, s), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = ra(this.props.children);
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
          s = we(o, ["component", "childFactory"]),
          u = this.state.contextValue,
          a = b1(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Pt.createElement(jc.Provider, { value: u }, a)
            : Pt.createElement(
                jc.Provider,
                { value: u },
                Pt.createElement(i, s, a)
              )
        );
      }),
      t
    );
  })(Pt.Component);
oa.propTypes = {};
oa.defaultProps = H1;
const K1 = oa;
function Q1(e) {
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
    [m, p] = _.useState(!1),
    d = Oe(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    w = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = Oe(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !s && !m && p(!0),
    _.useEffect(() => {
      if (!s && u != null) {
        const g = setTimeout(u, a);
        return () => {
          clearTimeout(g);
        };
      }
    }, [u, s, a]),
    se("span", {
      className: d,
      style: w,
      children: se("span", { className: y }),
    })
  );
}
const G1 = ji("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Xe = G1,
  Y1 = ["center", "classes", "className"];
let al = (e) => e,
  Bc,
  Uc,
  Wc,
  Vc;
const Ks = 550,
  X1 = 80,
  Z1 = Xu(
    Bc ||
      (Bc = al`
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
  J1 = Xu(
    Uc ||
      (Uc = al`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  q1 = Xu(
    Wc ||
      (Wc = al`
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
  ev = xn("span", { name: "MuiTouchRipple", slot: "Root" })({
    overflow: "hidden",
    pointerEvents: "none",
    position: "absolute",
    zIndex: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: "inherit",
  }),
  tv = xn(Q1, { name: "MuiTouchRipple", slot: "Ripple" })(
    Vc ||
      (Vc = al`
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
    Xe.rippleVisible,
    Z1,
    Ks,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Xe.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Xe.child,
    Xe.childLeaving,
    J1,
    Ks,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Xe.childPulsate,
    q1,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  nv = _.forwardRef(function (t, n) {
    const r = ul({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = we(r, Y1),
      [u, a] = _.useState([]),
      m = _.useRef(0),
      p = _.useRef(null);
    _.useEffect(() => {
      p.current && (p.current(), (p.current = null));
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
            se(
              tv,
              {
                classes: {
                  ripple: Oe(i.ripple, Xe.ripple),
                  rippleVisible: Oe(i.rippleVisible, Xe.rippleVisible),
                  ripplePulsate: Oe(i.ripplePulsate, Xe.ripplePulsate),
                  child: Oe(i.child, Xe.child),
                  childLeaving: Oe(i.childLeaving, Xe.childLeaving),
                  childPulsate: Oe(i.childPulsate, Xe.childPulsate),
                },
                timeout: Ks,
                pulsate: S,
                rippleX: k,
                rippleY: x,
                rippleSize: T,
              },
              m.current
            ),
          ]),
            (m.current += 1),
            (p.current = z);
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
          if ((v == null ? void 0 : v.type) === "mousedown" && d.current) {
            d.current = !1;
            return;
          }
          (v == null ? void 0 : v.type) === "touchstart" && (d.current = !0);
          const $ = z ? null : g.current,
            D = $
              ? $.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let Y, ce, le;
          if (
            T ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            (Y = Math.round(D.width / 2)), (ce = Math.round(D.height / 2));
          else {
            const { clientX: Ge, clientY: _e } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
            (Y = Math.round(Ge - D.left)), (ce = Math.round(_e - D.top));
          }
          if (T)
            (le = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3)),
              le % 2 === 0 && (le += 1);
          else {
            const Ge =
                Math.max(Math.abs(($ ? $.clientWidth : 0) - Y), Y) * 2 + 2,
              _e =
                Math.max(Math.abs(($ ? $.clientHeight : 0) - ce), ce) * 2 + 2;
            le = Math.sqrt(Ge ** 2 + _e ** 2);
          }
          v != null && v.touches
            ? y.current === null &&
              ((y.current = () => {
                P({
                  pulsate: x,
                  rippleX: Y,
                  rippleY: ce,
                  rippleSize: le,
                  cb: k,
                });
              }),
              (w.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, X1)))
            : P({ pulsate: x, rippleX: Y, rippleY: ce, rippleSize: le, cb: k });
        },
        [o, P]
      ),
      c = _.useCallback(() => {
        f({}, { pulsate: !0 });
      }, [f]),
      h = _.useCallback((v, S) => {
        if (
          (clearTimeout(w.current),
          (v == null ? void 0 : v.type) === "touchend" && y.current)
        ) {
          y.current(),
            (y.current = null),
            (w.current = setTimeout(() => {
              h(v, S);
            }));
          return;
        }
        (y.current = null),
          a((k) => (k.length > 0 ? k.slice(1) : k)),
          (p.current = S);
      }, []);
    return (
      _.useImperativeHandle(n, () => ({ pulsate: c, start: f, stop: h }), [
        c,
        f,
        h,
      ]),
      se(
        ev,
        O({ className: Oe(Xe.root, i.root, l), ref: g }, s, {
          children: se(K1, { component: null, exit: !0, children: u }),
        })
      )
    );
  }),
  rv = nv;
function ov(e) {
  return Di("MuiButtonBase", e);
}
const iv = ji("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  lv = iv,
  sv = [
    "action",
    "centerRipple",
    "children",
    "className",
    "component",
    "disabled",
    "disableRipple",
    "disableTouchRipple",
    "focusRipple",
    "focusVisibleClassName",
    "LinkComponent",
    "onBlur",
    "onClick",
    "onContextMenu",
    "onDragLeave",
    "onFocus",
    "onFocusVisible",
    "onKeyDown",
    "onKeyUp",
    "onMouseDown",
    "onMouseLeave",
    "onMouseUp",
    "onTouchEnd",
    "onTouchMove",
    "onTouchStart",
    "tabIndex",
    "TouchRippleProps",
    "touchRippleRef",
    "type",
  ],
  uv = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = Vu({ root: ["root", t && "disabled", n && "focusVisible"] }, ov, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  av = xn("button", {
    name: "MuiButtonBase",
    slot: "Root",
    overridesResolver: (e, t) => t.root,
  })({
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    boxSizing: "border-box",
    WebkitTapHighlightColor: "transparent",
    backgroundColor: "transparent",
    outline: 0,
    border: 0,
    margin: 0,
    borderRadius: 0,
    padding: 0,
    cursor: "pointer",
    userSelect: "none",
    verticalAlign: "middle",
    MozAppearance: "none",
    WebkitAppearance: "none",
    textDecoration: "none",
    color: "inherit",
    "&::-moz-focus-inner": { borderStyle: "none" },
    [`&.${lv.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  cv = _.forwardRef(function (t, n) {
    const r = ul({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: s,
        component: u = "button",
        disabled: a = !1,
        disableRipple: m = !1,
        disableTouchRipple: p = !1,
        focusRipple: d = !1,
        LinkComponent: w = "a",
        onBlur: y,
        onClick: g,
        onContextMenu: P,
        onDragLeave: f,
        onFocus: c,
        onFocusVisible: h,
        onKeyDown: v,
        onKeyUp: S,
        onMouseDown: k,
        onMouseLeave: x,
        onMouseUp: T,
        onTouchEnd: z,
        onTouchMove: $,
        onTouchStart: D,
        tabIndex: Y = 0,
        TouchRippleProps: ce,
        touchRippleRef: le,
        type: Ge,
      } = r,
      _e = we(r, sv),
      rt = _.useRef(null),
      E = _.useRef(null),
      N = wc(E, le),
      { isFocusVisibleRef: M, onFocus: V, onBlur: ne, ref: xt } = F0(),
      [he, ft] = _.useState(!1);
    a && he && ft(!1),
      _.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ft(!0), rt.current.focus();
          },
        }),
        []
      );
    const [De, kt] = _.useState(!1);
    _.useEffect(() => {
      kt(!0);
    }, []);
    const nn = De && !m && !a;
    _.useEffect(() => {
      he && d && !m && De && E.current.pulsate();
    }, [m, d, he, De]);
    function Ye(I, sa, Wp = p) {
      return Ro(
        (ua) => (sa && sa(ua), !Wp && E.current && E.current[I](ua), !0)
      );
    }
    const cl = Ye("start", k),
      ia = Ye("stop", P),
      fl = Ye("stop", f),
      Op = Ye("stop", T),
      Mp = Ye("stop", (I) => {
        he && I.preventDefault(), x && x(I);
      }),
      Np = Ye("start", D),
      Ip = Ye("stop", z),
      Lp = Ye("stop", $),
      Ap = Ye(
        "stop",
        (I) => {
          ne(I), M.current === !1 && ft(!1), y && y(I);
        },
        !1
      ),
      Fp = Ro((I) => {
        rt.current || (rt.current = I.currentTarget),
          V(I),
          M.current === !0 && (ft(!0), h && h(I)),
          c && c(I);
      }),
      dl = () => {
        const I = rt.current;
        return u && u !== "button" && !(I.tagName === "A" && I.href);
      },
      pl = _.useRef(!1),
      Dp = Ro((I) => {
        d &&
          !pl.current &&
          he &&
          E.current &&
          I.key === " " &&
          ((pl.current = !0),
          E.current.stop(I, () => {
            E.current.start(I);
          })),
          I.target === I.currentTarget &&
            dl() &&
            I.key === " " &&
            I.preventDefault(),
          v && v(I),
          I.target === I.currentTarget &&
            dl() &&
            I.key === "Enter" &&
            !a &&
            (I.preventDefault(), g && g(I));
      }),
      jp = Ro((I) => {
        d &&
          I.key === " " &&
          E.current &&
          he &&
          !I.defaultPrevented &&
          ((pl.current = !1),
          E.current.stop(I, () => {
            E.current.pulsate(I);
          })),
          S && S(I),
          g &&
            I.target === I.currentTarget &&
            dl() &&
            I.key === " " &&
            !I.defaultPrevented &&
            g(I);
      });
    let ao = u;
    ao === "button" && (_e.href || _e.to) && (ao = w);
    const sr = {};
    ao === "button"
      ? ((sr.type = Ge === void 0 ? "button" : Ge), (sr.disabled = a))
      : (!_e.href && !_e.to && (sr.role = "button"),
        a && (sr["aria-disabled"] = a));
    const Bp = wc(n, xt, rt),
      la = O({}, r, {
        centerRipple: i,
        component: u,
        disabled: a,
        disableRipple: m,
        disableTouchRipple: p,
        focusRipple: d,
        tabIndex: Y,
        focusVisible: he,
      }),
      Up = uv(la);
    return Go(
      av,
      O(
        {
          as: ao,
          className: Oe(Up.root, s),
          ownerState: la,
          onBlur: Ap,
          onClick: g,
          onContextMenu: ia,
          onFocus: Fp,
          onKeyDown: Dp,
          onKeyUp: jp,
          onMouseDown: cl,
          onMouseLeave: Mp,
          onMouseUp: Op,
          onDragLeave: fl,
          onTouchEnd: Ip,
          onTouchMove: Lp,
          onTouchStart: Np,
          ref: Bp,
          tabIndex: a ? -1 : Y,
          type: Ge,
        },
        sr,
        _e,
        { children: [l, nn ? se(rv, O({ ref: N, center: i }, ce)) : null] }
      )
    );
  }),
  fv = cv;
function dv(e) {
  return Di("MuiTypography", e);
}
ji("MuiTypography", [
  "root",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "subtitle1",
  "subtitle2",
  "body1",
  "body2",
  "inherit",
  "button",
  "caption",
  "overline",
  "alignLeft",
  "alignRight",
  "alignCenter",
  "alignJustify",
  "noWrap",
  "gutterBottom",
  "paragraph",
]);
const pv = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  hv = (e) => {
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
          "root",
          i,
          e.align !== "inherit" && `align${ye(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Vu(s, dv, l);
  },
  mv = xn("span", {
    name: "MuiTypography",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.variant && t[n.variant],
        n.align !== "inherit" && t[`align${ye(n.align)}`],
        n.noWrap && t.noWrap,
        n.gutterBottom && t.gutterBottom,
        n.paragraph && t.paragraph,
      ];
    },
  })(({ theme: e, ownerState: t }) =>
    O(
      { margin: 0 },
      t.variant && e.typography[t.variant],
      t.align !== "inherit" && { textAlign: t.align },
      t.noWrap && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
      t.gutterBottom && { marginBottom: "0.35em" },
      t.paragraph && { marginBottom: 16 }
    )
  ),
  bc = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    inherit: "p",
  },
  gv = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  yv = (e) => gv[e] || e,
  vv = _.forwardRef(function (t, n) {
    const r = ul({ props: t, name: "MuiTypography" }),
      o = yv(r.color),
      i = kp(O({}, r, { color: o })),
      {
        align: l = "inherit",
        className: s,
        component: u,
        gutterBottom: a = !1,
        noWrap: m = !1,
        paragraph: p = !1,
        variant: d = "body1",
        variantMapping: w = bc,
      } = i,
      y = we(i, pv),
      g = O({}, i, {
        align: l,
        color: o,
        className: s,
        component: u,
        gutterBottom: a,
        noWrap: m,
        paragraph: p,
        variant: d,
        variantMapping: w,
      }),
      P = u || (p ? "p" : w[d] || bc[d]) || "span",
      f = hv(g);
    return se(
      mv,
      O({ as: P, ref: n, ownerState: g, className: Oe(f.root, s) }, y)
    );
  }),
  Vl = vv,
  wv = _p(),
  Sv = Gy({
    defaultTheme: wv,
    defaultClassName: "MuiBox-root",
    generateClassName: np.generate,
  }),
  bl = Sv;
function xv(e) {
  return Di("MuiButton", e);
}
const kv = ji("MuiButton", [
    "root",
    "text",
    "textInherit",
    "textPrimary",
    "textSecondary",
    "textSuccess",
    "textError",
    "textInfo",
    "textWarning",
    "outlined",
    "outlinedInherit",
    "outlinedPrimary",
    "outlinedSecondary",
    "outlinedSuccess",
    "outlinedError",
    "outlinedInfo",
    "outlinedWarning",
    "contained",
    "containedInherit",
    "containedPrimary",
    "containedSecondary",
    "containedSuccess",
    "containedError",
    "containedInfo",
    "containedWarning",
    "disableElevation",
    "focusVisible",
    "disabled",
    "colorInherit",
    "textSizeSmall",
    "textSizeMedium",
    "textSizeLarge",
    "outlinedSizeSmall",
    "outlinedSizeMedium",
    "outlinedSizeLarge",
    "containedSizeSmall",
    "containedSizeMedium",
    "containedSizeLarge",
    "sizeMedium",
    "sizeSmall",
    "sizeLarge",
    "fullWidth",
    "startIcon",
    "endIcon",
    "iconSizeSmall",
    "iconSizeMedium",
    "iconSizeLarge",
  ]),
  Oo = kv,
  Cv = _.createContext({}),
  Ev = Cv,
  Pv = [
    "children",
    "color",
    "component",
    "className",
    "disabled",
    "disableElevation",
    "disableFocusRipple",
    "endIcon",
    "focusVisibleClassName",
    "fullWidth",
    "size",
    "startIcon",
    "type",
    "variant",
  ],
  _v = (e) => {
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
          "root",
          i,
          `${i}${ye(t)}`,
          `size${ye(o)}`,
          `${i}Size${ye(o)}`,
          t === "inherit" && "colorInherit",
          n && "disableElevation",
          r && "fullWidth",
        ],
        label: ["label"],
        startIcon: ["startIcon", `iconSize${ye(o)}`],
        endIcon: ["endIcon", `iconSize${ye(o)}`],
      },
      u = Vu(s, xv, l);
    return O({}, l, u);
  },
  $p = (e) =>
    O(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  Tv = xn(fv, {
    shouldForwardProp: (e) => Rp(e) || e === "classes",
    name: "MuiButton",
    slot: "Root",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        t[n.variant],
        t[`${n.variant}${ye(n.color)}`],
        t[`size${ye(n.size)}`],
        t[`${n.variant}Size${ye(n.size)}`],
        n.color === "inherit" && t.colorInherit,
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
          padding: "6px 16px",
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": O(
            {
              textDecoration: "none",
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                : zo(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : zo(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : zo(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "contained" && {
              backgroundColor: (e.vars || e).palette.grey.A100,
              boxShadow: (e.vars || e).shadows[4],
              "@media (hover: none)": {
                boxShadow: (e.vars || e).shadows[2],
                backgroundColor: (e.vars || e).palette.grey[300],
              },
            },
            t.variant === "contained" &&
              t.color !== "inherit" && {
                backgroundColor: (e.vars || e).palette[t.color].dark,
                "@media (hover: none)": {
                  backgroundColor: (e.vars || e).palette[t.color].main,
                },
              }
          ),
          "&:active": O(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[8] }
          ),
          [`&.${Oo.focusVisible}`]: O(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Oo.disabled}`]: O(
            { color: (e.vars || e).palette.action.disabled },
            t.variant === "outlined" && {
              border: `1px solid ${
                (e.vars || e).palette.action.disabledBackground
              }`,
            },
            t.variant === "contained" && {
              color: (e.vars || e).palette.action.disabled,
              boxShadow: (e.vars || e).shadows[0],
              backgroundColor: (e.vars || e).palette.action.disabledBackground,
            }
          ),
        },
        t.variant === "text" && { padding: "6px 8px" },
        t.variant === "text" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
          },
        t.variant === "outlined" && {
          padding: "5px 15px",
          border: "1px solid currentColor",
        },
        t.variant === "outlined" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].main,
            border: e.vars
              ? `1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`
              : `1px solid ${zo(e.palette[t.color].main, 0.5)}`,
          },
        t.variant === "contained" && {
          color: e.vars
            ? e.vars.palette.text.primary
            : (n = (r = e.palette).getContrastText) == null
            ? void 0
            : n.call(r, e.palette.grey[300]),
          backgroundColor: (e.vars || e).palette.grey[300],
          boxShadow: (e.vars || e).shadows[2],
        },
        t.variant === "contained" &&
          t.color !== "inherit" && {
            color: (e.vars || e).palette[t.color].contrastText,
            backgroundColor: (e.vars || e).palette[t.color].main,
          },
        t.color === "inherit" && {
          color: "inherit",
          borderColor: "currentColor",
        },
        t.size === "small" &&
          t.variant === "text" && {
            padding: "4px 5px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "text" && {
            padding: "8px 11px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "outlined" && {
            padding: "3px 9px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "outlined" && {
            padding: "7px 21px",
            fontSize: e.typography.pxToRem(15),
          },
        t.size === "small" &&
          t.variant === "contained" && {
            padding: "4px 10px",
            fontSize: e.typography.pxToRem(13),
          },
        t.size === "large" &&
          t.variant === "contained" && {
            padding: "8px 22px",
            fontSize: e.typography.pxToRem(15),
          },
        t.fullWidth && { width: "100%" }
      );
    },
    ({ ownerState: e }) =>
      e.disableElevation && {
        boxShadow: "none",
        "&:hover": { boxShadow: "none" },
        [`&.${Oo.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Oo.disabled}`]: { boxShadow: "none" },
      }
  ),
  Rv = xn("span", {
    name: "MuiButton",
    slot: "StartIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.startIcon, t[`iconSize${ye(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    O(
      { display: "inherit", marginRight: 8, marginLeft: -4 },
      e.size === "small" && { marginLeft: -2 },
      $p(e)
    )
  ),
  $v = xn("span", {
    name: "MuiButton",
    slot: "EndIcon",
    overridesResolver: (e, t) => {
      const { ownerState: n } = e;
      return [t.endIcon, t[`iconSize${ye(n.size)}`]];
    },
  })(({ ownerState: e }) =>
    O(
      { display: "inherit", marginRight: -4, marginLeft: 8 },
      e.size === "small" && { marginRight: -2 },
      $p(e)
    )
  ),
  zv = _.forwardRef(function (t, n) {
    const r = _.useContext(Ev),
      o = Wu(r, t),
      i = ul({ props: o, name: "MuiButton" }),
      {
        children: l,
        color: s = "primary",
        component: u = "button",
        className: a,
        disabled: m = !1,
        disableElevation: p = !1,
        disableFocusRipple: d = !1,
        endIcon: w,
        focusVisibleClassName: y,
        fullWidth: g = !1,
        size: P = "medium",
        startIcon: f,
        type: c,
        variant: h = "text",
      } = i,
      v = we(i, Pv),
      S = O({}, i, {
        color: s,
        component: u,
        disabled: m,
        disableElevation: p,
        disableFocusRipple: d,
        fullWidth: g,
        size: P,
        type: c,
        variant: h,
      }),
      k = _v(S),
      x = f && se(Rv, { className: k.startIcon, ownerState: S, children: f }),
      T = w && se($v, { className: k.endIcon, ownerState: S, children: w });
    return Go(
      Tv,
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
  Ov = zv;
const Hc = (e) => {
  switch (e) {
    case "regular":
      return { fontWeight: "500" };
    case "bold":
      return { fontWeight: "800" };
    case "italic":
      return { fontStyle: "italic" };
    case "light-italic":
      return { fontWeight: 100, fontStyle: "italic" };
    case "light":
      return { fontWeight: 100 };
    default:
      return;
  }
};
function Mv(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Qs(e, t);
}
function Qs(e, t) {
  return (
    (Qs =
      Object.setPrototypeOf ||
      function (r, o) {
        return (r.__proto__ = o), r;
      }),
    Qs(e, t)
  );
}
var Nv = (function (e) {
  Mv(t, e);
  function t(r) {
    var o;
    return (
      (o = e.call(this, r) || this),
      (o.isDrawing = !1),
      (o.lastPoint = null),
      (o.isFinished = !1),
      (o.reset = function () {
        (o.canvas.style.opacity = "1"),
          (o.ctx.globalCompositeOperation = "source-over"),
          o.ctx.drawImage(o.image, 0, 0, o.props.width, o.props.height),
          (o.isFinished = !1);
      }),
      (o.handleMouseDown = function (i) {
        (o.isDrawing = !0), (o.lastPoint = o.getMouse(i, o.canvas));
      }),
      (o.handleTouchEvent = function (i) {
        console.log("moving mouse");
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
            (o.ctx.globalCompositeOperation = "destination-out"),
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
          console.log("moving mouse");
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
              (o.ctx.globalCompositeOperation = "destination-out"),
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
        (this.ctx = this.canvas.getContext("2d")),
        (this.image = new Image()),
        (this.image.crossOrigin = "Anonymous"),
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
          d = 0;
        d < a.data.length;
        d += o
      )
        parseInt(a.data[d], 10) === 0 && p++;
      return Math.round((p / m) * 100);
    }),
    (n.getMouse = function (o, i) {
      var l = i.getBoundingClientRect(),
        s = l.top,
        u = l.left,
        a = window.pageYOffset || document.documentElement.scrollTop,
        m = window.pageXOffset || document.documentElement.scrollLeft,
        p = 0,
        d = 0;
      return (
        o && o.pageX && o.pageY
          ? ((p = o.pageX - u - m), (d = o.pageY - s - a))
          : o &&
            o.touches &&
            ((p = o.touches[0].clientX - u - m),
            (d = o.touches[0].clientY - s - a)),
        { x: p, y: d }
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
              ((this.canvas.style.transition = "1s"),
              (this.canvas.style.opacity = "0")),
            this.setState({ finished: !0 }),
            this.props.onComplete && this.props.onComplete(),
            (this.isFinished = !0));
      }
    }),
    (n.render = function () {
      var o = this,
        i = {
          width: this.props.width + "px",
          height: this.props.height + "px",
          position: "relative",
          WebkitUserSelect: "none",
          MozUserSelect: "none",
          msUserSelect: "none",
          userSelect: "none",
        },
        l = { position: "absolute", top: 0, zIndex: 1 },
        s = {
          visibility: this.state.loaded ? "visible" : "hidden",
          width: "100%",
          height: "100%",
        };
      return Pt.createElement(
        "div",
        { className: "ScratchCard__Container", style: i },
        Pt.createElement("canvas", {
          ref: function (a) {
            o.canvas = a;
          },
          className: "ScratchCard__Canvas",
          style: l,
          width: this.props.width,
          height: this.props.height,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchEvent,
          onMouseMove: this.handleMouseMove,
          onTouchMove: this.handleTouchEvent,
          onMouseUp: this.handleMouseUp,
          onTouchEnd: this.handleMouseUp,
        }),
        Pt.createElement(
          "div",
          { className: "ScratchCard__Result", style: s },
          this.props.children
        )
      );
    }),
    t
  );
})(_.Component);
function Iv() {
  const [e, t] = _.useState(!1),
    [n, r] = _.useState(null),
    [o, i] = _.useState(100);
  let l = localStorage.getItem("scratchCardConfig");
  l = JSON.parse(l);
  const { shopConfig: s, discountCodes: u } = l,
    {
      "border-color": a,
      "bg-color": m,
      height: p,
      "text-color": d,
      "border-radius": w,
      "border-width": y,
      "font-size": g,
      "selected-title-font-style": P,
      "title-font-size": f,
      "title-text-align-center": c,
      "sub-title": h,
      "sub-title-font-size": v,
      "sub-title-text-align-center": S,
      "selected-sub-title-font-style": k,
      "selected-scratch-card-style": x,
      title: T,
      "sub-title": z,
      "cusom-scratch-card-selected": $,
      "selected-custom-card-image": D,
      "selected-devices": Y,
    } = s,
    ce = Math.floor(Math.random() * 4);
  let le = localStorage.getItem("currentSessionScratchCardCode");
  le == null && localStorage.setItem("currentSessionScratchCardCode", ce);
  const Ge = u[Number(le)];
  let _e = localStorage.getItem("productHandle");
  const rt = s["product-selection"],
    E = s["selected-products"];
  let N = rt === "selected-products",
    M = !0,
    V = _.useRef(null);
  _.useRef(null),
    _.useEffect(() => (V.current && i(V.current.offsetWidth), () => {}), []);
  let xt = window.innerWidth < 500;
  N && (M = E.some((nn) => nn.handle === _e)),
    Y.includes("mobile") && xt
      ? (console.log("for mobile"), (M = !0))
      : Y.includes("desktop") && !xt
      ? (console.log("for desktop"), (M = !0))
      : (console.log("for none"), (M = !1)),
    _.useEffect(() => {
      if (M) {
        console.log({ scWidth: o });
        let nn = $;
        nn
          ? (console.log("custom scratch card selected", nn),
            document.querySelector(".ScratchCard__Canvas"),
            r(D))
          : (`${x.split(" ").join("-")}`,
            console.log(
              "scratch card style selected",
              `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${x
                .split(" ")
                .join("-")}.png`
            ),
            r(
              `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${x
                .split(" ")
                .join("-")}.png`
            ),
            document.querySelector(".ScratchCard__Canvas"));
      }
    }, [M, o]);
  const he = async () => {
      const Ye = (await fetch("/cart.js")).json(),
        cl = Ye.attributes;
      if (Ye.item_count === 0) {
        alert("Add one or more item in cart first!");
        return;
      }
      await fetch(`/discount/${Ge}`)
        .then((fl) => {
          t(!0),
            fetch("/cart/update.js", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                attributes: { ...cl, addedby: "scratch-card-app" },
              }),
            });
        })
        .catch((fl) => t(!0));
    },
    ft = Hc(P),
    De = Hc(k);
  let kt = null;
  return (
    console.log("scratch card image", n),
    M &&
      (console.log("widget will show"),
      (kt = Go("div", {
        className: "scratch-card-app",
        children: [
          se(Vl, {
            sx: {
              ...ft,
              width: "100%",
              fontSize: `${f}px`,
              textAlign: c && "center",
            },
            children: T,
          }),
          se(Vl, {
            sx: {
              ...De,
              width: "100%",
              fontSize: `${v}px`,
              textAlign: S && "center",
            },
            children: z,
          }),
          se(bl, {
            className: "root-container-sc",
            sx: {
              marginTop: "10px",
              marginBottom: "10px",
              ".ScratchCard__Canvas": {
                borderRadius: `${w}px`,
                margin: 0,
                padding: 0,
                zIndex: 1,
              },
            },
            ref: V,
            children: se(bl, {
              className: "ScratchCard__Container",
              sx: {
                position: "relative",
                width: `${o}px !important`,
                height: `${p}px !important`,
                border: `${y}px solid ${a}`,
                borderRadius: `${w}px`,
              },
              children: se(Nv, {
                width: o,
                height: p,
                image:
                  "https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/style-1.png",
                finishPercent: 80,
                children: Go(bl, {
                  sx: {
                    display: "flex",
                    flexDirection: "column",
                    height: "99.50%",
                    width: "99.50%",
                    margin: "0 auto",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: `${w}px`,
                    backgroundColor: m,
                  },
                  children: [
                    se(Vl, {
                      variant: "h6",
                      sx: { fontSize: `${g}px`, color: d },
                      children: Ge,
                    }),
                    se(Ov, {
                      variant: "text",
                      sx: { color: d, borderRadius: 0 },
                      disabled: e,
                      onClick: he,
                      children: e ? "Applied On Checkout" : "Apply Discount",
                    }),
                  ],
                }),
              }),
            }),
          }),
        ],
      }))),
    se(hh, { children: kt })
  );
}
async function Lv() {
  let e = localStorage.getItem("scratchCardConfig");
  if (e == null) {
    let n = await fetch(
      "https://scratch-card-app.herokuapp.com/public/shopConfig?shop=awesome-sauce-123.myshopify.com"
    ).then((r) => r.json());
    console.log("scratch card config ::: ", { shopConfig: n }),
      localStorage.setItem("scratchCardConfig", JSON.stringify(n));
  } else console.log("discount codes are already stored");
  return !0;
}
function Av() {
  Hl.createRoot(document.getElementById("scratch-card-app-root")).render(
    se(Iv, {})
  );
}
let zp = !1;
window.addEventListener("DOMContentLoaded", function () {
  (zp = !0),
    console.log("======= INIT :: SCRATCH-CARD-APP ======="),
    Lv().then(() => {
      Av(), setTimeout(Fv(), 1e3);
    });
});
window.onload = function () {
  if (!zp) {
    console.log("load event not fired! firing now====>>>"),
      console.log("======= INIT :: SCRATCH-CARD-APP =======");
    let e = new Event("DOMContentLoaded");
    dispatchEvent(e);
  }
};
function Fv() {
  let e = !1,
    t = null,
    n = setInterval(() => {
      (t = document.querySelector(".ScratchCard__Canvas")),
        t && (console.log("canvas found", e), clearInterval(n));
    }, 1e3);
}
