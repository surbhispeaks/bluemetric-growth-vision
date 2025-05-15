
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface InsightCardProps {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
}

const InsightCard = ({ title, excerpt, category, slug, date }: InsightCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-bluemetric-lightgray/30 overflow-hidden">
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-montserrat font-medium text-bluemetric-blue">
            {category}
          </span>
          <span className="text-sm text-gray-500">
            {date}
          </span>
        </div>
        
        <h3 className="text-xl font-montserrat font-semibold text-bluemetric-darkblue mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6">
          {excerpt}
        </p>
        
        <Link to={`/insights/${slug}`}>
          <Button variant="outline" className="border-bluemetric-blue text-bluemetric-blue hover:bg-bluemetric-blue hover:text-white">
            Read More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InsightCard;
