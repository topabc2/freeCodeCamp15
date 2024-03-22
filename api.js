'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let ab;
      let ba;
      let string = req.body.text;
      let locale = req.body.locale;

      if(locale !== "american-to-british" && locale !== "british-to-american") {
        res.json({ error: "Invalid value for locale field" });
      }

      if(string === '') {
        res.json({ error: "No text to translate" });
      }

      if(!string || !locale) {
        res.json({ error: "Required field(s) missing" });
      }

      if(locale === "american-to-british") {
        ab = true;
        ba = false;
      } else {
        ab = false;
        ba = true;
      }

      res.json({ text: string, translation: translator.translate(ab, ba, string) });
    });
};
