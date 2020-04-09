!(function(n, l) {
	"object" == typeof exports && "undefined" != typeof module
		? l(exports)
		: "function" == typeof define && define.amd
		? define(["exports"], l)
		: l((n.preact = {}));
})(this, function(n) {
	var l,
		u,
		i,
		t,
		o,
		r,
		f,
		e,
		c = {},
		s = [],
		a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
	function v(n, l) {
		for (var u in l) n[u] = l[u];
		return n;
	}
	function h(n) {
		var l = n.parentNode;
		l && l.removeChild(n);
	}
	function p(n, l, u) {
		var i,
			t = arguments,
			o = {};
		for (i in l) "key" !== i && "ref" !== i && (o[i] = l[i]);
		if (arguments.length > 3)
			for (u = [u], i = 3; i < arguments.length; i++) u.push(t[i]);
		if (
			(null != u && (o.children = u),
			"function" == typeof n && null != n.defaultProps)
		)
			for (i in n.defaultProps) void 0 === o[i] && (o[i] = n.defaultProps[i]);
		return d(n, o, l && l.key, l && l.ref, null);
	}
	function d(n, u, i, t, o) {
		var r = {
			type: n,
			props: u,
			key: i,
			ref: t,
			__k: null,
			__: null,
			__b: 0,
			__e: null,
			__d: void 0,
			__c: null,
			constructor: void 0,
			__v: o,
		};
		return null == o && (r.__v = r), l.vnode && l.vnode(r), r;
	}
	function y(n) {
		return n.children;
	}
	function m(n, l) {
		(this.props = n), (this.context = l);
	}
	function w(n, l) {
		if (null == l) return n.__ ? w(n.__, n.__.__k.indexOf(n) + 1) : null;
		for (var u; l < n.__k.length; l++)
			if (null != (u = n.__k[l]) && null != u.__e) return u.__e;
		return "function" == typeof n.type ? w(n) : null;
	}
	function g(n) {
		var l, u;
		if (null != (n = n.__) && null != n.__c) {
			for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)
				if (null != (u = n.__k[l]) && null != u.__e) {
					n.__e = n.__c.base = u.__e;
					break;
				}
			return g(n);
		}
	}
	function k(n) {
		((!n.__d && (n.__d = !0) && i.push(n) && !t++) ||
			r !== l.debounceRendering) &&
			((r = l.debounceRendering) || o)(_);
	}
	function _() {
		for (var n; (t = i.length); )
			(n = i.sort(function(n, l) {
				return n.__v.__b - l.__v.__b;
			})),
				(i = []),
				n.some(function(n) {
					var l, u, i, t, o, r, f;
					n.__d &&
						((r = (o = (l = n).__v).__e),
						(f = l.__P) &&
							((u = []),
							((i = v({}, o)).__v = i),
							(t = z(
								f,
								o,
								i,
								l.__n,
								void 0 !== f.ownerSVGElement,
								null,
								u,
								null == r ? w(o) : r,
							)),
							A(u, o),
							t != r && g(o)));
				});
	}
	function b(n, l, u, i, t, o, r, f, e) {
		var a,
			v,
			p,
			d,
			y,
			m,
			g,
			k = (u && u.__k) || s,
			_ = k.length;
		if (
			(f == c && (f = null != o ? o[0] : _ ? w(u, 0) : null),
			(a = 0),
			(l.__k = x(l.__k, function(u) {
				if (null != u) {
					if (
						((u.__ = l),
						(u.__b = l.__b + 1),
						null === (p = k[a]) || (p && u.key == p.key && u.type === p.type))
					)
						k[a] = void 0;
					else
						for (v = 0; v < _; v++) {
							if ((p = k[v]) && u.key == p.key && u.type === p.type) {
								k[v] = void 0;
								break;
							}
							p = null;
						}
					if (
						((d = z(n, u, (p = p || c), i, t, o, r, f, e)),
						(v = u.ref) &&
							p.ref != v &&
							(g || (g = []),
							p.ref && g.push(p.ref, null, u),
							g.push(v, u.__c || d, u)),
						null != d)
					) {
						var s;
						if ((null == m && (m = d), void 0 !== u.__d))
							(s = u.__d), (u.__d = void 0);
						else if (o == p || d != f || null == d.parentNode) {
							n: if (null == f || f.parentNode !== n)
								n.appendChild(d), (s = null);
							else {
								for (y = f, v = 0; (y = y.nextSibling) && v < _; v += 2)
									if (y == d) break n;
								n.insertBefore(d, f), (s = f);
							}
							"option" == l.type && (n.value = "");
						}
						(f = void 0 !== s ? s : d.nextSibling),
							"function" == typeof l.type && (l.__d = f);
					} else f && p.__e == f && f.parentNode != n && (f = w(p));
				}
				return a++, u;
			})),
			(l.__e = m),
			null != o && "function" != typeof l.type)
		)
			for (a = o.length; a--; ) null != o[a] && h(o[a]);
		for (a = _; a--; ) null != k[a] && D(k[a], k[a]);
		if (g) for (a = 0; a < g.length; a++) $(g[a], g[++a], g[++a]);
	}
	function x(n, l, u) {
		if ((null == u && (u = []), null == n || "boolean" == typeof n))
			l && u.push(l(null));
		else if (Array.isArray(n)) for (var i = 0; i < n.length; i++) x(n[i], l, u);
		else
			u.push(
				l
					? l(
							"string" == typeof n || "number" == typeof n
								? d(null, n, null, null, n)
								: null != n.__e || null != n.__c
								? d(n.type, n.props, n.key, null, n.__v)
								: n,
					  )
					: n,
			);
		return u;
	}
	function P(n, l, u, i, t) {
		var o;
		for (o in u)
			"children" === o || "key" === o || o in l || N(n, o, null, u[o], i);
		for (o in l)
			(t && "function" != typeof l[o]) ||
				"children" === o ||
				"key" === o ||
				"value" === o ||
				"checked" === o ||
				u[o] === l[o] ||
				N(n, o, l[o], u[o], i);
	}
	function C(n, l, u) {
		"-" === l[0]
			? n.setProperty(l, u)
			: (n[l] =
					"number" == typeof u && !1 === a.test(l)
						? u + "px"
						: null == u
						? ""
						: u);
	}
	function N(n, l, u, i, t) {
		var o, r, f, e, c;
		if (
			(t
				? "className" === l && (l = "class")
				: "class" === l && (l = "className"),
			"style" === l)
		)
			if (((o = n.style), "string" == typeof u)) o.cssText = u;
			else {
				if (("string" == typeof i && ((o.cssText = ""), (i = null)), i))
					for (e in i) (u && e in u) || C(o, e, "");
				if (u) for (c in u) (i && u[c] === i[c]) || C(o, c, u[c]);
			}
		else
			"o" === l[0] && "n" === l[1]
				? ((r = l !== (l = l.replace(/Capture$/, ""))),
				  (f = l.toLowerCase()),
				  (l = (f in n ? f : l).slice(2)),
				  u
						? (i || n.addEventListener(l, j, r), ((n.l || (n.l = {}))[l] = u))
						: n.removeEventListener(l, j, r))
				: "list" !== l &&
				  "tagName" !== l &&
				  "form" !== l &&
				  "type" !== l &&
				  "size" !== l &&
				  !t &&
				  l in n
				? (n[l] = null == u ? "" : u)
				: "function" != typeof u &&
				  "dangerouslySetInnerHTML" !== l &&
				  (l !== (l = l.replace(/^xlink:?/, ""))
						? null == u || !1 === u
							? n.removeAttributeNS(
									"http://www.w3.org/1999/xlink",
									l.toLowerCase(),
							  )
							: n.setAttributeNS(
									"http://www.w3.org/1999/xlink",
									l.toLowerCase(),
									u,
							  )
						: null == u || (!1 === u && !/^ar/.test(l))
						? n.removeAttribute(l)
						: n.setAttribute(l, u));
	}
	function j(n) {
		this.l[n.type](l.event ? l.event(n) : n);
	}
	function z(n, u, i, t, o, r, f, e, c) {
		var s,
			a,
			h,
			p,
			d,
			w,
			g,
			k,
			_,
			x,
			P = u.type;
		if (void 0 !== u.constructor) return null;
		(s = l.__b) && s(u);
		try {
			n: if ("function" == typeof P) {
				if (
					((k = u.props),
					(_ = (s = P.contextType) && t[s.__c]),
					(x = s ? (_ ? _.props.value : s.__) : t),
					i.__c
						? (g = (a = u.__c = i.__c).__ = a.__E)
						: ("prototype" in P && P.prototype.render
								? (u.__c = a = new P(k, x))
								: ((u.__c = a = new m(k, x)),
								  (a.constructor = P),
								  (a.render = E)),
						  _ && _.sub(a),
						  (a.props = k),
						  a.state || (a.state = {}),
						  (a.context = x),
						  (a.__n = t),
						  (h = a.__d = !0),
						  (a.__h = [])),
					null == a.__s && (a.__s = a.state),
					null != P.getDerivedStateFromProps &&
						(a.__s == a.state && (a.__s = v({}, a.__s)),
						v(a.__s, P.getDerivedStateFromProps(k, a.__s))),
					(p = a.props),
					(d = a.state),
					h)
				)
					null == P.getDerivedStateFromProps &&
						null != a.componentWillMount &&
						a.componentWillMount(),
						null != a.componentDidMount && a.__h.push(a.componentDidMount);
				else {
					if (
						(null == P.getDerivedStateFromProps &&
							k !== p &&
							null != a.componentWillReceiveProps &&
							a.componentWillReceiveProps(k, x),
						(!a.__e &&
							null != a.shouldComponentUpdate &&
							!1 === a.shouldComponentUpdate(k, a.__s, x)) ||
							(u.__v === i.__v && !a.__))
					) {
						for (
							a.props = k,
								a.state = a.__s,
								u.__v !== i.__v && (a.__d = !1),
								a.__v = u,
								u.__e = i.__e,
								u.__k = i.__k,
								a.__h.length && f.push(a),
								s = 0;
							s < u.__k.length;
							s++
						)
							u.__k[s] && (u.__k[s].__ = u);
						break n;
					}
					null != a.componentWillUpdate && a.componentWillUpdate(k, a.__s, x),
						null != a.componentDidUpdate &&
							a.__h.push(function() {
								a.componentDidUpdate(p, d, w);
							});
				}
				(a.context = x),
					(a.props = k),
					(a.state = a.__s),
					(s = l.__r) && s(u),
					(a.__d = !1),
					(a.__v = u),
					(a.__P = n),
					(s = a.render(a.props, a.state, a.context)),
					(u.__k =
						null != s && s.type == y && null == s.key
							? s.props.children
							: Array.isArray(s)
							? s
							: [s]),
					null != a.getChildContext && (t = v(v({}, t), a.getChildContext())),
					h ||
						null == a.getSnapshotBeforeUpdate ||
						(w = a.getSnapshotBeforeUpdate(p, d)),
					b(n, u, i, t, o, r, f, e, c),
					(a.base = u.__e),
					a.__h.length && f.push(a),
					g && (a.__E = a.__ = null),
					(a.__e = !1);
			} else null == r && u.__v === i.__v ? ((u.__k = i.__k), (u.__e = i.__e)) : (u.__e = T(i.__e, u, i, t, o, r, f, c));
			(s = l.diffed) && s(u);
		} catch (n) {
			(u.__v = null), l.__e(n, u, i);
		}
		return u.__e;
	}
	function A(n, u) {
		l.__c && l.__c(u, n),
			n.some(function(u) {
				try {
					(n = u.__h),
						(u.__h = []),
						n.some(function(n) {
							n.call(u);
						});
				} catch (n) {
					l.__e(n, u.__v);
				}
			});
	}
	function T(n, l, u, i, t, o, r, f) {
		var e,
			a,
			v,
			h,
			p,
			d = u.props,
			y = l.props;
		if (((t = "svg" === l.type || t), null != o))
			for (e = 0; e < o.length; e++)
				if (
					null != (a = o[e]) &&
					((null === l.type ? 3 === a.nodeType : a.localName === l.type) ||
						n == a)
				) {
					(n = a), (o[e] = null);
					break;
				}
		if (null == n) {
			if (null === l.type) return document.createTextNode(y);
			(n = t
				? document.createElementNS("http://www.w3.org/2000/svg", l.type)
				: document.createElement(l.type, y.is && { is: y.is })),
				(o = null),
				(f = !1);
		}
		if (null === l.type) d !== y && n.data != y && (n.data = y);
		else {
			if (
				(null != o && (o = s.slice.call(n.childNodes)),
				(v = (d = u.props || c).dangerouslySetInnerHTML),
				(h = y.dangerouslySetInnerHTML),
				!f)
			) {
				if (d === c)
					for (d = {}, p = 0; p < n.attributes.length; p++)
						d[n.attributes[p].name] = n.attributes[p].value;
				(h || v) &&
					((h && v && h.__html == v.__html) ||
						(n.innerHTML = (h && h.__html) || ""));
			}
			P(n, y, d, t, f),
				h
					? (l.__k = [])
					: ((l.__k = l.props.children),
					  b(n, l, u, i, "foreignObject" !== l.type && t, o, r, c, f)),
				f ||
					("value" in y &&
						void 0 !== y.value &&
						y.value !== n.value &&
						(n.value = null == y.value ? "" : y.value),
					"checked" in y &&
						void 0 !== y.checked &&
						y.checked !== n.checked &&
						(n.checked = y.checked));
		}
		return n;
	}
	function $(n, u, i) {
		try {
			"function" == typeof n ? n(u) : (n.current = u);
		} catch (n) {
			l.__e(n, i);
		}
	}
	function D(n, u, i) {
		var t, o, r;
		if (
			(l.unmount && l.unmount(n),
			(t = n.ref) && ((t.current && t.current !== n.__e) || $(t, null, u)),
			i || "function" == typeof n.type || (i = null != (o = n.__e)),
			(n.__e = n.__d = void 0),
			null != (t = n.__c))
		) {
			if (t.componentWillUnmount)
				try {
					t.componentWillUnmount();
				} catch (n) {
					l.__e(n, u);
				}
			t.base = t.__P = null;
		}
		if ((t = n.__k)) for (r = 0; r < t.length; r++) t[r] && D(t[r], u, i);
		null != o && h(o);
	}
	function E(n, l, u) {
		return this.constructor(n, u);
	}
	function H(n, u, i) {
		var t, o, r;
		l.__ && l.__(n, u),
			(o = (t = i === f) ? null : (i && i.__k) || u.__k),
			(n = p(y, null, [n])),
			(r = []),
			z(
				u,
				((t ? u : i || u).__k = n),
				o || c,
				c,
				void 0 !== u.ownerSVGElement,
				i && !t ? [i] : o ? null : s.slice.call(u.childNodes),
				r,
				i || c,
				t,
			),
			A(r, n);
	}
	(l = {
		__e: function(n, l) {
			for (var u, i; (l = l.__); )
				if ((u = l.__c) && !u.__)
					try {
						if (
							(u.constructor &&
								null != u.constructor.getDerivedStateFromError &&
								((i = !0),
								u.setState(u.constructor.getDerivedStateFromError(n))),
							null != u.componentDidCatch && ((i = !0), u.componentDidCatch(n)),
							i)
						)
							return k((u.__E = u));
					} catch (l) {
						n = l;
					}
			throw n;
		},
	}),
		(u = function(n) {
			return null != n && void 0 === n.constructor;
		}),
		(m.prototype.setState = function(n, l) {
			var u;
			(u = this.__s !== this.state ? this.__s : (this.__s = v({}, this.state))),
				"function" == typeof n && (n = n(u, this.props)),
				n && v(u, n),
				null != n && this.__v && (l && this.__h.push(l), k(this));
		}),
		(m.prototype.forceUpdate = function(n) {
			this.__v && ((this.__e = !0), n && this.__h.push(n), k(this));
		}),
		(m.prototype.render = y),
		(i = []),
		(t = 0),
		(o =
			"function" == typeof Promise
				? Promise.prototype.then.bind(Promise.resolve())
				: setTimeout),
		(f = c),
		(e = 0),
		(n.render = H),
		(n.hydrate = function(n, l) {
			H(n, l, f);
		}),
		(n.createElement = p),
		(n.h = p),
		(n.Fragment = y),
		(n.createRef = function() {
			return {};
		}),
		(n.isValidElement = u),
		(n.Component = m),
		(n.cloneElement = function(n, l) {
			return (
				(l = v(v({}, n.props), l)),
				arguments.length > 2 && (l.children = s.slice.call(arguments, 2)),
				d(n.type, l, l.key || n.key, l.ref || n.ref, null)
			);
		}),
		(n.createContext = function(n) {
			var l = {},
				u = {
					__c: "__cC" + e++,
					__: n,
					Consumer: function(n, l) {
						return n.children(l);
					},
					Provider: function(n) {
						var i,
							t = this;
						return (
							this.getChildContext ||
								((i = []),
								(this.getChildContext = function() {
									return (l[u.__c] = t), l;
								}),
								(this.shouldComponentUpdate = function(n) {
									t.props.value !== n.value &&
										i.some(function(l) {
											(l.context = n.value), k(l);
										});
								}),
								(this.sub = function(n) {
									i.push(n);
									var l = n.componentWillUnmount;
									n.componentWillUnmount = function() {
										i.splice(i.indexOf(n), 1), l && l.call(n);
									};
								})),
							n.children
						);
					},
				};
			return (u.Consumer.contextType = u), (u.Provider.__ = u), u;
		}),
		(n.toChildArray = x),
		(n._e = D),
		(n.options = l);
});
//# sourceMappingURL=preact.umd.js.map
