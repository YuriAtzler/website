export type Background = {
  image_url: string;
  color: string;
};

export type TemplateContentType = {
  video_play?: {
    url: string;
  };
  about?: {
    html_content: string;
    picture_url: string;
  };
};

export type TemplateType = {
  type: string;
  navbar_name: string;
  title: string;
  subtitle: string;
  background: Background;
  content: TemplateContentType;
};
