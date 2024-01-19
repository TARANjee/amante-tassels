import { Banner } from '@/components/banner';
import { Product } from '@/components/product';
import { Navbar, Footer } from '@components';

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </main>
  )
}
