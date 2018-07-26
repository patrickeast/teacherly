module.exports = ((sequelize, DataTypes) => {
    let Student = sequelize.define('Student', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            tyep: DataTypes.INTEGER
        },
        student_id: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [2],
                    msg: "Student ID must contain at least two numbers (i.e. 01 for 1"
                },
            }
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3],
                    msg: "Student first name must be greater than three characters"
                }
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3],
                    msg: "Student last name must be greater than three characters."
                }
            }
        },
        average_grade: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "No data yet."
        }

    }, {
            underscored: true
        });
    Student.associate = function(models) {
        Student.belongsTo(models.User);
        Student.hasMany(models.Test, {
            onDelete: "cascade"
        });
        Student.hasMany(models.gradedTest, {
            onDelete: "cascade"
        });
    };

    return Student;
});
