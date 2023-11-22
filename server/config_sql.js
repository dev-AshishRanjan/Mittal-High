const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "4971",
  database: process.env.DB_DATABASE,
  insecureAuth: true,
  protocol: "mysql",
};

module.exports = config;
