# 天来（Tenrai）HP 画像生成プロンプト集
**使用モデル：Nano Banana2**

---

## 共通スタイル指定（全画像に必ず付与する）

```
Style keywords (always append to every prompt):
cinematic dark tone, deep shadow, dramatic lighting, Japanese aesthetic,
moody atmosphere, warm amber and dark red color grading,
high resolution, photorealistic, professional food photography or portrait
```

---

## カラーパレット参照

| 役割 | カラー |
|------|--------|
| ベース | #1A1A1A（ほぼ黒） |
| サブ | #F5F0E8（オフホワイト・和紙風） |
| アクセント | #C0392B（深い赤） |

---

## ① index.html ／ ヒーロー背景

**クラス名：** `.hero-bg`
**サイズ：** `1920 × 1080 px`（フルHD横長）
**ファイル名：** `hero-bg.jpg`

```
A dramatic top-down aerial view of a steaming bowl of rich tonkotsu shoyu ramen,
placed on a weathered dark wooden table in a dimly lit Japanese ramen shop at night.
Thick savory broth glistening under a single warm spotlight, chashu pork, soft-boiled
egg, green onions, nori. Deep dark background with subtle red ambient light accents.
Cinematic dark tone, moody atmosphere, warm amber and dark red color grading,
high resolution, photorealistic, professional food photography.
Aspect ratio 16:9, 1920x1080px.
```

---

## ② index.html ／ こだわり画像①（スープ）

**クラス名：** `.kodawari-image`（1枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `index-kodawari-soup.jpg`

```
Close-up shot of a large iron pot filled with rich, milky tonkotsu pork bone broth,
slowly simmering with gentle steam rising. Dark industrial kitchen background,
dramatic side lighting highlighting the depth of the broth.
Visible pork bones and vegetables inside. Warm golden-brown tones.
Cinematic dark tone, deep shadow, Japanese restaurant kitchen, moody atmosphere,
warm amber and dark red color grading, high resolution, photorealistic.
Aspect ratio 4:3, 800x600px.
```

---

## ③ index.html ／ こだわり画像②（麺）

**クラス名：** `.kodawari-image`（2枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `index-kodawari-noodle.jpg`

```
Extreme close-up of fresh handmade ramen noodles being pulled apart with chopsticks,
showing the springy elastic texture and fine flour dusting.
Dark slate background, dramatic top-down lighting with shallow depth of field.
Raw noodles coiled naturally on a dark wooden surface.
Cinematic dark tone, deep shadow, Japanese aesthetic, moody atmosphere,
warm amber color grading, high resolution, photorealistic, professional food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ④ index.html ／ アクセス簡易マップ

**クラス名：** `.access-simple-map`
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `index-access-map.jpg`

```
Stylized illustration of Osaka Umeda station area at night,
viewed from above as an artistic map-like perspective.
Dark navy and charcoal background, warm orange street lights,
subtle red accent markers indicating a ramen shop location.
Japanese city nightscape with minimalist geometric building outlines,
soft glow of illuminated signs.
Cinematic dark tone, Japanese aesthetic, moody urban atmosphere,
high resolution, digital art illustration style.
Aspect ratio 4:3, 800x600px.
```

---

## ⑤ kodawari.html ／ スープへのこだわり画像

**クラス名：** `.kodawari-image`（1枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `kodawari-soup.jpg`

```
Low angle shot inside a Japanese ramen kitchen at 3am, a Japanese male chef
in his 40s wearing a white apron and headband, carefully skimming foam
from a massive bubbling pot of tonkotsu broth. Steam fills the air.
Warm kitchen light against dark surroundings, focused and intense expression.
Japanese person, cinematic dark tone, deep shadow, dramatic lighting,
moody atmosphere, warm amber and dark red color grading,
high resolution, photorealistic, professional photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑥ kodawari.html ／ 麺へのこだわり画像

**クラス名：** `.kodawari-image`（2枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `kodawari-noodle.jpg`

```
A Japanese male noodle craftsman in his 50s, wearing traditional Japanese
work clothes (法被), hand-rolling fresh ramen noodles on a large wooden board
dusted with flour. Small artisan noodle workshop, wooden shelves lined with
flour bags in the background. Soft natural morning light from a single window.
Japanese person, cinematic dark tone, deep shadow, dramatic lighting,
moody atmosphere, warm amber color grading, high resolution, photorealistic.
Aspect ratio 4:3, 800x600px.
```

---

