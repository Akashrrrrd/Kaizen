import React from "react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  LinkedinIcon, 
  InstagramIcon, 
  TwitterIcon 
} from "lucide-react";
import './About.css';

const growthData = [
  { year: '2024', revenue: 100 },
  { year: '2025', revenue: 250 },
  { year: '2026', revenue: 450 },
  { year: '2027', revenue: 750 },
  { year: '2028', revenue: 1200 }
];

const About = () => {
  return (
    <div className="abt-container">
      <div className="abt-content-wrapper">
        <h1 className="abt-title">
          Welcome to <span className="abt-highlight">Kaizenspark Tech</span>
        </h1>
        <p className="abt-subtitle">
          Founded in 2024, KaizenSpark Tech Technologies has rapidly developed 
          into a prominent technology company.
        </p>

        <div className="abt-sections-container">
          <section className="abt-section">
            <h2 className="abt-section-title">
              Our <span className="abt-highlight">Vision</span>
            </h2>
            <p className="abt-section-content">
              We envision a future where businesses can seamlessly integrate 
              advanced technologies, enabling them to stay ahead of the curve 
              and achieve unprecedented success through digital innovation.
            </p>
          </section>

          <section className="abt-section">
            <h2 className="abt-section-title">
              Our <span className="abt-highlight">Mission</span>
            </h2>
            <p className="abt-section-content">
              Our mission is to revolutionize business operations by leveraging 
              cutting-edge technology, fostering innovation, efficiency, and 
              growth through bespoke technology solutions.
            </p>
          </section>
        </div>

        <div className="abt-graph-container">
          <h3 className="abt-graph-title">Projected Company Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="rgba(255,255,255,0.1)"
              />
              <XAxis 
                dataKey="year" 
                stroke="rgba(255,255,255,0.6)"
              />
              <YAxis 
                stroke="rgba(255,255,255,0.6)" 
                tickFormatter={(value) => `$${value}K`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#003b47', 
                  color: 'white' 
                }} 
                labelStyle={{ color: '#00ffff' }}
              />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                stroke="#00ffff" 
                strokeWidth={3}
                dot={{ r: 6, fill: '#00ffff', stroke: 'white' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="abt-social-icons">
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="abt-icon"
          >
            <LinkedinIcon size={24} />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="abt-icon"
          >
            <InstagramIcon size={24} />
          </a>
          <a 
            href="https://x.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="abt-icon"
          >
            <TwitterIcon size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;