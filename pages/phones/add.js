import React, { useState } from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Add = () => {
  const phonesCollectionRef = collection(db, "phones");

  const addPhone = async () => {
    await addDoc(phonesCollectionRef, {
      merk: phone.merk,
      warna: phone.warna,
      chip: phone.chip,
      harga: Number(phone.harga),
      kapasitas: Number(phone.kapasitas),
      keterangan: phone.keterangan,
    });
  };

  const initializePhone = {
    merk: "",
    warna: "",
    chip: "",
    harga: 0,
    kapasitas: 0,
    keterangan: "",
  };
  const [phone, setPhone] = useState(initializePhone);

  const handleInput = (e) => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPhone();
    setPhone(initializePhone);
  };

  return (
    <div className="h-full flex justify-center">
      <div className="w-8/12 bg-slate-50 my-10 p-10 rounded-md shadow-lg">
        <div className="border boorder-2 h-full rounded-md shadow-md p">
          <div className="w-full py-4 text-center border border-b-2 shadow-sm bg-teal-400 text-white font-semibold">
            Masukkan Merk Hp
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className=" p-3">
              <Input
                label={"Merk"}
                name="merk"
                value={phone.merk}
                handleInput={handleInput}
              />
            </div>
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 px-3 py-1">
              <Input
                label={"Warna"}
                name="warna"
                value={phone.warna}
                handleInput={handleInput}
              />
              <Input
                label={"Chip"}
                name="chip"
                value={phone.chip}
                handleInput={handleInput}
              />
              <Input
                label={"Harga"}
                name="harga"
                value={phone.harga}
                handleInput={handleInput}
              />
              <Input
                label={"Kapasitas"}
                name="kapasitas"
                value={phone.kapasitas}
                handleInput={handleInput}
              />
            </div>
            <div className=" p-3">
              <TextArea
                label={"Keterangan"}
                value={phone.keterangan}
                handleInput={handleInput}
                name={"keterangan"}
              />
              <div className="flex justify-end mt-5">
                <button className="px-3 py-2 bg-sky-500 text-white rounded-md shadow-sm">
                  Submit
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Add;
