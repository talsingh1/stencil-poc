import { p as promiseResolve, b as bootstrapLazy } from './index-8343f927.js';

/*
 Stencil Client Patch Esm v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["component-one_2",[[1,"component-one",{"color":[1]}],[1,"component-two",{"color":[1]}]]],["tooltip-parent",[[1,"tooltip-parent",{"color":[1]}]]]], options);
  });
};

export { defineCustomElements };
