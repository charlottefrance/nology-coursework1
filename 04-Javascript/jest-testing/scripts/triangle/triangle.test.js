import { Triangle } from './triangle.js';

describe('tests to determine whether or not a shape entered is a triangle', () => {

    describe('equilateral triangle', () => {
        test('all sides are equal', () => {
            const triangle = new Triangle(2, 2, 2);
            expect(triangle.isEquilateral).toBe(true);
        });

        test('no sides are equal', () => {
            const triangle = new Triangle(5, 4, 6);
            expect(triangle.isEquilateral).toBe(false);
        })
    });

// challenge 
// results were the same :D
    describe('isosceles triangle', () => {
        test('two sides are equal', () => {
            const triangle = new Triangle(5, 5, 2);
            expect(triangle.isIsosceles).toBe(true);
        });
    });

    describe('scalene triangle', () => {
        test('all sides are unequal', () => {
            const triangle = new Triangle(4, 6, 7);
            expect(triangle.isScalene).toBe(true);
        })

        //followed video for this bit
        test('should no sides be equal', () => {
            const triangle = new Triangle(0.5, 0.4, 0.6);
            expect(triangle.isScalene).toBe(true);
        })
    })
});