import {expect} from 'chai';
import {add} from './hello';

describe('add', () => {
    it('adds two numbers', () => {
        const acutal = add(2, 6);
        expect(actual).to.equal(8);
    });
});