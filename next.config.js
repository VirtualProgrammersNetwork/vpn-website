/** @type {Partial<import('next/dist/next-server/server/config-shared').NextConfig>} */
const providedExports = { future: { strictPostcssConfiguration: true } };

/** @type {Partial<import('next/dist/next-server/server/config-shared').NextConfig>} */
module.exports = providedExports;

// Next.jsで ES module を使うために必要な処理, issue #6 参照
const withTM = require('next-transpile-modules')([
  'react-markdown',
  'micromark-util-combine-extensions',
  'micromark-util-symbol',
  'micromark-util-resolve-all',
  'micromark-util-html-tag-name',
  'remark-rehype',
  'mdast-util-to-hast',
  'unist-builder',
  'unist-util-position',
  'unist-util-generated',
  'mdast-util-definitions',
  'property-information',
  'unist-util-visit',
  'space-separated-tokens',
  'comma-separated-tokens',
]);

module.exports = withTM(providedExports);
