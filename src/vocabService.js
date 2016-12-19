var Vocab = require('./vocab');
var stringHelper = require('./stringHelper');

var vocabService = function () {
    function Sanitize(string) {
        return string
            .replace('\r', '')
            .replace('\t', '')
            .replace('\n', '')
            .trim();
    }

    var IsNewWord = function (word) {
        var regex = new RegExp('^[a-z]', 'gi');
        return regex.test(word);
    };

    var IsNewExplanation = function (string) {
        if (string)
            return string.startsWith('\t');

        return false;
    };

    var ExtractExplanations = function (lines, i) {
        var explanations = [];
        while (IsNewExplanation(lines[i])) {
            explanations.push(Sanitize(lines[i]));
            i++;
        }

        return explanations;
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
            if (!stringHelper.IsNullOrWhiteSpace(lines[i])) {
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
        Sanitize: Sanitize,
        IsNewWord: IsNewWord,
        IsNewExplanation: IsNewExplanation,
        ExtractExplanations: ExtractExplanations,
        ExtractVocab: ExtractVocab
    };
};

module.exports = vocabService;





