import React, { useEffect, useRef } from "react";

function Features() {
  const featuresRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.remove("hidden");
          } else {
            entry.target.classList.remove("visible");
            entry.target.classList.add("hidden");
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the element is visible
    );

    const featureElements = featuresRef.current.querySelectorAll(".feature-item");
    featureElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect(); // Clean up observer
    };
  }, []);

  return (
    <section id="features" className="features">
      <div className="container" ref={featuresRef}>
        <h2>Our Features</h2>
        <div className="row">
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone1.jpg"
              alt="Precision Spraying"
              className="feature-image"
            />
            <h4>Precision Spraying</h4>
            <p>Delivering accurate spraying to optimize crop yields.</p>
          </div>
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone2.jpg"
              alt="Environment Friendly"
              className="feature-image"
            />
            <h4>Environment Friendly</h4>
            <p>Minimizing waste and conserving resources.</p>
          </div>
          <div className="col-md-4 feature-item hidden">
            <img
              src="/assets/drone3.jpg"
              alt="Advanced Technology"
              className="feature-image"
            />
            <h4>Advanced Technology</h4>
            <p>Using AI for efficient and automated operations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;