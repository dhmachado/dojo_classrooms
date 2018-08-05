class Persons {

    constructor(quantityOfPersons) {
        this.quantityOfPersons = quantityOfPersons;
    }

    returnIfHasAtLeastAsMany(classroom) {
        return classroom.returnIfHasAtLeastAsManyPersons(this);
    }

    gte(personsToMatch, classroomIfGTE, classroomIfNotGTE) {
        return this.quantityOfPersons >= personsToMatch.quantityOfPersons ? classroomIfGTE : classroomIfNotGTE;
    }

}

export default Persons;