"use client";

export default function ButtonPress({ ProductID }: { ProductID: Number }) {
  return (
    <div className="mt-1">
      <button
        className="max-h-12 min-h-7  min-w-10   text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() => console.log(ProductID)}
      >
        Buy now
      </button>
    </div>
  );
}
