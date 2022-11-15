import Myslide from "../compenet/Slider";
import MyProduit from "../compenet/Product";
import MapsComp from "../compenet/maps";

export default function Home() {
  return (
    <div className="Home">
      <Myslide />
      <hr />
      <MyProduit />
      <hr />
      <MapsComp />
    </div>
  );
}