## ⑦ kodawari.html ／ 素材へのこだわり画像

**クラス名：** `.kodawari-image`（3枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `kodawari-ingredients.jpg`

```
Flat lay of premium ramen ingredients arranged artistically on a dark slate surface:
thick sliced chashu pork, fresh free-range eggs, dried kelp (kombu),
dried sardines (niboshi), fresh pork bones, green onions, garlic cloves.
Dramatic top-down lighting with deep shadows between items.
Rustic Japanese food styling, selective focus, moody dark food photography.
Cinematic dark tone, warm amber and dark red color grading,
high resolution, photorealistic, professional food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑧ kodawari.html ／ 代表メッセージ 店主写真

**クラス名：** `.message-photo`
**サイズ：** `600 × 800 px`（3:4縦長 ポートレート）
**ファイル名：** `owner-portrait.jpg`

```
Professional portrait photograph of a Japanese male ramen chef in his mid 40s,
named Kazuma Takahashi, wearing a clean white Japanese chef's uniform (白衣)
and traditional headband (鉢巻き). Standing confidently with arms slightly crossed
in front of a dark ramen restaurant interior, warm back lighting creating a halo effect.
Serious yet warm expression, slight smile. Dark moody background with bokeh of
kitchen equipment. Japanese person, cinematic dark tone, dramatic portrait lighting,
deep shadow, warm amber and dark red color grading,
high resolution, photorealistic, professional portrait photography.
Aspect ratio 3:4, 600x800px.
```

---

## ⑨ menu.html ／ 天来特製 豚骨醤油ラーメン

**クラス名：** `.menu-card-image`（1枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-tonkotsu-shoyu.jpg`

```
Overhead shot of a beautiful bowl of tonkotsu shoyu ramen.
Rich dark brown broth, two thick slices of perfectly braised chashu pork,
a halved soft-boiled marinated egg with golden yolk, bamboo shoots, green onions,
nori sheet. Steam rising gently. Dark wooden table surface.
Dramatic spotlight from above, deep shadows around the bowl.
Cinematic dark tone, warm amber and dark red color grading,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑩ menu.html ／ 塩白湯ラーメン

**クラス名：** `.menu-card-image`（2枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-shio-paitan.jpg`

```
Overhead shot of a beautiful bowl of shio paitan chicken broth ramen.
Creamy, pale ivory-colored rich chicken broth, thin straight noodles visible beneath,
delicate chashu chicken slices, mitsuba herb garnish, yuzu zest, thin nori.
Elegant and refined presentation in a white ceramic bowl.
Soft warm single spotlight, dark background, subtle steam.
Cinematic dark tone, moody atmosphere, warm ivory and amber color grading,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑪ menu.html ／ 辛味噌らーめん

**クラス名：** `.menu-card-image`（3枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-kara-miso.jpg`

```
Overhead shot of a bold spicy miso ramen bowl, deep reddish-brown miso broth
with vibrant red chili oil swirls on the surface. Medium wavy noodles,
chunky ground pork, corn kernels, butter melting on top, bean sprouts,
sliced green onions. Dramatic restaurant lighting, steam rising.
Dark background with warm red and amber tones, bold and appetizing.
Cinematic dark tone, deep red and amber color grading, moody atmosphere,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑫ menu.html ／ 鶏醤油らーめん

**クラス名：** `.menu-card-image`（4枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-tori-shoyu.jpg`

```
Overhead shot of a refined chicken shoyu ramen bowl.
Crystal clear amber-golden chicken broth, thin straight noodles,
two slices of tender chicken chashu, yuzu-soy tare swirl on surface,
sliced leeks, menma bamboo shoots, decorative fu (wheat gluten).
Elegant, clean Japanese aesthetic. Pale cream ceramic bowl.
Soft studio lighting, subtle shadows, minimal garnish styling.
Cinematic dark tone, warm golden amber color grading, moody atmosphere,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑬ menu.html ／ 濃厚つけ麺

**クラス名：** `.menu-card-image`（5枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-tsukemen.jpg`

```
Slightly elevated angle shot of a thick tsukemen set.
A separate small dark bowl of intensely concentrated triple-blend dipping broth
(tonkotsu, chicken, seafood), steaming and deeply colored beside
a large portion of thick wavy noodles on a dark slate plate, garnished with
nori, sliced chashu, narutomaki, chopped green onion.
Dark wooden table surface, dramatic side lighting.
Cinematic dark tone, deep shadow, moody atmosphere, warm amber and dark color grading,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑭ menu.html ／ 天来特盛ラーメン

**クラス名：** `.menu-card-image`（6枚目）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-tokumo-ri.jpg`

