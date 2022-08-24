import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ phone }) => {
  return (
    <div className="p-5 bg-gray-50 flex flex-col justify-center rounded-md shadow-md">
      <Image src="/images/iphone12.jpg" width={230} height={160} alt="gambar" />
      <h1 className="font-semibold text-lg text-gray-800 text-center mt-4">
        {phone.merk}
      </h1>
      <p className="line-clamp-3 mt-3">{phone.keterangan}</p>
      <div className="mt-3 flex justify-end">
        <Link href={"/phones/" + phone.id}>
          <div className="bg-teal-500 p-2 w-2/6 rounded-sm hover:cursor-pointer">
            <p className="text-center text-white ">Detail</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
