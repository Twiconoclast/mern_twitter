import { connect } from 'react-redux';
import { fetchTweets } from '../../actions/tweet_actions';
import { withRouter } from 'react-router-dom';
import Tweets from './tweets';

const mapStateToProps = (state) => {
  return {
    tweets: Object.values(state.tweets.all)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTweets: () => dispatch(fetchTweets())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tweets));