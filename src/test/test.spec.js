import { expect } from 'chai';

import Classroom from '../main/classrooms/Classroom';
import NoClassroom from '../main/classrooms/NoClassroom';

import Persons from '../main/classrooms/specs/Persons';
import SquareMeters from '../main/classrooms/specs/SquareMeters';

import And from '../main/conditions/And';
import CapacityOfAtLeast from '../main/conditions/CapacityOfAtLeast';

import Label from '../main/Label';
import ClassroomsPool from '../main/ClassroomsPool';
import RequestForClassroom from '../main/RequestForClassroom';

describe('Search for classroom', () => {
  
  var labA;
  var labB;
  var labC;
  var pool;

  beforeEach(function() {
    labA = new Classroom(
      new Label('Lab A'), 
      new Persons(5),
      new SquareMeters(5)
    );
    labB = new Classroom(
      new Label('Lab B'), 
      new Persons(15),
      new SquareMeters(15)
    );
    labC = new Classroom(
      new Label("Lab C"),
      new Persons(15),
      new SquareMeters(50)
    );

    pool = new ClassroomsPool(labA, labB, labC);
  });

  afterEach(function() {
    labA = null;
    labB = null;
    labC = null;

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

});