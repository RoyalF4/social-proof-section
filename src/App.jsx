import Rating from './Rating';
import Testimonial from './Testimonial';

const ratings = [
  { stars: 5, source: 'Reviews' },
  { stars: 5, source: 'Report Guru' },
  { stars: 5, source: 'BestTech' },
];
const testimonials = [
  {
    name: 'Colton Smith',
    credential: 'Verified Buyer',
    message:
      'We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!',
    img: '/images/image-colton.jpg',
  },
  {
    name: 'Irene Roberts',
    credential: 'Verified Buyer',
    message:
      'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
    img: '/images/image-irene.jpg',
  },
  {
    name: 'Anne Wallace',
    credential: 'Verified Buyer',
    message:
      'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
    img: '/images/image-anne.jpg',
  },
];

export default function App() {
  return (
    <main>
      <div className="heading">
        <h2 className="heading__text">
          10,000+ of our users love our products.
        </h2>
        <p className="heading__subtext">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <div className="ratings"></div>
      <div className="testimonials"></div>
    </main>
  );
}