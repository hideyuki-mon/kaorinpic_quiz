/**
 * 人物データセット
 * 各国の著名人（世界的には有名でない人物を優先）
 * 写真: Wikimedia Commons (CC BY-SA / パブリックドメイン)
 * imageUrl: Wikipedia REST API で取得した最新URL
 *
 * difficulty: 1=簡単, 2=普通, 3=難しい
 */

export const persons = [
  // ========== 東アジア ==========
  {
    id: 1,
    name: "小池百合子",
    country: "日本",
    flag: "🇯🇵",
    region: "東アジア",
    difficulty: 2,
    hint: "東京都知事・元防衛大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Yuriko_Koike_January_2026_%28cropped_1%29.jpg/330px-Yuriko_Koike_January_2026_%28cropped_1%29.jpg",
  },
  {
    id: 2,
    name: "丁寧（ディン・ニン）",
    country: "中国",
    flag: "🇨🇳",
    region: "東アジア",
    difficulty: 2,
    hint: "卓球女子世界チャンピオン",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mondial_Ping_-Women%27s_Singles_-_Quarterfinal_-_Ding_Ning-Ri_Myong_Sun_-_17.jpg/330px-Mondial_Ping_-Women%27s_Singles_-_Quarterfinal_-_Ding_Ning-Ri_Myong_Sun_-_17.jpg",
  },
  {
    id: 3,
    name: "李在明（イ・ジェミョン）",
    country: "韓国",
    flag: "🇰🇷",
    region: "東アジア",
    difficulty: 3,
    hint: "韓国の野党「共に民主党」代表",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/President_Lee_Jae_Myung_20260306.jpg/330px-President_Lee_Jae_Myung_20260306.jpg",
  },
  {
    id: 4,
    name: "ローレンス・ウォン",
    country: "シンガポール",
    flag: "🇸🇬",
    region: "東南アジア",
    difficulty: 3,
    hint: "シンガポール第4代首相・財務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Prime_Minister_of_Singapore_Lawrence_Wong_250530-D-PM193-4275_%282025%29.jpg/330px-Prime_Minister_of_Singapore_Lawrence_Wong_250530-D-PM193-4275_%282025%29.jpg",
  },

  // ========== 東南アジア ==========
  {
    id: 5,
    name: "スリ・ムルヤニ",
    country: "インドネシア",
    flag: "🇮🇩",
    region: "東南アジア",
    difficulty: 3,
    hint: "インドネシア財務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sri_Mulyani%2C_Menteri_Keuangan_%282021%29.jpg/330px-Sri_Mulyani%2C_Menteri_Keuangan_%282021%29.jpg",
  },
  {
    id: 6,
    name: "サラ・ドゥテルテ",
    country: "フィリピン",
    flag: "🇵🇭",
    region: "東南アジア",
    difficulty: 3,
    hint: "フィリピン副大統領・教育長官経験者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Incoming_Education_Sec._Duterte_and_outgoing_Education_Sec._Briones.jpg/330px-Incoming_Education_Sec._Duterte_and_outgoing_Education_Sec._Briones.jpg",
  },
  {
    id: 7,
    name: "セーター・タウィーシン",
    country: "タイ",
    flag: "🇹🇭",
    region: "東南アジア",
    difficulty: 3,
    hint: "タイ第31代首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Srettha_Thavisin_at_Pheu_Thai_Party_headquarters%2CBangkok%2C_7_September_2023.jpg/330px-Srettha_Thavisin_at_Pheu_Thai_Party_headquarters%2CBangkok%2C_7_September_2023.jpg",
  },

  // ========== 南アジア ==========
  {
    id: 8,
    name: "スムリティ・イラーニー",
    country: "インド",
    flag: "🇮🇳",
    region: "南アジア",
    difficulty: 3,
    hint: "インドの女性政治家・元情報放送大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Smt._Smriti_Zubin_Irani_in_July_2022.jpg/330px-Smt._Smriti_Zubin_Irani_in_July_2022.jpg",
  },
  {
    id: 9,
    name: "シャハバーズ・シャリーフ",
    country: "パキスタン",
    flag: "🇵🇰",
    region: "南アジア",
    difficulty: 3,
    hint: "パキスタン首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Shehbaz_Sharif_in_2024.jpg/330px-Shehbaz_Sharif_in_2024.jpg",
  },

  // ========== 中東 ==========
  {
    id: 10,
    name: "メヴリュト・チャヴシュオール",
    country: "トルコ",
    flag: "🇹🇷",
    region: "中東",
    difficulty: 3,
    hint: "トルコ元外務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Turkish_Foreign_Minister_Mevl%C3%BCt_%C3%87avu%C5%9Fo%C4%9Flu_on_February_20%2C_2023_%28cropped%29.jpg/330px-Turkish_Foreign_Minister_Mevl%C3%BCt_%C3%87avu%C5%9Fo%C4%9Flu_on_February_20%2C_2023_%28cropped%29.jpg",
  },
  {
    id: 11,
    name: "マスード・ペゼシュキアン",
    country: "イラン",
    flag: "🇮🇷",
    region: "中東",
    difficulty: 3,
    hint: "イラン大統領・医師出身",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Masoud_Pezeshkian_2025_%28cropped%29.jpg/330px-Masoud_Pezeshkian_2025_%28cropped%29.jpg",
  },
  {
    id: 12,
    name: "ヤイル・ラピード",
    country: "イスラエル",
    flag: "🇮🇱",
    region: "中東",
    difficulty: 3,
    hint: "イスラエル元首相・元テレビキャスター",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Over_The_Ocean_third.jpg/330px-Over_The_Ocean_third.jpg",
  },

  // ========== ヨーロッパ ==========
  {
    id: 13,
    name: "エリザベート・ボルヌ",
    country: "フランス",
    flag: "🇫🇷",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "フランス元首相・技術者出身",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Elisabeth_Borne_November_2022_close-up.jpg/330px-Elisabeth_Borne_November_2022_close-up.jpg",
  },
  {
    id: 14,
    name: "アンナレーナ・ベーアボック",
    country: "ドイツ",
    flag: "🇩🇪",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ドイツ外務大臣・緑の党党首",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/MKr368582_Annalena_Baerbock_%28BDK_2025%29.jpg/330px-MKr368582_Annalena_Baerbock_%28BDK_2025%29.jpg",
  },
  {
    id: 15,
    name: "キア・スターマー",
    country: "イギリス",
    flag: "🇬🇧",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "イギリス首相・元検察総長",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg/330px-Prime_Minister_Keir_Starmer_Portrait_%28cropped%29.jpg",
  },
  {
    id: 16,
    name: "セルジョ・マッタレッラ",
    country: "イタリア",
    flag: "🇮🇹",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "イタリア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Sergio_Mattarella_Presidente_della_Repubblica_Italiana.jpg/330px-Sergio_Mattarella_Presidente_della_Repubblica_Italiana.jpg",
  },
  {
    id: 17,
    name: "アルベルト・ヌニェス・フェイホー",
    country: "スペイン",
    flag: "🇪🇸",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "スペイン国民党党首・元ガリシア州知事",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/ALBERTO_N%C3%9A%C3%91EZ_FEIJ%C3%93O.jpg/330px-ALBERTO_N%C3%9A%C3%91EZ_FEIJ%C3%93O.jpg",
  },
  {
    id: 18,
    name: "マルセロ・レベロ・デ・ソウザ",
    country: "ポルトガル",
    flag: "🇵🇹",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "ポルトガル大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Marcelo_Rebelo_de_Sousa_%28Web_Summit%29.jpg/330px-Marcelo_Rebelo_de_Sousa_%28Web_Summit%29.jpg",
  },
  {
    id: 19,
    name: "ドナルド・トゥスク",
    country: "ポーランド",
    flag: "🇵🇱",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ポーランド首相・元EU理事会議長",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Donald_Tusk_2025_%282%29.jpg/330px-Donald_Tusk_2025_%282%29.jpg",
  },
  {
    id: 20,
    name: "セルゲイ・ラブロフ",
    country: "ロシア",
    flag: "🇷🇺",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ロシア外務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9_%D0%9B%D0%B0%D0%B2%D1%80%D0%BE%D0%B2_%2821-01-2022%29_%28cropped%29_%282%29.jpg/330px-%D0%A1%D0%B5%D1%80%D0%B3%D0%B5%D0%B9_%D0%9B%D0%B0%D0%B2%D1%80%D0%BE%D0%B2_%2821-01-2022%29_%28cropped%29_%282%29.jpg",
  },
  {
    id: 21,
    name: "カタリン・ノヴァク",
    country: "ハンガリー",
    flag: "🇭🇺",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "ハンガリー元大統領（初の女性大統領）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Katalin_Nov%C3%A1k%2C_2023_%28cropped%29.jpg/330px-Katalin_Nov%C3%A1k%2C_2023_%28cropped%29.jpg",
  },
  {
    id: 22,
    name: "ヴィタリ・クリチコ",
    country: "ウクライナ",
    flag: "🇺🇦",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "キーウ市長・元ヘビー級ボクシング世界王者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/EPP_Congress_2025_Valencia_Day_1_%2854483888272%29_%28cropped%29.jpg/330px-EPP_Congress_2025_Valencia_Day_1_%2854483888272%29_%28cropped%29.jpg",
  },

  // ========== アフリカ ==========
  {
    id: 23,
    name: "ライラ・オディンガ",
    country: "ケニア",
    flag: "🇰🇪",
    region: "アフリカ",
    difficulty: 3,
    hint: "ケニアの野党政治家・元首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raila_Amolo_Odinga_2009_%28cropped%29.jpg/330px-Raila_Amolo_Odinga_2009_%28cropped%29.jpg",
  },
  {
    id: 24,
    name: "グーズィ・オコンジョ＝イウェアラ",
    country: "ナイジェリア",
    flag: "🇳🇬",
    region: "アフリカ",
    difficulty: 3,
    hint: "WTO事務局長・元ナイジェリア財務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Ngozi_Okonjo-Iweala_takes_over_as_new_WTO_Director-General%2C_1_March_2021_%2850993534756%29_%28cropped%29.jpg/330px-Ngozi_Okonjo-Iweala_takes_over_as_new_WTO_Director-General%2C_1_March_2021_%2850993534756%29_%28cropped%29.jpg",
  },
  {
    id: 25,
    name: "サーレ・ワーク・ズウデ",
    country: "エチオピア",
    flag: "🇪🇹",
    region: "アフリカ",
    difficulty: 3,
    hint: "エチオピア大統領（初の女性大統領）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/%EC%82%AC%ED%9D%98%EB%A0%88%EC%9B%8C%ED%81%AC_%EC%A5%AC%EB%93%9C_%28Sahle-Work_Zewde%29_20221009.jpg/330px-%EC%82%AC%ED%9D%98%EB%A0%88%EC%9B%8C%ED%81%AC_%EC%A5%AC%EB%93%9C_%28Sahle-Work_Zewde%29_20221009.jpg",
  },

  // ========== 北米 ==========
  {
    id: 26,
    name: "ピート・ブティジェッジ",
    country: "アメリカ",
    flag: "🇺🇸",
    region: "北米",
    difficulty: 2,
    hint: "元アメリカ運輸長官・元南ベンド市長",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Mayor_Pete_at_Roosevelt_High_School_%2848891405907%29.jpg/330px-Mayor_Pete_at_Roosevelt_High_School_%2848891405907%29.jpg",
  },
  {
    id: 27,
    name: "マーク・カーニー",
    country: "カナダ",
    flag: "🇨🇦",
    region: "北米",
    difficulty: 2,
    hint: "カナダ首相・元イングランド銀行総裁",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2025-11-14_InaugurationREM_Deux-Montagnes_Mark_Carney.jpg/330px-2025-11-14_InaugurationREM_Deux-Montagnes_Mark_Carney.jpg",
  },
  {
    id: 28,
    name: "クラウディア・シェインバウム",
    country: "メキシコ",
    flag: "🇲🇽",
    region: "北米",
    difficulty: 2,
    hint: "メキシコ大統領・物理学者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Claudia_Sheinbaum_%2849503316651%29.jpg/330px-Claudia_Sheinbaum_%2849503316651%29.jpg",
  },

  // ========== 南米 ==========
  {
    id: 29,
    name: "ジェラルド・アルクミン",
    country: "ブラジル",
    flag: "🇧🇷",
    region: "南米",
    difficulty: 3,
    hint: "ブラジル副大統領・元サンパウロ州知事",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Alckmin_2024.jpg/330px-Alckmin_2024.jpg",
  },
  {
    id: 30,
    name: "カミラ・バジェホ",
    country: "チリ",
    flag: "🇨🇱",
    region: "南米",
    difficulty: 3,
    hint: "チリ政府広報相・元学生運動指導者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ministra_Camila_Vallejo%2C_se_re%C3%BAne_con_la_presidenta_de_la_c%C3%A1mara_de_diputados%2C_Karol_Cariola_-_53678671904_%28cropped%29.jpg/330px-Ministra_Camila_Vallejo%2C_se_re%C3%BAne_con_la_presidenta_de_la_c%C3%A1mara_de_diputados%2C_Karol_Cariola_-_53678671904_%28cropped%29.jpg",
  },
  {
    id: 31,
    name: "フランシア・マルケス",
    country: "コロンビア",
    flag: "🇨🇴",
    region: "南米",
    difficulty: 3,
    hint: "コロンビア副大統領・環境活動家",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Vicepresidenta_Francia_M%C3%A1rquez_en_su_despacho.jpg/330px-Vicepresidenta_Francia_M%C3%A1rquez_en_su_despacho.jpg",
  },
  {
    id: 32,
    name: "ビクトリア・ビジャルエル",
    country: "アルゼンチン",
    flag: "🇦🇷",
    region: "南米",
    difficulty: 3,
    hint: "アルゼンチン副大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Victoria_Villarruel_Abril_2025_%28cropped%29.jpg/330px-Victoria_Villarruel_Abril_2025_%28cropped%29.jpg",
  },

  // ========== オセアニア ==========
  {
    id: 33,
    name: "ジム・チャーマーズ",
    country: "オーストラリア",
    flag: "🇦🇺",
    region: "オセアニア",
    difficulty: 3,
    hint: "オーストラリア財務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jim_Chalmers_Jobs_and_Skills_Summit_2022_%28cropped%29.jpg/330px-Jim_Chalmers_Jobs_and_Skills_Summit_2022_%28cropped%29.jpg",
  },
  {
    id: 34,
    name: "ニコラ・ウィリス",
    country: "ニュージーランド",
    flag: "🇳🇿",
    region: "オセアニア",
    difficulty: 3,
    hint: "ニュージーランド財務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/WILLIS%2C_Nicola_-_Ohariu_%28cropped%29.png/330px-WILLIS%2C_Nicola_-_Ohariu_%28cropped%29.png",
  },
];

