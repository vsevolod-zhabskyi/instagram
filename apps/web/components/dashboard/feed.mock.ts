import { Post } from '@/types/post';

export const mockPosts: Post[] = [
  {
    id: '1',
    user: {
      username: 'johndoe',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    caption: 'Beautiful sunset at the beach 🌅',
    likes: 142,
    comments: 8,
    timestamp: '2 hours ago',
  },
  {
    id: '2',
    user: {
      username: 'janedoe',
      avatar:
        'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=60&h=60&fit=crop&crop=faces',
    },
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=600&fit=crop',
    caption: 'Coffee and code ☕️ #dev #coffee',
    likes: 89,
    comments: 12,
    timestamp: '4 hours ago',
  },
  {
    id: '3',
    user: {
      username: 'photographer',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    },
    image:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    caption: 'Mountain adventures never get old 🏔️',
    likes: 256,
    comments: 23,
    timestamp: '6 hours ago',
  },
];
