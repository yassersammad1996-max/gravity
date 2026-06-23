const rules = require("../validators/userValidator");

function validateUser(req, res, next) {
  const { name, email } = req.body;
  const errors = [];

  // Name validation
  if (rules.name.required && !name) {
    errors.push("Name is required");
  }

  if (
    name &&
    (name.length < rules.name.minLength ||
      name.length > rules.name.maxLength)
  ) {
    errors.push(
      `Name must be between ${rules.name.minLength} and ${rules.name.maxLength} characters`
    );
  }

  // Email validation
  if (rules.email.required && !email) {
    errors.push("Email is required");
  }

  if (email && !rules.email.pattern.test(email)) {
    errors.push("Invalid email format");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      errors,
    });
  }

  next();
}

module.exports = validateUser;
