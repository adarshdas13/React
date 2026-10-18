
function Display({ queue, onUpdateStatus, onRemove }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "waiting":
        return "var(--warning)";
      case "serving":
        return "var(--success)";
      case "completed":
        return "var(--info)";
      default:
        return "var(--text)";
    }
  };

  return (
    <div className="w-full max-w-sm rounded-2xl border border-gray-700 bg-gray-900 p-6 shadow-xl shadow-black/20">
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-green-400">
        Current Queue
      </h2>

      {queue.length === 0 ? (
        <p className="rounded-xl border border-dashed border-gray-700 bg-gray-800/50 p-6 text-center text-sm text-gray-400">
          No customer Data
        </p>
      ) : (
        <div className="flex flex-col gap-4">
          {queue.map((customer) => (
            <div
              key={customer.id}
              className="rounded-xl border border-gray-700 bg-gray-800 p-4 transition hover:border-gray-600"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-lg font-semibold text-white">
                    {customer.name}
                  </h3>

                  <p className="mt-1 text-sm capitalize text-gray-400">
                    {customer.service}
                  </p>

                  <span
                    className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize"
                    style={{
                      color: getStatusColor(customer.status),
                      backgroundColor:
                        customer.status === "waiting"
                          ? "rgba(245, 158, 11, 0.12)"
                          : customer.status === "serving"
                            ? "rgba(34, 197, 94, 0.12)"
                            : customer.status === "completed"
                              ? "rgba(6, 182, 212, 0.12)"
                              : "rgba(229, 231, 235, 0.12)",
                    }}
                  >
                    {customer.status}
                  </span>
                </div>

                <div className="flex shrink-0 flex-col gap-2">
                  {customer.status === "waiting" && (
                    <button
                      className="rounded-lg bg-green-500 px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-green-400 active:scale-95"
                      onClick={() =>
                        onUpdateStatus(customer.id, "serving")
                      }
                    >
                      Serve
                    </button>
                  )}

                  {customer.status === "serving" && (
                    <button
                      className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-gray-950 transition hover:bg-cyan-400 active:scale-95"
                      onClick={() =>
                        onUpdateStatus(customer.id, "completed")
                      }
                    >
                      Serve
                    </button>
                  )}

                  {customer.status === "completed" && (
                    <button
                      className="rounded-lg border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 active:scale-95"
                      onClick={() => onRemove(customer.id)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Display;
