import NoClassroom from './classrooms/NoClassroom';

class RequestForClassroom {

    constructor(matcher) {
        this.matcher = matcher;
    }

    searchMatchingFrom(classrooms) {
        return this.matcher.returnListOfMatchingClassrooms(classrooms)
                .reduce((acc, classroom) => { return acc.challenge(classroom); },new NoClassroom())
    }

}

export default RequestForClassroom;