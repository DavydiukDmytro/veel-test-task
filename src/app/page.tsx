import { Footer, Header, TodoSection } from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gray-100 px-[16px] md:px-[32px] xl:px-[100px]">
      <Header />
      <TodoSection />
      <Footer />
    </div>
  );
}
