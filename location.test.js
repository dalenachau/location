const updateRemoteStudents = require('./location')

describe('updateRemoteStudents', () => {
    test('returns an empty array when passed an empty array', () => {
        expect(updateRemoteStudents([])).toEqual([]);
    });
    test('returns array when passed an array with one object and does not need updating', () => {
        expect(updateRemoteStudents([{ name: 'Hypatia', age: 31, location: 'leeds' }]))
        .toEqual([{ name: 'Hypatia', age: 31, location: 'leeds' }]);
    });
    test('returns updated array when passed an array with one object and does not have a location', () => {
        expect(updateRemoteStudents([{ name: 'Ramanujan', age: 22 }]))
        .toEqual([{ name: 'Ramanujan', age: 22 , location: 'remote'}]);
    });
    test('returns updated array when passed an array with mutiple objects, 1 location needs updating', () => {
        expect(updateRemoteStudents([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }]))
        .toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }]);
    });
    test('returns updated array when passed an array with mutiple objects, which does not needs updating', () => {
        expect(updateRemoteStudents([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote'},
            { name: 'Tao', age: 47, location: 'manchester' }]))
        .toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' }]);
    });
    test('returns updated array when passed an array with mutiple objects, multiple locations needs updating', () => {
        expect(updateRemoteStudents([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' },
            { name: 'Dee', age: 23 }]))
        .toEqual([
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22, location: 'remote' },
            { name: 'Tao', age: 47, location: 'manchester' },
            { name: 'Dee', age: 23, location: 'remote' }]);
    });
    test('returns a new array', () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }];
        const returnVal = updateRemoteStudents(input);
        expect(input).not.toBe(returnVal);
    });
    test('does not mutate original object', () => {
        const input = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }];
        const inputCopy = [
            { name: 'Hypatia', age: 31, location: 'leeds' },
            { name: 'Ramanujan', age: 22 },
            { name: 'Tao', age: 47, location: 'manchester' }];
        updateRemoteStudents(input)
        expect(input).toEqual(inputCopy);
    });
});