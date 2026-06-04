import { WifiOff, RefreshCw } from "lucide-react";

export default function NetworkError() {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-[#901c27]/10 flex items-center justify-center">
            <WifiOff size={48} className="text-[#901c27]" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl md:text-7xl font-bold text-[#901c27]">
          Network Error
        </h1>

        {/* Message */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#901c27]">
          Connection Lost
        </h2>

        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
          Unable to connect to our servers. Please check your internet
          connection and try again.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleRetry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#901c27] text-white font-medium hover:opacity-90 transition"
          >
            <RefreshCw size={18} />
            Retry
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-3 rounded-xl border border-[#901c27] text-[#901c27] font-medium hover:bg-[#901c27]/5 transition"
          >
            Go Home
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-10 p-4 rounded-2xl bg-gray-50 border border-gray-100">
          <p className="text-sm text-gray-500">
            If the problem persists, please try again later or contact support.
          </p>
        </div>
      </div>
    </div>
  );
}