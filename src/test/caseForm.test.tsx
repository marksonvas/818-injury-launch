import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CaseForm from "@/components/CaseForm";

const fillRequired = () => {
  fireEvent.change(screen.getByPlaceholderText("Your name"), {
    target: { value: "Jane Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText("(818) 650-9985"), {
    target: { value: "8186509985" },
  });
  fireEvent.change(screen.getByRole("combobox"), {
    target: { value: "car" },
  });
  fireEvent.change(screen.getByPlaceholderText("Brief description — what happened?"), {
    target: { value: "Rear-ended on the 101 in Van Nuys." },
  });
};

const submit = () =>
  fireEvent.click(screen.getByRole("button", { name: /Send My Case Details/i }));

describe("CaseForm email field", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn().mockResolvedValue({
      json: async () => ({ success: true }),
    });
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders an optional email input", () => {
    render(<CaseForm />);
    const email = screen.getByPlaceholderText("Email (optional)");
    expect(email).toBeInTheDocument();
    expect(email).not.toBeRequired();
  });

  it("submits successfully when email is left blank", async () => {
    render(<CaseForm />);
    fillRequired();
    submit();

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.name).toBe("Jane Doe");
    expect(body.phone).toBe("(818) 650-9985");
    expect(body.email).toBeUndefined();
    expect(screen.getByText(/we'll be in touch within 1 business hour/i)).toBeInTheDocument();
  });

  it("sends the email address when one is provided", async () => {
    render(<CaseForm />);
    fillRequired();
    fireEvent.change(screen.getByPlaceholderText("Email (optional)"), {
      target: { value: "jane@example.com" },
    });
    submit();

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    const body = JSON.parse(fetchMock.mock.calls[0][1].body);
    expect(body.email).toBe("jane@example.com");
  });

  it("blocks submission for a malformed email address", async () => {
    render(<CaseForm />);
    fillRequired();
    fireEvent.change(screen.getByPlaceholderText("Email (optional)"), {
      target: { value: "not-an-email" },
    });
    submit();

    await new Promise((r) => setTimeout(r, 50));
    expect(fetchMock).not.toHaveBeenCalled();
    expect(
      screen.queryByText(/we'll be in touch within 1 business hour/i)
    ).not.toBeInTheDocument();
  });

  it("shows an inline error when the address has no domain suffix", async () => {
    render(<CaseForm />);
    fillRequired();
    fireEvent.change(screen.getByPlaceholderText("Email (optional)"), {
      target: { value: "jane@example" },
    });
    submit();

    expect(
      await screen.findByText("Please enter a valid email address")
    ).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
