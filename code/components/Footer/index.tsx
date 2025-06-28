import { FaLinkedin, FaGithub, FaYoutube } from "@preact-icons/fa6"

export default function Footer() {
  return (
    <footer class="bg-[#fce8c5] text-black py-4 fixed grid grid-cols-2 bottom-0 w-full px-4">
      <div class="flex">
        <a class="mr-3" href="https://www.upwork.com/freelancers/~01890307fafcc93abc" target="_blank" rel="noopener noreferrer">
          <svg class="w-5 h-5 hover:text-green-500 transition-colors" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.543-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
          </svg>
        </a>
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