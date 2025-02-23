import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import ButtonWithBottomBorder from "../../../components/ButtonWithBottomBorder/ButtonWithBottomBorder";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-12 w-11/12 mx-auto">
      <SectionTitle
        subHeading={"Popular Items"}
        heading={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-8">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center my-8">
        <ButtonWithBottomBorder
          content={"View Full Menu"}
        ></ButtonWithBottomBorder>
      </div>
    </section>
  );
};

export default PopularMenu;
