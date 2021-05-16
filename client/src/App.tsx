import React from 'react';
import axios from 'axios';
import Form from './components/form';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './header';

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
      <button
        onClick={sendConfig}
      >
        Send
      </button>
    </label>
  );
};

const App: React.FC = () => {

  return (
    <div className="App">
      <Router>
        <Header />
        <Route path='/' component={HomePage} exact />
        <Route path='/upload' component={UploadConfig} />
        <Route path='/form' component={Form}/>
      </Router>
    </div>
  );
};

export default App;
