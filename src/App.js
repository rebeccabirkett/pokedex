// dependancies
import React from 'react';
import { Button } from './components/Button';
import { Error } from './components/Error';
import { getRandNum } from './components/getRandNum';

class App extends React.Component {
  state = {
    data: "",
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${getRandNum(1, 150)}/`)
    .then((response => {
      console.log(response);
      return response.json();
    }))
    .then((data) => {
      console.log(data);
      return this.setState({data: data});
    });
  };

  render() {
    if (this.state.data.error) return <Error />
    return (
      <div>
        <h1>hey!</h1>
        <Button fetchData={this.fetchData} />
        <p>{this.state.data && this.state.data.name}</p>
      </div>
    );
  }
}

export default App;