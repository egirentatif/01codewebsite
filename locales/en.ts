const translations = {
  nav: {
    home: "Home",
    about: "About",
    products: "Products",
    contact: "Contact",
    faqs: "FAQs"
  },
  hero: {
    title: "Welcome to 01Code",
    description: "Experience innovative AI solutions for your business",
    subtitle: "Transform your digital presence with cutting-edge technology",
    cta: "Get Started"
  },
  about: {
    title: "About 01Code",
    description: "We are a team of innovators passionate about building the future of AI and creating solutions that drive progress.",
    cta: "Learn More About Our Mission"
  },
  features: {
    title: "Key Features",
    description: "Discover powerful AI tools to enhance your business"
  },
  pricing: {
    subscribe: "Subscribe Now",
    popular: "Most Popular",
    startFreeTrial: "Start Free Trial",
    title: "Pricing Plans",
    description: "Choose the perfect plan for your needs"
  },
  products: {
    title: "Our Innovative AI Products",
    subtitle: "Explore our suite of AI-powered solutions designed to tackle modern challenges and drive growth.",
    "01bot": {
      description: "An intelligent conversational AI assistant for seamless customer engagement."
    },
    "01shield": {
      description: "Advanced deepfake detection and real-time content verification."
    }
  },
  faqs: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our products and services.",
    general: {
      title: "General Questions",
      q1: {
        question: "What is 01Code?",
        answer: "01Code is a technology company specializing in innovative AI solutions for businesses, including conversational AI and deepfake detection."
      },
      q2: {
        question: "How can I get started?",
        answer: "You can start by exploring our products, checking our pricing plans, or contacting our sales team for a personalized demo."
      }
    },
    '01bot': {
      title: "About 01Bot",
      q1: {
        question: "What can 01Bot do?",
        answer: "01Bot is a powerful conversational AI that can handle customer service, answer queries, and automate conversations on your website or application."
      },
      q2: {
        question: "Is 01Bot customizable?",
        answer: "Yes, 01Bot is highly customizable. You can train it with your own data, define its personality, and integrate it with your existing systems."
      },
      q3: {
        question: "Which languages does 01Bot support?",
        answer: "01Bot supports multiple languages, including English and Indonesian. Support for more languages is continuously being added."
      }
    },
    '01shield': {
      title: "About 01Shield",
      q1: {
        question: "How does 01Shield work?",
        answer: "01Shield uses advanced deep learning models to analyze videos and images, detecting signs of digital manipulation and deepfakes with high accuracy."
      },
      q2: {
        question: "Can 01Shield be used in real-time?",
        answer: "Yes, 01Shield offers a real-time API that can be integrated into live streaming platforms or content upload workflows to detect deepfakes as they happen."
      },
      q3: {
        question: "What kind of media does 01Shield support?",
        answer: "01Shield supports various media formats, including common video files (MP4, MOV, AVI) and image files (JPG, PNG)."
      }
    }
  },
  p01bot: {
    title: "01Bot: Conversational AI",
    subtitle: "Your intelligent AI conversational assistant with advanced natural language processing.",
    featuresTitle: "Powerful Features for Seamless Conversations",
    features: {
      conversations: {
        title: "Natural Conversations",
        description: "Engage users with fluid, human-like dialogue that understands context and intent."
      },
      automation: {
        title: "Task Automation",
        description: "Automate repetitive tasks like appointment booking, lead qualification, and customer support."
      },
      integration: {
        title: "Seamless Integration",
        description: "Easily integrate with your existing CRM, helpdesk, and other business systems via our API."
      },
      analytics: {
        title: "Insightful Analytics",
        description: "Gain valuable insights from conversation data with our advanced analytics dashboard."
      },
      support: {
        title: "24/7 Support",
        description: "Provide round-the-clock assistance to your customers, improving satisfaction and loyalty."
      }
    },
    plans: {
      starter: {
        name: "Starter",
        description: "Perfect for small teams getting started with conversational AI",
        features: {
          chatbot: "1 AI Chatbot",
          flows: "Unlimited Conversation Flows",
          conversations: "1,000 Conversations/month",
          support: "Email Support"
        },
        ideal: "Startups & Small Businesses"
      },
      pro: {
        name: "Pro",
        description: "For growing businesses needing more power and customization",
        features: {
          everything: "Everything in Starter, plus:",
          customizable: "Customizable Bot Personality",
          conversations: "10,000 Conversations/month",
          integrations: "Advanced Integrations",
          support: "Priority Email & Chat Support"
        },
        ideal: "Growing Businesses & Agencies"
      },
      enterprise: {
        name: "Enterprise",
        description: "Custom solution for large-scale enterprise needs",
        features: {
          everything: "Everything in Pro, plus:",
          unlimited: "Unlimited Conversations",
          finetuning: "Custom Model Fine-tuning",
          manager: "Dedicated Account Manager",
          support: "24/7 Premium Support"
        },
        ideal: "Large Enterprises"
      }
    }
  },
  p01shield: {
    title: "01Shield: Deepfake Detection",
    subtitle: "Protect your brand and customers with military-grade deepfake detection and real-time content verification.",
    benefitsTitle: "Key Benefits of 01Shield",
    benefits: {
      trust: "Build Digital Trust",
      security: "Enhance Platform Security",
      compliance: "Ensure Regulatory Compliance",
      reputation: "Protect Brand Reputation",
      prevention: "Prevent Malicious Content"
    },
    featuresTitle: "Advanced Detection Capabilities",
    features: {
      detection: {
        title: "Multi-Layered Detection",
        description: "Utilizes a hybrid model of AI, computer vision, and forensic analysis to detect sophisticated deepfakes."
      },
      realtime: {
        title: "Real-Time Alerts",
        description: "Get instant notifications when manipulated media is detected on your platform."
      },
      protection: {
        title: "Proactive Protection",
        description: "Automatically flag or remove harmful content before it spreads widely."
      },
      analysis: {
        title: "In-Depth Analysis",
        description: "Receive detailed reports on detected fakes, including manipulation techniques and origin analysis."
      },
      verification: {
        title: "Content Verification API",
        description: "Integrate our powerful detection engine directly into your own applications and workflows."
      }
    },
    plans: {
      basic: {
        name: "Basic Protection",
        description: "Essential protection for small platforms and content creators.",
        features: {
          detection: "Core Deepfake Detection",
          dashboard: "Analytics Dashboard",
          analyses: "1,000 Analyses/month",
          reports: "Basic Reports",
          accuracy: "99.5% Accuracy"
        },
        ideal: "Individuals & Small Creators"
      },
      business: {
        name: "Business Security",
        description: "Comprehensive protection for businesses and online communities.",
        features: {
          everything: "Everything in Basic, plus:",
          analyses: "10,000 Analyses/month",
          api: "API Access",
          support: "Priority Support",
          monitoring: "Real-Time Monitoring",
          integration: "Basic Integrations"
        },
        ideal: "SMBs & Online Platforms"
      },
      enterprise: {
        name: "Enterprise Fortress",
        description: "Tailored, military-grade security for large-scale enterprise needs.",
        features: {
          everything: "Everything in Business, plus:",
          unlimited: "Unlimited Analyses",
          customization: "Custom Model Integration",
          manager: "Dedicated Success Manager",
          support: "24/7 Premium Support",
          compliance: "Compliance & Audit Logs",
          sla: "Uptime SLA"
        },
        ideal: "Large Enterprises & Governments"
      }
    }
  },
  contact: {
    title: "Get in Touch",
    description: "Ready to transform your business with AI? We'd love to hear from you. Reach out for business inquiries, product demos, or any questions about our solutions.",
    form: {
      title: "Send us a Message",
      description: "We'll get back to you within 24 hours",
      name: "Full Name",
      namePlaceholder: "Enter your full name",
      email: "Email Address",
      emailPlaceholder: "Enter your email address",
      subject: "Subject",
      subjectPlaceholder: "Enter your subject",
      message: "Message",
      messagePlaceholder: "Enter your message",
      send: "Send Message",
      sending: "Sending...",
      success: "Thank you for reaching out. Our team will contact you soon.",
      successTitle: "Message Sent Successfully!",
      sendAnother: "Send Another Message"
    },
    connect: {
      title: "Connect with Us",
      description: "Follow us on social media for updates and support",
      instagramDescription: "Latest updates & behind the scenes",
      telegramDescription: "Direct chat & quick support",
      whatsappDescription: "Business inquiries & consultation"
    },
    quickResponse: {
      title: "Quick Response",
      responseTime: "Usually respond within 2-4 hours",
      businessHours: "Available Monday - Friday, 9 AM - 6 PM",
      enterpriseSupport: "Enterprise support available 24/7"
    }
  }
};

export type Translation = typeof translations;
export default translations;
