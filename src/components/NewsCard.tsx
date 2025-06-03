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
    <article className="bg-newspaper-dark-bg dark-newspaper border border-newspaper-dark-border rounded-sm overflow-hidden hover:shadow-lg transition-shadow relative stripe-decoration stripe-left">
      <div className="relative star-decoration star-top-left star-small">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-2 left-2">
          <span className="bg-newspaper-dark-text text-newspaper-dark-bg px-2 py-1 text-xs font-open-sans font-semibold uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6 relative star-decoration star-bottom-right star-small">
        <h3 className="font-merriweather font-bold text-xl text-newspaper-dark-text leading-tight mb-3 relative stripe-decoration stripe-horizontal">
          {title}
        </h3>
        <p className="font-open-sans text-newspaper-dark-text-muted text-sm leading-relaxed mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-xs font-open-sans text-newspaper-dark-text-muted">
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
