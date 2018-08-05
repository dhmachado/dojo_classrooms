# Dojo Classrooms

[![BCH compliance](https://bettercodehub.com/edge/badge/dhmachado/dojo_classrooms?branch=master)](https://bettercodehub.com/)
[![CircleCI](https://circleci.com/gh/dhmachado/dojo_classrooms/tree/master.svg?style=svg)](https://circleci.com/gh/dhmachado/dojo_classrooms/tree/master)

### What are dojos ?
- A Coding Dojo is a meeting where a bunch of coders get together to work on a programming challenge. They are there have fun and to engage in [DeliberatePractice](https://codingdojo.org/DeliberatePractice/) in order to improve their skills.

See more information [here](https://codingdojo.org/WhatIsCodingDojo/)

### What can you tell me about this dojo ?
In this Dojo we are going to make an app to book classrooms of a university, this app also has a series of filters that can be used to specify the requirements that we are going to need in order to accomodate all the students for the class.

The use cases are the following:
- Search for classroom for at least 30 persons should return that there is not such classroom
- Search for classroom for at least 5 persons should return Lab B
- Search for classroom with at least 4 square meters should return lab A
- Search for classroom with at least 6 square meters should return lab B
- Search for classroom for at least 10 persons and 30 square meters should return lab C
- Search for classroom for at least 10 persons and 30 square meters and has computers should return lab D
- Search for classroom for at least 20 persons and 20 square meters and has computers or a blackboard should return lab B
- Search for classroom for at least 10 persons and less than 30 square meters and has computers or a blackboard should return lab B

### What interesting things will I see in this dojo ?
- First of all this app was coded using [TDD](https://en.wikipedia.org/wiki/Test-driven_development) which means that we created first the tests and then implement the logic needed for the tests to pass. This ensure us that every piece of functionality is 100% tested.

- We also used a [Double Dispatch](https://en.wikipedia.org/wiki/Double_dispatch).

