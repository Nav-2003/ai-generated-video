import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

function EmptyState() {
  return (
    <div className="flex justify-center items-center h-full p-8">
      <div className="max-w-md w-full border-2 border-dashed border-purple-500 rounded-2xl p-10 text-center shadow-md bg-white animate-fade-in">
        <div className="flex justify-center mb-4 text-purple-600">
          <Sparkles className="h-10 w-10" />
        </div>
        <h2 className="text-xl font-semibold text-purple-700 mb-2">
          No Short Videos Yet
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          You haven't created any short videos. Start now and bring your ideas to life!
        </p>
        <Link href={'dashboard/create-new'}>
        <Button className="bg-purple-700 hover:bg-purple-800 transition duration-300 cursor-pointer">
          + Create New Short Video
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyState;
