import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

function PageNotFound404() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl font-dm">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl font-dm">Uh-oh!</p>

        <p className="mt-4 mb-6 text-gray-500 font-nunito">We can&apos;t find that page.</p>

        <Link to="/">
          <Button title="Go Back Home" bgColor="bg-primary" icon="ri-home-line"/>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound404