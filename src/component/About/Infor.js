import "./infor.css";
import ListComponent from "../ListComponent";
function Infor({ data }) {
  return (
    <>
      {data.education.map((e) => (
        <div key={e} className="education">
          <h2 className="education__title">
            <span>Học Vấn</span>
          </h2>
          <div className="school">
            <div className="school__image">
              <img src={data.tdtu_icon} />
            </div>
            <span className="school__name">{e.school}</span>
          </div>
          <div className="major">
            {e.major}
            <i className="education-time"> {`( ${e.time} )`}</i>
          </div>
          <p className="gpa">{e.gpa}</p>
        </div>
      ))}


      <div className="work">
        <h2>
          <span>Kinh Nghiệm</span>
        </h2>
        {data.work.map((e) => (
          <div key={e}>

            <h4 className="company working-time">{`${e.company} (${e.time})`}</h4>

            {e.task.map((e) => (
              <div key={e} className="task">
                {/* <p>{e}</p> */}
                <p dangerouslySetInnerHTML={{ __html: `${e}` }} />
              </div>
            ))}
          </div>
        ))}
      </div>


      <ListComponent data={data.skill} />

      <div className="content-skill">
        <h2>
          <span>Kĩ Năng</span>
        </h2>
        {data.skill.map((e) => {
          if (e.icon == "") {
            return;
          } else {
            return (
              <div key={e.value} className="skill">
                <div className="skill__name">{e.key}</div>
                <div className="skill__value">
                  <span> : </span>
                  {e.value}
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="ceritficate">
        <h2>
          <span>Chứng Chỉ</span>
        </h2>
        {data.ceritficate.map((e) => (
          <div key={e} className="certificate__name">
            {e}
          </div>
        ))}
      </div>
    </>
  );
}

export default Infor;
