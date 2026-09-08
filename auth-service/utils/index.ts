interface Props {
  price: number;
  percentage: number;
}

export const calculateDiscount = ({ price, percentage }: Props): number => {
  return price * (percentage / 100);
};
