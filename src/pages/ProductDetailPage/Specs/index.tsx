import { Stack } from "@mui/material";
import Row from "./Row";
import { useProductDetailContext } from "../../../hooks/product-detail/useProductDetailContext";

const Specs = () => {
  const { product } = useProductDetailContext();
  const {
    dimensions,
    category,
    brand,
    stock,
    weight,
    shippingInformation,
    warrantyInformation,
    returnPolicy,
  } = product!;

  return (
    <Stack spacing={1.5}>
      <Row label="Danh mục" value={category || "—"} />
      <Row label="Thương hiệu" value={brand || "—"} />

      <Row label="Tồn kho" value={stock ?? "—"} />
      <Row label="Khối lượng" value={weight ? `${weight} g` : "—"} />
      <Row
        label="Kích thước"
        value={
          dimensions
            ? `${dimensions.width} × ${dimensions.height} × ${dimensions.depth} mm`
            : "—"
        }
      />

      <Row label="Vận chuyển" value={shippingInformation || "—"} />
      <Row label="Bảo hành" value={warrantyInformation || "—"} />
      <Row label="Đổi trả" value={returnPolicy || "—"} />
    </Stack>
  );
};

export default Specs;
