const Name = require('../models/nameModel');
const Resume = require('../models/resumeModel');
const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const resumeFile = req.file;

    const name = new Name({ firstName, lastName });
    await name.save();

    const resume = new Resume({
      data: resumeFile.buffer,
      contentType: resumeFile.mimetype
    });
    await resume.save();

    const user = new User({
      name: name._id,
      email,
      resume: resume._id
    });
    await user.save();

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
};
