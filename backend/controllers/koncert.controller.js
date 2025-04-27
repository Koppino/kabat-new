import Koncert from "../models/koncert.model.js";

export const createKoncert = async (req, res) => {
  try {
    const { den, mesic, rok, text, mesto, denVTydnu } = req.body;

    if (!den || !mesic || !rok || !text || !mesto || !denVTydnu) {
      res.status(500).json({
        msg: "All fields are required.",
      });
    }

    const datumdate = new Date(`${mesic}-${den}-${rok} 22:00:00`);

    const koncert = new Koncert({
      datum: datumdate,
      mesto: mesto,
      text: text,
      denVTydnu: denVTydnu,
      datumString: `${den}.${mesic}.${rok}`,
    });

    await koncert.save();

    res
      .status(200)
      .json({ msg: "koncert succesfully added.", koncert: koncert });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getKoncerts = async (req, res) => {
  try {
    const koncerty = await Koncert.find({ isDeleted: false }, null, {
      sort: { datum: 1 },
    });

    res.status(200).json(koncerty);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteKoncert = async (req, res) => {
  try {
    const koncert = await Koncert.findOne({
      isDeleted: false,
      _id: req.params.id,
    });
    koncert.isDeleted = true;
    await koncert.save();
    res.status(200).json({ msg: "koncert is deleted." });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
