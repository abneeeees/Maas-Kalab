// All the Members of Maas Kalab
const members = [
  { name: "Mallu", description: "President of Maas Kalab"},
  { name: "echidna tea", description: "Vice President of Maas Kalab"},
  { name: "abneeeees", description: "Mentor of Maas Kalab"},
  { name: "V8", description: "CEO of Maas Kalab"},
  { name: "P4", description: "CEO of Maas Kalab"},
  { name: "LilSuperUser", description: "Maas Explorer"},
  { name: "AK", description: "Vegetarian Imposter"},
  { name: "Satyam", description: "Duke of Dua"},
  { name: "Anshul", description: "Maas Khor"},
  { name: "Bhumi", description: "Maas Khor"},
  { name: "Aditya Singh", description: "Maas Khor"},
];

// Resources related to Maas Kalab and Dilli ke Maas
const resources = [
  {
    imgSrc: "resources/lucknow_galawati_kebab.webp",
    title: "Lucknow Galawati Kebab",
    addr: "https://share.google/w4jvHXaaqOXeuy1iP",
  },
  {
    imgSrc: "resources/talib_kabab_corner.webp",
    title: "Talib Kebab Corner",
    addr: "https://share.google/TZayhAx1eB3KFdZAE",
  },
  {
    imgSrc: "resources/javed_famous_nihari.webp",
    title: "Javed Famous Nahari",
    addr: "https://share.google/B78PTdeWJRClO3G5E",
  },
  {
    imgSrc: "resources/sab_ke_khatir.webp",
    title: "Sab Ke Khatir",
    addr: "https://share.google/MNwV8pWgVkaoWnwB8",
  },
  {
    imgSrc: "resources/noora_nihari.webp",
    title: "Noora Nihari",
    addr: "https://share.google/qSKy2SVXo95wgEKVm",
  },
  {
    imgSrc: "resources/gulrez_kabab_corner.webp",
    title: "Gulrez Kabab Corner",
    addr: "https://share.google/pQdWHFnzm1GzWbmio",
  },
  {
    imgSrc: "resources/hafiz_ji_parathe_wale.webp",
    title: "Hafiz JI Parathe Wale",
    addr: "https://share.google/0aaDdAPEPtuRPNXY3",
  },
  {
    imgSrc: "resources/imran_nihari_shop.webp",
    title: "Imran Nihari Shop Turkmangate Delhi",
    addr: "https://share.google/v9UlFeH1g9ChM4Z2E",
  },
  {
    imgSrc: "resources/sangam_kabab_corner.webp",
    title: "Sangam Kabab Corner",
    addr: "https://share.google/zb9N2rAmisskdVEko",
  },
  {
    imgSrc: "resources/al_nihar.webp",
    title: "Al Nihar",
    addr: "https://share.google/ArYso9ylh99Ma8BvX",
  },
  {
    imgSrc: "resources/pul_bangash_wale.webp",
    title: "Pul Bangash Wale",
    addr: "https://share.google/aJb6xXr61kKSJ9fNx",
  },
];

// Highlights about the MaasHack
const massHackSlides = [
  {
    imgSrc: "maashack_page/one/maashack_1.webp",
    title: "Maas Hack 1.0",
    description: "Jama masjid | Chicken Korma, Chicken fry",
    date: "04-10-25",
    href: "/maashacks/1",
  },
  {
    imgSrc: "maashack_page/two/maashack_2.webp",
    title: "Maas Hack 2.0",
    description: "Shaheen Bagh | Chicken Mandi, Chicken roll, Seekh Kabab",
    date: "28-11-25",
    href: "/maashacks/2",
  },
  {
    imgSrc: "maashack_page/three/maashack_3.webp",
    title: "Maas Hack 3.0",
    description: "Shaheen Bagh | Seekh Kabab, Nihari, Fish Fry, Shwarma, Gulawati Kebab ka roll",
    date: "05-03-26",
    href: "/maashacks/3",
  },
  {
    imgSrc: "maashack_page/four/maashack_4.webp",
    title: "Maas Hack 4.0",
    description: "Zakhir Nagar | Lucknowi Galawati Buff Kebab, Buff keema, Varghi Paratha, Roasted and Fried Chicken",
    date: "15-04-26",
    href: "/maashacks/4",
  },
  {
    imgSrc: "miniMeetups/post_istifa.webp",
    title: "Maas Hack 5.0",
    description: "Shaheen Bagh | Al Faham Mandi and HOD Rolls | Dharmendra Pradhaan Steefa Party",
    date: "27-07-26",
    href: "/maashacks/5",
  },
];

