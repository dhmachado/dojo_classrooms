const intersection = function(acc, cur) { 
    return acc.filter((el) => { 
        return cur.indexOf(el) > -1; 
    }); 
};

class And {

    constructor(...matchers) {
        this.matchers = [...matchers];
    }

    returnListOfMatchingClassrooms(classrooms) {
        return this.matchers
            .map((matcher) => { return matcher.returnListOfMatchingClassrooms(classrooms) })
            .reduce((acc, cur) => {return intersection(acc, cur)});
    }

}

export default And;