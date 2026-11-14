/* ==========================================================================
   DeepFocus — Official Static Site Interactions & Bilingual Switcher
   Default language: Bangla (bn), Secondary language: English (en)
   Zero external dependencies
   ========================================================================== */

(function () {
  "use strict";

  var STORAGE_KEY = "deepfocus_lang";

  var TRANSLATIONS = {
    bn: {
      "page.homeTitle": "DeepFocus – মনোযোগ ও পড়াশোনার ফোকাস Android অ্যাপ | বাংলাদেশ",
      "page.homeDesc": "DeepFocus হলো মুহাম্মদ ওমরের তৈরি একটি Android প্রোডাক্টিভিটি অ্যাপ, যা ফোকাস সেশন পরিচালনা, পড়াশোনার অভ্যাস গড়ে তোলা এবং ডিজিটাল বিভ্রান্তি নিয়ন্ত্রণে সহায়তা করে।",
      "page.featuresTitle": "DeepFocus ফিচার – Focus Lock, হ্যাবিট ট্র্যাকার ও লঞ্চার সেটিংস",
      "page.featuresDesc": "অফিশিয়াল স্ক্রিনশট অনুযায়ী DeepFocus Android অ্যাপের Focus Lock, সেশন টাইমার, অনুমোদিত অ্যাপ, হ্যাবিট ট্র্যাকার ও সেটিংস গার্ড ফিচার দেখুন।",
      "page.faqTitle": "DeepFocus জিজ্ঞাসা (FAQ) – Focus Lock, Android সাপোর্ট ও সংগ্রহ তথ্য",
      "page.faqDesc": "DeepFocus Android অ্যাপ সম্পর্কে সচরাচর জিজ্ঞাসিত প্রশ্নের সরাসরি ও সৎ উত্তর।",
      "page.privacyTitle": "প্রাইভেসি পলিসি – DeepFocus অ্যাপ ও ওয়েবসাইট",
      "page.privacyDesc": "DeepFocus Android অ্যাপ এবং deepfocus.asf.run ওয়েবসাইটের চূড়ান্ত প্রাইভেসি পলিসি ও ডাটা সুরক্ষা তথ্য।",
      "page.termsTitle": "শর্তাবলি (Terms & Conditions) – DeepFocus",
      "page.termsDesc": "DeepFocus Android অ্যাপ ও deepfocus.asf.run ওয়েবসাইট ব্যবহারের চূড়ান্ত শর্তাবলি এবং SupportKori ক্রয় সংক্রান্ত নির্দেশিকা।",
      "page.notfoundTitle": "পেজটি খুঁজে পাওয়া যায়নি – DeepFocus",

      "skip.content": "মূল অংশে যান",
      "nav.home": "হোম",
      "nav.features": "ফিচারসমূহ",
      "nav.screenshots": "স্ক্রিনশট",
      "nav.faq": "জিজ্ঞাসা",
      "nav.privacy": "প্রাইভেসি পলিসি",
      "nav.terms": "শর্তাবলি",
      "nav.buy": "কিনুন",
      "nav.primaryLabel": "প্রধান নেভিগেশন",
      "nav.langLabel": "ভাষা পরিবর্তন",
      "nav.breadcrumb": "ব্রেডক্রাম্ব",
      "nav.menuOpen": "নেভিগেশন মেনু খুলুন",
      "nav.menuClose": "নেভিগেশন মেনু বন্ধ করুন",

      "hero.kicker": "Android ফোকাস ও প্রোডাক্টিভিটি অ্যাপ · বাংলাদেশ",
      "hero.title": "মনোযোগ ধরে রাখুন, গড়ে তুলুন ভালো অভ্যাস।",
      "hero.desc": "DeepFocus হলো একটি Android প্রোডাক্টিভিটি অ্যাপ, যা ফোকাস সেশন পরিচালনা, পড়াশোনার অভ্যাস গড়ে তোলা এবং ডিজিটাল বিভ্রান্তি নিয়ন্ত্রণে সহায়তা করার জন্য তৈরি।",
      "hero.ctaPrimary": "DeepFocus কিনুন",
      "hero.ctaSecondary": "ফিচারগুলো দেখুন",
      "hero.metaDev": "ডেভেলপার: Muhammed Omor",
      "hero.metaPlatform": "প্ল্যাটফর্ম: Android",
      "hero.metaChannel": "অফিশিয়াল পেজ: SupportKori",
      "hero.imgAlt": "DeepFocus Android হোম স্ক্রিন: সক্রিয় Focus Lock টাইমার, Today's Focus, Daily Habit Hub, Quick Access অ্যাপ এবং নিচের নেভিগেশন বার",
      "hero.imgAria": "অফিশিয়াল DeepFocus হোম স্ক্রিনশট বড় করে দেখুন",
      "hero.imgCaption": "অফিশিয়াল হোম স্ক্রিন: সক্রিয় Focus Lock, Quick Access অ্যাপ ও Daily Habit Hub। বড় করে দেখতে ট্যাপ করুন।",

      "summary.eyebrow": "সংক্ষিপ্ত পরিচিতি",
      "summary.title": "DeepFocus কী এবং এটি কাদের জন্য তৈরি",
      "summary.lead": "DeepFocus একটি মিনিমালিস্ট Android হোম লঞ্চারের সাথে Custom Focus Lock, দৈনন্দিন হ্যাবিট ট্র্যাকার এবং ফোকাস পরিসংখ্যান যুক্ত করে, যাতে পড়াশোনা ও কাজের সময় ডিজিটাল বিভ্রান্তি কমানো যায়।",
      "summary.defTitle": "অ্যাপের মূল পরিচিতি",
      "summary.defText": "DeepFocus ব্যবহারকারীকে নির্দিষ্ট সময়ের জন্য Focus Lock চালু করতে, সেশন চলাকালীন কেবল প্রয়োজনীয় অনুমোদিত অ্যাপ ব্যবহারযোগ্য রাখতে, প্রতিদিনের অভ্যাস অনুসরণ করতে এবং সম্পন্ন সেশনের ইতিহাস দেখতে সাহায্য করে।",
      "summary.defNote": "দ্রষ্টব্য: নিচে উল্লিখিত শ্রেণির ব্যবহারকারীরা DeepFocus-এর লক্ষ্যভুক্ত ব্যবহারকারী—এগুলো কোনো যাচাইকৃত ব্যবহারকারী সংখ্যা বা রিভিউ পরিসংখ্যান নয়।",
      "summary.aud1Title": "বাংলাদেশের স্কুল ও কলেজের শিক্ষার্থী",
      "summary.aud1Desc": "পড়াশোনার সময়ে সোশ্যাল মিডিয়া বা রিলস-এর কারণে বারবার মনোযোগ ভেঙে যাওয়া কমাতে।",
      "summary.aud2Title": "বিশ্ববিদ্যালয় ভর্তি ও চাকরি পরীক্ষার্থী",
      "summary.aud2Desc": "বিসিএস, ভর্তি পরীক্ষা বা চাকরির প্রস্তুতির জন্য প্রতিদিন নির্দিষ্ট ফোকাস সেশন বজায় রাখতে।",
      "summary.aud3Title": "বিশ্ববিদ্যালয়ের শিক্ষার্থী",
      "summary.aud3Desc": "অ্যাসাইনমেন্ট, রিসার্চ এবং পরীক্ষার প্রস্তুতির সময় ফোন ব্যবহারের শৃঙ্খলা আনতে।",
      "summary.aud4Title": "প্রফেশনাল, ডেভেলপার ও ফ্রিল্যান্সার",
      "summary.aud4Desc": "কাজের নির্দিষ্ট সময়ে মনোযোগী ডিপ-ওয়ার্ক সেশন সম্পন্ন করতে।",
      "summary.aud5Title": "স্বাস্থ্যকর ফোন ব্যবহারের অভ্যাস গড়তে আগ্রহীরা",
      "summary.aud5Desc": "অতিরিক্ত স্ক্রিন স্ক্রলিং কমিয়ে আরও সচেতনভাবে স্মার্টফোন ব্যবহার করতে।",

      "features.eyebrow": "যাচাইকৃত ফিচারসমূহ",
      "features.title": "অফিশিয়াল স্ক্রিনশট অনুযায়ী মূল ফিচার",
      "features.lead": "নিচের প্রতিটি ফিচার DeepFocus-এর চারটি অফিশিয়াল অ্যাপ স্ক্রিনশটে দৃশ্যমান ইন্টারফেস অনুযায়ী উপস্থাপিত।",
      "features.f1Meta": "০১ · ফোকাস লক",
      "features.f1Tag": "Focus Lock",
      "features.f1Title": "Custom Focus Lock",
      "features.f1Desc": "সেশন সক্রিয় থাকাকালীন টাইমার শেষ না হওয়া পর্যন্ত অ্যাপের ভেতর থেকে লঞ্চার বের হওয়া ও অ্যাপ সুইচিং নিয়ন্ত্রণ লক করে রাখে।",
      "features.f1Benefit": "উপকারিতা: পড়াশোনা বা কাজের সময় হঠাৎ অন্য অ্যাপে চলে যাওয়ার প্রবণতা কমাতে সাহায্য করে।",
      "features.f2Meta": "০২ · সেশন টাইমার",
      "features.f2Title": "Focus Session Timer",
      "features.f2Desc": "বৃত্তাকার কাউন্টডাউন টাইমারে অবশিষ্ট সময় এবং সেশন শেষ হওয়ার নির্দিষ্ট সময় স্পষ্টভাবে দেখায়।",
      "features.f2Benefit": "উপকারিতা: সেশনের কত সময় বাকি আছে তা এক নজরে বোঝা যায়।",
      "features.f3Meta": "০৩ · অনুমোদিত অ্যাপ",
      "features.f3Title": "Allowed Apps During Focus",
      "features.f3Desc": "ফোকাস সেশন চলাকালীন কেবল নির্বাচিত প্রয়োজনীয় অ্যাপ (যেমন পড়াশোনা বা কলিং অ্যাপ) ব্যবহারযোগ্য থাকে এবং বাকি অ্যাপ লক থাকে।",
      "features.f3Benefit": "উপকারিতা: জরুরি যোগাযোগ বা দরকারি টুল চালু রেখেই বিভ্রান্তি তৈরি করা অ্যাপ দূরে রাখা যায়।",
      "features.f4Meta": "০৪ · দৈনন্দিন অভ্যাস",
      "features.f4Title": "Habit Tracker (Daily Habit Hub)",
      "features.f4Desc": "হোম স্ক্রিন ও আলাদা Habits ট্যাব থেকে প্রতিদিনের অভ্যাস যোগ করা এবং নিয়মিত রুটিন অনুসরণ করার সুবিধা দেয়।",
      "features.f4Benefit": "উপকারিতা: প্রতিদিনের পড়াশোনা বা কাজের ধারাবাহিকতা ধরে রাখতে সহায়ক।",
      "features.f5Meta": "০৫ · পরিসংখ্যান",
      "features.f5Title": "Focus Statistics ও সেশন ইতিহাস",
      "features.f5Desc": "Stats ট্যাবে Total Focus Time, Sessions Completed, Today's Focus, Focus Status এবং Recent Focus Sessions দেখায়।",
      "features.f5Benefit": "উপকারিতা: নিজের ফোকাস সেশনের অগ্রগতি সহজেই পর্যালোচনা করা যায়।",
      "features.f6Meta": "০৬ · কুইক অ্যাক্সেস",
      "features.f6Title": "মিনিমালিস্ট হোম, Quick Access ও Drawer",
      "features.f6Desc": "হোম স্ক্রিনে পিন করা প্রয়োজনীয় অ্যাপের Quick Access শর্টকাট এবং প্রয়োজনে পূর্ণ অ্যাপ Drawer খোলার সুবিধা থাকে।",
      "features.f6Benefit": "উপকারিতা: অপ্রয়োজনীয় আইকনের ভিড় কমিয়ে হোম স্ক্রিন পরিচ্ছন্ন রাখে।",
      "features.f7Meta": "০৭ · লঞ্চার সেটিংস",
      "features.f7Title": "Launcher Configuration",
      "features.f7Desc": "Settings থেকে ডিফল্ট হোম অ্যাপের অবস্থা দেখা এবং সক্রিয় ফোকাস লক না থাকলে Switch to Old Launcher বাটনে আগের লঞ্চারে ফিরে যাওয়ার সুযোগ দেয়।",
      "features.f7Benefit": "উপকারিতা: ব্যবহারকারী নিজের ইচ্ছামতো সাধারণ লঞ্চারে ফিরে যেতে পারেন।",
      "features.f8Meta": "০৮ · সিস্টেম গার্ড",
      "features.f8Title": "Strict Settings Blocker ও Android Architecture",
      "features.f8Desc": "সক্রিয় ফোকাস চলাকালীন স্ট্যাটাস বার থেকে ডিভাইস Settings খোলা সীমিত করে, তবে Wi-Fi ও মোবাইল ডেটার কুইক টগল ব্যবহারযোগ্য রাখে। পাশাপাশি অ্যাপেই View Android Limitations অংশ রয়েছে।",
      "features.f8Benefit": "উপকারিতা: সংযোগ চালু রেখেই সেশন চলাকালীন সেটিংসে শর্টকাট পরিবর্তন কমাতে সাহায্য করে।",
      "features.limitTitle": "কারিগরি সীমাবদ্ধতা ও বাস্তব তথ্য",
      "features.limitText": "অ্যান্ড্রয়েডের স্ট্যান্ডার্ড ফ্রেমওয়ার্ক ও সিকিউরিটি নীতিমালার ভেতরেই DeepFocus কাজ করে। ডিভাইস নির্মাতা ও Android সংস্করণভেদে সিস্টেমের আচরণ ভিন্ন হতে পারে—তাই এটি সব সম্ভাব্য বাইপাস শতভাগ আটকাবে, সব ডিভাইসে রিস্টার্টের পর লক ধরে রাখবে বা প্রতিটি সিস্টেম সেটিংস ব্লক করবে এমন দাবি করা হয় না।",

      "screens.eyebrow": "অফিশিয়াল স্ক্রিনশট",
      "screens.title": "DeepFocus অ্যাপের আসল ইন্টারফেস দেখুন",
      "screens.lead": "চারটি অফিশিয়াল স্ক্রিনশটই মূল অনুপাত বজায় রেখে যুক্ত করা হয়েছে। বড় করে দেখতে যেকোনো স্ক্রিনশটে ট্যাপ করুন।",
      "screens.s1Num": "স্ক্রিন ০১ · Home",
      "screens.s1Title": "হোম স্ক্রিন ও Quick Access",
      "screens.s1Desc": "ঘড়ি ও তারিখ, সক্রিয় Focus Lock কার্ড, Today's Focus, Daily Habit Hub, Quick Access অ্যাপ শর্টকাট এবং Drawer বাটন প্রদর্শন করে।",
      "screens.s1Alt": "DeepFocus হোম স্ক্রিনশট: ঘড়ি, সক্রিয় Focus Lock, Today's Focus, Daily Habit Hub ও Quick Access অ্যাপ",
      "screens.s1Aria": "স্ক্রিন ০১ বড় করে দেখুন: হোম স্ক্রিন ও Quick Access",
      "screens.s2Num": "স্ক্রিন ০২ · Focus Lock",
      "screens.s2Title": "Custom Focus Lock স্ক্রিন",
      "screens.s2Desc": "Deep Work বৃত্তাকার কাউন্টডাউন টাইমার, সেশন শেষ হওয়ার সময়, Allowed Apps During Focus সংখ্যা এবং সক্রিয় লক অবস্থা দেখায়।",
      "screens.s2Alt": "DeepFocus Custom Focus Lock স্ক্রিনশট: বৃত্তাকার টাইমার ও Allowed Apps During Focus",
      "screens.s2Aria": "স্ক্রিন ০২ বড় করে দেখুন: Custom Focus Lock",
      "screens.s3Num": "স্ক্রিন ০৩ · Habits ও Stats",
      "screens.s3Title": "Habit Tracker ও Focus Statistics",
      "screens.s3Desc": "পাশাপাশি দুটি স্ক্রিন: দৈনন্দিন অভ্যাস যোগ করার Habit Tracker এবং Total Focus Time, Sessions Completed ও Recent Focus Sessions দেখানোর Focus Statistics।",
      "screens.s3Alt": "DeepFocus Habit Tracker এবং Focus Statistics স্ক্রিনশট",
      "screens.s3Aria": "স্ক্রিন ০৩ বড় করে দেখুন: Habit Tracker ও Focus Statistics",
      "screens.s4Num": "স্ক্রিন ০৪ · Settings",
      "screens.s4Title": "Settings ও Android Platform Architecture",
      "screens.s4Desc": "Launcher Configuration (Switch to Old Launcher), Strict Settings Blocker, Android Platform Architecture (View Android Limitations) এবং About DeepFocus।",
      "screens.s4Alt": "DeepFocus Settings স্ক্রিনশট: Launcher Configuration, Strict Settings Blocker ও Android Limitations",
      "screens.s4Aria": "স্ক্রিন ০৪ বড় করে দেখুন: Settings ও Android Architecture",
      "screens.enlarge": "বড় করে দেখুন",

      "how.eyebrow": "কীভাবে শুরু করবেন",
      "how.title": "চারটি ধাপে জানুন ও সংগ্রহ করুন",
      "how.lead": "অফিশিয়াল SupportKori পেজে যাওয়ার আগে অ্যাপের কার্যকারিতা ও নিয়মগুলো দেখে নিন।",
      "how.st1Num": "ধাপ ০১",
      "how.st1Title": "ফিচারগুলো বুঝে নিন",
      "how.st1Desc": "হোম লঞ্চার, Focus Lock টাইমার, অনুমোদিত অ্যাপ তালিকা, Habit Tracker ও Stats কীভাবে কাজ করে তা দেখে নিন।",
      "how.st2Num": "ধাপ ০২",
      "how.st2Title": "সামঞ্জস্যতা যাচাই করুন",
      "how.st2Desc": "আপনার Android ফোনের অনুমতি, লঞ্চার সেটিংস ও প্ল্যাটফর্ম সীমাবদ্ধতা সম্পর্কে পরিষ্কার ধারণা নিন।",
      "how.st3Num": "ধাপ ০৩",
      "how.st3Title": "SupportKori পেজে যান",
      "how.st3Desc": "অফিশিয়াল SupportKori প্রোডাক্ট পেজে গিয়ে বর্তমান অ্যাক্সেস, মূল্য ও শর্তাবলি সরাসরি দেখে নিন।",
      "how.st4Num": "ধাপ ০৪",
      "how.st4Title": "অফিশিয়াল নির্দেশনা অনুসরণ করুন",
      "how.st4Desc": "SupportKori পেজে ডেভেলপারের দেওয়া সংগ্রহ ও Android ইনস্টলেশন নির্দেশনা অনুসরণ করে সেটআপ করুন।",

      "bd.eyebrow": "বাংলাদেশের প্রেক্ষাপট",
      "bd.title": "বাংলাদেশে পড়াশোনা ও কাজের জন্য উপযোগী ফোকাস সমাধান",
      "bd.lead": "বাংলাদেশের শিক্ষার্থী, পরীক্ষার্থী ও কর্মজীবীদের বাস্তব মোবাইল ব্যবহারের অভিজ্ঞতা বিবেচনায় তৈরি।",
      "bd.p1": "বাংলাদেশে অনেকেই এখন অনলাইন ক্লাস, লেকচার নোট বা জরুরি কাজের জন্য Android স্মার্টফোন ব্যবহার করেন, কিন্তু একই ডিভাইসে থাকা সোশ্যাল মিডিয়া ও শর্ট ভিডিও বারবার মনোযোগ ভেঙে দেয়।",
      "bd.p2": "শিক্ষার্থীদের প্রোডাক্টিভিটি অ্যাপ ও পড়াশোনার ফোকাস অ্যাপ হিসেবে DeepFocus মোবাইলের বিভ্রান্তি নিয়ন্ত্রণ করতে এবং প্রয়োজনীয় স্টাডি বা যোগাযোগ অ্যাপগুলো চালু রেখে অপ্রয়োজনীয় অ্যাপ সীমিত করতে সহায়তা করে।",
      "bd.item1Title": "পড়াশোনা ও পরীক্ষার প্রস্তুতি",
      "bd.item1Desc": "স্কুল-কলেজ, বিশ্ববিদ্যালয় ভর্তি বা চাকরির প্রস্তুতিতে নির্ধারিত সময় ধরে ফোকাস সেশন চালানোর জন্য মনোযোগ বাড়ানোর অ্যাপ হিসেবে উপযোগী।",
      "bd.item2Title": "জরুরি সংযোগ ও অ্যাপ চালু রাখার সুবিধা",
      "bd.item2Desc": "Allowed Apps তালিকায় প্রয়োজনীয় অ্যাপ রাখা যায় এবং Strict Settings Blocker চালু থাকলেও Wi-Fi ও মোবাইল ডেটা টগল সচল থাকে।",
      "bd.item3Title": "পরিচ্ছন্ন ও মিনিমালিস্ট ব্যবহার",
      "bd.item3Desc": "রঙিন ফিডের ভিড় ছাড়াই সহজ ইন্টারফেস হওয়ায় সাধারণ Android ফোনেও ব্যবহার করা সহজ।",

      "compat.eyebrow": "সামঞ্জস্যতা ও প্রয়োজনীয়তা",
      "compat.title": "Android সাপোর্ট, অনুমতি ও কারিগরি তথ্য",
      "compat.lead": "যে তথ্যগুলো স্ক্রিনশট থেকে যাচাইকৃত এবং যেগুলো ডেভেলপারের চূড়ান্ত নিশ্চয়তার ওপর নির্ভরশীল—উভয়ই এখানে স্পষ্ট রাখা হয়েছে।",
      "compat.row1Key": "প্ল্যাটফর্ম",
      "compat.row1Val": "Android (অফিশিয়াল স্ক্রিনশট ও SupportKori লিস্টিং অনুযায়ী)।",
      "compat.row2Key": "সাপোর্টেড Android ভার্সন",
      "compat.row2Val": "সঠিক নূন্যতম ও সর্বোচ্চ Android OS ভার্সন SupportKori পেজ বা ডেভেলপারের মাধ্যমে নিশ্চিত করে নিতে হবে।",
      "compat.row3Key": "প্রয়োজনীয় অনুমতি (Permissions)",
      "compat.row3Val": "স্ক্রিনশট ০৪ অনুযায়ী ডিফল্ট হোম লঞ্চার সেটআপ প্রয়োজন। Usage Access, Overlay বা Accessibility-এর মতো বিশেষ অনুমতি লাগলে সেগুলো অ্যাপের ইনস্টলেশন গাইড অনুযায়ী প্রদান করতে হয়।",
      "compat.row4Key": "ব্যাটারি অপটিমাইজেশন",
      "compat.row4Val": "ব্যাকগ্রাউন্ড টাইমার সচল রাখতে কিছু Android ব্র্যান্ডে (যেমন Xiaomi, Realme, Samsung, Tecno) ব্যাটারি অপটিমাইজেশন সমন্বয়ের প্রয়োজন হতে পারে।",
      "compat.row5Key": "জানা সীমাবদ্ধতা",
      "compat.row5Val": "স্ট্যান্ডার্ড Android সিকিউরিটি পলিসির ভেতরে কাজ করে। ডিভাইসভেদে আচরণ ভিন্ন হতে পারে এবং শতভাগ অপরিহার্য বাইপাস-প্রতিরোধের নিশ্চয়তা দেওয়া হয় না।",

      "privacy.eyebrow": "প্রাইভেসি ও শর্তাবলি",
      "privacy.title": "তথ্য সুরক্ষা, প্রাইভেসি পলিসি ও ব্যবহারের শর্তাবলি",
      "privacy.lead": "SupportKori-তে প্রকাশিত অফিশিয়াল অ্যাপ তথ্য এবং এই ওয়েবসাইটের প্রকৃত স্ট্যাটিক কাঠামোর ওপর ভিত্তি করে প্রস্তুত।",
      "privacy.c1Title": "অফলাইন ব্যবহার ও লোকাল ডাটা",
      "privacy.c1Desc": "SupportKori লিস্টিং অনুযায়ী DeepFocus অফলাইনে কাজ করে এবং হ্যাবিট ট্র্যাকার ও ফোকাস হিস্ট্রির তথ্য ব্যবহারকারীর নিজের ডিভাইসেই এনক্রিপ্টেড লোকাল ডাটাবেসে সংরক্ষিত থাকে।",
      "privacy.c2Title": "কোনো অ্যাকাউন্ট, ট্র্যাকার বা বিজ্ঞাপন নয়",
      "privacy.c2Desc": "অ্যাপের ভেতরে আলাদা অ্যাকাউন্ট খুলতে হয় না, কোনো বিজ্ঞাপন বা ট্র্যাকার নেই এবং ব্যক্তিগত তথ্য কোনো ক্লাউড সার্ভারে পাঠানো হয় না বলে SupportKori পেজে উল্লেখ রয়েছে।",
      "privacy.c3Title": "এই ওয়েবসাইটের স্ট্যাটিক আচরণ",
      "privacy.c3Desc": "deepfocus.asf.run একটি স্ট্যাটিক ওয়েবসাইট। এতে কোনো ফর্ম, লগইন বা ট্র্যাকিং নেই—শুধু ভাষা পছন্দ মনে রাখতে localStorage (deepfocus_lang) ব্যবহৃত হয়।",
      "privacy.c4Title": "SupportKori চেকআউট ও শর্তাবলি",
      "privacy.c4Desc": "অ্যাপ সংগ্রহের লেনদেন SupportKori প্ল্যাটফর্মে সম্পন্ন হয়, যেখানে SupportKori-এর নিজস্ব Terms, Privacy এবং Refund Policy প্রযোজ্য।",
      "privacy.linkBtn": "পূর্ণাঙ্গ প্রাইভেসি পলিসি পড়ুন",
      "privacy.termsBtn": "শর্তাবলি (Terms & Conditions) পড়ুন",

      "faq.eyebrow": "সচরাচর জিজ্ঞাসা (FAQ)",
      "faq.title": "গুরুত্বপূর্ণ প্রশ্ন ও সরাসরি উত্তর",
      "faq.lead": "অ্যাপ ব্যবহার, অনুমতি, সংগ্রহ প্রক্রিয়া এবং সীমাবদ্ধতা নিয়ে সাধারণ প্রশ্নের উত্তর।",
      "faq.allLink": "সব ১২টি প্রশ্ন ও উত্তর দেখুন",

      "faq.q1": "DeepFocus কী?",
      "faq.a1": "DeepFocus হলো মুহাম্মদ ওমরের তৈরি একটি Android প্রোডাক্টিভিটি এবং ফোকাস অ্যাপ। এটি একটি মিনিমালিস্ট হোম লঞ্চার, Custom Focus Lock টাইমার, Allowed Apps তালিকা, Habit Tracker এবং Focus Statistics-কে একত্রিত করে।",
      "faq.q2": "কাদের জন্য DeepFocus তৈরি করা হয়েছে?",
      "faq.a2": "বাংলাদেশের স্কুল-কলেজ ও বিশ্ববিদ্যালয়ের শিক্ষার্থী, ভর্তি ও বিসিএস/চাকরি পরীক্ষার্থী, ফ্রিল্যান্সার, ডেভেলপার এবং যারা মোবাইলের অপ্রয়োজনীয় ব্যবহার কমিয়ে মনোযোগী অভ্যাস গড়তে চান—তাদের জন্য এটি তৈরি।",
      "faq.q3": "DeepFocus কি Android ফোনে ব্যবহার করা যায়?",
      "faq.a3": "হ্যাঁ, DeepFocus Android ডিভাইসের জন্য তৈরি এবং এর অফিশিয়াল SupportKori প্রোডাক্ট পেজের মাধ্যমে এটি সংগ্রহ করা যায়।",
      "faq.q4": "Focus Lock কীভাবে কাজ করে?",
      "faq.a4": "Focus Lock চালু করলে নির্ধারিত কাউন্টডাউন টাইমার শেষ না হওয়া পর্যন্ত অ্যাপের ভেতর থেকে লঞ্চার বের হওয়া ও অপ্রয়োজনীয় অ্যাপ সুইচিং নিয়ন্ত্রণ লক থাকে। তবে এটি Android সিস্টেমের স্ট্যান্ডার্ড ফ্রেমওয়ার্ক নীতিমালার অধীনে কাজ করে।",
      "faq.q5": "ফোকাস সেশন চলাকালীন জরুরি অ্যাপ কি ব্যবহার করা যাবে?",
      "faq.a5": "হ্যাঁ। Allowed Apps During Focus ফিচারের মাধ্যমে সেশন শুরু করার আগেই আপনি জরুরি অ্যাপ (যেমন Phone, Messages, Maps বা পড়াশোনার অ্যাপ) নির্বাচন করে চালু রাখতে পারবেন।",
      "faq.q6": "কোন কোন Android ভার্সনে অ্যাপটি সাপোর্ট করে?",
      "faq.a6": "সুনির্দিষ্ট নূন্যতম ও সর্বোচ্চ Android OS ভার্সনের তথ্য এই ওয়েবসাইটে নির্দিষ্ট করে দেওয়া হয়নি; সংগ্রহের আগে SupportKori প্রোডাক্ট পেজ বা ডেভেলপারের সাথে নিশ্চিত হয়ে নিন।",
      "faq.q7": "অ্যাপটির কী কী অনুমতি (Permissions) প্রয়োজন?",
      "faq.a7": "স্ক্রিনশট ০৪ অনুযায়ী অ্যাপটি ডিফল্ট হোম লঞ্চার হিসেবে কনফিগার করতে হয়। ফোকাস লক ও স্ট্রিক্ট সেটিংস ব্লকারের জন্য অতিরিক্ত কোনো বিশেষ অনুমতির প্রয়োজন হলে তা অ্যাপ সেটআপের সময় প্রদর্শিত নির্দেশনা অনুযায়ী দিতে হয়।",
      "faq.q8": "আমি কীভাবে DeepFocus কিনব বা সংগ্রহ করব?",
      "faq.a8": "এই ওয়েবসাইটের 'DeepFocus কিনুন' বা 'কিনুন' বাটনে ক্লিক করে অফিশিয়াল SupportKori পেজে যান এবং সেখানে দেওয়া বর্তমান মূল্য ও অ্যাক্সেস প্রক্রিয়া অনুসরণ করুন।",
      "faq.q9": "আমি কীভাবে অ্যাপটি ইনস্টল করব?",
      "faq.a9": "SupportKori-তে সংগ্রহ সম্পন্ন করার পর আপনার SupportKori লাইব্রেরি বা ডাউনলোড অংশে দেওয়া অফিশিয়াল ফাইল ও ডেভেলপারের ইনস্টলেশন নির্দেশনা অনুসরণ করুন।",
      "faq.q10": "কোনো ফিচার কাজ না করলে কী করব?",
      "faq.a10": "প্রথমে অ্যাপের Settings ট্যাব থেকে Launcher Configuration এবং Android Limitations অংশ দেখুন, এবং প্রয়োজনীয় অনুমতি ও ব্যাটারি অপটিমাইজেশন সেটিংস ঠিক আছে কি না যাচাই করুন।",
      "faq.q11": "আমি কীভাবে ডেভেলপারের সাথে যোগাযোগ করব?",
      "faq.a11": "অফিশিয়াল SupportKori প্রোডাক্ট পেজে থাকা 'Contact seller' অপশনের মাধ্যমে ডেভেলপার মুহাম্মদ ওমরের সাথে যোগাযোগ করুন।",
      "faq.q12": "প্রাইভেসি পলিসি ও শর্তাবলি কোথায় পাব?",
      "faq.a12": "এই ওয়েবসাইটের প্রাইভেসি পলিসি (privacy.html) এবং শর্তাবলি (terms.html) পেজে বিস্তারিত তথ্য দেওয়া আছে।",

      "cta.eyebrow": "পরবর্তী পদক্ষেপ",
      "cta.title": "এবার মনোযোগ দিয়ে কাজ শুরু করুন।",
      "cta.desc": "অ্যাপের স্ক্রিনশট ও তথ্য দেখে থাকলে অফিশিয়াল SupportKori প্রোডাক্ট পেজ থেকে DeepFocus সংগ্রহ করুন।",
      "cta.button": "SupportKori থেকে DeepFocus নিন",

      "footer.desc": "মুহাম্মদ ওমরের তৈরি একটি Android প্রোডাক্টিভিটি ও ফোকাস অ্যাপ, যা ফোকাস সেশন পরিচালনা এবং ডিজিটাল বিভ্রান্তি নিয়ন্ত্রণে সহায়তা করে।",
      "footer.navHeading": "নেভিগেশন",
      "footer.infoHeading": "আইনি ও সহায়ক লিংক",
      "footer.dev": "ডেভেলপার: Muhammed Omor",
      "footer.rights": "সর্বস্বত্ব সংরক্ষিত।",

      "modal.close": "বন্ধ করুন",
      "modal.prev": "আগেরটি",
      "modal.next": "পরেরটি",

      "featuresPage.title": "DeepFocus ফিচার ও Android আর্কিটেকচার",
      "featuresPage.lead": "অফিশিয়াল স্ক্রিনশট অনুযায়ী প্রতিটি ফিচার ও Android সিস্টেমের বাস্তব সীমাবদ্ধতার বিস্তারিত বিবরণ।",

      "privacyPage.title": "প্রাইভেসি পলিসি (Privacy Policy)",
      "privacyPage.lead": "কার্যকর তারিখ: ১৪ নভেম্বর ২০২৬ · DeepFocus Android অ্যাপ এবং deepfocus.asf.run ওয়েবসাইটের জন্য চূড়ান্ত প্রাইভেসি পলিসি।",
      "privacyPage.noticeTitle": "স্বচ্ছতা ও তথ্যের উৎস:",
      "privacyPage.noticeBody": "এই প্রাইভেসি পলিসিটি অফিশিয়াল SupportKori প্রোডাক্ট পেজে (supportkori.com/muhammedomor/extras/deepfocus-app-ts3g) প্রকাশিত পণ্যের বিবরণ এবং deepfocus.asf.run স্ট্যাটিক ওয়েবসাইটের প্রকৃত কারিগরি আচরণের ওপর ভিত্তি করে প্রণীত।",
      "privacyPage.h1": "১. DeepFocus Android অ্যাপের ডাটা সংগ্রহ ও অফলাইন কাঠামো",
      "privacyPage.p1": "অফিশিয়াল SupportKori লিস্টিংয়ে প্রকাশিত তথ্য অনুযায়ী DeepFocus অ্যাপটি নিম্নলিখিত নীতিমালায় কাজ করে:",
      "privacyPage.li1": "সম্পূর্ণ অফলাইন পরিচালনা: অ্যাপটি ব্যবহার করতে কোনো অ্যাকাউন্ট তৈরি করতে হয় না এবং এটি কোনো ক্লাউড সার্ভার ব্যবহার করে না।",
      "privacyPage.li2": "লোকাল স্টোরেজ: আপনার হ্যাবিট ট্র্যাকার, দৈনন্দিন রুটিন ও ফোকাস সেশন হিস্ট্রির তথ্য ব্যবহারকারীর নিজস্ব ডিভাইসের এনক্রিপ্টেড লোকাল ডাটাবেসে সংরক্ষিত থাকে এবং কোনো সার্ভারে পাঠানো হয় না।",
      "privacyPage.li3": "কোনো বিজ্ঞাপন বা ট্র্যাকার নেই: অ্যাপটির ভেতরে কোনো বিজ্ঞাপন নেটওয়ার্ক বা ব্যবহারকারী ট্র্যাকার যুক্ত নেই বলে পণ্যের বিবরণে উল্লেখ রয়েছে।",
      "privacyPage.h2": "২. Android ডিভাইস অনুমতি (Permissions)",
      "privacyPage.p2": "অ্যাপের মূল ফাংশন (মিনিমালিস্ট হোম লঞ্চার, Custom Focus Lock, Allowed Apps এবং Strict Settings Blocker) পরিচালনার জন্য ডিফল্ট হোম লঞ্চার সেটআপ এবং প্রাসঙ্গিক Android সিস্টেম অনুমতির প্রয়োজন হতে পারে। এই অনুমতিগুলো শুধুমাত্র ডিভাইসের ভেতরেই অ্যাপ-নিয়ন্ত্রণ ও ফোকাস সুরক্ষার জন্য ব্যবহৃত হয়, কোনো ব্যক্তিগত ফাইল, ছবি বা যোগাযোগের তথ্য সংগ্রহ বা বাইরে পাঠানোর জন্য নয়।",
      "privacyPage.h3": "৩. এই ওয়েবসাইট (deepfocus.asf.run)-এর ডাটা নীতি",
      "privacyPage.p3": "deepfocus.asf.run একটি স্ট্যাটিক ওয়েবসাইট। এই সাইটটি কোনো ব্যবহারকারীর নাম, ইমেইল, ফোন নম্বর, কুকি কনসেন্ট ট্র্যাকার বা বিশ্লেষণমূলক ট্র্যাকিং স্ক্রিপ্ট ব্যবহার করে না। আপনি বাংলা নাকি ইংরেজি ভাষা বেছে নিয়েছেন তা মনে রাখার জন্য শুধুমাত্র আপনার ব্রাউজারের localStorage ('deepfocus_lang') ব্যবহৃত হয়, যা আপনি যেকোনো সময় ব্রাউজার সেটিংস থেকে মুছে ফেলতে পারেন।",
      "privacyPage.h4": "৪. তৃতীয় পক্ষের প্ল্যাটফর্ম (SupportKori)",
      "privacyPage.p4": "আপনি যখন 'DeepFocus কিনুন' বা 'SupportKori থেকে DeepFocus নিন' লিংকে ক্লিক করেন, তখন আপনি SupportKori পরিচালিত বাহ্যিক ওয়েবসাইটে প্রবেশ করেন। সেখানে ইমেইল, Google লগইন, গেস্ট অ্যাক্সেস বা পেমেন্ট সংক্রান্ত যেকোনো তথ্য SupportKori-এর নিজস্ব Privacy Policy এবং Terms-এর অধীনে পরিচালিত হয়।",
      "privacyPage.h5": "৫. নীতিমালা পরিবর্তন ও যোগাযোগ",
      "privacyPage.p5": "অ্যাপের ভবিষ্যৎ আপডেটে নতুন কোনো নেটওয়ার্ক ফিচার যুক্ত হলে এই প্রাইভেসি পলিসি হালনাগাদ করা হবে। প্রাইভেসি সংক্রান্ত যেকোনো প্রশ্নের জন্য অফিশিয়াল SupportKori পেজের 'Contact seller' অপশনের মাধ্যমে ডেভেলপার Muhammed Omor-এর সাথে যোগাযোগ করুন।",

      "termsPage.title": "ব্যবহারের শর্তাবলি (Terms & Conditions)",
      "termsPage.lead": "কার্যকর তারিখ: ১৪ নভেম্বর ২০২৬ · DeepFocus Android অ্যাপ ও deepfocus.asf.run ওয়েবসাইট ব্যবহারের চূড়ান্ত শর্তাবলি।",
      "termsPage.h1": "১. শর্তাবলি গ্রহণ",
      "termsPage.p1": "deepfocus.asf.run ওয়েবসাইট ব্যবহার করার মাধ্যমে অথবা SupportKori থেকে DeepFocus Android অ্যাপ সংগ্রহ ও ইনস্টল করার মাধ্যমে আপনি এই শর্তাবলিতে সম্মতি প্রদান করছেন।",
      "termsPage.h2": "২. লাইসেন্স ও ব্যক্তিগত ব্যবহার",
      "termsPage.p2": "SupportKori পেজে উল্লিখিত 'Lifetime access' বা প্রযোজ্য অ্যাক্সেস শর্তের অধীনে DeepFocus ব্যক্তিগত, অ-বাণিজ্যিক উৎপাদনশীলতা ও ফোকাস সহায়তার জন্য প্রদান করা হয়। ডেভেলপার Muhammed Omor-এর অনুমতি ছাড়া অ্যাপটির ফাইল পুনঃবিতরণ, বিক্রি বা পরিবর্তন করা অনুমোদিত নয়।",
      "termsPage.h3": "৩. SupportKori লেনদেন ও রিফান্ড নীতি",
      "termsPage.p3": "DeepFocus অ্যাপটি SupportKori প্ল্যাটফর্মের মাধ্যমে বিতরণ করা হয়। অ্যাক্সেস, মূল্য (যা বর্তমানে SupportKori লিস্টিংয়ে Free বা প্রযোজ্য মূল্য হিসেবে প্রদর্শিত হতে পারে), পেমেন্ট প্রক্রিয়া এবং রিফান্ড সংক্রান্ত সকল বিষয় SupportKori-এর নিজস্ব Terms, Privacy ও Refund Policy অনুযায়ী পরিচালিত হবে।",
      "termsPage.h4": "৪. Android প্ল্যাটফর্মের সীমাবদ্ধতা ও দায়বদ্ধতা",
      "termsPage.p4": "DeepFocus Android অপারেটিং সিস্টেমের স্ট্যান্ডার্ড ফ্রেমওয়ার্ক ও সিকিউরিটি পলিসির ভেতরে কাজ করে। ডিভাইস মডেল, Android সংস্করণ বা কাস্টম UI-এর কারণে কিছু আচরণ ভিন্ন হতে পারে। ফোকাস সেশন শুরু করার আগে জরুরি কল, মেসেজ বা প্রয়োজনীয় অ্যাপগুলো Allowed Apps তালিকায় যুক্ত রাখার দায়িত্ব ব্যবহারকারীর নিজের। কোনো জরুরি পরিস্থিতিতে ফোন ব্যবহার বা ডিভাইসের সাধারণ ফাংশন ব্যাহত হলে ডেভেলপার ব্যক্তিগতভাবে দায়ী থাকবেন না।",
      "termsPage.h5": "৫. লঞ্চার পরিবর্তন ও নিয়ন্ত্রণ",
      "termsPage.p5": "কোনো ফোকাস সেশন চালু না থাকা অবস্থায় আপনি যেকোনো সময় অ্যাপের Settings থেকে 'Switch to Old Launcher' অথবা ফোনের Settings > Apps > Default Apps থেকে পূর্বের সাধারণ লঞ্চারে ফিরে যেতে পারবেন।",
      "termsPage.h6": "৬. যোগাযোগ",
      "termsPage.p6": "এই শর্তাবলি বা অ্যাপ সংক্রান্ত সহায়তার জন্য SupportKori প্রোডাক্ট পেজের 'Contact seller' অপশনের মাধ্যমে ডেভেলপার Muhammed Omor-এর সাথে যোগাযোগ করুন।",

      "notfound.title": "পেজটি খুঁজে পাওয়া যায়নি।",
      "notfound.desc": "লিংকটি পুরোনো হতে পারে অথবা ঠিকানাটি ভুলভাবে লেখা হয়েছে। DeepFocus-এ ফিরে যেতে নিচের বাটনগুলো ব্যবহার করুন।",
      "notfound.homeBtn": "হোম পেজে ফিরে যান"
    },
    en: {
      "page.homeTitle": "DeepFocus – Focus & Study Productivity App in Bangladesh",
      "page.homeDesc": "Discover DeepFocus, an Android productivity app by Muhammed Omor for managing focus sessions, building study habits, and controlling digital distractions in Bangladesh.",
      "page.featuresTitle": "DeepFocus Features – Focus Lock, Habit Tracker & Launcher Settings",
      "page.featuresDesc": "Explore verified DeepFocus Android capabilities: Custom Focus Lock, countdown timer, Allowed Apps, Daily Habit Tracker, stats, and Strict Settings Blocker.",
      "page.faqTitle": "DeepFocus FAQ – Focus Lock, Android Support & Access",
      "page.faqDesc": "Clear answers to frequently asked questions about DeepFocus for Android in Bangladesh.",
      "page.privacyTitle": "Privacy Policy – DeepFocus App & Website",
      "page.privacyDesc": "Final Privacy Policy for the DeepFocus Android application and deepfocus.asf.run website.",
      "page.termsTitle": "Terms & Conditions – DeepFocus",
      "page.termsDesc": "Terms and Conditions for using the DeepFocus Android app and deepfocus.asf.run landing website.",
      "page.notfoundTitle": "Page Not Found – DeepFocus",

      "skip.content": "Skip to main content",
      "nav.home": "Home",
      "nav.features": "Features",
      "nav.screenshots": "Screenshots",
      "nav.faq": "FAQ",
      "nav.privacy": "Privacy Policy",
      "nav.terms": "Terms & Conditions",
      "nav.buy": "Buy Now",
      "nav.primaryLabel": "Primary navigation",
      "nav.langLabel": "Language selector",
      "nav.breadcrumb": "Breadcrumb",
      "nav.menuOpen": "Open navigation menu",
      "nav.menuClose": "Close navigation menu",

      "hero.kicker": "Android Focus & Productivity App · Bangladesh",
      "hero.title": "Take Control of Your Focus. Build Better Habits.",
      "hero.desc": "DeepFocus is an Android productivity app built to help you run focused sessions, build study habits, and manage digital distractions.",
      "hero.ctaPrimary": "Buy DeepFocus",
      "hero.ctaSecondary": "Explore Features",
      "hero.metaDev": "Developer: Muhammed Omor",
      "hero.metaPlatform": "Platform: Android",
      "hero.metaChannel": "Official Listing: SupportKori",
      "hero.imgAlt": "DeepFocus Android Home screen showing active Focus Lock timer, Today's Focus, Daily Habit Hub, Quick Access study apps, and bottom navigation bar",
      "hero.imgAria": "Enlarge official DeepFocus Home screen screenshot",
      "hero.imgCaption": "Official Home screen: active Focus Lock, Quick Access apps, and Daily Habit Hub. Tap to enlarge.",

      "summary.eyebrow": "Product Overview",
      "summary.title": "What DeepFocus Is and Who It Is Built For",
      "summary.lead": "DeepFocus pairs a minimalist Android home launcher with Custom Focus Lock, daily habit tracking, and focus session statistics to help reduce digital distractions during study and work.",
      "summary.defTitle": "Core Product Summary",
      "summary.defText": "DeepFocus lets Android users activate timed Focus Lock sessions, keep only selected essential apps usable during focus, track daily disciplines, and review completed focus session history.",
      "summary.defNote": "Note: The groups below describe intended audiences for DeepFocus rather than verified user counts or demographic statistics.",
      "summary.aud1Title": "School & College Students in Bangladesh",
      "summary.aud1Desc": "Students looking to reduce social media and short-video interruptions during study hours.",
      "summary.aud2Title": "University Admission & Job Exam Candidates",
      "summary.aud2Desc": "BCS, admission, and competitive exam applicants maintaining consistent daily focus sessions.",
      "summary.aud3Title": "University Students",
      "summary.aud3Desc": "Students managing coursework, research, and exam preparation with calmer smartphone routines.",
      "summary.aud4Title": "Professionals, Developers & Freelancers",
      "summary.aud4Desc": "Remote workers, developers, and designers who need dedicated deep-work blocks.",
      "summary.aud5Title": "Anyone Building Healthier Phone Habits",
      "summary.aud5Desc": "Users working to reduce mindless scrolling and regain control over screen time.",

      "features.eyebrow": "Verified Capabilities",
      "features.title": "Core Features Shown in Official Screenshots",
      "features.lead": "Every capability below reflects the interface verified directly across the four official DeepFocus application screenshots.",
      "features.f1Meta": "01 · Focus Lock",
      "features.f1Tag": "Focus Lock",
      "features.f1Title": "Custom Focus Lock",
      "features.f1Desc": "While a session is active, in-app launcher exit and app-switching controls stay locked until the countdown timer expires.",
      "features.f1Benefit": "Benefit: Adds helpful friction against impulsive app switching during study or deep work.",
      "features.f2Meta": "02 · Session Timer",
      "features.f2Title": "Focus Session Timer",
      "features.f2Desc": "Displays a circular countdown timer showing remaining time and the exact session end time.",
      "features.f2Benefit": "Benefit: Keeps remaining focus time visible at a glance without distraction.",
      "features.f3Meta": "03 · Essential Access",
      "features.f3Title": "Allowed Apps During Focus",
      "features.f3Desc": "Allows selected essential apps (such as study or calling utilities) to remain usable while all other apps stay locked.",
      "features.f3Benefit": "Benefit: Keep critical tools accessible while blocking distracting feeds.",
      "features.f4Meta": "04 · Daily Routines",
      "features.f4Title": "Habit Tracker (Daily Habit Hub)",
      "features.f4Desc": "Provides a Home summary card and dedicated Habits tab to add and follow daily disciplines.",
      "features.f4Benefit": "Benefit: Supports steady daily study and personal routine consistency.",
      "features.f5Meta": "05 · Progress Review",
      "features.f5Title": "Focus Statistics & Session History",
      "features.f5Desc": "Shows Total Focus Time, Sessions Completed, Today's Focus, active Focus Status, and Recent Focus Sessions in the Stats tab.",
      "features.f5Benefit": "Benefit: Lets you review your deep-work progress and completed sessions.",
      "features.f6Meta": "06 · Quick Access",
      "features.f6Title": "Minimalist Home, Quick Access & Drawer",
      "features.f6Desc": "Provides Quick Access shortcuts to selected apps on the clean Home screen alongside a Drawer button for full app access.",
      "features.f6Benefit": "Benefit: Replaces cluttered icon grids with a calm launcher workspace.",
      "features.f7Meta": "07 · Launcher Settings",
      "features.f7Title": "Launcher Configuration",
      "features.f7Desc": "Displays default home app status in Settings and provides a Switch to Old Launcher button when no lock is active.",
      "features.f7Benefit": "Benefit: Easy return to your standard launcher whenever needed.",
      "features.f8Meta": "08 · System Guard",
      "features.f8Title": "Strict Settings Blocker & Android Architecture",
      "features.f8Desc": "Blocks opening device Settings from the status bar during active focus while keeping Wi-Fi and Data quick toggles accessible, plus an in-app View Android Limitations section.",
      "features.f8Benefit": "Benefit: Reduces mid-session tampering while keeping connectivity toggles usable.",
      "features.limitTitle": "Technical Scope & Honest Limitations",
      "features.limitText": "DeepFocus operates within standard Android framework and security policies. Because system behavior varies across Android versions and device manufacturers, DeepFocus does not claim to prevent every conceivable bypass, survive every restart on all ROMs, or block every system setting.",

      "screens.eyebrow": "Official Application Screens",
      "screens.title": "Explore the Real DeepFocus Interface",
      "screens.lead": "All four official screenshots are presented in their original aspect ratios without cropping. Tap any screenshot to enlarge it.",
      "screens.s1Num": "Screen 01 · Home",
      "screens.s1Title": "Home Screen & Quick Access",
      "screens.s1Desc": "Shows the clock and date, active Focus Lock card, Today's Focus, Daily Habit Hub, Quick Access shortcuts, and Drawer button.",
      "screens.s1Alt": "DeepFocus Home screenshot showing clock, active Focus Lock card, Today's Focus, Daily Habit Hub, and Quick Access apps",
      "screens.s1Aria": "Enlarge Screen 01: Home Screen and Quick Access",
      "screens.s2Num": "Screen 02 · Focus Lock",
      "screens.s2Title": "Custom Focus Lock Screen",
      "screens.s2Desc": "Shows the Deep Work circular countdown timer, session end time, Allowed Apps During Focus count, and active protection status.",
      "screens.s2Alt": "DeepFocus Custom Focus Lock screenshot showing circular timer and Allowed Apps During Focus",
      "screens.s2Aria": "Enlarge Screen 02: Custom Focus Lock",
      "screens.s3Num": "Screen 03 · Habits & Stats",
      "screens.s3Title": "Habit Tracker & Focus Statistics",
      "screens.s3Desc": "Side-by-side view of the Habit Tracker (Habits tab) and Focus Statistics (Stats tab showing Total Focus Time, Sessions Completed, and Recent Focus Sessions).",
      "screens.s3Alt": "DeepFocus Habit Tracker and Focus Statistics screenshots",
      "screens.s3Aria": "Enlarge Screen 03: Habit Tracker and Focus Statistics",
      "screens.s4Num": "Screen 04 · Settings",
      "screens.s4Title": "Settings & Android Platform Architecture",
      "screens.s4Desc": "Shows Launcher Configuration (Switch to Old Launcher), Strict Settings Blocker, Android Platform Architecture (View Android Limitations), and About DeepFocus.",
      "screens.s4Alt": "DeepFocus Settings screenshot showing Launcher Configuration, Strict Settings Blocker, and Android Limitations",
      "screens.s4Aria": "Enlarge Screen 04: Settings and Android Architecture",
      "screens.enlarge": "Enlarge screen",

      "how.eyebrow": "Getting Started",
      "how.title": "Four Simple Steps to Review and Get DeepFocus",
      "how.lead": "Review the verified app capabilities and compatibility details before visiting the official SupportKori page.",
      "how.st1Num": "Step 01",
      "how.st1Title": "Understand the Features",
      "how.st1Desc": "See how the home launcher, Focus Lock timer, allowed apps list, habits, and stats work together.",
      "how.st2Num": "Step 02",
      "how.st2Title": "Review Compatibility",
      "how.st2Desc": "Check Android permission requirements, launcher configuration, and platform limitations.",
      "how.st3Num": "Step 03",
      "how.st3Title": "Visit Official SupportKori Page",
      "how.st3Desc": "Open the official SupportKori product page to view current access, pricing, and listing terms.",
      "how.st4Num": "Step 04",
      "how.st4Title": "Follow Official Setup Steps",
      "how.st4Desc": "Complete acquisition on SupportKori and follow the developer's provided Android installation instructions.",

      "bd.eyebrow": "Built for Bangladesh",
      "bd.title": "Practical Focus Support for Students & Professionals in Bangladesh",
      "bd.lead": "Designed around real study and digital work workflows on Android phones in Bangladesh.",
      "bd.p1": "Across Bangladesh, students and professionals depend on Android smartphones for online classes, lecture notes, and daily communication—while social feeds and short-video apps compete on the same screen.",
      "bd.p2": "As a study focus app and productivity app for students in Bangladesh, DeepFocus helps control mobile distractions while keeping essential study and communication apps accessible during focus sessions.",
      "bd.item1Title": "Study & Competitive Exam Prep",
      "bd.item1Desc": "Built for board exams, university admission prep, BCS/job preparation, and structured daily study blocks.",
      "bd.item2Title": "Essential Connectivity & Apps Kept Ready",
      "bd.item2Desc": "Pinned Allowed Apps stay usable and Wi-Fi/mobile data quick toggles remain accessible when Strict Settings Blocker is active.",
      "bd.item3Title": "Clean, Lightweight Interface",
      "bd.item3Desc": "A calm launcher layout without distracting visual clutter for everyday Android devices.",

      "compat.eyebrow": "Compatibility & Requirements",
      "compat.title": "Android Support, Permissions & Technical Scope",
      "compat.lead": "Clearly separates verified details from items that depend on your device model or SupportKori listing details.",
      "compat.row1Key": "Platform",
      "compat.row1Val": "Android (verified from official app screenshots and SupportKori listing).",
      "compat.row2Key": "Supported Android Versions",
      "compat.row2Val": "Exact minimum and maximum Android OS versions should be confirmed via the SupportKori listing or with the developer.",
      "compat.row3Key": "Required Permissions",
      "compat.row3Val": "Default Home Launcher setup is shown in Screen 04. Additional system permissions required for Focus Lock or Strict Settings Blocker are granted during in-app setup.",
      "compat.row4Key": "Battery Optimization",
      "compat.row4Val": "Some Android brands (such as Xiaomi, Realme, Samsung, or Tecno) may require adjusting battery optimization so session timers stay reliable.",
      "compat.row5Key": "Known Limitations",
      "compat.row5Val": "Operates within standard Android framework security policies. Behavior varies by device, and 100% bypass immunity is not guaranteed.",

      "privacy.eyebrow": "Privacy & Legal",
      "privacy.title": "Data Protection, Privacy Policy & Terms of Use",
      "privacy.lead": "Prepared from the official product description on SupportKori and the actual static behavior of this website.",
      "privacy.c1Title": "Offline Operation & Local Data",
      "privacy.c1Desc": "According to the SupportKori listing, DeepFocus works offline and stores Habit Tracker and Focus History records locally in an encrypted database on the user's device.",
      "privacy.c2Title": "No Account, Trackers, or Ads",
      "privacy.c2Desc": "The SupportKori listing states that DeepFocus requires no account registration, includes no trackers or advertisements, and sends no personal data to cloud servers.",
      "privacy.c3Title": "Static Website Behavior",
      "privacy.c3Desc": "deepfocus.asf.run is a static website with no login forms, payment forms, or ad trackers—using only browser localStorage ('deepfocus_lang') to remember your language selection.",
      "privacy.c4Title": "SupportKori Checkout & Terms",
      "privacy.c4Desc": "Distribution and checkout take place on SupportKori, subject to SupportKori's own Terms, Privacy, and Refund Policy.",
      "privacy.linkBtn": "Read Full Privacy Policy",
      "privacy.termsBtn": "Read Terms & Conditions",

      "faq.eyebrow": "Frequently Asked Questions",
      "faq.title": "Clear Answers Before You Get Started",
      "faq.lead": "Direct answers about features, Android permissions, acquisition, and technical limitations.",
      "faq.allLink": "View all 12 questions & answers",

      "faq.q1": "What is DeepFocus?",
      "faq.a1": "DeepFocus is an Android productivity and focus app developed by Muhammed Omor. It combines a minimalist home launcher, Custom Focus Lock timer, Allowed Apps whitelist, Habit Tracker, and Focus Statistics.",
      "faq.q2": "Who is DeepFocus designed for?",
      "faq.a2": "It is designed for school, college, and university students in Bangladesh, admission and BCS/job exam candidates, freelancers, developers, and anyone wanting calmer smartphone focus habits.",
      "faq.q3": "Is DeepFocus available for Android?",
      "faq.a3": "Yes. DeepFocus is an Android application available through its official SupportKori product page.",
      "faq.q4": "How does Focus Lock work?",
      "faq.a4": "When Focus Lock is active, in-app launcher exit and app-switching controls stay locked until the countdown timer finishes, operating within standard Android framework security policies.",
      "faq.q5": "Can I still use essential apps during a focus session?",
      "faq.a5": "Yes. With Allowed Apps During Focus, you can keep essential apps (such as Phone, Messages, Maps, or study apps) usable while other apps remain locked.",
      "faq.q6": "Which Android versions are supported?",
      "faq.a6": "Exact minimum and maximum supported Android OS versions are not listed separately here; please confirm on the official SupportKori listing or with the developer.",
      "faq.q7": "What permissions does the application need?",
      "faq.a7": "Screen 04 shows Default Home Launcher configuration. Any additional Android permissions needed for Focus Lock or Strict Settings Blocker are requested during app setup.",
      "faq.q8": "How do I buy or get DeepFocus?",
      "faq.a8": "Click 'Buy DeepFocus' or 'Buy Now' to open the official SupportKori product page, where current pricing and access steps are displayed.",
      "faq.q9": "How do I install DeepFocus?",
      "faq.a9": "After completing acquisition on SupportKori, follow the official download and Android installation instructions provided in your SupportKori access library.",
      "faq.q10": "What should I do if a feature does not work as expected?",
      "faq.a10": "Check Launcher Configuration and View Android Limitations inside the app's Settings tab, and review required permissions and device battery optimization settings.",
      "faq.q11": "How can I contact the developer?",
      "faq.a11": "Use the official 'Contact seller' option on the SupportKori product page to reach Muhammed Omor directly.",
      "faq.q12": "Where can I read the Privacy Policy and Terms?",
      "faq.a12": "Both the complete Privacy Policy (privacy.html) and Terms & Conditions (terms.html) are published on this website.",

      "cta.eyebrow": "Next Step",
      "cta.title": "Make Your Next Focus Session Count.",
      "cta.desc": "Ready to try DeepFocus? Visit the official SupportKori product page for current access and setup instructions.",
      "cta.button": "Get DeepFocus on SupportKori",

      "footer.desc": "An Android productivity and focus app by Muhammed Omor, designed to support structured focus sessions and calmer digital habits.",
      "footer.navHeading": "Navigation",
      "footer.infoHeading": "Legal & Resources",
      "footer.dev": "Developer: Muhammed Omor",
      "footer.rights": "All rights reserved.",

      "modal.close": "Close",
      "modal.prev": "Previous",
      "modal.next": "Next",

      "featuresPage.title": "DeepFocus Features & Android Architecture",
      "featuresPage.lead": "Detailed walkthrough of every screen and capability verified in DeepFocus, alongside honest Android framework boundaries.",

      "privacyPage.title": "Privacy Policy",
      "privacyPage.lead": "Effective Date: November 14, 2026 · Final Privacy Policy for the DeepFocus Android app and deepfocus.asf.run.",
      "privacyPage.noticeTitle": "Transparency & Basis:",
      "privacyPage.noticeBody": "This Privacy Policy is based on the official DeepFocus product disclosures published on SupportKori (supportkori.com/muhammedomor/extras/deepfocus-app-ts3g) and the static architecture of deepfocus.asf.run.",
      "privacyPage.h1": "1. DeepFocus Android App Data & Offline Storage",
      "privacyPage.p1": "As stated on the official SupportKori product listing, DeepFocus operates under the following data practices:",
      "privacyPage.li1": "Offline Operation: The app requires no account registration and does not rely on cloud servers to function.",
      "privacyPage.li2": "Local Storage: Habit Tracker entries, daily routines, and Focus History data remain stored locally on your device in an encrypted local database and are not transmitted to external servers.",
      "privacyPage.li3": "No Ads or Trackers: The product listing states that DeepFocus contains no advertisements and no tracking SDKs.",
      "privacyPage.h2": "2. Android System Permissions",
      "privacyPage.p2": "To provide minimalist launcher replacement, Custom Focus Lock, Allowed Apps filtering, and Strict Settings Blocker, DeepFocus uses default Home Launcher configuration and relevant Android system permissions. These permissions are used strictly on-device for focus enforcement and not to read or transmit personal files, photos, or messages.",
      "privacyPage.h3": "3. This Website (deepfocus.asf.run)",
      "privacyPage.p3": "deepfocus.asf.run is a static HTML, CSS, and JavaScript website. It does not collect personal information, run login or payment forms, or load ad trackers. The only browser storage used is localStorage ('deepfocus_lang') to remember your manual Bangla/English preference, which you can clear anytime in browser settings.",
      "privacyPage.h4": "4. Third-Party Distribution (SupportKori)",
      "privacyPage.p4": "Clicking 'Buy DeepFocus' or 'Get DeepFocus on SupportKori' takes you to SupportKori, an external platform. Any login, guest email, or checkout information entered on SupportKori is governed by SupportKori's own Privacy Policy and Terms.",
      "privacyPage.h5": "5. Policy Updates & Contact",
      "privacyPage.p5": "If future app updates introduce network features, this Privacy Policy will be updated accordingly. For privacy inquiries, contact developer Muhammed Omor using the 'Contact seller' option on the official SupportKori page.",

      "termsPage.title": "Terms & Conditions",
      "termsPage.lead": "Effective Date: November 14, 2026 · Terms governing use of the DeepFocus Android app and deepfocus.asf.run.",
      "termsPage.h1": "1. Acceptance of Terms",
      "termsPage.p1": "By accessing deepfocus.asf.run or acquiring and installing the DeepFocus Android application via SupportKori, you agree to these Terms and Conditions.",
      "termsPage.h2": "2. License & Permitted Use",
      "termsPage.p2": "Subject to the access terms shown on SupportKori (including 'Lifetime access' where listed), DeepFocus is provided for personal, non-commercial focus and productivity use. Redistribution, resale, or unauthorized modification of the application package without permission from Muhammed Omor is prohibited.",
      "termsPage.h3": "3. SupportKori Distribution & Refunds",
      "termsPage.p3": "DeepFocus is distributed through SupportKori. Pricing (currently shown on SupportKori as Free or as updated by the seller), checkout processing, library access, and any applicable refund requests are governed by SupportKori's Terms, Privacy, and Refund Policy.",
      "termsPage.h4": "4. Android Platform Limitations & User Responsibility",
      "termsPage.p4": "DeepFocus implements Focus Lock within standard Android framework security policies. Behavior may differ across Android versions and device manufacturers. You are responsible for adding essential calling, messaging, or emergency apps to Allowed Apps before starting a Focus Lock session. The developer is not liable for missed calls, notifications, or system interruptions during self-configured focus locks.",
      "termsPage.h5": "5. Switching Back to Your Previous Launcher",
      "termsPage.p5": "When no Focus Lock session is active, you may return to your previous launcher anytime via the in-app Settings ('Switch to Old Launcher') or Android Settings > Apps > Default Apps.",
      "termsPage.h6": "6. Contact",
      "termsPage.p6": "For support or questions regarding these Terms, contact developer Muhammed Omor through the 'Contact seller' option on the official SupportKori product page.",

      "notfound.title": "This page could not be found.",
      "notfound.desc": "The link may be outdated or the address may have been mistyped. Use the links below to return to DeepFocus.",
      "notfound.homeBtn": "Return to Home"
    }
  };

  var SCREENSHOTS = [
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-1.png",
      titleKey: "screens.s1Title",
      descKey: "screens.s1Desc",
      altKey: "screens.s1Alt"
    },
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-2.png",
      titleKey: "screens.s2Title",
      descKey: "screens.s2Desc",
      altKey: "screens.s2Alt"
    },
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-3.png",
      titleKey: "screens.s3Title",
      descKey: "screens.s3Desc",
      altKey: "screens.s3Alt"
    },
    {
      src: "https://pockethostbd.github.io/drive-one/picture/mockup-4.png",
      titleKey: "screens.s4Title",
      descKey: "screens.s4Desc",
      altKey: "screens.s4Alt"
    }
  ];

  var currentLang = "bn";
  var activeSlideIndex = 0;
  var lastTriggerEl = null;

  function getInitialLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var urlLang = params.get("lang");
      if (urlLang === "en" || urlLang === "bn") {
        return urlLang;
      }
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "bn") {
        return stored;
      }
    } catch (e) {
      // Ignore storage errors
    }
    return "bn";
  }

  function applyLanguage(lang, persist) {
    currentLang = lang === "en" ? "en" : "bn";
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

    var altNodes = document.querySelectorAll("[data-i18n-alt]");
    for (var a = 0; a < altNodes.length; a++) {
      var altEl = altNodes[a];
      var altKey = altEl.getAttribute("data-i18n-alt");
      if (altKey && Object.prototype.hasOwnProperty.call(dict, altKey)) {
        altEl.setAttribute("alt", dict[altKey]);
      }
    }

    var ariaNodes = document.querySelectorAll("[data-i18n-aria-label]");
    for (var r = 0; r < ariaNodes.length; r++) {
      var ariaEl = ariaNodes[r];
      var ariaKey = ariaEl.getAttribute("data-i18n-aria-label");
      if (ariaKey && Object.prototype.hasOwnProperty.call(dict, ariaKey)) {
        ariaEl.setAttribute("aria-label", dict[ariaKey]);
      }
    }

    var pageId = document.body.getAttribute("data-page");
    if (pageId) {
      var titleKey = "page." + pageId + "Title";
      var descKey = "page." + pageId + "Desc";
      if (Object.prototype.hasOwnProperty.call(dict, titleKey)) {
        document.title = dict[titleKey];
      }
      var metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && Object.prototype.hasOwnProperty.call(dict, descKey)) {
        metaDesc.setAttribute("content", dict[descKey]);
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

    var modal = document.getElementById("screenshot-lightbox");
    if (modal && !modal.hasAttribute("hidden")) {
      var item = SCREENSHOTS[activeSlideIndex];
      var titleEl = document.getElementById("lightbox-title");
      var captionEl = document.getElementById("lightbox-caption");
      var imgEl = document.getElementById("lightbox-img");
      if (titleEl) titleEl.textContent = dict[item.titleKey];
      if (captionEl) captionEl.textContent = dict[item.descKey];
      if (imgEl) imgEl.setAttribute("alt", dict[item.altKey]);
    }

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, currentLang);
      } catch (e) {
        // Ignore storage errors
      }
    }
  }

  function initLanguageSwitcher() {
    var langButtons = document.querySelectorAll("[data-lang-switch]");
    for (var i = 0; i < langButtons.length; i++) {
      langButtons[i].addEventListener("click", function () {
        var target = this.getAttribute("data-lang-switch");
        if (target === "en" || target === "bn") {
          applyLanguage(target, true);
        }
      });
    }
    applyLanguage(getInitialLang(), false);
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
        imgEl.alt = dict[item.altKey];
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
