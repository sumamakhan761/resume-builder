// import prisma from "@/lib/prisma";
// import { resumeDataInclude } from "@/lib/types";
import { Metadata } from "next";
import ResumeEditor from "./ResumeEditor";

export const metadata: Metadata = {
  title: "Design your resume",
};

export default async function Page() {
  return <ResumeEditor/>;
}