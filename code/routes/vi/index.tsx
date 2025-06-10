import { Head } from "$fresh/runtime.ts";

export default function ViHomePage() {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>

      <div class="px-4 py-8 mx-auto bg-white">
        <div class="max-w-screen-md mt-10 mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold my-6 text-center">
            Chào mừng các bạn
          </h1>

          <div class="relative w-[200px] h-[200px] rounded-[50%] overflow-hidden">
            <img
              class="w-[400px] aspect-square object-contain absolute scale-[3.5]"
              width={200}
              height={200}
              src="/profile.jpg"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </>
  )
}