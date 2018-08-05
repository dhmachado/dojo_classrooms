import { expect } from 'chai';

import Classroom from '../main/classrooms/Classroom';
import NoClassroom from '../main/classrooms/NoClassroom';

import CapacityOfAtLeast from '../main/conditions/CapacityOfAtLeast';

import RequestForClassroom from '../main/RequestForClassroom';

import Label from '../main/Label';
import Persons from '../main/Persons';
import ClassroomsPool from '../main/ClassroomsPool';

describe('Search for classroom', () => {
  
  let labA;
  let labB;
  let pool;

  beforeEach(function() {
    labA = new Classroom(new Label('Lab A'), new Persons(5));
    labB = new Classroom(new Label('Lab B'), new Persons(15));

    pool = new ClassroomsPool(this.labA, this.labB);
  });

  afterEach(function() {
    labA = null;
    labB = null;
    pool = null;
  });

  it('for at least 30 persons should return that there is not such classroom', () => {
    let classroom = pool.searchClassroomFor(
      new RequestForClassroom(new CapacityOfAtLeast(new Persons(30)))
    );

    expect(classroom.toJSON()).to.be.deep.equal(new NoClassroom().toJSON());
  });

});