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
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-1">
              <CardTitle>{name}</CardTitle>
              <CardDescription>{title}</CardDescription>
              <div className="text-yellow-500 text-lg">
                {"⭐️".repeat(stars)}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p>{description}</p>
          </CardContent>
          <CardFooter>
            <p>{footer}</p>
          </CardFooter>
        </Card>
      </div>

      {/* BACK */}
      <div onClick={() => setIsFlipped(false)} className="cursor-pointer">
        <Card>
          <CardHeader>
            <CardTitle>Länkar från {name}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-4 space-y-2 text-blue-600">
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
          <CardFooter>
            <p>Klicka för att vända tillbaka</p>
          </CardFooter>
        </Card>
      </div>
    </ReactCardFlip>
  );
};
