import 'react-native';
import React from 'react';
import {render, toJSON} from '@test-utils';
import {RootLayout, Text} from '@lib/components';

it('renders correctly', async () => {
  const {baseElement} = render(
    <RootLayout>
      <Text>Text</Text>
    </RootLayout>,
  );
  expect(toJSON(baseElement)).toMatchSnapshot();
});
