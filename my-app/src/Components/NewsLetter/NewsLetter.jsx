import "./NewsLetter.css";

function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclusive Offers On Your Registered Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="enter your email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
export default NewsLetter;
