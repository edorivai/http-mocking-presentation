/* eslint-disable */
// Import React
import React from "react";
import styled from "react-emotion";
import CodeSlide from "spectacle-code-slide";
// import Prism from 'prismjs';
import "prismjs/themes/prism-tomorrow.css";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading as OriginalHeading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import { stormAlert } from "./examples/mocking-base.example.js";
import {
  nockSimple,
  nockAdvanced,
  nockComplex,
  nockRefactored,
  nockTestRefactored
} from "./examples/nock.js";

// Require CSS
require("normalize.css");

// $green: #3dcc82;
// $yellow: #f9e200;
// $lightGray: #f7f7f7;
// $textColor: #191919;

const theme = createTheme(
  {
    primary: "#191919",
    secondary: "#3dcc82",
    tertiary: "#f9e200",
    quaternary: "#CECECE"
  },
  {
    primary: "Quicksand",
    secondary: "Roboto"
  }
);

const Heading = styled(OriginalHeading)`
  font-weight: normal;
  margin-bottom: 40px;
`;

const Wrapper = styled("div")`
  display: flex;
  /* align-items: center; */
  text-align: left;
`;

export default function Presentation() {
  return (
    <Deck
      transition={["slide"]}
      transitionDuration={500}
      theme={theme}
      bgColor="primary"
      textColor="white"
    >
      {/* 1: Title slide */}
      <Slide transition={["zoom", "fade"]}>
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Mocking HTTP requests in Node
        </Heading>
        <Text margin="40px auto" textColor="white">
          Edo Rivai - @edorivai
        </Text>
      </Slide>

      {/* 2: About me */}
      <Slide>
        <Heading textColor="secondary" size={3} margin="0 0 40px">
          About me
        </Heading>
        <Wrapper>
          <Fill>
            <Image src="/family.jpg" />
          </Fill>
          <Fill>
            <Heading textColor="white" size={5} margin="40px">
              Father
            </Heading>
            <Heading textColor="white" size={5} margin="40px">
              Web developer
            </Heading>
            <Heading textColor="white" size={5} margin="40px">
              Dutchie turned Wiener
            </Heading>
            <Text margin="40px" textColor="white">
              For hire through
              <br />
              <Link
                textColor="secondary"
                href="https://null.house"
                target="_blank"
              >
                https://null.house
              </Link>
            </Text>
          </Fill>
        </Wrapper>
      </Slide>

      {/* 3: Testing and mocking primer */}
      <Slide>
        <Heading size={4} textColor="secondary">
          Testing and mocking primer
        </Heading>

        <Image src="/eric.png" style={{ borderRadius: 4, marginTop: 100 }} />
      </Slide>

      {/* 4: Testing and mocking primer */}
      <Slide>
        <Heading size={4} textColor="secondary">
          #TESTINGGOALS
        </Heading>
        <Text textColor="white">We want our tests to be:</Text>
        <Wrapper style={{ justifyContent: "center" }}>
          <List textColor="white">
            <ListItem>Deterministic</ListItem>
            <ListItem>Fast</ListItem>
          </List>
        </Wrapper>
      </Slide>

      {/* 5: Problems with I/O */}
      <Slide>
        <Heading size={4} textColor="secondary">
          Uh oh
        </Heading>
        <Text textColor="white">
          Relying on I/O could jeopardize both goals
        </Text>
        <Wrapper style={{ justifyContent: "center" }}>
          <List textColor="white" style={{ listStyle: "none" }}>
            <ListItem>❌ Network error: 404</ListItem>
            <ListItem>💔 Breaking API changes</ListItem>
            <ListItem>💽 Faulty disk read</ListItem>
            <ListItem>🐢 Slow hard drive</ListItem>
            <ListItem>🐌 Slow network</ListItem>
            <ListItem>🚇 Driving through a tunnel</ListItem>
            <ListItem>✈️ Airplane mode</ListItem>
          </List>
        </Wrapper>
      </Slide>

      {/* 6: Mocking to the rescue */}
      <CodeSlide
        textSize={18}
        lang="js"
        code={stormAlert}
        ranges={[
          {
            loc: [0, 22],
            title: "Mocking to the rescue!"
          },
          {
            loc: [0, 10],
            title: "Code that we want to test"
          },
          {
            loc: [11, 22],
            title: "The unit test"
          },
          {
            loc: [4, 5],
            title: "I/O Alert"
          },
          {
            loc: [14, 15],
            title: "Mock the original implementation"
          },
          {
            loc: [18, 19],
            title: "Tell it what to return"
          },
          {
            loc: [0, 22],
            title: "The original getWindSpeed will never be called!"
          }
        ]}
      />

      {/* 7: Asking Kent C. Dodds */}
      <Slide>
        <Heading textColor="secondary">How to mock HTTP requests?</Heading>
      </Slide>

      {/* 8: Asking Kent C. Dodds */}
      <Slide>
        <Image src="/kent.png" />
      </Slide>

      {/* 9: Nock - simplified example */}
      <CodeSlide
        textSize={18}
        lang="js"
        code={nockSimple}
        ranges={[
          { loc: [0, 15], title: "Nock" },
          { loc: [0, 7], title: "Your code that performs an outbound request" },
          { loc: [8, 12], title: "Configure nock to intercept the request" },
          { loc: [13, 15], title: "Execute the function in your tests" },
          {
            loc: [0, 15],
            title: "DONE!",
            image: "https://media.giphy.com/media/s2qXK8wAvkHTO/giphy.gif"
          }
        ]}
      />

      {/* 10: Well, actually... */}
      <Slide>
        <Heading textColor="secondary">Well, actually...</Heading>
      </Slide>

      {/* 11: Nock - more realistic example */}
      <CodeSlide
        textSize={18}
        lang="js"
        code={nockAdvanced}
        ranges={[
          { loc: [0, 17], title: "A more realistic example" },
          { loc: [19, 50], title: "Test cases" }
        ]}
      />

      {/* 12: Nock - complex example */}
      <CodeSlide
        textSize={18}
        lang="js"
        code={nockComplex}
        ranges={[
          { loc: [0, 15], title: "Interceptors can get more complex..." }
        ]}
      />

      {/* 13: Taking a step back */}
      <Slide>
        <Heading textColor="secondary">
          Let's take a step back, refactor
        </Heading>
      </Slide>

      {/* 14: Nock - refactored */}
      <CodeSlide
        textSize={18}
        lang="js"
        code={nockRefactored}
        ranges={[
          { loc: [0, 29], title: "Split up business- and requesting logic" },
          { loc: [0, 14], title: "api.js handles requesting" },
          { loc: [15, 29], title: "user.js handles business logic" }
        ]}
      />

      {/* 15: Nock - test refactored */}
      <CodeSlide
        textSize={18}
        lang="js"
        code={nockTestRefactored}
        ranges={[
          { loc: [0, 26], title: "Testing user.js" },
          { loc: [8, 11], title: "Mocking becomes straightforward" },
          {
            loc: [21, 22],
            title: "Error cases are clear. No HTTP codes, just JavaScript™"
          }
        ]}
      />

      {/* 16: I want to test HTTP logic */}
      <Slide>
        <Quote textColor="secondary">
          But the HTTP logic is exactly what I want to test!
        </Quote>
      </Slide>

      {/* 17: Really though?! */}
      <Slide>
        <Quote textColor="secondary">Really though!?</Quote>
      </Slide>

      {/* 18: Really though?! */}
      <Slide>
        <Heading textColor="secondary">Yes, really</Heading>
        <List textColor="white">
          <ListItem>Well defined and simple API? Use nock.</ListItem>
          <ListItem>Complex request/response? Keep listening.</ListItem>
        </List>
      </Slide>
    </Deck>
  );
}