```
Dramatic overhead shot of a massive premium ramen bowl, overflowing with toppings.
Five thick generous slices of seared chashu pork fanned out, two halved soft-boiled
marinated eggs, mountain of menma, multiple nori sheets, heaping mound of green onion.
Rich dark tonkotsu shoyu broth barely visible beneath the abundance.
Large rustic dark ceramic bowl. Intense single spotlight, deep dramatic shadows.
Cinematic dark tone, deep shadow, bold dramatic lighting, warm amber and dark red
color grading, high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑮ menu.html ／ チャーシュー丼

**クラス名：** `.menu-card-image`（サイドメニュー1）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-chashu-don.jpg`

```
Overhead shot of a chashu rice bowl (donburi).
Three thick slices of beautifully seared and glazed braised pork belly on fluffy
white Japanese rice in a dark ceramic bowl. Rich brown tare sauce drizzled over top,
thin-sliced green onion, toasted sesame seeds, pickled ginger on the side.
Warm glowing surface, dramatic restaurant lighting from above, subtle steam.
Cinematic dark tone, warm amber and dark red color grading, moody atmosphere,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑯ menu.html ／ 天来餃子（6個）

**クラス名：** `.menu-card-image`（サイドメニュー2）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-gyoza.jpg`

```
Overhead shot of six handmade pan-fried gyoza dumplings arranged in a semicircle
on a dark cast iron pan or black ceramic plate. Perfectly golden-brown crispy bottom,
characteristic pleated tops, light steam rising. Small dipping sauce dish with
soy-vinegar blend and chili oil beside them.
Dark background, single warm spotlight, golden-brown contrast against darkness.
Cinematic dark tone, deep shadow, warm amber color grading, moody atmosphere,
high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑰ menu.html ／ 唐揚げ（3個）

**クラス名：** `.menu-card-image`（サイドメニュー3）
**サイズ：** `800 × 600 px`（4:3横長）
**ファイル名：** `menu-karaage.jpg`

```
Overhead shot of three large, perfectly fried Japanese karaage chicken pieces
on dark slate plate. Deeply golden-brown and extra crispy exterior, juicy inside.
Lemon wedge, fresh curly parsley, thin shredded cabbage on the side.
Dark table surface, single strong overhead lighting creating dramatic shadows.
Cinematic dark tone, deep shadow, warm golden-brown and amber color grading,
moody atmosphere, high resolution, photorealistic, professional Japanese food photography.
Aspect ratio 4:3, 800x600px.
```

---

## ⑱ access.html ／ アクセスページ マップエリア

**クラス名：** `.access-map`
**サイズ：** `1440 × 360 px`（横長バナー）
**ファイル名：** `access-map-banner.jpg`

```
Wide panoramic night view of Osaka Umeda (Osaka Station) area from a slightly
elevated perspective. Bright illuminated JR Osaka station complex, surrounding
department stores (Daimaru, Lucua), overhead highways, busy street intersections
with light trails from cars. Warm orange and white city lights against a deep
dark blue-black sky. Cinematic urban nightscape, moody atmosphere,
dark tone with warm city light color grading, high resolution, photorealistic.
Aspect ratio 4:1, 1440x360px.
```

---

## 生成時の共通注意事項

1. **人物は必ず日本人を使用すること**（Japanese person, Asian Japanese male/female と明記）
2. **全画像に `cinematic dark tone` を必ず付与**してサイトのテイストを統一すること
3. **カラーグレーディング**は `warm amber and dark red` で統一（テイスト参考の色調）
4. **生成後のファイル名**は上記の通り保存し、HTMLの `background-image: url('images/〇〇.jpg')` に差し替えること
5. **画像保存先フォルダ：** `/ramen-tenrai/images/`

---

## HTML差し替え時のCSSサンプル

```css
/* 例：ヒーロー背景 */
.hero-bg {
  background-image: url('../images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.45; /* 0.18から調整可能 */
}

/* 例：メニューカード画像 */
.menu-card-image {
  background-image: url('../images/menu-tonkotsu-shoyu.jpg');
  background-size: cover;
  background-position: center;
}

/* 例：こだわり画像 */
.kodawari-image {
  background-image: url('../images/kodawari-soup.jpg');
  background-size: cover;
  background-position: center;
}
```
