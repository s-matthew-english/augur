import { augur } from '../../../services/augurjs';
import { loadAccountTrades } from '../../../modules/my-positions/actions/load-account-trades';
import { loadBidsAsksHistory } from '../../../modules/bids-asks/actions/load-bids-asks-history';
import { loadCreateMarketHistory } from '../../../modules/create-market/actions/load-create-market-history';
import { loadFundingHistory, loadTransferHistory } from '../../../modules/account/actions/load-funding-history';
import { loadReportingHistory } from '../../../modules/my-reports/actions/load-reporting-history';
import { loadEventsWithSubmittedReport } from '../../../modules/my-reports/actions/load-events-with-submitted-report';
import { syncBranch } from '../../../modules/branch/actions/sync-branch';
import { updateReports, clearReports } from '../../../modules/reports/actions/update-reports';
import { updateLoginAccount } from '../../../modules/auth/actions/update-login-account';
import { updateAssets } from '../../../modules/auth/actions/update-assets';
import { updateFavorites } from '../../../modules/markets/actions/update-favorites';
import updateUserLoginMessageVersionRead from '../../../modules/login-message/actions/update-user-login-message-version-read';
import { updateScalarMarketShareDenomination } from '../../../modules/market/actions/update-scalar-market-share-denomination';

export const loadAccountDataFromLocalStorage = address => (dispatch) => {
  const localStorageRef = typeof window !== 'undefined' && window.localStorage;
  if (localStorageRef && localStorageRef.getItem && address) {
    const storedAccountData = JSON.parse(localStorageRef.getItem(address));
    if (storedAccountData) {
      if (storedAccountData.favorites) {
        dispatch(updateFavorites(storedAccountData.favorites));
      }
      if (storedAccountData.scalarMarketsShareDenomination) {
        Object.keys(storedAccountData.scalarMarketsShareDenomination).forEach((marketID) => {
          dispatch(updateScalarMarketShareDenomination(marketID, storedAccountData.scalarMarketsShareDenomination[marketID]));
        });
      }
      if (storedAccountData.reports && Object.keys(storedAccountData.reports).length) {
        dispatch(updateReports(storedAccountData.reports));
      }
      if (storedAccountData.loginMessageVersionRead && !isNaN(parseInt(storedAccountData.loginMessageVersionRead, 10))) {
        dispatch(updateUserLoginMessageVersionRead(parseInt(storedAccountData.loginMessageVersionRead, 10)));
      }
    }
  }
};

export const loadFullAccountData = (account, callback) => (dispatch) => {
  if (!account) {
    if (callback) callback({ message: 'account required' });
  } else {
    if (account.isUnlocked) dispatch(updateLoginAccount({ isUnlocked: !!account.isUnlocked }));
    if (account.loginID) dispatch(updateLoginAccount({ loginID: account.loginID }));
    if (account.name) dispatch(updateLoginAccount({ name: account.name }));
    if (account.airbitzAccount) dispatch(updateLoginAccount({ airbitzAccount: account.airbitzAccount }));
    if (!account.address) {
      if (callback) callback(null);
    } else {
      dispatch(updateLoginAccount({ address: account.address }));
      dispatch(loadAccountDataFromLocalStorage(account.address));
      augur.getRegisterBlockNumber(account.address, (err, blockNumber) => {
        if (!err && blockNumber) {
          dispatch(updateLoginAccount({ registerBlockNumber: blockNumber }));
        }
        dispatch(updateAssets(callback));
        dispatch(loadAccountTrades());
        dispatch(loadBidsAsksHistory());
        dispatch(loadFundingHistory());
        dispatch(loadTransferHistory());
        dispatch(loadCreateMarketHistory());

        // clear and load reports for any markets that have been loaded
        // (partly to handle signing out of one account and into another)
        dispatch(clearReports());
        dispatch(loadReportingHistory());
        dispatch(loadEventsWithSubmittedReport());
        dispatch(syncBranch());
      });
    }
  }
};