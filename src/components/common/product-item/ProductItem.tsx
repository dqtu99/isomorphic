import starYellow from "@/assets/img/star-icon-yellow.svg";
import starNormal from "@/assets/img/star-icon-normal.svg";
import { Image } from "antd";
interface ProductItemProps {
  star?: number;
  name?: string;
  price?: string | number;
  img?: string;
}

function ProductItem({ star, name, price, img }: ProductItemProps) {
  return (
    <div className="product-item h-12 flex justify-between gap-4 text-sm">
      <Image
        src={img}
        width={48}
        height={48}
        alt="fail"
        className="rounded-xl"
      />
      <div className="flex-1 flex flex-col justify-between ">
        <p>{name}</p>
        <p className="text-gray-500">$ {price}</p>
      </div>
      <div className="rate-ting flex flex-col justify-between ">
        <div className="star flex gap-2">
          {Array(star)
            .fill(0)
            .map((_, idx) => (
              <Image key={idx} src={starYellow} alt="" />
            ))}
          {Array(5 - star)
            .fill(0)
            .map((_, idx) => (
              <Image key={idx} src={starNormal} alt="" />
            ))}
        </div>
        <div className="total-review text-gray-500">12.5 review</div>
      </div>
    </div>
  );
}

export default ProductItem;
