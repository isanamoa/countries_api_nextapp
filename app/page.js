'use client'
import React from "react";
import HomePage from "./countries/page";
import Nav from "@/components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <HomePage></HomePage>
    </>
  );
};

export default Home;