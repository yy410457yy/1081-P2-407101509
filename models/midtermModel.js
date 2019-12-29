// models/userModel.js
const db = require("../utils/database");

module.exports = class Midterm {
  constructor(id, name, pic, href) {
    this.id = id;
    this.name = name;
    this.pic = pic;
    this.href = href;
  }
  static fetchMidterm() {
    return db.execute("SELECT * FROM midterm");
  }
  static fetchGuodong() {
    return db.execute('SELECT * FROM guodong');
  }
};
// Testing
//  const getMidterm = async (req, res, next) => {
//   try {
//     let midterm;
//     await Midterm.fetchMidterm().then(([rows]) => {
//       midterm = rows;
//     });
//     console.log("model-testing", midterm.length);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getMidterm();
