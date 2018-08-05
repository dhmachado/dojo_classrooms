import NoClassroom from './classrooms/NoClassroom';

class ClassroomsPool {

    searchClassroomFor() {
        return new NoClassroom();
    }

}

export default ClassroomsPool;