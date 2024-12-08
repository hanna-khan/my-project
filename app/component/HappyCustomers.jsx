
const testimonials = [
    {
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from ShopCo. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        rating: 5,
    },
    {
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered ShopCo. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        rating: 5,
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
    },
    {
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon ShopCo. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
    },
];

const HappyCustomers = () => {
    //   const [currentIndex, setCurrentIndex] = useState(0);

    //   const handleNext = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    //   };

    //   const handlePrev = () => {
    //     setCurrentIndex(
    //       (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    //     );
    //   };

    return (
        <div className="py-12 bg-white">
            <h2 className="text-3xl font-bold text-center mb-8">OUR HAPPY CUSTOMERS</h2>
            <div className="relative max-w-8xl mx-auto">
                <div className="flex overflow-hidden">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`w-full p-6 transition-transform duration-500 opacity-100
              }`}
                        //   style={{
                        //     transform: `translateX(${(index - currentIndex) * 100}%)`,
                        //   }}
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="flex items-center mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            className="w-5 h-5 text-yellow-500"
                                        >
                                            <path d="M12 .587l3.668 7.431 8.211 1.196-5.939 5.784 1.4 8.166L12 18.897 4.66 23.164l1.4-8.166L.121 9.214l8.211-1.196L12 .587z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                <p className="text-lg text-gray-700 italic mb-4">{`"${testimonial.text}"`}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-400 focus:outline-none"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-400 focus:outline-none"
        >
          &gt;
        </button> */}
            </div>
        </div>
    );
};

export default HappyCustomers;
