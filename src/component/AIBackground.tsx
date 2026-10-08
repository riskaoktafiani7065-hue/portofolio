
"use client";

const particles = Array.from({ length: 65 }, (_, i) => ({
  id: i,
  left: `${(i * 37 + 11) % 100}%`,
  top: `${(i * 61 + 7) % 100}%`,
  delay: `${-(i % 12) * 0.6}s`,
  duration: `${4 + (i % 7)}s`,
  size: `${2 + (i % 3)}px`,
}));

const nodes = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${12 + ((i * 29) % 76)}%`,
  top: `${10 + ((i * 43) % 80)}%`,
  delay: `${-(i % 8) * 0.4}s`,
}));

export default function AIBackground() {
  return (
    <div className="ai-background" aria-hidden="true">
      {/* ATMOSPHERIC GLOW */}
      <div className="ai-light ai-light-one" />
      <div className="ai-light ai-light-two" />
      <div className="ai-light ai-light-three" />

      {/* DIGITAL GRID */}
      <div className="ai-grid" />
      <div className="ai-grid ai-grid-secondary" />

      {/* LARGE HOLOGRAPHIC CIRCLES */}
      <div className="ai-circle ai-circle-one" />
      <div className="ai-circle ai-circle-two" />
      <div className="ai-circle ai-circle-three" />

      {/* CENTRAL AI SPHERE */}
      <div className="ai-orb">
        <div className="ai-orb-halo" />

        {/* SPHERE BODY */}
        <div className="ai-orb-body">
          <div className="ai-orb-shine" />
          <div className="ai-orb-reflection" />

          {/* Digital network surface */}
          <div className="ai-network" />

          {/* Inner energy core */}
          <div className="ai-orb-core">
            <div className="ai-core-highlight" />
          </div>

          {/* Glowing network nodes */}
          {nodes.map((node) => (
            <span
              key={node.id}
              className="ai-orb-node"
              style={{
                left: node.left,
                top: node.top,
                animationDelay: node.delay,
              }}
            />
          ))}
        </div>

        {/* THREE DIMENSIONAL ORBITS */}
        <div className="ai-orbit ai-orbit-one">
          <span className="ai-orbit-dot" />
        </div>

        <div className="ai-orbit ai-orbit-two">
          <span className="ai-orbit-dot" />
        </div>

        <div className="ai-orbit ai-orbit-three">
          <span className="ai-orbit-dot" />
        </div>

        <div className="ai-orb-ring ai-ring-one" />
        <div className="ai-orb-ring ai-ring-two" />
        <div className="ai-orb-ring ai-ring-three" />

        {/* ENERGY ARCS */}
        <div className="ai-energy-arc ai-energy-arc-one" />
        <div className="ai-energy-arc ai-energy-arc-two" />
      </div>

      {/* DIGITAL CIRCUITS */}
      <div className="ai-circuit ai-circuit-one">
        <span /><span /><span /><span />
      </div>

      <div className="ai-circuit ai-circuit-two">
        <span /><span /><span /><span />
      </div>

      <div className="ai-circuit ai-circuit-three">
        <span /><span /><span /><span />
      </div>

      {/* FLOATING PARTICLES */}
      <div className="ai-particles">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="ai-particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
              width: particle.size,
              height: particle.size,
            }}
          />
        ))}
      </div>

      {/* TWINKLING STARS */}
      <div className="ai-stars">
        {Array.from({ length: 24 }, (_, i) => (
          <span
            key={i}
            className="ai-star"
            style={{
              left: `${(i * 47 + 19) % 100}%`,
              top: `${(i * 31 + 13) % 100}%`,
              animationDelay: `${-(i % 7) * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* FLOATING TECHNOLOGY HOLOGRAMS */}
      <div className="ai-tech-icon ai-code-icon">
        {"</>"}
      </div>

      <div className="ai-tech-icon ai-ai-icon">
        <span>HALO SAYANGG</span>
        <i />
      </div>

      <div className="ai-tech-icon ai-plus-icon">+</div>

      <div className="ai-tech-label ai-label-one">
        <span className="ai-status-dot" />
        NEURAL NETWORK
      </div>

      {/* FLOWING ENERGY WAVES */}
      <div className="ai-wave ai-wave-one" />
      <div className="ai-wave ai-wave-two" />
      <div className="ai-wave ai-wave-three" />

      {/* BOTTOM ENERGY FIELD */}
      <div className="ai-bottom-glow" />
    </div>
  );
}
