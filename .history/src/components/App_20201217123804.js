import React from 'react';
import Footer from './Global/Footer';
import '../sass/_base-styles.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Footer />
        <Footer />
      </div>
    );
  }
}

export default App;
