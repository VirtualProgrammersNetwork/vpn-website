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
  // リリースビルド時に必要なやつ
  'micromark-util-chunked',
  'micromark-factory-space',
  'micromark-util-character',
  'micromark-core-commonmark',
  'micromark-util-subtokenize',
  'micromark-factory-destination',
  'micromark-factory-label',
  'micromark-factory-title',
  'micromark-factory-whitespace',
  'micromark-util-normalize-identifier',
  'micromark-util-classify-character',
  'micromark-util-decode-numeric-character-reference',
]);

module.exports = withTM(providedExports);
