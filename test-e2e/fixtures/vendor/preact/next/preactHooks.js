import { options as n } from "preact";
var t,
	u,
	r,
	o = 0,
	i = [],
	c = n.__r,
	f = n.diffed,
	e = n.__c,
	a = n.unmount;
function v(t, r) {
	n.__h && n.__h(u, t, o || r), (o = 0);
	var i = u.__H || (u.__H = { __: [], __h: [] });
	return t >= i.__.length && i.__.push({}), i.__[t];
}
function m(n) {
	return (o = 1), p(k, n);
}
function p(n, r, o) {
	var i = v(t++, 2);
	return (
		(i.t = n),
		i.__c ||
			((i.__c = u),
			(i.__ = [
				o ? o(r) : k(void 0, r),
				function (n) {
					var t = i.t(i.__[0], n);
					i.__[0] !== t && ((i.__ = [t, i.__[1]]), i.__c.setState({}));
				},
			])),
		i.__
	);
}
function y(r, o) {
	var i = v(t++, 3);
	!n.__s && j(i.__H, o) && ((i.__ = r), (i.__H = o), u.__H.__h.push(i));
}
function l(r, o) {
	var i = v(t++, 4);
	!n.__s && j(i.__H, o) && ((i.__ = r), (i.__H = o), u.__h.push(i));
}
function h(n) {
	return (
		(o = 5),
		_(function () {
			return { current: n };
		}, [])
	);
}
function s(n, t, u) {
	(o = 6),
		l(
			function () {
				"function" == typeof n ? n(t()) : n && (n.current = t());
			},
			null == u ? u : u.concat(n),
		);
}
function _(n, u) {
	var r = v(t++, 7);
	return j(r.__H, u) ? ((r.__H = u), (r.__h = n), (r.__ = n())) : r.__;
}
function A(n, t) {
	return (
		(o = 8),
		_(function () {
			return n;
		}, t)
	);
}
function F(n) {
	var r = u.context[n.__c],
		o = v(t++, 9);
	return (
		(o.__c = n),
		r ? (null == o.__ && ((o.__ = !0), r.sub(u)), r.props.value) : n.__
	);
}
function T(t, u) {
	n.useDebugValue && n.useDebugValue(u ? u(t) : t);
}
function d(n) {
	var r = v(t++, 10),
		o = m();
	return (
		(r.__ = n),
		u.componentDidCatch ||
			(u.componentDidCatch = function (n) {
				r.__ && r.__(n), o[1](n);
			}),
		[
			o[0],
			function () {
				o[1](void 0);
			},
		]
	);
}
function q() {
	i.some(function (t) {
		if (t.__P)
			try {
				t.__H.__h.forEach(b), t.__H.__h.forEach(g), (t.__H.__h = []);
			} catch (u) {
				return (t.__H.__h = []), n.__e(u, t.__v), !0;
			}
	}),
		(i = []);
}
(n.__r = function (n) {
	c && c(n), (t = 0);
	var r = (u = n.__c).__H;
	r && (r.__h.forEach(b), r.__h.forEach(g), (r.__h = []));
}),
	(n.diffed = function (t) {
		f && f(t);
		var u = t.__c;
		u &&
			u.__H &&
			u.__H.__h.length &&
			((1 !== i.push(u) && r === n.requestAnimationFrame) ||
				(
					(r = n.requestAnimationFrame) ||
					function (n) {
						var t,
							u = function () {
								clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(n);
							},
							r = setTimeout(u, 100);
						x && (t = requestAnimationFrame(u));
					}
				)(q));
	}),
	(n.__c = function (t, u) {
		u.some(function (t) {
			try {
				t.__h.forEach(b),
					(t.__h = t.__h.filter(function (n) {
						return !n.__ || g(n);
					}));
			} catch (r) {
				u.some(function (n) {
					n.__h && (n.__h = []);
				}),
					(u = []),
					n.__e(r, t.__v);
			}
		}),
			e && e(t, u);
	}),
	(n.unmount = function (t) {
		a && a(t);
		var u = t.__c;
		if (u && u.__H)
			try {
				u.__H.__.forEach(b);
			} catch (t) {
				n.__e(t, u.__v);
			}
	});
var x = "function" == typeof requestAnimationFrame;
function b(n) {
	"function" == typeof n.u && n.u();
}
function g(n) {
	n.u = n.__();
}
function j(n, t) {
	return (
		!n ||
		n.length !== t.length ||
		t.some(function (t, u) {
			return t !== n[u];
		})
	);
}
function k(n, t) {
	return "function" == typeof t ? t(n) : t;
}
export {
	m as useState,
	p as useReducer,
	y as useEffect,
	l as useLayoutEffect,
	h as useRef,
	s as useImperativeHandle,
	_ as useMemo,
	A as useCallback,
	F as useContext,
	T as useDebugValue,
	d as useErrorBoundary,
};
