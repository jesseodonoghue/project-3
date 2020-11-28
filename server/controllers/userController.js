const db = require("../models");

// Defining methods for the userController
module.exports = {
  getUser: (req, res, next) => {
    console.log('getUser:', req.user);
    if (req.user) {
      return res.json({ user: req.user });
    } else {
      return res.json({ user: null });
    }
  },
  register: (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    // ADD VALIDATION
    db.User.findOne({ 'email': email }, (err, userMatch) => {
      if (userMatch) {
        return res.json({
          error: `Sorry, already a user with the email: ${email}`
        });
      }
      const newUser = new db.User({
        'firstName': firstName,
        'lastName': lastName,
        'email': email,
        'password': password
      });
      newUser.save((err, savedUser) => {
        if (err) return res.json(err);
        return res.json(savedUser);
      });
    });
  },
  updateProfile: (req, res) => {
    const { firstName, lastName, email, image, bio, linkedin, github, jsMentor, jsStudent, htmlMentor, htmlStudent, cssMentor, cssStudent, nodejsMentor, nodejsStudent, expressMentor, expressStudent, reactMentor, reactStudent, mongodbMentor, mongobdStudent, mysqlMentor, mysqlStudent } = req.body;
    db.User.findOneAndUpdate({
      _id: req.params.id
    }, req.body, { new: true }
    ).then(dbModel => res.json(dbModel)
    ).catch(err => res.status(422).json(err));
  },
  findById: (req, res) => {
    db.User
    .findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findMentor: (req, res) => {
    let query = {};

    switch (req.params.language) {
      case "JavaScript":
        query = {jsMentor: true};
        break;
      case "HTML":
        query = {htmlMentor: true};
        break;
      case "CSS":
        query = {cssMentor: true};
        break;
      case "jQuery":
        query = {jqueryMentor: true};
        break;
      case "Nodejs":
        query = {nodejsMentor: true};
        break;
      case "Express":
        query = {expressMentor: true};
        break;
      case "React":
        query = {reactMentor: true};
        break;
      case "MongoDB":
        query = {mongodbMentor: true};
        break;
      case "mySQL":
        query = {mysqlMentor: true};
        break;      
    }

    db.User
    .find(query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findStudent: (req, res) => {
    let query = {};
    
    switch (req.params.language) {
      case "JavaScript":
        query = {jsStudent: true};
        break;
      case "HTML":
        query = {htmlStudent: true};
        break;
      case "CSS":
        query = {cssStudent: true};
        break;
      case "jQuery":
        query = {jqueryStudent: true};
        break;
      case "Nodejs":
        query = {nodejsStudent: true};
        break;
      case "Express":
        query = {expressStudent: true};
        break;
      case "React":
        query = {reactStudent: true};
        break;
      case "MongoDB":
        query = {mongodbStudent: true};
        break;
      case "mySQL":
        query = {mysqlStudent: true};
        break;      
    }

    db.User
    .find(query)
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  logout: (req, res) => {
    if (req.user) {
      req.session.destroy();
      res.clearCookie('connect.sid'); // clean up!
      return res.json({ msg: 'logging you out' });
    } else {
      return res.json({ msg: 'no user to log out!' });
    }
  },
  auth: function(req, res, next) {
		console.log('auth:', req.body);
		next();
  },
  authenticate: (req, res) => {
		const user = JSON.parse(JSON.stringify(req.user)); // hack
    const cleanUser = Object.assign({}, user);
    console.log('authenticate:', user);
		if (cleanUser) {
			// console.log(`Deleting ${cleanUser.password}`);
			delete cleanUser.password;
		}
		res.json({ user: cleanUser });
	}
};