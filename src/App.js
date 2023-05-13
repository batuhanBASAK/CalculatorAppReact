import { useState } from "react";

function App() {
  const [inputContent, setInputContent] = useState("");
  const [outputContent, setOutputContent] = useState("");

  const inputBoxStyle = (outputContent === "") ? "text-xl text-right text-white" : "text-sm text-stone-200 text-right";


  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-fuchsia-600 overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-7 gap-4 p-6 bg-sky-900 shadow-lg shadow-sky-900 border border-sky-900 rounded-lg w-72">
        {/* Input & Output screen */}
        <div className="row-span-2 col-span-4 text-white bg-black px-4 font-sans font-bold overflow-hidden w-full min-h-[5rem]">
          {/* Input screen */}
          <div className={inputBoxStyle}>
            {inputContent}
          </div>
          <div className="text-right text-xl">
            {outputContent}
          </div>
        </div>

        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent === "")
              setInputContent((old) => old + "(");
            else{
              setInputContent("(");
              setOutputContent("");
            }
          }}
        >
          (
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent === "")
              setInputContent((old) => old + ")");
            else{
              setOutputContent("");
              setInputContent("(");
            }
          }}
        >
          )
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {setInputContent(""); setOutputContent("")}}
        >
          AC
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }else{
              setInputContent((old) => old.slice(0, -1));
            }
          }}
        >
          DE
        </button>

        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "7");
          }}
        >
          7
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "8");
          }}
        >
          8
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "9");
          }}
        >
          9
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent(outputContent);
              setOutputContent("");
            }
            setInputContent((old) => old + "/");
          }}
        >
          /
        </button>

        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "4");
          }}
        >
          4
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "5");
          }}
        >
          5
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "6");
          }}
        >
          6
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent(outputContent);
              setOutputContent("");
            }
            setInputContent((old) => old + "*");
          }}
        >
          *
        </button>

        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "1");
          }}
        >
          1
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "2");
          }}
        >
          2
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "3");
          }}
        >
          3
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent(outputContent);
              setOutputContent("");
            }
            setInputContent((old) => old + "-");
          }}
        >
          -
        </button>

        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + "0");
          }}
        >
          0
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent("");
              setOutputContent("");
            }
            setInputContent((old) => old + ".");
          }}
        >
          .
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            if (outputContent !== ""){
              setInputContent(outputContent);
              setOutputContent("");
            }
            setInputContent((old) => old + "+");
          }}
        >
          +
        </button>
        <button
          className="p-2 rounded-md font-sans font-semibold text-base md:text-lg cursor-pointer bg-white hover:bg-slate-300 transition-all duration-100 ease-in-out"
          onClick={() => {
            setOutputContent(eval(inputContent));
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
