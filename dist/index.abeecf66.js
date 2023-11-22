!function(){let e=document.querySelector("#triggerWord"),t=document.querySelector("#hiddenContent"),o=Popper.createPopper(e,t,{modifiers:[{name:"offset",options:{offset:[0,8]}}]});function n(){// Make the tooltip visible
t.setAttribute("data-show",""),// Enable the event listeners
o.setOptions(e=>({...e,modifiers:[...e.modifiers,{name:"eventListeners",enabled:!0}]})),// Update its position
o.update()}function r(){// Hide the tooltip
t.removeAttribute("data-show"),// Disable the event listeners
o.setOptions(e=>({...e,modifiers:[...e.modifiers,{name:"eventListeners",enabled:!1}]}))}["mouseenter","focus"].forEach(t=>{e.addEventListener(t,n)}),["mouseleave","blur"].forEach(t=>{e.addEventListener(t,r)})}();//# sourceMappingURL=index.abeecf66.js.map

//# sourceMappingURL=index.abeecf66.js.map
