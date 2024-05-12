import React from 'react';

const TeamMemberCard = ({ name, position, description }: any) => {
    return (
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-gray-600 text-sm mb-2">{position}</p>
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-12 px-4">
                <div className="max-w-3xl mx-auto">
                    <p className="text-justify mb-6">
                        At <span className="font-bold">Medi Quest</span>, we are dedicated to revolutionizing the medical supply chain industry. Our mission is to provide a seamless and efficient platform that connects healthcare providers with the essential medical supplies they need to save lives and improve patient care.
                    </p>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Our Vision</h2>
                        <p className="text-justify">
                            We envision a future where healthcare facilities can easily access a comprehensive range of medical supplies at competitive prices, ensuring uninterrupted delivery of care to patients worldwide.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Our Mission</h2>
                        <ul className="list-inside list-disc ml-6">
                            <li>Simplify the procurement process for healthcare providers by offering a user-friendly platform.</li>
                            <li>Ensure the availability of high-quality medical supplies from trusted suppliers.</li>
                            <li>Foster transparency and trust within the medical supply chain ecosystem.</li>
                            <li>Empower healthcare professionals to focus on what matters most: patient care.</li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4">Our Values</h2>
                        <ul className="list-inside list-disc ml-6">
                            <li><span className="font-bold tracking-wide">Integrity:</span> We uphold the highest ethical standards in all our interactions, fostering trust and credibility.</li>
                            <li><span className="font-bold tracking-wide">Innovation:</span> We continuously strive to innovate and improve our platform to meet the evolving needs of our users.</li>
                            <li><span className="font-bold tracking-wide">Collaboration:</span> We believe in the power of collaboration and partnerships to drive positive change in the healthcare industry.</li>
                            <li><span className="font-bold tracking-wide">Customer-Centricity:</span> We are committed to delivering exceptional value and service to our customers, putting their needs first in everything we do.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-center mb-8">Meet the Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <TeamMemberCard 
                                name="John Doe"
                                position="Founder & CEO"
                                description="John is an experienced entrepreneur with a passion for improving healthcare delivery."
                            />
                            <TeamMemberCard 
                                name="Jane Smith"
                                position="CTO"
                                description="Jane is a technology enthusiast who loves building innovative solutions."
                            />
                            <TeamMemberCard 
                                name="Alex Johnson"
                                position="Lead Developer"
                                description="Alex is a skilled developer with expertise in web development and UX design."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;