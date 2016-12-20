import {Vocab} from '../models/vocab';
import StringHelper from '../helpers/stringHelper';

class VocabService {
    static ExtractVocab(lines) {
        let word = '';
        let explanations = [];
        let vocabs = [];

        let length = lines.length;
        for (let i = 0; i < length; i++) {
            if (!StringHelper.IsNullOrWhiteSpace(lines[i])) {
                if (this.IsNewWord(lines[i])) {
                    word = this.Sanitize(lines[i]);
                    explanations = this.ExtractExplanations(lines, ++i);
                    vocabs.push(new Vocab(word, explanations));
                }
            }
        }

        return this.FormatVocab(vocabs);
    }

    /**
     * @return {boolean}
     */
    static IsNewWord(word) {
        let regex = new RegExp('^[a-z]', 'gi');
        return regex.test(word);
    };

    /**
     * @return {string}
     */
    static Sanitize(string) {
        return string
            .replace('\r', '')
            .replace('\t', '')
            .replace('\n', '')
            .trim();
    }

    static ExtractExplanations(lines, i) {
        let explanations = [];
        while (this.IsNewExplanation(lines[i])) {
            explanations.push(this.Sanitize(lines[i]));
            i++;
        }

        return explanations;
    };

    /**
     * @return {boolean}
     */
    static IsNewExplanation(string) {
        if (string) {
            //noinspection JSUnresolvedFunction
            return string.startsWith('\t');
        }

        return false;
    }

    static FormatVocab(vocabs) {
        return vocabs.map(function (vocab) {
            return `${vocab.word}\t${vocab.explanations.join('||')}`;
        });
    }
}

export default VocabService;





