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
      relatedServices: ['urojinekoloji', 'kurtaj', 'jinekoloji'],
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
      relatedServices: ['urojinekoloji', 'kurtaj', 'jinekoloji'],
    },
  },
  'kurtaj': {
    tr: {
      title: 'Kürtaj (Gebelik Sonlandırma)',
      subtitle: 'İzmir Buca\'da Yasal Süre İçinde Güvenli, Gizli ve Profesyonel Gebelik Sonlandırma Hizmeti',
      description: 'İzmir Buca\'da 25 yıllık deneyimli kadın doğum uzmanı Op. Dr. Fahri Temiz ile yasal sınırlar içinde güvenli, hijyenik ve gizli kürtaj işlemleri. Medikal ve cerrahi kürtaj yöntemleri.',
      longDescription: [
        '**Kürtaj Nedir?** Kürtaj (gebelik sonlandırma), istenmeyen veya tıbbi nedenlerle devam ettirilemeyen gebeliklerin yasal süreler içinde sonlandırılması işlemidir. Türkiye\'de 1983 yılından bu yana yürürlükte olan 2827 sayılı Nüfus Planlaması Hakkında Kanun\'a göre, gebeliğin ilk 10 haftasına kadar (son adet tarihinden itibaren 70 gün) isteğe bağlı olarak kürtaj yaptırılabilmektedir. Bu yasal düzenleme, kadınların üreme sağlığı haklarını koruma altına almaktadır.',
        '**Türkiye\'de Kürtaj Yasaları ve Yasal Süre:** Türkiye\'de kürtaj, belirli koşullar altında yasaldır. Evli çiftlerde eşin yazılı onayı gerekmektedir. 18 yaş altındaki bireyler için yasal vasi veya veli izni zorunludur. Bekar kadınlar kendi kararlarıyla işlem yaptırabilmektedir. Tıbbi endikasyon durumlarında (anne sağlığını ciddi şekilde tehdit eden durumlar, fetüste yaşamla bağdaşmayan anomaliler, tecavüz sonucu oluşan gebelikler) bu 10 haftalık süre sınırı aşılabilmekte ve 20. haftaya kadar uzatılabilmektedir. Sağlık kurulu raporu ile bu süre daha da uzayabilir.',
        '**Kürtaj Yöntemleri - Medikal (İlaçlı) Kürtaj:** Medikal kürtaj, genellikle 7 haftaya kadar olan erken dönem gebeliklerde tercih edilen, cerrahi müdahale gerektirmeyen bir yöntemdir. Mifepriston ve misoprostol adlı ilaçların kombinasyonu kullanılarak gebelik sonlandırılır. İlk ilaç (mifepriston) gebeliğin devamı için gerekli olan progesteron hormonunun etkisini bloke eder. 24-48 saat sonra alınan ikinci ilaç (misoprostol) rahim kasılmalarını başlatarak gebelik dokusunun atılmasını sağlar. Bu yöntem %95-98 oranında başarılıdır.',
        '**Kürtaj Yöntemleri - Cerrahi (Vakum Aspirasyon) Kürtaj:** Cerrahi kürtaj, 10 haftaya kadar olan gebeliklerde güvenle uygulanan ve en yaygın kullanılan yöntemdir. Vakum aspirasyon (MVA - Manuel Vakum Aspirasyon veya EVA - Elektrikli Vakum Aspirasyon) tekniği ile gerçekleştirilir. İşlem, steril ortamda lokal veya genel anestezi altında yapılır. Rahim ağzı nazikçe genişletildikten sonra, ince bir kanül yardımıyla gebelik dokusu vakumla aspire edilir. İşlem ortalama 5-15 dakika sürer ve son derece güvenlidir.',
        '**Dilatasyon ve Küretaj (D&C):** D&C yöntemi, özellikle düşük sonrası kalan doku temizliği veya tanısal amaçlarla kullanılan bir prosedürdür. Rahim ağzının genişletilmesi (dilatasyon) ve rahim iç yüzeyinin küret adı verilen cerrahi aletle kazınması (küretaj) işlemlerini içerir. Modern jinekolojide vakum aspirasyon tercih edilmekle birlikte, D&C hala belirli durumlarda uygulanmaktadır.',
        '**Kürtaj Öncesi Hazırlık ve Değerlendirme:** İşlem öncesinde kapsamlı bir değerlendirme yapılması kritik öneme sahiptir. Bu değerlendirme şunları içerir: Detaylı tıbbi öykü alınması (önceki gebelikler, düşükler, ameliyatlar, kronik hastalıklar, kullanılan ilaçlar, alerjiler), fizik muayene, transvajinal ultrason ile gebelik haftası ve lokalizasyonunun belirlenmesi, dış gebelik (ektopik gebelik) olasılığının ekarte edilmesi, kan grubu ve Rh faktörü tayini, tam kan sayımı (hemogram), bulaşıcı hastalık taramaları (HIV, Hepatit B, Hepatit C). Rh negatif hastalara Anti-D immünoglobulin uygulaması planlanır.',
        '**İşlem Sonrası Bakım ve İyileşme Süreci:** Kürtaj sonrası iyileşme genellikle hızlı ve sorunsuzdur. İşlem sonrası beklenen durumlar şunlardır: 1-2 hafta sürebilen hafif kanama veya lekelenme, birkaç gün sürebilen hafif kramp tarzı ağrılar, 4-8 hafta içinde normal adet döngüsünün başlaması. Dikkat edilmesi gerekenler: 2 hafta süreyle cinsel ilişkiden kaçınılması, tampon yerine ped kullanılması, ağır kaldırma ve yoğun fiziksel aktiviteden kaçınılması, bol sıvı tüketimi ve dengeli beslenme, reçete edilen antibiyotik ve ağrı kesicilerin düzenli kullanımı.',
        '**Kürtaj Sonrası Olası Komplikasyonlar ve Belirtiler:** Modern tıbbi koşullarda kürtaj son derece güvenli bir işlem olmasına rağmen, nadir de olsa bazı komplikasyonlar görülebilir. Acil tıbbi yardım gerektiren durumlar: Ağır kanama (saatte bir pedi ıslatacak şekilde), 38°C üzeri ateş, şiddetli karın ağrısı, kötü kokulu akıntı, 2 haftadan uzun süren kanama. Bu belirtiler enfeksiyon, inkomplet (tamamlanmamış) kürtaj veya rahim perforasyonu gibi nadir komplikasyonların işareti olabilir. Deneyimli ellerde bu komplikasyonların görülme oranı %1\'in altındadır.',
        '**Kürtaj ve Psikolojik Destek:** Gebelik sonlandırma kararı duygusal açıdan zorlayıcı olabilir. Muayenehanemizde işlem öncesi, sırası ve sonrasında psikolojik destek hizmeti sunulmaktadır. Her kadının deneyimi farklıdır ve herhangi bir duygu (rahatlama, üzüntü, karışık duygular) normaldir. İhtiyaç halinde profesyonel psikolojik danışmanlık hizmetine yönlendirme yapılmaktadır.',
        '**Aile Planlaması ve Korunma Yöntemleri Danışmanlığı:** Kürtaj sonrası dönem, etkili aile planlaması yöntemleri hakkında bilgi edinmek ve uygun korunma yöntemini seçmek için ideal bir zamandır. Muayenehanemizde tüm modern korunma yöntemleri (hormonal kontraseptifler, rahim içi araç - spiral, bariyer yöntemler, kalıcı yöntemler) hakkında detaylı bilgilendirme yapılmakta ve her kadına bireysel ihtiyaçlarına uygun yöntem önerilmektedir. Ovülasyon kürtajdan 2 hafta sonra başlayabileceğinden, hemen korunmaya başlanması önemlidir.',
        '**Neden Op. Dr. Fahri Temiz?** 25 yılı aşkın deneyime sahip Op. Dr. Fahri Temiz, İzmir\'de güvenli ve gizli kürtaj hizmeti sunmaktadır. Modern ve steril muayenehane ortamı, hasta mahremiyetine maksimum özen, güncel tıbbi protokollerin uygulanması, kapsamlı işlem öncesi ve sonrası bakım, psikolojik destek ve aile planlaması danışmanlığı ile hastalarımıza en iyi hizmeti vermekteyiz. İzmir\'den gelen hastalarımıza 7/24 ulaşılabilirlik sağlamaktayız.',
      ],
      benefits: [
        'Mutlak gizlilik ve hasta mahremiyeti garantisi',
        '25 yıllık deneyimli uzman kadın doğum hekimi',
        'Sağlık Bakanlığı onaylı modern ve steril muayenehane',
        'Ağrısız işlem (lokal veya genel anestezi seçeneği)',
        'Aynı gün taburculuk - günlük hayata hızlı dönüş',
        'Kapsamlı işlem öncesi değerlendirme ve bilgilendirme',
        'Psikolojik destek ve danışmanlık hizmeti',
        'Ücretsiz kontrol muayenesi ve takip',
        'Aile planlaması ve korunma yöntemleri danışmanlığı',
        'Acil durumlar için 7/24 telefon desteği',
        'Uygun fiyat ve esnek ödeme seçenekleri',
        'Merkezi konum - kolay ulaşım (Buca)',
      ],
      procedures: [
        {
          title: 'Randevu ve İlk Görüşme',
          description: 'WhatsApp veya telefon ile randevu alınır. İlk görüşmede durum değerlendirilir, sorularınız yanıtlanır ve işlem hakkında ön bilgilendirme yapılır. Tamamen gizlilik içinde görüşme gerçekleştirilir.',
        },
        {
          title: 'Kapsamlı Tıbbi Değerlendirme',
          description: 'Detaylı tıbbi öykü alınır: önceki gebelikler, sağlık durumu, kullanılan ilaçlar, alerjiler. Fizik muayene yapılır ve genel sağlık durumunuz değerlendirilir.',
        },
        {
          title: 'Ultrasonografik İnceleme',
          description: 'Transvajinal ultrason ile gebelik keseleri görüntülenir, gebelik haftası kesin olarak belirlenir, gebeliğin rahim içi lokalizasyonu doğrulanır ve dış gebelik (ektopik gebelik) ekarte edilir.',
        },
        {
          title: 'Laboratuvar Testleri',
          description: 'Kan grubu ve Rh faktörü tayini, tam kan sayımı (hemogram), koagülasyon testleri ve gerekli görülen diğer tetkikler yapılır. Rh negatif hastalarda Anti-D immünoglobulin planlaması yapılır.',
        },
        {
          title: 'Bilgilendirilmiş Onam',
          description: 'İşlem, olası riskler ve alternatifler hakkında detaylı bilgilendirme yapılır. Tüm sorularınız yanıtlanır. Yasal gereklilikler doğrultusunda onam formu imzalanır.',
        },
        {
          title: 'İşlem Öncesi Hazırlık',
          description: 'İşlem günü hazırlık talimatları verilir: açlık süresi, getirilmesi gereken belgeler, rahat kıyafet önerisi. Steril ortamda işlem hazırlığı yapılır.',
        },
        {
          title: 'Anestezi Uygulaması',
          description: 'Hastanın tercihi ve tıbbi durumuna göre lokal anestezi (rahim ağzı blokajı) veya kısa süreli genel anestezi (sedasyon) uygulanır. Her iki yöntemde de ağrı hissedilmez.',
        },
        {
          title: 'Vakum Aspirasyon İşlemi',
          description: 'Steril koşullarda rahim ağzı nazikçe dilate edilir. İnce aspirasyon kanülü ile gebelik dokusu vakumlanarak alınır. İşlem 5-15 dakika sürer. Ultrason eşliğinde işlemin tamamlandığı doğrulanır.',
        },
        {
          title: 'Dinlenme ve Gözlem',
          description: 'İşlem sonrası 1-2 saat süreyle dinlenme odasında gözlem altında tutulursunuz. Vital bulgularınız takip edilir, kanama kontrolü yapılır ve genel durumunuz değerlendirilir.',
        },
        {
          title: 'Taburculuk ve Talimatlar',
          description: 'Genel durumunuz stabil olduğunda taburcu edilirsiniz. Yazılı ve sözlü taburculuk talimatları verilir: ilaç kullanımı, dikkat edilecek hususlar, acil durum belirtileri.',
        },
        {
          title: 'Kontrol Muayenesi',
          description: '7-14 gün sonra kontrol muayenesi yapılır. Ultrason ile rahimin tamamen boşaldığı doğrulanır. İyileşme süreci değerlendirilir ve olası sorunlar tespit edilir.',
        },
        {
          title: 'Aile Planlaması Danışmanlığı',
          description: 'Kontrol muayenesinde veya istenildiğinde aile planlaması danışmanlığı verilir. Uygun korunma yöntemi belirlenir ve gerekirse hemen uygulanır (spiral takma vb.).',
        },
      ],
      faq: [
        {
          question: 'Türkiye\'de kürtaj yasal mı? Yasal süre kaç hafta?',
          answer: 'Evet, Türkiye\'de kürtaj yasaldır. 2827 sayılı Kanun\'a göre gebeliğin ilk 10 haftasına kadar (son adet tarihinden itibaren) isteğe bağlı kürtaj yaptırılabilir. Tıbbi zorunluluk hallerinde (anne sağlığını tehdit eden durumlar, ciddi fetal anomaliler) bu süre uzatılabilir.',
        },
        {
          question: 'Kürtaj için eş onayı gerekli mi?',
          answer: 'Evli kadınlar için eşin yazılı onayı yasal olarak zorunludur. Bekar kadınlar kendi kararları ile işlem yaptırabilir. 18 yaş altı için yasal vasi onayı gereklidir.',
        },
        {
          question: 'Kürtaj ağrılı bir işlem mi?',
          answer: 'Hayır, işlem anestezi altında yapıldığından ağrı hissedilmez. Lokal anestezi ile rahim ağzı uyuşturulur veya tercihe göre kısa süreli genel anestezi (sedasyon) uygulanır. İşlem sonrası adet ağrısına benzer hafif kramplar olabilir, bunlar reçeteli ağrı kesicilerle kolayca kontrol altına alınır.',
        },
        {
          question: 'Kürtaj işlemi ne kadar sürer?',
          answer: 'Cerrahi kürtaj (vakum aspirasyon) işlemi 5-15 dakika sürer. Ancak hazırlık, anestezi, işlem sonrası dinlenme ve gözlem dahil toplam klinikte kalış süresi 3-4 saattir. Aynı gün taburcu edilirsiniz.',
        },
        {
          question: 'Kürtaj sonrası ne zaman işe/okula dönebilirim?',
          answer: 'Çoğu hasta ertesi gün veya 1-2 gün içinde normal günlük aktivitelerine dönebilir. Masa başı işler için genellikle 1 gün yeterlidir. Ağır fiziksel iş yapanların 3-5 gün dinlenmesi önerilir.',
        },
        {
          question: 'Kürtaj sonrası cinsel ilişkiye ne zaman başlanabilir?',
          answer: 'Enfeksiyon riskini önlemek için en az 2 hafta cinsel ilişkiden kaçınılması önerilir. İdeal olarak kontrol muayenesinden sonra ve doktorunuzun onayı ile cinsel aktiviteye başlanmalıdır.',
        },
        {
          question: 'Kürtaj sonrası adet ne zaman gelir?',
          answer: 'Normal adet döngüsü genellikle kürtajdan 4-8 hafta sonra başlar. İlk adet normalden biraz farklı olabilir (daha az veya daha çok kanama). 8 hafta içinde adet gelmezse doktorunuza başvurmalısınız.',
        },
        {
          question: 'Kürtaj gelecekte hamile kalmamı engeller mi?',
          answer: 'Hayır, deneyimli bir hekim tarafından düzgün yapılan kürtaj gelecekteki doğurganlığınızı etkilemez. Üreme sağlığınız korunur ve sonraki gebeliklerinizde sorun yaşamazsınız. Birden fazla kürtaj da uygun teknikle yapıldığında güvenlidir.',
        },
        {
          question: 'Medikal (ilaçlı) kürtaj mı yoksa cerrahi kürtaj mı daha güvenli?',
          answer: 'Her iki yöntem de güvenlidir ve başarı oranları yüksektir. Medikal kürtaj 7 haftaya kadar, cerrahi kürtaj 10 haftaya kadar uygulanabilir. Medikal kürtaj cerrahi gerektirmez ancak birkaç gün sürer ve daha fazla kanama olabilir. Cerrahi kürtaj tek seferde tamamlanır ve hemen sonuç alınır. Doktorunuz sizin için en uygun yöntemi belirleyecektir.',
        },
        {
          question: 'Kürtaj riskleri nelerdir?',
          answer: 'Modern tıbbi koşullarda deneyimli hekim tarafından yapılan kürtaj son derece güvenlidir. Nadir görülen riskler şunlardır: enfeksiyon (%1\'den az), inkomplet kürtaj (kalan doku, %1-2), rahim perforasyonu (çok nadir, %0.1\'den az), aşırı kanama (nadir). Bu risklerin tamamı tedavi edilebilir durumlardır.',
        },
        {
          question: 'Kürtaj sonrası kanama ne kadar sürer?',
          answer: 'Hafif kanama veya lekelenme 1-2 hafta sürebilir, bu normaldir. Kanama giderek azalır. Saatte bir pedi ıslatacak kadar ağır kanama, pıhtılı kanama veya 2 haftadan uzun süren kanama olursa hemen doktorunuza başvurun.',
        },
        {
          question: 'Kürtajdan önce yemek yiyebilir miyim?',
          answer: 'Bu, uygulanacak anestezi yöntemine bağlıdır. Lokal anestezi için hafif bir kahvaltı yapabilirsiniz. Genel anestezi (sedasyon) planlanıyorsa işlemden 6-8 saat önce yeme içme kesilmelidir. Randevu alırken size özel talimatlar verilecektir.',
        },
        {
          question: 'Kürtaj sonrası hangi belirtiler için acil doktora başvurmalıyım?',
          answer: 'Şu durumlarda hemen tıbbi yardım alın: 38°C üzeri ateş, saatte bir pedi ıslatacak ağır kanama, şiddetli karın ağrısı (ağrı kesicilere yanıt vermeyen), kötü kokulu vajinal akıntı, 2 haftadan uzun süren kanama, baygınlık hissi veya aşırı halsizlik.',
        },
        {
          question: 'Kürtaj ücretleri ne kadar? SGK karşılıyor mu?',
          answer: 'Kürtaj ücretleri gebelik haftası, uygulanan yöntem ve anestezi türüne göre değişmektedir. SGK isteğe bağlı kürtajı karşılamamaktadır. Muayenehanemizde uygun fiyat politikası uygulanmakta ve detaylı fiyat bilgisi muayene sonrası verilmektedir. Fiyat bilgisi için WhatsApp\'tan bize ulaşabilirsiniz.',
        },
        {
          question: 'Kürtajın psikolojik etkileri olur mu?',
          answer: 'Her kadının deneyimi farklıdır. Bazı kadınlar rahatlama hissederken, bazıları karışık duygular yaşayabilir. Her iki durum da normaldir. Muayenehanemizde işlem öncesi ve sonrası psikolojik destek sunulmaktadır. İhtiyaç halinde profesyonel danışmanlık hizmetine yönlendirme yapılmaktadır.',
        },
        {
          question: 'Kürtaj kararımdan sonra ne kadar beklemeliyim?',
          answer: 'Yasal süre içinde (10 hafta) olduğunuz sürece acele etmenize gerek yoktur, ancak erken dönemde yapılan kürtaj daha kolay ve daha az risklidir. Kararınızı verdikten sonra mümkün olan en kısa sürede randevu almanız önerilir.',
        },
        {
          question: 'Kürtaj yerine başka seçeneklerim var mı?',
          answer: 'Evet, gebeliğe devam etme ve bebeği büyütme, doğum sonrası evlat edinme gibi alternatifler mevcuttur. Muayenehanemizde tüm seçenekler hakkında tarafsız bilgilendirme yapılmaktadır. Karar tamamen size aittir ve hangi kararı verirseniz verin desteklenirsiniz.',
        },
        {
          question: 'Daha önce kürtaj oldum, tekrar yaptırabilir miyim?',
          answer: 'Evet, tıbbi açıdan daha önce kürtaj olmuş olmak yeni bir kürtaj için engel değildir. Ancak tekrarlayan istenmeyen gebelikleri önlemek için etkili bir aile planlaması yöntemi kullanmanız önemlidir. Kontrol muayenesinde size uygun korunma yöntemi hakkında danışmanlık verilecektir.',
        },
        {
          question: 'Kürtaj gizli yapılıyor mu? Kimse öğrenir mi?',
          answer: 'Muayenehanemizde hasta mahremiyeti ve gizlilik en üst düzeyde korunmaktadır. Tıbbi kayıtlarınız gizlidir ve yasal zorunluluk olmadıkça hiçbir üçüncü kişi veya kurumla paylaşılmaz. İşlem tamamen gizlilik içinde gerçekleştirilir.',
        },
        {
          question: 'İzmir\'de güvenilir kürtaj nerede yaptırılır?',
          answer: 'İzmir Buca\'da Op. Dr. Fahri Temiz muayenehanesinde 25 yıllık deneyim ile güvenli, gizli ve profesyonel kürtaj hizmeti sunulmaktadır. Yiğitler Mahallesi Fevzi Çakmak Caddesi No:2 Buca/İzmir adresinde bulunmaktayız. Randevu için 0532 237 04 78 numaralı WhatsApp hattımızdan bize ulaşabilirsiniz.',
        },
      ],
      relatedServices: ['jinekoloji', 'gebelik-takibi', 'kisirlik-tedavisi'],
    },
    en: {
      title: 'Pregnancy Termination (Abortion)',
      subtitle: 'Safe, Confidential and Professional Pregnancy Termination Service in Izmir Buca Within Legal Timeframe',
      description: 'Safe, hygienic and confidential abortion procedures within legal limits with experienced obstetrician Op. Dr. Fahri Temiz in Izmir Buca. Medical and surgical abortion methods available.',
      longDescription: [
        '**What is Abortion?** Abortion (pregnancy termination) is the procedure of ending unwanted or medically non-viable pregnancies within legal timeframes. According to Law No. 2827 on Population Planning, which has been in effect in Turkey since 1983, elective abortion can be performed up to the first 10 weeks of pregnancy (70 days from the last menstrual period). This legal regulation protects women\'s reproductive health rights.',
        '**Abortion Laws and Legal Timeframe in Turkey:** Abortion is legal under certain conditions in Turkey. Written consent from the spouse is required for married couples. Legal guardian consent is mandatory for individuals under 18. Single women can have the procedure by their own decision. In cases of medical indication (conditions seriously threatening maternal health, fetal anomalies incompatible with life, pregnancies resulting from rape), this 10-week limit can be exceeded and extended up to 20 weeks. With a medical board report, this period can be extended further.',
        '**Abortion Methods - Medical Abortion:** Medical abortion is a non-surgical method preferred for early pregnancies up to 7 weeks. Pregnancy is terminated using a combination of medications called mifepristone and misoprostol. The first medication (mifepristone) blocks the effect of progesterone hormone necessary for pregnancy continuation. The second medication (misoprostol) taken 24-48 hours later initiates uterine contractions and expulsion of pregnancy tissue. This method has a 95-98% success rate.',
        '**Abortion Methods - Surgical (Vacuum Aspiration) Abortion:** Surgical abortion is the most commonly used method that can be safely applied for pregnancies up to 10 weeks. It is performed using vacuum aspiration technique (MVA - Manual Vacuum Aspiration or EVA - Electric Vacuum Aspiration). The procedure is done in a sterile environment under local or general anesthesia. After gently dilating the cervix, pregnancy tissue is aspirated using a thin cannula. The procedure takes approximately 5-15 minutes and is extremely safe.',
        '**Dilation and Curettage (D&C):** The D&C method is a procedure used especially for cleaning remaining tissue after miscarriage or for diagnostic purposes. It involves dilation of the cervix and scraping the inner surface of the uterus with a surgical instrument called a curette. While vacuum aspiration is preferred in modern gynecology, D&C is still applied in certain situations.',
        '**Pre-Procedure Preparation and Evaluation:** Comprehensive evaluation before the procedure is critically important. This evaluation includes: Taking detailed medical history (previous pregnancies, miscarriages, surgeries, chronic diseases, medications, allergies), physical examination, determination of pregnancy week and localization by transvaginal ultrasound, ruling out ectopic pregnancy, blood type and Rh factor determination, complete blood count, infectious disease screening (HIV, Hepatitis B, Hepatitis C). Anti-D immunoglobulin is planned for Rh-negative patients.',
        '**Post-Procedure Care and Recovery Process:** Recovery after abortion is generally quick and uneventful. Expected post-procedure conditions include: Light bleeding or spotting that may last 1-2 weeks, mild cramp-like pains that may last a few days, normal menstrual cycle starting within 4-8 weeks. Things to pay attention to: Avoiding sexual intercourse for 2 weeks, using pads instead of tampons, avoiding heavy lifting and intense physical activity, adequate fluid intake and balanced nutrition, regular use of prescribed antibiotics and painkillers.',
        '**Possible Post-Abortion Complications and Symptoms:** Although abortion is an extremely safe procedure under modern medical conditions, some complications may rarely occur. Situations requiring immediate medical attention: Heavy bleeding (soaking a pad per hour), fever above 38°C (100.4°F), severe abdominal pain, foul-smelling discharge, bleeding lasting more than 2 weeks. These symptoms may indicate rare complications such as infection, incomplete abortion, or uterine perforation. In experienced hands, the rate of these complications is below 1%.',
        '**Abortion and Psychological Support:** The decision to terminate pregnancy can be emotionally challenging. Psychological support is provided before, during, and after the procedure at our clinic. Each woman\'s experience is different, and any feelings (relief, sadness, mixed emotions) are normal. Referral to professional psychological counseling is available when needed.',
        '**Family Planning and Contraception Counseling:** The post-abortion period is an ideal time to learn about effective family planning methods and choose an appropriate contraception method. At our clinic, detailed information is provided about all modern contraception methods (hormonal contraceptives, intrauterine device - IUD, barrier methods, permanent methods), and each woman is recommended a method suitable for her individual needs. Since ovulation can start 2 weeks after abortion, it is important to start protection immediately.',
        '**Why Choose Op. Dr. Fahri Temiz?** With over 25 years of experience, Op. Dr. Fahri Temiz provides safe and confidential abortion services in Izmir. We provide the best service to our patients with modern and sterile clinic environment, maximum attention to patient privacy, application of up-to-date medical protocols, comprehensive pre and post-procedure care, psychological support and family planning counseling. We provide 24/7 accessibility for patients coming from Izmir.',
      ],
      benefits: [
        'Absolute confidentiality and patient privacy guarantee',
        'Expert obstetrician with 25 years of experience',
        'Ministry of Health approved modern and sterile clinic',
        'Painless procedure (local or general anesthesia options)',
        'Same-day discharge - quick return to daily life',
        'Comprehensive pre-procedure evaluation and information',
        'Psychological support and counseling service',
        'Free follow-up examination and monitoring',
        'Family planning and contraception counseling',
        '24/7 phone support for emergencies',
        'Affordable pricing and flexible payment options',
        'Central location - easy access (Buca)',
      ],
      procedures: [
        {
          title: 'Appointment and Initial Consultation',
          description: 'Appointment is made via WhatsApp or phone. Initial consultation evaluates your situation, answers your questions, and provides preliminary information about the procedure. The meeting is conducted in complete confidentiality.',
        },
        {
          title: 'Comprehensive Medical Evaluation',
          description: 'Detailed medical history is taken: previous pregnancies, health status, medications used, allergies. Physical examination is performed and your general health is evaluated.',
        },
        {
          title: 'Ultrasonographic Examination',
          description: 'Pregnancy sacs are visualized with transvaginal ultrasound, exact gestational week is determined, intrauterine localization of pregnancy is confirmed, and ectopic pregnancy is ruled out.',
        },
        {
          title: 'Laboratory Tests',
          description: 'Blood type and Rh factor determination, complete blood count, coagulation tests, and other necessary tests are performed. Anti-D immunoglobulin is planned for Rh-negative patients.',
        },
        {
          title: 'Informed Consent',
          description: 'Detailed information is provided about the procedure, possible risks, and alternatives. All your questions are answered. Consent form is signed in accordance with legal requirements.',
        },
        {
          title: 'Pre-Procedure Preparation',
          description: 'Instructions for the procedure day are given: fasting period, documents to bring, comfortable clothing advice. Preparation is done in a sterile environment.',
        },
        {
          title: 'Anesthesia Administration',
          description: 'Local anesthesia (cervical block) or short-term general anesthesia (sedation) is applied according to patient preference and medical condition. No pain is felt with either method.',
        },
        {
          title: 'Vacuum Aspiration Procedure',
          description: 'Cervix is gently dilated under sterile conditions. Pregnancy tissue is removed by vacuum using a thin aspiration cannula. Procedure takes 5-15 minutes. Completion is confirmed with ultrasound guidance.',
        },
        {
          title: 'Rest and Observation',
          description: 'You are kept under observation in the recovery room for 1-2 hours after the procedure. Vital signs are monitored, bleeding control is performed, and your general condition is evaluated.',
        },
        {
          title: 'Discharge and Instructions',
          description: 'You are discharged when your general condition is stable. Written and verbal discharge instructions are given: medication use, precautions, emergency signs.',
        },
        {
          title: 'Follow-up Examination',
          description: 'Follow-up examination is performed 7-14 days later. Complete evacuation of the uterus is confirmed by ultrasound. Recovery process is evaluated and any issues are detected.',
        },
        {
          title: 'Family Planning Counseling',
          description: 'Family planning counseling is provided at the follow-up visit or when requested. Appropriate contraception method is determined and applied immediately if needed (IUD insertion, etc.).',
        },
      ],
      faq: [
        {
          question: 'Is abortion legal in Turkey? What is the legal time limit?',
          answer: 'Yes, abortion is legal in Turkey. According to Law No. 2827, elective abortion can be performed up to the first 10 weeks of pregnancy (from the last menstrual period). In cases of medical necessity (conditions threatening maternal health, serious fetal anomalies), this period can be extended.',
        },
        {
          question: 'Is spousal consent required for abortion?',
          answer: 'Written consent from the spouse is legally required for married women. Single women can have the procedure by their own decision. Legal guardian consent is required for those under 18.',
        },
        {
          question: 'Is abortion a painful procedure?',
          answer: 'No, since the procedure is performed under anesthesia, no pain is felt. The cervix is numbed with local anesthesia or short-term general anesthesia (sedation) is applied upon preference. Mild cramps similar to menstrual pain may occur after the procedure, easily controlled with prescribed painkillers.',
        },
        {
          question: 'How long does the abortion procedure take?',
          answer: 'Surgical abortion (vacuum aspiration) takes 5-15 minutes. However, total clinic stay including preparation, anesthesia, post-procedure rest and observation is 3-4 hours. You are discharged the same day.',
        },
        {
          question: 'When can I return to work/school after abortion?',
          answer: 'Most patients can return to normal daily activities the next day or within 1-2 days. One day is usually sufficient for desk jobs. Those doing heavy physical work are advised to rest for 3-5 days.',
        },
        {
          question: 'When can I resume sexual intercourse after abortion?',
          answer: 'To prevent infection risk, it is recommended to avoid sexual intercourse for at least 2 weeks. Ideally, sexual activity should be resumed after the follow-up examination and with your doctor\'s approval.',
        },
        {
          question: 'When will my period come after abortion?',
          answer: 'Normal menstrual cycle usually starts 4-8 weeks after abortion. The first period may be slightly different than normal (less or more bleeding). You should contact your doctor if your period does not come within 8 weeks.',
        },
        {
          question: 'Will abortion prevent me from getting pregnant in the future?',
          answer: 'No, a properly performed abortion by an experienced physician does not affect your future fertility. Your reproductive health is preserved and you will not experience problems in subsequent pregnancies. Multiple abortions are also safe when performed with proper technique.',
        },
        {
          question: 'Is medical abortion or surgical abortion safer?',
          answer: 'Both methods are safe and have high success rates. Medical abortion can be applied up to 7 weeks, surgical abortion up to 10 weeks. Medical abortion does not require surgery but takes several days and may have more bleeding. Surgical abortion is completed in one session and results are immediate. Your doctor will determine the most appropriate method for you.',
        },
        {
          question: 'What are the risks of abortion?',
          answer: 'Abortion performed by an experienced physician under modern medical conditions is extremely safe. Rare risks include: infection (less than 1%), incomplete abortion (remaining tissue, 1-2%), uterine perforation (very rare, less than 0.1%), excessive bleeding (rare). All these risks are treatable conditions.',
        },
        {
          question: 'How long does bleeding last after abortion?',
          answer: 'Light bleeding or spotting may last 1-2 weeks, this is normal. Bleeding gradually decreases. Contact your doctor immediately if you experience heavy bleeding that soaks a pad per hour, clotted bleeding, or bleeding lasting more than 2 weeks.',
        },
        {
          question: 'Can I eat before abortion?',
          answer: 'This depends on the anesthesia method to be applied. You can have a light breakfast for local anesthesia. If general anesthesia (sedation) is planned, eating and drinking should be stopped 6-8 hours before the procedure. Specific instructions will be given when you make your appointment.',
        },
        {
          question: 'Which symptoms require emergency doctor visit after abortion?',
          answer: 'Seek immediate medical help in these situations: Fever above 38°C (100.4°F), heavy bleeding soaking a pad per hour, severe abdominal pain (not responding to painkillers), foul-smelling vaginal discharge, bleeding lasting more than 2 weeks, feeling faint or extreme weakness.',
        },
        {
          question: 'How much does abortion cost? Does insurance cover it?',
          answer: 'Abortion costs vary according to gestational week, method applied, and type of anesthesia. Social security does not cover elective abortion. Our clinic applies affordable pricing policy and detailed price information is provided after examination. You can contact us via WhatsApp for pricing information.',
        },
        {
          question: 'Does abortion have psychological effects?',
          answer: 'Each woman\'s experience is different. Some women feel relief, while others may experience mixed emotions. Both situations are normal. Psychological support is provided before and after the procedure at our clinic. Referral to professional counseling services is available when needed.',
        },
        {
          question: 'How long should I wait after deciding to have an abortion?',
          answer: 'As long as you are within the legal period (10 weeks), there is no need to rush, but abortion performed in the early period is easier and less risky. It is recommended to make an appointment as soon as possible after making your decision.',
        },
        {
          question: 'Are there other options besides abortion?',
          answer: 'Yes, alternatives such as continuing the pregnancy and raising the baby, or adoption after birth are available. At our clinic, unbiased information is provided about all options. The decision is entirely yours and you will be supported whatever decision you make.',
        },
        {
          question: 'I had an abortion before, can I have another one?',
          answer: 'Yes, having had an abortion before is not a medical obstacle for a new abortion. However, it is important to use an effective family planning method to prevent recurrent unwanted pregnancies. Counseling about the appropriate contraception method for you will be provided at the follow-up examination.',
        },
        {
          question: 'Is abortion confidential? Will anyone find out?',
          answer: 'Patient privacy and confidentiality are protected at the highest level at our clinic. Your medical records are confidential and are not shared with any third party or institution unless legally required. The procedure is performed in complete confidentiality.',
        },
        {
          question: 'Where can I have a safe abortion in Izmir?',
          answer: 'Safe, confidential and professional abortion services are provided with 25 years of experience at Op. Dr. Fahri Temiz clinic in Izmir Buca. We are located at Yigitler Mahallesi Fevzi Cakmak Caddesi No:2 Buca/Izmir. You can contact us via WhatsApp at 0532 237 04 78 for appointments.',
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
