// ==UserScript==
// @name         PXU redirect to .xyz
// @namespace    https://pixuniverse.xyz
// @version      1.5
// @description  Automatically redirects to new site link.
// @author       small bee
// @match        *://pixuniverse.fun/*
// @updateURL    https://github.com/lolkaka2491/pxuphishing/raw/refs/heads/main/pxuskip.user.js
// @downloadURL  https://github.com/lolkaka2491/pxuphishing/raw/refs/heads/main/pxuskip.user.js
// @grant        none
// ==/UserScript==

(function(){
    'use strict';
    
    var targetHost = "pixuniverse.xyz";
    
    if (window.location.hostname !== targetHost) {
        window.location.replace("https://" + targetHost + window.location.pathname + window.location.search + window.location.hash);
    }
})();
