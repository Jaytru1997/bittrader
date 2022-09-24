class Templates {
  async home(req, res) {
    try {
      res.render("index", {});
    } catch (err) {
      res.render("error", {});
    }
  }

  async about(req, res) {
    try {
      res.render("about", {});
    } catch (err) {
      res.render("error", {});
    }
  }

  async process(req, res) {
    try {
      res.render("process", {});
    } catch (err) {
      res.render("error", {});
    }
  }

  async why(req, res) {
    try {
      res.render("why", {});
    } catch (err) {
      res.render("error", {});
    }
  }

  async contact(req, res) {
    try {
      res.render("contact", {});
    } catch (err) {
      res.render("error", {});
    }
  }

  async login(req, res) {
    if (req.method == "GET") {
      try {
        res.render("login", {});
      } catch (err) {
        res.render("error", {});
      }
    }
  }

  async register(req, res) {
    if (req.method == "GET") {
      try {
        res.render("register", {});
      } catch (err) {
        res.render("error", {});
      }
    }
  }
}

module.exports = Templates;
