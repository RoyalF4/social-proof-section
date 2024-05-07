export default function Testimonial({ name, credential, message, img }) {
  return (
    <div className="testimonial">
      <div className="user">
        <img src={img} alt="user avatar" className="user__img" />
        <div className="user__info">
          <span className="name">{name}</span>
          <span className="credential">{credential}</span>
        </div>
      </div>
      <p className="review">{`" ${message} "`}</p>
    </div>
  );
}
