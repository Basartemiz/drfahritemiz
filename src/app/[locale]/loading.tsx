export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin" />
        <p className="text-gray-600">Yükleniyor...</p>
      </div>
    </div>
  );
}
