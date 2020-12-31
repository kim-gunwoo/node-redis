module.exports = (sequelize, DataTypes) => {
  const Tests = sequelize.define("Tests", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      comment: "아이디",
    },
    col1: {
      type: DataTypes.STRING,
      comment: "테스트 컬럼1",
    },
    col2: {
      type: DataTypes.STRING,
      comment: "테스트 컬럼2",
    },
    cole3: {
      type: DataTypes.STRING,
      comment: "테스트 컬럼3",
    },
  });

  return Tests;
};

/*
insert into Tests (col1,col2,cole3,createdAt,updatedAt)
values('col1-data2','col2-data2','col3-data3',sysdate(),sysdate());
*/
