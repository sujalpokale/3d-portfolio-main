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
                <h4>Backend Developer Intern</h4>
                <h5>Easy2IT Techno Solutions LLP</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Designed normalized SQL schemas and optimized queries for high-volume transactional data; built automated reporting and invoice pipelines with PDF generation. Managed multi-vendor database architecture ensuring data integrity and role-based access control across production systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>VOIS (Vodafone Intelligent Solutions)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built conversational data analysis pipelines using LLMs to automate extraction of business insights from unstructured telecom datasets. Cleaned large datasets and surfaced actionable KPIs; trained ML models with Python, Pandas, and Scikit-learn.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>ApexPlanet Software Pvt Ltd</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed responsive web interfaces using HTML, CSS, and JavaScript for client projects; implemented mobile-first design best practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Scientist Intern</h4>
                <h5>Codec Technologies</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to data science projects involving data preprocessing, feature engineering, and model development; utilized Python libraries (Pandas, NumPy, Scikit-learn) to build and evaluate predictive models.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst Intern</h4>
                <h5>CodSoft</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Performed data collection, cleaning, and analysis using Python and Excel; created visual dashboards and conducted EDA to identify trends and support business decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
