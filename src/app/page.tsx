import Login from "./login/page";
import Shop from "./shop/page";

export default function Page() {
  return (
    <div className="text-white  flex items-center justify-center flex-wrap">
      <div>
        <Login />
      </div>
    </div>
  );
}
