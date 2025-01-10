import '@/app/ui/global.css'; //You can import global.css in any component in your application, but it's usually good practice to add it to your top-level component.
import { inter } from '@/app/ui/fonts'; // 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body>  // before NEXT FONT */} 

      {/* // AFTER NEXT FONT :-    By adding Inter to the <body> element, the font will be applied throughout your application. 
      Here, you're also adding the Tailwind antialiased class which smooths out the font. It's not necessary to use this class, but it adds a nice touch. */}
      <body className={`${inter.className} antialiased`}>{children}</body> 
    </html>
  );
}
