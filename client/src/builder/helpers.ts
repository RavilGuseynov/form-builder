import {IComponents, IField} from './interfaces.h';
import React from 'react';

export const createComponentsObject = (components: React.FC<IField>[]): IComponents => {
  const result: IComponents = {};
  components.forEach((component) => {
    result[component.name] = component;
  });
  return result;
};