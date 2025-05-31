import Container from "@/components/Container";
import kidCollections from "@/assets/images (1).jpeg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center">
      <div>
        <h1 className="text-6xl font-bold">
          <span className="text-light-slate">Trendy Summer</span>
          <br />
          <span className="text-dart-slate">Kid Collections</span>
        </h1>
        <p></p>
        <Button>Book a service</Button>
      </div>
      <div>
        <img src={kidCollections} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
