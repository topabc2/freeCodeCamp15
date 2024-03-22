const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    translate(ab, ba, string) {
        let ID = false;

        if(ab === true) {
            string = string.split(' ');

            for(let i = 0; i < string.length; i++) {
                for(let item in americanToBritishTitles) {
                    if(string[i].toLowerCase() === item) {
                        ID = true;
                        string[i] = americanToBritishTitles[item];
                        string[i] = string[i].split('');
                        string[i][0] = string[i][0].toUpperCase();
                        string[i] = string[i].join('');
                        string[i] = `<span class="highlight">${string[i]}</span>`;
                    }
                }
            }

            string = string.join(' ');
            string = string.split(' ');

            for(let i = 0; i < string.length; i++) {
                for(let item in americanOnly) {
                    if(string[i].toLowerCase() === item) {
                        ID = true;
                        let result = americanOnly[item];
                        if(i === 0) {
                            result = result.split('');
                            result[0] = result[0].toUpperCase();
                            result = result.join('');
                        }
                        string[i] = `<span class="highlight">${result}</span>`;
                    }
                }
    
                for(let item in americanToBritishSpelling) {
                    if(string[i].toLowerCase() === item) {
                        ID = true;
                        let result = americanToBritishSpelling[item];
                        if(i === 0) {
                            result = result.split('');
                            result[0] = result[0].toUpperCase();
                            result = result.join('');
                        }
                        string[i] = `<span class="highlight">${result}</span>`;
                    }
                }
    
                for(let item in britishOnly) {
                    if(string[i].toLowerCase() === britishOnly[item]) {
                        ID = true;
                        let result = item;
                        if(i === 0) {
                            result = result.split('');
                            result[0] = result[0].toUpperCase();
                            result = result.join('');
                        }
                        string[i] = `<span class="highlight">${result}</span>`;
                    }
                }
            }

            string = string.join(' ');

            for(let item in americanOnly) {
                if(string.toLowerCase().includes(item)) {
                    ID = true;
                    string = string.toLowerCase().replace(item, `<span class="highlight">${americanOnly[item]}</span>`);
                }
            }

            for(let item in americanToBritishSpelling) {
                if(string.toLowerCase().includes(item)) {
                    ID = true;
                    string = string.toLowerCase().replace(item, `<span class="highlight">${americanToBritishSpelling[item]}</span>`);
                }
            }

            for(let item in britishOnly) {
                if(string.toLowerCase().includes(britishOnly[item])) {
                    ID = true;
                    string = string.toLowerCase().replace(britishOnly[item], `<span class="highlight">${item}</span>`);
                }
            }

            string = string.split(' ');

            for(let i = 0; i < string.length; i++) {
                if(string[i].includes(":") && (string[i].includes("0") || string[i].includes("1") || string[i].includes("2") || string[i].includes("3") || string[i].includes("4") || string[i].includes("5") || string[i].includes("6") || string[i].includes("7") || string[i].includes("8") || string[i].includes("9"))) {
                    ID = true;
                    string[i] = string[i].replace(":", `.`);
                    string[i] = `<span class="highlight">${string[i]}</span>`;
                }
            }

            string = string.join(' ');
        } else {
            string = string.split(' ');

            for(let i = 0; i < string.length; i++) {
                for(let item in americanToBritishTitles) {
                    if(string[i].toLowerCase() === americanToBritishTitles[item]) {
                        ID = true;
                        string[i] = item;
                        string[i] = string[i].split('');
                        string[i][0] = string[i][0].toUpperCase();
                        string[i] = string[i].join('');
                        string[i] = `<span class="highlight">${string[i]}</span>`;
                    }
                }
            }

            string = string.join(' ');
            string = string.split(' ');

            for(let i = 0; i < string.length; i++) {
                for(let item in americanOnly) {
                    if(string[i].toLowerCase() === americanOnly[item]) {
                        ID = true;
                        let result = item;
                        if(i === 0) {
                            result = result.split('');
                            result[0] = result[0].toUpperCase();
                            result = result.join('');
                        }
                        string[i] = `<span class="highlight">${result}</span>`;
                    }
                }
    
                for(let item in americanToBritishSpelling) {
                    if(string[i].toLowerCase() === americanToBritishSpelling[item]) {
                        ID = true;
                        let result = item;
                        if(i === 0) {
                            result = result.split('');
                            result[0] = result[0].toUpperCase();
                            result = result.join('');
                        }
                        string[i] = `<span class="highlight">${result}</span>`;
                    }
                }
    
                for(let item in britishOnly) {
                    if(string[i].toLowerCase() === item) {
                        ID = true;
                        let result = britishOnly[item];
                        if(i === 0) {
                            result = result.split('');
                            result[0] = result[0].toUpperCase();
                            result = result.join('');
                        }
                        string[i] = `<span class="highlight">${result}</span>`;
                    }
                }
            }

            string = string.join(' ');

            for(let item in americanOnly) {
                if(string.toLowerCase().includes(americanOnly[item])) {
                    ID = true;
                    string = string.toLowerCase().replace(americanOnly[item], `<span class="highlight">${item}</span>`);
                }
            }

            for(let item in americanToBritishSpelling) {
                if(string.toLowerCase().includes(americanToBritishSpelling[item])) {
                    ID = true;
                    string = string.toLowerCase().replace(americanToBritishSpelling[item], `<span class="highlight">${item}</span>`);
                }
            }

            for(let item in britishOnly) {
                if(string.toLowerCase().includes(item)) {
                    ID = true;
                    string = string.toLowerCase().replace(item, `<span class="highlight">${britishOnly[item]}</span>`);
                }
            }

            string = string.split(' ');

            for(let i = 0; i < string.length; i++) {
                if(string[i].includes(".") && (string[i].includes("0") || string[i].includes("1") || string[i].includes("2") || string[i].includes("3") || string[i].includes("4") || string[i].includes("5") || string[i].includes("6") || string[i].includes("7") || string[i].includes("8") || string[i].includes("9"))) {
                    ID = true;
                    string[i] = string[i].replace(".", `:`);
                    string[i] = `<span class="highlight">${string[i]}</span>`;
                }
            }

            string = string.join(' ');
        }

        string = string.split('');
        string[0] = string[0].toUpperCase();
        string = string.join('');

        if(ID === false) {
            return "Everything looks good to me!";
        }

        return string
    }
}

module.exports = Translator;