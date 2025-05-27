import { Button } from "@/components/ui/button";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Button>Click me</Button>
      <MainLayout />
    </div>
  );
}

export default App;
