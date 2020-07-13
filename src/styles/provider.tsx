import * as React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from './theme';

type ThemeProps = {
  children?: React.ReactNode;
};

export default function Theme(props: ThemeProps) {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
