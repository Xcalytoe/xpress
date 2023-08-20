import React from 'react';
import Layout from '../../__layouts/Dashboard';
import { HeadingText } from '../../components/__styles/global.style';

const TransactionsPage = () => {
  const title = (
    <HeadingText
      $fsize="24px"
      $lh="20px"
      $fw="700"
      $color="var(--primary-text)"
    >
      Transactions
    </HeadingText>
  );
  return (
    <Layout title={title}>
      <div>TransactionsPage</div>
    </Layout>
  );
};

export default TransactionsPage;
