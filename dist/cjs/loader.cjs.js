'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-446661a5.js');

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["component-one_2.cjs",[[1,"component-one",{"color":[1]}],[1,"component-two",{"color":[1]}]]],["tooltip-parent.cjs",[[1,"tooltip-parent",{"color":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
