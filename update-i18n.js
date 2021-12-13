const fs = require("fs");
// google spreadsheet
(async () => {
  const localesPath = "./src/locales";
  const languages = ["ru", "uz"];
  try {
    console.log("Starting script...");
    if (!fs.existsSync(localesPath)) fs.mkdirSync(localesPath);

    languages.forEach((lang) => {
      if (!fs.existsSync(`${localesPath}/${lang}`))
        fs.mkdirSync(`${localesPath}/${lang}`);
    });
  } catch (error) {
    console.log("error", error);
  }
})();
