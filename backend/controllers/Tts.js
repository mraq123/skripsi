import axios from "axios";

export const getTts = async (req, res) => {
  try {
    const { text } = req.body;
    const apiKey = "AIzaSyCMXeVXkZAWcJCC6kQn29rowmzwJhsZM0Y"; // Ganti dengan API Key Anda
    const url = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;

    const data = {
      input: { text: text },
      voice: { languageCode: "id-ID", name: "id-ID-Standard-B" },
      audioConfig: {
        audioEncoding: "LINEAR16",
        effectsProfileId: ["telephony-class-application"],
        pitch: 0,
        speakingRate: 1,
      },
    };

    const response = await axios.post(url, data);
    res.json(response.data);
  } catch (error) {
    console.error(
      "Error converting text to speech:",
      error.response ? error.response.data : error.message
    );
    res.status(500).send("Error converting text to speech");
  }
};
