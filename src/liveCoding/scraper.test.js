import { setupRecorder } from "nock-record";

import { getTechnologies } from "./scraper";

const record = setupRecorder();

describe("#getTechnologies", () => {
  it("should fetch the technologies", async () => {
    const { completeRecording } = await record("nullhouse-technologies");

    const technologies = await getTechnologies();

    completeRecording();

    expect(technologies).toEqual(["JavaScript", "React", "Node.js", "GraphQL"]);
  });
});

