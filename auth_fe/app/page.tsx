import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "./api/auth/[...nextauth]/options";

const page = async () => {
  const session = await getServerSession(options);

  console.log(session);
  return (
    <div className="p-4">
      <div>This is the General Screen: {session?.user?.name}</div>
      <div className="mt-10" />
      {session ? (
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

export default page;
