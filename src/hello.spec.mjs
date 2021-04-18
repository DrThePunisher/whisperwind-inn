import {expect} from 'chai';
import {add} from './hello.mjs';

describe('add', () => {
    it('adds two numbers', () => {
        const actual = add(2, 6);
        expect(actual).to.equal(8);
    });
});