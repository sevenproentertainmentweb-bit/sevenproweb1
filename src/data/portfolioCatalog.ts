export interface PortfolioMedia {
  src: string;
  alt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images?: PortfolioMedia[];
  placeholderLabel?: string;
}

export interface PortfolioCategory {
  id: string;
  number: string;
  title: string;
  summary: string;
  highlights: string;
  iconKey:
    | 'music'
    | 'band'
    | 'dj'
    | 'service'
    | 'traditional'
    | 'nusantara'
    | 'kecak'
    | 'balinese-modern'
    | 'modern-contemp'
    | 'fire'
    | 'international'
    | 'modern'
    | 'led'
    | 'party'
    | 'special';
  items: PortfolioItem[];
}

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'balinese-music',
    number: '01.',
    title: 'Balinese Music',
    summary:
      'Ansambel musik tradisional Bali mulai dari prosesi penyambutan hingga alunan instrumen akustik yang hangat untuk gala dinner, resort, dan upacara resmi.',
    highlights: 'Baleganjur · Hand Pan · Live Gamelan · Live Suling · Rindik · Dan Lainnya',
    iconKey: 'music',
    items: [
      {
        id: 'baleganjur',
        title: 'Baleganjur',
        description:
          'Ansambel perkusi tradisional Bali berenergi tinggi dengan gong, ceng-ceng, dan kendang untuk prosesi penyambutan tamu VIP maupun pembukaan acara megah.',
      },
      {
        id: 'hand-pan',
        title: 'Hand Pan',
        description:
          'Alunan melodi harmonis instrumen handpan yang menenangkan, ideal untuk sesi sunset cocktail, wellness retreat, dan resepsi tepi pantai.',
      },
      {
        id: 'live-gamelan',
        title: 'Live Gamelan',
        description:
          'Pertunjukan gamelan Bali secara langsung dengan komposisi klasik maupun pengiring tarian adat untuk menciptakan nuansa budaya yang autentik.',
      },
      {
        id: 'live-suling',
        title: 'Live Suling',
        description:
          'Permainan seruling bambu Bali yang lembut dan ekspresif untuk mengiringi makan malam privat, upacara sakral, atau suasana santai di resort.',
      },
      {
        id: 'rindik',
        title: 'Rindik',
        description:
          'Musik tradisional bambu khas Bali dengan tempo mengalun merdu sebagai pengiring penyambutan tamu, pameran budaya, dan jamuan makan.',
      },
      {
        id: 'balinese-music-etc',
        title: 'Ansambel Bali Lainnya (etc.)',
        description:
          'Formasi musik tradisional Bali lainnya seperti Gender Wayang, Tingklik, atau kolaborasi gamelan sesuai kebutuhan konsep acara Anda.',
        placeholderLabel: 'Custom Lineup · Balinese Music',
      },
    ],
  },
  {
    id: 'music-modern',
    number: '02.',
    title: 'Music Modern',
    summary:
      'Penampil musik modern dan instrumen solo profesional untuk menghidupkan suasana resepsi, corporate gathering, hingga panggung konser privat.',
    highlights: 'Acoustic · Band · Djimbe · Percussion · Saxophone · Violin · Dan Lainnya',
    iconKey: 'band',
    items: [
      {
        id: 'acoustic',
        title: 'Acoustic',
        description:
          'Format duo atau trio akustik dengan vokal dan gitar yang hangat untuk makan malam intim, cocktail hour, serta acara resort.',
      },
      {
        id: 'band',
        title: 'Band',
        description:
          'Full live band dengan repertoar pop, jazz, top 40, hingga rock klasik lengkap dengan dukungan tata suara panggung profesional.',
      },
      {
        id: 'djimbe',
        title: 'Djimbe',
        description:
          'Permainan perkusi djimbe yang ritmis dan interaktif untuk membangun energi acara outdoor, beach club, maupun sesi team building.',
      },
      {
        id: 'percussion',
        title: 'Percussion',
        description:
          'Aksi perkusi modern yang dinamis sebagai pertunjukan mandiri maupun kolaborasi bersama DJ dan live band di panggung utama.',
      },
      {
        id: 'saxophone',
        title: 'Saxophone',
        description:
          'Penampilan solo saxophone berkelas untuk menyempurnakan momen sunset, gala dinner, atau iringan musik lounge modern.',
      },
      {
        id: 'violin',
        title: 'Violin',
        description:
          'Pertunjukan biola elektrik maupun akustik dengan aransemen klasik dan pop modern untuk prosesi masuk pengantin dan acara VIP.',
      },
      {
        id: 'music-modern-etc',
        title: 'Musisi Modern Lainnya (etc.)',
        description:
          'Tersedia pilihan solo pianist, cello, brass section, dan kolaborasi musisi modern lainnya yang dapat disesuaikan dengan tema acara.',
        placeholderLabel: 'Custom Lineup · Music Modern',
      },
    ],
  },
  {
    id: 'dj',
    number: '03.',
    title: 'DJ',
    summary:
      'Disk jockey berpengalaman untuk menjaga atmosfer lantai dansa di pesta privat, beach party, peluncuran produk, dan afterparty korporat.',
    highlights: 'Female DJ · Male DJ · Open Format · House · Commercial · Lounge',
    iconKey: 'dj',
    items: [
      {
        id: 'female-dj',
        title: 'Female DJ',
        description:
          'Female DJ karismatik dengan kurasi set house, afro-house, dan open-format hits untuk menghadirkan energi stylish pada acara malam maupun pool party.',
      },
      {
        id: 'male-dj',
        title: 'Male DJ',
        description:
          'Male DJ profesional dengan teknik mixing presisi lintas genre—dari sunset chill lounge hingga pesta dansa berenergi tinggi.',
      },
    ],
  },
  {
    id: 'professional-service',
    number: '04.',
    title: 'Professional Service',
    summary:
      'Tenaga pendukung acara yang terlatih dan rapi untuk memastikan penampilan talent serta alur penyambutan tamu berjalan tertib.',
    highlights: 'Make Up Artist · MC · Usher · Dan Lainnya',
    iconKey: 'service',
    items: [
      {
        id: 'make-up-artist',
        title: 'Make Up Artist',
        description:
          'Tim MUA panggung dan editorial yang menangani riasan tradisional Bali, karakter tematik, hingga tata rias tamu VIP dan pengisi acara.',
      },
      {
        id: 'mc',
        title: 'MC',
        description:
          'Master of Ceremony bilingual (Indonesia & Inggris) yang komunikatif dan adaptif untuk acara formal korporat, kenegaraan, maupun pesta hiburan.',
      },
      {
        id: 'usher',
        title: 'Usher',
        description:
          'Penerima tamu dan pemandu registrasi berpenampilan rapi serta ramah untuk menjaga kelancaran alur tamu VIP di area acara.',
      },
      {
        id: 'professional-service-etc',
        title: 'Layanan Profesional Lainnya (etc.)',
        description:
          'Tersedia juga stage manager, talent coordinator, dan tim pendukung teknis acara sesuai skala produksi Anda.',
        placeholderLabel: 'Custom Support · Professional Service',
      },
    ],
  },
  {
    id: 'balinese-tradisional',
    number: '05.',
    title: 'Balinese Tradisional',
    summary:
      'Tari-tarian klasik dan sakral warisan budaya Bali yang dibawakan dengan pakem gerak, busana adat, dan tata rias autentik.',
    highlights:
      'Barong Ket · Barong Bangkung · Cendrawasih · Joged Bumbung · Legong Keraton · Panyembrama · Pendet · Sekar Jagat · Sekar Jepun · Dan Lainnya',
    iconKey: 'traditional',
    items: [
      {
        id: 'barong-ket',
        title: 'Barong Ket',
        description:
          'Tarian tradisional ikonik Bali yang menampilkan sosok sakral pelindung kebaikan dengan gerakan enerjik diiringi tabuh gamelan dinamis.',
      },
      {
        id: 'barong-bangkung',
        title: 'Barong Bangkung',
        description:
          'Pertunjukan barong tradisional berkarakter lincah dan jenaka yang cocok untuk prosesi penyambutan meriah maupun parade budaya.',
      },
      {
        id: 'cendrawasih',
        title: 'Cendrawasih',
        description:
          'Tarian berpasangan yang menggambarkan keindahan dan kelincahan burung cenderawasih melalui gerak anggun penuh warna.',
      },
      {
        id: 'joged-bumbung',
        title: 'Joged Bumbung',
        description:
          'Tari pergaulan tradisional Bali yang interaktif dan ceria, mengajak tamu ikut menari bersama diiringi alunan musik bambu.',
      },
      {
        id: 'legong-keraton',
        title: 'Legong Keraton',
        description:
          'Tarian klasik istana Bali dengan detail gerak mata, jemari, dan kipas yang halus, anggun, dan bernilai seni tinggi.',
      },
      {
        id: 'panyembrama',
        title: 'Panyembrama',
        description:
          'Tari penyambutan resmi khas Bali yang melambangkan rasa hormat dan keramahan bagi tamu undangan serta delegasi acara.',
      },
      {
        id: 'pendet',
        title: 'Pendet',
        description:
          'Tarian penyambutan klasik dengan bokor bunga sebagai simbol ucapan selamat datang dan keberkahan bagi para hadirin.',
      },
      {
        id: 'sekar-jagat',
        title: 'Sekar Jagat',
        description:
          'Tari penyambutan berformasi anggun yang memancarkan keindahan budaya Bali sebagai pembuka gala dinner maupun peresmian.',
      },
      {
        id: 'sekar-jepun',
        title: 'Sekar Jepun',
        description:
          'Tarian khas Kabupaten Badung yang terinspirasi dari keanggunan bunga kamboja dengan gerak lembut dan kostum bernuansa emas.',
      },
      {
        id: 'balinese-tradisional-etc',
        title: 'Tari Tradisional Bali Lainnya (etc.)',
        description:
          'Tersedia beragam repertoar tari tradisional Bali lainnya seperti Baris, Topeng, Kebyar Duduk, dan Oleg Tamulilingan sesuai kebutuhan acara.',
        placeholderLabel: 'Custom Repertoire · Balinese Tradisional',
      },
    ],
  },
  {
    id: 'nusantara',
    number: '06.',
    title: 'Nusantara',
    summary:
      'Kekayaan seni tari dari berbagai daerah di Indonesia yang dikemas dengan koreografi panggung rapi dan kostum adat autentik.',
    highlights: 'Burung Enggang · Jaipong · Jaranan · Saman · Nusantara Collaboration · Dan Lainnya',
    iconKey: 'nusantara',
    items: [
      {
        id: 'burung-enggang',
        title: 'Burung Enggang',
        description:
          'Tarian adat suku Dayak Kalimantan yang memadukan keluwesan gerak sayap bulu enggang dengan ketenangan dan kewibawaan.',
      },
      {
        id: 'jaipong',
        title: 'Jaipong',
        description:
          'Tari tradisional khas Jawa Barat dengan ketukan kendang yang dinamis, lincah, dan ekspresif untuk menghidupkan suasana panggung.',
      },
      {
        id: 'jaranan',
        title: 'Jaranan',
        description:
          'Koreografi tari rakyat Nusantara penuh semangat menggunakan properti kuda kepang dengan formasi ritmis dan kebanggaan tradisi.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355862/1a6a8fe6-6eef-41a6-b237-b14c8f9f69a9.png',
            alt: 'Jaranan — Pertunjukan tari rakyat Nusantara oleh Sevenpro Entertainment di Bali',
          },
        ],
      },
      {
        id: 'saman',
        title: 'Saman',
        description:
          'Tarian tradisional Aceh dengan kekompakan tepuk tangan, gerak bahu, dan tempo cepat yang memukau untuk acara nasional dan korporat.',
      },
      {
        id: 'nusantara-collaboration',
        title: 'Nusantara Collaboration',
        description:
          'Sajian medley tari daerah dari Sabang hingga Merauke dalam satu pertunjukan kolaboratif yang megah untuk konferensi dan acara kenegaraan.',
      },
      {
        id: 'nusantara-etc',
        title: 'Tari Nusantara Lainnya (etc.)',
        description:
          'Dapat menghadirkan tari daerah Indonesia lainnya seperti Tari Piring, Betawi, Papua, atau Tor-Tor berdasarkan tema acara.',
        placeholderLabel: 'Custom Repertoire · Nusantara',
      },
    ],
  },
  {
    id: 'kecak',
    number: '07.',
    title: 'Kecak',
    summary:
      'Pertunjukan vokal "cak" kolosal khas Bali yang penuh intensitas dramatis, mulai dari versi klasik Ramayana hingga inovasi kontemporer.',
    highlights: 'Kecak Fire · Kecak Kontemporer · Kecak Ramayana · Hanoman · Dan Lainnya',
    iconKey: 'kecak',
    items: [
      {
        id: 'kecak-fire',
        title: 'Kecak Fire',
        description:
          'Paduan koor vokal Kecak yang menggetarkan dengan atraksi permainan api dramatis sebagai puncak pertunjukan malam di ruang terbuka.',
      },
      {
        id: 'kecak-kontemporer',
        title: 'Kecak Kontemporer',
        description:
          'Interpretasi modern Tari Kecak yang memadukan ritme vokal tradisional dengan koreografi panggung dinamis dan tata cahaya teater.',
      },
      {
        id: 'kecak-ramayana',
        title: 'Kecak Ramayana',
        description:
          'Pementasan kisah epik Ramayana dengan formasi penari Kecak, Rama, Sinta, Rahwana, dan klimaks tarian api yang autentik.',
      },
      {
        id: 'hanoman',
        title: 'Hanoman',
        description:
          'Fokus pertunjukan tokoh kera putih Hanoman dengan aksi akrobatik panggung, kostum megah, dan interaksi teatrikal bersama penonton.',
      },
      {
        id: 'kecak-etc',
        title: 'Formasi Kecak Lainnya (etc.)',
        description:
          'Jumlah penari Kecak dan durasi pertunjukan dapat disesuaikan mulai dari format panggung ballroom hotel hingga amphitheater besar.',
        placeholderLabel: 'Custom Scale · Kecak Production',
      },
    ],
  },
  {
    id: 'kontemporer-balinese',
    number: '08.',
    title: 'Kontemporer Balinese',
    summary:
      'Karya tari kreasi baru yang memadukan akar estetika budaya Bali dengan cerita teatrikal, kostum eksklusif, dan tata visual modern.',
    highlights:
      'Asmara Surya Ratih · Barong Landung · Dewi Danu · Dewi Langit · Jayaprana Layonsari · Pandawa Lima · Spirit of Bali · Spirit of Garuda · Sunda Mapaisunda · Dan Lainnya',
    iconKey: 'balinese-modern',
    items: [
      {
        id: 'asmara-surya-ratih',
        title: 'Asmara Surya Ratih',
        description:
          'Kisah cinta abadi Dewa Surya dan Dewi Ratih yang dibawakan 8 penari (4 perempuan, 4 laki-laki) melalui perpaduan gerak keras dan halus dalam tari kreasi megah.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795353892/0306fd78-3d5f-4bc1-9746-5693c1fd5946.png',
            alt: 'Asmara Surya Ratih — Pertunjukan tari kreasi Bali Sevenpro Entertainment (1)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448459/9d9c9fac-0b2f-475e-a73b-e70d31f432f1.png',
            alt: 'Asmara Surya Ratih — Formasi 8 penari Dewa Surya dan Dewi Ratih di Bali (2)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448465/275d39a4-d365-437a-95c9-77c4642e1463.png',
            alt: 'Asmara Surya Ratih — Detail kostum dan gerak tari kreasi Sevenpro Entertainment (3)',
          },
        ],
      },
      {
        id: 'barong-landung',
        title: 'Barong Landung',
        description:
          'Sajian tari kreasi terinspirasi figur raksasa Jero Gede dan Jero Luh dengan sentuhan koreografi modern yang memikat.',
      },
      {
        id: 'dewi-danu',
        title: 'Dewi Danu',
        description:
          'Tarian kreasi yang merepresentasikan keagungan Dewi penguasa danau dan air kehidupan dengan gerak mengalir serta nuansa kostum elegan.',
      },
      {
        id: 'dewi-langit',
        title: 'Dewi Langit',
        description:
          'Tari kreasi bernuansa magis dengan kostum biru elegan, kipas biru panjang simbol angin dan awan, serta bola lampu biru sebagai cahaya bintang.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795354037/8d419c3d-5ef0-4e10-bed2-9e85b2d56275.png',
            alt: 'Dewi Langit — Tarian kreasi kostum biru dengan kipas panjang dan bola lampu biru',
          },
        ],
      },
      {
        id: 'jayaprana-layonsari',
        title: 'Jayaprana Layonsari',
        description:
          'Drama tari kontemporer yang mengangkat kisah cinta legendaris Bali melalui ekspresi panggung emosional dan komposisi ensemble.',
      },
      {
        id: 'pandawa-lima',
        title: 'Pandawa Lima',
        description:
          'Pertunjukan koreografi maskulin berenergi kuat yang menggambarkan karakter ksatria lima bersaudara dalam epik pewayangan.',
      },
      {
        id: 'spirit-of-bali',
        title: 'Spirit of Bali',
        description:
          'Koreografi kebanggaan pulau Dewata yang memadukan unsur tradisi Bali, ritme modern, dan semangat kebersamaan untuk pembukaan acara.',
      },
      {
        id: 'spirit-of-garuda',
        title: 'Spirit of Garuda',
        description:
          'Tarian megah bertema ketangguhan dan kebebasan Garuda dengan sayap artistik dan komposisi gerak penuh wibawa.',
      },
      {
        id: 'sunda-mapaisunda',
        title: 'Sunda Mapaisunda',
        description:
          'Karya tari kreasi yang memadukan kelembutan gerak Sunda dengan estetika kontemporer Bali dalam harmoni warna dan musik.',
      },
      {
        id: 'kontemporer-balinese-etc',
        title: 'Tari Kontemporer Bali Lainnya (etc.)',
        description:
          'Kami juga merancang koreografi tari kreasi Bali khusus sesuai narasi brand, tema gala, atau cerita lokal acara Anda.',
        placeholderLabel: 'Custom Concept · Kontemporer Balinese',
      },
    ],
  },
  {
    id: 'kontemporer-modern',
    number: '09.',
    title: 'Kontemporer Modern',
    summary:
      'Pertunjukan tari artistik dengan fokus pada permainan properti cahaya, siluet gerak, dan estetika panggung kontemporer yang elegan.',
    highlights: 'Fan Dance · Fairy Dance · Lamp Dance · Reborn Dance · Dan Lainnya',
    iconKey: 'modern-contemp',
    items: [
      {
        id: 'fan-dance',
        title: 'Fan Dance',
        description:
          'Tarian artistik menggunakan properti kipas lebar berlapis sutra atau bulu yang membentuk siluet visual dramatis di panggung.',
      },
      {
        id: 'fairy-dance',
        title: 'Fairy Dance',
        description:
          'Koreografi bernuansa fantasi dengan kostum sayap ringan nan anggun, cocok untuk garden party, resepsi pernikahan, dan acara bertema magis.',
      },
      {
        id: 'lamp-dance',
        title: 'Lamp Dance',
        description:
          'Pertunjukan tari kreasi dengan permainan cahaya bola lampu dan lentera panggung yang memukau untuk pembukaan gala dinner dan resepsi malam eksklusif.',
        images: [
          {
            src: '/assets/aistudio/Lamp_dance_0ddaf77c.webp',
            alt: 'Lamp Dance — Formasi 6 penari dengan properti bola lampu biru menyala di panggung Sevenpro Entertainment',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448051/0d92f93a-8790-41cc-92f9-9495711b92de.png',
            alt: 'Lamp Dance — Pertunjukan tari kreasi properti lampu artistik di Bali (2)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448122/b4233f2b-7194-40ac-b384-559a4a224802.png',
            alt: 'Lamp Dance — Koreografi ensemble cahaya lampu elegan (3)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355724/f8b12ce0-2d88-4d39-a5a5-6810e05f30cb.png',
            alt: 'Lamp Dance — Pertunjukan tari cahaya lentera panggung malam (4)',
          },
        ],
      },
      {
        id: 'reborn-dance',
        title: 'Reborn Dance',
        description:
          'Koreografi teatrikal bertema transformasi dan kebangkitan yang pas untuk momen peluncuran produk, rebranding, atau milestone perusahaan.',
      },
      {
        id: 'kontemporer-modern-etc',
        title: 'Tari Kontemporer Lainnya (etc.)',
        description:
          'Konsep tari modern artistik lainnya seperti Silk Ribbon Dance atau Shadow Performance dapat disesuaikan dengan kebutuhan panggung.',
        placeholderLabel: 'Custom Concept · Kontemporer Modern',
      },
    ],
  },
  {
    id: 'fire',
    number: '10.',
    title: 'Fire',
    summary:
      'Atraksi pertunjukan api berstandar keselamatan tinggi dengan kombinasi teknik akrobatik, koreografi ensemble, dan properti pyroteknik memukau.',
    highlights: 'Acro Fire · Fire Collaboration · Fire Dance · Fire Staff & Cube · Dan Lainnya',
    iconKey: 'fire',
    items: [
      {
        id: 'acro-fire',
        title: 'Acro Fire',
        description:
          'Kombinasi atraksi keseimbangan tubuh akrobatik dengan permainan properti api untuk menciptakan ketegangan dan kekaguman visual.',
      },
      {
        id: 'fire-collaboration',
        title: 'Fire Collaboration',
        description:
          'Pertunjukan spektakuler yang memadukan tari kreasi, teknik acrobalance, serta properti fire staff, fire cube, hingga instalasi api besar.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795446984/c9f68095-f44a-4c1d-9cd7-81cdc676c2cd.png',
            alt: 'Fire Collaboration — Pertunjukan koreografi tari dan permainan api di Bali (1)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795446988/8d0fe6fb-7567-431c-b0cb-022defda2012.png',
            alt: 'Fire Collaboration — Teknik acrobalance dan fire staff (2)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795446995/0fe8fdb6-7663-43bd-b4b9-f5917d90fa17.png',
            alt: 'Fire Collaboration — Komposisi visual fire cube dan penari (3)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795447008/ad7dbd9d-82d1-4ec5-bc52-57bc8d472ec7.png',
            alt: 'Fire Collaboration — Instalasi api besar dan klimaks pertunjukan malam (4)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355791/997a1118-cbbd-43d0-bbd3-8d705e0160c9.png',
            alt: 'Fire Collaboration — Formasi multi-performer api Sevenpro Entertainment (5)',
          },
        ],
      },
      {
        id: 'fire-dance',
        title: 'Fire Dance',
        description:
          'Koreografi tari api berenergi tinggi untuk panggung tepi pantai, acara resort, maupun klimaks perayaan malam di ruang terbuka.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795354000/6f541b40-8c3c-4fd0-8f51-69981524aeec.png',
            alt: 'Fire Dance — Pertunjukan koreografi api oleh Sevenpro Entertainment di Bali',
          },
        ],
      },
      {
        id: 'fire-etc',
        title: 'Pertunjukan Api Lainnya (etc.)',
        description:
          'Pilihan fire poi, fire hoop, dan pyrotechnic finale dapat disesuaikan dengan izin venue dan ukuran area luar ruang.',
        placeholderLabel: 'Custom Setup · Fire Show',
      },
    ],
  },
  {
    id: 'international-dance',
    number: '11.',
    title: 'International Dance',
    summary:
      'Koleksi tari mancanegara bertema kultural dan teatrikal dari Asia, Timur Tengah, Amerika Latin, hingga Eropa untuk acara bertema internasional.',
    highlights:
      'Barong Sai · Belly Dance · Burlesque · Cabaret · Chinese Fan Dance · Flamenco · Gatsby · Salsa · Shamadan · Thousand Hands · Dan Lainnya',
    iconKey: 'international',
    items: [
      {
        id: 'barong-sai',
        title: 'Barong Sai',
        description:
          'Atraksi barongsai tradisional berenergi tinggi dengan iringan tambur dan simbal untuk perayaan Imlek, pembukaan bisnis, dan acara pembawa hoki.',
      },
      {
        id: 'belly-dance',
        title: 'Belly Dance',
        description:
          'Tari perut Timur Tengah yang memadukan kontrol gerak tubuh eksotis, kostum berkilau, dan musik ritmis untuk tema Arabian Night.',
      },
      {
        id: 'burlesque',
        title: 'Burlesque',
        description:
          'Pertunjukan teatrikal bergaya vintage glamour dengan koreografi elegan, properti klasik, dan kostum panggung berkelas.',
      },
      {
        id: 'cabaret-dance',
        title: 'Cabaret Dance',
        description:
          'Sajian tari kabaret penuh energi dengan formasi panggung glamor, kostum bulu artistik, dan nuansa hiburan malam ala Paris.',
      },
      {
        id: 'chinese-fan-dance',
        title: 'Chinese Fan Dance',
        description:
          'Koreografi tari kipas dan selendang Tionghoa dengan kostum merah keemasan yang megah untuk perayaan Tahun Baru Imlek dan gala dinner.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355709/50e1caef-7e77-4dfa-a518-51444d29c6c3.png',
            alt: 'Chinese Fan Dance — Penampilan tari kipas Imlek Sevenpro Entertainment (1)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795447367/784e57ac-a3a1-4170-a751-8b345d063922.png',
            alt: 'Chinese Fan Dance — Formasi kostum merah keemasan di Bali (2)',
          },
        ],
      },
      {
        id: 'christmas-dance',
        title: 'Christmas Dance',
        description:
          'Pertunjukan tari bertema Natal yang ceria dan meriah dengan kostum merah-putih elegan untuk menyemarakkan perayaan akhir tahun.',
      },
      {
        id: 'flamenco',
        title: 'Flamenco',
        description:
          'Tarian penuh gairah asal Spanyol yang menampilkan ketukan kaki presisi, gerak tangan dramatis, dan gaun berlayer khas Andalusia.',
      },
      {
        id: 'gatsby-dance',
        title: 'Gatsby Dance',
        description:
          'Koreografi Charleston dan swing ala era 1920-an lengkap dengan busana fringe berkilau untuk pesta gala bertema Great Gatsby.',
      },
      {
        id: 'hawaian-dance',
        title: 'Hawaian Dance',
        description:
          'Tarian Hula bernuansa tropis yang hangat dan ceria, sangat cocok untuk acara bertema pantai, luau party, dan resort gathering.',
      },
      {
        id: 'hula-hoop-dance',
        title: 'Hula Hoop Dance',
        description:
          'Atraksi tari lincah dengan permainan satu maupun banyak hula hoop secara simultan yang memadukan ritme dan ketangkasan.',
      },
      {
        id: 'indian-dance',
        title: 'Indian Dance',
        description:
          'Koreografi Bollywood yang semarak dan penuh warna dengan gerak energik untuk resepsi pernikahan India maupun pesta tematik.',
      },
      {
        id: 'mexican-dance',
        title: 'Mexican Dance',
        description:
          'Tarian rakyat Meksiko yang penuh warna dengan rok lebar berputar dinamis dan iringan musik fiesta yang membangkitkan semangat.',
      },
      {
        id: 'chinese-dragon',
        title: 'Chinese Dragon',
        description:
          'Pertunjukan Liong atau Naga Tiongkok kolosal dengan liukan sinkronisasi tim yang spektakuler untuk acara festival dan perayaan Imlek.',
      },
      {
        id: 'salsa',
        title: 'Salsa',
        description:
          'Koreografi tari berpasangan Latin berirama Clave 4/4 yang penuh energi dan interaksi hangat untuk cocktail party maupun gala night.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355772/66cfc946-da87-4dd6-a83e-8d119d207a51.png',
            alt: 'Salsa — Penampilan tari Salsa penuh energi Sevenpro Entertainment (1)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448531/85006221-eb7f-4d35-8463-e7c38f5283ba.png',
            alt: 'Salsa — Koreografi Salsa berpasangan di Bali (2)',
          },
        ],
      },
      {
        id: 'shamadan',
        title: 'Shamadan',
        description:
          'Tarian tradisional elegan dengan menyeimbangkan tempat lilin bercabang di atas kepala, menghadirkan kesan eksotis pada jamuan malam.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355794/9250b2a1-cb94-4062-91d1-46fce192a51d.png',
            alt: 'Shamadan — Pertunjukan tari keseimbangan candelabra oleh Sevenpro Entertainment',
          },
        ],
      },
      {
        id: 'thousand-hands',
        title: 'Thousand Hands',
        description:
          'Koreografi presisi tinggi dengan sinkronisasi gerakan puluhan lengan dalam satu garis lurus yang menciptakan ilusi visual memukau.',
      },
      {
        id: 'umbrella-dance',
        title: 'Umbrella Dance',
        description:
          'Tarian artistik menggunakan properti payung tradisional maupun tematik untuk membentuk komposisi warna yang anggun di panggung.',
      },
      {
        id: 'international-dance-etc',
        title: 'Tari Internasional Lainnya (etc.)',
        description:
          'Tersedia konsep tari dunia lainnya seperti Samba Brazil, Tango, atau Geisha Performance menyesuaikan tema negara acara Anda.',
        placeholderLabel: 'Custom Theme · International Dance',
      },
    ],
  },
  {
    id: 'moderen',
    number: '12.',
    title: 'Moderen',
    summary:
      'Koreografi tari modern, akrobatik tubuh, dan dance pop berenergi tinggi untuk peluncuran brand, konferensi korporat, hingga hiburan klub.',
    highlights: 'Acrobalance · Aerial Dance · Hip Hop Dance · K-pop Dance · Moderen Dance · Sexy Dancer · Dan Lainnya',
    iconKey: 'modern',
    items: [
      {
        id: 'acrobalance',
        title: 'Acrobalance',
        description:
          'Pertunjukan akrobatik berpasangan yang mengutamakan kekuatan, keseimbangan presisi, dan formasi artistik sebagai suguhan utama panggung gala.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795355750/fa94c44d-3b53-4e0c-9460-3f65be235864.png',
            alt: 'Acrobalance — Formasi akrobatik keseimbangan panggung (1)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448298/856dfa54-2a98-423c-8981-450943c14524.png',
            alt: 'Acrobalance — Gerakan keseimbangan berpasangan pencahayaan dramatis (2)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448304/97ac3d3c-40a8-4ff9-8eea-3d5be1303c32.png',
            alt: 'Acrobalance — Pose akrobatik presisi acara gala di Bali (3)',
          },
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795448366/cea591a8-7911-4248-9ea6-48339fa1b2ea.png',
            alt: 'Acrobalance — Komposisi tubuh dan kekuatan panggung Sevenpro (4)',
          },
        ],
      },
      {
        id: 'aerial-dance',
        title: 'Aerial Dance',
        description:
          'Tarian udara menggunakan kain sutra (aerial silk) atau ring (lyra) yang memadukan kelenturan, kekuatan, dan keanggunan di ketinggian.',
      },
      {
        id: 'hip-hop-dance',
        title: 'Hip Hop Dance',
        description:
          'Penampilan street dance berenergi tinggi dengan groove tajam, power moves, dan koreografi sinkronisasi untuk acara muda dan brand urban.',
      },
      {
        id: 'k-pop-dance',
        title: 'K-pop Dance',
        description:
          'Koreografi penuh semangat mengikuti tren musik K-Pop populer lengkap dengan styling modern untuk festival, gathering, dan ulang tahun.',
      },
      {
        id: 'moderen-dance',
        title: 'Moderen Dance',
        description:
          'Koreografi dance komersial kontemporer yang fleksibel dipadukan dengan musik pilihan, bumper produk, maupun backing dancer artis.',
      },
      {
        id: 'sexy-dancer',
        title: 'Sexy Dancer',
        description:
          'Penampilan koreografi berkarakter bold dan percaya diri untuk acara privat dewasa, nightclub, atau pesta malam eksklusif.',
      },
      {
        id: 'moderen-etc',
        title: 'Dance Modern Lainnya (etc.)',
        description:
          'Tersedia konsep Flashmob, Breakdance, atau Shuffle Dance yang disesuaikan dengan rundown dan karakter tamu undangan.',
        placeholderLabel: 'Custom Concept · Moderen Dance',
      },
    ],
  },
  {
    id: 'led-dance',
    number: '13.',
    title: 'LED Dance',
    summary:
      'Sajian tari futuristik berbasis teknologi cahaya, kostum LED terprogram, dan properti visual grafis untuk acara teknologi maupun gala malam.',
    highlights:
      'Fluro Dance · LED Butterfly Dance · LED Fan Dance · LED Laser · LED Tron · Visual Poi · Visual Stick · Dan Lainnya',
    iconKey: 'led',
    items: [
      {
        id: 'fluro-dance',
        title: 'Fluro Dance',
        description:
          'Tarian di bawah sinar UV blacklight menggunakan kostum dan cat tubuh fluoresen yang menyala terang dalam gelap.',
      },
      {
        id: 'led-butterfly-dance',
        title: 'LED Butterfly Dance',
        description:
          'Pertunjukan penari dengan sayap kupu-kupu bercahaya LED yang mekar anggun, menciptakan momen visual mempesona di panggung gelap.',
      },
      {
        id: 'led-fan-dance',
        title: 'LED Fan Dance',
        description:
          'Koreografi kipas bercahaya LED yang memadukan kelembutan gerak tari dengan sapuan garis warna dinamis.',
      },
      {
        id: 'led-laser',
        title: 'LED Laser',
        description:
          'Atraksi futuristik yang memadukan gerakan koreografi penari dengan manipulasi berkas sinar laser secara presisi di panggung.',
      },
      {
        id: 'led-tron',
        title: 'LED Tron',
        description:
          'Koreografi modern dengan kostum strip LED yang menyala mengikuti hentakan musik elektronik, sangat populer untuk corporate opening.',
      },
      {
        id: 'visual-poi',
        title: 'Visual Poi',
        description:
          'Permainan poi digital beresolusi tinggi yang mampu menampilkan logo perusahaan, teks ucapan, atau pola grafis melayang di udara.',
      },
      {
        id: 'visual-stick',
        title: 'Visual Stick',
        description:
          'Atraksi tongkat cahaya terprogram yang menampilkan pola grafis dan branding custom secara sinkron bersama koreografi penari.',
      },
      {
        id: 'led-dance-etc',
        title: 'LED Show Lainnya (etc.)',
        description:
          'Tersedia properti cahaya custom seperti LED Drum atau LED Violin untuk melengkapi konsep acara futuristik Anda.',
        placeholderLabel: 'Custom Tech · LED Dance',
      },
    ],
  },
  {
    id: 'party-dance',
    number: '14.',
    title: 'Party Dance',
    summary:
      'Hiburan pesta interaktif, karakter tematik, dan penampil visual meriah untuk menghidupkan suasana gala, pool party, maupun perayaan ulang tahun.',
    highlights:
      'Bottle Girl · Champagne Girls · Costumes Show · Disco Ball · Lady Rose · Mermaid Show · Magician · Stilt Walker · Water Ball · Dan Lainnya',
    iconKey: 'party',
    items: [
      {
        id: 'bottle-girl',
        title: 'Bottle Girl',
        description:
          'Talent berkostum glamor untuk prosesi pengantaran VIP bottle service lengkap dengan koreografi pembuka di lounge atau club.',
      },
      {
        id: 'badut',
        title: 'Badut',
        description:
          'Penghibur karakter badut ramah dan interaktif dengan trik balon maupun komedi ringan untuk acara keluarga dan ulang tahun anak.',
      },
      {
        id: 'champagne-girls',
        title: 'Champagne Girls',
        description:
          'Penyambut tamu berkostum artistik yang menyajikan welcome drink atau sampanye secara elegan di area pintu masuk acara.',
      },
      {
        id: 'champagne-aerial-girls',
        title: 'Champagne Aerial Girls',
        description:
          'Atraksi menuangkan sampanye langsung dari posisi tergantung di udara menggunakan ring atau silk untuk kesan mewah tak terlupakan.',
      },
      {
        id: 'costumes-show',
        title: 'Costumes Show',
        description:
          'Parade dan sesi foto bersama talent berkostum karnaval megah, karakter futuristik, atau busana tematik sesuai konsep pesta.',
      },
      {
        id: 'disco-ball',
        title: 'Disco Ball',
        description:
          'Penari berkostum cermin reflektif ala bola disko yang memantulkan cahaya panggung untuk memeriahkan lantai dansa dan countdown.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795356229/18f86299-dc8a-49d1-9c0a-0d9554fca0e6.png',
            alt: 'Disco Ball — Kostum cermin reflektif untuk party dan countdown oleh Sevenpro Entertainment',
          },
        ],
      },
      {
        id: 'party-djimbe',
        title: 'Djimbe',
        description:
          'Pemain perkusi djimbe pesta yang menyatu di tengah kerumunan tamu maupun mendampingi DJ untuk menaikkan tempo perayaan.',
      },
      {
        id: 'drag-queen',
        title: 'Drag Queen',
        description:
          'Penghibur panggung berkarakter ekspresif dengan kostum glamor, lip-sync teatrikal, dan interaksi komedi yang meriah.',
      },
      {
        id: 'lady-rose',
        title: 'Lady Rose',
        description:
          'Karakter showgirl bertema bunga mawar mewah untuk penyambutan tamu VIP, peluncuran produk kecantikan, dan pesta taman elegan.',
        images: [
          {
            src: 'https://res.cloudinary.com/ypvr42cl/image/upload/v1795356203/a2d079b9-1389-4ec2-96cf-da177f061bd4.png',
            alt: 'Lady Rose — Pertunjukan karakter floral mewah Sevenpro Entertainment',
          },
        ],
      },
      {
        id: 'mermaid-show',
        title: 'Mermaid Show',
        description:
          'Penampilan putri duyung di kolam renang maupun area tepi air untuk menciptakan daya tarik unik pada pool party dan acara resort.',
      },
      {
        id: 'magician',
        title: 'Magician',
        description:
          'Pesulap close-up roaming di meja tamu maupun aksi ilusi panggung untuk mencairkan suasana selama sesi makan malam.',
      },
      {
        id: 'pantomim',
        title: 'Pantomim',
        description:
          'Aksi teatrikal tanpa kata yang mengandalkan ekspresi wajah dan gerak tubuh jenaka untuk interaksi tamu lintas bahasa.',
      },
      {
        id: 'percusion',
        title: 'Percusion',
        description:
          'Aksi perkusi pesta berenergi tinggi yang memicu antusiasme penonton saat puncak acara maupun perayaan malam.',
      },
      {
        id: 'snake-dance',
        title: 'Snake Dance',
        description:
          'Pertunjukan tari eksotis berkolaborasi dengan ular jinak secara aman dan terlatih untuk acara bertema hutan tropis atau sirkus.',
      },
      {
        id: 'umbrella-canapes-girl',
        title: 'Umbrella Canapes Girl',
        description:
          'Talent dengan gaun nampan canapé dan payung artistik yang berkeliling menyajikan hidangan ringan sambil berinteraksi dengan tamu.',
      },
      {
        id: 'stilt-walker',
        title: 'Stilt Walker',
        description:
          'Penampil egrang tinggi berkostum karnaval atau LED yang mencuri perhatian sebagai penyambut di area gerbang dan parade outdoor.',
      },
      {
        id: 'walk-about',
        title: 'Walk About',
        description:
          'Talent karakter roaming yang berkeliling menyapa tamu, mengajak berfoto, dan menjaga keceriaan suasana di seluruh area venue.',
      },
      {
        id: 'water-ball-dance',
        title: 'Water Ball Dance',
        description:
          'Penari atau akrobat yang tampil anggun di dalam bola transparan mengapung di atas permukaan kolam renang.',
      },
      {
        id: 'water-drum',
        title: 'Water Drum',
        description:
          'Atraksi tabuhan drum yang menghasilkan cipratan air bercahaya di atas panggung, memadukan ritme perkusi dan efek visual segar.',
      },
      {
        id: 'party-dance-etc',
        title: 'Hiburan Pesta Lainnya (etc.)',
        description:
          'Masih banyak konsep hiburan pesta lainnya seperti Living Statue, Fire Breather, atau Bubble Show yang siap dihadirkan.',
        placeholderLabel: 'Custom Entertainment · Party Dance',
      },
    ],
  },
  {
    id: 'special-request',
    number: '15.',
    title: 'Special Request',
    summary:
      'Konsep pertunjukan khusus yang dirancang dari nol sesuai tema acara, peluncuran produk, logo perusahaan, atau kolaborasi lintas kategori.',
    highlights: 'Custom Choreography · Brand Integration · Thematic Fusion · Full Production',
    iconKey: 'special',
    items: [
      {
        id: 'custom-concept-production',
        title: 'Custom Show & Konsep Khusus',
        description:
          'Diskusikan kebutuhan khusus acara Anda—mulai dari penggabungan penari tradisional dan LED, reveal produk di panggung, hingga kostum khusus berlogo perusahaan.',
        placeholderLabel: 'Tailored Production · Special Request',
      },
    ],
  },
];
