'use client';

import { useEffect } from 'react';
import { RefreshCw, Home } from 'lucide-react';
import { Link } from '@/i18n/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
          <span className="text-4xl">!</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Bir Hata Oluştu
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sayfa yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 btn-primary"
          >
            <RefreshCw size={18} />
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <Home size={18} />
            Ana Sayfa
          </Link>
        </div>
      </div>
    </div>
  );
}
