"use client";

import { useState } from "react";

export default function Questions() {
  const [question, Setquestion] = useState<string[]>([]);
  const [newquestion, setNewquestion] = useState<string>("");
  const addQuestion = () => {
    Setquestion([...question, newquestion]);
    setNewquestion("");
  };

  return (
    <div className="text-white">
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Sagittis tempor donec id vestibulum viverra. Neque condimentum
            primis orci at lacus amet bibendum.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Ex orci laoreet egestas sapien magna egestas scelerisque?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                nullam taciti at adipiscing est.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                odio?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                porttitor egestas tincidunt neque vehicula potenti.{" "}
              </p>
            </details>
            <div className="space-y-4">
              {question.map((question, index) => (
                <details key={index} className="w-full border rounded-lg">
                  <summary className="px-4 py-6 focus:outline-none focus-visible:ri">
                    {question}
                  </summary>
                  <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                    Contact admin
                  </p>
                </details>
              ))}
            </div>
            <div className="w-full border p-3 rounded-lg">
              <h1 className="mb-2 ">Ask your Question:</h1>
              <input
                className=" w-full text-white bg-black p-2"
                onChange={(e) => {
                  setNewquestion(e.target.value);
                }}
              ></input>
              <button
                className="border rounded-lg p-1 mt-3"
                onClick={() => {
                  addQuestion();
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
