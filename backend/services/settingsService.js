const prisma = require("../config/db");

const getSettings = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      emailNotifications: true,
      smsNotifications: true,
      theme: true,
      language: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

const updateSettings = async (
  userId,
  settings
) => {
  const user = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      emailNotifications:
        settings.emailNotifications,
      smsNotifications:
        settings.smsNotifications,
      theme: settings.theme,
      language: settings.language,
    },
    select: {
      emailNotifications: true,
      smsNotifications: true,
      theme: true,
      language: true,
    },
  });

  return user;
};

module.exports = {
  getSettings,
  updateSettings,
};
