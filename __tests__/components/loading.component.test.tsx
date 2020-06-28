import 'react-native';
import React from 'react';
import {render, toJSON} from '@test-utils';
import {Loading} from '@lib/components';

it('renders correctly', async () => {
  const {baseElement} = render(<Loading />);
  expect(toJSON(baseElement)).toMatchSnapshot();
});
