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