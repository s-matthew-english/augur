import { describe, it } from 'mocha';
import BigNumber from 'bignumber.js';
import { assert } from 'chai';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe(`modules/my-positions/selectors/winning-positions.js`, () => {
  proxyquire.noPreserveCache().noCallThru();
  const test = (t) => {
    it(t.description, () => {
      const AugurJS = { abi: { bignum: () => {} } };
      const SelectLoginAccountPositions = () => t.selectors.loginAccountPositions;
      const selector = proxyquire('../../../src/modules/my-positions/selectors/winning-positions.js', {
        '../../../services/augurjs': AugurJS,
        '../../my-positions/selectors/login-account-positions': SelectLoginAccountPositions
      });
      sinon.stub(AugurJS.abi, 'bignum', n => new BigNumber(n, 10));
      t.assertions(selector.selectClosedMarketsWithWinningShares(t.state));
    });
  };
  test({
    description: 'no positions',
    state: {
      outcomesData: {}
    },
    selectors: {
      loginAccountPositions: {
        markets: []
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, []);
    }
  });
  test({
    description: '1 position in closed market',
    state: {
      outcomesData: {
        '0xa1': {
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '2',
            isIndeterminate: false,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '1'
      }]);
    }
  });
  test({
    description: '1 position in closed indeterminate market',
    state: {
      outcomesData: {
        '0xa1': {
          1: {
            sharesPurchased: '2'
          },
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '2',
            isIndeterminate: true,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '3'
      }]);
    }
  });
  test({
    description: '1 position in closed unethical market',
    state: {
      outcomesData: {
        '0xa1': {
          1: {
            sharesPurchased: '2'
          },
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '0.5',
            isIndeterminate: false,
            isUnethical: true
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '3'
      }]);
    }
  });
  test({
    description: '1 position in closed indeterminate and unethical market',
    state: {
      outcomesData: {
        '0xa1': {
          1: {
            sharesPurchased: '2'
          },
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '0.5',
            isIndeterminate: true,
            isUnethical: true
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '3'
      }]);
    }
  });
  test({
    description: '1 position in closed scalar market',
    state: {
      outcomesData: {
        '0xa1': {
          1: {
            sharesPurchased: '2'
          },
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          type: 'scalar',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '1.23456',
            isIndeterminate: false,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '3'
      }]);
    }
  });
  test({
    description: '1 position in closed scalar indeterminate market',
    state: {
      outcomesData: {
        '0xa1': {
          1: {
            sharesPurchased: '2'
          },
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          type: 'scalar',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '1.23456',
            isIndeterminate: true,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '3'
      }]);
    }
  });
  test({
    description: '1 position in closed scalar unethical market',
    state: {
      outcomesData: {
        '0xa1': {
          1: {
            sharesPurchased: '2'
          },
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          type: 'scalar',
          isOpen: false,
          description: 'test market 1',
          consensus: {
            outcomeID: '1.23456',
            isIndeterminate: false,
            isUnethical: true
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa1',
        description: 'test market 1',
        shares: '3'
      }]);
    }
  });
  test({
    description: '1 position in open market',
    state: {
      outcomesData: {}
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: true,
          consensus: null
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, []);
    }
  });
  test({
    description: '1 position in open market, 1 position in closed market',
    state: {
      outcomesData: {
        '0xa1': {
          2: {
            sharesPurchased: '1'
          }
        },
        '0xa2': {
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: true,
          consensus: null
        }, {
          id: '0xa2',
          isOpen: false,
          description: 'test market 2',
          consensus: {
            outcomeID: '2',
            isIndeterminate: false,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa2',
        description: 'test market 2',
        shares: '1'
      }]);
    }
  });
  test({
    description: '1 position in open market, 2 positions in closed markets',
    state: {
      outcomesData: {
        '0xa1': {
          2: {
            sharesPurchased: '1'
          }
        },
        '0xa2': {
          2: {
            sharesPurchased: '1'
          }
        },
        '0xa3': {
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: true,
          consensus: null
        }, {
          id: '0xa2',
          isOpen: false,
          description: 'test market 2',
          consensus: {
            outcomeID: '2',
            isIndeterminate: false,
            isUnethical: false
          }
        }, {
          id: '0xa3',
          isOpen: false,
          description: 'test market 3',
          consensus: {
            outcomeID: '2',
            isIndeterminate: false,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa2',
        description: 'test market 2',
        shares: '1'
      }, {
        id: '0xa3',
        description: 'test market 3',
        shares: '1'
      }]);
    }
  });
  test({
    description: '2 position in open markets, 1 position in closed market',
    state: {
      outcomesData: {
        '0xa1': {
          2: {
            sharesPurchased: '1'
          }
        },
        '0xa2': {
          2: {
            sharesPurchased: '1'
          }
        },
        '0xa3': {
          2: {
            sharesPurchased: '1'
          }
        }
      }
    },
    selectors: {
      loginAccountPositions: {
        markets: [{
          id: '0xa1',
          isOpen: true,
          consensus: null
        }, {
          id: '0xa2',
          isOpen: true,
          consensus: null
        }, {
          id: '0xa3',
          isOpen: false,
          description: 'test market 3',
          consensus: {
            outcomeID: '2',
            isIndeterminate: false,
            isUnethical: false
          }
        }]
      }
    },
    assertions: (selection) => {
      assert.deepEqual(selection, [{
        id: '0xa3',
        description: 'test market 3',
        shares: '1'
      }]);
    }
  });
});
