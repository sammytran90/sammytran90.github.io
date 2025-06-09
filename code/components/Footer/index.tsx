import { FaLinkedin, FaGithub, FaYoutube } from "@preact-icons/fa6"

export function Footer() {
  return (
    <footer class="bg-gray-800 text-white py-4 fixed grid grid-cols-2 bottom-0 w-full px-4">
      <div class="flex">
        <a class="mr-3" href="https://www.linkedin.com/in/anh-trung-tran/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin class="hover:text-blue-500 transition-colors" />
        </a>
        <a class="mr-3" href="https://github.com/sammytran90" target="_blank" rel="noopener noreferrer">
          <FaGithub class="hover:text-gray-600 transition-colors" />
        </a>
        <a class="mr-3" href="https://www.youtube.com/@trungtrananh7878" target="_blank" rel="noopener noreferrer">
          <FaYoutube class="hover:text-red-600 transition-colors" />
        </a>
      </div>
      <div class="flex justify-end">
        <p>Made with <a href="https://fresh.deno.dev/" target="_blank" rel="noopener noreferrer">🍋</a> and <a href="https://deno.com/" target="_blank" rel="noopener noreferrer">🦕</a></p>
      </div>
    </footer>
  )
}