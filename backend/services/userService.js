const prisma = require("../config/db");

const getProfile = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const { passwordHash, ...safeUser } = user;

  return safeUser;
};

const updateProfile = async (userId, data) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      fullName: data.fullName,
      phone: data.phone,
    },
  });

  const { passwordHash, ...safeUser } = user;

  return safeUser;
};

module.exports = {
  getProfile,
  updateProfile,
};
