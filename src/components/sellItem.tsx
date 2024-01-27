"use client";
import { ChangeEvent, useEffect, useState } from "react";
import Dropdown from "./ui/dropDown";

export default function Sellitems() {
  const [data, setData] = useState({});
  const Button1 = async () => {
    const dataObejct = {
      productName: productName,
      description: description,
      category: category,
      Image: image,
    };
    setData(dataObejct);
  };
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [rawimage, setRawImage] = useState("");
  const [image, setImage] = useState<string>("");

  const ImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const rawimage = e.target.files && e.target.files[0];
    if (rawimage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(rawimage);
    }
  };

  const handleSelection = (selectedValue: string) => {
    setCategory(selectedValue);
  };
  return (
    <div className="text-white border m-4 mt-20 p-5">
      <label className="mt-3">
        Product Name
        <input
          type="text"
          className="text-black rounded-md ml-2"
          onChange={(e: any) => {
            setProductName(e.target.value);
          }}
        ></input>
      </label>
      <div className="mt-6">
        <Dropdown onSelect={handleSelection} />
      </div>
      <main className="mt-6 flex flex-row">
        Description
        <textarea
          className="text-black rounded-md ml-2"
          onChange={(e: any) => {
            setDescription(e.target.value);
          }}
        ></textarea>
      </main>
      <article className="mt-7">
        <h6>Upload Product Files</h6>
        <input
          onChange={ImageUpload}
          type="file"
          accept="image/*"
          className="opacity-45 bg-black text-black rounded-r-sm "
        ></input>
      </article>
      <figure className="mt-10 flex border max-h-72 max-w-85">
        {/* retrun(

        ) */}
        <div className="border m-2  p-10 h-15  overflow-hidden">
          <img src={image} alt="image" className="h-32 w-32"></img>
        </div>
      </figure>
      <button
        className="text-black bg-white p-1  rounded-md "
        onClick={Button1}
      >
        button
      </button>
    </div>
  );
}
