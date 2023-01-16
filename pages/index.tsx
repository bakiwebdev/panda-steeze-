import Banner from '../components/Banner';
import Layout from '../components/Layout';
import Seo from '../components/SEO';
import Trending from '../components/Trending';

export default function Home() {
  return (
    <Layout>
      <Seo />
      <Banner />
      <Trending />
      <div className="bg-gray-50 h-screen"></div>
    </Layout>
  );
}
