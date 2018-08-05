class CountsWith {

    constructor(condition) {
        this.condition = condition;
    }

    returnListOfMatchingClassrooms(classrooms) {
        return classrooms
            .map((classroom) => { 
                return this.condition.returnIfCountsWith(classroom);
            });
    }

}

export default CountsWith;