export interface ServiceDetail {
  id: string;
  icon: string;
  colorClass: string;
  heroImage?: string;
}

export interface ServiceContent {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  benefits: string[];
  procedures: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  'gebelik-takibi': {
    id: 'gebelik-takibi',
    icon: 'Baby',
    colorClass: 'bg-pink-500',
  },
  'detayli-ultrason': {
    id: 'detayli-ultrason',
    icon: 'MonitorCheck',
    colorClass: 'bg-purple-500',
  },
  'dogum': {
    id: 'dogum',
    icon: 'Heart',
    colorClass: 'bg-red-500',
  },
  'jinekoloji': {
    id: 'jinekoloji',
    icon: 'Stethoscope',
    colorClass: 'bg-blue-500',
  },
  'urojinekoloji': {
    id: 'urojinekoloji',
    icon: 'Activity',
    colorClass: 'bg-green-500',
  },
  'genital-estetik': {
    id: 'genital-estetik',
    icon: 'Sparkles',
    colorClass: 'bg-amber-500',
  },
  'kisirlik-tedavisi': {
    id: 'kisirlik-tedavisi',
    icon: 'HeartHandshake',
    colorClass: 'bg-rose-500',
  },
  'menopoz': {
    id: 'menopoz',
    icon: 'Flower2',
    colorClass: 'bg-violet-500',
  },
  'rahim-hastaliklari': {
    id: 'rahim-hastaliklari',
    icon: 'Shield',
    colorClass: 'bg-cyan-500',
  },
  'over-hastaliklari': {
    id: 'over-hastaliklari',
    icon: 'CircleDot',
    colorClass: 'bg-teal-500',
  },
  'pelvik-taban': {
    id: 'pelvik-taban',
    icon: 'Layers',
    colorClass: 'bg-indigo-500',
  },
  'kurtaj': {
    id: 'kurtaj',
    icon: 'AlertCircle',
    colorClass: 'bg-slate-500',
  },
};

