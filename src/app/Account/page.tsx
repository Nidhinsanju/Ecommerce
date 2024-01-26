import AccoutSettings from "@/components/accoutPress";
import name from "@/components/accoutPress";
import { NextApiRequest, NextApiResponse } from "next";
export default async function Account() {
  return (
    <div>
      <AccoutSettings />
    </div>
  );
}
