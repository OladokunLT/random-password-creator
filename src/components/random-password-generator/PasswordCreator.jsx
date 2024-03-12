import { useId, useState, useCallback, useEffect, useRef } from "react";

const PasswordCreator = () => {
  const [letterAllowed, setLetterAllowed] = useState(false);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pwLength, setPwLength] = useState(16);
  const [pw, setPw] = useState(null);

  const numId = useId();
  const charId = useId();
  const letterId = useId();
  const pwRef = useRef();

  const getPassword = useCallback(() => {
    console.log("from callback");
    let str = "";

    if (letterAllowed)
      str += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numAllowed) str += "1234567890";
    if (charAllowed) str = str + "!@#$%^&*()_+.,?/<>{}[]|:;";

    console.log("num: " + numAllowed, "char: " + charAllowed);
    let pw = "";
    for (let i = 0; i < pwLength; i++) {
      const randomNum = Math.floor(Math.random() * str.length);
      const char = str.charAt(randomNum);

      pw += char;
    }
    setPw(pw);
  }, [letterAllowed, pwLength, numAllowed, charAllowed]);

  useEffect(() => {
    getPassword();
  }, [getPassword]);

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(pw);
    pwRef.current?.select();
    window.alert(`Password copied succesfully: ${pw}`);
  };
  return (
    <>
      <div className="border-2 border-purple-400 m-auto w-[300px] flex flex-col gap-4 p-4 rounded-lg mt-4">
        <h1 className="text-lg font-bold">Create random password</h1>

        <form action="" className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              readOnly
              className="outline outline-2 outline-purple-200 w-4/5 flex-1 pl-[1px]"
              value={pw}
              placeholder="Select password range"
              ref={pwRef}
            />
            <button
              type="button"
              className="cursor-pointer bg-purple-300 hover:bg-purple-200 px-[2px] py-[0.75pxpx] border-2"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div>
            <input
              type="range"
              min={8}
              max={20}
              value={pwLength}
              onChange={(e) => setPwLength(e.target.value)}
            />
            <label htmlFor="number">{pwLength}</label>
          </div>
          <div>
            <input
              type="checkbox"
              id={letterId}
              value={letterAllowed}
              onChange={() => setLetterAllowed((prev) => !prev)}
            />
            <label htmlFor={letterId}> Letters allowed</label>
          </div>
          <div>
            <input
              type="checkbox"
              id={numId}
              value={numAllowed}
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor={numId}> Number allowed</label>
          </div>
          <div>
            <input
              type="checkbox"
              id={charId}
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor={charId}> Character allowed</label>
          </div>
          <div></div>
        </form>
      </div>
    </>
  );
};

export default PasswordCreator;
