'use client'

import Button from "@/app/_components/Button";
import Card from "@/app/_components/Card";
import { useParams } from "next/navigation"

export default function BHKWDetailsPage() {
  const params = useParams();
  console.log(params.type)
  return (
    <section className="flex flex-col items-center gap-8 min-h-screen w-full bg-[#3E3F3E]">
      <div className="flex flex-col items-start w-2/3">
        <h2
          className="text-3xl text-white"
        >
          {`Ihr gewähltes Modell ist: ${params.type.split('_').join(' ')}`}
        </h2>
      </div>
      <div className="flex items-start w-2/3 h-max max-h-screen">
        <div className="flex w-1/2">
          <Card type={params.type.split('_')[1]} link={false} />
        </div>
        <div className="flex flex-col justify-between max-w-1/2 h-full">
          <p className="text-2xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eius dignissimos sit quam illo velit cum optio voluptates repellendus incidunt accusamus, in omnis est soluta vitae, cumque possimus aut esse.
          </p>
          <Button text="Jetzt kaufen" />
        </div>
      </div>
    </section>
  )
}