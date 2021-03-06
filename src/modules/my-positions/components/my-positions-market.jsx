import React, { Component, PropTypes } from 'react';

import ComponentNav from 'modules/common/components/component-nav';
import ValueDenomination from 'modules/common/components/value-denomination';
import NullStateMessage from 'modules/common/components/null-state-message';

import MyPosition from 'modules/my-positions/components/my-position';
import MyPositionOverview from 'modules/my-positions/components/my-position-overview';
import MyOrders from 'modules/my-orders/container';

import { POSITIONS_POSITIONS, POSITIONS_ORDERS } from 'modules/my-positions/constants/internal-views';

import getValue from 'utils/get-value';

export default class MyPositionsMarket extends Component {
  static propTypes = {
    market: PropTypes.object.isRequired,
    isTradeCommitLocked: PropTypes.bool,
    closePositionStatus: PropTypes.object.isRequired,
    scalarShareDenomination: PropTypes.object.isRequired,
    orderCancellation: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.navItems = {
      [POSITIONS_POSITIONS]: {
        label: 'Positions'
      },
      [POSITIONS_ORDERS]: {
        label: 'Orders'
      }
    };

    this.state = {
      selectedNav: POSITIONS_POSITIONS
    };
  }

  render() {
    const p = this.props;
    const s = this.state;

    const myPositionOutcomes = getValue(p, 'market.myPositionOutcomes');
    const myPositionsSummary = getValue(p, 'market.myPositionsSummary');
    const marketLink = getValue(p, 'market.marketLink');

    const userOpenOrdersCount = getValue(p, 'market.userOpenOrdersSummary.openOrdersCount.value');
    const outcomes = getValue(p, 'market.outcomes');

    return (
      <article
        className="my-positions-market portfolio-market"
      >
        <MyPositionOverview
          description={p.market.description}
          marketLink={marketLink}
        />
        <ComponentNav
          navItems={this.navItems}
          selectedNav={s.selectedNav}
          updateSelectedNav={selectedNav => this.setState({ selectedNav })}
        />
        {s.selectedNav === POSITIONS_POSITIONS &&
          <div>
            {myPositionOutcomes && myPositionOutcomes.length ?
              <div>
                <div className="my-position portfolio-detail">
                  <div className="portfolio-group main-group" />
                  <div className="portfolio-group" />
                  <div className="portfolio-group">
                    <div className="portfolio-pair realized-net">
                      <span className="title">total realized P/L</span>
                      <ValueDenomination {...myPositionsSummary.realizedNet} />
                    </div>
                    <div className="portfolio-pair unrealized-net">
                      <span className="title">total unrealized P/L</span>
                      <ValueDenomination {...myPositionsSummary.unrealizedNet} />
                    </div>
                    <div className="portfolio-pair total-net">
                      <span className="title">total P/L</span>
                      <ValueDenomination {...myPositionsSummary.totalNet} />
                    </div>
                  </div>
                  <div className="close-trades" />
                </div>
                {(myPositionOutcomes || []).map(outcome =>
                  <MyPosition
                    {...outcome}
                    {...outcome.position}
                    key={`${p.market.id}-${outcome.id}`}
                    type={p.market.type}
                    closePositionStatus={p.closePositionStatus}
                    isTradeCommitLocked={p.isTradeCommitLocked}
                    scalarShareDenomination={p.scalarShareDenomination}
                  />
                )}
              </div> :
              <NullStateMessage message="No Positions Held" />
            }
          </div>
        }
        {s.selectedNav === POSITIONS_ORDERS &&
          <div>
            {userOpenOrdersCount ?
              <MyOrders
                outcomes={outcomes}
                marketType={p.market.type}
                orderCancellation={p.orderCancellation}
              /> :
              <NullStateMessage message="No Open Orders" />
            }
          </div>
        }
      </article>
    );
  }
}
