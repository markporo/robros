import React, {Component} from 'react';
import '../App.css';
import CardList from '../components/CardList';
import Search from '../components/Search';
import Scroll  from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

  class Main extends Component {
    constructor() {
      super()
      this.state = {
        friends: [],
        searchBox: '' 
      }
    }

    onSearchChange = (e) => {
      this.setState({searchBox: e.target.value})
    }

    componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => 
          res.json()
        )
        .then(users => 
          this.setState({friends: users})
        )
    }

  render() {
    const {friends, searchBox} = this.state;
    const filteredFriends = friends.filter(bots =>{
      return bots.name.toLowerCase().includes(searchBox.toLowerCase())
    })

    //ternary statement
      return !friends ? (<div> LOADING ROBROS...!</div>) :
    (
        <div className='App flex-column'>
          <Search onSearchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList friends={filteredFriends}/>
            </ErrorBoundary>
          </Scroll>
        </div>
        );
    }
}

export default Main;