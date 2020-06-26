import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles} from './root-layout.styles';

export type RootLayoutProps = {
  children?: React.ReactNode;
};

export const RootLayout = (props: RootLayoutProps): JSX.Element => {
  const {children} = props;
  return (
    <View style={styles.container}>
      <SafeAreaView style={[styles.top]} />
      <SafeAreaView style={[styles.bottom]}>{children}</SafeAreaView>
    </View>
  );
};
