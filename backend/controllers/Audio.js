import Audio from "../models/AudioModel.js";
import multer from "multer";

// upload file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder penyimpanan file
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + file.originalname);
  },
});

export const upload = multer({ storage: storage });
// endd

export const getAudio = async (req, res) => {
  try {
    const response = await Audio.findAll();
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAudioById = async (req, res) => {
  try {
    const response = await Audio.findOne({ where: { id: req.params.id } });
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAudio = async (req, res) => {
  const { keterangan_audio } = req.body;
  const audio_name_input = req.file.filename; // Nama file dari multer

  try {
    const response = await Audio.create({
      audio_name_input: audio_name_input,
      keterangan_audio: keterangan_audio,
    });
    res.status(200).json({ message: "Audio Berhasil Dibuat", data: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAudio = async (req, res) => {
  const audio = await Audio.findOne({ where: { id: req.params.id } });
  if (!audio) {
    return res.status(404).json({ message: "Audio Tidak Ditemukan" });
  }

  // Mengambil data dari request body. Jika ada file baru, gunakan nama file baru, jika tidak, gunakan nama file lama.
  const { keterangan_audio } = req.body;
  const audio_name_input = req.file
    ? req.file.filename
    : audio.audio_name_input;

  try {
    const response = await Audio.update(
      {
        audio_name_input: audio_name_input,
        keterangan_audio: keterangan_audio,
      },
      { where: { id: audio.id } }
    );
    if (response[0] === 0) {
      // Memeriksa apakah ada baris yang terupdate
      return res
        .status(404)
        .json({ message: "Tidak ada perubahan pada data audio" });
    }
    res
      .status(200)
      .json({ message: "Audio Berhasil Di Update", data: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteAudio = async (req, res) => {
  {
    const audio = await Audio.findOne({ where: { id: req.params.id } });
    if (!audio) {
      return res.status(404).json({ message: "Audio Tidak Ditemukan" });
    }

    try {
      const response = await Audio.destroy({ where: { id: audio.id } });
      res
        .status(200)
        .json({ message: "Audio Berhasil Di Delete", data: response });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
