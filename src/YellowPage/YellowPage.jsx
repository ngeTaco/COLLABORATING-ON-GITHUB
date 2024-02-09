import avatarImage from './assets/images/image-avatar.webp'
import blogCardImage from './assets/images/illustration-article.svg'
import './YellowPage.css'

export const YellowPage = () => {
  return (
    <main>
      <div className="blog-card">
        <img alt="" className="blog-card-image" src={blogCardImage} />
        <div className="blog-card-category-label">Learning</div>
        <p className="blog-card-publish-date">Published 21 Dec 2023</p>
        <h2 className="blog-card-title">HTML & CSS foundations</h2>
        <p className="blog-card-description">These languages are the backbone of every website, defining structure, content, and presentation.</p>
        <div className="blog-card-avatar-flex">
          <img alt="" src={avatarImage} />
          <p>Greg Hooper</p>
        </div>
      </div>
    </main>
  )
}