class Persons {

    constructor(quantityOfPersons) {
        this.quantityOfPersons = quantityOfPersons;
    }

    gte(personsToMatch, classroomIfGTE, classroomIfNotGTE) {
        return this.quantityOfPersons >= personsToMatch.quantityOfPersons ? classroomIfGTE : classroomIfNotGTE;
    }

}

export default Persons;