import "./App.css";
import Carousel from "./components/Carousel";
import { CarouselItem } from "./components/CarouselItem";

function App() {
  return (
    <div className="App">
      <Carousel>
        <CarouselItem>1</CarouselItem>
        <CarouselItem>2</CarouselItem>
        <CarouselItem>3</CarouselItem>
        <CarouselItem>4</CarouselItem>
        <CarouselItem>5</CarouselItem>
        <CarouselItem>6</CarouselItem>
        <CarouselItem>7</CarouselItem>
        <CarouselItem>8</CarouselItem>
        <CarouselItem>9</CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
