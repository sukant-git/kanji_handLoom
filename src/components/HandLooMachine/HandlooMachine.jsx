import "./HandlooMachine.css";
import { img } from "../../assets/assests";

const HandlooMachine = () => {
  return (
    <div className="material">
    <div className="main-macine">
      <div className="thari" data-aos="slide-left">
        <div className="img_thari">
          <img src={img.thari} alt="" />
        </div>
        <div className="thari_text">
          <h1>Thari</h1>
          <p className="glow-paragraph">
            The thari is a traditional handloom weaving machine used in India,
            particularly in the production of sarees and other textiles. It
            consists of a wooden frame with a series of heddles and shuttles
            that allow the weaver to create intricate patterns and designs. The
            thari is operated manually, requiring skill and precision from the
            weaver.
          </p>
        </div>
      </div>

      <div className="atithu" data-aos="slide-right">
        <div className="img_thari">
          <img src={img.atithu} alt="" />
        </div>
        <div className="thari_text">
          <h1>Design Pallet (Achacu)</h1>
          <p className="glow-paragraph">
            The design pallet, also known as Achacu, is a crucial component used
            in traditional handloom weaving to imprint intricate patterns onto
            fabric. It holds the design structure that guides the threads during
            weaving, ensuring that the intended motifs or patterns are
            transferred accurately onto the cloth. This tool is essential for
            bringing out detailed and artistic designs in handwoven textiles.
          </p>
        </div>
      </div>

      <div className="nada" data-aos="slide-left">
        <div className="img_thari">
          <img src={img.nada} alt="" />
        </div>
        <div className="thari_text">
          <h1>Shuttle (Nada)</h1>
          <p className="glow-paragraph">
            The thari is a traditional handloom weaving machine used in India, particularly in the production of sarees and other textiles. Itconsists of a wooden frame with a series of heddles and shuttles that allow the weaver to create intricate patterns and designs. The
            thari is operated manually, requiring skill and precision from the
            weaver.
          </p>
        </div>
      </div>

      <div className="rati" data-aos="slide-right">
        <div className="img_thari">
          <img src={img.rati} alt="" />
        </div>
        <div className="thari_text">
          <h1>Spinning Wheel (Rati)</h1>
          <p className="glow-paragraph">
            The spinning wheel, traditionally called Rati, is a manual device
            used to spin natural fibers like cotton or wool into yarn. It plays
            a foundational role in the weaving process by producing the thread
            that will be used on the loom. Operated by hand and foot, the wheel
            twists and winds the fibers into continuous strands, preparing them
            for weaving into fabric. Its use requires patience, rhythm, and skill.
          </p>
        </div>
      </div>

      <div className="bond" data-aos="slide-left">
        <div className="img_thari">
          <img src={img.urayali} alt="" />
        </div>
        <div className="thari_text">
          <h1>Beam (Urulai)</h1>
          <p className="glow-paragraph">
            The thari is a traditional handloom weaving machine used in India,
            particularly in the production of sarees and other textiles. It
            consists of a wooden frame with a series of heddles and shuttles
            that allow the weaver to create intricate patterns and designs. The
            thari is operated manually, requiring skill and precision from the
            weaver.
          </p>
        </div>
      </div>

      <hr />
    </div>
    </div>
  );
};

export default HandlooMachine;
