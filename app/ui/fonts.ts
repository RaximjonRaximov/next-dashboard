import { Inter, Lusitana } from 'next/font/google';

// Inter font (primary font)
export const inter = Inter({
  subsets: ['latin'],
});

// Lusitana font (secondary font)
export const lusitana = Lusitana({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify font weights
});
