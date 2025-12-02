import "./App.css";

function App() {
  return (
    <div>
      {/* 1. 타이포그래피 */}
      <div className="text-xs">text-xs</div>
      <div className="text-sm text-[rgb(100,20,200)]">text-sm</div>
      <div className="text-lg font-bold">text-lg</div>
      <div className="text-xl font-extrabold">text-xl</div>
      <div className="text-2xl font-black">text-2xl</div>
      <div className="text-[23px]">text-23px</div>
    </div>
  );
}

export default App;
