"use client";

export function updateRecentlyViewed(slug: string | undefined) {
  // Verificar se está no cliente
  if (typeof window === "undefined") return;

  const recentlyViewed = JSON.parse(
    localStorage.getItem("recentlyViewedCars") || "[]"
  );

  // Remover duplicatas
  const filtered = recentlyViewed.filter(
    (car: { slug: string | undefined }) => car.slug !== slug
  );

  // Adicionar novo e limitar a 8 itens
  const updated = [
    { slug, timestamp: new Date().toISOString() },
    ...filtered,
  ].slice(0, 8);

  localStorage.setItem("recentlyViewedCars", JSON.stringify(updated));
}
