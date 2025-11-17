import db from "../config/db.js";

export const getBooks = (req, res) => {
  const sql = "SELECT * FROM daftarbuku";

  db.query(sql, (err, result) => {
    if (err) return res.json({ error: err });
    res.json(result);
  });
};