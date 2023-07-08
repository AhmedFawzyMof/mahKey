const fs = require("fs");

const German = JSON.parse(fs.readFileSync("data/German.json").toString());
const French = JSON.parse(fs.readFileSync("data/French.json").toString());
const Russian = JSON.parse(fs.readFileSync("data/Russian.json").toString());

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

    res.render("lessons", { titles, lang });
  },
  getLesson: (req, res) => {
    const lang = req.params.lang;
    const param = req.params.index;
    let code = "";
    const Thelesson = {};

    if (lang === "German") {
      code = "DE";
      German.forEach((lesson, index) => {
        if (index === JSON.parse(param)) {
          return Object.assign(Thelesson, lesson);
        }
      });
    }
    if (lang === "French") {
      code = "FR";
      French.forEach((lesson, index) => {
        if (index === JSON.parse(param)) {
          return Object.assign(Thelesson, lesson);
        }
      });
    }
    if (lang === "Russian") {
      code = "RU";
      Russian.forEach((lesson, index) => {
        if (index === JSON.parse(param)) {
          return Object.assign(Thelesson, lesson);
        }
      });
    }
    res.render("lesson", { lesson: Thelesson, param, lang, code });
  },
};

module.exports = controller;
