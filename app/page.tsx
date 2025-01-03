import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-20">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-7xl font-bold">
          Welcome to{" "}
          <span className="text-7xl text-blue-500">Track Treasure</span>
        </h1>
        <p className="mt-4 text-xl">
          Effortlessly Monitor Your Budget, Master Your{" "}
          <span className="text-yellow-500">Finances!</span>
        </p>
        <div className="mt-8 text-center">
          <p className="mb-4 text-lg">Sign in to start tracking your expense</p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
            <Link href="/sign-in">Sign-In</Link>
          </button>
        </div>
        <p className="mt-4 text-md">
          Don't Have an Accont{" "}
          <span className="text-blue-500">
            <Link href="/sign-up">Sign-Up</Link>
          </span>
        </p>
      </div>
    </div>
  );
}
