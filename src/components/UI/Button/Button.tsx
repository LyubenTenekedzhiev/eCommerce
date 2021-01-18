import React, { ReactElement } from 'react';

import { Button } from './ButtonStyles';

interface Props {
  children: any;
  clicked: any;
  disabled?: boolean;
}

function ButtonComponent({ children, clicked, disabled }: Props): ReactElement {
  return (
    <Button onClick={clicked} disabled={disabled}>
      {children}
    </Button>
  );
}

export default ButtonComponent;
