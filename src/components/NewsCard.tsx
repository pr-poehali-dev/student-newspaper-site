interface NewsCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
  readTime: string;
}

const NewsCard = ({
  title,
  excerpt,
  author,
  date,
  category,
  imageUrl,
  readTime,
}: NewsCardProps) => {
  return (
    <article className="bg-newspaper-white border border-newspaper-border-gray hover:shadow-lg transition-shadow duration-200">
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 left-3">
          <span className="bg-newspaper-black text-newspaper-white px-2 py-1 text-xs font-open-sans font-semibold uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-merriweather font-bold text-xl text-newspaper-black leading-tight mb-3 hover:text-newspaper-medium-gray transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="font-open-sans text-newspaper-medium-gray text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs font-open-sans text-newspaper-medium-gray">
          <div className="flex items-center space-x-2">
            <span>{author}</span>
            <span>•</span>
            <span>{date}</span>
          </div>
          <span>{readTime}</span>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
