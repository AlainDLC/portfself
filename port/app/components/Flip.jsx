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
        <Card className="shadow-md">
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
          <CardFooter>
            <p>{footer}</p>
            <p className="ml-2">➡️ lägg till en pulserande animering pil</p>
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
            <p>⬅️</p>
          </CardFooter>
        </Card>
      </div>
    </ReactCardFlip>
  );
};
