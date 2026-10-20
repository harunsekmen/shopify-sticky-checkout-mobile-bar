const fs = require('fs');
const assert = require('assert');

const liquid = fs.readFileSync(__dirname + '/../sections/sticky-checkout-bar.liquid', 'utf8');
assert(liquid.includes('sticky-checkout-component'), 'Must render snippet');

const css = fs.readFileSync(__dirname + '/../assets/sticky-bar.css', 'utf8');
assert(css.includes('position: fixed'), 'Must be fixed position');

console.log('PASS: shopify-sticky-checkout-mobile-bar verified.');
