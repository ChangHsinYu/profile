"use strict";(self.webpackChunkprofile=self.webpackChunkprofile||[]).push([[48],{48:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),a=this&&this.__assign||function(){return a=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},a.apply(this,arguments)},s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var i=s(r(4035)),c=s(r(7294)),p=function(t){function e(e){var r=t.call(this,e)||this;return r.wrapper=null,r.state=a(a({},e),{canvas:null,wrapper:r.wrapper}),r}return o(e,t),e.getDerivedStateFromProps=function(t,e){if(e.sketch!==t.sketch){var r=t.sketch,n=new i.default(r,e.wrapper);return e.canvas.remove(),a(a({},e),{sketch:r,canvas:n})}return e.canvas&&e.canvas.myCustomRedrawAccordingToNewPropsHandler&&e.canvas.myCustomRedrawAccordingToNewPropsHandler(t),e},e.prototype.componentDidMount=function(){var t=new i.default(this.state.sketch,this.wrapper);t.myCustomRedrawAccordingToNewPropsHandler&&t.myCustomRedrawAccordingToNewPropsHandler(this.props),this.setState(a(a({},this.state),{canvas:t,wrapper:this.wrapper}))},e.prototype.componentWillUnmount=function(){null!==this.state.canvas&&this.state.canvas.remove()},e.prototype.render=function(){var t=this;return c.default.createElement("div",a({},this.state.attributes,{ref:function(e){return t.wrapper=e},"data-testid":"canvas-wrapper"}),this.props.children)},e}(c.default.Component);e.default=p}}]);
//# sourceMappingURL=48-2ac05bf5ab17c39a613d.js.map