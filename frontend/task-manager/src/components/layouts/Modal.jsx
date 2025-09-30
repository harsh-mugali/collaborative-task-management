import React from "react";

const Modal = ({ children, isOpen, onClose, title }) => {
    if (!isOpen) return;

    return <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50">
        <div className="relative p-4 w-full max-w-2xl max-h-full">

            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">

                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {title}
                    </h3>

                    <button
                        type="button"
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:text-white cursor-pointer"
                        onClick={onClose}
                    >
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                            <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 33.406609 33.406615 41 24 41 C 14.593385 41 7 33.406609 7 24 C 7 14.593391 14.593385 7 24 7 z M 30.486328 15.978516 A 1.50015 1.50015 0 0 0 29.439453 16.439453 L 24 21.878906 L 18.560547 16.439453 A 1.50015 1.50015 0 0 0 17.484375 15.984375 A 1.50015 1.50015 0 0 0 16.439453 18.560547 L 21.878906 24 L 16.439453 29.439453 A 1.50015 1.50015 0 1 0 18.560547 31.560547 L 24 26.121094 L 29.439453 31.560547 A 1.50015 1.50015 0 1 0 31.560547 29.439453 L 26.121094 24 L 31.560547 18.560547 A 1.50015 1.50015 0 0 0 30.486328 15.978516 z"></path>
                        </svg>
                    </button>
                </div>

                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                    {children}
                </div>
            </div>
        </div>
    </div>
};
export default Modal;