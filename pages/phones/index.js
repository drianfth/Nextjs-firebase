import React from "react";
import Head from "next/head";
import Card from "../../components/Card";

const index = () => {
  return (
    <>
      <Head>
        <title> Phone </title>
      </Head>
      <div className="flex justify-center ">
        <div className=" w-11/12 grid grid-cols-3 gap-20 p-3 mt-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

        </div>
      </div>
    </>
  );
};

export default index;
