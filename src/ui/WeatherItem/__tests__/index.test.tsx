import { render, screen, fireEvent } from "@testing-library/react";
import { describe, afterEach, vitest, expect, it } from "vitest";
import { WeatherItem, WeatherItemProps } from "..";

describe("WeatherItem", () => {
  const mockOnClickFavorite = vitest.fn();
  const mockOnClickRemoveFavorite = vitest.fn();

  const defaultProps: WeatherItemProps = {
    href: `/city/123,456`,
    name: "City",
    id: "1",
    icon: "01d",
    country: "Country",
    temperature: 25,
    coordinates: {
      lat: "123",
      lon: "456",
    },
  };

  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("renders the component with provided props", () => {
    render(<WeatherItem {...defaultProps} />);

    expect(screen.getByText("City")).toBeInTheDocument();
    expect(screen.getByText("Country (123_456)")).toBeInTheDocument();
    expect(screen.getByText("25 °")).toBeInTheDocument();
  });

  it("calls onClickFavorite when the star button is clicked and is not a favorite", () => {
    render(
      <WeatherItem {...defaultProps} onClickFavorite={mockOnClickFavorite} />
    );

    fireEvent.click(screen.getByText("Star"));
    expect(mockOnClickFavorite).toHaveBeenCalledWith("1");
  });

  it("calls onClickRemoveFavorite when the star button is clicked and is a favorite", () => {
    render(
      <WeatherItem
        {...defaultProps}
        onClickRemoveFavorite={mockOnClickRemoveFavorite}
        isFavorite={true}
      />
    );

    fireEvent.click(screen.getByText("Unstar"));
    expect(mockOnClickRemoveFavorite).toHaveBeenCalledWith("1");
  });
});
