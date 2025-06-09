import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Flip = ({ name, title, description, footer, links, stars }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* FRONT */}
      <div onClick={() => setIsFlipped(true)} className="cursor-pointer">
        <Card className="shadow-md w-full h-[340px]">
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
          <CardFooter className="flex items-center justify-center space-x-2 ">
            <p>{footer}</p>
            <p className="animate-pulse transform hover:scale-110 transition-transform duration-500">
              ➡️
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* BACK */}
      <div onClick={() => setIsFlipped(false)} className="cursor-pointer">
        <Card className="shadow-md w-[320px] h-[340px] ">
          <img
            src="/a.png"
            alt="Bild"
            className="w-[120px] h-[120px] object-cover mx-auto  "
          />
          <CardHeader>
            <CardTitle className="text-black ">Länkar från {name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="  list-disc pl-4 space-y-2 text-blue-600">
              {links?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="  mr-2 ">
            <p className="animate-pulse transform hover:scale-110 transition-transform duration-500">
              ⬅️
            </p>
          </CardFooter>
        </Card>
      </div>
    </ReactCardFlip>
  );
};
