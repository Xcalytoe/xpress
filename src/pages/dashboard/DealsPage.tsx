import React from 'react';
import Layout from '../../__layouts/Dashboard';
import { HeadingText } from '../../components/__styles/global.style';

const DealsPage = () => {
  const title = (
    <HeadingText
      $fsize="24px"
      $lh="20px"
      $fw="700"
      $color="var(--primary-text)"
    >
      Deals
    </HeadingText>
  );
  return (
    <Layout title={title}>
      <div>Deals</div>
    </Layout>
  );
};

export default DealsPage;
