function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=f||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,u,f,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,u=setTimeout(O,t),c?y(e):a}function j(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-l>=i}function O(){var e=v();if(j(e))return h(e);u=setTimeout(O,function(e){var n=t-(e-f);return s?d(n,i-(e-l)):n}(e))}function h(e){return u=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=j(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return S(f);if(s)return u=setTimeout(O,t),y(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?u(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".js-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]')};if(y.form.addEventListener("input",e(t)((function(e){const t={email:y.email.value,message:y.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),y.form.addEventListener("submit",(function(e){if(e.preventDefault(),""===y.email.value||""===y.message.value)return alert("Заповніть усі поля, будь-ласка!");var t;console.log(JSON.parse(null!==(t=localStorage.getItem("feedback-form-state"))&&void 0!==t?t:{})),y.form.reset(),localStorage.removeItem("feedback-form-state")})),""!==JSON.parse(localStorage.getItem("feedback-form-state"))){var S;const e=null!==(S=JSON.parse(localStorage.getItem("feedback-form-state")))&&void 0!==S?S:{};var j,O;y.email.value=null!==(j=e.email)&&void 0!==j?j:"",y.message.value=null!==(O=e.message)&&void 0!==O?O:""}
//# sourceMappingURL=03-feedback.d4fc390e.js.map
