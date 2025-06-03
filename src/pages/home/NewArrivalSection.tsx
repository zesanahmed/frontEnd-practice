import Container from "@/components/Container";

const NewArrivalSection = () => {
  return (
    <Container className="my-40">
      <div className="text-center flex flex-col justify-center items-center">
        <h1>New Arrival</h1>
        <p>Build up wonderful wardrobes for your little angels.</p>
      </div>
      <div className="grid grid-cols-12 gap-5 mt-10">
        <div className="bg-slate h-[415px] rounded-md col-span-12"></div>
        <div className="bg-slate h-[415px] rounded-md col-span-6 lg:col-span-5"></div>
        <div className="bg-slate h-[415px] rounded-md col-span-6 lg:col-span-7"></div>
        <div className="bg-slate h-[415px] rounded-md col-span-12"></div>
        <div className="bg-slate h-[415px] rounded-md col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-slate h-[415px] rounded-md col-span-12 md:col-span-6 lg:col-span-4"></div>
        <div className="bg-slate h-[415px] rounded-md col-span-12 lg:col-span-4"></div>
      </div>
    </Container>
  );
};

export default NewArrivalSection;
