const e=document.getElementById("triggerWord"),t=document.getElementById("hiddenContent");Popper.createPopper(e,t,{placement:"bottom-start",modifiers:[{name:"eventListeners",options:{enabled:!0,scroll:!1,resize:!1}}],onCreate:()=>{t.style.opacity="0"},onFirstUpdate:()=>{e.addEventListener("mouseenter",()=>{t.style.display="block",setTimeout(()=>{t.style.opacity="1"},10)}),e.addEventListener("mouseleave",()=>{t.style.opacity="0",setTimeout(()=>{t.style.display="none"},300)})}});//# sourceMappingURL=index.927afad6.js.map

//# sourceMappingURL=index.927afad6.js.map