/**
 * 国別の顔・外見の傾向説明
 * ※個人差や民族的多様性は大きいため、あくまでも統計的な傾向として記載
 */
export const countryFacialFeatures = {
  "日本": {
    summary: "東アジア系の細面・一重まぶたが特徴",
    details: "一重または奥二重の目が多く、鼻筋は低めで丸みがある傾向があります。顔の輪郭はやや細長く、肌色は黄みがかった白系が多いです。目・髪・眉毛はほぼ黒色。韓国・中国と似ていますが、顔の彫りが浅めで柔らかい印象の方が多いとされます。",
  },
  "中国": {
    summary: "広めの顔立ちと高い頬骨が傾向",
    details: "顔の横幅がやや広く、頬骨が出ている方が多い傾向があります。一重まぶたや奥二重が多く、鼻は低め。肌は黄みがかった白系〜やや浅黒め。中国国内でも北部・南部・西部で外見の傾向が大きく異なります。",
  },
  "韓国": {
    summary: "細いV字型の輪郭とすっきりした目元が傾向",
    details: "顎先がシャープなV字ラインの顔立ちが多い傾向があります。目は一重から二重まで多様ですが、目頭・目尻がすっきりした印象。鼻は低め。肌色は白系が多く、日本人や中国人と混同されやすいですが、輪郭の細さが特徴とされます。",
  },
  "シンガポール": {
    summary: "中国系・マレー系・インド系が混在する多民族国家",
    details: "人口の約74%が中国系のため、東アジア的な外見（細い目・黄みがかった肌）の方が多数派です。続いてマレー系（13%）、インド系（9%）が共存し、外見の多様性が非常に高い国です。",
  },
  "インドネシア": {
    summary: "東南アジア系の浅黒い肌・広めの鼻が傾向",
    details: "全体的にやや浅黒めの肌色で、鼻は丸く広め、唇は厚めの方が多いです。目は一重が多く黒い虹彩。インドネシアは300以上の民族が存在するため地域差が大きく、ジャワ・バリ・スマトラなどで外見の傾向が異なります。",
  },
  "フィリピン": {
    summary: "スペイン系と東南アジア系の混血が多い小麦色肌",
    details: "小麦色の肌、黒い目・黒い髪が基本的な特徴です。スペイン植民地時代の影響でイベリア系の血が混じり、目が丸めで鼻筋がやや高い方もいます。マレー系・中国系・スペイン系が混合したメスティーソ的な外見が多いです。",
  },
  "タイ": {
    summary: "やや浅黒い肌・丸みのある顔立ちが傾向",
    details: "肌色はやや浅黒め、顔の輪郭は丸みがある方が多いです。目は一重が多く、鼻は低め。インドシナ半島系の顔立ちで、ベトナムやカンボジアと近い外見。中国系の血を引く方も多く（中国系タイ人が約14%）外見が多様です。",
  },
  "インド": {
    summary: "褐色〜濃褐色の肌・大きな目・高い鼻梁が傾向",
    details: "肌色は褐色〜濃褐色と幅広く、目は比較的大きくて濃い色。眉毛は濃く、鼻は高めのことが多いです。北インドではコーカサス系に近い顔立ち、南インドでは皮膚が暗め。目・髪は黒色が基本ですが、緑や茶色の目を持つ方もいます。",
  },
  "パキスタン": {
    summary: "小麦色〜褐色の肌・高い鼻梁・深みのある目が傾向",
    details: "肌色は小麦色から浅黒めまで多様で、鼻筋が高く通っている方が多いです。目・髪は黒色が多いですが、北部（パシュトゥーン系）では茶色や緑の目、薄い肌の方もいます。インド北部やアフガニスタンの人々と外見が似ています。",
  },
  "トルコ": {
    summary: "コーカサス系とアジア系が混合したオリーブ色の肌",
    details: "オリーブ色〜小麦色の肌、黒または茶色の目・髪が多いです。鼻は中程度の高さで、顔の彫りはヨーロッパ系よりやや浅め。中央アジアのトルコ系民族とアナトリア・コーカサスの原住民族が混合しており、非常に多様な外見を持ちます。",
  },
  "イラン": {
    summary: "ペルシャ系の高い鼻梁・アーモンド形の目が傾向",
    details: "鼻筋が高くてはっきりした鼻（鷲鼻）が特徴的。アーモンド形の目で黒または濃い茶色の目が多く、眉毛は濃いです。肌は白系〜オリーブ色。ペルシャ（イラン）人は中東の中では比較的ヨーロッパに近い外見とされ、アラブ系とは区別されることが多いです。",
  },
  "イスラエル": {
    summary: "セム系・アシュケナージ系など多様な外見が混在",
    details: "ユダヤ系（アシュケナージ・セファルディなど）とアラブ系（アラブ・イスラエル人）が共存します。アシュケナージ系はヨーロッパ的な外見（白い肌・茶色の目）、ミズラヒ系は中東的な外見（浅黒い肌・黒い目）と幅広いです。",
  },
  "フランス": {
    summary: "西ヨーロッパ系の白い肌・多様な目と髪の色",
    details: "西ヨーロッパ系として白い肌が基本ですが、髪色は黒・茶・金・赤とバラエティに富みます。目の色も青・緑・茶と多様。フランス南部ではオリーブ色の肌の方も多く、北部では金髪・青眼の方も。移民が多く外見の多様性が高い国です。",
  },
  "ドイツ": {
    summary: "北ヨーロッパ系の白い肌・金髪・青目が比較的多い",
    details: "北西ヨーロッパ系として白い肌・金髪や茶髪・青または灰色の目が多い傾向があります。ただし実際には茶色の目・黒髪の方も多く、南ドイツではより南欧的な外見の方も。イメージほど金髪率は高くなく、茶髪が最多です。",
  },
  "イギリス": {
    summary: "北西ヨーロッパ系の白い肌・茶髪・様々な目の色",
    details: "ケルト系・アングロサクソン系などが混合した北西ヨーロッパ系。茶髪が最多で金髪や黒髪もいます。目は青・緑・茶が混在。肌は白系で赤みがかった頬が特徴的な方も多いです。移民が多く多様な外見を持ちます。",
  },
  "イタリア": {
    summary: "南ヨーロッパ系のオリーブ色の肌・黒髪・茶色の目",
    details: "地中海系として肌はオリーブ色〜白系、黒または濃い茶色の髪・目が多いです。鼻はやや高くて通っている傾向があります。北イタリアでは金髪・青眼の方もいますが、南イタリア・シチリアでは肌が浅黒くアラブ・ギリシャの影響を受けた外見も見られます。",
  },
  "スペイン": {
    summary: "南ヨーロッパ系のオリーブ〜小麦色の肌・黒い目と髪",
    details: "地中海系として肌色はオリーブ〜小麦色、目は黒または濃い茶色が多く、髪も黒〜濃い茶色が主流です。眉毛は濃めで彫りが深い印象。北部（バスク・カタルーニャ）では比較的肌が白め。ラテン系の顔立ちの典型とされます。",
  },
  "ポルトガル": {
    summary: "南ヨーロッパ系のオリーブ色の肌・黒い目と髪",
    details: "スペインと似た南ヨーロッパ・イベリア系の外見で、オリーブ色の肌・濃い茶色〜黒色の目・黒髪が多いです。顔の彫りはやや深め。かつての大航海時代の移民・混血の影響もあり、人によっては黒髪に青目など特徴的な組み合わせも見られます。",
  },
  "ポーランド": {
    summary: "東欧・スラブ系の白い肌・金髪〜茶髪・青目",
    details: "東ヨーロッパのスラブ系として、白い肌・金髪や茶髪・青または灰色の目が多い傾向です。顔の輪郭は丸みがあり、頬骨がやや高めの方もいます。北欧系ほど金髪率は高くなく、茶髪が多数派。スラブ系の特徴的な顔立ちはチェコやウクライナと似ています。",
  },
  "ロシア": {
    summary: "東欧スラブ系の白い肌・様々な目と髪の色",
    details: "スラブ系として白い肌が基本ですが、髪色は金・茶・黒と幅広く、目の色も青・灰・茶・緑と多様です。顔の輪郭は四角め〜丸めで頬骨がやや高い方も多いです。広大な国土のため地域差が大きく、シベリアでは東アジア系の顔立ちの方もいます。",
  },
  "ハンガリー": {
    summary: "中央ヨーロッパ系の白い肌・茶髪・様々な目の色",
    details: "中央ヨーロッパ系として白い肌・茶色〜黒の髪・茶色または青の目が多いです。顔は細長めで彫りは中程度。マジャール人はかつてウラル山脈付近からの移住民族で、スラブ系よりわずかに東洋的な顔立ちの要素が残る方もいるとされます。",
  },
  "ウクライナ": {
    summary: "東欧スラブ系の白い肌・金髪〜茶髪・青または緑の目",
    details: "スラブ系として白い肌、金髪または茶髪が多く、青・緑・灰色の目が比較的多いです。顔はやや面長で彫りは中程度。ロシア人と似ていますが、ウクライナ人は顔がやや細面で金髪率がやや高いとされます。",
  },
  "ケニア": {
    summary: "東アフリカ系の暗褐色の肌・細い鼻筋・黒い目",
    details: "サブサハラ・アフリカ系として暗褐色〜黒に近い肌色。西アフリカと比べると鼻筋がやや細く通っている傾向があります。顔の輪郭は細長め、唇はやや厚め。バントゥー系・ナイル系など多様な民族が共存しており、外見も多彩です。",
  },
  "ナイジェリア": {
    summary: "西アフリカ系の暗褐色の肌・広めの鼻・黒い目",
    details: "西アフリカ系として暗褐色の肌、広めで丸みのある鼻、厚めの唇が特徴的です。目は黒。顔の輪郭は四角〜丸め。ヨルバ・イボ・ハウサなど250以上の民族が共存しており外見は多様ですが、典型的な西アフリカ的顔立ちが多数派です。",
  },
  "エチオピア": {
    summary: "東アフリカ系の褐色の肌・比較的細い鼻筋・アーモンド形の目",
    details: "東アフリカ系として褐色〜暗褐色の肌。西アフリカと比べると鼻筋が細く高め、唇もやや薄めの傾向があります。アーモンド形の目が多く、彫りが深い印象。セム系（エチオピア語族）の影響が外見に残るとされ、アフリカの中でも独特の顔立ちです。",
  },
  "アメリカ": {
    summary: "ヨーロッパ系白人が多数だが非常に多様な多民族国家",
    details: "人口の約59%が非ヒスパニック系白人で、ヨーロッパ系の多様な外見が多数派です。続いてヒスパニック系（19%）・黒人（13%）・アジア系（6%）が共存します。「アメリカ人らしい顔」というものは存在せず、世界で最も外見の多様な国のひとつです。",
  },
  "カナダ": {
    summary: "イギリス・フランス系白人が多数だが多民族国家",
    details: "イギリス系・フランス系を中心とした白人が多数派で、白い肌・茶色〜金色の髪・青または茶の目が多いです。ただしアジア系（特に東アジア・南アジア系）も多く、バンクーバーやトロントでは人口の多くを占めます。",
  },
  "メキシコ": {
    summary: "スペイン系と先住民系の混血（メスティーソ）が多数派",
    details: "人口の約62%がメスティーソ（スペイン系と先住民の混血）で、小麦色〜浅黒めの肌・黒髪・茶色〜黒の目が典型的です。鼻は中程度、顔の輪郭は丸め。スペイン系の影響と先住民（アステカ・マヤなど）の特徴が混合したラテン系の顔立ちです。",
  },
  "ブラジル": {
    summary: "ポルトガル系・アフリカ系・先住民系の混血で非常に多様",
    details: "世界有数の人種的多様性を持ち、ポルトガル系白人・アフリカ系・先住民系・日系・中東系など様々な血が混合しています。典型的なイメージは褐色〜小麦色の肌ですが、実際には非常に多様。ただし白人的な顔立ちの方もアフリカ系的な顔立ちの方も多く共存します。",
  },
  "チリ": {
    summary: "スペイン系白人とマプチェ系先住民の混血が多数",
    details: "南米の中では比較的白人率が高く（白人・メスティーソ合計で約88%）、スペイン系の面影を持つ白い肌・茶色の髪・茶色の目の方が多数派です。チリ南部にはドイツ・クロアチア系移民の子孫も多く、金髪・青眼の方もいます。",
  },
  "コロンビア": {
    summary: "混血（メスティーソ）・白人・アフロコロンビア系が混在",
    details: "人口の約49%がメスティーソ、26%が白人、21%がアフロコロンビア系。地域により外見が大きく異なり、カリブ海沿岸では黒人系・混血が多く、アンデス高地では先住民・白人系が多い傾向があります。多様なラテンアメリカ的外見です。",
  },
  "アルゼンチン": {
    summary: "ヨーロッパ系（スペイン・イタリア）白人が多数派",
    details: "南米の中でもヨーロッパ系白人率が高く（約97%がヨーロッパ系または白人）、スペイン系とイタリア系の血が主流です。白い肌・茶色〜黒い髪・茶色の目が典型的。ヨーロッパ的な顔立ちのためブラジルやメキシコとは異なる印象です。",
  },
  "オーストラリア": {
    summary: "イギリス系白人が多数だが多様な移民国家",
    details: "人口の約67%がヨーロッパ系（主にイギリス・アイルランド系）で、白い肌・金髪〜茶髪・青または茶の目が多数派です。アジア系（中国・インド・ベトナムなど）も約19%を占め、特に都市部では多様。先住民アボリジナルは暗褐色の肌・広い鼻が特徴です。",
  },
  "ニュージーランド": {
    summary: "イギリス系白人とマオリ系が共存する多民族国家",
    details: "人口の約70%がヨーロッパ系（主にイギリス・アイルランド系）で白人が多数派。続いてマオリ系（17%）が銅色の肌・広い顔立ち・黒い目と髪を持ちます。アジア系移民も増加中で、外見の多様性が高まっています。",
  },
};

