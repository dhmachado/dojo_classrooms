class CapacityOfAtLeast {

    constructor(persons) {
        this.persons = persons;
    }

    returnListOfMatchingClassrooms(classrooms) {
        return classrooms
            .map((classroom) => { 
                return classroom.returnIfHasAtLeastAsManyPersons(this.persons); 
            });
    }

}

export default CapacityOfAtLeast;