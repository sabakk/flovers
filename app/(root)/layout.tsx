import Header from '@/components/header';
import Footer from '@/components/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col'>
      <Header />
      {/* <SubHeader/> */}
      <main className='max-w-7xl flex-1  lg:mx-auto p-5 md:px-10 w-full'>{children}</main>
      <Footer />
    </div>
  );
}