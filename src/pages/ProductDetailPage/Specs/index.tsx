import { Stack } from "@mui/material";
import type { IProduct } from "../../../interface/IProduct";
import Row from "./Row";

const Specs = ({ product }: { product: IProduct }) => {
  const { dimensions } = product;

  return (
    <Stack spacing={1.5}>
      <Row label="Danh mục" value={product.category || "—"} />
      <Row label="Thương hiệu" value={product.brand || "—"} />

      <Row label="Tồn kho" value={product.stock ?? "—"} />
      <Row
        label="Khối lượng"
        value={product.weight ? `${product.weight} g` : "—"}
      />
      <Row
        label="Kích thước"
        value={
          dimensions
            ? `${dimensions.width} × ${dimensions.height} × ${dimensions.depth} mm`
            : "—"
        }
      />

      <Row label="Vận chuyển" value={product.shippingInformation || "—"} />
      <Row label="Bảo hành" value={product.warrantyInformation || "—"} />
      <Row label="Đổi trả" value={product.returnPolicy || "—"} />
    </Stack>
  );
};

export default Specs;
