'use strict';

const index = require('./index-446661a5.js');

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('shop.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["component-one_2.cjs",[[1,"component-one",{"color":[1]}],[1,"component-two",{"color":[1]}]]],["tooltip-parent.cjs",[[1,"tooltip-parent",{"color":[1]}]]]], options);
});
