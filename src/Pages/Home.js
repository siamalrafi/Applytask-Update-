import React from 'react';

const Home = () => {
    return (
        <div>
            <section>
                <div className="bg-blue-200">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">
                            Get Start with Best features
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
                            MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas!</p>
                        <div className="flex flex-wrap justify-center">
                            <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Go To DashBoard</button>
                            <button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 btn-outline dark:text-gray-900">Learn more</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;