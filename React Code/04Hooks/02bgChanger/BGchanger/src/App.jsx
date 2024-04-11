import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <section
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <footer className="fixed flex flex-wrap justify-center bottom-14 px-2 inset-x-0">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg  px-5 py-2 rounded-full">
            <button onClick={()=>(setColor("red"))} className="outline-none px-6 py-2 bg-red-200 text-red-900 font-bold border-slate-100 border-4 rounded-3xl">
              Red
            </button>
            <button onClick={()=>(setColor("green"))} className="outline-none px-6 py-2 bg-green-200 text-green-900 font-bold border-slate-100 border-4 rounded-3xl">
              Green
            </button>
            <button onClick={()=>(setColor("blue"))} className="outline-none px-6 py-2 bg-blue-200 text-blue-900 font-bold border-slate-100 border-4 rounded-3xl">
              Blue
            </button>
            <button onClick={()=>(setColor("yellow"))} className="outline-none px-6 py-2 bg-yellow-200 text-yellow-900 font-bold border-slate-100 border-4 rounded-3xl">
              Yellow
            </button>
            <button onClick={()=>(setColor("pink"))} className="outline-none px-6 py-2 bg-pink-200 text-pink-900 font-bold border-slate-100 border-4 rounded-3xl">
              Pink
            </button>
            <button onClick={()=>(setColor("orange"))} className="outline-none px-6 py-2 bg-orange-200 text-orange-900 font-bold border-slate-100 border-4 rounded-3xl">
              Orange
            </button>
            <button onClick={()=>(setColor("violet"))} className="outline-none px-6 py-2 bg-violet-200 text-violet-900 font-bold border-slate-100 border-4 rounded-3xl">
              Violet
            </button>
            <button onClick={()=>(setColor("tomato"))} className="outline-none px-6 py-2 bg-rose-200 text-rose-900 font-bold border-slate-100 border-4 rounded-3xl">
              Rose
            </button>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
