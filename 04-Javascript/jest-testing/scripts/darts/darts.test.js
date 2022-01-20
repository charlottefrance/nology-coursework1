import { TestWatcher } from "jest";
import { findScore } from "./darts.js";

describe('Darts', () => {
    test('missed the target', () => {
        expect(findScore(-9, 9)).toEqual(0);
    });

    //mini challenge
    //same as what they did:)
    test('hitting the outer circle', () => {
        expect(findScore(0, 10)).toEqual(1);
    });

    test('hitting the middle circle', () => {
        expect(findScore(5, 0)).toEqual(5);
    });

    test('hitting the inner circle', () => {
        expect(findScore(0, -1)).toEqual(10);
    });

    test('hitting the center', () => {
        expect(findScore(0,0)).toEqual(10);
    });

    test('invalid input', () => {
        expect(findScore('a', 0)).toEqual(null);
    });
});