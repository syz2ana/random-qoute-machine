import React from 'react';
import { random } from 'lodash';
import 'typeface-roboto'
import QouteMachine from './components/QouteMachine';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';

const QOUTE_URL = "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json"

const styles = {
  container: {
    alignItems: 'center',
    display: 'felx',
    height: '100vh'
  }
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      qoutes: [],
      selectedQouteIndex: null,
    }
    this.assignNewQouteIndex = this.assignNewQouteIndex.bind(this);
  }

  get selectedQoute() {

    if (!this.state.qoutes.length || !Number.isInteger(this.state.selectedQouteIndex)) {
      return undefined;
    }
    return this.state.qoutes[this.state.selectedQouteIndex];
  }

  componentDidMount() {
    fetch(QOUTE_URL)
      .then(data => data.json())
      .then(res => this.setState({ qoutes: res }, this.assignNewQouteIndex));
  }

  genereateNewQouteIndex() {
    if (!this.state.qoutes.length) {
      return undefined;
    }
    return random(0, this.state.qoutes.length - 1);
  }

  assignNewQouteIndex() {
    this.setState({
      selectedQouteIndex: this.genereateNewQouteIndex(),
    });
  }

  render() {
    return (
      <Grid className={this.props.classes.container} id="quote-box" justify='center' container>
        <Grid xs={11} lg={8} item>
          {
            this.selectedQoute ?
              <QouteMachine
                index={this.state.selectedQouteIndex}
                selectedQoute={this.selectedQoute}
                assignNewQouteIndex={this.assignNewQouteIndex} />
              : null
          }
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(App);
