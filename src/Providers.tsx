import * as React from 'react';
import { ThemeProvider } from 'theme-ui';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/custom-toastify.css';
import theme from './styles/theme';

type ThemeProps = {
  children?: React.ReactNode;
};

export default function Theme(props: ThemeProps) {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
      <ToastContainer closeButton={false} hideProgressBar />
    </React.Fragment>
  );
}
