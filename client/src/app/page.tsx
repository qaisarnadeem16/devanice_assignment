"use client"
import React, { useEffect } from "react";
import Recruitment from "./(dashboard)/recruitment/page";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Recruitment page when the Home component mounts
    router.push("/recruitment");
  }, []);
  return (
    <>
      <h2 className="text-xl p-5 ">Home Page</h2>
    </>
  );
};

export default Home;
