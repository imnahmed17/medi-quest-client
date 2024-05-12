import SectionTitle from '@/components/ui/SectionTitle';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials = () => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    };

    const testimonials = [
        {
            name: "Dr. Emily Johnson",
            image: "https://i.ibb.co/XZmZ0GY/72.png",
            profession: "General Practitioner",
            comment: "Medi Quest has revolutionized the way I order medical supplies for my clinic. The platform is user-friendly, and the wide range of products ensures I can find everything I need in one place. The delivery is always prompt, making my job much more efficient.",
            rating: 5
        },
        {
            name: "Nurse Michael Smith",
            image: "https://i.ibb.co/mSd1t4J/64.png",
            profession: "Registered Nurse",
            comment: "As a nurse, time management is crucial. With Medi Quest, I can easily browse through various medical supplies and place orders quickly. The platform's interface is intuitive, and their customer service is exceptional. Highly recommended!",
            rating: 5
        },
        {
            name: "Dr. Sarah Patel",
            image: "https://i.ibb.co/HPKy4M5/pngtree-indian-lady-doctor-png-i.jpg",
            profession: "Surgeon",
            comment: "I've been using Medi Quest for sourcing surgical equipment for my operating room, and I'm thoroughly impressed. Not only do they offer a comprehensive selection of high-quality products, but their competitive pricing and reliable delivery make them my go-to platform for all my surgical supply needs.",
            rating: 5
        },
        {
            name: "Pharmacist Alex Thompson",
            image: "https://i.ibb.co/mzbf5CK/OIP.jpg",
            profession: "Pharmacy Owner",
            comment: "Medi Quest has simplified the process of managing my pharmacy's inventory. With their easy-to-use platform, I can track stock levels, reorder medications, and manage prescriptions seamlessly. The efficiency and reliability of their service have been instrumental in streamlining my business operations.",
            rating: 5
        },
        {
            name: "Dr. Mohammed Khan",
            image: "https://i.ibb.co/9nkz9Bk/a3631400b21ad26ca1caad131ae5daa7.jpg",
            profession: "Pediatrician",
            comment: "Medi Quest understands the unique needs of healthcare professionals. Their platform offers a diverse range of pediatric medical supplies, ensuring I can provide the best care for my young patients. The convenience of ordering online and the prompt delivery have made my practice more efficient.",
            rating: 5
        },
        {
            name: "Samantha Lee",
            image: "https://i.ibb.co/KLbkPBs/desktop-wallpaper-png-doctor-fem.jpg",
            profession: "Hospital Administrator",
            comment: "As a hospital administrator, I rely on efficient supply chain management to ensure the smooth operation of our facility. Medi Quest has been a game-changer for us, providing a centralized platform to streamline procurement processes. Their dedication to customer satisfaction is evident in every interaction, making them an invaluable partner for our hospital.",
            rating: 5
        }
    ];

    return (
        <div className='mt-20'>
            <SectionTitle title='Testimonials' />
            <div className='mt-4'>
                <Slider {...settings}>
                    {
                        testimonials.map((review, index) => <div key={index} className="h-[450px] overflow-hidden shadow rounded-lg">
                            <div className="px-4 py-5 sm:p-6">
                                <div className="flex-shrink-0">
                                    <img className="h-12 w-12 rounded-full" src={review.image} alt={review.name} />
                                </div>
                                <div className="mt-4">
                                    <h3 className="text-lg leading-6 font-medium">{review.name}</h3>
                                    <p className="mt-2 text-base leading-6">{review.profession} <br /> Rating: {review.rating}</p>
                                </div>
                                <div className="mt-5">
                                    <p className="text-base leading-6">{review.comment}</p>
                                </div>
                            </div>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Testimonials;