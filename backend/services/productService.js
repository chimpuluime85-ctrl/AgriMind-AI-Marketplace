const prisma = require("../config/db");

const createProduct = async (userId, data) => {
  const product = await prisma.product.create({
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      farmerId: userId,
    },
  });

  return product;
};

const getProducts = async () => {
  return await prisma.product.findMany({
    include: {
      farmer: {
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          isVerified: true,
        },
      },
    },
  });
};

const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      farmer: {
        select: {
          id: true,
          fullName: true,
          email: true,
          phone: true,
          isVerified: true,
        },
      },
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

const updateProduct = async (productId, userId, data) => {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  if (product.farmerId !== userId) {
    throw new Error("Unauthorized");
  }

  return await prisma.product.update({
    where: { id: productId },
    data: {
      name: data.name,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
    },
  });
};

const deleteProduct = async (productId, userId) => {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  if (product.farmerId !== userId) {
    throw new Error("Unauthorized");
  }

  await prisma.product.delete({
    where: { id: productId },
  });

  return true;
};

const getMyProducts = async (userId) => {
  return await prisma.product.findMany({
    where: {
      farmerId: userId,
    },
  });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  getMyProducts,
};