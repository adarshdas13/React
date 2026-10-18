import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
export default function QueueForm({ onAdd }) {
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  
const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !service.trim()) return;
    onAdd({ name: name.trim(), service });
  setName("");
  setService("");
};


  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-700 bg-gray-900 p-8 shadow-xl shadow-black/20">
      <form
        className="flex flex-col items-center gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-green-400">
          Add to Queue
        </h2>

        <div className="w-full">
          <input
            className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white placeholder-gray-400 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="w-full">
          <select
            className="w-full cursor-pointer rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-gray-200 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
            <option value="support">Customer Support</option>
            <option value="payments">Payments</option>
          </select>
        </div>

        <button
          type="submit"
          className="flex w-50 items-center justify-center gap-2 rounded-lg bg-cyan-500 px-2 py-2 font-semibold text-gray-950 transition hover:bg-cyan-400"
        >
          <FaUserPlus size={16} />
          Add Customer
        </button>
      </form>
    </div>
  );
}
