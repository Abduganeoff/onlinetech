import { headerTitles } from "../mockData";
import Product from "./Product";

function TabContentItem({ title, subTitle, imgSrc, contentType, price }: any) {
  const renderContentItem = () => {
    switch (contentType) {
      case headerTitles[0]:
      case headerTitles[1]:
      case headerTitles[2]:
        return (
          <Product
            title={title}
            subTitle={subTitle}
            imgSrc={imgSrc}
            price={price}
          />
        );

      default:
        break;
    }
  };

  return <>{renderContentItem()}</>;
}

export default TabContentItem;
