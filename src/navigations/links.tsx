import React from 'react';
import {
  DealsIcon,
  TransactionsIcon,
  VerifiersIcon,
} from '../components/__icons';

export const DASHBOARD_LINKS = [
  {
    TITLE: 'Verifiers',
    LINK: '/',
    SLUG: 'verifiers',
    PROTECTED: true,
    ICON: (isActive: boolean) => <VerifiersIcon isActive={isActive} />,
  },
  {
    TITLE: 'Deals',
    LINK: '/deals',
    SLUG: 'deals',
    PROTECTED: true,
    ICON: (isActive: boolean) => <DealsIcon isActive={isActive} />,
  },
  {
    TITLE: 'Transactions',
    LINK: '/transactions',
    SLUG: 'transactions',
    PROTECTED: true,
    ICON: (isActive: boolean) => <TransactionsIcon isActive={isActive} />,
  },
];
