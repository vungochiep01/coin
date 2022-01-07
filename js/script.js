/* swap the `no-js` class-name on the root html-element with `js` */
var root = document.documentElement;

if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) { 
 root.className = root.className.replace(/\bno-js\b/g, '') + ' js '; 
} 

/* insert overlay elements to be animated with CSS-animations */
function insertEl() {
"use strict";
  var tagline = document.getElementById('tagline');
  var tagline1 = document.getElementById('taglinePaintings');
  var tagline2 = document.getElementById('taglineWebdesign');
  var tagline3 = document.getElementById('taglineAnimation');
  var overlay1 = document.createElement('span');
  var overlay2 = document.createElement('span');
  var overlay3 = document.createElement('span');

  overlay1.setAttribute('class', 'tagline-skill-overlay tagline-skill-overlay-paintings');
  overlay2.setAttribute('class', 'tagline-skill-overlay tagline-skill-overlay-webdesign');
  overlay3.setAttribute('class', 'tagline-skill-overlay tagline-skill-overlay-animation');

  tagline1.insertBefore(overlay1, tagline1.firstChild);
  tagline2.insertBefore(overlay2, tagline2.firstChild);
  tagline3.insertBefore(overlay3, tagline3.firstChild);

};
insertEl();

/* Fira Sans and Fira Mono webfonts:
 * https://www.google.com/fonts#UsePlace:use/Collection:Fira+Sans
 * https://www.google.com/fonts#UsePlace:use/Collection:Fira+Mono
 */
 WebFontConfig = {
   google: { families: [ 'Fira+Mono::latin','Fira+Sans::latin'] }
 };
 (function() {
   var wf = document.createElement('script');
   wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
   wf.type = 'text/javascript';
   wf.async = 'true';
   var s = document.getElementsByTagName('script')[0];
   s.parentNode.insertBefore(wf, s);
 })();