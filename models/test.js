module.exports = function(sequelize, DataTypes) {
    let Test = sequelize.define("Test", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3],
                    msg: "Title must have at least three characters."
                }
            }
        },
        description: {
            type: DataTypes.String,
            allowNull: false,
            validate: {
                len: {
                    args: [3],
                    msg: "Description must have at least three characters."
                }
            }
        },
        completed: {
            type: DataTypes.BOOLAN,
            defaultValue: false,
        }
    });

    Test.associate = function(models) {
        Test.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Test;
};