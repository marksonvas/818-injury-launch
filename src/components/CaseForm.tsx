import { useState } from "react";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

// Web3Forms public access key (delivers to intake@818injury.com)
const WEB3FORMS_KEY = "9bd3f4a1-436c-40ac-b866-f04fe81b8fdd";

interface CaseFormProps {
  title?: string;
  subtitle?: string;
}

const CaseForm = ({
  title = "Tell Us What Happened",
  subtitle = "Free, confidential — no obligation",
}: CaseFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [form, setForm] = useState({
    name: "",
    phone: "",
    injuryType: "",
    description: "",
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, phone: formatPhone(e.target.value) }));
    setErrors((e2) => ({ ...e2, phone: false }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((e2) => ({ ...e2, [e.target.name]: false }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (form.phone.replace(/\D/g, "").length < 10) newErrors.phone = true;
    if (!form.injuryType) newErrors.injuryType = true;
    if (!form.description.trim()) newErrors.description = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem("botcheck") as HTMLInputElement | null;
    if (honeypot?.checked) return;

    const injuryLabels: Record<string, string> = {
      car: "Car accident",
      "wrongful-death": "Wrongful death",
      truck: "Truck accident",
      rideshare: "Rideshare accident",
      other: "Other",
    };
    const injury = injuryLabels[form.injuryType] || form.injuryType;

    setSending(true);
    setSendError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Lead: ${injury} – ${form.name.trim().slice(0, 100)}`,
          from_name: "818Injury.com",
          name: form.name.trim().slice(0, 100),
          phone: form.phone,
          injury_type: injury,
          description: form.description.trim().slice(0, 2000),
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 text-center">
        <p className="font-display text-navy text-lg">
          Thank you — we'll be in touch within 1 business hour.
        </p>
      </div>
    );
  }

  const inputBase =
    "w-full px-3 py-2.5 rounded-lg border text-[15px] font-body min-h-[44px] focus:outline-none focus:ring-2 focus:ring-gold transition-colors";
  const errorBorder = "border-red-500";
  const normalBorder = "border-gray-200";

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-r-xl shadow-lg p-6 space-y-4 border-l-4 border-l-gold"
    >
      <div>
        <h3 className="font-display text-navy text-lg">{title}</h3>
        <p className="text-gray-500 text-[13px] mt-0.5">{subtitle}</p>
      </div>

      <div>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className={`${inputBase} ${errors.name ? errorBorder : normalBorder}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
      </div>

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="(818) 650-9985"
          value={form.phone}
          onChange={handlePhoneChange}
          className={`${inputBase} ${errors.phone ? errorBorder : normalBorder}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">Valid phone number is required</p>}
      </div>

      <div>
        <select
          name="injuryType"
          value={form.injuryType}
          onChange={handleChange}
          className={`${inputBase} ${errors.injuryType ? errorBorder : normalBorder} ${!form.injuryType ? "text-gray-400" : "text-foreground"}`}
        >
          <option value="">Type of injury</option>
          <option value="car">Car accident</option>
          <option value="wrongful-death">Wrongful death</option>
          <option value="truck">Truck accident</option>
          <option value="rideshare">Rideshare accident</option>
          <option value="other">Other</option>
        </select>
        {errors.injuryType && <p className="text-red-500 text-xs mt-1">Please select injury type</p>}
      </div>

      <div>
        <textarea
          name="description"
          rows={3}
          placeholder="Brief description — what happened?"
          value={form.description}
          onChange={handleChange}
          className={`${inputBase} resize-none ${errors.description ? errorBorder : normalBorder}`}
        />
        {errors.description && <p className="text-red-500 text-xs mt-1">Description is required</p>}
      </div>

      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {sendError && (
        <p className="text-red-500 text-[13px] text-center">
          Something went wrong. Please call us at (818) 650-9985.
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-navy text-white font-body font-semibold text-sm py-3 rounded-lg hover:bg-navy-light transition-colors min-h-[44px] disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send My Case Details →"}
      </button>

      <p className="text-gray-400 text-[12px] text-center">
        Your info is 100% private. We never share it.
      </p>
    </form>
  );
};

export default CaseForm;
