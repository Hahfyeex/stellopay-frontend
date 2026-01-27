"use client";

import dynamic from "next/dynamic";

const AnalyticsViews = dynamic(() => import("./analytics-view"), {
  ssr: false,
});

interface ClientAnalyticsViewProps {
  isLoading?: boolean;
}

export default function ClientAnalyticsView({ isLoading = false }: ClientAnalyticsViewProps) {
  return <AnalyticsViews isLoading={isLoading} />;
}
