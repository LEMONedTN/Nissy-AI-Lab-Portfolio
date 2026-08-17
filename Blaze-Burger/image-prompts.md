# BLAZE BURGER｜画像生成プロンプト集

サイト内の `#ccc` プレースホルダー全23箇所に対応する、画像生成AI用のプロンプトです。
英語プロンプトの前に、どの箇所に使うかの日本語ラベルを付けています。

## 全プロンプト共通の注意事項

1. **サイズ・比率を必ず一致させること**
   各プロンプトの末尾に記載した「アスペクト比・ピクセルサイズ」を、画像生成AIのツール側の設定（Midjourneyなら `--ar`、DALL·Eなら画像サイズ選択、Stable Diffusionなら width/height、Nano Banana/Geminiならアスペクト比設定など）で必ず指定してください。プロンプト文中に比率を書くだけでは反映されないツールが多いため、**ツールのパラメータ側でも同じ比率を選択**してください。
   正方形の枠に長方形の画像を入れると、表示が伸びたり不要なトリミングが発生するため、必ず指定の比率ぴったりで書き出してください（余白・レターボックス・黒帯なし、フレーム全体を埋める構図）。
2. **サイトのテイストと大きく異なる画像は絶対にNG**
   ダークな炭×オレンジ×マスタードイエローのアメリカンストリート系の世界観に統一してください。パステルカラー、白背景のスタジオ写真、イラスト調・アニメ調、ポップすぎる配色は使わないでください。
3. **文字が乗る箇所（ファーストビューの3枚）は特に注意**
   ファーストビュー画像の上には白〜クリーム色の文字（店名・キャッチコピー）が重なります。画像の中央〜上部が明るすぎたり、ゴチャゴチャした構図だと文字が読みづらくなるため、必ず「上部を暗め・シンプルにする」指示を守ってください（サイト側でも暗いグラデーションを重ねていますが、画像側でも配慮してください）。

---

## A. ファーストビュー（ヒーローカルーセル）3枚

**配置場所**：トップページ最上部、フェードで切り替わる背景3枚
**比率・サイズ**：横長 16:9　／ 1920×1080px 以上（必ず横長で書き出す。正方形・縦長は不可）

### A-1｜ヒーロー写真1（フレームバーガーのクローズアップ）
```
Close-up cinematic shot of a flame-grilled smoky cheeseburger with melted cheese
dripping down a charred beef patty, rising smoke and steam, glowing charcoal embers
softly blurred in the dark background, dramatic warm side lighting in orange and
amber tones, deep charcoal-black shadows, photorealistic commercial food photography,
shallow depth of field, 50mm lens, ultra high detail, appetizing, cinematic wide shot
with calm negative space and a softly darkened upper area for text overlay, no busy
clutter in the center-top of the frame, no text, no logo, no watermark, not
illustration, not cartoon, not overexposed.
--- Aspect ratio: 16:9 landscape, exactly 1920x1080px (or larger, same ratio),
fill the entire frame edge-to-edge, no letterboxing, no cropping needed after export.
```

### A-2｜ヒーロー写真2（炭火グリルで焼く様子）
```
Wide cinematic shot of a chef's hands flipping a thick beef patty over an open
charcoal grill at night, sparks and smoke rising, warm orange glow illuminating the
smoke, dark moody background, American street-food diner atmosphere, photorealistic
commercial photography, shallow depth of field, dramatic side lighting, wide
composition with darker negative space in the upper third for text overlay, no text,
no logo, no watermark, not illustration, not cartoon.
--- Aspect ratio: 16:9 landscape, exactly 1920x1080px (or larger, same ratio),
fill the entire frame edge-to-edge, no letterboxing, no cropping needed after export.
```

### A-3｜ヒーロー写真3（盛り付けの引きの絵）
```
Three-quarter angle shot of a loaded burger and crispy golden fries served on a
rustic dark wooden board, soft steam rising, warm pendant light glowing above a
blurred diner counter in the background, deep charcoal shadows with amber highlights,
photorealistic commercial food photography, shallow depth of field, cinematic
composition with calm negative space at the top for text overlay, no text, no logo,
no watermark, not illustration, not cartoon.
--- Aspect ratio: 16:9 landscape, exactly 1920x1080px (or larger, same ratio),
fill the entire frame edge-to-edge, no letterboxing, no cropping needed after export.
```

---

## B. ABOUT（店内写真）1枚

**配置場所**：ABOUTセクション、テキストの隣
**比率・サイズ**：横長 4:3　／ 1200×900px

