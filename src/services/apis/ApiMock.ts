import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockData from '../../constants/MOCK_DATA.json';

const mock = new MockAdapter(axios);

mock.onGet('/verifiers').reply(200, mockData);

mock.onPost('/dummy_url').reply(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        200,
        {
          status: 'success',
          data: {
            message: 'Successful',
          },
        },
      ]);
    }, 4000); // Delay the response by 4000 milliseconds (4 second)
  });
});

export default mock;
