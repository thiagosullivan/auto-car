import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-6">
      {/* Hero */}
      <section className="w-full max-w-7xl mx-auto h-[450px] relative">
        <Image
          src="https://i.ibb.co/CKzPmz0B/auto-car-banner.jpg"
          alt="banner"
          sizes="100vw"
          fill
        />
      </section>
    </main>
  );
}
