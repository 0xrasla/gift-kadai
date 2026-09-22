export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number; // in INR
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: string;
  tag?: 'Bestseller' | 'Sale' | 'New' | 'Luxury Hamper' | 'Personalized';
  discountPercent?: number;
  image: string;
  gallery?: string[];
  description: string;
  features?: string[];
  recipientGroup: 'For Him' | 'For Her' | 'For Couples & Family' | 'For Kids' | 'For Everyone';
  occasion: ('Birthday' | 'Anniversary' | 'Wedding' | 'Festive' | 'Housewarming' | 'Thank You')[];
  inStock: boolean;
  isPersonalizable?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  personalizedName?: string;
}

export interface GiftSettings {
  includeGiftBox: boolean;
  giftBoxPrice: number;
  ribbonColor: 'Blush Coral' | 'Sage Green' | 'Sunshine Yellow' | 'Royal Blue' | 'Golden Satin';
  greetingCard: boolean;
  cardMessage: string;
  recipientName: string;
}

export interface Testimonial {
  id: string;
  author: string;
  city: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  avatar: string;
  giftType: string;
}
