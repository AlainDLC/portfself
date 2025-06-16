import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowDownCircle,
  ArrowDownRight,
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  ArrowUp,
} from "lucide-react";

export const Flip = ({ name, title, description, footer, links, stars }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* FRONT */}
      <div onClick={() => setIsFlipped(true)} className="cursor-pointer">
        <Card className="hover:shadow-xl relative shadow-sm w-auto md:h-[340px] h-[420px] md:w-[380px] xl:w-[310px] xl:h-[340px]">
          <CardHeader>
            <CardTitle>
              <p className="ml-1">{name} </p>
            </CardTitle>
            <CardDescription>
              <p className="ml-1">{title} </p>
            </CardDescription>
            <p className="">{"⭐️".repeat(stars)}</p>
          </CardHeader>
          <CardContent>
            <p className="ml-1">{description} </p>
          </CardContent>
          <CardFooter className="flex items-center justify-center space-x-2 group">
            <p>{footer}</p>
          </CardFooter>

          {/* ArrowRight längst ner till höger */}
          <div className="absolute bottom-3 right-3 group rotate-120 hover:rotate-180">
            <p className="group-hover:animate-bounce  ">
              <ArrowLeft className="text-red-400 h-6 w-6 hover:text-red-600" />
            </p>
          </div>
        </Card>
      </div>

      {/* BACK */}
      <div onClick={() => setIsFlipped(false)} className="cursor-pointer">
        <Card className=" shadow-md md:w-[320px] md:h-[340px]   h-[420px] xl:w-[310px] w-[180px] xl:h-[340px]">
          <img
            src="/a.png"
            alt="Bild"
            className="w-[120px] h-[120px] object-cover mx-auto"
          />
          <CardHeader>
            <CardTitle className="text-black text-center">
              Länkar från {name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <span className="list-disc pl-4 space-y-2 text-blue-600 text-center">
              {links?.map((link, index) => (
                <p key={index} className="text-center">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                </p>
              ))}
            </span>
          </CardContent>

          {/* ArrowLeft längst ner till vänster */}
          <div className="absolute bottom-3 left-3 group">
            <p className="group-hover:animate-bounce rotate-45 hover:rotate-0">
              <ArrowLeft className="text-red-400 h-6 w-6 hover:text-red-600" />
            </p>
          </div>
        </Card>
      </div>
    </ReactCardFlip>
  );
};
