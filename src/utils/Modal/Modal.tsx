import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';

type Props = {
  body: string
}

const Modal = ({ body }: Props) => {
  return (
    <Fragment>
      <Header />
      {body}
      <Footer />
    </Fragment>
  );
};

export default Modal;
