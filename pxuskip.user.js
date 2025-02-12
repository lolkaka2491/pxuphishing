// ==UserScript==
// @name         PXU skip phishing warning
// @namespace    https://pixuniverse.fun
// @version      1.4
// @description  Automatically bypasses the phishing warning.
// @author       small bee
// @match        *://pixuniverse.fun/*
// @updateURL    https://github.com/lolkaka2491/pxuphishing/raw/refs/heads/main/pxuskip.user.js
// @downloadURL  https://github.com/lolkaka2491/pxuphishing/raw/refs/heads/main/pxuskip.user.js
// @grant        none
// ==/UserScript==
(function(){'use strict';function t(s){return atob(atob(atob(s)))}var h=t("WTBkc05HUlhOWEJrYlZaNVl6SlZkVnB1Vm5VPQ==");if(window.location.hostname!==h){window.location.replace("https://"+h+window.location.pathname+window.location.search+window.location.hash);return}function a(e){e.click();e.dispatchEvent(new MouseEvent("click",{view:window,bubbles:true,cancelable:true}));console.log("Simulated click on the button.")}function c(){var b=document.querySelector("button.cf-btn.cf-btn-danger[data-translate='dismiss_and_enter']");return b?(console.log("Button found. Attempting to click."),a(b),true):false}if(document.readyState==="complete"||document.readyState==="interactive"){if(c())return}else document.addEventListener("DOMContentLoaded",c);var o=new MutationObserver(function(d,e){c()&&e.disconnect()});o.observe(document.body,{childList:true,subtree:true});var i=setInterval(function(){c()&&clearInterval(i)},1000)})();
