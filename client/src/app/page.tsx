
"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Recruitment from "./(dashboard)/recruitment/page";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the Recruitment page when the Home component mounts
    router.push("/dashboard/recruitment");
  }, []);

  return null; // Since this component is only for redirecting, return null
};

export default Home;
