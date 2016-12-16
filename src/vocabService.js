var Vocab = require('./vocab');

var vocabService = function () {
    function Sanitize(string) {
        return string
            .replace('\r', '')
            .replace('\t', '')
            .replace('\n', '')
            .trim();
    }

    var IsNullOrWhiteSpace = function (string) {
        return !/\S/.test(string);
    };

    var IsNewExplanation = function (string) {
        return string.startsWith('\t') || string.startsWith(' ');
    };

    var ExtractExplanations = function (lines, i) {
        var explanations = [];
        while (IsNewExplanation(lines[i])) {
            explanations.push(Sanitize(lines[i]));
            i++;
        }

        return explanations;
    };

    var IsNewWord = function (word) {
        var regex = new RegExp('^[a-z|\s]', 'gi');
        return word.match(regex);
    };

    function FormatVocab(vocabs) {
        var formattedVocabs = vocabs.map(function (vocab) {
            return vocab.word + '\t' + vocab.explanations.join('||');
        });

        return formattedVocabs;
    }

    function ExtractVocab(lines) {
        var word = '';
        var explanations = [];
        var vocabs = [];

        var length = lines.length;
        for (var i = 0; i < length; i++) {
            if (!IsNullOrWhiteSpace(lines[i])) {
                if (IsNewWord(lines[i])) {
                    word = Sanitize(lines[i]);
                    explanations = ExtractExplanations(lines, ++i);
                    vocabs.push(new Vocab(word, explanations));
                }
            }
        }

        return FormatVocab(vocabs);
    }

    return {
        ExtractVocab: ExtractVocab
    };
};

module.exports = vocabService;





