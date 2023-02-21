import { render, screen, userEvent } from "../../../tests/appTestUtils";
import { Button } from "./Button";

const BUTTON_LABEL = "Label";
const ON_CLICK_MOCK = jest.fn();

describe("Button", () => {
  it("renders properly", () => {
    render(<Button label={BUTTON_LABEL} onClick={ON_CLICK_MOCK} />);

    expect(screen.getByText(BUTTON_LABEL)).toBeInTheDocument();
  });

  it("renders properly, even if it is disabled", () => {
    render(<Button label={BUTTON_LABEL} onClick={ON_CLICK_MOCK} disabled />);

    expect(screen.getByText(BUTTON_LABEL)).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<Button label={BUTTON_LABEL} onClick={ON_CLICK_MOCK} />);

    userEvent.click(screen.getByText(BUTTON_LABEL));

    expect(ON_CLICK_MOCK).toHaveBeenCalled();
  });

  it("does not call onClick if clicked when button is disabled", () => {
    render(<Button label={BUTTON_LABEL} onClick={ON_CLICK_MOCK} disabled />);

    userEvent.click(screen.getByText(BUTTON_LABEL));

    expect(ON_CLICK_MOCK).toHaveBeenCalledTimes(0);
  });
});
