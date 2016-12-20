class StringHelper {
    static IsNullOrWhiteSpace(string) {
        return !/\S/.test(string);
    }
}

export default StringHelper;