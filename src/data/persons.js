/**
 * 人物データセット
 * 各国の純血の著名人（ハーフ・クオーターを含まない方を優先）
 * 写真: Wikimedia Commons (CC BY-SA / パブリックドメイン)
 * imageUrl: Wikipedia REST API (2026年3月) で取得した最新URL
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
    hint: "現在の中国最高指導者・国家主席",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Xi_Jinping_meets_Keir_Starmer_Jan_2026_%28cropped%29.jpg/330px-Xi_Jinping_meets_Keir_Starmer_Jan_2026_%28cropped%29.jpg",
  },
  {
    id: 2,
    name: "尹錫悦",
    country: "韓国",
    flag: "🇰🇷",
    region: "東アジア",
    difficulty: 2,
    hint: "韓国第20代大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/South_Korea_President_Yoon_Suk_Yeol_portrait.jpg/330px-South_Korea_President_Yoon_Suk_Yeol_portrait.jpg",
  },
  {
    id: 3,
    name: "岸田文雄",
    country: "日本",
    flag: "🇯🇵",
    region: "東アジア",
    difficulty: 2,
    hint: "日本の第101代内閣総理大臣",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Fumio_Kishida_20211005_%28cropped%29.jpg/330px-Fumio_Kishida_20211005_%28cropped%29.jpg",
  },
  {
    id: 4,
    name: "孫燕姿",
    country: "シンガポール",
    flag: "🇸🇬",
    region: "東南アジア",
    difficulty: 2,
    hint: "中国系シンガポール人の人気歌手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E5%AD%99%E7%87%95%E5%A7%BF_echo%E5%9B%9E%E5%A3%B0%E5%98%89%E5%B9%B4%E5%8D%8E_%283%29.jpg/330px-%E5%AD%99%E7%87%95%E5%A7%BF_echo%E5%9B%9E%E5%A3%B0%E5%98%89%E5%B9%B4%E5%8D%8E_%283%29.jpg",
  },

  // ========== 東南アジア ==========
  {
    id: 5,
    name: "ジョコ・ウィドド",
    country: "インドネシア",
    flag: "🇮🇩",
    region: "東南アジア",
    difficulty: 2,
    hint: "元インドネシア大統領（通称ジョコウィ）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Joko_Widodo_2019_official_portrait.jpg/330px-Joko_Widodo_2019_official_portrait.jpg",
  },
  {
    id: 6,
    name: "フェルディナンド・マルコス・ジュニア",
    country: "フィリピン",
    flag: "🇵🇭",
    region: "東南アジア",
    difficulty: 2,
    hint: "フィリピン第17代大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Portrait_of_President_Ferdinand_R._Marcos%2C_Jr_%28cropped%29_%282%29.jpg/330px-Portrait_of_President_Ferdinand_R._Marcos%2C_Jr_%28cropped%29_%282%29.jpg",
  },
  {
    id: 7,
    name: "プラユット・チャンオーチャー",
    country: "タイ",
    flag: "🇹🇭",
    region: "東南アジア",
    difficulty: 3,
    hint: "元タイ首相・陸軍大将",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Prayut_2022.jpg/330px-Prayut_2022.jpg",
  },

  // ========== 南アジア ==========
  {
    id: 8,
    name: "ナレンドラ・モディ",
    country: "インド",
    flag: "🇮🇳",
    region: "南アジア",
    difficulty: 1,
    hint: "インド第14代首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg/330px-The_official_portrait_of_Shri_Narendra_Modi%2C_the_Prime_Minister_of_the_Republic_of_India.jpg",
  },
  {
    id: 9,
    name: "シャヒード・アフリディ",
    country: "パキスタン",
    flag: "🇵🇰",
    region: "南アジア",
    difficulty: 2,
    hint: "パキスタンの伝説的クリケット選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Shahid_Afridi_in_2017_%283x4_cropped%29.jpg/330px-Shahid_Afridi_in_2017_%283x4_cropped%29.jpg",
  },

  // ========== 中東 ==========
  {
    id: 10,
    name: "レジェップ・タイイップ・エルドアン",
    country: "トルコ",
    flag: "🇹🇷",
    region: "中東",
    difficulty: 1,
    hint: "トルコ大統領・元首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg/330px-Turkish_President_Recep_Tayyip_Erdo%C4%9Fan_in_January_2024_%28cropped%29.jpg",
  },
  {
    id: 11,
    name: "ムハンマド・ビン・サルマーン",
    country: "サウジアラビア",
    flag: "🇸🇦",
    region: "中東",
    difficulty: 2,
    hint: "サウジアラビア王太子・首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_%D9%84%D9%84%D8%A3%D9%85%D9%8A%D8%B1_%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%B3%D9%84%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2_%D8%A2%D9%84_%D8%B3%D8%B9%D9%88%D8%AF_%28%D9%85%D9%82%D8%B5%D9%88%D8%B5%D8%A9%29.jpg/330px-%D8%A7%D9%84%D8%B5%D9%88%D8%B1%D8%A9_%D8%A7%D9%84%D8%B1%D8%B3%D9%85%D9%8A%D8%A9_%D9%84%D9%84%D8%A3%D9%85%D9%8A%D8%B1_%D9%85%D8%AD%D9%85%D8%AF_%D8%A8%D9%86_%D8%B3%D9%84%D9%85%D8%A7%D9%86_%D8%A8%D9%86_%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2_%D8%A2%D9%84_%D8%B3%D8%B9%D9%88%D8%AF_%28%D9%85%D9%82%D8%B5%D9%88%D8%B5%D8%A9%29.jpg",
  },
  {
    id: 12,
    name: "ベンヤミン・ネタニヤフ",
    country: "イスラエル",
    flag: "🇮🇱",
    region: "中東",
    difficulty: 1,
    hint: "イスラエル首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Benjamin_Netanyahu%2C_February_2023.jpg/330px-Benjamin_Netanyahu%2C_February_2023.jpg",
  },
  {
    id: 13,
    name: "ハサン・ロウハーニー",
    country: "イラン",
    flag: "🇮🇷",
    region: "中東",
    difficulty: 2,
    hint: "元イラン大統領・法学者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Hassan_Rouani_2017_portrait.jpg/330px-Hassan_Rouani_2017_portrait.jpg",
  },

  // ========== ヨーロッパ ==========
  {
    id: 14,
    name: "エマニュエル・マクロン",
    country: "フランス",
    flag: "🇫🇷",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "フランス大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Emmanuel_Macron_2025_%28cropped%29.jpg/330px-Emmanuel_Macron_2025_%28cropped%29.jpg",
  },
  {
    id: 15,
    name: "オラフ・ショルツ",
    country: "ドイツ",
    flag: "🇩🇪",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ドイツ第9代首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Olaf_Scholz_September_2024.jpg/330px-Olaf_Scholz_September_2024.jpg",
  },
  {
    id: 16,
    name: "リシ・スナク",
    country: "イギリス",
    flag: "🇬🇧",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "元イギリス首相・インド系",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Portrait_of_Prime_Minister_Rishi_Sunak_%28cropped%29.jpg/330px-Portrait_of_Prime_Minister_Rishi_Sunak_%28cropped%29.jpg",
  },
  {
    id: 17,
    name: "ジョルジャ・メローニ",
    country: "イタリア",
    flag: "🇮🇹",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "イタリア初の女性首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Giorgia_Meloni_Official_2024_%28cropped%29.jpg/330px-Giorgia_Meloni_Official_2024_%28cropped%29.jpg",
  },
  {
    id: 18,
    name: "ペドロ・サンチェス",
    country: "スペイン",
    flag: "🇪🇸",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "スペイン首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Pedro_S%C3%A1nchez_in_2026.jpg/330px-Pedro_S%C3%A1nchez_in_2026.jpg",
  },
  {
    id: 19,
    name: "クリスティアーノ・ロナウド",
    country: "ポルトガル",
    flag: "🇵🇹",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "ポルトガル代表・世界的サッカー選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cristiano_Ronaldo_2275_%28cropped%29.jpg/330px-Cristiano_Ronaldo_2275_%28cropped%29.jpg",
  },
  {
    id: 20,
    name: "ロベルト・レバンドフスキ",
    country: "ポーランド",
    flag: "🇵🇱",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "ポーランド代表のストライカー",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg/330px-2019147183134_2019-05-27_Fussball_1.FC_Kaiserslautern_vs_FC_Bayern_M%C3%BCnchen_-_Sven_-_1D_X_MK_II_-_0228_-_B70I8527_%28cropped%29.jpg",
  },
  {
    id: 21,
    name: "ウラジーミル・プーチン",
    country: "ロシア",
    flag: "🇷🇺",
    region: "ヨーロッパ",
    difficulty: 1,
    hint: "ロシア大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg/330px-%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80_%D0%9F%D1%83%D1%82%D0%B8%D0%BD_%2808-03-2024%29_%28cropped%29_%28higher_res%29.jpg",
  },
  {
    id: 22,
    name: "ヴィクトル・オルバーン",
    country: "ハンガリー",
    flag: "🇭🇺",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "ハンガリー首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Viktor_Orban_2025_%28cropped%29.jpg/330px-Viktor_Orban_2025_%28cropped%29.jpg",
  },
  {
    id: 23,
    name: "ヨハン・クライフ",
    country: "オランダ",
    flag: "🇳🇱",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "オランダの伝説的サッカー選手（故人）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Johan_Cruijff_%281974%29.jpg/330px-Johan_Cruijff_%281974%29.jpg",
  },
  {
    id: 24,
    name: "ヘインリック・ハルドールソン",
    country: "アイスランド",
    flag: "🇮🇸",
    region: "ヨーロッパ",
    difficulty: 3,
    hint: "アイスランド代表GK・元映像監督",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hannes_%C3%9E%C3%B3r_Halld%C3%B3rsson_2018_%28cropped%29.jpg/250px-Hannes_%C3%9E%C3%B3r_Halld%C3%B3rsson_2018_%28cropped%29.jpg",
  },
  {
    id: 25,
    name: "セルゲイ・ブブカ",
    country: "ウクライナ",
    flag: "🇺🇦",
    region: "ヨーロッパ",
    difficulty: 2,
    hint: "棒高跳びの世界記録を35回更新した伝説的選手",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Sergey_Bubka_2013.jpg/330px-Sergey_Bubka_2013.jpg",
  },

  // ========== アフリカ ==========
  {
    id: 26,
    name: "シリル・ラマポーザ",
    country: "南アフリカ",
    flag: "🇿🇦",
    region: "アフリカ",
    difficulty: 2,
    hint: "南アフリカ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/21.11.2025_%E2%80%93_Presidente_da_Rep%C3%BAblica_da_%C3%81frica_do_Sul%2C_Cyril_Ramaphosa_%2854938010569%29_%28cropped%29.jpg/330px-21.11.2025_%E2%80%93_Presidente_da_Rep%C3%BAblica_da_%C3%81frica_do_Sul%2C_Cyril_Ramaphosa_%2854938010569%29_%28cropped%29.jpg",
  },
  {
    id: 27,
    name: "ウィリアム・ルト",
    country: "ケニア",
    flag: "🇰🇪",
    region: "アフリカ",
    difficulty: 2,
    hint: "ケニア第5代大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/President_Ruto_Potrait_2022_%28cropped%29.jpg/330px-President_Ruto_Potrait_2022_%28cropped%29.jpg",
  },
  {
    id: 28,
    name: "ボラ・ティヌブ",
    country: "ナイジェリア",
    flag: "🇳🇬",
    region: "アフリカ",
    difficulty: 3,
    hint: "ナイジェリア第16代大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Bola_Tinubu_portrait.jpg/330px-Bola_Tinubu_portrait.jpg",
  },
  {
    id: 29,
    name: "アブデルファッター・エルシシ",
    country: "エジプト",
    flag: "🇪🇬",
    region: "アフリカ",
    difficulty: 2,
    hint: "エジプト大統領・元国防相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/AbdelFattah_Elsisi_%28cropped%29.jpg/330px-AbdelFattah_Elsisi_%28cropped%29.jpg",
  },
  {
    id: 30,
    name: "ハイレ・ゲブレセラシエ",
    country: "エチオピア",
    flag: "🇪🇹",
    region: "アフリカ",
    difficulty: 2,
    hint: "マラソン・長距離走の世界記録保持者",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Olympic_great_Haile_Gebrselassie_speaking_at_the_Olympic_hunger_summit_in_Downing_Street%2C_12_August_2012_%28cropped%29.jpg/330px-Olympic_great_Haile_Gebrselassie_speaking_at_the_Olympic_hunger_summit_in_Downing_Street%2C_12_August_2012_%28cropped%29.jpg",
  },

  // ========== 北米 ==========
  {
    id: 31,
    name: "ジョー・バイデン",
    country: "アメリカ",
    flag: "🇺🇸",
    region: "北米",
    difficulty: 1,
    hint: "第46代アメリカ大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Joe_Biden_presidential_portrait.jpg/330px-Joe_Biden_presidential_portrait.jpg",
  },
  {
    id: 32,
    name: "ジャスティン・トルドー",
    country: "カナダ",
    flag: "🇨🇦",
    region: "北米",
    difficulty: 1,
    hint: "元カナダ首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Prime_Minister_Trudeau%27s_message_on_Christmas_2023_%280m29s%29_%28cropped%29.jpg/330px-Prime_Minister_Trudeau%27s_message_on_Christmas_2023_%280m29s%29_%28cropped%29.jpg",
  },
  {
    id: 33,
    name: "アンドレス・マヌエル・ロペスオブラドール",
    country: "メキシコ",
    flag: "🇲🇽",
    region: "北米",
    difficulty: 2,
    hint: "元メキシコ大統領（通称AMLO）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Andr%C3%A9s_Manuel_L%C3%B3pez_Obrador_2022.jpg/330px-Andr%C3%A9s_Manuel_L%C3%B3pez_Obrador_2022.jpg",
  },

  // ========== 南米 ==========
  {
    id: 34,
    name: "ルイス・イナシオ・ルーラ・ダ・シルバ",
    country: "ブラジル",
    flag: "🇧🇷",
    region: "南米",
    difficulty: 2,
    hint: "ブラジル大統領（通称ルーラ）",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29_denoise_%28cropped%29.jpg/330px-Foto_oficial_de_Luiz_In%C3%A1cio_Lula_da_Silva_%28ombros%29_denoise_%28cropped%29.jpg",
  },
  {
    id: 35,
    name: "ガブリエル・ボリッチ",
    country: "チリ",
    flag: "🇨🇱",
    region: "南米",
    difficulty: 3,
    hint: "チリの若き大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Retrato_Oficial_Presidente_Boric_Font.jpg/330px-Retrato_Oficial_Presidente_Boric_Font.jpg",
  },
  {
    id: 36,
    name: "グスタボ・ペトロ",
    country: "コロンビア",
    flag: "🇨🇴",
    region: "南米",
    difficulty: 3,
    hint: "コロンビア初の左翼大統領",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Foto_Oficial_Presidente_Gustavo_Petro_%2852274966005%29.jpg/330px-Foto_Oficial_Presidente_Gustavo_Petro_%2852274966005%29.jpg",
  },
  {
    id: 37,
    name: "ハビエル・ミレイ",
    country: "アルゼンチン",
    flag: "🇦🇷",
    region: "南米",
    difficulty: 2,
    hint: "アルゼンチン大統領・リバタリアン",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Retrato_oficial_Presidente_Milei.png/330px-Retrato_oficial_Presidente_Milei.png",
  },

  // ========== オセアニア ==========
  {
    id: 38,
    name: "アンソニー・アルバニージー",
    country: "オーストラリア",
    flag: "🇦🇺",
    region: "オセアニア",
    difficulty: 2,
    hint: "オーストラリア首相",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Anthony_Albanese_portrait_%28re-crop%29.jpg/330px-Anthony_Albanese_portrait_%28re-crop%29.jpg",
  },
  {
    id: 39,
    name: "クリストファー・ラクソン",
    country: "ニュージーランド",
    flag: "🇳🇿",
    region: "オセアニア",
    difficulty: 3,
    hint: "ニュージーランド首相・元Air NZ CEO",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/LUXON%2C_Christopher_-_Botany_%28cropped%29.png/330px-LUXON%2C_Christopher_-_Botany_%28cropped%29.png",
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
