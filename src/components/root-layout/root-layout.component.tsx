import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './root-layout.styles';

type Props = {
  children?: React.ReactNode;
};

export const RootLayout = (props: Props): JSX.Element => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.top]} />
      <SafeAreaView style={[styles.bottom]}>{children}</SafeAreaView>
    </View>
  );
};