// Highlights about the mini meetups of Maas Kalab
const miniMeetups = [
  {
    imgSrc: "miniMeetups/briyani.webp",
    title: "Briyani shop near Kolez",
    date: "5-12-2025",
  },
  {
    imgSrc: "miniMeetups/gulawati_kebab.webp",
    title: "Adarsh Ka Laptop",
    date: "16-02-2026",
  },
  {
    imgSrc: "miniMeetups/humayun_tomb.webp",
    title: "Happy B'day",
    date: "18-03-2026",
  },
  {
    imgSrc: "miniMeetups/post_foss_hack.webp",
    title: "Post FOSS Hack",
    date: "29-03-2026 - 31-03-2026",
  },
  {
    imgSrc: "miniMeetups/Om_ki_briyani.webp",
    title: "Om ki Briyani",
    date: "10-04-2026",
  },
  {
    imgSrc: "miniMeetups/om_ki_briyani.webp",
    title: "Om ki Briyani 2",
    date: "04-05-2026",
  },
  {
    imgSrc: "miniMeetups/10PM_At_V8's.webp",
    title: "10PM at V8's",
    date: "19-05-2026",
  },
  {
    imgSrc: "miniMeetups/we_at_jantar_mantar.webp",
    title: "Sansad Chalo",
    date: "20-07-2026",
  },
];

// Kalab rules / code of conduct, shown on the home page
const rules = [
  {
    title: "No day excuses",
    text: "Tuesday, Thursday, Saturday or any other religious day: no exceptions allowed.",
  },
  {
    title: "Stay active",
    text: "Be active in the group and respond when meet timings are being decided.",
  },
  {
    title: "Three strikes",
    text: "Miss three meets in a row without a valid reason and you get nuked from the group.",
  },
  {
    title: "No larping",
    text: "No larping around. This is a very serious (non-serious) group.",
  },
  {
    title: "Respect sentiments",
    text: "If someone doesn't eat something for religious reasons, we don't force them or poke them about it.",
  },
];

// Food items that we eat in our events and meetups
const FOOD_ITEMS = [
  "Nihari",
  "Nalli Nihari",
  "Biryani",
  "Seekh Kebab",
  "Gulawati Kebab",
  "Kakori Kebab",
  "Shami Kebab",
  "Bade Ka Kebab",
  "Korma",
  "Laal Maas",
  "Paya",
  "Kaleji Fry",
  "Bheja Fry",
  "Keema Naan",
  "Haleem",
  "Raan Roast",
  "Shawarma",
  "Mughlai Paratha",
  "Sheermal",
];

// Mass hack data source shared/kept on the server side
const massHackData: Record<
  string,
  {
    title: string;
    location: string;
    description: string;
    date: string;
    locationhref: string;
    images: { src: string; caption?: string }[];
  }
