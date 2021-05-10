import React from 'react';
import './App.css';
import axios, {AxiosResponse} from 'axios';

interface IConfig {
  text: string;
  _id: string;
}

interface IConfigResponse extends AxiosResponse{
  data: IConfig[];
}

const App: React.FC = () => {

  const [data, setData] = React.useState<IConfig[]>([]);
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

  React.useEffect(() => {
    axios.get('/api/config')
      .then((res: IConfigResponse) => {
        setData(res.data);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {
          data.map((item) => {
            return (
              <div key={item._id}>{item.text}</div>
            );
          })
        }
      </header>
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
    </div>
  );
};

export default App;
