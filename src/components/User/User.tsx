const userInfo = {
  name: "Alex Kognitiv",
  email: "Alexkognitiv@gmail.com",
  image:
    "https://media.istockphoto.com/id/540531500/photo/hes-got-a-keen-sense-of-business-and-style.jpg?s=612x612&w=0&k=20&c=m1grDVYCxEF9Di51wuoaCtOxskfAejWOtSfwpezsG88=",
};

import scss from "./user.module.scss";

const User = () => {
  return (
    <div className={scss.user}>
      <div className={scss.info}>
        <span className={scss.name}>{userInfo.name}</span>
        <span className={scss.email}>{userInfo.email}</span>
      </div>

      <img className={scss.img} src={userInfo.image} alt="User Image" />
    </div>
  );
};

export default User;
