const mongoose = require("mongoose");

const sensorDataSchema = new mongoose.Schema(
  {
    tempInside: {
      type: Number,
      required: true
    },

    tempOutside: {
      type: Number,
      required: true
    },

    humidityInside: {
      type: Number,
      required: true
    },

    humidityOutside: {
      type: Number,
      required: true
    },

    location: {
      latitude: {
        type: Number,
        required: true
      },
      longitude: {
        type: Number,
        required: true
      }
    },

    peltier: {
      type: String,
      enum: ["ON", "OFF"],
      required: true
    }
  },
  {
    timestamps: true
  }
);

// 🔥 Index for faster time-based queries
sensorDataSchema.index({ createdAt: -1 });

module.exports = mongoose.model("SensorData", sensorDataSchema);
