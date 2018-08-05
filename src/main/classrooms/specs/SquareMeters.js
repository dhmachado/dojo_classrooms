class SquareMeters {

    constructor(quantityOfSquareMeters) {
        this.quantityOfSquareMeters = quantityOfSquareMeters;
    }

    returnIfHasAtLeastAsMany(classroom) {
        return classroom.returnIfHasAtLeastAsManySquareMeters(this);
    }

    gte(squareMetersToMatch, classroomIfGTE, classroomIfNotGTE) {
        return this.quantityOfSquareMeters >= squareMetersToMatch.quantityOfSquareMeters ? classroomIfGTE : classroomIfNotGTE;
    }

}

export default SquareMeters;