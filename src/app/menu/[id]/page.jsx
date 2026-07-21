import React from "react";
import Image from "next/image";

export function generateStaticParams() {
  return [{ id: "52898" }, { id: "52955" }, { id: "52926" }];
}
// dynamic food title
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    //   { next: { revalidate: 60 } } for how long the data should be cached before revalidation
  );
  if (!res.ok) return null;
  const {details= {}} = await res.json();
 return {
  title: details.title,
 }
}
const getSingleFood = async (id) => {
  try {
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
      //   { next: { revalidate: 60 } } for how long the data should be cached before revalidation
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.details;
  } catch (error) {
    console.error("Error fetching food details:", error);
    return null;
  }
};

const page = async ({ params }) => {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-lg font-bold text-muted">
          Mouthwatering dish not found!
        </p>
        <a href="/" className="text-sm font-bold text-primary hover:underline">
          Back to Menu
        </a>
      </div>
    );
  }

  // ইউটিউব ইউআরএল থেকে এম্বেড আইডি বের করার লজিক
  const getEmbedId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getEmbedId(food.video);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left Side: Product Image Wrapper */}
        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-input-theme border border-border-theme shadow-lg group">
          <Image
            src={food.foodImg}
            alt={food.title}
            fill
            priority
            className="object-cover transform group-hover:scale-103 transition-transform duration-700"
            sizes="(max-w-1024px) 100vw, 600px"
          />
          {/* Origin Area Badge */}
          {food.area && (
            <span className="absolute bottom-4 left-4 z-10 bg-background/90 backdrop-blur-md text-foreground text-xs font-black px-3 py-1 rounded-full border border-border-theme shadow-xs">
              📍 {food.area} Cuisine
            </span>
          )}
        </div>

        {/* Right Side: Product Details Content */}
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="inline-block bg-primary/10 text-primary text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
              🌱 {food.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
              {food.title}
            </h1>
          </div>

          <div className="text-3xl font-black text-secondary flex items-baseline gap-1">
            <span className="text-xl font-bold">৳</span>
            {food.price}
          </div>

          <div className="border-t border-b border-border-theme/60 py-5 space-y-3">
            <h3 className="text-xs font-bold text-foreground uppercase tracking-widest">
              About this Dish
            </h3>
            <p className="text-sm sm:text-base font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              Experience the authentic and luxurious taste of our premium{" "}
              {food.title}. Expertly curated using organic ingredients,
              representing true {food.area} culinary excellence. Perfect choice
              to satisfy your cravings.
            </p>
          </div>

          {/* Action Area */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-primary/10 transition-all active:scale-[0.97] cursor-pointer text-center text-sm">
              Add to Basket
            </button>
            <button className="border border-border-theme hover:border-foreground text-foreground font-bold py-4 px-6 rounded-2xl transition-all active:scale-[0.97] cursor-pointer text-center text-sm">
              Explore More
            </button>
          </div>
        </div>
      </div>

      {/* Video Recipe Section (Conditional Rendering) */}
      {videoId && (
        <div className="mt-16 lg:mt-24 space-y-6">
          <div className="border-l-4 border-primary pl-4">
            <h2 className="text-2xl font-black text-foreground tracking-tight">
              Watch Video Recipe
            </h2>
            <p className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
              See how this delicious {food.title} is masterfully crafted.
            </p>
          </div>
          <div className="w-full max-w-3xl mx-auto aspect-video rounded-3xl overflow-hidden border border-border-theme bg-card shadow-lg">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${food.title} Recipe Video`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
