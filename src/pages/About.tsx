import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Story</h1>
          <p className="text-lg text-primary/80 max-w-2xl">
            Ever Aroma was born from a simple desire: to create beautiful, sustainable home fragrances that are safe for everyone in your family—including your pets.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Sustainable practices"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Mission</h2>
              <p className="text-primary/80 mb-6">
                We believe that creating a welcoming home shouldn't come at the expense of our planet. That's why we've developed the first refillable wall plug air freshener system that combines premium fragrances with sustainable practices.
              </p>
              <p className="text-primary/80">
                Every Ever Aroma product is thoughtfully crafted using natural ingredients, ensuring a safe environment for families and pets while minimizing our environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-accent/20 py-16 md:py-24">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Sustainability</h3>
              <p className="text-primary/80">
                Our refillable system reduces plastic waste and promotes a circular economy.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Safety First</h3>
              <p className="text-primary/80">
                All our products are thoroughly tested to ensure they're safe for families and pets.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-xl mb-4">Quality</h3>
              <p className="text-primary/80">
                We use only the finest natural ingredients to create long-lasting, premium fragrances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Meet Our Team</h2>
              <p className="text-primary/80 mb-6">
                Behind Ever Aroma is a passionate team of experts dedicated to creating the perfect balance between luxury and sustainability. Our diverse backgrounds in perfumery, environmental science, and product design come together to bring you innovative home fragrance solutions.
              </p>
              <p className="text-primary/80">
                We're committed to continuous improvement and innovation, always seeking new ways to make our products more sustainable and effective.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Our team"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default About;