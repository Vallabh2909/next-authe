import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex flex-row min-h-screen h-">
        <div className="flex flex-col h-866x">
          <div className="w-1/2 h-433px flex items-center justify-start min-h-screen">
            <h1 className="text-6xl p-10">Hello Guys I am Vallabh!</h1>
          </div>
          <div className="w-1/2 h-433px flex items-center justify-center">
            <h1 className="text-3xl">Contact me</h1>
          </div>
        </div>
        <div className="w-1/2 h-3/4 flex items-center justify-center min-h-screen">
          <Image src="/home.jpg" width={960} height={1000} alt="home" />
        </div>
      </div>
    </div>
  );
}
