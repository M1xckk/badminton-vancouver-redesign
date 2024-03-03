"use client"
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>World-Class Badminton Facility in Vancouver, BC</p>
        <p>©2019-2020 Badminton Vancouver – World-Class Badminton Facility in Vancouver, BC</p>
        <p>WordPress Websites, Service and Maintenance by Net Butlers Inc.</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
      <style jsx>{`
        .footer {
          padding: 20px;
          background-color: #f5f5f5; // Adjust the color to match your design
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .social-media-icons {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
