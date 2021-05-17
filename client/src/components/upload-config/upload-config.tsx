import React from 'react';
import axios from 'axios';

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

export default UploadConfig;