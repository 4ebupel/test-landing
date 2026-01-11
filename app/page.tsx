import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import SectionTitleWithDesc from "./components/SectionTitleWithDesc";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#3E3F3E] font-sans dark:bg-black">
      <Header />
      <main className="flex gap-16 min-h-screen w-full max-w-2/3 flex-col items-center justify-between py-32 px-16 bg-gray-600 dark:bg-black sm:items-start">
        <section className="overflow-hidden">
          <SectionTitleWithDesc />
        </section>
        <section
          className='flex flex-row gap-6'
        >
          <Card type="20"/>
          <Card type="25"/>
          <Card type="50"/>
        </section>
        <Button />
      </main>
    </div>
  );
}
