import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Wrapper = () => {
  const data: any = useSession();

  console.log("reading: data", data);
  return (
    <div>
      <div className="p-4">
        This is the Private Screen: {data?.data?.user?.name}{" "}
      </div>
      <div className="mt-10" />
      {data ? (
        <Link
          href="api/auth/signout"
          className="py-3 px-8 rounded-md text-white bg-red-500"
        >
          Sign Out
        </Link>
      ) : (
        <Link
          href="api/auth/signin"
          className="py-3 px-8 rounded-md text-white bg-blue-950"
        >
          Sign In
        </Link>
      )}

      <Link
        href="/private"
        className="py-3 mx-6 px-8 rounded-md text-white bg-purple-500"
      >
        Private
      </Link>
    </div>
  );
};

export default Wrapper;
