# Café Cocoro｜Webサイト一式 指示書（README）

架空カフェ「Café Cocoro」のサイト（全5ページ）です。
レイアウト参考＝CafeRob、テイスト参考＝Café Cinnamon をもとに制作しました。

---

## フォルダ構成

```
cafe-cocoro/
├─ index.html          … TOP（3枚ヒーローカルーセル）
├─ about.html          … コンセプト・こだわり・店舗概要
├─ menu.html           … パンケーキ/ランチ/スイーツ/ドリンク
├─ onlineshop.html     … 商品グリッド＋ギフト案内
├─ contact.html        … お問い合わせフォーム＋アクセス（Googleマップ埋め込み）
├─ style/
│  ├─ reset.css        … リセットCSS
│  └─ style.css        … 本体CSS（色・フォント・レイアウト・レスポンシブ）
├─ images/             … 画像フォルダ（生成画像をここに入れる）
├─ image-create.md     … 画像作成（当てはめ）プロンプト集 ★画像はここのプロンプトで作る
└─ README.md           … このファイル（指示書）
```

---

## デザインテイスト

- **カラー**：生成り（#F5EFE6）＋ モカブラウン（#7C6A56）＋ マスタードの差し色（#C8993F）
- **フォント**：Cormorant Garamond（英セリフ）／Parisienne（筆記体）／Shippori Mincho（明朝）
- **装飾**：見出しは筆記体＋英セリフ＋罫線、INFO/フッターはアーチ曲面、料理写真は丸型、余白を贅沢に
- **方向性**：大人向けのナチュラル・レトロシック（落ち着き・上質・手作り感）

---

## 仕様メモ

- TOPは3スライドの自動送りカルーセル。
- スマホ対応（768px以下でハンバーガーメニュー）。
- 本文フォントは原則16px以上（※注釈・必須バッジ・コピーライト等の装飾のみ例外）。
- アクセスマップはGoogleマップ埋め込み（JR大阪駅・日本語）。住所・TEL・SNSはダミー。

---

## 画像の状況（重要）

画像のプロンプトは **`image-create.md`** に集約しています。
**ファイル名は各HTMLが実際に参照している名前に一致**させてあるので、その名前で `images/` に保存すればそのまま表示されます。

- ✅ 挿入済み（`<img>` 化済み）：index / about / menu … あとは `images/` に画像を入れるだけ
- ⏳ 未挿入（まだプレースホルダー）：
  - onlineshop.html … 見出し帯＋商品6点（`online_hero.jpg` / `shop_*.jpg`）
  - contact.html … 見出し帯（`exterior.jpg` 流用可、別カットなら `contact_hero.jpg`）
- `images/` フォルダは現在空です。生成画像を入れてください。
- 生成が必要な画像は **43枚**（共用を除く実数）。詳細は `image-create.md` 参照。

---

## 手順

1. `image-create.md` を **Google Antigravity に丸ごと渡して**、Nano Banana 2 で一括生成（冒頭にエージェント向け実行指示・ファイル名・縦横比を明記済み）。
2. **記載のファイル名のまま** `cafe-cocoro/images/` に保存。
3. index / about / menu は保存だけで表示されます。
4. onlineshop / contact は `<div class="ph">` を `<img … class="ph-img">` に置き換え（`image-create.md` 巻末の付録参照）。この一括作業も依頼可能です。

---

制作：Cowork（あおい）。ダミーテキスト・ダミー画像枠のデモ用サイトです。
公開時は住所・電話番号・SNSリンク・実画像を差し替えてください。
