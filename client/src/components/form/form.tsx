import React, {FC, Fragment} from 'react';
import Builder from '../../builder';
import {IConfig, IField} from '../../builder/interfaces.h';
import axios, {AxiosResponse} from 'axios';

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

const compList = [TextInput, MaskedField];

const Form: React.FC = () => {

  const [data, setData] = React.useState<IField[]>([]);

  React.useEffect(() => {
    axios.get('/api/config')
      .then((res: IConfigResponse) => {
        setData(res.data.fields);
      });
  }, []);

  return (
    <form>
      <Builder fields={data} components={compList}/>
    </form>
  );
};

export default Form;