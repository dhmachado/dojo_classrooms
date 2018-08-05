class Or {

    constructor(...matchers) {
        this.matchers = [...matchers];
    }

    returnListOfMatchingClassrooms(classrooms) {
        return this.matchers
            .map((matcher) => { return matcher.returnListOfMatchingClassrooms(classrooms) })
            .reduce((acc, cur) => { return acc.concat(cur); }, []);
    }

}

export default Or;