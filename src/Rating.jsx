export default function Rating({ stars, source }) {
  return (
    <div className="rating">
      <div className="stars">
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
      </div>
      <span>{`Rated ${stars} Stars in ${source}`}</span>
    </div>
  );
}
