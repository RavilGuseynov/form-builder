import React from 'react';
import Form from './components/form';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import UploadConfig from './components/upload-config';
import HomePage from './components/home-page';
import Documentation from './components/documentation';

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' component={HomePage} exact />
        <Route path='/upload' component={UploadConfig} />
        <Route path='/form' component={Form}/>
        <Route path='/doc' component={Documentation}/>
      </Router>
    </div>
  );
};

export default App;
