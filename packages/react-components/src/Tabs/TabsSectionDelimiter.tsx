// Copyright 2017-2020 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import { ThemeProps } from '@polkadot/react-components/types';

interface TabsSectionDelimiterProps {
  className?: string;
}

function TabsSectionDelimiter ({ className = '' }: TabsSectionDelimiterProps): React.ReactElement {
  return (
    <div className={className}>
      <svg fill='none'
        height='47'
        viewBox='0 0 17 65'
        width='17'
        xmlns='http://www.w3.org/2000/svg'>
        <path d='M1 1L16 32.5L1 64'
          stroke='#DFDFDF'/>
      </svg>
    </div>
  );
}

export default React.memo(styled(TabsSectionDelimiter)`
  height: 100%;
  width: auto;
  `);
