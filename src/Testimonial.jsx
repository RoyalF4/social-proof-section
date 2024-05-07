export default function Testimonial({ name, credential, message, img }) {
  return (
    <div className="testimonial">
      <div className="user">
        <img src={img} alt="user avatar" className="user__img" />
        <span className="user__name">{name}</span>
        <span className="user__credential">{credential}</span>
      </div>
      <p className="review">{message}</p>
    </div>
  );
}
