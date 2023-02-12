function Wp(e, t) {
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
var Mr = {},
  Vp = {
    get exports() {
      return Mr;
    },
    set exports(e) {
      Mr = e;
    },
  },
  ki = {},
  P = {},
  Hp = {
    get exports() {
      return P;
    },
    set exports(e) {
      P = e;
    },
  },
  I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var to = Symbol.for("react.element"),
  Kp = Symbol.for("react.portal"),
  Qp = Symbol.for("react.fragment"),
  Gp = Symbol.for("react.strict_mode"),
  Yp = Symbol.for("react.profiler"),
  Xp = Symbol.for("react.provider"),
  Zp = Symbol.for("react.context"),
  Jp = Symbol.for("react.forward_ref"),
  qp = Symbol.for("react.suspense"),
  eh = Symbol.for("react.memo"),
  th = Symbol.for("react.lazy"),
  sa = Symbol.iterator;
function nh(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sa && e[sa]) || e["@@iterator"]),
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
function nr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Kc);
}
nr.prototype.isReactComponent = {};
nr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
nr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Yc() {}
Yc.prototype = nr.prototype;
function Qu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Gc),
    (this.updater = n || Kc);
}
var Gu = (Qu.prototype = new Yc());
Gu.constructor = Qu;
Qc(Gu, nr.prototype);
Gu.isPureReactComponent = !0;
var aa = Array.isArray,
  Xc = Object.prototype.hasOwnProperty,
  Yu = { current: null },
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
  var u = arguments.length - 2;
  if (u === 1) o.children = n;
  else if (1 < u) {
    for (var s = Array(u), a = 0; a < u; a++) s[a] = arguments[a + 2];
    o.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) o[r] === void 0 && (o[r] = u[r]);
  return {
    $$typeof: to,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: Yu.current,
  };
}
function rh(e, t) {
  return {
    $$typeof: to,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Xu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === to;
}
function oh(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ca = /\/+/g;
function ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? oh("" + e.key)
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
          case to:
          case Kp:
            l = !0;
        }
    }
  if (l)
    return (
      (l = e),
      (o = o(l)),
      (e = r === "" ? "." + ml(l, 0) : r),
      aa(o)
        ? ((n = ""),
          e != null && (n = e.replace(ca, "$&/") + "/"),
          Lo(o, t, n, "", function (a) {
            return a;
          }))
        : o != null &&
          (Xu(o) &&
            (o = rh(
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
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + ml(i, u);
      l += Lo(i, t, n, s, o);
    }
  else if (((s = nh(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + ml(i, u++)), (l += Lo(i, t, n, s, o));
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
function po(e, t, n) {
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
function ih(e) {
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
  Io = { transition: null },
  lh = {
    ReactCurrentDispatcher: ze,
    ReactCurrentBatchConfig: Io,
    ReactCurrentOwner: Yu,
  };
I.Children = {
  map: po,
  forEach: function (e, t, n) {
    po(
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
      po(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      po(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Xu(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
I.Component = nr;
I.Fragment = Qp;
I.Profiler = Yp;
I.PureComponent = Qu;
I.StrictMode = Gp;
I.Suspense = qp;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lh;
I.cloneElement = function (e, t, n) {
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
      (t.ref !== void 0 && ((i = t.ref), (l = Yu.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      Xc.call(t, s) &&
        !Zc.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var a = 0; a < s; a++) u[a] = arguments[a + 2];
    r.children = u;
  }
  return { $$typeof: to, type: e.type, key: o, ref: i, props: r, _owner: l };
};
I.createContext = function (e) {
  return (
    (e = {
      $$typeof: Zp,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Xp, _context: e }),
    (e.Consumer = e)
  );
};
I.createElement = Jc;
I.createFactory = function (e) {
  var t = Jc.bind(null, e);
  return (t.type = e), t;
};
I.createRef = function () {
  return { current: null };
};
I.forwardRef = function (e) {
  return { $$typeof: Jp, render: e };
};
I.isValidElement = Xu;
I.lazy = function (e) {
  return { $$typeof: th, _payload: { _status: -1, _result: e }, _init: ih };
};
I.memo = function (e, t) {
  return { $$typeof: eh, type: e, compare: t === void 0 ? null : t };
};
I.startTransition = function (e) {
  var t = Io.transition;
  Io.transition = {};
  try {
    e();
  } finally {
    Io.transition = t;
  }
};
I.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
I.useCallback = function (e, t) {
  return ze.current.useCallback(e, t);
};
I.useContext = function (e) {
  return ze.current.useContext(e);
};
I.useDebugValue = function () {};
I.useDeferredValue = function (e) {
  return ze.current.useDeferredValue(e);
};
I.useEffect = function (e, t) {
  return ze.current.useEffect(e, t);
};
I.useId = function () {
  return ze.current.useId();
};
I.useImperativeHandle = function (e, t, n) {
  return ze.current.useImperativeHandle(e, t, n);
};
I.useInsertionEffect = function (e, t) {
  return ze.current.useInsertionEffect(e, t);
};
I.useLayoutEffect = function (e, t) {
  return ze.current.useLayoutEffect(e, t);
};
I.useMemo = function (e, t) {
  return ze.current.useMemo(e, t);
};
I.useReducer = function (e, t, n) {
  return ze.current.useReducer(e, t, n);
};
I.useRef = function (e) {
  return ze.current.useRef(e);
};
I.useState = function (e) {
  return ze.current.useState(e);
};
I.useSyncExternalStore = function (e, t, n) {
  return ze.current.useSyncExternalStore(e, t, n);
};
I.useTransition = function () {
  return ze.current.useTransition();
};
I.version = "18.2.0";
(function (e) {
  e.exports = I;
})(Hp);
const Pn = bp(P),
  fa = Wp({ __proto__: null, default: Pn }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var uh = P,
  sh = Symbol.for("react.element"),
  ah = Symbol.for("react.fragment"),
  ch = Object.prototype.hasOwnProperty,
  fh = uh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  dh = { key: !0, ref: !0, __self: !0, __source: !0 };
function qc(e, t, n) {
  var r,
    o = {},
    i = null,
    l = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
  for (r in t) ch.call(t, r) && !dh.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: sh,
    type: e,
    key: i,
    ref: l,
    props: o,
    _owner: fh.current,
  };
}
ki.Fragment = ah;
ki.jsx = qc;
ki.jsxs = qc;
(function (e) {
  e.exports = ki;
})(Vp);
const ph = Mr.Fragment,
  de = Mr.jsx,
  kr = Mr.jsxs;
var Hl = {},
  Kl = {},
  hh = {
    get exports() {
      return Kl;
    },
    set exports(e) {
      Kl = e;
    },
  },
  Ke = {},
  Ql = {},
  mh = {
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
  function t(_, M) {
    var N = _.length;
    _.push(M);
    e: for (; 0 < N; ) {
      var b = (N - 1) >>> 1,
        X = _[b];
      if (0 < o(X, M)) (_[b] = M), (_[N] = X), (N = b);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var M = _[0],
      N = _.pop();
    if (N !== M) {
      _[0] = N;
      e: for (var b = 0, X = _.length, xt = X >>> 1; b < xt; ) {
        var ue = 2 * (b + 1) - 1,
          ft = _[ue],
          je = ue + 1,
          Lt = _[je];
        if (0 > o(ft, N))
          je < X && 0 > o(Lt, ft)
            ? ((_[b] = Lt), (_[je] = N), (b = je))
            : ((_[b] = ft), (_[ue] = N), (b = ue));
        else if (je < X && 0 > o(Lt, N)) (_[b] = Lt), (_[je] = N), (b = je);
        else break e;
      }
    }
    return M;
  }
  function o(_, M) {
    var N = _.sortIndex - M.sortIndex;
    return N !== 0 ? N : _.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var l = Date,
      u = l.now();
    e.unstable_now = function () {
      return l.now() - u;
    };
  }
  var s = [],
    a = [],
    m = 1,
    h = null,
    d = 3,
    w = !1,
    y = !1,
    g = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(_) {
    for (var M = n(a); M !== null; ) {
      if (M.callback === null) r(a);
      else if (M.startTime <= _)
        r(a), (M.sortIndex = M.expirationTime), t(s, M);
      else break;
      M = n(a);
    }
  }
  function v(_) {
    if (((g = !1), p(_), !y))
      if (n(s) !== null) (y = !0), Pe(S);
      else {
        var M = n(a);
        M !== null && rt(v, M.startTime - _);
      }
  }
  function S(_, M) {
    (y = !1), g && ((g = !1), f(T), (T = -1)), (w = !0);
    var N = d;
    try {
      for (
        p(M), h = n(s);
        h !== null && (!(h.expirationTime > M) || (_ && !D()));

      ) {
        var b = h.callback;
        if (typeof b == "function") {
          (h.callback = null), (d = h.priorityLevel);
          var X = b(h.expirationTime <= M);
          (M = e.unstable_now()),
            typeof X == "function" ? (h.callback = X) : h === n(s) && r(s),
            p(M);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var xt = !0;
      else {
        var ue = n(a);
        ue !== null && rt(v, ue.startTime - M), (xt = !1);
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
  function D() {
    return !(e.unstable_now() - $ < z);
  }
  function Y() {
    if (x !== null) {
      var _ = e.unstable_now();
      $ = _;
      var M = !0;
      try {
        M = x(!0, _);
      } finally {
        M ? ce() : ((k = !1), (x = null));
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
      Ye = le.port2;
    (le.port1.onmessage = Y),
      (ce = function () {
        Ye.postMessage(null);
      });
  } else
    ce = function () {
      E(Y, 0);
    };
  function Pe(_) {
    (x = _), k || ((k = !0), ce());
  }
  function rt(_, M) {
    T = E(function () {
      _(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || w || ((y = !0), Pe(S));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (z = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (_) {
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
        return _();
      } finally {
        d = N;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, M) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var N = d;
      d = _;
      try {
        return M();
      } finally {
        d = N;
      }
    }),
    (e.unstable_scheduleCallback = function (_, M, N) {
      var b = e.unstable_now();
      switch (
        (typeof N == "object" && N !== null
          ? ((N = N.delay), (N = typeof N == "number" && 0 < N ? b + N : b))
          : (N = b),
        _)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = N + X),
        (_ = {
          id: m++,
          callback: M,
          priorityLevel: _,
          startTime: N,
          expirationTime: X,
          sortIndex: -1,
        }),
        N > b
          ? ((_.sortIndex = N),
            t(a, _),
            n(s) === null &&
              _ === n(a) &&
              (g ? (f(T), (T = -1)) : (g = !0), rt(v, N - b)))
          : ((_.sortIndex = X), t(s, _), y || w || ((y = !0), Pe(S))),
        _
      );
    }),
    (e.unstable_shouldYield = D),
    (e.unstable_wrapCallback = function (_) {
      var M = d;
      return function () {
        var N = d;
        d = M;
        try {
          return _.apply(this, arguments);
        } finally {
          d = N;
        }
      };
    });
})(ef);
(function (e) {
  e.exports = ef;
})(mh);
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tf = P,
  He = Ql;
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
  Lr = {};
function yn(e, t) {
  Qn(e, t), Qn(e + "Capture", t);
}
function Qn(e, t) {
  for (Lr[e] = t, e = 0; e < t.length; e++) nf.add(t[e]);
}
var Rt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Gl = Object.prototype.hasOwnProperty,
  gh =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  da = {},
  pa = {};
function yh(e) {
  return Gl.call(pa, e)
    ? !0
    : Gl.call(da, e)
    ? !1
    : gh.test(e)
    ? (pa[e] = !0)
    : ((da[e] = !0), !1);
}
function vh(e, t, n, r) {
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
function wh(e, t, n, r) {
  if (t === null || typeof t > "u" || vh(e, t, n, r)) return !0;
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
var Zu = /[\-:]([a-z])/g;
function Ju(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zu, Ju);
    Se[t] = new Oe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zu, Ju);
    Se[t] = new Oe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zu, Ju);
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
function qu(e, t, n, r) {
  var o = Se.hasOwnProperty(t) ? Se[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (wh(t, n, o, r) && (n = null),
    r || o === null
      ? yh(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
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
var Mt = tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ho = Symbol.for("react.element"),
  Tn = Symbol.for("react.portal"),
  Rn = Symbol.for("react.fragment"),
  es = Symbol.for("react.strict_mode"),
  Yl = Symbol.for("react.profiler"),
  rf = Symbol.for("react.provider"),
  of = Symbol.for("react.context"),
  ts = Symbol.for("react.forward_ref"),
  Xl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  ns = Symbol.for("react.memo"),
  At = Symbol.for("react.lazy"),
  lf = Symbol.for("react.offscreen"),
  ha = Symbol.iterator;
function ur(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ha && e[ha]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var q = Object.assign,
  gl;
function vr(e) {
  if (gl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      gl = (t && t[1]) || "";
    }
  return (
    `
` +
    gl +
    e
  );
}
var yl = !1;
function vl(e, t) {
  if (!e || yl) return "";
  yl = !0;
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
          u = i.length - 1;
        1 <= l && 0 <= u && o[l] !== i[u];

      )
        u--;
      for (; 1 <= l && 0 <= u; l--, u--)
        if (o[l] !== i[u]) {
          if (l !== 1 || u !== 1)
            do
              if ((l--, u--, 0 > u || o[l] !== i[u])) {
                var s =
                  `
` + o[l].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= l && 0 <= u);
          break;
        }
    }
  } finally {
    (yl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? vr(e) : "";
}
function Sh(e) {
  switch (e.tag) {
    case 5:
      return vr(e.type);
    case 16:
      return vr("Lazy");
    case 13:
      return vr("Suspense");
    case 19:
      return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = vl(e.type, !1)), e;
    case 11:
      return (e = vl(e.type.render, !1)), e;
    case 1:
      return (e = vl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rn:
      return "Fragment";
    case Tn:
      return "Portal";
    case Yl:
      return "Profiler";
    case es:
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
      case ts:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ns:
        return (
          (t = e.displayName || null), t !== null ? t : Jl(e.type) || "Memo"
        );
      case At:
        (t = e._payload), (e = e._init);
        try {
          return Jl(e(t));
        } catch {}
    }
  return null;
}
function xh(e) {
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
      return t === es ? "StrictMode" : "Mode";
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
function kh(e) {
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
function mo(e) {
  e._valueTracker || (e._valueTracker = kh(e));
}
function sf(e) {
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
function Xo(e) {
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
  return q({}, t, {
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
function af(e, t) {
  (t = t.checked), t != null && qu(e, "checked", t, !1);
}
function eu(e, t) {
  af(e, t);
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
    ? tu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && tu(e, t.type, Xt(t.defaultValue)),
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
function tu(e, t, n) {
  (t !== "number" || Xo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var wr = Array.isArray;
function jn(e, t, n, r) {
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
function nu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return q({}, t, {
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
      if (wr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Xt(n) };
}
function cf(e, t) {
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
function ru(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ff(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var go,
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
        go = go || document.createElement("div"),
          go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = go.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Ir(e, t) {
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
  Ch = ["Webkit", "ms", "Moz", "O"];
Object.keys(Cr).forEach(function (e) {
  Ch.forEach(function (t) {
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
var Eh = q(
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
function ou(e, t) {
  if (t) {
    if (Eh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
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
function iu(e, t) {
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
var lu = null;
function rs(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var uu = null,
  Bn = null,
  Un = null;
function wa(e) {
  if ((e = oo(e))) {
    if (typeof uu != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = Ti(t)), uu(e.stateNode, e.type, t));
  }
}
function mf(e) {
  Bn ? (Un ? Un.push(e) : (Un = [e])) : (Bn = e);
}
function gf() {
  if (Bn) {
    var e = Bn,
      t = Un;
    if (((Un = Bn = null), wa(e), t)) for (e = 0; e < t.length; e++) wa(t[e]);
  }
}
function yf(e, t) {
  return e(t);
}
function vf() {}
var wl = !1;
function wf(e, t, n) {
  if (wl) return e(t, n);
  wl = !0;
  try {
    return yf(e, t, n);
  } finally {
    (wl = !1), (Bn !== null || Un !== null) && (vf(), gf());
  }
}
function Ar(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Ti(n);
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
var su = !1;
if (Rt)
  try {
    var sr = {};
    Object.defineProperty(sr, "passive", {
      get: function () {
        su = !0;
      },
    }),
      window.addEventListener("test", sr, sr),
      window.removeEventListener("test", sr, sr);
  } catch {
    su = !1;
  }
function _h(e, t, n, r, o, i, l, u, s) {
  var a = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, a);
  } catch (m) {
    this.onError(m);
  }
}
var Er = !1,
  Zo = null,
  Jo = !1,
  au = null,
  Ph = {
    onError: function (e) {
      (Er = !0), (Zo = e);
    },
  };
function Th(e, t, n, r, o, i, l, u, s) {
  (Er = !1), (Zo = null), _h.apply(Ph, arguments);
}
function Rh(e, t, n, r, o, i, l, u, s) {
  if ((Th.apply(this, arguments), Er)) {
    if (Er) {
      var a = Zo;
      (Er = !1), (Zo = null);
    } else throw Error(C(198));
    Jo || ((Jo = !0), (au = a));
  }
}
function vn(e) {
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
function Sa(e) {
  if (vn(e) !== e) throw Error(C(188));
}
function $h(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = vn(e)), t === null)) throw Error(C(188));
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
      for (var l = !1, u = o.child; u; ) {
        if (u === n) {
          (l = !0), (n = o), (r = i);
          break;
        }
        if (u === r) {
          (l = !0), (r = o), (n = i);
          break;
        }
        u = u.sibling;
      }
      if (!l) {
        for (u = i.child; u; ) {
          if (u === n) {
            (l = !0), (n = i), (r = o);
            break;
          }
          if (u === r) {
            (l = !0), (r = i), (n = o);
            break;
          }
          u = u.sibling;
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
  return (e = $h(e)), e !== null ? kf(e) : null;
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
var Cf = He.unstable_scheduleCallback,
  xa = He.unstable_cancelCallback,
  zh = He.unstable_shouldYield,
  Oh = He.unstable_requestPaint,
  re = He.unstable_now,
  Nh = He.unstable_getCurrentPriorityLevel,
  os = He.unstable_ImmediatePriority,
  Ef = He.unstable_UserBlockingPriority,
  qo = He.unstable_NormalPriority,
  Mh = He.unstable_LowPriority,
  _f = He.unstable_IdlePriority,
  Ci = null,
  vt = null;
function Lh(e) {
  if (vt && typeof vt.onCommitFiberRoot == "function")
    try {
      vt.onCommitFiberRoot(Ci, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var st = Math.clz32 ? Math.clz32 : Fh,
  Ih = Math.log,
  Ah = Math.LN2;
function Fh(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Ih(e) / Ah) | 0)) | 0;
}
var yo = 64,
  vo = 4194304;
function Sr(e) {
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
function ei(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    l = n & 268435455;
  if (l !== 0) {
    var u = l & ~o;
    u !== 0 ? (r = Sr(u)) : ((i &= l), i !== 0 && (r = Sr(i)));
  } else (l = n & ~o), l !== 0 ? (r = Sr(l)) : i !== 0 && (r = Sr(i));
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
      (n = 31 - st(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function Dh(e, t) {
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
function jh(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var l = 31 - st(i),
      u = 1 << l,
      s = o[l];
    s === -1
      ? (!(u & n) || u & r) && (o[l] = Dh(u, t))
      : s <= t && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function cu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Pf() {
  var e = yo;
  return (yo <<= 1), !(yo & 4194240) && (yo = 64), e;
}
function Sl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function no(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - st(t)),
    (e[t] = n);
}
function Bh(e, t) {
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
    var o = 31 - st(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function is(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - st(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var U = 0;
function Tf(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rf,
  ls,
  $f,
  zf,
  Of,
  fu = !1,
  wo = [],
  Wt = null,
  bt = null,
  Vt = null,
  Fr = new Map(),
  Dr = new Map(),
  Dt = [],
  Uh =
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
      Fr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Dr.delete(t.pointerId);
  }
}
function ar(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = oo(t)), t !== null && ls(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function Wh(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Wt = ar(Wt, e, t, n, r, o)), !0;
    case "dragenter":
      return (bt = ar(bt, e, t, n, r, o)), !0;
    case "mouseover":
      return (Vt = ar(Vt, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return Fr.set(i, ar(Fr.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), Dr.set(i, ar(Dr.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function Nf(e) {
  var t = on(e.target);
  if (t !== null) {
    var n = vn(t);
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
function Ao(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = du(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (lu = r), n.target.dispatchEvent(r), (lu = null);
    } else return (t = oo(n)), t !== null && ls(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ca(e, t, n) {
  Ao(e) && n.delete(t);
}
function bh() {
  (fu = !1),
    Wt !== null && Ao(Wt) && (Wt = null),
    bt !== null && Ao(bt) && (bt = null),
    Vt !== null && Ao(Vt) && (Vt = null),
    Fr.forEach(Ca),
    Dr.forEach(Ca);
}
function cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    fu ||
      ((fu = !0),
      He.unstable_scheduleCallback(He.unstable_NormalPriority, bh)));
}
function jr(e) {
  function t(o) {
    return cr(o, e);
  }
  if (0 < wo.length) {
    cr(wo[0], e);
    for (var n = 1; n < wo.length; n++) {
      var r = wo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Wt !== null && cr(Wt, e),
      bt !== null && cr(bt, e),
      Vt !== null && cr(Vt, e),
      Fr.forEach(t),
      Dr.forEach(t),
      n = 0;
    n < Dt.length;
    n++
  )
    (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
    Nf(n), n.blockedOn === null && Dt.shift();
}
var Wn = Mt.ReactCurrentBatchConfig,
  ti = !0;
function Vh(e, t, n, r) {
  var o = U,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (U = 1), us(e, t, n, r);
  } finally {
    (U = o), (Wn.transition = i);
  }
}
function Hh(e, t, n, r) {
  var o = U,
    i = Wn.transition;
  Wn.transition = null;
  try {
    (U = 4), us(e, t, n, r);
  } finally {
    (U = o), (Wn.transition = i);
  }
}
function us(e, t, n, r) {
  if (ti) {
    var o = du(e, t, n, r);
    if (o === null) zl(e, t, r, ni, n), ka(e, r);
    else if (Wh(o, e, t, n, r)) r.stopPropagation();
    else if ((ka(e, r), t & 4 && -1 < Uh.indexOf(e))) {
      for (; o !== null; ) {
        var i = oo(o);
        if (
          (i !== null && Rf(i),
          (i = du(e, t, n, r)),
          i === null && zl(e, t, r, ni, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else zl(e, t, r, null, n);
  }
}
var ni = null;
function du(e, t, n, r) {
  if (((ni = null), (e = rs(r)), (e = on(e)), e !== null))
    if (((t = vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Sf(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (ni = e), null;
}
function Mf(e) {
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
        case os:
          return 1;
        case Ef:
          return 4;
        case qo:
        case Mh:
          return 16;
        case _f:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Bt = null,
  ss = null,
  Fo = null;
function Lf() {
  if (Fo) return Fo;
  var e,
    t = ss,
    n = t.length,
    r,
    o = "value" in Bt ? Bt.value : Bt.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var l = n - e;
  for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
  return (Fo = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Do(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function So() {
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
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? So
        : Ea),
      (this.isPropagationStopped = Ea),
      this
    );
  }
  return (
    q(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = So));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = So));
      },
      persist: function () {},
      isPersistent: So,
    }),
    t
  );
}
var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  as = Qe(rr),
  ro = q({}, rr, { view: 0, detail: 0 }),
  Kh = Qe(ro),
  xl,
  kl,
  fr,
  Ei = q({}, ro, {
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
    getModifierState: cs,
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
        : (e !== fr &&
            (fr && e.type === "mousemove"
              ? ((xl = e.screenX - fr.screenX), (kl = e.screenY - fr.screenY))
              : (kl = xl = 0),
            (fr = e)),
          xl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : kl;
    },
  }),
  _a = Qe(Ei),
  Qh = q({}, Ei, { dataTransfer: 0 }),
  Gh = Qe(Qh),
  Yh = q({}, ro, { relatedTarget: 0 }),
  Cl = Qe(Yh),
  Xh = q({}, rr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Zh = Qe(Xh),
  Jh = q({}, rr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  qh = Qe(Jh),
  em = q({}, rr, { data: 0 }),
  Pa = Qe(em),
  tm = {
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
  nm = {
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
  rm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function om(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = rm[e]) ? !!t[e] : !1;
}
function cs() {
  return om;
}
var im = q({}, ro, {
    key: function (e) {
      if (e.key) {
        var t = tm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Do(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? nm[e.keyCode] || "Unidentified"
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
    getModifierState: cs,
    charCode: function (e) {
      return e.type === "keypress" ? Do(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Do(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  lm = Qe(im),
  um = q({}, Ei, {
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
  Ta = Qe(um),
  sm = q({}, ro, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: cs,
  }),
  am = Qe(sm),
  cm = q({}, rr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  fm = Qe(cm),
  dm = q({}, Ei, {
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
  pm = Qe(dm),
  hm = [9, 13, 27, 32],
  fs = Rt && "CompositionEvent" in window,
  _r = null;
Rt && "documentMode" in document && (_r = document.documentMode);
var mm = Rt && "TextEvent" in window && !_r,
  If = Rt && (!fs || (_r && 8 < _r && 11 >= _r)),
  Ra = String.fromCharCode(32),
  $a = !1;
function Af(e, t) {
  switch (e) {
    case "keyup":
      return hm.indexOf(t.keyCode) !== -1;
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
var $n = !1;
function gm(e, t) {
  switch (e) {
    case "compositionend":
      return Ff(t);
    case "keypress":
      return t.which !== 32 ? null : (($a = !0), Ra);
    case "textInput":
      return (e = t.data), e === Ra && $a ? null : e;
    default:
      return null;
  }
}
function ym(e, t) {
  if ($n)
    return e === "compositionend" || (!fs && Af(e, t))
      ? ((e = Lf()), (Fo = ss = Bt = null), ($n = !1), e)
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
      return If && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var vm = {
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
  return t === "input" ? !!vm[e.type] : t === "textarea";
}
function Df(e, t, n, r) {
  mf(r),
    (t = ri(t, "onChange")),
    0 < t.length &&
      ((n = new as("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Pr = null,
  Br = null;
function wm(e) {
  Yf(e, 0);
}
function _i(e) {
  var t = Nn(e);
  if (sf(t)) return e;
}
function Sm(e, t) {
  if (e === "change") return t;
}
var jf = !1;
if (Rt) {
  var El;
  if (Rt) {
    var _l = "oninput" in document;
    if (!_l) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"),
        (_l = typeof Oa.oninput == "function");
    }
    El = _l;
  } else El = !1;
  jf = El && (!document.documentMode || 9 < document.documentMode);
}
function Na() {
  Pr && (Pr.detachEvent("onpropertychange", Bf), (Br = Pr = null));
}
function Bf(e) {
  if (e.propertyName === "value" && _i(Br)) {
    var t = [];
    Df(t, Br, e, rs(e)), wf(wm, t);
  }
}
function xm(e, t, n) {
  e === "focusin"
    ? (Na(), (Pr = t), (Br = n), Pr.attachEvent("onpropertychange", Bf))
    : e === "focusout" && Na();
}
function km(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return _i(Br);
}
function Cm(e, t) {
  if (e === "click") return _i(t);
}
function Em(e, t) {
  if (e === "input" || e === "change") return _i(t);
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
function Ma(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Ma(e);
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
    n = Ma(n);
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
  for (var e = window, t = Xo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xo(e.document);
  }
  return t;
}
function ds(e) {
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
function Pm(e) {
  var t = Wf(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Uf(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ds(n)) {
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
var Tm = Rt && "documentMode" in document && 11 >= document.documentMode,
  zn = null,
  pu = null,
  Tr = null,
  hu = !1;
function Ia(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  hu ||
    zn == null ||
    zn !== Xo(r) ||
    ((r = zn),
    "selectionStart" in r && ds(r)
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
      (r = ri(pu, "onSelect")),
      0 < r.length &&
        ((t = new as("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zn))));
}
function xo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var On = {
    animationend: xo("Animation", "AnimationEnd"),
    animationiteration: xo("Animation", "AnimationIteration"),
    animationstart: xo("Animation", "AnimationStart"),
    transitionend: xo("Transition", "TransitionEnd"),
  },
  Pl = {},
  bf = {};
Rt &&
  ((bf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete On.animationend.animation,
    delete On.animationiteration.animation,
    delete On.animationstart.animation),
  "TransitionEvent" in window || delete On.transitionend.transition);
function Pi(e) {
  if (Pl[e]) return Pl[e];
  if (!On[e]) return e;
  var t = On[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in bf) return (Pl[e] = t[n]);
  return e;
}
var Vf = Pi("animationend"),
  Hf = Pi("animationiteration"),
  Kf = Pi("animationstart"),
  Qf = Pi("transitionend"),
  Gf = new Map(),
  Aa =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Jt(e, t) {
  Gf.set(e, t), yn(t, [e]);
}
for (var Tl = 0; Tl < Aa.length; Tl++) {
  var Rl = Aa[Tl],
    Rm = Rl.toLowerCase(),
    $m = Rl[0].toUpperCase() + Rl.slice(1);
  Jt(Rm, "on" + $m);
}
Jt(Vf, "onAnimationEnd");
Jt(Hf, "onAnimationIteration");
Jt(Kf, "onAnimationStart");
Jt("dblclick", "onDoubleClick");
Jt("focusin", "onFocus");
Jt("focusout", "onBlur");
Jt(Qf, "onTransitionEnd");
Qn("onMouseEnter", ["mouseout", "mouseover"]);
Qn("onMouseLeave", ["mouseout", "mouseover"]);
Qn("onPointerEnter", ["pointerout", "pointerover"]);
Qn("onPointerLeave", ["pointerout", "pointerover"]);
yn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
yn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
yn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
yn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
yn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var xr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function Fa(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Rh(r, t, void 0, e), (e.currentTarget = null);
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
          var u = r[l],
            s = u.instance,
            a = u.currentTarget;
          if (((u = u.listener), s !== i && o.isPropagationStopped())) break e;
          Fa(o, u, a), (i = s);
        }
      else
        for (l = 0; l < r.length; l++) {
          if (
            ((u = r[l]),
            (s = u.instance),
            (a = u.currentTarget),
            (u = u.listener),
            s !== i && o.isPropagationStopped())
          )
            break e;
          Fa(o, u, a), (i = s);
        }
    }
  }
  if (Jo) throw ((e = au), (Jo = !1), (au = null), e);
}
function H(e, t) {
  var n = t[wu];
  n === void 0 && (n = t[wu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Xf(t, e, 2, !1), n.add(r));
}
function $l(e, t, n) {
  var r = 0;
  t && (r |= 4), Xf(n, e, r, t);
}
var ko = "_reactListening" + Math.random().toString(36).slice(2);
function Wr(e) {
  if (!e[ko]) {
    (e[ko] = !0),
      nf.forEach(function (n) {
        n !== "selectionchange" && (zm.has(n) || $l(n, !1, e), $l(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ko] || ((t[ko] = !0), $l("selectionchange", !1, t));
  }
}
function Xf(e, t, n, r) {
  switch (Mf(t)) {
    case 1:
      var o = Vh;
      break;
    case 4:
      o = Hh;
      break;
    default:
      o = us;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !su ||
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
function zl(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var l = r.tag;
      if (l === 3 || l === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || (u.nodeType === 8 && u.parentNode === o)) break;
        if (l === 4)
          for (l = r.return; l !== null; ) {
            var s = l.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = l.stateNode.containerInfo),
              s === o || (s.nodeType === 8 && s.parentNode === o))
            )
              return;
            l = l.return;
          }
        for (; u !== null; ) {
          if (((l = on(u)), l === null)) return;
          if (((s = l.tag), s === 5 || s === 6)) {
            r = i = l;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  wf(function () {
    var a = i,
      m = rs(n),
      h = [];
    e: {
      var d = Gf.get(e);
      if (d !== void 0) {
        var w = as,
          y = e;
        switch (e) {
          case "keypress":
            if (Do(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = lm;
            break;
          case "focusin":
            (y = "focus"), (w = Cl);
            break;
          case "focusout":
            (y = "blur"), (w = Cl);
            break;
          case "beforeblur":
          case "afterblur":
            w = Cl;
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
            w = Gh;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = am;
            break;
          case Vf:
          case Hf:
          case Kf:
            w = Zh;
            break;
          case Qf:
            w = fm;
            break;
          case "scroll":
            w = Kh;
            break;
          case "wheel":
            w = pm;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = qh;
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
          E = !g && e === "scroll",
          f = g ? (d !== null ? d + "Capture" : null) : d;
        g = [];
        for (var c = a, p; c !== null; ) {
          p = c;
          var v = p.stateNode;
          if (
            (p.tag === 5 &&
              v !== null &&
              ((p = v),
              f !== null && ((v = Ar(c, f)), v != null && g.push(br(c, v, p)))),
            E)
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
            n !== lu &&
            (y = n.relatedTarget || n.fromElement) &&
            (on(y) || y[$t]))
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
              (y = y ? on(y) : null),
              y !== null &&
                ((E = vn(y)), y !== E || (y.tag !== 5 && y.tag !== 6)) &&
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
            (E = w == null ? d : Nn(w)),
            (p = y == null ? d : Nn(y)),
            (d = new g(v, c + "leave", w, n, m)),
            (d.target = E),
            (d.relatedTarget = p),
            (v = null),
            on(m) === a &&
              ((g = new g(f, c + "enter", y, n, m)),
              (g.target = p),
              (g.relatedTarget = E),
              (v = g)),
            (E = v),
            w && y)
          )
            t: {
              for (g = w, f = y, c = 0, p = g; p; p = Sn(p)) c++;
              for (p = 0, v = f; v; v = Sn(v)) p++;
              for (; 0 < c - p; ) (g = Sn(g)), c--;
              for (; 0 < p - c; ) (f = Sn(f)), p--;
              for (; c--; ) {
                if (g === f || (f !== null && g === f.alternate)) break t;
                (g = Sn(g)), (f = Sn(f));
              }
              g = null;
            }
          else g = null;
          w !== null && Da(h, d, w, g, !1),
            y !== null && E !== null && Da(h, E, y, g, !0);
        }
      }
      e: {
        if (
          ((d = a ? Nn(a) : window),
          (w = d.nodeName && d.nodeName.toLowerCase()),
          w === "select" || (w === "input" && d.type === "file"))
        )
          var S = Sm;
        else if (za(d))
          if (jf) S = Em;
          else {
            S = km;
            var k = xm;
          }
        else
          (w = d.nodeName) &&
            w.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (S = Cm);
        if (S && (S = S(e, a))) {
          Df(h, S, n, m);
          break e;
        }
        k && k(e, d, a),
          e === "focusout" &&
            (k = d._wrapperState) &&
            k.controlled &&
            d.type === "number" &&
            tu(d, "number", d.value);
      }
      switch (((k = a ? Nn(a) : window), e)) {
        case "focusin":
          (za(k) || k.contentEditable === "true") &&
            ((zn = k), (pu = a), (Tr = null));
          break;
        case "focusout":
          Tr = pu = zn = null;
          break;
        case "mousedown":
          hu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (hu = !1), Ia(h, n, m);
          break;
        case "selectionchange":
          if (Tm) break;
        case "keydown":
        case "keyup":
          Ia(h, n, m);
      }
      var x;
      if (fs)
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
        $n
          ? Af(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (If &&
          n.locale !== "ko" &&
          ($n || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && $n && (x = Lf())
            : ((Bt = m),
              (ss = "value" in Bt ? Bt.value : Bt.textContent),
              ($n = !0))),
        (k = ri(a, T)),
        0 < k.length &&
          ((T = new Pa(T, e, null, n, m)),
          h.push({ event: T, listeners: k }),
          x ? (T.data = x) : ((x = Ff(n)), x !== null && (T.data = x)))),
        (x = mm ? gm(e, n) : ym(e, n)) &&
          ((a = ri(a, "onBeforeInput")),
          0 < a.length &&
            ((m = new Pa("onBeforeInput", "beforeinput", null, n, m)),
            h.push({ event: m, listeners: a }),
            (m.data = x)));
    }
    Yf(h, t);
  });
}
function br(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ri(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = Ar(e, n)),
      i != null && r.unshift(br(e, i, o)),
      (i = Ar(e, t)),
      i != null && r.push(br(e, i, o))),
      (e = e.return);
  }
  return r;
}
function Sn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Da(e, t, n, r, o) {
  for (var i = t._reactName, l = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      a = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      a !== null &&
      ((u = a),
      o
        ? ((s = Ar(n, i)), s != null && l.unshift(br(n, s, u)))
        : o || ((s = Ar(n, i)), s != null && l.push(br(n, s, u)))),
      (n = n.return);
  }
  l.length !== 0 && e.push({ event: t, listeners: l });
}
var Om = /\r\n?/g,
  Nm = /\u0000|\uFFFD/g;
function ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Om,
      `
`
    )
    .replace(Nm, "");
}
function Co(e, t, n) {
  if (((t = ja(t)), ja(e) !== t && n)) throw Error(C(425));
}
function oi() {}
var mu = null,
  gu = null;
function yu(e, t) {
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
var vu = typeof setTimeout == "function" ? setTimeout : void 0,
  Mm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Ba = typeof Promise == "function" ? Promise : void 0,
  Lm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Ba < "u"
      ? function (e) {
          return Ba.resolve(null).then(e).catch(Im);
        }
      : vu;
function Im(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ol(e, t) {
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
var or = Math.random().toString(36).slice(2),
  gt = "__reactFiber$" + or,
  Vr = "__reactProps$" + or,
  $t = "__reactContainer$" + or,
  wu = "__reactEvents$" + or,
  Am = "__reactListeners$" + or,
  Fm = "__reactHandles$" + or;
function on(e) {
  var t = e[gt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[$t] || n[gt])) {
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
function oo(e) {
  return (
    (e = e[gt] || e[$t]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function Ti(e) {
  return e[Vr] || null;
}
var Su = [],
  Mn = -1;
function qt(e) {
  return { current: e };
}
function K(e) {
  0 > Mn || ((e.current = Su[Mn]), (Su[Mn] = null), Mn--);
}
function V(e, t) {
  Mn++, (Su[Mn] = e.current), (e.current = t);
}
var Zt = {},
  _e = qt(Zt),
  Ie = qt(!1),
  fn = Zt;
function Gn(e, t) {
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
function ii() {
  K(Ie), K(_e);
}
function Wa(e, t, n) {
  if (_e.current !== Zt) throw Error(C(168));
  V(_e, t), V(Ie, n);
}
function Zf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(C(108, xh(e) || "Unknown", o));
  return q({}, n, r);
}
function li(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Zt),
    (fn = _e.current),
    V(_e, e),
    V(Ie, Ie.current),
    !0
  );
}
function ba(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = Zf(e, t, fn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      K(Ie),
      K(_e),
      V(_e, e))
    : K(Ie),
    V(Ie, n);
}
var Ct = null,
  Ri = !1,
  Nl = !1;
function Jf(e) {
  Ct === null ? (Ct = [e]) : Ct.push(e);
}
function Dm(e) {
  (Ri = !0), Jf(e);
}
function en() {
  if (!Nl && Ct !== null) {
    Nl = !0;
    var e = 0,
      t = U;
    try {
      var n = Ct;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Ct = null), (Ri = !1);
    } catch (o) {
      throw (Ct !== null && (Ct = Ct.slice(e + 1)), Cf(os, en), o);
    } finally {
      (U = t), (Nl = !1);
    }
  }
  return null;
}
var Ln = [],
  In = 0,
  ui = null,
  si = 0,
  Ze = [],
  Je = 0,
  dn = null,
  Et = 1,
  _t = "";
function tn(e, t) {
  (Ln[In++] = si), (Ln[In++] = ui), (ui = e), (si = t);
}
function qf(e, t, n) {
  (Ze[Je++] = Et), (Ze[Je++] = _t), (Ze[Je++] = dn), (dn = e);
  var r = Et;
  e = _t;
  var o = 32 - st(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - st(t) + o;
  if (30 < i) {
    var l = o - (o % 5);
    (i = (r & ((1 << l) - 1)).toString(32)),
      (r >>= l),
      (o -= l),
      (Et = (1 << (32 - st(t) + o)) | (n << o) | r),
      (_t = i + e);
  } else (Et = (1 << i) | (n << o) | r), (_t = e);
}
function ps(e) {
  e.return !== null && (tn(e, 1), qf(e, 1, 0));
}
function hs(e) {
  for (; e === ui; )
    (ui = Ln[--In]), (Ln[In] = null), (si = Ln[--In]), (Ln[In] = null);
  for (; e === dn; )
    (dn = Ze[--Je]),
      (Ze[Je] = null),
      (_t = Ze[--Je]),
      (Ze[Je] = null),
      (Et = Ze[--Je]),
      (Ze[Je] = null);
}
var be = null,
  We = null,
  G = !1,
  ut = null;
function ed(e, t) {
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
          ? ((n = dn !== null ? { id: Et, overflow: _t } : null),
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
function xu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function ku(e) {
  if (G) {
    var t = We;
    if (t) {
      var n = t;
      if (!Va(e, t)) {
        if (xu(e)) throw Error(C(418));
        t = Ht(n.nextSibling);
        var r = be;
        t && Va(e, t)
          ? ed(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (G = !1), (be = e));
      }
    } else {
      if (xu(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (G = !1), (be = e);
    }
  }
}
function Ha(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  be = e;
}
function Eo(e) {
  if (e !== be) return !1;
  if (!G) return Ha(e), (G = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !yu(e.type, e.memoizedProps))),
    t && (t = We))
  ) {
    if (xu(e)) throw (td(), Error(C(418)));
    for (; t; ) ed(e, t), (t = Ht(t.nextSibling));
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
function td() {
  for (var e = We; e; ) e = Ht(e.nextSibling);
}
function Yn() {
  (We = be = null), (G = !1);
}
function ms(e) {
  ut === null ? (ut = [e]) : ut.push(e);
}
var jm = Mt.ReactCurrentBatchConfig;
function it(e, t) {
  if (e && e.defaultProps) {
    (t = q({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ai = qt(null),
  ci = null,
  An = null,
  gs = null;
function ys() {
  gs = An = ci = null;
}
function vs(e) {
  var t = ai.current;
  K(ai), (e._currentValue = t);
}
function Cu(e, t, n) {
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
  (ci = e),
    (gs = An = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Le = !0), (e.firstContext = null));
}
function tt(e) {
  var t = e._currentValue;
  if (gs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), An === null)) {
      if (ci === null) throw Error(C(308));
      (An = e), (ci.dependencies = { lanes: 0, firstContext: e });
    } else An = An.next = e;
  return t;
}
var ln = null;
function ws(e) {
  ln === null ? (ln = [e]) : ln.push(e);
}
function nd(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), ws(t)) : ((n.next = o.next), (o.next = n)),
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
var Ft = !1;
function Ss(e) {
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
function Pt(e, t) {
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
      zt(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), ws(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    zt(e, n)
  );
}
function jo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), is(e, n);
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
function fi(e, t, n, r) {
  var o = e.updateQueue;
  Ft = !1;
  var i = o.firstBaseUpdate,
    l = o.lastBaseUpdate,
    u = o.shared.pending;
  if (u !== null) {
    o.shared.pending = null;
    var s = u,
      a = s.next;
    (s.next = null), l === null ? (i = a) : (l.next = a), (l = s);
    var m = e.alternate;
    m !== null &&
      ((m = m.updateQueue),
      (u = m.lastBaseUpdate),
      u !== l &&
        (u === null ? (m.firstBaseUpdate = a) : (u.next = a),
        (m.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = o.baseState;
    (l = 0), (m = a = s = null), (u = i);
    do {
      var d = u.lane,
        w = u.eventTime;
      if ((r & d) === d) {
        m !== null &&
          (m = m.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var y = e,
            g = u;
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
              h = q({}, h, d);
              break e;
            case 2:
              Ft = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (d = o.effects),
          d === null ? (o.effects = [u]) : d.push(u));
      } else
        (w = {
          eventTime: w,
          lane: d,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          m === null ? ((a = m = w), (s = h)) : (m = m.next = w),
          (l |= d);
      if (((u = u.next), u === null)) {
        if (((u = o.shared.pending), u === null)) break;
        (d = u),
          (u = d.next),
          (d.next = null),
          (o.lastBaseUpdate = d),
          (o.shared.pending = null);
      }
    } while (1);
    if (
      (m === null && (s = h),
      (o.baseState = s),
      (o.firstBaseUpdate = a),
      (o.lastBaseUpdate = m),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (l |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (hn |= l), (e.lanes = l), (e.memoizedState = h);
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
var od = new tf.Component().refs;
function Eu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : q({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var $i = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      o = Gt(e),
      i = Pt(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, o)),
      t !== null && (at(t, e, o, r), jo(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = $e(),
      o = Gt(e),
      i = Pt(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Kt(e, i, o)),
      t !== null && (at(t, e, o, r), jo(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = $e(),
      r = Gt(e),
      o = Pt(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Kt(e, o, r)),
      t !== null && (at(t, e, r, n), jo(t, e, r));
  },
};
function Ga(e, t, n, r, o, i, l) {
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
    o = Zt,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = tt(i))
      : ((o = Ae(t) ? fn : _e.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? Gn(e, o) : Zt)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = $i),
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
    t.state !== e && $i.enqueueReplaceState(t, t.state, null);
}
function _u(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = od), Ss(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = tt(i))
    : ((i = Ae(t) ? fn : _e.current), (o.context = Gn(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Eu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && $i.enqueueReplaceState(o, o.state, null),
      fi(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function dr(e, t, n) {
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
            var u = o.refs;
            u === od && (u = o.refs = {}),
              l === null ? delete u[i] : (u[i] = l);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function _o(e, t) {
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
function ld(e) {
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
  function u(f, c, p, v) {
    return c === null || c.tag !== 6
      ? ((c = jl(p, f.mode, v)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function s(f, c, p, v) {
    var S = p.type;
    return S === Rn
      ? m(f, c, p.props.children, v, p.key)
      : c !== null &&
        (c.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === At &&
            Xa(S) === c.type))
      ? ((v = o(c, p.props)), (v.ref = dr(f, c, p)), (v.return = f), v)
      : ((v = Ho(p.type, p.key, p.props, null, f.mode, v)),
        (v.ref = dr(f, c, p)),
        (v.return = f),
        v);
  }
  function a(f, c, p, v) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== p.containerInfo ||
      c.stateNode.implementation !== p.implementation
      ? ((c = Bl(p, f.mode, v)), (c.return = f), c)
      : ((c = o(c, p.children || [])), (c.return = f), c);
  }
  function m(f, c, p, v, S) {
    return c === null || c.tag !== 7
      ? ((c = cn(p, f.mode, v, S)), (c.return = f), c)
      : ((c = o(c, p)), (c.return = f), c);
  }
  function h(f, c, p) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = jl("" + c, f.mode, p)), (c.return = f), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case ho:
          return (
            (p = Ho(c.type, c.key, c.props, null, f.mode, p)),
            (p.ref = dr(f, null, c)),
            (p.return = f),
            p
          );
        case Tn:
          return (c = Bl(c, f.mode, p)), (c.return = f), c;
        case At:
          var v = c._init;
          return h(f, v(c._payload), p);
      }
      if (wr(c) || ur(c))
        return (c = cn(c, f.mode, p, null)), (c.return = f), c;
      _o(f, c);
    }
    return null;
  }
  function d(f, c, p, v) {
    var S = c !== null ? c.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return S !== null ? null : u(f, c, "" + p, v);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ho:
          return p.key === S ? s(f, c, p, v) : null;
        case Tn:
          return p.key === S ? a(f, c, p, v) : null;
        case At:
          return (S = p._init), d(f, c, S(p._payload), v);
      }
      if (wr(p) || ur(p)) return S !== null ? null : m(f, c, p, v, null);
      _o(f, p);
    }
    return null;
  }
  function w(f, c, p, v, S) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(p) || null), u(c, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ho:
          return (f = f.get(v.key === null ? p : v.key) || null), s(c, f, v, S);
        case Tn:
          return (f = f.get(v.key === null ? p : v.key) || null), a(c, f, v, S);
        case At:
          var k = v._init;
          return w(f, c, p, k(v._payload), S);
      }
      if (wr(v) || ur(v)) return (f = f.get(p) || null), m(c, f, v, S, null);
      _o(c, v);
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
    if (T === p.length) return n(f, x), G && tn(f, T), S;
    if (x === null) {
      for (; T < p.length; T++)
        (x = h(f, p[T], v)),
          x !== null &&
            ((c = i(x, c, T)), k === null ? (S = x) : (k.sibling = x), (k = x));
      return G && tn(f, T), S;
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
        x.forEach(function (D) {
          return t(f, D);
        }),
      G && tn(f, T),
      S
    );
  }
  function g(f, c, p, v) {
    var S = ur(p);
    if (typeof S != "function") throw Error(C(150));
    if (((p = S.call(p)), p == null)) throw Error(C(151));
    for (
      var k = (S = null), x = c, T = (c = 0), z = null, $ = p.next();
      x !== null && !$.done;
      T++, $ = p.next()
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
    if ($.done) return n(f, x), G && tn(f, T), S;
    if (x === null) {
      for (; !$.done; T++, $ = p.next())
        ($ = h(f, $.value, v)),
          $ !== null &&
            ((c = i($, c, T)), k === null ? (S = $) : (k.sibling = $), (k = $));
      return G && tn(f, T), S;
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
      G && tn(f, T),
      S
    );
  }
  function E(f, c, p, v) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Rn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case ho:
          e: {
            for (var S = p.key, k = c; k !== null; ) {
              if (k.key === S) {
                if (((S = p.type), S === Rn)) {
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
                    (c.ref = dr(f, k, p)),
                    (c.return = f),
                    (f = c);
                  break e;
                }
                n(f, k);
                break;
              } else t(f, k);
              k = k.sibling;
            }
            p.type === Rn
              ? ((c = cn(p.props.children, f.mode, v, p.key)),
                (c.return = f),
                (f = c))
              : ((v = Ho(p.type, p.key, p.props, null, f.mode, v)),
                (v.ref = dr(f, c, p)),
                (v.return = f),
                (f = v));
          }
          return l(f);
        case Tn:
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
            (c = Bl(p, f.mode, v)), (c.return = f), (f = c);
          }
          return l(f);
        case At:
          return (k = p._init), E(f, c, k(p._payload), v);
      }
      if (wr(p)) return y(f, c, p, v);
      if (ur(p)) return g(f, c, p, v);
      _o(f, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        c !== null && c.tag === 6
          ? (n(f, c.sibling), (c = o(c, p)), (c.return = f), (f = c))
          : (n(f, c), (c = jl(p, f.mode, v)), (c.return = f), (f = c)),
        l(f))
      : n(f, c);
  }
  return E;
}
var Xn = ld(!0),
  ud = ld(!1),
  io = {},
  wt = qt(io),
  Hr = qt(io),
  Kr = qt(io);
function un(e) {
  if (e === io) throw Error(C(174));
  return e;
}
function xs(e, t) {
  switch ((V(Kr, t), V(Hr, e), V(wt, io), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ru(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = ru(t, e));
  }
  K(wt), V(wt, t);
}
function Zn() {
  K(wt), K(Hr), K(Kr);
}
function sd(e) {
  un(Kr.current);
  var t = un(wt.current),
    n = ru(t, e.type);
  t !== n && (V(Hr, e), V(wt, n));
}
function ks(e) {
  Hr.current === e && (K(wt), K(Hr));
}
var Z = qt(0);
function di(e) {
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
function Cs() {
  for (var e = 0; e < Ml.length; e++)
    Ml[e]._workInProgressVersionPrimary = null;
  Ml.length = 0;
}
var Bo = Mt.ReactCurrentDispatcher,
  Ll = Mt.ReactCurrentBatchConfig,
  pn = 0,
  J = null,
  se = null,
  fe = null,
  pi = !1,
  Rr = !1,
  Qr = 0,
  Bm = 0;
function xe() {
  throw Error(C(321));
}
function Es(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ct(e[n], t[n])) return !1;
  return !0;
}
function _s(e, t, n, r, o, i) {
  if (
    ((pn = i),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bo.current = e === null || e.memoizedState === null ? Vm : Hm),
    (e = n(r, o)),
    Rr)
  ) {
    i = 0;
    do {
      if (((Rr = !1), (Qr = 0), 25 <= i)) throw Error(C(301));
      (i += 1),
        (fe = se = null),
        (t.updateQueue = null),
        (Bo.current = Km),
        (e = n(r, o));
    } while (Rr);
  }
  if (
    ((Bo.current = hi),
    (t = se !== null && se.next !== null),
    (pn = 0),
    (fe = se = J = null),
    (pi = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Ps() {
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
  return fe === null ? (J.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function nt() {
  if (se === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = fe === null ? J.memoizedState : fe.next;
  if (t !== null) (fe = t), (se = e);
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
      fe === null ? (J.memoizedState = fe = e) : (fe = fe.next = e);
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
    var u = (l = null),
      s = null,
      a = i;
    do {
      var m = a.lane;
      if ((pn & m) === m)
        s !== null &&
          (s = s.next =
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
        s === null ? ((u = s = h), (l = r)) : (s = s.next = h),
          (J.lanes |= m),
          (hn |= m);
      }
      a = a.next;
    } while (a !== null && a !== i);
    s === null ? (l = r) : (s.next = u),
      ct(r, t.memoizedState) || (Le = !0),
      (t.memoizedState = r),
      (t.baseState = l),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (J.lanes |= i), (hn |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Al(e) {
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
    ct(i, t.memoizedState) || (Le = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function ad() {}
function cd(e, t) {
  var n = J,
    r = nt(),
    o = t(),
    i = !ct(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Le = !0)),
    (r = r.queue),
    Ts(pd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yr(9, dd.bind(null, n, r, o, t), void 0, null),
      pe === null)
    )
      throw Error(C(349));
    pn & 30 || fd(n, t, o);
  }
  return o;
}
function fd(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
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
  var t = zt(e, 1);
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
      lastRenderedReducer: Gr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = bm.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function Yr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
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
function Uo(e, t, n, r) {
  var o = pt();
  (J.flags |= e),
    (o.memoizedState = Yr(1 | t, n, void 0, r === void 0 ? null : r));
}
function zi(e, t, n, r) {
  var o = nt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (se !== null) {
    var l = se.memoizedState;
    if (((i = l.destroy), r !== null && Es(r, l.deps))) {
      o.memoizedState = Yr(t, n, i, r);
      return;
    }
  }
  (J.flags |= e), (o.memoizedState = Yr(1 | t, n, i, r));
}
function Ja(e, t) {
  return Uo(8390656, 8, e, t);
}
function Ts(e, t) {
  return zi(2048, 8, e, t);
}
function yd(e, t) {
  return zi(4, 2, e, t);
}
function vd(e, t) {
  return zi(4, 4, e, t);
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
    (n = n != null ? n.concat([e]) : null), zi(4, 4, wd.bind(null, t, e), n)
  );
}
function Rs() {}
function xd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Es(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function kd(e, t) {
  var n = nt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Es(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Cd(e, t, n) {
  return pn & 21
    ? (ct(n, t) || ((n = Pf()), (J.lanes |= n), (hn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Le = !0)), (e.memoizedState = n));
}
function Um(e, t) {
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
function Ed() {
  return nt().memoizedState;
}
function Wm(e, t, n) {
  var r = Gt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    _d(e))
  )
    Pd(t, n);
  else if (((n = nd(e, t, n, r)), n !== null)) {
    var o = $e();
    at(n, e, r, o), Td(n, t, r);
  }
}
function bm(e, t, n) {
  var r = Gt(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (_d(e)) Pd(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var l = t.lastRenderedState,
          u = i(l, n);
        if (((o.hasEagerState = !0), (o.eagerState = u), ct(u, l))) {
          var s = t.interleaved;
          s === null
            ? ((o.next = o), ws(t))
            : ((o.next = s.next), (s.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = nd(e, t, o, r)),
      n !== null && ((o = $e()), at(n, e, r, o), Td(n, t, r));
  }
}
function _d(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function Pd(e, t) {
  Rr = pi = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Td(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), is(e, n);
  }
}
var hi = {
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
  Vm = {
    readContext: tt,
    useCallback: function (e, t) {
      return (pt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: tt,
    useEffect: Ja,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Uo(4194308, 4, wd.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Uo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Uo(4, 2, e, t);
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
        (e = e.dispatch = Wm.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = pt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Za,
    useDebugValue: Rs,
    useDeferredValue: function (e) {
      return (pt().memoizedState = e);
    },
    useTransition: function () {
      var e = Za(!1),
        t = e[0];
      return (e = Um.bind(null, e[1])), (pt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        o = pt();
      if (G) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), pe === null)) throw Error(C(349));
        pn & 30 || fd(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        Ja(pd.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Yr(9, dd.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = pt(),
        t = pe.identifierPrefix;
      if (G) {
        var n = _t,
          r = Et;
        (n = (r & ~(1 << (32 - st(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Bm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Hm = {
    readContext: tt,
    useCallback: xd,
    useContext: tt,
    useEffect: Ts,
    useImperativeHandle: Sd,
    useInsertionEffect: yd,
    useLayoutEffect: vd,
    useMemo: kd,
    useReducer: Il,
    useRef: gd,
    useState: function () {
      return Il(Gr);
    },
    useDebugValue: Rs,
    useDeferredValue: function (e) {
      var t = nt();
      return Cd(t, se.memoizedState, e);
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
  Km = {
    readContext: tt,
    useCallback: xd,
    useContext: tt,
    useEffect: Ts,
    useImperativeHandle: Sd,
    useInsertionEffect: yd,
    useLayoutEffect: vd,
    useMemo: kd,
    useReducer: Al,
    useRef: gd,
    useState: function () {
      return Al(Gr);
    },
    useDebugValue: Rs,
    useDeferredValue: function (e) {
      var t = nt();
      return se === null ? (t.memoizedState = e) : Cd(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Al(Gr)[0],
        t = nt().memoizedState;
      return [e, t];
    },
    useMutableSource: ad,
    useSyncExternalStore: cd,
    useId: Ed,
    unstable_isNewReconciler: !1,
  };
function Jn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Sh(r)), (r = r.return);
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
function Fl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Pu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Qm = typeof WeakMap == "function" ? WeakMap : Map;
function Rd(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      gi || ((gi = !0), (Au = r)), Pu(e, t);
    }),
    n
  );
}
function $d(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        Pu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Pu(e, t),
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
    r = e.pingCache = new Qm();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = u0.bind(null, e, t, n)), t.then(e, e));
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
              : ((t = Pt(-1, 1)), (t.tag = 2), Kt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Gm = Mt.ReactCurrentOwner,
  Le = !1;
function Re(e, t, n, r) {
  t.child = e === null ? ud(t, null, n, r) : Xn(t, e.child, n, r);
}
function nc(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    bn(t, o),
    (r = _s(e, t, n, r, i, o)),
    (n = Ps()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ot(e, t, o))
      : (G && n && ps(t), (t.flags |= 1), Re(e, t, r, o), t.child)
  );
}
function rc(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !As(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), zd(e, t, i, r, o))
      : ((e = Ho(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var l = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Ur), n(l, r) && e.ref === t.ref)
    )
      return Ot(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Yt(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function zd(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ur(i, r) && e.ref === t.ref)
      if (((Le = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Le = !0);
      else return (t.lanes = e.lanes), Ot(e, t, o);
  }
  return Tu(e, t, n, r, o);
}
function Od(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(Dn, Be),
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
          V(Dn, Be),
          (Be |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        V(Dn, Be),
        (Be |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(Dn, Be),
      (Be |= r);
  return Re(e, t, o, n), t.child;
}
function Nd(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Tu(e, t, n, r, o) {
  var i = Ae(n) ? fn : _e.current;
  return (
    (i = Gn(t, i)),
    bn(t, o),
    (n = _s(e, t, n, r, i, o)),
    (r = Ps()),
    e !== null && !Le
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        Ot(e, t, o))
      : (G && r && ps(t), (t.flags |= 1), Re(e, t, n, o), t.child)
  );
}
function oc(e, t, n, r, o) {
  if (Ae(n)) {
    var i = !0;
    li(t);
  } else i = !1;
  if ((bn(t, o), t.stateNode === null))
    Wo(e, t), id(t, n, r), _u(t, n, r, o), (r = !0);
  else if (e === null) {
    var l = t.stateNode,
      u = t.memoizedProps;
    l.props = u;
    var s = l.context,
      a = n.contextType;
    typeof a == "object" && a !== null
      ? (a = tt(a))
      : ((a = Ae(n) ? fn : _e.current), (a = Gn(t, a)));
    var m = n.getDerivedStateFromProps,
      h =
        typeof m == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== r || s !== a) && Ya(t, l, r, a)),
      (Ft = !1);
    var d = t.memoizedState;
    (l.state = d),
      fi(t, r, l, o),
      (s = t.memoizedState),
      u !== r || d !== s || Ie.current || Ft
        ? (typeof m == "function" && (Eu(t, n, m, r), (s = t.memoizedState)),
          (u = Ft || Ga(t, n, u, r, d, s, a))
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
              (t.memoizedState = s)),
          (l.props = r),
          (l.state = s),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (l = t.stateNode),
      rd(e, t),
      (u = t.memoizedProps),
      (a = t.type === t.elementType ? u : it(t.type, u)),
      (l.props = a),
      (h = t.pendingProps),
      (d = l.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = tt(s))
        : ((s = Ae(n) ? fn : _e.current), (s = Gn(t, s)));
    var w = n.getDerivedStateFromProps;
    (m =
      typeof w == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function") ||
      (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
        typeof l.componentWillReceiveProps != "function") ||
      ((u !== h || d !== s) && Ya(t, l, r, s)),
      (Ft = !1),
      (d = t.memoizedState),
      (l.state = d),
      fi(t, r, l, o);
    var y = t.memoizedState;
    u !== h || d !== y || Ie.current || Ft
      ? (typeof w == "function" && (Eu(t, n, w, r), (y = t.memoizedState)),
        (a = Ft || Ga(t, n, a, r, d, y, s) || !1)
          ? (m ||
              (typeof l.UNSAFE_componentWillUpdate != "function" &&
                typeof l.componentWillUpdate != "function") ||
              (typeof l.componentWillUpdate == "function" &&
                l.componentWillUpdate(r, y, s),
              typeof l.UNSAFE_componentWillUpdate == "function" &&
                l.UNSAFE_componentWillUpdate(r, y, s)),
            typeof l.componentDidUpdate == "function" && (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof l.componentDidUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof l.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (l.props = r),
        (l.state = y),
        (l.context = s),
        (r = a))
      : (typeof l.componentDidUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ru(e, t, n, r, i, o);
}
function Ru(e, t, n, r, o, i) {
  Nd(e, t);
  var l = (t.flags & 128) !== 0;
  if (!r && !l) return o && ba(t, n, !1), Ot(e, t, i);
  (r = t.stateNode), (Gm.current = t);
  var u =
    l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && l
      ? ((t.child = Xn(t, e.child, null, i)), (t.child = Xn(t, null, u, i)))
      : Re(e, t, u, i),
    (t.memoizedState = r.state),
    o && ba(t, n, !0),
    t.child
  );
}
function Md(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Wa(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Wa(e, t.context, !1),
    xs(e, t.containerInfo);
}
function ic(e, t, n, r, o) {
  return Yn(), ms(o), (t.flags |= 256), Re(e, t, n, r), t.child;
}
var $u = { dehydrated: null, treeContext: null, retryLane: 0 };
function zu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ld(e, t, n) {
  var r = t.pendingProps,
    o = Z.current,
    i = !1,
    l = (t.flags & 128) !== 0,
    u;
  if (
    ((u = l) ||
      (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    u
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    V(Z, o & 1),
    e === null)
  )
    return (
      ku(t),
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
              (e = cn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = zu(n)),
              (t.memoizedState = $u),
              e)
            : $s(t, l))
    );
  if (((o = e.memoizedState), o !== null && ((u = o.dehydrated), u !== null)))
    return Ym(e, t, l, r, u, o, n);
  if (i) {
    (i = r.fallback), (l = t.mode), (o = e.child), (u = o.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(l & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = Yt(o, s)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      u !== null ? (i = Yt(u, i)) : ((i = cn(i, l, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (l = e.child.memoizedState),
      (l =
        l === null
          ? zu(n)
          : {
              baseLanes: l.baseLanes | n,
              cachePool: null,
              transitions: l.transitions,
            }),
      (i.memoizedState = l),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = $u),
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
function $s(e, t) {
  return (
    (t = Mi({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Po(e, t, n, r) {
  return (
    r !== null && ms(r),
    Xn(t, e.child, null, n),
    (e = $s(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Ym(e, t, n, r, o, i, l) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Fl(Error(C(422)))), Po(e, t, l, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = Mi({ mode: "visible", children: r.children }, o, 0, null)),
        (i = cn(i, o, l, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && Xn(t, e.child, null, l),
        (t.child.memoizedState = zu(l)),
        (t.memoizedState = $u),
        i);
  if (!(t.mode & 1)) return Po(e, t, l, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(C(419))), (r = Fl(i, r, void 0)), Po(e, t, l, r);
  }
  if (((u = (l & e.childLanes) !== 0), Le || u)) {
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
    return Is(), (r = Fl(Error(C(421)))), Po(e, t, l, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = s0.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (We = Ht(o.nextSibling)),
      (be = t),
      (G = !0),
      (ut = null),
      e !== null &&
        ((Ze[Je++] = Et),
        (Ze[Je++] = _t),
        (Ze[Je++] = dn),
        (Et = e.id),
        (_t = e.overflow),
        (dn = t)),
      (t = $s(t, r.children)),
      (t.flags |= 4096),
      t);
}
function lc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Cu(e.return, t, n);
}
function Dl(e, t, n, r, o) {
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
function Id(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((Re(e, t, r.children, n), (r = Z.current), r & 2))
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
  if ((V(Z, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && di(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Dl(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && di(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Dl(t, !0, n, null, i);
        break;
      case "together":
        Dl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (hn |= t.lanes),
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
function Xm(e, t, n) {
  switch (t.tag) {
    case 3:
      Md(t), Yn();
      break;
    case 5:
      sd(t);
      break;
    case 1:
      Ae(t.type) && li(t);
      break;
    case 4:
      xs(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      V(ai, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(Z, Z.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ld(e, t, n)
          : (V(Z, Z.current & 1),
            (e = Ot(e, t, n)),
            e !== null ? e.sibling : null);
      V(Z, Z.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Id(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        V(Z, Z.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Od(e, t, n);
  }
  return Ot(e, t, n);
}
var Ad, Ou, Fd, Dd;
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
Ou = function () {};
Fd = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), un(wt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = ql(e, o)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (o = q({}, o, { value: void 0 })),
          (r = q({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = nu(e, o)), (r = nu(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = oi);
    }
    ou(n, r);
    var l;
    n = null;
    for (a in o)
      if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
        if (a === "style") {
          var u = o[a];
          for (l in u) u.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
        } else
          a !== "dangerouslySetInnerHTML" &&
            a !== "children" &&
            a !== "suppressContentEditableWarning" &&
            a !== "suppressHydrationWarning" &&
            a !== "autoFocus" &&
            (Lr.hasOwnProperty(a)
              ? i || (i = [])
              : (i = i || []).push(a, null));
    for (a in r) {
      var s = r[a];
      if (
        ((u = o != null ? o[a] : void 0),
        r.hasOwnProperty(a) && s !== u && (s != null || u != null))
      )
        if (a === "style")
          if (u) {
            for (l in u)
              !u.hasOwnProperty(l) ||
                (s && s.hasOwnProperty(l)) ||
                (n || (n = {}), (n[l] = ""));
            for (l in s)
              s.hasOwnProperty(l) &&
                u[l] !== s[l] &&
                (n || (n = {}), (n[l] = s[l]));
          } else n || (i || (i = []), i.push(a, n)), (n = s);
        else
          a === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(a, s))
            : a === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(a, "" + s)
            : a !== "suppressContentEditableWarning" &&
              a !== "suppressHydrationWarning" &&
              (Lr.hasOwnProperty(a)
                ? (s != null && a === "onScroll" && H("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(a, s));
    }
    n && (i = i || []).push("style", n);
    var a = i;
    (t.updateQueue = a) && (t.flags |= 4);
  }
};
Dd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function pr(e, t) {
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
function Zm(e, t, n) {
  var r = t.pendingProps;
  switch ((hs(t), t.tag)) {
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
      return Ae(t.type) && ii(), ke(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Zn(),
        K(Ie),
        K(_e),
        Cs(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Eo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ut !== null && (ju(ut), (ut = null)))),
        Ou(e, t),
        ke(t),
        null
      );
    case 5:
      ks(t);
      var o = un(Kr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Fd(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return ke(t), null;
        }
        if (((e = un(wt.current)), Eo(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[gt] = t), (r[Vr] = i), (e = (t.mode & 1) !== 0), n)) {
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
              for (o = 0; o < xr.length; o++) H(xr[o], r);
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
          ou(n, i), (o = null);
          for (var l in i)
            if (i.hasOwnProperty(l)) {
              var u = i[l];
              l === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Co(r.textContent, u, e),
                    (o = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      Co(r.textContent, u, e),
                    (o = ["children", "" + u]))
                : Lr.hasOwnProperty(l) &&
                  u != null &&
                  l === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              mo(r), ga(r, i, !0);
              break;
            case "textarea":
              mo(r), va(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = oi);
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
            (e[Vr] = r),
            Ad(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((l = iu(n, r)), n)) {
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
                for (o = 0; o < xr.length; o++) H(xr[o], e);
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
                ma(e, r), (o = ql(e, r)), H("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = q({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                ya(e, r), (o = nu(e, r)), H("invalid", e);
                break;
              default:
                o = r;
            }
            ou(n, o), (u = o);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? hf(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && df(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Ir(e, s)
                    : typeof s == "number" && Ir(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Lr.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && H("scroll", e)
                      : s != null && qu(e, i, s, l));
              }
            switch (n) {
              case "input":
                mo(e), ga(e, r, !1);
                break;
              case "textarea":
                mo(e), va(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Xt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? jn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      jn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = oi);
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
        if (((n = un(Kr.current)), un(wt.current), Eo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[gt] = t),
            (i = r.nodeValue !== n) && ((e = be), e !== null))
          )
            switch (e.tag) {
              case 3:
                Co(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Co(r.nodeValue, n, (e.mode & 1) !== 0);
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
        (K(Z),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (G && We !== null && t.mode & 1 && !(t.flags & 128))
          td(), Yn(), (t.flags |= 98560), (i = !1);
        else if (((i = Eo(t)), r !== null && r.dehydrated !== null)) {
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
            Yn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ke(t), (i = !1);
        } else ut !== null && (ju(ut), (ut = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || Z.current & 1 ? ae === 0 && (ae = 3) : Is())),
          t.updateQueue !== null && (t.flags |= 4),
          ke(t),
          null);
    case 4:
      return (
        Zn(), Ou(e, t), e === null && Wr(t.stateNode.containerInfo), ke(t), null
      );
    case 10:
      return vs(t.type._context), ke(t), null;
    case 17:
      return Ae(t.type) && ii(), ke(t), null;
    case 19:
      if ((K(Z), (i = t.memoizedState), i === null)) return ke(t), null;
      if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
        if (r) pr(i, !1);
        else {
          if (ae !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((l = di(e)), l !== null)) {
                for (
                  t.flags |= 128,
                    pr(i, !1),
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
                return V(Z, (Z.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            re() > qn &&
            ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = di(l)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              pr(i, !0),
              i.tail === null && i.tailMode === "hidden" && !l.alternate && !G)
            )
              return ke(t), null;
          } else
            2 * re() - i.renderingStartTime > qn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), pr(i, !1), (t.lanes = 4194304));
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
          (n = Z.current),
          V(Z, r ? (n & 1) | 2 : n & 1),
          t)
        : (ke(t), null);
    case 22:
    case 23:
      return (
        Ls(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Be & 1073741824 && (ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
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
function Jm(e, t) {
  switch ((hs(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && ii(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Zn(),
        K(Ie),
        K(_e),
        Cs(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return ks(t), null;
    case 13:
      if ((K(Z), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        Yn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return K(Z), null;
    case 4:
      return Zn(), null;
    case 10:
      return vs(t.type._context), null;
    case 22:
    case 23:
      return Ls(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var To = !1,
  Ee = !1,
  qm = typeof WeakSet == "function" ? WeakSet : Set,
  R = null;
function Fn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ne(e, t, r);
      }
    else n.current = null;
}
function Nu(e, t, n) {
  try {
    n();
  } catch (r) {
    ne(e, t, r);
  }
}
var uc = !1;
function e0(e, t) {
  if (((mu = ti), (e = Wf()), ds(e))) {
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
            u = -1,
            s = -1,
            a = 0,
            m = 0,
            h = e,
            d = null;
          t: for (;;) {
            for (
              var w;
              h !== n || (o !== 0 && h.nodeType !== 3) || (u = l + o),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = l + r),
                h.nodeType === 3 && (l += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (d = h), (h = w);
            for (;;) {
              if (h === e) break t;
              if (
                (d === n && ++a === o && (u = l),
                d === i && ++m === r && (s = l),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = d), (d = h.parentNode);
            }
            h = w;
          }
          n = u === -1 || s === -1 ? null : { start: u, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (gu = { focusedElem: e, selectionRange: n }, ti = !1, R = t; R !== null; )
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
                    E = y.memoizedState,
                    f = t.stateNode,
                    c = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? g : it(t.type, g),
                      E
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
          ne(t, t.return, v);
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
        (o.destroy = void 0), i !== void 0 && Nu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Oi(e, t) {
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
function Mu(e) {
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
        (delete t[gt], delete t[Vr], delete t[wu], delete t[Am], delete t[Fm])),
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
function sc(e) {
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
function Lu(e, t, n) {
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
          n != null || t.onclick !== null || (t.onclick = oi));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Lu(e, t, n), e = e.sibling; e !== null; ) Lu(e, t, n), (e = e.sibling);
}
function Iu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Iu(e, t, n), e = e.sibling; e !== null; ) Iu(e, t, n), (e = e.sibling);
}
var me = null,
  lt = !1;
function It(e, t, n) {
  for (n = n.child; n !== null; ) Ud(e, t, n), (n = n.sibling);
}
function Ud(e, t, n) {
  if (vt && typeof vt.onCommitFiberUnmount == "function")
    try {
      vt.onCommitFiberUnmount(Ci, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ee || Fn(n, t);
    case 6:
      var r = me,
        o = lt;
      (me = null),
        It(e, t, n),
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
              ? Ol(e.parentNode, n)
              : e.nodeType === 1 && Ol(e, n),
            jr(e))
          : Ol(me, n.stateNode));
      break;
    case 4:
      (r = me),
        (o = lt),
        (me = n.stateNode.containerInfo),
        (lt = !0),
        It(e, t, n),
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
            l !== void 0 && (i & 2 || i & 4) && Nu(n, t, l),
            (o = o.next);
        } while (o !== r);
      }
      It(e, t, n);
      break;
    case 1:
      if (
        !Ee &&
        (Fn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          ne(n, t, u);
        }
      It(e, t, n);
      break;
    case 21:
      It(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ee = (r = Ee) || n.memoizedState !== null), It(e, t, n), (Ee = r))
        : It(e, t, n);
      break;
    default:
      It(e, t, n);
  }
}
function ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new qm()),
      t.forEach(function (r) {
        var o = a0.bind(null, e, r);
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
          u = l;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (me = u.stateNode), (lt = !1);
              break e;
            case 3:
              (me = u.stateNode.containerInfo), (lt = !0);
              break e;
            case 4:
              (me = u.stateNode.containerInfo), (lt = !0);
              break e;
          }
          u = u.return;
        }
        if (me === null) throw Error(C(160));
        Ud(i, l, o), (me = null), (lt = !1);
        var s = o.alternate;
        s !== null && (s.return = null), (o.return = null);
      } catch (a) {
        ne(o, t, a);
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
          $r(3, e, e.return), Oi(3, e);
        } catch (g) {
          ne(e, e.return, g);
        }
        try {
          $r(5, e, e.return);
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      break;
    case 1:
      ot(t, e), dt(e), r & 512 && n !== null && Fn(n, n.return);
      break;
    case 5:
      if (
        (ot(t, e),
        dt(e),
        r & 512 && n !== null && Fn(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          Ir(o, "");
        } catch (g) {
          ne(e, e.return, g);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          l = n !== null ? n.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && af(o, i),
              iu(u, l);
            var a = iu(u, i);
            for (l = 0; l < s.length; l += 2) {
              var m = s[l],
                h = s[l + 1];
              m === "style"
                ? hf(o, h)
                : m === "dangerouslySetInnerHTML"
                ? df(o, h)
                : m === "children"
                ? Ir(o, h)
                : qu(o, m, h, a);
            }
            switch (u) {
              case "input":
                eu(o, i);
                break;
              case "textarea":
                cf(o, i);
                break;
              case "select":
                var d = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? jn(o, !!i.multiple, w, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? jn(o, !!i.multiple, i.defaultValue, !0)
                      : jn(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[Vr] = i;
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
          jr(t.containerInfo);
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
            (Ns = re())),
        r & 4 && ac(e);
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
            for (h = R = m; R !== null; ) {
              switch (((d = R), (w = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  $r(4, d, d.return);
                  break;
                case 1:
                  Fn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
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
                  Fn(d, d.return);
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
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (l =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = pf("display", l)));
              } catch (g) {
                ne(e, e.return, g);
              }
            }
          } else if (h.tag === 6) {
            if (m === null)
              try {
                h.stateNode.nodeValue = a ? "" : h.memoizedProps;
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
          r.flags & 32 && (Ir(o, ""), (r.flags &= -33));
          var i = sc(e);
          Iu(e, i, o);
          break;
        case 3:
        case 4:
          var l = r.stateNode.containerInfo,
            u = sc(e);
          Lu(e, u, l);
          break;
        default:
          throw Error(C(161));
      }
    } catch (s) {
      ne(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function t0(e, t, n) {
  (R = e), bd(e);
}
function bd(e, t, n) {
  for (var r = (e.mode & 1) !== 0; R !== null; ) {
    var o = R,
      i = o.child;
    if (o.tag === 22 && r) {
      var l = o.memoizedState !== null || To;
      if (!l) {
        var u = o.alternate,
          s = (u !== null && u.memoizedState !== null) || Ee;
        u = To;
        var a = Ee;
        if (((To = l), (Ee = s) && !a))
          for (R = o; R !== null; )
            (l = R),
              (s = l.child),
              l.tag === 22 && l.memoizedState !== null
                ? dc(o)
                : s !== null
                ? ((s.return = l), (R = s))
                : dc(o);
        for (; i !== null; ) (R = i), bd(i), (i = i.sibling);
        (R = o), (To = u), (Ee = a);
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
              Ee || Oi(5, t);
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
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
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
                    h !== null && jr(h);
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
        Ee || (t.flags & 512 && Mu(t));
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
            Oi(4, t);
          } catch (s) {
            ne(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              ne(t, o, s);
            }
          }
          var i = t.return;
          try {
            Mu(t);
          } catch (s) {
            ne(t, i, s);
          }
          break;
        case 5:
          var l = t.return;
          try {
            Mu(t);
          } catch (s) {
            ne(t, l, s);
          }
      }
    } catch (s) {
      ne(t, t.return, s);
    }
    if (t === e) {
      R = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (R = u);
      break;
    }
    R = t.return;
  }
}
var n0 = Math.ceil,
  mi = Mt.ReactCurrentDispatcher,
  zs = Mt.ReactCurrentOwner,
  et = Mt.ReactCurrentBatchConfig,
  A = 0,
  pe = null,
  ie = null,
  ve = 0,
  Be = 0,
  Dn = qt(0),
  ae = 0,
  Xr = null,
  hn = 0,
  Ni = 0,
  Os = 0,
  zr = null,
  Me = null,
  Ns = 0,
  qn = 1 / 0,
  kt = null,
  gi = !1,
  Au = null,
  Qt = null,
  Ro = !1,
  Ut = null,
  yi = 0,
  Or = 0,
  Fu = null,
  bo = -1,
  Vo = 0;
function $e() {
  return A & 6 ? re() : bo !== -1 ? bo : (bo = re());
}
function Gt(e) {
  return e.mode & 1
    ? A & 2 && ve !== 0
      ? ve & -ve
      : jm.transition !== null
      ? (Vo === 0 && (Vo = Pf()), Vo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Mf(e.type))),
        e)
    : 1;
}
function at(e, t, n, r) {
  if (50 < Or) throw ((Or = 0), (Fu = null), Error(C(185)));
  no(e, n, r),
    (!(A & 2) || e !== pe) &&
      (e === pe && (!(A & 2) && (Ni |= n), ae === 4 && jt(e, ve)),
      Fe(e, r),
      n === 1 && A === 0 && !(t.mode & 1) && ((qn = re() + 500), Ri && en()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  jh(e, t);
  var r = ei(e, e === pe ? ve : 0);
  if (r === 0)
    n !== null && xa(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xa(n), t === 1))
      e.tag === 0 ? Dm(pc.bind(null, e)) : Jf(pc.bind(null, e)),
        Lm(function () {
          !(A & 6) && en();
        }),
        (n = null);
    else {
      switch (Tf(r)) {
        case 1:
          n = os;
          break;
        case 4:
          n = Ef;
          break;
        case 16:
          n = qo;
          break;
        case 536870912:
          n = _f;
          break;
        default:
          n = qo;
      }
      n = Zd(n, Vd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Vd(e, t) {
  if (((bo = -1), (Vo = 0), A & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (Vn() && e.callbackNode !== n) return null;
  var r = ei(e, e === pe ? ve : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = vi(e, r);
  else {
    t = r;
    var o = A;
    A |= 2;
    var i = Kd();
    (pe !== e || ve !== t) && ((kt = null), (qn = re() + 500), an(e, t));
    do
      try {
        i0();
        break;
      } catch (u) {
        Hd(e, u);
      }
    while (1);
    ys(),
      (mi.current = i),
      (A = o),
      ie !== null ? (t = 0) : ((pe = null), (ve = 0), (t = ae));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = cu(e)), o !== 0 && ((r = o), (t = Du(e, o)))), t === 1)
    )
      throw ((n = Xr), an(e, 0), jt(e, r), Fe(e, re()), n);
    if (t === 6) jt(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !r0(o) &&
          ((t = vi(e, r)),
          t === 2 && ((i = cu(e)), i !== 0 && ((r = i), (t = Du(e, i)))),
          t === 1))
      )
        throw ((n = Xr), an(e, 0), jt(e, r), Fe(e, re()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          nn(e, Me, kt);
          break;
        case 3:
          if (
            (jt(e, r), (r & 130023424) === r && ((t = Ns + 500 - re()), 10 < t))
          ) {
            if (ei(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              $e(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = vu(nn.bind(null, e, Me, kt), t);
            break;
          }
          nn(e, Me, kt);
          break;
        case 4:
          if ((jt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var l = 31 - st(r);
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
                : 1960 * n0(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = vu(nn.bind(null, e, Me, kt), r);
            break;
          }
          nn(e, Me, kt);
          break;
        case 5:
          nn(e, Me, kt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Fe(e, re()), e.callbackNode === n ? Vd.bind(null, e) : null;
}
function Du(e, t) {
  var n = zr;
  return (
    e.current.memoizedState.isDehydrated && (an(e, t).flags |= 256),
    (e = vi(e, t)),
    e !== 2 && ((t = Me), (Me = n), t !== null && ju(t)),
    e
  );
}
function ju(e) {
  Me === null ? (Me = e) : Me.push.apply(Me, e);
}
function r0(e) {
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
    t &= ~Os,
      t &= ~Ni,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - st(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function pc(e) {
  if (A & 6) throw Error(C(327));
  Vn();
  var t = ei(e, 0);
  if (!(t & 1)) return Fe(e, re()), null;
  var n = vi(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = cu(e);
    r !== 0 && ((t = r), (n = Du(e, r)));
  }
  if (n === 1) throw ((n = Xr), an(e, 0), jt(e, t), Fe(e, re()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nn(e, Me, kt),
    Fe(e, re()),
    null
  );
}
function Ms(e, t) {
  var n = A;
  A |= 1;
  try {
    return e(t);
  } finally {
    (A = n), A === 0 && ((qn = re() + 500), Ri && en());
  }
}
function mn(e) {
  Ut !== null && Ut.tag === 0 && !(A & 6) && Vn();
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
function Ls() {
  (Be = Dn.current), K(Dn);
}
function an(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Mm(n)), ie !== null))
    for (n = ie.return; n !== null; ) {
      var r = n;
      switch ((hs(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ii();
          break;
        case 3:
          Zn(), K(Ie), K(_e), Cs();
          break;
        case 5:
          ks(r);
          break;
        case 4:
          Zn();
          break;
        case 13:
          K(Z);
          break;
        case 19:
          K(Z);
          break;
        case 10:
          vs(r.type._context);
          break;
        case 22:
        case 23:
          Ls();
      }
      n = n.return;
    }
  if (
    ((pe = e),
    (ie = e = Yt(e.current, null)),
    (ve = Be = t),
    (ae = 0),
    (Xr = null),
    (Os = Ni = hn = 0),
    (Me = zr = null),
    ln !== null)
  ) {
    for (t = 0; t < ln.length; t++)
      if (((n = ln[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var l = i.next;
          (i.next = o), (r.next = l);
        }
        n.pending = r;
      }
    ln = null;
  }
  return e;
}
function Hd(e, t) {
  do {
    var n = ie;
    try {
      if ((ys(), (Bo.current = hi), pi)) {
        for (var r = J.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        pi = !1;
      }
      if (
        ((pn = 0),
        (fe = se = J = null),
        (Rr = !1),
        (Qr = 0),
        (zs.current = null),
        n === null || n.return === null)
      ) {
        (ae = 1), (Xr = t), (ie = null);
        break;
      }
      e: {
        var i = e,
          l = n.return,
          u = n,
          s = t;
        if (
          ((t = ve),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var a = s,
            m = u,
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
              tc(w, l, u, i, t),
              w.mode & 1 && qa(i, a, t),
              (t = w),
              (s = a);
            var y = t.updateQueue;
            if (y === null) {
              var g = new Set();
              g.add(s), (t.updateQueue = g);
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              qa(i, a, t), Is();
              break e;
            }
            s = Error(C(426));
          }
        } else if (G && u.mode & 1) {
          var E = ec(l);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              tc(E, l, u, i, t),
              ms(Jn(s, u));
            break e;
          }
        }
        (i = s = Jn(s, u)),
          ae !== 4 && (ae = 2),
          zr === null ? (zr = [i]) : zr.push(i),
          (i = l);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var f = Rd(i, s, t);
              Ka(i, f);
              break e;
            case 1:
              u = s;
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
                var v = $d(i, u, t);
                Ka(i, v);
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
  var e = mi.current;
  return (mi.current = hi), e === null ? hi : e;
}
function Is() {
  (ae === 0 || ae === 3 || ae === 2) && (ae = 4),
    pe === null || (!(hn & 268435455) && !(Ni & 268435455)) || jt(pe, ve);
}
function vi(e, t) {
  var n = A;
  A |= 2;
  var r = Kd();
  (pe !== e || ve !== t) && ((kt = null), an(e, t));
  do
    try {
      o0();
      break;
    } catch (o) {
      Hd(e, o);
    }
  while (1);
  if ((ys(), (A = n), (mi.current = r), ie !== null)) throw Error(C(261));
  return (pe = null), (ve = 0), ae;
}
function o0() {
  for (; ie !== null; ) Qd(ie);
}
function i0() {
  for (; ie !== null && !zh(); ) Qd(ie);
}
function Qd(e) {
  var t = Xd(e.alternate, e, Be);
  (e.memoizedProps = e.pendingProps),
    t === null ? Gd(e) : (ie = t),
    (zs.current = null);
}
function Gd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Jm(n, t)), n !== null)) {
        (n.flags &= 32767), (ie = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ae = 6), (ie = null);
        return;
      }
    } else if (((n = Zm(n, t, Be)), n !== null)) {
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
function nn(e, t, n) {
  var r = U,
    o = et.transition;
  try {
    (et.transition = null), (U = 1), l0(e, t, n, r);
  } finally {
    (et.transition = o), (U = r);
  }
  return null;
}
function l0(e, t, n, r) {
  do Vn();
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
    (Bh(e, i),
    e === pe && ((ie = pe = null), (ve = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ro ||
      ((Ro = !0),
      Zd(qo, function () {
        return Vn(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = et.transition), (et.transition = null);
    var l = U;
    U = 1;
    var u = A;
    (A |= 4),
      (zs.current = null),
      e0(e, n),
      Wd(n, e),
      Pm(gu),
      (ti = !!mu),
      (gu = mu = null),
      (e.current = n),
      t0(n),
      Oh(),
      (A = u),
      (U = l),
      (et.transition = i);
  } else e.current = n;
  if (
    (Ro && ((Ro = !1), (Ut = e), (yi = o)),
    (i = e.pendingLanes),
    i === 0 && (Qt = null),
    Lh(n.stateNode),
    Fe(e, re()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (gi) throw ((gi = !1), (e = Au), (Au = null), e);
  return (
    yi & 1 && e.tag !== 0 && Vn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Fu ? Or++ : ((Or = 0), (Fu = e))) : (Or = 0),
    en(),
    null
  );
}
function Vn() {
  if (Ut !== null) {
    var e = Tf(yi),
      t = et.transition,
      n = U;
    try {
      if (((et.transition = null), (U = 16 > e ? 16 : e), Ut === null))
        var r = !1;
      else {
        if (((e = Ut), (Ut = null), (yi = 0), A & 6)) throw Error(C(331));
        var o = A;
        for (A |= 4, R = e.current; R !== null; ) {
          var i = R,
            l = i.child;
          if (R.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var a = u[s];
                for (R = a; R !== null; ) {
                  var m = R;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      $r(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) (h.return = m), (R = h);
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
                    var E = g.sibling;
                    (g.sibling = null), (g = E);
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
          var p = l.child;
          if (l.subtreeFlags & 2064 && p !== null) (p.return = l), (R = p);
          else
            e: for (l = c; R !== null; ) {
              if (((u = R), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Oi(9, u);
                  }
                } catch (S) {
                  ne(u, u.return, S);
                }
              if (u === l) {
                R = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (R = v);
                break e;
              }
              R = u.return;
            }
        }
        if (
          ((A = o), en(), vt && typeof vt.onPostCommitFiberRoot == "function")
        )
          try {
            vt.onPostCommitFiberRoot(Ci, e);
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
  (t = Jn(n, t)),
    (t = Rd(e, t, 1)),
    (e = Kt(e, t, 1)),
    (t = $e()),
    e !== null && (no(e, 1, t), Fe(e, t));
}
function ne(e, t, n) {
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
          (e = Jn(n, e)),
            (e = $d(t, e, 1)),
            (t = Kt(t, e, 1)),
            (e = $e()),
            t !== null && (no(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function u0(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = $e()),
    (e.pingedLanes |= e.suspendedLanes & n),
    pe === e &&
      (ve & n) === n &&
      (ae === 4 || (ae === 3 && (ve & 130023424) === ve && 500 > re() - Ns)
        ? an(e, 0)
        : (Os |= n)),
    Fe(e, t);
}
function Yd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = vo), (vo <<= 1), !(vo & 130023424) && (vo = 4194304))
      : (t = 1));
  var n = $e();
  (e = zt(e, t)), e !== null && (no(e, t, n), Fe(e, n));
}
function s0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Yd(e, n);
}
function a0(e, t) {
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
    if (e.memoizedProps !== t.pendingProps || Ie.current) Le = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Le = !1), Xm(e, t, n);
      Le = !!(e.flags & 131072);
    }
  else (Le = !1), G && t.flags & 1048576 && qf(t, si, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wo(e, t), (e = t.pendingProps);
      var o = Gn(t, _e.current);
      bn(t, n), (o = _s(null, t, r, e, o, n));
      var i = Ps();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((i = !0), li(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            Ss(t),
            (o.updater = $i),
            (t.stateNode = o),
            (o._reactInternals = t),
            _u(t, r, e, n),
            (t = Ru(null, t, r, !0, i, n)))
          : ((t.tag = 0), G && i && ps(t), Re(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wo(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = f0(r)),
          (e = it(r, e)),
          o)
        ) {
          case 0:
            t = Tu(null, t, r, e, n);
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
        Tu(e, t, r, o, n)
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
        if ((Md(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          rd(e, t),
          fi(t, r, null, n);
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
            (o = Jn(Error(C(423)), t)), (t = ic(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = Jn(Error(C(424)), t)), (t = ic(e, t, r, n, o));
            break e;
          } else
            for (
              We = Ht(t.stateNode.containerInfo.firstChild),
                be = t,
                G = !0,
                ut = null,
                n = ud(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yn(), r === o)) {
            t = Ot(e, t, n);
            break e;
          }
          Re(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        sd(t),
        e === null && ku(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (l = o.children),
        yu(r, o) ? (l = null) : i !== null && yu(r, i) && (t.flags |= 32),
        Nd(e, t),
        Re(e, t, l, n),
        t.child
      );
    case 6:
      return e === null && ku(t), null;
    case 13:
      return Ld(e, t, n);
    case 4:
      return (
        xs(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xn(t, null, r, n)) : Re(e, t, r, n),
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
          V(ai, r._currentValue),
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
              var u = i.dependencies;
              if (u !== null) {
                l = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Pt(-1, n & -n)), (s.tag = 2);
                      var a = i.updateQueue;
                      if (a !== null) {
                        a = a.shared;
                        var m = a.pending;
                        m === null
                          ? (s.next = s)
                          : ((s.next = m.next), (m.next = s)),
                          (a.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Cu(i.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((l = i.return), l === null)) throw Error(C(341));
                (l.lanes |= n),
                  (u = l.alternate),
                  u !== null && (u.lanes |= n),
                  Cu(l, n, t),
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
        bn(t, n),
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
      return zd(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : it(r, o)),
        Wo(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), li(t)) : (e = !1),
        bn(t, n),
        id(t, r, o),
        _u(t, r, o, n),
        Ru(null, t, r, !0, e, n)
      );
    case 19:
      return Id(e, t, n);
    case 22:
      return Od(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function Zd(e, t) {
  return Cf(e, t);
}
function c0(e, t, n, r) {
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
  return new c0(e, t, n, r);
}
function As(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function f0(e) {
  if (typeof e == "function") return As(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === ts)) return 11;
    if (e === ns) return 14;
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
function Ho(e, t, n, r, o, i) {
  var l = 2;
  if (((r = e), typeof e == "function")) As(e) && (l = 1);
  else if (typeof e == "string") l = 5;
  else
    e: switch (e) {
      case Rn:
        return cn(n.children, o, i, t);
      case es:
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
            case ts:
              l = 11;
              break e;
            case ns:
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
function cn(e, t, n, r) {
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
function jl(e, t, n) {
  return (e = qe(6, e, null, t)), (e.lanes = n), e;
}
function Bl(e, t, n) {
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
function d0(e, t, n, r, o) {
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
    (this.eventTimes = Sl(0)),
    (this.expirationTimes = Sl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Sl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Fs(e, t, n, r, o, i, l, u, s) {
  return (
    (e = new d0(e, t, n, u, s)),
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
    Ss(i),
    e
  );
}
function p0(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Tn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Jd(e) {
  if (!e) return Zt;
  e = e._reactInternals;
  e: {
    if (vn(e) !== e || e.tag !== 1) throw Error(C(170));
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
    if (Ae(n)) return Zf(e, n, t);
  }
  return t;
}
function qd(e, t, n, r, o, i, l, u, s) {
  return (
    (e = Fs(n, r, !0, e, o, i, l, u, s)),
    (e.context = Jd(null)),
    (n = e.current),
    (r = $e()),
    (o = Gt(n)),
    (i = Pt(r, o)),
    (i.callback = t ?? null),
    Kt(n, i, o),
    (e.current.lanes = o),
    no(e, o, r),
    Fe(e, r),
    e
  );
}
function Li(e, t, n, r) {
  var o = t.current,
    i = $e(),
    l = Gt(o);
  return (
    (n = Jd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(i, l)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Kt(o, t, l)),
    e !== null && (at(e, o, l, i), jo(e, o, l)),
    l
  );
}
function wi(e) {
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
function Ds(e, t) {
  mc(e, t), (e = e.alternate) && mc(e, t);
}
function h0() {
  return null;
}
var ep =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function js(e) {
  this._internalRoot = e;
}
Ii.prototype.render = js.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Li(e, t, null, null);
};
Ii.prototype.unmount = js.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    mn(function () {
      Li(null, e, null, null);
    }),
      (t[$t] = null);
  }
};
function Ii(e) {
  this._internalRoot = e;
}
Ii.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = zf();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
    Dt.splice(n, 0, e), n === 0 && Nf(e);
  }
};
function Bs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Ai(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function gc() {}
function m0(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var a = wi(l);
        i.call(a);
      };
    }
    var l = qd(t, r, e, 0, null, !1, !1, "", gc);
    return (
      (e._reactRootContainer = l),
      (e[$t] = l.current),
      Wr(e.nodeType === 8 ? e.parentNode : e),
      mn(),
      l
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var a = wi(s);
      u.call(a);
    };
  }
  var s = Fs(e, 0, !1, null, null, !1, !1, "", gc);
  return (
    (e._reactRootContainer = s),
    (e[$t] = s.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    mn(function () {
      Li(t, s, n, r);
    }),
    s
  );
}
function Fi(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var l = i;
    if (typeof o == "function") {
      var u = o;
      o = function () {
        var s = wi(l);
        u.call(s);
      };
    }
    Li(t, l, e, o);
  } else l = m0(n, t, e, o, r);
  return wi(l);
}
Rf = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sr(t.pendingLanes);
        n !== 0 &&
          (is(t, n | 1), Fe(t, re()), !(A & 6) && ((qn = re() + 500), en()));
      }
      break;
    case 13:
      mn(function () {
        var r = zt(e, 1);
        if (r !== null) {
          var o = $e();
          at(r, e, 1, o);
        }
      }),
        Ds(e, 1);
  }
};
ls = function (e) {
  if (e.tag === 13) {
    var t = zt(e, 134217728);
    if (t !== null) {
      var n = $e();
      at(t, e, 134217728, n);
    }
    Ds(e, 134217728);
  }
};
$f = function (e) {
  if (e.tag === 13) {
    var t = Gt(e),
      n = zt(e, t);
    if (n !== null) {
      var r = $e();
      at(n, e, t, r);
    }
    Ds(e, t);
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
uu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((eu(e, n), (t = n.name), n.type === "radio" && t != null)) {
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
            var o = Ti(r);
            if (!o) throw Error(C(90));
            sf(r), eu(r, o);
          }
        }
      }
      break;
    case "textarea":
      cf(e, n);
      break;
    case "select":
      (t = n.value), t != null && jn(e, !!n.multiple, t, !1);
  }
};
yf = Ms;
vf = mn;
var g0 = { usingClientEntryPoint: !1, Events: [oo, Nn, Ti, mf, gf, Ms] },
  hr = {
    findFiberByHostInstance: on,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  y0 = {
    bundleType: hr.bundleType,
    version: hr.version,
    rendererPackageName: hr.rendererPackageName,
    rendererConfig: hr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Mt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xf(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: hr.findFiberByHostInstance || h0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var $o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!$o.isDisabled && $o.supportsFiber)
    try {
      (Ci = $o.inject(y0)), (vt = $o);
    } catch {}
}
Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = g0;
Ke.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bs(t)) throw Error(C(200));
  return p0(e, t, null, n);
};
Ke.createRoot = function (e, t) {
  if (!Bs(e)) throw Error(C(299));
  var n = !1,
    r = "",
    o = ep;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Fs(e, 1, !1, null, null, n, !1, r, o)),
    (e[$t] = t.current),
    Wr(e.nodeType === 8 ? e.parentNode : e),
    new js(t)
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
  return (e = xf(t)), (e = e === null ? null : e.stateNode), e;
};
Ke.flushSync = function (e) {
  return mn(e);
};
Ke.hydrate = function (e, t, n) {
  if (!Ai(t)) throw Error(C(200));
  return Fi(null, e, t, !0, n);
};
Ke.hydrateRoot = function (e, t, n) {
  if (!Bs(e)) throw Error(C(405));
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
    (e[$t] = t.current),
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
Ke.render = function (e, t, n) {
  if (!Ai(t)) throw Error(C(200));
  return Fi(null, e, t, !1, n);
};
Ke.unmountComponentAtNode = function (e) {
  if (!Ai(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (mn(function () {
        Fi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[$t] = null);
        });
      }),
      !0)
    : !1;
};
Ke.unstable_batchedUpdates = Ms;
Ke.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Ai(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return Fi(e, t, n, !1, r);
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
})(hh);
var yc = Kl;
(Hl.createRoot = yc.createRoot), (Hl.hydrateRoot = yc.hydrateRoot);
const v0 = { black: "#000", white: "#fff" },
  Zr = v0,
  w0 = {
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
  xn = w0,
  S0 = {
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
  kn = S0,
  x0 = {
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
  Cn = x0,
  k0 = {
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
  En = k0,
  C0 = {
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
  _n = C0,
  E0 = {
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
  mr = E0,
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
  P0 = _0;
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
function rn(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function tp(e) {
  if (!rn(e)) return e;
  const t = {};
  return (
    Object.keys(e).forEach((n) => {
      t[n] = tp(e[n]);
    }),
    t
  );
}
function Tt(e, t, n = { clone: !0 }) {
  const r = n.clone ? O({}, e) : e;
  return (
    rn(e) &&
      rn(t) &&
      Object.keys(t).forEach((o) => {
        o !== "__proto__" &&
          (rn(t[o]) && o in e && rn(e[o])
            ? (r[o] = Tt(e[o], t[o], n))
            : n.clone
            ? (r[o] = rn(t[o]) ? tp(t[o]) : t[o])
            : (r[o] = t[o]));
      }),
    r
  );
}
function er(e) {
  let t = "https://mui.com/production-error/?code=" + e;
  for (let n = 1; n < arguments.length; n += 1)
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified MUI error #" + e + "; visit " + t + " for the full message.";
}
function ye(e) {
  if (typeof e != "string") throw new Error(er(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function T0(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const R0 = typeof window < "u" ? P.useLayoutEffect : P.useEffect,
  $0 = R0;
function zo(e) {
  const t = P.useRef(e);
  return (
    $0(() => {
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
              T0(n, t);
            });
          },
    e
  );
}
let Di = !0,
  Bu = !1,
  wc;
const z0 = {
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
function O0(e) {
  const { type: t, tagName: n } = e;
  return !!(
    (n === "INPUT" && z0[t] && !e.readOnly) ||
    (n === "TEXTAREA" && !e.readOnly) ||
    e.isContentEditable
  );
}
function N0(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Di = !0);
}
function Ul() {
  Di = !1;
}
function M0() {
  this.visibilityState === "hidden" && Bu && (Di = !0);
}
function L0(e) {
  e.addEventListener("keydown", N0, !0),
    e.addEventListener("mousedown", Ul, !0),
    e.addEventListener("pointerdown", Ul, !0),
    e.addEventListener("touchstart", Ul, !0),
    e.addEventListener("visibilitychange", M0, !0);
}
function I0(e) {
  const { target: t } = e;
  try {
    return t.matches(":focus-visible");
  } catch {}
  return Di || O0(t);
}
function A0() {
  const e = P.useCallback((o) => {
      o != null && L0(o.ownerDocument);
    }, []),
    t = P.useRef(!1);
  function n() {
    return t.current
      ? ((Bu = !0),
        window.clearTimeout(wc),
        (wc = window.setTimeout(() => {
          Bu = !1;
        }, 100)),
        (t.current = !1),
        !0)
      : !1;
  }
  function r(o) {
    return I0(o) ? ((t.current = !0), !0) : !1;
  }
  return { isFocusVisibleRef: t, onFocus: r, onBlur: n, ref: e };
}
function Us(e, t) {
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
                n[r][l] = Us(o[l], i[l]);
              }));
      } else n[r] === void 0 && (n[r] = e[r]);
    }),
    n
  );
}
function Ws(e, t, n) {
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
  F0 = () => {
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
  D0 = F0(),
  np = D0,
  j0 = {
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
function ji(e, t, n = "Mui") {
  const r = j0[t];
  return r ? `${n}-${r}` : `${np.generate(e)}-${t}`;
}
function Bi(e, t, n = "Mui") {
  const r = {};
  return (
    t.forEach((o) => {
      r[o] = ji(e, o, n);
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
var B0 =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  U0 = rp(function (e) {
    return (
      B0.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function W0(e) {
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
var V0 = (function () {
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
          var i = W0(o);
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
  Si = "-moz-",
  F = "-webkit-",
  op = "comm",
  bs = "rule",
  Vs = "decl",
  H0 = "@import",
  ip = "@keyframes",
  K0 = Math.abs,
  Ui = String.fromCharCode,
  Q0 = Object.assign;
function G0(e, t) {
  return ge(e, 0) ^ 45
    ? (((((((t << 2) ^ ge(e, 0)) << 2) ^ ge(e, 1)) << 2) ^ ge(e, 2)) << 2) ^
        ge(e, 3)
    : 0;
}
function lp(e) {
  return e.trim();
}
function Y0(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function j(e, t, n) {
  return e.replace(t, n);
}
function Uu(e, t) {
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
function Hs(e) {
  return e.length;
}
function Oo(e, t) {
  return t.push(e), e;
}
function X0(e, t) {
  return e.map(t).join("");
}
var Wi = 1,
  tr = 1,
  up = 0,
  De = 0,
  oe = 0,
  ir = "";
function bi(e, t, n, r, o, i, l) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: o,
    children: i,
    line: Wi,
    column: tr,
    length: l,
    return: "",
  };
}
function gr(e, t) {
  return Q0(bi("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Z0() {
  return oe;
}
function J0() {
  return (
    (oe = De > 0 ? ge(ir, --De) : 0), tr--, oe === 10 && ((tr = 1), Wi--), oe
  );
}
function Ve() {
  return (
    (oe = De < up ? ge(ir, De++) : 0), tr++, oe === 10 && ((tr = 1), Wi++), oe
  );
}
function St() {
  return ge(ir, De);
}
function Ko() {
  return De;
}
function lo(e, t) {
  return Jr(ir, e, t);
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
function sp(e) {
  return (Wi = tr = 1), (up = ht((ir = e))), (De = 0), [];
}
function ap(e) {
  return (ir = ""), e;
}
function Qo(e) {
  return lp(lo(De - 1, Wu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function q0(e) {
  for (; (oe = St()) && oe < 33; ) Ve();
  return qr(e) > 2 || qr(oe) > 3 ? "" : " ";
}
function eg(e, t) {
  for (
    ;
    --t &&
    Ve() &&
    !(oe < 48 || oe > 102 || (oe > 57 && oe < 65) || (oe > 70 && oe < 97));

  );
  return lo(e, Ko() + (t < 6 && St() == 32 && Ve() == 32));
}
function Wu(e) {
  for (; Ve(); )
    switch (oe) {
      case e:
        return De;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wu(oe);
        break;
      case 40:
        e === 41 && Wu(e);
        break;
      case 92:
        Ve();
        break;
    }
  return De;
}
function tg(e, t) {
  for (; Ve() && e + oe !== 47 + 10; )
    if (e + oe === 42 + 42 && St() === 47) break;
  return "/*" + lo(t, De - 1) + "*" + Ui(e === 47 ? e : Ve());
}
function ng(e) {
  for (; !qr(St()); ) Ve();
  return lo(e, De);
}
function rg(e) {
  return ap(Go("", null, null, null, [""], (e = sp(e)), 0, [0], e));
}
function Go(e, t, n, r, o, i, l, u, s) {
  for (
    var a = 0,
      m = 0,
      h = l,
      d = 0,
      w = 0,
      y = 0,
      g = 1,
      E = 1,
      f = 1,
      c = 0,
      p = "",
      v = o,
      S = i,
      k = r,
      x = p;
    E;

  )
    switch (((y = c), (c = Ve()))) {
      case 40:
        if (y != 108 && ge(x, h - 1) == 58) {
          Uu((x += j(Qo(c), "&", "&\f")), "&\f") != -1 && (f = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        x += Qo(c);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        x += q0(y);
        break;
      case 92:
        x += eg(Ko() - 1, 7);
        continue;
      case 47:
        switch (St()) {
          case 42:
          case 47:
            Oo(og(tg(Ve(), Ko()), t, n), s);
            break;
          default:
            x += "/";
        }
        break;
      case 123 * g:
        u[a++] = ht(x) * f;
      case 125 * g:
      case 59:
      case 0:
        switch (c) {
          case 0:
          case 125:
            E = 0;
          case 59 + m:
            w > 0 &&
              ht(x) - h &&
              Oo(
                w > 32
                  ? kc(x + ";", r, n, h - 1)
                  : kc(j(x, " ", "") + ";", r, n, h - 2),
                s
              );
            break;
          case 59:
            x += ";";
          default:
            if (
              (Oo((k = xc(x, t, n, a, m, o, u, p, (v = []), (S = []), h)), i),
              c === 123)
            )
              if (m === 0) Go(x, t, k, k, v, i, h, u, S);
              else
                switch (d === 99 && ge(x, 3) === 110 ? 100 : d) {
                  case 100:
                  case 109:
                  case 115:
                    Go(
                      e,
                      k,
                      k,
                      r && Oo(xc(e, k, k, 0, 0, o, u, p, o, (v = []), h), S),
                      o,
                      S,
                      h,
                      u,
                      r ? v : S
                    );
                    break;
                  default:
                    Go(x, k, k, k, [""], S, 0, u, S);
                }
        }
        (a = m = w = 0), (g = f = 1), (p = x = ""), (h = l);
        break;
      case 58:
        (h = 1 + ht(x)), (w = y);
      default:
        if (g < 1) {
          if (c == 123) --g;
          else if (c == 125 && g++ == 0 && J0() == 125) continue;
        }
        switch (((x += Ui(c)), c * g)) {
          case 38:
            f = m > 0 ? 1 : ((x += "\f"), -1);
            break;
          case 44:
            (u[a++] = (ht(x) - 1) * f), (f = 1);
            break;
          case 64:
            St() === 45 && (x += Qo(Ve())),
              (d = St()),
              (m = h = ht((p = x += ng(Ko())))),
              c++;
            break;
          case 45:
            y === 45 && ht(x) == 2 && (g = 0);
        }
    }
  return i;
}
function xc(e, t, n, r, o, i, l, u, s, a, m) {
  for (
    var h = o - 1, d = o === 0 ? i : [""], w = Hs(d), y = 0, g = 0, E = 0;
    y < r;
    ++y
  )
    for (var f = 0, c = Jr(e, h + 1, (h = K0((g = l[y])))), p = e; f < w; ++f)
      (p = lp(g > 0 ? d[f] + " " + c : j(c, /&\f/g, d[f]))) && (s[E++] = p);
  return bi(e, t, n, o === 0 ? bs : u, s, a, m);
}
function og(e, t, n) {
  return bi(e, t, n, op, Ui(Z0()), Jr(e, 2, -2), 0);
}
function kc(e, t, n, r) {
  return bi(e, t, n, Vs, Jr(e, 0, r), Jr(e, r + 1, -1), r);
}
function Hn(e, t) {
  for (var n = "", r = Hs(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
  return n;
}
function ig(e, t, n, r) {
  switch (e.type) {
    case H0:
    case Vs:
      return (e.return = e.return || e.value);
    case op:
      return "";
    case ip:
      return (e.return = e.value + "{" + Hn(e.children, r) + "}");
    case bs:
      e.value = e.props.join(",");
  }
  return ht((n = Hn(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function lg(e) {
  var t = Hs(e);
  return function (n, r, o, i) {
    for (var l = "", u = 0; u < t; u++) l += e[u](n, r, o, i) || "";
    return l;
  };
}
function ug(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var sg = function (t, n, r) {
    for (
      var o = 0, i = 0;
      (o = i), (i = St()), o === 38 && i === 12 && (n[r] = 1), !qr(i);

    )
      Ve();
    return lo(t, De);
  },
  ag = function (t, n) {
    var r = -1,
      o = 44;
    do
      switch (qr(o)) {
        case 0:
          o === 38 && St() === 12 && (n[r] = 1), (t[r] += sg(De - 1, n, r));
          break;
        case 2:
          t[r] += Qo(o);
          break;
        case 4:
          if (o === 44) {
            (t[++r] = St() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += Ui(o);
      }
    while ((o = Ve()));
    return t;
  },
  cg = function (t, n) {
    return ap(ag(sp(t), n));
  },
  Cc = new WeakMap(),
  fg = function (t) {
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
          var i = [], l = cg(n, i), u = r.props, s = 0, a = 0;
          s < l.length;
          s++
        )
          for (var m = 0; m < u.length; m++, a++)
            t.props[a] = i[s] ? l[s].replace(/&\f/g, u[m]) : u[m] + " " + l[s];
      }
    }
  },
  dg = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function cp(e, t) {
  switch (G0(e, t)) {
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
      return F + e + Si + e + Ce + e + e;
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
                  Si +
                  (ge(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~Uu(e, "stretch")
              ? cp(j(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (ge(e, t + 1) !== 115) break;
    case 6444:
      switch (ge(e, ht(e) - 3 - (~Uu(e, "!important") && 10))) {
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
var pg = function (t, n, r, o) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Vs:
          t.return = cp(t.value, t.length);
          break;
        case ip:
          return Hn([gr(t, { value: j(t.value, "@", "@" + F) })], o);
        case bs:
          if (t.length)
            return X0(t.props, function (i) {
              switch (Y0(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Hn(
                    [gr(t, { props: [j(i, /:(read-\w+)/, ":" + Si + "$1")] })],
                    o
                  );
                case "::placeholder":
                  return Hn(
                    [
                      gr(t, {
                        props: [j(i, /:(plac\w+)/, ":" + F + "input-$1")],
                      }),
                      gr(t, { props: [j(i, /:(plac\w+)/, ":" + Si + "$1")] }),
                      gr(t, { props: [j(i, /:(plac\w+)/, Ce + "input-$1")] }),
                    ],
                    o
                  );
              }
              return "";
            });
      }
  },
  hg = [pg],
  mg = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (g) {
        var E = g.getAttribute("data-emotion");
        E.indexOf(" ") !== -1 &&
          (document.head.appendChild(g), g.setAttribute("data-s", ""));
      });
    }
    var o = t.stylisPlugins || hg,
      i = {},
      l,
      u = [];
    (l = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (g) {
          for (
            var E = g.getAttribute("data-emotion").split(" "), f = 1;
            f < E.length;
            f++
          )
            i[E[f]] = !0;
          u.push(g);
        }
      );
    var s,
      a = [fg, dg];
    {
      var m,
        h = [
          ig,
          ug(function (g) {
            m.insert(g);
          }),
        ],
        d = lg(a.concat(o, h)),
        w = function (E) {
          return Hn(rg(E), d);
        };
      s = function (E, f, c, p) {
        (m = c),
          w(E ? E + "{" + f.styles + "}" : f.styles),
          p && (y.inserted[f.name] = !0);
      };
    }
    var y = {
      key: n,
      sheet: new V0({
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
      insert: s,
    };
    return y.sheet.hydrate(u), y;
  },
  bu = {},
  gg = {
    get exports() {
      return bu;
    },
    set exports(e) {
      bu = e;
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
 */ var he = typeof Symbol == "function" && Symbol.for,
  Ks = he ? Symbol.for("react.element") : 60103,
  Qs = he ? Symbol.for("react.portal") : 60106,
  Vi = he ? Symbol.for("react.fragment") : 60107,
  Hi = he ? Symbol.for("react.strict_mode") : 60108,
  Ki = he ? Symbol.for("react.profiler") : 60114,
  Qi = he ? Symbol.for("react.provider") : 60109,
  Gi = he ? Symbol.for("react.context") : 60110,
  Gs = he ? Symbol.for("react.async_mode") : 60111,
  Yi = he ? Symbol.for("react.concurrent_mode") : 60111,
  Xi = he ? Symbol.for("react.forward_ref") : 60112,
  Zi = he ? Symbol.for("react.suspense") : 60113,
  yg = he ? Symbol.for("react.suspense_list") : 60120,
  Ji = he ? Symbol.for("react.memo") : 60115,
  qi = he ? Symbol.for("react.lazy") : 60116,
  vg = he ? Symbol.for("react.block") : 60121,
  wg = he ? Symbol.for("react.fundamental") : 60117,
  Sg = he ? Symbol.for("react.responder") : 60118,
  xg = he ? Symbol.for("react.scope") : 60119;
function Ge(e) {
  if (typeof e == "object" && e !== null) {
    var t = e.$$typeof;
    switch (t) {
      case Ks:
        switch (((e = e.type), e)) {
          case Gs:
          case Yi:
          case Vi:
          case Ki:
          case Hi:
          case Zi:
            return e;
          default:
            switch (((e = e && e.$$typeof), e)) {
              case Gi:
              case Xi:
              case qi:
              case Ji:
              case Qi:
                return e;
              default:
                return t;
            }
        }
      case Qs:
        return t;
    }
  }
}
function fp(e) {
  return Ge(e) === Yi;
}
W.AsyncMode = Gs;
W.ConcurrentMode = Yi;
W.ContextConsumer = Gi;
W.ContextProvider = Qi;
W.Element = Ks;
W.ForwardRef = Xi;
W.Fragment = Vi;
W.Lazy = qi;
W.Memo = Ji;
W.Portal = Qs;
W.Profiler = Ki;
W.StrictMode = Hi;
W.Suspense = Zi;
W.isAsyncMode = function (e) {
  return fp(e) || Ge(e) === Gs;
};
W.isConcurrentMode = fp;
W.isContextConsumer = function (e) {
  return Ge(e) === Gi;
};
W.isContextProvider = function (e) {
  return Ge(e) === Qi;
};
W.isElement = function (e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ks;
};
W.isForwardRef = function (e) {
  return Ge(e) === Xi;
};
W.isFragment = function (e) {
  return Ge(e) === Vi;
};
W.isLazy = function (e) {
  return Ge(e) === qi;
};
W.isMemo = function (e) {
  return Ge(e) === Ji;
};
W.isPortal = function (e) {
  return Ge(e) === Qs;
};
W.isProfiler = function (e) {
  return Ge(e) === Ki;
};
W.isStrictMode = function (e) {
  return Ge(e) === Hi;
};
W.isSuspense = function (e) {
  return Ge(e) === Zi;
};
W.isValidElementType = function (e) {
  return (
    typeof e == "string" ||
    typeof e == "function" ||
    e === Vi ||
    e === Yi ||
    e === Ki ||
    e === Hi ||
    e === Zi ||
    e === yg ||
    (typeof e == "object" &&
      e !== null &&
      (e.$$typeof === qi ||
        e.$$typeof === Ji ||
        e.$$typeof === Qi ||
        e.$$typeof === Gi ||
        e.$$typeof === Xi ||
        e.$$typeof === wg ||
        e.$$typeof === Sg ||
        e.$$typeof === xg ||
        e.$$typeof === vg))
  );
};
W.typeOf = Ge;
(function (e) {
  e.exports = W;
})(gg);
var dp = bu,
  kg = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
  },
  Cg = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0,
  },
  pp = {};
pp[dp.ForwardRef] = kg;
pp[dp.Memo] = Cg;
var Eg = !0;
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
    (r === !1 || Eg === !1) &&
      t.registered[o] === void 0 &&
      (t.registered[o] = n.styles);
  },
  Pg = function (t, n, r) {
    hp(t, n, r);
    var o = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function Tg(e) {
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
var Rg = {
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
  $g = /[A-Z]|^ms/g,
  zg = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  mp = function (t) {
    return t.charCodeAt(1) === 45;
  },
  Ec = function (t) {
    return t != null && typeof t != "boolean";
  },
  Wl = rp(function (e) {
    return mp(e) ? e : e.replace($g, "-$&").toLowerCase();
  }),
  _c = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(zg, function (r, o, i) {
            return (mt = { name: o, styles: i, next: mt }), o;
          });
    }
    return Rg[t] !== 1 && !mp(t) && typeof n == "number" && n !== 0
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
      return Og(e, t, n);
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
  var u = t[n];
  return u !== void 0 ? u : n;
}
function Og(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++) r += eo(e, t, n[o]) + ";";
  else
    for (var i in n) {
      var l = n[i];
      if (typeof l != "object")
        t != null && t[l] !== void 0
          ? (r += i + "{" + t[l] + "}")
          : Ec(l) && (r += Wl(i) + ":" + _c(i, l) + ";");
      else if (
        Array.isArray(l) &&
        typeof l[0] == "string" &&
        (t == null || t[l[0]] === void 0)
      )
        for (var u = 0; u < l.length; u++)
          Ec(l[u]) && (r += Wl(i) + ":" + _c(i, l[u]) + ";");
      else {
        var s = eo(e, t, l);
        switch (i) {
          case "animation":
          case "animationName": {
            r += Wl(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var Pc = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
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
    for (var u = 1; u < t.length; u++) (i += eo(r, n, t[u])), o && (i += l[u]);
    Pc.lastIndex = 0;
    for (var s = "", a; (a = Pc.exec(i)) !== null; ) s += "-" + a[1];
    var m = Tg(i) + s;
    return { name: m, styles: i, next: mt };
  },
  Ng = function (t) {
    return t();
  },
  Mg = fa["useInsertionEffect"] ? fa["useInsertionEffect"] : !1,
  Lg = Mg || Ng,
  yp = P.createContext(typeof HTMLElement < "u" ? mg({ key: "css" }) : null);
yp.Provider;
var Ig = function (t) {
    return P.forwardRef(function (n, r) {
      var o = P.useContext(yp);
      return t(n, o, r);
    });
  },
  Ag = P.createContext({});
function Fg() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return gp(t);
}
var Ys = function () {
    var t = Fg.apply(void 0, arguments),
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
  Dg = U0,
  jg = function (t) {
    return t !== "theme";
  },
  Tc = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? Dg : jg;
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
  Bg = function (t) {
    var n = t.cache,
      r = t.serialized,
      o = t.isStringTag;
    return (
      hp(n, r, o),
      Lg(function () {
        return Pg(n, r, o);
      }),
      null
    );
  },
  Ug = function e(t, n) {
    var r = t.__emotion_real === t,
      o = (r && t.__emotion_base) || t,
      i,
      l;
    n !== void 0 && ((i = n.label), (l = n.target));
    var u = Rc(t, n, r),
      s = u || Tc(o),
      a = !s("as");
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
      var y = Ig(function (g, E, f) {
        var c = (a && g.as) || o,
          p = "",
          v = [],
          S = g;
        if (g.theme == null) {
          S = {};
          for (var k in g) S[k] = g[k];
          S.theme = P.useContext(Ag);
        }
        typeof g.className == "string"
          ? (p = _g(E.registered, v, g.className))
          : g.className != null && (p = g.className + " ");
        var x = gp(h.concat(v), E.registered, S);
        (p += E.key + "-" + x.name), l !== void 0 && (p += " " + l);
        var T = a && u === void 0 ? Tc(c) : s,
          z = {};
        for (var $ in g) (a && $ === "as") || (T($) && (z[$] = g[$]));
        return (
          (z.className = p),
          (z.ref = f),
          P.createElement(
            P.Fragment,
            null,
            P.createElement(Bg, {
              cache: E,
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
        (y.__emotion_forwardProp = u),
        Object.defineProperty(y, "toString", {
          value: function () {
            return "." + l;
          },
        }),
        (y.withComponent = function (g, E) {
          return e(g, O({}, n, E, { shouldForwardProp: Rc(y, E, !0) })).apply(
            void 0,
            h
          );
        }),
        y
      );
    };
  },
  Wg = [
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
  Vu = Ug.bind();
Wg.forEach(function (e) {
  Vu[e] = Vu(e);
});
const bg = Vu;
/**
 * @mui/styled-engine v5.11.8
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ function vp(e, t) {
  return bg(e, t);
}
const Vg = (e, t) => {
  Array.isArray(e.__emotion_styles) &&
    (e.__emotion_styles = t(e.__emotion_styles));
};
function Nr(e, t) {
  return t ? Tt(e, t, { clone: !1 }) : e;
}
const Xs = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
  $c = {
    keys: ["xs", "sm", "md", "lg", "xl"],
    up: (e) => `@media (min-width:${Xs[e]}px)`,
  };
function Nt(e, t, n) {
  const r = e.theme || {};
  if (Array.isArray(t)) {
    const i = r.breakpoints || $c;
    return t.reduce((l, u, s) => ((l[i.up(i.keys[s])] = n(t[s])), l), {});
  }
  if (typeof t == "object") {
    const i = r.breakpoints || $c;
    return Object.keys(t).reduce((l, u) => {
      if (Object.keys(i.values || Xs).indexOf(u) !== -1) {
        const s = i.up(u);
        l[s] = n(t[u], u);
      } else {
        const s = u;
        l[s] = t[s];
      }
      return l;
    }, {});
  }
  return n(t);
}
function Hg(e = {}) {
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
function Kg(e, t) {
  return e.reduce((n, r) => {
    const o = n[r];
    return (!o || Object.keys(o).length === 0) && delete n[r], n;
  }, t);
}
function el(e, t, n = !0) {
  if (!t || typeof t != "string") return null;
  if (e && e.vars && n) {
    const r = `vars.${t}`
      .split(".")
      .reduce((o, i) => (o && o[i] ? o[i] : null), e);
    if (r != null) return r;
  }
  return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
}
function xi(e, t, n, r = n) {
  let o;
  return (
    typeof e == "function"
      ? (o = e(n))
      : Array.isArray(e)
      ? (o = e[n] || r)
      : (o = el(e, n) || r),
    t && (o = t(o, r, e)),
    o
  );
}
function B(e) {
  const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
    i = (l) => {
      if (l[t] == null) return null;
      const u = l[t],
        s = l.theme,
        a = el(s, r) || {};
      return Nt(l, u, (h) => {
        let d = xi(a, o, h);
        return (
          h === d &&
            typeof h == "string" &&
            (d = xi(a, o, `${t}${h === "default" ? "" : ye(h)}`, h)),
          n === !1 ? d : { [n]: d }
        );
      });
    };
  return (i.propTypes = {}), (i.filterProps = [t]), i;
}
function tl(...e) {
  const t = e.reduce(
      (r, o) => (
        o.filterProps.forEach((i) => {
          r[i] = o;
        }),
        r
      ),
      {}
    ),
    n = (r) => Object.keys(r).reduce((o, i) => (t[i] ? Nr(o, t[i](r)) : o), {});
  return (
    (n.propTypes = {}),
    (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
    n
  );
}
function Qg(e) {
  const t = {};
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
const Gg = { m: "margin", p: "padding" },
  Yg = {
    t: "Top",
    r: "Right",
    b: "Bottom",
    l: "Left",
    x: ["Left", "Right"],
    y: ["Top", "Bottom"],
  },
  zc = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
  Xg = Qg((e) => {
    if (e.length > 2)
      if (zc[e]) e = zc[e];
      else return [e];
    const [t, n] = e.split(""),
      r = Gg[t],
      o = Yg[n] || "";
    return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
  }),
  Zs = [
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
  Js = [
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
[...Zs, ...Js];
function uo(e, t, n, r) {
  var o;
  const i = (o = el(e, t, !1)) != null ? o : n;
  return typeof i == "number"
    ? (l) => (typeof l == "string" ? l : i * l)
    : Array.isArray(i)
    ? (l) => (typeof l == "string" ? l : i[l])
    : typeof i == "function"
    ? i
    : () => {};
}
function wp(e) {
  return uo(e, "spacing", 8);
}
function so(e, t) {
  if (typeof t == "string" || t == null) return t;
  const n = Math.abs(t),
    r = e(n);
  return t >= 0 ? r : typeof r == "number" ? -r : `-${r}`;
}
function Zg(e, t) {
  return (n) => e.reduce((r, o) => ((r[o] = so(t, n)), r), {});
}
function Jg(e, t, n, r) {
  if (t.indexOf(n) === -1) return null;
  const o = Xg(n),
    i = Zg(o, r),
    l = e[n];
  return Nt(e, l, i);
}
function Sp(e, t) {
  const n = wp(e.theme);
  return Object.keys(e)
    .map((r) => Jg(e, t, r, n))
    .reduce(Nr, {});
}
function ee(e) {
  return Sp(e, Zs);
}
ee.propTypes = {};
ee.filterProps = Zs;
function te(e) {
  return Sp(e, Js);
}
te.propTypes = {};
te.filterProps = Js;
function yt(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const qg = B({ prop: "border", themeKey: "borders", transform: yt }),
  ey = B({ prop: "borderTop", themeKey: "borders", transform: yt }),
  ty = B({ prop: "borderRight", themeKey: "borders", transform: yt }),
  ny = B({ prop: "borderBottom", themeKey: "borders", transform: yt }),
  ry = B({ prop: "borderLeft", themeKey: "borders", transform: yt }),
  oy = B({ prop: "borderColor", themeKey: "palette" }),
  iy = B({ prop: "borderTopColor", themeKey: "palette" }),
  ly = B({ prop: "borderRightColor", themeKey: "palette" }),
  uy = B({ prop: "borderBottomColor", themeKey: "palette" }),
  sy = B({ prop: "borderLeftColor", themeKey: "palette" }),
  nl = (e) => {
    if (e.borderRadius !== void 0 && e.borderRadius !== null) {
      const t = uo(e.theme, "shape.borderRadius", 4),
        n = (r) => ({ borderRadius: so(t, r) });
      return Nt(e, e.borderRadius, n);
    }
    return null;
  };
nl.propTypes = {};
nl.filterProps = ["borderRadius"];
tl(qg, ey, ty, ny, ry, oy, iy, ly, uy, sy, nl);
const rl = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = uo(e.theme, "spacing", 8),
      n = (r) => ({ gap: so(t, r) });
    return Nt(e, e.gap, n);
  }
  return null;
};
rl.propTypes = {};
rl.filterProps = ["gap"];
const ol = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = uo(e.theme, "spacing", 8),
      n = (r) => ({ columnGap: so(t, r) });
    return Nt(e, e.columnGap, n);
  }
  return null;
};
ol.propTypes = {};
ol.filterProps = ["columnGap"];
const il = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = uo(e.theme, "spacing", 8),
      n = (r) => ({ rowGap: so(t, r) });
    return Nt(e, e.rowGap, n);
  }
  return null;
};
il.propTypes = {};
il.filterProps = ["rowGap"];
const ay = B({ prop: "gridColumn" }),
  cy = B({ prop: "gridRow" }),
  fy = B({ prop: "gridAutoFlow" }),
  dy = B({ prop: "gridAutoColumns" }),
  py = B({ prop: "gridAutoRows" }),
  hy = B({ prop: "gridTemplateColumns" }),
  my = B({ prop: "gridTemplateRows" }),
  gy = B({ prop: "gridTemplateAreas" }),
  yy = B({ prop: "gridArea" });
tl(rl, ol, il, ay, cy, fy, dy, py, hy, my, gy, yy);
function Kn(e, t) {
  return t === "grey" ? t : e;
}
const vy = B({ prop: "color", themeKey: "palette", transform: Kn }),
  wy = B({
    prop: "bgcolor",
    cssProperty: "backgroundColor",
    themeKey: "palette",
    transform: Kn,
  }),
  Sy = B({ prop: "backgroundColor", themeKey: "palette", transform: Kn });
tl(vy, wy, Sy);
function Ue(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const xy = B({ prop: "width", transform: Ue }),
  qs = (e) => {
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
            Xs[n] ||
            Ue(n),
        };
      };
      return Nt(e, e.maxWidth, t);
    }
    return null;
  };
qs.filterProps = ["maxWidth"];
const ky = B({ prop: "minWidth", transform: Ue }),
  Cy = B({ prop: "height", transform: Ue }),
  Ey = B({ prop: "maxHeight", transform: Ue }),
  _y = B({ prop: "minHeight", transform: Ue });
B({ prop: "size", cssProperty: "width", transform: Ue });
B({ prop: "size", cssProperty: "height", transform: Ue });
const Py = B({ prop: "boxSizing" });
tl(xy, qs, ky, Cy, Ey, _y, Py);
const Ty = {
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
    borderRadius: { themeKey: "shape.borderRadius", style: nl },
    color: { themeKey: "palette", transform: Kn },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: Kn,
    },
    backgroundColor: { themeKey: "palette", transform: Kn },
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
    gap: { style: rl },
    rowGap: { style: il },
    columnGap: { style: ol },
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
    maxWidth: { style: qs },
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
  ll = Ty;
function Ry(...e) {
  const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
    n = new Set(t);
  return e.every((r) => n.size === Object.keys(r).length);
}
function $y(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function zy() {
  function e(n, r, o, i) {
    const l = { [n]: r, theme: o },
      u = i[n];
    if (!u) return { [n]: r };
    const { cssProperty: s = n, themeKey: a, transform: m, style: h } = u;
    if (r == null) return null;
    const d = el(o, a) || {};
    return h
      ? h(l)
      : Nt(l, r, (y) => {
          let g = xi(d, m, y);
          return (
            y === g &&
              typeof y == "string" &&
              (g = xi(d, m, `${n}${y === "default" ? "" : ye(y)}`, y)),
            s === !1 ? g : { [s]: g }
          );
        });
  }
  function t(n) {
    var r;
    const { sx: o, theme: i = {} } = n || {};
    if (!o) return null;
    const l = (r = i.unstable_sxConfig) != null ? r : ll;
    function u(s) {
      let a = s;
      if (typeof s == "function") a = s(i);
      else if (typeof s != "object") return s;
      if (!a) return null;
      const m = Hg(i.breakpoints),
        h = Object.keys(m);
      let d = m;
      return (
        Object.keys(a).forEach((w) => {
          const y = $y(a[w], i);
          if (y != null)
            if (typeof y == "object")
              if (l[w]) d = Nr(d, e(w, y, i, l));
              else {
                const g = Nt({ theme: i }, y, (E) => ({ [w]: E }));
                Ry(g, y) ? (d[w] = t({ sx: y, theme: i })) : (d = Nr(d, g));
              }
            else d = Nr(d, e(w, y, i, l));
        }),
        Kg(h, d)
      );
    }
    return Array.isArray(o) ? o.map(u) : u(o);
  }
  return t;
}
const xp = zy();
xp.filterProps = ["sx"];
const ul = xp,
  Oy = ["sx"],
  Ny = (e) => {
    var t, n;
    const r = { systemProps: {}, otherProps: {} },
      o =
        (t =
          e == null || (n = e.theme) == null ? void 0 : n.unstable_sxConfig) !=
        null
          ? t
          : ll;
    return (
      Object.keys(e).forEach((i) => {
        o[i] ? (r.systemProps[i] = e[i]) : (r.otherProps[i] = e[i]);
      }),
      r
    );
  };
function kp(e) {
  const { sx: t } = e,
    n = we(e, Oy),
    { systemProps: r, otherProps: o } = Ny(n);
  let i;
  return (
    Array.isArray(t)
      ? (i = [r, ...t])
      : typeof t == "function"
      ? (i = (...l) => {
          const u = t(...l);
          return rn(u) ? O({}, r, u) : r;
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
function Ne() {
  for (var e, t, n = 0, r = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = Cp(e)) && (r && (r += " "), (r += t));
  return r;
}
const My = ["values", "unit", "step"],
  Ly = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => O({}, n, { [r.key]: r.val }), {})
    );
  };
function Iy(e) {
  const {
      values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
      unit: n = "px",
      step: r = 5,
    } = e,
    o = we(e, My),
    i = Ly(t),
    l = Object.keys(i);
  function u(d) {
    return `@media (min-width:${typeof t[d] == "number" ? t[d] : d}${n})`;
  }
  function s(d) {
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
    return l.indexOf(d) + 1 < l.length ? a(d, l[l.indexOf(d) + 1]) : u(d);
  }
  function h(d) {
    const w = l.indexOf(d);
    return w === 0
      ? u(l[1])
      : w === l.length - 1
      ? s(l[w])
      : a(d, l[l.indexOf(d) + 1]).replace("@media", "@media not all and");
  }
  return O(
    {
      keys: l,
      values: i,
      up: u,
      down: s,
      between: a,
      only: m,
      not: h,
      unit: n,
    },
    o
  );
}
const Ay = { borderRadius: 4 },
  Fy = Ay;
function Dy(e = 8) {
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
const jy = ["breakpoints", "palette", "spacing", "shape"];
function ea(e = {}, ...t) {
  const { breakpoints: n = {}, palette: r = {}, spacing: o, shape: i = {} } = e,
    l = we(e, jy),
    u = Iy(n),
    s = Dy(o);
  let a = Tt(
    {
      breakpoints: u,
      direction: "ltr",
      components: {},
      palette: O({ mode: "light" }, r),
      spacing: s,
      shape: O({}, Fy, i),
    },
    l
  );
  return (
    (a = t.reduce((m, h) => Tt(m, h), a)),
    (a.unstable_sxConfig = O({}, ll, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (h) {
      return ul({ sx: h, theme: this });
    }),
    a
  );
}
const By = P.createContext(null),
  Uy = By;
function Wy() {
  return P.useContext(Uy);
}
function by(e) {
  return Object.keys(e).length === 0;
}
function Vy(e = null) {
  const t = Wy();
  return !t || by(t) ? e : t;
}
const Hy = ea();
function Ep(e = Hy) {
  return Vy(e);
}
const Ky = ["className", "component"];
function Qy(e = {}) {
  const {
      defaultTheme: t,
      defaultClassName: n = "MuiBox-root",
      generateClassName: r,
    } = e,
    o = vp("div", {
      shouldForwardProp: (l) => l !== "theme" && l !== "sx" && l !== "as",
    })(ul);
  return P.forwardRef(function (u, s) {
    const a = Ep(t),
      m = kp(u),
      { className: h, component: d = "div" } = m,
      w = we(m, Ky);
    return de(
      o,
      O({ as: d, ref: s, className: Ne(h, r ? r(n) : n), theme: a }, w)
    );
  });
}
const Gy = ["variant"];
function Oc(e) {
  return e.length === 0;
}
function _p(e) {
  const { variant: t } = e,
    n = we(e, Gy);
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
const Yy = [
    "name",
    "slot",
    "skipVariantsResolver",
    "skipSx",
    "overridesResolver",
  ],
  Xy = ["theme"],
  Zy = ["theme"];
function yr(e) {
  return Object.keys(e).length === 0;
}
function Jy(e) {
  return typeof e == "string" && e.charCodeAt(0) > 96;
}
const qy = (e, t) =>
    t.components && t.components[e] && t.components[e].styleOverrides
      ? t.components[e].styleOverrides
      : null,
  e1 = (e, t) => {
    let n = [];
    t &&
      t.components &&
      t.components[e] &&
      t.components[e].variants &&
      (n = t.components[e].variants);
    const r = {};
    return (
      n.forEach((o) => {
        const i = _p(o.props);
        r[i] = o.style;
      }),
      r
    );
  },
  t1 = (e, t, n, r) => {
    var o, i;
    const { ownerState: l = {} } = e,
      u = [],
      s =
        n == null || (o = n.components) == null || (i = o[r]) == null
          ? void 0
          : i.variants;
    return (
      s &&
        s.forEach((a) => {
          let m = !0;
          Object.keys(a.props).forEach((h) => {
            l[h] !== a.props[h] && e[h] !== a.props[h] && (m = !1);
          }),
            m && u.push(t[_p(a.props)]);
        }),
      u
    );
  };
function Yo(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const n1 = ea();
function r1(e = {}) {
  const {
      defaultTheme: t = n1,
      rootShouldForwardProp: n = Yo,
      slotShouldForwardProp: r = Yo,
    } = e,
    o = (i) => {
      const l = yr(i.theme) ? t : i.theme;
      return ul(O({}, i, { theme: l }));
    };
  return (
    (o.__mui_systemSx = !0),
    (i, l = {}) => {
      Vg(i, (p) => p.filter((v) => !(v != null && v.__mui_systemSx)));
      const {
          name: u,
          slot: s,
          skipVariantsResolver: a,
          skipSx: m,
          overridesResolver: h,
        } = l,
        d = we(l, Yy),
        w = a !== void 0 ? a : (s && s !== "Root") || !1,
        y = m || !1;
      let g,
        E = Yo;
      s === "Root" ? (E = n) : s ? (E = r) : Jy(i) && (E = void 0);
      const f = vp(i, O({ shouldForwardProp: E, label: g }, d)),
        c = (p, ...v) => {
          const S = v
            ? v.map((z) =>
                typeof z == "function" && z.__emotion_real !== z
                  ? ($) => {
                      let { theme: D } = $,
                        Y = we($, Xy);
                      return z(O({ theme: yr(D) ? t : D }, Y));
                    }
                  : z
              )
            : [];
          let k = p;
          u &&
            h &&
            S.push((z) => {
              const $ = yr(z.theme) ? t : z.theme,
                D = qy(u, $);
              if (D) {
                const Y = {};
                return (
                  Object.entries(D).forEach(([ce, le]) => {
                    Y[ce] =
                      typeof le == "function" ? le(O({}, z, { theme: $ })) : le;
                  }),
                  h(z, Y)
                );
              }
              return null;
            }),
            u &&
              !w &&
              S.push((z) => {
                const $ = yr(z.theme) ? t : z.theme;
                return t1(z, e1(u, $), $, u);
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
                  D = we(z, Zy);
                return p(O({ theme: yr($) ? t : $ }, D));
              });
          return f(k, ...S);
        };
      return f.withConfig && (c.withConfig = f.withConfig), c;
    }
  );
}
function o1(e) {
  const { theme: t, name: n, props: r } = e;
  return !t ||
    !t.components ||
    !t.components[n] ||
    !t.components[n].defaultProps
    ? r
    : Us(t.components[n].defaultProps, r);
}
function i1({ props: e, name: t, defaultTheme: n }) {
  const r = Ep(n);
  return o1({ theme: r, name: t, props: e });
}
function ta(e, t = 0, n = 1) {
  return Math.min(Math.max(t, e), n);
}
function l1(e) {
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
function gn(e) {
  if (e.type) return e;
  if (e.charAt(0) === "#") return gn(l1(e));
  const t = e.indexOf("("),
    n = e.substring(0, t);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(n) === -1)
    throw new Error(er(9, e));
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
      throw new Error(er(10, o));
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
  e = gn(e);
  const { values: t } = e,
    n = t[0],
    r = t[1] / 100,
    o = t[2] / 100,
    i = r * Math.min(o, 1 - o),
    l = (a, m = (a + n / 30) % 12) =>
      o - i * Math.max(Math.min(m - 3, 9 - m, 1), -1);
  let u = "rgb";
  const s = [
    Math.round(l(0) * 255),
    Math.round(l(8) * 255),
    Math.round(l(4) * 255),
  ];
  return (
    e.type === "hsla" && ((u += "a"), s.push(t[3])), sl({ type: u, values: s })
  );
}
function Nc(e) {
  e = gn(e);
  let t = e.type === "hsl" || e.type === "hsla" ? gn(u1(e)).values : e.values;
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
function s1(e, t) {
  const n = Nc(e),
    r = Nc(t);
  return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
}
function No(e, t) {
  return (
    (e = gn(e)),
    (t = ta(t)),
    (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
    e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
    sl(e)
  );
}
function a1(e, t) {
  if (((e = gn(e)), (t = ta(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] *= 1 - t;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
  return sl(e);
}
function c1(e, t) {
  if (((e = gn(e)), (t = ta(t)), e.type.indexOf("hsl") !== -1))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.indexOf("rgb") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
  else if (e.type.indexOf("color") !== -1)
    for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
  return sl(e);
}
function f1(e, t) {
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
const d1 = ["mode", "contrastThreshold", "tonalOffset"],
  Mc = {
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
  bl = {
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
      ? (e.light = c1(e.main, o))
      : t === "dark" && (e.dark = a1(e.main, i)));
}
function p1(e = "light") {
  return e === "dark"
    ? { main: Cn[200], light: Cn[50], dark: Cn[400] }
    : { main: Cn[700], light: Cn[400], dark: Cn[800] };
}
function h1(e = "light") {
  return e === "dark"
    ? { main: kn[200], light: kn[50], dark: kn[400] }
    : { main: kn[500], light: kn[300], dark: kn[700] };
}
function m1(e = "light") {
  return e === "dark"
    ? { main: xn[500], light: xn[300], dark: xn[700] }
    : { main: xn[700], light: xn[400], dark: xn[800] };
}
function g1(e = "light") {
  return e === "dark"
    ? { main: En[400], light: En[300], dark: En[700] }
    : { main: En[700], light: En[500], dark: En[900] };
}
function y1(e = "light") {
  return e === "dark"
    ? { main: _n[400], light: _n[300], dark: _n[700] }
    : { main: _n[800], light: _n[500], dark: _n[900] };
}
function v1(e = "light") {
  return e === "dark"
    ? { main: mr[400], light: mr[300], dark: mr[700] }
    : { main: "#ed6c02", light: mr[500], dark: mr[900] };
}
function w1(e) {
  const {
      mode: t = "light",
      contrastThreshold: n = 3,
      tonalOffset: r = 0.2,
    } = e,
    o = we(e, d1),
    i = e.primary || p1(t),
    l = e.secondary || h1(t),
    u = e.error || m1(t),
    s = e.info || g1(t),
    a = e.success || y1(t),
    m = e.warning || v1(t);
  function h(g) {
    return s1(g, bl.text.primary) >= n ? bl.text.primary : Mc.text.primary;
  }
  const d = ({
      color: g,
      name: E,
      mainShade: f = 500,
      lightShade: c = 300,
      darkShade: p = 700,
    }) => {
      if (
        ((g = O({}, g)),
        !g.main && g[f] && (g.main = g[f]),
        !g.hasOwnProperty("main"))
      )
        throw new Error(er(11, E ? ` (${E})` : "", f));
      if (typeof g.main != "string")
        throw new Error(er(12, E ? ` (${E})` : "", JSON.stringify(g.main)));
      return (
        Lc(g, "light", c, r),
        Lc(g, "dark", p, r),
        g.contrastText || (g.contrastText = h(g.main)),
        g
      );
    },
    w = { dark: bl, light: Mc };
  return Tt(
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
        error: d({ color: u, name: "error" }),
        warning: d({ color: m, name: "warning" }),
        info: d({ color: s, name: "info" }),
        success: d({ color: a, name: "success" }),
        grey: P0,
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
const S1 = [
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
function x1(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Ic = { textTransform: "uppercase" },
  Ac = '"Roboto", "Helvetica", "Arial", sans-serif';
function k1(e, t) {
  const n = typeof t == "function" ? t(e) : t,
    {
      fontFamily: r = Ac,
      fontSize: o = 14,
      fontWeightLight: i = 300,
      fontWeightRegular: l = 400,
      fontWeightMedium: u = 500,
      fontWeightBold: s = 700,
      htmlFontSize: a = 16,
      allVariants: m,
      pxToRem: h,
    } = n,
    d = we(n, S1),
    w = o / 14,
    y = h || ((f) => `${(f / a) * w}rem`),
    g = (f, c, p, v, S) =>
      O(
        { fontFamily: r, fontWeight: f, fontSize: y(c), lineHeight: p },
        r === Ac ? { letterSpacing: `${x1(v / c)}em` } : {},
        S,
        m
      ),
    E = {
      h1: g(i, 96, 1.167, -1.5),
      h2: g(i, 60, 1.2, -0.5),
      h3: g(l, 48, 1.167, 0),
      h4: g(l, 34, 1.235, 0.25),
      h5: g(l, 24, 1.334, 0),
      h6: g(u, 20, 1.6, 0.15),
      subtitle1: g(l, 16, 1.75, 0.15),
      subtitle2: g(u, 14, 1.57, 0.1),
      body1: g(l, 16, 1.5, 0.15),
      body2: g(l, 14, 1.43, 0.15),
      button: g(u, 14, 1.75, 0.4, Ic),
      caption: g(l, 12, 1.66, 0.4),
      overline: g(l, 12, 2.66, 1, Ic),
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
        fontWeightMedium: u,
        fontWeightBold: s,
      },
      E
    ),
    d,
    { clone: !1 }
  );
}
const C1 = 0.2,
  E1 = 0.14,
  _1 = 0.12;
function Q(...e) {
  return [
    `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${C1})`,
    `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${E1})`,
    `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${_1})`,
  ].join(",");
}
const P1 = [
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
  T1 = P1,
  R1 = ["duration", "easing", "delay"],
  $1 = {
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
  },
  z1 = {
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
function O1(e) {
  if (!e) return 0;
  const t = e / 36;
  return Math.round((4 + 15 * t ** 0.25 + t / 5) * 10);
}
function N1(e) {
  const t = O({}, $1, e.easing),
    n = O({}, z1, e.duration);
  return O(
    {
      getAutoHeightDuration: O1,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: u = t.easeInOut,
          delay: s = 0,
        } = i;
        return (
          we(i, R1),
          (Array.isArray(o) ? o : [o])
            .map(
              (a) =>
                `${a} ${typeof l == "string" ? l : Fc(l)} ${u} ${
                  typeof s == "string" ? s : Fc(s)
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
const M1 = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  L1 = M1,
  I1 = [
    "breakpoints",
    "mixins",
    "spacing",
    "palette",
    "transitions",
    "typography",
    "shape",
  ];
function Pp(e = {}, ...t) {
  const {
      mixins: n = {},
      palette: r = {},
      transitions: o = {},
      typography: i = {},
    } = e,
    l = we(e, I1);
  if (e.vars) throw new Error(er(18));
  const u = w1(r),
    s = ea(e);
  let a = Tt(s, {
    mixins: f1(s.breakpoints, n),
    palette: u,
    shadows: T1.slice(),
    typography: k1(u, i),
    transitions: N1(o),
    zIndex: O({}, L1),
  });
  return (
    (a = Tt(a, l)),
    (a = t.reduce((m, h) => Tt(m, h), a)),
    (a.unstable_sxConfig = O({}, ll, l == null ? void 0 : l.unstable_sxConfig)),
    (a.unstable_sx = function (h) {
      return ul({ sx: h, theme: this });
    }),
    a
  );
}
const A1 = Pp(),
  Tp = A1;
function al({ props: e, name: t }) {
  return i1({ props: e, name: t, defaultTheme: Tp });
}
const Rp = (e) => Yo(e) && e !== "classes",
  F1 = r1({ defaultTheme: Tp, rootShouldForwardProp: Rp }),
  wn = F1;
function Hu(e, t) {
  return (
    (Hu = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (r, o) {
          return (r.__proto__ = o), r;
        }),
    Hu(e, t)
  );
}
function D1(e, t) {
  (e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    Hu(e, t);
}
const Dc = Pn.createContext(null);
function j1(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function na(e, t) {
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
function B1(e, t) {
  (e = e || {}), (t = t || {});
  function n(m) {
    return m in t ? t[m] : e[m];
  }
  var r = Object.create(null),
    o = [];
  for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
  var l,
    u = {};
  for (var s in t) {
    if (r[s])
      for (l = 0; l < r[s].length; l++) {
        var a = r[s][l];
        u[r[s][l]] = n(a);
      }
    u[s] = n(s);
  }
  for (l = 0; l < o.length; l++) u[o[l]] = n(o[l]);
  return u;
}
function sn(e, t, n) {
  return n[t] != null ? n[t] : e.props[t];
}
function U1(e, t) {
  return na(e.children, function (n) {
    return P.cloneElement(n, {
      onExited: t.bind(null, n),
      in: !0,
      appear: sn(n, "appear", e),
      enter: sn(n, "enter", e),
      exit: sn(n, "exit", e),
    });
  });
}
function W1(e, t, n) {
  var r = na(e.children),
    o = B1(t, r);
  return (
    Object.keys(o).forEach(function (i) {
      var l = o[i];
      if (P.isValidElement(l)) {
        var u = i in t,
          s = i in r,
          a = t[i],
          m = P.isValidElement(a) && !a.props.in;
        s && (!u || m)
          ? (o[i] = P.cloneElement(l, {
              onExited: n.bind(null, l),
              in: !0,
              exit: sn(l, "exit", e),
              enter: sn(l, "enter", e),
            }))
          : !s && u && !m
          ? (o[i] = P.cloneElement(l, { in: !1 }))
          : s &&
            u &&
            P.isValidElement(a) &&
            (o[i] = P.cloneElement(l, {
              onExited: n.bind(null, l),
              in: a.props.in,
              exit: sn(l, "exit", e),
              enter: sn(l, "enter", e),
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
  V1 = {
    component: "div",
    childFactory: function (t) {
      return t;
    },
  },
  ra = (function (e) {
    D1(t, e);
    function t(r, o) {
      var i;
      i = e.call(this, r, o) || this;
      var l = i.handleExited.bind(j1(i));
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
          u = i.handleExited,
          s = i.firstRender;
        return { children: s ? U1(o, u) : W1(o, l, u), firstRender: !1 };
      }),
      (n.handleExited = function (o, i) {
        var l = na(this.props.children);
        o.key in l ||
          (o.props.onExited && o.props.onExited(i),
          this.mounted &&
            this.setState(function (u) {
              var s = O({}, u.children);
              return delete s[o.key], { children: s };
            }));
      }),
      (n.render = function () {
        var o = this.props,
          i = o.component,
          l = o.childFactory,
          u = we(o, ["component", "childFactory"]),
          s = this.state.contextValue,
          a = b1(this.state.children).map(l);
        return (
          delete u.appear,
          delete u.enter,
          delete u.exit,
          i === null
            ? Pn.createElement(Dc.Provider, { value: s }, a)
            : Pn.createElement(
                Dc.Provider,
                { value: s },
                Pn.createElement(i, u, a)
              )
        );
      }),
      t
    );
  })(Pn.Component);
ra.propTypes = {};
ra.defaultProps = V1;
const H1 = ra;
function K1(e) {
  const {
      className: t,
      classes: n,
      pulsate: r = !1,
      rippleX: o,
      rippleY: i,
      rippleSize: l,
      in: u,
      onExited: s,
      timeout: a,
    } = e,
    [m, h] = P.useState(!1),
    d = Ne(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
    w = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
    y = Ne(n.child, m && n.childLeaving, r && n.childPulsate);
  return (
    !u && !m && h(!0),
    P.useEffect(() => {
      if (!u && s != null) {
        const g = setTimeout(s, a);
        return () => {
          clearTimeout(g);
        };
      }
    }, [s, u, a]),
    de("span", {
      className: d,
      style: w,
      children: de("span", { className: y }),
    })
  );
}
const Q1 = Bi("MuiTouchRipple", [
    "root",
    "ripple",
    "rippleVisible",
    "ripplePulsate",
    "child",
    "childLeaving",
    "childPulsate",
  ]),
  Xe = Q1,
  G1 = ["center", "classes", "className"];
let cl = (e) => e,
  jc,
  Bc,
  Uc,
  Wc;
const Ku = 550,
  Y1 = 80,
  X1 = Ys(
    jc ||
      (jc = cl`
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
  Z1 = Ys(
    Bc ||
      (Bc = cl`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)
  ),
  J1 = Ys(
    Uc ||
      (Uc = cl`
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
  q1 = wn("span", { name: "MuiTouchRipple", slot: "Root" })({
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
  ev = wn(K1, { name: "MuiTouchRipple", slot: "Ripple" })(
    Wc ||
      (Wc = cl`
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
    X1,
    Ku,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Xe.ripplePulsate,
    ({ theme: e }) => e.transitions.duration.shorter,
    Xe.child,
    Xe.childLeaving,
    Z1,
    Ku,
    ({ theme: e }) => e.transitions.easing.easeInOut,
    Xe.childPulsate,
    J1,
    ({ theme: e }) => e.transitions.easing.easeInOut
  ),
  tv = P.forwardRef(function (t, n) {
    const r = al({ props: t, name: "MuiTouchRipple" }),
      { center: o = !1, classes: i = {}, className: l } = r,
      u = we(r, G1),
      [s, a] = P.useState([]),
      m = P.useRef(0),
      h = P.useRef(null);
    P.useEffect(() => {
      h.current && (h.current(), (h.current = null));
    }, [s]);
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
    const E = P.useCallback(
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
              ev,
              {
                classes: {
                  ripple: Ne(i.ripple, Xe.ripple),
                  rippleVisible: Ne(i.rippleVisible, Xe.rippleVisible),
                  ripplePulsate: Ne(i.ripplePulsate, Xe.ripplePulsate),
                  child: Ne(i.child, Xe.child),
                  childLeaving: Ne(i.childLeaving, Xe.childLeaving),
                  childPulsate: Ne(i.childPulsate, Xe.childPulsate),
                },
                timeout: Ku,
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
            const { clientX: Ye, clientY: Pe } =
              v.touches && v.touches.length > 0 ? v.touches[0] : v;
            (Y = Math.round(Ye - D.left)), (ce = Math.round(Pe - D.top));
          }
          if (T)
            (le = Math.sqrt((2 * D.width ** 2 + D.height ** 2) / 3)),
              le % 2 === 0 && (le += 1);
          else {
            const Ye =
                Math.max(Math.abs(($ ? $.clientWidth : 0) - Y), Y) * 2 + 2,
              Pe =
                Math.max(Math.abs(($ ? $.clientHeight : 0) - ce), ce) * 2 + 2;
            le = Math.sqrt(Ye ** 2 + Pe ** 2);
          }
          v != null && v.touches
            ? y.current === null &&
              ((y.current = () => {
                E({
                  pulsate: x,
                  rippleX: Y,
                  rippleY: ce,
                  rippleSize: le,
                  cb: k,
                });
              }),
              (w.current = setTimeout(() => {
                y.current && (y.current(), (y.current = null));
              }, Y1)))
            : E({ pulsate: x, rippleX: Y, rippleY: ce, rippleSize: le, cb: k });
        },
        [o, E]
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
      de(
        q1,
        O({ className: Ne(Xe.root, i.root, l), ref: g }, u, {
          children: de(H1, { component: null, exit: !0, children: s }),
        })
      )
    );
  }),
  nv = tv;
function rv(e) {
  return ji("MuiButtonBase", e);
}
const ov = Bi("MuiButtonBase", ["root", "disabled", "focusVisible"]),
  iv = ov,
  lv = [
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
      l = Ws({ root: ["root", t && "disabled", n && "focusVisible"] }, rv, o);
    return n && r && (l.root += ` ${r}`), l;
  },
  sv = wn("button", {
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
    [`&.${iv.disabled}`]: { pointerEvents: "none", cursor: "default" },
    "@media print": { colorAdjust: "exact" },
  }),
  av = P.forwardRef(function (t, n) {
    const r = al({ props: t, name: "MuiButtonBase" }),
      {
        action: o,
        centerRipple: i = !1,
        children: l,
        className: u,
        component: s = "button",
        disabled: a = !1,
        disableRipple: m = !1,
        disableTouchRipple: h = !1,
        focusRipple: d = !1,
        LinkComponent: w = "a",
        onBlur: y,
        onClick: g,
        onContextMenu: E,
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
        onTouchStart: D,
        tabIndex: Y = 0,
        TouchRippleProps: ce,
        touchRippleRef: le,
        type: Ye,
      } = r,
      Pe = we(r, lv),
      rt = P.useRef(null),
      _ = P.useRef(null),
      M = vc(_, le),
      { isFocusVisibleRef: N, onFocus: b, onBlur: X, ref: xt } = A0(),
      [ue, ft] = P.useState(!1);
    a && ue && ft(!1),
      P.useImperativeHandle(
        o,
        () => ({
          focusVisible: () => {
            ft(!0), rt.current.focus();
          },
        }),
        []
      );
    const [je, Lt] = P.useState(!1);
    P.useEffect(() => {
      Lt(!0);
    }, []);
    const ao = je && !m && !a;
    P.useEffect(() => {
      ue && d && !m && je && _.current.pulsate();
    }, [m, d, ue, je]);
    function Te(L, la, Up = h) {
      return zo(
        (ua) => (la && la(ua), !Up && _.current && _.current[L](ua), !0)
      );
    }
    const co = Te("start", k),
      fl = Te("stop", E),
      oa = Te("stop", f),
      dl = Te("stop", T),
      Op = Te("stop", (L) => {
        ue && L.preventDefault(), x && x(L);
      }),
      Np = Te("start", D),
      Mp = Te("stop", z),
      Lp = Te("stop", $),
      Ip = Te(
        "stop",
        (L) => {
          X(L), N.current === !1 && ft(!1), y && y(L);
        },
        !1
      ),
      Ap = zo((L) => {
        rt.current || (rt.current = L.currentTarget),
          b(L),
          N.current === !0 && (ft(!0), p && p(L)),
          c && c(L);
      }),
      pl = () => {
        const L = rt.current;
        return s && s !== "button" && !(L.tagName === "A" && L.href);
      },
      hl = P.useRef(!1),
      Fp = zo((L) => {
        d &&
          !hl.current &&
          ue &&
          _.current &&
          L.key === " " &&
          ((hl.current = !0),
          _.current.stop(L, () => {
            _.current.start(L);
          })),
          L.target === L.currentTarget &&
            pl() &&
            L.key === " " &&
            L.preventDefault(),
          v && v(L),
          L.target === L.currentTarget &&
            pl() &&
            L.key === "Enter" &&
            !a &&
            (L.preventDefault(), g && g(L));
      }),
      Dp = zo((L) => {
        d &&
          L.key === " " &&
          _.current &&
          ue &&
          !L.defaultPrevented &&
          ((hl.current = !1),
          _.current.stop(L, () => {
            _.current.pulsate(L);
          })),
          S && S(L),
          g &&
            L.target === L.currentTarget &&
            pl() &&
            L.key === " " &&
            !L.defaultPrevented &&
            g(L);
      });
    let fo = s;
    fo === "button" && (Pe.href || Pe.to) && (fo = w);
    const lr = {};
    fo === "button"
      ? ((lr.type = Ye === void 0 ? "button" : Ye), (lr.disabled = a))
      : (!Pe.href && !Pe.to && (lr.role = "button"),
        a && (lr["aria-disabled"] = a));
    const jp = vc(n, xt, rt),
      ia = O({}, r, {
        centerRipple: i,
        component: s,
        disabled: a,
        disableRipple: m,
        disableTouchRipple: h,
        focusRipple: d,
        tabIndex: Y,
        focusVisible: ue,
      }),
      Bp = uv(ia);
    return kr(
      sv,
      O(
        {
          as: fo,
          className: Ne(Bp.root, u),
          ownerState: ia,
          onBlur: Ip,
          onClick: g,
          onContextMenu: fl,
          onFocus: Ap,
          onKeyDown: Fp,
          onKeyUp: Dp,
          onMouseDown: co,
          onMouseLeave: Op,
          onMouseUp: dl,
          onDragLeave: oa,
          onTouchEnd: Mp,
          onTouchMove: Lp,
          onTouchStart: Np,
          ref: jp,
          tabIndex: a ? -1 : Y,
          type: Ye,
        },
        lr,
        Pe,
        { children: [l, ao ? de(nv, O({ ref: M, center: i }, ce)) : null] }
      )
    );
  }),
  cv = av;
function fv(e) {
  return ji("MuiTypography", e);
}
Bi("MuiTypography", [
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
const dv = [
    "align",
    "className",
    "component",
    "gutterBottom",
    "noWrap",
    "paragraph",
    "variant",
    "variantMapping",
  ],
  pv = (e) => {
    const {
        align: t,
        gutterBottom: n,
        noWrap: r,
        paragraph: o,
        variant: i,
        classes: l,
      } = e,
      u = {
        root: [
          "root",
          i,
          e.align !== "inherit" && `align${ye(t)}`,
          n && "gutterBottom",
          r && "noWrap",
          o && "paragraph",
        ],
      };
    return Ws(u, fv, l);
  },
  hv = wn("span", {
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
  mv = {
    primary: "primary.main",
    textPrimary: "text.primary",
    secondary: "secondary.main",
    textSecondary: "text.secondary",
    error: "error.main",
  },
  gv = (e) => mv[e] || e,
  yv = P.forwardRef(function (t, n) {
    const r = al({ props: t, name: "MuiTypography" }),
      o = gv(r.color),
      i = kp(O({}, r, { color: o })),
      {
        align: l = "inherit",
        className: u,
        component: s,
        gutterBottom: a = !1,
        noWrap: m = !1,
        paragraph: h = !1,
        variant: d = "body1",
        variantMapping: w = bc,
      } = i,
      y = we(i, dv),
      g = O({}, i, {
        align: l,
        color: o,
        className: u,
        component: s,
        gutterBottom: a,
        noWrap: m,
        paragraph: h,
        variant: d,
        variantMapping: w,
      }),
      E = s || (h ? "p" : w[d] || bc[d]) || "span",
      f = pv(g);
    return de(
      hv,
      O({ as: E, ref: n, ownerState: g, className: Ne(f.root, u) }, y)
    );
  }),
  Vl = yv,
  vv = Pp(),
  wv = Qy({
    defaultTheme: vv,
    defaultClassName: "MuiBox-root",
    generateClassName: np.generate,
  }),
  Vc = wv;
function Sv(e) {
  return ji("MuiButton", e);
}
const xv = Bi("MuiButton", [
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
  Mo = xv,
  kv = P.createContext({}),
  Cv = kv,
  Ev = [
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
      u = {
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
      s = Ws(u, Sv, l);
    return O({}, l, s);
  },
  $p = (e) =>
    O(
      {},
      e.size === "small" && { "& > *:nth-of-type(1)": { fontSize: 18 } },
      e.size === "medium" && { "& > *:nth-of-type(1)": { fontSize: 20 } },
      e.size === "large" && { "& > *:nth-of-type(1)": { fontSize: 22 } }
    ),
  Pv = wn(cv, {
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
          [`&.${Mo.focusVisible}`]: O(
            {},
            t.variant === "contained" && { boxShadow: (e.vars || e).shadows[6] }
          ),
          [`&.${Mo.disabled}`]: O(
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
        [`&.${Mo.focusVisible}`]: { boxShadow: "none" },
        "&:active": { boxShadow: "none" },
        [`&.${Mo.disabled}`]: { boxShadow: "none" },
      }
  ),
  Tv = wn("span", {
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
  Rv = wn("span", {
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
  $v = P.forwardRef(function (t, n) {
    const r = P.useContext(Cv),
      o = Us(r, t),
      i = al({ props: o, name: "MuiButton" }),
      {
        children: l,
        color: u = "primary",
        component: s = "button",
        className: a,
        disabled: m = !1,
        disableElevation: h = !1,
        disableFocusRipple: d = !1,
        endIcon: w,
        focusVisibleClassName: y,
        fullWidth: g = !1,
        size: E = "medium",
        startIcon: f,
        type: c,
        variant: p = "text",
      } = i,
      v = we(i, Ev),
      S = O({}, i, {
        color: u,
        component: s,
        disabled: m,
        disableElevation: h,
        disableFocusRipple: d,
        fullWidth: g,
        size: E,
        type: c,
        variant: p,
      }),
      k = _v(S),
      x = f && de(Tv, { className: k.startIcon, ownerState: S, children: f }),
      T = w && de(Rv, { className: k.endIcon, ownerState: S, children: w });
    return kr(
      Pv,
      O(
        {
          ownerState: S,
          className: Ne(r.className, k.root, a),
          component: s,
          disabled: m,
          focusRipple: !d,
          focusVisibleClassName: Ne(k.focusVisible, y),
          ref: n,
          type: c,
        },
        v,
        { classes: k, children: [x, l, T] }
      )
    );
  }),
  zv = $v;
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
function Ov() {
  const [e, t] = P.useState(!1),
    [n, r] = P.useState(null),
    [o, i] = P.useState(100);
  let l = localStorage.getItem("scratchCardConfig");
  l = JSON.parse(l);
  const { shopConfig: u, discountCodes: s } = l,
    {
      "border-color": a,
      "bg-color": m,
      height: h,
      "text-color": d,
      "border-radius": w,
      "border-width": y,
      "font-size": g,
      "selected-title-font-style": E,
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
      "selected-custom-card-image": D,
      "selected-devices": Y,
    } = u,
    ce = Math.floor(Math.random() * 4);
  let le = localStorage.getItem("currentSessionScratchCardCode");
  le == null && localStorage.setItem("currentSessionScratchCardCode", ce);
  const Ye = s[Number(le)];
  let Pe = localStorage.getItem("productHandle");
  const rt = u["product-selection"],
    _ = u["selected-products"];
  let M = rt === "selected-products",
    N = !0,
    b = P.useRef(null),
    X = P.useRef(null);
  P.useEffect(() => (b.current && i(b.current.offsetWidth), () => {}), []);
  let xt = window.innerWidth;
  console.log("🚀 ~ file: App.js:62 ~ App ~ deviceWidth", xt);
  let ue = xt < 500;
  console.log("🚀 ~ file: App.js:64 ~ App ~ isMobile", ue),
    M && (N = _.some((Te) => Te.handle === Pe)),
    Y.includes("mobile") && ue
      ? (console.log("for mobile"), (N = !0))
      : Y.includes("desktop") && !ue
      ? (console.log("for desktop"), (N = !0))
      : (console.log("for none"), (N = !1)),
    P.useEffect(() => {
      if (N) {
        console.log(X);
        let Te = $;
        Te
          ? (console.log("custom scratch card selected", Te), r(D))
          : (console.log(
              "scratch card style selected",
              `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${x
                .split(" ")
                .join("-")}.png`
            ),
            r(
              `https://cdn.jsdelivr.net/gh/shafiimam/scratch-card-app/scratch-card-style/${x
                .split(" ")
                .join("-")}.png`
            ));
      }
    }, [N]);
  const ft = async () => {
      const co = (await fetch("/cart.js")).json(),
        fl = co.attributes;
      if (co.item_count === 0) {
        alert("Add one or more item in cart first!");
        return;
      }
      await fetch(`/discount/${Ye}`)
        .then((dl) => {
          t(!0),
            fetch("/cart/update.js", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                attributes: { ...fl, addedby: "scratch-card-app" },
              }),
            });
        })
        .catch((dl) => t(!0));
    },
    je = Hc(E),
    Lt = Hc(k);
  let ao = null;
  return (
    console.log("scratch card image", n),
    N &&
      (console.log("widget will show"),
      (ao = kr("div", {
        className: "scratch-card-app",
        children: [
          de(Vl, {
            sx: {
              ...je,
              width: "100%",
              fontSize: `${f}px`,
              textAlign: c && "center",
            },
            children: T,
          }),
          de(Vl, {
            sx: {
              ...Lt,
              width: "100%",
              fontSize: `${v}px`,
              textAlign: S && "center",
            },
            children: z,
          }),
          de(Vc, {
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
            children: kr(Vc, {
              className: "",
              sx: {
                position: "absolute",
                height: "100%",
                width: "100%",
                border: `${y}px solid ${a}`,
                borderRadius: `${w}px`,
              },
              children: [
                de("canvas", {
                  ref: X,
                  width: o,
                  height: h,
                  id: "scratch",
                  className: "ScratchCard__Canvas",
                  style: {
                    background: `url(${n})`,
                    width: o,
                    height: h,
                    borderRadius: `${w - 4}px`,
                    transform: "translate(-50%, -50%)",
                    top: "50%",
                    left: "50%",
                  },
                }),
                kr("div", {
                  className: "base",
                  style: {
                    top: "50%",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: m,
                    borderRadius: `${w - 4}px`,
                    transition: "all 1s ease",
                  },
                  children: [
                    de(Vl, {
                      variant: "h6",
                      sx: { fontSize: `${g}px`, color: d },
                      children: Ye,
                    }),
                    de(zv, {
                      variant: "text",
                      sx: { color: d, borderRadius: 0 },
                      disabled: e,
                      onClick: ft,
                      children: e ? "Applied On Checkout" : "Apply Discount",
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }))),
    de(ph, { children: ao })
  );
}
async function Nv() {
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
        "border-color": "#9feb34",
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
function Mv() {
  Hl.createRoot(document.getElementById("scratch-card-app-root")).render(
    de(Ov, {})
  );
}
let zp = !1;
window.addEventListener("DOMContentLoaded", function () {
  (zp = !0),
    console.log("======= INIT :: SCRATCH-CARD-APP ======="),
    Nv().then(() => {
      Mv(), setTimeout(Lv(), 4e3);
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
function Lv() {
  let e = !1,
    t = null,
    n = setInterval(() => {
      if (e) {
        clearInterval(n);
        return;
      }
      if (((t = document.querySelector(".ScratchCard__Canvas")), t)) {
        console.log("canvas found", e), (e = !0), clearInterval(n);
        let r = t.getContext("2d"),
          o = 0,
          i = 0,
          l = !1,
          u = {
            mouse: { down: "mousedown", move: "mousemove", up: "mouseup" },
            touch: { down: "touchstart", move: "touchmove", up: "touchend" },
          },
          s = "";
        const a = () => {
          try {
            return document.createEvent("TouchEvent"), (s = "touch"), !0;
          } catch {
            return (s = "mouse"), !1;
          }
        };
        let m = t.getBoundingClientRect().left,
          h = t.getBoundingClientRect().top;
        const d = (y) => {
          (o = (a() ? y.touches[0].pageX : y.pageX) - m),
            (i = (a() ? y.touches[0].pageY : y.pageY) - h);
        };
        a(),
          t.addEventListener(u[s].down, (y) => {
            (l = !0), d(y), w(o, i);
          }),
          t.addEventListener(u[s].move, (y) => {
            a() || y.preventDefault(), l && (d(y), w(o, i));
          }),
          t.addEventListener(u[s].up, () => {
            l = !1;
          }),
          t.addEventListener("mouseleave", () => {
            l = !1;
          });
        const w = (y, g) => {
          console.log("mouse move", y, g);
          const E = r.getImageData(0, 0, t.width, t.height).data;
          console.log("🚀 ~ file: main.jsx:208 ~ scratch ~ imageData", E);
          const f = E.length / 4;
          console.log("🚀 ~ file: main.jsx:210 ~ scratch ~ nrOfPixels ", f);
          let c = 0;
          for (let v = 3; v < E.length; v += 4) c += E[v] ? 0 : 1;
          (c / f) * 100 < 20 &&
            (document.querySelector(".base").style.zIndex = 100),
            r.beginPath(),
            r.arc(y, g, 20, 0, Math.PI * 2, !1),
            (r.fillStyle = "white"),
            (r.strokeStyle = "white"),
            r.fill();
        };
      }
    }, 1e3);
}
