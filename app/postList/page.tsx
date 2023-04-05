import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
    title: "NotFound Page PostList - /postList",
};

export default function PostList() {
    return notFound();
}
