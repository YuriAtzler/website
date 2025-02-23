import { Background } from "../common.type";

export type HeroSectionType = {
  type: "hero_section";
  navbar_name: string;
  title: string;
  subtitle: string;
  video_play: {
    url: string;
  };
  background: Background;
};
