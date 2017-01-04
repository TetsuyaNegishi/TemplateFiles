# TemplateFiles

レポート作成用のテンプレートファイル

## Environment

* macOS

## Requirment

この環境では以下のツールが必要になる。

* platex + dvipdfmx
    * lstlistings,jlisting
* node
* npm
* pandoc
* pandoc-crossref

### Installation

必要なツールが揃っていない場合、以下を参照にインストールする

* Platex + dvipdfmx：[macTex](https://tug.org/mactex/mactex-download.html)からインストール
* lstlistings,jlisting：[TeXでソースコードを埋め込む](http://qiita.com/ayihis@github/items/c779e4ab5cd7580f1f87)を参照
* node,npm：[macでNode.jsの環境設定](http://qiita.com/tagosaku324/items/bf1fe149c38c99728c72)を参照
* pandoc：homebrewからインストール
* pandoc-crossref：homebrewからインストール


## Environment construction

プロジェクトをダウンロード後にnpmで使用するライブラリを以下のコマンドからインストールする。

```
$ npm install
```

Atomを利用している場合は[Linter](https://atom.io/packages/linter)、[textlint](https://atom.io/packages/linter-textlint)をインストールする。

以下のコマンドを実行し、report.pdfが生成されれば環境構築が完了したことになる。

```
$ bash reportc.sh
```

## Use

sample.mdにmarkdown形式でレポートを記述する。

表紙やレポートのタイトルはreport.texから編集する。

reportc.shを実行するとコンパイルされ、report.pdfが生成される。

## Reference
[http://www.yukisako.xyz/entry/2015/12/12/180830](http://www.yukisako.xyz/entry/2015/12/12/180830)
