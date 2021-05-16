import React from 'react';
import './App.css';
import axios from 'axios';
import Form from './components/form';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';

const HomePage: React.FC = () => (<span>Home page</span>);

const UploadConfig: React.FC = () => {

  const [text, setText] = React.useState<string>('');

  const sendConfig = () => {
    axios.post('api/config',{
      text,
    })
      .then(() => {
        alert('data loaded');
      });
  };

  const onChangeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <label>
      <input
        type="text"
        onChange={onChangeHandler}
      />
      <Button
        color="primary"
        variant="outlined"
        onClick={sendConfig}
      >
        Send
        <Icon color="primary">send</Icon>
      </Button>
    </label>
  );
};

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Route path='/' component={HomePage} exact />
        <Route path='/upload' component={UploadConfig} />
        <Route path='/form' component={Form}/>
      </Router>
    </div>
  );
};

export default App;
