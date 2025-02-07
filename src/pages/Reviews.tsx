
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Thompson",
      rating: 5,
      date: "February 15, 2024",
      review: "The wall plug diffuser has transformed my home! The scents are so natural and refreshing, and I love that it's pet-friendly. My cats aren't bothered by it at all, which was a major concern for me.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
    {
      id: 2,
      name: "Emily Rodriguez",
      rating: 5,
      date: "February 10, 2024",
      review: "As a mom of three, I'm always looking for safe, natural products. Ever Aroma's refillable system is genius - not only is it eco-friendly, but the scents last so much longer than traditional air fresheners.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 3,
      name: "Lauren Mitchell",
      rating: 5,
      date: "February 5, 2024",
      review: "The Fresh Linen scent is absolutely divine! It's subtle yet effective, and I love knowing that I'm using a product that's both safe for my family and good for the environment.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    },
    {
      id: 4,
      name: "Jessica Chen",
      rating: 5,
      date: "January 30, 2024",
      review: "I was skeptical about switching from traditional air fresheners, but Ever Aroma has exceeded all my expectations. The refill process is so simple, and the natural scents are far superior to artificial ones.",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">
              Customer Reviews
            </h1>
            <p className="text-primary/80 text-lg">
              See what our community has to say about their Ever Aroma experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reviews.map((review) => (
              <div 
                key={review.id}
                className="bg-white rounded-lg shadow-sm p-6 transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{review.name}</h3>
                    <p className="text-sm text-primary/60">{review.date}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                <p className="text-primary/80">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default Reviews;
