"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[678],{8616:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(7294),o=n(3145),a=n(1721);function i(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var s=n(7462),u=n(7326),c=n(9864),l=n(8679),f=n.n(l);function d(e,t){if(!e){var n=new Error("loadable: "+t);throw n.framesToPop=1,n.name="Invariant Violation",n}}var h=r.createContext();var p={initialChunks:{}},v="PENDING",y="REJECTED";var m=function(e){return e};function g(e){var t=e.defaultResolveComponent,n=void 0===t?m:t,o=e.render,l=e.onLoad;function g(e,t){void 0===t&&(t={});var m=function(e){return"function"==typeof e?{requireAsync:e,resolve:function(){},chunkName:function(){}}:e}(e),g={};function k(e){return t.cacheKey?t.cacheKey(e):m.resolve?m.resolve(e):"static"}function C(e,r,o){var a=t.resolveComponent?t.resolveComponent(e,r):n(e);if(t.resolveComponent&&!(0,c.isValidElementType)(a))throw new Error("resolveComponent returned something that is not a React component!");return f()(o,a,{preload:!0}),a}var b,E,w=function(e){var t=k(e),n=g[t];return n&&n.status!==y||((n=m.requireAsync(e)).status=v,g[t]=n,n.then((function(){n.status="RESOLVED"}),(function(t){console.error("loadable-components: failed to asynchronously load component",{fileName:m.resolve(e),chunkName:m.chunkName(e),error:t?t.message:t}),n.status=y}))),n},R=function(e){function n(n){var r;return(r=e.call(this,n)||this).state={result:null,error:null,loading:!0,cacheKey:k(n)},d(!n.__chunkExtractor||m.requireSync,"SSR requires `@loadable/babel-plugin`, please install it"),n.__chunkExtractor?(!1===t.ssr||(m.requireAsync(n).catch((function(){return null})),r.loadSync(),n.__chunkExtractor.addChunk(m.chunkName(n))),(0,u.Z)(r)):(!1!==t.ssr&&(m.isReady&&m.isReady(n)||m.chunkName&&p.initialChunks[m.chunkName(n)])&&r.loadSync(),r)}(0,a.Z)(n,e),n.getDerivedStateFromProps=function(e,t){var n=k(e);return(0,s.Z)({},t,{cacheKey:n,loading:t.loading||t.cacheKey!==n})};var r=n.prototype;return r.componentDidMount=function(){this.mounted=!0;var e=this.getCache();e&&e.status===y&&this.setCache(),this.state.loading&&this.loadAsync()},r.componentDidUpdate=function(e,t){t.cacheKey!==this.state.cacheKey&&this.loadAsync()},r.componentWillUnmount=function(){this.mounted=!1},r.safeSetState=function(e,t){this.mounted&&this.setState(e,t)},r.getCacheKey=function(){return k(this.props)},r.getCache=function(){return g[this.getCacheKey()]},r.setCache=function(e){void 0===e&&(e=void 0),g[this.getCacheKey()]=e},r.triggerOnLoad=function(){var e=this;l&&setTimeout((function(){l(e.state.result,e.props)}))},r.loadSync=function(){if(this.state.loading)try{var e=C(m.requireSync(this.props),this.props,N);this.state.result=e,this.state.loading=!1}catch(t){console.error("loadable-components: failed to synchronously load component, which expected to be available",{fileName:m.resolve(this.props),chunkName:m.chunkName(this.props),error:t?t.message:t}),this.state.error=t}},r.loadAsync=function(){var e=this,t=this.resolveAsync();return t.then((function(t){var n=C(t,e.props,N);e.safeSetState({result:n,loading:!1},(function(){return e.triggerOnLoad()}))})).catch((function(t){return e.safeSetState({error:t,loading:!1})})),t},r.resolveAsync=function(){var e=this.props,t=(e.__chunkExtractor,e.forwardedRef,i(e,["__chunkExtractor","forwardedRef"]));return w(t)},r.render=function(){var e=this.props,n=e.forwardedRef,r=e.fallback,a=(e.__chunkExtractor,i(e,["forwardedRef","fallback","__chunkExtractor"])),u=this.state,c=u.error,l=u.loading,f=u.result;if(t.suspense&&(this.getCache()||this.loadAsync()).status===v)throw this.loadAsync();if(c)throw c;var d=r||t.fallback||null;return l?d:o({fallback:d,result:f,options:t,props:(0,s.Z)({},a,{ref:n})})},n}(r.Component),_=(E=function(e){return r.createElement(h.Consumer,null,(function(t){return r.createElement(b,Object.assign({__chunkExtractor:t},e))}))},(b=R).displayName&&(E.displayName=b.displayName+"WithChunkExtractor"),E),N=r.forwardRef((function(e,t){return r.createElement(_,Object.assign({forwardedRef:t},e))}));return N.displayName="Loadable",N.preload=function(e){N.load(e)},N.load=function(e){return w(e)},N}return{loadable:g,lazy:function(e,t){return g(e,(0,s.Z)({},t,{suspense:!0}))}}}var k=g({defaultResolveComponent:function(e){return e.__esModule?e.default:e.default||e},render:function(e){var t=e.result,n=e.props;return r.createElement(t,n)}}),C=k.loadable,b=k.lazy,E=g({onLoad:function(e,t){e&&t.forwardedRef&&("function"==typeof t.forwardedRef?t.forwardedRef(e):t.forwardedRef.current=e)},render:function(e){var t=e.result,n=e.props;return n.children?n.children(t):null}}),w=E.loadable,R=E.lazy;var _=C;_.lib=w,b.lib=R;_((()=>n.e(161).then(n.bind(n,7239))));var N=n(392);let S=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){return(0,N.tZ)("div",null)},t}(r.Component);function x(e){let{data:t}=e;return(0,N.tZ)(o.Z,{pageTitle:"chang hsin-yu 張欣語"},(0,N.tZ)("div",{style:{textAlign:"center"}},(0,N.tZ)(S,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-df520ed337905de9190d.js.map