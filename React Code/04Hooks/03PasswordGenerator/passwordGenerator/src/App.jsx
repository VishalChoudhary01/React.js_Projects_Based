import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false);
  const [password, setPassword] = useState("");

  // refHook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumber) str += "0123456789";
    if (allowChar) str += "!@#$%^&*()-_+={}[]|";
    for (let i = 0; i <= length; i++) {
      console.log("str in for loop", str);
      let char = Math.floor(Math.random() * str.length + 1);
      console.log("char", char);
      pass += str.charAt(char);
      console.log("pass", pass);
    }
    setPassword(pass);
  }, [length, allowNumber, allowChar, setPassword]);

  const copyPasswordToClip = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumber, allowChar, passwordGenerator]);
  return (
    <>
      <section className="w-full h-screen flex items-center flex-col  bg-slate-900">
        <h1 className=" text-slate-50 py-8 text-3xl font-extrabold">
          Password Generator
        </h1>
        <section className=" max-w-48  min-w-full flex flex-col items-center border bg-slate-50/30 rounded-lg py-6">
          <div className="flex w-2/5 justify-center my-4">
            <input
              className="rounded-l-xl w-full min-w-full px-4 text-center  tracking-wider placeholder-slate-950  "
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClip}
              className="text-slate-50 py-2 px-4  rounded-r-xl duration-300 bg-lime-600 hover:bg-green-500 active:bg-blue-800 active:text-white active:font-bold  hover:text-black hover:font-semi-bold"
            >
              Copy
            </button>
          </div>

          <div className="flex gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer "
              onChange={(event) => {
                setLength(event.target.value);
              }}
            />
            <label className="pl-1 pr-1 text-white font-bold ">
              Length: {length}{" "}
            </label>
            <input
              type="checkbox"
              defaultChecked={allowNumber}
              name="number"
              id="number"
              onChange={() => {
                setAllowNumber((prev) => !prev);
              }}
            />
            <label className="pr-1 text-white font-bold">Numbers</label>
            <input
              type="checkbox"
              defaultChecked={allowChar}
              name="special"
              id="special"
              onChange={() => {
                setAllowChar((prev) => !prev);
              }}
            />
            <label className="text-white font-bold">Special Characters</label>
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
