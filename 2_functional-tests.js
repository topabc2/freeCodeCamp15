const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
let translator = new Translator();

suite('Functional Tests', function() {
    test("Translation with text and locale fields", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "american-to-british"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });

    test("Translation with text and invalid locale field", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit.",
                locale: "test"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });

    test("Translation with missing text field", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                locale: "american-to-british"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });

    test("Translation with missing locale field", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Mangoes are my favorite fruit."
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });

    test("Translation with empty text", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "",
                locale: "american-to-british"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });

    test("Translation with text that needs no translation", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Mangoes are my favourite fruit.",
                locale: "american-to-british"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                done();
            });
    });
});
