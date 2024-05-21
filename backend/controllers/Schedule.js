import Schedule from "../models/ScheduleModel.js";
import Audio from "../models/AudioModel.js";

export const getSchedule = async (req, res) => {
  try {
    const response = await Schedule.findAll({
      include: [
        {
          model: Audio,
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getScheduleById = async (req, res) => {
  try {
    const response = await Schedule.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createSchedule = async (req, res) => {
  try {
    const { jam, keterangan_schedule, audioId } = req.body;
    const schedule = await Schedule.create({
      jam,
      keterangan_schedule,
      audioId,
    });
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateSchedule = async (req, res) => {
  try {
    const { jam, keterangan_schedule, audioId } = req.body;
    const scheduleId = req.params.id;

    const updatedSchedule = await Schedule.update(
      { jam, keterangan_schedule, audioId },
      { where: { id: scheduleId } }
    );

    if (updatedSchedule[0] === 1) {
      res.status(200).json({ message: "Berhasil Update Schdule" });
    } else {
      res
        .status(404)
        .json({ message: "Schedule not found or could not be updated" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteSchedule = async (req, res) => {
  try {
    const scheduleId = req.params.id;
    const deletedSchedule = await Schedule.destroy({
      where: { id: scheduleId },
    });

    if (deletedSchedule === 1) {
      res.status(200).json({ message: "Schedule deleted successfully" });
    } else {
      res
        .status(404)
        .json({ message: "Schedule not found or could not be deleted" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
