import React, {FC, Fragment} from 'react';
import Builder from '../../builder';
import {IConfig, IField} from '../../builder/interfaces.h';
import axios, {AxiosResponse} from 'axios';
import './from.css';

interface IConfigResponse extends AxiosResponse{
  data: IConfig;
}

const TextInput: React.FC<IField> = ({label, placeholder}) => {
  return (
    <Fragment>
      <label>
        <span>{label}</span>
        <input type="text" placeholder={placeholder || 'input value'}/>
      </label>
    </Fragment>
  );
};

const MaskedField: FC<IField> = ({label, placeholder}) => {
  return (
    <Fragment>
      <label>
        <span>{label}</span>
        <input type="number" placeholder={placeholder || 'input value'}/>
      </label>
    </Fragment>
  );
};

TextInput.displayName = 'TextInput';
MaskedField.displayName = 'MaskedField';

const compList = [TextInput, MaskedField];

const Form: React.FC = () => {

  const [data, setData] = React.useState<IField[]>([]);
  const [configFetched, setConfigFetched] = React.useState<boolean>(false);

  React.useEffect(() => {
    axios.get('/api/config')
      .then((res: IConfigResponse) => {
        setData(res.data.fields);
        setConfigFetched(true);
      });
  }, []);

  return (
    <form className="form-from">
      <div className="card-panel">
        {configFetched && <Builder fields={data} components={compList}/>}
        <button className="btn">Отправить форму</button>
      </div>
    </form>
  );
};

export default Form;