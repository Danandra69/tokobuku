import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        
  password: "",        
  database: "bukudb" 
});

db.connect((err) => {
  if (err) {
    console.error("Gagal konek MySQL:", err);
  } else {
    console.log("Berhasil konek ke MySQL!");
  }
});

export default db;