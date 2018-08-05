class CapacityOfLessThan {

    constructor(condition) {
        this.condition = condition;
    }

    returnListOfMatchingClassrooms(classrooms) {
        return classrooms
            .map((classroom) => { 
                return this.condition.returnIfHasLessThanAsMany(classroom);
            });
    }

}

export default CapacityOfLessThan;