// =============================================================
//  FOLLTECH NEWS REGISTRY
//  新しい記事を追加したらここに1エントリ追加するだけで
//  トップページの最新情報カードと各記事の関連記事が自動更新されます。
//
//  フィールド:
//    file    … news/ 以下のファイル名 (例: "260503.html")
//    tag     … カテゴリタグ
//    date    … 表示用の日付
//    title   … 記事タイトル
//    excerpt … トップページ用の概要文 (1〜2文)
// =============================================================
const FOLLTECH_NEWS = {
  ja: [
    {
      file:    "260301.html",
      tag:     "資金調達、受賞",
      date:    "2026年3月",
      title:   "関西起業支援プログラム 起動4期に採択されました",
      excerpt: "Follicea Technologiesは、iCeMSが推進する iCeMS Venture Studio の取り組みの一環として立ち上げが進められており、先進的研究成果の社会実装を目指したスタートアップ創出の好例として期待されています。"
    },
    {
      file:    "250820.html",
      tag:     "採択",
      date:    "2025年8月",
      title:   "Nakanoshima Qross「創薬クラスターキャンパス事業」第一期として採択",
      excerpt: "Nakanoshima Qrossが推進する創薬クラスターキャンパス事業の第一期採択企業として選定されました。"
    }
  ],
  en: [
    {
      file:    "260301.html",
      tag:     "Funding",
      date:    "March 2026",
      title:   "Selected for the Kansai Startup Incubation Program 'Kidou', 4th Cohort",
      excerpt: "Follicea Technologies was selected from over 100 applicants as one of five startups in the 4th cohort of the Kansai incubation program 'Kidou,' receiving up to 10 million yen in funding and 6 months of expert support."
    },
    {
      file:    "250820.html",
      tag:     "Award",
      date:    "August 2025",
      title:   "Selected for Nakanoshima Qross Drug Discovery Cluster Campus Program, 1st Cohort",
      excerpt: "Follicea Technologies has been selected as a first-cohort startup for the Nakanoshima Qross Drug Discovery and Commercialization Promotion Support Program, a Ministry of Health-certified initiative."
    }
  ]
};
