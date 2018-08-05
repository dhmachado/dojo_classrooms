import NoClassroom from './NoClassroom';
import NoComputers from './specs/NoComputers';

class Classroom {

    constructor(label, personsCapacity, squareMetersCapacity, computers = new NoComputers()) {
        this.label = label;
        this.personsCapacity = personsCapacity;
        this.squareMetersCapacity = squareMetersCapacity;
        this.computers = computers;
    }

    returnIfHasAtLeastAsManyPersons(personsToMatch) {
        return this.personsCapacity.gte(personsToMatch, this, new NoClassroom());
    }

    returnIfHasAtLeastAsManySquareMeters(squareMetersToMatch) {
        return this.squareMetersCapacity.gte(squareMetersToMatch, this, new NoClassroom());
    }

    returnIfCountsWithComputers() {
        return this.computers.has(this, new NoClassroom());
    }

    challenge(challenger) {
        return this;
    }

    toJSON() {
        return JSON.stringify(this.label);
    }

}

export default Classroom;