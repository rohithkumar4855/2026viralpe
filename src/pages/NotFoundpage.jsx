import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-xl w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-[#901c27] backdrop-blur-md flex items-center justify-center">
            <AlertTriangle size={48} className="text-white" />
          </div>
        </div>

        {/* 404 */}
        <h1 className="text-7xl md:text-8xl font-bold text-[#901C27]">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-[#901C27]">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-4 text-[#901C27]/80 text-base md:text-lg leading-relaxed">
          Oops! The page you're looking for doesn't exist or may have been
          moved. Let's get you back to exploring ViralPe rewards and vouchers.
        </p>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[#901C27] font-semibold hover:scale-105 transition-transform duration-300"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>

        {/* Decorative Blur Effects */}
       
      </div>
    </div>
  );
}