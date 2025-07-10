import Link from "next/link";

export default function Page() {
  return (
    <div className="px-4 py-8 mx-auto bg-white">
      <div className="max-w-screen-md mt-10 mx-auto flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold my-6 text-center">
          Hi, glad to see you here
        </h1>
        <div className="relative w-[200px] h-[200px] rounded-[50%] overflow-hidden">
          <img
            className="w-[400px] aspect-square object-contain absolute scale-[3.5]"
            width={200}
            height={200}
            src="/profile.jpg"
            alt="Profile Picture"
          />
        </div>
      </div>
    </div>
  );
}
