export default function Options() {
  return (
    <div className="max-w-sm mx-auto mt-52  ">
      {/* <div className="  bg-black  border-gray-200 rounded-lg shadow">
        <a href="/account/accountdetail">
          <h5 className="mb-14 text-2xl border  w-full  font-bold tracking-tight text-white dark:text-black">
            Password Update
          </h5>
        </a>
        <a href="#">
          <h5 className="mb-7 border w-full text-2xl font-bold tracking-tight text-white dark:text-black">
            FAQ
          </h5>
        </a>
      </div> */}
      <div className="rounded-lg shadow border-grey-200 p-8 ">
        <ul role="list" className="divide-y divide-white">
          <li className="py-4 ">
            <a href="/account/accountdetail">
              <h3 className="text-sm font-medium text-white p-1 truncate hover:bg-white hover:text-black hover:rounded-lg hover:w-36 hover:p-1">
                Password Update
              </h3>
            </a>
          </li>
          <li className="py-4  ">
            <a href="/account/questions" className="mt-3">
              <h3 className="text-sm font-medium p-1 text-white truncate  hover:bg-white hover:text-black hover:rounded-lg hover:w-10 hover:p-1">
                FAQ{" "}
              </h3>
            </a>
          </li>
        </ul>
      </div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Log-out
      </button>
    </div>
  );
}
