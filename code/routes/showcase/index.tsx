import { Head } from "$fresh/runtime.ts";

const projects = [
  {
    title: "Project A",
    description: "Description of Project A",
    link: "https://example.com/project-a",
  },
  {
    title: "Project B",
    description: "Description of Project B",
    link: "https://example.com/project-b",
  },
  {
    title: "Project C",
    description: "Description of Project C",
    link: "https://example.com/project-c",
  },
];

export default function Showcase() {
  return (
    <>
      <Head>
        <title>Portfolio Showcase</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#f3f4f6]">
        <div class="max-w-screen-md mx-auto">
          <h1 class="text-4xl font-bold mb-8">Portfolio Projects</h1>
          <ul class="list-disc list-inside">
            {projects.map((project) => (
              <li key={project.title} class="mb-4">
                <h2 class="text-2xl font-semibold">{project.title}</h2>
                <p class="text-gray-700">{project.description}</p>
                <a href={project.link} target="_blank" class="text-blue-500 hover:underline">
                  View Project
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
