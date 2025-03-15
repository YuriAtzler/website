import { TemplateType } from "@/types/common.type";
import { Image } from "@heroui/image";
import { LuCheck } from "react-icons/lu";

export function AboutSection({
  content,
  navbar_name,
  subtitle,
  title,
}: TemplateType) {
  return (
    <section
      id={navbar_name}
      className="w-full py-24 flex"
      aria-label="Sobre a Mint"
    >
      <div className="container w-full grid grid-cols-12 gap-12">
        <article className="col-span-6 flex flex-col gap-3">
          <header>
            <h1 className="text-4xl">{title}</h1>
            <p className="text-lg font-bold">{subtitle}</p>
          </header>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            iure dolor aliquam totam corporis aperiam voluptates distinctio
            voluptas fuga modi ab alias omnis ipsa magnam ducimus quidem sint
            iusto magni!
          </span>
          <ul className="pl-8 flex flex-col space-y-3">
            <li className="flex space-x-3 items-center">
              <LuCheck className="text-lg" />
              <span>
                Non numquam nostrum exercitationem odio fugit temporibus nisi?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <LuCheck className="text-lg" />
              <span>
                Non numquam nostrum exercitationem odio fugit temporibus nisi?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <LuCheck className="text-lg" />
              <span>
                Non numquam nostrum exercitationem odio fugit temporibus nisi?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <LuCheck className="text-lg" />
              <span>
                Non numquam nostrum exercitationem odio fugit temporibus nisi?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <LuCheck className="text-lg" />
              <span>
                Non numquam nostrum exercitationem odio fugit temporibus nisi?
              </span>
            </li>
            <li className="flex space-x-3 items-center">
              <LuCheck className="text-lg" />
              <span>
                Non numquam nostrum exercitationem odio fugit temporibus nisi?
              </span>
            </li>
          </ul>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            iure dolor aliquam totam corporis aperiam voluptates distinctio
            voluptas fuga modi ab alias omnis ipsa magnam ducimus quidem sint
            iusto magni!
          </span>
        </article>
        <figure
          data-aos="zoom-in-down"
          role="img"
          aria-label="Imagem ilustrativa"
          className="flex items-center col-span-6 justify-center"
        >
          <Image
            isZoomed
            alt="HeroUI Album Cover"
            src={content.about?.picture_url}
            width="100%"
          />
        </figure>
      </div>
    </section>
  );
}