### B-1｜店内写真
```
Interior of a stylish American-style burger diner, dark wood counter with exposed
brick wall, warm industrial pendant lights glowing amber, bar stools, cozy but
modern street-food atmosphere, no visible people, photorealistic architectural
interior photography, warm cinematic color grade matching deep charcoal and amber
tones, no text, no logo, no watermark, not illustration, not cartoon.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

---

## C. こだわり6POINT 6枚

**配置場所**：POINTセクションの各カード上部
**比率・サイズ**：横長 4:3　／ 1200×900px

### C-1｜POINT01：100%ビーフパティ
```
Macro close-up of a raw thick 100% beef patty being placed on a hot charcoal grill,
visible marbling and texture, light smoke rising, warm dramatic side lighting, dark
charcoal background, photorealistic food photography, shallow depth of field, no
text, no logo, no watermark.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### C-2｜POINT02：炭火でじっくり
```
Close-up of a beef burger patty being flame-grilled over glowing charcoal, visible
char marks forming, orange embers glowing beneath, smoke rising, dramatic warm
lighting, dark moody background, photorealistic commercial food photography, no
text, no logo, no watermark.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### C-3｜POINT03：揚げたてポテト
```
Close-up of freshly fried crispy golden french fries in a rustic paper cone, light
steam rising, warm amber lighting, dark charcoal background, photorealistic macro
food photography, shallow depth of field, no text, no logo, no watermark.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### C-4｜POINT04：キッズスペース完備
```
Cozy small kids' corner inside an American-style diner, low wooden table with
crayons and a coloring book, soft cushions in warm amber and orange tones, warm
ambient lighting, no visible children or faces, photorealistic interior
photography, no text, no logo, no watermark.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### C-5｜POINT05：テイクアウトOK
```
A plain kraft paper takeout bag and burger box being handed over a dark wooden
diner counter, warm amber lighting, shallow depth of field, photorealistic
commercial photography, no visible branding or text on the packaging, no text, no
logo, no watermark.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### C-6｜POINT06：期間限定バーガー
```
Close-up of a specialty seasonal burger topped with sliced avocado and a glossy
glaze, elegantly plated on a dark wooden board, warm dramatic side lighting, steam
softly rising, photorealistic commercial food photography, shallow depth of field,
no text, no logo, no watermark.
--- Aspect ratio: 4:3 landscape, exactly 1200x900px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

---

## D. MENU（商品写真）3枚

**配置場所**：MENUセクションの各商品
**比率・サイズ**：正方形 1:1　／ 1200×1200px

### D-1｜スモーキーチーズバーガー
```
45-degree close-up shot of a smoky cheeseburger with melted smoked cheddar cheese
dripping down a thick charred beef patty, sesame seed bun, crisp lettuce and tomato
visible, dark rustic wooden board background, warm dramatic lighting, photorealistic
commercial food photography, shallow depth of field, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### D-2｜アボカド&ベーコンバーガー
```
Close-up shot of a burger overflowing with sliced avocado and crispy bacon strips,
toasted golden bun, fresh lettuce, soft natural warm lighting, dark charcoal
background, photorealistic commercial food photography, shallow depth of field, no
text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### D-3｜ブレイズ・ダブルパティバーガー
```
Tall double-patty burger with melted cheese oozing between two thick beef patties
and spicy sauce dripping down, dramatic side-angle close-up, dark moody background
with warm amber rim light, photorealistic commercial food photography, shallow
depth of field, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

---

## E. SET MENU 4枚

**配置場所**：SET MENUセクションの各カード
**比率・サイズ**：正方形 1:1　／ 1200×1200px

### E-1｜ポテトセット
```
Top-down flat lay of a basket of crispy golden french fries with a small dipping
sauce cup, on a dark rustic tray, warm amber lighting, photorealistic food
photography, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### E-2｜ドリンクセット
```
Close-up of an iced soft drink cup with condensation and a straw, sitting on a
dark wooden diner counter, warm ambient lighting, photorealistic commercial
photography, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### E-3｜ポテト&ドリンクセット
```
Top-down flat lay of crispy golden fries and an iced drink cup arranged together
on a dark tray, warm amber lighting, photorealistic food photography, no text, no
logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### E-4｜オニオンリング&ドリンクセット
```
Top-down flat lay of crispy golden onion rings stacked beside an iced drink cup,
dark rustic tray, warm amber lighting, photorealistic commercial food photography,
no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

---

## F. SNS投稿風 6枚

**配置場所**：SNSセクションのInstagram風グリッド
**比率・サイズ**：正方形 1:1　／ 1200×1200px

### F-1｜手持ちで頬張るカット
```
Casual candid photo of a hand holding a loaded cheeseburger with a bite taken out
and melted cheese stretching, warm indoor lighting, shallow depth of field,
photorealistic smartphone-style food photography, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### F-2｜バーガー並べたフラットレイ
```
Top-down flat lay of several different burgers lined up on a rustic dark wooden
table, warm ambient lighting, photorealistic food photography, no text, no logo,
no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### F-3｜店内窓際でのカジュアルカット
```
Candid photo of a burger and fries on a small diner table near a window with soft
warm natural light, cozy atmosphere, shallow depth of field, photorealistic
lifestyle food photography, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### F-4｜チーズが溶けるマクロカット
```
Extreme close-up macro shot of melted cheese dripping down the side of a grilled
beef patty, warm dramatic lighting, dark background, photorealistic food
photography, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### F-5｜テイクアウトのライフスタイルカット
```
Lifestyle photo of a plain kraft paper takeout bag and a drink cup placed on a car
dashboard or park bench, warm golden hour sunlight, photorealistic candid
photography, no text, no logo, no watermark, no visible branding.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

### F-6｜夜の外観カット
```
Night exterior shot of a cozy American-style burger stand storefront, warm glowing
string lights and pendant lamps, dark street atmosphere, photorealistic
architectural photography, no readable signage, no text, no logo, no watermark.
--- Aspect ratio: perfect square 1:1, exactly 1200x1200px, fill the entire frame
edge-to-edge, no letterboxing, no cropping needed after export.
```

---

## まとめ（サイズ一覧）

| 箇所 | 枚数 | 比率 | サイズ |
|---|---|---|---|
| A. ヒーロー | 3 | 16:9 | 1920×1080px以上 |
| B. ABOUT店内 | 1 | 4:3 | 1200×900px |
| C. こだわり6POINT | 6 | 4:3 | 1200×900px |
| D. MENU商品 | 3 | 1:1 | 1200×1200px |
| E. SET MENU | 4 | 1:1 | 1200×1200px |
| F. SNS投稿風 | 6 | 1:1 | 1200×1200px |
| **合計** | **23** | | |
