const { Schema, model } = require("mongoose");

const MovieSchema = new Schema(
  {
    _id: {
      $oid: {
        type: "ObjectId",
      },
    },
    title: {
      type: "String",
    },
    year: {
      $numberInt: {
        type: "Date",
      },
    },
    runtime: {
      $numberInt: {
        type: "Date",
      },
    },
    released: {
      $date: {
        $numberLong: {
          type: "String",
        },
      },
    },
    plot: {
      type: "String",
    },
    fullplot: {
      type: "String",
    },
    lastupdated: {
      type: "Date",
    },
    type: {
      type: "String",
    },
    directors: {
      type: ["String"],
    },
    imdb: {
      rating: {
        $numberDouble: {
          type: "Date",
        },
      },
      votes: {
        $numberInt: {
          type: "Date",
        },
      },
      id: {
        $numberInt: {
          type: "Date",
        },
      },
    },
    countries: {
      type: ["String"],
    },
    genres: {
      type: ["String"],
    },
    tomatoes: {
      viewer: {
        rating: {
          $numberDouble: {
            type: "Date",
          },
        },
        numReviews: {
          $numberInt: {
            type: "Date",
          },
        },
      },
      lastUpdated: {
        $date: {
          $numberLong: {
            type: "String",
          },
        },
      },
    },
    num_mflix_comments: {
      $numberInt: {
        type: "Date",
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = model("Movie", MovieSchema);
