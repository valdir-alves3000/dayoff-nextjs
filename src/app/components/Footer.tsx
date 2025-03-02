import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full z-10 bg-white border-t border-gray-200 py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="min-h-16 flex flex-col items-center justify-center md:flex-row md:justify-between">
                    <span className="text-sm text-gray-600 mb-3 md:mb-0">
                        Copyright ©{" "}
                        <a
                            href="https://github.com/valdir-alves3000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        >
                            Valdir Alves
                        </a>{" "}
                        {new Date().getFullYear()}
                    </span>

                    <div className="flex items-center space-x-5">
                        <a
                            href="https://portfolio-valdir-alves3000.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                            aria-label="Website"
                        >
                            <FaGlobe className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/valdir-alves3000"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-gray-900 transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <FaGithub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/valdir-silva-alves"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};