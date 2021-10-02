import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import PlayRequest from './PlayRequest';
import {sendPlayRequest, checkPlayStatus, clearData} from './actions';
import {
  selectUserStatus,
  selectLoadingStatus,
  selectPlayStatus,
} from './selectors';

export class PlayRequestContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {dispatchSendPlayRequest} = this.props;
    dispatchSendPlayRequest();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.playStatus === prevProps.playStatus) {
      setInterval(() => {
        this.props.dispatchCheckPlayStatus();
      }, 5000);
    }
  }
  render() {
    return <PlayRequest categoryList={this.props.categoryList} />;
  }
}

export const mapStateToProps = createStructuredSelector({
  userStatus: selectUserStatus(),
  loading: selectLoadingStatus(),
  playStatus: selectPlayStatus(),
});

export const mapDispatchToProps = dispatch => {
  return {
    dispatchSendPlayRequest: () => dispatch(sendPlayRequest()),
    dispatchCheckPlayStatus: () => dispatch(checkPlayStatus()),
    dispatchClearData: () => dispatch(clearData()),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayRequestContainer);
