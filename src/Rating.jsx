export default function Rating({ stars, source }) {
  return (
    <div className="rating">
      <div className="rating__stars">
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
        <img src="/images/icon-star.svg" alt="" />
      </div>
      <span className="rating__text">{`Rated ${stars} Stars in ${source}`}</span>
    </div>
  );
}
