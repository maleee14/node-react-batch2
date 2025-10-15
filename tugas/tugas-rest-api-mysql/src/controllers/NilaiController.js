const { conn } = require("../config/db");

const generateIndex = (value) => {
  if (value >= 80) {
    return "A";
  } else if (value >= 70 && value < 80) {
    return "B";
  } else if (value >= 60 && value < 70) {
    return "C";
  } else if (value >= 50 && value < 60) {
    return "D";
  } else if (value < 50) {
    return "E";
  }
};

const store = (req, res) => {
  const { nama, mataKuliah, nilai } = req.body;

  if (nilai <= 0 || nilai > 100) {
    return res.status(500).json({
      status: false,
      message: "Nilai tidak valid",
    });
  }

  const query = `INSERT INTO nilai_mahasiswa (nama, mata_kuliah, nilai, index_nilai)
                VALUES ('${nama}', '${mataKuliah}', '${nilai}', '${generateIndex(
    nilai
  )}')`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(201).json({
      status: true,
      message: "Success insert nilai",
    });
  });
};

const getMasiswaByGrade = (req, res) => {
  const { nilai } = req.query;
  let query = "";
  let params = [];

  if (nilai) {
    query = "SELECT * FROM nilai_mahasiswa WHERE nilai >= ?";
    params = [nilai];
  } else {
    query = "SELECT * FROM nilai_mahasiswa";
  }

  conn.query(query, params, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success get mahasiswa",
      mahasiswa: data,
    });
  });
};

const show = (req, res) => {
  const { id } = req.params;

  const query = `SELECT * FROM nilai_mahasiswa WHERE id=${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success get mahasiswa",
      mahasiswa: data,
    });
  });
};

const update = (req, res) => {
  const { nama, mataKuliah, nilai } = req.body;
  const { id } = req.params;

  if (nilai <= 0 || nilai > 100) {
    return res.status(500).json({
      status: false,
      message: "Nilai tidak valid",
    });
  }

  const query = `UPDATE nilai_mahasiswa SET nama='${nama}', mata_kuliah='${mataKuliah}', nilai=${nilai}, index_nilai='${generateIndex(
    nilai
  )}' WHERE id=${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success update nilai mahasiswa",
    });
  });
};

const destory = (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM nilai_mahasiswa WHERE id=${id}`;

  conn.query(query, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return res.status(200).json({
      status: true,
      message: "Success delete",
    });
  });
};

module.exports = { store, getMasiswaByGrade, show, update, destory };
