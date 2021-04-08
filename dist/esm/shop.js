import { p as promiseResolve, b as bootstrapLazy } from './index-8343f927.js';

/*
 Stencil Client Patch Browser v2.5.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["component-one_2",[[1,"component-one",{"color":[1]}],[1,"component-two",{"color":[1]}]]],["tooltip-parent",[[1,"tooltip-parent",{"color":[1]}]]]], options);
});
