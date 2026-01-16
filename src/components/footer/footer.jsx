function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-gray-500">

        {/* Left */}
        <p>
          © {new Date().getFullYear()} Student Manager System
        </p>

        {/* Right */}
        <div className="flex items-center gap-4">
          <span className="hover:text-gray-700 cursor-pointer">
            Privacy
          </span>
          <span className="hover:text-gray-700 cursor-pointer">
            Terms
          </span>
          <span className="hover:text-gray-700 cursor-pointer">
            Support
          </span>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
