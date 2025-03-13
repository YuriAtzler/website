export type NavBarStyle = "full" | "rounded";

export type NavBarVariantsType = {
  style?: NavBarStyle;
};

export type NavBarType = NavBarVariantsType & {
  links: string[];
};

export type NavBarVariantsFunction = (props: NavBarVariantsType) => string;
