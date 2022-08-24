import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const Detail = () => {
  return (
    <div className=" h-full flex justify-center">
      <div className="w-7/12 bg-slate-50 my-10 p-10 rounded-md shadow-lg">
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
          Iphone 12
        </h1>
        <div className="">
          <p className="text-lg">
            <span className="font-semibold text-gray-700-600">Warna :</span>{" "}
            Biru
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700-600">Kapasitas :</span>{" "}
            128 GB
          </p>
          <p className="text-lg">
            <span className="font-semibold text-gray-700-600">Chip :</span> Chip
            A14 Bionic
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            impedit fuga cumque soluta distinctio in. Officiis error rem ipsum
            repellendus eos quos voluptatum? Dicta veniam magni totam omnis vel
            eligendi unde rem! Quos, alias commodi! Aliquam rerum ut, quas quo,
            illum perspiciatis laborum quaerat quae possimus ex omnis ab
            quisquam.
          </p>
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
