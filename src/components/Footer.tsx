const Footer= () => {
  return (
    <footer className="mt-20 border-t border-slate-800 bg-slate-900/80 backdrop-blur text-zinc-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} Afzal Miah. Crafted with ❤️ and{' '}
          <span className="text-[#64ffda]">Next.js</span> - see the full source
          on{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="text-[#64ffda] transition-colors hover:underline font-semibold"
            href="https://github.com/affyzal/nextjs-app"
          >
            GitHub
          </a>
          .
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/affyzal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/afzalmiah/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#64ffda] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:affyzal@gmail.com"
            className="hover:text-[#64ffda] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;