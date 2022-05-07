const uLTS = new MutationObserver((e) => {
  e.forEach(({ addedNodes: e }) => {
    e.forEach((e) => {
      1 === e.nodeType &&
        "IFRAME" === e.tagName &&
        (e.src.includes("youtube.com") || e.src.includes("vimeo.com")) &&
        (e.setAttribute("loading", "lazy"),
        e.setAttribute("data-src", e.src),
        e.removeAttribute("src")),
        1 !== e.nodeType ||
          "IMG" !== e.tagName ||
          e.src.includes("data:image") ||
          e.setAttribute("loading", "lazy"),
        1 === e.nodeType &&
          "SCRIPT" === e.tagName &&
          ("analytics" == e.className && (e.type = "text/lazyload"),
          e.innerHTML.includes("asyncLoad") &&
            (e.innerHTML = e.innerHTML
              .replace(
                "if(window.attachEvent)",
                "document.addEventListener('asyncLazyLoad',function(event){asyncLoad();});if(window.attachEvent)"
              )
              .replaceAll(", asyncLoad", ", function(){}")),
          (e.innerHTML.includes("PreviewBarInjector") ||
            e.innerHTML.includes("adminBarInjector")) &&
            (e.innerHTML = e.innerHTML.replace(
              "DOMContentLoaded",
              "asyncLazyLoad"
            )),
          (e.src.includes("assets/storefront/features") ||
            e.src.includes("assets/shopify_pay/")) &&
            (e.setAttribute("data-src", e.src), e.removeAttribute("src")));
    });
  });
});
uLTS.observe(document.documentElement, { childList: !0, subtree: !0 });

//New 1.0

var createImg = document.createElement("img");
(createImg.src =
  "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI5OTk5OXB4IiBoZWlnaHQ9Ijk5OTk5cHgiIHZpZXdCb3g9IjAgMCA5OTk5OSA5OTk5OSIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZyBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9Ijk5OTk5IiBoZWlnaHQ9Ijk5OTk5Ij48L3JlY3Q+IDwvZz4gPC9zdmc+"),
  createImg.setAttribute(
    "style",
    "pointer-events: none; position: absolute; top: 0; left: 0; width: 96vw; height: 96vh; max-width: 99vw; max-height: 99vh;"
  ),
  document.body.insertBefore(createImg, document.body.firstChild);
var script_loaded = !1;
function loadJSscripts() {
  script_loaded ||
    (void 0 !== uLTS && uLTS.disconnect(),
    void 0 !== window.yett && window.yett.unblock(),
    (script_loaded = !0),
    document
      .querySelectorAll("iframe[data-src], script[data-src]")
      .forEach((e) => {
        (datasrc = e.dataset.src), null != datasrc && (e.src = datasrc);
      }),
    document.querySelectorAll("link[data-href]").forEach((e) => {
      (datahref = e.dataset.href), null != datahref && (e.href = datahref);
    }),
    document.querySelectorAll("script[type='text/lazyload']").forEach((e) => {
      var t = document.createElement("script");
      for (a = 0; a < e.attributes.length; a++) {
        var r = e.attributes[a];
        t.setAttribute(r.name, r.value);
      }
      (t.type = "text/javascript"),
        (t.innerHTML = e.innerHTML),
        e.parentNode.insertBefore(t, e),
        e.parentNode.removeChild(e);
    }),
    document.dispatchEvent(new CustomEvent("asyncLazyLoad")));
}
var activityEvents = [
  "mousedown",
  "mousemove",
  "keydown",
  "scroll",
  "touchstart",
  "click",
  "keypress",
  "touchmove",
];
activityEvents.forEach(function (e) {
  window.addEventListener(e, loadJSscripts, !1);
});

//New One

document.documentElement.className = document.documentElement.className.replace(
  /\bno-js\b/,
  "js"
);
if (window.Shopify && window.Shopify.designMode)
  document.documentElement.className += " in-theme-editor";
if (
  "ontouchstart" in window ||
  (window.DocumentTouch && document instanceof DocumentTouch)
)
  document.documentElement.className =
    document.documentElement.className.replace(/\bno-touch\b/, "has-touch");
