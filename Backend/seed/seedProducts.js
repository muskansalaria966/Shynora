const dns = require("dns");

dns.setServers([
  "8.8.8.8",
  "8.8.4.4"
]);

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("../models/Product");

dotenv.config();


/*
=========================================
JEWELLERY DATA
=========================================
*/

const jewelleryData = {

  Necklace: {
    gold: [
      {
        id: 1,
        name: "Classic Gold Necklace",
        price: "₹42,999",
        image:
          "",
      },
      {
        id: 2,
        name: "22K Gold Necklace",
        price: "₹58,999",
        image:
          "",
      },
    ],

    diamond: [
      {
        id: 3,
        name: "Diamond Necklace Set",
        price: "₹1,25,999",
        image:
          "jewelryImages.diamondNecklace",
      },
      {
        id: 4,
        name: "Luxury Diamond Necklace",
        price: "₹1,75,999",
        image:
          "jewelryImages.diamondNecklace",
      },
    ],

    bridal: [
      {
        id: 5,
        name: "Royal Bridal Necklace",
        price: "₹2,10,999",
        image:
          "jewelryImages.bridalJewelry",
      },
      {
        id: 6,
        name: "Temple Bridal Necklace",
        price: "₹45,999",
        image:
          "jewelryImages.bridalJewelry",
      },
    ],

    choker: [
      {
        id: 7,
        name: "Gold Choker Necklace",
        price: "₹65,999",
        image:
          "jewelryImages.goldNecklace",
      },
      {
        id: 8,
        name: "Diamond Choker",
        price: "₹98,999",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDuvXF2KiORmpwOJ2yrFHane_kyvvJOxk7zUKatc5Wcw&s=10",
      },
    ],

    pearl: [
      {
        id: 9,
        name: "Elegant Pearl Necklace",
        price: "₹32,999",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylYqNhQFjHsfZ9FJuZBnwxDYwYiJtPtE23PRoiwVovw&s=10",
      },
      {
        id: 10,
        name: "Pearl Pendant Necklace",
        price: "₹38,999",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPk6eWZ1HTo67gup-FnF6dAJi0cKrrSZugNwUyRK689g&s=10",
      },
    ],

    layered: [
      {
        id: 11,
        name: "Layered Gold Necklace",
        price: "₹48,999",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKHoiC4azj4KEmQ03bexY3eyJ7rljFQuLK1Q5GQww2Sw&s=10",
      },
      {
        id: 12,
        name: "Modern Layered Necklace",
        price: "₹54,999",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYYe7Oxt7m3FTFgVjuRClf52aiS3PVnLWBQdyIm9kpA&s=10",
      },
    ],
  },

  Ring: {
    gold: [
      {
        name: "Classic Gold Ring",
        price: "₹18,999",
        image: "",
      },
      {
        name: "Rose Gold Ring",
        price: "₹20,999",
        image: "/images/g2.jpg",
      },
    ],

    diamond: [
      {
        name: "Diamond Solitaire",
        price: "₹58,999",
        image: "/images/d1.jpg",
      },
      {
        name: "Luxury Diamond Ring",
        price: "₹72,999",
        image: "/images/d2.jpg",
      },
    ],

    ethnic: [
      {
        name: "Temple Ring",
        price: "₹25,999",
        image: "",
      },
    ],

    wedding: [
      {
        name: "Wedding Band",
        price: "₹35,999",
        image: "/images/w1.jpg",
      },
    ],
  },

  Earrings: {
    gold: [
      {
        name: "22K Gold Earrings",
        price: "₹18,999",
        image: "/images/eg1.jpg",
      },
      {
        name: "Rose Gold Earrings",
        price: "₹22,999",
        image: "/images/eg2.jpg",
      },
    ],

    diamond: [
      {
        name: "Diamond Stud Earrings",
        price: "₹52,999",
        image: "/images/ed1.jpg",
      },
      {
        name: "Luxury Diamond Earrings",
        price: "₹69,999",
        image: "/images/ed2.jpg",
      },
    ],

    hoops: [
      {
        name: "Classic Hoop Earrings",
        price: "₹14,999",
        image: "/images/eh1.jpg",
      },
      {
        name: "Twisted Hoop Earrings",
        price: "₹17,999",
        image: "/images/eh2.jpg",
      },
    ],

    stud: [
      {
        name: "Pearl Stud Earrings",
        price: "₹12,999",
        image: "/images/es1.jpg",
      },
      {
        name: "Heart Stud Earrings",
        price: "₹15,999",
        image: "/images/es2.jpg",
      },
    ],

    jhumka: [
      {
        name: "Traditional Gold Jhumka",
        price: "₹24,999",
        image: "/images/ej1.jpg",
      },
    ],

    drop: [
      {
        name: "Elegant Drop Earrings",
        price: "₹19,999",
        image: "/images/ep1.jpg",
      },
    ],
  },

  Bangles: {
    gold: [
      {
        name: "Classic Gold Bangles",
        price: "₹22,999",
        image: "/images/bg1.jpg",
      },
      {
        name: "Rose Gold Bangles",
        price: "₹28,999",
        image: "/images/bg2.jpg",
      },
    ],

    diamond: [
      {
        name: "Diamond Bangles",
        price: "₹78,999",
        image: "/images/bd1.jpg",
      },
      {
        name: "Luxury Diamond Bangles",
        price: "₹92,999",
        image: "/images/bd2.jpg",
      },
    ],
  },

  Bracelet: {
    gold: [
      {
        name: "Classic Gold Bracelet",
        price: "₹22,999",
        image: "",
      },
      {
        name: "Rose Gold Bracelet",
        price: "₹28,999",
        image: "/images/bg2.jpg",
      },
    ],

    diamond: [
      {
        name: "Diamond Tennis Bracelet",
        price: "₹78,999",
        image: "/images/bd1.jpg",
      },
      {
        name: "Luxury Diamond Bracelet",
        price: "₹92,999",
        image: "/images/bd2.jpg",
      },
    ],

    charm: [
      {
        name: "Heart Charm Bracelet",
        price: "₹15,999",
        image: "/images/bc1.jpg",
      },
    ],

    tennis: [
      {
        name: "Elegant Tennis Bracelet",
        price: "₹45,999",
        image: "/images/bt1.jpg",
      },
    ],
  },

  Anklets: {
    anklets: [
      {
        name: "Classic Gold Anklets",
        price: "₹22,999",
        image: "",
      },
      {
        name: "Rose Gold Anklets",
        price: "₹28,999",
        image: "",
      },
    ],

    payal: [
      {
        name: "Diamond Payal",
        price: "₹78,999",
        image: "",
      },
      {
        name: "Luxury Diamond Payal",
        price: "₹92,999",
        image: "",
      },
    ],
  },

  Hair: {
    matha: [
      {
        name: "Matha Patti",
        price: "$25",
        image: "/images/matha-patti.jpg",
      },
      {
        name: "Bridal Matha Patti",
        price: "$35",
        image: "/images/bridal-matha.jpg",
      },
    ],

    maang: [
      {
        name: "Hair Chain",
        price: "$20",
        image: "/images/hair-chain.jpg",
      },
    ],
  },

  HandWaist: {
    hathphool: [
      {
        name: "HathPhool",
        price: "₹22,999",
        image: "necklace/hathphool.jpeg",
      },
      {
        name: "Phool",
        price: "₹28,999",
        image: "",
      },
    ],

    handchain: [
      {
        name: "Hand Chain",
        price: "₹78,999",
        image: "",
      },
      {
        name: "Luxury Hand Chain",
        price: "₹92,999",
        image: "",
      },
    ],
  },

  Nose: {
    pin: [
      {
        name: "Classic Gold Pin",
        price: "₹22,999",
        image: "",
      },
      {
        name: "Rose Gold Pin",
        price: "₹28,999",
        image: "",
      },
    ],

    ring: [
      {
        name: "Diamond Nose Ring",
        price: "₹78,999",
        image: "",
      },
      {
        name: "Luxury Nose Ring",
        price: "₹92,999",
        image: "",
      },
    ],

    nath: [
      {
        name: "Nath",
        price: "",
        image: "",
      },
    ],

    septum: [
      {
        name: "Septum",
        price: "",
        image: "",
      },
    ],
  },
};


