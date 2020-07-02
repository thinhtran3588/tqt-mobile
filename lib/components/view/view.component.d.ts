import React from 'react';
import { ViewProps as RNViewProps } from 'react-native';
export declare type ViewProps = RNViewProps & {
    children?: React.ReactNode;
    row?: boolean;
};
export declare const View: (props: ViewProps) => JSX.Element;
