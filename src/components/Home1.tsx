"use client";
import { useState } from "react";

export default function Add() {
  const [name, SetName] = useState("");
  return (
    <div>
      <input
        placeholder="enter your name"
        onChange={(e) => {
          SetName(e.target.value);
        }}
      ></input>
      <p>hello</p>
      <button
        onClick={() => {
          console.log(name);
        }}
      >
        Button
      </button>
    </div>
  );
}
