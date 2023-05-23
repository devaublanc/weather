import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Logo } from "..";

describe("Logo", () => {
  it("should render correctly", () => {
    render(<Logo />);
    const heading = screen.getByRole("heading", { name: /WeatherApp 🌤/ });
    expect(heading).toBeTruthy();
  });
});
