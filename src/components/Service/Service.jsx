import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./Service.css";

const Service = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    const animateServices = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      });
    };

    animateServices();
  }, [controls]);

  const industriesServed = [
    {
      icon: "📊",
      title: "Retail & E-commerce",
      description:
        "Innovative solutions for modern retail ecosystems, leveraging AI-driven personalization and seamless omnichannel experiences.",
      services: [
        "Customer Analytics",
        "Personalized Recommendations",
        "Inventory Optimization",
      ],
    },
    {
      icon: "🎓",
      title: "Education & E-learning",
      description:
        "Transformative digital learning platforms with adaptive learning technologies and comprehensive educational solutions.",
      services: ["Interactive Learning", "Skill Assessment", "Remote Training"],
    },
    {
      icon: "🚚",
      title: "Logistics & Distribution",
      description:
        "Advanced supply chain technologies integrating predictive analytics, real-time tracking, and intelligent routing systems.",
      services: [
        "Route Optimization",
        "Predictive Maintenance",
        "Inventory Management",
      ],
    },
    {
      icon: "👥",
      title: "Social Networking",
      description:
        "Intelligent platforms connecting users through sophisticated algorithms, ensuring meaningful and secure digital interactions.",
      services: [
        "User Matching",
        "Content Recommendation",
        "Community Management",
      ],
    },
    {
      icon: "💳",
      title: "Finance & Fintech",
      description:
        "Empowering businesses with secure digital payment solutions, blockchain integration, and financial analytics tools.",
      services: ["Fraud Detection", "Blockchain Solutions", "Risk Management"],
    },
    {
      icon: "🏥",
      title: "Healthcare & MedTech",
      description:
        "Revolutionizing patient care with AI-assisted diagnostics, telemedicine platforms, and personalized healthcare solutions.",
      services: [
        "Telemedicine",
        "Predictive Diagnostics",
        "Patient Data Management",
      ],
    },
    {
      icon: "🎮",
      title: "Gaming & Entertainment",
      description:
        "Crafting immersive experiences through cutting-edge gaming engines, VR/AR integration, and AI-driven content creation.",
      services: [
        "Game Development",
        "VR/AR Experiences",
        "AI Content Curation",
      ],
    },
    {
      icon: "🌿",
      title: "Sustainability & Environment",
      description:
        "Promoting sustainable practices with smart energy management, carbon footprint analysis, and eco-friendly technologies.",
      services: [
        "Energy Optimization",
        "Carbon Tracking",
        "Sustainable Tech Solutions",
      ],
    },
    {
      icon: "🏭",
      title: "Manufacturing & Industry",
      description:
        "Optimizing production processes with IoT, automation, and predictive maintenance to drive efficiency in manufacturing operations.",
      services: [
        "Smart Manufacturing",
        "Predictive Maintenance",
        "IoT Integration",
      ],
    },
  ];

  const offerings = [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Build state-of-the-art, responsive, and scalable websites tailored to meet your business needs. From custom designs to seamless integrations, we ensure an exceptional online experience.",
      route: "/web-development",
    },
    {
      icon: "📈",
      title: "Digital Marketing",
      description:
        "Enhance your online visibility with data-driven digital marketing strategies, including SEO, PPC, social media management, and targeted campaigns designed to maximize ROI.",
      route: "/digital-marketing",
    },
    {
      icon: "✍️",
      title: "Content Strategy",
      description:
        "Craft captivating and results-oriented content that engages your audience, boosts brand loyalty, and drives conversions. Let your brand voice stand out in a crowded digital space.",
      route: "/content-creation",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Design visually stunning and user-centric interfaces that prioritize intuitive navigation, ensuring a seamless and engaging user experience for every interaction.",
      route: "/ui-ux-design",
    },
    {
      icon: "🤖",
      title: "Automation",
      description:
        "Streamline workflows and boost productivity with intelligent automation solutions, reducing manual effort and delivering consistent, efficient results across your operations.",
      route: "/automation",
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description:
        "Leverage advanced analytics tools to transform raw data into actionable insights. Make informed decisions that drive growth, improve performance, and optimize your strategies.",
      route: "/data-analytics",
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description:
        "Protect your digital assets with cutting-edge security solutions. Safeguard sensitive data, detect threats in real-time, and ensure compliance with industry standards.",
      route: "/cybersecurity",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Design and implement scalable, reliable, and secure cloud-based infrastructures to support your growing business needs. Optimize performance and reduce operational costs.",
      route: "/cloud-solutions",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "Create high-performance, user-friendly mobile apps for iOS and Android. Deliver seamless experiences on mobile devices with custom features that cater to your business needs.",
      route: "/mobile-app-development",
    },
  ];

  const handleReadMore = (route) => {
    navigate(route);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="ser-container"
    >
      <div className="ser-content">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="ser-header"
        >
          <h2 className="ser-title">Industries We Serve</h2>
          <p className="ser-subtitle">
            Empowering Diverse Sectors with Cutting-Edge Technologies
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="ser-industries-grid"
        >
          {industriesServed.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="ser-industry-card"
              data-index={index}
            >
              <div className="ser-industry-card-inner">
                <div className="ser-industry-icon">{service.icon}</div>
                <div className="ser-industry-details">
                  <h3 className="ser-industry-title">{service.title}</h3>
                  {/* <p className="ser-industry-description">{service.description}</p> */}
                  <div className="ser-industry-services">
                    {service.services.map((serv, idx) => (
                      <span key={idx} className="ser-service-tag">
                        {serv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <br />
        <br />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="ser-header ser-services-header"
        >
          <h2 className="ser-title">Our Services</h2>
          <p className="ser-subtitle">
            Comprehensive Digital Transformation Solutions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="ser-offerings-grid"
        >
          {offerings.map((offer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="ser-offering-card"
              data-index={index}
            >
              <div className="ser-offering-card-inner">
                <div className="ser-offering-icon">{offer.icon}</div>
                <div className="ser-offering-details">
                  <h3 className="ser-offering-title">{offer.title}</h3>
                  <p className="ser-offering-description">
                    {offer.description}
                  </p>
                  <button
                    className="ser-explore-btn"
                    onClick={() => handleReadMore(offer.route)}
                  >
                    Explore
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Service;
