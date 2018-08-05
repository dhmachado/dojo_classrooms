import NoClassroom from './NoClassroom';

class Classroom {

    constructor(label, personsCapacity) {
        this.label = label;
        this.personsCapacity = personsCapacity;
    }

    returnIfHasAtLeastAsManyPersons(personsToMatch) {
        return this.personsCapacity.gte(personsToMatch, this, new NoClassroom());
    }

    toJSON() {
        return JSON.stringify(this.label);
    }

}

export default Classroom;