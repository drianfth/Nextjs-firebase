import React, { useState } from "react";
import Head from "next/head";
import Card from "../../components/Card";
import { db } from "../../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/outline";

const phonesCollectionRef = collection(db, "phones");
// export const getStaticProps = async () => {
//   const res = await getDocs(phonesCollectionRef);
//   const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

//   return {
//     props: { data },
//   };
// };

export const getServerSideProps = async () => {
  const res = await getDocs(phonesCollectionRef);
  const data = res.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return {
    props: { data },
  };
};

const Phones = ({ data }) => {
  const [search, setSearch] = useState("");
  const getFilteredItems = (data, search) => {
    if (!search) return data;
    return data.filter((phone) =>
      phone.merk.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredItems = getFilteredItems(data, search);
  return (
    <>
      <Head>
        <title> Phone </title>
      </Head>
      <div className="flex flex-col items-center">
        <div className=" w-11/12 p-3 mt-10">
          <div className="flex gap-x-5">
            <Link href="/phones/add">
              <div className="mb-5 hover:cursor-pointer bg-teal-500 text-slate-50 w-1/12 text-center py-2 rounded-md">
                Add
              </div>
            </Link>
            <div className="px-2 py-1 border-2 border-gray-200 rounded-md bg-white focus-within:border-sky-400 h-10">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent focus:outline-none placeholder:italic placeholder:text-sm "
                placeholder={`Search`}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-20">
            {filteredItems.map((phone) => (
              <Card key={phone.id} phone={phone} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Phones;
