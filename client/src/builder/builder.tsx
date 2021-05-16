import React, {FC, Fragment} from 'react';
import {IField} from './interfaces.h';
import {createComponentsObject} from './helpers';

interface IBuilderProps {
  fields: IField[];
  components: FC<IField>[];
}

const Builder: FC<IBuilderProps> = ({
  fields,
  components,
}) => {

  const componentsList = createComponentsObject(components);
  const formFields = fields.map((field) => {
    const Component: FC<IField> = componentsList[field.component];
    return (
      <Component
        {...field}
        key={field.id}
      />
    );
  });
  return (
    <Fragment>
      {formFields}
    </Fragment>
  );
};

export default Builder;