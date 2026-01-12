import Button from "./_components/Button";
import Card from "./_components/Card";
import Header from "./_components/Header";
import ImgsWithDescriptionBlock from "./_components/ImgsWithDescriptionBlock";
import SectionTitleWithDesc from "./_components/SectionTitleWithDesc";
import Title from "./_components/Title";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#3E3F3E] font-sans dark:bg-black">
      <Header />
      <main className="flex gap-32 min-h-screen w-full max-w-2/3 flex-col items-center justify-between py-32 px-16 bg-[#3E3F3E] dark:bg-black sm:items-start">
        <section className="overflow-hidden" id="about">
          <SectionTitleWithDesc />
        </section>
        <section
          className='flex flex-col gap-12'
          id="compare"
        >
          <div
            className="flex flex-row gap-6"
          >
            <Card type="20" link />
            <Card type="25" link />
            <Card type="50" link />
          </div>
          <Button text="die beste Passform finden" />
          <section className="flex flex-col gap-10 mt-24" id="gallery">
            <Title
              text="Ein genauerer Blick"
            />
            <ImgsWithDescriptionBlock
              title="Effiziente Energie direkt vor Ort"
              desc="BHKW arbeiten nach dem Prinzip der Kraft-Wärme-Kopplung (KWK) und erreichen auf diese Weise einen deutlich höheren Gesamtwirkungsgrad.
                Darüber hinaus produzieren sie Energie genau dort, wo sie gebraucht wird – sei es in
                Wohnimmobilien, Gebäudekomplexen, Industrieanlagen oder öffentlichen Einrichtungen.
                Dadurch werden lange Transportwege eingespart und Energieverluste reduziert.
              "
              left
            />
            <ImgsWithDescriptionBlock
              title="Dezentral und bedarfsgerecht"
              desc="Durch ihren dezentralen Einsatz können BHKW flexibel dort installiert werden, wo sowohl Strom als auch Wärme benötigt werden. Daher sind sie ideal für den Einsatz in einer Vielzahl von Umgebungen – nicht nur in privaten Haushalten, sondern auch in größeren Wohnkomplexen sowie in industriellen und gewerblichen Anlagen."
              left={false}
            />
            <ImgsWithDescriptionBlock
              title="Umweltfreundlich und zukunftssicher"
              desc="A-TRON BHKW tragen zur Reduktion von CO2-Emissionen bei und unterstützen zudem die Nutzung erneuerbarer Energien. Somit stellen sie eine zukunftssichere Investition in eine sauberere sowie effizientere Energieversorgung dar. Diese Systeme sind nicht nur umweltfreundlich, sondern auch wirtschaftlich vorteilhaft, indem sie sowohl langfristig Energiekosten senken als auch zur Stabilität des lokalen Energiebedarfs beitragen."
              left
            />
          </section>
        </section>
      </main>
    </div>
  );
}
