import "../../assets/styles/Info.css";
const Info = (props) => {
  const { info } = props;

  return (
    <div className="info">
      <img src={info.avatar} />
      <p>
        Hello, my name is {info.name}, I'm {info.age} years old and I study at{" "}
        {info.school}.
      </p>
      <p>This is my project for beginner ReactJS </p>
    </div>
  );
};
export default Info;
