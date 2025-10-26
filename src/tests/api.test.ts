import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth";

describe("auth test", () => {
  test("no auth header", () => {
    expect(getAPIKey({})).toBe(null);
  });

  test("wrong auth header", () => {
    expect(getAPIKey({ authorization: "ApiKey" })).toBe(null);
  });

  test("wrong auth header 2", () => {
    expect(getAPIKey({ authorization: "ApiKeys" })).toBe(null);
  });

  test("return api key", () => {
    expect(getAPIKey({ authorization: "ApiKey someKey" })).toBe("someKey");
  });
});
