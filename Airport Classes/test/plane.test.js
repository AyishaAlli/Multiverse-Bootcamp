const Passenger = require('../src/Passenger') 
const CrewMember = require('../src/CrewMember')
const Plane = require('../src/plane');
const { expect } = require('@jest/globals');

describe('defines a suite of tests for the Passenger class', function () { 
    test('passengers get added to plane', function (){

    //given
     const lisa = new Passenger ('Lisa', '42398', '44B')
     const newPlane = new Plane('BA88')
     newPlane.board(lisa)
     
    //then
    expect(newPlane.people).toContain(lisa)
    })
});