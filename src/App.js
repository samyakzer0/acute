import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Shield, Image, Lock, Send, FileUp, FileDown } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="bg-purple" />
        <div className="bg-blue" />
        <div className="bg-center" />
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        {/* Hero Section */}
        <div className="hero-section">
          {/* Spline Object Container */}
          <div className="spline-container">
            <Spline scene="https://prod.spline.design/ROxgG3V5-mVry5Uz/scene.splinecode" />
          </div>
          
          <div className="container">
            <nav className="nav-bar">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="logo-container">
                <div className="logo-box">a</div>
                <span className="logo-text">acute</span>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="nav-links">
                <button className="nav-button">About</button>
                <button className="nav-button">Features</button>
                <button className="launch-button">Launch App</button>
              </motion.div>
            </nav>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="hero-content">
              <div className="tag">Powered by Web3 Technology</div>
              
              <h2 className="hero-title">Seamless File Transfer with Web3</h2>
              
              <p className="hero-description">
                Securely share your files using blockchain technology and IPFS storage. End-to-end encryption ensures your belongings remain private and accessible.
              </p>
              
              <div className="button-group">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="send-button">
                  <FileUp className="icon" />
                  <span>Send Files</span>
                </motion.button>
                
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="retrieve-button">
                  <FileDown className="icon" />
                  <span>Retrieve Files</span>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="features-grid">
            {[ { icon: Shield, title: "Secure Transfer", description: "End-to-end encrypted photo sharing using blockchain technology" },
              { icon: Image, title: "IPFS Storage", description: "Decentralized storage ensuring your photos are always accessible" },
              { icon: Lock, title: "Smart Contracts", description: "Ethereum-based contracts managing access control" },
              { icon: Send, title: "Easy Sharing", description: "User-friendly interface for seamless photo sharing" }
            ].map((feature, index) => (
              <motion.div key={index} whileHover={{ scale: 1.02, y: -5 }} className="feature-card">
                <feature.icon className="feature-icon" />
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
