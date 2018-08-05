import NoClassroom from './NoClassroom';

class Classroom {

    constructor(label, personsCapacity, squareMetersCapacity) {
        this.label = label;
        this.personsCapacity = personsCapacity;
        this.squareMetersCapacity = squareMetersCapacity;
    }

    returnIfHasAtLeastAsManyPersons(personsToMatch) {
        return this.personsCapacity.gte(personsToMatch, this, new NoClassroom());
    }

    returnIfHasAtLeastAsManySquareMeters(squareMetersToMatch) {
        return this.squareMetersCapacity.gte(squareMetersToMatch, this, new NoClassroom());
    }

    challenge(challenger) {
        return this;
    }

    toJSON() {
        return JSON.stringify(this.label);
    }

}

export default Classroom;