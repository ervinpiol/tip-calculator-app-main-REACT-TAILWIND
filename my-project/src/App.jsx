import TipCalculator from "./pages/TipCalculator";
import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-20 absolute bottom-[20%] xl:bottom-[15%] sm:bottom-[-30%] sm:gap-14">
        <img src={Logo} alt="Logo" />
        <TipCalculator />
      </div>
    </div>
  );
}

export default App;
