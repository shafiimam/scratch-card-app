var Vp = Object.defineProperty;
var Hp = (e, t, n) =>
  t in e
    ? Vp(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var po = (e, t, n) => (Hp(e, typeof t != "symbol" ? t + "" : t, n), n);
function Kp(e, t) {
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
function Qp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Lr = {},
  Gp = {
    get exports() {
      return Lr;
    },
    set exports(e) {
      Lr = e;
    },
  },
  Ci = {},
  P = {},
  Yp = {
    get exports() {
      return P;
    },
    set exports(e) {
      P = e;
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
 */ var ro = Symbol.for("react.element"),
  Xp = Symbol.for("react.portal"),
  Zp = Symbol.for("react.fragment"),
  Jp = Symbol.for("react.strict_mode"),
  qp = Symbol.for("react.profiler"),
  eh = Symbol.for("react.provider"),
  th = Symbol.for("react.context"),
  nh = Symbol.for("react.forward_ref"),
  rh = Symbol.for("react.suspense"),
  oh = Symbol.for("react.memo"),
  ih = Symbol.for("react.lazy"),
  ua = Symbol.iterator;
function lh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ua && e[ua]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Qc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Gc = Object.assign,
  Yc = {};
function or(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yc),
    (this.updater = n || Qc);
}
or.prototype.isReactComponent = {};
or.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
or.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Xc() {}
Xc.prototype = or.prototype;
function Gs(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Yc),
    (this.updater = n || Qc);
}
var Ys = (Gs.prototype = new Xc());
Ys.constructor = Gs;
Gc(Ys, or.prototype);
Ys.isPureReactComponent = !0;
var aa = Array.isArray,
  Zc = Object.prototype.hasOwnProperty,
  Xs = { current: null },
  Jc = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (l = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Zc.call(t, r) && !Jc.hasOwnProperty(r) && (o[r] = t[r]);
  var s = arguments.length - 2;
  if (s === 1) o.children = n;
  else if (1 < s) {
    for (var u = Array(s), a = 0; a < s; a++) u[a] = arguments[a + 2];
    o.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
  return {
    $$typeof: ro,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Xs.current,
  };
}
function sh(e, t) {
  return {
    $$typeof: ro,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Zs(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ro;
}
function uh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ca = /\/+/g;
function gl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? uh("" + e.key)
    : t.toString(36);
}
function Lo(e, t, n, r, o) {
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
          case ro:
          case Xp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + gl(l, 0) : r),
      aa(o)
        ? ((n = ""),
          e != null && (n = e.replace(ca, "$&/") + "/"),
          Lo(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Zs(o) &&
            (o = sh(
              o,
              n +
                (!o.key || (l && l.key === o.key)
                  ? ""
                  : ("" + o.key).replace(ca, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((l = 0), (r = r === "" ? "." : r + ":"), aa(e)))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var u = r + gl(i, s);
      l += Lo(i, t, n, u, o);
    }
  else if (((u = lh(e)), typeof u == "function"))
    for (e = u.call(e), s = 0; !(i = e.next()).done; )
      (i = i.value), (u = r + gl(i, s++)), (l += Lo(i, t, n, u, o));
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
function ho(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    Lo(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function ah(e) {
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
var ze = { current: null },
  Ao = { transition: null },
  ch = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: Ao,
    ReactCurrentOwner: Xs,
  };
L.Children = {
  map: ho,
  forEach: function (e, t, n) {
    ho(
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
      ho(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ho(e, function (t) {
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
L.Component = or;
L.Fragment = Zp;
L.Profiler = qp;
L.PureComponent = Gs;
L.StrictMode = Jp;
L.Suspense = rh;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ch;
L.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Gc({}, e.props),
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
      Zc.call(t, u) &&
        !Jc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    s = Array(u);
    for (var a = 0; a < u; a++) s[a] = arguments[a + 2];
    r.children = s;
  }
  return { $$typeof: ro, type: e.type, key: o, ref: i, props: r, _owner: l };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: th,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: eh, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = qc;
L.createFactory = function (e) {
  var t = qc.bind(null, e);
  return (t.type = e), t;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: nh, render: e };
};
L.isValidElement = Zs;
L.lazy = function (e) {
  return { $$typeof: ih, _payload: { _status: -1, _result: e }, _init: ah };
};
L.memo = function (e, t) {
  return { $$typeof: oh, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function (e) {
  var t = Ao.transition;
  Ao.transition = {};
  try {
    e();
  } finally {
    Ao.transition = t;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
L.useContext = function (e) {
  return ze.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
L.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
L.useId = function () {
  return ze.current.useId();
};
L.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
L.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
L.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
L.useRef = function (e) {
  return ze.current.useRef(e);
};
L.useState = function (e) {
  return ze.current.useState(e);
};
L.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function () {
  return ze.current.useTransition();
};
L.version = "18.2.0";
(function (e) {
  e.exports = L;
})(Yp);
const Rn = Qp(P),
  fa = Kp({ __proto__: null, default: Rn }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var fh = P,
  dh = Symbol.for("react.element"),
  ph = Symbol.for("react.fragment"),
  hh = Object.prototype.hasOwnProperty,
  mh = fh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  gh = { key: !0, ref: !0, __self: !0, __source: !0 };
function ef(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) hh.call(t, r) && !gh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: dh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: mh.current,
  };
}
Ci.Fragment = ph;
Ci.jsx = ef;
Ci.jsxs = ef;
(function (e) {
  e.exports = Ci;
})(Gp);
const yh = Lr.Fragment,
  fe = Lr.jsx,
  Er = Lr.jsxs;
var Kl = {},
  Ql = {},
  vh = {
    get exports() {
      return Ql;
    },
    set exports(e) {
      Ql = e;
    },
  },
  Ke = {},
  Gl = {},
  wh = {
    get exports() {
      return Gl;
    },
    set exports(e) {
      Gl = e;
    },
  },
  tf = {};
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
      var b = (M - 1) >>> 1,
        ne = E[b];
      if (0 < o(ne, N)) (E[b] = N), (E[M] = ne), (M = b);
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
      e: for (var b = 0, ne = E.length, xt = ne >>> 1; b < xt; ) {
        var he = 2 * (b + 1) - 1,
          ft = E[he],
          je = he + 1,
          kt = E[je];
        if (0 > o(ft, M))
          je < ne && 0 > o(kt, ft)
            ? ((E[b] = kt), (E[je] = M), (b = je))
            : ((E[b] = ft), (E[he] = M), (b = he));
        else if (je < ne && 0 > o(kt, M)) (E[b] = kt), (E[je] = M), (b = je);
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
    h = null,
    d = 3,
    w = !1,
    y = !1,
    g = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var N = n(a); N !== null; ) {
      if (N.callback === null) r(a);
      else if (N.startTime <= E)
        r(a), (N.sortIndex = N.expirationTime), t(u, N);
      else break;
      N = n(a);
    }
  }
  function v(E) {
    if (((g = !1), p(E), !y))
      if (n(u) !== null) (y = !0), Te(S);
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
        p(N), h = n(u);
        h !== null && (!(h.expirationTime > N) || (E && !F()));

      ) {
        var b = h.callback;
        if (typeof b == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var ne = b(h.expirationTime <= N);
          (N = e.unstable_now()),
            typeof ne == "function" ? (h.callback = ne) : h === n(u) && r(u),
            p(N);
        } else r(u);
        h = n(u);
      }
      if (h !== null) var xt = !0;
      else {
        var he = n(a);
        he !== null && rt(v, he.startTime - N), (xt = !1);
      }
      return xt;
    } finally {
      (h = null), (d = M), (w = !1);
    }
  }
  var k = !1,
    x = null,
    T = -1,
    z = 5,
    $ = -1;
  function F() {
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
        N ? ae() : ((k = !1), (x = null));
      }
    } else k = !1;
  }
  var ae;
  if (typeof c == "function")
    ae = function () {
      c(Y);
    };
  else if (typeof MessageChannel < "u") {
    var le = new MessageChannel(),
      Ye = le.port2;
    (le.port1.onmessage = Y),
      (ae = function () {
        Ye.postMessage(null);
      });
  } else
    ae = function () {
      _(Y, 0);
    };
  function Te(E) {
    (x = E), k || ((k = !0), ae());
  }
  function rt(E, N) {
    T = _(function () {
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
      y || w || ((y = !0), Te(S));
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
      var b = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? b + M : b))
          : (M = b),
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
        M > b
          ? ((E.sortIndex = M),
            t(a, E),
            n(u) === null &&
              E === n(a) &&
              (g ? (f(T), (T = -1)) : (g = !0), rt(v, M - b)))
          : ((E.sortIndex = ne), t(u, E), y || w || ((y = !0), Te(S))),
        E
      );
    }),
    (e.unstable_shouldYield = F),
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
})(tf);
(function (e) {
  e.exports = tf;
})(wh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nf = P,
  He = Gl;
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
var rf = new Set(),
  Ar = {};
function vn(e, t) {
  Yn(e, t), Yn(e + "Capture", t);
}
function Yn(e, t) {
  for (Ar[e] = t, e = 0; e < t.length; e++) rf.add(t[e]);
}
var $t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  Sh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  da = {},
  pa = {};
function xh(e) {
  return Yl.call(pa, e)
    ? !0
    : Yl.call(da, e)
    ? !1
    : Sh.test(e)
    ? (pa[e] = !0)
    : ((da[e] = !0), !1);
}
function kh(e, t, n, r) {
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
function Ch(e, t, n, r) {
  if (t === null || typeof t > "u" || kh(e, t, n, r)) return !0;
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
function Oe(e, t, n, r, o, i, l) {
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
    Se[e] = new Oe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Se[t] = new Oe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Se[e] = new Oe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Se[e] = new Oe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Se[e] = new Oe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Se[e] = new Oe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Se[e] = new Oe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Se[e] = new Oe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Se[e] = new Oe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Js = /[\-:]([a-z])/g;
function qs(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, qs);
    Se[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Js, qs);
    Se[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Js, qs);
  Se[t] = new Oe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Se.xlinkHref = new Oe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Se[e] = new Oe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function eu(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Ch(t, n, o, r) && (n = null),
    r || o === null
      ? xh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var It = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  mo = Symbol.for("react.element"),
  $n = Symbol.for("react.portal"),
  zn = Symbol.for("react.fragment"),
  tu = Symbol.for("react.strict_mode"),
  Xl = Symbol.for("react.profiler"),
  of = Symbol.for("react.provider"),
  lf = Symbol.for("react.context"),
  nu = Symbol.for("react.forward_ref"),
  Zl = Symbol.for("react.suspense"),
  Jl = Symbol.for("react.suspense_list"),
  ru = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  sf = Symbol.for("react.offscreen"),
  ha = Symbol.iterator;
function ar(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ha && e[ha]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var J = Object.assign,
  yl;
function Sr(e) {
  if (yl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      yl = (t && t[1]) || "";
    }
  return (
    `
` +
    yl +
    e
  );
}
var vl = !1;
function wl(e, t) {
  if (!e || vl) return "";
  vl = !0;
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
    (vl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Sr(e) : "";
}
function Eh(e) {
  switch (e.tag) {
    case 5:
      return Sr(e.type);
    case 16:
      return Sr("Lazy");
    case 13:
      return Sr("Suspense");
    case 19:
      return Sr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = wl(e.type, !1)), e;
    case 11:
      return (e = wl(e.type.render, !1)), e;
    case 1:
      return (e = wl(e.type, !0)), e;
    default:
      return "";
  }
}
function ql(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case zn:
      return "Fragment";
    case $n:
      return "Portal";
    case Xl:
      return "Profiler";
    case tu:
      return "StrictMode";
    case Zl:
      return "Suspense";
    case Jl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case lf:
        return (e.displayName || "Context") + ".Consumer";
      case of:
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
          (t = e.displayName || null), t !== null ? t : ql(e.type) || "Memo"
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return ql(e(t));
        } catch {}
    }
  return null;
}
function _h(e) {
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
      return ql(t);
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
function Xt(e) {
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
function uf(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Ph(e) {
  var t = uf(e) ? "checked" : "value",
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
function go(e) {
  e._valueTracker || (e._valueTracker = Ph(e));
}
function af(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = uf(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Zo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function es(e, t) {
  var n = t.checked;
  return J({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ma(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Xt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function cf(e, t) {
  (t = t.checked), t != null && eu(e, "checked", t, !1);
}
function ts(e, t) {
  cf(e, t);
  var n = Xt(t.value),
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
    ? ns(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && ns(e, t.type, Xt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ga(e, t, n) {
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
function ns(e, t, n) {
  (t !== "number" || Zo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xr = Array.isArray;
function Un(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Xt(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function rs(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return J({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function ya(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (xr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function ff(e, t) {
  var n = Xt(t.value),
    r = Xt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function va(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function df(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function os(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? df(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var yo,
  pf = (function (e) {
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
        yo = yo || document.createElement("div"),
          yo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = yo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Fr(e, t) {
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
  Th = ["Webkit", "ms", "Moz", "O"];
Object.keys(_r).forEach(function (e) {
  Th.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (_r[t] = _r[e]);
  });
});
function hf(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (_r.hasOwnProperty(e) && _r[e])
    ? ("" + t).trim()
    : t + "px";
}
function mf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = hf(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var Rh = J(
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
function is(e, t) {
  if (t) {
    if (Rh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function ls(e, t) {
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
var ss = null;
function ou(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var us = null,
  Wn = null,
  bn = null;
function wa(e) {
  if ((e = lo(e))) {
    if (typeof us != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ri(t)), us(e.stateNode, e.type, t));
  }
}
function gf(e) {
  Wn ? (bn ? bn.push(e) : (bn = [e])) : (Wn = e);
}
function yf() {
  if (Wn) {
    var e = Wn,
      t = bn;
    if (((bn = Wn = null), wa(e), t)) for (e = 0; e < t.length; e++) wa(t[e]);
  }
}
function vf(e, t) {
  return e(t);
}
function wf() {}
var Sl = !1;
function Sf(e, t, n) {
  if (Sl) return e(t, n);
  Sl = !0;
  try {
    return vf(e, t, n);
  } finally {
    (Sl = !1), (Wn !== null || bn !== null) && (wf(), yf());
  }
}
function Dr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ri(n);
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
var as = !1;
if ($t)
  try {
    var cr = {};
    Object.defineProperty(cr, "passive", {
      get: function () {
        as = !0;
      },
    }),
      window.addEventListener("test", cr, cr),
      window.removeEventListener("test", cr, cr);
  } catch {
    as = !1;
  }
function $h(e, t, n, r, o, i, l, s, u) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Pr = !1,
  Jo = null,
  qo = !1,
  cs = null,
  zh = {
    onError: function (e) {
      (Pr = !0), (Jo = e);
    },
  };
function Oh(e, t, n, r, o, i, l, s, u) {
  (Pr = !1), (Jo = null), $h.apply(zh, arguments);
}
function Mh(e, t, n, r, o, i, l, s, u) {
  if ((Oh.apply(this, arguments), Pr)) {
    if (Pr) {
      var a = Jo;
      (Pr = !1), (Jo = null);
    } else throw Error(C(198));
    qo || ((qo = !0), (cs = a));
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
function xf(e) {
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
function Sa(e) {
  if (wn(e) !== e) throw Error(C(188));
}
function Nh(e) {
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
        if (i === n) return Sa(o), e;
        if (i === r) return Sa(o), t;
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
function kf(e) {
  return (e = Nh(e)), e !== null ? Cf(e) : null;
}
function Cf(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Cf(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ef = He.unstable_scheduleCallback,
  xa = He.unstable_cancelCallback,
  Ih = He.unstable_shouldYield,
  Lh = He.unstable_requestPaint,
  re = He.unstable_now,
  Ah = He.unstable_getCurrentPriorityLevel,
  iu = He.unstable_ImmediatePriority,
  _f = He.unstable_UserBlockingPriority,
  ei = He.unstable_NormalPriority,
  Fh = He.unstable_LowPriority,
  Pf = He.unstable_IdlePriority,
  Ei = null,
  vt = null;
function Dh(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(Ei, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ut = Math.clz32 ? Math.clz32 : Uh,
  jh = Math.log,
  Bh = Math.LN2;
function Uh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((jh(e) / Bh) | 0)) | 0;
}
var vo = 64,
  wo = 4194304;
function kr(e) {
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
function ti(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var s = l & ~o;
    s !== 0 ? (r = kr(s)) : ((i &= l), i !== 0 && (r = kr(i)));
  } else (l = n & ~o), l !== 0 ? (r = kr(l)) : i !== 0 && (r = kr(i));
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
function Wh(e, t) {
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
function bh(e, t) {
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
      ? (!(s & n) || s & r) && (o[l] = Wh(s, t))
      : u <= t && (e.expiredLanes |= s),
      (i &= ~s);
  }
}
function fs(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Tf() {
  var e = vo;
  return (vo <<= 1), !(vo & 4194240) && (vo = 64), e;
}
function xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function oo(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ut(t)),
    (e[t] = n);
}
function Vh(e, t) {
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
function Rf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var $f,
  su,
  zf,
  Of,
  Mf,
  ds = !1,
  So = [],
  Wt = null,
  bt = null,
  Vt = null,
  jr = new Map(),
  Br = new Map(),
  Dt = [],
  Hh =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function ka(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Wt = null;
      break;
    case "dragenter":
    case "dragleave":
      bt = null;
      break;
    case "mouseover":
    case "mouseout":
      Vt = null;
      break;
    case "pointerover":
    case "pointerout":
      jr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Br.delete(t.pointerId);
  }
}
function fr(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = lo(t)), t !== null && su(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Kh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wt = fr(Wt, e, t, n, r, o)), !0;
    case "dragenter":
      return (bt = fr(bt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Vt = fr(Vt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return jr.set(i, fr(jr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Br.set(i, fr(Br.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Nf(e) {
  var t = ln(e.target);
  if (t !== null) {
    var n = wn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = xf(n)), t !== null)) {
          (e.blockedOn = t),
            Mf(e.priority, function () {
              zf(n);
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
function Fo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ps(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ss = r), n.target.dispatchEvent(r), (ss = null);
    } else return (t = lo(n)), t !== null && su(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ca(e, t, n) {
  Fo(e) && n.delete(t);
}
function Qh() {
  (ds = !1),
    Wt !== null && Fo(Wt) && (Wt = null),
    bt !== null && Fo(bt) && (bt = null),
    Vt !== null && Fo(Vt) && (Vt = null),
    jr.forEach(Ca),
    Br.forEach(Ca);
}
function dr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ds ||
      ((ds = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, Qh)));
}
function Ur(e) {
  function t(o) {
    return dr(o, e);
  }
  if (0 < So.length) {
    dr(So[0], e);
    for (var n = 1; n < So.length; n++) {
      var r = So[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && dr(Wt, e),
      bt !== null && dr(bt, e),
      Vt !== null && dr(Vt, e),
      jr.forEach(t),
      Br.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Nf(n), n.blockedOn === null && Dt.shift();
}
var Vn = It.ReactCurrentBatchConfig,
  ni = !0;
function Gh(e, t, n, r) {
  var o = U,
    i = Vn.transition;
  Vn.transition = null;
  try {
    (U = 1), uu(e, t, n, r);
  } finally {
    (U = o), (Vn.transition = i);
  }
}
function Yh(e, t, n, r) {
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
  if (ni) {
    var o = ps(e, t, n, r);
    if (o === null) Ol(e, t, r, ri, n), ka(e, r);
    else if (Kh(o, e, t, n, r)) r.stopPropagation();
    else if ((ka(e, r), t & 4 && -1 < Hh.indexOf(e))) {
      for (; o !== null; ) {
        var i = lo(o);
        if (
          (i !== null && $f(i),
          (i = ps(e, t, n, r)),
          i === null && Ol(e, t, r, ri, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else Ol(e, t, r, null, n);
  }
}
var ri = null;
function ps(e, t, n, r) {
  if (((ri = null), (e = ou(r)), (e = ln(e)), e !== null))
    if (((t = wn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = xf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ri = e), null;
}
function If(e) {
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
      switch (Ah()) {
        case iu:
          return 1;
        case _f:
          return 4;
        case ei:
        case Fh:
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
var Bt = null,
  au = null,
  Do = null;
function Lf() {
  if (Do) return Do;
  var e,
    t = au,
    n = t.length,
    r,
    o = "value" in Bt ? Bt.value : Bt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Do = o.slice(e, 1 < r ? 1 - r : void 0));
}
function jo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function xo() {
  return !0;
}
function Ea() {
  return !1;
}
function Qe(e) {
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
        ? xo
        : Ea),
      (this.isPropagationStopped = Ea),
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
          (this.isDefaultPrevented = xo));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = xo));
      },
      persist: function () {},
      isPersistent: xo,
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
  cu = Qe(ir),
  io = J({}, ir, { view: 0, detail: 0 }),
  Xh = Qe(io),
  kl,
  Cl,
  pr,
  _i = J({}, io, {
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
        : (e !== pr &&
            (pr && e.type === "mousemove"
              ? ((kl = e.screenX - pr.screenX), (Cl = e.screenY - pr.screenY))
              : (Cl = kl = 0),
            (pr = e)),
          kl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Cl;
    },
  }),
  _a = Qe(_i),
  Zh = J({}, _i, { dataTransfer: 0 }),
  Jh = Qe(Zh),
  qh = J({}, io, { relatedTarget: 0 }),
  El = Qe(qh),
  em = J({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  tm = Qe(em),
  nm = J({}, ir, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  rm = Qe(nm),
  om = J({}, ir, { data: 0 }),
  Pa = Qe(om),
  im = {
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
  lm = {
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
  sm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function um(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sm[e]) ? !!t[e] : !1;
}
function fu() {
  return um;
}
var am = J({}, io, {
    key: function (e) {
      if (e.key) {
        var t = im[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = jo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? lm[e.keyCode] || "Unidentified"
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
      return e.type === "keypress" ? jo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? jo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  cm = Qe(am),
  fm = J({}, _i, {
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
  Ta = Qe(fm),
  dm = J({}, io, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fu,
  }),
  pm = Qe(dm),
  hm = J({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  mm = Qe(hm),
  gm = J({}, _i, {
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
  ym = Qe(gm),
  vm = [9, 13, 27, 32],
  du = $t && "CompositionEvent" in window,
  Tr = null;
$t && "documentMode" in document && (Tr = document.documentMode);
var wm = $t && "TextEvent" in window && !Tr,
  Af = $t && (!du || (Tr && 8 < Tr && 11 >= Tr)),
  Ra = String.fromCharCode(32),
  $a = !1;
function Ff(e, t) {
  switch (e) {
    case "keyup":
      return vm.indexOf(t.keyCode) !== -1;
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
function Df(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function Sm(e, t) {
  switch (e) {
    case "compositionend":
      return Df(t);
    case "keypress":
      return t.which !== 32 ? null : (($a = !0), Ra);
    case "textInput":
      return (e = t.data), e === Ra && $a ? null : e;
    default:
      return null;
  }
}
function xm(e, t) {
  if (On)
    return e === "compositionend" || (!du && Ff(e, t))
      ? ((e = Lf()), (Do = au = Bt = null), (On = !1), e)
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
      return Af && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var km = {
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
function za(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!km[e.type] : t === "textarea";
}
function jf(e, t, n, r) {
  gf(r),
    (t = oi(t, "onChange")),
    0 < t.length &&
      ((n = new cu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Rr = null,
  Wr = null;
function Cm(e) {
  Xf(e, 0);
}
function Pi(e) {
  var t = In(e);
  if (af(t)) return e;
}
function Em(e, t) {
  if (e === "change") return t;
}
var Bf = !1;
if ($t) {
  var _l;
  if ($t) {
    var Pl = "oninput" in document;
    if (!Pl) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"),
        (Pl = typeof Oa.oninput == "function");
    }
    _l = Pl;
  } else _l = !1;
  Bf = _l && (!document.documentMode || 9 < document.documentMode);
}
function Ma() {
  Rr && (Rr.detachEvent("onpropertychange", Uf), (Wr = Rr = null));
}
function Uf(e) {
  if (e.propertyName === "value" && Pi(Wr)) {
    var t = [];
    jf(t, Wr, e, ou(e)), Sf(Cm, t);
  }
}
function _m(e, t, n) {
  e === "focusin"
    ? (Ma(), (Rr = t), (Wr = n), Rr.attachEvent("onpropertychange", Uf))
    : e === "focusout" && Ma();
}
function Pm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Pi(Wr);
}
function Tm(e, t) {
  if (e === "click") return Pi(t);
}
function Rm(e, t) {
  if (e === "input" || e === "change") return Pi(t);
}
function $m(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ct = typeof Object.is == "function" ? Object.is : $m;
function br(e, t) {
  if (ct(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!Yl.call(t, o) || !ct(e[o], t[o])) return !1;
  }
  return !0;
}
function Na(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ia(e, t) {
  var n = Na(e);
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
    n = Na(n);
  }
}
function Wf(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Wf(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function bf() {
  for (var e = window, t = Zo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zo(e.document);
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
function zm(e) {
  var t = bf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Wf(n.ownerDocument.documentElement, n)
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
          (o = Ia(n, i));
        var l = Ia(n, r);
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
var Om = $t && "documentMode" in document && 11 >= document.documentMode,
  Mn = null,
  hs = null,
  $r = null,
  ms = !1;
function La(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ms ||
    Mn == null ||
    Mn !== Zo(r) ||
    ((r = Mn),
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
    ($r && br($r, r)) ||
      (($r = r),
      (r = oi(hs, "onSelect")),
      0 < r.length &&
        ((t = new cu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Mn))));
}
function ko(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Nn = {
    animationend: ko("Animation", "AnimationEnd"),
    animationiteration: ko("Animation", "AnimationIteration"),
    animationstart: ko("Animation", "AnimationStart"),
    transitionend: ko("Transition", "TransitionEnd"),
  },
  Tl = {},
  Vf = {};
$t &&
  ((Vf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Nn.animationend.animation,
    delete Nn.animationiteration.animation,
    delete Nn.animationstart.animation),
  "TransitionEvent" in window || delete Nn.transitionend.transition);
function Ti(e) {
  if (Tl[e]) return Tl[e];
  if (!Nn[e]) return e;
  var t = Nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Vf) return (Tl[e] = t[n]);
  return e;
}
var Hf = Ti("animationend"),
  Kf = Ti("animationiteration"),
  Qf = Ti("animationstart"),
  Gf = Ti("transitionend"),
  Yf = new Map(),
  Aa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  Yf.set(e, t), vn(t, [e]);
}
for (var Rl = 0; Rl < Aa.length; Rl++) {
  var $l = Aa[Rl],
    Mm = $l.toLowerCase(),
    Nm = $l[0].toUpperCase() + $l.slice(1);
  Jt(Mm, "on" + Nm);
}
Jt(Hf, "onAnimationEnd");
Jt(Kf, "onAnimationIteration");
Jt(Qf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Gf, "onTransitionEnd");
Yn("onMouseEnter", ["mouseout", "mouseover"]);
Yn("onMouseLeave", ["mouseout", "mouseover"]);
Yn("onPointerEnter", ["pointerout", "pointerover"]);
Yn("onPointerLeave", ["pointerout", "pointerover"]);
vn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
vn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
vn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
vn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
vn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Im = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));
function Fa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Mh(r, t, void 0, e), (e.currentTarget = null);
}
function Xf(e, t) {
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
          Fa(o, s, a), (i = u);
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
          Fa(o, s, a), (i = u);
        }
    }
  }
  if (qo) throw ((e = cs), (qo = !1), (cs = null), e);
}
function H(e, t) {
  var n = t[Ss];
  n === void 0 && (n = t[Ss] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Zf(t, e, 2, !1), n.add(r));
}
function zl(e, t, n) {
  var r = 0;
  t && (r |= 4), Zf(n, e, r, t);
}
var Co = "_reactListening" + Math.random().toString(36).slice(2);
function Vr(e) {
  if (!e[Co]) {
    (e[Co] = !0),
      rf.forEach(function (n) {
        n !== "selectionchange" && (Im.has(n) || zl(n, !1, e), zl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Co] || ((t[Co] = !0), zl("selectionchange", !1, t));
  }
}
function Zf(e, t, n, r) {
  switch (If(t)) {
    case 1:
      var o = Gh;
      break;
    case 4:
      o = Yh;
      break;
    default:
      o = uu;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !as ||
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
function Ol(e, t, n, r, o) {
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
  Sf(function () {
    var a = i,
      m = ou(n),
      h = [];
    e: {
      var d = Yf.get(e);
      if (d !== void 0) {
        var w = cu,
          y = e;
        switch (e) {
          case "keypress":
            if (jo(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = cm;
            break;
          case "focusin":
            (y = "focus"), (w = El);
            break;
          case "focusout":
            (y = "blur"), (w = El);
            break;
          case "beforeblur":
          case "afterblur":
            w = El;
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
            w = Jh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = pm;
            break;
          case Hf:
          case Kf:
          case Qf:
            w = tm;
            break;
          case Gf:
            w = mm;
            break;
          case "scroll":
            w = Xh;
            break;
          case "wheel":
            w = ym;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = rm;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Ta;
        }
        var g = (t & 4) !== 0,
          _ = !g && e === "scroll",
          f = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = Dr(c, f)), v != null && g.push(Hr(c, v, p)))),
            _)
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
          ((d = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          d &&
            n !== ss &&
            (y = n.relatedTarget || n.fromElement) &&
            (ln(y) || y[zt]))
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
                ((_ = wn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
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
              ((g = Ta),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (c = "pointer")),
            (_ = w == null ? d : In(w)),
            (p = y == null ? d : In(y)),
            (d = new g(v, c + "leave", w, n, m)),
            (d.target = _),
            (d.relatedTarget = p),
            (v = null),
            ln(m) === a &&
              ((g = new g(f, c + "enter", y, n, m)),
              (g.target = p),
              (g.relatedTarget = _),
              (v = g)),
            (_ = v),
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
          w !== null && Da(h, d, w, g, !1),
            y !== null && _ !== null && Da(h, _, y, g, !0);
        }
      }
      e: {
        if (
          ((d = a ? In(a) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === "select" || (w === "input" && d.type === "file"))
        )
          var S = Em;
        else if (za(d))
          if (Bf) S = Rm;
          else {
            S = Pm;
            var k = _m;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Tm);
        if (S && (S = S(e, a))) {
          jf(h, S, n, m);
          break e;
        }
        k && k(e, d, a),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            ns(d, "number", d.value);
      }
      switch (((k = a ? In(a) : window), e)) {
        case "focusin":
          (za(k) || k.contentEditable === "true") &&
            ((Mn = k), (hs = a), ($r = null));
          break;
        case "focusout":
          $r = hs = Mn = null;
          break;
        case "mousedown":
          ms = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ms = !1), La(h, n, m);
          break;
        case "selectionchange":
          if (Om) break;
        case "keydown":
        case "keyup":
          La(h, n, m);
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
        On
          ? Ff(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Af &&
          n.locale !== "ko" &&
          (On || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && On && (x = Lf())
            : ((Bt = m),
              (au = "value" in Bt ? Bt.value : Bt.textContent),
              (On = !0))),
        (k = oi(a, T)),
        0 < k.length &&
          ((T = new Pa(T, e, null, n, m)),
          h.push({ event: T, listeners: k }),
          x ? (T.data = x) : ((x = Df(n)), x !== null && (T.data = x)))),
        (x = wm ? Sm(e, n) : xm(e, n)) &&
          ((a = oi(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new Pa("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: a }),
            (m.data = x)));
    }
    Xf(h, t);
  });
}
function Hr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function oi(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Dr(e, n)),
      i != null && r.unshift(Hr(e, i, o)),
      (i = Dr(e, t)),
      i != null && r.push(Hr(e, i, o))),
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
function Da(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var s = n,
      u = s.alternate,
      a = s.stateNode;
    if (u !== null && u === r) break;
    s.tag === 5 &&
      a !== null &&
      ((s = a),
      o
        ? ((u = Dr(n, i)), u != null && l.unshift(Hr(n, u, s)))
        : o || ((u = Dr(n, i)), u != null && l.push(Hr(n, u, s)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Lm = /\r\n?/g,
  Am = /\u0000|\uFFFD/g;
function ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Lm,
      `
`
    )
    .replace(Am, "");
}
function Eo(e, t, n) {
  if (((t = ja(t)), ja(e) !== t && n)) throw Error(C(425));
}
function ii() {}
var gs = null,
  ys = null;
function vs(e, t) {
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
var ws = typeof setTimeout == "function" ? setTimeout : void 0,
  Fm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ba = typeof Promise == "function" ? Promise : void 0,
  Dm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ba < "u"
      ? function (e) {
          return Ba.resolve(null).then(e).catch(jm);
        }
      : ws;
function jm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ml(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), Ur(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  Ur(t);
}
function Ht(e) {
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
function Ua(e) {
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
var lr = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + lr,
  Kr = "__reactProps$" + lr,
  zt = "__reactContainer$" + lr,
  Ss = "__reactEvents$" + lr,
  Bm = "__reactListeners$" + lr,
  Um = "__reactHandles$" + lr;
function ln(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[zt] || n[gt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ua(e); e !== null; ) {
          if ((n = e[gt])) return n;
          e = Ua(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function lo(e) {
  return (
    (e = e[gt] || e[zt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function In(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ri(e) {
  return e[Kr] || null;
}
var xs = [],
  Ln = -1;
function qt(e) {
  return { current: e };
}
function K(e) {
  0 > Ln || ((e.current = xs[Ln]), (xs[Ln] = null), Ln--);
}
function V(e, t) {
  Ln++, (xs[Ln] = e.current), (e.current = t);
}
var Zt = {},
  Pe = qt(Zt),
  Le = qt(!1),
  dn = Zt;
function Xn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Zt;
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
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function li() {
  K(Le), K(Pe);
}
function Wa(e, t, n) {
  if (Pe.current !== Zt) throw Error(C(168));
  V(Pe, t), V(Le, n);
}
function Jf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, _h(e) || "Unknown", o));
  return J({}, n, r);
}
function si(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (dn = Pe.current),
    V(Pe, e),
    V(Le, Le.current),
    !0
  );
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Jf(e, t, dn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Le),
      K(Pe),
      V(Pe, e))
    : K(Le),
    V(Le, n);
}
var Et = null,
  $i = !1,
  Nl = !1;
function qf(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
function Wm(e) {
  ($i = !0), qf(e);
}
function en() {
  if (!Nl && Et !== null) {
    Nl = !0;
    var e = 0,
      t = U;
    try {
      var n = Et;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Et = null), ($i = !1);
    } catch (o) {
      throw (Et !== null && (Et = Et.slice(e + 1)), Ef(iu, en), o);
    } finally {
      (U = t), (Nl = !1);
    }
  }
  return null;
}
var An = [],
  Fn = 0,
  ui = null,
  ai = 0,
  Ze = [],
  Je = 0,
  pn = null,
  _t = 1,
  Pt = "";
function nn(e, t) {
  (An[Fn++] = ai), (An[Fn++] = ui), (ui = e), (ai = t);
}
function ed(e, t, n) {
  (Ze[Je++] = _t), (Ze[Je++] = Pt), (Ze[Je++] = pn), (pn = e);
  var r = _t;
  e = Pt;
  var o = 32 - ut(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - ut(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (_t = (1 << (32 - ut(t) + o)) | (n << o) | r),
      (Pt = i + e);
  } else (_t = (1 << i) | (n << o) | r), (Pt = e);
}
function hu(e) {
  e.return !== null && (nn(e, 1), ed(e, 1, 0));
}
function mu(e) {
  for (; e === ui; )
    (ui = An[--Fn]), (An[Fn] = null), (ai = An[--Fn]), (An[Fn] = null);
  for (; e === pn; )
    (pn = Ze[--Je]),
      (Ze[Je] = null),
      (Pt = Ze[--Je]),
      (Ze[Je] = null),
      (_t = Ze[--Je]),
      (Ze[Je] = null);
}
var be = null,
  We = null,
  G = !1,
  st = null;
function td(e, t) {
  var n = qe(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Va(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (be = e), (We = Ht(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (be = e), (We = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = pn !== null ? { id: _t, overflow: Pt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = qe(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (be = e),
            (We = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function ks(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Cs(e) {
  if (G) {
    var t = We;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if (ks(e)) throw Error(C(418));
        t = Ht(n.nextSibling);
        var r = be;
        t && Va(e, t)
          ? td(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (be = e));
      }
    } else {
      if (ks(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (be = e);
    }
  }
}
function Ha(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function _o(e) {
  if (e !== be) return !1;
  if (!G) return Ha(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !vs(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (ks(e)) throw (nd(), Error(C(418)));
    for (; t; ) td(e, t), (t = Ht(t.nextSibling));
  }
  if ((Ha(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              We = Ht(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      We = null;
    }
  } else We = be ? Ht(e.stateNode.nextSibling) : null;
  return !0;
}
function nd() {
  for (var e = We; e; ) e = Ht(e.nextSibling);
}
function Zn() {
  (We = be = null), (G = !1);
}
function gu(e) {
  st === null ? (st = [e]) : st.push(e);
}
var bm = It.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = J({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ci = qt(null),
  fi = null,
  Dn = null,
  yu = null;
function vu() {
  yu = Dn = fi = null;
}
function wu(e) {
  var t = ci.current;
  K(ci), (e._currentValue = t);
}
function Es(e, t, n) {
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
  (fi = e),
    (yu = Dn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ie = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (yu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Dn === null)) {
      if (fi === null) throw Error(C(308));
      (Dn = e), (fi.dependencies = { lanes: 0, firstContext: e });
    } else Dn = Dn.next = e;
  return t;
}
var sn = null;
function Su(e) {
  sn === null ? (sn = [e]) : sn.push(e);
}
function rd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Su(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
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
var Ft = !1;
function xu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function od(e, t) {
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
function Tt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), A & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Su(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function Bo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
function Ka(e, t) {
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
function di(e, t, n, r) {
  var o = e.updateQueue;
  Ft = !1;
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
              if (((y = g.payload), typeof y == "function")) {
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
                (d = typeof y == "function" ? y.call(w, h, d) : y),
                d == null)
              )
                break e;
              h = J({}, h, d);
              break e;
            case 2:
              Ft = !0;
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
function Qa(e, t, n) {
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
var id = new nf.Component().refs;
function _s(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : J({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var zi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? wn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      o = Gt(e),
      i = Tt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, o)),
      t !== null && (at(t, e, o, r), Bo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      o = Gt(e),
      i = Tt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, o)),
      t !== null && (at(t, e, o, r), Bo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = Gt(e),
      o = Tt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Kt(e, o, r)),
      t !== null && (at(t, e, r, n), Bo(t, e, r));
  },
};
function Ga(e, t, n, r, o, i, l) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, l)
      : t.prototype && t.prototype.isPureReactComponent
      ? !br(n, r) || !br(o, i)
      : !0
  );
}
function ld(e, t, n) {
  var r = !1,
    o = Zt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = tt(i))
      : ((o = Ae(t) ? dn : Pe.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Xn(e, o) : Zt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = zi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Ya(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && zi.enqueueReplaceState(t, t.state, null);
}
function Ps(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = id), xu(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = tt(i))
    : ((i = Ae(t) ? dn : Pe.current), (o.context = Xn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (_s(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && zi.enqueueReplaceState(o, o.state, null),
      di(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function hr(e, t, n) {
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
            s === id && (s = o.refs = {}),
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
function Po(e, t) {
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
function Xa(e) {
  var t = e._init;
  return t(e._payload);
}
function sd(e) {
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
    return (f = Yt(f, c)), (f.index = 0), (f.sibling = null), f;
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
      ? ((c = Bl(p, f.mode, v)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function u(f, c, p, v) {
    var S = p.type;
    return S === zn
      ? m(f, c, p.props.children, v, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === At &&
            Xa(S) === c.type))
      ? ((v = o(c, p.props)), (v.ref = hr(f, c, p)), (v.return = f), v)
      : ((v = Ko(p.type, p.key, p.props, null, f.mode, v)),
        (v.ref = hr(f, c, p)),
        (v.return = f),
        v);
  }
  function a(f, c, p, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Ul(p, f.mode, v)), (c.return = f), c)
      : ((c = o(c, p.children || [])), (c.return = f), c);
  }
  function m(f, c, p, v, S) {
    return c === null || c.tag !== 7
      ? ((c = fn(p, f.mode, v, S)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = Bl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case mo:
          return (
            (p = Ko(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = hr(f, null, c)),
            (p.return = f),
            p
          );
        case $n:
          return (c = Ul(c, f.mode, p)), (c.return = f), c;
        case At:
          var v = c._init;
          return h(f, v(c._payload), p);
      }
      if (xr(c) || ar(c))
        return (c = fn(c, f.mode, p, null)), (c.return = f), c;
      Po(f, c);
    }
    return null;
  }
  function d(f, c, p, v) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : s(f, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case mo:
          return p.key === S ? u(f, c, p, v) : null;
        case $n:
          return p.key === S ? a(f, c, p, v) : null;
        case At:
          return (S = p._init), d(f, c, S(p._payload), v);
      }
      if (xr(p) || ar(p)) return S !== null ? null : m(f, c, p, v, null);
      Po(f, p);
    }
    return null;
  }
  function w(f, c, p, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(p) || null), s(c, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case mo:
          return (f = f.get(v.key === null ? p : v.key) || null), u(c, f, v, S);
        case $n:
          return (f = f.get(v.key === null ? p : v.key) || null), a(c, f, v, S);
        case At:
          var k = v._init;
          return w(f, c, p, k(v._payload), S);
      }
      if (xr(v) || ar(v)) return (f = f.get(p) || null), m(c, f, v, S, null);
      Po(c, v);
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
        x.forEach(function (F) {
          return t(f, F);
        }),
      G && nn(f, T),
      S
    );
  }
  function g(f, c, p, v) {
    var S = ar(p);
    if (typeof S != "function") throw Error(C(150));
    if (((p = S.call(p)), p == null)) throw Error(C(151));
    for (
      var k = (S = null), x = c, T = (c = 0), z = null, $ = p.next();
      x !== null && !$.done;
      T++, $ = p.next()
    ) {
      x.index > T ? ((z = x), (x = null)) : (z = x.sibling);
      var F = d(f, x, $.value, v);
      if (F === null) {
        x === null && (x = z);
        break;
      }
      e && x && F.alternate === null && t(f, x),
        (c = i(F, c, T)),
        k === null ? (S = F) : (k.sibling = F),
        (k = F),
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
        x.forEach(function (Y) {
          return t(f, Y);
        }),
      G && nn(f, T),
      S
    );
  }
  function _(f, c, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === zn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case mo:
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
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === At &&
                    Xa(S) === k.type)
                ) {
                  n(f, k.sibling),
                    (c = o(k, p.props)),
                    (c.ref = hr(f, k, p)),
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
              : ((v = Ko(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = hr(f, c, p)),
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
            (c = Ul(p, f.mode, v)), (c.return = f), (f = c);
          }
          return l(f);
        case At:
          return (k = p._init), _(f, c, k(p._payload), v);
      }
      if (xr(p)) return y(f, c, p, v);
      if (ar(p)) return g(f, c, p, v);
      Po(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = Bl(p, f.mode, v)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return _;
}
var Jn = sd(!0),
  ud = sd(!1),
  so = {},
  wt = qt(so),
  Qr = qt(so),
  Gr = qt(so);
function un(e) {
  if (e === so) throw Error(C(174));
  return e;
}
function ku(e, t) {
  switch ((V(Gr, t), V(Qr, e), V(wt, so), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : os(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = os(t, e));
  }
  K(wt), V(wt, t);
}
function qn() {
  K(wt), K(Qr), K(Gr);
}
function ad(e) {
  un(Gr.current);
  var t = un(wt.current),
    n = os(t, e.type);
  t !== n && (V(Qr, e), V(wt, n));
}
function Cu(e) {
  Qr.current === e && (K(wt), K(Qr));
}
var X = qt(0);
function pi(e) {
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
var Il = [];
function Eu() {
  for (var e = 0; e < Il.length; e++)
    Il[e]._workInProgressVersionPrimary = null;
  Il.length = 0;
}
var Uo = It.ReactCurrentDispatcher,
  Ll = It.ReactCurrentBatchConfig,
  hn = 0,
  Z = null,
  se = null,
  ce = null,
  hi = !1,
  zr = !1,
  Yr = 0,
  Vm = 0;
function ke() {
  throw Error(C(321));
}
function _u(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function Pu(e, t, n, r, o, i) {
  if (
    ((hn = i),
    (Z = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Uo.current = e === null || e.memoizedState === null ? Gm : Ym),
    (e = n(r, o)),
    zr)
  ) {
    i = 0;
    do {
      if (((zr = !1), (Yr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (ce = se = null),
        (t.updateQueue = null),
        (Uo.current = Xm),
        (e = n(r, o));
    } while (zr);
  }
  if (
    ((Uo.current = mi),
    (t = se !== null && se.next !== null),
    (hn = 0),
    (ce = se = Z = null),
    (hi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Tu() {
  var e = Yr !== 0;
  return (Yr = 0), e;
}
function pt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ce === null ? (Z.memoizedState = ce = e) : (ce = ce.next = e), ce;
}
function nt() {
  if (se === null) {
    var e = Z.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = ce === null ? Z.memoizedState : ce.next;
  if (t !== null) (ce = t), (se = e);
  else {
    if (e === null) throw Error(C(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      ce === null ? (Z.memoizedState = ce = e) : (ce = ce.next = e);
  }
  return ce;
}
function Xr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Al(e) {
  var t = nt(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = se,
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
      ct(r, t.memoizedState) || (Ie = !0),
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
function Fl(e) {
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
    ct(i, t.memoizedState) || (Ie = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function cd() {}
function fd(e, t) {
  var n = Z,
    r = nt(),
    o = t(),
    i = !ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Ie = !0)),
    (r = r.queue),
    Ru(hd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ce !== null && ce.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Zr(9, pd.bind(null, n, r, o, t), void 0, null),
      de === null)
    )
      throw Error(C(349));
    hn & 30 || dd(n, t, o);
  }
  return o;
}
function dd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = Z.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (Z.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function pd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), md(t) && gd(e);
}
function hd(e, t, n) {
  return n(function () {
    md(t) && gd(e);
  });
}
function md(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ct(e, n);
  } catch {
    return !0;
  }
}
function gd(e) {
  var t = Ot(e, 1);
  t !== null && at(t, e, 1, -1);
}
function Za(e) {
  var t = pt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Qm.bind(null, Z, e)),
    [t.memoizedState, e]
  );
}
function Zr(e, t, n, r) {
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
function yd() {
  return nt().memoizedState;
}
function Wo(e, t, n, r) {
  var o = pt();
  (Z.flags |= e),
    (o.memoizedState = Zr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Oi(e, t, n, r) {
  var o = nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (((i = l.destroy), r !== null && _u(r, l.deps))) {
      o.memoizedState = Zr(t, n, i, r);
      return;
    }
  }
  (Z.flags |= e), (o.memoizedState = Zr(1 | t, n, i, r));
}
function Ja(e, t) {
  return Wo(8390656, 8, e, t);
}
function Ru(e, t) {
  return Oi(2048, 8, e, t);
}
function vd(e, t) {
  return Oi(4, 2, e, t);
}
function wd(e, t) {
  return Oi(4, 4, e, t);
}
function Sd(e, t) {
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
function xd(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Oi(4, 4, Sd.bind(null, t, e), n)
  );
}
function $u() {}
function kd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Cd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _u(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ed(e, t, n) {
  return hn & 21
    ? (ct(n, t) || ((n = Tf()), (Z.lanes |= n), (mn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ie = !0)), (e.memoizedState = n));
}
function Hm(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ll.transition;
  Ll.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Ll.transition = r);
  }
}
function _d() {
  return nt().memoizedState;
}
function Km(e, t, n) {
  var r = Gt(e);
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
    Td(t, n);
  else if (((n = rd(e, t, n, r)), n !== null)) {
    var o = $e();
    at(n, e, r, o), Rd(n, t, r);
  }
}
function Qm(e, t, n) {
  var r = Gt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Pd(e)) Td(t, o);
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
    (n = rd(e, t, o, r)),
      n !== null && ((o = $e()), at(n, e, r, o), Rd(n, t, r));
  }
}
function Pd(e) {
  var t = e.alternate;
  return e === Z || (t !== null && t === Z);
}
function Td(e, t) {
  zr = hi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Rd(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), lu(e, n);
  }
}
var mi = {
    readContext: tt,
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
  Gm = {
    readContext: tt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: Ja,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wo(4194308, 4, Sd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Wo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Wo(4, 2, e, t);
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
        (e = e.dispatch = Km.bind(null, Z, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Za,
    useDebugValue: $u,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Za(!1),
        t = e[0];
      return (e = Hm.bind(null, e[1])), (pt().memoizedState = e), [t, e];
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
        hn & 30 || dd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ja(hd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Zr(9, pd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = de.identifierPrefix;
      if (G) {
        var n = Pt,
          r = _t;
        (n = (r & ~(1 << (32 - ut(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Yr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Vm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Ym = {
    readContext: tt,
    useCallback: kd,
    useContext: tt,
    useEffect: Ru,
    useImperativeHandle: xd,
    useInsertionEffect: vd,
    useLayoutEffect: wd,
    useMemo: Cd,
    useReducer: Al,
    useRef: yd,
    useState: function () {
      return Al(Xr);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = nt();
      return Ed(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Xr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: _d,
    unstable_isNewReconciler: !1,
  },
  Xm = {
    readContext: tt,
    useCallback: kd,
    useContext: tt,
    useEffect: Ru,
    useImperativeHandle: xd,
    useInsertionEffect: vd,
    useLayoutEffect: wd,
    useMemo: Cd,
    useReducer: Fl,
    useRef: yd,
    useState: function () {
      return Fl(Xr);
    },
    useDebugValue: $u,
    useDeferredValue: function (e) {
      var t = nt();
      return se === null ? (t.memoizedState = e) : Ed(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Fl(Xr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: cd,
    useSyncExternalStore: fd,
    useId: _d,
    unstable_isNewReconciler: !1,
  };
function er(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Eh(r)), (r = r.return);
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
function Dl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ts(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Zm = typeof WeakMap == "function" ? WeakMap : Map;
function $d(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      yi || ((yi = !0), (Fs = r)), Ts(e, t);
    }),
    n
  );
}
function zd(e, t, n) {
  (n = Tt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Ts(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Ts(e, t),
          typeof r != "function" &&
            (Qt === null ? (Qt = new Set([this])) : Qt.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: l !== null ? l : "",
        });
      }),
    n
  );
}
function qa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Zm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = f0.bind(null, e, t, n)), t.then(e, e));
}
function ec(e) {
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
function tc(e, t, n, r, o) {
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
              : ((t = Tt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Jm = It.ReactCurrentOwner,
  Ie = !1;
function Re(e, t, n, r) {
  t.child = e === null ? ud(t, null, n, r) : Jn(t, e.child, n, r);
}
function nc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Hn(t, o),
    (r = Pu(e, t, n, r, i, o)),
    (n = Tu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (G && n && hu(t), (t.flags |= 1), Re(e, t, r, o), t.child)
  );
}
function rc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Fu(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Od(e, t, i, r, o))
      : ((e = Ko(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : br), n(l, r) && e.ref === t.ref)
    )
      return Mt(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Od(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (br(i, r) && e.ref === t.ref)
      if (((Ie = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Ie = !0);
      else return (t.lanes = e.lanes), Mt(e, t, o);
  }
  return Rs(e, t, n, r, o);
}
function Md(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Bn, Be),
        (Be |= n);
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
          V(Bn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(Bn, Be),
        (Be |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Bn, Be),
      (Be |= r);
  return Re(e, t, o, n), t.child;
}
function Nd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Rs(e, t, n, r, o) {
  var i = Ae(n) ? dn : Pe.current;
  return (
    (i = Xn(t, i)),
    Hn(t, o),
    (n = Pu(e, t, n, r, i, o)),
    (r = Tu()),
    e !== null && !Ie
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Mt(e, t, o))
      : (G && r && hu(t), (t.flags |= 1), Re(e, t, n, o), t.child)
  );
}
function oc(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    si(t);
  } else i = !1;
  if ((Hn(t, o), t.stateNode === null))
    bo(e, t), ld(t, n, r), Ps(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      s = t.memoizedProps;
    l.props = s;
    var u = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = tt(a))
      : ((a = Ae(n) ? dn : Pe.current), (a = Xn(t, a)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== r || u !== a) && Ya(t, l, r, a)),
      (Ft = !1);
    var d = t.memoizedState;
    (l.state = d),
      di(t, r, l, o),
      (u = t.memoizedState),
      s !== r || d !== u || Le.current || Ft
        ? (typeof m == "function" && (_s(t, n, m, r), (u = t.memoizedState)),
          (s = Ft || Ga(t, n, s, r, d, u, a))
            ? (h ||
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
      od(e, t),
      (s = t.memoizedProps),
      (a = t.type === t.elementType ? s : it(t.type, s)),
      (l.props = a),
      (h = t.pendingProps),
      (d = l.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = tt(u))
        : ((u = Ae(n) ? dn : Pe.current), (u = Xn(t, u)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((s !== h || d !== u) && Ya(t, l, r, u)),
      (Ft = !1),
      (d = t.memoizedState),
      (l.state = d),
      di(t, r, l, o);
    var y = t.memoizedState;
    s !== h || d !== y || Le.current || Ft
      ? (typeof w == "function" && (_s(t, n, w, r), (y = t.memoizedState)),
        (a = Ft || Ga(t, n, a, r, d, y, u) || !1)
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
  return $s(e, t, n, r, i, o);
}
function $s(e, t, n, r, o, i) {
  Nd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && ba(t, n, !1), Mt(e, t, i);
  (r = t.stateNode), (Jm.current = t);
  var s =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Jn(t, e.child, null, i)), (t.child = Jn(t, null, s, i)))
      : Re(e, t, s, i),
    (t.memoizedState = r.state),
    o && ba(t, n, !0),
    t.child
  );
}
function Id(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wa(e, t.context, !1),
    ku(e, t.containerInfo);
}
function ic(e, t, n, r, o) {
  return Zn(), gu(o), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
function Os(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
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
    V(X, o & 1),
    e === null)
  )
    return (
      Cs(t),
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
                : (i = Ii(l, r, 0, null)),
              (e = fn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Os(n)),
              (t.memoizedState = zs),
              e)
            : zu(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
    return qm(e, t, l, r, s, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = Yt(o, u)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      s !== null ? (i = Yt(s, i)) : ((i = fn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? Os(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = zs),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Yt(i, { mode: "visible", children: r.children })),
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
    (t = Ii({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function To(e, t, n, r) {
  return (
    r !== null && gu(r),
    Jn(t, e.child, null, n),
    (e = zu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function qm(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Dl(Error(C(422)))), To(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Ii({ mode: "visible", children: r.children }, o, 0, null)),
        (i = fn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Jn(t, e.child, null, l),
        (t.child.memoizedState = Os(l)),
        (t.memoizedState = zs),
        i);
  if (!(t.mode & 1)) return To(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
    return (r = s), (i = Error(C(419))), (r = Dl(i, r, void 0)), To(e, t, l, r);
  }
  if (((s = (l & e.childLanes) !== 0), Ie || s)) {
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
          ((i.retryLane = o), Ot(e, o), at(r, e, o, -1));
    }
    return Au(), (r = Dl(Error(C(421)))), To(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = d0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (We = Ht(o.nextSibling)),
      (be = t),
      (G = !0),
      (st = null),
      e !== null &&
        ((Ze[Je++] = _t),
        (Ze[Je++] = Pt),
        (Ze[Je++] = pn),
        (_t = e.id),
        (Pt = e.overflow),
        (pn = t)),
      (t = zu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Es(e.return, t, n);
}
function jl(e, t, n, r, o) {
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
function Ad(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Re(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lc(e, n, t);
        else if (e.tag === 19) lc(e, n, t);
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
  if ((V(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && pi(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          jl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && pi(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        jl(t, !0, n, null, i);
        break;
      case "together":
        jl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Mt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (mn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Yt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Yt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function e0(e, t, n) {
  switch (t.tag) {
    case 3:
      Id(t), Zn();
      break;
    case 5:
      ad(t);
      break;
    case 1:
      Ae(t.type) && si(t);
      break;
    case 4:
      ku(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      V(ci, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ld(e, t, n)
          : (V(X, X.current & 1),
            (e = Mt(e, t, n)),
            e !== null ? e.sibling : null);
      V(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ad(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Md(e, t, n);
  }
  return Mt(e, t, n);
}
var Fd, Ms, Dd, jd;
Fd = function (e, t) {
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
Ms = function () {};
Dd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), un(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = es(e, o)), (r = es(e, r)), (i = []);
        break;
      case "select":
        (o = J({}, o, { value: void 0 })),
          (r = J({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = rs(e, o)), (r = rs(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ii);
    }
    is(n, r);
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
            (Ar.hasOwnProperty(a)
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
              (Ar.hasOwnProperty(a)
                ? (u != null && a === "onScroll" && H("scroll", e),
                  i || s === u || (i = []))
                : (i = i || []).push(a, u));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
jd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function mr(e, t) {
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
function t0(e, t, n) {
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
      return Ce(t), null;
    case 1:
      return Ae(t.type) && li(), Ce(t), null;
    case 3:
      return (
        (r = t.stateNode),
        qn(),
        K(Le),
        K(Pe),
        Eu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (_o(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), st !== null && (Bs(st), (st = null)))),
        Ms(e, t),
        Ce(t),
        null
      );
    case 5:
      Cu(t);
      var o = un(Gr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Dd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Ce(t), null;
        }
        if (((e = un(wt.current)), _o(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[Kr] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < Cr.length; o++) H(Cr[o], r);
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
              ma(r, i), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              ya(r, i), H("invalid", r);
          }
          is(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var s = i[l];
              l === "children"
                ? typeof s == "string"
                  ? r.textContent !== s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Eo(r.textContent, s, e),
                    (o = ["children", s]))
                  : typeof s == "number" &&
                    r.textContent !== "" + s &&
                    (i.suppressHydrationWarning !== !0 &&
                      Eo(r.textContent, s, e),
                    (o = ["children", "" + s]))
                : Ar.hasOwnProperty(l) &&
                  s != null &&
                  l === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              go(r), ga(r, i, !0);
              break;
            case "textarea":
              go(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ii);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (l = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = df(n)),
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
            (e[Kr] = r),
            Fd(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = ls(n, r)), n)) {
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
                for (o = 0; o < Cr.length; o++) H(Cr[o], e);
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
                ma(e, r), (o = es(e, r)), H("invalid", e);
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
                ya(e, r), (o = rs(e, r)), H("invalid", e);
                break;
              default:
                o = r;
            }
            is(n, o), (s = o);
            for (i in s)
              if (s.hasOwnProperty(i)) {
                var u = s[i];
                i === "style"
                  ? mf(e, u)
                  : i === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && pf(e, u))
                  : i === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Fr(e, u)
                    : typeof u == "number" && Fr(e, "" + u)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Ar.hasOwnProperty(i)
                      ? u != null && i === "onScroll" && H("scroll", e)
                      : u != null && eu(e, i, u, l));
              }
            switch (n) {
              case "input":
                go(e), ga(e, r, !1);
                break;
              case "textarea":
                go(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Un(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Un(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = ii);
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
      return Ce(t), null;
    case 6:
      if (e && t.stateNode != null) jd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = un(Gr.current)), un(wt.current), _o(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Eo(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Eo(r.nodeValue, n, (e.mode & 1) !== 0);
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
        if (G && We !== null && t.mode & 1 && !(t.flags & 128))
          nd(), Zn(), (t.flags |= 98560), (i = !1);
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
        } else st !== null && (Bs(st), (st = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? ue === 0 && (ue = 3) : Au())),
          t.updateQueue !== null && (t.flags |= 4),
          Ce(t),
          null);
    case 4:
      return (
        qn(), Ms(e, t), e === null && Vr(t.stateNode.containerInfo), Ce(t), null
      );
    case 10:
      return wu(t.type._context), Ce(t), null;
    case 17:
      return Ae(t.type) && li(), Ce(t), null;
    case 19:
      if ((K(X), (i = t.memoizedState), i === null)) return Ce(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) mr(i, !1);
        else {
          if (ue !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = pi(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    mr(i, !1),
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
                return V(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            re() > tr &&
            ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = pi(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              mr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !G)
            )
              return Ce(t), null;
          } else
            2 * re() - i.renderingStartTime > tr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), mr(i, !1), (t.lanes = 4194304));
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
          V(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ce(t), null);
    case 22:
    case 23:
      return (
        Lu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (Ce(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function n0(e, t) {
  switch ((mu(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && li(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        qn(),
        K(Le),
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
var Ro = !1,
  _e = !1,
  r0 = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function jn(e, t) {
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
function Ns(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var sc = !1;
function o0(e, t) {
  if (((gs = ni), (e = bf()), pu(e))) {
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
  for (ys = { focusedElem: e, selectionRange: n }, ni = !1, R = t; R !== null; )
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
                    _ = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      _
                    );
                  f.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var p = t.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
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
          te(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (R = e);
          break;
        }
        R = t.return;
      }
  return (y = sc), (sc = !1), y;
}
function Or(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Ns(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Mi(e, t) {
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
function Is(e) {
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
function Bd(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Bd(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[gt], delete t[Kr], delete t[Ss], delete t[Bm], delete t[Um])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ud(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function uc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ud(e.return)) return null;
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
function Ls(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = ii));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ls(e, t, n), e = e.sibling; e !== null; ) Ls(e, t, n), (e = e.sibling);
}
function As(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (As(e, t, n), e = e.sibling; e !== null; ) As(e, t, n), (e = e.sibling);
}
var me = null,
  lt = !1;
function Lt(e, t, n) {
  for (n = n.child; n !== null; ) Wd(e, t, n), (n = n.sibling);
}
function Wd(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(Ei, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || jn(n, t);
    case 6:
      var r = me,
        o = lt;
      (me = null),
        Lt(e, t, n),
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
              ? Ml(e.parentNode, n)
              : e.nodeType === 1 && Ml(e, n),
            Ur(e))
          : Ml(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (o = lt),
        (me = n.stateNode.containerInfo),
        (lt = !0),
        Lt(e, t, n),
        (me = r),
        (lt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            l = i.destroy;
          (i = i.tag),
            l !== void 0 && (i & 2 || i & 4) && Ns(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      Lt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (jn(n, t),
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
      Lt(e, t, n);
      break;
    case 21:
      Lt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Lt(e, t, n), (_e = r))
        : Lt(e, t, n);
      break;
    default:
      Lt(e, t, n);
  }
}
function ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new r0()),
      t.forEach(function (r) {
        var o = p0.bind(null, e, r);
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
        Wd(i, l, o), (me = null), (lt = !1);
        var u = o.alternate;
        u !== null && (u.return = null), (o.return = null);
      } catch (a) {
        te(o, t, a);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) bd(t, e), (t = t.sibling);
}
function bd(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ot(t, e), dt(e), r & 4)) {
        try {
          Or(3, e, e.return), Mi(3, e);
        } catch (g) {
          te(e, e.return, g);
        }
        try {
          Or(5, e, e.return);
        } catch (g) {
          te(e, e.return, g);
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
          Fr(o, "");
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
            s === "input" && i.type === "radio" && i.name != null && cf(o, i),
              ls(s, l);
            var a = ls(s, i);
            for (l = 0; l < u.length; l += 2) {
              var m = u[l],
                h = u[l + 1];
              m === "style"
                ? mf(o, h)
                : m === "dangerouslySetInnerHTML"
                ? pf(o, h)
                : m === "children"
                ? Fr(o, h)
                : eu(o, m, h, a);
            }
            switch (s) {
              case "input":
                ts(o, i);
                break;
              case "textarea":
                ff(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Un(o, !!i.multiple, w, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Un(o, !!i.multiple, i.defaultValue, !0)
                      : Un(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Kr] = i;
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
          Ur(t.containerInfo);
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
        r & 4 && ac(e);
      break;
    case 22:
      if (
        ((m = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (a = _e) || m), ot(t, e), (_e = a)) : ot(t, e),
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
                  Or(4, d, d.return);
                  break;
                case 1:
                  jn(d, d.return);
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
                  jn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    fc(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = d), (R = w)) : fc(h);
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
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((s = h.stateNode),
                      (u = h.memoizedProps.style),
                      (l =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (s.style.display = hf("display", l)));
              } catch (g) {
                te(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
              } catch (g) {
                te(e, e.return, g);
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
      ot(t, e), dt(e), r & 4 && ac(e);
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
          if (Ud(n)) {
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
          r.flags & 32 && (Fr(o, ""), (r.flags &= -33));
          var i = uc(e);
          As(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            s = uc(e);
          Ls(e, s, l);
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
function i0(e, t, n) {
  (R = e), Vd(e);
}
function Vd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || Ro;
      if (!l) {
        var s = o.alternate,
          u = (s !== null && s.memoizedState !== null) || _e;
        s = Ro;
        var a = _e;
        if (((Ro = l), (_e = u) && !a))
          for (R = o; R !== null; )
            (l = R),
              (u = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? dc(o)
                : u !== null
                ? ((u.return = l), (R = u))
                : dc(o);
        for (; i !== null; ) (R = i), Vd(i), (i = i.sibling);
        (R = o), (Ro = s), (_e = a);
      }
      cc(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (R = i)) : cc(e);
  }
}
function cc(e) {
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
              _e || Mi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
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
              i !== null && Qa(t, i, r);
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
                Qa(t, l, n);
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
                    var h = m.dehydrated;
                    h !== null && Ur(h);
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
        _e || (t.flags & 512 && Is(t));
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
function fc(e) {
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
function dc(e) {
  for (; R !== null; ) {
    var t = R;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Mi(4, t);
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
            Is(t);
          } catch (u) {
            te(t, i, u);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Is(t);
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
var l0 = Math.ceil,
  gi = It.ReactCurrentDispatcher,
  Ou = It.ReactCurrentOwner,
  et = It.ReactCurrentBatchConfig,
  A = 0,
  de = null,
  ie = null,
  ve = 0,
  Be = 0,
  Bn = qt(0),
  ue = 0,
  Jr = null,
  mn = 0,
  Ni = 0,
  Mu = 0,
  Mr = null,
  Ne = null,
  Nu = 0,
  tr = 1 / 0,
  Ct = null,
  yi = !1,
  Fs = null,
  Qt = null,
  $o = !1,
  Ut = null,
  vi = 0,
  Nr = 0,
  Ds = null,
  Vo = -1,
  Ho = 0;
function $e() {
  return A & 6 ? re() : Vo !== -1 ? Vo : (Vo = re());
}
function Gt(e) {
  return e.mode & 1
    ? A & 2 && ve !== 0
      ? ve & -ve
      : bm.transition !== null
      ? (Ho === 0 && (Ho = Tf()), Ho)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : If(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Nr) throw ((Nr = 0), (Ds = null), Error(C(185)));
  oo(e, n, r),
    (!(A & 2) || e !== de) &&
      (e === de && (!(A & 2) && (Ni |= n), ue === 4 && jt(e, ve)),
      Fe(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((tr = re() + 500), $i && en()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  bh(e, t);
  var r = ti(e, e === de ? ve : 0);
  if (r === 0)
    n !== null && xa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xa(n), t === 1))
      e.tag === 0 ? Wm(pc.bind(null, e)) : qf(pc.bind(null, e)),
        Dm(function () {
          !(A & 6) && en();
        }),
        (n = null);
    else {
      switch (Rf(r)) {
        case 1:
          n = iu;
          break;
        case 4:
          n = _f;
          break;
        case 16:
          n = ei;
          break;
        case 536870912:
          n = Pf;
          break;
        default:
          n = ei;
      }
      n = Jd(n, Hd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Hd(e, t) {
  if (((Vo = -1), (Ho = 0), A & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Kn() && e.callbackNode !== n) return null;
  var r = ti(e, e === de ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wi(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var i = Qd();
    (de !== e || ve !== t) && ((Ct = null), (tr = re() + 500), cn(e, t));
    do
      try {
        a0();
        break;
      } catch (s) {
        Kd(e, s);
      }
    while (1);
    vu(),
      (gi.current = i),
      (A = o),
      ie !== null ? (t = 0) : ((de = null), (ve = 0), (t = ue));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = fs(e)), o !== 0 && ((r = o), (t = js(e, o)))), t === 1)
    )
      throw ((n = Jr), cn(e, 0), jt(e, r), Fe(e, re()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !s0(o) &&
          ((t = wi(e, r)),
          t === 2 && ((i = fs(e)), i !== 0 && ((r = i), (t = js(e, i)))),
          t === 1))
      )
        throw ((n = Jr), cn(e, 0), jt(e, r), Fe(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          rn(e, Ne, Ct);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Nu + 500 - re()), 10 < t))
          ) {
            if (ti(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = ws(rn.bind(null, e, Ne, Ct), t);
            break;
          }
          rn(e, Ne, Ct);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
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
                : 1960 * l0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ws(rn.bind(null, e, Ne, Ct), r);
            break;
          }
          rn(e, Ne, Ct);
          break;
        case 5:
          rn(e, Ne, Ct);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Fe(e, re()), e.callbackNode === n ? Hd.bind(null, e) : null;
}
function js(e, t) {
  var n = Mr;
  return (
    e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256),
    (e = wi(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Bs(t)),
    e
  );
}
function Bs(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function s0(e) {
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
function jt(e, t) {
  for (
    t &= ~Mu,
      t &= ~Ni,
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
function pc(e) {
  if (A & 6) throw Error(C(327));
  Kn();
  var t = ti(e, 0);
  if (!(t & 1)) return Fe(e, re()), null;
  var n = wi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fs(e);
    r !== 0 && ((t = r), (n = js(e, r)));
  }
  if (n === 1) throw ((n = Jr), cn(e, 0), jt(e, t), Fe(e, re()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    rn(e, Ne, Ct),
    Fe(e, re()),
    null
  );
}
function Iu(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((tr = re() + 500), $i && en());
  }
}
function gn(e) {
  Ut !== null && Ut.tag === 0 && !(A & 6) && Kn();
  var t = A;
  A |= 1;
  var n = et.transition,
    r = U;
  try {
    if (((et.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (et.transition = n), (A = t), !(A & 6) && en();
  }
}
function Lu() {
  (Be = Bn.current), K(Bn);
}
function cn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fm(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((mu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && li();
          break;
        case 3:
          qn(), K(Le), K(Pe), Eu();
          break;
        case 5:
          Cu(r);
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
    (ie = e = Yt(e.current, null)),
    (ve = Be = t),
    (ue = 0),
    (Jr = null),
    (Mu = Ni = mn = 0),
    (Ne = Mr = null),
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
function Kd(e, t) {
  do {
    var n = ie;
    try {
      if ((vu(), (Uo.current = mi), hi)) {
        for (var r = Z.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        hi = !1;
      }
      if (
        ((hn = 0),
        (ce = se = Z = null),
        (zr = !1),
        (Yr = 0),
        (Ou.current = null),
        n === null || n.return === null)
      ) {
        (ue = 1), (Jr = t), (ie = null);
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
            h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var d = m.alternate;
            d
              ? ((m.updateQueue = d.updateQueue),
                (m.memoizedState = d.memoizedState),
                (m.lanes = d.lanes))
              : ((m.updateQueue = null), (m.memoizedState = null));
          }
          var w = ec(l);
          if (w !== null) {
            (w.flags &= -257),
              tc(w, l, s, i, t),
              w.mode & 1 && qa(i, a, t),
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
              qa(i, a, t), Au();
              break e;
            }
            u = Error(C(426));
          }
        } else if (G && s.mode & 1) {
          var _ = ec(l);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              tc(_, l, s, i, t),
              gu(er(u, s));
            break e;
          }
        }
        (i = u = er(u, s)),
          ue !== 4 && (ue = 2),
          Mr === null ? (Mr = [i]) : Mr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = $d(i, u, t);
              Ka(i, f);
              break e;
            case 1:
              s = u;
              var c = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (Qt === null || !Qt.has(p))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var v = zd(i, s, t);
                Ka(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Yd(n);
    } catch (S) {
      (t = S), ie === n && n !== null && (ie = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Qd() {
  var e = gi.current;
  return (gi.current = mi), e === null ? mi : e;
}
function Au() {
  (ue === 0 || ue === 3 || ue === 2) && (ue = 4),
    de === null || (!(mn & 268435455) && !(Ni & 268435455)) || jt(de, ve);
}
function wi(e, t) {
  var n = A;
  A |= 2;
  var r = Qd();
  (de !== e || ve !== t) && ((Ct = null), cn(e, t));
  do
    try {
      u0();
      break;
    } catch (o) {
      Kd(e, o);
    }
  while (1);
  if ((vu(), (A = n), (gi.current = r), ie !== null)) throw Error(C(261));
  return (de = null), (ve = 0), ue;
}
function u0() {
  for (; ie !== null; ) Gd(ie);
}
function a0() {
  for (; ie !== null && !Ih(); ) Gd(ie);
}
function Gd(e) {
  var t = Zd(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Yd(e) : (ie = t),
    (Ou.current = null);
}
function Yd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = n0(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ue = 6), (ie = null);
        return;
      }
    } else if (((n = t0(n, t, Be)), n !== null)) {
      ie = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ie = t;
      return;
    }
    ie = t = e;
  } while (t !== null);
  ue === 0 && (ue = 5);
}
function rn(e, t, n) {
  var r = U,
    o = et.transition;
  try {
    (et.transition = null), (U = 1), c0(e, t, n, r);
  } finally {
    (et.transition = o), (U = r);
  }
  return null;
}
function c0(e, t, n, r) {
  do Kn();
  while (Ut !== null);
  if (A & 6) throw Error(C(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Vh(e, i),
    e === de && ((ie = de = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      $o ||
      (($o = !0),
      Jd(ei, function () {
        return Kn(), null;
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
      o0(e, n),
      bd(n, e),
      zm(ys),
      (ni = !!gs),
      (ys = gs = null),
      (e.current = n),
      i0(n),
      Lh(),
      (A = s),
      (U = l),
      (et.transition = i);
  } else e.current = n;
  if (
    ($o && (($o = !1), (Ut = e), (vi = o)),
    (i = e.pendingLanes),
    i === 0 && (Qt = null),
    Dh(n.stateNode),
    Fe(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (yi) throw ((yi = !1), (e = Fs), (Fs = null), e);
  return (
    vi & 1 && e.tag !== 0 && Kn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ds ? Nr++ : ((Nr = 0), (Ds = e))) : (Nr = 0),
    en(),
    null
  );
}
function Kn() {
  if (Ut !== null) {
    var e = Rf(vi),
      t = et.transition,
      n = U;
    try {
      if (((et.transition = null), (U = 16 > e ? 16 : e), Ut === null))
        var r = !1;
      else {
        if (((e = Ut), (Ut = null), (vi = 0), A & 6)) throw Error(C(331));
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
                      Or(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (R = h);
                  else
                    for (; R !== null; ) {
                      m = R;
                      var d = m.sibling,
                        w = m.return;
                      if ((Bd(m), m === a)) {
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
                    var _ = g.sibling;
                    (g.sibling = null), (g = _);
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
                    Or(9, i, i.return);
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
                      Mi(9, s);
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
          ((A = o), en(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(Ei, e);
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
function hc(e, t, n) {
  (t = er(n, t)),
    (t = $d(e, t, 1)),
    (e = Kt(e, t, 1)),
    (t = $e()),
    e !== null && (oo(e, 1, t), Fe(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) hc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        hc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Qt === null || !Qt.has(r)))
        ) {
          (e = er(n, e)),
            (e = zd(t, e, 1)),
            (t = Kt(t, e, 1)),
            (e = $e()),
            t !== null && (oo(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function f0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (ve & n) === n &&
      (ue === 4 || (ue === 3 && (ve & 130023424) === ve && 500 > re() - Nu)
        ? cn(e, 0)
        : (Mu |= n)),
    Fe(e, t);
}
function Xd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = wo), (wo <<= 1), !(wo & 130023424) && (wo = 4194304))
      : (t = 1));
  var n = $e();
  (e = Ot(e, t)), e !== null && (oo(e, t, n), Fe(e, n));
}
function d0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Xd(e, n);
}
function p0(e, t) {
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
  r !== null && r.delete(t), Xd(e, n);
}
var Zd;
Zd = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Le.current) Ie = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ie = !1), e0(e, t, n);
      Ie = !!(e.flags & 131072);
    }
  else (Ie = !1), G && t.flags & 1048576 && ed(t, ai, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bo(e, t), (e = t.pendingProps);
      var o = Xn(t, Pe.current);
      Hn(t, n), (o = Pu(null, t, r, e, o, n));
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
            Ae(r) ? ((i = !0), si(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            xu(t),
            (o.updater = zi),
            (t.stateNode = o),
            (o._reactInternals = t),
            Ps(t, r, e, n),
            (t = $s(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && hu(t), Re(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = m0(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = Rs(null, t, r, e, n);
            break e;
          case 1:
            t = oc(null, t, r, e, n);
            break e;
          case 11:
            t = nc(null, t, r, e, n);
            break e;
          case 14:
            t = rc(null, t, r, it(r.type, e), n);
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
        Rs(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        oc(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((Id(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          od(e, t),
          di(t, r, null, n);
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
            (o = er(Error(C(423)), t)), (t = ic(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = er(Error(C(424)), t)), (t = ic(e, t, r, n, o));
            break e;
          } else
            for (
              We = Ht(t.stateNode.containerInfo.firstChild),
                be = t,
                G = !0,
                st = null,
                n = ud(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Zn(), r === o)) {
            t = Mt(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        ad(t),
        e === null && Cs(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        vs(r, o) ? (l = null) : i !== null && vs(r, i) && (t.flags |= 32),
        Nd(e, t),
        Re(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && Cs(t), null;
    case 13:
      return Ld(e, t, n);
    case 4:
      return (
        ku(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Jn(t, null, r, n)) : Re(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        nc(e, t, r, o, n)
      );
    case 7:
      return Re(e, t, t.pendingProps, n), t.child;
    case 8:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Re(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (l = o.value),
          V(ci, r._currentValue),
          (r._currentValue = l),
          i !== null)
        )
          if (ct(i.value, l)) {
            if (i.children === o.children && !Le.current) {
              t = Mt(e, t, n);
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
                      (u = Tt(-1, n & -n)), (u.tag = 2);
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
                      Es(i.return, n, t),
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
                  Es(l, n, t),
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
        Re(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Hn(t, n),
        (o = tt(o)),
        (r = r(o)),
        (t.flags |= 1),
        Re(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = it(r, t.pendingProps)),
        (o = it(r.type, o)),
        rc(e, t, r, o, n)
      );
    case 15:
      return Od(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        bo(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), si(t)) : (e = !1),
        Hn(t, n),
        ld(t, r, o),
        Ps(t, r, o, n),
        $s(null, t, r, !0, e, n)
      );
    case 19:
      return Ad(e, t, n);
    case 22:
      return Md(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Jd(e, t) {
  return Ef(e, t);
}
function h0(e, t, n, r) {
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
  return new h0(e, t, n, r);
}
function Fu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function m0(e) {
  if (typeof e == "function") return Fu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === nu)) return 11;
    if (e === ru) return 14;
  }
  return 2;
}
function Yt(e, t) {
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
function Ko(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) Fu(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case zn:
        return fn(n.children, o, i, t);
      case tu:
        (l = 8), (o |= 8);
        break;
      case Xl:
        return (
          (e = qe(12, n, t, o | 2)), (e.elementType = Xl), (e.lanes = i), e
        );
      case Zl:
        return (e = qe(13, n, t, o)), (e.elementType = Zl), (e.lanes = i), e;
      case Jl:
        return (e = qe(19, n, t, o)), (e.elementType = Jl), (e.lanes = i), e;
      case sf:
        return Ii(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case of:
              l = 10;
              break e;
            case lf:
              l = 9;
              break e;
            case nu:
              l = 11;
              break e;
            case ru:
              l = 14;
              break e;
            case At:
              (l = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = qe(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function fn(e, t, n, r) {
  return (e = qe(7, e, r, t)), (e.lanes = n), e;
}
function Ii(e, t, n, r) {
  return (
    (e = qe(22, e, r, t)),
    (e.elementType = sf),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Bl(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function Ul(e, t, n) {
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
function g0(e, t, n, r, o) {
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
    (this.eventTimes = xl(0)),
    (this.expirationTimes = xl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = xl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Du(e, t, n, r, o, i, l, s, u) {
  return (
    (e = new g0(e, t, n, s, u)),
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
function y0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: $n,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qd(e) {
  if (!e) return Zt;
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
          if (Ae(t.type)) {
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
    if (Ae(n)) return Jf(e, n, t);
  }
  return t;
}
function ep(e, t, n, r, o, i, l, s, u) {
  return (
    (e = Du(n, r, !0, e, o, i, l, s, u)),
    (e.context = qd(null)),
    (n = e.current),
    (r = $e()),
    (o = Gt(n)),
    (i = Tt(r, o)),
    (i.callback = t ?? null),
    Kt(n, i, o),
    (e.current.lanes = o),
    oo(e, o, r),
    Fe(e, r),
    e
  );
}
function Li(e, t, n, r) {
  var o = t.current,
    i = $e(),
    l = Gt(o);
  return (
    (n = qd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Tt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kt(o, t, l)),
    e !== null && (at(e, o, l, i), Bo(e, o, l)),
    l
  );
}
function Si(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function mc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ju(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function v0() {
  return null;
}
var tp =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Bu(e) {
  this._internalRoot = e;
}
Ai.prototype.render = Bu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Li(e, t, null, null);
};
Ai.prototype.unmount = Bu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    gn(function () {
      Li(null, e, null, null);
    }),
      (t[zt] = null);
  }
};
function Ai(e) {
  this._internalRoot = e;
}
Ai.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Of();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Nf(e);
  }
};
function Uu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Fi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gc() {}
function w0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = Si(l);
        i.call(a);
      };
    }
    var l = ep(t, r, e, 0, null, !1, !1, "", gc);
    return (
      (e._reactRootContainer = l),
      (e[zt] = l.current),
      Vr(e.nodeType === 8 ? e.parentNode : e),
      gn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var s = r;
    r = function () {
      var a = Si(u);
      s.call(a);
    };
  }
  var u = Du(e, 0, !1, null, null, !1, !1, "", gc);
  return (
    (e._reactRootContainer = u),
    (e[zt] = u.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    gn(function () {
      Li(t, u, n, r);
    }),
    u
  );
}
function Di(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var s = o;
      o = function () {
        var u = Si(l);
        s.call(u);
      };
    }
    Li(t, l, e, o);
  } else l = w0(n, t, e, o, r);
  return Si(l);
}
$f = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = kr(t.pendingLanes);
        n !== 0 &&
          (lu(t, n | 1), Fe(t, re()), !(A & 6) && ((tr = re() + 500), en()));
      }
      break;
    case 13:
      gn(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var o = $e();
          at(r, e, 1, o);
        }
      }),
        ju(e, 1);
  }
};
su = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = $e();
      at(t, e, 134217728, n);
    }
    ju(e, 134217728);
  }
};
zf = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = $e();
      at(n, e, t, r);
    }
    ju(e, t);
  }
};
Of = function () {
  return U;
};
Mf = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
us = function (e, t, n) {
  switch (t) {
    case "input":
      if ((ts(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ri(r);
            if (!o) throw Error(C(90));
            af(r), ts(r, o);
          }
        }
      }
      break;
    case "textarea":
      ff(e, n);
      break;
    case "select":
      (t = n.value), t != null && Un(e, !!n.multiple, t, !1);
  }
};
vf = Iu;
wf = gn;
var S0 = { usingClientEntryPoint: !1, Events: [lo, In, Ri, gf, yf, Iu] },
  gr = {
    findFiberByHostInstance: ln,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  x0 = {
    bundleType: gr.bundleType,
    version: gr.version,
    rendererPackageName: gr.rendererPackageName,
    rendererConfig: gr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: It.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = kf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gr.findFiberByHostInstance || v0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zo.isDisabled && zo.supportsFiber)
    try {
      (Ei = zo.inject(x0)), (vt = zo);
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = S0;
Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Uu(t)) throw Error(C(200));
  return y0(e, t, null, n);
};
Ke.createRoot = function (e, t) {
  if (!Uu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = tp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Du(e, 1, !1, null, null, n, !1, r, o)),
    (e[zt] = t.current),
    Vr(e.nodeType === 8 ? e.parentNode : e),
    new Bu(t)
  );
};
Ke.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = kf(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
  return gn(e);
};
Ke.hydrate = function (e, t, n) {
  if (!Fi(t)) throw Error(C(200));
  return Di(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
  if (!Uu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    l = tp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (t = ep(t, null, e, 1, n ?? null, o, !1, i, l)),
    (e[zt] = t.current),
    Vr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new Ai(t);
};
Ke.render = function (e, t, n) {
  if (!Fi(t)) throw Error(C(200));
  return Di(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
  if (!Fi(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (gn(function () {
        Di(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[zt] = null);
        });
      }),
      !0)
    : !1;
};
Ke.unstable_batchedUpdates = Iu;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Fi(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Di(e, t, n, !1, r);
};
Ke.version = "18.2.0-next-9e3b772b8-20220608";
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
  t(), (e.exports = Ke);
})(vh);
var yc = Ql;
(Kl.createRoot = yc.createRoot), (Kl.hydrateRoot = yc.hydrateRoot);
const k0 = { black: "#000", white: "#fff" },
  qr = k0,
  C0 = {
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
  Cn = C0,
  E0 = {
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
  En = E0,
  _0 = {
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
  _n = _0,
  P0 = {
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
  Pn = P0,
  T0 = {
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
  Tn = T0,
  R0 = {
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
  yr = R0,
  $0 = {
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
  z0 = $0;
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
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function np(e) {
  if (!on(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = np(e[n]);
    }),
    t
  );
}
function Rt(e, t, n = { clone: !0 }) {
  const r = n.clone ? O({}, e) : e;
  return (
    on(e) &&
      on(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (on(t[o]) && o in e && on(e[o])
            ? (r[o] = Rt(e[o], t[o], n))
            : n.clone
            ? (r[o] = on(t[o]) ? np(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function nr(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function ye(e) {
  if (typeof e != "string") throw new Error(nr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function O0(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const M0 = typeof window < "u" ? P.useLayoutEffect : P.useEffect,
  N0 = M0;
function Oo(e) {
  const t = P.useRef(e);
  return (
    N0(() => {
      t.current = e;
    }),
    P.useCallback((...n) => (0, t.current)(...n), [])
  );
}
function vc(...e) {
  return P.useMemo(
    () =>
      e.every((t) => t == null)
        ? null
        : (t) => {
            e.forEach((n) => {
              O0(n, t);
            });
          },
    e
  );
}
let ji = !0,
  Us = !1,
  wc;
const I0 = {
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
function L0(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && I0[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function A0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (ji = !0);
}
function Wl() {
  ji = !1;
}
function F0() {
  this.visibilityState === "hidden" && Us && (ji = !0);
}
function D0(e) {
  e.addEventListener("keydown", A0, !0),
    e.addEventListener("mousedown", Wl, !0),
    e.addEventListener("pointerdown", Wl, !0),
    e.addEventListener("touchstart", Wl, !0),
    e.addEventListener("visibilitychange", F0, !0);
}
function j0(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return ji || L0(t);
}
function B0() {
  const e = P.useCallback((o) => {
      o != null && D0(o.ownerDocument);
    }, []),
    t = P.useRef(!1);
  function n() {
    return t.current
      ? ((Us = !0),
        window.clearTimeout(wc),
        (wc = window.setTimeout(() => {
          Us = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return j0(o) ? ((t.current = !0), !0) : !1;
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
function bu(e, t, n) {
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
const Sc = (e) => e,
  U0 = () => {
    let e = Sc;
    return {
      configure(t) {
        e = t;
      },
      generate(t) {
        return e(t);
      },
      reset() {
        e = Sc;
      },
    };
  },
  W0 = U0(),
  rp = W0,
  b0 = {
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
function Bi(e, t, n = "Mui") {
  const r = b0[t];
  return r ? `${n}-${r}` : `${rp.generate(e)}-${t}`;
}
function Ui(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = Bi(e, o, n);
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
function op(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var V0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  H0 = op(function (e) {
    return (
      V0.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function K0(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Q0(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var G0 = (function () {
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
          this._insertTag(Q0(this));
        var o = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = K0(o);
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
  Ee = "-ms-",
  xi = "-moz-",
  D = "-webkit-",
  ip = "comm",
  Vu = "rule",
  Hu = "decl",
  Y0 = "@import",
  lp = "@keyframes",
  X0 = Math.abs,
  Wi = String.fromCharCode,
  Z0 = Object.assign;
function J0(e, t) {
  return ge(e, 0) ^ 45
    ? (((((((t << 2) ^ ge(e, 0)) << 2) ^ ge(e, 1)) << 2) ^ ge(e, 2)) << 2) ^
        ge(e, 3)
    : 0;
}
function sp(e) {
  return e.trim();
}
function q0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function Ws(e, t) {
  return e.indexOf(t);
}
function ge(e, t) {
  return e.charCodeAt(t) | 0;
}
function eo(e, t, n) {
  return e.slice(t, n);
}
function ht(e) {
  return e.length;
}
function Ku(e) {
  return e.length;
}
function Mo(e, t) {
  return t.push(e), e;
}
function eg(e, t) {
  return e.map(t).join("");
}
var bi = 1,
  rr = 1,
  up = 0,
  De = 0,
  oe = 0,
  sr = "";
function Vi(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: bi,
    column: rr,
    length: l,
    return: "",
  };
}
function vr(e, t) {
  return Z0(Vi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function tg() {
  return oe;
}
function ng() {
  return (
    (oe = De > 0 ? ge(sr, --De) : 0), rr--, oe === 10 && ((rr = 1), bi--), oe
  );
}
function Ve() {
  return (
    (oe = De < up ? ge(sr, De++) : 0), rr++, oe === 10 && ((rr = 1), bi++), oe
  );
}
function St() {
  return ge(sr, De);
}
function Qo() {
  return De;
}
function uo(e, t) {
  return eo(sr, e, t);
}
function to(e) {
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
function ap(e) {
  return (bi = rr = 1), (up = ht((sr = e))), (De = 0), [];
}
function cp(e) {
  return (sr = ""), e;
}
function Go(e) {
  return sp(uo(De - 1, bs(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rg(e) {
  for (; (oe = St()) && oe < 33; ) Ve();
  return to(e) > 2 || to(oe) > 3 ? "" : " ";
}
function og(e, t) {
  for (
    ;
    --t &&
    Ve() &&
    !(oe < 48 || oe > 102 || (oe > 57 && oe < 65) || (oe > 70 && oe < 97));

  );
  return uo(e, Qo() + (t < 6 && St() == 32 && Ve() == 32));
}
function bs(e) {
  for (; Ve(); )
    switch (oe) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && bs(oe);
        break;
      case 40:
        e === 41 && bs(e);
        break;
      case 92:
        Ve();
        break;
    }
  return De;
}
function ig(e, t) {
  for (; Ve() && e + oe !== 47 + 10; )
    if (e + oe === 42 + 42 && St() === 47) break;
  return "/*" + uo(t, De - 1) + "*" + Wi(e === 47 ? e : Ve());
}
function lg(e) {
  for (; !to(St()); ) Ve();
  return uo(e, De);
}
function sg(e) {
  return cp(Yo("", null, null, null, [""], (e = ap(e)), 0, [0], e));
}
function Yo(e, t, n, r, o, i, l, s, u) {
  for (
    var a = 0,
      m = 0,
      h = l,
      d = 0,
      w = 0,
      y = 0,
      g = 1,
      _ = 1,
      f = 1,
      c = 0,
      p = "",
      v = o,
      S = i,
      k = r,
      x = p;
    _;

  )
    switch (((y = c), (c = Ve()))) {
      case 40:
        if (y != 108 && ge(x, h - 1) == 58) {
          Ws((x += j(Go(c), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Go(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += rg(y);
        break;
      case 92:
        x += og(Qo() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            Mo(ug(ig(Ve(), Qo()), t, n), u);
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
            _ = 0;
          case 59 + m:
            w > 0 &&
              ht(x) - h &&
              Mo(
                w > 32
                  ? kc(x + ";", r, n, h - 1)
                  : kc(j(x, " ", "") + ";", r, n, h - 2),
                u
              );
            break;
          case 59:
            x += ";";
          default:
            if (
              (Mo((k = xc(x, t, n, a, m, o, s, p, (v = []), (S = []), h)), i),
              c === 123)
            )
              if (m === 0) Yo(x, t, k, k, v, i, h, s, S);
              else
                switch (d === 99 && ge(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Yo(
                      e,
                      k,
                      k,
                      r && Mo(xc(e, k, k, 0, 0, o, s, p, o, (v = []), h), S),
                      o,
                      S,
                      h,
                      s,
                      r ? v : S
                    );
                    break;
                  default:
                    Yo(x, k, k, k, [""], S, 0, s, S);
                }
        }
        (a = m = w = 0), (g = f = 1), (p = x = ""), (h = l);
        break;
      case 58:
        (h = 1 + ht(x)), (w = y);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && ng() == 125) continue;
        }
        switch (((x += Wi(c)), c * g)) {
          case 38:
            f = m > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (s[a++] = (ht(x) - 1) * f), (f = 1);
            break;
          case 64:
            St() === 45 && (x += Go(Ve())),
              (d = St()),
              (m = h = ht((p = x += lg(Qo())))),
              c++;
            break;
          case 45:
            y === 45 && ht(x) == 2 && (g = 0);
        }
    }
  return i;
}
function xc(e, t, n, r, o, i, l, s, u, a, m) {
  for (
    var h = o - 1, d = o === 0 ? i : [""], w = Ku(d), y = 0, g = 0, _ = 0;
    y < r;
    ++y
  )
    for (var f = 0, c = eo(e, h + 1, (h = X0((g = l[y])))), p = e; f < w; ++f)
      (p = sp(g > 0 ? d[f] + " " + c : j(c, /&\f/g, d[f]))) && (u[_++] = p);
  return Vi(e, t, n, o === 0 ? Vu : s, u, a, m);
}
function ug(e, t, n) {
  return Vi(e, t, n, ip, Wi(tg()), eo(e, 2, -2), 0);
}
function kc(e, t, n, r) {
  return Vi(e, t, n, Hu, eo(e, 0, r), eo(e, r + 1, -1), r);
}
function Qn(e, t) {
  for (var n = "", r = Ku(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function ag(e, t, n, r) {
  switch (e.type) {
    case Y0:
    case Hu:
      return (e.return = e.return || e.value);
    case ip:
      return "";
    case lp:
      return (e.return = e.value + "{" + Qn(e.children, r) + "}");
    case Vu:
      e.value = e.props.join(",");
  }
  return ht((n = Qn(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function cg(e) {
  var t = Ku(e);
  return function (n, r, o, i) {
    for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
    return l;
  };
}
function fg(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var dg = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = St()), o === 38 && i === 12 && (n[r] = 1), !to(i);

    )
      Ve();
    return uo(t, De);
  },
  pg = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (to(o)) {
        case 0:
          o === 38 && St() === 12 && (n[r] = 1), (t[r] += dg(De - 1, n, r));
          break;
        case 2:
          t[r] += Go(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = St() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Wi(o);
      }
    while ((o = Ve()));
    return t;
  },
  hg = function (t, n) {
    return cp(pg(ap(t), n));
  },
  Cc = new WeakMap(),
  mg = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          o = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Cc.get(r)) &&
        !o
      ) {
        Cc.set(t, !0);
        for (
          var i = [], l = hg(n, i), s = r.props, u = 0, a = 0;
          u < l.length;
          u++
        )
          for (var m = 0; m < s.length; m++, a++)
            t.props[a] = i[u] ? l[u].replace(/&\f/g, s[m]) : s[m] + " " + l[u];
      }
    }
  },
  gg = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function fp(e, t) {
  switch (J0(e, t)) {
    case 5103:
      return D + "print-" + e + e;
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
      return D + e + xi + e + Ee + e + e;
    case 6828:
    case 4268:
      return D + e + Ee + e + e;
    case 6165:
      return D + e + Ee + "flex-" + e + e;
    case 5187:
      return (
        D + e + j(e, /(\w+).+(:[^]+)/, D + "box-$1$2" + Ee + "flex-$1$2") + e
      );
    case 5443:
      return D + e + Ee + "flex-item-" + j(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        D +
        e +
        Ee +
        "flex-line-pack" +
        j(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return D + e + Ee + j(e, "shrink", "negative") + e;
    case 5292:
      return D + e + Ee + j(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        D +
        "box-" +
        j(e, "-grow", "") +
        D +
        e +
        Ee +
        j(e, "grow", "positive") +
        e
      );
    case 4554:
      return D + j(e, /([^-])(transform)/g, "$1" + D + "$2") + e;
    case 6187:
      return (
        j(j(j(e, /(zoom-|grab)/, D + "$1"), /(image-set)/, D + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return j(e, /(image-set\([^]*)/, D + "$1$`$1");
    case 4968:
      return (
        j(
          j(e, /(.+:)(flex-)?(.*)/, D + "box-pack:$3" + Ee + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        D +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return j(e, /(.+)-inline(.+)/, D + "$1$2") + e;
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
                  D +
                  "$2-$3$1" +
                  xi +
                  (ge(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Ws(e, "stretch")
              ? fp(j(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ge(e, t + 1) !== 115) break;
    case 6444:
      switch (ge(e, ht(e) - 3 - (~Ws(e, "!important") && 10))) {
        case 107:
          return j(e, ":", ":" + D) + e;
        case 101:
          return (
            j(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                D +
                (ge(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                D +
                "$2$3$1" +
                Ee +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (ge(e, t + 11)) {
        case 114:
          return D + e + Ee + j(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return D + e + Ee + j(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return D + e + Ee + j(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return D + e + Ee + e + e;
  }
  return e;
}
var yg = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Hu:
          t.return = fp(t.value, t.length);
          break;
        case lp:
          return Qn([vr(t, { value: j(t.value, "@", "@" + D) })], o);
        case Vu:
          if (t.length)
            return eg(t.props, function (i) {
              switch (q0(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Qn(
                    [vr(t, { props: [j(i, /:(read-\w+)/, ":" + xi + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Qn(
                    [
                      vr(t, {
                        props: [j(i, /:(plac\w+)/, ":" + D + "input-$1")],
                      }),
                      vr(t, { props: [j(i, /:(plac\w+)/, ":" + xi + "$1")] }),
                      vr(t, { props: [j(i, /:(plac\w+)/, Ee + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  vg = [yg],
  wg = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var _ = g.getAttribute("data-emotion");
        _.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || vg,
      i = {},
      l,
      s = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var _ = g.getAttribute("data-emotion").split(" "), f = 1;
            f < _.length;
            f++
          )
            i[_[f]] = !0;
          s.push(g);
        }
      );
    var u,
      a = [mg, gg];
    {
      var m,
        h = [
          ag,
          fg(function (g) {
            m.insert(g);
          }),
        ],
        d = cg(a.concat(o, h)),
        w = function (_) {
          return Qn(sg(_), d);
        };
      u = function (_, f, c, p) {
        (m = c),
          w(_ ? _ + "{" + f.styles + "}" : f.styles),
          p && (y.inserted[f.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new G0({
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
  Sg = {
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
  Hi = pe ? Symbol.for("react.fragment") : 60107,
  Ki = pe ? Symbol.for("react.strict_mode") : 60108,
  Qi = pe ? Symbol.for("react.profiler") : 60114,
  Gi = pe ? Symbol.for("react.provider") : 60109,
  Yi = pe ? Symbol.for("react.context") : 60110,
  Yu = pe ? Symbol.for("react.async_mode") : 60111,
  Xi = pe ? Symbol.for("react.concurrent_mode") : 60111,
  Zi = pe ? Symbol.for("react.forward_ref") : 60112,
  Ji = pe ? Symbol.for("react.suspense") : 60113,
  xg = pe ? Symbol.for("react.suspense_list") : 60120,
  qi = pe ? Symbol.for("react.memo") : 60115,
  el = pe ? Symbol.for("react.lazy") : 60116,
  kg = pe ? Symbol.for("react.block") : 60121,
  Cg = pe ? Symbol.for("react.fundamental") : 60117,
  Eg = pe ? Symbol.for("react.responder") : 60118,
  _g = pe ? Symbol.for("react.scope") : 60119;
function Ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Qu:
        switch (((e = e.type), e)) {
          case Yu:
          case Xi:
          case Hi:
          case Qi:
          case Ki:
          case Ji:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Yi:
              case Zi:
              case el:
              case qi:
              case Gi:
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
function dp(e) {
  return Ge(e) === Xi;
}
W.AsyncMode = Yu;
W.ConcurrentMode = Xi;
W.ContextConsumer = Yi;
W.ContextProvider = Gi;
W.Element = Qu;
W.ForwardRef = Zi;
W.Fragment = Hi;
W.Lazy = el;
W.Memo = qi;
W.Portal = Gu;
W.Profiler = Qi;
W.StrictMode = Ki;
W.Suspense = Ji;
W.isAsyncMode = function (e) {
  return dp(e) || Ge(e) === Yu;
};
W.isConcurrentMode = dp;
W.isContextConsumer = function (e) {
  return Ge(e) === Yi;
};
W.isContextProvider = function (e) {
  return Ge(e) === Gi;
};
W.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Qu;
};
W.isForwardRef = function (e) {
  return Ge(e) === Zi;
};
W.isFragment = function (e) {
  return Ge(e) === Hi;
};
W.isLazy = function (e) {
  return Ge(e) === el;
};
W.isMemo = function (e) {
  return Ge(e) === qi;
};
W.isPortal = function (e) {
  return Ge(e) === Gu;
};
W.isProfiler = function (e) {
  return Ge(e) === Qi;
};
W.isStrictMode = function (e) {
  return Ge(e) === Ki;
};
W.isSuspense = function (e) {
  return Ge(e) === Ji;
};
W.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Hi ||
    e === Xi ||
    e === Qi ||
    e === Ki ||
    e === Ji ||
    e === xg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === el ||
        e.$$typeof === qi ||
        e.$$typeof === Gi ||
        e.$$typeof === Yi ||
        e.$$typeof === Zi ||
        e.$$typeof === Cg ||
        e.$$typeof === Eg ||
        e.$$typeof === _g ||
        e.$$typeof === kg))
  );
};
W.typeOf = Ge;
(function (e) {
  e.exports = W;
})(Sg);
var pp = Vs,
  Pg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Tg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  hp = {};
hp[pp.ForwardRef] = Pg;
hp[pp.Memo] = Tg;
var Rg = !0;
function $g(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (o) {
      e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
    }),
    r
  );
}
var mp = function (t, n, r) {
    var o = t.key + "-" + n.name;
    (r === !1 || Rg === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  zg = function (t, n, r) {
    mp(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Og(e) {
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
var Mg = {
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
  Ng = /[A-Z]|^ms/g,
  Ig = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  gp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ec = function (t) {
    return t != null && typeof t != "boolean";
  },
  bl = op(function (e) {
    return gp(e) ? e : e.replace(Ng, "-$&").toLowerCase();
  }),
  _c = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(Ig, function (r, o, i) {
            return (mt = { name: o, styles: i, next: mt }), o;
          });
    }
    return Mg[t] !== 1 && !gp(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function no(e, t, n) {
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
      return Lg(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = mt,
          l = n(e);
        return (mt = i), no(e, t, l);
      }
      break;
    }
  }
  if (t == null) return n;
  var s = t[n];
  return s !== void 0 ? s : n;
}
function Lg(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += no(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : Ec(l) && (r += bl(i) + ":" + _c(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var s = 0; s < l.length; s++)
          Ec(l[s]) && (r += bl(i) + ":" + _c(i, l[s]) + ";");
      else {
        var u = no(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += bl(i) + ":" + u + ";";
            break;
          }
          default:
            r += i + "{" + u + "}";
        }
      }
    }
  return r;
}
var Pc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  mt,
  yp = function (t, n, r) {
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
      ? ((o = !1), (i += no(r, n, l)))
      : (i += l[0]);
    for (var s = 1; s < t.length; s++) (i += no(r, n, t[s])), o && (i += l[s]);
    Pc.lastIndex = 0;
    for (var u = "", a; (a = Pc.exec(i)) !== null; ) u += "-" + a[1];
    var m = Og(i) + u;
    return { name: m, styles: i, next: mt };
  },
  Ag = function (t) {
    return t();
  },
  Fg = fa["useInsertionEffect"] ? fa["useInsertionEffect"] : !1,
  Dg = Fg || Ag,
  vp = P.createContext(typeof HTMLElement < "u" ? wg({ key: "css" }) : null);
vp.Provider;
var jg = function (t) {
    return P.forwardRef(function (n, r) {
      var o = P.useContext(vp);
      return t(n, o, r);
    });
  },
  Bg = P.createContext({});
function Ug() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return yp(t);
}
var Xu = function () {
    var t = Ug.apply(void 0, arguments),
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
  Wg = H0,
  bg = function (t) {
    return t !== "theme";
  },
  Tc = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Wg : bg;
  },
  Rc = function (t, n, r) {
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
  Vg = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      mp(n, r, o),
      Dg(function () {
        return zg(n, r, o);
      }),
      null
    );
  },
  Hg = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var s = Rc(t, n, r),
      u = s || Tc(o),
      a = !u("as");
    return function () {
      var m = arguments,
        h =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && h.push("label:" + i + ";"),
        m[0] == null || m[0].raw === void 0)
      )
        h.push.apply(h, m);
      else {
        h.push(m[0][0]);
        for (var d = m.length, w = 1; w < d; w++) h.push(m[w], m[0][w]);
      }
      var y = jg(function (g, _, f) {
        var c = (a && g.as) || o,
          p = "",
          v = [],
          S = g;
        if (g.theme == null) {
          S = {};
          for (var k in g) S[k] = g[k];
          S.theme = P.useContext(Bg);
        }
        typeof g.className == "string"
          ? (p = $g(_.registered, v, g.className))
          : g.className != null && (p = g.className + " ");
        var x = yp(h.concat(v), _.registered, S);
        (p += _.key + "-" + x.name), l !== void 0 && (p += " " + l);
        var T = a && s === void 0 ? Tc(c) : u,
          z = {};
        for (var $ in g) (a && $ === "as") || (T($) && (z[$] = g[$]));
        return (
          (z.className = p),
          (z.ref = f),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(Vg, {
              cache: _,
              serialized: x,
              isStringTag: typeof c == "string",
            }),
            P.createElement(c, z)
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
        (y.__emotion_styles = h),
        (y.__emotion_forwardProp = s),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (y.withComponent = function (g, _) {
          return e(g, O({}, n, _, { shouldForwardProp: Rc(y, _, !0) })).apply(
            void 0,
            h
          );
        }),
        y
      );
    };
  },
  Kg = [
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
  Hs = Hg.bind();
Kg.forEach(function (e) {
  Hs[e] = Hs(e);
});
const Qg = Hs;
/**
 * @mui/styled-engine v5.11.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function wp(e, t) {
  return Qg(e, t);
}
const Gg = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Ir(e, t) {
  return t ? Rt(e, t, { clone: !1 }) : e;
}
const Zu = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  $c = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Zu[e]}px)`,
  };
function Nt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || $c;
    return t.reduce((l, s, u) => ((l[i.up(i.keys[u])] = n(t[u])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || $c;
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
function Yg(e = {}) {
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
function Xg(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function tl(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function ki(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = tl(e, n) || r),
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
        a = tl(u, r) || {};
      return Nt(l, s, (h) => {
        let d = ki(a, o, h);
        return (
          h === d &&
            typeof h == "string" &&
            (d = ki(a, o, `${t}${h === "default" ? "" : ye(h)}`, h)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function nl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Ir(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Zg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Jg = { m: "margin", p: "padding" },
  qg = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  zc = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  ey = Zg((e) => {
    if (e.length > 2)
      if (zc[e]) e = zc[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Jg[t],
      o = qg[n] || "";
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
function ao(e, t, n, r) {
  var o;
  const i = (o = tl(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == "string" ? l : i[l])
    : typeof i == "function"
    ? i
    : () => {};
}
function Sp(e) {
  return ao(e, "spacing", 8);
}
function co(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function ty(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = co(t, n)), r), {});
}
function ny(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = ey(n),
    i = ty(o, r),
    l = e[n];
  return Nt(e, l, i);
}
function xp(e, t) {
  const n = Sp(e.theme);
  return Object.keys(e)
    .map((r) => ny(e, t, r, n))
    .reduce(Ir, {});
}
function q(e) {
  return xp(e, Ju);
}
q.propTypes = {};
q.filterProps = Ju;
function ee(e) {
  return xp(e, qu);
}
ee.propTypes = {};
ee.filterProps = qu;
function yt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const ry = B({ prop: "border", themeKey: "borders", transform: yt }),
  oy = B({ prop: "borderTop", themeKey: "borders", transform: yt }),
  iy = B({ prop: "borderRight", themeKey: "borders", transform: yt }),
  ly = B({ prop: "borderBottom", themeKey: "borders", transform: yt }),
  sy = B({ prop: "borderLeft", themeKey: "borders", transform: yt }),
  uy = B({ prop: "borderColor", themeKey: "palette" }),
  ay = B({ prop: "borderTopColor", themeKey: "palette" }),
  cy = B({ prop: "borderRightColor", themeKey: "palette" }),
  fy = B({ prop: "borderBottomColor", themeKey: "palette" }),
  dy = B({ prop: "borderLeftColor", themeKey: "palette" }),
  rl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = ao(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: co(t, r) });
      return Nt(e, e.borderRadius, n);
    }
    return null;
  };
rl.propTypes = {};
rl.filterProps = ["borderRadius"];
nl(ry, oy, iy, ly, sy, uy, ay, cy, fy, dy, rl);
const ol = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = ao(e.theme, "spacing", 8),
      n = (r) => ({ gap: co(t, r) });
    return Nt(e, e.gap, n);
  }
  return null;
};
ol.propTypes = {};
ol.filterProps = ["gap"];
const il = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = ao(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: co(t, r) });
    return Nt(e, e.columnGap, n);
  }
  return null;
};
il.propTypes = {};
il.filterProps = ["columnGap"];
const ll = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = ao(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: co(t, r) });
    return Nt(e, e.rowGap, n);
  }
  return null;
};
ll.propTypes = {};
ll.filterProps = ["rowGap"];
const py = B({ prop: "gridColumn" }),
  hy = B({ prop: "gridRow" }),
  my = B({ prop: "gridAutoFlow" }),
  gy = B({ prop: "gridAutoColumns" }),
  yy = B({ prop: "gridAutoRows" }),
  vy = B({ prop: "gridTemplateColumns" }),
  wy = B({ prop: "gridTemplateRows" }),
  Sy = B({ prop: "gridTemplateAreas" }),
  xy = B({ prop: "gridArea" });
nl(ol, il, ll, py, hy, my, gy, yy, vy, wy, Sy, xy);
function Gn(e, t) {
  return t === "grey" ? t : e;
}
const ky = B({ prop: "color", themeKey: "palette", transform: Gn }),
  Cy = B({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Gn,
  }),
  Ey = B({ prop: "backgroundColor", themeKey: "palette", transform: Gn });
nl(ky, Cy, Ey);
function Ue(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const _y = B({ prop: "width", transform: Ue }),
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
            Ue(n),
        };
      };
      return Nt(e, e.maxWidth, t);
    }
    return null;
  };
ea.filterProps = ["maxWidth"];
const Py = B({ prop: "minWidth", transform: Ue }),
  Ty = B({ prop: "height", transform: Ue }),
  Ry = B({ prop: "maxHeight", transform: Ue }),
  $y = B({ prop: "minHeight", transform: Ue });
B({ prop: "size", cssProperty: "width", transform: Ue });
B({ prop: "size", cssProperty: "height", transform: Ue });
const zy = B({ prop: "boxSizing" });
nl(_y, ea, Py, Ty, Ry, $y, zy);
const Oy = {
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
    borderRadius: { themeKey: "shape.borderRadius", style: rl },
    color: { themeKey: "palette", transform: Gn },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Gn,
    },
    backgroundColor: { themeKey: "palette", transform: Gn },
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
    gap: { style: ol },
    rowGap: { style: ll },
    columnGap: { style: il },
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
    width: { transform: Ue },
    maxWidth: { style: ea },
    minWidth: { transform: Ue },
    height: { transform: Ue },
    maxHeight: { transform: Ue },
    minHeight: { transform: Ue },
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
  sl = Oy;
function My(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function Ny(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Iy() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      s = i[n];
    if (!s) return { [n]: r };
    const { cssProperty: u = n, themeKey: a, transform: m, style: h } = s;
    if (r == null) return null;
    const d = tl(o, a) || {};
    return h
      ? h(l)
      : Nt(l, r, (y) => {
          let g = ki(d, m, y);
          return (
            y === g &&
              typeof y == "string" &&
              (g = ki(d, m, `${n}${y === "default" ? "" : ye(y)}`, y)),
            u === !1 ? g : { [u]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : sl;
    function s(u) {
      let a = u;
      if (typeof u == "function") a = u(i);
      else if (typeof u != "object") return u;
      if (!a) return null;
      const m = Yg(i.breakpoints),
        h = Object.keys(m);
      let d = m;
      return (
        Object.keys(a).forEach((w) => {
          const y = Ny(a[w], i);
          if (y != null)
            if (typeof y == "object")
              if (l[w]) d = Ir(d, e(w, y, i, l));
              else {
                const g = Nt({ theme: i }, y, (_) => ({ [w]: _ }));
                My(g, y) ? (d[w] = t({ sx: y, theme: i })) : (d = Ir(d, g));
              }
            else d = Ir(d, e(w, y, i, l));
        }),
        Xg(h, d)
      );
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return t;
}
const kp = Iy();
kp.filterProps = ["sx"];
const ul = kp,
  Ly = ["sx"],
  Ay = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : sl;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function Cp(e) {
  const { sx: t } = e,
    n = we(e, Ly),
    { systemProps: r, otherProps: o } = Ay(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...l) => {
          const s = t(...l);
          return on(s) ? O({}, r, s) : r;
        })
      : (i = O({}, r, t)),
    O({}, o, { sx: i })
  );
}
function Ep(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = Ep(e[t])) && (r && (r += " "), (r += n));
    else for (t in e) e[t] && (r && (r += " "), (r += t));
  return r;
}
function Me() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Ep(e)) && (r && (r += " "), (r += t));
  return r;
}
const Fy = ["values", "unit", "step"],
  Dy = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => O({}, n, { [r.key]: r.val }), {})
    );
  };
function jy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = we(e, Fy),
    i = Dy(t),
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
  function h(d) {
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
      not: h,
      unit: n,
    },
    o
  );
}
const By = { borderRadius: 4 },
  Uy = By;
function Wy(e = 8) {
  if (e.mui) return e;
  const t = Sp({ spacing: e }),
    n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
  return (n.mui = !0), n;
}
const by = ["breakpoints", "palette", "spacing", "shape"];
function ta(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = we(e, by),
    s = jy(n),
    u = Wy(o);
  let a = Rt(
    {
      breakpoints: s,
      direction: "ltr",
      components: {},
      palette: O({ mode: "light" }, r),
      spacing: u,
      shape: O({}, Uy, i),
    },
    l
  );
  return (
    (a = t.reduce((m, h) => Rt(m, h), a)),
    (a.unstable_sxConfig = O({}, sl, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (h) {
      return ul({ sx: h, theme: this });
    }),
    a
  );
}
const Vy = P.createContext(null),
  Hy = Vy;
function Ky() {
  return P.useContext(Hy);
}
function Qy(e) {
  return Object.keys(e).length === 0;
}
function Gy(e = null) {
  const t = Ky();
  return !t || Qy(t) ? e : t;
}
const Yy = ta();
function _p(e = Yy) {
  return Gy(e);
}
const Xy = ["className", "component"];
function Zy(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = "MuiBox-root",
      generateClassName: r,
    } = e,
    o = wp("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(ul);
  return P.forwardRef(function (s, u) {
    const a = _p(t),
      m = Cp(s),
      { className: h, component: d = "div" } = m,
      w = we(m, Xy);
    return fe(
      o,
      O({ as: d, ref: u, className: Me(h, r ? r(n) : n), theme: a }, w)
    );
  });
}
const Jy = ["variant"];
function Oc(e) {
  return e.length === 0;
}
function Pp(e) {
  const { variant: t } = e,
    n = we(e, Jy);
  let r = t || "";
  return (
    Object.keys(n)
      .sort()
      .forEach((o) => {
        o === "color"
          ? (r += Oc(r) ? e[o] : ye(e[o]))
          : (r += `${Oc(r) ? o : ye(o)}${ye(e[o].toString())}`);
      }),
    r
  );
}
const qy = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  e1 = ["theme"],
  t1 = ["theme"];
function wr(e) {
  return Object.keys(e).length === 0;
}
function n1(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const r1 = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  o1 = (e, t) => {
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
  i1 = (e, t, n, r) => {
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
            m && s.push(t[Pp(a.props)]);
        }),
      s
    );
  };
function Xo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const l1 = ta();
function s1(e = {}) {
  const {
      defaultTheme: t = l1,
      rootShouldForwardProp: n = Xo,
      slotShouldForwardProp: r = Xo,
    } = e,
    o = (i) => {
      const l = wr(i.theme) ? t : i.theme;
      return ul(O({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      Gg(i, (p) => p.filter((v) => !(v != null && v.__mui_systemSx)));
      const {
          name: s,
          slot: u,
          skipVariantsResolver: a,
          skipSx: m,
          overridesResolver: h,
        } = l,
        d = we(l, qy),
        w = a !== void 0 ? a : (u && u !== "Root") || !1,
        y = m || !1;
      let g,
        _ = Xo;
      u === "Root" ? (_ = n) : u ? (_ = r) : n1(i) && (_ = void 0);
      const f = wp(i, O({ shouldForwardProp: _, label: g }, d)),
        c = (p, ...v) => {
          const S = v
            ? v.map((z) =>
                typeof z == "function" && z.__emotion_real !== z
                  ? ($) => {
                      let { theme: F } = $,
                        Y = we($, e1);
                      return z(O({ theme: wr(F) ? t : F }, Y));
                    }
                  : z
              )
            : [];
          let k = p;
          s &&
            h &&
            S.push((z) => {
              const $ = wr(z.theme) ? t : z.theme,
                F = r1(s, $);
              if (F) {
                const Y = {};
                return (
                  Object.entries(F).forEach(([ae, le]) => {
                    Y[ae] =
                      typeof le == "function" ? le(O({}, z, { theme: $ })) : le;
                  }),
                  h(z, Y)
                );
              }
              return null;
            }),
            s &&
              !w &&
              S.push((z) => {
                const $ = wr(z.theme) ? t : z.theme;
                return i1(z, o1(s, $), $, s);
              }),
            y || S.push(o);
          const x = S.length - v.length;
          if (Array.isArray(p) && x > 0) {
            const z = new Array(x).fill("");
            (k = [...p, ...z]), (k.raw = [...p.raw, ...z]);
          } else
            typeof p == "function" &&
              p.__emotion_real !== p &&
              (k = (z) => {
                let { theme: $ } = z,
                  F = we(z, t1);
                return p(O({ theme: wr($) ? t : $ }, F));
              });
          return f(k, ...S);
        };
      return f.withConfig && (c.withConfig = f.withConfig), c;
    }
  );
}
function u1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Wu(t.components[n].defaultProps, r);
}
function a1({ props: e, name: t, defaultTheme: n }) {
  const r = _p(n);
  return u1({ theme: r, name: t, props: e });
}
function na(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function c1(e) {
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
function yn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return yn(c1(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(nr(9, e));
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
      throw new Error(nr(10, o));
  } else r = r.split(",");
  return (
    (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
  );
}
function al(e) {
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
function f1(e) {
  e = yn(e);
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
    e.type === "hsla" && ((s += "a"), u.push(t[3])), al({ type: s, values: u })
  );
}
function Mc(e) {
  e = yn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? yn(f1(e)).values : e.values;
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
function d1(e, t) {
  const n = Mc(e),
    r = Mc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function No(e, t) {
  return (
    (e = yn(e)),
    (t = na(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    al(e)
  );
}
function p1(e, t) {
  if (((e = yn(e)), (t = na(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return al(e);
}
function h1(e, t) {
  if (((e = yn(e)), (t = na(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return al(e);
}
function m1(e, t) {
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
const g1 = ["mode", "contrastThreshold", "tonalOffset"],
  Nc = {
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: { paper: qr.white, default: qr.white },
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
  Vl = {
    text: {
      primary: qr.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: { paper: "#121212", default: "#121212" },
    action: {
      active: qr.white,
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
function Ic(e, t, n, r) {
  const o = r.light || r,
    i = r.dark || r * 1.5;
  e[t] ||
    (e.hasOwnProperty(n)
      ? (e[t] = e[n])
      : t === "light"
      ? (e.light = h1(e.main, o))
      : t === "dark" && (e.dark = p1(e.main, i)));
}
function y1(e = "light") {
  return e === "dark"
    ? { main: _n[200], light: _n[50], dark: _n[400] }
    : { main: _n[700], light: _n[400], dark: _n[800] };
}
function v1(e = "light") {
  return e === "dark"
    ? { main: En[200], light: En[50], dark: En[400] }
    : { main: En[500], light: En[300], dark: En[700] };
}
function w1(e = "light") {
  return e === "dark"
    ? { main: Cn[500], light: Cn[300], dark: Cn[700] }
    : { main: Cn[700], light: Cn[400], dark: Cn[800] };
}
function S1(e = "light") {
  return e === "dark"
    ? { main: Pn[400], light: Pn[300], dark: Pn[700] }
    : { main: Pn[700], light: Pn[500], dark: Pn[900] };
}
function x1(e = "light") {
  return e === "dark"
    ? { main: Tn[400], light: Tn[300], dark: Tn[700] }
    : { main: Tn[800], light: Tn[500], dark: Tn[900] };
}
function k1(e = "light") {
  return e === "dark"
    ? { main: yr[400], light: yr[300], dark: yr[700] }
    : { main: "#ed6c02", light: yr[500], dark: yr[900] };
}
function C1(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = we(e, g1),
    i = e.primary || y1(t),
    l = e.secondary || v1(t),
    s = e.error || w1(t),
    u = e.info || S1(t),
    a = e.success || x1(t),
    m = e.warning || k1(t);
  function h(g) {
    return d1(g, Vl.text.primary) >= n ? Vl.text.primary : Nc.text.primary;
  }
  const d = ({
      color: g,
      name: _,
      mainShade: f = 500,
      lightShade: c = 300,
      darkShade: p = 700,
    }) => {
      if (
        ((g = O({}, g)),
        !g.main && g[f] && (g.main = g[f]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(nr(11, _ ? ` (${_})` : "", f));
      if (typeof g.main != "string")
        throw new Error(nr(12, _ ? ` (${_})` : "", JSON.stringify(g.main)));
      return (
        Ic(g, "light", c, r),
        Ic(g, "dark", p, r),
        g.contrastText || (g.contrastText = h(g.main)),
        g
      );
    },
    w = { dark: Vl, light: Nc };
  return Rt(
    O(
      {
        common: O({}, qr),
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
        grey: z0,
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
const E1 = [
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
function _1(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Lc = { textTransform: "uppercase" },
  Ac = '"Roboto", "Helvetica", "Arial", sans-serif';
function P1(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Ac,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: s = 500,
      fontWeightBold: u = 700,
      htmlFontSize: a = 16,
      allVariants: m,
      pxToRem: h,
    } = n,
    d = we(n, E1),
    w = o / 14,
    y = h || ((f) => `${(f / a) * w}rem`),
    g = (f, c, p, v, S) =>
      O(
        { fontFamily: r, fontWeight: f, fontSize: y(c), lineHeight: p },
        r === Ac ? { letterSpacing: `${_1(v / c)}em` } : {},
        S,
        m
      ),
    _ = {
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
      button: g(s, 14, 1.75, 0.4, Lc),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, Lc),
    };
  return Rt(
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
      _
    ),
    d,
    { clone: !1 }
  );
}
const T1 = 0.2,
  R1 = 0.14,
  $1 = 0.12;
function Q(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${T1})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${R1})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${$1})`,
  ].join(",");
}
const z1 = [
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
  O1 = z1,
  M1 = ["duration", "easing", "delay"],
  N1 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  I1 = {
    shortest: 150,
    shorter: 200,
    short: 250,
    standard: 300,
    complex: 375,
    enteringScreen: 225,
    leavingScreen: 195,
  };
function Fc(e) {
  return `${Math.round(e)}ms`;
}
function L1(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function A1(e) {
  const t = O({}, N1, e.easing),
    n = O({}, I1, e.duration);
  return O(
    {
      getAutoHeightDuration: L1,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: u = 0,
        } = i;
        return (
          we(i, M1),
          (Array.isArray(o) ? o : [o])
            .map(
              (a) =>
                `${a} ${typeof l == "string" ? l : Fc(l)} ${s} ${
                  typeof u == "string" ? u : Fc(u)
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
const F1 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  D1 = F1,
  j1 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Tp(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = we(e, j1);
  if (e.vars) throw new Error(nr(18));
  const s = C1(r),
    u = ta(e);
  let a = Rt(u, {
    mixins: m1(u.breakpoints, n),
    palette: s,
    shadows: O1.slice(),
    typography: P1(s, i),
    transitions: A1(o),
    zIndex: O({}, D1),
  });
  return (
    (a = Rt(a, l)),
    (a = t.reduce((m, h) => Rt(m, h), a)),
    (a.unstable_sxConfig = O({}, sl, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (h) {
      return ul({ sx: h, theme: this });
    }),
    a
  );
}
const B1 = Tp(),
  Rp = B1;
function cl({ props: e, name: t }) {
  return a1({ props: e, name: t, defaultTheme: Rp });
}
const $p = (e) => Xo(e) && e !== "classes",
  U1 = s1({ defaultTheme: Rp, rootShouldForwardProp: $p }),
  Sn = U1;
function Ks(e, t) {
  return (
    (Ks = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Ks(e, t)
  );
}
function W1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Ks(e, t);
}
const Dc = Rn.createContext(null);
function b1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function ra(e, t) {
  var n = function (i) {
      return t && P.isValidElement(i) ? t(i) : i;
    },
    r = Object.create(null);
  return (
    e &&
      P.Children.map(e, function (o) {
        return o;
      }).forEach(function (o) {
        r[o.key] = n(o);
      }),
    r
  );
}
function V1(e, t) {
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
function H1(e, t) {
  return ra(e.children, function (n) {
    return P.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: an(n, "appear", e),
      enter: an(n, "enter", e),
      exit: an(n, "exit", e),
    });
  });
}
function K1(e, t, n) {
  var r = ra(e.children),
    o = V1(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (P.isValidElement(l)) {
        var s = i in t,
          u = i in r,
          a = t[i],
          m = P.isValidElement(a) && !a.props.in;
        u && (!s || m)
          ? (o[i] = P.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: an(l, "exit", e),
              enter: an(l, "enter", e),
            }))
          : !u && s && !m
          ? (o[i] = P.cloneElement(l, { in: !1 }))
          : u &&
            s &&
            P.isValidElement(a) &&
            (o[i] = P.cloneElement(l, {
              onExited: n.bind(null, l),
              in: a.props.in,
              exit: an(l, "exit", e),
              enter: an(l, "enter", e),
            }));
      }
    }),
    o
  );
}
var Q1 =
    Object.values ||
    function (e) {
      return Object.keys(e).map(function (t) {
        return e[t];
      });
    },
  G1 = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  oa = (function (e) {
    W1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(b1(i));
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
        return { children: u ? H1(o, s) : K1(o, l, s), firstRender: !1 };
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
          a = Q1(this.state.children).map(l);
        return (
          delete s.appear,
          delete s.enter,
          delete s.exit,
          i === null
            ? Rn.createElement(Dc.Provider, { value: u }, a)
            : Rn.createElement(
                Dc.Provider,
                { value: u },
                Rn.createElement(i, s, a)
              )
        );
      }),
      t
    );
  })(Rn.Component);
oa.propTypes = {};
oa.defaultProps = G1;
const Y1 = oa;
function X1(e) {
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
    [m, h] = P.useState(!1),
    d = Me(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    w = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = Me(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !s && !m && h(!0),
    P.useEffect(() => {
      if (!s && u != null) {
        const g = setTimeout(u, a);
        return () => {
          clearTimeout(g);
        };
      }
    }, [u, s, a]),
    fe("span", {
      className: d,
      style: w,
      children: fe("span", { className: y }),
    })
  );
}
const Z1 = Ui("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Xe = Z1,
  J1 = ["center", "classes", "className"];
let fl = (e) => e,
  jc,
  Bc,
  Uc,
  Wc;
const Qs = 550,
  q1 = 80,
  ev = Xu(
    jc ||
      (jc = fl`
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
  tv = Xu(
    Bc ||
      (Bc = fl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  nv = Xu(
    Uc ||
      (Uc = fl`
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
  rv = Sn("span", { name: "MuiTouchRipple", slot: "Root" })({
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
  ov = Sn(X1, { name: "MuiTouchRipple", slot: "Ripple" })(
    Wc ||
      (Wc = fl`
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
    ev,
    Qs,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Xe.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Xe.child,
    Xe.childLeaving,
    tv,
    Qs,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Xe.childPulsate,
    nv,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  iv = P.forwardRef(function (t, n) {
    const r = cl({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: l } = r,
      s = we(r, J1),
      [u, a] = P.useState([]),
      m = P.useRef(0),
      h = P.useRef(null);
    P.useEffect(() => {
      h.current && (h.current(), (h.current = null));
    }, [u]);
    const d = P.useRef(!1),
      w = P.useRef(null),
      y = P.useRef(null),
      g = P.useRef(null);
    P.useEffect(
      () => () => {
        clearTimeout(w.current);
      },
      []
    );
    const _ = P.useCallback(
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
            fe(
              ov,
              {
                classes: {
                  ripple: Me(i.ripple, Xe.ripple),
                  rippleVisible: Me(i.rippleVisible, Xe.rippleVisible),
                  ripplePulsate: Me(i.ripplePulsate, Xe.ripplePulsate),
                  child: Me(i.child, Xe.child),
                  childLeaving: Me(i.childLeaving, Xe.childLeaving),
                  childPulsate: Me(i.childPulsate, Xe.childPulsate),
                },
                timeout: Qs,
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
      f = P.useCallback(
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
            F = $
              ? $.getBoundingClientRect()
              : { width: 0, height: 0, left: 0, top: 0 };
          let Y, ae, le;
          if (
            T ||
            v === void 0 ||
            (v.clientX === 0 && v.clientY === 0) ||
            (!v.clientX && !v.touches)
          )
            (Y = Math.round(F.width / 2)), (ae = Math.round(F.height / 2));
          else {
            const { clientX: Ye, clientY: Te } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
            (Y = Math.round(Ye - F.left)), (ae = Math.round(Te - F.top));
          }
          if (T)
            (le = Math.sqrt((2 * F.width ** 2 + F.height ** 2) / 3)),
              le % 2 === 0 && (le += 1);
          else {
            const Ye =
                Math.max(Math.abs(($ ? $.clientWidth : 0) - Y), Y) * 2 + 2,
              Te =
                Math.max(Math.abs(($ ? $.clientHeight : 0) - ae), ae) * 2 + 2;
            le = Math.sqrt(Ye ** 2 + Te ** 2);
          }
          v != null && v.touches
            ? y.current === null &&
              ((y.current = () => {
                _({
                  pulsate: x,
                  rippleX: Y,
                  rippleY: ae,
                  rippleSize: le,
                  cb: k,
                });
              }),
              (w.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, q1)))
            : _({ pulsate: x, rippleX: Y, rippleY: ae, rippleSize: le, cb: k });
        },
        [o, _]
      ),
      c = P.useCallback(() => {
        f({}, { pulsate: !0 });
      }, [f]),
      p = P.useCallback((v, S) => {
        if (
          (clearTimeout(w.current),
          (v == null ? void 0 : v.type) === "touchend" && y.current)
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
      P.useImperativeHandle(n, () => ({ pulsate: c, start: f, stop: p }), [
        c,
        f,
        p,
      ]),
      fe(
        rv,
        O({ className: Me(Xe.root, i.root, l), ref: g }, s, {
          children: fe(Y1, { component: null, exit: !0, children: u }),
        })
      )
    );
  }),
  lv = iv;
function sv(e) {
  return Bi("MuiButtonBase", e);
}
const uv = Ui("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  av = uv,
  cv = [
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
  fv = (e) => {
    const {
        disabled: t,
        focusVisible: n,
        focusVisibleClassName: r,
        classes: o,
      } = e,
      l = bu({ root: ["root", t && "disabled", n && "focusVisible"] }, sv, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  dv = Sn("button", {
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
    [`&.${av.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  pv = P.forwardRef(function (t, n) {
    const r = cl({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: s,
        component: u = "button",
        disabled: a = !1,
        disableRipple: m = !1,
        disableTouchRipple: h = !1,
        focusRipple: d = !1,
        LinkComponent: w = "a",
        onBlur: y,
        onClick: g,
        onContextMenu: _,
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
        onTouchStart: F,
        tabIndex: Y = 0,
        TouchRippleProps: ae,
        touchRippleRef: le,
        type: Ye,
      } = r,
      Te = we(r, cv),
      rt = P.useRef(null),
      E = P.useRef(null),
      N = vc(E, le),
      { isFocusVisibleRef: M, onFocus: b, onBlur: ne, ref: xt } = B0(),
      [he, ft] = P.useState(!1);
    a && he && ft(!1),
      P.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ft(!0), rt.current.focus();
          },
        }),
        []
      );
    const [je, kt] = P.useState(!1);
    P.useEffect(() => {
      kt(!0);
    }, []);
    const tn = je && !m && !a;
    P.useEffect(() => {
      he && d && !m && je && E.current.pulsate();
    }, [m, d, he, je]);
    function xe(I, la, bp = h) {
      return Oo(
        (sa) => (la && la(sa), !bp && E.current && E.current[I](sa), !0)
      );
    }
    const xn = xe("start", k),
      dl = xe("stop", _),
      pl = xe("stop", f),
      Mp = xe("stop", T),
      Np = xe("stop", (I) => {
        he && I.preventDefault(), x && x(I);
      }),
      Ip = xe("start", F),
      Lp = xe("stop", z),
      Ap = xe("stop", $),
      Fp = xe(
        "stop",
        (I) => {
          ne(I), M.current === !1 && ft(!1), y && y(I);
        },
        !1
      ),
      Dp = Oo((I) => {
        rt.current || (rt.current = I.currentTarget),
          b(I),
          M.current === !0 && (ft(!0), p && p(I)),
          c && c(I);
      }),
      hl = () => {
        const I = rt.current;
        return u && u !== "button" && !(I.tagName === "A" && I.href);
      },
      ml = P.useRef(!1),
      jp = Oo((I) => {
        d &&
          !ml.current &&
          he &&
          E.current &&
          I.key === " " &&
          ((ml.current = !0),
          E.current.stop(I, () => {
            E.current.start(I);
          })),
          I.target === I.currentTarget &&
            hl() &&
            I.key === " " &&
            I.preventDefault(),
          v && v(I),
          I.target === I.currentTarget &&
            hl() &&
            I.key === "Enter" &&
            !a &&
            (I.preventDefault(), g && g(I));
      }),
      Bp = Oo((I) => {
        d &&
          I.key === " " &&
          E.current &&
          he &&
          !I.defaultPrevented &&
          ((ml.current = !1),
          E.current.stop(I, () => {
            E.current.pulsate(I);
          })),
          S && S(I),
          g &&
            I.target === I.currentTarget &&
            hl() &&
            I.key === " " &&
            !I.defaultPrevented &&
            g(I);
      });
    let fo = u;
    fo === "button" && (Te.href || Te.to) && (fo = w);
    const ur = {};
    fo === "button"
      ? ((ur.type = Ye === void 0 ? "button" : Ye), (ur.disabled = a))
      : (!Te.href && !Te.to && (ur.role = "button"),
        a && (ur["aria-disabled"] = a));
    const Up = vc(n, xt, rt),
      ia = O({}, r, {
        centerRipple: i,
        component: u,
        disabled: a,
        disableRipple: m,
        disableTouchRipple: h,
        focusRipple: d,
        tabIndex: Y,
        focusVisible: he,
      }),
      Wp = fv(ia);
    return Er(
      dv,
      O(
        {
          as: fo,
          className: Me(Wp.root, s),
          ownerState: ia,
          onBlur: Fp,
          onClick: g,
          onContextMenu: dl,
          onFocus: Dp,
          onKeyDown: jp,
          onKeyUp: Bp,
          onMouseDown: xn,
          onMouseLeave: Np,
          onMouseUp: Mp,
          onDragLeave: pl,
          onTouchEnd: Lp,
          onTouchMove: Ap,
          onTouchStart: Ip,
          ref: Up,
          tabIndex: a ? -1 : Y,
          type: Ye,
        },
        ur,
        Te,
        { children: [l, tn ? fe(lv, O({ ref: N, center: i }, ae)) : null] }
      )
    );
  }),
  hv = pv;
function mv(e) {
  return Bi("MuiTypography", e);
}
Ui("MuiTypography", [
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
const gv = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  yv = (e) => {
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
    return bu(s, mv, l);
  },
  vv = Sn("span", {
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
  wv = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  Sv = (e) => wv[e] || e,
  xv = P.forwardRef(function (t, n) {
    const r = cl({ props: t, name: "MuiTypography" }),
      o = Sv(r.color),
      i = Cp(O({}, r, { color: o })),
      {
        align: l = "inherit",
        className: s,
        component: u,
        gutterBottom: a = !1,
        noWrap: m = !1,
        paragraph: h = !1,
        variant: d = "body1",
        variantMapping: w = bc,
      } = i,
      y = we(i, gv),
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
      _ = u || (h ? "p" : w[d] || bc[d]) || "span",
      f = yv(g);
    return fe(
      vv,
      O({ as: _, ref: n, ownerState: g, className: Me(f.root, s) }, y)
    );
  }),
  Hl = xv,
  kv = Tp(),
  Cv = Zy({
    defaultTheme: kv,
    defaultClassName: "MuiBox-root",
    generateClassName: rp.generate,
  }),
  Vc = Cv;
function Ev(e) {
  return Bi("MuiButton", e);
}
const _v = Ui("MuiButton", [
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
  Io = _v,
  Pv = P.createContext({}),
  Tv = Pv,
  Rv = [
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
  $v = (e) => {
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
      u = bu(s, Ev, l);
    return O({}, l, u);
  },
  zp = (e) =>
    O(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  zv = Sn(hv, {
    shouldForwardProp: (e) => $p(e) || e === "classes",
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
                : No(e.palette.text.primary, e.palette.action.hoverOpacity),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            t.variant === "text" &&
              t.color !== "inherit" && {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : No(e.palette[t.color].main, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            t.variant === "outlined" &&
              t.color !== "inherit" && {
                border: `1px solid ${(e.vars || e).palette[t.color].main}`,
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette[t.color].mainChannel} / ${
                      e.vars.palette.action.hoverOpacity
                    })`
                  : No(e.palette[t.color].main, e.palette.action.hoverOpacity),
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
          [`&.${Io.focusVisible}`]: O(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Io.disabled}`]: O(
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
              : `1px solid ${No(e.palette[t.color].main, 0.5)}`,
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
        [`&.${Io.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Io.disabled}`]: { boxShadow: "none" },
      }
  ),
  Ov = Sn("span", {
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
      zp(e)
    )
  ),
  Mv = Sn("span", {
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
      zp(e)
    )
  ),
  Nv = P.forwardRef(function (t, n) {
    const r = P.useContext(Tv),
      o = Wu(r, t),
      i = cl({ props: o, name: "MuiButton" }),
      {
        children: l,
        color: s = "primary",
        component: u = "button",
        className: a,
        disabled: m = !1,
        disableElevation: h = !1,
        disableFocusRipple: d = !1,
        endIcon: w,
        focusVisibleClassName: y,
        fullWidth: g = !1,
        size: _ = "medium",
        startIcon: f,
        type: c,
        variant: p = "text",
      } = i,
      v = we(i, Rv),
      S = O({}, i, {
        color: s,
        component: u,
        disabled: m,
        disableElevation: h,
        disableFocusRipple: d,
        fullWidth: g,
        size: _,
        type: c,
        variant: p,
      }),
      k = $v(S),
      x = f && fe(Ov, { className: k.startIcon, ownerState: S, children: f }),
      T = w && fe(Mv, { className: k.endIcon, ownerState: S, children: w });
    return Er(
      zv,
      O(
        {
          ownerState: S,
          className: Me(r.className, k.root, a),
          component: u,
          disabled: m,
          focusRipple: !d,
          focusVisibleClassName: Me(k.focusVisible, y),
          ref: n,
          type: c,
        },
        v,
        { classes: k, children: [x, l, T] }
      )
    );
  }),
  Iv = Nv;
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
function Lv() {
  const [e, t] = P.useState(!1),
    [n, r] = P.useState(null),
    [o, i] = P.useState(100);
  let l = localStorage.getItem("scratchCardConfig");
  l = JSON.parse(l);
  const { shopConfig: s, discountCodes: u } = l,
    {
      "border-color": a,
      "bg-color": m,
      height: h,
      "text-color": d,
      "border-radius": w,
      "border-width": y,
      "font-size": g,
      "selected-title-font-style": _,
      "title-font-size": f,
      "title-text-align-center": c,
      "sub-title": p,
      "sub-title-font-size": v,
      "sub-title-text-align-center": S,
      "selected-sub-title-font-style": k,
      "selected-scratch-card-style": x,
      title: T,
      "sub-title": z,
      "cusom-scratch-card-selected": $,
      "selected-custom-card-image": F,
      "selected-devices": Y,
    } = s,
    ae = Math.floor(Math.random() * 4);
  let le = localStorage.getItem("currentSessionScratchCardCode");
  le == null && localStorage.setItem("currentSessionScratchCardCode", ae);
  const Ye = u[Number(le)];
  let Te = localStorage.getItem("productHandle");
  const rt = s["product-selection"],
    E = s["selected-products"];
  let N = rt === "selected-products",
    M = !0,
    b = P.useRef(null);
  P.useRef(null),
    P.useEffect(() => (b.current && i(b.current.offsetWidth), () => {}), []);
  let xt = window.innerWidth < 500;
  N && (M = E.some((tn) => tn.handle === Te)),
    Y.includes("mobile") && xt
      ? (console.log("for mobile"), (M = !0))
      : Y.includes("desktop") && !xt
      ? (console.log("for desktop"), (M = !0))
      : (console.log("for none"), (M = !1)),
    P.useEffect(() => {
      if (M) {
        console.log({ scWidth: o });
        let tn = $;
        if (tn) {
          console.log("custom scratch card selected", tn);
          const xe = document.querySelector(".ScratchCard__Canvas");
          new Kc(xe, F, o, h).render(), r(F);
        } else {
          const xe = `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${x
            .split(" ")
            .join("-")}.png`;
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
            );
          const xn = document.querySelector(".ScratchCard__Canvas");
          new Kc(xn, xe, o, h).render();
        }
      }
    }, [M, o]);
  const he = async () => {
      const xe = (await fetch("/cart.js")).json(),
        xn = xe.attributes;
      if (xe.item_count === 0) {
        alert("Add one or more item in cart first!");
        return;
      }
      await fetch(`/discount/${Ye}`)
        .then((pl) => {
          t(!0),
            fetch("/cart/update.js", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                attributes: { ...xn, addedby: "scratch-card-app" },
              }),
            });
        })
        .catch((pl) => t(!0));
    },
    ft = Hc(_),
    je = Hc(k);
  let kt = null;
  return (
    console.log("scratch card image", n),
    M &&
      (console.log("widget will show"),
      (kt = Er("div", {
        className: "scratch-card-app",
        children: [
          fe(Hl, {
            sx: {
              ...ft,
              width: "100%",
              fontSize: `${f}px`,
              textAlign: c && "center",
            },
            children: T,
          }),
          fe(Hl, {
            sx: {
              ...je,
              width: "100%",
              fontSize: `${v}px`,
              textAlign: S && "center",
            },
            children: z,
          }),
          fe(Vc, {
            className: "root-container-sc",
            sx: {
              marginTop: "10px",
              marginBottom: "10px",
              width: "100%",
              height: `${h}px`,
              position: "relative",
              ".ScratchCard__Canvas ": {
                borderRadius: `${w - 4}px`,
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: 1,
              },
              ".ScratchCard__Container": {
                border: `${y}px solid ${a}`,
                borderRadius: `${w}px`,
              },
            },
            ref: b,
            children: Er(Vc, {
              className: "ScratchCard__Container",
              sx: {
                position: "relative",
                height: "100%",
                width: "100%",
                border: `${y}px solid ${a}`,
                borderRadius: `${w}px`,
              },
              children: [
                fe("canvas", {
                  width: o,
                  height: h,
                  id: "scratch",
                  className: "ScratchCard__Canvas",
                  style: {
                    position: "absolute",
                    width: o,
                    height: h,
                    borderRadius: `${w - 4}px`,
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                    userSelect: "none",
                  },
                }),
                Er("div", {
                  className: "base",
                  style: {
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: m,
                    borderRadius: `${w - 4}px`,
                  },
                  children: [
                    fe(Hl, {
                      variant: "h6",
                      sx: { fontSize: `${g}px`, color: d },
                      children: Ye,
                    }),
                    fe(Iv, {
                      variant: "text",
                      sx: { color: d, borderRadius: 0 },
                      disabled: e,
                      onClick: he,
                      children: e ? "Applied On Checkout" : "Apply Discount",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }))),
    fe(yh, { children: kt })
  );
}
async function Av() {
  let e = localStorage.getItem("scratchCardConfig");
  if (e == null) {
    let t = {
      shopConfig: {
        "selected-devices": ["mobile", "desktop"],
        "cusom-scratch-card-selected": !1,
        "uploaded-scratch-card-images": [],
        "selected-custom-card-image": "https://i.ibb.co/Y45L3Nw/navidium2.webp",
        "product-selection": "all-products",
        "selected-products": [
          {
            id: "gid://shopify/Product/8132485218590",
            title: "Black Leather Bag",
            handle: "black-leather-bag",
          },
          {
            id: "gid://shopify/Product/8132485611806",
            title: "Blue Silk Tuxedo",
            handle: "blue-silk-tuxedo",
          },
          {
            id: "gid://shopify/Product/8132485447966",
            title: "Chequered Red Shirt",
            handle: "chequered-red-shirt",
          },
        ],
        title: "Scratch And Win",
        "title-font-size": 23,
        "title-text-align-center": !0,
        "title-font-styles": [
          "bold",
          "italic",
          "regular",
          "light-italic",
          "light",
        ],
        "selected-title-font-style": "bold",
        "sub-title": "Get a discount coupon",
        "sub-title-font-size": 14,
        "sub-title-text-align-center": !0,
        "sub-title-font-styles": [
          "bold",
          "italic",
          "regular",
          "light-italic",
          "light",
        ],
        "selected-sub-title-font-style": "light-italic",
        "border-color": "transaprent",
        "bg-color": "red",
        "text-color": "#000000",
        "border-radius": 15,
        "border-width": 5,
        height: 89,
        width: 300,
        "font-size": 25,
        "selected-scratch-card-style": "style 1",
      },
      discountCodes: ["TEST", "hello", "next", "15PERCENT"],
    };
    localStorage.setItem("scratchCardConfig", JSON.stringify(t));
  } else console.log("discount codes are already stored");
  return !0;
}
function Fv() {
  Kl.createRoot(document.getElementById("scratch-card-app-root")).render(
    fe(Lv, {})
  );
}
let Op = !1;
window.addEventListener("DOMContentLoaded", function () {
  (Op = !0),
    console.log("======= INIT :: SCRATCH-CARD-APP ======="),
    Av().then(() => {
      Fv(), setTimeout(Dv(), 1e3);
    });
});
window.onload = function () {
  if (!Op) {
    console.log("load event not fired! firing now====>>>"),
      console.log("======= INIT :: SCRATCH-CARD-APP =======");
    let e = new Event("DOMContentLoaded");
    dispatchEvent(e);
  }
};
function Dv() {
  let e = !1,
    t = null,
    n = setInterval(() => {
      (t = document.querySelector(".ScratchCard__Canvas")),
        t && (console.log("canvas found", e), clearInterval(n));
    }, 1e3);
}
class Kc {
  constructor(t, n, r, o) {
    po(this, "handleMouseDown", (t) => {
      (this.isDrawing = !0), (this.lastPoint = this.getMouse(t, this.canvas));
    });
    po(this, "handleMouseMove", (t) => {
      const n = this.getMouse(t, this.canvas),
        r = this.distanceBetween(this.lastPoint, n),
        o = this.angleBetween(this.lastPoint, n);
      let i, l;
      for (let s = 0; s < r; s++)
        (i = this.lastPoint ? this.lastPoint.x + Math.sin(o) * s : 0),
          (l = this.lastPoint ? this.lastPoint.y + Math.cos(o) * s : 0),
          (this.ctx.globalCompositeOperation = "destination-out"),
          this.brushImage && this.props.customBrush
            ? this.ctx.drawImage(
                this.brushImage,
                i,
                l,
                this.props.customBrush.width,
                this.props.customBrush.height
              )
            : (this.ctx.beginPath(),
              this.ctx.arc(i, l, 20, 0, 2 * Math.PI, !1),
              this.ctx.fill());
      (this.lastPoint = n), this.handlePercentage(this.getFilledInPixels(32));
    });
    po(this, "handleMouseUp", () => {
      this.isDrawing = !1;
    });
    (this.isDrawing = !1),
      (this.canvas = t),
      (this.width = r),
      (this.height = o),
      (this.lastPoint = null),
      (this.ctx = this.canvas.getContext("2d")),
      (this.image = new Image()),
      (this.image.crossOrigin = "Anonymous"),
      (this.image.onload = () => {
        this.ctx.drawImage(this.image, 0, 0, r, o);
      }),
      (this.image.src = n);
  }
  getFilledInPixels(t) {
    (!t || t < 1) && (t = 1);
    let n = 0,
      r = 0,
      o = this.canvas.width,
      i = this.canvas.height;
    const l = this.ctx.getImageData(n, r, o, i),
      s = l.data.length / t;
    let u = 0;
    for (let a = 0; a < l.data.length; a += t)
      parseInt(l.data[a], 10) === 0 && u++;
    return Math.round((u / s) * 100);
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
    return t && n
      ? Math.sqrt(Math.pow(n.x - t.x, 2) + Math.pow(n.y - t.y, 2))
      : 0;
  }
  angleBetween(t, n) {
    return t && n ? Math.atan2(n.x - t.x, n.y - t.y) : 0;
  }
  handlePercentage(t = 0) {
    if (this.isFinished) return;
    t > 70 &&
      ((this.canvas.style.transition = "1s"),
      (this.canvas.style.opacity = "0"),
      (this.isFinished = !0));
  }
  render() {
    this.canvas.addEventListener("mousedown", this.handleMouseDown),
      this.canvas.addEventListener("touchstart", this.handleMouseMove),
      this.canvas.addEventListener("mousemove", this.handleMouseMove),
      this.canvas.addEventListener("mouseup", this.handleMouseUp),
      this.canvas.addEventListener("touchmove", this.handleMouseMove),
      this.canvas.addEventListener("touchend", this.handleMouseUp);
  }
}
