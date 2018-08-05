import NoClassroom from './classrooms/NoClassroom';

class ClassroomsPool {

    constructor(... classrooms) {
        this.classrooms = [...classrooms];
    }

    searchClassroomFor(requestForClassroom) {
        return requestForClassroom.searchMatchingFrom(this.classrooms);
    }

}

export default ClassroomsPool;