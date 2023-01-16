import Layout from '../components/Layout';
import Seo from '../components/SEO';

export default function Home() {
  return (
    <Layout>
      <Seo />
      <h1 className="text-3xl font-bold underline">panda-steeze</h1>
      <div className="bg-gray-50 h-screen"></div>
    </Layout>
  );
}
