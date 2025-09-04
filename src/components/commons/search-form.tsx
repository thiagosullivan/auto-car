// // app/components/SearchForm.tsx
// "use client";

// import { useRouter } from "next/navigation";
// import { useCallback, useState } from "react";
// import { Button } from "../ui/button";

// interface SearchFormProps {
//   initialSearch?: string;
// }

// export default function SearchForm({ initialSearch = "" }: SearchFormProps) {
//   const router = useRouter();
//   const [search, setSearch] = useState(initialSearch);

//   const handleSubmit = useCallback(
//     (e: React.FormEvent) => {
//       e.preventDefault();
//       console.log(search, "Search terms");
//       const params = new URLSearchParams();
//       if (search.trim()) {
//         params.set("search", search.trim());
//       } else {
//         params.delete("search");
//       }

//       // Atualiza a URL sem recarregar a página
//       router.push(`/carros?${params.toString()}`);
//     },
//     [search, router]
//   );

//   const handleClear = useCallback(() => {
//     setSearch("");
//     router.push("/carros");
//   }, [router]);

//   return (
//     <form onSubmit={handleSubmit} className="">
//       <div className="flex gap-4">
//         <input
//           type="text"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Buscar carros por nome, modelo, marca..."
//           className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//         />
//         <div className="flex gap-4">
//           <Button
//             type="submit"
//             className="px-6 py-2 bg-red-one text-white rounded-lg hover:bg-red-one/80 transition-colors"
//           >
//             Buscar
//           </Button>
//           {search && (
//             <Button
//               type="button"
//               onClick={handleClear}
//               className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors"
//             >
//               Limpar
//             </Button>
//           )}
//         </div>
//       </div>
//     </form>
//   );
// }

// components/SearchForm.tsx
"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

interface SearchFormProps {
  initialSearch?: string;
  placeholder?: string;
}

export default function SearchForm({
  initialSearch = "",
  placeholder = "Buscar carros por nome, modelo, combustível ou marca...",
}: SearchFormProps) {
  const router = useRouter();
  const [search, setSearch] = useState(initialSearch);
  const [isLoading, setIsLoading] = useState(false);

  // Sincronizar com searchParams iniciais
  useEffect(() => {
    setSearch(initialSearch);
  }, [initialSearch]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      setIsLoading(true);

      const params = new URLSearchParams();
      if (search.trim()) {
        params.set("search", search.trim());
      } else {
        params.delete("search");
      }

      router.push(`/carros?${params.toString()}`);

      // Pequeno delay para feedback visual
      setTimeout(() => setIsLoading(false), 500);
    },
    [search, router]
  );

  const handleClear = useCallback(() => {
    setSearch("");
    router.push("/carros");
  }, [router]);

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative flex items-center">
        <div className="relative flex-1">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-lg placeholder-gray-400"
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div className="ml-2 flex space-x-2">
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-w-[120px]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Buscando
              </div>
            ) : (
              "Buscar"
            )}
          </button>

          {search && (
            <button
              type="button"
              onClick={handleClear}
              disabled={isLoading}
              className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors disabled:opacity-50"
            >
              Limpar
            </button>
          )}
        </div>
      </div>

      {search && (
        <p className="text-sm text-gray-500 mt-2">
          Buscando por: <strong>{search}</strong>
        </p>
      )}
    </form>
  );
}
