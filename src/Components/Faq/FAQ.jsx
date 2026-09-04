import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const faqs = [
  {
    question: "What services does Corponizers provide?",
    answer: "Corponizers offers a wide range of professional services including IT training programs, recruitment and staffing solutions, and customized IT services. We help individuals build their tech skills through practical, hands-on training, while also supporting companies by connecting them with top talent and providing them with end-to-end IT solutions tailored to their specific business needs."
  },
  {
    question: "How can I get in touch with Corponizers?",
    answer: "Getting in touch with us is easy. You can call us directly at +91 7008681808 during our working hours or email us at info@corponizer.com. Additionally, you can visit our office located at Fortune Tower, A-Zone, 5th floor, Bhubaneswar-751012. We also encourage you to connect with us through our social media platforms for updates and quick responses."
  },
  {
    question: "Where is Corponizers located?",
    answer: "Our head office is located at Fortune Tower, A-Zone, 5th floor, Bhubaneswar-751012, Odisha, India. We operate from a state-of-the-art workspace that’s easily accessible. If you're planning to visit, you can find us on Google Maps and schedule a meeting in advance to ensure that our team is available to assist you in the best way possible."
  },
  {
    question: "Does Corponizers offer customized IT solutions?",
    answer: "Yes, we specialize in providing tailored IT solutions that align with the unique goals and challenges of your business. Whether it’s developing web applications, managing digital infrastructure, or implementing automation strategies, we collaborate with you to deliver scalable and efficient solutions that drive growth and innovation."
  },
  {
    question: "What industries does Corponizers serve?",
    answer: "Corponizers serves a diverse range of industries including information technology, education, finance, healthcare, and e-commerce. We have successfully partnered with startups, SMEs, and large enterprises to deliver both training and tech services that meet industry-specific requirements."
  },
  {
    question: " Do you provide certification after IT training?",
    answer: "Absolutely! Upon successful completion of our IT training programs, participants receive a certification that is recognized by industry professionals. These certifications enhance your portfolio and can significantly improve your chances of getting hired by top tech companies."
  },
  {
    question: "Can I join IT training programs without prior experience?",
    answer: "Yes, many of our training programs are beginner-friendly and designed to accommodate individuals with little to no prior experience. Our instructors guide you through the fundamentals, ensuring you build a strong foundation before moving on to more advanced topics."
  },
  {
    question: "What makes Corponizers different from other training providers?",
    answer: "Corponizers stands out due to our hands-on approach, real-time project training, and personalized mentorship. We focus not just on theory but also on practical implementation, preparing our trainees for real-world challenges. Our trainers are industry professionals who bring years of experience to the classroom."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked <span>Questions</span></h2>
          <p>Find answers to common questions about our services and process.</p>
        </div>

        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <ChevronDown 
                  className={`faq-icon ${activeIndex === index ? 'rotate' : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className="faq-answer-wrapper"
                style={{ 
                  maxHeight: activeIndex === index ? '200px' : '0px',
                  opacity: activeIndex === index ? 1 : 0
                }}
              >
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
