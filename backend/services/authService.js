const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const prisma = require("../config/db");

const registerUser = async (userData) => {
const { fullName, email, password, phone, role } = userData;

const existingUser = await prisma.user.findUnique({
where: { email },
});

if (existingUser) {
throw new Error("User already exists");
}

const hashedPassword = await bcrypt.hash(password, 10);

const user = await prisma.user.create({
data: {
fullName,
email,
passwordHash: hashedPassword,
phone,
role,
},
});

const { passwordHash: _, ...safeUser } = user;

return safeUser;
};

const loginUser = async (email, password) => {
const user = await prisma.user.findUnique({
where: { email },
});

if (!user) {
throw new Error("Invalid credentials");
}

console.log("EMAIL:", email);
console.log("PASSWORD ENTERED:", password);
console.log("HASH:", user.passwordHash);

const validPassword = await bcrypt.compare(
  password,
  user.passwordHash
);

console.log("PASSWORD MATCH:", validPassword);

if (!validPassword) {
throw new Error("Invalid credentials");
}

const token = jwt.sign(
{
id: user.id,
role: user.role,
},
process.env.JWT_SECRET,
{
expiresIn: "7d",
}
);

const { passwordHash: _, ...safeUser } = user;

return {
token,
user: safeUser,
};
};

module.exports = {
registerUser,
loginUser,
};
