
export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-white">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold my-6">Anh Trung Tran</h1>
        <img
          class="my-6 rounded-full"
          src="/profile.jpg"
          width="128"
          height="128"
          alt="Profile Picture"
        />
        <h2 class="text-2xl font-semibold my-4">About Me</h2>
        <p class="my-4 text-center">
          I am a software developer with a passion for creating web applications. I have experience in various technologies including JavaScript, TypeScript, and React.
        </p>
        <h2 class="text-2xl font-semibold my-4">Experience</h2>
        <ul class="list-disc list-inside my-4">
          <li>Software Developer at XYZ Company (2020 - Present)</li>
          <li>Frontend Developer at ABC Inc. (2018 - 2020)</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">Education</h2>
        <ul class="list-disc list-inside my-4">
          <li>Bachelor's Degree in Computer Science from University of Somewhere (2014 - 2018)</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">Skills</h2>
        <ul class="list-disc list-inside my-4">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
        <h2 class="text-2xl font-semibold my-4">Contact</h2>
        <p class="my-4 text-center">
          Email: john.doe@example.com
        </p>
      </div>
    </div>
  );
}
