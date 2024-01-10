import React from "react";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";

// Define a prop type for the Icon prop
interface IconProps {
  className: string;
}

const ClickableIcon = (props: {
  href: string | undefined;
  Icon: React.ComponentType<IconProps>; // Use React.ComponentType with the new prop type
}) => {
  return (
    <a href={props.href} className="" target={"_blank"} rel="noreferrer">
      {/* Pass the className prop to the Icon component */}
      <props.Icon
        className={
          "w-5 h-5 text-gray-400 hover:text-AAsecondary fill-current hover:cursor-pointer"
        }
      />
    </a>
  );
};

const IconsData = [
  { href: "https://github.com/HarshDhaduk2001", Icon: GithubIcon },
  {
    href: "https://www.linkedin.com/in/harsh-dhaduk-5407131a1",
    Icon: LinkedinIcon,
  },
  { href: "https://www.instagram.com/harshdhaduk_hd?ig", Icon: InstagramIcon },
  {
    href: "https://www.youtube.com/channel/UCFl2on20UQo4RTTO3VJ8wCg",
    Icon: YoutubeIcon,
  },
];

export default function Footer(props: {
  githubUrl: string;
  hideSocialsInDesktop: boolean;
}) {
  return (
    <div className="bg-AAprimary flex flex-col justify-center items-center py-8 space-y-4">
      <div
        className={`flex flex-row space-x-8 ${
          props.hideSocialsInDesktop ? "lg:hidden" : ""
        }`}
      >
        {IconsData.map((iconData, index) => {
          return (
            <ClickableIcon
              key={index}
              href={iconData.href}
              Icon={iconData.Icon}
            />
          );
        })}
      </div>
      <a href="#" className="" rel="noreferrer">
        <div
          className="group flex flex-col font-mono justify-center items-center  text-gray-400 
    text-sm  space-y-2  "
        >
          <span className="group-hover:text-AAsecondary sm:text-sm text-xs">
            Built by Harsh Dhaduk
          </span>
        </div>
      </a>
    </div>
  );
}
