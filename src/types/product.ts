export interface Product {
  id: number;
  name: string;
  image: string;
  rating: number;
  booked_count: number;
  tag: string;
  per_day_rent: number;
  out_of_stock: boolean;
  description?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  rentalDays: number;
  deliveryDate?: string;
  pickupDate?: string;
}

export type SortOption = 'recommended' | 'price-low' | 'price-high' | 'rating' | 'popular';

export interface FilterState {
  searchQuery: string;
  tag: string; // 'All' | 'Trending' | 'New' | 'Vote to Launch'
  stockStatus: 'all' | 'in-stock' | 'out-of-stock';
  minPrice: number;
  maxPrice: number;
  minRating: number;
}
