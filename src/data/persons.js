/**
 * 人物データセット
 * 各国の純血の著名人（ハーフ・クオーターを含まない方を優先）
 * 写真: Wikimedia Commons (CC BY-SA / パブリックドメイン)
 * 
 * difficulty: 1=簡単, 2=普通, 3=難しい
 */

export const persons = [
  // ========== 東アジア ==========
  {
    id: 1,
    name: "習近平",
    country: "中国",
    flag: "🇨🇳",
    region: "東アジア",
    difficulty: 1,
    hint: "現在の中国最高指導者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Xi_Jinping_in_July_2019.jpg/440px-Xi_Jinping_in_July_2019.jpg",
    license: "CC BY 4.0",
  },
  {
    id: 2,
    name: "尹錫悦",
    country: "韓国",
    flag: "🇰🇷",
    region: "東アジア",
    difficulty: 2,
    hint: "韓国の大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Yoon_Suk-yeol_Presidential_Portrait.jpg/440px-Yoon_Suk-yeol_Presidential_Portrait.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 3,
    name: "岸田文雄",
    country: "日本",
    flag: "🇯🇵",
    region: "東アジア",
    difficulty: 2,
    hint: "元日本の内閣総理大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fumio_Kishida_Official_%28cropped%29.jpg/440px-Fumio_Kishida_Official_%28cropped%29.jpg",
    license: "CC BY 4.0",
  },
  {
    id: 4,
    name: "李家超",
    country: "香港",
    flag: "🇭🇰",
    region: "東アジア",
    difficulty: 3,
    hint: "香港行政長官",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Chief_Executive_John_Lee_Ka-chiu.jpg/440px-Chief_Executive_John_Lee_Ka-chiu.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 5,
    name: "孫燕姿",
    country: "シンガポール",
    flag: "🇸🇬",
    region: "東南アジア",
    difficulty: 2,
    hint: "中国系シンガポール人歌手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Stefanie_Sun_at_the_2010_MTV_EMA.jpg/440px-Stefanie_Sun_at_the_2010_MTV_EMA.jpg",
    license: "CC BY-SA 2.0",
  },

  // ========== 東南アジア ==========
  {
    id: 6,
    name: "ジョコ・ウィドド",
    country: "インドネシア",
    flag: "🇮🇩",
    region: "東南アジア",
    difficulty: 2,
    hint: "元インドネシア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/President_Joko_Widodo_2019_official_portrait.jpg/440px-President_Joko_Widodo_2019_official_portrait.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 7,
    name: "フェルディナンド・マルコス・ジュニア",
    country: "フィリピン",
    flag: "🇵🇭",
    region: "東南アジア",
    difficulty: 2,
    hint: "フィリピン大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ferdinand_Marcos_Jr._official_portrait_2022%2C_resized.png/440px-Ferdinand_Marcos_Jr._official_portrait_2022%2C_resized.png",
    license: "CC BY-SA 4.0",
  },
  {
    id: 8,
    name: "プラユット・チャンオーチャー",
    country: "タイ",
    flag: "🇹🇭",
    region: "東南アジア",
    difficulty: 3,
    hint: "元タイ首相・軍人",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Prayuth_Chan-ocha_%28cropped%29.jpg/440px-Prayuth_Chan-ocha_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },

  // ========== 南アジア ==========
  {
    id: 9,
    name: "ナレンドラ・モディ",
    country: "インド",
    flag: "🇮🇳",
    region: "南アジア",
    difficulty: 1,
    hint: "インド首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Official_portrait_of_Narendra_Modi.jpg/440px-Official_portrait_of_Narendra_Modi.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 10,
    name: "シャヒード・アフリディ",
    country: "パキスタン",
    flag: "🇵🇰",
    region: "南アジア",
    difficulty: 2,
    hint: "パキスタンの有名なクリケット選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Shahid_Afridi_in_2015.jpg/440px-Shahid_Afridi_in_2015.jpg",
    license: "CC BY-SA 4.0",
  },

  // ========== 中東 ==========
  {
    id: 11,
    name: "レジェップ・タイイップ・エルドアン",
    country: "トルコ",
    flag: "🇹🇷",
    region: "中東",
    difficulty: 1,
    hint: "トルコ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Recep_Tayyip_Erdogan_at_the_United_Nations_%282023%29_%28cropped%29.jpg/440px-Recep_Tayyip_Erdogan_at_the_United_Nations_%282023%29_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 12,
    name: "ムハンマド・ビン・サルマーン",
    country: "サウジアラビア",
    flag: "🇸🇦",
    region: "中東",
    difficulty: 2,
    hint: "サウジアラビア王太子",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mohammad_bin_Salman_Al_Saud_-_2017_%28cropped%29.jpg/440px-Mohammad_bin_Salman_Al_Saud_-_2017_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 13,
    name: "ベンヤミン・ネタニヤフ",
    country: "イスラエル",
    flag: "🇮🇱",
    region: "中東",
    difficulty: 1,
    hint: "イスラエル首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/PM_Netanyahu_photo_op_%28cropped%29.jpg/440px-PM_Netanyahu_photo_op_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 14,
    name: "ハサン・ロウハーニー",
    country: "イラン",
    flag: "🇮🇷",
    region: "中東",
    difficulty: 2,
    hint: "元イラン大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hassan_Rouhani_official_portrait_2017_%28cropped%29.jpg/440px-Hassan_Rouhani_official_portrait_2017_%28cropped%29.jpg",
    license: "CC BY 4.0",
  },

  // ========== ヨーロッパ ==========
  {
    id: 15,
    name: "エマニュエル・マクロン",
    country: "フランス",
    flag: "🇫🇷",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "フランス大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Emmanuel_Macron_in_2019.jpg/440px-Emmanuel_Macron_in_2019.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 16,
    name: "オラフ・ショルツ",
    country: "ドイツ",
    flag: "🇩🇪",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ドイツ首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Olaf_Scholz_%28cropped%2C_2021%29.jpg/440px-Olaf_Scholz_%28cropped%2C_2021%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 17,
    name: "リシ・スナク",
    country: "イギリス",
    flag: "🇬🇧",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "元イギリス首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Rishi_Sunak_official_portrait_%28cropped%29.jpg/440px-Rishi_Sunak_official_portrait_%28cropped%29.jpg",
    license: "CC BY 3.0",
  },
  {
    id: 18,
    name: "ジョルジャ・メローニ",
    country: "イタリア",
    flag: "🇮🇹",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "イタリア首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Giorgia_Meloni_2023_%28cropped%29.jpg/440px-Giorgia_Meloni_2023_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 19,
    name: "ペドロ・サンチェス",
    country: "スペイン",
    flag: "🇪🇸",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "スペイン首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Pedro_S%C3%A1nchez_-_Pedro_S%C3%A1nchez_%28cropped%29_%28cropped%29.jpg/440px-Pedro_S%C3%A1nchez_-_Pedro_S%C3%A1nchez_%28cropped%29_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 20,
    name: "クリスティアーノ・ロナウド",
    country: "ポルトガル",
    flag: "🇵🇹",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "世界的サッカー選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/440px-Cristiano_Ronaldo_2018.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 21,
    name: "ロベルト・レバンドフスキ",
    country: "ポーランド",
    flag: "🇵🇱",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ポーランド代表のサッカー選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Robert_Lewandowski_2022.jpg/440px-Robert_Lewandowski_2022.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 22,
    name: "ウラジーミル・プーチン",
    country: "ロシア",
    flag: "🇷🇺",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "ロシア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Vladimir_Putin_%282020-02-20%29.jpg/440px-Vladimir_Putin_%282020-02-20%29.jpg",
    license: "CC BY 4.0",
  },
  {
    id: 23,
    name: "ヴィクトル・オルバーン",
    country: "ハンガリー",
    flag: "🇭🇺",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "ハンガリー首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Orb%C3%A1n_Viktor_2019.jpg/440px-Orb%C3%A1n_Viktor_2019.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 24,
    name: "アンジェリカ・アグルバシュ",
    country: "アルバニア",
    flag: "🇦🇱",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "アルバニアの政治家",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Erion_Veliaj_2019_%28cropped%29.jpg/440px-Erion_Veliaj_2019_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 25,
    name: "ヨハン・クライフ",
    country: "オランダ",
    flag: "🇳🇱",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "オランダの伝説的サッカー選手（故人）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Johan_Cruyff_%281974%29_cropped.jpg/440px-Johan_Cruyff_%281974%29_cropped.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 26,
    name: "ヘイルショルシュル・ハルドウルソン",
    country: "アイスランド",
    flag: "🇮🇸",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "アイスランドのサッカー選手・ゴールキーパー",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Hannes_Halldorsson_2018_World_Cup.jpg/440px-Hannes_Halldorsson_2018_World_Cup.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 27,
    name: "セルゲイ・ブブカ",
    country: "ウクライナ",
    flag: "🇺🇦",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ウクライナの棒高跳び世界記録保持者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bubka_2013.jpg/440px-Bubka_2013.jpg",
    license: "CC BY-SA 3.0",
  },

  // ========== アフリカ ==========
  {
    id: 28,
    name: "シリル・ラマポーザ",
    country: "南アフリカ",
    flag: "🇿🇦",
    region: "アフリカ",
    difficulty: 2,
    hint: "南アフリカ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Cyril_Ramaphosa_-_2018_%28cropped%29.jpg/440px-Cyril_Ramaphosa_-_2018_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 29,
    name: "ウィリアム・ルト",
    country: "ケニア",
    flag: "🇰🇪",
    region: "アフリカ",
    difficulty: 2,
    hint: "ケニア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/William_Ruto_2022_%28cropped%29.jpg/440px-William_Ruto_2022_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 30,
    name: "ボラ・ティヌブ",
    country: "ナイジェリア",
    flag: "🇳🇬",
    region: "アフリカ",
    difficulty: 3,
    hint: "ナイジェリア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bola_Tinubu_at_the_Presidential_Villa_%28cropped%29.jpg/440px-Bola_Tinubu_at_the_Presidential_Villa_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 31,
    name: "アブデルファッター・エルシシ",
    country: "エジプト",
    flag: "🇪🇬",
    region: "アフリカ",
    difficulty: 2,
    hint: "エジプト大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Abdel_Fattah_el-Sisi_in_2021_%28cropped%29.jpg/440px-Abdel_Fattah_el-Sisi_in_2021_%28cropped%29.jpg",
    license: "CC BY 4.0",
  },
  {
    id: 32,
    name: "エリアス・フンサル",
    country: "エチオピア",
    flag: "🇪🇹",
    region: "アフリカ",
    difficulty: 3,
    hint: "エチオピアの陸上選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Haile_Gebrselassie_2012.jpg/440px-Haile_Gebrselassie_2012.jpg",
    license: "CC BY-SA 3.0",
  },

  // ========== 北米 ==========
  {
    id: 33,
    name: "ジョー・バイデン",
    country: "アメリカ",
    flag: "🇺🇸",
    region: "北米",
    difficulty: 1,
    hint: "前アメリカ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/440px-Joe_Biden_presidential_portrait.jpg",
    license: "CC BY 4.0",
  },
  {
    id: 34,
    name: "ジャスティン・トルドー",
    country: "カナダ",
    flag: "🇨🇦",
    region: "北米",
    difficulty: 1,
    hint: "元カナダ首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Justin_Trudeau_-_2022_%28cropped%29.jpg/440px-Justin_Trudeau_-_2022_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 35,
    name: "アンドレス・マヌエル・ロペスオブラドール",
    country: "メキシコ",
    flag: "🇲🇽",
    region: "北米",
    difficulty: 2,
    hint: "元メキシコ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/AMLO_Gobierno_de_M%C3%A9xico_2018_%28cropped%29.jpg/440px-AMLO_Gobierno_de_M%C3%A9xico_2018_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },

  // ========== 南米 ==========
  {
    id: 36,
    name: "ルイス・イナシオ・ルーラ・ダ・シルバ",
    country: "ブラジル",
    flag: "🇧🇷",
    region: "南米",
    difficulty: 2,
    hint: "ブラジル大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Lula_-_foto_oficial_2023_%28cropped%29.jpg/440px-Lula_-_foto_oficial_2023_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 37,
    name: "ガブリエル・ボリッチ",
    country: "チリ",
    flag: "🇨🇱",
    region: "南米",
    difficulty: 3,
    hint: "チリ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Gabriel_Boric_Font_portrait_%28cropped%29.jpg/440px-Gabriel_Boric_Font_portrait_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 38,
    name: "グスタボ・ペトロ",
    country: "コロンビア",
    flag: "🇨🇴",
    region: "南米",
    difficulty: 3,
    hint: "コロンビア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Gustavo_Petro_en_posesi%C3%B3n_presidencial_%28cropped%29.jpg/440px-Gustavo_Petro_en_posesi%C3%B3n_presidencial_%28cropped%29.jpg",
    license: "CC BY 4.0",
  },
  {
    id: 39,
    name: "ハビエル・ミレイ",
    country: "アルゼンチン",
    flag: "🇦🇷",
    region: "南米",
    difficulty: 2,
    hint: "アルゼンチン大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Javier_Milei_2023_%28cropped%29.jpg/440px-Javier_Milei_2023_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },

  // ========== オセアニア ==========
  {
    id: 40,
    name: "アンソニー・アルバニージー",
    country: "オーストラリア",
    flag: "🇦🇺",
    region: "オセアニア",
    difficulty: 2,
    hint: "オーストラリア首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Anthony_Albanese_official_portrait_%28cropped%29.jpg/440px-Anthony_Albanese_official_portrait_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
  },
  {
    id: 41,
    name: "クリストファー・ラクソン",
    country: "ニュージーランド",
    flag: "🇳🇿",
    region: "オセアニア",
    difficulty: 3,
    hint: "ニュージーランド首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Christopher_Luxon_official_portrait_2023_%28cropped%29.jpg/440px-Christopher_Luxon_official_portrait_2023_%28cropped%29.jpg",
    license: "CC BY-SA 4.0",
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
    // 同じ地域の国を優先して選択肢に混ぜる（難易度UP）
    const sameRegionCountries = allCountries.filter(
      (c) => c !== person.country && persons.find((p) => p.country === c && p.region === person.region)
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
