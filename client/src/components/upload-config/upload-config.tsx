import React from 'react';
import axios from 'axios';
import './upload-config.css';

const UploadConfig: React.FC = () => {
  const [text, setText] = React.useState<string>('');

  const sendConfig = (event: React.FormEvent) => {
    event.preventDefault();
    axios.post('api/config',{
      text,
    })
      .then(() => {
        alert('data loaded');
      });
  };

  const onChangeHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  return (
    <form className="config-upload" onSubmit={sendConfig}>
      <div className="card-panel">
        <label>
          <h5>Обновление конфига</h5>
          <textarea
            placeholder="Введите новые данные..."
            className="input-field input-config"
            value={text}
            onChange={onChangeHandler}
          />
          <button
            className="btn"
          >
            Обновить
          </button>
        </label>
      </div>
    </form>
  );
};

export default UploadConfig;