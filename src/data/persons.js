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
    name: "タルマン・シャンムガラトナム",
    country: "シンガポール",
    flag: "🇸🇬",
    region: "東南アジア",
    difficulty: 3,
    hint: "シンガポール大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/President_Tharman_Shanmugaratnam.jpg/330px-President_Tharman_Shanmugaratnam.jpg",
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
    name: "ジャグミート・シン",
    country: "カナダ",
    flag: "🇨🇦",
    region: "北米",
    difficulty: 2,
    hint: "カナダ新民主党党首",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Jagmeet_Singh_in_Brantford_2022_2_%28cropped2%29.jpg/330px-Jagmeet_Singh_in_Brantford_2022_2_%28cropped2%29.jpg",
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
    name: "フェルナンド・ハダジ",
    country: "ブラジル",
    flag: "🇧🇷",
    region: "南米",
    difficulty: 3,
    hint: "ブラジル財務大臣・元サンパウロ市長",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Fernando_Haddad_posse_min._da_Fazenda.jpg/330px-Fernando_Haddad_posse_min._da_Fazenda.jpg",
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
    name: "ペニー・ウォン",
    country: "オーストラリア",
    flag: "🇦🇺",
    region: "オセアニア",
    difficulty: 3,
    hint: "オーストラリア外務大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Penny_Wong_DFAT_official_%28cropped%29.jpg/330px-Penny_Wong_DFAT_official_%28cropped%29.jpg",
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
