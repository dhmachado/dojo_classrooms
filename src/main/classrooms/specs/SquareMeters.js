class SquareMeters {

    constructor(quantityOfSquareMeters) {
        this.quantityOfSquareMeters = quantityOfSquareMeters;
    }

    returnIfHasAtLeastAsMany(classroom) {
        return classroom.returnIfHasAtLeastAsManySquareMeters(this);
    }

    returnIfHasLessThanAsMany(classroom) {
        return classroom.returnIfHasLessThanAsManySquareMeters(this);
    }

    gte(squareMetersToMatch, classroomIfGTE, classroomIfNotGTE) {
        return this.quantityOfSquareMeters >= squareMetersToMatch.quantityOfSquareMeters ? classroomIfGTE : classroomIfNotGTE;
    }

    lt(squareMetersToMatch, classroomIfGTE, classroomIfNotGTE) {
        return this.quantityOfSquareMeters < squareMetersToMatch.quantityOfSquareMeters ? classroomIfGTE : classroomIfNotGTE;
    }

}

export default SquareMeters;