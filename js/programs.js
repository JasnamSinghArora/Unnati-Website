/* ============================================
   UNNATI · programs.js
   Modal data + open/close behaviour for the
   programs page. Each card has a data-program
   slug that maps to an entry in PROGRAMS below.
   ============================================ */
(() => {
  'use strict';

  const PROGRAMS = {
    /* ===== SCHOLARSHIPS ===== */
    'youth-unstoppable': {
      tag: { en: 'Youth · Free', hi: 'युवा · मुफ़्त' },
      title: { en: 'Youth Unstoppable Scholarship', hi: 'यूथ अनस्टॉपेबल छात्रवृत्ति' },
      desc: {
        en: 'A free opportunity programme for young change-makers across India. It combines mentorship, training and a stipend so students can keep going with the work they have already started in their community.',
        hi: 'भारत भर के युवा बदलाव-निर्माताओं के लिए मुफ़्त अवसर कार्यक्रम। इसमें मार्गदर्शन, प्रशिक्षण और एक स्टाइपेंड मिलता है, ताकि छात्र अपने समुदाय में जो काम शुरू कर चुके हैं उसे आगे बढ़ा सकें।'
      },
      eligibility: {
        en: 'Indian students between 15 and 22, working on a project, idea or initiative that helps others.',
        hi: 'भारत के 15 से 22 वर्ष के छात्र, जो किसी ऐसे प्रोजेक्ट या पहल पर काम कर रहे हैं जिससे दूसरों को लाभ हो।'
      },
      apply: {
        en: 'Applications open through the official site each year. A short written application and a 2-minute video are usually all you need.',
        hi: 'हर साल आधिकारिक साइट पर आवेदन खुलते हैं। आमतौर पर एक छोटा लिखित आवेदन और 2-मिनट का वीडियो काफ़ी होता है।'
      },
      url: 'https://youthunstoppable.org/'
    },
    'nmmss': {
      tag: { en: 'Class 8 · Merit', hi: 'कक्षा 8 · मेरिट' },
      title: { en: 'NMMSS — National Means-cum-Merit Scholarship', hi: 'राष्ट्रीय मीन्स-कम-मेरिट छात्रवृत्ति' },
      desc: {
        en: 'A central government scholarship for high-performing students from families earning below a set income limit. Selected students receive 12,000 rupees a year from Class 9 through Class 12, paid directly into their bank account.',
        hi: 'केंद्र सरकार की छात्रवृत्ति, उन मेधावी छात्रों के लिए जिनके परिवार की आय एक तय सीमा से कम है। चयनित छात्रों को कक्षा 9 से 12 तक हर साल ₹12,000 सीधे उनके बैंक खाते में मिलते हैं।'
      },
      eligibility: {
        en: 'Class 8 students in government, government-aided and local body schools. Annual family income below ₹3.5 lakh.',
        hi: 'सरकारी, सरकार-सहायित या स्थानीय निकाय स्कूलों के कक्षा 8 छात्र। पारिवारिक वार्षिक आय ₹3.5 लाख से कम।'
      },
      apply: {
        en: 'Apply through the National Scholarships Portal after qualifying the state-level NMMSS exam in Class 8.',
        hi: 'कक्षा 8 में राज्य-स्तरीय NMMSS परीक्षा पास करने के बाद नेशनल स्कॉलरशिप्स पोर्टल के ज़रिए आवेदन करें।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'kvpy': {
      tag: { en: 'Science · 11–12', hi: 'विज्ञान · 11–12' },
      title: { en: 'KVPY — Kishore Vaigyanik Protsahan Yojana', hi: 'किशोर वैज्ञानिक प्रोत्साहन योजना' },
      desc: {
        en: 'A long-running national fellowship that picked out students keen on a research career in basic science. The scheme has been merged into INSPIRE since 2022, so new applications now go through INSPIRE-SHE.',
        hi: 'विज्ञान में शोध करना चाहने वाले छात्रों के लिए राष्ट्रीय फ़ेलोशिप। 2022 से यह योजना INSPIRE में मिला दी गई है, इसलिए अब नए आवेदन INSPIRE-SHE के ज़रिए होते हैं।'
      },
      eligibility: {
        en: 'Earlier: Class 11, 12 and first-year UG science students. Now apply for the equivalent INSPIRE Scholarship.',
        hi: 'पहले: कक्षा 11, 12 और स्नातक प्रथम वर्ष के विज्ञान छात्र। अब इसके स्थान पर INSPIRE छात्रवृत्ति के लिए आवेदन करें।'
      },
      apply: {
        en: 'Visit the INSPIRE portal of the Department of Science & Technology for current eligibility and application windows.',
        hi: 'मौजूदा पात्रता और आवेदन की तारीख़ों के लिए विज्ञान एवं प्रौद्योगिकी विभाग के INSPIRE पोर्टल पर जाएँ।'
      },
      url: 'https://online-inspire.gov.in/'
    },
    'prematric-sc': {
      tag: { en: 'SC · Pre-Matric', hi: 'अनुसूचित जाति · प्री-मैट्रिक' },
      title: { en: 'Pre-Matric Scholarship for SC Students', hi: 'अनुसूचित जाति प्री-मैट्रिक छात्रवृत्ति' },
      desc: {
        en: 'Central financial assistance for Scheduled Caste students in Class 9 and 10. It covers maintenance, books and an ad-hoc grant, and is meant to make sure students do not drop out of school for money reasons.',
        hi: 'अनुसूचित जाति के कक्षा 9 और 10 के छात्रों के लिए केंद्रीय आर्थिक सहायता। इसमें रख-रखाव, किताबें और एक अतिरिक्त अनुदान शामिल है, ताकि कोई छात्र पैसे की वजह से स्कूल न छोड़े।'
      },
      eligibility: {
        en: 'SC students in Class 9 or 10. Parental income usually below ₹2.5 lakh per year (check current notification).',
        hi: 'कक्षा 9 या 10 के अनुसूचित जाति छात्र। आमतौर पर पारिवारिक आय ₹2.5 लाख प्रति वर्ष से कम (मौजूदा सूचना देखें)।'
      },
      apply: {
        en: 'Apply once a year through the National Scholarships Portal during the open window (usually August–October).',
        hi: 'हर साल नेशनल स्कॉलरशिप्स पोर्टल पर खुली अवधि (आमतौर पर अगस्त–अक्टूबर) में आवेदन करें।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'postmatric-obc': {
      tag: { en: 'OBC · Post-Matric', hi: 'OBC · पोस्ट-मैट्रिक' },
      title: { en: 'Post-Matric Scholarship for OBC Students', hi: 'अन्य पिछड़ा वर्ग पोस्ट-मैट्रिक छात्रवृत्ति' },
      desc: {
        en: 'For OBC students in Class 11 and above, including ITI, polytechnic, undergraduate and postgraduate courses. The scholarship covers tuition, exam fees and a monthly maintenance allowance.',
        hi: 'कक्षा 11 और उससे ऊपर के OBC छात्रों के लिए — ITI, पॉलिटेक्निक, स्नातक और स्नातकोत्तर भी शामिल। इसमें शुल्क, परीक्षा फ़ीस और मासिक रख-रखाव भत्ता मिलता है।'
      },
      eligibility: {
        en: 'OBC students in Class 11 or higher. Family income usually below ₹1.5 lakh per year for the central component.',
        hi: 'कक्षा 11 या उससे ऊपर के OBC छात्र। केंद्रीय हिस्से के लिए आमतौर पर पारिवारिक आय ₹1.5 लाख प्रति वर्ष से कम।'
      },
      apply: {
        en: 'Apply through the National Scholarships Portal each year. State-level OBC scholarships may run in parallel.',
        hi: 'हर साल नेशनल स्कॉलरशिप्स पोर्टल पर आवेदन करें। साथ ही राज्य-स्तर की OBC छात्रवृत्तियाँ भी चलती हैं।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'prematric-disabled': {
      tag: { en: 'Accessibility', hi: 'सुगम्यता' },
      title: { en: 'Pre-Matric Scholarship for Students with Disabilities', hi: 'दिव्यांग छात्र प्री-मैट्रिक छात्रवृत्ति' },
      desc: {
        en: 'A central scholarship for students with disabilities in Class 9 and 10. It covers maintenance, books, a disability allowance and an ad-hoc grant, so the cost of staying in school is taken off the family.',
        hi: 'कक्षा 9 और 10 के दिव्यांग छात्रों के लिए केंद्रीय छात्रवृत्ति। इसमें रख-रखाव, किताबें, दिव्यांग भत्ता और एक अतिरिक्त अनुदान शामिल है, ताकि पढ़ाई बनाए रखने का ख़र्च परिवार पर न आए।'
      },
      eligibility: {
        en: 'Students with 40% or more benchmarked disability, studying in Class 9 or 10. Family income below ₹2.5 lakh per year.',
        hi: '40% या उससे अधिक प्रमाणित दिव्यांगता वाले कक्षा 9 या 10 के छात्र। पारिवारिक आय ₹2.5 लाख प्रति वर्ष से कम।'
      },
      apply: {
        en: 'Apply on the National Scholarships Portal. A valid disability certificate from a competent authority is needed.',
        hi: 'नेशनल स्कॉलरशिप्स पोर्टल पर आवेदन करें। सक्षम प्राधिकारी से जारी वैध दिव्यांगता प्रमाणपत्र ज़रूरी है।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'ssa': {
      tag: { en: 'Universal · Education', hi: 'सर्वव्यापी · शिक्षा' },
      title: { en: 'Samagra Shiksha (Sarva Shiksha Abhiyan)', hi: 'समग्र शिक्षा (सर्व शिक्षा अभियान)' },
      desc: {
        en: 'India\'s flagship school education programme, covering pre-school through Class 12. The scheme funds school infrastructure, free textbooks, uniforms and learning material so every child has a school to walk into.',
        hi: 'भारत का प्रमुख विद्यालयी शिक्षा कार्यक्रम, जो प्री-स्कूल से कक्षा 12 तक चलता है। इसके तहत स्कूल भवन, मुफ़्त किताबें, यूनिफ़ॉर्म और सीखने की सामग्री मिलती है ताकि हर बच्चे के पास जाने को स्कूल हो।'
      },
      eligibility: {
        en: 'Every child in India aged 6 to 18 in a recognised school. The benefits are delivered through your school, not through individual application.',
        hi: 'भारत में 6 से 18 वर्ष का हर बच्चा, जो किसी मान्यता प्राप्त स्कूल में पढ़ रहा हो। लाभ व्यक्तिगत आवेदन से नहीं, स्कूल के ज़रिए मिलते हैं।'
      },
      apply: {
        en: 'Speak to your school principal about the entitlements you should be receiving (textbooks, uniforms, mid-day meal, etc.).',
        hi: 'अपने स्कूल प्रधानाचार्य से पूछें कि आपको कौन-कौन से लाभ मिलने चाहिए (किताबें, यूनिफ़ॉर्म, मिड-डे मील आदि)।'
      },
      url: 'https://samagra.education.gov.in/'
    },
    'pm-usp': {
      tag: { en: 'PM-USP · Higher Ed', hi: 'PM-USP · उच्च शिक्षा' },
      title: { en: 'PM-USP — PM Uchchatar Shiksha Protsahan', hi: 'पीएम उच्चतर शिक्षा प्रोत्साहन (PM-USP)' },
      desc: {
        en: 'An umbrella scheme of the Ministry of Education that brings together several earlier scholarships for college students. It covers tuition support and maintenance for graduate and postgraduate study at recognised colleges.',
        hi: 'शिक्षा मंत्रालय की एक छत्रक योजना, जिसके अंतर्गत कॉलेज छात्रों की पहले की कई छात्रवृत्तियाँ शामिल हैं। मान्यता प्राप्त कॉलेजों में स्नातक और स्नातकोत्तर पढ़ाई के लिए शुल्क और रख-रखाव सहायता मिलती है।'
      },
      eligibility: {
        en: 'Indian students entering or already in a recognised college course. Specific income and merit cutoffs vary by component.',
        hi: 'किसी मान्यता प्राप्त कॉलेज कोर्स में प्रवेश ले रहे या पढ़ रहे भारतीय छात्र। आय और मेरिट की सीमाएँ हर घटक के लिए अलग होती हैं।'
      },
      apply: {
        en: 'Application is through the National Scholarships Portal under the PM-USP banner.',
        hi: 'आवेदन नेशनल स्कॉलरशिप्स पोर्टल पर PM-USP के अंतर्गत होता है।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'pmrf': {
      tag: { en: 'Research · Postgrad', hi: 'शोध · स्नातकोत्तर' },
      title: { en: 'PMRF — Prime Minister\'s Research Fellowship', hi: 'प्रधानमंत्री शोध फ़ेलोशिप' },
      desc: {
        en: 'A direct-PhD fellowship at IITs, IISc, NITs and IISERs. Fellows receive a monthly stipend of around ₹70,000 to ₹80,000 plus a research grant, so a research career does not have to wait for funding.',
        hi: 'IIT, IISc, NIT और IISER में सीधे-PhD के लिए फ़ेलोशिप। फ़ेलो को हर महीने लगभग ₹70,000 से ₹80,000 का स्टाइपेंड और एक शोध अनुदान मिलता है, ताकि शोध का सफ़र पैसों का इंतज़ार न करे।'
      },
      eligibility: {
        en: 'Final-year UG or fresh PG students with strong academics, applying directly to a PhD programme through PMRF.',
        hi: 'अच्छी पढ़ाई वाले स्नातक अंतिम वर्ष या ताज़ा स्नातकोत्तर छात्र, जो PMRF के ज़रिए सीधे PhD में आवेदन कर रहे हैं।'
      },
      apply: {
        en: 'Apply twice a year (May and December cycles) on the PMRF portal. Lateral entry is also possible for ongoing PhD students.',
        hi: 'PMRF पोर्टल पर साल में दो बार (मई और दिसंबर साइकल) आवेदन करें। पहले से PhD कर रहे छात्र भी लैटरल एंट्री ले सकते हैं।'
      },
      url: 'https://pmrf.in/'
    },
    'csss': {
      tag: { en: 'Central · Merit-Means', hi: 'केंद्रीय · मेरिट-मीन्स' },
      title: { en: 'CSSS — Central Sector Scholarship Scheme', hi: 'केंद्रीय क्षेत्र छात्रवृत्ति योजना' },
      desc: {
        en: 'A merit-cum-means scholarship for college and university students who score in the top 20 percentile of their Class 12 board exam. It pays ₹10,000 a year for undergraduate study and ₹20,000 a year for postgraduate study.',
        hi: 'मेरिट-कम-मीन्स छात्रवृत्ति, उन कॉलेज और विश्वविद्यालय छात्रों के लिए जो कक्षा 12 बोर्ड परीक्षा के शीर्ष 20 प्रतिशत में आते हैं। स्नातक पढ़ाई के लिए ₹10,000 और स्नातकोत्तर के लिए ₹20,000 प्रति वर्ष।'
      },
      eligibility: {
        en: 'Top 20 percentile in Class 12 board exam, pursuing regular UG or PG course. Family income below ₹4.5 lakh per year.',
        hi: 'कक्षा 12 बोर्ड में शीर्ष 20 प्रतिशत, नियमित स्नातक या स्नातकोत्तर कोर्स कर रहे छात्र। पारिवारिक आय ₹4.5 लाख प्रति वर्ष से कम।'
      },
      apply: {
        en: 'Apply through the National Scholarships Portal after the Class 12 result is out.',
        hi: 'कक्षा 12 का परिणाम आने के बाद नेशनल स्कॉलरशिप्स पोर्टल पर आवेदन करें।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'ntse': {
      tag: { en: 'Talent · National', hi: 'प्रतिभा · राष्ट्रीय' },
      title: { en: 'NTSE — National Talent Search Examination', hi: 'राष्ट्रीय प्रतिभा खोज परीक्षा' },
      desc: {
        en: 'NCERT\'s long-standing talent search at the Class 10 level, identifying students for an ongoing scholarship through school, college and PhD. The exam has been on pause since 2021, so check NCERT for the current status before preparing.',
        hi: 'NCERT की लंबे समय से चली आ रही कक्षा 10 की प्रतिभा खोज, जिसके तहत स्कूल से PhD तक छात्रवृत्ति मिलती थी। 2021 से परीक्षा रुकी हुई है, इसलिए तैयारी से पहले NCERT पर मौजूदा स्थिति देख लें।'
      },
      eligibility: {
        en: 'Class 10 students in any recognised school in India (when the exam was active). Indian students abroad could appear at Stage II directly.',
        hi: 'भारत के किसी भी मान्यता प्राप्त स्कूल के कक्षा 10 छात्र (जब परीक्षा सक्रिय थी)। विदेश में पढ़ रहे भारतीय छात्र सीधे स्टेज II में बैठ सकते थे।'
      },
      apply: {
        en: 'Watch the NCERT Programmes page for any revival notification. The exam runs in two stages — state and national.',
        hi: 'पुनरारंभ की सूचना के लिए NCERT कार्यक्रम पेज देखते रहें। परीक्षा दो चरणों में होती है — राज्य और राष्ट्रीय।'
      },
      url: 'https://ncert.nic.in/programmes.php'
    },
    'aicte-pragati': {
      tag: { en: 'AICTE · Women', hi: 'AICTE · महिला' },
      title: { en: 'AICTE Pragati Scholarship', hi: 'AICTE प्रगति छात्रवृत्ति' },
      desc: {
        en: 'A scholarship for girl students in AICTE-approved technical institutions. The award is ₹50,000 a year and supports tuition, books, equipment and other study costs.',
        hi: 'AICTE से मान्य तकनीकी संस्थानों में पढ़ रही छात्राओं के लिए छात्रवृत्ति। हर साल ₹50,000 मिलते हैं, जो शुल्क, किताबें, उपकरण और पढ़ाई के अन्य ख़र्चों में काम आते हैं।'
      },
      eligibility: {
        en: 'Girl students admitted to the first year of a degree or diploma course in an AICTE-approved institution. Family income below ₹8 lakh per year. Up to two girls per family.',
        hi: 'AICTE-मान्य संस्थान के डिग्री या डिप्लोमा कोर्स के प्रथम वर्ष में दाख़िला लेने वाली छात्राएँ। पारिवारिक आय ₹8 लाख प्रति वर्ष से कम। प्रति परिवार अधिकतम दो छात्राएँ।'
      },
      apply: {
        en: 'Apply on the National Scholarships Portal in the year you take admission.',
        hi: 'जिस साल आप प्रवेश लेती हैं, उसी साल नेशनल स्कॉलरशिप्स पोर्टल पर आवेदन करें।'
      },
      url: 'https://scholarships.gov.in/'
    },
    'minority-coaching': {
      tag: { en: 'Minority · Prep', hi: 'अल्पसंख्यक · तैयारी' },
      title: { en: 'Coaching for Minority Students', hi: 'अल्पसंख्यक छात्रों के लिए कोचिंग' },
      desc: {
        en: 'A scheme of the Ministry of Minority Affairs that funds free coaching for students from minority communities preparing for competitive exams — civil services, banking, SSC, engineering and medical entrance.',
        hi: 'अल्पसंख्यक कार्य मंत्रालय की योजना, जिसके तहत अल्पसंख्यक समुदायों के छात्रों को प्रतियोगी परीक्षाओं — सिविल सेवा, बैंकिंग, SSC, इंजीनियरिंग, मेडिकल — की मुफ़्त कोचिंग दी जाती है।'
      },
      eligibility: {
        en: 'Students from notified minority communities. Income and exam-eligibility conditions apply, listed on the ministry site.',
        hi: 'अधिसूचित अल्पसंख्यक समुदायों के छात्र। आय और परीक्षा-योग्यता की शर्तें मंत्रालय की साइट पर दी गई हैं।'
      },
      apply: {
        en: 'Coaching is delivered through empanelled institutions. Look up the current list of centres on the Ministry of Minority Affairs site.',
        hi: 'कोचिंग सूचीबद्ध संस्थानों के माध्यम से दी जाती है। केंद्रों की मौजूदा सूची अल्पसंख्यक कार्य मंत्रालय की साइट पर देखें।'
      },
      url: 'https://www.minorityaffairs.gov.in/'
    },

    /* ===== LEARNING ===== */
    'swayam': {
      tag: { en: 'India · Free', hi: 'भारत · मुफ़्त' },
      title: { en: 'SWAYAM', hi: 'स्वयं' },
      desc: {
        en: 'India\'s national online learning platform. It offers free, university-grade courses from top Indian institutions, with optional paid certification after a final exam.',
        hi: 'भारत का राष्ट्रीय ऑनलाइन शिक्षण मंच। यहाँ देश के शीर्ष संस्थानों से मुफ़्त, विश्वविद्यालय-स्तर के पाठ्यक्रम मिलते हैं — अंतिम परीक्षा के बाद वैकल्पिक पेड प्रमाणपत्र भी।'
      },
      eligibility: { en: 'Open to anyone. No prerequisites for most courses.', hi: 'सबके लिए खुला है। अधिकांश पाठ्यक्रमों के लिए कोई पूर्व शर्त नहीं।' },
      apply: {
        en: 'Sign up free on the SWAYAM site, browse courses by subject or by university, and enrol in one click.',
        hi: 'SWAYAM साइट पर मुफ़्त रजिस्टर करें, विषय या विश्वविद्यालय के अनुसार पाठ्यक्रम चुनें, और एक क्लिक में दाख़िला लें।'
      },
      url: 'https://swayam.gov.in/'
    },
    'nptel': {
      tag: { en: 'Engineering · IIT', hi: 'अभियांत्रिकी · IIT' },
      title: { en: 'NPTEL', hi: 'एनपीटीईएल' },
      desc: {
        en: 'Video lecture courses from the IITs and IISc, covering engineering, science, humanities and management. Free to watch; paid certification is available after a proctored exam.',
        hi: 'IIT और IISc के वीडियो व्याख्यान पाठ्यक्रम — इंजीनियरिंग, विज्ञान, मानविकी और प्रबंधन में। देखना मुफ़्त है, परीक्षा देने के बाद पेड प्रमाणपत्र भी मिलता है।'
      },
      eligibility: { en: 'Open to students, professionals and the general public.', hi: 'छात्र, पेशेवर और आम जनता — सबके लिए खुला है।' },
      apply: {
        en: 'Browse the NPTEL catalogue, watch lectures on YouTube or the NPTEL site, and register for the exam if you want a certificate.',
        hi: 'NPTEL कैटलॉग देखें, YouTube या NPTEL साइट पर व्याख्यान देखें, और प्रमाणपत्र चाहिए तो परीक्षा के लिए रजिस्टर करें।'
      },
      url: 'https://nptel.ac.in/'
    },
    'khan-academy': {
      tag: { en: 'K–12 · Free', hi: 'K–12 · मुफ़्त' },
      title: { en: 'Khan Academy', hi: 'खान अकादमी' },
      desc: {
        en: 'World-renowned free education from arithmetic through college-level subjects. Most content has Hindi versions, and there are NCERT-aligned courses for Class 1 through 12.',
        hi: 'अंकगणित से लेकर कॉलेज-स्तर के विषयों तक — मुफ़्त, विश्व-प्रसिद्ध शिक्षा। अधिकांश सामग्री हिंदी में भी है, और कक्षा 1 से 12 के लिए NCERT के अनुरूप पाठ्यक्रम मौजूद हैं।'
      },
      eligibility: { en: 'Free for everyone. No sign-up needed to watch lessons.', hi: 'सबके लिए मुफ़्त। पाठ देखने के लिए साइन-अप ज़रूरी नहीं।' },
      apply: {
        en: 'Visit khanacademy.org and either search a topic or open the India / NCERT section. A free account saves your progress.',
        hi: 'khanacademy.org पर जाएँ और कोई विषय खोजें या India / NCERT सेक्शन खोलें। मुफ़्त अकाउंट बनाने से आपकी प्रगति सुरक्षित रहती है।'
      },
      url: 'https://www.khanacademy.org/'
    },
    'diksha': {
      tag: { en: 'School · National', hi: 'विद्यालय · राष्ट्रीय' },
      title: { en: 'DIKSHA', hi: 'दीक्षा' },
      desc: {
        en: 'India\'s official school education platform, built by the Ministry of Education. Every state board\'s textbooks, lessons and teacher training material live here, and most state boards now use it.',
        hi: 'शिक्षा मंत्रालय द्वारा बनाया गया भारत का आधिकारिक विद्यालयी शिक्षा मंच। हर राज्य बोर्ड की किताबें, पाठ और शिक्षक प्रशिक्षण सामग्री यहाँ है, और अधिकांश राज्य बोर्ड अब इसका इस्तेमाल करते हैं।'
      },
      eligibility: { en: 'Free for all students, teachers and parents in India.', hi: 'भारत के सभी छात्रों, शिक्षकों और अभिभावकों के लिए मुफ़्त।' },
      apply: {
        en: 'Open the DIKSHA app or site and pick your state board. You can also scan QR codes printed in many state textbooks.',
        hi: 'DIKSHA ऐप या साइट खोलें और अपना राज्य बोर्ड चुनें। आप कई राज्य पाठ्यपुस्तकों में छपे QR कोड भी स्कैन कर सकते हैं।'
      },
      url: 'https://diksha.gov.in/'
    },
    'coursera': {
      tag: { en: 'Global · Universities', hi: 'वैश्विक · विश्वविद्यालय' },
      title: { en: 'Coursera', hi: 'कोर्सेरा' },
      desc: {
        en: 'Online courses from Stanford, Yale, Google, Meta and hundreds of other universities and companies. Most courses are free to audit; paid options give you a graded certificate.',
        hi: 'स्टैनफ़ोर्ड, येल, गूगल, मेटा और सैकड़ों अन्य विश्वविद्यालयों व कंपनियों के ऑनलाइन पाठ्यक्रम। अधिकांश पाठ्यक्रम मुफ़्त ऑडिट किए जा सकते हैं; पेड विकल्प में आपको ग्रेडेड प्रमाणपत्र मिलता है।'
      },
      eligibility: { en: 'Open to anyone. Financial aid is available for paid certifications.', hi: 'सबके लिए खुला। पेड प्रमाणपत्र के लिए आर्थिक सहायता भी मिलती है।' },
      apply: {
        en: 'Sign up, search for a course you want, click "Audit" if you only want the content for free.',
        hi: 'साइन अप करें, मनचाहा कोर्स खोजें, और अगर सिर्फ़ मुफ़्त में सामग्री चाहिए तो "Audit" पर क्लिक करें।'
      },
      url: 'https://www.coursera.org/'
    },
    'masterclass': {
      tag: { en: 'Experts · Premium', hi: 'विशेषज्ञ · प्रीमियम' },
      title: { en: 'MasterClass', hi: 'मास्टरक्लास' },
      desc: {
        en: 'Subscription-based video lessons taught by people at the top of their field — chefs, writers, scientists, athletes, business leaders. Useful for a peek into how someone became great at what they do.',
        hi: 'सब्सक्रिप्शन-आधारित वीडियो पाठ, जिनमें अपने क्षेत्र के शीर्ष लोग पढ़ाते हैं — शेफ़, लेखक, वैज्ञानिक, खिलाड़ी, व्यापार-नेता। यह देखने का अच्छा ज़रिया है कि किसी ने अपने काम में महारत कैसे हासिल की।'
      },
      eligibility: { en: 'Requires a paid subscription. Family and group plans available.', hi: 'पेड सब्सक्रिप्शन ज़रूरी है। परिवार और ग्रुप प्लान भी मौजूद हैं।' },
      apply: {
        en: 'Pick a class first to make sure it is the right speaker, then start a subscription.',
        hi: 'पहले एक क्लास देखकर तय करें कि वक्ता आपके लिए सही है, फिर सब्सक्रिप्शन शुरू करें।'
      },
      url: 'https://www.masterclass.com/'
    },
    'duolingo': {
      tag: { en: 'Languages', hi: 'भाषाएँ' },
      title: { en: 'Duolingo', hi: 'डुओलिंगो' },
      desc: {
        en: 'A free language learning app with short daily lessons. Strong for getting started in English, Spanish, French, German, Japanese and many more, with a free Hindi-to-English course.',
        hi: 'छोटे रोज़ाना पाठों वाली मुफ़्त भाषा-शिक्षण ऐप। अंग्रेज़ी, स्पैनिश, फ़्रेंच, जर्मन, जापानी आदि सीखने के लिए अच्छी है — हिंदी से अंग्रेज़ी का मुफ़्त कोर्स भी है।'
      },
      eligibility: { en: 'Free with ads. Optional paid plan removes ads and unlocks extras.', hi: 'विज्ञापनों के साथ मुफ़्त। वैकल्पिक पेड प्लान विज्ञापन हटाता है और अतिरिक्त सुविधाएँ देता है।' },
      apply: {
        en: 'Install the app on your phone, set a daily goal (5 minutes is enough), and keep your streak going.',
        hi: 'अपने फ़ोन पर ऐप डालें, रोज़ का लक्ष्य (5 मिनट भी काफ़ी हैं) तय करें, और अपनी स्ट्रीक बनाए रखें।'
      },
      url: 'https://www.duolingo.com/'
    },
    'ekalpa': {
      tag: { en: 'Design · Digital', hi: 'डिज़ाइन · डिजिटल' },
      title: { en: 'e-Kalpa / D\'source', hi: 'ई-कल्प / डी\'सोर्स' },
      desc: {
        en: 'A Ministry of Education-backed design learning portal run by IDC, IIT Bombay. It hosts free digital design courses, case studies of Indian crafts and a large open design archive.',
        hi: 'शिक्षा मंत्रालय द्वारा समर्थित डिज़ाइन शिक्षण पोर्टल, जिसे IDC, IIT बॉम्बे चलाता है। यहाँ मुफ़्त डिजिटल डिज़ाइन पाठ्यक्रम, भारतीय शिल्प के केस अध्ययन और एक बड़ा खुला डिज़ाइन संग्रह है।'
      },
      eligibility: { en: 'Free for students, teachers and designers.', hi: 'छात्रों, शिक्षकों और डिज़ाइनरों के लिए मुफ़्त।' },
      apply: {
        en: 'Visit d\'source and either browse the course library or the Indian design knowledge base.',
        hi: 'd\'source पर जाएँ और या तो कोर्स लाइब्रेरी देखें या भारतीय डिज़ाइन ज्ञानकोश।'
      },
      url: 'https://www.dsource.in/'
    },
    'easyshiksha': {
      tag: { en: 'Vocational · Online', hi: 'व्यावसायिक · ऑनलाइन' },
      title: { en: 'EasyShiksha', hi: 'ईज़ीशिक्षा' },
      desc: {
        en: 'An Indian online learning platform with short vocational and skill-based courses. Useful for picking up a market-ready skill alongside your main studies.',
        hi: 'भारतीय ऑनलाइन शिक्षण मंच, जिसमें छोटे व्यावसायिक और कौशल-आधारित पाठ्यक्रम हैं। यह मुख्य पढ़ाई के साथ-साथ कोई रोज़गार-योग्य कौशल सीखने के लिए अच्छा है।'
      },
      eligibility: { en: 'Open to all. Many free courses, plus paid certifications.', hi: 'सबके लिए खुला। बहुत सारे मुफ़्त पाठ्यक्रम, और पेड प्रमाणपत्र भी।' },
      apply: {
        en: 'Sign up, search for a skill (digital marketing, Excel, programming, etc.) and start.',
        hi: 'साइन अप करें, अपनी पसंद का कौशल खोजें (डिजिटल मार्केटिंग, एक्सेल, कोडिंग आदि) और शुरू करें।'
      },
      url: 'https://www.easyshiksha.com/'
    },

    /* ===== CAREER ===== */
    'internshala': {
      tag: { en: 'Internships · India', hi: 'इंटर्नशिप · भारत' },
      title: { en: 'Internshala', hi: 'इंटर्नशाला' },
      desc: {
        en: 'India\'s largest internship and entry-level job marketplace. It is widely used by students from Class 11 onwards, and many internships are work-from-home.',
        hi: 'भारत का सबसे बड़ा इंटर्नशिप और प्रवेश-स्तर नौकरी मंच। कक्षा 11 के बाद के छात्र इसका बड़े पैमाने पर इस्तेमाल करते हैं, और कई इंटर्नशिप घर से होती हैं।'
      },
      eligibility: { en: 'Open to all Indian students and fresh graduates.', hi: 'सभी भारतीय छात्रों और ताज़ा स्नातकों के लिए खुला।' },
      apply: {
        en: 'Make a profile, fill in your skills and resume, and apply to listings that match. Internshala Trainings (paid) also exist.',
        hi: 'प्रोफ़ाइल बनाएँ, अपनी क्षमताएँ और रिज़्यूमे भरें, और मेल खाती लिस्टिंग पर आवेदन करें। Internshala Trainings (पेड) भी मौजूद हैं।'
      },
      url: 'https://internshala.com/'
    },
    'upwork': {
      tag: { en: 'Freelance · Global', hi: 'फ़्रीलांस · वैश्विक' },
      title: { en: 'Upwork', hi: 'अपवर्क' },
      desc: {
        en: 'A global freelance marketplace where Indian students can find paid work from international clients in design, writing, code, video, virtual assistance and more.',
        hi: 'वैश्विक फ़्रीलांस मंच, जहाँ भारतीय छात्र अंतरराष्ट्रीय ग्राहकों से डिज़ाइन, लेखन, कोडिंग, वीडियो, वर्चुअल असिस्टेंस आदि का पेड काम पा सकते हैं।'
      },
      eligibility: { en: 'Open to anyone 18 or older with a portfolio of work to show.', hi: '18 वर्ष या उससे ऊपर का कोई भी व्यक्ति, जिसके पास दिखाने को कुछ काम हो।' },
      apply: {
        en: 'Create a profile, write a focused bio, list 2 to 3 strong samples, and start bidding on relevant jobs.',
        hi: 'प्रोफ़ाइल बनाएँ, एक केंद्रित बायो लिखें, 2 से 3 अच्छे नमूने जोड़ें, और प्रासंगिक नौकरियों पर बोली लगाना शुरू करें।'
      },
      url: 'https://www.upwork.com/'
    },
    'fiverr': {
      tag: { en: 'Freelance · Services', hi: 'फ़्रीलांस · सेवाएँ' },
      title: { en: 'Fiverr', hi: 'फ़ाइवर' },
      desc: {
        en: 'A freelance marketplace built around "gigs" — packaged services you sell at a fixed price. Buyers come to you instead of you bidding for jobs.',
        hi: 'एक फ़्रीलांस मंच, जो "गिग" यानी तय कीमत पर बिकने वाली पैकेज की हुई सेवाओं पर आधारित है। यहाँ ग्राहक आपके पास आते हैं, आपको नौकरी के लिए बोली नहीं लगानी पड़ती।'
      },
      eligibility: { en: 'Open to anyone 13 or older. Standard payouts begin after a 14-day clearance period.', hi: '13 वर्ष या उससे ऊपर का कोई भी व्यक्ति। मानक भुगतान 14-दिन की क्लियरेंस के बाद शुरू होते हैं।' },
      apply: {
        en: 'Sign up, write a clear gig title, set a starter price, and add at least one strong visual sample of your work.',
        hi: 'साइन अप करें, एक स्पष्ट गिग शीर्षक लिखें, शुरुआती कीमत तय करें, और अपने काम का कम से कम एक अच्छा दृश्य नमूना जोड़ें।'
      },
      url: 'https://www.fiverr.com/'
    },
    'workindia': {
      tag: { en: 'Jobs · Blue + Grey collar', hi: 'नौकरियाँ · श्रमिक' },
      title: { en: 'WorkIndia', hi: 'वर्कइंडिया' },
      desc: {
        en: 'An Indian jobs app that focuses on blue-collar and grey-collar roles — drivers, delivery, retail, sales, customer support, and back-office work in over 200 Indian cities.',
        hi: 'एक भारतीय जॉब ऐप, जो श्रमिक और तकनीकी नौकरियों पर केंद्रित है — ड्राइवर, डिलीवरी, रिटेल, सेल्स, कस्टमर सपोर्ट और बैक-ऑफ़िस काम — 200 से अधिक भारतीय शहरों में।'
      },
      eligibility: { en: 'Open to all Indian job seekers. Free to sign up.', hi: 'सभी भारतीय रोज़गार-तलाशकों के लिए खुला। साइन-अप मुफ़्त।' },
      apply: {
        en: 'Install the app, complete your profile and apply directly to listings near you.',
        hi: 'ऐप डाउनलोड करें, अपनी प्रोफ़ाइल पूरी करें, और अपने नज़दीक की लिस्टिंग पर सीधे आवेदन करें।'
      },
      url: 'https://www.workindia.in/'
    },
    'peopleperhour': {
      tag: { en: 'Hourly · UK-born', hi: 'घंटा-आधारित' },
      title: { en: 'PeoplePerHour', hi: 'पीपलपरआवर' },
      desc: {
        en: 'A UK-based freelance marketplace that bills work either per hour or per project. Common categories are design, web development, writing, marketing and translation.',
        hi: 'ब्रिटेन-आधारित फ़्रीलांस मंच, जहाँ काम घंटे के हिसाब से या प्रोजेक्ट के हिसाब से बिल होता है। आम श्रेणियाँ हैं डिज़ाइन, वेब डेवलपमेंट, लेखन, मार्केटिंग और अनुवाद।'
      },
      eligibility: { en: 'Open to anyone 18 or older.', hi: '18 वर्ष या उससे ऊपर का कोई भी व्यक्ति।' },
      apply: {
        en: 'Sign up, get your profile approved, and post "Offers" (your own service listings) as well as apply to client jobs.',
        hi: 'साइन अप करें, प्रोफ़ाइल मंज़ूर करवाएँ, और अपने "Offers" (अपनी सेवाओं की लिस्टिंग) पोस्ट करें, साथ ही ग्राहकों की नौकरियों पर आवेदन भी करें।'
      },
      url: 'https://www.peopleperhour.com/'
    },
    'truelancer': {
      tag: { en: 'Indian · Freelance', hi: 'भारतीय · फ़्रीलांस' },
      title: { en: 'Truelancer', hi: 'ट्रूलांसर' },
      desc: {
        en: 'An India-grown freelance platform with both Indian and international clients. Strong in IT, content, design and admin work, and pays out in INR.',
        hi: 'भारत में बना फ़्रीलांस मंच, जिसमें भारतीय और अंतरराष्ट्रीय दोनों तरह के ग्राहक हैं। IT, कंटेंट, डिज़ाइन और एडमिन काम में मज़बूत — भुगतान INR में मिलते हैं।'
      },
      eligibility: { en: 'Open to Indian freelancers 18 or older.', hi: '18 वर्ष या उससे ऊपर के भारतीय फ़्रीलांसरों के लिए खुला।' },
      apply: {
        en: 'Sign up, complete your profile, and bid on open projects. A free plan lets you bid 30 times a month.',
        hi: 'साइन अप करें, प्रोफ़ाइल पूरी करें, और खुले प्रोजेक्ट पर बोली लगाएँ। मुफ़्त प्लान में महीने में 30 बार बोली लगाई जा सकती है।'
      },
      url: 'https://www.truelancer.com/'
    },
    'amazon-associates': {
      tag: { en: 'Affiliate', hi: 'एफ़िलिएट' },
      title: { en: 'Amazon Associates', hi: 'अमेज़न एसोसिएट्स' },
      desc: {
        en: 'Amazon\'s affiliate programme. If you write a blog, run a YouTube channel or have a community, you can share product links and earn a percentage when someone buys through them.',
        hi: 'अमेज़न का एफ़िलिएट कार्यक्रम। यदि आप ब्लॉग लिखते हैं, YouTube चलाते हैं, या आपका कोई समुदाय है, तो आप उत्पाद लिंक साझा कर सकते हैं और जब कोई उनसे ख़रीदता है तो कमीशन कमा सकते हैं।'
      },
      eligibility: { en: 'Anyone 18 or older with a public site, channel or community.', hi: '18 वर्ष या उससे ऊपर का कोई भी व्यक्ति, जिसका कोई सार्वजनिक साइट, चैनल या समुदाय हो।' },
      apply: {
        en: 'Sign up at affiliate-program.amazon.in, list your channels, and start sharing your unique product links.',
        hi: 'affiliate-program.amazon.in पर साइन अप करें, अपने चैनल जोड़ें, और अपने यूनिक प्रोडक्ट लिंक साझा करना शुरू करें।'
      },
      url: 'https://affiliate-program.amazon.in/'
    },

    /* ===== SKILLS ===== */
    'skill-india': {
      tag: { en: 'National · Mission', hi: 'राष्ट्रीय · मिशन' },
      title: { en: 'Skill India Mission', hi: 'स्किल इंडिया मिशन' },
      desc: {
        en: 'India\'s flagship national mission to train and certify young people for market-ready jobs. The Skill India Digital portal is the new front door for all schemes, courses and certifications under the mission.',
        hi: 'युवाओं को रोज़गार-योग्य कौशल देने और प्रमाणित करने वाला भारत का प्रमुख राष्ट्रीय मिशन। मिशन के तहत सभी योजनाएँ, पाठ्यक्रम और प्रमाणपत्र अब Skill India Digital पोर्टल पर मिलते हैं।'
      },
      eligibility: { en: 'Open to all Indian citizens. Specific course eligibility varies.', hi: 'सभी भारतीय नागरिकों के लिए खुला। हर कोर्स की पात्रता अलग होती है।' },
      apply: {
        en: 'Create a free account on Skill India Digital, browse courses near you, and enrol online or at a training centre.',
        hi: 'Skill India Digital पर मुफ़्त अकाउंट बनाएँ, अपने नज़दीक के पाठ्यक्रम देखें, और ऑनलाइन या ट्रेनिंग सेंटर में दाख़िला लें।'
      },
      url: 'https://www.skillindiadigital.gov.in/'
    },
    'pmkvy': {
      tag: { en: 'PMKVY · Vocational', hi: 'PMKVY · व्यावसायिक' },
      title: { en: 'PMKVY — PM Kaushal Vikas Yojana', hi: 'प्रधानमंत्री कौशल विकास योजना' },
      desc: {
        en: 'A short-term skill training scheme with a recognised certificate at the end. The scheme also gives placement support, and most courses are free for the student.',
        hi: 'अल्पकालिक कौशल प्रशिक्षण योजना, जिसके अंत में मान्यता प्राप्त प्रमाणपत्र मिलता है। साथ ही रोज़गार सहायता भी, और अधिकांश पाठ्यक्रम छात्र के लिए मुफ़्त होते हैं।'
      },
      eligibility: { en: 'Indian citizens between 15 and 45, school dropouts or unemployed youth typically.', hi: '15 से 45 वर्ष के भारतीय नागरिक — आमतौर पर स्कूल छोड़ चुके या बेरोज़गार युवा।' },
      apply: {
        en: 'Find a PMKVY training centre near you on the Skill India Digital portal and register there.',
        hi: 'Skill India Digital पोर्टल पर अपने नज़दीक का PMKVY ट्रेनिंग सेंटर खोजें और वहीं रजिस्टर करें।'
      },
      url: 'https://www.pmkvyofficial.org/'
    },
    'ddu-gky': {
      tag: { en: 'Rural · Placement', hi: 'ग्रामीण · नियुक्ति' },
      title: { en: 'DDU-GKY — Deen Dayal Upadhyay Grameen Kaushalya Yojana', hi: 'दीन दयाल उपाध्याय ग्रामीण कौशल्या योजना' },
      desc: {
        en: 'A skill training and placement scheme aimed at rural youth from poor families. The training is free and is followed by a guaranteed placement offer with a minimum wage.',
        hi: 'ग़रीब परिवारों के ग्रामीण युवाओं के लिए कौशल प्रशिक्षण और नियुक्ति योजना। प्रशिक्षण मुफ़्त है और इसके बाद न्यूनतम वेतन के साथ नियुक्ति की गारंटी होती है।'
      },
      eligibility: { en: 'Rural youth between 15 and 35 from poor families. Age limit is 45 for women, SC/ST and persons with disabilities.', hi: 'ग़रीब परिवारों के 15 से 35 वर्ष के ग्रामीण युवा। महिलाओं, SC/ST और दिव्यांगों के लिए आयु सीमा 45 वर्ष है।' },
      apply: {
        en: 'Check the DDU-GKY site for the list of partner training agencies in your state and contact them directly.',
        hi: 'DDU-GKY साइट पर अपने राज्य की भागीदार प्रशिक्षण एजेंसियों की सूची देखें और उनसे सीधे संपर्क करें।'
      },
      url: 'http://ddugky.gov.in/'
    },
    'naps': {
      tag: { en: 'Apprenticeships', hi: 'शिक्षुता' },
      title: { en: 'NAPS — National Apprenticeship Promotion Scheme', hi: 'राष्ट्रीय शिक्षुता प्रोत्साहन योजना' },
      desc: {
        en: 'A government scheme that gets companies to take on apprentices and shares part of the stipend cost. For students, it means a paid on-the-job training programme in real industries.',
        hi: 'एक सरकारी योजना जो कंपनियों को अपरेंटिस रखने के लिए प्रोत्साहित करती है और स्टाइपेंड का कुछ हिस्सा सरकार देती है। छात्रों के लिए इसका मतलब है असली उद्योगों में पेड ऑन-द-जॉब प्रशिक्षण।'
      },
      eligibility: { en: 'Indian citizens 14 or older who have finished at least Class 5. Different trades have different educational requirements.', hi: '14 वर्ष या उससे ऊपर के भारतीय नागरिक, जिन्होंने कम से कम कक्षा 5 पूरी की हो। हर ट्रेड के लिए अलग शैक्षणिक योग्यता होती है।' },
      apply: {
        en: 'Register on the Apprenticeship India portal, build a profile, and apply to live apprenticeship openings.',
        hi: 'Apprenticeship India पोर्टल पर रजिस्टर करें, प्रोफ़ाइल बनाएँ, और मौजूदा शिक्षुता खुले पदों पर आवेदन करें।'
      },
      url: 'https://www.apprenticeshipindia.gov.in/'
    },
    'strive': {
      tag: { en: 'Quality · Vocational', hi: 'गुणवत्ता · व्यावसायिक' },
      title: { en: 'STRIVE — Skills Strengthening for Industrial Value Enhancement', hi: 'STRIVE — व्यावसायिक प्रशिक्षण गुणवत्ता परियोजना' },
      desc: {
        en: 'A World Bank-supported project of the Ministry of Skill Development that improves how India\'s ITIs run — better instructors, better equipment, stronger ties with employers.',
        hi: 'कौशल विकास मंत्रालय की विश्व बैंक-समर्थित परियोजना, जो भारत के ITI को बेहतर बनाती है — बेहतर प्रशिक्षक, बेहतर उपकरण, और रोज़गार-दाताओं के साथ मज़बूत जुड़ाव।'
      },
      eligibility: { en: 'Reaches students through partner ITIs and apprenticeship trades. Not a direct individual application.', hi: 'भागीदार ITI और शिक्षुता ट्रेड के माध्यम से छात्रों तक पहुँचती है। यह सीधा व्यक्तिगत आवेदन नहीं है।' },
      apply: {
        en: 'Check whether your nearest ITI is a STRIVE partner. If yes, the upgraded training is part of your regular course.',
        hi: 'देखें कि आपका नज़दीकी ITI STRIVE का भागीदार है या नहीं। अगर हाँ, तो उन्नत प्रशिक्षण आपके नियमित कोर्स का हिस्सा है।'
      },
      url: 'https://www.msde.gov.in/en/schemes-initiatives/strive'
    },
    'startup-india-learning': {
      tag: { en: 'Startups · Learning', hi: 'स्टार्टअप · सीख' },
      title: { en: 'Startup India Learning Programme', hi: 'स्टार्टअप इंडिया लर्निंग कार्यक्रम' },
      desc: {
        en: 'A free, structured online course for early-stage founders, built by Startup India and partners. It walks you through the basics of building a startup — idea, market, team, funding and registration.',
        hi: 'शुरुआती चरण के संस्थापकों के लिए मुफ़्त, संरचित ऑनलाइन कोर्स, जिसे Startup India और साझेदारों ने बनाया है। यह स्टार्टअप बनाने की मूल बातें सिखाता है — आइडिया, बाज़ार, टीम, फ़ंडिंग और पंजीकरण।'
      },
      eligibility: { en: 'Anyone with an idea or an early-stage startup. No prior experience needed.', hi: 'कोई भी, जिसके पास एक आइडिया या शुरुआती चरण का स्टार्टअप हो। पहले से किसी अनुभव की ज़रूरत नहीं।' },
      apply: {
        en: 'Register on the Startup India hub, find the Learning Programme, and start the modules at your own pace.',
        hi: 'Startup India हब पर रजिस्टर करें, Learning Programme खोजें, और अपनी गति से मॉड्यूल शुरू करें।'
      },
      url: 'https://www.startupindia.gov.in/content/sih/en/learning-and-development.html'
    },
    'udaan': {
      tag: { en: 'Women · Education', hi: 'महिला · शिक्षा' },
      title: { en: 'CBSE Udaan', hi: 'सीबीएसई उड़ान' },
      desc: {
        en: 'A CBSE programme that helps girl students prepare for engineering entrance exams (mainly JEE). It offers free study material, online classes, doubt-clearing sessions and mentor support.',
        hi: 'CBSE का कार्यक्रम, जो छात्राओं को इंजीनियरिंग प्रवेश परीक्षाओं (मुख्यतः JEE) की तैयारी में मदद करता है। इसमें मुफ़्त अध्ययन सामग्री, ऑनलाइन कक्षाएँ, संदेह-निवारण सत्र और गाइड का साथ मिलता है।'
      },
      eligibility: { en: 'Girl students in Class 11 and 12 in CBSE-affiliated schools. Family income usually below ₹6 lakh per year.', hi: 'CBSE-संबद्ध स्कूलों की कक्षा 11 और 12 की छात्राएँ। आमतौर पर पारिवारिक आय ₹6 लाख प्रति वर्ष से कम।' },
      apply: {
        en: 'Apply through your school during the open window each year. The CBSE Udaan portal lists the current cycle.',
        hi: 'हर साल खुली अवधि में अपने स्कूल के माध्यम से आवेदन करें। मौजूदा साइकल CBSE Udaan पोर्टल पर सूचीबद्ध होता है।'
      },
      url: 'https://www.cbse.gov.in/cbsenew/Udaan.html'
    },

    /* ===== SCHEMES ===== */
    'ayushman-bharat': {
      tag: { en: 'Health · Universal', hi: 'स्वास्थ्य · सार्वभौमिक' },
      title: { en: 'Ayushman Bharat — PM-JAY', hi: 'आयुष्मान भारत — पीएम-जय' },
      desc: {
        en: 'A health insurance scheme that gives eligible families up to ₹5 lakh of free treatment a year at empanelled hospitals. Covers most surgeries, hospital stays and serious illnesses.',
        hi: 'एक स्वास्थ्य बीमा योजना, जो पात्र परिवारों को हर साल सूचीबद्ध अस्पतालों में ₹5 लाख तक का मुफ़्त इलाज देती है। इसमें अधिकांश सर्जरी, अस्पताल में रहने और गंभीर बीमारियाँ शामिल हैं।'
      },
      eligibility: { en: 'Families listed under the SECC 2011 data, plus several other categories notified by the government.', hi: 'SECC 2011 डेटा में सूचीबद्ध परिवार, और सरकार द्वारा अधिसूचित कई अन्य श्रेणियाँ।' },
      apply: {
        en: 'Check your eligibility on the PM-JAY site or call 14555. If eligible, get an Ayushman card at the nearest CSC or empanelled hospital.',
        hi: 'PM-JAY साइट पर पात्रता देखें या 14555 पर कॉल करें। पात्र हैं, तो नज़दीकी CSC या सूचीबद्ध अस्पताल से आयुष्मान कार्ड बनवाएँ।'
      },
      url: 'https://pmjay.gov.in/'
    },
    'pmjdy': {
      tag: { en: 'Banking · Inclusion', hi: 'बैंकिंग · समावेशन' },
      title: { en: 'PMJDY — PM Jan Dhan Yojana', hi: 'पीएम जन धन योजना' },
      desc: {
        en: 'A zero-balance bank account scheme for every Indian, with a free RuPay debit card and ₹2 lakh of accidental insurance built in. It is the door through which most other government benefits now arrive.',
        hi: 'हर भारतीय के लिए शून्य-बैलेंस बैंक खाता योजना, जिसमें मुफ़्त RuPay डेबिट कार्ड और ₹2 लाख का दुर्घटना बीमा भी शामिल है। आजकल अधिकांश सरकारी लाभ इसी खाते से आते हैं।'
      },
      eligibility: { en: 'Any Indian citizen 10 years or older.', hi: '10 वर्ष या उससे ऊपर का कोई भी भारतीय नागरिक।' },
      apply: {
        en: 'Walk into any public sector bank or Bank Mitra and ask for a Jan Dhan account. You only need basic ID; even Aadhaar self-declaration is accepted.',
        hi: 'किसी भी सरकारी बैंक या बैंक मित्र के पास जाएँ और जन धन खाता खुलवाने के लिए कहें। बस सामान्य पहचान-पत्र चाहिए; आधार स्व-घोषणा भी मान्य है।'
      },
      url: 'https://pmjdy.gov.in/'
    },
    'sukanya': {
      tag: { en: 'Girls · Savings', hi: 'बेटियाँ · बचत' },
      title: { en: 'Sukanya Samriddhi Yojana', hi: 'सुकन्या समृद्धि योजना' },
      desc: {
        en: 'A small savings account for a girl child with one of the highest interest rates among government schemes. Deposits are tax-free, and the account matures when the girl turns 21 or marries (after 18).',
        hi: 'बेटी के नाम पर खुलने वाला छोटा बचत खाता, जिसकी ब्याज दर सरकारी योजनाओं में सबसे ऊँची में से एक है। जमा राशि कर-मुक्त है, और खाता तब परिपक्व होता है जब बेटी 21 वर्ष की हो या (18 के बाद) उसका विवाह हो।'
      },
      eligibility: { en: 'Parents or guardians of a girl child below 10 years can open the account. One account per girl, up to two per family.', hi: '10 वर्ष से कम उम्र की बेटी के माता-पिता या अभिभावक यह खाता खोल सकते हैं। हर बेटी का एक खाता, परिवार में अधिकतम दो।' },
      apply: {
        en: 'Open the account at any post office or authorised bank. Minimum yearly deposit is ₹250, maximum is ₹1.5 lakh.',
        hi: 'किसी भी डाकघर या अधिकृत बैंक में खाता खोलें। न्यूनतम वार्षिक जमा ₹250, अधिकतम ₹1.5 लाख।'
      },
      url: 'https://www.nsiindia.gov.in/InternalPage.aspx?Id_Pk=89'
    },
    'pmjjby': {
      tag: { en: 'Insurance · Life', hi: 'बीमा · जीवन' },
      title: { en: 'PMJJBY — PM Jeevan Jyoti Bima Yojana', hi: 'प्रधानमंत्री जीवन ज्योति बीमा योजना' },
      desc: {
        en: 'A life insurance scheme that pays out ₹2 lakh if the policyholder dies, for a premium of just ₹436 a year. The premium is auto-debited from your bank account each year.',
        hi: 'एक जीवन बीमा योजना, जो पॉलिसीधारक की मृत्यु होने पर ₹2 लाख देती है, और प्रीमियम है मात्र ₹436 प्रति वर्ष। प्रीमियम हर साल आपके बैंक खाते से अपने आप कट जाता है।'
      },
      eligibility: { en: 'Indian citizens between 18 and 50 with a bank account that has auto-debit enabled.', hi: '18 से 50 वर्ष के भारतीय नागरिक, जिनके बैंक खाते में ऑटो-डेबिट चालू हो।' },
      apply: {
        en: 'Tell your bank you want to enrol in PMJJBY. They handle the paperwork; the premium is debited around June each year.',
        hi: 'अपने बैंक को बताएँ कि आप PMJJBY में नामांकन चाहते हैं। काग़ज़ी कार्रवाई वे करते हैं; प्रीमियम हर साल लगभग जून में कटता है।'
      },
      url: 'https://www.jansuraksha.gov.in/Forms-PMJJBY.aspx'
    },
    'pmsby': {
      tag: { en: 'Insurance · Accident', hi: 'बीमा · दुर्घटना' },
      title: { en: 'PMSBY — PM Suraksha Bima Yojana', hi: 'प्रधानमंत्री सुरक्षा बीमा योजना' },
      desc: {
        en: 'An accidental death and disability cover of ₹2 lakh for a premium of just ₹20 a year. Probably the cheapest formal insurance in the country.',
        hi: 'दुर्घटना से मृत्यु या विकलांगता पर ₹2 लाख का कवच, और प्रीमियम है मात्र ₹20 प्रति वर्ष। शायद देश का सबसे सस्ता औपचारिक बीमा।'
      },
      eligibility: { en: 'Indian citizens between 18 and 70 with a bank account.', hi: '18 से 70 वर्ष के भारतीय नागरिक, जिनके पास बैंक खाता हो।' },
      apply: {
        en: 'Enrol through your bank — most banks let you do this from net banking or the mobile app in a minute.',
        hi: 'अपने बैंक के माध्यम से नामांकन कराएँ — अधिकांश बैंक नेट बैंकिंग या मोबाइल ऐप से यह एक मिनट में करवा देते हैं।'
      },
      url: 'https://www.jansuraksha.gov.in/Forms-PMSBY.aspx'
    },
    'esic': {
      tag: { en: 'Workers · Social', hi: 'कामगार · सामाजिक' },
      title: { en: 'ESIC — Employees\' State Insurance', hi: 'ईएसआईसी — कर्मचारी राज्य बीमा' },
      desc: {
        en: 'A self-financing social security scheme for organised-sector workers. It covers medical care, sickness benefits, maternity benefits and unemployment cover for the worker and their family.',
        hi: 'संगठित क्षेत्र के कामगारों के लिए स्व-वित्तपोषित सामाजिक सुरक्षा योजना। इसमें कामगार और परिवार के लिए चिकित्सा देखभाल, बीमारी, मातृत्व और बेरोज़गारी लाभ शामिल हैं।'
      },
      eligibility: { en: 'Workers in registered units earning up to ₹21,000 a month (₹25,000 for persons with disabilities).', hi: 'पंजीकृत इकाइयों में काम करने वाले कामगार, जिनका वेतन ₹21,000 प्रति माह तक हो (दिव्यांगों के लिए ₹25,000)।' },
      apply: {
        en: 'Your employer is required to enrol you. Use your ESIC number to access ESIC hospitals and dispensaries.',
        hi: 'आपके नियोक्ता को आपको नामांकित करना अनिवार्य है। ESIC अस्पताल और औषधालयों में अपनी ESIC संख्या से सेवा लें।'
      },
      url: 'https://www.esic.gov.in/'
    },
    'jan-aushadhi': {
      tag: { en: 'Medicines · Affordable', hi: 'दवाएँ · सस्ती' },
      title: { en: 'PM Bhartiya Jan Aushadhi Pariyojana', hi: 'पीएम भारतीय जन औषधि परियोजना' },
      desc: {
        en: 'A network of over 10,000 Jan Aushadhi Kendras that sell quality-tested generic medicines at 50 to 80 percent below branded prices. Useful for long-running prescriptions.',
        hi: '10,000 से अधिक जन औषधि केंद्रों का नेटवर्क, जो गुणवत्ता-परीक्षित जेनेरिक दवाइयाँ ब्रांडेड क़ीमतों से 50 से 80 प्रतिशत कम पर बेचता है। लंबे समय की दवाइयों के लिए बहुत उपयोगी।'
      },
      eligibility: { en: 'Open to anyone. No prescription required for over-the-counter items.', hi: 'सबके लिए खुला। OTC दवाओं के लिए डॉक्टर का पर्चा ज़रूरी नहीं।' },
      apply: {
        en: 'Find your nearest Jan Aushadhi Kendra on the official site or the Jan Aushadhi app, and ask for the generic equivalent of your medicine.',
        hi: 'आधिकारिक साइट या Jan Aushadhi ऐप पर अपना नज़दीकी जन औषधि केंद्र खोजें, और अपनी दवा का जेनेरिक विकल्प माँगें।'
      },
      url: 'https://janaushadhi.gov.in/'
    },
    'ayush': {
      tag: { en: 'AYUSH · Wellness', hi: 'आयुष · स्वास्थ्य' },
      title: { en: 'National AYUSH Mission', hi: 'राष्ट्रीय आयुष मिशन' },
      desc: {
        en: 'A central mission to expand access to Ayurveda, Yoga, Unani, Siddha and Homoeopathy through government clinics, education and research. Also funds AYUSH hospitals at the district level.',
        hi: 'आयुर्वेद, योग, यूनानी, सिद्ध और होम्योपैथी की पहुँच बढ़ाने वाला केंद्रीय मिशन — सरकारी क्लीनिक, शिक्षा और शोध के माध्यम से। साथ ही ज़िला स्तर पर आयुष अस्पतालों को भी अनुदान देता है।'
      },
      eligibility: { en: 'Open to all citizens — services are delivered through state governments.', hi: 'सभी नागरिकों के लिए खुला — सेवाएँ राज्य सरकारों के माध्यम से दी जाती हैं।' },
      apply: {
        en: 'Look up your nearest AYUSH hospital, dispensary or wellness centre on the Ministry of AYUSH site.',
        hi: 'आयुष मंत्रालय की साइट पर अपने नज़दीक का आयुष अस्पताल, औषधालय या वेलनेस सेंटर खोजें।'
      },
      url: 'https://ayush.gov.in/'
    },
    'kgbv': {
      tag: { en: 'Girls · Residential', hi: 'बेटियाँ · आवासीय' },
      title: { en: 'KGBV — Kasturba Gandhi Balika Vidyalaya', hi: 'कस्तूरबा गांधी बालिका विद्यालय' },
      desc: {
        en: 'Free residential schools for girls from SC, ST, OBC and minority communities, and for girls below the poverty line. The schools cover Class 6 through 12 and provide stay, meals, uniform and books at no cost.',
        hi: 'SC, ST, OBC और अल्पसंख्यक समुदायों, साथ ही ग़रीबी रेखा से नीचे की बेटियों के लिए मुफ़्त आवासीय विद्यालय। ये स्कूल कक्षा 6 से 12 तक चलते हैं — रहना, खाना, यूनिफ़ॉर्म और किताबें सब मुफ़्त।'
      },
      eligibility: { en: 'Girls from SC/ST/OBC/minority communities or BPL families, in educationally backward blocks.', hi: 'SC/ST/OBC/अल्पसंख्यक समुदायों या BPL परिवारों की बेटियाँ, जो शैक्षिक रूप से पिछड़े ब्लॉकों में रहती हैं।' },
      apply: {
        en: 'Apply through the District Education Officer or the local KGBV. Each state runs its own admission process under Samagra Shiksha.',
        hi: 'ज़िला शिक्षा अधिकारी या स्थानीय KGBV के माध्यम से आवेदन करें। समग्र शिक्षा के अंतर्गत हर राज्य अपनी प्रवेश प्रक्रिया चलाता है।'
      },
      url: 'https://samagra.education.gov.in/kgbv.html'
    }
  };

  /* -----------------------------------------------------
     Modal element + behaviour
     ----------------------------------------------------- */
  const modal = document.getElementById('programModal');
  if (!modal) return;

  const els = {
    tag: modal.querySelector('[data-modal-tag]'),
    title: modal.querySelector('[data-modal-title]'),
    desc: modal.querySelector('[data-modal-desc]'),
    rows: modal.querySelector('[data-modal-rows]'),
    cta: modal.querySelector('[data-modal-cta]'),
    host: modal.querySelector('[data-modal-host]')
  };

  const langText = (val) => {
    if (!val) return '';
    return `<span class="lang-en">${val.en || ''}</span><span class="lang-hi">${val.hi || val.en || ''}</span>`;
  };

  const renderRow = (label, val) => {
    if (!val) return '';
    const labelHTML = `<span class="lang-en">${label.en}</span><span class="lang-hi">${label.hi}</span>`;
    const valHTML = langText(val);
    return `<div class="program-modal-row">
      <div class="program-modal-row-label">${labelHTML}</div>
      <div class="program-modal-row-text">${valHTML}</div>
    </div>`;
  };

  let lastTrigger = null;

  const openFor = (slug, trigger) => {
    const data = PROGRAMS[slug];
    if (!data) return;
    lastTrigger = trigger || null;

    els.tag.innerHTML = langText(data.tag);
    els.title.innerHTML = langText(data.title);
    els.desc.innerHTML = langText(data.desc);
    els.rows.innerHTML =
      renderRow({ en: 'Who it\'s for', hi: 'किसके लिए' }, data.eligibility) +
      renderRow({ en: 'How to access', hi: 'कैसे पाएँ' }, data.apply);

    if (data.url) {
      els.cta.href = data.url;
      els.cta.style.display = '';
      try {
        const host = new URL(data.url).host.replace(/^www\./, '');
        els.host.textContent = host;
        els.host.style.display = '';
      } catch (e) {
        els.host.style.display = 'none';
      }
    } else {
      els.cta.style.display = 'none';
      els.host.style.display = 'none';
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    // Move focus inside the dialog
    const closeBtn = modal.querySelector('.program-modal-close');
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  };

  const close = () => {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastTrigger && typeof lastTrigger.focus === 'function') {
      lastTrigger.focus({ preventScroll: true });
    }
  };

  // Delegate clicks on any program card / link
  document.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('[data-modal-close]');
    if (closeBtn && modal.contains(closeBtn) || (e.target.classList && e.target.classList.contains('program-modal-overlay'))) {
      e.preventDefault();
      close();
      return;
    }
    const trigger = e.target.closest('[data-program]');
    if (trigger) {
      e.preventDefault();
      const slug = trigger.getAttribute('data-program');
      openFor(slug, trigger);
    }
  });

  // ESC closes
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
})();
