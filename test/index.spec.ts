import { expect } from 'chai';
import { describe, it } from 'mocha';
import Result, { ResultStatus } from '../src/index';

/* Tests */
describe('index.ts', (): void => {
    it('1. constructor', async (): Promise<void> => {
        const result: Result = new Result(ResultStatus.SUCCESS, {
            test: 1
        });

        expect(result).to.exist;

        expect(result.status).to.be.eq('success');

        expect(result.content).to.exist;
        expect(result.content).have.property('test').which.is.eq(1);

        expect(result.time).to.exist;
    });
});
