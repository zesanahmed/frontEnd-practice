import Container from "@/components/Container";
import kidCollections from "@/assets/images (1).jpeg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-4xl lg:text-6xl font-bold">
          <span className="text-light-slate">Trendy Summer</span>
          <br />
          <span className="text-dark-slate">Kid Collections</span>
        </h1>
        <p className="text-dark-slate max-w-[25ch] mt-10 mb-5 text-lg">
          Free international shipping on orders over{" "}
          <span className="font-semibold">$199</span>
        </p>
        <Button>Book a service</Button>
      </div>
      <div className="flex items-center justify-center ">
        <img
          className="lg:w-[350px] -rotate-[30deg]"
          src={kidCollections}
          alt=""
        />
      </div>
    </Container>
  );
};

export default HeroSection;
