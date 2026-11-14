/* ==========================================================================
   DeepFocus — Official Static Site Interactions & Bilingual Switcher
   Zero external dependencies, progressive enhancement
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "deepfocus_lang";

  var TRANSLATIONS = {
    bn: {
      "skip.content": "মূল অংশে যান",
      "nav.home": "হোম",
      "nav.features": "ফিচারসমূহ",
      "nav.screenshots": "স্ক্রিনশট",
      "nav.faq": "জিজ্ঞাসা",
      "nav.privacy": "প্রাইভেসি",
      "nav.buy": "কিনুন",
      "nav.menuOpen": "নেভিগেশন মেনু খুলুন",
      "nav.menuClose": "নেভিগেশন মেনু বন্ধ করুন",

      "hero.kicker": "অ্যান্ড্রয়েড ফোকাস ও প্রোডাক্টিভিটি অ্যাপ · বাংলাদেশ",
      "hero.title": "মনোযোগ ধরে রাখুন, গড়ে তুলুন ভালো অভ্যাস।",
      "hero.desc": "DeepFocus-এর সাহায্যে ফোকাস সেশন পরিচালনা করুন, পড়াশোনার অভ্যাস গড়ুন এবং ডিজিটাল বিভ্রান্তি নিয়ন্ত্রণে আরও সচেতন হোন।",
      "hero.ctaPrimary": "SupportKori থেকে DeepFocus নিন",
      "hero.ctaSecondary": "ফিচারগুলো দেখুন",
      "hero.metaDev": "ডেভেলপার: মুহাম্মদ ওমর (Muhammed Omor)",
      "hero.metaPlatform": "প্ল্যাটফর্ম: অ্যান্ড্রয়েড",
      "hero.metaChannel": "অফিশিয়াল সোর্স: SupportKori",
      "hero.imgCaption": "অফিশিয়াল হোম স্ক্রিন: সক্রিয় ফোকাস লক, কুইক অ্যাক্সেস ও দৈনন্দিন রুটিন। বড় করে দেখতে ট্যাপ করুন।",

      "summary.eyebrow": "সংক্ষিপ্ত পরিচিতি",
      "summary.title": "DeepFocus কী এবং এটি কাদের জন্য তৈরি",
      "summary.lead": "DeepFocus একটি মিনিমালিস্ট অ্যান্ড্রয়েড হোম লঞ্চার এবং ফোকাস অ্যাপ, যা অপ্রয়োজনীয় অ্যাপের ব্যবহার কমিয়ে নির্দিষ্ট সময়ে পড়াশোনা বা কাজে মনোযোগ ধরে রাখতে সাহায্য করার জন্য তৈরি।",
      "summary.defTitle": "বাস্তবসম্মত ও স্পষ্ট পরিচিতি",
      "summary.defText": "DeepFocus হোম স্ক্রিন ইন্টারফেসকে সহজ করে, নির্দিষ্ট সময়ের জন্য ফোকাস লক চালু করার সুযোগ দেয়, সেশন চলাকালীন শুধু প্রয়োজনীয় অ্যাপ ব্যবহারযোগ্য রাখে এবং দৈনন্দিন অভ্যাস ও সেশন হিস্ট্রি ট্র্যাক করতে সহায়তা করে।",
      "summary.defNote": "দ্রষ্টব্য: নিচে উল্লিখিত শ্রেণির ব্যবহারকারীরা DeepFocus-এর সম্ভাব্য ব্যবহারকারী হিসেবে বিবেচিত—এগুলো কোনো যাচাইকৃত ব্যবহারকারী সংখ্যা বা পরিসংখ্যান নয়।",
      "summary.aud1Title": "বাংলাদেশের স্কুল ও কলেজের শিক্ষার্থী",
      "summary.aud1Desc": "পড়াশোনার সময়ে সোশ্যাল মিডিয়া বা গেমের কারণে বারবার মনোযোগ ভেঙে যাওয়া কমাতে।",
      "summary.aud2Title": "বিশ্ববিদ্যালয় ভর্তি ও চাকরি পরীক্ষার্থী",
      "summary.aud2Desc": "দীর্ঘ সময় ধরে মনোযোগী স্টাডি সেশন ও প্রতিদিনের পড়ার রুটিন বজায় রাখতে।",
      "summary.aud3Title": "বিশ্ববিদ্যালয়ের শিক্ষার্থী",
      "summary.aud3Desc": "অ্যাসাইনমেন্ট, রিসার্চ ও পরীক্ষার প্রস্তুতির সময় ফোন ব্যবহারের শৃঙ্খলা আনতে।",
      "summary.aud4Title": "প্রফেশনাল ও ফ্রিল্যান্সার",
      "summary.aud4Desc": "কাজের নির্দিষ্ট সময়ে ফোকাস সেশন চালিয়ে অপ্রয়োজনীয় নোটিফিকেশন ও অ্যাপ এড়াতে।",
      "summary.aud5Title": "স্বাস্থ্যকর ফোন ব্যবহারের অভ্যাস গড়তে আগ্রহীরা",
      "summary.aud5Desc": "দৈনন্দিন স্ক্রিন বিভ্রান্তি কমিয়ে আরও সচেতনভাবে স্মার্টফোন ব্যবহার করতে।",

      "features.eyebrow": "যাচাইকৃত ফিচারসমূহ",
      "features.title": "অ্যাপ স্ক্রিনশট অনুযায়ী মূল ফিচার",
      "features.lead": "নিচের প্রতিটি ফিচার DeepFocus-এর অফিশিয়াল অ্যাপ স্ক্রিনশটে দৃশ্যমান ইন্টারফেস ও তথ্য অনুযায়ী উপস্থাপিত।",
      "features.f1Meta": "০১ · ফোকাস লক",
      "features.f1Tag": "Focus Lock",
      "features.f1Title": "কাস্টম ফোকাস লক",
      "features.f1Desc": "সেশন সক্রিয় থাকাকালীন অ্যাপ-ভিত্তিক লঞ্চার থেকে বের হওয়া ও অ্যাপ সুইচিং নিয়ন্ত্রণ লক করে রাখে যতক্ষণ না টাইমার শেষ হয়।",
      "features.f1Benefit": "উপকারিতা: পড়াশোনা বা কাজের সময় হঠাৎ অন্য অ্যাপে চলে যাওয়ার প্রবণতা কমাতে সাহায্য করে।",
      "features.f2Meta": "০২ · সেশন টাইমার",
      "features.f2Title": "ফোকাস সেশন টাইমার",
      "features.f2Desc": "বৃত্তাকার কাউন্টডাউন টাইমারে অবশিষ্ট সময় এবং সেশন শেষ হওয়ার নির্দিষ্ট সময় স্পষ্টভাবে দেখায়।",
      "features.f2Benefit": "উপকারিতা: কতক্ষণ মনোযোগ দিয়ে কাজ বাকি আছে তা এক নজরে বোঝা যায়।",
      "features.f3Meta": "০৩ · অনুমোদিত অ্যাপ",
      "features.f3Title": "ফোকাস চলাকালীন অনুমোদিত অ্যাপ",
      "features.f3Desc": "সেশন চলাকালীন শুধুমাত্র নির্বাচিত কয়েকটি প্রয়োজনীয় অ্যাপ (যেমন পড়াশোনা বা কলিং অ্যাপ) ব্যবহারযোগ্য থাকে এবং বাকি অ্যাপ লক থাকে।",
      "features.f3Benefit": "উপকারিতা: জরুরি যোগাযোগ বা দরকারি টুল চালু রেখেই বিভ্রান্তি তৈরি করা অ্যাপ দূরে রাখা যায়।",
      "features.f4Meta": "০৪ · দৈনন্দিন অভ্যাস",
      "features.f4Title": "হ্যাবিট ট্র্যাকার (Daily Habit Hub)",
      "features.f4Desc": "হোম স্ক্রিন ও আলাদা Habits ট্যাব থেকে প্রতিদিনের ছোট ছোট অভ্যাস যোগ ও অনুসরণ করার সুবিধা দেয়।",
      "features.f4Benefit": "উপকারিতা: নিয়মিত পড়াশোনা ও দৈনন্দিন রুটিন ধরে রাখতে সহায়ক।",
      "features.f5Meta": "০৫ · পরিসংখ্যান",
      "features.f5Title": "ফোকাস পরিসংখ্যান ও সেশন হিস্ট্রি",
      "features.f5Desc": "Stats ট্যাবে মোট ফোকাস সময়, সম্পন্ন সেশন সংখ্যা, আজকের ফোকাস সময়, সক্রিয় অবস্থা এবং সাম্প্রতিক সেশনের তালিকা দেখায়।",
      "features.f5Benefit": "উপকারিতা: নিজের কাজের অগ্রগতি ও সেশনের ধারাবাহিকতা পর্যালোচনা করা যায়।",
      "features.f6Meta": "০৬ · কুইক অ্যাক্সেস",
      "features.f6Title": "মিনিমালিস্ট হোম, কুইক অ্যাক্সেস ও অ্যাপ ড্রয়ার",
      "features.f6Desc": "হোম স্ক্রিনে পিন করা প্রয়োজনীয় অ্যাপের দ্রুত অ্যাক্সেস এবং প্রয়োজন অনুযায়ী পূর্ণ অ্যাপ ড্রয়ার খোলার ব্যবস্থা থাকে।",
      "features.f6Benefit": "উপকারিতা: অপ্রয়োজনীয় আইকনের ভিড় কমিয়ে হোম স্ক্রিন পরিচ্ছন্ন রাখে।",
      "features.f7Meta": "০৭ · লঞ্চার সেটিংস",
      "features.f7Title": "লঞ্চার কনফিগারেশন ও সহজ পরিবর্তন",
      "features.f7Desc": "Settings থেকে ডিফল্ট হোম লঞ্চার অবস্থা দেখা এবং ফোকাস লক সক্রিয় না থাকলে আগের লঞ্চারে ফিরে যাওয়ার অপশন দেয়।",
      "features.f7Benefit": "উপকারিতা: প্রয়োজন শেষে সহজেই ফোনের সাধারণ লঞ্চারে ফিরে যাওয়া যায়।",
      "features.f8Meta": "০৮ · সিস্টেম গার্ড",
      "features.f8Title": "স্ট্রিক্ট সেটিংস ব্লকার ও অ্যান্ড্রয়েড আর্কিটেকচার তথ্য",
      "features.f8Desc": "সক্রিয় ফোকাস চলাকালীন স্ট্যাটাস বার থেকে ডিভাইস Settings খোলা সীমিত করে, তবে Wi-Fi ও মোবাইল ডেটার কুইক টগল ব্যবহারযোগ্য রাখে। পাশাপাশি অ্যাপের ভেতরেই Android Limitations দেখার ব্যবস্থা রয়েছে।",
      "features.f8Benefit": "উপকারিতা: সংযোগ চালু রেখেই সেশন চলাকালীন সেটিংস পরিবর্তনের মাধ্যমে শর্টকাট এড়ানো সহজ হয়।",
      "features.limitTitle": "গুরুত্বপূর্ণ কারিগরি সীমাবদ্ধতা (সৎ তথ্য)",
      "features.limitText": "অ্যান্ড্রয়েড সিস্টেমের মানদণ্ড ও ডিভাইস নির্মাতাদের নিজস্ব নীতিমালার ভেতরেই DeepFocus কাজ করে। এটি সব সম্ভাব্য বাইপাস শতভাগ আটকে দেবে, সব ডিভাইসে রিস্টার্টের পর লক ধরে রাখবে বা অ্যান্ড্রয়েডের প্রতিটি সেটিংস ব্লক করবে—এমন অবাস্তব নিশ্চয়তা দেওয়া হয় না। অ্যাপের Settings স্ক্রিনেও Android Platform Architecture ও View Android Limitations অংশে সীমাবদ্ধতার উল্লেখ রয়েছে।",

      "screens.eyebrow": "অফিশিয়াল স্ক্রিনশট",
      "screens.title": "অ্যাপের আসল ইন্টারফেস দেখুন",
      "screens.lead": "চারটি অফিশিয়াল স্ক্রিনশটের প্রতিটি মূল অনুপাত বজায় রেখে যুক্ত করা হয়েছে। বড় করে দেখতে যেকোনো স্ক্রিনশটে ট্যাপ করুন।",
      "screens.s1Num": "স্ক্রিন ০১ · হোম",
      "screens.s1Title": "হোম স্ক্রিন (Home)",
      "screens.s1Desc": "সময় ও তারিখ, সক্রিয় ফোকাস লক স্ট্যাটাস, আজকের ফোকাস ও ডেইলি হ্যাবিট হাব, কুইক অ্যাক্সেস অ্যাপ এবং ড্রয়ার বাটন।",
      "screens.s2Num": "স্ক্রিন ০২ · ফোকাস লক",
      "screens.s2Title": "কাস্টম ফোকাস লক (Custom Focus Lock)",
      "screens.s2Desc": "বৃত্তাকার কাউন্টডাউন টাইমার, সেশন শেষ হওয়ার সময়, অনুমোদিত অ্যাপের সংখ্যা এবং সক্রিয় লক অবস্থা প্রদর্শন করে।",
      "screens.s3Num": "স্ক্রিন ০৩ · হ্যাবিটস ও স্ট্যাটস",
      "screens.s3Title": "হ্যাবিট ট্র্যাকার ও ফোকাস স্ট্যাটিসটিক্স",
      "screens.s3Desc": "পাশাপাশি দুটি স্ক্রিন: দৈনন্দিন অভ্যাস যোগ ও ট্র্যাক করার Habit Tracker এবং মোট সময়, সম্পন্ন সেশন ও সাম্প্রতিক ইতিহাস দেখানোর Focus Statistics।",
      "screens.s4Num": "স্ক্রিন ০৪ · সেটিংস",
      "screens.s4Title": "সেটিংস ও অ্যান্ড্রয়েড আর্কিটেকচার",
      "screens.s4Desc": "Launcher Configuration (Switch to Old Launcher), Strict Settings Blocker, Android Platform Architecture (View Android Limitations) এবং About DeepFocus।",
      "screens.enlarge": "বড় করে দেখুন",

      "how.eyebrow": "কীভাবে শুরু করবেন",
      "how.title": "চারটি সহজ ধাপে অ্যাপ সম্পর্কে জানুন ও সংগ্রহ করুন",
      "how.lead": "SupportKori-তে যাওয়ার আগে অ্যাপের কার্যকারিতা ও সামঞ্জস্যতা পরিষ্কারভাবে দেখে নিন।",
      "how.st1Num": "ধাপ ০১",
      "how.st1Title": "অ্যাপের কাজ বুঝে নিন",
      "how.st1Desc": "ফোকাস লক, অনুমোদিত অ্যাপ তালিকা, হ্যাবিট ট্র্যাকার ও ফোকাস পরিসংখ্যান কীভাবে কাজ করে তা দেখে নিন।",
      "how.st2Num": "ধাপ ০২",
      "how.st2Title": "সামঞ্জস্যতা ও সীমাবদ্ধতা যাচাই করুন",
      "how.st2Desc": "আপনার অ্যান্ড্রয়েড ফোন ও সেটআপ চাহিদার সাথে অ্যাপের নিয়ম ও প্রয়োজনীয় অনুমতিগুলো মিলিয়ে নিন।",
      "how.st3Num": "ধাপ ০৩",
      "how.st3Title": "অফিশিয়াল SupportKori পেজে যান",
      "how.st3Desc": "অফিশিয়াল লিংকে গিয়ে বর্তমান প্রাপ্যতা, মূল্য বা অ্যাক্সেসের শর্তাবলি সরাসরি দেখে নিন।",
      "how.st4Num": "ধাপ ০৪",
      "how.st4Title": "অফিশিয়াল নির্দেশনা অনুসরণ করুন",
      "how.st4Desc": "SupportKori পেজে ডেভেলপারের দেওয়া সংগ্রহ ও ইনস্টলেশন নির্দেশনা অনুসরণ করে অ্যাপ সেটআপ করুন।",

      "bd.eyebrow": "বাংলাদেশের প্রেক্ষাপট",
      "bd.title": "বাংলাদেশে পড়াশোনা ও কাজের জন্য উপযোগী ফোকাস সমাধান",
      "bd.lead": "বাংলাদেশের শিক্ষার্থী ও কর্মজীবীদের বাস্তব মোবাইল ব্যবহারের ধরন বিবেচনায় রেখে এই তথ্যগুলো সাজানো হয়েছে।",
      "bd.p1": "বাংলাদেশে অনেকেই এখন অনলাইন ক্লাস, লেকচার নোট বা জরুরি কাজের জন্য স্মার্টফোনের ওপর নির্ভর করেন, কিন্তু একই ফোনে থাকা সোশ্যাল মিডিয়া ও শর্ট ভিডিও বারবার মনোযোগ নষ্ট করে।",
      "bd.p2": "শিক্ষার্থীদের প্রোডাক্টিভিটি অ্যাপ ও পড়াশোনার ফোকাস অ্যাপ হিসেবে DeepFocus মূলত মোবাইলের বিভ্রান্তি নিয়ন্ত্রণ করতে এবং প্রয়োজনীয় স্টাডি অ্যাপগুলো (যেমন কুইক অ্যাক্সেস বা অনুমোদিত অ্যাপ তালিকায় থাকা অ্যাপ) চালু রেখে বাকি অ্যাপ সীমিত করতে সহায়তা করে।",
      "bd.item1Title": "পড়াশোনা ও পরীক্ষার প্রস্তুতি",
      "bd.item1Desc": "বোর্ড পরীক্ষা, বিশ্ববিদ্যালয় ভর্তি প্রস্তুতি বা চাকরির পড়াশোনার সময় নির্দিষ্ট ফোকাস সেশন নির্ধারণের জন্য মনোযোগ বাড়ানোর অ্যাপ হিসেবে উপযোগী।",
      "bd.item2Title": "প্রয়োজনীয় অ্যাপ চালু রেখে নিয়ন্ত্রণ",
      "bd.item2Desc": "জরুরি কল বা পড়াশোনার অ্যাপ অনুমোদিত তালিকায় রেখে অপ্রয়োজনীয় অ্যাপ ব্লক রাখা যায়।",
      "bd.item3Title": "স্বল্প ডেটা ও সাধারণ ফোনে সহজ অভিজ্ঞতা",
      "bd.item3Desc": "ভারী ফিডের বদলে পরিচ্ছন্ন লঞ্চার ইন্টারফেস ব্যবহারের ফলে মনোযোগ স্থির রাখা সহজ হয়।",

      "compat.eyebrow": "সামঞ্জস্যতা ও প্রয়োজনীয়তা",
      "compat.title": "অ্যান্ড্রয়েড সাপোর্ট, অনুমতি এবং যাচাইযোগ্য তথ্য",
      "compat.lead": "যেসব প্রযুক্তিগত তথ্য প্রকাশের আগে ডেভেলপারের চূড়ান্ত নিশ্চিতকরণ প্রয়োজন, সেগুলো এখানে স্পষ্টভাবে চিহ্নিত করা হয়েছে।",
      "compat.row1Key": "সাপোর্টেড প্ল্যাটফর্ম",
      "compat.row1Val": "অ্যান্ড্রয়েড (অফিশিয়াল স্ক্রিনশট ও ডেভেলপার তথ্য অনুযায়ী)",
      "compat.row2Key": "সাপোর্টেড অ্যান্ড্রয়েড ভার্সন",
      "compat.row2Val": "প্রকাশের আগে ডেভেলপার কর্তৃক চূড়ান্তভাবে নিশ্চিত করতে হবে (নূন্যতম ও সর্বোচ্চ Android API/OS ভার্সন)।",
      "compat.row3Key": "প্রয়োজনীয় অনুমতি (Permissions)",
      "compat.row3Val": "ডিফল্ট হোম লঞ্চার সেটআপ প্রয়োজন (স্ক্রিনশট ০৪ অনুযায়ী)। Usage Access, Display Over Other Apps বা Accessibility Service-এর মতো বিশেষ অনুমতির সুনির্দিষ্ট তালিকা প্রকাশের আগে ডেভেলপার কর্তৃক নিশ্চিত করতে হবে।",
      "compat.row4Key": "ব্যাটারি অপটিমাইজেশন",
      "compat.row4Val": "ব্যাকগ্রাউন্ড টাইমার ও লঞ্চার আচরণ সচল রাখতে কিছু অ্যান্ড্রয়েড ব্র্যান্ডে (যেমন Xiaomi, Realme, Samsung, Tecno) ব্যাটারি অপটিমাইজেশন সমন্বয়ের প্রয়োজন হতে পারে—সুনির্দিষ্ট নির্দেশনা ডেভেলপারের সাথে নিশ্চিত করতে হবে।",
      "compat.row5Key": "জানা সীমাবদ্ধতা",
      "compat.row5Val": "স্ট্যান্ডার্ড অ্যান্ড্রয়েড সিকিউরিটি পলিসির ভেতরে কাজ করে। ডিভাইসভেদে সিস্টেম আচরণ ভিন্ন হতে পারে এবং কোনো ধরনের অবাস্তব শতভাগ বাইপাস-প্রতিরোধের নিশ্চয়তা দেওয়া হয় না।",

      "privacy.eyebrow": "প্রাইভেসি ও স্বচ্ছতা",
      "privacy.title": "তথ্য সুরক্ষা ও প্রাইভেসি সারসংক্ষেপ",
      "privacy.lead": "অ্যাপের প্রকৃত ডাটা ব্যবহারের ধরন যাচাই না করে অতিরঞ্জিত কোনো দাবি এখানে করা হয়নি।",
      "privacy.c1Title": "লোকাল স্টোরেজ ও অফলাইন ব্যবহার",
      "privacy.c1Desc": "হ্যাবিট ট্র্যাকার ও ফোকাস সেশনের ইতিহাস ডিভাইসে সংরক্ষিত হয় বলে ধারণা করা হয়; তবে প্রকৃত ডাটাবেস ও ব্যাকআপ আচরণ প্রকাশের আগে ডেভেলপারের নিশ্চিতকরণ প্রয়োজন।",
      "privacy.c2Title": "নেটওয়ার্ক ও তৃতীয় পক্ষের সেবা",
      "privacy.c2Desc": "অ্যাপে কোনো নেটওয়ার্ক কল, ক্র্যাশ রিপোর্টিং বা থার্ড-পার্টি SDK ব্যবহৃত হয় কি না তা প্রকাশের আগে চূড়ান্ত প্রাইভেসি নীতিতে নিশ্চিত করতে হবে।",
      "privacy.c3Title": "অ্যান্ড্রয়েড অনুমতি ব্যবহার",
      "privacy.c3Desc": "লঞ্চার, অনুমোদিত অ্যাপ ফিল্টার ও স্ট্রিক্ট সেটিংস ব্লকার কীভাবে অনুমোদিত অনুমতি ব্যবহার করে তা প্রাইভেসি পেজে খসড়া আকারে নথিভুক্ত আছে।",
      "privacy.c4Title": "নিরাপত্তা অডিট সংক্রান্ত স্বচ্ছতা",
      "privacy.c4Desc": "এই ওয়েবসাইটটি কোনো স্বাধীন সিকিউরিটি অডিটের দাবি করে না। পূর্ণাঙ্গ খসড়া নীতিমালা দেখতে Privacy Policy পেজ পড়ুন।",
      "privacy.linkBtn": "খসড়া প্রাইভেসি নীতিমালা দেখুন",

      "faq.eyebrow": "সচরাচর জিজ্ঞাসা (FAQ)",
      "faq.title": "প্রয়োজনীয় প্রশ্ন ও সৎ উত্তর",
      "faq.lead": "DeepFocus ব্যবহার ও সংগ্রহ সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নের সরাসরি উত্তর। অজানা তথ্যগুলো ডেভেলপারের নিশ্চিতকরণের জন্য চিহ্নিত রাখা হয়েছে।",
      "faq.allLink": "সব ১২টি প্রশ্ন ও উত্তর দেখুন",

      "faq.q1": "DeepFocus কী?",
      "faq.a1": "DeepFocus হলো মুহাম্মদ ওমরের তৈরি একটি অ্যান্ড্রয়েড প্রোডাক্টিভিটি এবং ফোকাস অ্যাপ। এটি একটি মিনিমালিস্ট হোম লঞ্চার, কাস্টম ফোকাস লক টাইমার, অনুমোদিত অ্যাপ তালিকা, দৈনন্দিন হ্যাবিট ট্র্যাকার এবং ফোকাস পরিসংখ্যানকে একসাথে যুক্ত করে।",
      "faq.q2": "কাদের জন্য DeepFocus ব্যবহার করা উচিত?",
      "faq.a2": "বাংলাদেশের স্কুল-কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থী, ভর্তি ও চাকরি পরীক্ষার্থী, প্রফেশনাল এবং যারা মোবাইল ব্যবহারের বিভ্রান্তি কমিয়ে আরও মনোযোগী রুটিন গড়তে চান—তাদের জন্য এটি ডিজাইন করা হয়েছে।",
      "faq.q3": "DeepFocus কি অ্যান্ড্রয়েডের জন্য উপলব্ধ?",
      "faq.a3": "হ্যাঁ, DeepFocus একটি অ্যান্ড্রয়েড অ্যাপ্লিকেশন এবং এর অফিশিয়াল SupportKori প্রোডাক্ট পেজের মাধ্যমে এটি সংগ্রহ করা যায়।",
      "faq.q4": "Focus Lock কীভাবে কাজ করে?",
      "faq.a4": "ফোকাস লক সক্রিয় করলে নির্ধারিত কাউন্টডাউন টাইমার শেষ না হওয়া পর্যন্ত অ্যাপের ভেতর থেকে লঞ্চার বের হওয়া ও অপ্রয়োজনীয় অ্যাপ সুইচিং নিয়ন্ত্রণ লক থাকে। তবে এটি স্ট্যান্ডার্ড অ্যান্ড্রয়েড ফ্রেমওয়ার্ক নীতিমালার ভেতরেই কাজ করে।",
      "faq.q5": "ফোকাস সেশন চলাকালীন কি নির্বাচিত কিছু অ্যাপ ব্যবহার করা যাবে?",
      "faq.a5": "হ্যাঁ। অফিশিয়াল Focus Lock স্ক্রিনশট অনুযায়ী, ফোকাস সেশন চলাকালীন অনুমোদিত কিছু প্রয়োজনীয় অ্যাপ (Allowed Apps During Focus) ব্যবহারযোগ্য থাকে এবং বাকি সব অ্যাপ লক থাকে।",
      "faq.q6": "কোন কোন অ্যান্ড্রয়েড ভার্সনে অ্যাপটি সাপোর্ট করে?",
      "faq.a6": "[প্রকাশের আগে ডেভেলপারের নিশ্চিতকরণ প্রয়োজন] এই ওয়েবসাইটের জন্য সঠিক নূন্যতম ও সর্বোচ্চ সাপোর্টেড Android ভার্সন এখনো আনুষ্ঠানিকভাবে সরবরাহ করা হয়নি। সংগ্রহের আগে SupportKori লিস্টিং দেখে নিশ্চিত হন।",
      "faq.q7": "অ্যাপ্লিকেশনটির কী কী পারমিশন প্রয়োজন হয়?",
      "faq.a7": "স্ক্রিনশট ০৪ অনুযায়ী ডিফল্ট হোম লঞ্চার হিসেবে সেট করার প্রয়োজন হয়। এছাড়া ফোকাস লক ও স্ট্রিক্ট সেটিংস ব্লকারের জন্য কোন কোন বিশেষ অ্যান্ড্রয়েড অনুমতি (যেমন Usage Access বা Accessibility) প্রয়োজন তা [প্রকাশের আগে ডেভেলপার কর্তৃক নিশ্চিত করতে হবে]।",
      "faq.q8": "আমি কীভাবে DeepFocus কিনব বা সংগ্রহ করব?",
      "faq.a8": "এই ওয়েবসাইটের 'SupportKori থেকে DeepFocus নিন' অথবা 'কিনুন' বাটনে ক্লিক করে অফিশিয়াল SupportKori পেজে যান এবং সেখানে দেওয়া বর্তমান মূল্য ও চেকআউট ধাপ অনুসরণ করুন।",
      "faq.q9": "আমি কীভাবে অ্যাপটি ইনস্টল করব?",
      "faq.a9": "[প্রকাশের আগে ডেভেলপারের নিশ্চিতকরণ প্রয়োজন] SupportKori পেজে পণ্য সংগ্রহের পর প্রদত্ত অফিশিয়াল ফাইল ও ইনস্টলেশন নির্দেশনা অনুসরণ করুন। এই সাইটে কোনো আনঅফিশিয়াল APK ডাউনলোড লিংক নেই।",
      "faq.q10": "কোনো ফিচার কাজ না করলে কী করব?",
      "faq.a10": "প্রথমে Settings স্ক্রিন থেকে Launcher Configuration ও Android Limitations অংশ দেখে নিন এবং ডিভাইসের ব্যাটারি অপটিমাইজেশন বা অনুমতিগুলো ঠিক আছে কি না যাচাই করুন। [বিস্তারিত ট্রাবলশুটিং গাইড ডেভেলপার কর্তৃক যোগ করতে হবে]।",
      "faq.q11": "আমি কীভাবে ডেভেলপারের সাথে যোগাযোগ করব?",
      "faq.a11": "[প্রকাশের আগে ডেভেলপারের নিশ্চিতকরণ প্রয়োজন] অনুগ্রহ করে অফিশিয়াল SupportKori প্রোডাক্ট পেজে দেওয়া বিক্রেতা/সাপোর্ট যোগাযোগ মাধ্যম ব্যবহার করুন। কোনো যাচাইহীন ইমেইল বা ফোন নম্বর এখানে যোগ করা হয়নি।",
      "faq.q12": "প্রাইভেসি পলিসি কোথায় পাব?",
      "faq.a12": "আপনি এই ওয়েবসাইটের প্রাইভেসি পেজে (privacy.html) খসড়া প্রাইভেসি সারসংক্ষেপ দেখতে পারেন। চূড়ান্ত প্রকাশনার আগে ডেভেলপার কর্তৃক প্রকৃত ডাটা প্র্যাকটিস যাচাই করে এটি আপডেট করা হবে।",

      "cta.eyebrow": "পরবর্তী পদক্ষেপ",
      "cta.title": "এবার মনোযোগ দিয়ে কাজ শুরু করুন।",
      "cta.desc": "আপনি যদি ফিচারগুলো দেখে থাকেন এবং DeepFocus ব্যবহার করতে চান, তবে অফিশিয়াল SupportKori প্রোডাক্ট পেজে গিয়ে বর্তমান অ্যাক্সেস ও নির্দেশনা দেখে নিন।",
      "cta.button": "অফিশিয়াল SupportKori পেজ দেখুন",

      "footer.desc": "মুহাম্মদ ওমরের তৈরি একটি অ্যান্ড্রয়েড প্রোডাক্টিভিটি ও ফোকাস অ্যাপ, যা ফোকাস সেশন পরিচালনা এবং বিভ্রান্তি কমাতে সহায়তা করে।",
      "footer.navHeading": "ওয়েবসাইট নেভিগেশন",
      "footer.infoHeading": "সহায়ক লিংক",
      "footer.dev": "ডেভেলপার: মুহাম্মদ ওমর (Muhammed Omor)",
      "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",

      "modal.close": "বন্ধ করুন",
      "modal.prev": "আগেরটি",
      "modal.next": "পরেরটি",

      "featuresPage.title": "DeepFocus ফিচার ও অ্যান্ড্রয়েড আর্কিটেকচার",
      "featuresPage.lead": "DeepFocus-এর অফিশিয়াল স্ক্রিনশটে যাচাইকৃত প্রতিটি ফিচার ও অ্যান্ড্রয়েড সিস্টেমের বাস্তব সীমাবদ্ধতার বিস্তারিত বিবরণ।",

      "privacyPage.title": "প্রাইভেসি সারসংক্ষেপ ও খসড়া নীতিমালা",
      "privacyPage.lead": "গুরুত্বপূর্ণ স্বচ্ছতা বার্তা: প্রকাশের আগে এই খসড়া প্রাইভেসি নীতিমালাটি মুহাম্মদ ওমরের চূড়ান্ত DeepFocus অ্যান্ড্রয়েড অ্যাপের প্রকৃত আচরণের সাথে মিলিয়ে নিশ্চিত করতে হবে।",
      "privacyPage.noticeTitle": "খসড়া অবস্থা সংক্রান্ত বিজ্ঞপ্তি:",
      "privacyPage.noticeBody": "এই ল্যান্ডিং ওয়েবসাইটের ডেভেলপার DeepFocus অ্যান্ড্রয়েড APK-এর কোনো স্বাধীন সিকিউরিটি অডিট বা কোড পরীক্ষা করেননি। নিচে নিশ্চিতকরণের জন্য চিহ্নিত প্রতিটি বিষয় চূড়ান্ত প্রকাশনার আগে প্রোডাক্ট ওনার (মুহাম্মদ ওমর) দ্বারা যাচাই করতে হবে।",
      "privacyPage.h1": "১. এই ল্যান্ডিং ওয়েবসাইট (স্ট্যাটিক সাইট)",
      "privacyPage.p1": "এটি একটি স্ট্যাটিক HTML, CSS এবং JavaScript ওয়েবসাইট। এতে কোনো ইউজার অ্যাকাউন্ট, লগইন ফর্ম, কন্টাক্ট ফর্ম, পেমেন্ট ফর্ম বা ডিফল্ট থার্ড-পার্টি ট্র্যাকিং স্ক্রিপ্ট নেই। আপনি ইংরেজি না বাংলা ভাষা বেছে নিয়েছেন তা মনে রাখার জন্য শুধুমাত্র ব্রাউজারের localStorage (deepfocus_lang) ব্যবহৃত হয়।",
      "privacyPage.h2": "২. বহিরাগত ক্রয় মাধ্যম (SupportKori)",
      "privacyPage.p2": "আপনি যখন কোনো ক্রয় বা 'Get DeepFocus' বাটনে ক্লিক করেন, তখন আপনি এই ওয়েবসাইট ছেড়ে SupportKori পরিচালিত অফিশিয়াল SupportKori পেজে যান। সেখানে কোনো লগইন বা পেমেন্ট তথ্য SupportKori-এর নিজস্ব শর্তাবলি ও প্রাইভেসি নীতির অধীন।",
      "privacyPage.h3": "৩. DeepFocus অ্যান্ড্রয়েড অ্যাপ — ডাটা সংগ্রহ ও লোকাল স্টোরেজ",
      "privacyPage.p3": "[প্রোডাক্ট ওনারের যাচাইকরণ প্রয়োজন] দৃশ্যমান অ্যাপ স্ক্রিন (Habit Tracker, Focus Statistics, Allowed Apps, Settings) অনুযায়ী সেশন হিস্ট্রি ও অভ্যাস সংক্রান্ত তথ্য ব্যবহারকারীর ডিভাইসেই সংরক্ষিত হয় বলে মনে হয়। চূড়ান্ত নীতিমালা প্রকাশের আগে ডেভেলপারকে নিশ্চিত করতে হবে:",
      "privacyPage.li1": "নেটওয়ার্কের মাধ্যমে কোনো ব্যক্তিগত তথ্য, টেলিমেট্রি বা ক্র্যাশ রিপোর্ট পাঠানো হয় কি না।",
      "privacyPage.li2": "লোকাল ডাটা এনক্রিপ্ট করা থাকে কি না বা Android ক্লাউড অটো-ব্যাকআপে যুক্ত হয় কি না।",
      "privacyPage.li3": "APK-তে কোনো থার্ড-পার্টি অ্যানালিটিক্স, বিজ্ঞাপন বা লাইসেন্সিং SDK যুক্ত আছে কি না।",
      "privacyPage.h4": "৪. অ্যান্ড্রয়েড পারমিশন সংক্রান্ত স্বচ্ছতা",
      "privacyPage.p4": "[প্রোডাক্ট ওনারের যাচাইকরণ প্রয়োজন] স্ক্রিন ০৪-এ ডিফল্ট হোম লঞ্চার সেটআপ নিশ্চিত করা হয়েছে। প্রকাশের আগে AndroidManifest.xml-এ থাকা প্রতিটি সংবেদনশীল পারমিশন এবং কেন তা প্রয়োজন তা পরিষ্কারভাবে উল্লেখ করতে হবে।",
      "privacyPage.h5": "৫. প্রাইভেসি সংক্রান্ত যোগাযোগ",
      "privacyPage.p5": "[প্রোডাক্ট ওনারের নিশ্চিতকরণ প্রয়োজন] প্রকাশের আগে এখানে ডেভেলপারের অফিশিয়াল সাপোর্ট ইমেইল যোগ করুন। ততক্ষণ পর্যন্ত SupportKori লিস্টিংয়ের অফিশিয়াল Contact Seller অপশন ব্যবহার করুন।",

      "notfound.title": "পেজটি খুঁজে পাওয়া যায়নি।",
      "notfound.desc": "লিংকটি পুরোনো হতে পারে অথবা ঠিকানাটি ভুলভাবে লেখা হয়েছে। DeepFocus-এ ফিরে যেতে নিচের লিংক ব্যবহার করুন।",
      "notfound.homeBtn": "হোম পেজে ফিরে যান"
    },
    en: {
      "skip.content": "Skip to main content",
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.screenshots": "Screenshots",
      "nav.faq": "FAQ",
      "nav.privacy": "Privacy",
      "nav.buy": "Buy Now",
      "nav.menuOpen": "Open navigation menu",
      "nav.menuClose": "Close navigation menu",

      "hero.kicker": "Android Focus & Productivity App · Built for Bangladesh",
      "hero.title": "Take Control of Your Focus. Build Better Habits.",
      "hero.desc": "Discover DeepFocus, an Android productivity app designed to help you create focused sessions, build better study habits, and manage distractions.",
      "hero.ctaPrimary": "Get DeepFocus on SupportKori",
      "hero.ctaSecondary": "Explore Features",
      "hero.metaDev": "Developer: Muhammed Omor",
      "hero.metaPlatform": "Platform: Android",
      "hero.metaChannel": "Official Listing: SupportKori",
      "hero.imgCaption": "Official Home screen: active Focus Lock, Quick Access apps, and Daily Habit Hub. Tap to enlarge.",

      "summary.eyebrow": "Product Overview",
      "summary.title": "What DeepFocus Is and Who It Is Designed For",
      "summary.lead": "DeepFocus combines a minimalist Android home launcher with a custom Focus Lock, daily habit tracking, and focus session statistics to help you reduce phone distractions.",
      "summary.defTitle": "Clear Product Definition",
      "summary.defText": "DeepFocus helps Android users structure uninterrupted study or work periods by simplifying the home screen, locking app switching during timed focus sessions, keeping selected essential apps accessible, and recording focus history.",
      "summary.defNote": "Note: The groups below describe intended audiences for DeepFocus rather than verified user demographics or download statistics.",
      "summary.aud1Title": "Students in Bangladesh",
      "summary.aud1Desc": "School and college learners looking to minimize social media interruptions during study hours.",
      "summary.aud2Title": "University Admission Candidates",
      "summary.aud2Desc": "Applicants preparing for competitive exams who need structured daily focus blocks.",
      "summary.aud3Title": "University Students",
      "summary.aud3Desc": "Students managing coursework, thesis writing, and exam revision without constant phone checking.",
      "summary.aud4Title": "Professionals & Freelancers",
      "summary.aud4Desc": "Remote workers, developers, and designers who need dedicated deep-work sessions.",
      "summary.aud5Title": "People Building Healthier Phone Habits",
      "summary.aud5Desc": "Anyone wanting calmer, more intentional smartphone routines instead of mindless scrolling.",

      "features.eyebrow": "Verified Capabilities",
      "features.title": "Core Features Shown in the Official App",
      "features.lead": "Every capability below is verified directly against the four official DeepFocus application screenshots.",
      "features.f1Meta": "01 · Focus Lock",
      "features.f1Tag": "Focus Lock",
      "features.f1Title": "Custom Focus Lock",
      "features.f1Desc": "When Focus Lock is active, in-app launcher exit and app switching controls remain locked until the session timer expires.",
      "features.f1Benefit": "Benefit: Adds helpful friction against impulsive app switching during deep work or study.",
      "features.f2Meta": "02 · Session Timer",
      "features.f2Title": "Focus Session Timer",
      "features.f2Desc": "Displays a circular countdown timer with remaining time and exact session end time for active deep-work blocks.",
      "features.f2Benefit": "Benefit: Keeps session progress visible at a glance without clutter.",
      "features.f3Meta": "03 · Essential Access",
      "features.f3Title": "Allowed Apps During Focus",
      "features.f3Desc": "Permits selected essential apps (for example, study or calling utilities) to stay usable while other apps remain locked.",
      "features.f3Benefit": "Benefit: Stay reachable for critical needs without opening distracting feeds.",
      "features.f4Meta": "04 · Daily Routines",
      "features.f4Title": "Daily Habit Tracker",
      "features.f4Desc": "Includes a dedicated Habits tab and Home screen summary card (Daily Habit Hub) to add and track daily disciplines.",
      "features.f4Benefit": "Benefit: Connects daily study or work habits with your focus routine.",
      "features.f5Meta": "05 · Progress Review",
      "features.f5Title": "Focus Statistics & Recent Sessions",
      "features.f5Desc": "Tracks Total Focus Time, Sessions Completed, Today's Focus, active Focus Status, and a list of recent focus sessions.",
      "features.f5Benefit": "Benefit: Helps you review consistency over time using clear, simple metrics.",
      "features.f6Meta": "06 · Home Launcher",
      "features.f6Title": "Quick Access & App Drawer",
      "features.f6Desc": "Provides a clean Home screen with Quick Access shortcuts to selected apps and a Drawer button when you need full app access.",
      "features.f6Benefit": "Benefit: Replaces busy icon grids with a calm workspace.",
      "features.f7Meta": "07 · Launcher Control",
      "features.f7Title": "Launcher Configuration",
      "features.f7Desc": "Lets you check default home app status and switch back to your previous launcher from Settings when no lock is active.",
      "features.f7Benefit": "Benefit: Easy reversibility whenever you want your standard launcher back.",
      "features.f8Meta": "08 · System Behavior",
      "features.f8Title": "Strict Settings Blocker & Platform Architecture",
      "features.f8Desc": "Blocks opening device Settings from the status bar during active focus while keeping Wi-Fi and Data quick toggles accessible, alongside an in-app Android Limitations guide.",
      "features.f8Benefit": "Benefit: Reduces mid-session tampering while keeping connectivity toggles usable.",
      "features.limitTitle": "Technical Scope & Honest Limitations",
      "features.limitText": "DeepFocus implements Focus Lock within standard Android framework security policies. Because Android versions and device manufacturers enforce strict OS boundaries, DeepFocus cannot guarantee blocking every possible bypass, surviving every device restart across all ROMs, or restricting every Android system menu.",

      "screens.eyebrow": "Official Application Screens",
      "screens.title": "Explore the Real DeepFocus Interface",
      "screens.lead": "All four official screenshots are shown in their original aspect ratios without cropping. Select any screen to inspect it full-size.",
      "screens.s1Num": "Screen 01 · Home",
      "screens.s1Title": "Home Screen & Quick Access",
      "screens.s1Desc": "Shows the minimalist launcher clock, active Focus Lock status card, Today's Focus, Daily Habit Hub, Quick Access app shortcuts, and bottom navigation.",
      "screens.s2Num": "Screen 02 · Focus Lock",
      "screens.s2Title": "Custom Focus Lock Screen",
      "screens.s2Desc": "Shows the Deep Work circular countdown timer, session end time, Allowed Apps During Focus count, and active protection status.",
      "screens.s3Num": "Screen 03 · Habits & Stats",
      "screens.s3Title": "Habit Tracker & Focus Statistics",
      "screens.s3Desc": "Side-by-side view of the Habits tab (add and track daily disciplines) and the Stats tab (Total Focus Time, Sessions Completed, Today's Focus, and Recent Sessions).",
      "screens.s4Num": "Screen 04 · Settings",
      "screens.s4Title": "Settings & Android Architecture",
      "screens.s4Desc": "Shows Launcher Configuration (Switch to Old Launcher), Strict Settings Blocker, Android Platform Architecture (View Android Limitations), and About DeepFocus.",
      "screens.enlarge": "Enlarge screen",

      "how.eyebrow": "Getting Started",
      "how.title": "How to Evaluate and Acquire DeepFocus",
      "how.lead": "A straightforward process from reviewing verified app details to visiting the official SupportKori page.",
      "how.st1Num": "Step 01",
      "how.st1Title": "Understand the App",
      "how.st1Desc": "Review how the launcher, Focus Lock timer, allowed apps list, habits, and stats work together.",
      "how.st2Num": "Step 02",
      "how.st2Title": "Check Compatibility",
      "how.st2Desc": "Review the Android requirements, permissions, and platform limitations before acquiring.",
      "how.st3Num": "Step 03",
      "how.st3Title": "Open Official SupportKori Page",
      "how.st3Desc": "Visit the verified SupportKori product page to view current pricing, terms, and availability.",
      "how.st4Num": "Step 04",
      "how.st4Title": "Follow Official Setup Steps",
      "how.st4Desc": "Complete acquisition on SupportKori and follow the developer's provided installation instructions.",

      "bd.eyebrow": "Built for Focus in Bangladesh",
      "bd.title": "Practical Focus Support for Students & Professionals in Bangladesh",
      "bd.lead": "Designed with real study and digital work workflows in Bangladesh in mind.",
      "bd.p1": "Across Bangladesh, students and professionals rely on Android smartphones for online classes, lecture PDFs, and communication—yet social feeds and short-form video apps sit on the same home screen.",
      "bd.p2": "Whether you are looking for a study focus app, a productivity app for students, or a focus app for Android in Bangladesh (পড়াশোনার ফোকাস অ্যাপ, মনোযোগ বাড়ানোর অ্যাপ, মোবাইলের বিভ্রান্তি নিয়ন্ত্রণ, এবং শিক্ষার্থীদের প্রোডাক্টিভিটি অ্যাপ), DeepFocus keeps essential study tools accessible while limiting distracting apps during active sessions.",
      "bd.item1Title": "Study & Admission Preparation",
      "bd.item1Desc": "Keep educational and utility apps in Quick Access while locking distracting apps during study blocks.",
      "bd.item2Title": "Essential Connectivity Preserved",
      "bd.item2Desc": "Wi-Fi and mobile data quick toggles remain accessible even when Strict Settings Blocker is active.",
      "bd.item3Title": "Lightweight Interface",
      "bd.item3Desc": "A distraction-free layout without heavy feeds or unnecessary visual clutter on everyday Android devices.",

      "compat.eyebrow": "Compatibility & Requirements",
      "compat.title": "System Support, Permissions & Items Requiring Confirmation",
      "compat.lead": "Verified facts are separated clearly from specifications that the product owner must confirm prior to final launch.",
      "compat.row1Key": "Platform",
      "compat.row1Val": "Android (verified from official app screenshots and project documentation).",
      "compat.row2Key": "Supported Android Versions",
      "compat.row2Val": "Requires confirmation from the developer (exact minimum and target Android OS versions should be verified on the SupportKori listing).",
      "compat.row3Key": "Required Permissions",
      "compat.row3Val": "Default Home Launcher configuration is shown in Screen 04. Exact special permissions (such as Usage Access, Display Over Other Apps, or Accessibility Service) require developer confirmation before publication.",
      "compat.row4Key": "Battery Optimization",
      "compat.row4Val": "Some Android OEMs may require disabling aggressive battery restrictions to keep timers reliable; device-specific setup guidance requires developer confirmation.",
      "compat.row5Key": "Known Limitations",
      "compat.row5Val": "Operates within standard Android framework security policies. Behavior may vary by device manufacturer, and uninterrupted lock across all bypass paths is not guaranteed.",

      "privacy.eyebrow": "Privacy & Trust",
      "privacy.title": "Transparent Privacy Summary",
      "privacy.lead": "We avoid unverified claims like '100% secure' or 'zero data collection' unless technically audited and confirmed.",
      "privacy.c1Title": "Local Storage & Offline Use",
      "privacy.c1Desc": "Habit entries and focus session logs appear stored on-device; exact local storage, encryption, and offline behavior must be verified by the developer before launch.",
      "privacy.c2Title": "Network & Third-Party Services",
      "privacy.c2Desc": "Whether the app makes any network requests, analytics calls, or uses third-party SDKs requires final developer confirmation in the published Privacy Policy.",
      "privacy.c3Title": "Permission Boundaries",
      "privacy.c3Desc": "Permissions requested by the app should correspond strictly to launcher replacement, app blocking, and Strict Settings Blocker functionality.",
      "privacy.c4Title": "No Independent Security Audit Claim",
      "privacy.c4Desc": "This landing website provides product information and a clearly labeled draft privacy policy for review—not an independent security certification.",
      "privacy.linkBtn": "Read Draft Privacy Policy",

      "faq.eyebrow": "Frequently Asked Questions",
      "faq.title": "Clear, Honest Answers Before You Start",
      "faq.lead": "Direct answers based on verified app information. Items still awaiting product-owner confirmation are clearly marked.",
      "faq.allLink": "View full 12-question FAQ page",

      "faq.q1": "What is DeepFocus?",
      "faq.a1": "DeepFocus is an Android productivity and focus app developed by Muhammed Omor. It combines a minimalist home launcher, Custom Focus Lock timer, Allowed Apps whitelist, Habit Tracker, and Focus Statistics.",
      "faq.q2": "Who should use DeepFocus?",
      "faq.a2": "It is intended for students in Bangladesh, university admission and job exam candidates, university students, professionals needing deep-work blocks, and anyone working to build healthier smartphone habits.",
      "faq.q3": "Is DeepFocus available for Android?",
      "faq.a3": "Yes. DeepFocus is built for Android devices and is distributed via its official SupportKori product page.",
      "faq.q4": "How does Focus Lock work?",
      "faq.a4": "When you start a Focus Lock session, the app locks in-app launcher exit and app-switching controls until the countdown timer finishes, operating within standard Android framework security policies.",
      "faq.q5": "Can I use selected apps during a focus session?",
      "faq.a5": "Yes. As shown in the Custom Focus Lock screen, you can keep selected essential apps usable via Allowed Apps During Focus while other apps remain locked.",
      "faq.q6": "Which Android versions are supported?",
      "faq.a6": "[Requires confirmation from the product owner before launch] Exact minimum and maximum supported Android OS versions are not yet specified here. Please check the official SupportKori listing or confirm with the developer.",
      "faq.q7": "What permissions does the application require?",
      "faq.a7": "The Settings screen confirms default Home Launcher setup. Any additional special Android permissions (such as Usage Access, Overlay, or Accessibility) must be confirmed by the product owner before publication.",
      "faq.q8": "How do I purchase DeepFocus?",
      "faq.a8": "Click 'Get DeepFocus on SupportKori' or 'Buy Now' to open the official SupportKori product page, where current pricing, access terms, and checkout options are listed.",
      "faq.q9": "How do I install the application?",
      "faq.a9": "[Requires confirmation from the product owner before launch] Complete the official SupportKori acquisition process and follow the developer's provided download and Android installation instructions.",
      "faq.q10": "What should I do if a feature does not work?",
      "faq.a10": "Check Launcher Configuration and View Android Limitations inside the app's Settings tab, and verify that required permissions are granted. [Official troubleshooting steps require product-owner confirmation.]",
      "faq.q11": "How can I contact the developer?",
      "faq.a11": "[Requires confirmation from the product owner before launch] Please use the official Contact Seller option on the SupportKori listing. No unverified email address or phone number is published here.",
      "faq.q12": "Where can I find the privacy policy?",
      "faq.a12": "You can review the clearly labeled draft Privacy Policy on this site's Privacy page (privacy.html). It must be checked against the final application build by the product owner prior to launch.",

      "cta.eyebrow": "Ready When You Are",
      "cta.title": "Make Your Next Focus Session Count.",
      "cta.desc": "Explore the screenshots, review Android compatibility, and visit the official SupportKori listing to get DeepFocus.",
      "cta.button": "Visit Official SupportKori Page",

      "footer.desc": "An Android productivity and focus app by Muhammed Omor, designed to support structured focus sessions and calmer digital habits.",
      "footer.navHeading": "Site Navigation",
      "footer.infoHeading": "Resources",
      "footer.dev": "Developed by Muhammed Omor",
      "footer.rights": "All rights reserved.",

      "modal.close": "Close",
      "modal.prev": "Previous",
      "modal.next": "Next",

      "featuresPage.title": "DeepFocus Features & Android Architecture",
      "featuresPage.lead": "Detailed walkthrough of every screen and capability verified in DeepFocus, along with honest technical boundaries within Android.",

      "privacyPage.title": "Privacy Summary & Pre-Launch Draft Policy",
      "privacyPage.lead": "Important transparency notice: this draft policy must be reviewed and confirmed against the final DeepFocus Android application build by Muhammed Omor before publication.",
      "privacyPage.noticeTitle": "Draft Status Notice:",
      "privacyPage.noticeBody": "The developer of this landing website has not performed an independent security audit or static/dynamic code inspection of the DeepFocus Android APK. Any statement below marked for confirmation must be verified by the product owner (Muhammed Omor) before final release.",
      "privacyPage.h1": "1. This Landing Website (Static Site)",
      "privacyPage.p1": "This landing website is a static HTML, CSS, and JavaScript site. It does not include user accounts, login forms, contact forms, payment processing forms, or default third-party tracking scripts. The only browser storage used is an optional localStorage entry (deepfocus_lang) to remember whether you selected English or Bangla.",
      "privacyPage.h2": "2. External Purchase Destination (SupportKori)",
      "privacyPage.p2": "When you click any purchase or \"Get DeepFocus\" button, you leave this website and visit the official SupportKori listing operated by SupportKori. Any account login, checkout, or payment details entered there are governed by SupportKori's own terms and privacy policy.",
      "privacyPage.h3": "3. DeepFocus Android App — Data Collection & Local Storage",
      "privacyPage.p3": "[Requires product-owner verification] Based on the visible app screens (Habit Tracker, Focus Statistics, Allowed Apps, and Settings), session history and habit records appear to be stored locally on the user's device. Before publishing this policy as final, the developer should confirm:",
      "privacyPage.li1": "Whether any personal data, telemetry, or crash reports are transmitted over the network.",
      "privacyPage.li2": "Whether local data is encrypted or included in Android cloud auto-backup.",
      "privacyPage.li3": "Whether any third-party analytics, ads, or licensing SDKs are bundled in the APK.",
      "privacyPage.h4": "4. Android Permissions Transparency",
      "privacyPage.p4": "[Requires product-owner verification] Screen 04 confirms that DeepFocus uses default Home Launcher configuration. Before launch, list every sensitive Android permission declared in AndroidManifest.xml (for example: PACKAGE_USAGE_STATS, SYSTEM_ALERT_WINDOW, BIND_ACCESSIBILITY_SERVICE, or QUERY_ALL_PACKAGES) and explain strictly why each permission is needed.",
      "privacyPage.h5": "5. Contact for Privacy Questions",
      "privacyPage.p5": "[Requires product-owner confirmation] Add the official developer support email address here prior to launch. Until then, visitors may use the official Contact Seller option on the SupportKori listing.",

      "notfound.title": "This page could not be found.",
      "notfound.desc": "The link may be outdated or the address may have been typed incorrectly. Use the links below to return to DeepFocus.",
      "notfound.homeBtn": "Return to Home"
    }
  };

  var SCREENSHOTS = [
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-1.png",
      titleKey: "screens.s1Title",
      descKey: "screens.s1Desc"
    },
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-2.png",
      titleKey: "screens.s2Title",
      descKey: "screens.s2Desc"
    },
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-3.png",
      titleKey: "screens.s3Title",
      descKey: "screens.s3Desc"
    },
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-4.png",
      titleKey: "screens.s4Title",
      descKey: "screens.s4Desc"
    }
  ];

  var currentLang = "en";
  var activeSlideIndex = 0;
  var lastTriggerEl = null;

  function getInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var urlLang = params.get("lang");
      if (urlLang === "bn" || urlLang === "en") {
        return urlLang;
      }
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "bn" || stored === "en") {
        return stored;
      }
    } catch (e) {
      // Ignore storage errors in restricted environments
    }
    return "en";
  }

  function applyLanguage(lang) {
    currentLang = lang === "bn" ? "bn" : "en";
    var dict = TRANSLATIONS[currentLang];
    document.documentElement.lang = currentLang;

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var key = el.getAttribute("data-i18n");
      if (key && Object.prototype.hasOwnProperty.call(dict, key)) {
        el.textContent = dict[key];
      }
    }

    var langButtons = document.querySelectorAll("[data-lang-switch]");
    for (var j = 0; j < langButtons.length; j++) {
      var btn = langButtons[j];
      var btnLang = btn.getAttribute("data-lang-switch");
      btn.setAttribute("aria-pressed", btnLang === currentLang ? "true" : "false");
    }

    var menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
      var isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute(
        "aria-label",
        isExpanded ? dict["nav.menuClose"] : dict["nav.menuOpen"]
      );
    }

    try {
      localStorage.setItem(STORAGE_KEY, currentLang);
    } catch (e) {
      // Ignore storage errors
    }
  }

  function initLanguageSwitcher() {
    var langButtons = document.querySelectorAll("[data-lang-switch]");
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener("click", function () {
        var target = this.getAttribute("data-lang-switch");
        if (target === "en" || target === "bn") {
          applyLanguage(target);
        }
      });
    }
    applyLanguage(getInitialLang());
  }

  function initMobileMenu() {
    var toggle = document.getElementById("menu-toggle");
    var drawer = document.getElementById("mobile-menu");
    if (!toggle || !drawer) return;

    function setOpen(open) {
      var dict = TRANSLATIONS[currentLang];
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        open ? dict["nav.menuClose"] : dict["nav.menuOpen"]
      );
      if (open) {
        drawer.removeAttribute("hidden");
      } else {
        drawer.setAttribute("hidden", "");
      }
    }

    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    var links = drawer.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        setOpen(false);
      });
    }

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false);
        toggle.focus();
      }
    });
  }

  function initFaqAccordion() {
    var buttons = document.querySelectorAll(".faq-question");
    if (!buttons.length) return;

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        var expanded = this.getAttribute("aria-expanded") === "true";
        var panelId = this.getAttribute("aria-controls");
        var panel = panelId ? document.getElementById(panelId) : null;
        this.setAttribute("aria-expanded", expanded ? "false" : "true");
        if (panel) {
          if (expanded) {
            panel.setAttribute("hidden", "");
          } else {
            panel.removeAttribute("hidden");
          }
        }
      });
    }
  }

  function initLightbox() {
    var modal = document.getElementById("screenshot-lightbox");
    if (!modal) return;

    var imgEl = document.getElementById("lightbox-img");
    var titleEl = document.getElementById("lightbox-title");
    var captionEl = document.getElementById("lightbox-caption");
    var closeBtn = document.getElementById("lightbox-close");
    var prevBtn = document.getElementById("lightbox-prev");
    var nextBtn = document.getElementById("lightbox-next");

    function renderSlide(index) {
      activeSlideIndex = (index + SCREENSHOTS.length) % SCREENSHOTS.length;
      var item = SCREENSHOTS[activeSlideIndex];
      var dict = TRANSLATIONS[currentLang];
      if (imgEl) {
        imgEl.src = item.src;
        imgEl.alt = dict[item.titleKey] + " — " + dict[item.descKey];
      }
      if (titleEl) titleEl.textContent = dict[item.titleKey];
      if (captionEl) captionEl.textContent = dict[item.descKey];
    }

    function openModal(index, trigger) {
      lastTriggerEl = trigger || document.activeElement;
      renderSlide(index);
      modal.removeAttribute("hidden");
      document.body.style.overflow = "hidden";
      if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
      modal.setAttribute("hidden", "");
      document.body.style.overflow = "";
      if (lastTriggerEl && typeof lastTriggerEl.focus === "function") {
        lastTriggerEl.focus();
      }
    }

    var triggers = document.querySelectorAll("[data-lightbox-index]");
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener("click", function () {
        var idx = parseInt(this.getAttribute("data-lightbox-index") || "0", 10);
        openModal(isNaN(idx) ? 0 : idx, this);
      });
    }

    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        renderSlide(activeSlideIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        renderSlide(activeSlideIndex + 1);
      });
    }

    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (modal.hasAttribute("hidden")) return;
      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        renderSlide(activeSlideIndex - 1);
      } else if (e.key === "ArrowRight") {
        renderSlide(activeSlideIndex + 1);
      }
    });
  }

  function setCopyrightYear() {
    var yearEl = document.getElementById("current-year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    setCopyrightYear();
    initLanguageSwitcher();
    initMobileMenu();
    initFaqAccordion();
    initLightbox();
  });
})();
