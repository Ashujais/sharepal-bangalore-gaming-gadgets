import rawProductData from './product-list.json';
import type { Product } from '../types/product';

export const productsData: Product[] = (rawProductData as { products: Product[] }).products;

export const CATEGORIES = [
  { name: 'Photography', slug: 'photography-on-rent' },
  { name: 'Gaming', slug: 'gaming-gadgets-on-rent', active: true },
  { name: 'Outdoor', slug: 'outdoor-gears-on-rent' },
  { name: 'Entertainment', slug: 'entertainment-on-rent' },
];

export const CITIES = [
  'Bangalore',
  'Mumbai',
  'Delhi-NCR',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
];

export const FAQS = [
  {
    question: 'How can I rent from SharePal?',
    answer: 'Renting from SharePal is simple and straightforward: 1. Browse and select your gaming console or gadget. 2. Select your rental delivery and return dates. 3. Place your order with zero security deposit. 4. Complete standard KYC verification. 5. Receive doorstep delivery tested and ready to play!'
  },
  {
    question: 'If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?',
    answer: 'Partial extension is completely possible! If you rent multiple items (such as a PS5 and additional controllers or games), you can extend the duration for individual items through your account or by contacting our customer support team.'
  },
  {
    question: 'When does the rental start?',
    answer: 'Your rental period begins on the selected Delivery Date when the gadget is delivered to your address. The pickup takes place on your scheduled Pickup Date. You are only charged for the active rental days.'
  },
  {
    question: 'What will be the condition of the products at the time of delivery?',
    answer: 'All gaming gear undergoes a rigorous 10-point sanitization and testing inspection prior to dispatch. You will receive consoles and controllers in excellent cosmetic and working condition, packed with original cables and required accessories.'
  },
  {
    question: 'Why is verification required?',
    answer: 'As we offer zero deposit rentals, a quick and secure identity verification (KYC) protects our gear while keeping the service accessible without high security deposits for our customers.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Satyaki',
    city: 'Bangalore',
    rating: 5,
    text: 'Rented the PS5 combo with 2 controllers and 100+ games for a weekend gaming tournament with friends. Flawless experience, arrived neatly packaged with all cables. Zero deposit made it super smooth!',
    date: 'February 2026'
  },
  {
    id: 2,
    name: 'Afrana',
    city: 'Bangalore',
    rating: 5,
    text: 'Renting PlayStation from SharePal was one of the best decisions. FC25 ran smoothly and delivery was right on time. Highly recommend to everyone in Bangalore.',
    date: 'January 2026'
  },
  {
    id: 3,
    name: 'Kanthikiran',
    city: 'Bangalore',
    rating: 5,
    text: 'Customer support was so helpful when I wanted to add another controller for my birthday party. The equipment quality was like brand new. 5 stars all the way!',
    date: 'December 2025'
  },
  {
    id: 4,
    name: 'Amal',
    city: 'Bangalore',
    rating: 5,
    text: 'Super hassle free service. No deposit, pay on delivery option, and pickup was seamless. SharePal is my go-to whenever gaming weekends are planned.',
    date: 'January 2026'
  },
  {
    id: 5,
    name: 'Pankaj',
    city: 'Bangalore',
    rating: 5,
    text: 'The PS5 Mega Racing Wheel combo was incredible! Playing Gran Turismo on that setup was an unforgettable experience. Great rates and on-time service.',
    date: 'February 2026'
  }
];

export const STATS = [
  { value: '250Cr+', label: 'Worth of Products Rented' },
  { value: '4.5M Kg', label: 'E-waste / Carbon Saved' },
  { value: '100K+', label: 'Happy Rental Orders' },
];

export const FOOTER_SEO_CATEGORIES = [
  {
    name: 'Action Cameras',
    items: ['GoPro Hero 12', 'GoPro Hero 11', 'DJI Action 4', 'Insta360 X3', 'Insta360 Ace Pro']
  },
  {
    name: 'Cameras',
    items: ['Sony Alpha A7 IV', 'Canon EOS R6', 'Sony FX30', 'DSLR Lens Combos', 'Vlogging Cameras']
  },
  {
    name: 'Trekking Gear',
    items: ['Trekking Jackets', 'Trek Shoes', 'Snow Pants', 'Rucksacks & Backpacks', 'Trekking Poles']
  },
  {
    name: 'Riding Gear',
    items: ['Riding Jackets', 'Riding Gloves', 'Knee Guards', 'Tail Bags', 'Action Mounts']
  },
  {
    name: 'Creator Gear',
    items: ['Wireless Microphones', 'DJI Ronin RS3', 'LED Studio Lights', 'Teleprompter', 'Gimbals']
  },
  {
    name: 'Gaming Console',
    items: ['PS5 Console on Rent', 'Xbox Series X', 'Oculus Quest 2 / 3', 'DualSense Controllers', 'Racing Wheels']
  },
  {
    name: 'Winter Wear',
    items: ['Parka Jackets', 'Thermal Innerwear', 'Gloves & Beanies', 'Waterproof Snow Boots']
  },
  {
    name: 'Camping Gear',
    items: ['2-Person Tents', '4-Person Camping Tents', 'Sleeping Bags', 'Camping Lights', 'Barbeque Grills']
  },
  {
    name: 'Audio Visual Equipment',
    items: ['4K Projectors', 'Party Speakers', 'JBL PartyBox', 'Screen Projector Stands']
  }
];
