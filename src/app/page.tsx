import { Banner } from '@/components/banner';
import { Product } from '@/components/product';
import { Navbar, Footer } from '@components';



export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </main>
  )
}
