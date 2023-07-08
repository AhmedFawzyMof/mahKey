const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");
const controller = require("./controller/index");
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

const russia_flag =
  "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/800px-Flag_of_Russia.svg.png?20120812153731";
const german_flag =
  "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png?20111003033442";

const china_flag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png";

const france_flag =
  "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png";

const italy_flag =
  "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png";

const korea_flag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/255px-Flag_of_South_Korea.svg.png";

const spain_flag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/200px-Bandera_de_Espa%C3%B1a.svg.png";

const turkey_flag =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/220px-Flag_of_Turkey.svg.png";

const Languages = [
  { code: "de", lang: "German", flag: german_flag },
  { code: "ru", lang: "Russian", flag: russia_flag },
  { code: "zh-cn", lang: "Chinese", flag: china_flag },
  { code: "fr", lang: "French", flag: france_flag },
  { code: "it", lang: "Italian", flag: italy_flag },
  { code: "ko", lang: "Korean", flag: korea_flag },
  { code: "es", lang: "Spanish", flag: spain_flag },
  { code: "tr", lang: "Turkish", flag: turkey_flag },
];

app.get("/", (req, res) => {
  res.render("index", { langs: Languages });
});
app.get("/:lang", controller.getLessons);
app.get("/:lang/:index", controller.getLesson);

app.listen(port);
