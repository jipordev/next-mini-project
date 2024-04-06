
"use client";

import { Spinner } from "flowbite-react";

export default function LoadingComponent() {
  return (
      <div className="bg-[whitesmoke] grid h-screen m-auto">
      <Spinner size='xl' aria-label="Default status example" />
      </div>
  )
}
