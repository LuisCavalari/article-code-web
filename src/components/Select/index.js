import React from 'react';

import { SelectComponent } from './styles';

export default function Select({children,label,...rest}) {
  return (
    <>
    <label htmlFor={label}>{label}</label>
    <SelectComponent {...rest} name={label}>
        {children}
    </SelectComponent>
    </>
  );
}
