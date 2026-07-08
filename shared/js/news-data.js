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
      file:    "260619.html",
      tag:     "資金調達、受賞",
      date:    "2026年6月",
      title:   "関西みらいベンチャーアワード「みらいWay」で優良賞を受賞",
      excerpt: "Follicea Technologiesは、第3回「関西みらいベンチャーアワード『みらいWay』」において、100社以上の応募企業の中からファイナリスト10社に選出され、優良賞を受賞しました。"
    },
    {
      file:    "260501.html",
      tag:     "Announcement",
      date:    "2026年7月",
      title:   "Follicea Technologies、大阪にて創業",
      excerpt: "株式会社Follicea Technologiesの創業をご報告いたします。当社は、不妊に対する革新的な薬物療法の開発に特化した、関西を拠点とするバイオテックスタートアップです。"
    },
    {
      file:    "260301.html",
      tag:     "資金調達、受賞",
      date:    "2026年3月",
      title:   "関西起業支援プログラム 起動4期に採択されました",
      excerpt: "Follicea Technologiesは、先進的研究成果の社会実装を目指したスタートアップ創出の好例として期待されています。"
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
      file:    "260619.html",
      tag:     "Award",
      date:    "June 2026",
      title:   "Follicea Technologies Receives Merit Award at Kansai Mirai Venture Award \"Mirai Way\"",
      excerpt: "Follicea Technologies was selected as one of 10 finalists from more than 100 applicants in the 3rd Kansai Mirai Venture Award \"Mirai Way\" and received a Merit Award."
    },
    {
      file:    "260501.html",
      tag:     "Announcement",
      date:    "May 2026",
      title:   "Follicea Technologies Founded in Osaka",
      excerpt: "We are pleased to announce the founding of Follicea Technologies, Inc., a Kansai-based biotech startup developing innovative pharmacological treatments for infertility."
    },
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
