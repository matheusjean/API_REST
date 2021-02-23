import Sequelize, { Model } from 'sequelize';

class File extends Model {
  static init (sequelize) {
    super.init(
      {
      // Primeiro parametro
      name: Sequelize.STRING,
      path: Sequelize.STRING,
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${process.env.APP_URL}/files/${this.path}`;
        },
      },
    },

    {
      // Segundo parametro
      sequelize,
    }
    );
    return this;
  }
}

export default File;
