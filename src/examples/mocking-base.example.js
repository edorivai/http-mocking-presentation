export const stormAlert = `// stormAlert.js
import { getWindSpeed } from "./weatherUtils";

async function stormAlert() {
  const windSpeed = await getWindSpeed();
  if (windSpeed > 100) {
    return "STORM";
  }
  return "All good";
}

// stormAlert.test.js
import { stormAlert } from "./index";
import { getWindSpeed } from "./weatherUtils";
jest.mock("./weatherUtils");

describe("#stormAlert", () => {
  it("should alert during high wind speeds", () => {
    getWindSpeed.mockResolvedValue(200);
    expect(await stormAlert()).toBe("STORM");
  });
});
`;
