const AboutPage = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="flex flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-none tracking-wide sm:gap-x-6 sm:text-6xl">
          Welcome to
          <span className="rounded-lg bg-primary px-4 py-2 tracking-widest text-white">
            Store
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 tracking-wide text-muted-foreground">
          At Store, we believe shopping should be simple, enjoyable, and
          trustworthy. We created our store with one goal in mind: to provide
          high-quality products that make everyday life better.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">Our Story</h2>
          <p className="leading-7 text-muted-foreground">
            Store started with a simple idea: make it easier for people to
            discover great products without the hassle of searching through
            countless options. What began as a small passion project has grown
            into a place where customers can find reliable products backed by
            excellent service.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-3 text-2xl font-semibold">What We Offer</h2>
          <p className="leading-7 text-muted-foreground">
            We offer a carefully curated collection of products across different
            categories, including:
          </p>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• High-quality everyday essentials</li>
            <li>• Innovative and practical solutions</li>
            <li>• Stylish products for modern lifestyles</li>
            <li>• Products selected for durability and value</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-3 text-2xl font-semibold">Our Commitment</h2>
        <ul className="grid gap-3 text-muted-foreground md:grid-cols-2">
          <li>• Providing quality products at fair prices</li>
          <li>• Delivering a smooth and secure shopping experience</li>
          <li>• Offering friendly and responsive customer support</li>
          <li>• Continuously improving our products and services</li>
        </ul>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">Quality You Can Trust</h3>
          <p className="leading-7 text-muted-foreground">
            We carefully evaluate products to ensure they meet our expectations
            before offering them to our customers.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">
            Customer-Focused Service
          </h3>
          <p className="leading-7 text-muted-foreground">
            Your satisfaction matters to us. We are here to help before, during,
            and after your purchase.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-semibold">
            Simple Shopping Experience
          </h3>
          <p className="leading-7 text-muted-foreground">
            From browsing to checkout, we aim to make every step fast, easy, and
            enjoyable.
          </p>
        </div>
      </div>

      <div className="rounded-lg border border-primary/20 bg-primary/10 p-8 text-center">
        <h2 className="mb-3 text-2xl font-semibold">Join Our Community</h2>
        <p className="mx-auto max-w-2xl leading-7 text-muted-foreground">
          Thank you for choosing Store. We appreciate your support and look
          forward to being part of your shopping journey. Discover products you
          love, enjoy a better shopping experience, and let us help you find
          something great.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
