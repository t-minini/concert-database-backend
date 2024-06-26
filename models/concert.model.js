import { Schema, model } from 'mongoose';

const concertSchema = Schema(
  {
    tour: {
      type: String,
      required: [true, 'Please, enter concert!'],
    },
    artist: {
      type: String,
      required: [true, 'Please, enter artist!'],
    },
    year: {
      type: Number,
      required: [true, 'Please, enter concert date!'],
    },
    city: {
      type: String,
      required: [true, 'Please, enter city!'],
    },
    country: {
      type: String,
      required: [true, 'Please, enter country!'],
    },
    rating: {
      type: Number,
      required: [true, 'Please, enter rating!'],
      enum: [1, 2, 3, 4, 5],
    }
  },
  {
    timestamps: true,
  }
);

const ConcertModel = model('Concert', concertSchema);

export default ConcertModel;

// THIS CODE: DEFINES A MONGOOSE SCHEMA FOR STORING THE CONCERT DATA IN THE MONGODB DATABASE, CREATES A MODEL BASED ON THE SCHEMA, AND EXPORTS THE MODEL.
