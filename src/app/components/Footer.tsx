import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-200 p-4 flex justify-center">
            <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
                <span className="text-gray-500">
                    Copyright ©{" "}
                    <a
                        href="https://github.com/valdir-alves3000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500"
                    >
                        Valdir Alves
                    </a>{" "}
                    {new Date().getFullYear()}
                </span>

                <div className="flex gap-4">                                
                <a
                        href="https://portfolio-valdir-alves3000.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500"
                    >
                        <FaGlobe className="w-6 h-6" />
                    </a>        
                    <a
                        href="https://github.com/valdir-alves3000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-900"
                    >
                        <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/valdir-silva-alves"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500"
                    >
                        <FaLinkedin className="w-6 h-6" />
                    </a>                    
                </div>
            </div>
        </footer>
    );
};