var n,
	l,
	u,
	t,
	i = {},
	r = [],
	f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
function o(n, l) {
	for (var u in l) n[u] = l[u];
	return n;
}
function e(n) {
	var l = n.parentNode;
	l && l.removeChild(n);
}
function c(n, l, u) {
	var t,
		i,
		r,
		f,
		e = arguments;
	if (((l = o({}, l)), arguments.length > 3))
		for (u = [u], t = 3; t < arguments.length; t++) u.push(e[t]);
	if ((null != u && (l.children = u), null != n && null != n.defaultProps))
		for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
	return (
		(f = l.key),
		null != (r = l.ref) && delete l.ref,
		null != f && delete l.key,
		s(n, l, f, r)
	);
}
function s(l, u, t, i) {
	var r = {
		type: l,
		props: u,
		key: t,
		ref: i,
		__k: null,
		__p: null,
		__b: 0,
		__e: null,
		l: null,
		__c: null,
		constructor: void 0,
	};
	return n.vnode && n.vnode(r), r;
}
function a() {
	return {};
}
function h(n) {
	return n.children;
}
function v(n) {
	if (null == n || "boolean" == typeof n) return null;
	if ("string" == typeof n || "number" == typeof n)
		return s(null, n, null, null);
	if (null != n.__e || null != n.__c) {
		var l = s(n.type, n.props, n.key, null);
		return (l.__e = n.__e), l;
	}
	return n;
}
function p(n, l) {
	(this.props = n), (this.context = l);
}
function y(n, l) {
	if (null == l) return n.__p ? y(n.__p, n.__p.__k.indexOf(n) + 1) : null;
	for (var u; l < n.__k.length; l++)
		if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
	return "function" == typeof n.type ? y(n) : null;
}
function d(n) {
	var l, u;
	if (null != (n = n.__p) && null != n.__c) {
		for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) {
				n.__e = n.__c.base = u.__e;
				break;
			}
		return d(n);
	}
}
function m(t) {
	!t.__d && (t.__d = !0) && 1 === l.push(t) && (n.debounceRendering || u)(w);
}
function w() {
	var n;
	for (
		l.sort(function (n, l) {
			return l.__v.__b - n.__v.__b;
		});
		(n = l.pop());

	)
		n.__d && n.forceUpdate(!1);
}
function g(n, l, u, t, f, o, c, s) {
	var a,
		h,
		p,
		d,
		m,
		w,
		g,
		_,
		b = l.__k || k(l.props.children, (l.__k = []), v, !0),
		x = (u && u.__k) || r,
		C = x.length;
	for (
		s == i && (s = null != o ? o[0] : C ? y(u, 0) : null), h = 0;
		h < b.length;
		h++
	)
		if (null != (a = b[h] = v(b[h]))) {
			if (
				((a.__p = l),
				(a.__b = l.__b + 1),
				null === (d = x[h]) || (d && a.key == d.key && a.type === d.type))
			)
				x[h] = void 0;
			else
				for (p = 0; p < C; p++) {
					if ((d = x[p]) && a.key == d.key && a.type === d.type) {
						x[p] = void 0;
						break;
					}
					d = null;
				}
			if (
				((m = P(n, a, (d = d || i), t, f, o, c, null, s)),
				(p = a.ref) && d.ref != p && (_ || (_ = [])).push(p, a.__c || m, a),
				null != m)
			) {
				if ((null == g && (g = m), null != a.l)) (m = a.l), (a.l = null);
				else if (o == d || m != s || null == m.parentNode)
					n: if (null == s || s.parentNode !== n) n.appendChild(m);
					else {
						for (w = s, p = 0; (w = w.nextSibling) && p < C; p += 2)
							if (w == m) break n;
						n.insertBefore(m, s);
					}
				(s = m.nextSibling), "function" == typeof l.type && (l.l = m);
			}
		}
	if (((l.__e = g), null != o && "function" != typeof l.type))
		for (h = o.length; h--; ) null != o[h] && e(o[h]);
	for (h = C; h--; ) null != x[h] && j(x[h], x[h]);
	if (_) for (h = 0; h < _.length; h++) $(_[h], _[++h], _[++h]);
}
function k(n, l, u, t) {
	if ((null == l && (l = []), null == n || "boolean" == typeof n))
		t && l.push(null);
	else if (Array.isArray(n))
		for (var i = 0; i < n.length; i++) k(n[i], l, u, t);
	else l.push(u ? u(n) : n);
	return l;
}
function _(n, l, u, t, i) {
	var r;
	for (r in u) r in l || x(n, r, null, u[r], t);
	for (r in l)
		(i && "function" != typeof l[r]) ||
			"value" === r ||
			"checked" === r ||
			u[r] === l[r] ||
			x(n, r, l[r], u[r], t);
}
function b(n, l, u) {
	"-" === l[0]
		? n.setProperty(l, u)
		: (n[l] = "number" == typeof u && !1 === f.test(l) ? u + "px" : u);
}
function x(n, l, u, t, i) {
	var r, f, o, e, c;
	if (
		"key" ===
			(l = i
				? "className" === l
					? "class"
					: l
				: "class" === l
				? "className"
				: l) ||
		"children" === l
	);
	else if ("style" === l)
		if (((r = n.style), "string" == typeof u)) r.cssText = u;
		else {
			if (("string" == typeof t && ((r.cssText = ""), (t = null)), t))
				for (f in t) (u && f in u) || b(r, f, "");
			if (u) for (o in u) (t && u[o] === t[o]) || b(r, o, u[o]);
		}
	else if ("o" === l[0] && "n" === l[1])
		(e = l !== (l = l.replace(/Capture$/, ""))),
			(c = l.toLowerCase()),
			(l = (c in n ? c : l).slice(2)),
			u
				? (t || n.addEventListener(l, C, e), ((n.u || (n.u = {}))[l] = u))
				: n.removeEventListener(l, C, e);
	else if ("list" !== l && "tagName" !== l && !i && l in n)
		if (n.length && "value" == l)
			for (l = n.length; l--; ) n.options[l].selected = n.options[l].value == u;
		else n[l] = null == u ? "" : u;
	else
		"function" != typeof u &&
			"dangerouslySetInnerHTML" !== l &&
			(l !== (l = l.replace(/^xlink:?/, ""))
				? null == u || !1 === u
					? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase())
					: n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u)
				: null == u || !1 === u
				? n.removeAttribute(l)
				: n.setAttribute(l, u));
}
function C(l) {
	return this.u[l.type](n.event ? n.event(l) : l);
}
function P(l, u, t, i, r, f, e, c, s) {
	var a,
		y,
		d,
		m,
		w,
		_,
		b,
		x,
		C,
		P,
		N = u.type;
	if (void 0 !== u.constructor) return null;
	(a = n.__b) && a(u);
	try {
		n: if ("function" == typeof N) {
			if (
				((x = u.props),
				(C = (a = N.contextType) && i[a.__c]),
				(P = a ? (C ? C.props.value : a.__p) : i),
				t.__c
					? (b = (y = u.__c = t.__c).__p = y.__E)
					: (N.prototype && N.prototype.render
							? (u.__c = y = new N(x, P))
							: ((u.__c = y = new p(x, P)),
							  (y.constructor = N),
							  (y.render = z)),
					  C && C.sub(y),
					  (y.props = x),
					  y.state || (y.state = {}),
					  (y.context = P),
					  (y.__n = i),
					  (d = y.__d = !0),
					  (y.__h = [])),
				null == y.__s && (y.__s = y.state),
				null != N.getDerivedStateFromProps &&
					o(
						y.__s == y.state ? (y.__s = o({}, y.__s)) : y.__s,
						N.getDerivedStateFromProps(x, y.__s),
					),
				d)
			)
				null == N.getDerivedStateFromProps &&
					null != y.componentWillMount &&
					y.componentWillMount(),
					null != y.componentDidMount && e.push(y);
			else {
				if (
					(null == N.getDerivedStateFromProps &&
						null == c &&
						null != y.componentWillReceiveProps &&
						y.componentWillReceiveProps(x, P),
					!c &&
						null != y.shouldComponentUpdate &&
						!1 === y.shouldComponentUpdate(x, y.__s, P))
				) {
					(y.props = x),
						(y.state = y.__s),
						(y.__d = !1),
						(y.__v = u),
						(u.__e = t.__e),
						(u.__k = t.__k);
					break n;
				}
				null != y.componentWillUpdate && y.componentWillUpdate(x, y.__s, P);
			}
			for (
				m = y.props,
					w = y.state,
					y.context = P,
					y.props = x,
					y.state = y.__s,
					(a = n.__r) && a(u),
					y.__d = !1,
					y.__v = u,
					y.__P = l,
					k(
						null != (a = y.render(y.props, y.state, y.context)) &&
							a.type == h &&
							null == a.key
							? a.props.children
							: a,
						(u.__k = []),
						v,
						!0,
					),
					null != y.getChildContext && (i = o(o({}, i), y.getChildContext())),
					d ||
						null == y.getSnapshotBeforeUpdate ||
						(_ = y.getSnapshotBeforeUpdate(m, w)),
					g(l, u, t, i, r, f, e, s),
					y.base = u.__e;
				(a = y.__h.pop());

			)
				a.call(y);
			d ||
				null == m ||
				null == y.componentDidUpdate ||
				y.componentDidUpdate(m, w, _),
				b && (y.__E = y.__p = null);
		} else u.__e = T(t.__e, u, t, i, r, f, e);
		(a = n.diffed) && a(u);
	} catch (l) {
		n.__e(l, u, t);
	}
	return u.__e;
}
function N(l, u) {
	for (var t; (t = l.pop()); )
		try {
			t.componentDidMount();
		} catch (l) {
			n.__e(l, t.__v);
		}
	n.__c && n.__c(u);
}
function T(n, l, u, t, f, o, e) {
	var c,
		s,
		a,
		h,
		v = u.props,
		p = l.props;
	if (((f = "svg" === l.type || f), null == n && null != o))
		for (c = 0; c < o.length; c++)
			if (
				null != (s = o[c]) &&
				(null === l.type ? 3 === s.nodeType : s.localName === l.type)
			) {
				(n = s), (o[c] = null);
				break;
			}
	if (null == n) {
		if (null === l.type) return document.createTextNode(p);
		(n = f
			? document.createElementNS("http://www.w3.org/2000/svg", l.type)
			: document.createElement(l.type)),
			(o = null);
	}
	return (
		null === l.type
			? v !== p && (n.data = p)
			: l !== u &&
			  (null != o && (o = r.slice.call(n.childNodes)),
			  (a = (v = u.props || i).dangerouslySetInnerHTML),
			  (h = p.dangerouslySetInnerHTML),
			  null == o &&
					(h || a) &&
					((h && a && h.__html == a.__html) ||
						(n.innerHTML = (h && h.__html) || "")),
			  _(n, p, v, f, null != o),
			  h || g(n, l, u, t, "foreignObject" !== l.type && f, o, e, i),
			  null == o &&
					("value" in p &&
						void 0 !== p.value &&
						p.value !== n.value &&
						(n.value = null == p.value ? "" : p.value),
					"checked" in p &&
						void 0 !== p.checked &&
						p.checked !== n.checked &&
						(n.checked = p.checked))),
		n
	);
}
function $(l, u, t) {
	try {
		"function" == typeof l ? l(u) : (l.current = u);
	} catch (l) {
		n.__e(l, t);
	}
}
function j(l, u, t) {
	var i, r, f;
	if (
		(n.unmount && n.unmount(l),
		(i = l.ref) && $(i, null, u),
		t || "function" == typeof l.type || (t = null != (r = l.__e)),
		(l.__e = l.l = null),
		null != (i = l.__c))
	) {
		if (i.componentWillUnmount)
			try {
				i.componentWillUnmount();
			} catch (l) {
				n.__e(l, u);
			}
		i.base = i.__P = null;
	}
	if ((i = l.__k)) for (f = 0; f < i.length; f++) i[f] && j(i[f], u, t);
	null != r && e(r);
}
function z(n, l, u) {
	return this.constructor(n, u);
}
function A(l, u, t) {
	var f, o;
	n.__p && n.__p(l, u),
		(f = (t && t.__k) || u.__k),
		(l = c(h, null, [l])),
		(o = []),
		P(
			u,
			((t || u).__k = l),
			f || i,
			i,
			void 0 !== u.ownerSVGElement,
			t ? [t] : f ? null : r.slice.call(u.childNodes),
			o,
			!1,
			t || i,
		),
		N(o, l);
}
function D(n, l) {
	(l.__k = null), A(n, l);
}
function H(n, l) {
	return (
		(l = o(o({}, n.props), l)),
		arguments.length > 2 && (l.children = r.slice.call(arguments, 2)),
		s(n.type, l, l.key || n.key, l.ref || n.ref)
	);
}
function I(n) {
	var l = {},
		u = {
			__c: "__cC" + t++,
			__p: n,
			Consumer: function (n, l) {
				return n.children(l);
			},
			Provider: function (n) {
				var t,
					i = this;
				return (
					this.getChildContext ||
						((t = []),
						(this.getChildContext = function () {
							return (l[u.__c] = i), l;
						}),
						(this.shouldComponentUpdate = function (n) {
							t.some(function (l) {
								l.__P && ((l.context = n.value), m(l));
							});
						}),
						(this.sub = function (n) {
							t.push(n);
							var l = n.componentWillUnmount;
							n.componentWillUnmount = function () {
								t.splice(t.indexOf(n), 1), l && l.call(n);
							};
						})),
					n.children
				);
			},
		};
	return (u.Consumer.contextType = u), u;
}
(n = {}),
	(p.prototype.setState = function (n, l) {
		var u =
			(this.__s !== this.state && this.__s) || (this.__s = o({}, this.state));
		("function" != typeof n || (n = n(u, this.props))) && o(u, n),
			null != n && this.__v && (l && this.__h.push(l), m(this));
	}),
	(p.prototype.forceUpdate = function (n) {
		var l,
			u,
			t,
			i = this.__v,
			r = this.__v.__e,
			f = this.__P;
		f &&
			((l = !1 !== n),
			(u = []),
			(t = P(
				f,
				i,
				o({}, i),
				this.__n,
				void 0 !== f.ownerSVGElement,
				null,
				u,
				l,
				null == r ? y(i) : r,
			)),
			N(u, i),
			t != r && d(i)),
			n && n();
	}),
	(p.prototype.render = h),
	(l = []),
	(u =
		"function" == typeof Promise
			? Promise.prototype.then.bind(Promise.resolve())
			: setTimeout),
	(n.__e = function (n, l, u) {
		for (var t; (l = l.__p); )
			if ((t = l.__c) && !t.__p)
				try {
					if (t.constructor && null != t.constructor.getDerivedStateFromError)
						t.setState(t.constructor.getDerivedStateFromError(n));
					else {
						if (null == t.componentDidCatch) continue;
						t.componentDidCatch(n);
					}
					return m((t.__E = t));
				} catch (l) {
					n = l;
				}
		throw n;
	}),
	(t = 0);
export {
	A as render,
	D as hydrate,
	c as createElement,
	c as h,
	h as Fragment,
	a as createRef,
	p as Component,
	H as cloneElement,
	I as createContext,
	k as toChildArray,
	j as _unmount,
	n as options,
};
