import SmartLink from "../SmartLink";
import { asset } from "../../utils/asset";
import "./BlogItem.css";

export default function BlogItem({ image, title, author, date, summary, link }) {
  return (
    <SmartLink to={link} className="blog-post card">
      {image && (
        <div className="blog-post-image">
          <img src={asset(image)} alt="" loading="lazy" />
        </div>
      )}
      <div className="blog-post-content">
        <div className="blog-post-meta">
          {date} · {author}
        </div>
        <h2 className="blog-post-title">{title}</h2>
        <p className="blog-post-summary">{summary}</p>
      </div>
    </SmartLink>
  );
}
