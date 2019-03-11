const { promiseAll } = require('../promiseAll');
const { soon } = require('../util/soon')

describe('promiseAll', () => {

  it('should resolve []', () => {
    expect(promiseAll([])).resolves.toEqual([]);
  })

  it('should resolve [1, 2, 3]', () => {
    expect(promiseAll([soon(1), soon(2), soon(3)])).resolves.toEqual([1, 2, 3]);
  });

  it('should reject with first rejected promise message', () => {
    expect(
      promiseAll([
        soon(1), 
        Promise.reject('first reject'), 
        soon(2), 
        Promise.reject('second reject'),
        soon(3),
        Promise.reject('third reject')
      ])
    ).rejects.toBe('first reject')
  });
  
});