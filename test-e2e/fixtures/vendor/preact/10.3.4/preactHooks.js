import { options as n } from "preact";
var t,
	r,
	u,
	i = [],
	o = n.__r,
	f = n.diffed,
	c = n.__c,
	e = n.unmount;
function a(t) {
	n.__h && n.__h(r);
	var u = r.__H || (r.__H = { __: [], __h: [] });
	return t >= u.__.length && u.__.push({}), u.__[t];
}
function v(n) {
	return m(x, n);
}
function m(n, u, i) {
	var o = a(t++);
	return (
		o.__c ||
			((o.__c = r),
			(o.__ = [
				i ? i(u) : x(void 0, u),
				function (t) {
					var r = n(o.__[0], t);
					o.__[0] !== r && ((o.__[0] = r), o.__c.setState({}));
				},
			])),
		o.__
	);
}
function p(n, u) {
	var i = a(t++);
	q(i.__H, u) && ((i.__ = n), (i.__H = u), r.__H.__h.push(i));
}
function l(n, u) {
	var i = a(t++);
	q(i.__H, u) && ((i.__ = n), (i.__H = u), r.__h.push(i));
}
function y(n) {
	return s(function () {
		return { current: n };
	}, []);
}
function d(n, t, r) {
	l(
		function () {
			"function" == typeof n ? n(t()) : n && (n.current = t());
		},
		null == r ? r : r.concat(n),
	);
}
function s(n, r) {
	var u = a(t++);
	return q(u.__H, r) ? ((u.__H = r), (u.__h = n), (u.__ = n())) : u.__;
}
function h(n, t) {
	return s(function () {
		return n;
	}, t);
}
function T(n) {
	var u = r.context[n.__c];
	if (!u) return n.__;
	var i = a(t++);
	return null == i.__ && ((i.__ = !0), u.sub(r)), u.props.value;
}
function w(t, r) {
	n.useDebugValue && n.useDebugValue(r ? r(t) : t);
}
function A(n) {
	var u = a(t++),
		i = v();
	return (
		(u.__ = n),
		r.componentDidCatch ||
			(r.componentDidCatch = function (n) {
				u.__ && u.__(n), i[1](n);
			}),
		[
			i[0],
			function () {
				i[1](void 0);
			},
		]
	);
}
function F() {
	i.some(function (t) {
		if (t.__P)
			try {
				t.__H.__h.forEach(_), t.__H.__h.forEach(g), (t.__H.__h = []);
			} catch (r) {
				return n.__e(r, t.__v), !0;
			}
	}),
		(i = []);
}
function _(n) {
	n.t && n.t();
}
function g(n) {
	var t = n.__();
	"function" == typeof t && (n.t = t);
}
function q(n, t) {
	return (
		!n ||
		t.some(function (t, r) {
			return t !== n[r];
		})
	);
}
function x(n, t) {
	return "function" == typeof t ? t(n) : t;
}
(n.__r = function (n) {
	o && o(n),
		(t = 0),
		(r = n.__c).__H &&
			(r.__H.__h.forEach(_), r.__H.__h.forEach(g), (r.__H.__h = []));
}),
	(n.diffed = function (t) {
		f && f(t);
		var r = t.__c;
		if (r) {
			var o = r.__H;
			o &&
				o.__h.length &&
				((1 !== i.push(r) && u === n.requestAnimationFrame) ||
					(
						(u = n.requestAnimationFrame) ||
						function (n) {
							var t,
								r = function () {
									clearTimeout(u), cancelAnimationFrame(t), setTimeout(n);
								},
								u = setTimeout(r, 100);
							"undefined" != typeof window && (t = requestAnimationFrame(r));
						}
					)(F));
		}
	}),
	(n.__c = function (t, r) {
		r.some(function (t) {
			try {
				t.__h.forEach(_),
					(t.__h = t.__h.filter(function (n) {
						return !n.__ || g(n);
					}));
			} catch (u) {
				r.some(function (n) {
					n.__h && (n.__h = []);
				}),
					(r = []),
					n.__e(u, t.__v);
			}
		}),
			c && c(t, r);
	}),
	(n.unmount = function (t) {
		e && e(t);
		var r = t.__c;
		if (r) {
			var u = r.__H;
			if (u)
				try {
					u.__.forEach(function (n) {
						return n.t && n.t();
					});
				} catch (t) {
					n.__e(t, r.__v);
				}
		}
	});
export {
	v as useState,
	m as useReducer,
	p as useEffect,
	l as useLayoutEffect,
	y as useRef,
	d as useImperativeHandle,
	s as useMemo,
	h as useCallback,
	T as useContext,
	w as useDebugValue,
	A as useErrorBoundary,
};
