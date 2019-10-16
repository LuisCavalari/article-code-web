import React from 'react';

import { ButtonComponent } from './styles';

export default function Button({ color, content, fill, ...rest }) {
  return (
    <ButtonComponent
      {...rest}
      fill={fill}
      color={color} >
      {content}
    </ButtonComponent>
  );
}
