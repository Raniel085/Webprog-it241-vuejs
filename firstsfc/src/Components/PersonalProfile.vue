<template>
  <div class="profile-body">
    <div class="bg-accent-blur"></div>

    <section class="hero-section">
      <div class="hero-text">
        <span class="hero-subtitle" id="dynamic-greeting">Welcome</span>
        <h1>Raniel<br><span class="outline">Dela Cruz</span></h1>
        <div class="mt-5">
          <a href="#content" class="btn-custom">EXPLORE PROFILE</a>
        </div>
      </div>
    </section>

    <section id="content" class="content-grid">
      <div class="bento-item about">
        <span class="label">01 // Biography</span>
        <h2>About Me</h2>
        <p>I am Panyeng.</p>
      </div>

      <div class="bento-item degree">
        <span class="label">02 // Degree</span>
        <h2>Course</h2>
        <p>BS in Information Technology<br><strong>Asia Pacific College</strong></p>
      </div>

      <div class="bento-item goals">
        <span class="label">03 // Vision</span>
        <h2>Goals In Life & Dreams</h2>
        <p>My goal in life is to become a <strong>successful businessman</strong>.</p> 
        <p>One of my greatest motivations is to <strong>help my parents</strong>.</p>
      </div>

      <div class="bento-item academic">
        <span class="label">04 // Academic</span>
        <h2>Education & Achievements</h2>
        <ul class="list-unstyled">
          <li>• Asia Pacific College (Current)</li>
          <li>• 2nd Year, BSIT Student</li>
          <li>• Specialized in Web Programming</li>
        </ul>
      </div>

      <div class="bento-item expertise">
        <span class="label">05 // Expertise</span>
        <h2>IT Experience</h2>
        <ul class="list-unstyled">
          <li>• Python Programming</li>
          <li>• LinkedIn Learning Certifications</li>
        </ul>
      </div>

      <div class="bento-item interests">
        <span class="label">06 // Interests</span>
        <h2>Hobbies & Interests</h2>
        <ul class="list-unstyled">
          <li>• <strong>Ride Therapy</strong></li>
          <li>• <strong>Competitive Gaming</strong></li>
          <li>• <strong>KDrama</strong></li>
        </ul>
      </div>
    </section>

    <section class="gallery-section">
      <div class="px-5 mb-4 text-center">
        <span class="label">07 // Visuals</span>
        <h2 class="display-4 fw-bold text-white">PICTURE GALLERY</h2>
      </div>
      <div class="gallery-wrapper">
        <img src="https://i.pinimg.com/736x/9e/51/da/9e51dab79becdc334b68e46334023b2a.jpg" alt="Gallery 1">
        <img src="https://i.pinimg.com/736x/da/6e/fc/da6efc48d7c753d345720ecc3aee58c8.jpg" alt="Gallery 2">
      </div>
    </section>

    <footer>
      Raniel DELA CRUZ &copy; 2026 // WEBPROG IT241
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
/* Paste your existing CSS from style.css here */
.outline {
  -webkit-text-stroke: 1px white;
  color: transparent;
}
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 40px;
}
.bento-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>