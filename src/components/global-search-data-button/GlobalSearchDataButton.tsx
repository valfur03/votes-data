import { Button, ButtonProps } from "@/components/button/Button";
import {
  GLOBAL_SEARCH_DATA_BUTTON_DEFAULT_TEXT,
  GLOBALE_SEARCH_DATA_BUTTON_DEFAULT_VARIANT,
} from "@/components/global-search-data-button/shared/constants/default";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

export type GlobalSearchDataButtonProps = {
  text?: string;
  variant?: ButtonProps["variant"];
};

export const GlobalSearchDataButton = ({
  text = GLOBAL_SEARCH_DATA_BUTTON_DEFAULT_TEXT,
  variant = GLOBALE_SEARCH_DATA_BUTTON_DEFAULT_VARIANT,
}: GlobalSearchDataButtonProps) => {
  return (
    <Button variant={variant}>
      <MagnifyingGlassIcon /> {text}
    </Button>
  );
};
