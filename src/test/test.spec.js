import { expect } from 'chai';

import Classroom from '../main/classrooms/Classroom';
import NoClassroom from '../main/classrooms/NoClassroom';

import Persons from '../main/classrooms/specs/Persons';
import Computers from '../main/classrooms/specs/Computers';
import Blackboard from '../main/classrooms/specs/Blackboard';
import NoComputers from '../main/classrooms/specs/NoComputers';
import SquareMeters from '../main/classrooms/specs/SquareMeters';

import Or from '../main/conditions/Or';
import And from '../main/conditions/And';
import CountsWith from '../main/conditions/CountsWith';
import CapacityOfAtLeast from '../main/conditions/CapacityOfAtLeast';
import CapacityOfLessThan from '../main/conditions/CapacityOfLessThan';

import Label from '../main/Label';
import ClassroomsPool from '../main/ClassroomsPool';
import RequestForClassroom from '../main/RequestForClassroom';

describe('Search for classroom', () => {
  
  var labA;
  var labB;
  var labC;
  var labD;

  var pool;

  beforeEach(function() {
    labA = new Classroom(
      new Label('Lab A'), 
      new Persons(5),
      new SquareMeters(5)
    );
    labB = new Classroom(
      new Label('Lab B'), 
      new Persons(20),
      new SquareMeters(20),
      new NoComputers(),
      new Blackboard()
    );
    labC = new Classroom(
      new Label("Lab C"),
      new Persons(15),
      new SquareMeters(50)
    );
    labD = new Classroom(
      new Label("Lab D"),
      new Persons(15),
      new SquareMeters(50),
      new Computers()
    );

    pool = new ClassroomsPool(labA, labB, labC, labD);
  });

  afterEach(function() {
    labA = null;
    labB = null;
    labC = null;
    labD = null;

    pool = null;
  });

  it('for at least 30 persons should return that there is not such classroom', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(new CapacityOfAtLeast(new Persons(30)))
    );

    expect(classroom.toJSON()).to.be.equal(new NoClassroom().toJSON());
  });

  it('for at least 5 persons should return Lab B', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(new CapacityOfAtLeast(new Persons(10)))
    );

    expect(classroom.toJSON()).to.be.equal(labB.toJSON());
  });

  it('with at least 4 square meters should return lab A', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(new CapacityOfAtLeast(new SquareMeters(4)))
    );

    expect(classroom.toJSON()).to.be.equal(labA.toJSON());
  });

  it('with at least 6 square meters should return lab B', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(new CapacityOfAtLeast(new SquareMeters(6)))
    );

    expect(classroom.toJSON()).to.be.equal(labB.toJSON());
  });

  it('for at least 10 persons and 30 square meters should return lab C', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(
        new And(
          new CapacityOfAtLeast(new Persons(10)),
          new CapacityOfAtLeast(new SquareMeters(30))
        )
      )
    );

    expect(classroom.toJSON()).to.be.equal(labC.toJSON());
  });

  it('for at least 10 persons and 30 square meters and has computers should return lab D', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(
        new And(
          new CapacityOfAtLeast(new Persons(10)),
          new CapacityOfAtLeast(new SquareMeters(30)),
          new CountsWith(new Computers())
        )
      )
    );

    expect(classroom.toJSON()).to.be.equal(labD.toJSON());
  });

  it('for at least 20 persons and 20 square meters and has computers or a blackboard should return lab B', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(
        new And(
          new CapacityOfAtLeast(new Persons(20)),
          new Or(
            new CountsWith(new Computers()),
            new CountsWith(new Blackboard())
          ),
          new CapacityOfAtLeast(new SquareMeters(20))
        )
      )
    );

    expect(classroom.toJSON()).to.be.equal(labB.toJSON());
  });

  it('for at least 10 persons and less than 30 square meters and has computers or a blackboard should return lab B', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(
        new And(
          new CapacityOfAtLeast(new Persons(10)),
          new Or(
            new CountsWith(new Computers()),
            new CountsWith(new Blackboard())
          ),
          new CapacityOfLessThan(new SquareMeters(30))
        )
      )
    );

    expect(classroom.toJSON()).to.be.equal(labB.toJSON());
  });

});