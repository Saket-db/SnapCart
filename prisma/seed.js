const { PrismaClient } = require('./generated/prisma')

const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB

async function seedProducts() {
  const products = [
    {
      title: "Brown Leather Bag",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/7/800/800",
      price: 2500,
    },
    {
      title: "School Books",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/20/800/800",
      price: 1999,
    },
    {
      title: "Women's White Shoes",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/21/800/800",
      price: 9999,
    },
    {
      title: "Old Book",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/24/800/800",
      price: 5999,
    },
    {
      title: "Cuban Mug",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/24/800/800",
      price: 1299,
    },
    {
      title: "Barrel of Oil",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/34/800/800",
      price: 6589,
    },
    {
      title: "Camera Gadgets",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/36/800/800",
      price: 22499,
    },
    {
      title: "Old Record Player",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/39/800/800",
      price: 23599,
    },
    {
      title: "Dinner Table",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/42/800/800",
      price: 8999,
    },
    {
      title: "Mac Book Pro",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/48/800/800",
      price: 159599,
    },
    {
      title: "Light House",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/58/800/800",
      price: 999599,
    },
    {
      title: "Computer with accessories",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/60/800/800",
      price: 9699,
    },
    {
      title: "Cup of Tea",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/60/800/800",
      price: 125,
    },
    {
      title: "Playstation Controller",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/96/800/800",
      price: 1599,
    },
    {
      title: "Rasberries",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/102/800/800",
      price: 259,
    },
    {
      title: "Old Car",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/111/800/800",
      price: 104959,
    },
    {
      title: "Mac Mini",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/119/800/800",
      price: 99999,
    },
    {
      title: "Old Bench",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/129/800/800",
      price: 8999,
    },
    {
      title: "Broken Cars",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/133/800/800",
      price: 256595,
    },
    {
      title: "Guitar",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      url: "https://picsum.photos/id/145/800/800",
      price: 12595,
    },
  ];

  try {
    await prisma.product.createMany({ data: products });
    console.log("Seeding complete!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
