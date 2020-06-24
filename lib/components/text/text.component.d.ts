import React from 'react';
import { TextProps as RNTextProps } from 'react-native';
export declare type TextProps = RNTextProps & {
    children?: React.ReactNode;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'p';
    uppercase?: boolean;
    lowercase?: boolean;
};
export declare const Text: (props: TextProps) => JSX.Element;
