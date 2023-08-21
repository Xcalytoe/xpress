// mockService.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

mock.onGet('/verifiers').reply(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        200,
        {
          status: 'success',
          data: {
            message: 'uuuuu',
          },
        },
      ]);
    }, 4000); // Delay the response by 4000 milliseconds (4 second)
  });
});

mock.onPost('/login').reply(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        200,
        {
          status: 'success',
          data: {
            message: 'Login successful',
          },
        },
      ]);
    }, 4000); // Delay the response by 4000 milliseconds (4 second)
  });
});

export default mock;
