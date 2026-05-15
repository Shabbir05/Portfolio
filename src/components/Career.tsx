import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Head (Core Team Member)</h4>
                <h5>GDG on Campus ADYPU</h5>
              </div>
              <h3>Aug 2024 - May 2025</h3>
            </div>
            <p>
              Expected 10 mos. Pune District, Maharashtra, India.
              <br />• Conducted sessions on the foundations of machine learning concepts for freshmen.
              <br />• Implementing hands-on practical of GCP’s Vertex AI with its real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quantum Machine Learning (with IBM Quantum)</h4>
                <h5>IBM SkillsBuild</h5>
              </div>
              <h3>Issued Oct 2024</h3>
            </div>
            <p>
              Licenses & certifications. Credential ID openHPI.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Smart India Hackathon 2025 Winner</h4>
                <h5>Hardware Edition</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Recognized for developing innovative hardware solutions at a national level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
