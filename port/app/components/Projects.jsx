import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {/* Card 1 */}
      <Card>
        <CardHeader>
          <CardTitle>AI Generate Course</CardTitle>
          <CardDescription>
            Kräver egen API-nyckel – funkar med Gemini ,OpenAi.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="/Plattform3.png"
            alt="AI Generate Course"
            className="w-100 h-40 rounded-lg mb-4 hover:scale-103 shadow-md "
          />
          <p className="text-sm text-gray-700 mb-2">
            Skapa egna AI-drivna utbildningar med Youtube.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1">
          <a
            href="https://github.com/AlainDLC/Ai-generate-course/tree/main"
            className="text-blue-600 hover:underline text-sm"
            target="_blank"
          >
            GitHub Repo
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7307320003349962752/"
            className="text-blue-600 hover:underline text-sm"
            target="_blank"
          >
            Visa på LinkedIn
          </a>
        </CardFooter>
      </Card>

      {/* Card 2 */}
      <Card>
        <CardHeader>
          <CardTitle>AI Wireframe to Code</CardTitle>
          <CardDescription>
            Omvandla skisser till kod. Kräver Gemini API-nyckel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="/Plattform2.png"
            alt="Wireframe to Code"
            className="w-100 h-40 rounded-lg mb-4 hover:scale-103 shadow-md "
          />
          <p className="text-sm text-gray-700 mb-2">
            Testa hur AI tolkar design och genererar färdig kod.
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-1">
          <a
            href="https://github.com/AlainDLC/Ai-wireframe-to-code"
            className="text-blue-600 hover:underline text-sm"
            target="_blank"
          >
            GitHub Repo
          </a>
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7295373921434951680/"
            className="text-blue-600 hover:underline text-sm"
            target="_blank"
          >
            Visa på LinkedIn
          </a>
        </CardFooter>
      </Card>

      {/* Card 3 */}
      <Card>
        <CardHeader>
          <CardTitle>LMS System</CardTitle>
          <CardDescription>
            Online kurs byggd i Next.js – responsiv och skalbar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img
            src="/Plattform.png"
            alt="LMS System"
            className="w-100 h-40 rounded-lg mb-4 hover:scale-103 shadow-md "
          />
          <p className="text-sm text-gray-700 mb-2">
            Innehåller kurser, inloggning, framstegsspårning och mer.
          </p>
        </CardContent>
        <CardFooter>
          <a
            href="https://dlct-pixie-system.vercel.app/"
            className="text-blue-600 hover:underline text-sm"
            target="_blank"
          >
            Besök sidan
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
