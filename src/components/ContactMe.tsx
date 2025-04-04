import { FormEvent, useState, useEffect, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // Form elements animation
            const formElements = formRef.current?.children;
            if (formElements) {
                gsap.from(formElements, {
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: "top 75%",
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out"
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div ref={sectionRef} id="contact" className="min-h-screen bg-gradient-to-r from-amber-50 to-amber-100 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div ref={headingRef} className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-amber-800 mb-4 font-[Underdog]">Get in Touch</h2>
                    <p className="text-amber-700">Have a question or want to work together? Send me a message!</p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-amber-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-md shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="Your name"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-amber-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-md shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                            placeholder="your.email@example.com"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-amber-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            className="mt-1 block w-full px-4 py-3 bg-amber-50 border border-amber-200 rounded-md shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 resize-none"
                            placeholder="Write your message here..."
                        />
                    </div>

                    <div className="flex flex-col items-center gap-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full sm:w-auto px-8 py-3 text-white rounded-md shadow-sm transition-all
                                ${isSubmitting
                                    ? 'bg-amber-400 cursor-not-allowed'
                                    : 'bg-amber-600 hover:bg-amber-700'}`}
                        >
                            <span className="flex items-center justify-center gap-2">
                                <FaPaperPlane className={`${isSubmitting ? 'animate-bounce' : ''}`} />
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </span>
                        </button>

                        {submitStatus === 'success' && (
                            <p className="text-green-600 text-sm mt-2">
                                Thank you! Your message has been sent successfully.
                            </p>
                        )}

                        {submitStatus === 'error' && (
                            <p className="text-red-600 text-sm mt-2">
                                Oops! Something went wrong. Please try again.
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;