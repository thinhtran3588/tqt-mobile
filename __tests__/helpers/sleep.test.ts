import 'react-native';
import {sleep} from '@lib/helpers';

jest.useFakeTimers();

it('renders correctly', () => {
  sleep(1000);
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});
