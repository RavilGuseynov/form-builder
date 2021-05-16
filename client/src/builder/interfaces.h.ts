import { FC } from 'react';

export interface IField {
  id: number;
  type?: string;
  label: string;
  component: string;
  placeholder?: string;
}

export interface IConfig {
  fields: IField[];
}

export interface IComponents {
  [key: string]: FC<IField>;
}