/** 国名 → フラグの対応マップ */
export const countryFlagMap = Object.fromEntries(
  persons.map((p) => [p.country, p.flag])
);

/** 全国名のリスト（選択肢生成用） */
export const allCountries = [...new Set(persons.map((p) => p.country))];

/** 地域のリスト */
export const allRegions = [...new Set(persons.map((p) => p.region))];

/**
 * ランダムに n 人を選んでクイズ用配列を作成する
 * 各問に対し、正解の国 + ランダムな3か国を選択肢として提示
 * 同じ地域の国を優先的に混ぜて難易度を上げる
 */
export function buildQuizSet(count = 10) {
  const shuffled = [...persons].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, persons.length));

  return selected.map((person) => {
    const sameRegionCountries = allCountries.filter(
      (c) =>
        c !== person.country &&
        persons.find((p) => p.country === c && p.region === person.region)
    );
    const otherCountries = allCountries.filter(
      (c) => c !== person.country && !sameRegionCountries.includes(c)
    );

    const wrongPool = [
      ...sameRegionCountries.sort(() => Math.random() - 0.5).slice(0, 2),
      ...otherCountries.sort(() => Math.random() - 0.5),
    ];

    const wrongCountries = wrongPool.slice(0, 3);
    const options = [person.country, ...wrongCountries].sort(
      () => Math.random() - 0.5
    );

    return {
      person,
      options,
      correctAnswer: person.country,
    };
  });
}
