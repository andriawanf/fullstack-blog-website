/* eslint-disable react/jsx-key */
import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
  
  const LOGOS = [
    <FigmaLogoIcon width={36} height={36} className="text-slate-800" />,
    <FramerLogoIcon width={36} height={36} className="text-slate-800" />,
    <SketchLogoIcon width={36} height={36} className=" text-slate-800" />,
    <TwitterLogoIcon width={36} height={36} className="text-slate-800" />,
    <GitHubLogoIcon width={36} height={36} className="text-slate-800" />,
    <VercelLogoIcon width={36} height={36} className="text-slate-800" />,
    <NotionLogoIcon width={36} height={36} className="text-slate-800" />,
    <DiscordLogoIcon width={36} height={36} className="text-slate-800" />,
    <InstagramLogoIcon width={36} height={36} className="text-slate-800" />,
    <LinkedInLogoIcon width={36} height={36} className="text-slate-800" />,
  ];

function InfiniteSlider() {
    return (
        <div className="relative m-auto w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
                {LOGOS.map((logo, index) => (
                    <div
                        className="slide flex w-[125px] items-center justify-center"
                        key={index}
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InfiniteSlider