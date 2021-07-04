# Virtual Programmer's Network official website

## 開発ドキュメント

### システム要件

- 最新の Node.js v16 が動作する環境

### インストール

```sh
npm ci
```

### ビルドして結果を確認する

```sh
npm run build
npm run serve
```

`Ctrl + C` で中止します。

### 実装のために、ホットコード プッシュ環境を作成する

```sh
npm start
```

`Ctrl + C` で中止します。

### Linting

```sh
npm run lint
```

### コミットについて

試験的に[コミット文の検証(Conventional Commits)](https://www.conventionalcommits.org/ja/v1.0.0/)
を導入しています。このルールに違反する場合、コミットを弾きます。

#### ルールの簡易的説明 (詳細は上記リンク参照)

```txt
<前置詞>: 本文

詳細
```

- 前置詞を `build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test` のいずれかとする
- 本文の頭文字は大文字が、末尾は句点が使えない

#### 例 1

> feat: コンポーネント Hoge を実装した

#### 例 2

> fix: fixed a bug that Hoge component cause crash

### CI/CD について

GitHub Actions を使用した CI/CD を導入しています。

- `main` ブランチに push した場合、ビルドして `out` フォルダを `gh-pages` ブランチへ push します。
- 他のブランチに push した場合、ビルド・Lint を行います。
