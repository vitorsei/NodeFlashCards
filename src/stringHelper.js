var stringHelper = {};

stringHelper.IsNullOrWhiteSpace = function (string) {
    return !/\S/.test(string);
};

module.exports = stringHelper;