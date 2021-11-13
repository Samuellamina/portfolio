import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.ibb.co/zZ5gfrd/IMG-2727.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">heyyyyy who am i?.</p>
        <p className="a-desc">
          I am ambituous and positive, i like to believe in myself, my teammates
          and friends. I love coding and taking pictures. <br /> i like a lot of
          things, some namely, i love to read (i am always looking to gain
          knowledge) especially knowledge that can make me more efficient.{" "}
          <br /> I like playing games, Football manager is my absolute favorite
          game. <br /> I like Sci-fi and apocalyptic movies. I am an avid
          football fan, Glory Glory Man United. <br /> I like getting up early,
          working out.
        </p>
        <div className="a-award">
          {/* <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
