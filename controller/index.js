const fs = require("fs");

const German = JSON.parse(fs.readFileSync("data/German.json").toString());
const French = JSON.parse(fs.readFileSync("data/French.json").toString());
const Russian = JSON.parse(fs.readFileSync("data/Russian1.json").toString());
const Chinese = JSON.parse(fs.readFileSync("data/Chinese.json").toString());

const controller = {
  getLessons: (req, res) => {
    const lang = req.params.lang;
    const titles = [];

    if (lang === "German") {
      German.forEach((set) => {
        titles.push(set.title);
      });
    }

    if (lang === "French") {
      French.forEach((set) => {
        titles.push(set.title);
      });
    }

    if (lang === "Russian") {
      Russian.forEach((set) => {
        titles.push(set.title);
      });
    }

    if (lang === "Chinese") {
      Chinese.forEach((set) => {
        titles.push(set.title);
      });
    }

    res.render("lessons", { titles, lang });
  },
  getLesson: (req, res) => {
    let lang = req.params.lang;
    const param = req.params.index;
    let code = "";
    const Thelesson = {};

    if (lang === "German") {
      code = "DE";
      Object.assign(Thelesson, German[JSON.parse(param)]);
    }

    if (lang === "French") {
      code = "FR";
      Object.assign(Thelesson, French[JSON.parse(param)]);
    }

    if (lang === "Russian") {
      code = "RU";
      lang = "Russian1";
      Object.assign(Thelesson, Russian[JSON.parse(param)]);
    }

    if (lang === "Chinese") {
      code = "CN";
      Object.assign(Thelesson, Chinese[JSON.parse(param)]);
    }
    res.render("lesson", { lesson: Thelesson, param, lang, code });
  },
};

module.exports = controller;
