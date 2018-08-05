class CapacityOfAtLeast {

    constructor(condition) {
        this.condition = condition;
    }

    returnListOfMatchingClassrooms(classrooms) {
        return classrooms
            .map((classroom) => { 
                return this.condition.returnIfHasAtLeastAsMany(classroom);
            });
    }

}

export default CapacityOfAtLeast;