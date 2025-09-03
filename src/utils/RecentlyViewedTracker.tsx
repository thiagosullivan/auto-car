"use client";

import { useEffect } from "react";
import { updateRecentlyViewed } from "@/actions/update-recently-viewed";

interface RecentlyViewedTrackerProps {
  slug: string | undefined;
}

export function RecentlyViewedTracker({ slug }: RecentlyViewedTrackerProps) {
  useEffect(() => {
    updateRecentlyViewed(slug);
  }, [slug]);

  return null; // Componente invisível
}
