import AnimeDescription from "@/components/LandingPage/Description";
import LandingNavbar from "@/components/LandingPage/LandingNavbar";
import Header from "@/components/LandingPage/SearchAnime";

export default async function Home() {
  return (
    <main className="w-full xl:container mx-auto">
      <LandingNavbar/>
      <Header />
      <AnimeDescription />
    </main>
  );
}
