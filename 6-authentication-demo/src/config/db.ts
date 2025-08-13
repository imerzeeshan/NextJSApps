import mysql from "mysql2/promise";

export const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "ADCPZ2740F@#786f",
  database: "hospital_db",
});

try {
  const connection = await db.getConnection();
  console.log("✅ Database connected successfully");
  connection.release();
} catch (error) {
  console.log("❌ Database connection failed: ", error);
  process.exit(1);
}
