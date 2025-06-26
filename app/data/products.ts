import { Product } from '@/contexts/CartContext';

export const categories = [
  { id: '1', name: 'Fresh Produce', icon: '🥬', color: '#10B981' },
  { id: '2', name: 'Dairy & Eggs', icon: '🥛', color: '#3B82F6' },
  { id: '3', name: 'Meat & Seafood', icon: '🥩', color: '#EF4444' },
  { id: '4', name: 'Bakery', icon: '🍞', color: '#F59E0B' },
  { id: '5', name: 'Pantry', icon: '🥫', color: '#8B5CF6' },
  { id: '6', name: 'Frozen Foods', icon: '🧊', color: '#06B6D4' },
  { id: '7', name: 'Beverages', icon: '🥤', color: '#F97316' },
  { id: '8', name: 'Snacks', icon: '🍿', color: '#EC4899' },
];

export const products: Product[] = [
  // Fresh Produce
  {
    id: '1',
    name: 'Organic Bananas',
    price: 2.99,
    image:
      'https://images.pexels.com/photos/2316466/pexels-photo-2316466.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Produce',
    rating: 4.5,
    description: 'Fresh organic bananas, perfect for smoothies and snacking.',
    unit: 'per bunch',
  },
  {
    id: '2',
    name: 'Fresh Strawberries',
    price: 4.99,
    image:
      'https://images.pexels.com/photos/89778/strawberries-frisch-ripe-sweet-89778.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Produce',
    rating: 4.8,
    description: 'Sweet, juicy strawberries perfect for desserts.',
    unit: 'per container',
  },
  {
    id: '3',
    name: 'Organic Spinach',
    price: 3.49,
    image:
      'https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Produce',
    rating: 4.3,
    description: 'Fresh organic spinach leaves, great for salads.',
    unit: 'per bag',
  },
  {
    id: '4',
    name: 'Avocados',
    price: 1.99,
    image:
      'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Fresh Produce',
    rating: 4.6,
    description: 'Creamy Hass avocados, perfect for toast and guacamole.',
    unit: 'each',
  },

  // Dairy & Eggs
  {
    id: '5',
    name: 'Organic Whole Milk',
    price: 4.29,
    image:
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy & Eggs',
    rating: 4.4,
    description: 'Fresh organic whole milk from grass-fed cows.',
    unit: 'per gallon',
  },
  {
    id: '6',
    name: 'Free-Range Eggs',
    price: 5.99,
    image:
      'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy & Eggs',
    rating: 4.7,
    description: 'Farm-fresh free-range eggs from happy hens.',
    unit: 'per dozen',
  },
  {
    id: '7',
    name: 'Greek Yogurt',
    price: 6.49,
    image:
      'https://images.pexels.com/photos/1329296/pexels-photo-1329296.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Dairy & Eggs',
    rating: 4.5,
    description: 'Creamy Greek yogurt packed with protein.',
    unit: 'per container',
  },

  // Meat & Seafood
  {
    id: '8',
    name: 'Organic Chicken Breast',
    price: 12.99,
    image:
      'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Meat & Seafood',
    rating: 4.6,
    description: 'Premium organic chicken breast, hormone-free.',
    unit: 'per lb',
  },
  {
    id: '9',
    name: 'Atlantic Salmon',
    price: 18.99,
    image:
      'https://images.pexels.com/photos/1404280/pexels-photo-1404280.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Meat & Seafood',
    rating: 4.8,
    description: 'Fresh Atlantic salmon fillet, rich in omega-3.',
    unit: 'per lb',
  },

  // Bakery
  {
    id: '10',
    name: 'Artisan Sourdough',
    price: 4.99,
    image:
      'https://images.pexels.com/photos/209196/pexels-photo-209196.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Bakery',
    rating: 4.7,
    description: 'Freshly baked artisan sourdough bread.',
    unit: 'per loaf',
  },
  {
    id: '11',
    name: 'Chocolate Croissants',
    price: 8.99,
    image:
      'https://images.pexels.com/photos/3055783/pexels-photo-3055783.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Bakery',
    rating: 4.9,
    description: 'Buttery croissants filled with rich chocolate.',
    unit: 'per 6-pack',
  },

  // Pantry
  {
    id: '12',
    name: 'Organic Quinoa',
    price: 7.99,
    image:
      'https://images.pexels.com/photos/4198942/pexels-photo-4198942.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pantry',
    rating: 4.4,
    description: 'Premium organic quinoa, a complete protein source.',
    unit: 'per bag',
  },
  {
    id: '13',
    name: 'Extra Virgin Olive Oil',
    price: 12.99,
    image:
      'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=400',
    category: 'Pantry',
    rating: 4.6,
    description: 'Cold-pressed extra virgin olive oil from Italy.',
    unit: 'per bottle',
  },

  // Beverages
  {
    id: '14',
    name: 'Fresh Orange Juice',
    price: 5.99,
    image:
      'https://images.pexels.com/photos/1002740/pexels-photo-1002740.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    rating: 4.5,
    description: 'Freshly squeezed orange juice, no pulp added.',
    unit: 'per bottle',
  },
  {
    id: '15',
    name: 'Sparkling Water',
    price: 3.99,
    image:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Beverages',
    rating: 4.3,
    description: 'Refreshing sparkling water with natural minerals.',
    unit: 'per 12-pack',
  },
];

export const featuredProducts = products.slice(0, 6);
