export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-white">
      <div class="max-w-screen-md mt-10 mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold my-6 text-center">
          Hi, glad to see you here!
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

        <div class="mt-8 text-lg text-gray-700 space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </div>
    </div>
  );
}
