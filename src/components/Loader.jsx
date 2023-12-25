import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html>
      <div class="flex flex-row gap-2">
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.3s]"></div>
        <div class="w-4 h-4 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </Html>
  );
};

export default Loader;
