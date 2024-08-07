import { Button } from "@/components/button/Button";
import { DISCOVER_DATA_BUTTON_DEFAULT_TEXT } from "@/components/discover-data-button/shared/constants/default";

export type DiscoverDataButtonProps = {
  text?: string;
};

export const DiscoverDataButton = ({
  text = DISCOVER_DATA_BUTTON_DEFAULT_TEXT,
}: DiscoverDataButtonProps) => {
  return <Button>{text}</Button>;
};
