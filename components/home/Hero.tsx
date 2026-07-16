import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Everything you need, all in one place.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Explore a curated collection of high-quality products designed to make
          everyday life better. Shop effortlessly with a seamless experience
          from browsing to checkout.Find the latest products, exclusive deals,
          and everyday essentials with a simple and enjoyable shopping
          experience built for you.
        </p>
        <Button size="lg" className="mt-10">
          <Link href="/products">Shop Now</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
