import {
  Checkbox,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import type { IProduct } from "../../../interface/IProduct";
import QtyBox from "../../../components/QtyBox";
import { formatCurrency } from "../../../helpers/common";
import { useMemo } from "react";

const Row = ({
  id,
  qty,
  product,
  handleChangeQuantity,
  selectedItems,
  handleToggleSelectedItems,
  handleRemoveItems,
}: {
  id: number;
  qty: number;
  product: IProduct;
  handleChangeQuantity: (id: number, newQty: number) => void;
  selectedItems: number[];
  handleToggleSelectedItems: (id: number) => void;
  handleRemoveItems: (ids: number[]) => void;
}) => {
  const discounted =
    product.discountPercentage && product.discountPercentage > 0;
  const finalPrice = useMemo(() => {
    if (!discounted) return product.price;
    return Math.round(product.price * (1 - product.discountPercentage / 100));
  }, [product.price, product.discountPercentage, discounted]);
  return (
    <>
      <TableRow>
        <TableCell>
          <Checkbox
            checked={selectedItems?.includes(id)}
            onChange={() => handleToggleSelectedItems(id)}
          />
        </TableCell>
        <TableCell>
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            <img
              src={product.images?.[0]}
              alt=""
              style={{ width: "50px", objectFit: "cover" }}
            />
            <Typography variant="body2">{product.title}</Typography>
          </Stack>
        </TableCell>
        <TableCell>
          <Stack
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography variant="body1" color="primary">
              {formatCurrency(finalPrice, "USD", "en-EN")}
            </Typography>
            {discounted && (
              <>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  {formatCurrency(product.price, "USD", "en-EN")}
                </Typography>
              </>
            )}
          </Stack>
        </TableCell>
        <TableCell>
          <QtyBox
            quantity={qty}
            handleChangeQuantity={handleChangeQuantity}
            id={id}
          />
        </TableCell>
        <TableCell>
          <Typography
            color="error"
            sx={{ cursor: "pointer" }}
            onClick={() => handleRemoveItems([id])}
          >
            Xóa
          </Typography>
        </TableCell>
      </TableRow>
    </>
  );
};
export default Row;
