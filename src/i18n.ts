/**
 * 全局多语言配置
 * 所有 UI 文案在此定义，客户端根据 localStorage 中的 lang 键切换
 */

export const SUPPORTED_LANGS = ['zh', 'en', 'ja', 'fr', 'de'] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];
export const DEFAULT_LANG: Lang = 'zh';

export const LANG_META: Record<Lang, { label: string; flag: string; nativeName: string }> = {
  zh: { label: '中文', flag: '🇨🇳', nativeName: '中文' },
  en: { label: 'EN', flag: '🇺🇸', nativeName: 'English' },
  ja: { label: '日本語', flag: '🇯🇵', nativeName: '日本語' },
  fr: { label: 'FR', flag: '🇫🇷', nativeName: 'Français' },
  de: { label: 'DE', flag: '🇩🇪', nativeName: 'Deutsch' },
};

/** 页面 UI 文案翻译 */
export const UI_STRINGS: Record<Lang, {
  // Site
  siteTitle: string;
  siteDesc: string;
  // Nav
  navHome: string;
  navRecipes: string;
  navAbout: string;
  // Hero
  heroBadge: string;
  heroLine1: string;
  heroLine2: string;
  heroDesc: string;
  heroCta1: string;
  heroCta2: string;
  scrollHint: string;
  // Stats
  statRecipes: string;
  statLangs: string;
  statPhotos: string;
  statHomemade: string;
  // Section
  sectionLabel: string;
  sectionTitle: string;
  sectionLink: string;
  // Card meta
  metaPrep: string;
  metaCook: string;
  // Features
  feat1Title: string;
  feat1Desc: string;
  feat2Title: string;
  feat2Desc: string;
  feat3Title: string;
  feat3Desc: string;
  feat4Title: string;
  feat4Desc: string;
  // Blog list
  blogTitle: string;
  blogSubtitle: (n: number) => string;
  blogCookTime: string;
}> = {
  zh: {
    siteTitle: '中餐食谱',
    siteDesc: '收录经典中餐食谱，图文并茂，步骤详细',
    navHome: '首页',
    navRecipes: '食谱',
    navAbout: '关于',
    heroBadge: '🔥 正宗中华料理',
    heroLine1: '探索中国',
    heroLine2: '美食世界',
    heroDesc: '精选经典中华菜谱，图文并茂，步骤详尽。\n从川菜到粤菜，让你在家复刻地道中国味。',
    heroCta1: '🍜 浏览所有食谱',
    heroCta2: '✨ 今日推荐',
    scrollHint: '向下探索',
    statRecipes: '精选食谱',
    statLangs: '语言版本',
    statPhotos: '高清图片',
    statHomemade: '家常可做',
    sectionLabel: '精选菜谱',
    sectionTitle: '今日推荐',
    sectionLink: '查看全部',
    metaPrep: '备料',
    metaCook: '烹饪',
    feat1Title: '4K 高清图片',
    feat1Desc: '每道菜配备专业级食物摄影，色泽诱人，让你一眼就想动手做',
    feat2Title: '5 种语言',
    feat2Desc: '中文、英文、日文、德文、法文全覆盖，分享给全世界的朋友',
    feat3Title: '步骤详尽',
    feat3Desc: '从备料到摆盘，每个步骤图文并茂，新手也能轻松上手',
    feat4Title: '快手家常',
    feat4Desc: '精选 30 分钟内可完成的家常菜，忙碌工作日也能吃得好',
    blogTitle: '所有食谱',
    blogSubtitle: (n) => `共 ${n} 道菜`,
    blogCookTime: '烹饪',
  },
  en: {
    siteTitle: 'Chinese Recipes',
    siteDesc: 'Authentic Chinese recipes with step-by-step instructions',
    navHome: 'Home',
    navRecipes: 'Recipes',
    navAbout: 'About',
    heroBadge: '🔥 Authentic Chinese Cuisine',
    heroLine1: 'Explore Chinese',
    heroLine2: 'Culinary World',
    heroDesc: 'Curated classic Chinese recipes with detailed steps.\nFrom Sichuan to Cantonese, recreate authentic flavors at home.',
    heroCta1: '🍜 Browse All Recipes',
    heroCta2: '✨ Today\'s Pick',
    scrollHint: 'Scroll Down',
    statRecipes: 'Recipes',
    statLangs: 'Languages',
    statPhotos: 'HD Photos',
    statHomemade: 'Home-Friendly',
    sectionLabel: 'Featured',
    sectionTitle: 'Today\'s Picks',
    sectionLink: 'View All',
    metaPrep: 'Prep',
    metaCook: 'Cook',
    feat1Title: '4K Photography',
    feat1Desc: 'Professional food photography for every dish — vibrant colors that make you want to cook right away',
    feat2Title: '5 Languages',
    feat2Desc: 'Available in Chinese, English, Japanese, German, and French — share with friends worldwide',
    feat3Title: 'Detailed Steps',
    feat3Desc: 'From prep to plating, every step illustrated — beginners welcome',
    feat4Title: 'Quick & Easy',
    feat4Desc: 'Curated recipes under 30 minutes — perfect for busy weeknights',
    blogTitle: 'All Recipes',
    blogSubtitle: (n) => `${n} recipes`,
    blogCookTime: 'Cook',
  },
  ja: {
    siteTitle: '中華レシピ',
    siteDesc: '本格中華料理のレシピを写真付きで詳しく紹介',
    navHome: 'ホーム',
    navRecipes: 'レシピ',
    navAbout: '概要',
    heroBadge: '🔥 本格中華料理',
    heroLine1: '中国の',
    heroLine2: '美食を探る',
    heroDesc: '厳選された中華レシピを写真付きで詳しく紹介。\n四川料理から広東料理まで、本場の味をご家庭で。',
    heroCta1: '🍜 全レシピを見る',
    heroCta2: '✨ 今日のおすすめ',
    scrollHint: 'スクロール',
    statRecipes: '厳選レシピ',
    statLangs: '言語対応',
    statPhotos: '高画質写真',
    statHomemade: '家庭で作れる',
    sectionLabel: 'おすすめ',
    sectionTitle: '今日のピックアップ',
    sectionLink: 'すべて見る',
    metaPrep: '下準備',
    metaCook: '調理',
    feat1Title: '4K 高画質写真',
    feat1Desc: 'プロ級のフード写真で、見るだけで作りたくなる美しさ',
    feat2Title: '5ヶ国語対応',
    feat2Desc: '中国語・英語・日本語・ドイツ語・フランス語で世界中の友人とシェア',
    feat3Title: '詳細な手順',
    feat3Desc: '下ごしらえから盛り付けまで、写真付きで初心者でも安心',
    feat4Title: '時短レシピ',
    feat4Desc: '30分以内で完成する家庭料理を厳選、忙しい日にもぴったり',
    blogTitle: '全レシピ',
    blogSubtitle: (n) => `全${n}品`,
    blogCookTime: '調理',
  },
  fr: {
    siteTitle: 'Recettes Chinoises',
    siteDesc: 'Recettes chinoises authentiques avec instructions détaillées',
    navHome: 'Accueil',
    navRecipes: 'Recettes',
    navAbout: 'À propos',
    heroBadge: '🔥 Cuisine Chinoise Authentique',
    heroLine1: 'Explorez la',
    heroLine2: 'Cuisine Chinoise',
    heroDesc: 'Recettes chinoises classiques avec étapes détaillées.\nDu Sichuan au Cantonais, recréez les saveurs authentiques chez vous.',
    heroCta1: '🍜 Toutes les Recettes',
    heroCta2: '✨ Choix du Jour',
    scrollHint: 'Défiler',
    statRecipes: 'Recettes',
    statLangs: 'Langues',
    statPhotos: 'Photos HD',
    statHomemade: 'Fait Maison',
    sectionLabel: 'En Vedette',
    sectionTitle: 'Sélection du Jour',
    sectionLink: 'Voir Tout',
    metaPrep: 'Prép.',
    metaCook: 'Cuisson',
    feat1Title: 'Photos 4K',
    feat1Desc: 'Photographie culinaire professionnelle — des couleurs vibrantes qui donnent envie de cuisiner',
    feat2Title: '5 Langues',
    feat2Desc: 'Disponible en chinois, anglais, japonais, allemand et français — partagez avec le monde entier',
    feat3Title: 'Étapes Détaillées',
    feat3Desc: 'De la préparation au dressage, chaque étape illustrée — débutants bienvenus',
    feat4Title: 'Rapide & Facile',
    feat4Desc: 'Recettes de moins de 30 minutes — parfaites pour les soirs de semaine',
    blogTitle: 'Toutes les Recettes',
    blogSubtitle: (n) => `${n} recettes`,
    blogCookTime: 'Cuisson',
  },
  de: {
    siteTitle: 'Chinesische Rezepte',
    siteDesc: 'Authentische chinesische Rezepte mit Schritt-für-Schritt-Anleitung',
    navHome: 'Startseite',
    navRecipes: 'Rezepte',
    navAbout: 'Über uns',
    heroBadge: '🔥 Authentische Chinesische Küche',
    heroLine1: 'Entdecke die',
    heroLine2: 'Chinesische Küche',
    heroDesc: 'Ausgewählte klassische chinesische Rezepte mit detaillierten Schritten.\nVon Sichuan bis Kanton — authentische Aromen für zu Hause.',
    heroCta1: '🍜 Alle Rezepte',
    heroCta2: '✨ Tipp des Tages',
    scrollHint: 'Scrollen',
    statRecipes: 'Rezepte',
    statLangs: 'Sprachen',
    statPhotos: 'HD-Fotos',
    statHomemade: 'Hausgemacht',
    sectionLabel: 'Empfohlen',
    sectionTitle: 'Auswahl des Tages',
    sectionLink: 'Alle Anzeigen',
    metaPrep: 'Vorb.',
    metaCook: 'Kochen',
    feat1Title: '4K Fotografie',
    feat1Desc: 'Professionelle Food-Fotografie — lebendige Farben, die sofort Lust aufs Kochen machen',
    feat2Title: '5 Sprachen',
    feat2Desc: 'Verfügbar auf Chinesisch, Englisch, Japanisch, Deutsch und Französisch — teile mit Freunden weltweit',
    feat3Title: 'Detaillierte Schritte',
    feat3Desc: 'Von der Vorbereitung bis zum Anrichten — jeder Schritt bebildert, auch für Anfänger',
    feat4Title: 'Schnell & Einfach',
    feat4Desc: 'Ausgewählte Rezepte unter 30 Minuten — perfekt für stressige Wochentage',
    blogTitle: 'Alle Rezepte',
    blogSubtitle: (n) => `${n} Rezepte`,
    blogCookTime: 'Kochen',
  },
};
