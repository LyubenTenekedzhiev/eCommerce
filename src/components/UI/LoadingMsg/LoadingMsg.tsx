import React, { ReactElement } from 'react';

import { LoadingMsg } from './LoadingMsgStyles';

interface Props {
  children: any;
}

function LoadingMsgComponent({ children }: Props): ReactElement {
  return <LoadingMsg>{children}</LoadingMsg>;
}

export default LoadingMsgComponent;
