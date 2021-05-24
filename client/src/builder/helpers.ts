import {IComponents, IField} from './interfaces.h';
import React from 'react';

export const createComponentsObject = (components: React.FC<IField>[]): IComponents => {
  const result: IComponents = {};
  components.forEach((component) => {
    if (component.displayName) {
      result[component.displayName] = component;
    }
  });
  return result;
};