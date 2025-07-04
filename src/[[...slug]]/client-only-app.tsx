"use client";

import dynamic from "next/dynamic";

export const ClientOnlyApp = dynamic(() => import("../components/App/App"), {
  ssr: false,
});
