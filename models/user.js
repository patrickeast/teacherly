module.exports = function (sequelize, DataTypes) {
    let User = sequelize.define('User', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [6, 128],
                    msg: "Email address must be between 6 and 128 characters in length"
                },
                isEmail: {
                    msg: "Email address must be valid"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [5],
                    msg: "Password must have at least 5 characters."
                }
            }
        },
        about: {
            type: DataTypes.TEXT
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3],
                    msg: "First name must have more than three letters."
                }
            },
            defaultValue: "Patrick",
            notEmpty: true
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: {
                    args: [3],
                    msg: "Last name must have at least 3 characters in length"
                }
            },
            defaultValue: "Jacobo"
        },
        avatar: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_login: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        email_verified: {
            type: DataTypes.ENUM('yes', 'no'),
            defaultValue: 'no'
        }
    }, {
            underscored: true
        });

    User.associate = function (models) {
        // Associating User with Stories
        // When a User is deleted, also delete any associated Stories
        User.hasMany(models.Student, {
            onDelete: "cascade"
        });
    };

    return User;
};