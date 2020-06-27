import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import {Text} from '@lib/components/text/text.component';

it('renders correctly', () => {
  renderer.create(<Text>It renders correctly</Text>);
});