export const servicesContent: Record<string, { tr: ServiceContent; en: ServiceContent }> = {
  'gebelik-takibi': {
    tr: {
      title: 'Gebelik Takibi',
      subtitle: 'Anne ve Bebek Sağlığı İçin Profesyonel Takip',
      description: 'Hamilelik süresince anne ve bebek sağlığının düzenli kontrolü ile güvenli bir gebelik dönemi.',
      longDescription: [
        'Gebelik takibi, anne adayının ve bebeğin sağlığını korumak için düzenli olarak yapılan tıbbi kontrolleri kapsar. Bu süreç, gebeliğin başlangıcından doğuma kadar devam eder ve olası komplikasyonların erken teşhisi için kritik öneme sahiptir.',
        'Modern tıbbın sunduğu tüm imkanlar kullanılarak, her trimesterde farklı testler ve muayeneler yapılır. İlk trimesterde genetik tarama testleri, ikinci trimesterde detaylı anomali taraması ve üçüncü trimesterde doğum öncesi hazırlık kontrolleri gerçekleştirilir.',
        'Gebelik takibi sadece fiziksel sağlığı değil, anne adayının psikolojik durumunu da kapsar. Stres yönetimi, beslenme danışmanlığı ve doğuma hazırlık eğitimi de takibin önemli parçalarıdır.',
        'Düzenli gebelik takibi ile preeklampsi, gestasyonel diyabet, plasenta problemleri gibi durumlar erken dönemde tespit edilebilir ve gerekli önlemler alınabilir.',
      ],
      benefits: [
        'Bebek gelişiminin düzenli takibi',
        'Olası komplikasyonların erken teşhisi',
        'Anne sağlığının korunması',
        'Genetik hastalıkların taranması',
        'Beslenme ve yaşam tarzı danışmanlığı',
        'Doğuma psikolojik hazırlık',
        'Aile planlaması desteği',
        '7/24 acil durum desteği',
      ],
      procedures: [
        {
          title: 'İlk Muayene ve Gebelik Tespiti',
          description: 'Kan testleri, idrar testi ve ultrason ile gebelik teyidi yapılır. Gebelik haftası belirlenir ve tahmini doğum tarihi hesaplanır.',
        },
        {
          title: 'Aylık Kontroller',
          description: 'Her ay düzenli olarak tansiyon, kilo takibi, bebek kalp atışı dinleme ve genel sağlık değerlendirmesi yapılır.',
        },
        {
          title: 'Genetik Tarama Testleri',
          description: '11-14. haftalarda ikili test, 16-18. haftalarda üçlü veya dörtlü test ile kromozomal anomaliler taranır.',
        },
        {
          title: 'Detaylı Ultrason (20-22. Hafta)',
          description: 'Bebeğin tüm organları detaylı olarak incelenir. Anomali taraması yapılır.',
        },
        {
          title: 'Şeker Yükleme Testi',
          description: '24-28. haftalarda gestasyonel diyabet taraması için şeker yükleme testi yapılır.',
        },
        {
          title: 'Doğum Öncesi Hazırlık',
          description: 'Son trimesterde NST (Non-Stress Test), doğum pozisyonu kontrolü ve doğum planlaması yapılır.',
        },
      ],
      faq: [
        {
          question: 'Gebelik takibi ne sıklıkla yapılmalı?',
          answer: 'İlk 28 haftaya kadar ayda bir, 28-36 hafta arası iki haftada bir, 36. haftadan sonra ise her hafta kontrol önerilir.',
        },
        {
          question: 'İlk muayeneye ne zaman gelmeli?',
          answer: 'Adet gecikmesinden 1-2 hafta sonra veya evde yapılan gebelik testi pozitif çıktığında ilk muayeneye gelinmelidir.',
        },
        {
          question: 'Gebelikte hangi belirtiler acil müdahale gerektirir?',
          answer: 'Kanama, şiddetli karın ağrısı, baş ağrısı, görme bozukluğu, el ve yüzde şişme, bebek hareketlerinde azalma gibi belirtilerde hemen doktora başvurulmalıdır.',
        },
        {
          question: 'Gebelikte spor yapılabilir mi?',
          answer: 'Riskli gebelik olmadığı sürece yürüyüş, yüzme, yoga gibi hafif egzersizler yapılabilir. Ancak doktorunuzun onayını almak önemlidir.',
        },
        {
          question: 'Hangi vitaminler kullanılmalı?',
          answer: 'Folik asit gebelik öncesi ve ilk trimesterde çok önemlidir. Demir, D vitamini ve omega-3 de doktor kontrolünde kullanılmalıdır.',
        },
      ],
      relatedServices: ['detayli-ultrason', 'dogum', 'kisirlik-tedavisi'],
    },
    en: {
      title: 'Pregnancy Follow-up',
      subtitle: 'Professional Care for Mother and Baby Health',
      description: 'Regular monitoring of mother and baby health during pregnancy for a safe pregnancy period.',
      longDescription: [
        'Pregnancy follow-up includes regular medical check-ups to protect the health of the expectant mother and baby. This process continues from the beginning of pregnancy until delivery and is critical for early diagnosis of possible complications.',
        'Using all the possibilities of modern medicine, different tests and examinations are performed in each trimester. Genetic screening tests in the first trimester, detailed anomaly screening in the second trimester, and prenatal preparation checks in the third trimester are performed.',
        'Pregnancy follow-up covers not only physical health but also the psychological state of the expectant mother. Stress management, nutritional counseling, and childbirth preparation training are also important parts of follow-up.',
        'With regular pregnancy follow-up, conditions such as preeclampsia, gestational diabetes, and placental problems can be detected early and necessary precautions can be taken.',
      ],
      benefits: [
        'Regular monitoring of baby development',
        'Early diagnosis of possible complications',
        'Protection of maternal health',
        'Screening for genetic diseases',
        'Nutrition and lifestyle counseling',
        'Psychological preparation for birth',
        'Family planning support',
        '24/7 emergency support',
      ],
      procedures: [
        {
          title: 'First Examination and Pregnancy Detection',
          description: 'Pregnancy is confirmed with blood tests, urine test, and ultrasound. Pregnancy week is determined and estimated due date is calculated.',
        },
        {
          title: 'Monthly Check-ups',
          description: 'Blood pressure, weight monitoring, baby heartbeat listening, and general health evaluation are performed regularly every month.',
        },
        {
          title: 'Genetic Screening Tests',
          description: 'Chromosomal anomalies are screened with double test at 11-14 weeks and triple or quadruple test at 16-18 weeks.',
        },
        {
          title: 'Detailed Ultrasound (20-22 Weeks)',
          description: 'All organs of the baby are examined in detail. Anomaly screening is performed.',
        },
        {
          title: 'Glucose Tolerance Test',
          description: 'Glucose tolerance test is performed for gestational diabetes screening at 24-28 weeks.',
        },
        {
          title: 'Prenatal Preparation',
          description: 'NST (Non-Stress Test), birth position control, and birth planning are performed in the last trimester.',
        },
      ],
      faq: [
        {
          question: 'How often should pregnancy follow-up be done?',
          answer: 'Once a month until the first 28 weeks, every two weeks between 28-36 weeks, and weekly after 36 weeks is recommended.',
        },
        {
          question: 'When should I come for the first examination?',
          answer: 'You should come for the first examination 1-2 weeks after missed period or when home pregnancy test is positive.',
        },
        {
          question: 'Which symptoms require emergency intervention during pregnancy?',
          answer: 'Bleeding, severe abdominal pain, headache, vision problems, swelling in hands and face, decreased baby movements require immediate medical attention.',
        },
        {
          question: 'Can I exercise during pregnancy?',
          answer: 'Light exercises such as walking, swimming, yoga can be done unless there is a risky pregnancy. However, it is important to get your doctors approval.',
        },
        {
          question: 'Which vitamins should be used?',
          answer: 'Folic acid is very important before pregnancy and in the first trimester. Iron, vitamin D, and omega-3 should also be used under doctor supervision.',
        },
      ],
      relatedServices: ['detayli-ultrason', 'dogum', 'kisirlik-tedavisi'],
    },
  },
  'detayli-ultrason': {
    tr: {
      title: 'Detaylı Ultrason',
      subtitle: '3D/4D Ultrason ile Bebeğinizi Görüntüleyin',
      description: 'En son teknoloji ultrason cihazları ile bebeğinizin detaylı görüntülenmesi ve anomali taraması.',
      longDescription: [
        'Detaylı ultrason (ayrıntılı ultrason), gebeliğin 19-23. haftaları arasında yapılan kapsamlı bir ultrason muayenesidir. Bu incelemede bebeğin anatomik yapıları değerlendirilir, olası doğumsal anomaliler, anneye ait risk faktörleri ve erken doğum riski incelenir. Mevcut anomalilerin yaklaşık %70-80\'i saptanabilir.',
        'Detaylı ultrason, gebelik sürecinde bebeğin sağlıklı gelişimini değerlendirmek için kullanılan ileri görüntüleme yöntemidir. 3D ve 4D ultrason teknolojisi ile bebeğin yüz hatları, el ve ayak parmakları bile net olarak görüntülenebilir.',
        'Anomali taraması olarak da bilinen detaylı ultrason, genellikle 18-22. gebelik haftaları arasında yapılır. Bu tarama sırasında bebeğin tüm organları, iskelet sistemi, beyin yapıları ve iç organları tek tek incelenir.',
        'Ultrason muayenesi tamamen ağrısız ve güvenli bir işlemdir. Herhangi bir radyasyon içermez ve bebeğe zarar vermez. Ses dalgaları kullanılarak görüntü elde edilir.',
        'Detaylı ultrason sadece anomali taraması için değil, aynı zamanda plasenta pozisyonu, amniyotik sıvı miktarı, bebek büyüklüğü ve cinsiyet tayini için de önemli bilgiler sağlar.',
      ],
      benefits: [
        'Bebeğin 3 boyutlu görüntülenmesi',
        '4D ile bebek hareketlerinin izlenmesi',
        'Anomali ve yapısal bozuklukların tespiti',
        'Cinsiyet tayini',
        'Plasenta ve amniyotik sıvı değerlendirmesi',
        'Bebek büyüklüğü ve tahmini kilo hesaplama',
        'Çoklu gebeliklerde detaylı değerlendirme',
        'Hatıra fotoğraf ve video kaydı',
      ],
      procedures: [
        {
          title: 'İlk Trimester Ultrason (11-14 Hafta)',
          description: 'Ense kalınlığı ölçümü (NT), burun kemiği değerlendirmesi ve erken anomali taraması yapılır.',
        },
        {
          title: 'Detaylı Anomali Taraması (18-22 Hafta)',
          description: 'Tüm organ sistemleri, beyin, kalp, omurga, böbrekler, ekstremiteler detaylı olarak incelenir.',
        },
        {
          title: 'Fetal Ekokardiyografi',
          description: 'Bebek kalbinin detaylı ultrasonografik incelemesi. Kalp odacıkları, kapaklar ve damar yapıları değerlendirilir.',
        },
        {
          title: 'Doppler Ultrason',
          description: 'Bebeğe giden kan akımının değerlendirilmesi. Plasenta yeterliliği ve bebek beslenmesi kontrol edilir.',
        },
        {
          title: '3D/4D Görüntüleme',
          description: 'Bebeğin üç boyutlu görüntüsü ve hareketli (4D) görüntüleri elde edilir. Yüz hatları, mimikler görüntülenir.',
        },
        {
          title: 'Büyüme Takip Ultrasonları',
          description: 'Üçüncü trimesterde bebeğin büyümesi, pozisyonu ve doğuma hazırlığı değerlendirilir.',
        },
      ],
      faq: [
        {
          question: '3D ve 4D ultrason arasındaki fark nedir?',
          answer: '3D ultrason durağan üç boyutlu görüntü verirken, 4D ultrason bebeğin hareketlerini gerçek zamanlı olarak görüntüler.',
        },
        {
          question: 'Detaylı ultrason ne zaman yapılmalı?',
          answer: 'En ideal zaman 18-22. gebelik haftalarıdır. Bu dönemde bebek yeterince büyümüştür ve amniyotik sıvı yeterli miktardadır.',
        },
        {
          question: 'Ultrason bebeğe zarar verir mi?',
          answer: 'Hayır, ultrason tamamen güvenlidir. Radyasyon içermez, ses dalgaları kullanır ve bebeğe hiçbir zararı yoktur.',
        },
        {
          question: 'Ultrason öncesi hazırlık gerekir mi?',
          answer: 'Erken gebelik ultrasonları için dolu mesane gerekebilir. İlerleyen haftalarda özel bir hazırlık gerekmez.',
        },
        {
          question: 'Bebek cinsiyeti ne zaman belli olur?',
          answer: 'Genellikle 16. haftadan itibaren cinsiyet tayini yapılabilir. Ancak en net sonuç 18-20. haftalarda elde edilir.',
        },
        {
          question: 'Detaylı ultrasonu kim yapar?',
          answer: 'Detaylı ultrason, perinatoloji uzmanı veya bu konuda deneyimli kadın doğum uzmanları tarafından yapılır. Muayeneyi yapan hekimin bebeğin anatomik gelişimini iyi bilmesi, normal ve anormal varyasyonları ayırt edebilmesi gerekir.',
        },
      ],
      relatedServices: ['gebelik-takibi', 'dogum', 'kisirlik-tedavisi'],
    },
    en: {
      title: 'Detailed Ultrasound',
      subtitle: 'View Your Baby with 3D/4D Ultrasound',
      description: 'Detailed imaging of your baby and anomaly screening with the latest ultrasound technology.',
      longDescription: [
        'Detailed ultrasound is a comprehensive ultrasound examination performed between 19-23 weeks of pregnancy. This examination evaluates the baby\'s anatomical structures, possible congenital anomalies, maternal risk factors, and preterm birth risk. Approximately 70-80% of existing anomalies can be detected.',
        'Detailed ultrasound is an advanced imaging method used to evaluate the healthy development of the baby during pregnancy. With 3D and 4D ultrasound technology, even the babys facial features, fingers and toes can be clearly visualized.',
        'Detailed ultrasound, also known as anomaly screening, is usually performed between 18-22 weeks of pregnancy. During this screening, all organs, skeletal system, brain structures, and internal organs of the baby are examined one by one.',
        'Ultrasound examination is a completely painless and safe procedure. It does not contain any radiation and does not harm the baby. Images are obtained using sound waves.',
        'Detailed ultrasound provides important information not only for anomaly screening but also for placenta position, amniotic fluid amount, baby size, and gender determination.',
      ],
      benefits: [
        '3D imaging of the baby',
        'Monitoring baby movements with 4D',
        'Detection of anomalies and structural disorders',
        'Gender determination',
        'Placenta and amniotic fluid evaluation',
        'Baby size and estimated weight calculation',
        'Detailed evaluation in multiple pregnancies',
        'Souvenir photos and video recording',
      ],
      procedures: [
        {
          title: 'First Trimester Ultrasound (11-14 Weeks)',
          description: 'Nuchal translucency (NT) measurement, nasal bone evaluation, and early anomaly screening are performed.',
        },
        {
          title: 'Detailed Anomaly Screening (18-22 Weeks)',
          description: 'All organ systems, brain, heart, spine, kidneys, extremities are examined in detail.',
        },
        {
          title: 'Fetal Echocardiography',
          description: 'Detailed ultrasonographic examination of the baby heart. Heart chambers, valves, and vascular structures are evaluated.',
        },
        {
          title: 'Doppler Ultrasound',
          description: 'Evaluation of blood flow to the baby. Placental adequacy and baby nutrition are checked.',
        },
        {
          title: '3D/4D Imaging',
          description: 'Three-dimensional image of the baby and moving (4D) images are obtained. Facial features and expressions are visualized.',
        },
        {
          title: 'Growth Follow-up Ultrasounds',
          description: 'In the third trimester, the babys growth, position, and readiness for birth are evaluated.',
        },
      ],
      faq: [
        {
          question: 'What is the difference between 3D and 4D ultrasound?',
          answer: '3D ultrasound gives a static three-dimensional image, while 4D ultrasound shows the babys movements in real time.',
        },
        {
          question: 'When should detailed ultrasound be done?',
          answer: 'The ideal time is 18-22 weeks of pregnancy. At this time, the baby has grown enough and the amniotic fluid is sufficient.',
        },
        {
          question: 'Does ultrasound harm the baby?',
          answer: 'No, ultrasound is completely safe. It does not contain radiation, uses sound waves, and has no harm to the baby.',
        },
        {
          question: 'Is preparation required before ultrasound?',
          answer: 'A full bladder may be required for early pregnancy ultrasounds. No special preparation is required in later weeks.',
        },
        {
          question: 'When can baby gender be determined?',
          answer: 'Gender can usually be determined from the 16th week. However, the clearest result is obtained at 18-20 weeks.',
        },
        {
          question: 'Who performs detailed ultrasound?',
          answer: 'Detailed ultrasound is performed by perinatology specialists or experienced obstetricians. The physician performing the examination must have good knowledge of fetal anatomical development and be able to distinguish normal and abnormal variations.',
        },
      ],
      relatedServices: ['gebelik-takibi', 'dogum', 'kisirlik-tedavisi'],
    },
  },
  'dogum': {
    tr: {
      title: 'Doğum',
      subtitle: 'Normal Doğum ve Sezaryen Operasyonları',
      description: 'Güvenli ve konforlu bir doğum deneyimi için profesyonel destek.',
      longDescription: [
        'Doğum, her kadın için benzersiz ve özel bir deneyimdir. Muayenehanemizde, anne adaylarının bu önemli anı en güvenli ve konforlu şekilde yaşamaları için tüm imkanlarımızı sunuyoruz.',
        'Normal doğum, anne ve bebek sağlığı açısından en doğal ve önerilen yöntemdir. Ancak bazı durumlarda sezaryen doğum gerekli olabilir. Her iki durumda da deneyimli ekibimiz ve modern ekipmanlarımızla yanınızdayız.',
        'Doğum öncesi dönemde yapılan hazırlık eğitimleri, nefes teknikleri ve doğum pozisyonları hakkında bilgilendirme ile anne adayları bu sürece hazırlanır.',
        'Epidural anestezi ile ağrısız doğum seçeneği de sunulmaktadır. Bu yöntem, doğum ağrılarını minimize ederken annenin doğum sürecine aktif katılımını sağlar.',
      ],
      benefits: [
        'Deneyimli doğum ekibi',
        'Modern doğum salonu',
        'Epidural anestezi imkanı',
        'Eşlik eden kişi ile doğum',
        '7/24 acil müdahale imkanı',
        'Doğum sonrası anne-bebek takibi',
        'Emzirme danışmanlığı',
        'Psikolojik destek hizmeti',
      ],
      procedures: [
        {
          title: 'Doğum Öncesi Hazırlık',
          description: 'Son kontroller, doğum planı oluşturma, nefes ve gevşeme tekniklerinin öğretilmesi.',
        },
        {
          title: 'Normal Doğum',
          description: 'Doğal doğum süreci, doğum odasında takip, aktif doğum yönetimi ve bebek doğumu.',
        },
        {
          title: 'Sezaryen Doğum',
          description: 'Gerekli durumlarda planlı veya acil sezaryen operasyonu. Spinal veya genel anestezi ile.',
        },
        {
          title: 'Epidural Anestezi',
          description: 'Ağrısız doğum için bel bölgesine uygulanan anestezi yöntemi.',
        },
        {
          title: 'Doğum Sonrası Bakım',
          description: 'Anne ve bebek sağlığının takibi, emzirme desteği, taburculuk hazırlığı.',
        },
        {
          title: 'Lohusalık Kontrolü',
          description: 'Doğum sonrası iyileşme süreci takibi, dikişlerin kontrolü, aile planlaması danışmanlığı.',
        },
      ],
      faq: [
        {
          question: 'Normal doğum mu sezaryen mi tercih etmeliyim?',
          answer: 'Anne ve bebek sağlığı açısından normal doğum tercih edilir. Ancak bazı tıbbi durumlar sezaryen gerektirebilir. Doktorunuz sizin için en uygun yöntemi belirleyecektir.',
        },
        {
          question: 'Epidural anestezi güvenli mi?',
          answer: 'Evet, deneyimli anestezi uzmanları tarafından uygulanan epidural anestezi güvenli bir yöntemdir.',
        },
        {
          question: 'Doğum sırasında eşim yanımda olabilir mi?',
          answer: 'Evet, normal doğumlarda eşiniz veya bir yakınınız yanınızda olabilir.',
        },
        {
          question: 'Sezaryen sonrası normal doğum yapabilir miyim?',
          answer: 'Bir önceki sezaryenin nedenine ve gebelik durumuna bağlı olarak VBAC (sezaryen sonrası vajinal doğum) mümkün olabilir.',
        },
        {
          question: 'Ne zaman hastaneye gelmeliyim?',
          answer: 'Düzenli ve sıklaşan kasılmalar (5-10 dakikada bir), su gelmesi veya kanama durumunda hastaneye gelmelisiniz.',
        },
      ],
      relatedServices: ['gebelik-takibi', 'detayli-ultrason', 'pelvik-taban'],
    },
    en: {
      title: 'Delivery',
      subtitle: 'Normal Birth and Cesarean Operations',
      description: 'Professional support for a safe and comfortable birth experience.',
      longDescription: [
        'Birth is a unique and special experience for every woman. In our clinic, we offer all our facilities for expectant mothers to experience this important moment in the safest and most comfortable way.',
        'Normal delivery is the most natural and recommended method for mother and baby health. However, cesarean delivery may be necessary in some cases. In both cases, we are with you with our experienced team and modern equipment.',
        'Expectant mothers are prepared for this process with preparatory trainings, breathing techniques, and information about birth positions during the prenatal period.',
        'Painless delivery option with epidural anesthesia is also offered. This method minimizes labor pains while allowing the mother to actively participate in the birth process.',
      ],
      benefits: [
        'Experienced birth team',
        'Modern delivery room',
        'Epidural anesthesia option',
        'Birth with accompanying person',
        '24/7 emergency intervention',
        'Postpartum mother-baby follow-up',
        'Breastfeeding counseling',
        'Psychological support service',
      ],
      procedures: [
        {
          title: 'Prenatal Preparation',
          description: 'Final check-ups, birth plan creation, teaching breathing and relaxation techniques.',
        },
        {
          title: 'Normal Delivery',
          description: 'Natural birth process, monitoring in the delivery room, active labor management, and baby delivery.',
        },
        {
          title: 'Cesarean Delivery',
          description: 'Planned or emergency cesarean operation when necessary. With spinal or general anesthesia.',
        },
        {
          title: 'Epidural Anesthesia',
          description: 'Anesthesia method applied to the lower back for painless delivery.',
        },
        {
          title: 'Postpartum Care',
          description: 'Follow-up of mother and baby health, breastfeeding support, discharge preparation.',
        },
        {
          title: 'Postpartum Check-up',
          description: 'Post-delivery recovery follow-up, stitch control, family planning counseling.',
        },
      ],
      faq: [
        {
          question: 'Should I choose normal delivery or cesarean?',
          answer: 'Normal delivery is preferred for mother and baby health. However, some medical conditions may require cesarean. Your doctor will determine the most suitable method for you.',
        },
        {
          question: 'Is epidural anesthesia safe?',
          answer: 'Yes, epidural anesthesia applied by experienced anesthesiologists is a safe method.',
        },
        {
          question: 'Can my spouse be with me during delivery?',
          answer: 'Yes, your spouse or a relative can be with you during normal deliveries.',
        },
        {
          question: 'Can I have a normal delivery after cesarean?',
          answer: 'Depending on the reason for the previous cesarean and pregnancy status, VBAC (vaginal birth after cesarean) may be possible.',
        },
        {
          question: 'When should I come to the hospital?',
          answer: 'You should come to the hospital when you have regular and increasing contractions (every 5-10 minutes), water breaking, or bleeding.',
        },
      ],
      relatedServices: ['gebelik-takibi', 'detayli-ultrason', 'pelvik-taban'],
    },
  },
  'jinekoloji': {
    tr: {
      title: 'Jinekoloji',
      subtitle: 'Kadın Hastalıklarının Tanı ve Tedavisi',
      description: 'Kapsamlı jinekolojik muayene, tarama testleri ve kadın sağlığı hizmetleri.',
      longDescription: [
        'Jinekoloji, kadın üreme sistemi sağlığı ile ilgilenen tıp dalıdır. Düzenli jinekolojik kontroller, kadın sağlığının korunması ve olası hastalıkların erken teşhisi için büyük önem taşır.',
        'Muayenehanemizde, adölesan dönemden menopoz sonrasına kadar her yaş grubundaki kadınlara kapsamlı jinekolojik hizmetler sunulmaktadır. Smear testi, HPV taraması, pelvik ultrason ve kolposkopi gibi tanı yöntemleri uygulanmaktadır.',
        'Adet düzensizlikleri, ağrılı adet, akıntı problemleri, cinsel yolla bulaşan hastalıklar, rahim ve yumurtalık hastalıkları gibi pek çok konuda tanı ve tedavi hizmeti verilmektedir.',
        'Koruyucu sağlık hizmetleri kapsamında düzenli taramalar, aşılama programları ve sağlıklı yaşam danışmanlığı da sunulmaktadır.',
      ],
      benefits: [
        'Kapsamlı jinekolojik muayene',
        'Smear testi ve HPV taraması',
        'Pelvik ultrason',
        'Kolposkopi',
        'Adet düzensizliği tedavisi',
        'Cinsel yolla bulaşan hastalık taraması',
        'Rahim içi araç (RİA) uygulaması',
        'Koruyucu sağlık hizmetleri',
      ],
      procedures: [
        {
          title: 'Jinekolojik Muayene',
          description: 'Pelvik muayene, spekulum muayenesi ve bimanuel muayene ile değerlendirme.',
        },
        {
          title: 'Smear Testi (Pap Smear)',
          description: 'Rahim ağzından alınan hücre örneği ile rahim ağzı kanseri taraması.',
        },
        {
          title: 'HPV Testi',
          description: 'İnsan Papilloma Virüsü taraması. Rahim ağzı kanserinin en önemli risk faktörü.',
        },
        {
          title: 'Kolposkopi',
          description: 'Büyüteci bir cihazla rahim ağzının detaylı incelenmesi.',
        },
        {
          title: 'Pelvik Ultrason',
          description: 'Rahim, yumurtalıklar ve diğer pelvik organların görüntülenmesi.',
        },
        {
          title: 'Endometrial Biyopsi',
          description: 'Rahim içinden doku örneği alınması ve patolojik inceleme.',
        },
      ],
      faq: [
        {
          question: 'Ne sıklıkla jinekolojik kontrole gidilmeli?',
          answer: 'Şikayeti olmayan kadınların yılda bir kez jinekolojik kontrol ve smear testi yaptırması önerilir.',
        },
        {
          question: 'Smear testi ağrılı mı?',
          answer: 'Smear testi genellikle ağrısız bir işlemdir. Sadece hafif bir rahatsızlık hissedilebilir.',
        },
        {
          question: 'Adet düzensizliğinin nedenleri nelerdir?',
          answer: 'Hormonal dengesizlikler, polikistik over sendromu, tiroid hastalıkları, stres ve kilo değişimleri adet düzensizliğine neden olabilir.',
        },
        {
          question: 'HPV aşısı kimlere uygulanmalı?',
          answer: 'HPV aşısı 9-26 yaş arasındaki kadın ve erkeklere önerilebilir. İdeal yaş 11-12dir.',
        },
        {
          question: 'Hangi durumlarda acil jinekolojik muayene gerekir?',
          answer: 'Ani şiddetli karın ağrısı, anormal vajinal kanama, yüksek ateşle birlikte pelvik ağrı gibi durumlarda acil muayene gerekir.',
        },
      ],
      relatedServices: ['rahim-hastaliklari', 'over-hastaliklari', 'menopoz'],
    },
    en: {
      title: 'Gynecology',
      subtitle: 'Diagnosis and Treatment of Womens Diseases',
      description: 'Comprehensive gynecological examination, screening tests, and womens health services.',
      longDescription: [
        'Gynecology is the branch of medicine that deals with female reproductive system health. Regular gynecological check-ups are very important for protecting womens health and early diagnosis of possible diseases.',
        'In our clinic, comprehensive gynecological services are offered to women of all age groups from adolescence to post-menopause. Diagnostic methods such as Pap smear, HPV screening, pelvic ultrasound, and colposcopy are applied.',
        'Diagnosis and treatment services are provided for many issues such as menstrual irregularities, painful periods, discharge problems, sexually transmitted diseases, uterine and ovarian diseases.',
        'Regular screenings, vaccination programs, and healthy lifestyle counseling are also offered within the scope of preventive health services.',
      ],
      benefits: [
        'Comprehensive gynecological examination',
        'Pap smear and HPV screening',
        'Pelvic ultrasound',
        'Colposcopy',
        'Menstrual irregularity treatment',
        'Sexually transmitted disease screening',
        'IUD application',
        'Preventive health services',
      ],
      procedures: [
        {
          title: 'Gynecological Examination',
          description: 'Evaluation with pelvic examination, speculum examination, and bimanual examination.',
        },
        {
          title: 'Pap Smear Test',
          description: 'Cervical cancer screening with cell sample taken from the cervix.',
        },
        {
          title: 'HPV Test',
          description: 'Human Papilloma Virus screening. The most important risk factor for cervical cancer.',
        },
        {
          title: 'Colposcopy',
          description: 'Detailed examination of the cervix with a magnifying device.',
        },
        {
          title: 'Pelvic Ultrasound',
          description: 'Imaging of the uterus, ovaries, and other pelvic organs.',
        },
        {
          title: 'Endometrial Biopsy',
          description: 'Taking tissue sample from inside the uterus and pathological examination.',
        },
      ],
      faq: [
        {
          question: 'How often should I have a gynecological check-up?',
          answer: 'Women without complaints are recommended to have a gynecological check-up and Pap smear test once a year.',
        },
        {
          question: 'Is Pap smear painful?',
          answer: 'Pap smear is usually a painless procedure. Only mild discomfort may be felt.',
        },
        {
          question: 'What causes menstrual irregularity?',
          answer: 'Hormonal imbalances, polycystic ovary syndrome, thyroid diseases, stress, and weight changes can cause menstrual irregularity.',
        },
        {
          question: 'Who should get the HPV vaccine?',
          answer: 'HPV vaccine can be recommended for women and men between 9-26 years old. The ideal age is 11-12.',
        },
        {
          question: 'When is emergency gynecological examination needed?',
          answer: 'Emergency examination is needed in situations such as sudden severe abdominal pain, abnormal vaginal bleeding, pelvic pain with high fever.',
        },
      ],
      relatedServices: ['rahim-hastaliklari', 'over-hastaliklari', 'menopoz'],
    },
  },
  'urojinekoloji': {
    tr: {
      title: 'Ürojinekoloji',
      subtitle: 'İdrar Kaçırma ve Pelvik Taban Bozuklukları',
      description: 'İdrar kaçırma, mesane sarkması ve pelvik taban problemlerinin tedavisi.',
      longDescription: [
        'Ürojinekoloji, kadınlarda idrar kaçırma ve pelvik taban bozukluklarının tanı ve tedavisi ile ilgilenen alt uzmanlık dalıdır. Bu problemler özellikle doğum yapmış ve menopoz dönemindeki kadınlarda sık görülür.',
        'İdrar kaçırma (üriner inkontinans) sosyal yaşamı olumsuz etkileyen önemli bir sorundur. Stres tipi inkontinans, urge inkontinans ve mikst tip inkontinans gibi farklı tipleri vardır ve her birinin tedavi yaklaşımı farklıdır.',
        'Pelvik taban kaslarının zayıflaması sonucu mesane, rahim veya rektum sarkması (prolapsus) gelişebilir. Bu durumlar konservatif yöntemlerden cerrahiye kadar geniş bir tedavi yelpazesi ile ele alınır.',
        'Modern tedavi seçenekleri arasında pelvik taban egzersizleri, vajinal pesser uygulaması, lazer tedavisi ve minimal invaziv cerrahi yöntemler bulunmaktadır.',
      ],
      benefits: [
        'İdrar kaçırma tedavisi',
        'Pelvik taban güçlendirme',
        'Mesane sarkması tedavisi',
        'Vajinal lazer uygulaması',
        'Ürodinamik testler',
        'Minimal invaziv cerrahi',
        'Pesser uygulaması',
        'Kişisel rehabilitasyon programı',
      ],
      procedures: [
        {
          title: 'Ürojinekolojik Değerlendirme',
          description: 'Detaylı öykü, fizik muayene ve şikayet değerlendirmesi.',
        },
        {
          title: 'Ürodinamik Test',
          description: 'Mesane fonksiyonlarının objektif olarak değerlendirilmesi.',
        },
        {
          title: 'Pelvik Taban Egzersizleri (Kegel)',
          description: 'Pelvik taban kaslarını güçlendiren egzersiz programı.',
        },
        {
          title: 'Vajinal Pesser',
          description: 'Organ sarkmasını destekleyen tıbbi cihaz uygulaması.',
        },
        {
          title: 'Lazer Tedavisi',
          description: 'Vajinal dokuyu sıkılaştıran ve idrar kaçırmayı azaltan lazer uygulaması.',
        },
        {
          title: 'TOT/TVT Operasyonu',
          description: 'Stres tipi idrar kaçırma için minimal invaziv askı operasyonu.',
        },
      ],
      faq: [
        {
          question: 'İdrar kaçırma normal midir?',
          answer: 'İdrar kaçırma yaygın bir problem olmakla birlikte normal değildir ve tedavi edilebilir.',
        },
        {
          question: 'Kegel egzersizleri nasıl yapılır?',
          answer: 'Pelvik taban kaslarını sıkıp 5-10 saniye tutun, sonra gevşetin. Günde 3 set, her set 10-15 tekrar önerilir.',
        },
        {
          question: 'Ameliyatsız tedavi mümkün mü?',
          answer: 'Evet, birçok hasta egzersiz, ilaç tedavisi ve lazer gibi ameliyatsız yöntemlerle tedavi edilebilir.',
        },
        {
          question: 'Lazer tedavisi ağrılı mı?',
          answer: 'Vajinal lazer tedavisi genellikle ağrısız veya minimal rahatsızlık veren bir işlemdir.',
        },
        {
          question: 'İdrar kaçırma ameliyatı sonrası normal yaşama ne zaman dönülebilir?',
          answer: 'Minimal invaziv ameliyatlar sonrası genellikle 1-2 hafta içinde normal aktivitelere dönülebilir.',
        },
      ],
      relatedServices: ['pelvik-taban', 'kurtaj', 'menopoz'],
    },
    en: {
      title: 'Urogynecology',
      subtitle: 'Urinary Incontinence and Pelvic Floor Disorders',
      description: 'Treatment of urinary incontinence, bladder prolapse, and pelvic floor problems.',
      longDescription: [
        'Urogynecology is a subspecialty that deals with the diagnosis and treatment of urinary incontinence and pelvic floor disorders in women. These problems are especially common in women who have given birth and are in menopause.',
        'Urinary incontinence is an important problem that negatively affects social life. There are different types such as stress incontinence, urge incontinence, and mixed incontinence, and the treatment approach for each is different.',
        'As a result of weakening of the pelvic floor muscles, bladder, uterus, or rectal prolapse may develop. These conditions are addressed with a wide range of treatments from conservative methods to surgery.',
        'Modern treatment options include pelvic floor exercises, vaginal pessary application, laser treatment, and minimally invasive surgical methods.',
      ],
      benefits: [
        'Urinary incontinence treatment',
        'Pelvic floor strengthening',
        'Bladder prolapse treatment',
        'Vaginal laser application',
        'Urodynamic tests',
        'Minimally invasive surgery',
        'Pessary application',
        'Personal rehabilitation program',
      ],
      procedures: [
        {
          title: 'Urogynecological Evaluation',
          description: 'Detailed history, physical examination, and complaint evaluation.',
        },
        {
          title: 'Urodynamic Test',
          description: 'Objective evaluation of bladder functions.',
        },
        {
          title: 'Pelvic Floor Exercises (Kegel)',
          description: 'Exercise program that strengthens the pelvic floor muscles.',
        },
        {
          title: 'Vaginal Pessary',
          description: 'Medical device application that supports organ prolapse.',
        },
        {
          title: 'Laser Treatment',
          description: 'Laser application that tightens vaginal tissue and reduces urinary incontinence.',
        },
        {
          title: 'TOT/TVT Operation',
          description: 'Minimally invasive sling operation for stress-type urinary incontinence.',
        },
      ],
      faq: [
        {
          question: 'Is urinary incontinence normal?',
          answer: 'While urinary incontinence is a common problem, it is not normal and can be treated.',
        },
        {
          question: 'How are Kegel exercises done?',
          answer: 'Squeeze the pelvic floor muscles and hold for 5-10 seconds, then relax. 3 sets per day, 10-15 repetitions per set is recommended.',
        },
        {
          question: 'Is non-surgical treatment possible?',
          answer: 'Yes, many patients can be treated with non-surgical methods such as exercise, medication, and laser.',
        },
        {
          question: 'Is laser treatment painful?',
          answer: 'Vaginal laser treatment is usually a painless or minimally discomforting procedure.',
        },
        {
          question: 'When can I return to normal life after urinary incontinence surgery?',
          answer: 'After minimally invasive surgeries, normal activities can usually be resumed within 1-2 weeks.',
        },
      ],
      relatedServices: ['pelvik-taban', 'kurtaj', 'menopoz'],
    },
  },
  'genital-estetik': {
    tr: {
      title: 'Genital Estetik',
      subtitle: 'Labioplasti ve Vajinal Estetik İşlemler',
      description: 'Genital bölge estetik operasyonları ile kendinizi daha iyi hissedin.',
      longDescription: [
        'Genital estetik, kadınların genital bölgelerindeki estetik kaygıları gidermek ve fonksiyonel problemleri çözmek amacıyla yapılan işlemleri kapsar. Bu işlemler hem estetik hem de tıbbi nedenlerle tercih edilebilir.',
        'Labioplasti, iç dudakların (labia minora) büyüklüğünü azaltmak veya şekillendirmek için yapılan en yaygın genital estetik işlemdir. Aşırı büyük labialar egzersiz yaparken, bisiklete binerken veya cinsel ilişki sırasında rahatsızlık verebilir.',
        'Vajinal gençleştirme işlemleri, özellikle doğum sonrası vajinal gevşeme yaşayan kadınlarda tercih edilmektedir. Lazer tedavisi ve cerrahi yöntemler ile vajinal sıkılaştırma sağlanabilir.',
        'Tüm genital estetik işlemler, hasta mahremiyetine en üst düzeyde önem verilerek, steril koşullarda ve deneyimli ekip tarafından gerçekleştirilmektedir.',
      ],
      benefits: [
        'Labioplasti operasyonu',
        'Vajinal sıkılaştırma',
        'Klitoral estetik',
        'G-spot amplifikasyonu',
        'Vajinal lazer tedavisi',
        'Hymen onarımı',
        'Perineoplasti',
        'Kombine estetik işlemler',
      ],
      procedures: [
        {
          title: 'Labioplasti',
          description: 'İç dudakların (labia minora) cerrahi olarak küçültülmesi veya şekillendirilmesi.',
        },
        {
          title: 'Vajinoplasti',
          description: 'Gevşemiş vajinal kanalın cerrahi olarak daraltılması.',
        },
        {
          title: 'Lazer Vajinal Gençleştirme',
          description: 'Lazer ile vajinal dokunun sıkılaştırılması ve nemlendirilmesi.',
        },
        {
          title: 'Perineoplasti',
          description: 'Doğum sonrası zarar görmüş perine bölgesinin onarımı.',
        },
        {
          title: 'Klitoral Estetik',
          description: 'Klitoris bölgesindeki fazla dokuların düzeltilmesi.',
        },
        {
          title: 'Kombine İşlemler',
          description: 'Birden fazla estetik işlemin aynı seansta uygulanması.',
        },
      ],
      faq: [
        {
          question: 'Labioplasti operasyonu ağrılı mı?',
          answer: 'İşlem lokal veya genel anestezi altında yapıldığı için operasyon sırasında ağrı hissedilmez. İyileşme sürecinde hafif rahatsızlık olabilir.',
        },
        {
          question: 'İyileşme süreci ne kadar sürer?',
          answer: 'Genellikle 1-2 hafta içinde normal aktivitelere dönülebilir. Cinsel ilişki için 4-6 hafta beklenmesi önerilir.',
        },
        {
          question: 'İşlemler iz bırakır mı?',
          answer: 'Modern cerrahi teknikler ile izler minimal düzeydedir ve zamanla neredeyse görünmez hale gelir.',
        },
        {
          question: 'Hangi yaşta bu işlemler yapılabilir?',
          answer: '18 yaş üstü, gelişimini tamamlamış kadınlarda bu işlemler güvenle uygulanabilir.',
        },
        {
          question: 'İşlemler cinsel hazzı etkiler mi?',
          answer: 'Doğru uygulanan işlemler cinsel hazzı olumsuz etkilemez, aksine bazı hastalarda artış bildirilmektedir.',
        },
      ],
      relatedServices: ['kurtaj', 'urojinekoloji', 'pelvik-taban'],
    },
    en: {
      title: 'Genital Aesthetics',
      subtitle: 'Labiaplasty and Vaginal Aesthetic Procedures',
      description: 'Feel better about yourself with genital area aesthetic operations.',
      longDescription: [
        'Genital aesthetics covers procedures performed to address aesthetic concerns and solve functional problems in womens genital areas. These procedures can be preferred for both aesthetic and medical reasons.',
        'Labiaplasty is the most common genital aesthetic procedure performed to reduce or reshape the size of the inner lips (labia minora). Excessively large labia can cause discomfort during exercise, cycling, or sexual intercourse.',
        'Vaginal rejuvenation procedures are especially preferred by women experiencing vaginal laxity after childbirth. Vaginal tightening can be achieved with laser treatment and surgical methods.',
        'All genital aesthetic procedures are performed under sterile conditions by an experienced team, with the highest regard for patient privacy.',
      ],
      benefits: [
        'Labiaplasty operation',
        'Vaginal tightening',
        'Clitoral aesthetics',
        'G-spot amplification',
        'Vaginal laser treatment',
        'Hymen repair',
        'Perineoplasty',
        'Combined aesthetic procedures',
      ],
      procedures: [
        {
          title: 'Labiaplasty',
          description: 'Surgical reduction or shaping of the inner lips (labia minora).',
        },
        {
          title: 'Vaginoplasty',
          description: 'Surgical narrowing of the relaxed vaginal canal.',
        },
        {
          title: 'Laser Vaginal Rejuvenation',
          description: 'Tightening and moisturizing vaginal tissue with laser.',
        },
        {
          title: 'Perineoplasty',
          description: 'Repair of the perineal area damaged after childbirth.',
        },
        {
          title: 'Clitoral Aesthetics',
          description: 'Correction of excess tissue in the clitoral area.',
        },
        {
          title: 'Combined Procedures',
          description: 'Application of multiple aesthetic procedures in the same session.',
        },
      ],
      faq: [
        {
          question: 'Is labiaplasty operation painful?',
          answer: 'Since the procedure is performed under local or general anesthesia, no pain is felt during the operation. There may be mild discomfort during the healing process.',
        },
        {
          question: 'How long is the recovery period?',
          answer: 'Normal activities can usually be resumed within 1-2 weeks. Waiting 4-6 weeks for sexual intercourse is recommended.',
        },
        {
          question: 'Do the procedures leave scars?',
          answer: 'With modern surgical techniques, scars are minimal and become almost invisible over time.',
        },
        {
          question: 'At what age can these procedures be done?',
          answer: 'These procedures can be safely applied to women over 18 years old who have completed their development.',
        },
        {
          question: 'Do the procedures affect sexual pleasure?',
          answer: 'Properly performed procedures do not negatively affect sexual pleasure; on the contrary, some patients report an increase.',
        },
      ],
      relatedServices: ['kurtaj', 'urojinekoloji', 'pelvik-taban'],
    },
  },
  'kisirlik-tedavisi': {
    tr: {
      title: 'Kısırlık Tedavisi',
      subtitle: 'İnfertilite Değerlendirmesi ve Tedavi Planlaması',
      description: 'Çocuk sahibi olmak isteyen çiftlere kapsamlı değerlendirme ve tedavi seçenekleri.',
      longDescription: [
        'İnfertilite (kısırlık), 1 yıl boyunca korunmasız ve düzenli cinsel ilişkiye rağmen gebelik elde edilememesi durumudur. 35 yaş üstü kadınlarda bu süre 6 aya düşer. Kısırlık, kadın veya erkek kaynaklı olabilir ya da her ikisinde de faktörler bulunabilir.',
        'Kısırlık değerlendirmesi, her iki partnerin de detaylı incelenmesini içerir. Kadında hormonal testler, ultrason, HSG (rahim filmi) ve gerekirse laparoskopi yapılır. Erkekte ise semen analizi temel değerlendirmedir.',
        'Tedavi seçenekleri, altta yatan nedene göre belirlenir. Ovülasyon indüksiyonu, IUI (intrauterin inseminasyon) ve IVF (tüp bebek) başlıca tedavi yöntemleridir.',
        'Her çift benzersizdir ve tedavi planı kişiselleştirilir. Psikolojik destek de tedavi sürecinin önemli bir parçasıdır.',
      ],
      benefits: [
        'Kapsamlı infertilite değerlendirmesi',
        'Hormonal testler',
        'HSG (Histerosalpingografi)',
        'Semen analizi koordinasyonu',
        'Ovülasyon takibi',
        'İlaçlı tedavi protokolleri',
        'IUI uygulaması',
        'IVF merkezlerine yönlendirme',
      ],
      procedures: [
        {
          title: 'Başlangıç Değerlendirmesi',
          description: 'Detaylı öykü alma, fizik muayene ve temel testlerin planlanması.',
        },
        {
          title: 'Hormonal Testler',
          description: 'FSH, LH, E2, AMH, prolaktin, tiroid hormonları testi.',
        },
        {
          title: 'Ultrasonografik Değerlendirme',
          description: 'Antral folikül sayımı, rahim ve yumurtalık değerlendirmesi.',
        },
        {
          title: 'HSG (Rahim Filmi)',
          description: 'Rahim boşluğu ve tüplerin açıklığının röntgen ile değerlendirilmesi.',
        },
        {
          title: 'Ovülasyon İndüksiyonu',
          description: 'İlaçlarla yumurtlamayı uyarma tedavisi.',
        },
        {
          title: 'IUI (Aşılama)',
          description: 'Hazırlanmış spermin rahim içine yerleştirilmesi.',
        },
      ],
      faq: [
        {
          question: 'Ne kadar süre sonra doktora başvurmalıyım?',
          answer: '35 yaş altında 1 yıl, 35 yaş üstünde 6 ay korunmasız ilişkiye rağmen gebelik oluşmadıysa başvurulmalıdır.',
        },
        {
          question: 'Kısırlık tedavisi ne kadar başarılı?',
          answer: 'Başarı oranı yaş, kısırlık nedeni ve uygulanan tedaviye göre değişir. Erken başvuru başarı şansını artırır.',
        },
        {
          question: 'HSG işlemi ağrılı mı?',
          answer: 'HSG sırasında kramp benzeri ağrı hissedilebilir. İşlem öncesi ağrı kesici kullanılabilir.',
        },
        {
          question: 'Erkek faktörü nasıl değerlendirilir?',
          answer: 'Semen analizi temel testtir. Gerekirse ileri testler ve üroloji konsültasyonu yapılır.',
        },
        {
          question: 'Stres kısırlığa neden olur mu?',
          answer: 'Aşırı stres hormonal dengeyi bozabilir. Ancak kısırlığın tek nedeni değildir. Psikolojik destek yardımcı olabilir.',
        },
      ],
      relatedServices: ['gebelik-takibi', 'jinekoloji', 'detayli-ultrason'],
    },
    en: {
      title: 'Infertility Treatment',
      subtitle: 'Infertility Evaluation and Treatment Planning',
      description: 'Comprehensive evaluation and treatment options for couples who want to have children.',
      longDescription: [
        'Infertility is the inability to achieve pregnancy despite unprotected and regular sexual intercourse for 1 year. For women over 35, this period is reduced to 6 months. Infertility can be caused by female or male factors, or factors may be present in both.',
        'Infertility evaluation includes detailed examination of both partners. Hormonal tests, ultrasound, HSG (hysterosalpingography), and laparoscopy if necessary are performed in women. Semen analysis is the basic evaluation in men.',
        'Treatment options are determined according to the underlying cause. Ovulation induction, IUI (intrauterine insemination), and IVF are the main treatment methods.',
        'Each couple is unique and the treatment plan is personalized. Psychological support is also an important part of the treatment process.',
      ],
      benefits: [
        'Comprehensive infertility evaluation',
        'Hormonal tests',
        'HSG (Hysterosalpingography)',
        'Semen analysis coordination',
        'Ovulation monitoring',
        'Medication treatment protocols',
        'IUI application',
        'Referral to IVF centers',
      ],
      procedures: [
        {
          title: 'Initial Evaluation',
          description: 'Detailed history taking, physical examination, and planning of basic tests.',
        },
        {
          title: 'Hormonal Tests',
          description: 'FSH, LH, E2, AMH, prolactin, thyroid hormone tests.',
        },
        {
          title: 'Ultrasonographic Evaluation',
          description: 'Antral follicle count, uterus and ovary evaluation.',
        },
        {
          title: 'HSG (Uterine X-ray)',
          description: 'Evaluation of uterine cavity and tube patency by X-ray.',
        },
        {
          title: 'Ovulation Induction',
          description: 'Treatment to stimulate ovulation with medications.',
        },
        {
          title: 'IUI (Insemination)',
          description: 'Placement of prepared sperm into the uterus.',
        },
      ],
      faq: [
        {
          question: 'How long should I wait before seeing a doctor?',
          answer: 'You should consult if pregnancy has not occurred despite unprotected intercourse for 1 year under 35, or 6 months over 35.',
        },
        {
          question: 'How successful is infertility treatment?',
          answer: 'Success rate varies according to age, cause of infertility, and treatment applied. Early consultation increases the chance of success.',
        },
        {
          question: 'Is HSG procedure painful?',
          answer: 'Cramp-like pain may be felt during HSG. Pain relievers can be used before the procedure.',
        },
        {
          question: 'How is male factor evaluated?',
          answer: 'Semen analysis is the basic test. Advanced tests and urology consultation are performed if necessary.',
        },
        {
          question: 'Does stress cause infertility?',
          answer: 'Excessive stress can disrupt hormonal balance. However, it is not the only cause of infertility. Psychological support can help.',
        },
      ],
      relatedServices: ['gebelik-takibi', 'jinekoloji', 'detayli-ultrason'],
    },
  },
  'menopoz': {
    tr: {
      title: 'Menopoz',
      subtitle: 'Menopoz Dönemi Şikayetlerinin Yönetimi',
      description: 'Menopoz sürecinde yaşam kalitesini artıran tedavi ve danışmanlık hizmetleri.',
      longDescription: [
        'Menopoz, kadınların adet döngüsünün kalıcı olarak durduğu doğal bir yaşam evresidir. Genellikle 45-55 yaşları arasında görülür ve son adet tarihinden 12 ay sonra menopoza girildiği kabul edilir.',
        'Menopoz döneminde östrojen hormonu düzeylerinin düşmesi çeşitli semptomların ortaya çıkmasına neden olur. Sıcak basması, gece terlemesi, uyku bozuklukları, vajinal kuruluk, ruh hali değişiklikleri en sık görülen şikayetlerdir.',
        'Uzun vadede östrojen eksikliği osteoporoz (kemik erimesi), kardiyovasküler hastalıklar ve ürogenital problemlere yol açabilir. Bu nedenle menopoz döneminde düzenli sağlık kontrolleri önemlidir.',
        'Tedavi seçenekleri arasında hormon replasman tedavisi (HRT), bitkisel tedaviler, yaşam tarzı değişiklikleri ve vajinal tedaviler bulunmaktadır. Tedavi planı her kadının şikayetlerine ve tıbbi durumuna göre kişiselleştirilir.',
      ],
      benefits: [
        'Menopoz semptomlarının yönetimi',
        'Hormon replasman tedavisi',
        'Osteoporoz taraması ve tedavisi',
        'Vajinal kuruluk tedavisi',
        'Uyku düzensizliği yönetimi',
        'Kilo kontrolü danışmanlığı',
        'Kemik yoğunluğu ölçümü',
        'Kardiyovasküler risk değerlendirmesi',
      ],
      procedures: [
        {
          title: 'Menopoz Değerlendirmesi',
          description: 'Semptomların değerlendirilmesi, hormonal testler ve genel sağlık taraması.',
        },
        {
          title: 'Kemik Yoğunluğu Ölçümü (DEXA)',
          description: 'Osteoporoz riski için kemik mineral yoğunluğunun ölçülmesi.',
        },
        {
          title: 'Hormon Replasman Tedavisi',
          description: 'Östrojen ve/veya progesteron içeren ilaç tedavisi.',
        },
        {
          title: 'Vajinal Tedaviler',
          description: 'Lokal östrojen kremleri, lazer tedavisi veya nemlendirici uygulamalar.',
        },
        {
          title: 'Yaşam Tarzı Danışmanlığı',
          description: 'Beslenme, egzersiz ve stres yönetimi önerileri.',
        },
        {
          title: 'Düzenli Takip',
          description: 'Tedavi etkinliği ve yan etkilerin izlenmesi.',
        },
      ],
      faq: [
        {
          question: 'Menopoz belirtileri ne kadar sürer?',
          answer: 'Belirtiler kişiden kişiye değişir. Ortalama 4-5 yıl sürebilir, bazı kadınlarda daha uzun sürebilir.',
        },
        {
          question: 'Hormon tedavisi güvenli mi?',
          answer: 'Uygun hastalarda, doğru dozda ve sürede kullanıldığında güvenlidir. Risk ve faydaları doktorunuzla değerlendirilmelidir.',
        },
        {
          question: 'Menopozda hamile kalınabilir mi?',
          answer: 'Perimenopoz döneminde (menopoza geçiş) hamile kalmak hala mümkündür. Menopoz kesinleştikten sonra doğal yolla hamilelik olmaz.',
        },
        {
          question: 'Erken menopoz nedir?',
          answer: '40 yaş öncesi menopozdur ve tıbbi değerlendirme gerektirir.',
        },
        {
          question: 'Sıcak basmasını azaltmak için ne yapılabilir?',
          answer: 'Hafif giysiler, soğuk içecekler, stres yönetimi, düzenli egzersiz ve gerekirse ilaç tedavisi yardımcı olabilir.',
        },
      ],
      relatedServices: ['jinekoloji', 'urojinekoloji', 'pelvik-taban'],
    },
    en: {
      title: 'Menopause',
      subtitle: 'Management of Menopause Symptoms',
      description: 'Treatment and counseling services that improve quality of life during menopause.',
      longDescription: [
        'Menopause is a natural life stage when womens menstrual cycles permanently stop. It usually occurs between ages 45-55, and menopause is considered to have occurred 12 months after the last menstrual period.',
        'The decrease in estrogen hormone levels during menopause causes various symptoms. Hot flashes, night sweats, sleep disturbances, vaginal dryness, and mood changes are the most common complaints.',
        'In the long term, estrogen deficiency can lead to osteoporosis, cardiovascular diseases, and urogenital problems. Therefore, regular health check-ups during menopause are important.',
        'Treatment options include hormone replacement therapy (HRT), herbal treatments, lifestyle changes, and vaginal treatments. The treatment plan is personalized according to each womans complaints and medical condition.',
      ],
      benefits: [
        'Management of menopause symptoms',
        'Hormone replacement therapy',
        'Osteoporosis screening and treatment',
        'Vaginal dryness treatment',
        'Sleep disorder management',
        'Weight control counseling',
        'Bone density measurement',
        'Cardiovascular risk assessment',
      ],
      procedures: [
        {
          title: 'Menopause Evaluation',
          description: 'Evaluation of symptoms, hormonal tests, and general health screening.',
        },
        {
          title: 'Bone Density Measurement (DEXA)',
          description: 'Measurement of bone mineral density for osteoporosis risk.',
        },
        {
          title: 'Hormone Replacement Therapy',
          description: 'Medication treatment containing estrogen and/or progesterone.',
        },
        {
          title: 'Vaginal Treatments',
          description: 'Local estrogen creams, laser treatment, or moisturizing applications.',
        },
        {
          title: 'Lifestyle Counseling',
          description: 'Nutrition, exercise, and stress management recommendations.',
        },
        {
          title: 'Regular Follow-up',
          description: 'Monitoring treatment effectiveness and side effects.',
        },
      ],
      faq: [
        {
          question: 'How long do menopause symptoms last?',
          answer: 'Symptoms vary from person to person. They can last an average of 4-5 years, and may be longer in some women.',
        },
        {
          question: 'Is hormone therapy safe?',
          answer: 'It is safe when used in appropriate patients, at the right dose and duration. Risks and benefits should be evaluated with your doctor.',
        },
        {
          question: 'Can you get pregnant during menopause?',
          answer: 'It is still possible to get pregnant during perimenopause (transition to menopause). After menopause is confirmed, natural pregnancy does not occur.',
        },
        {
          question: 'What is early menopause?',
          answer: 'It is menopause before age 40 and requires medical evaluation.',
        },
        {
          question: 'What can be done to reduce hot flashes?',
          answer: 'Light clothing, cold drinks, stress management, regular exercise, and medication if necessary can help.',
        },
      ],
      relatedServices: ['jinekoloji', 'urojinekoloji', 'pelvik-taban'],
    },
  },
  'rahim-hastaliklari': {
    tr: {
      title: 'Rahim Hastalıkları',
      subtitle: 'Miyom, Polip ve Endometriozis Tedavisi',
      description: 'Rahim hastalıklarının tanı ve modern tedavi yöntemleri.',
      longDescription: [
        'Rahim hastalıkları, kadınlarda sık görülen ve yaşam kalitesini önemli ölçüde etkileyen durumlardır. Miyomlar (lif bezleri), polipler, endometriozis ve adenomiyozis en yaygın rahim patolojileridir.',
        'Miyomlar, rahim kasından kaynaklanan iyi huylu tümörlerdir. Büyüklük ve konumlarına göre ağır adet kanaması, karın ağrısı, sık idrara çıkma ve infertilite gibi şikayetlere neden olabilirler.',
        'Endometriozis, rahim iç tabakasının rahim dışında büyümesidir. Şiddetli adet ağrısı, kronik pelvik ağrı ve kısırlık gibi ciddi problemlere yol açabilir.',
        'Tedavi seçenekleri ilaç tedavisinden cerrahiye kadar geniş bir yelpazede sunulmaktadır. Histeroskopi ve laparoskopi gibi minimal invaziv yöntemler tercih edilmektedir.',
      ],
      benefits: [
        'Miyom tedavisi',
        'Polip çıkarılması',
        'Endometriozis yönetimi',
        'Histeroskopik cerrahi',
        'Laparoskopik cerrahi',
        'İlaç tedavisi',
        'Fertilite koruyucu yaklaşım',
        'Minimal invaziv yöntemler',
      ],
      procedures: [
        {
          title: 'Tanısal Değerlendirme',
          description: 'Ultrason, MRI, histeroskopi ile detaylı değerlendirme.',
        },
        {
          title: 'Histeroskopi',
          description: 'Rahim içinin kamera ile görüntülenmesi ve tedavisi.',
        },
        {
          title: 'Polipektomi',
          description: 'Rahim içi poliplerin histeroskopik olarak çıkarılması.',
        },
        {
          title: 'Miyomektomi',
          description: 'Miyomların rahmi koruyarak cerrahi çıkarılması.',
        },
        {
          title: 'Laparoskopik Cerrahi',
          description: 'Kapalı yöntemle karın içi müdahaleler.',
        },
        {
          title: 'Medikal Tedavi',
          description: 'Hormonal ilaçlar ve ağrı yönetimi.',
        },
      ],
      faq: [
        {
          question: 'Miyomlar kansere dönüşür mü?',
          answer: 'Miyomlar iyi huylu tümörlerdir ve kansere dönüşme olasılıkları çok düşüktür (%0.1den az).',
        },
        {
          question: 'Miyom varken hamile kalınabilir mi?',
          answer: 'Miyomların konumu ve büyüklüğüne bağlıdır. Bazı miyomlar fertiliteyi etkileyebilir.',
        },
        {
          question: 'Endometriozis tamamen iyileşir mi?',
          answer: 'Endometriozis kronik bir hastalıktır. Tedavi ile semptomlar kontrol altına alınabilir.',
        },
        {
          question: 'Histeroskopi sonrası ne kadar dinlenmeliyim?',
          answer: 'Genellikle 1-2 gün dinlenme yeterlidir. Çoğu hasta ertesi gün normal aktivitelerine dönebilir.',
        },
        {
          question: 'Rahim alınması (histerektomi) ne zaman gerekir?',
          answer: 'Diğer tedavilerin başarısız olduğu veya ciddi patoloji varlığında, çocuk isteği olmayan hastalarda düşünülebilir.',
        },
      ],
      relatedServices: ['jinekoloji', 'kisirlik-tedavisi', 'over-hastaliklari'],
    },
    en: {
      title: 'Uterine Diseases',
      subtitle: 'Treatment of Fibroids, Polyps, and Endometriosis',
      description: 'Diagnosis and modern treatment methods for uterine diseases.',
      longDescription: [
        'Uterine diseases are common conditions in women that significantly affect quality of life. Fibroids, polyps, endometriosis, and adenomyosis are the most common uterine pathologies.',
        'Fibroids are benign tumors originating from the uterine muscle. Depending on their size and location, they can cause complaints such as heavy menstrual bleeding, abdominal pain, frequent urination, and infertility.',
        'Endometriosis is the growth of the inner layer of the uterus outside the uterus. It can lead to serious problems such as severe menstrual pain, chronic pelvic pain, and infertility.',
        'Treatment options range from medication to surgery. Minimally invasive methods such as hysteroscopy and laparoscopy are preferred.',
      ],
      benefits: [
        'Fibroid treatment',
        'Polyp removal',
        'Endometriosis management',
        'Hysteroscopic surgery',
        'Laparoscopic surgery',
        'Medication treatment',
        'Fertility-preserving approach',
        'Minimally invasive methods',
      ],
      procedures: [
        {
          title: 'Diagnostic Evaluation',
          description: 'Detailed evaluation with ultrasound, MRI, hysteroscopy.',
        },
        {
          title: 'Hysteroscopy',
          description: 'Viewing and treating the inside of the uterus with a camera.',
        },
        {
          title: 'Polypectomy',
          description: 'Hysteroscopic removal of intrauterine polyps.',
        },
        {
          title: 'Myomectomy',
          description: 'Surgical removal of fibroids while preserving the uterus.',
        },
        {
          title: 'Laparoscopic Surgery',
          description: 'Intra-abdominal interventions with closed method.',
        },
        {
          title: 'Medical Treatment',
          description: 'Hormonal medications and pain management.',
        },
      ],
      faq: [
        {
          question: 'Do fibroids turn into cancer?',
          answer: 'Fibroids are benign tumors and the probability of turning into cancer is very low (less than 0.1%).',
        },
        {
          question: 'Can I get pregnant with fibroids?',
          answer: 'It depends on the location and size of the fibroids. Some fibroids can affect fertility.',
        },
        {
          question: 'Is endometriosis completely cured?',
          answer: 'Endometriosis is a chronic disease. Symptoms can be controlled with treatment.',
        },
        {
          question: 'How long should I rest after hysteroscopy?',
          answer: 'Usually 1-2 days of rest is enough. Most patients can return to normal activities the next day.',
        },
        {
          question: 'When is hysterectomy (removal of the uterus) necessary?',
          answer: 'It can be considered in patients with failed other treatments or serious pathology who do not want children.',
        },
      ],
      relatedServices: ['jinekoloji', 'kisirlik-tedavisi', 'over-hastaliklari'],
    },
  },
  'over-hastaliklari': {
    tr: {
      title: 'Over Hastalıkları',
      subtitle: 'Yumurtalık Kistleri ve PKOS Tedavisi',
      description: 'Yumurtalık hastalıklarının tanı ve tedavisi.',
      longDescription: [
        'Over (yumurtalık) hastalıkları, kadın üreme sağlığını doğrudan etkileyen önemli durumları kapsar. Yumurtalık kistleri, polikistik over sendromu (PKOS), over tümörleri ve over yetmezliği başlıca patolojilerdir.',
        'Fonksiyonel kistler en sık görülen kist tipidir ve genellikle kendiliğinden geriler. Ancak dermoid kist, endometrioma ve sistadenom gibi kistler cerrahi gerektirebilir.',
        'Polikistik over sendromu (PKOS), adet düzensizliği, kilo alma, akne, tüylenme ve kısırlık ile karakterize hormonal bir bozukluktur. Kadınların yaklaşık %10unu etkiler.',
        'Tedavi yaklaşımı, hastalığın tipine, hastanın yaşına ve çocuk isteğine göre kişiselleştirilir. Takipten cerrahiye, ilaç tedavisinden yaşam tarzı değişikliklerine kadar geniş bir yelpaze sunulmaktadır.',
      ],
      benefits: [
        'Kist takibi ve tedavisi',
        'PKOS yönetimi',
        'Laparoskopik kist çıkarma',
        'Hormonal düzenleme',
        'Ovülasyon indüksiyonu',
        'Over koruyucu cerrahi',
        'Endometrioma tedavisi',
        'Fertilite danışmanlığı',
      ],
      procedures: [
        {
          title: 'Ultrasonografik Değerlendirme',
          description: 'Kistlerin boyut, yapı ve özelliklerinin değerlendirilmesi.',
        },
        {
          title: 'Hormonal Testler',
          description: 'AMH, FSH, LH, androjen seviyeleri ve diğer hormon testleri.',
        },
        {
          title: 'Tümör Belirteçleri',
          description: 'CA-125, HE4 gibi tümör belirteçlerinin kontrolü.',
        },
        {
          title: 'Laparoskopik Kistektomi',
          description: 'Kapalı yöntemle kistin çıkarılması.',
        },
        {
          title: 'PKOS Tedavisi',
          description: 'Yaşam tarzı değişiklikleri, ilaç tedavisi ve ovülasyon indüksiyonu.',
        },
        {
          title: 'Takip Protokolü',
          description: 'Düzenli ultrason ve hormon takibi.',
        },
      ],
      faq: [
        {
          question: 'Her kist ameliyat gerektirir mi?',
          answer: 'Hayır, fonksiyonel kistlerin çoğu kendiliğinden geriler. Ameliyat kararı kistin tipine, boyutuna ve değişimine göre verilir.',
        },
        {
          question: 'PKOS tamamen iyileşir mi?',
          answer: 'PKOS kronik bir durumdur ancak yaşam tarzı değişiklikleri ve tedavi ile semptomlar kontrol altına alınabilir.',
        },
        {
          question: 'Kistler kansere dönüşür mü?',
          answer: 'Basit fonksiyonel kistler kanser riski taşımaz. Ancak bazı kist tipleri için düzenli takip önemlidir.',
        },
        {
          question: 'PKOS ile hamile kalınabilir mi?',
          answer: 'Evet, uygun tedavi ile PKOS hastalarının büyük çoğunluğu hamile kalabilir.',
        },
        {
          question: 'Kist ameliyatı sonrası hamile kalma şansı azalır mı?',
          answer: 'Over koruyucu cerrahi ile yumurtalık fonksiyonları korunmaya çalışılır. Tecrübeli ellerde fertilite genellikle korunur.',
        },
      ],
      relatedServices: ['jinekoloji', 'kisirlik-tedavisi', 'rahim-hastaliklari'],
    },
    en: {
      title: 'Ovarian Diseases',
      subtitle: 'Treatment of Ovarian Cysts and PCOS',
      description: 'Diagnosis and treatment of ovarian diseases.',
      longDescription: [
        'Ovarian diseases cover important conditions that directly affect female reproductive health. Ovarian cysts, polycystic ovary syndrome (PCOS), ovarian tumors, and ovarian insufficiency are the main pathologies.',
        'Functional cysts are the most common type of cyst and usually regress spontaneously. However, cysts such as dermoid cyst, endometrioma, and cystadenoma may require surgery.',
        'Polycystic ovary syndrome (PCOS) is a hormonal disorder characterized by menstrual irregularity, weight gain, acne, excessive hair growth, and infertility. It affects approximately 10% of women.',
        'The treatment approach is personalized according to the type of disease, the patients age, and desire for children. A wide range from follow-up to surgery, medication to lifestyle changes is offered.',
      ],
      benefits: [
        'Cyst monitoring and treatment',
        'PCOS management',
        'Laparoscopic cyst removal',
        'Hormonal regulation',
        'Ovulation induction',
        'Ovary-preserving surgery',
        'Endometrioma treatment',
        'Fertility counseling',
      ],
      procedures: [
        {
          title: 'Ultrasonographic Evaluation',
          description: 'Evaluation of size, structure, and characteristics of cysts.',
        },
        {
          title: 'Hormonal Tests',
          description: 'AMH, FSH, LH, androgen levels, and other hormone tests.',
        },
        {
          title: 'Tumor Markers',
          description: 'Control of tumor markers such as CA-125, HE4.',
        },
        {
          title: 'Laparoscopic Cystectomy',
          description: 'Removal of cyst with closed method.',
        },
        {
          title: 'PCOS Treatment',
          description: 'Lifestyle changes, medication, and ovulation induction.',
        },
        {
          title: 'Follow-up Protocol',
          description: 'Regular ultrasound and hormone follow-up.',
        },
      ],
      faq: [
        {
          question: 'Does every cyst require surgery?',
          answer: 'No, most functional cysts regress spontaneously. The decision for surgery is made according to the type, size, and change of the cyst.',
        },
        {
          question: 'Is PCOS completely cured?',
          answer: 'PCOS is a chronic condition, but symptoms can be controlled with lifestyle changes and treatment.',
        },
        {
          question: 'Do cysts turn into cancer?',
          answer: 'Simple functional cysts do not carry cancer risk. However, regular follow-up is important for some cyst types.',
        },
        {
          question: 'Can I get pregnant with PCOS?',
          answer: 'Yes, with appropriate treatment, the majority of PCOS patients can get pregnant.',
        },
        {
          question: 'Does the chance of getting pregnant decrease after cyst surgery?',
          answer: 'Ovary-preserving surgery tries to preserve ovarian functions. In experienced hands, fertility is usually preserved.',
        },
      ],
      relatedServices: ['jinekoloji', 'kisirlik-tedavisi', 'rahim-hastaliklari'],
    },
  },
  'pelvik-taban': {
    tr: {
      title: 'Pelvik Taban Bozuklukları',
      subtitle: 'Pelvik Organ Sarkması Tedavisi',
      description: 'Pelvik taban kaslarının güçlendirilmesi ve organ sarkması tedavisi.',
      longDescription: [
        'Pelvik taban, mesane, rahim ve rektumu destekleyen kas ve bağ dokusu yapısıdır. Bu yapının zayıflaması pelvik organ prolapsusu (sarkması), idrar ve gaita kaçırma gibi problemlere yol açar.',
        'Pelvik taban bozuklukları özellikle vajinal doğum yapmış, menopozda olan veya kronik konstipasyonu bulunan kadınlarda sık görülür. Genetik yatkınlık, obezite ve ağır kaldırma da risk faktörleridir.',
        'Prolapsus tipleri arasında sistosel (mesane sarkması), rektosel (rektum sarkması), uterin prolapsus (rahim sarkması) ve vajinal vault prolapsusu sayılabilir.',
        'Tedavi seçenekleri konservatif yöntemlerden cerrahiye kadar geniş bir yelpazede sunulmaktadır. Pelvik taban egzersizleri, pesser kullanımı ve gerektiğinde cerrahi onarım yapılmaktadır.',
      ],
      benefits: [
        'Pelvik taban değerlendirmesi',
        'Prolapsus tedavisi',
        'Pesser uygulaması',
        'Pelvik rehabilitasyon',
        'Cerrahi onarım',
        'Laparoskopik sakrokolpopeksi',
        'Mesh olmayan onarım',
        'Kombine tedavi yaklaşımı',
      ],
      procedures: [
        {
          title: 'Pelvik Muayene',
          description: 'Prolapsus derecesinin ve tipinin belirlenmesi.',
        },
        {
          title: 'Ürodinamik Değerlendirme',
          description: 'Mesane fonksiyonlarının test edilmesi.',
        },
        {
          title: 'Pelvik Taban Fizyoterapisi',
          description: 'Kegel egzersizleri ve biofeedback tedavisi.',
        },
        {
          title: 'Pesser Uygulaması',
          description: 'Prolapsusun desteklenmesi için vajinal cihaz yerleştirilmesi.',
        },
        {
          title: 'Vajinal Onarım',
          description: 'Ön ve/veya arka vajinal duvar onarımı.',
        },
        {
          title: 'Sakrokolpopeksi',
          description: 'Laparoskopik olarak vajinal tepelerin sakruma asılması.',
        },
      ],
      faq: [
        {
          question: 'Pelvik taban sarkması tehlikeli mi?',
          answer: 'Hayat tehlikesi oluşturmaz ancak yaşam kalitesini ciddi şekilde etkileyebilir. Tedavi ile semptomlar giderilebilir.',
        },
        {
          question: 'Kegel egzersizleri yeterli mi?',
          answer: 'Hafif prolapsusta egzersizler yardımcı olabilir. İleri derecede prolapsusta cerrahi gerekebilir.',
        },
        {
          question: 'Pesser kullanımı zor mu?',
          answer: 'Doğru boyutta pesser ile çoğu hasta rahatlıkla kullanabilir. Düzenli kontrol ve temizlik gerektirir.',
        },
        {
          question: 'Ameliyat sonrası nüks olur mu?',
          answer: 'Doğru cerrahi teknik ile nüks oranları düşüktür. Yaşam tarzı önerilerin uyulması önemlidir.',
        },
        {
          question: 'Ameliyat sonrası cinsel ilişki mümkün mü?',
          answer: 'Evet, iyileşme sürecinden sonra (genellikle 6-8 hafta) cinsel ilişki mümkündür.',
        },
      ],
      relatedServices: ['urojinekoloji', 'genital-estetik', 'jinekoloji'],
    },
    en: {
      title: 'Pelvic Floor Disorders',
      subtitle: 'Pelvic Organ Prolapse Treatment',
      description: 'Strengthening pelvic floor muscles and treating organ prolapse.',
      longDescription: [
        'The pelvic floor is the muscle and connective tissue structure that supports the bladder, uterus, and rectum. Weakening of this structure leads to problems such as pelvic organ prolapse, urinary and fecal incontinence.',
        'Pelvic floor disorders are especially common in women who have had vaginal delivery, are in menopause, or have chronic constipation. Genetic predisposition, obesity, and heavy lifting are also risk factors.',
        'Types of prolapse include cystocele (bladder prolapse), rectocele (rectal prolapse), uterine prolapse, and vaginal vault prolapse.',
        'Treatment options range from conservative methods to surgery. Pelvic floor exercises, pessary use, and surgical repair when necessary are performed.',
      ],
      benefits: [
        'Pelvic floor evaluation',
        'Prolapse treatment',
        'Pessary application',
        'Pelvic rehabilitation',
        'Surgical repair',
        'Laparoscopic sacrocolpopexy',
        'Mesh-free repair',
        'Combined treatment approach',
      ],
      procedures: [
        {
          title: 'Pelvic Examination',
          description: 'Determination of prolapse degree and type.',
        },
        {
          title: 'Urodynamic Evaluation',
          description: 'Testing bladder functions.',
        },
        {
          title: 'Pelvic Floor Physiotherapy',
          description: 'Kegel exercises and biofeedback therapy.',
        },
        {
          title: 'Pessary Application',
          description: 'Vaginal device placement to support prolapse.',
        },
        {
          title: 'Vaginal Repair',
          description: 'Anterior and/or posterior vaginal wall repair.',
        },
        {
          title: 'Sacrocolpopexy',
          description: 'Laparoscopic suspension of vaginal apex to sacrum.',
        },
      ],
      faq: [
        {
          question: 'Is pelvic floor prolapse dangerous?',
          answer: 'It is not life-threatening but can seriously affect quality of life. Symptoms can be relieved with treatment.',
        },
        {
          question: 'Are Kegel exercises enough?',
          answer: 'Exercises can help in mild prolapse. Surgery may be required in advanced prolapse.',
        },
        {
          question: 'Is pessary use difficult?',
          answer: 'Most patients can use it comfortably with the right size pessary. Regular check-up and cleaning is required.',
        },
        {
          question: 'Is there recurrence after surgery?',
          answer: 'Recurrence rates are low with correct surgical technique. Following lifestyle recommendations is important.',
        },
        {
          question: 'Is sexual intercourse possible after surgery?',
          answer: 'Yes, sexual intercourse is possible after the healing process (usually 6-8 weeks).',
        },
      ],
      relatedServices: ['urojinekoloji', 'genital-estetik', 'jinekoloji'],
    },
  },
  'kurtaj': {
    tr: {
      title: 'Kürtaj (Gebelik Sonlandırma)',
      subtitle: 'Yasal Süre İçinde Güvenli ve Gizli Gebelik Sonlandırma',
      description: 'Yasal sınırlar içinde güvenli gebelik sonlandırma işlemleri.',
      longDescription: [
        'Kürtaj, istenmeyen gebeliklerin yasal süreler içinde sonlandırılması işlemidir. Türkiye\'de gebeliğin ilk 10 haftasına kadar (son adet tarihinden itibaren) yasal olarak kürtaj yaptırılabilmektedir. Evli çiftlerde eş onayı gerekirken, 18 yaş altı için veli izni zorunludur. Tıbbi endikasyon durumlarında (anne sağlığını tehdit eden durumlar, fetüste ciddi anomali) bu süre uzayabilmektedir.',
        'Gebelik sonlandırma işlemi iki ana yöntemle yapılabilmektedir: Medikal (ilaçlı) kürtaj ve cerrahi (vakum aspirasyon) kürtaj. Medikal kürtaj genellikle 7 haftaya kadar olan gebeliklerde tercih edilirken, cerrahi yöntem 10 haftaya kadar olan gebeliklerde güvenle uygulanabilmektedir. Hangi yöntemin uygulanacağı, gebelik haftası, hastanın genel sağlık durumu ve tercihi göz önünde bulundurularak belirlenir.',
        'Modern tıbbi koşullarda, deneyimli bir hekim tarafından yapılan kürtaj işlemi son derece güvenlidir. Steril ortamda, uygun anestezi yöntemleri kullanılarak gerçekleştirilen işlemde komplikasyon riski minimumdur. Muayenehanemizde hasta mahremiyetine ve gizliliğe büyük önem verilmektedir.',
        'İşlem sonrası iyileşme süreci genellikle hızlıdır. Hastalarımız aynı gün taburcu edilmekte ve normal günlük aktivitelerine kısa sürede dönebilmektedir. İşlem sonrası kontrol muayeneleri, psikolojik destek ve aile planlaması danışmanlığı da hizmetlerimiz arasındadır.',
      ],
      benefits: [
        'Gizlilik ve mahremiyet garantisi',
        'Deneyimli uzman hekim',
        'Modern steril ortam',
        'Ağrısız işlem (anestezi ile)',
        'Aynı gün taburculuk',
        'Detaylı bilgilendirme ve danışmanlık',
        'Psikolojik destek hizmeti',
        'Ücretsiz kontrol muayenesi',
      ],
      procedures: [
        {
          title: 'İlk Muayene ve Değerlendirme',
          description: 'Gebelik testi, genel sağlık değerlendirmesi ve detaylı bilgilendirme yapılır. Tıbbi öykü alınır ve olası riskler değerlendirilir.',
        },
        {
          title: 'Ultrason ile Gebelik Tespiti',
          description: 'Ultrason ile gebelik haftası ve lokalizasyonu belirlenir. Dış gebelik ekarte edilir.',
        },
        {
          title: 'Kan Testleri ve Hazırlık',
          description: 'Kan grubu, hemogram ve gerekli diğer testler yapılır. İşlem öncesi hazırlık talimatları verilir.',
        },
        {
          title: 'Anestezi ve İşlem',
          description: 'Lokal veya genel anestezi altında vakum aspirasyon yöntemi ile işlem gerçekleştirilir. İşlem ortalama 10-15 dakika sürer.',
        },
        {
          title: 'Dinlenme ve Taburculuk',
          description: 'İşlem sonrası kısa bir dinlenme süresinin ardından genel durum değerlendirilir ve taburculuk yapılır.',
        },
        {
          title: 'Kontrol Muayenesi',
          description: '1-2 hafta sonra kontrol muayenesi yapılır. İyileşme süreci değerlendirilir ve aile planlaması danışmanlığı verilir.',
        },
      ],
      faq: [
        {
          question: 'Kürtaj için yasal süre nedir?',
          answer: 'Türkiye\'de gebeliğin ilk 10 haftasına kadar (son adet tarihinden itibaren) yasal olarak kürtaj yaptırılabilir. Tıbbi zorunluluk hallerinde bu süre uzayabilir.',
        },
        {
          question: 'Kürtaj ağrılı mıdır?',
          answer: 'İşlem anestezi altında yapıldığı için ağrı hissedilmez. İşlem sonrası hafif kramplar olabilir, bu normal bir durumdur ve ağrı kesicilerle kontrol altına alınır.',
        },
        {
          question: 'İşlem ne kadar sürer?',
          answer: 'Cerrahi kürtaj işlemi ortalama 10-15 dakika sürer. Hazırlık ve dinlenme süresi dahil toplam hastanede kalış süresi birkaç saattir.',
        },
        {
          question: 'Ne zaman normal hayata dönülebilir?',
          answer: 'Çoğu hasta ertesi gün normal günlük aktivitelerine dönebilir. Ağır fiziksel aktivitelerden ve cinsel ilişkiden 1-2 hafta kaçınılması önerilir.',
        },
        {
          question: 'Kürtaj sonrası tekrar hamile kalabilir miyim?',
          answer: 'Evet, düzgün yapılan bir kürtaj işlemi gelecekteki gebelik şansını etkilemez. Üreme sağlığı korunur ve sonraki gebeliklerde sorun yaşanmaz.',
        },
      ],
      relatedServices: ['jinekoloji', 'gebelik-takibi', 'kisirlik-tedavisi'],
    },
    en: {
      title: 'Pregnancy Termination',
      subtitle: 'Safe and Confidential Pregnancy Termination Within Legal Period',
      description: 'Safe pregnancy termination procedures within legal limits.',
      longDescription: [
        'Pregnancy termination (abortion) is the procedure of ending unwanted pregnancies within legal timeframes. In Turkey, abortion is legally permitted up to the first 10 weeks of pregnancy (from the last menstrual period). Spousal consent is required for married couples, and parental consent is mandatory for those under 18. In cases of medical indication (conditions threatening maternal health, serious fetal anomalies), this period may be extended.',
        'Pregnancy termination can be performed through two main methods: Medical (medication) abortion and surgical (vacuum aspiration) abortion. Medical abortion is generally preferred for pregnancies up to 7 weeks, while the surgical method can be safely applied for pregnancies up to 10 weeks. The method to be used is determined considering the gestational week, the patient\'s general health condition, and preference.',
        'Under modern medical conditions, abortion performed by an experienced physician is extremely safe. The risk of complications is minimal when the procedure is performed in a sterile environment using appropriate anesthesia methods. Patient privacy and confidentiality are of great importance in our clinic.',
        'The recovery process after the procedure is generally quick. Our patients are discharged the same day and can return to their normal daily activities shortly. Post-procedure follow-up examinations, psychological support, and family planning counseling are also among our services.',
      ],
      benefits: [
        'Guaranteed privacy and confidentiality',
        'Experienced specialist physician',
        'Modern sterile environment',
        'Painless procedure (with anesthesia)',
        'Same-day discharge',
        'Detailed information and counseling',
        'Psychological support service',
        'Free follow-up examination',
      ],
      procedures: [
        {
          title: 'Initial Examination and Evaluation',
          description: 'Pregnancy test, general health evaluation, and detailed information are provided. Medical history is taken and possible risks are evaluated.',
        },
        {
          title: 'Pregnancy Confirmation with Ultrasound',
          description: 'Gestational week and localization are determined by ultrasound. Ectopic pregnancy is ruled out.',
        },
        {
          title: 'Blood Tests and Preparation',
          description: 'Blood type, hemogram, and other necessary tests are performed. Pre-procedure preparation instructions are given.',
        },
        {
          title: 'Anesthesia and Procedure',
          description: 'The procedure is performed using vacuum aspiration method under local or general anesthesia. The procedure takes approximately 10-15 minutes.',
        },
        {
          title: 'Rest and Discharge',
          description: 'After a short rest period following the procedure, general condition is evaluated and discharge is done.',
        },
        {
          title: 'Follow-up Examination',
          description: 'A follow-up examination is performed 1-2 weeks later. The healing process is evaluated and family planning counseling is provided.',
        },
      ],
      faq: [
        {
          question: 'What is the legal time limit for abortion?',
          answer: 'In Turkey, abortion is legally permitted up to the first 10 weeks of pregnancy (from the last menstrual period). This period may be extended in cases of medical necessity.',
        },
        {
          question: 'Is abortion painful?',
          answer: 'Since the procedure is performed under anesthesia, no pain is felt. Mild cramps may occur after the procedure, which is normal and can be controlled with painkillers.',
        },
        {
          question: 'How long does the procedure take?',
          answer: 'Surgical abortion takes approximately 10-15 minutes. Including preparation and rest time, total hospital stay is a few hours.',
        },
        {
          question: 'When can I return to normal life?',
          answer: 'Most patients can return to normal daily activities the next day. It is recommended to avoid heavy physical activities and sexual intercourse for 1-2 weeks.',
        },
        {
          question: 'Can I get pregnant again after abortion?',
          answer: 'Yes, a properly performed abortion does not affect future pregnancy chances. Reproductive health is preserved and no problems are experienced in subsequent pregnancies.',
        },
      ],
      relatedServices: ['jinekoloji', 'gebelik-takibi', 'kisirlik-tedavisi'],
    },
  },
};

export function getServiceContent(slug: string, locale: string): ServiceContent | null {
  const service = servicesContent[slug];
  if (!service) return null;
  return service[locale as 'tr' | 'en'] || service.tr;
}

export function getServiceData(slug: string): ServiceDetail | null {
  return servicesData[slug] || null;
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicesData);
}
