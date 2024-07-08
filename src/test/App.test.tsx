import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useStore from "../store";
import App from "../App";

const getInitialState = useStore.getState();

afterEach(() => {
  console.log("clean up state");
  useStore.setState(getInitialState);
});
describe("Add todo", () => {
  it("should render a todo card", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Submit" });
    const input = screen.getByPlaceholderText("Enter todo");
    await userEvent.type(input, "clean up");
    expect(input).toHaveValue("clean up");
    await userEvent.click(button);
    const todo = await screen.findByText("clean up");
    expect(todo).toBeInTheDocument();
  });

  it("should render two todo cards", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Submit" });
    const input = screen.getByPlaceholderText("Enter todo");
    await userEvent.type(input, "wash car");
    expect(input).toHaveValue("wash car");
    await userEvent.click(button);
    await userEvent.type(input, "clean the dishes");
    expect(input).toHaveValue("clean the dishes");
    await userEvent.click(button);
    const todo = screen.getAllByTestId("todo-item");
    expect(todo.length).toBe(2);
  });
});

describe("Delete todo", () => {
  it("should delete one", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Submit" });
    const input = screen.getByPlaceholderText("Enter todo");
    await userEvent.type(input, "wash car");
    expect(input).toHaveValue("wash car");
    await userEvent.click(button);
    await userEvent.type(input, "clean the dishes");
    expect(input).toHaveValue("clean the dishes");
    await userEvent.click(button);
    const deleteBtns = screen.getAllByTestId("todo-delete-btn");
    await userEvent.click(deleteBtns[0]);
    const todo = screen.getAllByTestId("todo-item");
    expect(todo.length).toBe(1);
  });
});

describe("Complete a todo", () => {
  it("should complete one", async () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Submit" });
    const input = screen.getByPlaceholderText("Enter todo");
    await userEvent.type(input, "wash car");
    expect(input).toHaveValue("wash car");
    await userEvent.click(button);
    await userEvent.type(input, "clean the dishes");
    expect(input).toHaveValue("clean the dishes");
    await userEvent.click(button);
    const checkbox = screen.getAllByRole("checkbox");
    await userEvent.click(checkbox[0]);
    expect(checkbox[0]).toBeChecked();
    expect(checkbox[1]).not.toBeChecked();
  });
});