/*
=========================================
HELPER
₹42,999 → 42999
$25 → 25
=========================================
*/

const convertPrice = (price) => {
  if (!price || typeof price !== "string") {
    return null;
  }

  const cleaned = price.replace(/[₹,$]/g, "").trim();

  if (!cleaned) {
    return null;
  }

  const number = Number(cleaned);

  return Number.isNaN(number) ? null : number;
};


/*
=========================================
CREATE PRODUCTS
=========================================
*/

const createProducts = () => {
  const products = [];

  Object.entries(jewelleryData).forEach(
    ([category, subcategories]) => {

      Object.entries(subcategories).forEach(
        ([subcategory, items]) => {

          items.forEach((item) => {

            const price = convertPrice(item.price);

            // Skip incomplete products
            if (
              !item.name ||
              !item.name.trim() ||
              price === null
            ) {
              return;
            }

            products.push({
              name: item.name.trim(),

              category,

              subcategory,

              price,

              image: item.image?.trim() || "",

              description:
                `${item.name} from our ${category} collection.`,

              material:
                subcategory === "diamond"
                  ? "Diamond"
                  : "Gold",

              stock: 10,

              featured: false,
            });

          });
        }
      );
    }
  );

  return products;
};


/*
=========================================
SEED DATABASE
=========================================
*/

const seedProducts = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    // Clear old products first
    await Product.deleteMany({});

    console.log("Old products removed");

    const products = createProducts();

    await Product.insertMany(products);

    console.log(
      `${products.length} products added successfully`
    );

    await mongoose.connection.close();

    console.log("MongoDB connection closed");

  } catch (error) {

    console.error("Seed failed:", error);

    process.exit(1);
  }
};

seedProducts();