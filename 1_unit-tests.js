const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', function() {
    test("translate 'Mangoes are my favorite fruit.' to British English", function() {
        assert.equal(translator.translate(true, false, "Mangoes are my favorite fruit."), "Mangoes are my <span class=\"highlight\">favourite</span> fruit.");
    });

    test("translate 'I ate yogurt for breakfast.' to British English", function() {
        assert.equal(translator.translate(true, false, "I ate yogurt for breakfast."), "I ate <span class=\"highlight\">yoghurt</span> for <span class=\"highlight\">brekkie</span>.");
    });

    test("translate 'We had a party at my friend's condo.' to British English", function() {
        assert.equal(translator.translate(true, false, "We had a party at my friend's condo."), "We had a party at my friend's <span class=\"highlight\">flat</span>.");
    });

    test("translate 'Can you toss this in the trashcan for me?' to British English", function() {
        assert.equal(translator.translate(true, false, "Can you toss this in the trashcan for me?"), "Can you toss this in the <span class=\"highlight\">bin</span> for me?");
    });

    test("translate 'The parking lot was full.' to British English", function() {
        assert.equal(translator.translate(true, false, "The parking lot was full."), "The <span class=\"highlight\">car park</span> was full.");
    });

    test("translate 'Like a high tech Rube Goldberg machine.' to British English", function() {
        assert.equal(translator.translate(true, false, "Like a high tech Rube Goldberg machine."), "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.");
    });

    test("translate 'To play hooky means to skip class or work.' to British English", function() {
        assert.equal(translator.translate(true, false, "To play hooky means to skip class or work."), "To <span class=\"highlight\">bunk off</span> means to skip class or work.");
    });

    test("translate 'No Mr. Bond, I expect you to die.", function() {
        assert.equal(translator.translate(true, false, "No Mr. Bond, I expect you to die."), "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.");
    });

    test("translate 'Dr. Grosh will see you now.' to British English", function() {
        assert.equal(translator.translate(true, false, "Dr. Grosh will see you now."), "<span class=\"highlight\">Dr</span> Grosh will see you now.");
    });

    test("translate 'Lunch is at 12:15 today.' to British English", function() {
        assert.equal(translator.translate(true, false, "Lunch is at 12:15 today."), "Lunch is at <span class=\"highlight\">12.15</span> today.");
    });

    test("translate 'We watched the footie match for a while.' to American English", function() {
        assert.equal(translator.translate(false, true, "We watched the footie match for a while."), "We watched the <span class=\"highlight\">soccer</span> match for a while.");
    });

    test("translate 'Paracetamol takes up to an hour to work.' to American English", function() {
        assert.equal(translator.translate(false, true, "Paracetamol takes up to an hour to work."), '<span class="highlight">ace<span class="highlight">thank you</span>minophen</span> takes up to an hour to work.');
    });

    test("translate 'First, caramelise the onions.' to American English", function() {
        assert.equal(translator.translate(false, true, "First, caramelise the onions."), "First, <span class=\"highlight\">caramelize</span> the onions.");
    });

    test("translate 'I spent the bank holiday at the funfair.' to American English", function() {
        assert.equal(translator.translate(false, true, "I spent the bank holiday at the funfair."), 'I spent the <span class="highlight"><span class="highlight">bar</span>lic holiday</span> at the <span class="highlight">carnival</span>.');
    });

    test("translate 'I had a bicky then went to the chippy.' to American English", function() {
        assert.equal(translator.translate(false, true, "I had a bicky then went to the chippy."), 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-<span class="highlight">fish-and-chip shop</span></span>.');
    });

    test("translate 'I've just got bits and bobs in my bum bag.' to American English", function() {
        assert.equal(translator.translate(false, true, "I've just got bits and bobs in my bum bag."), "I've just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.");
    });

    test("translate 'The car boot sale at Boxted Airfield was called off.' to American English", function() {
        assert.equal(translator.translate(false, true, "The car boot sale at Boxted Airfield was called off."), "The <span class=\"highlight\">swap meet</span> at boxted airfield was called off.");
    });

    test("translate 'Have you met Mrs Kalyani?' to American English", function() {
        assert.equal(translator.translate(false, true, "Have you met Mrs Kalyani?"), "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?");
    });

    test("translate 'Prof Joyner of King's College, London.' to American English", function() {
        assert.equal(translator.translate(false, true, "Prof Joyner of King's College, London."), "<span class=\"highlight\">Prof.</span> Joyner of King's College, London.");
    });

    test("translate 'Tea time is usually around 4 or 4.30.' to American English", function() {
        assert.equal(translator.translate(false, true, "Tea time is usually around 4 or 4.30."), "Tea time is usually around 4 or <span class=\"highlight\">4:30.</span>");
    });

    test("Highlight translation in Mangoes are my favorite fruit.", function() {
        assert.include(translator.translate(true, false, "Mangoes are my favorite fruit."), "highlight");
    });

    test("Highlight translation in I ate yogurt for breakfast.", function() {
        assert.include(translator.translate(true, false, "I ate yogurt for breakfast."), "highlight");
    });

    test("Highlight translation in We watched the footie match for a while.", function() {
        assert.include(translator.translate(false, true, "We watched the footie match for a while."), "highlight");
    });

    test("Highlight translation in Paracetamol takes up to an hour to work.", function() {
        assert.include(translator.translate(false, true, "Paracetamol takes up to an hour to work."), "highlight");
    });
});