> = {
  "1": {
    title: "Maas Hack 1.0",
    location: "Jama Masjid, Delhi",
    description:
      "The inaugural of Maas Hacks! We explored the legendary lanes of Jama Masjid, indulging in authentic Chicken Korma and crispy Chicken Fry. The aromatic spices and traditional cooking methods made this an unforgettable culinary journey through Old Delhi's heritage.",
    date: "04 Oct 2025",
    locationhref: "https://maps.app.goo.gl/ffj4ZwSTzKrhMQxU7",
    images: [
      { src: "/maashack_page/one/maashack_1.webp", caption: "" },
      { src: "/maashack_page/one/ashwani.webp", caption: "" },
      { src: "/maashack_page/one/chicken_fry.webp", caption: "" },
      { src: "/maashack_page/one/jama_masjid.webp", caption: "" },
    ],
  },
  "2": {
    title: "Maas Hack 2.0",
    location: "Shaheen Bagh, Delhi",
    description:
      "Maas Hack 2.0 took us to Shaheen Bagh where we savored delicious Chicken Mandi, flavorful Chicken Rolls, and succulent Seekh Kababs. The perfect blend of aromatic rice and tender meat made this meetup truly special.",
    date: "28 Nov 2025",
    locationhref: "https://maps.app.goo.gl/eDWUVSp9DUSPJSSM9",
    images: [
      { src: "/maashack_page/two/maashack_2.webp", caption: "" },
      { src: "/maashack_page/two/three_gng.webp", caption: "" },
      { src: "/maashack_page/two/mandi.webp", caption: "" },
      { src: "/maashack_page/two/gng_again.webp", caption: "" },
      { src: "/maashack_page/two/chai.webp", caption: "" },
      { src: "/maashack_page/two/car.webp", caption: "" },
    ],
  },
  "3": {
    title: "Maas Hack 3.0",
    location: "Shaheen Bagh, Delhi",
    description:
      "Round two at Shaheen Bagh! This time we had an even grander feast with Seekh Kababs, Nihari, Fish Fry, Shwarma, and the legendary Gulawati Kebab rolls. A true celebration of meat lovers' paradise.",
    date: "05 Mar 2026",
    locationhref: "https://maps.app.goo.gl/eDWUVSp9DUSPJSSM9",
    images: [
      { src: "/maashack_page/three/maashack_3.webp", caption: "" },
      { src: "/maashack_page/three/tea.webp", caption: "" },
      { src: "/maashack_page/three/gng_at_nihari.webp", caption: "" },
      { src: "/maashack_page/three/seekh_kebab.webp", caption: "" },
      { src: "/maashack_page/three/mas.webp", caption: "" },
      { src: "/maashack_page/three/fish_fry.webp", caption: "" },
      { src: "/maashack_page/three/shwarma.webp", caption: "" },
      { src: "/maashack_page/three/nihari.webp", caption: "" },
      { src: "/maashack_page/three/nihari_on_plate.webp", caption: "" },
    ],
  },
  "4": {
    title: "Maas Hack 4.0",
    location: "Zakir Nagar, Delhi",
    description:
      "Maas Hack 4.0 brought us to Zakir Nagar for an authentic Lucknowi experience. We enjoyed Galawati Buff Kebabs, Buff Keema, Varghi Parathas, and both roasted and fried chicken. The melt-in-your-mouth kebabs were pure magic.",
    date: "15 Apr 2026",
    locationhref: "https://maps.app.goo.gl/sjg7RxFvmjQFcMNi9",
    images: [
      { src: "/maashack_page/four/maashack_4.webp", caption: "" },
      { src: "/maashack_page/four/afsar.webp", caption: "" },
      { src: "/maashack_page/four/crowd.webp", caption: "" },
      { src: "/maashack_page/four/cutw_uncle.webp", caption: "" },
      { src: "/maashack_page/four/dogi.webp", caption: "" },
      { src: "/maashack_page/four/drinking_and_shi.webp", caption: "" },
      { src: "/maashack_page/four/fruit.webp", caption: "" },
      { src: "/maashack_page/four/zkn.webp", caption: "" },
      { src: "/maashack_page/four/mosque.webp", caption: "" },
      { src: "/maashack_page/four/peak_on_plate.webp", caption: "" },
      { src: "/maashack_page/four/peak.webp", caption: "" },
      { src: "/maashack_page/four/roasted_again.webp", caption: "" },
      { src: "/maashack_page/four/roasted.webp", caption: "" },
      { src: "/maashack_page/four/sweety.webp", caption: "" },
      { src: "/maashack_page/four/we_ate.webp", caption: "" },
    ],
  },
  "5": {
    title: "Maas Hack 5.0",
    location: "Shaheen Bagh, Delhi",
    description:
      "Maas Hack 5.0 was a celebration. Dharmendra Pradhan had resigned, and Maas Kalab decided that called for a meetup. We went back to Shaheen Bagh for Al Faham Mandi and HOD Rolls, and the whole party was sponsored by V8.",
    date: "27 Jul 2026",
    locationhref: "https://maps.app.goo.gl/eDWUVSp9DUSPJSSM9",
    images: [
      { src: "/miniMeetups/post_istifa.webp" },
    ],
  },
};

export { members, resources, massHackSlides, miniMeetups, rules, FOOD_ITEMS, massHackData };