export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  features: string[];
  challenges: string[];
  benefits: string[];
  hasImage: boolean;
}

export const projects: Project[] = [
  {
    id: "giant-bd-erp",
    title: "Giant BD ERP",
    description: "Enterprise Resource Planning (ERP) system designed to manage business operations efficiently.",
    fullDescription: "The Giant BD ERP system was developed to manage and streamline the complete business operations of a footwear manufacturing company. In a footwear manufacturing business, multiple departments (production, planning, inventory, sales, etc.) need to work together. This system centralizes all departments, improves efficiency, reduces manual work, and ensures accurate data handling across the organization, solving problems like data inconsistency and tracking delays.",
    image: "/projects/giant-bd.png",
    github: "https://github.com/ridwanul-basit",
    demo: "https://bxone0001.pythonanywhere.com/",
    tags: ["Next.js", "Nest JS", "REST API", "PostgreSQL"],
    features: [
      "Product Management: Create and manage footwear products with colors, categories, and variations",
      "Order Management: Track orders from creation to delivery with real-time status monitoring",
      "Inventory Management: Track stock intake, raw materials, and finished goods to prevent shortages",
      "Planning Department: Handle production planning and generate material requisitions",
      "Production Tracking: Monitor manufacturing stages from raw material to finished product",
      "Reports & Dashboard: Real-time insights into sales, stock, and production for management",
      "Role-Based Access Control: Secure access levels for Admin, Manager, and Staff"
    ],
    challenges: [
      "Integrating multiple complex manufacturing departments into one cohesive system",
      "Ensuring real-time synchronization between production stages and inventory",
      "Designing a user-friendly interface for non-technical factory staff"
    ],
    benefits: [
      "Centralized data management across all departments",
      "Improved operational efficiency and coordination",
      "Better inventory control and stock accuracy",
      "Faster, data-driven decision making with real-time reports",
      "Significant reduction in manual work and human error"
    ],
    hasImage: true,
  },
  {
    id: "finger-flight",
    title: "Finger Flight",
    description: "Online Travel Agency (OTA) platform for managing flight bookings with a modern full-stack architecture.",
    fullDescription: "Finger Flight is a comprehensive Online Travel Agency platform developed to manage all operations of a travel agency in one centralized system. It handles the large volumes of bookings, customer data, and financial transactions that modern agencies deal with daily, solving problems like booking errors and slow customer service through automation and real-time updates.",
    image: "/projects/OTA-1.png",
    github: "https://github.com/ridwanul-basit",
    demo: "https://fingerflight.org/",
    tags: ["Next.js", "Laravel Api", "API Integration"],
    features: [
      "Flight Booking Management: Search, book, and manage status (pending, confirmed, canceled) with automated ticketing",
      "Passenger Management: Centralized database for passenger details, passport info, and travel history",
      "Booking Confirmation: Automated confirmation system with integrated invoice generation",
      "Accounts & Finance: Track payments, manage refunds, and generate detailed financial reports",
      "Support & Help Desk: Integrated system for handling customer queries and tracking support tickets",
      "Real-time Dashboard: Management overview of total bookings, revenue, and active customers",
      "Permission System: Role-based access for Admins, Agents, and Accountants to ensure security"
    ],
    challenges: [
      "Synchronizing real-time flight availability across multiple GDS providers",
      "Building a secure and reliable financial tracking system for complex travel transactions",
      "Designing an intuitive dashboard that summarizes massive amounts of booking data"
    ],
    benefits: [
      "Faster and significantly more accurate booking process",
      "Centralized data management for better organization",
      "Improved customer service efficiency and response times",
      "Better financial tracking and transparent reporting",
      "Secure and controlled access through role-based permissions"
    ],
    hasImage: true,
  },
  {
    id: "stc-360",
    title: "STC 360",
    description: "Full-stack web application with MVC architecture. Implemented authentication and RBAC.",
    fullDescription: "STC 360 is a robust business management platform built with an MVC architecture. It provides a 360-degree view of business operations, focusing on user management, data consistency, and secure access to sensitive information.",
    image: "/projects/STC360.png",
    github: "https://github.com/ridwanul-basit",
    demo: "https://stc360.org/",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    features: [
      "MVC (Model-View-Controller) design pattern",
      "Granular Role-Based Access Control (RBAC)",
      "Comprehensive activity logging and auditing",
      "Dynamic data tables with advanced filtering",
      "Exportable reports in multiple formats (PDF/CSV)"
    ],
    challenges: [
      "Refactoring legacy code into a modern MVC structure",
      "Maintaining high security standards for user data",
      "Ensuring database integrity with complex transaction logic"
    ],
    benefits: [
      "Complete visibility into user activities and operations",
      "Secure and scalable infrastructure for business data",
      "Faster administrative tasks through automation"
    ],
    hasImage: true,
  },
  {
    id: "janani-fashion",
    title: "E-Commerce Platform",
    description: "A comprehensive e-commerce solution with product management, shopping cart, and secure checkout.",
    fullDescription: "Built for Janani Fashion, this platform is a modern e-commerce solution designed for speed and conversion. It offers a seamless shopping experience from product discovery to secure checkout, optimized for both desktop and mobile users.",
    image: "/projects/E-commerce.png",
    github: "https://github.com/ridwanul-basit",
    demo: "https://jananifashionbd.com/",
    tags: ["Next.js", "Tailwind", "Laravel"],
    features: [
      "SEO-optimized product and category pages",
      "Dynamic shopping cart and wishlist functionality",
      "Multiple payment gateway integrations",
      "Order tracking system for customers",
      "Admin dashboard for product and order management"
    ],
    challenges: [
      "Optimizing image loading for faster page speeds",
      "Implementing real-time inventory synchronization",
      "Designing a mobile-first user experience for high engagement"
    ],
    benefits: [
      "Increased online sales and customer engagement",
      "Streamlined order fulfillment and inventory tracking",
      "Enhanced brand presence with a modern UI"
    ],
    hasImage: true,
  },
  {
    id: "online-health-care",
    title: "Online Health Care",
    description: "Platform connecting patients with healthcare providers, featuring appointment scheduling and medical record management.",
    fullDescription: "Online Health Care is a specialized healthcare management platform designed to bridge the gap between patients and medical professionals. It provides a digital ecosystem for booking appointments, managing medical history, and facilitating communication between doctors and patients.",
    image: "/projects/health.png",
    github: "https://github.com/ridwanul-basit",
    demo: "#",
    tags: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    features: [
      "Patient registration and profile management",
      "Real-time doctor appointment scheduling",
      "Electronic Medical Record (EMR) system",
      "Doctor's dashboard for patient management",
      "Secure messaging and consultation logs"
    ],
    challenges: [
      "Ensuring high security and privacy for sensitive patient data",
      "Designing an efficient doctor scheduling algorithm",
      "Creating a mobile-responsive interface for patients on the go"
    ],
    benefits: [
      "Improved patient access to medical care",
      "Reduced wait times through digital scheduling",
      "Centralized medical records for better diagnosis"
    ],
    hasImage: false,
  }
];
