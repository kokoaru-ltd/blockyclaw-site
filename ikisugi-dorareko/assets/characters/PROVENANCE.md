# 人物アセットの出典と加工

## 仕様

架空の成人男性、約1.79m。後頭部に両手を置き、肘を左右に開くポーズ。上半身と足は肌、骨盤・上腿は不透明のスイムショーツで覆う。通常表示とラグドールで同じ人体表面を使用する。

## 出典・利用条件

- メッシュ: [Innerscene / Male base mesh - 3D Person, Rigged A-pose](https://www.innerscene.com/tools/library/3d-parts/male-base-mesh-3d-person-rigged-a-pose-380e6d89)。同ページは成人男性のMakeHuman由来メッシュ・163骨スケルトンと説明し、CC0として改変・再配布・商用利用を明示。
- メッシュ取得URL: https://files.innerscene.com/library/male-base-mesh-3d-person-rigged-a-pose-380e6d89/038f3a526b2fc3efd012/male-base-mesh-base_male.glb
- 肌: Margaret Toigo, `toigo_light_skin_male_freckles` / `young_lightskinned_male_diffuse_Freckles.png`。[MakeHuman Community skins02](https://static.makehumancommunity.org/assets/assetpacks/skins02.html) でCC0と表示。原寸画像を1024px JPEGへ縮小して同梱GLBへ埋込。
- 肌パック取得URL: https://files.makehumancommunity.org/asset_packs/skins02/skins02_cc0.zip
- [MakeHuman core assetsのCC0説明](https://static.makehumancommunity.org/mpfb/faq/is_it_really_free.html)
- `GLTFLoader.js`: Three.js 0.170.0 examples loader（MIT）。https://unpkg.com/three@0.170.0/examples/jsm/loaders/GLTFLoader.js から取得し、import先だけローカル同梱ファイルへ変更。

## 加工

Blender 5.1.2で163骨の実スケルトンをポーズし、評価後の表面を焼き込み。骨盤・上腿の肌面を出力から除き、腰部と左右の裾を組み合わせた独自の閉じた不透明ショーツで覆った。ショーツはブーリアン結合・ボクセル溶接・平滑化で面の重複と透けを除去した。頭部の実表面から短髪のキャップを作成。眼球は元モデルの独立メッシュを使用し、小さい虹彩を追加。デシメート、11部位への解剖学的分割を行った。

GLBは中立の成人男性の水着姿のみ。裸の原本は制作時のローカル資料として保持し、配信フォルダには含めない。有料生成・AI人物生成は使用していない。

## 実行・検証

- 制作: `tools/dashcam-qa/character-build.py`（Git管理外の制作スクリプト）。Blenderの描画プレビューは完成した水着モデルのみ。
- 静的: GLBの形状、部位、UV、埋込肌テクスチャ、有限座標、寸法、ローカルimport先を検査。
- ローダー: `tools/dashcam-qa/character-test.mjs` で実GLTFLoaderのジオメトリ読込、3色、11部位・10関節、共有ジオメトリの安全性を検証。Node画像スタブを使うため、テクスチャの実描画確認とは区別。
- 画素: `tools/dashcam-qa/character-preview.png` は肌テクスチャ・目・手指・足指・水着を含む実メッシュのBlenderレンダー。
- `game-dev` はPATHに見つからず、この制作は標準のBlender CLI・Python・Three.jsローダーで行った。

実際のGPUブラウザでのゲーム内描画・コースとの組み合わせはゲーム側の検証で確認する。
