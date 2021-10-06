const DataModel = require("./data_model")

class Project {
  constructor(id, name, abstract, authors, tags, createdBy) {
    this.id = id
    this.name = name
    this.abstract = abstract
    this.authors = authors
    this.tags = tags
    this.createdBy = createdBy
  }
}

class Projects extends DataModel {
  validate(obj) {
    this.errors = []
    let isAuthorArray = Array.isArray(obj.authors)
    let isTagArray = Array.isArray(obj.tags)

    if (!isTagArray) {
      this.errors.push("Tags should be an array")
    }

    if (!isAuthorArray) {
      this.errors.push("Authors should be an array")
    }

    let isEmpty = Object.keys(obj).filter(
      (key) => obj[key] === null || obj[key] === "" || obj[key] === undefined
    )

    if (isEmpty.length > 0) {
      isEmpty.forEach((item) => this.errors.push(`${item} should not be empty`))
    }

    if (this.errors.length === 0) {
      return true
    } else {
      return false
    }
  }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
  Project,
  Projects,
}
