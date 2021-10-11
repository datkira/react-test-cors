import './App.css';
import React, {Component} from 'react';
import {axiosInstance} from "./axiosInstance";

class App extends Component {
  componentDidMount() {
    this.callAPI()
  }

  async callAPI() {
    const consumerKey = process.env.REACT_APP_BASE_CONSUMER_KEY || ''
    const consumerSecret = process.env.REACT_APP_BASE_CONSUMER_SECRET || ''

    try {
      this.paginationLoading = true

      await axiosInstance.get(
          '/wc-api/v3/products/count',
              {
                auth: {
                  username: consumerKey,
                  password: consumerSecret,
                },
              },
      ).then((data) => {
        console.log(data)
      })
    } catch (e) {
      console.log(e)
      throw Error(e)
    }
  }
  render() {
    return (
        <div>
          View console
        </div>
    );
  }
}


export default App;
