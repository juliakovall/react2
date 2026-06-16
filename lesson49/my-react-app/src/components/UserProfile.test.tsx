import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  test("shows loading", () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => new Promise(() => {})),
    );

    render(<UserProfile />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("shows user data", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() =>
        Promise.resolve({
          ok: true,
          json: () =>
            Promise.resolve({
              id: 1,
              name: "Leanne Graham",
              email: "Sincere@april.biz",
              username: "Bret",
            }),
        }),
      ),
    );

    render(<UserProfile />);

    expect(await screen.findByText("Name: Leanne Graham")).toBeInTheDocument();
  });

  test("shows error", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(() => Promise.reject()),
    );

    render(<UserProfile />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Failed to load user",
    );
  });
});
