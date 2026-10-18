import "./App.css";
import { useState } from "react";
import QueueForm from "./components/QueueForm";
import Display from "./components/Display";
export default function App() {
  const [queue, setQueue] = useState([]);

  
const addToQueue = (customer) => {
    setQueue((prevQueue) => [...prevQueue,
        {...customer,id: Date.now() + Math.random(),status: "waiting",},
    ]);
};

  const updateStatus = (id, newStatus) => {
    setQueue(queue.map((customer) => 
        customer.id === id ? { ...customer, status: newStatus } : customer
      ));
};
  const removeFromQueue = (id) => {
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <div>
      <header className="text-center my-10">
        <h1 className="text-3xl font-bold my-5 text-cyan-300">
          Queue Management
        </h1>
        <p className="text-gray-400">Manage your customers efficiently...</p>
      </header>
      <main className="mx-auto my-10 flex w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 md:flex-row md:items-start md:gap-10">
  <QueueForm onAdd={addToQueue} />

  <Display
    queue={queue}
    onUpdateStatus={updateStatus}
    onRemove={removeFromQueue}
  />
</main>
    </div>
  );
}
