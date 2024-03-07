import { useState, useCallback, useEffect, useRef } from "react";

// Card - learning Props
export const Card = ({
  username = "username",
  country = "Libya",
  profileImg,
}) => (
  <>
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img
        className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
        src={profileImg}
        alt=""
        width="384"
        height="512"
      />
      <div className="pt-6 md:p-8  text-white text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-lg font-medium">
            `Tailwind CSS is the only framework that I've seen scale on large
            teams. It's easy to customize, adapts to any design, and the build
            size is tiny.`
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{username}</div>
          <div className="text-slate-700 dark:text-slate-500">{country}</div>
        </figcaption>
      </div>
    </figure>
  </>
);

// Color changer app - learning states
export const BgColorChanger = () => {
  const [color, setColor] = useState("olive");
  // the function changeColor works but not neccessary
  // function changeColor(color){
  //     setColor(color)
  // }
  return (
    <>
      <p className="">Learn State - Color changer app</p>
      <div
        className="relative h-32 w-screen flex justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="absolute bottom-4 p-2 bg-white rounded-xl flex gap-4">
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-300 px-4 rounded"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-purple-500 px-4 rounded"
          >
            Purple
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-500 px-4 rounded"
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
};

export const PasswordGenerator = () => {
  // const [letters, setLetters] = useState("uuy");
  const [charLength, setCharLength] = useState(8);
  const [addNumber, setAddNumber] = useState(false);
  const [addChar, setAddChar] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  // function handleRange(prevPw) {
  //   setPassword(prevPw);
  // }
  // let numChecked = document.getElementById("number").value;
  // console.log(numChecked);
  // let arrletter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  // ""
  // );
  /*
  const rand = function () {
    let randomNum = Math.floor(Math.random() * arrletter.length);
    let char = arrletter[randomNum];
    // console.log(char);
    return char;
  };
  
  let npw = [];
  function handleRange(rand) {
    let rangeValue = document.getElementById("range").value;
    // console.log(rangeValue);
    for (let i = 1; i <= rangeValue; i++) {
      npw.push(rand());
    }
    npw = npw.join("");
    console.log(npw);
    setPassword(npw);
  }
  console.log(addNumber);
  */

  let generatePassword = useCallback(() => {
    // first;
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(addNumber);
    if (addNumber) {
      str = str + "1234567890";
    }
    if (addChar) {
      str = str + "!@#$%^&*()_+";
    }

    // generate random password
    // pass = gerated password

    for (let i = 1; i < charLength; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [charLength, addNumber, addChar]);

  useEffect(() => {
    generatePassword(addChar, addNumber);
  }, [charLength, addNumber, addChar]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <>
      <p>Password Generator</p>
      <div className="inline-flex border">
        <input
          type="text"
          id=""
          value={password}
          readOnly
          placeholder="password"
          ref={passwordRef}
        />
        <button
          className="bg-blue-700 outline-none text-whitepx-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>

      <div>
        <div className="inline-flex gap-12 border">
          <input
            type="range"
            min={8}
            max={20}
            id="range"
            value={charLength}
            onChange={(e) => {
              setCharLength(e.target.value);
            }}
          />
          <label>Length: {charLength}</label>

          <div>
            <label htmlFor="number">Add number</label>
            <input
              type="checkbox"
              id="number"
              className=""
              value={addNumber}
              defaultChecked={addNumber}
              onChange={() => {
                setAddNumber((prev) => !prev);
              }}
            />
          </div>
          <div>
            <label htmlFor="char">Add Charcters</label>
            <input
              type="checkbox"
              id="char"
              className=""
              defaultChecked={addChar}
              onChange={() => {
                setAddChar((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
