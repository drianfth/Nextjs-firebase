import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> About </title>
      </Head>
      <div className="flex justify-center items-center h-full box-border">
        <div className="w-10/12  bg-teal-500 h-5/6 rounded-md text-center text-white shadow-md">
          <h1 className="font-semibold text-4xl mt-20"> About</h1>
          <div className="bg-gray-200 h-0.5 mx-auto w-5/6 mt-8"></div>
          <div className="px-28 mt-10 text-lg">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
              odio est beatae omnis reprehenderit necessitatibus quas, numquam
              debitis quo, cumque molestias dolores delectus dicta. Ullam
              similique hic odio, ab at nobis facilis ad distinctio aut, magni
              totam rem eos quo, officia magnam ex alias amet. Provident
              deleniti optio aliquid veritatis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
