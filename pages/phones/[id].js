import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import {
  collection,
  getDocs,
  doc,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useRouter } from "next/router";

// export const getStaticPaths = async () => {
//   const phonesCollectionRef = collection(db, "phones");
//   const res = await getDocs(phonesCollectionRef);
//   const data = res.docs.map((doc) => ({ id: doc.id }));
//   const paths = data.map((phone) => {
//     return { params: { id: phone.id } };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const phoneRef = doc(db, "phones", context.params.id);
//   const res = await getDoc(phoneRef);
//   const data = { ...res.data(), id: res.id };

//   return {
//     props: { data },
//   };
// };

export const getServerSideProps = async (context) => {
  const { id } = context.query;
  const phoneRef = doc(db, "phones", id);
  const res = await getDoc(phoneRef);
  const data = { ...res.data(), id: res.id };

  return {
    props: { data },
  };
};

const Detail = ({ data }) => {
  const router = useRouter();
  // useEffect(() => {
  //   router.reload();
  // }, []);
  const handleDelete = async (id) => {
    const phoneDoc = doc(db, "phones", id);
    await deleteDoc(phoneDoc);
    router.push("/phones/");
  };

  return (
    <div className="h-full flex justify-center">
      <div className="w-7/12 bg-slate-50 my-10 p-10 rounded-md shadow-lg">
        <button
          className="px-3 py-2 bg-yellow-400 text-white rounded-md mb-2"
          onClick={() => router.push("/phones/update/" + data.id)}
        >
          Update
        </button>
        <button
          className="px-3 py-2 bg-sky-400 text-white rounded-md mb-2 ml-1"
          onClick={() => router.reload()}
        >
          reload
        </button>
        <button
          className="px-3 py-2 bg-rose-600 text-white rounded-md mb-2 ml-1"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </button>
        <div className=" flex justify-center">
          <Image
            src="/images/iphone12.jpg"
            width={630}
            height={460}
            className="rounded-md mx-auto"
            alt="gambar"
          />
        </div>
        <h1 className="font-semibold text-3xl text-gray-800 text-center mt-4">
          {data.merk}
        </h1>
        <div className="">
          <p className="text-lg">
            <span className="font-semibold text-gray-700-600">Warna :</span>{" "}
            {data.warna}
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700-600">Kapasitas :</span>{" "}
            {data.kapasitas} GB
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700-600">Chip :</span> Chip
            {data.chip}
          </p>
          <p className="mt-5">{data.keterangan}</p>
        </div>
        <div className="mt-3 flex justify-end">
          <Link href="/phones">
            <div className="bg-teal-500 p-2 w-1/6 rounded-md hover:cursor-pointer">
              <div className="text-center text-white flex gap-x-3">
                <ArrowLeftIcon className="h-6" /> <span>Back</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
