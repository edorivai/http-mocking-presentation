export const nockSimple = `// Some code that performs an HTTP request
function fetchUser(username, password) {
  return fetch('http://www.example.com/login', {
    method: 'POST',
    body: \`username=\${username}&password=\${password}\`
  }).then(response => response.json());
}

// Set up an interceptor
nock('http://www.example.com')
  .post('/login', 'username=pgte&password=123456')
  .reply(200, { id: '123ABC' });

// Run your code, which sends out a request
fetchUser('pgte', '123456');
`;

export const nockAdvanced = `// Our function under test
async function getUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);

  // User does not exist
  if (response.status === 404) return null;
  // Some other error occurred
  if (response.status > 400) {
    throw new Error(\`Unable to fetch user #\${id}\`);
  }

  const { firstName, lastName } = await response.json();
  return {
    firstName,
    lastName,
    fullName: \`\${firstName} \${lastName}\`
  };
}

// Our unit tests, using nock
it('should properly decorate the fullName', async () => {
  nock('http://localhost')
    .get('/api/users/123')
    .reply(200, { firstName: 'John', lastName: 'Doe' });

  const user = await getUser(123);
  expect(user).toEqual({
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe'
  });
});

it('should return null if the user does not exist', async () => {
  nock('http://localhost')
    .get('/api/users/1337')
    .reply(404);

  const user = await getUser(1337);
  expect(user).toBe(null);
});

it('should return null when an error occurs', async () => {
  nock('http://localhost')
    .get('/api/users/42')
    .reply(500);

  const userPromise = getUser(42);
  expect(userPromise).rejects.toThrow('Unable to fetch user #42');
});
`;

export const nockComplex = `nock('http://www.google.com', {
  reqheaders: {
    'X-My-Headers': headerValue => headerValue.includes('cats'),
    'X-My-Awesome-Header': /Awesome/i,
  },
})
  .filteringRequestBody(/.*/, '*')
  .post('/echo', '*')
  .reply((uri, requestBody) => {
    return [
      201,
      'THIS IS THE REPLY BODY',
      { header: 'value' }, // optional headers
    ]
  });
`;

export const nockRefactored = `// api.js
export async function getUserFromApi(id) {
  const response = await fetch(\`/api/users/\${id}\`);

  // User does not exist
  if (response.status === 404) return null;

  // Some other error occurred
  if (response.status > 400) {
    throw new Error(\`Unable to fetch user #\${id}\`);
  }

  return response.json();
}

// user.js
import { getUserFromApi } from './api';

async function getUserWithFullName(id) {
  const user = await getUserFromApi(id);
  if (!user) return user;

  const { firstName, lastName } = user;
  return {
    firstName,
    lastName,
    fullName: \`\${firstName} \${lastName}\`
  };
}
`;

export const nockTestRefactored = `// The function we're testing
import { getUserWithFullName } from './user';

// Only imported for mocking
import { getUserFromApi } from './api';
jest.mock('./api');

it('should properly decorate the fullName', async () => {
  getUserFromApi.mockResolvedValueOnce(
    { firstName: 'John', lastName: 'Doe' }
  );

  const user = await getUserWithFullName(123);
  expect(user).toEqual({
    firstName: 'John',
    lastName: 'Doe',
    fullName: 'John Doe'
  });
});

it('should return null if the user does not exist', async () => {
  getUserFromApi.mockResolvedValueOnce(null);

  const user = await getUserWithFullName(1337);
  expect(user).toBe(null);
});
`;