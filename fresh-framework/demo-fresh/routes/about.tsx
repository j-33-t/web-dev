
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function About(props: PageProps) {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page created with Fresh.</p>
    </div>
  );
}
