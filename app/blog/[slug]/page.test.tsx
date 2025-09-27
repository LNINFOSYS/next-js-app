/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

it("App Router: Works with dynamic route segments", async () => {
  // Create a Promise that resolves to the params object
  const mockParams = Promise.resolve({ slug: "Test" });
  
  // Render the component with the Promise-based params
  render(<Page params={mockParams} />);
  
  // Wait for the component to render with the resolved params
  expect(await screen.findByRole("heading")).toHaveTextContent("Slug: Test");
});