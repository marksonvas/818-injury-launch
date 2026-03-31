import { useState } from "react";

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length === 0) return "";
  if (digits.length <= 3) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

interface CaseFormProps {
  title?: string;
  subtitle?: string;
}

const CaseForm = ({
  title = "Tell Us What Happened",
  subtitle = "Free, confidential — no obligation",
}: CaseFormProps) => {
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
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

    console.log("Form submitted:", form);
    setSubmitted(true);
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
      className="bg-white rounded-xl shadow-lg p-6 space-y-4 border-l-4 border-l-gold"
    >
      <div>
        <h3 className="font-display text-navy text-lg">{title}</h3>
        <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>
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
          placeholder="(818) 000-0000"
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

      <button
        type="submit"
        className="w-full bg-navy text-white font-body font-semibold text-sm py-3 rounded-lg hover:bg-navy-light transition-colors min-h-[44px]"
      >
        Send My Case Details →
      </button>

      <p className="text-gray-400 text-[10px] text-center">
        Your info is 100% private. We never share it.
      </p>
    </form>
  );
};

export default CaseForm;
