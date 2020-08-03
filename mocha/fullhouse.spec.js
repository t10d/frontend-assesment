import chai from 'chai'
import { formDuples, formTriples, formFullhouses } from '../src/utils/functions/Fullhouse'
import {
  listFullhouse1,
  listFullhouse2,
  expectedDuples1,
  expectedDuples2,
  expectedTriples,
  expectedFullhouse
} from './vars'

describe('FULLHOUSE FUNCTIONS', () => {
  it('1. Form Duples', (done) => {
    const result1 = formDuples(listFullhouse1)
    chai.expect(result1).to.be.eql(expectedDuples1)
    const result2 = formDuples(listFullhouse2)
    chai.expect(result2).to.be.eql(expectedDuples2)
    done()
  })
  it('2. Form Triples', (done) => {
    const result1 = formTriples(listFullhouse1, expectedDuples1)
    chai.expect(result1).to.be.eql([])
    const result2 = formTriples(listFullhouse2, expectedDuples2)
    chai.expect(result2).to.be.eql(expectedTriples)
    done()
  })
  it('3. Form Fullhouse', (done) => {
    const result1 = formFullhouses(expectedDuples1, [])
    chai.expect(result1).to.be.eql([])
    const result2 = formFullhouses(expectedDuples2, expectedTriples)
    chai.expect(result2).to.be.eql(expectedFullhouse)
    done()
  })
}).timeout(5000)
