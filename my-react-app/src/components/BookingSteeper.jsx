import { useState } from "react";

const steps = ["Details", "Driver Info", "Extras", "Review"];

export default function BookingStepper({ onComplete, bookingData, setBookingData }) {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(steps.length - 1, s + 1));
  const prev = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        {steps.map((s, i) => (
          <div key={s} className="flex-1">
            <div className="text-xs font-medium">{s}</div>
            <div
              className={`h-1 rounded ${
                i <= step ? "bg-indigo-600" : "bg-gray-200"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-white rounded-2xl shadow">
        {step === 0 && <div>Location & time inputs here</div>}
        {step === 1 && <div>Driver name, age, contact</div>}
        {step === 2 && <div>Extras selection (checkboxes)</div>}
        {step === 3 && <div>Review summary + payment selection</div>}
      </div>

      <div className="flex justify-between">
        <button
          disabled={step === 0}
          onClick={prev}
          className="px-4 py-2 rounded border"
        >
          Back
        </button>
        {step < steps.length - 1 ? (
          <button
            onClick={next}
            className="px-6 py-2 bg-indigo-600 text-white rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => onComplete(bookingData)}
            className="px-6 py-2 bg-green-600 text-white rounded"
          >
            Confirm
          </button>
        )}
      </div>
    </div>
  );
}
