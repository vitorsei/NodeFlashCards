var vocabService = function () {
    var Sanitize = function (string) {
        return string
            .replace('\r', '')
            .replace('\t', '')
            .replace('\n', '')
            .trim();
    };

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
    }

    return {
        Sanitize: Sanitize,
        IsNullOrWhiteSpace: IsNullOrWhiteSpace,
        IsNewExplanation: IsNewExplanation,
        ExtractExplanations: ExtractExplanations,
        IsNewWord: IsNewWord
    };
};

module.exports = vocabService;





