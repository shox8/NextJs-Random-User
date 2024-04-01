import { Button, Code } from "@nextui-org/react";
import Link from "next/link";

export default function Url({ path }: { path: string }) {
  const url = location.origin + path;

  function copyUrl() {
    navigator.clipboard.writeText(url);
  }

  return (
    <div>
      <Code className="p-2">
        <span className="text-green-200 px-2 bg-green-900 p-1 rounded-md">
          GET
        </span>
        <Link href={url} className="ml-2" target="_blank">
          {url}
        </Link>
      </Code>
      <Button onClick={copyUrl} color="success" size="sm" className="ml-2 h-9">
        Copy Url
      </Button>
    </div>
  );
}
