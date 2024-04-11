import { useState } from "react";

function App() {
  let [count, setCount] = useState(10);

  let addValue = () => {
    if (count < 50) {
      setCount(count + 1);
    }
  };
  let removeValue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className=" mx-auto w-1/4 min-w-80 flex flex-col items-center border-white-800 rounded-xl border-2 bg-slate-50/30 backdrop-blur-lg my-10">
      <h1 className="py-10 text-3xl font-bold  ">COUNTER</h1>
      <h3 className="text-slate-100 font-bold text-xl">Start Value :: {count}</h3>

      <div className="flex w-2/3  justify-center  my-5 ">
        <button
          className="h-10  bg-slate-300 py-4 px-6 flex items-center my-8 m-4 ease-in duration-300 rounded-xl font-semibold hover:bg-green-500 hover:font-bold hover:border-slate-100 hover:border-2"
          onClick={addValue}
        >
          Increase
        </button>
        <button
          className="h-10 bg-green-200 py-4 px-6 flex items-center my-8 ease-in duration-500 rounded-xl hover:bg-red-500 font-bold "
          onClick={removeValue}
        >
          Decrease
        </button>
      </div>
    </section>
  );
}

export default App;
