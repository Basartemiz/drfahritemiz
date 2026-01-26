'use client';

import { Link } from '@/i18n/navigation';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Sayfa Bulunamadı
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 btn-primary"
          >
            <Home size={18} />
            Ana Sayfa
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <ArrowLeft size={18} />
            Geri Dön
          </button>
        </div>
      </div>
    </div>
  );
}
