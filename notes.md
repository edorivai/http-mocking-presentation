# 1: Title slide

# 2: About me

# 3: Testing and mocking primer

> "Don't unit test I/O"

# 4: Goals

When testing, we want our tests to be:

1. deterministic
2. fast

# 5: Problems with I/O

# 6: Mocking to the rescue!

1. We're writing a storm alert function
2. `stormAlert()` will fetch the current wind speed
3. The unit test tests that the alert is triggered for high wind speeds
4. `getWindSpeed()` will call a third party API over HTTP
5. We want to prevent that, so we tell jest to mock `weatherUtils`
6. Now we define what `getWindSpeed()` will return on the mock
7. When `stormAlert()` runs during the test, it will not call the API!

# 7: How to mock HTTP requests?

# 8: Asking Kent

# 9: Nock - simplified example

# 10: Well, actually...

# 11: Nock - more realistic example

1. A `getUser()` function which handles error responses, and performs some "business logic"
2. Test cases

# 12: Interceptors can get more complex...

# 13: Taking a step back, refactor

# 14: Nock - refactored

1. Split up business- and requesting logic
2. api.js handles requesting
3. user.js handles business logic

# 15: Nock - test refactored

1. Mocking is now done using your mocking framework of choice, I'm using Jests mocking mechanism
2. Mocking becomes straightforward, the user test is now free of any HTTP related code
3. Error cases become clear as well. No more HTTP status codes littered through tests

# 16: But the HTTP logic is exactly what I want to test!

If this thought or feeling comes up, the first thing you have to ask yourself is...

# 17: Really though!?

- Does your HTTP logic contain a lot of _inherent_ complexity, or is it mostly _accidental_?
- Is there really that much that can go wrong? Or are you mostly piping function arguments through to your HTTP library?

# 18: Yes, really

If you _really_ need to test the HTTP level logic, I usually split those tests up into two categories:

1. Well defined and simple APIs - I test these with nock
2. Complex request/response data.

# 19: Live coding

1. Show our website
2. We want to scrape our technologies (JavaScript, React, GraphQL, Node.js)
3. Write scraper with scrape-it
4. Run it live, with Node
5. Write unit test - without mocking
6. Mock manually with nock: view-source, copy, paste into response
7. This workflow is suboptimal, error prone, tedious