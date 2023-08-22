import { store } from '../redux/store';

// Base64 converter
export const convertImageToBase64 = (file: Blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      resolve(base64);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

export const logout = () => {
  store.dispatch.authModel.setState({ token: '' });
};

// Table status formatter
export const handleStatus = (status: string) => {
  switch (status) {
    case 'pending':
      return {
        name: 'Awaiting approval',
        bg: 'var( --warning-bg-2)',
        color: 'var(--warning)',
      };
    case 'deactivate':
      return {
        name: 'Deactivated',
        bg: 'var(--danger-bg-2)',
        color: 'var(--danger)',
      };
    case 'active':
      return {
        name: 'Active',
        bg: 'var(--success-bg-2)',
        color: 'var(--success)',
      };

    default:
      return null;
  }
};
